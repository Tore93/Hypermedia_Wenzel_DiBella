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
        url: "http://hypermedia2016tim.altervista.org/php/QuerySpecificCaratteristics.php", //Relative or absolute path to file.php file
        data: {name:param},
     
        success: function(response) {
        //console.log(response);
            var json=JSON.parse(response);
            var content =json[0].Name;
            var content2='';
            $("#CENTER_RIGHT > div.titleCenter > h1").html(content);
           if(json[0].Display!=="null"){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Display </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Display +"</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           console.log(json[0].Sensor);
           console.log(json[0].Sensor);
            if(json[0].Sensor!==""){
             console.log("entroS");
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Sensor </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Sensor +"</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
            if(json[0].Processor!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Processor </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Processor +"</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
            if(json[0].Camera!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Camera </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Camera+ "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           console.log(json[0].Video);
            if(json[0].Video!==""){
            console.log("entroV");
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Video </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Video +"</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
            if(json[0].Connectivity!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Connectivity </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+ json[0].Connectivity +"</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
            if(json[0].Battery!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Battery </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Battery + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           if(json[0].Operational_System!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Operational_System </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Operational_System + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           if(json[0].Audio!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Audio</p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Audio + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           if(json[0].Picture!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Picture </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Picture + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           if(json[0].Battery!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Battery </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Battery + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           if(json[0].Memory!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Memory </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Memory + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           if(json[0].Weight!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p>Weight	 </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Weight	 + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           if(json[0].Size!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Size </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Size + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           if(json[0].Tecnology!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Tecnology </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Tecnology + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           if(json[0].Cooling!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Cooling </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Cooling + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           if(json[0].Tension_Stabilizator!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Tension Stabilizator </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Tension_Stabilizator + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           if(json[0].Noise!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Noise </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Noise + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
            if(json[0].Wi_Fi!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p> Wi-Fi </p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Wi_Fi + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
            if(json[0].Operating_Enviroment!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p>Operating_Enviroment</p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Operating_Enviroment + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
            if(json[0].Interfaces!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p>Interfaces</p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Interfaces + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           if(json[0].Wireless_Protection!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p>Wireless-Protection</p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Wireless_Protection+ "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
           if(json[0].Advance_Option!==""){
             content2+="<div class=caratteristicsRAW>"+ 
                        "<div class=caratteristicsNAME>  <p>Advance_Option</p> </div>"+ 
                        "<div class=caratteristicsVALUE>   <p>"+json[0].Advance_Option + "</p>  </div>"+
                    "</div>";   
            $("#CENTER_RIGHT > div.content").html(content2);
           }
        },
        error: function(request,error)
        {
        window.alert("Testo del messaggiscfvdvdo")
            console.log("Error");
        }

});
});