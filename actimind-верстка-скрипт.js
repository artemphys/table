
$("#addInfoButton").click(function(){
    if ($('.inputInfo input').val() == '') {
        alert('Все поля должны быть заполнены!');
    }
    else {
        $.addCell();
    }
});
$.addCell = function(){
    $('.personalInfoTable').append("<th>"+$('#Firstname').val()+"</th>");
}