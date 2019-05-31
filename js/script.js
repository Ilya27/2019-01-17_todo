/*ET 80 minutes*/ 
/*AT 91 minutes*/

/*ET 70 minutes*/
/*AT 100 minutes*/

(()=>{
  'use strict'

  $modalAddTask.on('shown.bs.modal', {form: $modalAddTask}, showModalHandler);

  $formAddTask.on('submit',addFormSubmitHandler);

  $removeButton.on('click',removeAllHandler);

  $('body').on('click', '.btn-delete-task', deleteTask);
  $('body').on('click', '.btn-edit-task', editTaskHandler);

  $('body').on('click', '.single_task', moreInfoHandler);

  $modalEditTask.on('shown.bs.modal', {form: $modalEditTask}, showModalHandler);
  $formEditTask.on('submit',editFormSubmitHandler);

  for (var key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      var task = JSON.parse(localStorage[key]);
    } else {
      continue;
    }
    addTask(task,key);
  }
})();
