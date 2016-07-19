$(document).ready(function(){

console.log("cioa");

  
		console.log("cioa");
        console.log(param);
 
$.ajax({
        method: "POST",
      //  dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://hypermedia2016tim.altervista.org/php/QuerySpecifAService.php", //Relative or absolute path to file.php file
        data: {name:param},
     
        success: function(response) {
        //console.log(response);
       
            var json=JSON.parse(response);
            console.log(json);
             var content='';
             if(param==="Line"){
             console.log("feefef");
             }
             console.log(json[0].Description);
             content =json[0].Description;
                      
         $(" #ASdescription").html(content);
            $("#CENTER_RIGHT > div.titleCenter").html(json[0].Name);

        },
        error: function(request,error)
        {
        window.alert("Testo del messaggiscfvdvdo")
            console.log("Error");
        }

});

});