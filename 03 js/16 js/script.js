console.log("working");

// Jquery - Its a javaScript library which effective method for doing something
//in frontend and gives essential features like DOM Manipulations, AJAX interqactions etc.

//using class names, id's, tags, and this

// $("button").click(function(){
//     // $("p").hide();
//     $("p").toggle();

// })
$("button").click(function(){

    // $("#heading").hide();
    $("#heading").toggle();

    // $(".para").hide();
    // $(".para").toggle();

    // $(this).hide();

})

//AJAX - Asynchronous JavaScript and XML file
//It allows us to make server calls and display data without reloading the page.
//It allows us to sommunicate with the remote web servers in an asynchronous way with
//API calls, we can request data from web servers dynamically.


//In AJAX calls we donot use ./# for accessing the class and ids respectively.
//we simply need to acces by writing the name of the ids and class names.

$("button").click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/2",
        type : "GET",
        success: function(data){
            console.log(data);
            // document.getElementsByTagName("p")[0].innerText = data.title;
            document.getElementsByTagName("try").innerText = data.title;

        }
    })
})