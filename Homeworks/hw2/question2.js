// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity HW2, Q2

// import necessary methods
const fs = require('fs');   


// defect object
class Defect {

    // initialize constructed
	constructor(bug_id, component, status, resolution, summary, changed, severity, number_comments, os, assignee_id, reporter_id, open_date, closed_date, blocks, depends, username, name){

    // initialize object attributes
	this.bug_id = bug_id;
	this.component = component;
	this.status = status;
	this.resolution = resolution;
	this.summary = summary;
	this.changed = changed;
	this.severity = severity;
	this.number_comments = number_comments;
	this.os = os;
	this.assignee_id = assignee_id;
	this.reporter_id = reporter_id;
	this.open_date = open_date;
	this.closed_date = closed_date;
	this.blocks = [];
	this.depends = [];
	this.username = username; 
	this.name = name;

	}
}	


function loadObjects(){

    /* ... Your implementation here ... */

    // initialize input streams
    let developersData = fs.readFileSync("developers.csv","utf8");
    let blocksData = fs.readFileSync("defect_blocks.csv","utf8");
    let defectsData = fs.readFileSync("defects.csv","utf8");
    let dependsData = fs.readFileSync("defect_depends.csv","utf8");

    // create output dict
	var outputArray = [];

    // create hashtable to store names and usernames
	var userDict = {};
    // split data by row
	developersData.split("\n").forEach(row =>{
        // split row by comma
        let columns = row.split(",");
        // add username as key and name as value
        userDict[String(columns[1])] = columns[0];
    });	


    // parses defect CSV by row
    defectsData.split('\n').forEach(row => {

        // splits each row by commas
        var currentRow = row.split(',');

        // create object instance
        var defectObj = new Defect();

        // assign object attributes to comma parsed list's index
        defectObj.bug_id            = currentRow[0];
        defectObj.component         = currentRow[1];
        defectObj.status            = currentRow[2];
        defectObj.resolution        = currentRow[3];
        defectObj.summary           = currentRow[4];
        defectObj.changed           = currentRow[5];
        defectObj.severity          = currentRow[6];
        defectObj.number_comments   = currentRow[7];
        defectObj.os                = currentRow[8];
        defectObj.assignee_id       = currentRow[9];
        defectObj.reporter_id       = currentRow[10];
        defectObj.open_date         = currentRow[11];
        defectObj.closed_date       = currentRow[12];
        defectObj.username          = currentRow[13];

        // if the username if not empty and exists in userDict assign its value in the dict
        // to defect object's name attribute
        // if not, then assign name to null
        if (defectObj.username != '' && userDict[defectObj.username] != ''){
            defectObj.name = userDict[defectObj.username];
        }
        else{
            defectObj.name = null;
        }

        // add object to array
        outputArray.push(defectObj);

    });

    // parses blocks CSV by row
    blocksData.split('\n').forEach(row => {

        // splits each row by comma
        let currentRow = row.split(',');
        
        // loops through objects, checks if bug_id matches currentRow's 'from' ID
        // if it does then it appends the blocked bug_id to the objects blocks list attribute
        for (let i = 0; i<outputArray.length; i++){
            if(outputArray[i].bug_id == currentRow[0]){
                outputArray[i].blocks.push(currentRow[1]);
            }
        }

    });


    // parses depends CSV by row
    dependsData.split('\n').forEach(row => {

        // splits each row by comma
        let currentRow = row.split(',');
        
        // loops through objects, checks if bug_id matches currentRow's 'from' ID
        // if it does then it appends the depends bug_id to the objects depends list attribute
        for (let i = 0; i<outputArray.length; i++){
            if(outputArray[i].bug_id == currentRow[0]){
                outputArray[i].depends.push(currentRow[1]);
            }
        }

    });

    return outputArray;
	
}


// QUERIES:

function query1(defects){
    /* Your implementation here */

    // filetring through array elements, checking if status and resolution attributes
    // are RESOLVED or FIXED, a new array is created with the amount of found elements,
    // then I compute the arrays length using the .length method
    var solvedNum = defects.filter(function(elem){

        if (elem.status == 'RESOLVED' && elem.resolution == 'FIXED'){
            return true;
        }

    }).length

    // return length of array, which is the number of RESOLVED and FIXED objects
    return solvedNum;
}

function query2(defects){

    // filetring through array elements, checking if 'buildbot'
    // is in the summary attribute
    var defectsNum = defects.filter(function(elem){

        // convert summary element to lowercase
        var currSummary = elem.summary.toLowerCase();

        if (currSummary.includes("buildbot")){
            return true;
        }

    }).length

    // return length of array, which is the number objects with 'buidbot'
    // in the summary attribute
    return defectsNum;
}

function query3(defects){
    /* Your implementation here */

    // save total number of objects in the array
    const totalObjs = defects.length;

    // filetring through array elements, checking if status is not 'RESOLVED',
    // creates a new array with true values where above case is satisfied
    var backlogNum = defects.filter(function(elem){

        if (elem.status != 'RESOLVED'){
            return true;
        }

    }).length

    // return percentage between total and backlogged defects
    return (backlogNum/totalObjs)*100;
}

function query4(defects){
    /* Your implementation here */

    // create a dictionary for the components and their counts
    var componentDict = {};
    
    // add each component to the dictionary and initialize count to zero
    for (let i = 0; i<defects.length; i++){
        if (!(defects[i].component in componentDict)){
            componentDict[defects[i].component] = 0;
        }
    }

    // increment the value of each component if it is found
    // in the defects array
    for (let i = 0; i<defects.length; i++){
        if (defects[i].component in componentDict){
            componentDict[defects[i].component] += 1
        }
    }

    // initialize variables to find the key with the highest value
    var maxKey;
    var maxVal = 0;

    // loop through keys and values and store they key with the biggest value
    for (const [key, value] of Object.entries(componentDict)) {
        if (value > maxVal){
            maxVal = value;
            maxKey = key;
        }
    }

    // return the key that has the biggest value
    return maxKey;
}

function query5(defects){
    /* Your implementation here */

    // create a dictionary for the developers and their fix counts
    var devDict = {};
    
    // add each dev to the dictionary and initialize count to zero
    for (let i = 0; i<defects.length; i++){
        if (!(defects[i].username in devDict)){
            devDict[defects[i].username] = 0;
        }
    }

    // increment the value of each dev if they RESOLVED and FIXED
    // a Documentation defect
    for (let i = 0; i<defects.length; i++){
        if (defects[i].status == 'RESOLVED' && defects[i].resolution == 'FIXED' && defects[i].component == 'Documentation'){
            devDict[defects[i].username] += 1
        }
    }

    //initialize array of most contributed devs
    var devDocumentationContrib = [];

    // initialize variables to find the key with the highest value
    var maxKey;
    var maxVal = 0;

    // loop through keys and values and store they key with the biggest value
    for (const [key, value] of Object.entries(devDict)) {
        if (value > maxVal){
            maxVal = value;
            maxKey = key;
        }
    }

    // add highest contributed dev to list
    devDocumentationContrib.push(maxKey);

    // reset the highest contributing dev's value in the dict to zero
    devDict[maxKey] = 0;

    // reset maxKey and maxVal variables
    maxKey = '';
    maxVal = 0;

    // loop through keys and values and store they key with the biggest value
    for (const [key, value] of Object.entries(devDict)) {
        if (value > maxVal){
            maxVal = value;
            maxKey = key;
        }
    }

    // add second highest contributing dev to list
    devDocumentationContrib.push(maxKey);

    // return array of the top two devs that most contributed to documentaion
    return devDocumentationContrib;

}

function query6(defects){
    /* Your implementation here */

    // this variable will hold the initial bug_id of the iniutial blocker
    var initialBlock;

    // this array will hold the chain of other blockages
    var otherBlocks;

    // this function just helps with returning the object that corresponds
    // to the inputted bug_id
    function findBlock(id){
        for (let i = 0; i<defects.length; i++){
            if (defects[i].bug_id == id){
                return defects[i];
            }
        }
    }
    
    // loop through all defect objects
    for (let i = 0; i<defects.length; i++){

        // for every object, reset the otherBlocks array
        otherBlocks = [];

        // if the current object has blocks
        if (defects[i].blocks.length != 0){
            // assign the bug id of the current object to the initialBlock variable
            initialBlock = defects[i].bug_id;
            // append the defect that ID of the defect that is being blocked to the array
            otherBlocks.push(defects[i].blocks[0]);

            // use the findBlock function to get the blocked defect's object
            var nextObj = findBlock(otherBlocks[0]);
            // check if the current blocked object has other blocks
            if (nextObj.blocks != 0){
                // if it does, add those blocks to the list
                otherBlocks.push(nextObj.blocks[0]);
                
                // repeat the above process again to see if there are more blocks in the already blocked objects
                var nextObj = findBlock(otherBlocks[1]);
                if (nextObj.blocks != 0){
                    otherBlocks.push(nextObj.blocks[0]);

                    // repeat the above process again to see if there are more blocks in the already blocked objects
                    var nextObj = findBlock(otherBlocks[2]);
                    if(nextObj.blocks != 0){
                        otherBlocks.push(nextObj.blocks[0])

                        // repeat the above process again to see if there are more blocks in the already blocked objects
                        var nextObj = findBlock(otherBlocks[3]);
                        if (nextObj.blocks != 0){
                            otherBlocks.push(nextObj.blocks[0])
                        }
                    }
                }

            }

        }

        // loop through the array of blocked defects and
        // compare them to the initial blocker's ID stored
        // in the initialBlock variable
        for (let i = 0; i<otherBlocks.length; i++){
            if (initialBlock == otherBlocks[i]){
                // return true if the initial block exists in the otherbloicks array
                // this means that there is a circular dependency
                return true;
            }
        }

    }

    // if true isn't returned before, then it will return false,
    // meaning that there are no circular dependencies
    return false;

}


let defects = loadObjects();
query1(defects);
query2(defects);
query3(defects);
query4(defects);
query5(defects);
query6(defects);


