// Stay Standalone: Prevent links in standalone web apps opening Mobile Safari
(function(document,navigator,standalone) {
    // prevents links from apps from oppening in mobile safari
    // this javascript must be the first script in your <head>
    if ((standalone in navigator) && navigator[standalone]) {
        var curnode, location=document.location, stop=/^(a|html)$/i;
        document.addEventListener('click', function(e) {
            curnode=e.target;
            while (!(stop).test(curnode.nodeName)) {
                curnode=curnode.parentNode;
            }
            // Condidions to do this only on links to your own app
            // if you want all links, use if('href' in curnode) instead.
            if(
                'href' in curnode && // is a link
                (chref=curnode.href).replace(location.href,'').indexOf('#') && // is not an anchor
                (	!(/^[a-z\+\.\-]+:/i).test(chref) ||                       // either does not have a proper scheme (relative links)
                    chref.indexOf(location.protocol+'//'+location.host)===0 ) // or is in the same protocol and domain
            ) {
                e.preventDefault();
                location.href = curnode.href;
            }
        },false);
    }
})(document,window.navigator,'standalone');

let AttributeRestraint;

$(document).ready(function () {
    $('.pokemonball').on('click', function () {
        $(this).toggleClass('jump')
        $('.tool-wrap').toggleClass('show')
    })

    $('.tool-wrap > .battle').on('click', function () {
        event.preventDefault();
        location.href = 'battle.html'
    })

    $('.pick-wrap .attribute').on('click', function () {
        $(this).toggleClass('picker')

        Battle()
    })

    $.get('./json/AttributeRestraint.json',function(data,status){
        console.log(data)
    })

   // console.log("AttributeRestraint= " + AttributeRestraint);
})

let attributeSort = ['normal', 'fire', 'water', 'elec', 'grass', 'ice', 'fighter', 'poison', 'ground', 'fly', 'super', 'insect', 'rock', 'ghost', 'dragon', 'dark', 'iron', 'globin']
let efficient = 1.60
let invalid = 0.625
let fail = 0.391

function Battle() {
    let elements = [];
    let efficientArray = 

    $('.picker-wrap .picker').each(function (index) {
        let value = $(this).data('value')

        
        
        if (!elements.includes(value)) {
            elements.push(value)
        }
    })



    

    console.log(elements)
}
