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