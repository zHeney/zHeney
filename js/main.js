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


    $("#menu p a").click(function(){
        var leftSideClass = $(this).attr("leftSideClass");
        var rightSideClass = $(this).attr("rightSideClass");
        
        
        
        
        $("#bGroundLeft").fadeOut(fadeTime,function(){
            $(this).removeClass().addClass(leftSideClass);
            $(this).fadeIn(fadeTime);            
        });
        
        
        
        
        $("#bGroundRight").fadeOut(fadeTime,function(){
            $(this).removeClass().addClass(rightSideClass);
            $(this).fadeIn(fadeTime);
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
