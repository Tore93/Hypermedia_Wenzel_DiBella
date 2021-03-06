<html>


    <head>

        <title> Tim Project </title>

        <meta name="description" content="This is the Tim Website project for the Hypermedia Applications course project" />

        <meta name="keywords" content="tim, mobile, serie A, tim vision, sky, samsung , iPhone" >

        <meta http-equiv="author" content="Marco Wenzel & Salvatore Di Bella"/>

        <meta http-equiv="content-language" content="en" />

        <link rel="stylesheet" type="text/css" href="../css/left_style.css" > 

        <link rel="stylesheet" type="text/css" href="../css/UP_DOWN_style.css" > 

        <link rel="stylesheet" type="text/css" href="../css/right_style.css" > 

        <link rel="stylesheet" type="text/css" href="../css/general_style.css" > 

   <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        
         <script src="../JS/LeftMenuScript.js" type=text/javascript> </script>
        
        <script src="../JS/RequestDevicesForSL.js" type="text/javascript"></script>
        
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

                <img id="upTimimg" src="../image/logo_sopra.jpg">

                <a href="index.php"><img id="TimLogo" src ="../image/logo_tim_2016.png">
                </a>

            </div>

            <br>

            <div id="CENTER_RIGHT" class="mainBLOCK">


                <h2 class="titleCenter">
                    Devices Of The SELECTED SmartLife
                </h2>



                <div class="content" >
                    
                    <div class="deviceRAW"> 
                    
                        <h4 class="BUTTON">product name</h4>
                        
                        <div class="lineToimg"> </div>
                        
                        <div class="deviceICON">
                        
                            <img class="BUTTON" src=../image/apple-iPhone6s_Gld-3.jpg>
                            
                        </div>
                        
                    </div>
                    

                </div>
                
            </div>

            <div id="CENTER_LEFT" class="mainBLOCK">


                 <a class="main_landmark" href= "index.php"  > Home </a>



                <a class="main_landmark" href= "landmark_WhoWeAre.html"  > Who We Are </a>



                <ul >


                    <li> <a href= "landmark_WhoWeAre.html"   > Innovations </a> </li>
                    <li> <a  href= "WhoWeAre Testimonials.html" > Testimonials </a> </li>
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
                    <li>  <a class="curtain_list" href="DevicesOfCategory.php?q=1" > Tablet and Computer </a> </li>
                    <li>  <a class="curtain_list" href="DevicesOfCategory.php?q=2" > Smartphones and Telephones </a> </li>
                    <li>  <a class="curtain_list" href="DevicesOfCategory.php?q=3" > Modem and Networking </a> </li>
                    <li>  <a class="curtain_list" href="DevicesOfCategory.php?q=4" > TV and SmartLiving </a> </li>
                    <li>  <a class="curtain_list" href="DevicesOfCategory.php?q=5" > OutLet </a> </li>
                    <li>  <a class="curtain_list" href="DevicesOfCategory.php?q=6" > Promotions </a> </li>


                </ul>




                <a class="main_landmark" href= "landmark_SmartLife.html" > Smart Life Categories </a>




                <ul>
                    <li>  <a class="curtain_list" href="CategoryOfSL.php?q=TV"tp > TV </a> </li>
                    <li>  <a class="curtain_list" href="CategoryOfSL.php?q=TiMu"tp > TiMusic </a> </li>
                    <li>  <a class="curtain_list" href="CategoryOfSL.php?q=TimR"tp > TimReading </a> </li>
                    <li>  <a class="curtain_list" href="CategoryOfSL.php?q=Timg"tp> Timgames </a> </li>
                    <li>  <a class="curtain_list" href="CategoryOfSL.php?q=Ser"tp > Serie A Tim </a> </li>

                </ul>


                <a class="main_landmark" href= "landmark_AssistanceService.html" > Assistance Service Categories </a> 




                <ul>

                    
                    <li>  <a class="curtain_list" href="CategoryOfAS.php?q=Line"tp > Line management and Services </a> </li>
                    <li>  <a class="curtain_list" href="CategoryOfAS.php?q=Cost"tp > Cost Control and Payments </a> </li>
                    <li>  <a class="curtain_list" href="CategoryOfAS.php?q=Tech"tp > Tech Support and Configuration </a> </li>
                    <li>  <a class="curtain_list" href="CategoryOfAS.php?q=Smart"tp > SmartLife </a> </li>
                    <li>  <a class="curtain_list" href="CategoryOfAS.php?q=High"tp > HighLights </a> </li>
                    

                </ul>

            </div>







            <br>

        </div>
        
            <div id="DOWN" class="mainBLOCK">


                <p>Follow us ...</p>

                <a href="https://www.instagram.com/timofficial/">
                <img src="../image/Instagram_button.png">
            </a>

            <a href="https://www.youtube.com/user/TimChannel">
                <img src="../image/YouTube-logo-full_color.png"> 
            </a>

            <a href="https://www.facebook.com/TimOfficialPage">
                <img src="../image/facebook_logo.png">
            </a>


            </div>

    </body>

</html>