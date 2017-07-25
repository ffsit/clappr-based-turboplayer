// toggle autoplay, set to true for video to autoplay
var autoplay_turboplayer = false;

// vsrc: array of objects which list video sources.
// var src = [
//     { src: "http://video.com", label: "video 1"}
//     ,{ src: "http://video2.com", label: "video 2"}
// ]
var vsrc = [
    { src: "http://google.com", label: "test1"}
    ,{ src: "http://google.com", label: "test2"}
    ];

// create the player with default source being the first
// option in vsrc.
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

// recreates the video player with the new source.
// @param source: string containing url.
var chooseServer = function(source){
    if(autoplay_turboplayer == false){
        autoplay_turboplayer == true;
        player.destroy();
        player = new Clappr.Player({
            source: source,
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
        player.load(source);
    }
}


// mouse in makes the overlay GUI show up by changing the class.
var fadeIn = function(){
    var element = document.getElementById('turboplayer_controls_wrapper');
    element.className += " turboplayer_controls_fadeIn";
}

// mouse out makes the overlay GUI fade out.
var fadeOut = function(){
    document.getElementById("turboplayer_controls_wrapper").className =
       document.getElementById("turboplayer_controls_wrapper").className.replace
          ( /(?:^|\s)turboplayer_controls_fadeIn(?!\S)/g , '' );
    document.getElementById("turboplayer_fill_btn").blur();
    document.getElementById("vsources").blur();
}

// used to populate the first entry in the dropdown.
// this is bad coding, can't think of a better way right now.
// once
var menu_count = false
// currently selected video source.
var selected = document.getElementById("vsrc_selected");
// video source list
var ul = document.getElementById("vsources");

// dynamically create the dropdown list from the vsrc options.
var vsrc_dropdown = function(item){
    // on first load, populate the div with the first option.
    if (!menu_count){
        var content = document.createTextNode(item.label);
        selected.appendChild(content);
    }
    var li = document.createElement("li");
    var content = document.createTextNode(item.label);
    // add attribute vsrc to the list item for easy access for dropdown_click().
    li.setAttribute("vsrc", item.src);
    li.setAttribute("class", "vsrc_item");
    li.setAttribute("onclick", "dropdown_click(this);");
    li.appendChild(content);
    ul.appendChild(li);
    // this is bad coding, can't think of a better way right now.
    if(!menu_count){
        menu_count = true;
    }
}

// handle the click on choosing video source.
var dropdown_click = function(element){
    // display selected source at the top.
    selected.textContent = element.textContent || element.innerText;
    // make the change of video source.
    chooseServer(element.getAttribute("vsrc"));
}

// call vsrc_dropdown to fill out the video source dropdown.
vsrc.map(vsrc_dropdown);

// fills the available window with the video, a la twitch theater mode.
var playerFill = function(){
    var player_window = document.getElementById("turboplayer");
    var overworld = document.getElementById("overworld");
    overworld.classList.toggle("overworld");
    player_window.classList.toggle("turboplayer_fill");
}
