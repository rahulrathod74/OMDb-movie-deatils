$(document).ready(function(){

    var apikey="c16c339b"
    $("#movieform").submit(function(event){
        event.preventDefault()


        var movie=$("#movie").val()

        var result=""

        var url="http://www.omdbapi.com/?apikey="+apikey

        $.ajax({
           method:'GET',
           url:url+"&t="+movie,
           success:function(data){
            console.log(data);

            result=`

            <img  class="img" width="200" height="200" src="${data.Poster}"/>
            <h2>${data.Title}</h2>
            <h2>${data.Released}</h2>
            <h2>${data.Runtime}</h2>
            <h2>${data.Genre}</h2>
            <h2>${data.Director}</h2>
            <h2>${data.Actors}</h2>
            `;
            $("#result").html(
                result)
           }
        })
    })
})