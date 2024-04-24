let table = document.getElementById("table")
let user = document.getElementById("user")
let emails = document.getElementById("emails")
let titles = document.getElementById("titles")
let imageLink = ""
let userName;
fetch("https://dummyjson.com/users").then((Response)=> Response.json()).then((data)=>{
    // console.log(data)
    // console.log(data.users);
    userName = data.users
    console.log(userName)
userName.forEach(element => {
user.innerHTML += `
    <div class = "us">
        <img src=${element.image} class = "img">
        <h3>${element.username}</h3>
    </div>
    `
first.innerHTML += `
   <div>
        <h3>${element.firstName}  ${element.lastName}</h3>
    </div>
`
emails.innerHTML += `
    <div>
        <h3>${element.email}</h3>
    </div>
    `
titles.innerHTML += `
    <div>
        <h3>${element.company.title}</h3>
    </div>
    `
// table.innerHTML +=    `<div>
//                           <div>
//                           <h1>Username</h1>
//                           <h3>${element.username}</h3>
//                           </div>
//                             <h3>${element.firstName}  ${element.lastName}</h3>
//                             <h3>${element.email}</h3>
//                             <h3>${element.company.title}</h3>
//                        </div>

//     `
    // console.log(element.username);
    // console.log(element.email);
    console.log(element.company.title);

    // console.log(element.firstName + element.lastName);
});
})

 