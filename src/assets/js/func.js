

$(function(){
    
    $(window).scroll(function(){
        var w = window.innerWidth;
		if(w<992){
			if ($(window).scrollTop() > 30)
            {
                $("#select-colors").hide('fast');
            }
            else
            { 
                $("#select-colors").show('fast');
            }
		} 
        
    });
});

window.onresize = function() { 
    var w = window.innerWidth;
    if(w>992){
        console.log("window.onresize.. "+w+"px;");
        $("#select-colors").show('fast');
    }  
};

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)

});
wow.init();

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '100%',
        videoId: 'b9U3asR7HpM',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

players = {};
window.onYouTubeIframeAPIReady = function() {
    $('.youtube-video').each(function() {
        players[$(this).attr('id')] = new YT.Player($(this).attr('id'), {
            videoId: $(this).attr('id'),
            events: {
                'onStateChange': onPlayerStateChange($(this).attr('id'))
            }
        });
    });
};

function onPlayerStateChange(player_id) {
    return function(event) {

        if (players[player_id].getPlayerState() == 3 || players[player_id].getPlayerState() == 1) {
            //stop the auto scrolling
            console.log("stop scolling video: " + player_id);
        }

        if (players[player_id].getPlayerState() == 0 || players[player_id].getPlayerState() == 2) {
            //start auto scrolling.
            console.log("start scolling video: " + player_id);
            $('.ocultar').css('display', 'block');
        }


    };
}

function reproducir1() {
    //document.getElementById("rep").src += "&autoplay=1";
    players['b9U3asR7HpM'].playVideo();
    $('.ocultar').css('display', 'none');
}