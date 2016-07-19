$(document).ready(function(){ 
    
    $("#CENTER_LEFT > ul:nth-child(5)").hide();

    var landWhoWeAre = $("#CENTER_LEFT > a:nth-child(2)");
    
    var WWAlist = $("#CENTER_LEFT > ul:nth-child(3)");
  
    var landDeviceCat = $("#CENTER_LEFT > a:nth-child(6)");
    
    var DClist = $("#CENTER_LEFT > ul:nth-child(7)");


    var landSmarLife = $("#CENTER_LEFT > a:nth-child(8)");

    var SLlist = $("#CENTER_LEFT > ul:nth-child(9)");


    var landAssCat = $("#CENTER_LEFT > a:nth-child(10)");

    var ASlist = $("#CENTER_LEFT > ul:nth-child(11)");


    WWAlist.hide();
    DClist.hide();
    SLlist.hide();
    ASlist.hide();
    

    landWhoWeAre.hover(function() {

        WWAlist.show();
        DClist.hide();
        SLlist.hide();
        ASlist.hide();

    });

    landDeviceCat.mouseover(function() {

        WWAlist.hide();
        DClist.show();
        SLlist.hide();
        ASlist.hide();


    });

    landSmarLife.mouseover(function() {

        WWAlist.hide();
        DClist.hide();
        SLlist.show();
        ASlist.hide();

    });

    landAssCat.mouseover(function() {

        WWAlist.hide();
        DClist.hide();
        SLlist.hide();
        ASlist.show();


    });



});
    