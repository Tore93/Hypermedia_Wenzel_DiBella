<html>


    <head>

        <title> Tim Project </title>

        <meta name="description" content="This is the Tim Website project for the Hypermedia Applications course project" />

        <meta name="keywords" content="tim, mobile, serie A, tim vision, sky, samsung , iPhone" >

        <meta http-equiv="author" content="Marco Wenzel & Salvatore Di Bella"/>

        <meta http-equiv="content-language" content="en" />

        <link rel="stylesheet" type="text/css" href="../css/left_style.css"> 

        <link rel="stylesheet" type="text/css" href="../css/UP_DOWN_style.css"> 

        <link rel="stylesheet" type="text/css" href="../css/right_style.css"> 

        <link rel="stylesheet" type="text/css" href="../css/general_style.css"> 

      <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="../JS/RequestSingleDeviceCategory.js" type="text/javascript"></script>
  <script>  var  param= "<?php
    if(isset($_GET["q"]))
    {
        echo  $_GET["q"];
       
    }else{
        echo (Smartphone_e_telefoni);
    }
?>";</script>
    </head>

    <body>

        <div id="ALL">

            <div id="UP" class="mainBLOCK">

                <img id="upTimImg" src="../image/logo_sopra.jpg">

                <a href="index.html"><img id="TimLogo" src ="../image/logo_tim_2016.png">
                </a>

            </div>

            <br>

            <div id="CENTER_RIGHT" class="mainBLOCK">


                <div class="titleCenter">
                    <h1 >CATEGORY OF DEVICES</h1>
                </div>

                <br>

                <div class="content">

                    <div id="infoCatRIGHT">

                      <!--  <div class="BUTTON"  id="ToDevicesBUTTON"> 
                            <img src="../image/genDEVICES.png"> 
                            devices for this category 
                        </div>
                        <br>

                        <div>
                            <div id="imgRIGHT"> 
                                <img src="../image/acer-iconia-w4-grigio-1.jpg"> 
                            </div>
                            <br>

                          <div class="BUTTON"  id="nextCategoryBUTTON">
                           <!--       <a href="CategoryOfDevices.php?q="+(param+1)> to next category</a>
                                <img src="../image/rght_arrow.png"> 
                            </div>
-->
                        </div>

                    </div>

                    <div id="infoCatLEFT">
                        
                        <div  id="categoryINFO"> <p> Mi chiamo michele Zuele Mi chiamo michele Zuele Mi chiamo michele ZueleMi chiamo michele ZueleMi chiamo michele ZueleMi chiamo michele ZueleMi chiamo michele ZueleMi chiamo michele ZueleMi chiamo michele ZueleMi chiamo michele ZueleMi chiamo michele Zuele </p> </div>
                        <br>
                        
                        <div  id="imgDOWN"> 
                            <img src="../image/Tablet.jpg"> 
                        </div>
                        
                    </div>
                    
                </div>

            </div>



            <div id="CENTER_LEFT" class="mainBLOCK">


                <a class="main_landmark" href= "index.html"  > Home </a>



                <a class="main_landmark" href= "WhoWeAre_Innovations.html"  > Who We Are </a>



                <ul >


                    <li> <a href= "WhoWeAre_Innovations.html"  > Innovations </a> </li>
                    <li> <a  href= "WhoWeAre_Testimonials.html" > Testimonials </a> </li>
                    <li> <a href= "WhoWeAre_Projects.html" > Projects </a> </li> 


                </ul>



                <div class="main_landmark" id="theGroupLand" >The Group </div>

                <ul  >

                    <li class="curtain_list" > Description and Governance </li>
                    <li class="curtain_list" > News </li>
                    <li class="curtain_list"> Business and Market  </li>
                    <li class="curtain_list" > For Investor </li>

                </ul>


                <a class="main_landmark" href= "landmark_DeviceCategories.html" >Device Categories</a>


                <ul >
                    <li>  <a class="curtain_list" href= "" > Tablet and Computer </a> </li>
                    <li>  <a class="curtain_list" href= "" > Smartphones and Telephones </a> </li>
                    <li>  <a class="curtain_list" href= "" > Modem and Networking </a> </li>
                    <li>  <a class="curtain_list" href= "" > TV and SmartLiving </a> </li>
                    <li>  <a class="curtain_list" href= "" > OutLet </a> </li>
                    <li>  <a class="curtain_list" href= "" > Promotions </a> </li>


                </ul>




                <a class="main_landmark" href= "landmark_SmartLife.html" > Smart Life Categories </a>




                <ul>
                    <li>  <a class="curtain_list" href= "SL_TV.html" > TV </a> </li>
                    <li>  <a class="curtain_list" href= "SL_music.html" > TiMusic </a> </li>
                    <li>  <a class="curtain_list" href= "SL_reading.html" > TimReading </a> </li>
                    <li>  <a class="curtain_list" href= "SL_games.html" > TimGames </a> </li>
                    <li>  <a class="curtain_list" href= "SL_serieA.html" > Serie A Tim </a> </li>

                </ul>


                <a class="main_landmark" href= "landmark_AssistanceService.html" > Assistance Service Categories </a> 




                <ul>

                    <li>  <a class="curtain_list" href= "AS_lineManag_Serv.html" > Line management and Services </a> </li>
                    <li>  <a class="curtain_list" href= "AS_costControl_Pay.html" > Cost Control and Payments </a> </li>
                    <li>  <a class="curtain_list" href= "AS_TechSupport_Config.html" > Tech Support and Configuration </a> </li>
                    <li>  <a class="curtain_list" href= "AS_SmartLife.html" > SmartLife </a> </li>
                    <li>  <a class="curtain_list" href= "AS_HighLights.html" > HighLights </a> </li>

                </ul>

            </div>

        </div>
        
        
            <div id="DOWN" class="mainBLOCK">


                <p>Follow us ...</p>
 
                <a href="">
                    <img src="../image/Instagram_button.png">
                </a>

                <a href="">
                    <img src="../image/YouTube-logo-full_color.png"> 
                </a>

                <a href="">
                    <img src="../image/facebook_logo.png">
                </a>


            </div>

    </body>

</html>