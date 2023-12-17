
    let faq = document.querySelectorAll(".FAQ-title")
    let faqMessage=document.querySelectorAll(".FAQ-message")
    let arrow =  document.querySelectorAll(".fa-angle-down")
    // faq[0].addEventListener('click',function(){
    //     faqMessage[0].style ="display:block"
    // })
    // faq[1].addEventListener('click',function(){
    //     faqMessage[1].style ="display:block"
    // })
    // faq[2].addEventListener('click',function(){
    //     faqMessage[2].style ="display:block"
    // })
    // faq[3].addEventListener('click',function(){
    //     faqMessage[3].style ="display:block"
    // })

    for(let i=0; i<faq.length;i++){
        faq[i].addEventListener('click',function(){

            
            if(faqMessage[i].classList.contains('hidden')){
                faqMessage[i].classList.remove('hidden')
                faqMessage[i].classList.add('visible')
                arrow[i].classList.remove('fa-angle-down')
                arrow[i].classList.add('fa-angle-up')
               
            }
            else if(faqMessage[i].classList.contains('visible')){
                faqMessage[i].classList.remove('visible')
                faqMessage[i].classList.add('hidden')
                arrow[i].classList.remove('fa-angle-up')
                arrow[i].classList.add('fa-angle-down')
            }
        })
    }

    // for(let i=0; i<faq.length;i++){
    //     faq[i].addEventListener('click',function(){
    //         faqMessage[i].style ="display:none"
    //         console.log(i)
    //     })
    // }

    