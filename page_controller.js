//WalkingInside Counter
var counter = 0;
var globalCounter = 0;

var first = true;
var first1 = true;
var first2 = true;

var endAction = false;
var endAction1 = false;
var endAction2 = false;
var endAction3 = false;
var endAction4 = false;
var endAction5 = false;
var endAction6 = false;
var endAction7 = false;
var endAction8 = false;
var hasJustRestarted = false;

var audio = new Audio('car_honk.mp3');
var audioRestaurant = new Audio('restaurant_sound.mp3');
   
var playCarAudio = false;
var playRestaurantAudio = false;
var showWarning = false;

var isSitting = false;
var isStanding = false;
var looseHoodie = false;
var keepcharging = false;

var endBack1 = false;
var firstBack = true;
var firstBack2 = true;

var walking = false;
var sitting = false;
var endSitting = false;
var standup = false;
var sitrestaurant = false;
var eat = false;
var walkingoutside = false;
var dress = false;
var talking = false;
var restaurant = false;
var restaurant_standup = false;
var car = false;
var undress = false;
var run = false;
var charge = false;
var chargestandup = false;
var sleep = false;
var google = false;

var counterOpacity = 0;
var startOpacity = false;
var startOpacityBlack = false;

var counterBG = 0;

var instaScroll = false;
var whatsappMessage = false;
var starShowing = false;

//Images    
let Sternschnuppe = document.getElementById('PunktTransparent');
let titleText = document.getElementById('text');
let btn = document.getElementById('btn');

let walking_inside = document.getElementById('walking_inside');

var lastValue = 0;
var factor = 4;
var x = 0;
var heightCar = 30 ; //prozent
var bottomCar = 10 ;

function getCssProperty(elmId, property){
    var elem = document.getElementById(elmId);
    return window.getComputedStyle(elem,null).getPropertyValue(property);
 }

window.addEventListener('scroll', function(){
    let value = window.scrollX;

    if (value > lastValue) {
        if(showWarning) {
            warning.style.left = '-5000px';
            warning.style.opacity = "0.0";
            showWarning = false;
        }
        counter += 2;
        globalCounter +=1; 
        counterBG += 2;
    } else {
        //counter -= 2;
        //globalCounter -=1;
        //counterBG -= 2;
        if (!hasJustRestarted){
            showWarning  = true;
            warning.style.left = value + 'px';
            warning.style.opacity = "1.0";
            //window.scrollTo(lastValue,0); 
            return;
        } else {
            hasJustRestarted = false;
        }
    }    

    console.log(value + ", "+ globalCounter, " , "+counterBG);
    
    //PunktTransparent.style.marginLeft = value * 1.4 + 'px';

    ////Title Text
    if (value>600 && value<1500) { titleText.style.marginTop = value * 0.5 + 'px';}
    if (value > 10000 || value < 400 ) {titleText.style.marginTop = '300px';}

    if (value > 9800 && (value<28000 && !endAction)) { chair.style.left = value + 640 + 'px';} 
    if (value < 9800 || value > 32720) chair.style.left = '10600px';

    
    if (value > 12400  && (value<28000 && !endAction)) { desk.style.left = value + 1120+ 'px';} 
    if (value < 12400  || value > 32720) desk.style.left = '13500px';
    //if (value>10000 && value<13000) { 
    //    var left = getCssProperty("plant", "left");
        //plant.style.left = left - 200 + 'px'; 
        //console.log("plant ="+ left);
        //closet.style.left = 11000 + globalCounter * 8 + 'px'; 
    //} 

    if(value > 34100 && value < 41000) {
        nightstand.style.left = value + 1200 + 'px';
        if (endAction5) {
            nightstand.src = "images/Backgrounds/nightstand.png";
        }
    } else if (value <= 34100) {
        nightstand.src = "images/Backgrounds/nightstand1.png";
        nightstand.style.left = '35460px';
    } 

    if ((value>62400  && !endAction1) || isSitting) { restaurant_chair.style.left = value + 500 + 'px';} 

    if (value>15000 && (value<28000 && !endAction)) { insta.style.left = value + 2000 + 'px';
        button.style.left = value + 2000 + 'px';
        } else {
        insta.style.left = 17700 + 'px';
    }
    
    if (value>16000 && (value<28000 && !endAction)) {
        instaScroll = true;
    } else {
        instaScroll = false;
    }
    
    if(value> 63600 && value < 71000){
        if (firstBack) {
            counterBG = 0;
            firstBack = false;
        }
        whatsapp.style.left = value + 600 + 'px';
        whatsappMessage = true;
    }else if (value>71000){
        whatsappMessage = false;
    }

    if (sitrestaurant || talking ) {
        restaurant_color.style.zIndex = 6;
        restaurant_color.style.left = value  + 'px';
        restaurant_grey.style.left = value  + 'px';
        restaurant_colorfront.style.left = value  + 'px';
            if(!playRestaurantAudio) {
                audioRestaurant.loop = false;
                audioRestaurant.play();
                playRestaurantAudio = true;
            } 
        restaurant_chair.src = "images/Backgrounds/chair_Bunt1.png";
        restaurant_chair.style.height = '65%'; 
        restaurant_chair.style.top = '18%'; 

    } else if(restaurant){
        audioRestaurant.pause();
        restaurant_color.style.left = value  + 'px';
        restaurant_grey.style.left = value  + 'px';
        restaurant_grey.style.zIndex = 7;
        restaurant_colorfront.style.left = value  + 'px';

        restaurant_chair.src = "images/Backgrounds/chair_Grau.png";
        restaurant_colorfront.src = "images/Backgrounds/Restaurant_GrauVorne.png"
    }

    if (isStanding) {
        if (counterBG < 20) { akku.style.left = value  + 1300 + 'px'; }
        else if (counterBG < 40) { akku.style.left = '0px'; }
        else {counterBG = 0; }
    } else {
        akku.style.left = '-5000px';
    }
    //if (value>16000) { panel1.style.left = value * 0.9 + 3000 + 'px';}
    //if (value>16000) { panel2.style.left = value * 0.87 + 3020 + 'px';}

    if (value< 10000) {
        walking_inside.style.left = value + 700 + 'px';
    } else if (value< 30000) { 
        walking_inside.style.left = value + 600 + 'px'; 
    } else if (value< 42240){
        walking_inside.style.left = value + 700 + 'px';
        walking_inside.style.height = '80%'; 
        walking_inside.style.top = '24%';
    }
    else  if (value< 70000){ 
        walking_inside.style.left = value + 500 + 'px';
        walking_inside.style.height = '90%'; 
        walking_inside.style.top = '23%';
    }
    if (value>71000) endAction7 = false;

    ////Walking Inside
    if (value< 10000) {
        walking = true;
        sitting = false;
    } else if (value<25000) { 
        walking = false;
        sitting = true;

        if(first){
            counter = 0;
            first = false;
        }
    } else if (value<34100) {
        if(!endAction) {
            standup = true;
        } else { 
            walking = true;
            standup = false;
        }
        sitting = false;
        
        if(first1){
            counter = 0;
            first1 = false;
        }
        first = true;
    } else if (value<42240) {
        endAction = false;
        walking = false;
        dress = true;
        console.log("global = "+globalCounter);

        if(first){
            counter = 0;
            first = false;
        }
        first1 = true;
    } else if (value<47000) {
        if (value>43000)  {
            door.style.zIndex = 3;
        } else {
            door.style.zIndex = 30;
        }
        endAction = true;
        dress = false;
        walkingoutside = true;
        
        if(first){
            counter = 0;
            first = false;
        }
    } else if (value<62100 && !endAction7) {
        sitrestaurant = true;
        walkingoutside = false;
        walking_inside.style.left = value + 400 + 'px';
        walking_inside.style.height = '83%'; 
        walking_inside.style.top = '21%';
    } else if (value<71000 || endAction7) {
        sitrestaurant = false;
        talking = true;
        walking_inside.style.left = value + 300 + 'px';
        walking_inside.style.height = '83%'; 
        walking_inside.style.top = '24%';
        first = true;
    } else if (value<87000) {
        talking = false;
        restaurant = true;
        walking_inside.style.left = value + 500 + 'px';
        walking_inside.style.height = '81%'; 
        walking_inside.style.top = '15%';
        first1=true;
    } else if (value<100000) {
        endAction1 = true;
        if(!endAction2) 
        {
            restaurant_standup = true; 
            if (first) 
                counter = 0;
                first = false;
        } 
        restaurant = false;
        walking_inside.style.left = value + 400 + 'px';
        walking_inside.style.height = '83%'; 
        walking_inside.style.top = '21%';
    } else if (value<110000) {
        restaurant_standup = false;
        if(!endAction3) { 
            car = true;
            audio.loop = false;
            if(!playCarAudio) {
                audio.loop = false;
                audio.play();
                playCarAudio = true;
            } 
            walkingoutside = false;
            walking_inside.style.left = value + 200 + 'px';
            walking_inside.style.height = '83%'; 
            walking_inside.style.top = '17%';
            ampel.style.left = value + 'px';    
        } else {
            walking_inside.style.left = value + 400 + 'px';
            walking_inside.style.height = '83%'; 
            walking_inside.style.top = '21%';
        }
        heightCar = heightCar +2;
        bottomCar = bottomCar -1;
        car_image.style.left = value + 200 + 'px';
        if (heightCar< 150) { 
            car_image.style.height  = heightCar  + '%';
        } else {    
            car_image.style.left  = '-500px';
        } 
        car_image.style.height  = heightCar *2  + '%';
        car_image.style.bottom  = bottomCar  + '%';
        if (first1)
        {
            counter=0;
            first1=false;
        }
    } else if (value<117000) {
        ampel.style.left = '-9000px';
        car = false;
        walkingoutside = true;
        walking_inside.style.left = value + 400 + 'px';
        walking_inside.style.height = '83%'; 
        walking_inside.style.top = '21%';
        first1=true;
    } else if (value<131000) {
        walkingoutside = false;
        if (!endAction4) {
            undress = true;
            if (first1) {
                counter= 0;
                first1=false;
            }
            walking_inside.style.left = value + 300 + 'px';
            walking_inside.style.height = '85%'; 
            walking_inside.style.top = '16%';
        } else {
            walking_inside.style.left = value + 400 + 'px';
            walking_inside.style.height = '83%'; 
            walking_inside.style.top = '19%';
        }
    } else if (value<136000) {
        walking = false;
        walking_inside.src = "images/walking_inside/walking_inside_1.png";
        isStanding = true;
        walking_inside.style.left = value + 500 + 'px';
        first = true;
    } else if (value<156000) {
        run = true;
        isStanding = false;
        let y = parseInt(walking_inside.style.left.substring(0, 6));
        console.log("y = "+y + ",  first = "+first);
        if (( y - value) > 3000){
            charge = true;
            run = false;
            if(first) {
                counter = 0;
                first = false;
            }
            console.log("counter = "+counter);
            walking_inside.style.left = value + 400 + x + 'px';
            walking_inside.style.height = '85%'; 
            walking_inside.style.top = '21%';
        } else {
            x= x+20;
            walking_inside.style.left = value + 400 + x + 'px';
            walking_inside.style.height = '85%'; 
            walking_inside.style.top = '21%';
        }
        firstBack = true;
    } else if (value<170000) {
        charge = false;
        BlackTransparent.style.left =  value + 'px';
        first = true;

        starShowing = true;
            if (firstBack) {
                counterBG = 0;
                firstBack = false;
            }
            
        console.log("walking_inside.style.left = "+ walking_inside.style.left.substring(0, 6));
        if (value < 157000)
        {
            chargestandup = true;
            charge = false;
            if(first1) {
                counter = 0;
                first1 = false;
            }
            walking_inside.style.left = value + 400 + x + 'px';
            walking_inside.style.height = '85%'; 
            walking_inside.style.top = '21%';
        } else {
            if ( parseInt(walking_inside.style.left.substring(0, 6)) > (value + 400)) 
            {
                x= x-20;
                
                walking_inside.style.height = '85%'; 
                walking_inside.style.top = '21%';
                walking_inside.style.left = value + 400 + x + 'px';
            } else {
                walking = true;
                startOpacity = false;
                chargestandup = false;
                walking_inside.style.left = value + 400 + 'px';
                walking_inside.style.height = '85%'; 
                walking_inside.style.top = '21%';
            }
        }
    } else if (value<178000) {
        BlackTransparent.style.left =  value + 'px';
        sleep = true;
        if(!endAction8) bed.style.left =  value + 700 + 'px';
        walking = false;
        if (first) {
            counter = 0;
            first = false;
        }
        walking_inside.style.left = value + 700 + 'px';
        walking_inside.style.height = '84%';
        walking_inside.style.bottom = '0%';
        walking_inside.style.top = 'auto';
    } else if (value<188000) {
        sleep = false;
        if (first2){
            counterBG = 0;
            first2 = false; 
        }
        startOpacityBlack = true;
        black.style.zIndex = "210";
        black.style.left = value + 'px';
        walking_inside.style.left = value + 700 + 'px';
        BlackTransparent.style.left =  value + 'px';
        // handy an im Dunkeln
    } else if (value<195000) {
        black.style.zIndex = "10";
        startOpacityBlack = false;
        walking_inside.src = "images/Backgrounds/night.png";
        if (value < 192000) {
            walking_inside.style.left = '0px';
        } else {
            walking_inside.style.top =  '40%';
            walking_inside.style.left =  value + window.screen.availWidth/2 - 800 +  'px';
            walking_inside.src = "images/Backgrounds/night.png";
        }
        black.style.left = value + 'px';
        
        BlackTransparent.style.left =  value + 'px';
        //walking_inside.src = "...";
        //walking_inside.style.left = value + 500 + 'px';
        firstBack2 = true;
    } else if (value<210000) {
        google = true;
        black.style.left = value + 'px';
        walking_inside.style.top =  '40%';
        walking_inside.style.left =  value + window.screen.availWidth/2 - 800 +  'px';
        walking_inside.src = "images/Backgrounds/night.png";
        BlackTransparent.style.left =  value + 'px';
        if (firstBack2){
            counterBG = 0;
            firstBack2 = false;
        }
        google_image.style.left = value + 'px';
        //walking_inside.src = "...";
        //walking_inside.style.left = value + 500 + 'px';
        
    } else if (value<230000) {
        hasJustRestarted = true;
        window.scroll(0,0);
        location.reload();
        walking_inside.style.left = value + 700 + 'px';
        walking_inside.style.height = '80%'; 
        walking_inside.style.width = 'auto';
        walking_inside.style.top = '24%';
    }

    if(walking){
        if (counter < 0 ){ counter = 128;}
        else if (counter < 10) { walking_inside.src = "images/walking_inside/walking_inside_1.png";}
        else if (counter < 20) { walking_inside.src = "images/walking_inside/walking_inside_2.png";}
        else if (counter < 30) { walking_inside.src = "images/walking_inside/walking_inside_3.png";}
        else if (counter < 40) { walking_inside.src = "images/walking_inside/walking_inside_4.png";}
        else if (counter < 50) { walking_inside.src = "images/walking_inside/walking_inside_5.png";}
        else if (counter < 60) { walking_inside.src = "images/walking_inside/walking_inside_6.png";}
        else if (counter < 70) { walking_inside.src = "images/walking_inside/walking_inside_7.png";}
        else if (counter < 80) { walking_inside.src = "images/walking_inside/walking_inside_8.png";}
        else if (counter < 90) { walking_inside.src = "images/walking_inside/walking_inside_9.png";}
        else if (counter < 100) { walking_inside.src = "images/walking_inside/walking_inside_10.png";}
        else if (counter < 110) { walking_inside.src = "images/walking_inside/walking_inside_11.png";}
        else if (counter < 120) { walking_inside.src = "images/walking_inside/walking_inside_12.png";}
        else if (counter < 130) { walking_inside.src = "images/walking_inside/walking_inside_13.png";}
        else { 
            counter = 0;
        }
    }

    if(sitting){
        if (counter < 10){ walking_inside.src = "images/sitting_down/sitting_down_1.png"; 
            endSitting = false;}
        else if (counter < 20) { walking_inside.src = "images/sitting_down/sitting_down_2.png";}
        else if (counter < 30) { walking_inside.src = "images/sitting_down/sitting_down_3.png";}
        else if (counter < 40) { walking_inside.src = "images/sitting_down/sitting_down_4.png";}
        else if (counter < 50) { walking_inside.src = "images/sitting_down/sitting_down_5.png";}
        else if (counter < 60) { walking_inside.src = "images/sitting_down/sitting_down_6.png";}
        else if (counter < 70) { walking_inside.src = "images/sitting_down/sitting_down_7.png";}
        else if (counter < 80) { walking_inside.src = "images/sitting_down/sitting_down_8.png";}
        else if (counter < 90) { walking_inside.src = "images/sitting_down/sitting_down_9.png";}
        else if (counter < 100) { walking_inside.src = "images/sitting_down/sitting_down_10.png";}
        else if (counter < 110) { walking_inside.src = "images/sitting_down/sitting_down_11.png";}
        else if (counter < 120) { walking_inside.src = "images/sitting_down/sitting_down_12.png";}
        else { walking_inside.src = "images/sitting_down/sitting_down_12.png";
        }
    }

    if(standup){
        if (counter < 10){ walking_inside.src = "images/sitting_down/sitting_down_12.png"; }
        else if (counter < 20) { walking_inside.src = "images/sitting_down/sitting_down_11.png";}
        else if (counter < 30) { walking_inside.src = "images/sitting_down/sitting_down_10.png";}
        else if (counter < 40) { walking_inside.src = "images/sitting_down/sitting_down_9.png";}
        else if (counter < 50) { walking_inside.src = "images/sitting_down/sitting_down_8.png";}
        else if (counter < 60) { walking_inside.src = "images/sitting_down/sitting_down_7.png";}
        else if (counter < 70) { walking_inside.src = "images/sitting_down/sitting_down_6.png";}
        else if (counter < 80) { walking_inside.src = "images/sitting_down/sitting_down_5.png";}
        else if (counter < 90) { walking_inside.src = "images/sitting_down/sitting_down_4.png";}
        else if (counter < 100) { walking_inside.src = "images/sitting_down/sitting_down_3.png";}
        else if (counter < 110) { walking_inside.src = "images/sitting_down/sitting_down_2.png";}
        else if (counter < 120) { walking_inside.src = "images/sitting_down/sitting_down_1.png";}
        else { standup = false;
                endAction = true;
                console.log("global = "+globalCounter);
        }
    }

    if(dress){
        if (counter < 10){ walking_inside.src = "images/putdown/putdown_1.png";}
        else if (counter < 20) { walking_inside.src = "images/putdown/putdown_2.png";}
        else if (counter < 30) { walking_inside.src = "images/putdown/putdown_3.png";}
        else if (counter < 40) { walking_inside.src = "images/putdown/putdown_4.png";}
        else if (counter < 50) { walking_inside.src = "images/putdown/putdown_5.png";}
        else if (counter < 60) { walking_inside.src = "images/putdown/putdown_6.png";}
        else if (counter < 70) { walking_inside.src = "images/putdown/putdown_7.png";}
        else if (counter < 80) { walking_inside.src = "images/dress/dress_1.png"; endAction5 = true; walking_inside.style.height = '90%';  walking_inside.style.top = '18%';}
        else if (counter < 90) { walking_inside.src = "images/dress/dress_2.png";}
        else if (counter < 100) { walking_inside.src = "images/dress/dress_3.png";}
        else if (counter < 110) { walking_inside.src = "images/dress/dress_4.png";}
        else if (counter < 120) { walking_inside.src = "images/dress/dress_5.png";}
        else if (counter < 130) { walking_inside.src = "images/dress/dress_6.png";}
        else if (counter < 140) { walking_inside.src = "images/dress/dress_7.png";}
        else if (counter < 150) { walking_inside.src = "images/dress/dress_8.png";}
        else if (counter < 160) { walking_inside.src = "images/dress/dress_9.png";}
        else if (counter < 170) { walking_inside.src = "images/dress/dress_10.png";}
        else if (counter < 180) { walking_inside.src = "images/dress/dress_11.png";}
        else if (counter < 190) { walking_inside.src = "images/dress/dress_12.png";}
        else if (counter < 200) { walking_inside.src = "images/dress/dress_13.png";}
        else if (counter < 210) { walking_inside.src = "images/dress/dress_14.png";}
        else if (counter < 220) { walking_inside.src = "images/dress/dress_15.png";}
        else if (counter < 230) { walking_inside.src = "images/dress/dress_16.png";}
        else if (counter < 240) { walking_inside.src = "images/dress/dress_17.png";}
        else if (counter < 250) { walking_inside.src = "images/dress/dress_18.png";}
        else if (counter < 260) { walking_inside.src = "images/dress/dress_19.png";}
        else if (counter < 270) { walking_inside.src = "images/dress/dress_20.png";}
        else if (counter < 280) { walking_inside.src = "images/dress/dress_21.png";}
        else if (counter < 290) { walking_inside.src = "images/dress/dress_22.png";}
        else if (counter < 300) { walking_inside.src = "images/dress/dress_23.png";}
        else if (counter < 310) { walking_inside.src = "images/dress/dress_24.png";}
        else if (counter < 320) { walking_inside.src = "images/dress/dress_25.png";}
        else if (counter < 330) { walking_inside.src = "images/dress/dress_26.png";}
        else { walking_inside.src = "images/dress/dress_26.png"; endAction6 = true;}
    }


    if(walkingoutside){
        if (counter < 0 ){ counter = 118;}
        if (counter < 10){ walking_inside.src = "images/walking_outside/walking_outside_1.png";}
        else if (counter < 20) { walking_inside.src = "images/walking_outside/walking_outside_2.png";}
        else if (counter < 30) { walking_inside.src = "images/walking_outside/walking_outside_3.png";}
        else if (counter < 40) { walking_inside.src = "images/walking_outside/walking_outside_4.png";}
        else if (counter < 50) { walking_inside.src = "images/walking_outside/walking_outside_5.png";}
        else if (counter < 60) { walking_inside.src = "images/walking_outside/walking_outside_6.png";}
        else if (counter < 70) { walking_inside.src = "images/walking_outside/walking_outside_7.png";}
        else if (counter < 80) { walking_inside.src = "images/walking_outside/walking_outside_8.png";}
        else if (counter < 90) { walking_inside.src = "images/walking_outside/walking_outside_9.png";}
        else if (counter < 100) { walking_inside.src = "images/walking_outside/walking_outside_10.png";}
        else if (counter < 110) { walking_inside.src = "images/walking_outside/walking_outside_11.png";}
        else if (counter < 120) { walking_inside.src = "images/walking_outside/walking_outside_12.png";}
        else { counter = 0; }
    }

    if(sitrestaurant){
        if (counter < 10){ walking_inside.src = "images/sit_restaurant/sit_restaurant_1.png"; isSitting = true;}
        else if (counter < 20) { walking_inside.src = "images/sit_restaurant/sit_restaurant_2.png"; isSitting = true;}
        else if (counter < 30) { walking_inside.src = "images/sit_restaurant/sit_restaurant_3.png"; isSitting = true;}
        else if (counter < 40) { walking_inside.src = "images/sit_restaurant/sit_restaurant_4.png"; }
        else if (counter < 50) { walking_inside.src = "images/sit_restaurant/sit_restaurant_5.png"; }
        else if (counter < 60) { walking_inside.src = "images/sit_restaurant/sit_restaurant_6.png"; isSitting = true;}
        else if (counter < 70) { walking_inside.src = "images/sit_restaurant/sit_restaurant_7.png"; isSitting = true;}
        else if (counter < 80) { walking_inside.src = "images/sit_restaurant/sit_restaurant_8.png"; isSitting = true;}
        else if (counter < 90) { walking_inside.src = "images/sit_restaurant/sit_restaurant_9.png"; isSitting = true;}
        else if (counter < 100) { walking_inside.src = "images/sit_restaurant/sit_restaurant_10.png"; isSitting = true;}
        else if (counter < 110) { walking_inside.src = "images/sit_restaurant/sit_restaurant_11.png"; isSitting = true;}
        else if (counter < 120) { walking_inside.src = "images/sit_restaurant/sit_restaurant_12.png"; isSitting = true;}
        else if (counter < 130) { walking_inside.src = "images/sit_restaurant/sit_restaurant_13.png"; isSitting = true;}
        else if (counter < 140) { walking_inside.src = "images/sit_restaurant/sit_restaurant_14.png"; isSitting = true;}
        else if (counter < 150) { walking_inside.src = "images/sit_restaurant/sit_restaurant_15.png"; isSitting = true;}
        else if (counter < 160) { walking_inside.src = "images/sit_restaurant/sit_restaurant_16.png"; isSitting = true;}
        else if (counter < 170) { walking_inside.src = "images/sit_restaurant/sit_restaurant_17.png"; isSitting = true;}
        else if (counter < 180) { walking_inside.src = "images/sit_restaurant/sit_restaurant_18.png"; isSitting = true;}
        else if (counter < 190) { walking_inside.src = "images/sit_restaurant/sit_restaurant_19.png"; isSitting = true;}
        else if (counter < 200) { walking_inside.src = "images/sit_restaurant/sit_restaurant_20.png"; isSitting = true;}
        else if (counter < 210) { walking_inside.src = "images/sit_restaurant/sit_restaurant_21.png"; isSitting = true;}
        else if (counter < 220) { walking_inside.src = "images/sit_restaurant/sit_restaurant_22.png"; isSitting = true;}
        else { sitrestaurant = false; endAction7 = true; counter = 0; isSitting = true;}
    }

    if(talking){
        if (counter < 10*factor){ walking_inside.src = "images/talking/talking_1.png";}
        else if (counter < 20*factor) { walking_inside.src =  "images/talking/talking_2.png";}
        else if (counter < 30*factor) { walking_inside.src = "images/talking/talking_3.png";}
        else if (counter < 40*factor) { walking_inside.src =  "images/talking/talking_4.png";}
        else if (counter < 50*factor) { walking_inside.src =  "images/talking/talking_5.png";}
        else if (counter < 60*factor) { walking_inside.src =  "images/talking/talking_6.png";}
        else { counter = 0;}
    }

    if(restaurant){
        factor = 1;
        if (counter < 10*factor){ walking_inside.src = "images/restaurant/restaurant_1.png";}
        else if (counter < 20*factor) { walking_inside.src = "images/restaurant/restaurant_2.png";}
        else if (counter < 30*factor) { walking_inside.src = "images/restaurant/restaurant_3.png";}
        else if (counter < 40*factor) { walking_inside.src = "images/restaurant/restaurant_4.png";}
        else if (counter < 50*factor) { walking_inside.src = "images/restaurant/restaurant_5.png";}
        else if (counter < 60*factor) { walking_inside.src = "images/restaurant/restaurant_6.png";}
        else if (counter < 60*factor) { walking_inside.src = "images/restaurant/restaurant_7.png";}
        else if (counter < 70*factor) { walking_inside.src = "images/restaurant/restaurant_8.png";}
        else if (counter < 80*factor) { walking_inside.src = "images/restaurant/restaurant_9.png";}
        else if (counter < 90*factor) { walking_inside.src = "images/restaurant/restaurant_10.png";}
        else if (counter < 100*factor) { walking_inside.src = "images/restaurant/restaurant_11.png";}
        else if (counter < 120*factor) { walking_inside.src = "images/restaurant/restaurant_12.png";}
        else if (counter < 130*factor) { walking_inside.src = "images/restaurant/restaurant_13.png";}
        else if (counter < 140*factor) { walking_inside.src = "images/restaurant/restaurant_14.png";}
        else if (counter < 150*factor) { walking_inside.src = "images/restaurant/restaurant_15.png";}
        else if (counter < 160*factor) { walking_inside.src = "images/restaurant/restaurant_16.png";}
        else if (counter < 170*factor) { walking_inside.src = "images/restaurant/restaurant_17.png";}
        else if (counter < 180*factor) { walking_inside.src = "images/restaurant/restaurant_18.png";}
        else if (counter < 190*factor) { walking_inside.src = "images/restaurant/restaurant_19.png";}
        else if (counter < 200*factor) { walking_inside.src = "images/restaurant/restaurant_20.png";}
        else if (counter < 210*factor) { walking_inside.src = "images/restaurant/restaurant_21.png";}
        else if (counter < 220*factor) { walking_inside.src = "images/restaurant/restaurant_22.png";}
        else if (counter < 230*factor) { walking_inside.src = "images/restaurant/restaurant_23.png";}
        else if (counter < 240*factor) { walking_inside.src = "images/restaurant/restaurant_24.png";}
        else if (counter < 250*factor) { walking_inside.src = "images/restaurant/restaurant_25.png";}
        else if (counter < 260*factor) { walking_inside.src = "images/restaurant/restaurant_26.png";}
        else if (counter < 270*factor) { walking_inside.src = "images/restaurant/restaurant_27.png";}
        else if (counter < 280*factor) { walking_inside.src = "images/restaurant/restaurant_28.png";}
        else if (counter < 290*factor) { walking_inside.src = "images/restaurant/restaurant_29.png";}
        else if (counter < 300*factor) { walking_inside.src = "images/restaurant/restaurant_30.png";}
        else if (counter < 310*factor) { walking_inside.src = "images/restaurant/restaurant_31.png";}
        else if (counter < 320*factor) { walking_inside.src = "images/restaurant/restaurant_32.png";}
        else if (counter < 330*factor) { walking_inside.src = "images/restaurant/restaurant_33.png";}
        else if (counter < 340*factor) { walking_inside.src = "images/restaurant/restaurant_34.png";}
        else if (counter < 350*factor) { walking_inside.src = "images/restaurant/restaurant_35.png";}
        else if (counter < 360*factor) { walking_inside.src = "images/restaurant/restaurant_36.png";}
        else if (counter < 370*factor) { walking_inside.src = "images/restaurant/restaurant_37.png";}
        else if (counter < 380*factor) { walking_inside.src = "images/restaurant/restaurant_38.png";}
        else if (counter < 390*factor) { walking_inside.src = "images/restaurant/restaurant_39.png";}
        else if (counter < 490*factor) { walking_inside.src = "images/restaurant/restaurant_40.png";}
        else if (counter < 500*factor) { walking_inside.src = "images/restaurant/restaurant_41.png";}
        else if (counter < 510*factor) { walking_inside.src = "images/restaurant/restaurant_42.png";}
        else if (counter < 520*factor) { walking_inside.src = "images/restaurant/restaurant_43.png";}
        else if (counter < 530*factor) { walking_inside.src = "images/restaurant/restaurant_44.png";}
        else if (counter < 540*factor) { walking_inside.src = "images/restaurant/restaurant_45.png";}
        else if (counter < 550*factor) { walking_inside.src = "images/restaurant/restaurant_46.png";}
        else if (counter < 600*factor) { walking_inside.src = "images/restaurant/restaurant_47.png";}
        else if (counter < 610*factor) { walking_inside.src = "images/restaurant/restaurant_48.png";}
        else if (counter < 620*factor) { walking_inside.src = "images/restaurant/restaurant_49.png";}
        else if (counter < 630*factor) { walking_inside.src = "images/restaurant/restaurant_50.png";}
        else if (counter < 640*factor) { walking_inside.src = "images/restaurant/restaurant_51.png";}
        else if (counter >= 640*factor) { counter = 600;}
    }

    if(restaurant_standup){
        if (counter < 10){ walking_inside.src = "images/sit_restaurant/sit_restaurant_22.png";}
        else if (counter < 20) { walking_inside.src = "images/sit_restaurant/sit_restaurant_21.png";}
        else if (counter < 30) { walking_inside.src = "images/sit_restaurant/sit_restaurant_20.png";}
        else if (counter < 40) { walking_inside.src = "images/sit_restaurant/sit_restaurant_19.png";}
        else if (counter < 50) { walking_inside.src = "images/sit_restaurant/sit_restaurant_18.png";}
        else if (counter < 60) { walking_inside.src = "images/sit_restaurant/sit_restaurant_17.png";}
        else if (counter < 70) { walking_inside.src = "images/sit_restaurant/sit_restaurant_16.png";}
        else if (counter < 80) { walking_inside.src = "images/sit_restaurant/sit_restaurant_15.png";}
        else if (counter < 90) { walking_inside.src = "images/sit_restaurant/sit_restaurant_14.png";}
        else if (counter < 100) { walking_inside.src = "images/sit_restaurant/sit_restaurant_13.png";}
        else if (counter < 110) { walking_inside.src = "images/sit_restaurant/sit_restaurant_12.png";}
        else if (counter < 120) { walking_inside.src = "images/sit_restaurant/sit_restaurant_11.png";}
        else if (counter < 130) { walking_inside.src = "images/sit_restaurant/sit_restaurant_10.png";}
        else if (counter < 140) { walking_inside.src = "images/sit_restaurant/sit_restaurant_9.png";}
        else if (counter < 150) { walking_inside.src = "images/sit_restaurant/sit_restaurant_8.png";}
        else if (counter < 160) { walking_inside.src = "images/sit_restaurant/sit_restaurant_7.png";}
        else if (counter < 170) { walking_inside.src = "images/sit_restaurant/sit_restaurant_6.png";}
        else if (counter < 180) { walking_inside.src = "images/sit_restaurant/sit_restaurant_5.png";}
        else if (counter < 190) { walking_inside.src = "images/sit_restaurant/sit_restaurant_4.png";}
        else if (counter < 200) { walking_inside.src = "images/sit_restaurant/sit_restaurant_3.png";}
        else if (counter < 210) { walking_inside.src = "images/sit_restaurant/sit_restaurant_2.png";}
        else if (counter < 220) { walking_inside.src = "images/sit_restaurant/sit_restaurant_1.png";}
        else { walkingoutside = true; restaurant_standup = false; endAction2 = true; isSitting = false;}
    }

    if(car){
        if (counter < 10){ walking_inside.src = "images/car/car_1.png";}
        else if (counter < 20) { walking_inside.src = "images/car/car_2.png";}
        else if (counter < 30) { walking_inside.src = "images/car/car_3.png";}
        else if (counter < 40) { walking_inside.src = "images/car/car_4.png";}
        else if (counter < 50) { walking_inside.src = "images/car/car_5.png";}
        else if (counter < 60) { walking_inside.src = "images/car/car_6.png";}
        else if (counter < 70) { walking_inside.src = "images/car/car_7.png";}
        else if (counter < 80) { walking_inside.src = "images/car/car_8.png";}
        else if (counter < 90) { walking_inside.src = "images/car/car_9.png";}
        else if (counter < 100) { walking_inside.src = "images/car/car_10.png";}
        else if (counter < 110) { walking_inside.src = "images/car/car_11.png";}
        else if (counter < 120) { walking_inside.src = "images/car/car_12.png";}
        else if (counter < 130) { walking_inside.src = "images/car/car_13.png";}
        else if (counter < 140) { walking_inside.src = "images/car/car_14.png";}
        else if (counter < 150) { walking_inside.src = "images/car/car_10.png";}
        else if (counter < 160) { walking_inside.src = "images/car/car_11.png";}
        else if (counter < 170) { walking_inside.src = "images/car/car_12.png";}
        else if (counter < 180) { walking_inside.src = "images/car/car_13.png";}
        else if (counter < 190) { walking_inside.src = "images/car/car_14.png";}
        else if (counter < 200) { walking_inside.src = "images/car/car_10.png";}
        else if (counter < 210) { walking_inside.src = "images/car/car_11.png";}
        else if (counter < 220) { walking_inside.src = "images/car/car_12.png";}
        else if (counter < 230) { walking_inside.src = "images/car/car_13.png";}
        else if (counter < 240) { walking_inside.src = "images/car/car_14.png";}
        else if (counter < 250) { walking_inside.src = "images/car/car_13.png";}
        else if (counter < 260) { walking_inside.src = "images/car/car_12.png";}
        else if (counter < 270) { walking_inside.src = "images/car/car_11.png";}
        else if (counter < 280) { walking_inside.src = "images/car/car_10.png";}
        else if (counter < 290) { car = false; endAction3 = true; walkingoutside = true;}
    }

    if (undress)
    {   if (counter < 10){ walking_inside.src = "images/dress/dress_25.png";}
        else if (counter < 20) { walking_inside.src = "images/dress/dress_24.png";}
        else if (counter < 30) { walking_inside.src = "images/dress/dress_23.png";}
        else if (counter < 40) { walking_inside.src = "images/dress/dress_22.png";}
        else if (counter < 50) { walking_inside.src = "images/dress/dress_21.png";}
        else if (counter < 60) { walking_inside.src = "images/dress/dress_20.png";}
        else if (counter < 70) { walking_inside.src = "images/dress/dress_19.png";}
        else if (counter < 80) { walking_inside.src = "images/dress/dress_18.png";}
        else if (counter < 90) { walking_inside.src = "images/dress/dress_17.png";}
        else if (counter < 100) { walking_inside.src = "images/dress/dress_16.png";}
        else if (counter < 110) { walking_inside.src = "images/dress/dress_15.png";}
        else if (counter < 120) { walking_inside.src = "images/dress/dress_14.png";}
        else if (counter < 130) { walking_inside.src = "images/dress/dress_13.png";}
        else if (counter < 140) { walking_inside.src = "images/dress/dress_12.png";}
        else if (counter < 150) { walking_inside.src = "images/dress/dress_11.png";}
        else if (counter < 160) { walking_inside.src = "images/dress/dress_10.png";}
        else if (counter < 170) { walking_inside.src = "images/dress/dress_9.png";}
        else if (counter < 180) { walking_inside.src = "images/dress/dress_8.png";}
        else if (counter < 190) { walking_inside.src = "images/dress/dress_7.png";}
        else if (counter < 200) { walking_inside.src = "images/dress/dress_6.png";}
        else if (counter < 210) { walking_inside.src = "images/dress/dress_5.png";}
        else if (counter < 220) { walking_inside.src = "images/dress/dress_4.png";}
        else { undress = false; endAction4 = true; walking = true; counter = 0; looseHoodie = true; hoodie.style.left = value + 500 + 'px';}
    }

    
    if (run)
    {   if (counter < 6){ walking_inside.src = "images/run/run_6.png";}
        else if (counter < 12) { walking_inside.src = "images/run/run_7.png";}
        else if (counter < 18) { walking_inside.src = "images/run/run_8.png";}
        else if (counter < 24) { walking_inside.src = "images/run/run_9.png";}
        else if (counter < 30) { walking_inside.src = "images/run/run_10.png";}
        else if (counter < 36) { walking_inside.src = "images/run/run_11.png";}
        else if (counter < 42) { walking_inside.src = "images/run/run_12.png";}
        else if (counter < 48) { walking_inside.src = "images/run/run_13.png";}
        else if (counter < 54) { walking_inside.src = "images/run/run_14.png";}
        else { counter = 0 }
    }

    if (charge)
    {   if (counter < 10){ walking_inside.src = "images/charge/charge_1.png";}
        else if (counter < 20) { walking_inside.src = "images/charge/charge_2.png";}
        else if (counter < 30) { walking_inside.src = "images/charge/charge_3.png"; }
        else if (counter < 40) { walking_inside.src = "images/charge/charge_4.png"; }
        else if (counter < 50) { walking_inside.src = "images/charge/charge_5.png"; }
        else if (counter < 60) { walking_inside.src = "images/charge/charge_6.png"; }
        else if (counter < 70) { walking_inside.src = "images/charge/charge_7.png"; }
        else if (counter < 80) { walking_inside.src = "images/charge/charge_8.png"; }
        else if (counter < 90) { walking_inside.src = "images/charge/charge_9.png"; }
        // else if (counter < 100) { walking_inside.src = "images/charge/charge_10.png";}
        // else if (counter < 110) { walking_inside.src = "images/charge/charge_11.png";}
        //else if (counter < 120) { walking_inside.src = "images/charge/charge_12.png";}
        else { walking_inside.src = "images/charge/charge_9.png"; startOpacity = true; keepcharging = true;}
        if (keepcharging) walking_inside.src = "images/charge/charge_9.png";
    }

    if (startOpacity) {
        if (counterOpacity < 40){ BlackTransparent.style.opacity = "0.1"; counterOpacity += 2; BlackTransparent.style.left =  value + 'px'; star.style.left =  value + 'px'; star.style.opacity = "0.1";}
        else if (counterOpacity < 60) { BlackTransparent.style.opacity = "0.2"; counterOpacity += 2; BlackTransparent.style.left =  value + 'px'; star.style.left =  value + 'px'; star.style.opacity = "0.2"; }
        else if (counterOpacity < 80) { BlackTransparent.style.opacity = "0.3"; counterOpacity += 2; BlackTransparent.style.left =  value + 'px'; star.style.left =  value + 'px'; star.style.opacity = "0.3";}
        else if (counterOpacity < 100) { BlackTransparent.style.opacity = "0.4"; counterOpacity += 2; BlackTransparent.style.left =  value + 'px'; star.style.left =  value + 'px';star.style.opacity = "0.4";}
        else if (counterOpacity < 120) { BlackTransparent.style.opacity = "0.5"; counterOpacity += 2; BlackTransparent.style.left =  value + 'px'; star.style.left =  value + 'px';star.style.opacity = "0.5";}
        else if (counterOpacity < 140) { BlackTransparent.style.opacity = "0.6"; counterOpacity += 2; BlackTransparent.style.left =  value + 'px'; star.style.left =  value + 'px';star.style.opacity = "0.6";}
        else if (counterOpacity < 160) { BlackTransparent.style.opacity = "0.7"; counterOpacity += 2; BlackTransparent.style.left =  value + 'px'; star.style.left =  value + 'px';star.style.opacity = "0.7";}
        else if (counterOpacity < 180) { BlackTransparent.style.opacity = "0.8"; counterOpacity += 2; BlackTransparent.style.left =  value + 'px'; star.style.left =  value + 'px';star.style.opacity = "0.8";}
        else if (counterOpacity <= 200) { BlackTransparent.style.opacity = "0.9";counterOpacity += 2; BlackTransparent.style.left =  value + 'px'; star.style.left =  value + 'px';star.style.opacity = "0.9";}
        else {
            BlackTransparent.style.opacity = "0.9"; 
            BlackTransparent.style.left =  value + 'px'; 
            star.style.left =  value + 'px';
            star.style.opacity = "1";
        }
    }

    if (chargestandup)
    {   if (counter < 10){ walking_inside.src = "images/charge/charge_10.png";}
        else if (counter < 20) { walking_inside.src = "images/charge/charge_11.png";}
        else if (counter < 30) { walking_inside.src = "images/charge/charge_12.png";}
        else { walking_inside.src = "images/charge/charge_12.png";}
    }

        // -- change image
        //if (value < 600){ walking_inside.src = scr1_walking_inside;}
        //else { walking_inside.src = scr2_walking_inside;}

        //if (window.scrollX > 400) {
        //    window.scroll(0,0);
        //  }

    if (sleep)
    {   if (counter < 10){ walking_inside.src = "images/sleep/sleep_1.png";}
        else if (counter < 20) { walking_inside.src = "images/sleep/sleep_2.png";}
        else if (counter < 30) { walking_inside.src = "images/sleep/sleep_3.png";}
        else if (counter < 40) { walking_inside.src = "images/sleep/sleep_4.png";}
        else if (counter < 50) { walking_inside.src = "images/sleep/sleep_5.png";}
        else if (counter < 60) { walking_inside.src = "images/sleep/sleep_6.png"; bed.style.left = '-5000px'; endAction8 = true;}
        else if (counter < 70) { walking_inside.src = "images/sleep/sleep_7.png";}
        else if (counter < 80) { walking_inside.src = "images/sleep/sleep_8.png";}
        else if (counter < 90) { walking_inside.src = "images/sleep/sleep_9.png";}
        else if (counter < 100) { walking_inside.src = "images/sleep/sleep_10.png";}
        else if (counter < 110) { walking_inside.src = "images/sleep/sleep_11.png";}
        else if (counter < 120) { walking_inside.src = "images/sleep/sleep_12.png";}
        else if (counter < 130) { walking_inside.src = "images/sleep/sleep_13.png";}
        else if (counter < 140) { walking_inside.src = "images/sleep/sleep_14.png";}
        else if (counter < 150) { walking_inside.src = "images/sleep/sleep_15.png";}
        else { walking_inside.src = "images/sleep/sleep_15.png";}
    }


//---------BACKGROUNDS-------------------------------------------------------------------------
    
    if (instaScroll)
    {   if (counterBG <= 0 ){ counter = 248;}
        if (counterBG < 10){ insta.src = "images/SocialMedia/Insta1.png";}
        else if (counterBG < 20) {  insta.src = "images/SocialMedia/Insta2.png";}
        else if (counterBG < 30) {  insta.src = "images/SocialMedia/Insta3.png";}
        else if (counterBG < 40) {  insta.src = "images/SocialMedia/Insta4.png";}
        else if (counterBG < 50) {  insta.src = "images/SocialMedia/Insta5.png";}
        else if (counterBG < 60) {  insta.src = "images/SocialMedia/Insta6.png";}
        else if (counterBG < 70) {  insta.src = "images/SocialMedia/Insta7.png";}
        else if (counterBG < 80) {  insta.src = "images/SocialMedia/Insta8.png";}
        else if (counterBG < 90) {  insta.src = "images/SocialMedia/Insta9.png";}
        else if (counterBG < 100) {  insta.src = "images/SocialMedia/Insta10.png";}
        else if (counterBG < 110) {  insta.src = "images/SocialMedia/Insta11.png";}
        else if (counterBG < 120) {  insta.src = "images/SocialMedia/Insta12.png";}
        else if (counterBG < 130) {  insta.src = "images/SocialMedia/Insta13.png";}
        else if (counterBG < 140) {  insta.src = "images/SocialMedia/Insta14.png";}
        else if (counterBG < 150) {  insta.src = "images/SocialMedia/Insta15.png";}
        else if (counterBG < 160) {  insta.src = "images/SocialMedia/Insta16.png";}
        else if (counterBG < 170) {  insta.src = "images/SocialMedia/Insta17.png";}
        else if (counterBG < 180) {  insta.src = "images/SocialMedia/Insta18.png";}
        else if (counterBG < 190) {  insta.src = "images/SocialMedia/Insta19.png";}
        else if (counterBG < 200) {  insta.src = "images/SocialMedia/Insta20.png";}
        else if (counterBG < 210) {  insta.src = "images/SocialMedia/Insta21.png";}
        else if (counterBG < 220) {  insta.src = "images/SocialMedia/Insta22.png";}
        else if (counterBG < 230) {  insta.src = "images/SocialMedia/Insta23.png";}
        else if (counterBG < 240) {  insta.src = "images/SocialMedia/Insta24.png";}
        else if (counterBG < 250) {  insta.src = "images/SocialMedia/Insta25.png";}
        else { counterBG = 0; }
    }

    if (whatsappMessage)
    {   if (counterBG < 30){ whatsapp.src = "images/whatsapp/whatsapp1.png";}
        else if (counterBG < 50) {  whatsapp.src = "images/whatsapp/whatsapp2.png";}
        else if (counterBG < 80) {  whatsapp.src = "images/whatsapp/whatsapp3.png";}
        else if (counterBG < 90) {  whatsapp.src = "images/whatsapp/whatsapp4.png";}
        else if (counterBG < 100) {  whatsapp.src = "images/whatsapp/whatsapp5.png";}
        else if (counterBG < 110) {  whatsapp.src = "images/whatsapp/whatsapp6.png";}
        else if (counterBG < 120) {  whatsapp.src = "images/whatsapp/whatsapp7.png";}
        else if (counterBG < 140) {  whatsapp.src = "images/whatsapp/whatsapp8.png";}
        else if (counterBG < 150) {  whatsapp.src = "images/whatsapp/whatsapp9.png";}
        else if (counterBG < 160) {  whatsapp.src = "images/whatsapp/whatsapp10.png";}
        else if (counterBG < 180) {  whatsapp.src = "images/whatsapp/whatsapp11.png";}
        else if (counterBG < 190) {  whatsapp.src = "images/whatsapp/whatsapp12.png";}
        else if (counterBG < 200) {  whatsapp.src = "images/whatsapp/whatsapp13.png";}
        else if (counterBG < 240) {  whatsapp.src = "images/whatsapp/whatsapp14.png";}
        else if (counterBG < 250) {  whatsapp.src = "images/whatsapp/whatsapp15.png";}
        else if (counterBG < 270) {  whatsapp.src = "images/whatsapp/whatsapp16.png";}
        else if (counterBG < 280) {  whatsapp.src = "images/whatsapp/whatsapp17.png";}
        else if (counterBG < 290) {  whatsapp.src = "images/whatsapp/whatsapp18.png";}
        else if (counterBG < 300) {  whatsapp.src = "images/whatsapp/whatsapp19.png";}
        else if (counterBG < 330) {  whatsapp.src = "images/whatsapp/whatsapp20.png";}
        else if (counterBG < 350) {  whatsapp.src = "images/whatsapp/whatsapp21.png";}
        else if (counterBG < 360) {  whatsapp.src = "images/whatsapp/whatsapp22.png";}
        else if (counterBG < 370) {  whatsapp.src = "images/whatsapp/whatsapp23.png";}
        else if (counterBG < 380) {  whatsapp.src = "images/whatsapp/whatsapp24.png";}
        else if (counterBG < 390) {  whatsapp.src = "images/whatsapp/whatsapp25.png";}
        else if (counterBG < 410) {  whatsapp.src = "images/whatsapp/whatsapp26.png";}
        else if (counterBG < 420) {  whatsapp.src = "images/whatsapp/whatsapp27.png";}
        else if (counterBG < 450) {  whatsapp.src = "images/whatsapp/whatsapp28.png";}
        else {  whatsapp.src = "images/whatsapp/whatsapp28.png"; }
    }

    if (starShowing) {
        if (counterBG < 30){ star.src = "images/star/star_1.png";}
        else if (counterBG < 50) {  star.src = "images/star/star_2.png";}
        else if (counterBG < 80) {  star.src = "images/star/star_3.png";}
        else if (counterBG < 90) {  star.src = "images/star/star_4.png";}
        else if (counterBG < 100) {  star.src = "images/star/star_5.png";}
        else if (counterBG < 110) {  star.src = "images/star/star_6.png";}
        else if (counterBG < 120) {  star.src = "images/star/star_7.png";}
        else if (counterBG < 140) {  star.src = "images/star/star_8.png";}
        else if (counterBG < 150) {  star.src = "images/star/star_9.png";}
        else if (counterBG < 160) {  star.src = "images/star/star_10.png";}
        else {
            star.src = "images/star/star_1.png"; starShowing = false;
        }
    }

    if (google)
    {
        //if (counterBG < 30){ star.src = "images/star/star_1.png";}
        if (counterBG < 30){ google_image.src = "images/google/google1.png";}
        else if (counterBG < 60) {  google_image.src = "images/google/google2.png";}
        else if (counterBG < 90) {  google_image.src = "images/google/google3.png";}
        else if (counterBG < 120) {  google_image.src = "images/google/google4.png";}
        else if (counterBG < 150) {  google_image.src = "images/google/google5.png";}
        else if (counterBG < 180) {  google_image.src = "images/google/google6.png";}
        else if (counterBG < 210) {  google_image.src = "images/google/google7.png";}
        else if (counterBG < 240) {  google_image.src = "images/google/google8.png";}
        else if (counterBG < 270) {  google_image.src = "images/google/google9.png";}
        else if (counterBG < 300) {  google_image.src = "images/google/google10.png";}
        else if (counterBG < 330) {  google_image.src = "images/google/google11.png";}
        else if (counterBG < 360) {  google_image.src = "images/google/google12.png";}
        else if (counterBG < 390) {  google_image.src = "images/google/google13.png";}
        else if (counterBG < 420) {  google_image.src = "images/google/google14.png";}
        else if (counterBG < 450) {  google_image.src = "images/google/google15.png";}
        else if (counterBG < 480) {  google_image.src = "images/google/google16.png";}
        else if (counterBG < 510) {  google_image.src = "images/google/google17.png";}
        else if (counterBG < 540) {  google_image.src = "images/google/google18.png";}
        else {
            counterBG = 480;
        }
    }
    
    if (startOpacityBlack)
    {
        if (counterBG < 20){ black.style.opacity = "0.1";}
        else if (counterBG < 40) {  black.style.opacity = "0.2";}
        else if (counterBG < 60) {  black.style.opacity = "0.3";}
        else if (counterBG < 80) {  black.style.opacity = "0.4";}
        else if (counterBG < 100) {  black.style.opacity = "0.5";}
        else if (counterBG < 120) {  black.style.opacity = "0.6";}
        else if (counterBG < 130) {  black.style.opacity = "0.7";}
        else if (counterBG < 140) {  black.style.opacity = "0.8";}
        else if (counterBG < 140) {  black.style.opacity = "0.9";}
        else if (counterBG < 140) {  black.style.opacity = "1.0";}
        else {
            black.style.opacity = "1.0";
            startOpacityBlack = false;
        }
    }

    lastValue = value;
});
