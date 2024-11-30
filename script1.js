// my text which are going to show on the page //
var typed1 = new Typed('#elements',{
    strings: ['My name is Kshitiz Saxena and this is my portfolio. My passion is'],
    typeSpeed: 150,
    onComplete: function () {
        var typed2 = new Typed('#element',{
            strings: [' Web developing', 'Graphic designing', 'Web designing'],
            typeSpeed: 100,
        });    
    },
});

   