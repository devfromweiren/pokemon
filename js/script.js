

$(document).ready(function(){
    $('.pokemonball').on('click',function(){
        $(this).toggleClass('jump')
        $('.tool-wrap').toggleClass('show')
    })

    $('.tool-wrap > .battle').on('click',function(){
        location.href='battle.html'
    })

    $('.pick-wrap .attribute').on('click',function(){
        $(this).toggleClass('picker')

        Battle()

    })
})


function Battle(){
    let elements = [] ;

    $('.picker-wrap .picker').each(function(index){
        if(!elements.includes($(this).text())){
            elements.push($(this).text())
        }
    })
    
    console.log(elements)
}