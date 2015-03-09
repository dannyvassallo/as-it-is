$(document).ready(function($){
    $('#social-stream').dcSocialStream({
        feeds: {
            twitter: {
                id: '#asitisband'
            },
            instagram: {
                id: '#asitisband',
                accessToken: '186786085.91dbf99.da4d8fab71544cdba8645bd0a02f07a1',
                clientId: '91dbf99a184e43dca3cc115500a5ba58',
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
