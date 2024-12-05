import {MongoClient} from "mongodb";
import { connectToMongoDb, getMongoDb, closeMongoDbConnection, prepareDbAndCollections } from "../../back-end/database/init-mongodb";

export class MongoDBService {
    constructor() {}

    static connectToMongoDb = connectToMongoDb;
    static getMongoDb = getMongoDb;
    static closeMongoDbConnection = closeMongoDbConnection;
    static prepareDbAndCollections = prepareDbAndCollections;
    
}