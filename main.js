$(document).ready(function(){

    let carros = [
        {name: 'COMET SAFARI', price: 710000, seat: '2', img: 'comet'},
        {name: 'OCELOT PARIAH', price: 1420000, seat: '2', img: 'ocelot'},
        {name: 'UBERMACHT SC1', price: 1603000, seat: '2', img: 'ubermacht'},
        {name: 'GROTTI CHEETAH', price: 650000, seat: '2', img: 'grotti'},
        {name: 'OVERFLOD ENTITY XF', price: 795000, seat: '2', img: 'overflod'},
        {name: 'TRUFFADE ADDER', price: 1000000, seat: '2', img: 'truffade'},
        {name: 'PEGASSI MONROE', price: 490000, seat: '2', img: 'monroe'},
        {name: 'ENUS COGNOSCENTI', price: 185000, seat: '2', img: 'enus'},
        {name: 'PEGASSI VACCA', price: 240000, seat: '2', img: 'vacca'},
    ]

    carros.forEach(carro => {

        /* setando o template */
        
        let template = $($('#template_card').html())

        /* seta o padrão de converção e faz a formatação */

        const formartValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 3 })

        let priceConverted = formartValue.format(carro.price)

        /* aplicando os valores na tags da template */

        template.find('.template-card-seat').text(carro.seat);

        template.find('.template-card-figure').attr('src', `img/cars/${carro.img}.jpg`)

        template.find('.template-card-name').text(carro.name)

        template.find('.template-card-price').text(priceConverted)

        /* mandar o card feito para a sua div */

        $('.template-card-destination').append(template)

    })
})