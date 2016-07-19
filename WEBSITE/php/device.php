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
        
         <script src="../JS/LeftMenuScript.js" type=text/javascript> </script>
        
        <script src="../JS/RequestSpecificDevice.js" type="text/javascript"></script>
        <script src="../JS/RequestSLServicesOffered.js" type="text/javascript"></script>
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


                <div class="titleCenter">
                    <h1 >DEVICE</h1>
                </div>

                <br>

                <div class="content">

                    <div class="deviceWindow"> 

                        <div class="info">

                            <div id="deviceDescription">
                                
                                <p></p>
                                
    
</div>
                                <br>


                            

                            

                            <div class="ASoffered">
                                                     <a href="ASofDEVICE.php?q=<?php  echo $_GET["q"]; ?>"><h4>   Assistant Service Offered</h4>
                </a>
                            </div>


                        </div> 



                        <div class="deviceimgs">




                            <div class="upimgs">


                                  <div id="bottonL" >
                                    <img class="arrow" src="../image/left_arrow.png">
                                </div>


                               <div id="centerimg">
                                   <img  src="../image/ipad-air2.jpg">
                                </div>


                                <div id="bottonR">
                                    <img class="arrow"  src="../image/rght_arrow.png">
                                </div>


                            </div>


                            <br>


                            <div class="downimgs" >


                              <!--  <img class="downimgs" src="../image/ipad-air-2-silver-1.jpg">

                                <img class="downimgs" src="../image/ipad-air-2-silver-1.jpg">

                                <img class="downimgs" src="../image/ipad-air-2-silver-1.jpg">

-->
                            </div>




                        </div>

                        <div class="down">

                            <div>
                                <h4>SL offered</h4></div>

                            <div class="SLoffered">

                            <!--    <img class="SL" src="../image/SL_game.png"> 
                                <img class="SL" src="../image/SL_music.png"> 
                                <img class="SL" src="../image/SL_read.png">
                                <img class="SL" src="../image/SL_serieA.jpg">-->

                            </div>

                            <div id="CaratButton">

                                               <a href="deviceCaratteristics.php?q=<?php  echo $_GET["q"]; ?>">Device caratteristics 
                </a>

                            </div>

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