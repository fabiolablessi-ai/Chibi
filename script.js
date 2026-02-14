let chibi=document.getElementById("chibi");
let speech=document.getElementById("speech");

let encourageMessages=[
    "Meow. I love you so much, Mishrif.",
    "I am so very proud of you.",
    "Make sure you grab a bite if it's been awhile, my love.",
    "You're doing amazing, baby. As always. Give yourself some grace",
    "You're the most beautiful man I've ever had the privilege of encountering.",
    "You're so sweet and just, I love you.",
    "Studious ass. Make sure you take some of your well-deserved breaks."

];

// Encourage
function encourage(){
    let msg=encourageMessages[Math.floor(Math.random()*encourageMessages.length)];
    speech.innerText=msg;
    chibi.src="chibi_happy.png";

} 

// Miss me
function missMe(){
speech.innerText="Meow. Hi, baby. Tiny hug and big kisses deployed. Just call me.";
chibi.src="chibi_cute.png";
}

// Open when letters

    function openTired(){
        speech.innerText="Hi, my love. You don't have to be so strong right now. You always carry so much quietly. You push yourself harder than anyone sees. You don't complain enough. You just keep going, and sometimes that means you end up exhausted before you even realize it. Come on over here now. You're allowed to be tired. You're allowed to not have energy. You're allowed to sit down and just.. exist. If I were there, I'd pull you into my chest and let your whole weight lean into me. I'd run my fingers through your hair and tell you how proud I am of you, not just for what you accomplish, but for who you are. Rest doesn't make you weak. It means you've been trying. Close your eyes for a second. You don't have to prove anything tonight. I love you.";
        chibi.src="chibi_cute.png";
        heartExplosion();

    }
    function openStressed(){
        speech.innerText="Mishrifff, hi baby. Is your brain too loud right now? I know everything feels urgent and heavy and like you're responsible for fixing all of it. You don't have to solve the world in one night, yk. Take one more deep breath with me, like you always do. Just one. Inhale slowly. Exhale slower. You are capable. You always have been. But you don't have to carry everything alone. Let me hold some of it with you, even if it's just sitting quietly while you think. I believe in you so deeply. You are not your stress. You are not your deadlines. You are not your worst-case scenarios. You're the man I love, adore, and will cherish for as long as I can. And, that doesn't change when life gets loud. Meow.";
        chibi.src="chibi_cute.png";
        heartExplosion();

    }
    function openMissingMe(){
        speech.innerText="Hi, baby. Why not just call me, y'know? I miss you too. So much. More than I say. There are little moments in my day where I just think, 'He would laugh at this,' or 'I wish he were here right now.' When you miss me, I hope you don't feel empty. I hope you feel how real this is. Missing someone means they matter. Alot. I wish I could reach through the screen and press my forehead against yours. You're not alone in the missing, btw. I'm over here constantly missing you, yearning for the moment I'll get to hear you again, seeing you in everything that's around me. Kisses.";
        chibi.src="chibi_mad.png";
        heartExplosion();

    }
    function openDoubt(){
        speech.innerText="Nuh uh, I don't like anyone being mean to you, and that includes yourself, even when you're unsure? You are not behind in life. You are not failing. You are not 'less than.' You are growing. And growth is messy and uncontrollable and slow. I love your ambition, sweetheart. But I love your soul more. And, your soul is already kind, steady, and real. Even on days you feel unsure. You don't need to be perfect to deserve love or feel worthy; you already have all of mine. I wish you could see yourself through my eyes just once. You'd be so much gentler with yourself. My pretty boy.";
        chibi.src="chibi_mad.png";
        heartExplosion();

    }
        function openOverwhelmed(){
        speech.innerText="Hey, doctor. So, resting is not laziness. You aren't a machine. You are a human being with a nervous system that needs to reset sometimes, and you've been at this race of yours for quite a while. If you've been working hard and thinking hard, stressing hard, your body is going to ask for some stillness, that's just balance, baby. You don't owe productivity to anyone every second of the day. If today you needed to lie down, scroll, breathe, stare at the ceiling, or do nothing at all? That's okay. You are allowed to exist without earning it. You're more than enough even in your quiet days. Especially in them.";
        chibi.src="icon.png";
        heartExplosion();

        }



// Study mode
function studyStart(){
    speech.innerText="C'mon, pretty boy. Let's get this show on the road. Focus time!!";
    chibi.src="chibi_study.png";
}

// Blink loop
// setInterval(()=>{
   // chibi.src="chibi_blink.png";
    //setTimeout(()=>chibi.src="chibi_normal.png",250);
// },8000);

// Hourly water reminder
setInterval(()=>{
    speech.innerText="Hey now. Get yourself some water, don't forget.";
    chibi.src="chibi_mad.png";
},3600000);

// Study reminder every 45 minutes
setInterval(()=>{
    speech.innerText="Study check. Stay focused, sweetness.";
    chibi.src="chibi_study.png";
},2700000);

// Valentines greeting
function valentinesCheck(){
    let today=new Date();
    let month=today.getMonth();
    let date=today.getDate();

    if(month==1 && date==14){
        speech.innerText="Happy Valentine's day, my love. I love you so much.";
        chibi.src="chibi_happy.png";
    }
}

valentinesCheck();

// hearts
function spawnHeart(){

 let heart=document.createElement("div");
 heart.classList.add("heart");
 heart.innerText="💖";

 heart.style.left=Math.random()*100+"%";
 heart.style.fontSize=(Math.random()*20+15)+"px";

 document.getElementById("hearts").appendChild(heart);

 setTimeout(()=>{
  heart.remove();
 },6000);
}

setInterval(spawnHeart,2000);

for(let i=0;i<5;i++){
 setTimeout(spawnHeart,i*200);
}

let hearts=["💖","💗","💘","💝","💕"];
heart.innerText=hearts[Math.floor(Math.random()*hearts.length)];

let today=new Date();
if(today.getMonth()==1 && today.getDate()==14){
 setInterval(spawnHeart,1500);
}

function heartExplosion(){

 let hearts=["💖","💗","💘","💕","💝"];

 for(let i=0;i<20;i++){

  let heart=document.createElement("div");
  heart.classList.add("heart");
  heart.innerText=hearts[Math.floor(Math.random()*hearts.length)];

  heart.style.left=(window.innerWidth/2)+"px";
  heart.style.top=(window.innerHeight/2)+"px";

  let angle=Math.random()*360;
  let distance=Math.random()*200+50;

  heart.style.setProperty("--x",Math.cos(angle)*distance+"px");
  heart.style.setProperty("--y",Math.sin(angle)*distance+"px");

  document.getElementById("hearts").appendChild(heart);
  


  setTimeout(()=>heart.remove(),2000);
 }
}

// heart restore
function floatingHearts(){

 let hearts=["💖","💗","💘","💕"];

 let heart=document.createElement("div");
 heart.classList.add("floating-heart");
 heart.innerText=hearts[Math.floor(Math.random()*hearts.length)];

 heart.style.left=Math.random()*window.innerWidth+"px";
 heart.style.top=window.innerHeight+"px";

 document.getElementById("hearts").appendChild(heart);

 setTimeout(()=>heart.remove(),6000);
}
 setInterval(floatingHearts,1200);



