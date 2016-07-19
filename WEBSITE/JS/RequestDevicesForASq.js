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
        url: "http://hypermedia2016tim.altervista.org/php/QueryDevicesSpecificAS.php", //Relative or absolute path to file.php file
        data: {name:param},

        success: function(response) {
            //console.log(response);
            var json=JSON.parse(response);

            var content =json[0].Id_AssistantService;
            var content2='';
            var content3='';

            $("#CENTER_RIGHT > div.titleCenter > h1").html(content);

            for(var i=0;i<json.length;i++){
                if(json[i].Name=="iPad Air 2 16GB"){
                    content3="iPad";
                }

                if(json[i].Name=="Samsung Galaxy TAB A 9.7"){
                    content3="Samsung";
                }
                if(json[i].Name=="Huawei P9"){
                    content3="Huawei";

                }

                if(json[i].Name=="Apple iPhone 6"){
                    content3="Apple";

                }

                if(json[i].Name=="Modem ADSL Wi-Fi"){
                    content3="Modem";

                }if(json[i].Name=="Gear VR"){
                    content3="Gear";

                }

                content2+= "<a href=device.php?q="+content3+"> <div class=deviceRAW> + <h4 class=BUTTON>" + json[i].Name + " </h4> " +

                    "<div class=lineToImg> </div>" + 

                    "<div class=deviceICON> <img class=BUTTON src="+json[i].Path+"></div> </div> </a>"


                $("#CENTER_RIGHT .content").html(content2)

            }





        },
        error: function(request,error)
        {
            window.alert("Testo del messaggiscfvdvdo")
            console.log("Error");
        }

    });
});