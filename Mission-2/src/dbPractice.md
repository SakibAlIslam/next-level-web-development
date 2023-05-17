db.practice.find({ 
    gender: 'Female' , 
    age: { $nin : [18, 22, 30, 27 , 50, 48, 70] } ,
    interests: { $in : ['Gaming', 'Travelling'] },
}).project({gender: 1, age: 1, interests: 1})


////////////////// AND.js //////////////////

db.practice.find({ $and: [
        { gender: 'Female' },
        { age: { $lt: 30, $gte: 18 } },
        { "skills.name": "JAVASCRIPT" }
    ]
})
.project({gender: 1, age: 1, "skills.name": 1})





// db.practice.find({
//     age: { $ne: 18 },
//     age: { $gt: 15} // can use implicit And
// }).project({age: 1}).sort({ age: 1 })

// can use Explicit And
db.practice.find({
    $and: [
        { age: { $ne: 18 } },
        { age: { $gt: 15 } } 
    ]
}).project({age: 1}).sort({ age: 1 })




///////////////////////////// OR.js /////////////////////////////

db.practice.find({ $or: [
        // {gender: 'Female'},
        // {age: {$lt: 30} },
        {"skills.name": "JAVASCRIPT"},
        {"skills.name": "GO"}
    ] 
}).project({
    "skills.name": 1
})

db.practice.find({
    "skills.name": {
        $in: ["JAVASCRIPT", "PYTHON"]
    }
}).project({
    "skills.name": 1
})








////////////////Explicit AND, Implicit AND/////////////////

// db.practice.find({
//     age: { $ne: 18 },
//     age: { $gt: 15} // can use implicit And
// }).project({age: 1}).sort({ age: 1 })

// can use Explicit And
db.practice.find({
    $and: [
        { age: { $ne: 18 } },
        { age: { $gt: 15 } } 
    ]
}).project({age: 1}).sort({ age: 1 })





/////////// ELEMENT QUERY ///////////////

//exists query
db.practice.find({ phone: { $exists: true } })

//type query
db.practice.find({ friends: { $type: 'array' } }).project({friends: 1})

//Array query operator
db.practice.find({ skills: { $size: 0 } }).project({skills: 1}) //empty document (ARRAY)
db.practice.find({ skills: { $size: 1 } }).project({skills: 1}) //1 document (ARRAY)





/////////////////// ARRAY QUERY ///////////////////////

//array element search - index - position wise
// db.practice.find({ "interests.1": 'Travelling' })
// .project({interests: 1})

//exactly matching....
// db.practice.find({ interests: ["Cooking", "Travelling", "Reading"] })
//     .project({ interests: 1 })

//I don't know the position of my element, use -> $all....
//$all operator is equal to $and
// db.practice.find({
//     interests: { $all: ["Travelling", "Reading", "Cooking"] }
// })
//     .project({ interests: 1 })

//$and......
// db.practice.find({
//     $and: [{ 'interests': 'Travelling' }, { 'interests': 'Cooking' }]
// })
//     .project({ interests: 1 })

//ARRAY END////////////////////////////////



//OBJECT START////////////////////////////
// $elemMatch operator.....
db.practice.find({
    skills: {
        $elemMatch: { name: 'JAVA', level: 'Intermidiate' }
    },
})
    .projection({ skills: 1 })











/////////////////// - UPDATE QUERY - /////////////////////

// db.practice.updateOne(
//     {kake update korte chai},
//     {ki update korte chai},
//     {option}
// )
//////////////////  7.7 module - START   ////////////////////////////
//find what to update
db.practice.find({_id: ObjectId("6406ad65fc13ae5a400000c7")})
   .sort({_id:-1})
   .limit(100)

//update using set, which is add/Insert new field in the array of object
//$set replace previous fully - good for primitive data...

db.practice.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $set: {
            country: 'Bangladesh',
            skills: ['Motion Graphics'],
            occupation: 'Designer'
        }
    }
)


//$addToSet: update data not replace....
//$each operator => for pushing data to multiple data, as primitive in an array 
db.practice.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $addToSet: {
            skills: {
                $each: ['Web Development', 'App Development']
            }
        }
    }
)


//$push operator: PUSH allows us to duplicate entry data....
db.practice.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $push: {
            skills: {
                $each: ['Web Development', 'App Development']
            }
        }
    }
)


//////////////////  7.7 module - END   ////////////////////////////




//////////////////  7.8 module - START ////////////////////////////

//unset operator -  just remove the field fully...!!!!
db.practice.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $unset: {
            occupation: 1
        }
    }
)

//$pop: last element delete.....
db.practice.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $pop: {
            skills: 1 //last array element removed 
        }
    }
)

//$pull: specific ONE data remove
db.practice.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $pull: {
            skills: 'Motion Graphics' //specific this element will be removed 
        }
    }
)

//$pull: specific ALL(provided) data remove
db.practice.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $pullAll: {
            languages: ['Czech', 'Gujarati'] //specific multiple element will be removed 
        }
    }
)







///////////////// - DELETE QUERY - ////////////////////

db.practice.find({_id: ObjectId("6406ad65fc13ae5a400000c6")})
   .projection({})
   .sort({_id:-1})
   .limit(100)

db.practice.deleteOne({
    _id: ObjectId("6406ad65fc13ae5a400000c6")
})

//create collection....
db.createCollection("test");

db.test.insertOne({
    name: 'Md. Sakib Al Islam'
})

db.test.find({
    name: 'Md. Sakib Al Islam'
})

//delete this test Collection
db.test.drop()



