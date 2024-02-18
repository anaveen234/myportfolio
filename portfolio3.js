setTimeout(()=>{
    document.getElementById('knowme').style.display="block";
    document.getElementById('knowme').addEventListener('click',()=>{
    document.getElementById('pc').style.transform="translateX(-50%)";
    
    
    let x=document.getElementsByClassName('profession-container');
    x[0].style.transform="translateX(0%)";
    let img=document.getElementById('profile-image');
    img.style.transform="translateX(-50%)";
    let container=document.getElementsByClassName('image');
    container[0].style.transform="translateX(0%)";
    displayCharactersSlowly();
    setTimeout(()=>{
        document.getElementById('cv-btn').style.display="block";
        document.getElementById('p').style.display="block";
    },5000);
    
    });
    
},8500);
/*screen on */
    function screenon(){
    setInterval(() =>{
        document.getElementById('screen').style.backgroundColor="blueviolet";
    },3000);
    setTimeout(aboutme,5000);
    }
    
    function aboutme(){ 
    
        const word=["Want to know","About me?",];
        let textindex=0;
        let charindex=0;
        function displaytext(){  
        const text=word[textindex];
        const char=text[charindex];
       // if(textindex==1){displaybuttonn();}
        document.getElementById('text').innerHTML+=char;
        charindex++;
        if(charindex==text.length){
            charindex=0;
            textindex=(textindex+1)%word.length;
            //if(textindex==0){hidebutton();}
            setTimeout(() =>{
                document.getElementById('text').innerHTML='';
                setTimeout(displaytext,350);
            },1000);
       }else{
            setTimeout(displaytext,100);
    }}
    displaytext(); 
    }
    //displaybutton();
    screenon();
    
    
    const textToDisplay =[ "Hello! I'm","Naveen Arcot"];
    const outputContainer = document.getElementById('h3');
    const outputContainer2 = document.getElementById('h1');
    
    let textindex = 0;
    let charindex = 0;
    let intervalId;
    function displayCharactersSlowly() {
    intervalId = setInterval(() => {
    const text=textToDisplay[textindex];
    const char=text[charindex];
    if(textindex==0){
    outputContainer.style.color="var(--textcolor1)";
    outputContainer.style.fontSize="1.8rem";
    outputContainer.style.fontWeight="800";
    outputContainer.innerHTML += char;
    
    charindex++;}
    else{
    outputContainer2.style.color="blueviolet";
    outputContainer2.style.fontSize="3.9rem";
    outputContainer2.style.fontWeight="700";
    outputContainer2.innerHTML += char;
    charindex++;
    }
    if (charindex == text.length) {
        charindex=0;
        textindex++;
    if(textIndex == textsToDisplay.length)
        clearInterval(intervalId);
    }
    }, 200);
    }
 
    /*dark mode */
    let darkmode=document.getElementById('dark-mode');
    let sunicon=document.getElementById('sun-icon');
    let moonicon=document.getElementById('moon-icon');
    darkmode.addEventListener('click',function(){
        moonicon.style.display=(moonicon.style.display==="none")? "inline-block": "none";
        sunicon.style.display=(sunicon.style.display==="none")? "inline-block": "none";
        document.body.classList.toggle('darkmode');

    });
    /*moonicon.addEventListener('click',function(){
        let x=document.getElementsByTagName('section')
        for(let i of x){
            i.style.backgroundColor="black";
        }
    });
    sunicon.addEventListener('click',function(){
        let x=document.getElementsByTagName('section');
        for(let i of x){
            i.style.backgroundColor="white";
        }
    });*/
    
    /*display education */
    let educont=document.getElementsByClassName('education-container');
    
    
    for(let i=0;i<3;i++){
    educont[i].addEventListener('click',function(){
        let educontent=document.getElementById('ec'+i);
        educontent.style.transform="translateY(2%)";
        
    });
    }
    
    /*move projects */
    let movel=document.getElementById('move-left');
    let mover=document.getElementById('move-right');
    let i=0;
   
    movel.addEventListener('click',function(){
        var project=document.getElementById('slide');
        project.style.transition="1.5s";
        project.style.transform+="translateX(100%)";
    });
    mover.addEventListener('click',function(){
        var project=document.getElementById('slide');
        project.style.transition="1.5s";
        project.style.transform+="translateX(-100%)";
        
    });
    
    /*project flipping */
    let flipbtn=document.getElementsByClassName('project-flipb');
    let flipbtn2=document.getElementsByClassName('project-flipb2');
    let projectc=document.getElementsByClassName('project-content');
    for(let n=0;n<flipbtn.length;n++){
    flipbtn[n].addEventListener('click',function(){
        
        projectc[n].style.transform="rotateY(180deg)";
    });
}

for(let m=0;m<flipbtn.length;m++){
    flipbtn2[m].addEventListener('click',function(){
        
        projectc[m].style.transform="rotateY(360deg)";
    });
}

/*certifications */
let ci=document.getElementsByClassName('certificate-icon');
for(let b=0;b<ci.length;b++){
ci[b].addEventListener('click',function(){
    let cc=document.getElementById('cc'+b);
    cc.style.transform="translateX(-10%)";
});
}
/*section slide */
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    let header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100);
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top < offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}


/*Scroll reveal */

ScrollReveal({
    reset:true,
    reload:true,
    distance:'50px',
    duration:1500,
    delay:100
});



ScrollReveal().reveal(' #heading, .education-container', {origin: 'top'});

ScrollReveal().reveal(' .project, .footer,#passion', {origin: 'bottom'});
ScrollReveal().reveal(' .media-links,#move-right,#win2', {origin: 'right'});
ScrollReveal().reveal(' #profile-image', {origin: 'bottom', reset:false});
ScrollReveal().reveal(' .certificate-container, #move-left,form,#win1,#content', {origin: 'left'});

