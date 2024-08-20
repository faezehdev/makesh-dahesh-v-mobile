gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let services = document.querySelectorAll('.serviceBox')
services.forEach(s=>{
        gsap.from(s.querySelectorAll('.serviceDet'),{
            opacity:0,
            scale:1.3,
            delay:0.3,
            duration:0.8,
            scrollTrigger:{
                trigger:s,
                start:"top 50%",
                end:"bottom bottom",
                
            }
        })
        gsap.from(s.querySelectorAll('.imgS img'),{
            opacity:0,
            scale:1.3,
            delay:0.1,
            duration:0.8,
            scrollTrigger:{
                trigger:s,
                start:"top 50%",
                end:"bottom bottom",
                
            }
        })
 
})