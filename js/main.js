// testing





// end testing

const nav = document.getElementById('nav');

document.onscroll = function(){
    
    nav.style.height = '65px'
    nav.style.padding = "10px 80px"
    nav.style.backgroundColor = '#4633af'
    
    if(pageYOffset == 0 && pageXOffset == 0){
        nav.style.height = '125px'
        nav.style.padding = "30px 80px"
        nav.style.backgroundColor = 'rgba(255,255,255,0)'
    }
}
const alink = document.querySelectorAll("#list_nav li a")
for(let i = 0; i < alink.length ; i++){
    console.log(alink[i])
    alink[i].onclick = () => {
        for(let i = 0; i < alink.length ; i++){
            alink[i].classList.remove('active')
        }
        alink[i].classList.add('active')
        clearInterval(navTimer)
        
    }
    alink[i].onmouseup = ()=>{
        navTimer = setInterval(navMoving,200)
    }
}
function navMoving(){
    if(scrollY > 70){
        for(let i = 0; i < alink.length ; i++){
            alink[i].classList.remove('active')
        }
        alink[0].classList.add('active')
        
    }
    if(scrollY > 700){
        for(let i = 0; i < alink.length ; i++){
            alink[i].classList.remove('active')
        }
        alink[1].classList.add('active')
    }
    if(scrollY > 1800){
        for(let i = 0; i < alink.length ; i++){
            alink[i].classList.remove('active')
        }
        alink[2].classList.add('active')
    }
    if(scrollY > 2600){
        for(let i = 0; i < alink.length ; i++){
            alink[i].classList.remove('active')
        }
        alink[3].classList.add('active')
    }
    if(scrollY > 5100){
        for(let i = 0; i < alink.length ; i++){
            alink[i].classList.remove('active')
        }
        alink[5].classList.add('active')
    }
    
}

// 0 700 1800 2600 5100
let navTimer = setInterval(navMoving,200)


const nav2B = document.getElementById('times')
const nav2BC = nav2B.children
const navDiv = document.getElementsByClassName('nav_div')[0];
const phonesLi = document.querySelectorAll('#list2 li a')
nav2B.onclick = () =>{
    if(nav2BC[0].classList == 'svgactive'){
        nav2BC[0].classList.remove('svgactive')
        nav2BC[1].classList.add('svgactive')
        navDiv.style.height = '200px'
    }else if(nav2BC[1].classList == 'svgactive'){
        nav2BC[1].classList.remove('svgactive')
        nav2BC[0].classList.add('svgactive')
        navDiv.style.height = '0px'
    }
    
}
for(let i = 0 ; i < phonesLi.length;i++){
    phonesLi[i].onclick = () => {
    for(let i = 0 ; i < phonesLi.length;i++){
        phonesLi[i].classList.remove('active')
    }
    phonesLi[i].classList.add('active')

    }

}


const spans = document.getElementsByClassName("span")
let index = 0;
function wordsSlider(){
    for(let  i = 0; i < spans.length ; i++){
        spans[i].classList.remove("span_active")
    }
    if(index < spans.length -1 ){
        index++
    }else{
        index = 0;
    }
    spans[index].classList.add("span_active")
}

const wordsTimer = setInterval(wordsSlider,2000)

const sliderItems = document.getElementsByClassName("slider_items");
let x = 0;


document.querySelector(".next").onclick = ()=>{
    autoSlider('next')
}
document.querySelector(".prev").onclick = () => {
    autoSlider('prev')
}
let trans = -113.5
function autoSlider(direct){
        if( document.body.clientWidth < 600){
            if(direct == 'next' && x < sliderItems.length -  1  || x < sliderItems.length - 1){
                x++;
                clearInterval(sliderTimer)
                sliderTimer = setInterval(autoSlider,4000)
        }else{
            x = 0
            clearInterval(sliderTimer)
                sliderTimer = setInterval(autoSlider,4000)
        }
        if(direct == 'prev'){
            if( x >  0){
                x = x - 2
                clearInterval(sliderTimer)
                sliderTimer = setInterval(autoSlider,4000)
            }
            if(x < 0){
                x = sliderItems.length - 1
                clearInterval(sliderTimer)
                sliderTimer = setInterval(autoSlider,4000)
            }
        }
    }
    if(document.body.clientWidth > 600 && document.body.clientWidth < 768){
        if(direct == 'next' && x < sliderItems.length -  2  || x < sliderItems.length - 2){
            x++;
            clearInterval(sliderTimer)
            sliderTimer = setInterval(autoSlider,4000)
    }else{
        x = 0
        clearInterval(sliderTimer)
            sliderTimer = setInterval(autoSlider,4000)
    }
    if(direct == 'prev'){
        if( x >  0){
            x = x - 2
            clearInterval(sliderTimer)
            sliderTimer = setInterval(autoSlider,4000)
        }
        if(x < 0){
            x = sliderItems.length - 2
            clearInterval(sliderTimer)
            sliderTimer = setInterval(autoSlider,4000)
        }
    }
}
if(document.body.clientWidth >= 768){
    if(direct == 'next' && x < sliderItems.length -  3  || x < sliderItems.length - 3){
        x++;
        clearInterval(sliderTimer)
        sliderTimer = setInterval(autoSlider,4000)
}else{
    x = 0
    clearInterval(sliderTimer)
        sliderTimer = setInterval(autoSlider,4000)
}
if(direct == 'prev'){
    if( x >  0){
        x = x - 2
        clearInterval(sliderTimer)
        sliderTimer = setInterval(autoSlider,4000)
    }
    if(x < 0){
        x = sliderItems.length - 3
        clearInterval(sliderTimer)
        sliderTimer = setInterval(autoSlider,4000)
    }
}
}
    // if(direct == 'next' && x < sliderItems.length - 3  || x < sliderItems.length - 3 ){
    //         x++;
    // }else{
    //     x = 0
        
    // }
    // if(direct == 'prev'){
    //     if( x >= sliderItems.length - 3){
    //         x = x - 2
            
    //     }else{
    //         x = sliderItems.length - 3
    //     }
    // }
    
    slide()
    
    
    
}
function slide(){
    
    for(let i = 0 ;i < sliderItems.length ; i++){
        sliderItems[i].style.transform = `translatex(${x * trans}%)`;
        
    }
    
    
}
var sliderTimer = setInterval(autoSlider,4000)
const backUp = document.getElementById("back_up")


function backk(){
    if(scrollY > 580) {
        backUp.style.opacity = 1 
    } else{ 
        backUp.style.opacity = 0
    }
    
}
backUp.onclick = () => this.scrollTo(0,0)
const buttonTimer = setInterval(backk,100)

const links = document.querySelectorAll('.butttons a');
const dives = document.getElementsByClassName('one')
console.log(links[0])
for(let i = 0;i< links.length;i++){
    links[i].onclick = function(){
        for(let i = 0;i< links.length;i++){
            links[i].classList.remove('active')
        }
        this.classList.add('active')
        for(let i =0 ; i < dives.length ; i++){
            dives[i].classList.remove('container_active')
        }
        if(links[0].classList == 'active'){
    
            document.querySelector('.container1').classList.add("container_active")
        }
        if(links[1].classList == 'active'){
    
            document.querySelector('.container2').classList.add("container_active")
        }
        if(links[2].classList == 'active'){
    
            document.querySelector('.container3').classList.add("container_active")
        }
    }
}
////

const out = document.getElementById("out")
const inbox = document.getElementById("in")
const video = document.getElementById('video')
inbox.onclick = () => {
    video.style.display = 'flex'
}
out.onclick = (e) => {
    video.style.display = 'none'
}
document.onkeyup = (e) => {
    if(e.keyCode == 27){
        video.style.display = 'none'
        light1.style.zIndex = '-10000000000000000000000'
        light1.style.opacity = '0'
        rotate[0].style.transform = "rotatex(90deg)"
        light2.style.zIndex = '-10000000000000000000000'
        light2.style.opacity = '0'
        rotate[1].style.transform = "rotatex(90deg)"
    }
}


const light = document.getElementsByClassName('light_box')
const light1 = document.getElementById('light1')
const light2 = document.getElementById('light2')
const rotate = document.getElementsByClassName("rotate")

light[0].onclick = () => {
    light1.style.zIndex = '10000000000000000000000'
    light1.style.opacity = '1'
    rotate[0].style.transform = "rotatex(0deg)"
}
light[1].onclick = () => {
    light2.style.zIndex = '10000000000000000000000'
    light2.style.opacity = '1'
    rotate[1].style.transform = "rotatex(0deg)"
}
const z = document.getElementById('z')
const backck = document.getElementsByClassName('backck')
const y = document.getElementById('x')
backck[0].onclick = () =>{
    light1.style.zIndex = '-10000000000000000000000'
    light1.style.opacity = '0'
    rotate[0].style.transform = "rotatex(90deg)"
}
backck[1].onclick = () =>{
    light2.style.zIndex = '-10000000000000000000000'
    light2.style.opacity = '0'
    rotate[1].style.transform = "rotatex(90deg)"
}
z.onclick = () => {
    light1.style.zIndex = '-10000000000000000000000'
    light1.style.opacity = '0'
    rotate[0].style.transform = "rotatex(90deg)"
    
}

y.onclick = () => {
    light2.style.zIndex = '-10000000000000000000000'
    light2.style.opacity = '0'
    rotate[1].style.transform = "rotatex(90deg)"
}
const sliderPhonesItems = document.getElementsByClassName("pones_slider");
let t = 0;


document.querySelector(".nextes").onclick = ()=>{
    autoPhonesSlider('nextes')
}
document.querySelector(".preves").onclick = () => {
    autoPhonesSlider('preves')
}

function autoPhonesSlider(direct){
    if( document.body.clientWidth < 426){

        if(direct == 'nextes' && t < sliderPhonesItems.length - 1  || t < sliderPhonesItems.length - 1){
            t++;
            clearInterval(sliderPhonesTimer)
            sliderPhonesTimer = setInterval(autoPhonesSlider,4000)

    }else{
        t = 0
        clearInterval(sliderPhonesTimer)
        sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
    }
    if(direct == 'preves'){
        if( t > 0){
            t = t - 2
            clearInterval(sliderPhonesTimer)
            sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
        }
        if(t < 0){
            t = sliderPhonesItems.length - 1
            clearInterval(sliderPhonesTimer)
            sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
        }
    }
}
if(document.body.clientWidth > 426 && document.body.clientWidth < 600){

    if(direct == 'nextes' && t < sliderPhonesItems.length - 2  || t < sliderPhonesItems.length - 2){
        t++;
        clearInterval(sliderPhonesTimer)
        sliderPhonesTimer = setInterval(autoPhonesSlider,4000)

}else{
    t = 0
    clearInterval(sliderPhonesTimer)
    sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
}
if(direct == 'preves'){
    if( t > 0){
        t = t - 2
        clearInterval(sliderPhonesTimer)
        sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
    }
    if(t < 0){
        t = sliderPhonesItems.length - 2
        clearInterval(sliderPhonesTimer)
        sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
    }
}
}
if(document.body.clientWidth > 600 && document.body.clientWidth < 768){
    if(direct == 'nextes' && t < sliderPhonesItems.length - 3  || t < sliderPhonesItems.length - 3){
        t++;
        clearInterval(sliderPhonesTimer)
        sliderPhonesTimer = setInterval(autoPhonesSlider,4000)

}else{
    t = 0
    clearInterval(sliderPhonesTimer)
    sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
}
if(direct == 'preves'){
    if( t > 0){
        t = t - 2
        clearInterval(sliderPhonesTimer)
        sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
    }
    if(t < 0){
        t = sliderPhonesItems.length - 3
        clearInterval(sliderPhonesTimer)
        sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
    }
}
}
if(document.body.clientWidth > 768){
    if(direct == 'nextes' && t < sliderPhonesItems.length - 4  || t < sliderPhonesItems.length - 4){
        t++;
        clearInterval(sliderPhonesTimer)
        sliderPhonesTimer = setInterval(autoPhonesSlider,4000)

}else{
    t = 0
    clearInterval(sliderPhonesTimer)
    sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
}
if(direct == 'preves'){
    if( t > 0){
        t = t - 2
        clearInterval(sliderPhonesTimer)
        sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
    }
    if(t < 0){
        t = sliderPhonesItems.length - 4
        clearInterval(sliderPhonesTimer)
        sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
    }
}
}
if(document.body.clientWidth >= 992){
    if(direct == 'nextes' && t < sliderPhonesItems.length - 5  || t < sliderPhonesItems.length - 5){
        t++;
        clearInterval(sliderPhonesTimer)
        sliderPhonesTimer = setInterval(autoPhonesSlider,4000)

}else{
    t = 0
    clearInterval(sliderPhonesTimer)
    sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
}
if(direct == 'preves'){
    if( t > 0){
        t = t - 2
        clearInterval(sliderPhonesTimer)
        sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
    }
    if(t < 0){
        t = sliderPhonesItems.length - 5
        clearInterval(sliderPhonesTimer)
        sliderPhonesTimer = setInterval(autoPhonesSlider,4000)
    }
}
}

    // if(direct == 'nextes' && t < sliderPhonesItems.length - 5  || t < sliderPhonesItems.length - 5 ){
    //         t++;

        
    // }else{
    //     t = 0
        
    // }
    // if(direct == 'preves'){
    //     if( t >= sliderPhonesItems.length - 5){
    //         t = t - 2
            
    //     }else{
    //         t = sliderPhonesItems.length - 5
    //     }
    // }
   
    slidePhones()
    
    
    
}
function slidePhones(){
    
    for(let i = 0 ;i < sliderPhonesItems.length ; i++){
        sliderPhonesItems[i].style.transform = `translatex(${t * -125}%)`;
        
    }
    
}
var sliderPhonesTimer = setInterval(autoPhonesSlider,4000)

const headingCounter = document.getElementsByClassName('heading_counter')
const v = 1;

function headingOne (){
    if(scrollY > 5100){
        headingCounter[0].textContent = parseFloat(headingCounter[0].textContent) + 1
        if(headingCounter[0].textContent == 231){
            clearInterval(oneTimer)
        }
}
}
let oneTimer = setInterval(headingOne,13)

function headingTwo (){
    if(scrollY > 5100){
        headingCounter[1].textContent = parseFloat(headingCounter[1].textContent) + 1
        if(headingCounter[1].textContent == 85){
            clearInterval(twoTimer)
        }
}
}
let twoTimer = setInterval(headingTwo,35)
function headingThree (){
    if(scrollY > 5100){
        headingCounter[2].textContent = parseFloat(headingCounter[2].textContent) + 1
        if(headingCounter[2].textContent == 59){
            clearInterval(threeTimer)
        }
}
}
let threeTimer = setInterval(headingThree,51)
function headingFour (){
    if(scrollY > 5100){
        headingCounter[3].textContent = parseFloat(headingCounter[3].textContent) + 1
        if(headingCounter[3].textContent == 127){
            clearInterval(fourTimer)
        }
}
}
let fourTimer = setInterval(headingFour,24)

// start
const inputs = document.getElementsByClassName("input");
const labels = document.getElementsByClassName("label");
const textarea = document.getElementById('textarea')
const warning = document.getElementsByClassName('warning')
inputs[0].addEventListener('focus',function(){
    labels[0].style.top = "8px"
    labels[0].style.fontSize = '10px'
})
inputs[0].addEventListener('blur',function(){
    if(this.value == ''){
        labels[0].style.top = "15px"
    labels[0].style.fontSize = '14px'
    }
    else{
        labels[0].style.top = "8px"
        labels[0].style.fontSize = '10px'
    }
})
inputs[1].addEventListener('focus',function(){
    labels[1].style.top = "76.5px"
    labels[1].style.fontSize = '10px'
})
inputs[1].addEventListener('blur',function(){
    if(this.value == ''){
        labels[1].style.top = "83.5px"
    labels[1].style.fontSize = '14px'
    }
    else{
        labels[1].style.top = "76.5px"
        labels[1].style.fontSize = '10px'
    }
})
textarea.addEventListener('focus',function(){
    labels[2].style.top = "147.5px"
    labels[2].style.fontSize = '10px'
})
textarea.addEventListener('blur',function(){
    if(this.value == ''){
        labels[2].style.top = "154.5px"
        labels[2].style.fontSize = '14px'
    }else{
        labels[2].style.top = "147.5px"
        labels[2].style.fontSize = '10px'
    }
})
