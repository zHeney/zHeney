
$(document).ready(function(){

    // loopClouds();
    // $('#clouds').animate({ 'background-position': '100000000000000%'}, 40000000000000000, 'linear');

// codaSlider
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

// Contact hover
    // $("#contacts p").hover(function(){
    //     $("#bGroundRight").removeClass();
    //     $("#bGroundRight").addClass("eye2");},
    //     function(){
    //         $("#bGroundRight").removeClass();
    //         $("#bGroundRight").addClass("eye1");}
    // );

// left/right Side backgrounds
    var fadeTime = 400;

    $("#menu p a").click(function(){
        var leftSideClass = $(this).attr("leftSideClass");
        var rightSideClass = $(this).attr("rightSideClass");

        $("#leftSide").removeClass().addClass(leftSideClass);
        $("#bGroundLeft").fadeOut(fadeTime,function(){
            $("#leftSide").removeClass();
            $(this).removeClass().addClass(leftSideClass);
            $(this).css({'display':'block'});
        });

        $("#bGroundRight").fadeOut(fadeTime,function(){
            $(this).removeClass().addClass(rightSideClass);
            $(this).fadeIn(fadeTime);
        });
    });

    // Player
    $(".jp-jplayer").jPlayer("volume", 1);

    $(".jp-jplayer").bind($.jPlayer.event.volumechange,function (event){
        $(".jp-jplayer").jPlayer("volume",event.jPlayer.options.volume);
    });


    $(".jp-stop").click(function(){
        $(".jp-jplayer").jPlayer("stop");
    });

    // console.log($.jPlayer);

	var links = [
		"pict/boomFace.png",
		"pict/piano.png",
		"pict/flame.png",
		"pict/cubes.png",
		"pict/birds.png",
		"pict/tape.png",
		"pict/orch.png",
		"pict/treeBirds.png",
		"pict/rex.png",
		"pict/trip.png",
		"pict/bombs.png",
		"pict/boomFace.png"
	];

    setTimeout(function(){
        for(var key in links){
            $.get(links[key]);
        }
    }, 4000);









});
