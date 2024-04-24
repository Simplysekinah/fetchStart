let show = document.getElementById("show")
let completeDo = document.getElementById("complete")
let notcompleteDo = document.getElementById("incomplete")
let list;
fetch("https://dummyjson.com/todos").then((response)=>response.json()).then((data)=>{
list = data.todos
// console.log(data.todos);
data.todos.forEach(element => {
show.innerHTML += `<div class="card w-50 shadow border m-3">
                        <h1>${element.completed}</h1>                       
                        <h1>${element.todo}</h1>
                        <h1>${element.id}</h1>
                        <h1>${element.userId}</h1>
                    </div>`                   
});
// show.innerHTML= `<ul>${todosList}</ul>`

})
show.style.display = "none"
function alltodo(){
    show.style.display = "block"
}
function complete(){
    // data.todo that the completed is true should display
    let doList = list.filter((e) => e.completed == true)
    console.log(doList)
    for (let index = 0; index < doList.length; index++) {
        const element = doList[index];
        completeDo.innerHTML += `<div class="inside">
                                    <h1>${element.completed}</h1>                       
                                    <h3>${element.todo}</h3>
                                    <h2>${element.id}</h2>
                                    <h3>${element.userId}</h3>
                                </div>`
    }
}
function incomplete(){
    // data.todo that the completed is true should display
    let notdoList = list.filter((e) => e.completed == false)
    console.log(notdoList)
    for (let index = 0; index < notdoList.length; index++) {
        const element = notdoList[index];
        notcompleteDo.innerHTML += `<div class="inside">
                                    <h1>${element.completed}</h1>                       
                                    <h3>${element.todo}</h3>
                                    <h2>${element.id}</h2>
                                    <h3>${element.userId}</h3>
                                </div>`
    }
}