let svgPath = document.querySelectorAll('.hasBranch')
let btns =[...document.querySelectorAll('.rep-item')] 
let Is1 =false
let Is2 =false

svgPath.forEach(svg=>{
    svg.addEventListener('click',(e)=>{

        if(!Is1){
            $(".hasBranch").removeClass("active")
            e.currentTarget.classList.add("active")
            let id = e.currentTarget.getAttribute('id')
            console.log('id',id);
          let res = btns.filter((f)=>{
            if(f.getAttribute('data-id')){
                console.log('data-id',f.getAttribute('data-id'));
                
                return f.getAttribute('data-id') == id
            }
            else{
                return
            }
            
            })
            
            console.log('result',res);
            if(res[0]){
                res[0].classList.add('active')
                  
             

            }
         
            Is1 = true   
        }
       else{
        $(".hasBranch").removeClass("active")
        e.currentTarget.classList.add("active")
            let id = e.currentTarget.getAttribute('id')
            console.log('id',id);
          let res = btns.filter((f)=>{
            if(f.getAttribute('data-id')){
                console.log('data-id',f.getAttribute('data-id'));
                
                return f.getAttribute('data-id') == id
            }
            else{
                return
            }
            
            })
            
            console.log('result',res);
            if(res[0]){
                res[0].classList.remove('active')
             
            }
           
            Is1 = false   
        }
     
    })
    
})
let svgPaths = [...document.querySelectorAll('.hasBranch')]
let btnss =document.querySelectorAll('.rep-item')
btnss.forEach(b=>{
    b.addEventListener('click',(e)=>{
        $(".rep-item").removeClass("active")
        e.currentTarget.classList.add("active")
        if(!Is1){
            let id = e.currentTarget.getAttribute('data-id')
            console.log('id',id);
          let res = svgPaths.filter((f)=>{
                return f.getAttribute('id') == id
            })   
            console.log('result',res[0]);
            if(res[0]){
                res[0].classList.add('active')
             
            }
            Is1 = true 
        }
        else{
            let id = e.currentTarget.getAttribute('data-id')
            console.log('id',id);
          let res = svgPaths.filter((f)=>{
                return f.getAttribute('id') == id
            })   
            console.log('result',res[0]);
            if(res[0]){
                res[0].classList.remove('active')
             
            }
            Is1 = false 
        }
    })
 
})