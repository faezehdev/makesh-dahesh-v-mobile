
  //  MOBILE HEADER
  let headerr =  document.querySelector('.MobileHeader')
  let OPButton = document.querySelector('.Toggle')
  let CLButton = document.querySelector('.MobileHeader .close')
  let Menu = document.querySelector('.MobileHeader .Menu')

  OPButton.addEventListener('click',()=>{
    console.log('click');
            Menu.classList.add('Open')
            headerr.classList.add('h-open')
            OPButton.classList.toggle('Open')
  })
  CLButton.addEventListener('click',()=>{
    Menu.classList.remove('Open')
    headerr.classList.remove('h-open')
    OPButton.classList.toggle('Open')

})
