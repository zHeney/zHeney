<!DOCTYPE html>
<html lang="en">
    <head>
        <title>zHeney</title>

        <meta name="google-site-verification" content="vws9tr9SOPtK-XlwdCbaNflIcl38Skv2zwXJWmDxC-E" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href="cssReset.css" />
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="coda-slider.css" />
        <link rel="stylesheet" href="jplayer/jplayer.css" />

        <!--<script type="text/javascript" src="js/prefixfree.min.js"></script>-->
        <script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
        <script type="text/javascript" src="js/jquery.coda-slider-3.0.js"></script>
        <script type="text/javascript" src="js/jquery-ui-1.8.20.custom.min.js"></script>
        <script type="text/javascript" src="js/jquery.jplayer.min.js"></script>
        <script type="text/javascript" src="js/jplayer.playlist.min.js"></script>

        <script type="text/javascript" src="js/playlistContents.js"></script>
        <script type="text/javascript" src="js/main.js"></script>

    </head>
    <body>
        <!-- **************** Main block ****************** -->
        <div id="container">

            <!-- **************** LEFTSIDE ****************** -->
            <div id="leftSide">
            	<div id="bGroundLeft" class="blue"></div>
                <div id="clouds"></div>
                <div id="lines"></div>
                <div id="legs"></div>
                <div id="rings"></div>
                <div id="hat"></div>		 
                <div id="splash"></div>
                <div id="rock"></div>
                <a href="#">
                	<h1 id="zHeney">zHeney</h1>
                	<h1 id="zHeney2">zHeney</h1>
                </a>
                
                <!-- Menu -->
                <div id="menu">
                    <p><a href="#1" data-ref="slider-id another-slider">Cyber Apocalypse</a></p>
                    <p><a href="#2" data-ref="slider-id another-slider">Experiments</a></p>
                    <p><a href="#3" data-ref="slider-id another-slider">Trip</a></p>
                    <p><a href="#4" data-ref="slider-id another-slider">Gloomy-Hop</a></p>
                    <p><a href="#5" data-ref="slider-id another-slider">Lyric-Hop</a></p>
                    <p><a href="#6" data-ref="slider-id another-slider">90bpm-HipHop</a></p>
                    <p><a href="#7" data-ref="slider-id another-slider">Electronic</a></p>
                    <p><a href="#8" data-ref="slider-id another-slider">Funky-Blues</a></p>
                    <p><a href="#9" data-ref="slider-id another-slider">Piano-Guitar</a></p>
                    <p><a href="#10" data-ref="slider-id another-slider">Sympho</a></p>
                    <p class="active"><a href="#11" data-ref="slider-id another-slider">Contacts</a></p>
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
                </div>
                <!-- /CodaSlider -->
            </div><!--

        **************** RIGHTSIDE ****************** 
         --><div id="rightSide">
         		<div id="bGroundRight">
					<div id="boomBlock">
                		<div id="bombs"></div>
                		<div id="underBall">                
                			<div id="Ball" class="ballBlue"></div>
                		</div>
                		<div id="boomFace"></div>	
                	</div>
                </div>	
            </div><!-- /container -->
        </div>

        <!--**************** BOTTOMTSIDE ******************-->
        <div id="bottomSide">
            <div id="bottomBoard_1"></div>
            <div id="bottomBoard_2"></div>
            <div id="wave"></div> 
            <div id="bottomBoard_3">
                <a href="http://metrika.yandex.ru/stat/?id=17947261&amp;from=informer" target="_blank" rel="nofollow">	
                    <img src="//bs.yandex.ru/informer/17947261/3_0_4B4536FF_4B4536FF_1_pageviews" style="width: 88px; height: 31px; border: 0;" />
                </a>                
            </div>
        </div>

        <!-- analitics -->
        <?php require 'analitics.php'; ?>
    </body>
</html>