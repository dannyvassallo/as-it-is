$(document).ready(function($){
    $('#social-stream').dcSocialStream({
        feeds: {
            twitter: {
                id: '#asitisband'
            },
            instagram: {
                id: '#asitisband',
                accessToken: '9803372.8bab54b.ca9548c405784dfa9a751f355d84efa6',
                clientId: '8bab54bae9a64437859ca1a599e79e96',
                comments: 3,
                likes: 10,
            }
        },
        rotate: {
            delay: 0
        },
        twitterId: 'dannyftf',
        wall: true,
        order: 'random',
        iconPath: 'images/dcsns-dark/',
        imagePath: 'images/dcsns-dark/'
    });
});





https://instagram.com/oauth/authorize/?client_id=8bab54bae9a64437859ca1a599e79e96&redirect_uri=http://localhost&response_type=token
