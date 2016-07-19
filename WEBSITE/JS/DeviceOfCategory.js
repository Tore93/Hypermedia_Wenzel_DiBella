$(document).ready(function(){
$('.content').ready(function(){
console.log("cioa");

		console.log("cioa");
        console.log(param);
        $.ajax({
        method: "POST",
      //  dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://hypermedia2016tim.altervista.org/php/DeviceForCategory.php", //Relative or absolute path to file.php file
        data: {id:param},
     
        success: function(response) {
        //console.log(response);
            var json=JSON.parse(response);
      
           console.log(json);
            console.log(json);
            console.log(json);
            var content = '';
            if(param==1){
             $(".titleCenter").html("tablet e pc");
}
             if(param==2){
             $(".titleCenter").html("Smartphone e telefoni");
}
             if(param==3){
             $(".titleCenter").html("Modem e networking");
}
             if(param==4){
             $(".titleCenter").html("TV e Smart Living");
}          
            if(param==5){
             $(".titleCenter").html("Outlet");
}
                      if(param==6){
             $(".titleCenter").html("Promotions");
}
  
                        
            console.log(json.length);
            // based on id I will fill the related divs
            for(var i=0;i<json.length;i++){
            console.log(json.length);
                 content +=

                   
                        "<div class=devCategory>"+
                            
                           " <p class=titleCAT >"+json[i].Name+
                    "</p>    <a href=device.php?q="+json[i].Name+">     <img src="+json[i].Path+">"+
                      "</a> </div>";


                $('.column').html(content);       


                   
               /* if(i==0){
             $(".content .column .devCategory:nth-child(1) p").html(content);
                }else if(i==1){
                    $(".content .column .devCategory:nth-child(2) p").html(content);
                }*/
                
            }
                
           

        },
        error: function(request,error)
        {
        window.alert("Testo del messaggiscfvdvdo")
            console.log("Error");
        }

});
});
});