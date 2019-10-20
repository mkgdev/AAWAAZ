
$('.initiate').on('click', function () {

    var ajaxRequest = $.ajax({
        url: "/initiate",
        method: "POST",
    });


    ajaxRequest.done(function(data) {

console.log('Registration was successful');

    });

    ajaxRequest.fail(function(data) {

        console.log('Registration was unsuccessful. Try again!');
    });

});

$('.stop').on('click', function () {

    alert('closed')
    var ajaxRequest = $.ajax({
        url: "/stop_python",
        method: "GET",
    });


    ajaxRequest.done(function(data) {

    });

    ajaxRequest.fail(function(data) {

        console.log('Registration was unsuccessful. Try again!');
    });

});