let theWheel = new Winwheel({
    'canvasId': 'roleta',
    'numSegments': 8,
    'fillStyle': '#3f3f3f',
    'textAlignment': 'center',
    'textMargin': 20,
    'lineWidth': 0.1,
    'outerRadius': 200,
    'segments': [{
        'fillStyle': 'red',
        'text': ' Desconto 10%'
    }, {
        'fillStyle': 'blue',
        'text': 'Desconto 15%'
    }, {
        'fillStyle': 'yellow',
        'text': 'Desconto 15%'
    }, {
        'fillStyle': '#e6f',
        'text': 'Tente Novamente'
    }, {
        'fillStyle': 'red',
        'text': 'Desconto 10%'
    }, {
        'fillStyle': 'blue',
        'text': 'Desconto 15%'
    }, {
        'fillStyle': 'yellow',
        'text': 'Desconto 20%'
    }, {
        'fillStyle': '#e6f',
        'text': 'Tente novamente'
    }, ],
    'animation': // Note animation properties passed in constructor parameters.
    {
        'type': 'spinToStop', // Type of animation.
        'duration': 5, // How long the animation is to take in seconds.
        'spins': 5,
        'easing': 'Power4.easeOut',
        'stopAngle': null,
        'direction': 'clockwise',
        'repeat': 0,
        'yoyo': true
    }
});