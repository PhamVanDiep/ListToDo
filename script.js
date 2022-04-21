let add_btn = document.getElementById('add-btn')
let new_task_input = document.getElementById('new-task')
let list_task = document.getElementById('list_task')

let task_names = document.getElementsByClassName('task-name')
let rename_tasks = document.getElementsByClassName('rename-task')
let edit_btns = document.getElementsByClassName('edit-btn')
let save_btns = document.getElementsByClassName('save-btn')
let delete_btns = document.getElementsByClassName('del-btn')
let cancel_btns = document.getElementsByClassName('cancel-btn')
let task = document.getElementsByClassName('task')

let nums = task_names.length

// Add new Activity
add_btn.addEventListener('click', function(){
    let value = new_task_input.value
    if(value == null) alert('Input new task!');
    else{
        let tags = list_task.innerHTML
        tags += '<div class="task btn-vertical-group">'
        tags += '<div class="task-name-wrap">'
        tags +=    '<span class="task-name">' + value + '</span>'
        tags +=    '<input type="text" class="rename-task">'
        tags += '</div>'
        tags += '<div class="tools-wrap">'
        tags +=    '<div class="edit-task-name-wrap">'
        tags +=        '<button class="glyphicon glyphicon-edit main-btn edit-btn"></button>'
        tags +=        '<button class="glyphicon glyphicon-ok main-btn save-btn" style="display: none;"></button>'
        tags +=    '</div>'
        tags +=    '<div class="delete-task-name-wrap">'
        tags +=        '<button class="glyphicon glyphicon-trash main-btn del-btn"></button>'
        tags +=        '<button class="glyphicon glyphicon-remove main-btn cancel-btn" style="display: none;"></button>'
        tags +=    '</div>'
        tags +='</div>'
        tags +='</div>'
        list_task.innerHTML = tags
        new_task_input.value = null
        nums ++
        console.log(nums)
        refresh()
        editTask()
        deleteTask()
    }
});

function refresh() {
    task_names = document.getElementsByClassName('task-name')
    console.log(task_names.length)
    rename_tasks = document.getElementsByClassName('rename-task')
    edit_btns = document.getElementsByClassName('edit-btn')
    save_btns = document.getElementsByClassName('save-btn')
    delete_btns = document.getElementsByClassName('del-btn')
    cancel_btns = document.getElementsByClassName('cancel-btn')
    task = document.getElementsByClassName('task')
}

$(document).ready(function () {
    deleteTask()
    editTask()
});

// Delete Task
function deleteTask() {
    for (let index = 0; index < nums; index++) {
        delete_btns[index].onclick = function(){
            delete_btns[index].style.display = 'none'
            edit_btns[index].style.display = 'none'
            cancel_btns[index].style.display = 'inline-block'
            save_btns[index].style.display = 'inline-block'
            
            save_btns[index].onclick = function(){
                task[index].style.display = 'none'
            }
    
            cancel_btns[index].onclick = function(){
                delete_btns[index].style.display = 'inline-block'
                edit_btns[index].style.display = 'inline-block'
                cancel_btns[index].style.display = 'none'
                save_btns[index].style.display = 'none'
            }
        }
    }
}

// Edit Task
function editTask() {
    for (let index = 0; index < nums; index++) {
        edit_btns[index].onclick = function(){
            task_names[index].style.display = 'none'
            rename_tasks[index].style.display = 'inline-block'
            delete_btns[index].style.display = 'none'
            edit_btns[index].style.display = 'none'
            cancel_btns[index].style.display = 'inline-block'
            save_btns[index].style.display = 'inline-block'
    
            save_btns[index].onclick = function(){
                let value = rename_tasks[index].value
                task_names[index].innerHTML = value
                task_names[index].style.display = 'table-cell'
                rename_tasks[index].style.display = 'none'
                delete_btns[index].style.display = 'inline-block'
                edit_btns[index].style.display = 'inline-block'
                cancel_btns[index].style.display = 'none'
                save_btns[index].style.display = 'none'
            }
    
            cancel_btns[index].onclick = function(){
                task_names[index].style.display = 'table-cell'
                rename_tasks[index].style.display = 'none'
                delete_btns[index].style.display = 'inline-block'
                edit_btns[index].style.display = 'inline-block'
                cancel_btns[index].style.display = 'none'
                save_btns[index].style.display = 'none'
            }
        }
    }
}