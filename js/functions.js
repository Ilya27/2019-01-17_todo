
function addTask(task, id, oldTask) {
    let this_oldTask=oldTask;
    let $btnDelete = $('<a>').addClass('btn btn-danger btn-xs btn-delete-task pull-right').append('<i class="glyphicon glyphicon-trash">');
    let $btnEdit = $('<a>').addClass('btn btn-warning btn-xs  btn-edit-task pull-right').append('<i class="glyphicon glyphicon-pencil">');
    let $text= $('<span>').text(task.title).addClass('single_task')
    numberStatus1 = 0;
    numberStatus2 = 0;
    numberStatus3 = 0;
    $('<li>')
      .appendTo(`[data-status='${task.status}']`)
      .addClass('list-group-item')
      //.text(task.title)
      .append($text)
      .append($btnDelete)
      .append($btnEdit)
      .attr('data-id',id);
    counter_plus(task);
    if(this_oldTask!=undefined){
        counter_minus(this_oldTask)
    }
    
}


function updateTask(task,id){
    $(`[data-id="${id}"] .single_task`).text(task.title);
}

function counter_plus(task){
    mas.push(task.status);
    numberStatus1 = 0;
    numberStatus2 = 0;
    numberStatus3 = 0;
    mas.forEach(element => {
        if (element === 1) {
            numberStatus1++;
        } else if (element === 2) {
            numberStatus2++;
        } else {
            numberStatus3++;
        }
    });
    $counter1.appendTo('#1').text(numberStatus1).addClass('badge');
    $counter2.appendTo('#2').text(numberStatus2).addClass('badge');
    $counter3.appendTo('#3').text(numberStatus3).addClass('badge'); //переделать
}

function counter_minus(task) {
    if (task.status === 1) {
        mas.splice([mas.indexOf(task.status)],1);
        numberStatus1--;
    } else if (task.status === 2) {
        mas.splice([mas.indexOf(task.status)], 1);
       numberStatus2--;
    } else {
        mas.splice([mas.indexOf(task.status)], 1);
        numberStatus3--;
    }
    if (numberStatus1 === 0 && numberStatus2 === 0 && numberStatus3 === 0) {
        mas = [];
        $counter1.remove();
        $counter2.remove();
        $counter3.remove();
        localStorage.clear();
    } else{
        $counter1.appendTo('#1').text(numberStatus1).addClass('badge');
        $counter2.appendTo('#2').text(numberStatus2).addClass('badge');
        $counter3.appendTo('#3').text(numberStatus3).addClass('badge');
    }
}