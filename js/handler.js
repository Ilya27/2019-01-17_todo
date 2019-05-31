
  function showModalHandler(event) {
  $('[name="title"]',event.data.form).focus();
}

function addFormSubmitHandler(event) {
  event.preventDefault();
  let task ={
    title: $('[name="title"]',this).val(),
    status: +$('[name="status"]').val(),
    data: $('[name="data"]', this).val() || "",
    description: $('.text_area', this).val() || ""
  }

  let id=new Date().getTime();
  localStorage.setItem(id,JSON.stringify(task));
  addTask(task,id);
  $modalAddTask.modal('hide');
  this.reset();
}

function removeAllHandler(event){
  $my_ul.find('li').remove();
  mas=[];
  $counter1.remove();
  $counter2.remove();
  $counter3.remove();
  localStorage.clear();
}

function deleteTask(event){
  event.preventDefault();
  let $parent=($(this).parents('[data-id]')),
  id=$parent.attr('data-id'),
  task = JSON.parse(localStorage.getItem(id));
  $parent.remove();
  localStorage.removeItem(id);
  counter_minus(task);
}

function editTaskHandler(event){
  event.preventDefault();
  let $parent = ($(this).parents('[data-id]')),
    id = $parent.attr('data-id');
  
  $modalEditTask.modal('show');
  let task = JSON.parse(localStorage.getItem(id));
  
  for (let key in task) {
    $formEditTask.find(`[name="${key}"]`).val(task[key]);
  }
  $formEditTask.find(`[name="id"]`).val(id);
}

function editFormSubmitHandler (event){
  event.preventDefault();
  let task={
    title:$('[name="title"]',this).val(),
    status: +$('[name="status"]', this).val(),
  }
  let id =$('[name="id"]',this).val();
  let oldTask=JSON.parse(localStorage.getItem(id));
  if (task.status === oldTask.status){
    updateTask(task,id);
  }else{
    $(`[data-id="${id}"]`).remove();
    addTask(task, id, oldTask);
  }
  localStorage.setItem(id,JSON.stringify(task))
  $modalEditTask.modal('hide')
}

function moreInfoHandler(event){
  event.preventDefault();
  let $parent = ($(this).parents('[data-id]')),
  id = $parent.attr('data-id');
  let task=JSON.parse(localStorage.getItem(id));
  $div.appendTo($parent);
  $p1.appendTo($div).text(task.data);
  $p2.appendTo($div).text(task.description);
  $div.slideToggle(500, function () {
    if ($div.css('display') === "none") {
        $div.removeAttr('style');
    }
  });
}