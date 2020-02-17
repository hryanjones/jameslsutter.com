$(document).ready(function(){

	$('#header').load('./header.html'); /*loads header */

	$('#footer').load('./footer.html'); /*loads footer */
	

	

/* playlist for jplayer for the By Land or By Sea page */	
var byLandPlaylist = new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_byLand",
			cssSelectorAncestor: "#jp_container_byLand"
		}, [
			{ 
			title: "If You Want This	", 
			mp3:"/music/If%20You%20Want%20This_final.mp3" , 
			free: true ,
			poster:"/images/Slantsquach3wSarah.jpg"
			},
			{ 
			 title: "Fighter Down ", 
			mp3:"/music/FighterDown_TrueFinal.mp3" , 
			free: true , 
			poster:"/images/Slantsquach3wSarah.jpg" 
			},
			{ 
			 title: "Retreat is Not Surrender ", 
			mp3:"/music/RetreatIsNotSurrender-FINAL.MP3" , 
			free: true , 
			poster:"/images/Slantsquach3wSarah.jpg" 
			},
			{ 
			 title: "Fire on the Road (Live at HotH 2009) ", 
			mp3:"/music/FireOnTheRoad-HothLive-Levels2.MP3" , 
			free: true , 
			poster:"/images/Slantsquach3wSarah.jpg" 
			},
			{ 
			title: "The Mermaid and the Serpent (Live at Wabi 2007) ", 
			mp3:"/music/17%20The%20Mermaid%20and%20the%20Serpent.mp3" , 
			free: true , 
			poster:"/images/Slantsquach3wSarah.jpg" 
			},
			/*{ 
			 title: "Hippie Love Song (Live at Wabi 2007) ", 
			mp3:"/music/03%20Hippie%20Love%20Song.mp3" , 
			free: true , 
			poster:"/images/Slantsquach3wSarah.jpg" 
			},*/
			{ 
			 title: "Fear of Waking (2009 demo) ", 
			mp3:"/music/FearOfWaking_levels.mp3" , 
			free: true , 
			poster:"/images/Slantsquach3wSarah.jpg" 
			},
			/*{ 
			 title: "Fear of Waking (Live at HotH 2009) ", 
			mp3:"/music/FearOfWaking-HothLive-Levels.MP3" , 
			free: true , 
			poster:"/images/Slantsquach3wSarah.jpg" 
			},*/
			{ 
			 title: "Snapshot ", 
			mp3:"/music/Snapshot_FINAL.MP3" , 
			free: true , 
			poster:"/images/Slantsquach3wSarah.jpg" 
			}
	
				 
		], {
			playlistOptions: {
				enableRemoveControls: false,
				displayTime: 0
			},
			swfPath: "/js",
			supplied: "mp3",
			smoothPlayBar: true,
			wmode: "window",
			keyEnabled: true,
			audioFullScreen: true
		});

	/* playlist for the Shadow By Morning page */
	var shadowPlaylist = new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_shadow",
			cssSelectorAncestor: "#jp_container_shadow"
		}, [
			{
			title:"Ghosts and Legions",
			mp3:"/music/01%20Ghosts%20and%20Legions.mp3",
			free: true
			},
			{
			title:"Janus",
			mp3:"/music/02%20Janus.mp3",
			free: true
			},
			{
			title:"The Gunslinger",
			mp3:"/music/03%20The%20Gunslinger.mp3",
			free: true
			},
			{
			title:"House of Wax",
			mp3:"/music/04%20House%20of%20Wax.mp3",
			free: true
			},
			{
			title:"Alexandria (2007 Demo)",
			mp3:"/music/Alexandria%20(The%20Leaves%20of%20Man)%20-%20Shadow%20at%20Morning.mp3",
			free: true
			},
			{
			title:"The Whistle and the Drum (2007 Demo)",
			mp3:"/music/The%20Whistle%20and%20the%20Drum%20-%20Shadow%20At%20Morning.mp3",
			free: true
			}

				 
		], {
			playlistOptions: {
				enableRemoveControls: false,
				displayTime: 0
			},
			swfPath: "/js",
			supplied: "mp3",
			smoothPlayBar: true,
			wmode: "window",
			keyEnabled: true,
			audioFullScreen: true
		});

/* playlist for the Slamdaddy video section */
		var slamDaddyVidPlaylist = new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_sdVid",
			cssSelectorAncestor: "#jp_container_sdVid"
		}, [
						
			{
			title:"Parallax",
			m4v:"/music/slamDaddy-Parallax-2ndAve.m4v",
			ogv:"/music/slamDaddy-Parallax-2ndAve.ogv",
			/*webmv:"/music/slamDaddy-Parallax-2ndAve.webm",*/
			free: true, 
			poster:"/images/032903-SwallowTheMic-Vid.jpg"
			},
			{
			title:"Kindled",
			m4v:"/music/slamDaddy-Kindled-2ndAve.m4v",
			ogv:"/music/slamDaddy-Kindled-2ndAve.ogv",
			free: true, 
			poster:"/images/032903-SwallowTheMic-Vid.jpg"
			},
			{
			title:"11:03",
			m4v:"/music/slamDaddy-1103-2ndAve.m4v",
			ogv:"/music/slamDaddy-1103-2ndAve.ogv",
			free: true, 
			poster:"/images/032903-SwallowTheMic-Vid.jpg"
			},
			{
			title:"Prozac Boy",
			m4v:"/music/slamDaddy-ProzacBoy-2ndAve.m4v",
			ogv:"/music/slamDaddy-ProzacBoy-2ndAve.ogv",
			free: true, 
			poster:"/images/032903-SwallowTheMic-Vid.jpg"
			},
			{
			title:"Dawning Comprehension",
			m4v:"/music/slamDaddy-DawningComprehension-2ndAve.m4v",
			ogv:"/music/slamDaddy-DawningComprehension-2ndAve.ogv",
			free: true, 
			poster:"/images/032903-SwallowTheMic-Vid.jpg"
			}
			
							 
		], {
			playlistOptions: {
				enableRemoveControls: false,
				displayTime: 0
			},
			swfPath: "/js",
			supplied: "ogv, m4v",
			smoothPlayBar: true,
			keyEnabled: true,
			audioFullScreen: true
		});

			/* playlist for slamDaddy A Kick in the Junk */
	var slamDaddyKickPlaylist = new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_sdKick",
			cssSelectorAncestor: "#jp_container_sdKick"
		}, [
			{
			title:"Parallax",
			mp3:"/music/PARALLAX.mp3",
			free:true 
			},
			{
			title:"Smitten",
			mp3:"/music/SMITTEN.mp3",
			free:true 
			},
			{
			title:"Kindled",
			mp3:"/music/KINDLED.mp3",
			free:true 
			},
			{
			title:"The Weight of Wings",
			mp3:"/music/THE_WEIGHT_OF_WINGS.mp3",
			free:true 
			}
				 
		], {
			playlistOptions: {
				enableRemoveControls: false,
				displayTime: 0
			},
			swfPath: "/js",
			supplied: "mp3",
			smoothPlayBar: true,
			wmode: "window",
			keyEnabled: true,
			audioFullScreen: true
		});

	var slamDaddyWherePlaylist = new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_sdWhere",
			cssSelectorAncestor: "#jp_container_sdWhere"
		}, [
			{
			title:"11:03",
			mp3:"/music/slamDaddy-%201103.mp3",
			free:true 
			},
			{
			title:"Dawning Comprehension",
			mp3:"/music/slamDaddy-%20Dawning%20Comprehension.mp3",
			free:true 
			},
			{
			title:"Waiting for Me",
			mp3:"/music/slamDaddy-%20Waiting%20For%20Me.mp3",
			free:true 
			},
			{
			title:"GMOD",
			mp3:"/music/slamDaddy- GMOD.mp3",
			free:true 
			},
			{
			title:"Prozac Boy",
			mp3:"/music/slamDaddy-%20Prozac%20Boy.mp3",
			free:true 
			},
			{
			title:"Never",
			mp3:"/music/slamDaddy-%20Never.mp3",
			free:true 
			}				 
		], {
			playlistOptions: {
				enableRemoveControls: false,
				displayTime: 0
			},
			swfPath: "/js",
			supplied: "mp3",
			smoothPlayBar: true,
			wmode: "window",
			keyEnabled: true,
			audioFullScreen: true
		});

 
});


