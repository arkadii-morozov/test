$(function(){
    var name = $('#i_name');
    var email = $('#i_email');
    var btn = $('#send');
    var res = $('.result');
    var str = '';
    var fields = {};

    var fieldsData = {};
    btn.on('click', function(){
        fieldsData['name'] = name.val();
        fieldsData['email'] = email.val();
       $.post('app.php', fieldsData, onAjaxSuccess, "json");

    });

    function onAjaxSuccess(data){
        for (var i = 0; i < data.length; i++){
            for(var key in data[i]) {
                fields[key] = data[i][key];
                str = str + fields[key] + ' ';
            }
        }
        res.html(str);
    }

});

// На сервер будет отправлен запрос страницы http://hostname/ajaxtest.php и указаны два параметра.
// После получения ответа от сервера будет вызвана функция onAjaxSuccess, которая выведет
// на экран сообщение с данными, присланными сервером.
// $.post(
//     "/ajaxtest.php",
//     {
//         param1: "param1",
//         param2: 2
//     },
//     onAjaxSuccess
// );
//
// function onAjaxSuccess(data)
// {
//     // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
//     alert(data);
// }