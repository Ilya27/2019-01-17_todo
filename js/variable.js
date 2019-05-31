var  $formAddTask = $('#formAddTask');

var $modalAddTask =$('#modalAddTask');

var $formEditTask = $('#formEditTask');

var $modalEditTask = $('#modalEditTask');

var $removeButton = $('#remove');

var $my_ul = $('.list-group');

var $counter1 = $('<span>'),
    $counter2 = $('<span>'),
    $counter3 = $('<span>');

var $p1 = $('<p>').attr('id',1);
var $p2 = $('<p>').attr('id', 2);
var $div = $("<div>").addClass('text');
var mas=[];

var numberStatus1 = 0,
    numberStatus2 = 0,
    numberStatus3 = 0;

var $data_picker=$('.data-picker').datepicker({
    format: "dd/mm/yyyy"
});