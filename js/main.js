// function loopClouds(){
//     $('#clouds').animate({ 'background-position-x': '-449px'}, 20000, 'linear',function(){
//         $("#clouds").css({"background-position-x":"449px"});
//         loopClouds();
//     });
// }

$(document).ready(function(){

    // loopClouds();
    // $('#clouds').animate({ 'background-position': '-100000000000%'}, 40000000000, 'linear');

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
    // $("#contacts p").hover(handlerIn, function(){
    //     $("#bGroundRight").removeClass();
    //     $("#bGroundRight").addClass("eye2");
    // });

    $("#contacts p").hover(function(){
        $("#bGroundRight").removeClass();
        $("#bGroundRight").addClass("eye2");},
        function(){
            $("#bGroundRight").removeClass();
            $("#bGroundRight").addClass("eye1");}
    );
    // $("#contacts p a").hover(function(){$(this).fadeOut(100);$(this).fadeIn(100);});

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

    //  **************************double Click switcher
    // $('#menu p:first-child a').click(function(){
    //     if ($("#leftSide").hasClass('blue')) {
    //         $("#leftSide").removeClass('blue').addClass('beige');
    //         return
    //     }
    //     $("#leftSide").removeClass('red').addClass('beige');
    // });

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
    $(".jp-jplayer").jPlayer("volume", 1);

    $(".jp-jplayer").bind($.jPlayer.event.volumechange,function (event){
        $(".jp-jplayer").jPlayer("volume",event.jPlayer.options.volume);        
    });
    
    $(".jp-jplayer").bind($.jPlayer.event.play,function (event){
        window.location.hash = event.jPlayer.status.media.title;
    });

    $(".jp-stop").click(function(){
        $(".jp-jplayer").jPlayer("stop");
    });


    // console.log($.jPlayer);	
    var links = ["pict/eye2.jpg","pict/boomFace.png","pict/piano.png","pict/flame.png","pict/cubes.png","pict/birds.png","pict/tape.png","pict/orch.png","pict/treeBirds.png","pict/rex.png","pict/trip.png","pict/bombs.png","pict/boomFace.png"];
    for(key in links){
        $.get(links[key]);
        }
});
