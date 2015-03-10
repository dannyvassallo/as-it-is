// Widget JS
window.twttr = (function (d, s, id) {
    var t, js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return; js = d.createElement(s); js.id = id;
    js.src = "//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
    return window.twttr || (t = { _e: [], ready: function (f) { t._e.push(f) } });
}(document, "script", "twitter-wjs"));

// Callback

twttr.ready(function (twttr) {
        twttr.events.bind('tweet', function (event) {
            alert("callback");
        });
        twttr.events.bind('follow', function(event) {
            var followed_user_id = event.data.user_id;
            var followed_screen_name = event.data.screen_name;
        });

        twttr.events.bind('retweet', function(event) {
            var retweeted_tweet_id = event.data.source_tweet_id;
        });

        twttr.events.bind('favorite', function(event) {
            var favorited_tweet_id = event.data.tweet_id;
        });
});
