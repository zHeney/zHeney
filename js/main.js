$(document).ready(function(){
// Coda Slider
    $('#slider-id').codaSlider({
            dynamicTabs:false, 
            firstPanelToLoad: 11,
            slideEaseDuration: 400
    });

// Clouds
$('#clouds').animate({ 'background-position-x': '-100000000000%',}, 40000000000, 'linear');


// MENU Active element
    $("#menu p a").click(function(){
	$(".active").removeClass("active");
	$(this).parent().addClass("active");
    });

//  double Click switcher
    // $('#menu p:first-child a').click(function(){
    //     if ($("#leftSide").hasClass('blue')) {
    //         $("#leftSide").removeClass('blue').addClass('beige');
    //         return
    //     }
    //     $("#leftSide").removeClass('red').addClass('beige');
    // });


    var fadeTime = 400;

// ************************************************  Cyber Apocalypse
    $("#menu p:first-child a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGroundLeft").fadeOut(fadeTime,function(){
        $("#bGroundLeft").fadeIn(fadeTime);
        $("#bGroundLeft").removeClass().addClass('beige');
        });
            $("#underBall").removeClass().addClass('ballBrown');
            $("#Ball").fadeOut(fadeTime,function(){
            $("#Ball").fadeIn(fadeTime);
            $("#Ball").removeClass().addClass('ballBrown');
            });
    });

// ************************************************  Experiments
    $("#menu p:nth-child(2) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGroundLeft").fadeOut(fadeTime,function(){
        $("#bGroundLeft").fadeIn(fadeTime);
        $("#bGroundLeft").removeClass().addClass('beige');
            $("#bGroundRight, #boomBlock").fadeOut(fadeTime,function(){
            $("#bGroundRight").fadeIn(fadeTime);
            $("#bGroundRight").removeClass().addClass('flame');
            });        
        });
    });
 
 // ************************************************  Trip   
    $("#menu p:nth-child(3) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGroundLeft").fadeOut(fadeTime,function(){
        $("#bGroundLeft").fadeIn(fadeTime);
        $("#bGroundLeft").removeClass().addClass('beige');
            $("#bGroundRight, #boomBlock").fadeOut(fadeTime,function(){
            $("#bGroundRight").fadeIn(fadeTime);
            $("#bGroundRight").removeClass().addClass('trip');
            });           
        });
    });

// ************************************************  Gloomy-Hop    
    $("#menu p:nth-child(4) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGroundLeft").fadeOut(fadeTime,function(){
        $("#bGroundLeft").fadeIn(fadeTime);
        $("#bGroundLeft").removeClass().addClass('beige');
            $("#bGroundRight, #boomBlock").fadeOut(fadeTime,function(){
            $("#bGroundRight").fadeIn(fadeTime);
            $("#bGroundRight").removeClass().addClass('treeBirds');
            });
        });
    });

// ************************************************  Lyric-Hop
    $("#menu p:nth-child(5) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGroundLeft").fadeOut(fadeTime,function(){
        $("#bGroundLeft").fadeIn(fadeTime);
        $("#bGroundLeft").removeClass().addClass('beige'); 
            $("#bGroundRight, #boomBlock").fadeOut(fadeTime,function(){
            $("#bGroundRight").removeClass().addClass('birds');
            $("#bGroundRight").fadeIn(fadeTime);
            });
        });
    });

// ************************************************  90bpm-HipHop
    $("#menu p:nth-child(6) a").click(function(){
        $("#leftSide").removeClass().addClass('red');
        $("#bGroundLeft").fadeOut(fadeTime,function(){
        $("#bGroundLeft").fadeIn(fadeTime);
        $("#bGroundLeft").removeClass().addClass('red');
            $("#bGroundRight, #boomBlock").fadeOut(fadeTime,function(){
            $("#bGroundRight").removeClass().addClass('tape');
            $("#bGroundRight").fadeIn(fadeTime);
            });
        });
    });

// ************************************************  Electronic    
    $("#menu p:nth-child(7) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGroundLeft").fadeOut(fadeTime,function(){
        $("#bGroundLeft").fadeIn(fadeTime);
        $("#bGroundLeft").removeClass().addClass('beige');
            $("#bGroundRight, #boomBlock").fadeOut(fadeTime,function(){
            $("#bGroundRight").removeClass().addClass('cubes');
            $("#bGroundRight").fadeIn(fadeTime);
            });
        });
    });

// ************************************************  Funky-Blues    
    $("#menu p:nth-child(8) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGroundLeft").fadeOut(fadeTime,function(){
        $("#bGroundLeft").fadeIn(fadeTime);
        $("#bGroundLeft").removeClass().addClass('beige');
            $("#bGroundRight, #boomBlock").fadeOut(fadeTime,function(){
            $("#bGroundRight").removeClass().addClass('rex');
            $("#bGroundRight").fadeIn(fadeTime);
            });         
        });
    });

// ************************************************  Piano-Guitar    
    $("#menu p:nth-child(9) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGroundLeft").fadeOut(fadeTime,function(){
        $("#bGroundLeft").fadeIn(fadeTime);
        $("#bGroundLeft").removeClass().addClass('beige');
            $("#bGroundRight, #boomBlock").fadeOut(fadeTime,function(){
            $("#bGroundRight").removeClass().addClass('piano');
            $("#bGroundRight").fadeIn(fadeTime);
            });        
        });
    });

// ************************************************  Sympho    
    $("#menu p:nth-child(10) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGroundLeft").fadeOut(fadeTime,function(){
        $("#bGroundLeft").fadeIn(fadeTime);
        $("#bGroundLeft").removeClass().addClass('beige');
            $("#bGroundRight, #boomBlock").fadeOut(fadeTime,function(){
            $("#bGroundRight").removeClass().addClass('orch');
            $("#bGroundRight").fadeIn(fadeTime);
            });
        });
    });
       
    $("#menu p:nth-child(11) a").click(function(){
        $("#leftSide").removeClass().addClass('blue');
        $("#bGroundLeft").fadeOut(fadeTime,function(){
        $("#bGroundLeft").fadeIn(fadeTime);
        $("#bGroundLeft").removeClass().addClass('blue');
        });
            $("#underBall").removeClass().addClass('ballBlue');
            $("#Ball").fadeOut(fadeTime,function(){
            $("#Ball").fadeIn(fadeTime);
            $("#Ball").removeClass().addClass('ballBlue');
            });
    });


   // ************************* slideUp 
    // $("#bombs").click(function() {
    // $("#clouds").slideUp(1000);
    // });

    // ************************toggleClass
    // $('#rings').click(function(){
    // $(this).toggleClass('two');
    // });

    // ************************* switcher
    // function toggle(el) {
    // el.style.display = (el.style.display == 'none') ? '' : 'none'
    // }

    // Player
    $(".jp-jplayer").bind($.jPlayer.event.volumechange,function (event){
        $(".jp-jplayer").jPlayer("volume",event.jPlayer.options.volume);		
    });
    
    $(".jp-jplayer").bind($.jPlayer.event.play,function (event){
        window.location.hash = event.jPlayer.status.media.title;
    });

    $(".jp-stop").click(function(){
        $(".jp-jplayer").jPlayer("stop");
    });

    console.log($.jPlayer);	

});
