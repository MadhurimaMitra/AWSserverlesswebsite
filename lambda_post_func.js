var AWS = require('aws-sdk');

var docClient = new AWS.DynamoDB.DocumentClient;

var tableName = "attendee-details";

exports.handler = (event, context, callback) => {

    var params = {
        TableName : tableName,
        Item : {
            "EmailID" : event.EmailID,
            "FirstName" : event.FirstName,
            "LastName" : event.LastName,
            "ContactNo" : event.ContactNo,
            "Age" : event.Age
        }
    }
    docClient.put(params, function(err, data){
        if(err) {
            callback(err);
        }
        else {
            callback(null, "Success");
        }
    })
};