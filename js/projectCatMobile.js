gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let Projects = document.querySelectorAll('.Project')
Projects.forEach(Project=>{
    gsap.to(Project,{
        y:0,
        opacity:1,
        scrollTrigger:{
            trigger:Project,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
})