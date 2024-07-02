// singleton
// Object.create

// object literals
const mySym = Symbol("Key1")
const jsuser = {
    name: "Hitesh",
    "fullname": "Pervesh Goyal",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "pervesh@gmail.com",
    IsLoggedIn: false,
    LastLoginDays:["Monday","Saturday"]
}
//console.log(jsuser.email)
//console.log(jsuser["email"])
//console.log(jsuser["fullname"])
//console.log(jsuser[mySym])
jsuser.email = "Hitesh@yahoo.com"
//Object.freeze(jsuser)
jsuser.email = "hitesh@gmail.com"
//console.log(jsuser)
jsuser.greeting = function(){
    console.log("Hello user")
}
jsuser.greeting2 = function(){
    console.log(`Hello user,${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greeting2())