let app = {
    pending: [],
    done: [],
    nextId: 0
};

class Todo {
    constructor(id, name, status){
        this.id = id;
        this.name = name;
        this.status = status;
    }
}

function createToDo(){
    // get the text from the input field
    let textInput = $("#txtTodo").val();
    $("#txtTodo").val('');
    // console.log the text
    console.log(textInput);

    let t = new Todo(app.nextId, textInput, 0);
    app.nextId += 1;

    // push the text to the list
    app.pending.push(t);
    // display the todo
    displayTodo(t);
}

function toDoDone(){
    console.log(clickedID);

    for(i=0;i<app.pending.length;i++){
        taskID=app.pending[i].id;
        //compare task id against id of task clicked
        if(taskID==clickedID[4]){
            app.pending.splice(i,1);
            console.log('deleted');
            console.log(app.pending);
            break;
        }
    }
}

function displayTodo(){
    $("#pending").empty();
    for(i=0;i<app.pending.length;i++){
      pendingSyntax =`<div class='item' id="task${app.pending[i].id}">${app.pending[i].name}</div>`;  
      if(app.pending[i].status === 0){
          //append syntax to html
          $("#pending").append(pendingSyntax);
        }
    }
}

function init(){
    console.log("To Do App");
    // set events
    $("#btnTodo").click(createToDo);
    $("#txtTodo").keypress(function(e){
        if(e.keyCode == 13){
            createToDo();
        }
    });
    
    // Mark tasks as done
     $("#pending").on("click",".item", function (e){
        console.log('clicked');
        clickedID=this.id;
        toDoDone();
        displayTodo();
  });
}

window.onload = init;

/**
 * jQuery Events:
 * 
 * $("#btnTodo).click(createTodo");
 * 
 * $("#btnTodo").on('click', createTodo);
 * 
 * $("#btnTodo").bind('onclick', createTodo);
 * 
 */