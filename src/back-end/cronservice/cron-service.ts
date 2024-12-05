//TODO: This service is used to configuring a function call periodically
/*
npm install node-cron

const cron = require('node-cron');

*    *    *    *    * 
┬    ┬    ┬    ┬    ┬
│    │    │    │    │
│    │    │    │    │
│    │    │    │    └─ Day of the Week (0 - 7) (Sunday=0 or 7)
│    │    │    └────── Month (1 - 12)
│    │    └─────────── Day of the Month (1 - 31)
│    └──────────────── Hour (0 - 23)
└───────────────────── Minute (0 - 59)


// Schedule expression: '0 * * * *' runs at minute 0 of every hour
const scheduleExpression = '0 * * * *'; // Configurable schedule

cron.schedule(scheduleExpression, () => {
  console.log('Running a task every hour');
  myFunction();
});

function myFunction() {
  // Your function code here
  console.log('Function is running');
}

*/