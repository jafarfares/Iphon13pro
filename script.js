let img1=document.getElementById('img1');
let img2=document.getElementById('img2');
let img3=document.getElementById('img3');
let bigimg=document.getElementById('bigimg');



function onimg(imgelement){

    if(imgelement===img1){
    bigimg.src="images/Purpletextured_2f0ddf4f-6c94-4a1b-85d1-f02baf6fd565.webp";
    document.body.style.backgroundColor='#6c065f';

    }

    else if(imgelement===img2){
    bigimg.src="images/Pink_adea2431-5c08-4178-beaf-819ae93d9483.webp";
    document.body.style.backgroundColor='#afa449';
    
    }

    else if(imgelement===img3){
        
    bigimg.src="images/bluesatinmetallic_bdf27804-7352-4daa-a937-d51684bf5814.webp";
    document.body.style.backgroundColor='#269aa8';
    
    }

    else{
        document.body.style.backgroundColor='#6c065f';}
    }



