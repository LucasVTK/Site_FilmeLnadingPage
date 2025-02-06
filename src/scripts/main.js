document.addEventListener('DOMContentLoaded', function(){

    const sectionTrailer = document.querySelector('.trailer')
    const alturaTrailer = sectionTrailer.clientHeight
    const link_logar = document.querySelector('.link-logar')

    window.addEventListener('scroll', function(){
        const posAt = window.scrollY

        if(posAt < alturaTrailer){
            ocultaLogar()
        } else {
            exibeLogar()
        }
    })

    function ocultaLogar(){
        link_logar.classList.add('link-logar--is-hidden')
    }

    function exibeLogar(){
        link_logar.classList.remove('link-logar--is-hidden')
    }
})
