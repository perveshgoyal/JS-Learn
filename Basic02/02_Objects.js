const tinderuser = new Object();
tinderuser.id = "123abc";
tinderuser.name = "pervesh"
tinderuser.isLoggedIn = false
//console.log(tinderuser)
const regularUser = {
    email: "Samy@gmail.com",
    fullname: {
        userfullname:{
            FirstName: "Pervesh",
            LastName: "Goyal"

        }
    }
};
//console.log(regularUser.fullname.userfullname.FirstName)
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "c", 6: "d" };
//const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 ={...obj1,...obj2,...obj3}
//console.log(obj4)
const users= [
    {
        id: 1,
        email: "pervesh@gmail.com"

    },
    {
        id: 2,
        email: "pervesh2@gmail.com"

    }
]
users[1].email;
// console.log(tinderuser)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));
const course = {
    coursename: "JS hindi",
    price: "999",
    courseinst : "Pervesh"
}
const {courseinst:inst} = course
console.log(inst);
// {
//     "name" :"Pervesh",
//     "course" :"JS Hindi",
//     "price" : "free"
// }
// [
//     {},
//     {}
// ]