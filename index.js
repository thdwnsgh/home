const doArr = [];

function add() {
    const todo = document.querySelector("input[name=todo").value;
    const executioner = document.querySelector("input[name=executioner").value;

    const Createtodo = {
        todo: todo,
        executioner: executioner
    };

    doArr.push(Createtodo);

    console.log(doArr);
    

}

function enroll() {

    const json = JSON.stringify(doArr);
    localStorage.setItem("todo" , json)
}

function select() {

    const td = localStorage.getItem("todo");

    const arr = JSON.parse(td);

    console.log(arr);
    
    for(let Createtodo of arr){
        console.log(Createtodo);

        const x = document.createElement("h3");
        x.innerText = Createtodo.executioner +"/"+ Createtodo.todo;

        const dt = document.querySelector("#abc");
        dt.appendChild(x);

    }
}