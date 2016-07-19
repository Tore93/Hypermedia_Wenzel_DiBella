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
        url: "http://hypermedia2016tim.altervista.org/php/QuerySpecificDevice.php", //Relative or absolute path to file.php file
        data: {name:param},
     
        success: function(response) {
        //console.log(response);
            var json=JSON.parse(response);
            var content = '';
             nameProd=json[0].Name;
             $(".titleCenter").html(param);
			console.log(json[0].Initial_Description);
            content=json[0].Initial_Description;
            $(" #deviceDescription:nth-child(1) p").html(content);        
            
                
           

        },
        error: function(request,error)
        {
        window.alert("Testo del messaggiscfvdvdo")
            console.log("Error");
        }

});
$.ajax({
        method: "POST",
      //  dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://hypermedia2016tim.altervista.org/php/QuerySpecificPhotoDevice.php", //Relative or absolute path to file.php file
        data: {nameC:param},
     
        success: function(response) {
        //console.log(response);
            var json=JSON.parse(response);
            var content = '';
            photo=JSON.parse(response);
        	var cf='';
            var cont='';
             IMG = $('#centerIMG img');
        
           console.log(json.length);
          	 cf=json[0].Path;
             IMG[0].src= cf;
             console.log(cf);
            //    console.log(cont);
              //   $(".upIMGs div").html(cont); 
           
           for(var i=0;i<json.length;i++){
           var content2 =json[i].Path;
           console.log(content2);
            if(json[i].Path !== null){
                content+=" <img class=downIMGs src="+content2+">";
                $(".downIMGs").html(content); 
            }
                
           }

        },
        error: function(request,error)
        {
        window.alert("Testo del messaggiscfvdvdo")
            console.log("Error");
        }

});
    $("#bottonR > img").click(function(){
       /* var im= $("#centerIMG > img").val();
        var temp=$("#CENTER_RIGHT > div.content > div > div.deviceIMGs > div.downIMGs > img:nth-child(1)").val();
        $("#CENTER_RIGHT > div.content > div > div.deviceIMGs > div.downIMGs > img:nth-child(1)").html(im);
        for(var i=1;i<photo.length;i++){
            
        }
        IMG[0].src=*/
        console.log(index);
        console.log(photo);
        //var tempo=photo[index].Path;
        //$("#centerIMG > img").html(tempo);
        if(index>=photo.length-1){
            index=0;
             $("#centerIMG > img ")[0].src=photo[index].Path;
        }else{
            index++;
              $("#centerIMG > img")[0].src=photo[index].Path;
        }
    });
     $("#bottonL > img").click(function(){
       /* var im= $("#centerIMG > img").val();
        var temp=$("#CENTER_RIGHT > div.content > div > div.deviceIMGs > div.downIMGs > img:nth-child(1)").val();
        $("#CENTER_RIGHT > div.content > div > div.deviceIMGs > div.downIMGs > img:nth-child(1)").html(im);
        for(var i=1;i<photo.length;i++){
            
        }
        IMG[0].src=*/
        
     if(index<=0){
            index=photo.length-1;
             $("#centerIMG > img ")[0].src=photo[index].Path;
        }else{
              index--;           
              $("#centerIMG > img")[0].src=photo[index].Path;
        }
    });
});