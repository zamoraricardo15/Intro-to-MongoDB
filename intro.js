
// Assignment: Intro to MongoDB
// For This section, we want you to do the following operations in a MongoDB database. Work with a partner or a small group so everyone gets a chance to collaborate and work as a team. For some of these, you may have to refer to MongoDB's operator documentation. This is one of the most important assignments in this section, make sure you answer all questions and take notes for future assignments.

// Create a database called 'my_first_db'.
use my_first_db

// Create students collection.
db.createCollection("students")

// Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
// Create 5 students with the appropriate info.
db.students.insert({name:"Roger", home_state:"Switzerland", lucky_number:27, birthday:{month:7, day:14, year:1975}})
db.students.insert({name:"Margaret", home_state:"United Kingdom", lucky_number:7, birthday:{month:7, day:2, year:1995}})
db.students.insert({name:"Angela", home_state:"Germany", lucky_number:2, birthday:{month:12, day:4, year:1943}})
db.students.insert({name:"Clint", home_state:"United States", lucky_number:72, birthday:{month:1, day:25, year:1967}})
db.students.insert({name:"Sean", home_state:"Scottland", lucky_number:77, birthday:{month:8, day:4, year:1987}})

// Get all students.
db.students.find()
// Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find({$or:[{home_state:"United States"},{home_state:"United Kingdom"}]})

// Get all students whose lucky number is:
// greater than 3
db.students.find({lucky_number: {$gt:3}})

// less than or equal to 10
db.students.find({lucky_number: {$lte:10}})

// between 1 and 9 (inclusive)
db.students.find({ $and: [{lucky_number: {$gte:1}}, {lucky_numbers: {$lte:9}}]})

// Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.update({},{$set:{interests:["coding", "brunch", "MongoDB"]}},{multi:true})

// Add some unique interests for each particular student into each of their interest arrays.
db.students.update({name:"Roger"},{$push:{interests:"tennis"}})
db.students.update({name:"Margaret"},{$push:{interests:"politics"}})
db.students.update({name:"Angela"},{$push:{interests:"politics"}})
db.students.update({name:"Clint"},{$push:{interests:"cinema"}})
db.students.update({name:"Sean"},{$push:{interests:"cinema"}})

// Add the interest 'taxes' into someone's interest array.
db.students.update({name:"Roger"},{$push:{interests:"taxes"}})

// Remove the 'taxes' interest you just added.
db.students.update({name:"Roger"},{$pull:{interests:"taxes"}})

// Remove all students who are from California (or Washington).
db.students.remove({$or:[{home_state:"United States"},{home_state:"United Kingdom"}]})

// Remove a student by name. 
db.students.remove({name:"Angela"})

// Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number:{$gt:5}},true)

// Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.insert({},{$set:{number_of_belts:0}},{multi:true})

// Increment this field by 1 for all students in Arizona.
db.students.update({home_state:"United States"},{$inc:{number_of_belts:1}},{multi:true})

// Rename the 'number_of_belts' field to 'belts_earned'
db.students.update({home_state:"United States"},{$inc:{number_of_belts:1}},{multi:true})

// Remove the 'lucky_number' field.
db.students.update({},{$unset:{lucky_number:""}},{multi:true})

// Add a 'updated_on' field, and set the value as the current date.
db.students.update({},{$currentDate:{"updated_on":{$type:"date"}}},{multi:true})