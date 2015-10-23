if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

var players;
var bliming;
var lastPauseTime = 0;


function unMarkAsPlayingTab(){
	if(lastPauseTime + 100 > Date.now()){
		console.log("too many calls");
		return;
	}
	lastPauseTime = Date.now();
	clearInterval(bliming);
	$(".playing").removeClass("playing");
}

function markAsPlayingTab(tab){
	unMarkAsPlayingTab();
	bliming = setInterval(function(){tab.toggleClass("playing");},500); // comment it
	//tab.addClass("playing"); // uncomment me
}

function findPlayingPlayerByTrak(trakTitle,callback){
    for(var keyPlayer in players){
        var player = players[keyPlayer];
        for(var keyTrak in player.playlist){
            var trak = player.playlist[keyTrak];
            if(trak.title == trakTitle){
                callback(player,keyTrak);
                return;
            }
        }
    }
};
        
$(document).ready(function(){

	    
    $(".jp-jplayer").bind($.jPlayer.event.play,function (event){
        window.location.hash = event.jPlayer.status.media.title.replace(/ /g, '_');
		findPlayingPlayerByTrak(event.jPlayer.status.media.title,function(player,keyTrak){
			var a = $(player.cssSelector.menu);
    		markAsPlayingTab(a.parent());
		});
    });
	
	$(".jp-jplayer").bind($.jPlayer.event.pause,function (event){
		unMarkAsPlayingTab();
    });


	var x = 1;
	var y = 1.1;
	var j = "asdasd";
	var arr = [x,y,j];
	var hhasd = arr[2]; // "asdasd"
	var css = {
		div:{
		    "text-decoration":"underline",
		    "font-style":"bold"
		},
		width:"100px"
	};

	//$("#asdf").animate(css.div,1000,"inline");
	//objecto.x;

	// ************************************************  Cyber Apocalypse

    var optioneThatYouNoNeedToDuplicate = {
        swfPath: "js",
        supplied: "oga, mp3",
        wmode: "window"
    };
	players = [

	new jPlayerPlaylist({
        menu:"#cyber",
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1",
	}, [

            {title:"Depths of Universe",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/Depths_of_Universe.mp3"},	

            {title:"SleepinGhost",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/SleepinGhost.mp3"},	

            {title:"First step",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/First_step.mp3"},

            {title:"Berseker Breakaz",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/Berseker_Breakaz.mp3"},	

            {title:"Superstition",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/Superstition.mp3"},	

            {title:"Hybrid",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/Hybrid.mp3"},
	
            {title:"129С",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/129С.mp3"},		

            {title:"Ardent",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/Ardent.mp3"},	

            {title:"Nuclear winter (concept)",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/Nuclear_winter.mp3"},		

            {title:"Quantum (concept)",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/Quantum.mp3"},	

            {title:"Dead space",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/Dead_space.mp3"},	

            {title:"Reactor",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/Reactor.mp3"},	

            {title:"Root (concept)",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/Root.mp3"},	

            {title:"Schism (concept)",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/Schism.mp3"},	

            {title:"B-system (concept)",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/B-system.mp3"},	

            {title:"Survivor droid (concept)",
            mp3:"http://sukinsan.com/zheney/Cyber-Apocalypse/Survivor_droid.mp3"}				

	],optioneThatYouNoNeedToDuplicate),

// ************************************************  Experiments

        new jPlayerPlaylist({
            menu:"#experiments",
            jPlayer: "#jquery_jplayer_2",
            cssSelectorAncestor: "#jp_container_2"
	}, [

            {title:"Winds of the forgotten worlds",
            mp3:"http://sukinsan.com/zheney/Experiments/Winds_of_the_forgotten_worlds.mp3"},

            {title:"Suicide Clown (concept)",
            mp3:"http://sukinsan.com/zheney/Experiments/Suicide_Clown.mp3"},

            {title:"Tale",
            mp3:"http://sukinsan.com/zheney/Experiments/Tale.mp3"},

            {title:"Hard option",
            mp3:"http://sukinsan.com/zheney/Experiments/Hard_option.mp3"},

            {title:"TranSisters",
            mp3:"http://sukinsan.com/zheney/Experiments/TranSisters.mp3"},

            {title:"Stain Steel",
            mp3:"http://sukinsan.com/zheney/Experiments/Stain_Steel.mp3"},

            {title:"ELEtone",
            mp3:"http://sukinsan.com/zheney/Experiments/ELEtone.mp3"},

            {title:"To Heaven",
            mp3:"http://sukinsan.com/zheney/Experiments/To_Heaven.mp3"},
            
            {title:"Before",
            mp3:"http://sukinsan.com/zheney/Experiments/Before.mp3"},

	],optioneThatYouNoNeedToDuplicate),

// ************************************************  Trip

	new jPlayerPlaylist({
        menu:"#trip",
		jPlayer: "#jquery_jplayer_3",
		cssSelectorAncestor: "#jp_container_3"
	}, [

            {title:"Voodoo (concept)",
            mp3:"http://sukinsan.com/zheney/Gloomy-Hop/Voodoo.mp3"},
	
            {title:"Cold Trip (concept)",
            mp3:"http://sukinsan.com/zheney/Trip/Cold_Trip.mp3"},

            {title:"Soporific haze",
            mp3:"http://sukinsan.com/zheney/Trip/Soporific_haze.mp3"},

            {title:"Tripanaceya",
            mp3:"http://sukinsan.com/zheney/Trip/Tripanaceya.mp3"},

            {title:"Stray in Hell",
            mp3:"http://sukinsan.com/zheney/Trip/Stray_In_Hell.mp3"},

            {title:"Fresh trash",
            mp3:"http://sukinsan.com/zheney/Trip/Fresh_trash.mp3"},

            {title:"iNDUST",
            mp3:"http://sukinsan.com/zheney/Trip/iNDUST.mp3"},

            {title:"Mutations",
            mp3:"http://sukinsan.com/zheney/Trip/Mutations.mp3"},

            {title:"Spitfire (concept)",
            mp3:"http://sukinsan.com/zheney/Trip/Spitfire.mp3"},

            {title:"Organik (concept)",
            mp3:"http://sukinsan.com/zheney/Trip/Organik.mp3"}

	],optioneThatYouNoNeedToDuplicate),

// ************************************************  Gloomy-Hop

        new jPlayerPlaylist({
            menu:"#gloomy",
            jPlayer: "#jquery_jplayer_4",
            cssSelectorAncestor: "#jp_container_4"
	}, [	

            {title:"Theatre of the Damned",
            mp3:"http://sukinsan.com/zheney/Gloomy-Hop/Theatre_of_the_Damned.mp3"},

            {title:"Boty beat",
            mp3:"http://sukinsan.com/zheney/Gloomy-Hop/Boty_beat.mp3"},

            {title:"Breathless",
            mp3:"http://sukinsan.com/zheney/Gloomy-Hop/Breathless.mp3"},

            {title:"Muddy outside",
            mp3:"http://sukinsan.com/zheney/Gloomy-Hop/Muddy_outside.mp3"},

            {title:"In the heart of the desert",
            mp3:"http://sukinsan.com/zheney/Gloomy-Hop/In_the_heart_of_the_desert.mp3"},

            {title:"Ghosts",
            mp3:"http://sukinsan.com/zheney/Trip/Ghosts.mp3"},

            {title:"Desolation",
            mp3:"http://sukinsan.com/zheney/Gloomy-Hop/Desolation.mp3"}            


	],optioneThatYouNoNeedToDuplicate),

// ************************************************  Lyric-Hop

        new jPlayerPlaylist({
            menu:"#lyric",
            jPlayer: "#jquery_jplayer_5",
            cssSelectorAncestor: "#jp_container_5"
	}, [	

            {title:"Spirit of loneliness",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Spirit_of_loneliness.mp3"},

            {title:"Heroic deed",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Heroic_deed.mp3"},

            {title:"Your unicity",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Your_unicity.mp3"},

			{title:"April (short)",
            mp3:"http://sukinsan.com/zheney/Gloomy-Hop/April.mp3"},

            {title:"Passed away",
            mp3:"http://sukinsan.com/zheney/Gloomy-Hop/Passed_away.mp3"},

            {title:"White Summer",
            mp3:"http://sukinsan.com/zheney/Gloomy-Hop/White_Summer.mp3"},

            {title:"Plesko",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Plesko.mp3"}	


	],optioneThatYouNoNeedToDuplicate),

// ************************************************  90bpm-HipHop

        new jPlayerPlaylist({
            menu:"#90bpm",
            jPlayer: "#jquery_jplayer_6",
            cssSelectorAncestor: "#jp_container_6"
	}, [

            {title:"Wassap!",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Wassap!.mp3"},

            {title:"Chao Laos",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Chao_Laos.mp3"},
			
            {title:"Big Boom Story",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Big_Boom_Story.mp3"},

            {title:"Party",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Party.mp3"},

            {title:"Will be fun",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Will_be_fun.mp3"},

            {title:"Monkeys",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Monkeys.mp3"},

            {title:"Fat Girl (short)",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Fat_Girl.mp3"},

            {title:"Flowers",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Flowers.mp3"},

            {title:"Returning from the past",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Returning_from_the_past.mp3"},

            {title:"Rumbl (concept)",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Rumbl.mp3"},

            {title:"Tubed",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Tubed.mp3"},

            {title:"Pianokio",
            mp3:"http://sukinsan.com/zheney/90bpm-HipHop/Pianokio.mp3"}


	],optioneThatYouNoNeedToDuplicate),

// ************************************************  Electronic

        new jPlayerPlaylist({
            menu:"#electronic",
            jPlayer: "#jquery_jplayer_7",
            cssSelectorAncestor: "#jp_container_7"
	}, [

            {title:"Fasta",
            mp3:"http://sukinsan.com/zheney/Electronic/Fasta_(instr).mp3"},

            {title:"Small problems (concept)",
            mp3:"http://sukinsan.com/zheney/Electronic/Small_problems.mp3"},

            {title:"Fuss (concept)",
            mp3:"http://sukinsan.com/zheney/Electronic/Fuss.mp3"},

            {title:"Experimental studies (concept)",
            mp3:"http://sukinsan.com/zheney/Electronic/Experimental_studies.mp3"},

            
            {title:"Dancing astronaut (concept)",
            mp3:"http://sukinsan.com/zheney/Electronic/Dancing_astronaut.mp3"},

            {title:"Luminous hands",
            mp3:"http://sukinsan.com/zheney/Electronic/Luminous_hands.mp3"},

            {title:"Relax",
            mp3:"http://sukinsan.com/zheney/Electronic/Relax.mp3"},

            {title:"Tranceloud",
            mp3:"http://sukinsan.com/zheney/Electronic/Tranceloud.mp3"},

            {title:"Fasta (feat Eastman)",
            mp3:"http://sukinsan.com/zheney/Electronic/Fasta_(feat_Eastman).mp3"}

	],optioneThatYouNoNeedToDuplicate),

// ************************************************  Funky-Blues

        new jPlayerPlaylist({
            menu:"#funky",
            jPlayer: "#jquery_jplayer_8",
            cssSelectorAncestor: "#jp_container_8"
	}, [	

            {title:"BeBoys",
            mp3:"http://sukinsan.com/zheney/Funky-Blues/BeBoys.mp3"},

            {title:"Ambitious Organ (concept)",
            mp3:"http://sukinsan.com/zheney/Funky-Blues/Ambitious_Organ.mp3"},
					
            {title:"AllFu (concept)",
            mp3:"http://sukinsan.com/zheney/Funky-Blues/AllFu.mp3"},

            {title:"Blues Rock",
            mp3:"http://sukinsan.com/zheney/Funky-Blues/Blues_Rock.mp3"},

            {title:"Blusa (concept)",
            mp3:"http://sukinsan.com/zheney/Funky-Blues/Blusa.mp3"},

            {title:"Crazy driver",
            mp3:"http://sukinsan.com/zheney/Funky-Blues/Crazy_driver.mp3"}

	],optioneThatYouNoNeedToDuplicate),

// ************************************************  Piano-Guitar

        new jPlayerPlaylist({
            menu:"#piano",
            jPlayer: "#jquery_jplayer_9",
            cssSelectorAncestor: "#jp_container_9"
	}, [						
            
            {title:"Almost William",
            mp3:"http://sukinsan.com/zheney/Piano-Guitar/Almost_William.mp3"},

            {title:"Butterfly",
            mp3:"http://sukinsan.com/zheney/Piano-Guitar/Butterfly.mp3"},

            {title:"Bruce (concept)",
            mp3:"http://sukinsan.com/zheney/Piano-Guitar/Bruce.mp3"},

            {title:"Spaneollo",
            mp3:"http://sukinsan.com/zheney/Piano-Guitar/Spaneollo.mp3"},

            {title:"Two Marsian Cowboys",
            mp3:"http://sukinsan.com/zheney/Piano-Guitar/Two_Marsian_Cowboys.mp3"},

            {title:"Pursuit",
            mp3:"http://sukinsan.com/zheney/Piano-Guitar/Pursuit.mp3"},

            {title:"Letters (concept)",
            mp3:"http://sukinsan.com/zheney/Piano-Guitar/Letters.mp3"},

            {title:"Meticulous (concept)",
            mp3:"http://sukinsan.com/zheney/Piano-Guitar/Meticulous.mp3"}

	],optioneThatYouNoNeedToDuplicate),

// ************************************************  Sympho

        new jPlayerPlaylist({
            menu:"#sympho",
            jPlayer: "#jquery_jplayer_10",
            cssSelectorAncestor: "#jp_container_10"
	}, [						

            {title:"Depressive Arts",
            mp3:"http://sukinsan.com/zheney/Sympho/Depressive_Arts.mp3"},

            {title:"Awakening",
            mp3:"http://sukinsan.com/zheney/Sympho/Awakening.mp3"},

            {title:"Barokko St",
            mp3:"http://sukinsan.com/zheney/Sympho/Barokko_St.mp3"},

            {title:"String Trio",
            mp3:"http://sukinsan.com/zheney/Sympho/String_Trio.mp3"},

            {title:"Internal flight",
            mp3:"http://sukinsan.com/zheney/Sympho/Internal_flight.mp3"},

            {title:"From folly to wisdom",
            mp3:"http://sukinsan.com/zheney/Sympho/From_folly_to_wisdom.mp3"},

            {title:"UnderWonder",
            mp3:"http://sukinsan.com/zheney/Sympho/UnderWonder.mp3"},

            {title:"Orcestral march",
            mp3:"http://sukinsan.com/zheney/Sympho/Orcestral_march.mp3"},

            {title:"GAD",
            mp3:"http://sukinsan.com/zheney/Sympho/GAD.mp3"},

            {title:"Piece of symphony (concept)",
            mp3:"http://sukinsan.com/zheney/Sympho/Piece_of_symphony.mp3"},

            {title:"PizzzCat (concept loop)",
            mp3:"http://sukinsan.com/zheney/Sympho/PizzzCat_(loop).mp3"},

            {title:"Orchestra (HipHop ver.)",
            mp3:"http://sukinsan.com/zheney/Sympho/Orchestra.mp3"},

            {title:"Thrill (HipHop ver.)",
            mp3:"http://sukinsan.com/zheney/Sympho/Thrill.mp3"},

            {title:"About one artist (HipHop ver.)",
            mp3:"http://sukinsan.com/zheney/Sympho/History_about_one_artist.mp3"}

	],optioneThatYouNoNeedToDuplicate),
        
    ];

    var hash = window.location.hash.substring(1).replace(/_/g, ' '); // ww'll store track title in the hash
    findPlayingPlayerByTrak(hash,function(player,keyTrak){
		setTimeout(function(){
		        var a = $(player.cssSelector.menu);
				a.click(); // focus tab

		        player.play(keyTrak); // play track
		        $('a:contains("' + hash + '"):first').parent().parent().addClass("jp-playlist-current"); // focus track
		        
		    },100);// this way it works, have no time to discover reason
		});

});
