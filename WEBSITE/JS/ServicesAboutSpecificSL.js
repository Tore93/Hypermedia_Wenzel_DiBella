  var photo='';
    var index=0;
$(document).ready(function(){
$('.content').ready(function(){
console.log("cioa");

		console.log("cioa");
        console.log(param);
        $.ajax({
        method: "POST",
      //  dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://hypermedia2016tim.altervista.org/php/QuerySpecificSLService.php", //Relative or absolute path to file.php file
        data: {id:param},
     
        success: function(response) {
 
        //console.log(response);
            var json=JSON.parse(response);
      photo=JSON.parse(response);
           console.log(json);
            console.log(json);
            console.log(json);
            var content = '';
            if(param==="TV"){
                var content2="<div class=BUTTON id=prevCatBUTTON>"+
                        "<a href=landmark_SmartLife.html>return to index category</a>"+
                                "<img src=../image/left_arrow.png>"+ 
                        "</div>";
                 $("#faqBUTTON").before(content2);
             $(".titleCenter").html("TV-TIMVision");
             var  content="<div class=BUTTON  id=nextCatBUTTON>"+
                                  "<a href=CategoryOfSL.php?q=TiMu> to next category</a>"+
                                "<img src=../image/rght_arrow.png>"+ 
                            "</div>";
                $("#buttonBOX").append(content);
}
             if(param==="TiMu"){
             $(".titleCenter").html("TiMusic");
                 var content2="<div class=BUTTON id=prevCatBUTTON>"+
                        "<a href=CategoryOfSL.php?q=TV> to prev category</a>"+
                                "<img src=../image/left_arrow.png>"+ 
                        "</div>";
                 $("#faqBUTTON").before(content2);
                 var  content="<div class=BUTTON  id=nextCatBUTTON>"+
                                  "<a href=CategoryOfSL.php?q=TimR> to next category</a>"+
                                "<img src=../image/rght_arrow.png>"+ 
                            "</div>";
                $("#buttonBOX").append(content);
}
             if(param==="TimR"){
             $(".titleCenter").html("TimReading");
                  var content2="<div class=BUTTON id=prevCatBUTTON>"+
                        "<a href=CategoryOfSL.php?q=TiMu> to prev category</a>"+
                                "<img src=../image/left_arrow.png>"+ 
                        "</div>";
                 $("#faqBUTTON").before(content2);
                 var  content="<div class=BUTTON  id=nextCatBUTTON>"+
                                  "<a href=CategoryOfSL.php?q=TimG> to next category</a>"+
                                "<img src=../image/rght_arrow.png>"+ 
                            "</div>";
                $("#buttonBOX").append(content);
}
             if(param==="TimG"){
             $(".titleCenter").html("TimGames");
                  var content2="<div class=BUTTON id=prevCatBUTTON>"+
                        "<a href=CategoryOfSL.php?q=TimR> to prev category</a>"+
                                "<img src=../image/left_arrow.png>"+ 
                        "</div>";
                 $("#faqBUTTON").before(content2);
                 var  content="<div class=BUTTON  id=nextCatBUTTON>"+
                                  "<a href=CategoryOfSL.php?q=Ser> to next category</a>"+
                                "<img src=../image/rght_arrow.png>"+ 
                            "</div>";
                $("#buttonBOX").append(content);
}          
            if(param==="Ser"){
             $(".titleCenter").html("Serie A TIM");
                 var content2="<div class=BUTTON id=prevCatBUTTON>"+
                        "<a href=CategoryOfSL.php?q=TimG> to prev category</a>"+
                                "<img src=../image/left_arrow.png>"+ 
                        "</div>";
                 $("#faqBUTTON").before(content2);
            var  content="<div class=BUTTON  id=nextCatBUTTON>"+
                                  "<a href=landmark_SmartLife.html> return to index category</a>"+
                                "<img src=../image/rght_arrow.png>"+ 
                            "</div>";
                $("#buttonBOX").append(content);
            
}
           
                        
            console.log(json.length);
            // based on id I will fill the related divs
            var content=json[0].Initial_Desc;
            
            console.log(content);
         
            
            $("#sideText > p").html(content);
               var content2 =json[0].Path;
               console.log(content2);
                var IMG = $('#SLbox > img.SLimg');
                 IMG[0].src=content2;
                
               /* if(i==0){
             $(".content .column .devCategory:nth-child(1) p").html(content);
                }else if(i==1){
                    $(".content .column .devCategory:nth-child(2) p").html(content);
                }*/
                
            
                
           

        },
        error: function(request,error)
        {
        window.alert("Testo del messaggiscfvdvdo")
            console.log("Error");
        }

});
      
   $("#bottomNext").click(function(){
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
             $("#SLbox > img.SLimg")[0].src=photo[index].Path;
        }else{
            index++;
              $("#SLbox > img.SLimg")[0].src=photo[index].Path;
        }
    });
     $("#bottomPrev").click(function(){
       /* var im= $("#centerIMG > img").val();
        var temp=$("#CENTER_RIGHT > div.content > div > div.deviceIMGs > div.downIMGs > img:nth-child(1)").val();
        $("#CENTER_RIGHT > div.content > div > div.deviceIMGs > div.downIMGs > img:nth-child(1)").html(im);
        for(var i=1;i<photo.length;i++){
            
        }
        IMG[0].src=*/
        
     if(index<=0){
            index=photo.length-1;
             $("#SLbox > img.SLimg")[0].src=photo[index].Path;
        }else{
              index--;           
              $("#SLbox > img.SLimg")[0].src=photo[index].Path;
        }
    });   
});
});