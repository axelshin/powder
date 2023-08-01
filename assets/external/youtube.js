// var $$play_button$$ = document.querySelector('[data-yt-play-button]')
// var $$preview$$ = document.querySelector('[data-yt-preview]')
// var $$video_holder$$ = document.querySelector('[data-yt-video-holder]')
// var $$video_id$$ = $$video_holder$$.dataset.ytVideoId

// $$play_button$$.addEventListener('click', create)

// function create() {
//   $$video_holder$$.classList.add('yt-wait')
//   var tag = document.createElement('script')
//   tag.src = "https://www.youtube.com/iframe_api"
//   var firstScriptTag = document.getElementsByTagName('script')[0]
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
// }

// function onYouTubeIframeAPIReady() {
//   new YT.Player('yt-video-player', {
//     videoId: $$video_id$$,
//     playerVars: { 'autoplay': 1, 'controls': 0 },
//     events: {
//       'onReady': onPlayerReady,
//     }
//   })
// }

// function onPlayerReady(event) {
//   event.target.playVideo()
//   $$video_holder$$.classList.add('yt-loaded')
//   $$preview$$.addEventListener('transitionend', () => $$preview$$.style.display = 'none')
// }


// add YT video ==============================================================================================================================================================================================================================================
document.addEventListener("DOMContentLoaded", function() {
  var div;
  var	n;
  var	v = document.getElementsByClassName("youtube-player");
  for (n = 0; n < v.length; n++) {
      div = document.createElement("div");
      div.setAttribute("data-id", v[n].dataset.id);
      div.innerHTML = noThumb(v[n].dataset.id);
      div.onclick = noIframe;
      v[n].appendChild(div);
  }
});

function noThumb(id) {
  var thumb = ""; //'<img src="https://i.ytimg.com/vi/ID/maxresdefault.jpg">'
  var thumb2 = document.querySelector(".video-block__poster");
  var	play = ''; //<div class="play"></div>
  return thumb.replace("ID", id) + play;
}

function noIframe() {
  var iframe = document.createElement("iframe");
  var embed = "https://www.youtube-nocookie.com/embed/ID?autoplay=1&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  iframe.setAttribute("allow", "autoplay; encrypted-media");
  this.parentNode.replaceChild(iframe, this);
}
// ==================================================================================================================================================================================================================================================================
