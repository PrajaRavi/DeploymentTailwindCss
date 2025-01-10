gsap.from(".logo",{
    scale:0,
    duration:1,
    repeat:3,
    // delay:1

})
gsap.from(".bar",{
    scale:0.2,
    duration:0.8,
    // delay:1

})
gsap.from('.container',{
    // scale:3,
    y:-100,
    delay:1,

})
// gsap.from('.')

gsap.to('.ravi-img',
    // {
        {scale:1,
            y:40,
            // delay:1,
            // repeat:-1,
            duration:0.1,
            // scrollTrigger:"#page2 .box1",
            scrollTrigger:{
    trigger:".ravi",
    scroller:"body",
    // markers:true,
    start:"top 100%",
    end:"top 50%",
    scrub:4,
    
            },
            // yoyo:true,
    
        }
    )
gsap.from('#About .right',
    // {
        {
            // scale:1,
            // y:40,
            x:600,
            // delay:1,
            // repeat:-1,
            duration:0.1,
            // scrollTrigger:"#page2 .box1",
            scrollTrigger:{
    trigger:"#About .right",
    scroller:"body",
    // markers:true,
    start:"top 100%",
    end:"top 60%",
    scrub:4,
    
            },
            // yoyo:true,
    
        }
    )
    
gsap.from('.servpara',
    // {
        {
            // scale:1,
            // y:40,
            x:600,
            opacity:0,
            // delay:1,
            // repeat:-1,
            duration:0.1,
            // scrollTrigger:"#page2 .box1",
            scrollTrigger:{
    trigger:".servpara",
    scroller:"body",
    // markers:true,
    start:"top 40%",
    end:"top 60%",
    scrub:4,
    
            },
            // yoyo:true,
    
        }
    )
    
gsap.from('.serv-sec .boxes',{
    x:"100vw",
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger:".serv-sec .boxes",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 60%",
        scrub:3,
        
                },
                

})
gsap.from('.work .boxes .work-img-box',{
    x:"100vw",
    opacity:0,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:".work .boxes .work-img-box",
        // stagger:1,
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 60%",
        scrub:2,
        
                },
                

})
gsap.from('.contpara',{
    // x:"100vw",
    scale:0.2,
    opacity:0,
    duration:0.3,
    // delay:0.3,
    scrollTrigger:{
        trigger:".contpara",
        // stagger:1,
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:2,
        
                },
                

})
gsap.from('.alag .tele',{
    // x:"100vw",
    // scale:0.2,
    // left:"100p",
    x:"100px",
    opacity:0,
    duration:0.3,
    // delay:0.3,
    scrollTrigger:{
        trigger:".alag .tele",
        // stagger:1,
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:2,
        
                },
                

})
gsap.from('.alag .phone',{
    // x:"100vw",
    // scale:0.2,
    // left:"100p",
    x:"-100px",
    opacity:0,
    duration:0.3,
    // delay:0.3,
    scrollTrigger:{
        trigger:".alag .phone",
        // stagger:1,
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:2,
        
                },
                

})
gsap.from('.social-media a',{
    // x:"100vw",
    // scale:0.2,
    // left:"100p",
    x:"-100px",
    opacity:0,
    duration:1,
    stagger:1,
    // delay:0.3,
    scrollTrigger:{
        trigger:".social-media a",
        // stagger:1,
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 100%",
        scrub:2,
        
                },
                

})
gsap.from('form input',{
    // x:"100vw",
    // scale:0.2,
    // left:"100p",
    x:"-100px",
    opacity:0,
    duration:0.6,
    stagger:1,
    // delay:0.3,
    scrollTrigger:{
        trigger:"form input",
        // stagger:1,
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:2,
        
                },
                

})
