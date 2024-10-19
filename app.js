var user1 = [
    {
        name: "ali",
        fName: "ahmed",
        age: "20",
        userId: "xxx",
        contact: "0300000"
    },
    {
        name: "raza",
        fName: "hasnain",
        age: "25",
        userId: "xxx",
        contact: "0300000"
    },
    {
        name: "fahad",
        fName: "owais",
        age: "20",
        userId: "xxx",
        contact: "0300000"
    }
]


for (var i = 0; i < user1.length; i++) {
    console.log(user1[i]);
    delete user1[i]?.fName;
    console.log(user1[i]);
}
console.log(user1[i]);