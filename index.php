<!DOCTYPE html>
<html lang="en">
    <head>
        <title>zHeney</title>

        <meta name="google-site-verification" content="vws9tr9SOPtK-XlwdCbaNflIcl38Skv2zwXJWmDxC-E" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href="cssReset.css" />
        <link rel="stylesheet" href="style.css" />

    </head>
    <body>
        <!-- **************** Main block ****************** -->
        <div id="container">

            <!-- **************** LEFTSIDE ****************** -->
            <div id="leftSide">
                <div id="bGroundLeft" class="blue"></div>
                <div id="rock"></div>
                <div id="clouds"></div>
                <div id="legs"></div>
                <div id="rings"></div>
                <div id="hat"></div>		 
                <div id="splash"></div>
                <div id="lines"></div>
                <h1 id="zHeney">zHeney</h1>
                <h1 id="zHeney2">zHeney</h1>
               

                <!-- Menu -->
                <div id="menu">
                    <p><a id="cyber" leftSideClass="beige" rightSideClass="boomBlock" href="#1" data-ref="slider-id another-slider">Cyber Apocalypse</a></p>
                    <p><a id="experiments" leftSideClass="red" rightSideClass="flame" href="#2" data-ref="slider-id another-slider">Experiments</a></p>
                    <p><a id="trip" leftSideClass="redFog" rightSideClass="trip" href="#3" data-ref="slider-id another-slider">Trip</a></p>
                    <p><a id="gloomy" leftSideClass="gray" rightSideClass="treeBirds" href="#4" data-ref="slider-id another-slider">Gloomy-Hop</a></p>
                    <p><a id="lyric" leftSideClass="cold" rightSideClass="birds" href="#5" data-ref="slider-id another-slider">Lyric-Hop</a></p>
                    <p><a id="90bpm" leftSideClass="desert" rightSideClass="tape" href="#6" data-ref="slider-id another-slider">90bpm-HipHop</a></p>
                    <p><a id="electronic" leftSideClass="blue" rightSideClass="cubes" href="#7" data-ref="slider-id another-slider">Electronic</a></p>
                    <p><a id="funky" leftSideClass="blue" rightSideClass="rex" href="#8" data-ref="slider-id another-slider">Funky-Blues</a></p>
                    <p><a id="piano" leftSideClass="purple" rightSideClass="piano" href="#9" data-ref="slider-id another-slider">Piano-Guitar</a></p>
                    <p><a id="sympho" leftSideClass="purple" rightSideClass="orch" href="#10" data-ref="slider-id another-slider">Sympho</a></p>
                    <p class="active"><a leftSideClass="blue" rightSideClass="eye1" href="#11" data-ref="slider-id another-slider">Contacts</a></p>
                    <!-- <p><a leftSideClass="blue" rightSideClass="about" href="#12" data-ref="slider-id another-slider">About</a></p>                     -->
                </div>

                <!-- Slider -->
                <div class="coda-slider" id="slider-id">
                    <!-- Player -->
                    <?php require 'player.php'; ?>
                    <div id="contacts">
                        <p><a target="blank" href="https://www.facebook.com/zheney.evgeny">facebook.com</a></p>
                        <p><a target="blank" href="https://vk.com/zheney">vk.com</a></p>
                        <p><a target="blank" href="http://zheney.deviantart.com/">deviantart.com</a></p>
                    </div>
                    <div id="about">
                    	Hi, my name is zHeney
                    </div>
                </div>
                <!-- /CodaSlider -->
            </div><!--
        **************** RIGHTSIDE ****************** 
         --><div id="rightSide">
               	<div id="bGroundRight" class="eye1"></div>	
               	<div id="gradientRight"></div>
            </div><!-- /container -->
        </div>

        <!--**************** BOTTOMTSIDE ******************-->
        <div id="bottomSide">
            <div id="bottomBoard_1"></div>
            <div id="bottomBoard_2"></div>
            <div id="wave"></div> 
            <div id="bottomBoard_3">
                <a href="http://metrika.yandex.ru/stat/?id=17947261&amp;from=informer" target="_blank" rel="nofollow">	
                    <img src="//bs.yandex.ru/informer/17947261/3_0_4B4536FF_4B4536FF_1_pageviews" style="right: 0; width: 88px; height: 31px; border: 0; position: absolute;opacity: 0.3;" />
                </a>                
            </div>
        </div>

        <!-- analitics -->
        <?php require 'analitics.php'; ?>

        <link rel="stylesheet" type="text/css" media="screen" href="coda-slider.css" />
        <link rel="stylesheet" href="jplayer/jplayer.css" />

        <script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
        <script type="text/javascript" src="js/jquery.coda-slider-3.0.js"></script>
        <script type="text/javascript" src="js/jquery-ui-1.8.20.custom.min.js"></script>
        <script type="text/javascript" src="js/jquery.jplayer.min.js"></script>
        <script type="text/javascript" src="js/jplayer.playlist.min.js"></script>

        <script type="text/javascript" src="js/playlistContents.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
    </body>
</html>