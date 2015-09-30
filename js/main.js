$(document).ready(function(){
// Coda Slider
    $('#slider-id').codaSlider({
            dynamicTabs:false, 
            firstPanelToLoad: 11,
            slideEaseDuration: 400
    });

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

    $("#menu p:first-child a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGround").fadeOut(fadeTime,function(){
        $("#bGround").fadeIn(fadeTime);
        $("#bGround").removeClass().addClass('beige');
        });
    });

    $("#menu p:nth-child(2) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGround").fadeOut(fadeTime,function(){
        $("#bGround").fadeIn(fadeTime);
        $("#bGround").removeClass().addClass('beige');
        });
    });
    
    $("#menu p:nth-child(3) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGround").fadeOut(fadeTime,function(){
        $("#bGround").fadeIn(fadeTime);
        $("#bGround").removeClass().addClass('beige');
        });
    });
    
    $("#menu p:nth-child(4) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGround").fadeOut(fadeTime,function(){
        $("#bGround").fadeIn(fadeTime);
        $("#bGround").removeClass().addClass('beige');
        });
    });

    $("#menu p:nth-child(5) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGround").fadeOut(fadeTime,function(){
        $("#bGround").fadeIn(fadeTime);
        $("#bGround").removeClass().addClass('beige');
        });
    });

    $("#menu p:nth-child(6) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGround").fadeOut(fadeTime,function(){
        $("#bGround").fadeIn(fadeTime);
        $("#bGround").removeClass().addClass('beige');
        });
    });
    
    $("#menu p:nth-child(7) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGround").fadeOut(fadeTime,function(){
        $("#bGround").fadeIn(fadeTime);
        $("#bGround").removeClass().addClass('beige');
        });
    });
    
    $("#menu p:nth-child(8) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGround").fadeOut(fadeTime,function(){
        $("#bGround").fadeIn(fadeTime);
        $("#bGround").removeClass().addClass('beige');
        });
    });
    
    $("#menu p:nth-child(9) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGround").fadeOut(fadeTime,function(){
        $("#bGround").fadeIn(fadeTime);
        $("#bGround").removeClass().addClass('beige');
        });
    });
    
    $("#menu p:nth-child(8) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGround").fadeOut(fadeTime,function(){
        $("#bGround").fadeIn(fadeTime);
        $("#bGround").removeClass().addClass('beige');
        });
    });
    
    $("#menu p:nth-child(9) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGround").fadeOut(fadeTime,function(){
        $("#bGround").fadeIn(fadeTime);
        $("#bGround").removeClass().addClass('beige');
        });
    });
    
    $("#menu p:nth-child(10) a").click(function(){
        $("#leftSide").removeClass().addClass('beige');
        $("#bGround").fadeOut(fadeTime,function(){
        $("#bGround").fadeIn(fadeTime);
        $("#bGround").removeClass().addClass('beige');
        });
    });
    
    $("#menu p:nth-child(11) a").click(function(){
        $("#leftSide").removeClass().addClass('blue');
        $("#bGround").fadeOut(fadeTime,function(){
        $("#bGround").fadeIn(fadeTime);
        $("#bGround").removeClass().addClass('blue');
        });
    });


   // ************************* slideUp 
    $( "#bombs" ).click(function() {
    $("#ballBrown").slideUp(1000);
    });

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
