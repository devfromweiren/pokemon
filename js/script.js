let AttributeRestraint;

$(document).ready(function () {
    $('.pokemonball').on('click', function () {
        $(this).toggleClass('jump')
        $('.tool-wrap').toggleClass('show')
    })

    $('.tool-wrap > .battle').on('click', function () {
        location.href = 'battle.html'
    })

    $('.pick-wrap .attribute').on('click', function () {
        $(this).toggleClass('picker')

        Battle()
    })

    $.get('./json/AttributeRestraint.json',function(data,status){
        AttributeRestraint = data;
    })

    console.log("AttributeRestraint= " + AttributeRestraint);
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
