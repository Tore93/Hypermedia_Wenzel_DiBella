var photo='';
var index=0;
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
        url: "http://hypermedia2016tim.altervista.org/php/QuerySLOffered.php", //Relative or absolute path to file.php file
        data: {name:param},

        success: function(response) {
            //console.log(response);
            var json=JSON.parse(response);
            var content = '';
            console.log(json.length);
               
            for(var i=0;i<json.length;i++){
                var linkSL=json[i].Name;
                if(linkSL=="TV-TIMVision"){
                console.log(i);
                console.log(linkSL);
                    content+=  "  <a href=CategoryOfSL.php?q=TV><img class=SL src ="+json[i].Path+">"+
                        "</a>";
                    $("#CENTER_RIGHT > div.content > div > div.down > div.SLoffered").html(content); 
                }
                if(linkSL=="TiMusic"){
                console.log(i);
                console.log(linkSL);
                    content+=  "  <a href=CategoryOfSL.php?q=TiMu><img class=SL src ="+json[i].Path+">"+
                        "</a>";
                    $("#CENTER_RIGHT > div.content > div > div.down > div.SLoffered").html(content); 
                }
                if(linkSL=="TimGames"){
                console.log(i);
                console.log(linkSL);
                    content+=  "  <a href=CategoryOfSL.php?q=TimG><img class=SL src ="+json[i].Path+">"+
                        "</a>";
                    $("#CENTER_RIGHT > div.content > div > div.down > div.SLoffered").html(content); 
                }
                if(linkSL=="TimReading"){
                console.log(i);
                console.log(linkSL);
                    content+=  "  <a href=CategoryOfSL.php?q=TimR><img class=SL src ="+json[i].Path+">"+
                        "</a>";
                    $("#CENTER_RIGHT > div.content > div > div.down > div.SLoffered").html(content); 
                }
                if(linkSL=="Serie A TIM"){
                console.log(i);
                console.log(linkSL);
                    content+=  "  <a href=CategoryOfSL.php?q=Ser><img class=SL src ="+json[i].Path+">"+
                        "</a>";
                    $("#CENTER_RIGHT > div.content > div > div.down > div.SLoffered").html(content); 
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