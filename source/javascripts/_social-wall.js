$(document).ready(function($){
    $('#social-stream').dcSocialStream({
        feeds: {
            twitter: {
                id: '/9927875,#designchemical,designchemical',
                thumb: true
            },
            tumblr: {
                id: 'richters',
                thumb: 250
            }
        },
        rotate: {
            delay: 0
        },
        twitterId: 'designchemical',
        control: false,
        filter: true,
        wall: true,
        cache: false,
        max: 'limit',
        limit: 10,
        iconPath: 'images/dcsns-dark/',
        imagePath: 'images/dcsns-dark/'
    });
});
