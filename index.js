const express = require('express');
const app = express();
// sample scooter data
// In a real application, this would come from a database
const scooters = [
    {
      id: 123456,
      type: 'Scooter',
      isLocked: true,
      currentSpeed: 5,
      battery: 100,
      status: 'Parking',
      location: '3.142,.012',
      lastUpdated: '2019-07-02 9:00AM'
    },
    {
      id: 234567,
      type: 'Scooter',
      isLocked: false,
      currentSpeed: 5,
      battery: 50,
      status: 'Moving',
      location: '2.125,114',
      lastUpdated: '2019-07-02 10:00AM'
    },
    {
      id: 345678,
      type: 'Scooter',
      isLocked: true,
      currentSpeed: 5,
      battery: 100,
      status: 'Idling',
      location: '4.125,114',
      lastUpdated: '2019-07-02 10:00AM'
    },
    {
      id: 466789,
      type: 'Scooter',
      isLocked: true,
      currentSpeed: 5,
      battery: 75,
      status: 'Towing',
      location: '5.125,114',
      lastUpdated: '2019-07-02 10:00AM'
    },
    {
      id: 789432,
      type: 'Scooter',
      isLocked: true,
      currentSpeed: 5,
      battery: 0,
      status: 'Towing',
      location: '5.125,114',
      lastUpdated: '2019-07-02 10:00AM'
    }
  ];
  
// Define the endpoint to get all the scooters
// The request object contains information about the http request to trigger this scooters endpoint
// the response object is used to send a response back upon http request from client side
app.get("/api/scooters", (req, res, next) => {
    res.json(scooters);
});

// Starting the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});