$(document).ready(function(){
$('.content').ready(function(){
$.ajax({
        method: "POST",
      //  dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://hypermedia2016tim.altervista.org/php/QueryFAQ.php", //Relative or absolute path to file.php file
        data: {id:param},
     
        success: function(response) {
 
        //console.log(response);
            var json=JSON.parse(response);
           console.log(json);
            var content=json[0].Activation_FAQ;
            var content2=json[0].Name;
            console.log(content);
      if(content!=""){
          var f="<li >"+

                               "<h3>"+content2+"</h3>"+
                                "<p>"+content+"</p>"+  
                            "</li>";
          $("#FAQs > ul").append(f);
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