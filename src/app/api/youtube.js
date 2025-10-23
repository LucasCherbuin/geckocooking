const YOUTUBE_API = process.env.YOUTUBE_API;

export async function youtube(params) {
    try {
        // charge le lecteur youtube
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // crée le lecteur youtube avec une configuration
        var player;

        window.onYoutubeIFrameAPIReady = function() {
            player = new YT.player('player', {
                heigt: '390',
                width: '640',
                videoId: 'M71cUVf-VE',
                playerVars: {
                    'playinline': 1
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        //appelle l'API quand le lecteur est pret
        function onPlayerReady(event) {
            event.target.playVideo();
            }
    } catch (err) {
        console.error("Le lecteur n'est pas disponible");
    }
}
