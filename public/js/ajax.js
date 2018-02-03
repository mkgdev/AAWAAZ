
$('.initiate').on('click', function () {

    var ajaxRequest = $.ajax({
        url: "/initiate",
        method: "POST",
    });


    ajaxRequest.done(function(data) {

        alert('Registration was successful');

    });

    ajaxRequest.fail(function(data) {

        alert('Registration was unsuccessful. Try again!');
    });

});
