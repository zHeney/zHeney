$(document).ready(function(){
// Coda Slider
    $('#slider-id').codaSlider({
            dynamicTabs:false, 
            firstPanelToLoad: 1,
            slideEaseDuration: 400
    });

// MENU Active element
    $("#menu p a").click(function(){
	$(".active").removeClass("active");
	$(this).parent().addClass("active");
    });

    // #zHeney OnClick
    $('#zHeney').click(function(){
        if ($("#leftSide").hasClass('beige')) {
            $("#leftSide").removeClass('beige').addClass('red');
            return
        }
        $("#leftSide").removeClass('red').addClass('beige');
    });

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
