import { MongoClient, Db, ListDatabasesResult } from "mongodb";

//TODO: Securing the connection string would be nice.
const MONGO_URI: string = "mongodb://localhost:27017/";
const DB_NAME: string = "baywe-db";
const COLLECTIONS: string[] = ["weather-current", "weather-daily"];

//This is singleton pattern in TS according to the internet.
let client: MongoClient|undefined = undefined;

export async function connectToMongoDb(): Promise<MongoClient|undefined> {
    try {

        if (!client) {
            client = new MongoClient(MONGO_URI);
            await client.connect();
            console.log("Connected to MongoDB")        
        }

        return await prepareDbAndCollections(client, DB_NAME, COLLECTIONS);

    }
    catch(error) {
        console.log("Error while connecting to MongoDB: ", error);
        throw error;
    }
}

export async function getMongoDb(): Promise<Db> {
    if(!client) {
        connectToMongoDb();
    }

    return client?.db(DB_NAME)?? (await new MongoClient(MONGO_URI).connect()).db(DB_NAME);
    
}

export async function closeMongoDbConnection(): Promise<void> {
    if (client) {
        try {
            await client.close();
            console.log("MongoDB connection closed.");
            
        } catch (error) {
            console.error("Error while closeMongoDbConnection()", error);
        }
    }
}

// MongoDB automatically creates the collections and database when it is first inserted.
// However, I prefer to have the names before when the app is started so the names could be strictly enforced.
export async function prepareDbAndCollections(client: MongoClient, dbName: string, collections: string[]): Promise<MongoClient|undefined> {
    try {
        const dbList: ListDatabasesResult = await client.db().admin().listDatabases();
        const isDbExist: boolean = dbList.databases.some(db => db.name == dbName);
        if (isDbExist == false) {
            //Create the db
            const db = client.db(dbName);
            console.log("Database does not exist, so new one created")
            //Create the collections
            for (const collectionName of collections) {
                await db.createCollection(collectionName);
                console.log("Collection created: ", collectionName)
            }
        }

        return client;
               
    } catch (error) {
        console.error("An error occured in creating db and collections, ", error);
    }
}

