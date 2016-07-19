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
        url: "http://hypermedia2016tim.altervista.org/php/QuerySingleDeviceCategory.php", //Relative or absolute path to file.php file
        data: {name:param},

        success: function(response) {
            //console.log(response);
            var json=JSON.parse(response);
            var content = '';
            var content2='';
            var title=json[0].Name;
            content=json[0].Description;
            console.log(json);
            console.log(json.length);
            $("#CENTER_RIGHT > div.titleCenter > h1").html(title);
            console.log(content);
         $("#categoryINFO > p").html(content);
            if(param=="1"){
           content2="<div class=BUTTON  id=ToDevicesBUTTON>"+ 
                            "<img src=../image/genDEVICES.png>"+ 
                             "<a href=DevicesOfCategory.php?q=1> devices for this category"+ 
                        "</div> <br>"+
                         "<div>"+
                           " <div id=imgRIGHT>"+ 
                                "<img src=../image/acer-iconia-w4-grigio-1.jpg>"+ 
                            "</div>"+
                            "<br>"+      
               "<div class=BUTTON  id=nextCategoryBUTTON>"+
                                "<a href=CategoryOfDevices.php?q=2> to next category</a>"+
                                "<img src=../image/rght_arrow.png></div>";
                           
           $("#infoCatRIGHT").html(content2);
                var content3="<div class=BUTTON id=prevCatBUTTON>"+
                 "<a href=landmark_DeviceCategories.html> to prev category</a>"+
                            "<img src=../image/left_arrow.png>"+
                        "</div>";
                $("#infoCatLEFT").append(content3);
            }
            if(param=="2"){
           content2="<div class=BUTTON  id=ToDevicesBUTTON>"+ 
                            "<img src=../image/genDEVICES.png>"+ 
                             "<a href=DevicesOfCategory.php?q=2> devices for this category"+ 
                        "</div> <br>"+
                         "<div>"+
                           " <div id=imgRIGHT>"+ 
                                "<img src=../image/acer-iconia-w4-grigio-1.jpg>"+ 
                            "</div>"+
                            "<br>"+      
               "<div class=BUTTON  id=nextCategoryBUTTON>"+
                                "<a href=CategoryOfDevices.php?q=3> to next category</a>"+
                                "<img src=../image/rght_arrow.png></div>";
                           
           $("#infoCatRIGHT").html(content2);
                var content3="<div class=BUTTON id=prevCatBUTTON>"+
                 "<a href=CategoryOfDevices.php?q=1> to prev category</a>"+
                            "<img src=../image/left_arrow.png>"+
                        "</div>";
                $("#infoCatLEFT").append(content3);
            }
            if(param=="3"){
           content2="<div class=BUTTON  id=ToDevicesBUTTON>"+ 
                            "<img src=../image/genDEVICES.png>"+ 
                             "<a href=DevicesOfCategory.php?q=3> devices for this category"+ 
                        "</div> <br>"+
                         "<div>"+
                           " <div id=imgRIGHT>"+ 
                                "<img src=../image/acer-iconia-w4-grigio-1.jpg>"+ 
                            "</div>"+
                            "<br>"+      
               "<div class=BUTTON  id=nextCategoryBUTTON>"+
                                "<a href=CategoryOfDevices.php?q=4> to next category</a>"+
                                "<img src=../image/rght_arrow.png></div>";
                           
           $("#infoCatRIGHT").html(content2);
                var content3="<div class=BUTTON id=prevCatBUTTON>"+
                 "<a href=CategoryOfDevices.php?q=2> to prev category</a>"+
                            "<img src=../image/left_arrow.png>"+
                        "</div>";
                $("#infoCatLEFT").append(content3);
            }
            if(param=="4"){
           content2="<div class=BUTTON  id=ToDevicesBUTTON>"+ 
                            "<img src=../image/genDEVICES.png>"+ 
                             "<a href=DevicesOfCategory.php?q=4> devices for this category"+ 
                        "</div> <br>"+
                         "<div>"+
                           " <div id=imgRIGHT>"+ 
                                "<img src=../image/acer-iconia-w4-grigio-1.jpg>"+ 
                            "</div>"+
                            "<br>"+      
               "<div class=BUTTON  id=nextCategoryBUTTON>"+
                                "<a href=CategoryOfDevices.php?q=5> to next category</a>"+
                                "<img src=../image/rght_arrow.png></div>";
                           
           $("#infoCatRIGHT").html(content2);
                var content3="<div class=BUTTON id=prevCatBUTTON>"+
                 "<a href=CategoryOfDevices.php?q=3> to prev category</a>"+
                            "<img src=../image/left_arrow.png>"+
                        "</div>";
                $("#infoCatLEFT").append(content3);
            }
            if(param=="5"){
           content2="<div class=BUTTON  id=ToDevicesBUTTON>"+ 
                            "<img src=../image/genDEVICES.png>"+ 
                             "<a href=DevicesOfCategory.php?q=5> devices for this category"+ 
                        "</div> <br>"+
                         "<div>"+
                           " <div id=imgRIGHT>"+ 
                                "<img src=../image/acer-iconia-w4-grigio-1.jpg>"+ 
                            "</div>"+
                            "<br>"+      
               "<div class=BUTTON  id=nextCategoryBUTTON>"+
                                "<a href=CategoryOfDevices.php?q=6> to next category</a>"+
                                "<img src=../image/rght_arrow.png></div>";
                           
           $("#infoCatRIGHT").html(content2);
                var content3="<div class=BUTTON id=prevCatBUTTON>"+
                 "<a href=CategoryOfDevices.php?q=4> to prev category</a>"+
                            "<img src=../image/left_arrow.png>"+
                        "</div>";
                $("#infoCatLEFT").append(content3);
            }
            if(param=="6"){
           content2="<div class=BUTTON  id=ToDevicesBUTTON>"+ 
                            "<img src=../image/genDEVICES.png>"+ 
                             "<a href=DevicesOfCategory.php?q=6> devices for this category"+ 
                        "</div> <br>"+
                         "<div>"+
                           " <div id=imgRIGHT>"+ 
                                "<img src=../image/acer-iconia-w4-grigio-1.jpg>"+ 
                            "</div>"+
                            "<br>"+   "<div class=BUTTON  id=nextCategoryBUTTON>"+
                                "<a href=landmark_DeviceCategories.html> to next category</a>"+
                                "<img src=../image/rght_arrow.png></div>";                         
           $("#infoCatRIGHT").html(content2);
                var content3="<div class=BUTTON id=prevCatBUTTON>"+
                 "<a href=CategoryOfDevices.php?q=5> to prev category</a>"+
                            "<img src=../image/left_arrow.png>"+
                        "</div>";
                $("#infoCatLEFT").append(content3);
            }
         

        },
        error: function(request,error)
        {
            window.alert("Testo del messaggiscfvdvdo")
            console.log("Error");
        }

    });


});