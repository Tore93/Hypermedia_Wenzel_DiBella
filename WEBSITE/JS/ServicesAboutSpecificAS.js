$(document).ready(function(){
$('.content').ready(function(){
console.log("cioa");

		console.log("cioa");
        console.log(param);
        $.ajax({
        method: "POST",
      //  dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://hypermedia2016tim.altervista.org/php/QueryServicesASCategory.php", //Relative or absolute path to file.php file
        data: {id:param},
     
        success: function(response) {
        //console.log(response);
            var json=JSON.parse(response);
      
           console.log(json);
            console.log(json);
            console.log(json);
            var content = '';
            var content2='';
            var content3='';
            if(param==="Line"){
             $(".titleCenter").html("Line management & services");
}
             if(param==="Cost"){
             $(".titleCenter").html("Cost control and payments");
}
             if(param==="Tech"){
             $(".titleCenter").html("Technical support & configuration");
}
             if(param==="Smart"){
             $(".titleCenter").html("Smart Life");
}          
            if(param==="High"){
             $(".titleCenter").html("Highlights");
}
            content=json[0].Name;
            content2=json[0].Pre_Description;
            console.log(content2);
           // content3="See More";
             $("#AScat > ul > li > div > h3").html(content);    
            console.log(json.length);
           $("#AScat > ul > li > div > ul > li:nth-child(1)").html(content2);
          //  $("#AScat > ul > li > ul > li:nth-child(2)").html(content3);
            // based on id I will fill the related divs
       
      
           

        },
        error: function(request,error)
        {
        window.alert("Testo del messaggiscfvdvdo")
            console.log("Error");
        }

});
});
});