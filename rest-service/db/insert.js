const mysql = require('mysql');

let connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'rest_api'
});

// connect to the db 
connection.connect();

// create an actor 

let actor = {
    actor_name : 'Ashok Dey',
    actor_bio : "There isn't much about me to say, I'm a hobbyist web designer, pursuing my Bachelor of Technology with Computer Science. In my spare time, I design and develop websites that are simple yet beautiful. Instead of being a part of the rat race, I devote my time on learning something new and try to keep myself updated with the new technologies that are emerging in the area of computation. I love to read stuffs that unfolds the mysteries behind Programming and Computation. Recently I developed a keen interest in Operating Systems.",
    actor_img_url : 'http://ashokdey.in/img/my-pic.png'
};

// insert the data 



// let query = connection.query('insert into actors set ?', actor, (err, result) => {
//     // print the query 
//     console.log(query.sql);
//     if(err) {
//         return console.log(err);
//     }
//     console.log(result);
// });

let query = connection.query('select * from actors', (err, result) => {
    if(err) {
        return console.log(err);
    }
    console.log(JSON.stringify(result, undefined, 2));
});