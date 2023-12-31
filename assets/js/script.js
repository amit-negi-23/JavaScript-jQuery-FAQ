    let faqs = document.querySelectorAll(".FAQ-title")
    let faqMsgs=document.querySelectorAll(".FAQ-message")
    let arrows = document.querySelectorAll(".fa-angle-down")

    faqs.forEach(function(faq){
        faq.addEventListener('click',function(){
            let arr = this.firstElementChild;
            console.log(arr)
            let faqmsg =this.nextElementSibling;
            if(faqmsg.classList.contains('visible')){
                faqmsg.classList.remove('visible')
                arr.classList.remove('fa-angle-up')
            }else{
                faqMsgs.forEach((faqmsg)=>{faqmsg.classList.remove('visible')})
                arrows.forEach((arr)=>{arr.classList.remove('fa-angle-up')})
                faqmsg.classList.add('visible')
                arr.classList.add('fa-angle-up')
            }
            })
    })





    // let faq = document.querySelectorAll(".FAQ-title")
    // let faqMessage=document.querySelectorAll(".FAQ-message")
    // let arrow =  document.querySelectorAll(".fa-angle-down")
    

    // for(let i=0; i<faq.length;i++){
    //     faq[i].addEventListener('click',function(){
    //         if(faqMessage[i].classList.contains('visible')){
    //             faqMessage[i].classList.remove('visible')
    //             arrow[i].classList.add('fa-angle-down')
    //             arrow[i].classList.remove('fa-angle-up')
    //             // console.log("click")
               
    //         }
    //         else{
    //             faqMessage[i].classList.add('visible')
    //             arrow[i].classList.add('fa-angle-up')
    //             arrow[i].classList.remove('fa-angle-down')
    //         }
    //     })
    // }


    // let faqs = document.querySelectorAll(".FAQ-title");
    // let faqMsgs = document.querySelectorAll(".FAQ-message")
    // let allarrow = document.querySelectorAll(".fa-angle-down")


    //     faqs.forEach(function(faq){
    //         faq.addEventListener('click',function(){
    //             if(this.parentElement.children[1].classList.contains('visible')){
    //                 this.parentElement.children[1].classList.remove('visible')
    //                 this.children[0].classList.remove('fa-angle-up')

    //             }else{
    //                 this.parentElement.children[1].classList.toggle('visible')
    //                 this.children[0].classList.toggle('fa-angle-up')

    //             }
           

    //         })
    //     })