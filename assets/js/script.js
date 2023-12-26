
    // let faq = document.querySelectorAll(".FAQ-title")
    // let faqMessage=document.querySelectorAll(".FAQ-message")
    // let arrow =  document.querySelectorAll(".fa-angle-down")
    

    // for(let i=0; i<faq.length;i++){
    //     faq[i].addEventListener('click',function(){

            
    //         if(faqMessage[i].classList.contains('hidden')){
    //             faqMessage[i].classList.remove('hidden')
    //             faqMessage[i].classList.add('visible')
    //             arrow[i].classList.remove('fa-angle-down')
    //             arrow[i].classList.add('fa-angle-up')
               
    //         }
    //         else if(faqMessage[i].classList.contains('visible')){
    //             faqMessage[i].classList.remove('visible')
    //             faqMessage[i].classList.add('hidden')
    //             arrow[i].classList.remove('fa-angle-up')
    //             arrow[i].classList.add('fa-angle-down')
    //         }
    //     })
    // }


    let faqs = document.querySelectorAll(".FAQ-title");
    let faqMsgs = document.querySelectorAll(".FAQ-message")
    let allarrow = document.querySelectorAll(".fa-angle-down")

    for(faq of faqs){
        faq.addEventListener('click',function(){
            this.parentElement.children[1].classList.toggle
            ('visible')
        })
    }