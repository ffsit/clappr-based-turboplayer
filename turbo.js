var autoplay_turboplayer = 0;
var vsrc = [
      //{ src: "http://domain.tld/playlist.m3u8", label: "Selection Name"}
    ];

var player = new Clappr.Player({
    source: vsrc[0].src,
    parentId: "#turboplayer",
    height: "100%",
    width: "100%",
    plugins: {'playback': [RTMP]},
    rtmpConfig: {
        scaling:'stretch',
        playbackType: 'live',
        bufferTime: 1,
        startLevel: 0
    }
});
var src;
var chooseServer = function(){
    if(autoplay_turboplayer == 0){
        autoplay_turboplayer == 1;
        src =  document.getElementById("vsources").value;
        player.destroy();
        player = new Clappr.Player({
            source: src,
            height: "100%",
            width: "100%",
            parentId: "#turboplayer",
            autoPlay: true,
            plugins: {'playback': [RTMP]},
            rtmpConfig: {
                scaling:'stretch',
                playbackType: 'live',
                bufferTime: 1,
                startLevel: 0
            }
        });
    } else {
        src =  document.getElementById("vsources").value;
        player.load(src);
    }
}


var fadeIn = function(){
    var element = document.getElementById('turboplayer_controls_wrapper');
    element.className += " turboplayer_controls_fadeIn";
}

var fadeOut = function(){
    document.getElementById("turboplayer_controls_wrapper").className =
       document.getElementById("turboplayer_controls_wrapper").className.replace
          ( /(?:^|\s)turboplayer_controls_fadeIn(?!\S)/g , '' );
    document.getElementById("turboplayer_fill_btn").blur();
    document.getElementById("vsources").blur();
}

var select = document.getElementById("vsources");

vsrc.map(function(videosource){
    select[select.length] = new Option(videosource.label, videosource.src);
});

var playerFill = function(){
    var player_window = document.getElementById("turboplayer");
    var overworld = document.getElementById("overworld");
    //console.log("fill toggle: ", player_window.classList);
    //player_window.classList.toggle("turboplayer_wrapper");
    overworld.classList.toggle("overworld");
    player_window.classList.toggle("turboplayer_fill");
}
