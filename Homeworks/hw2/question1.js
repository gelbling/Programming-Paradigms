// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity HW2, Q1


// initialize users array
var users = [
    {id: 1, name: "Marta", height: 1.74, weight: 59}, 
    {id: 2, name: "Josh", height: 1.80, weight: 88},
    {id: 3, name: "Achilles", height: 1.68, weight: 63}, 
    {id: 4, name: "Julius", height: 1.93, weight: 97},
];


function findUserById(users, id){
    /*
    for(let i = 0; i < users.length; i++){
        if(users[i].id == id)
            return users[i].name; // notice it returns the name property
    }
    return null; // notice it returns null if the element is not found 
    */

    // use find to return user's, else return null
    return (users.find(elem=> elem.id === id) || {name:null}).name;

}


function computeBMIs(users){
    
    /*
    var bmiArray = [];
    for(let i = 0; i < users.length; i++){
        let bmi = users[i].weight/(users[i].height*users[i].height);
        bmiArray.push(bmi);
    }
    return bmiArray;
    */

    // use map to calculate and return BMIs of the data of each user
    // in the users array
    return users.map(user=> user.weight/(user.height*user.height));

}
