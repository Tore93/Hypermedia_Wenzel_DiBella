$(document).ready(function(){
    var IMG='';
    console.log("cioa");
    var nameProd='';

    console.log("cioa");
    console.log(param);
    $.ajax({
        method: "POST",
        //  dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://hypermedia2016tim.altervista.org/php/QueryASOffered.php", //Relative or absolute path to file.php file
        data: {name:param},

        success: function(response) {
            //console.log(response);
            var json=JSON.parse(response);
            var content = '';
            var content2='';
            var title=json[0].Id_AssistantService;
            console.log(json);
            console.log(json.length);
            content=json[0].Name;
            console.log(content);
            $("#CENTER_RIGHT > div.titleCenter > h1").html(content);
            
            for(var i=0;i<json.length;i++){
                var title=json[i].Id_AssistantService;
                if(title=="Cost control and payments"){
                    content2+=" <li class=BUTTON>"+
                        "  <a href=seeMore-specificAS.php?q=Cost>"+

                        "<h3>"+json[i].Id_AssistantService+"</h3>"+

                        "</a></li>";
                    $("#AScat > ul").html(content2);
                }
                if(title=="Line management & services"){
                    content2+=" <li class=BUTTON>"+
                        "  <a href=seeMore-specificAS.php?q=Line>"+

                        "<h3>"+json[i].Id_AssistantService+"</h3>"+

                        "</a></li>";
                    $("#AScat > ul").html(content2);
                }
                if(title=="Smart Life"){
                    content2+=" <li class=BUTTON>"+
                        "  <a href=seeMore-specificAS.php?q=Smart>"+

                        "<h3>"+json[i].Id_AssistantService+"</h3>"+

                        "</a></li>";
                    $("#AScat > ul").html(content2);
                    
                }if(title=="Technical support & configuration"){
                    content2+=" <li class=BUTTON>"+
                        "  <a href=seeMore-specificAS.php?q=Tech>"+

                        "<h3>"+json[i].Id_AssistantService+"</h3>"+

                        "</a></li>";
                    $("#AScat > ul").html(content2);
            }

}

        },
        error: function(request,error)
        {
            window.alert("Testo del messaggiscfvdvdo")
            console.log("Error");
        }

    });

});