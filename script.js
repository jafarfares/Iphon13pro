// document.write('jafar fares')
//console.log(typeof'hallo jafar');
// console.error('error');
//window.print();
// document.write('jafar fares');
// document.write(' jafar fares');
// document.write(' jafar fares');
// document.write(' jafar fares');
// document.write(' jafar fares');
// console.log(typeof'hallo jafar');
// console.log(typeof 0.4);
// console.log(typeof 2);
// console.log(typeof true);
// let x;
// console.log(typeof x)
// let name='jafar ';
// let age=4;
// console.log(name + num);
//console.log(`my name is: ${name} and my age is: ${age}`);

/*
console.log((+'5')+(+'6'));
console.log((+'+5')+(+'+6'));//لتحويل النصوص الى رقام
console.log((+true)+(+false));
console.log(Number('4'));
console.log(parseInt('4 jafar'));
console.log(parseFloat('4.5 jafar'));

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isSafeInteger(55));
console.log(Number.isNaN(55 + 'jafar'));
console.log(Number.isInteger(55));

console.log(Math.abs(-4));//يشيل السالب
console.log(Math.sqrt(4));//الجذر التربيعي
console.log(Math.pow(2,3));//2^3
console.log(Math.round(10.5));
console.log(Math.ceil(10.3));
console.log(Math.floor(10.9));
console.log(Math.min(1,2,3,4,5,6,7,8,9));
console.log(Math.max(1,2,3,4,5,6,7,8,9));

console.log(typeof String(10));
console.log(typeof 100..toString());
console.log(typeof (100).toString());
console.log(typeof (100).tostring());//خطا يعتبرها فلوت

*/


//string
/*
//الرقم يحفظ في مكان واحد في الذاكرة لكن السترنك كل حرف فيها يحفظ في مكان و ذلك لانها سكونس فاليو
name='ali';
name[0]='a'; name[1]='l'; name[2]='i';
let name='ali ';
console.log(name.repeat(3));
console.log(name.length);//لا يعمل مع الارقام
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);

let name='hallo javascript Im jafar';
console.log(name.indexOf('a'));//يبحث من اليسار عن كلمة او حرف و يحدد لك موقعه
console.log(name.indexOf('j',7));//يبدا البحث من رابع موقع من اليسار
console.log(name.lastIndexOf('a',13))//يبدا من اليمين و من الحرف 13
console.log(name.slice(6,16));//لتقطيع السترنك لاضهار الجزء الذب نريده فقط
console.log(name.split(' '));//يقطع السترنك و يضعها في array
console.log(name.split(' ',2));//اقطع مرتين فقط كلما ترى space
console.log(name.split(''));//يقطع كل حرف و يضعه وحده في المصفوفة

let name='hallo javascript Im jafar';
console.log(name.slice(-3,-6));//تستخدم ااتقطيع و تقبل يم سالبة 
console.log(name.substring(6,16));//تستخدم للتقطيع ولا تقبل قيم سالبة
console.log(name.substr(6,8));//تسنخدم للتقطيع لكن الرقم الاول يكون الموقع و الثاني عداد اي هنا من موقع 6 خد بعده 16 حرف و ليس موقع 16

let name='hallo javascript Im jafar';
console.log(name.indexOf('a'));//تبدا من اليسار و تعطيك موقع العنصر اذا وجدته و اذا لم تجده تعطيك-1
console.log(name.lastIndexOf('a'));//تبدا من اليمين و تعطيك موقع العنصر اذا وجدته و اذا لم تجده تعطيك-1
console.log(name.includes('a'));//تبدا من اليسار و تعطيك trueاذا وجدته واذا لم تجده تعطيك false
console.log(name.startsWith('a'));//هل الكلمة تبدا بحرف aاذا نعم true و اذا لا false تبدا من اليسار ونسطيع ان نحدد من اين تبدا ايضا
console.log(name.endsWith('a'));//هل الكلمة تنتهي بحرف aاذا نعم true و اذا لا false تبدا من اليمين ونسطيع ان نحدد بواسطة عداد و ليس موقع اي عندما اكتب 6 يبحث على الال6 حروف هل تبدا ب ش
*/ 



//array
/*
class:1

let names=['Mohmmed','Ali','Ahmed','mazen']
console.log(names);//for print the array
console.log(names[2]);//for acsses to number in array
names[3]='meme';//for change name or number or any think in array
console.log(names);

let number=[1,2,3,4,5,[6,7,8,9,[1,2,3]]]//nasted array
console.log(number[5][4][0]);

let habshlit=[1,2,'Ali','ahmed',NaN,Number]
console.log(habshlit);

class:2

let names=['Mohmmed','Ali','Ahmed','mazen']
names.push('opp','javascript','Html')//to add from end array
names.unshift('css','database','API')//to add from start array
names.shift()//to remov from start array jast one value and save him include
names.shift()//to remov from start array jast one value and save him include
console.log(names.shift());
names.pop()//to remov from end array jast one value and save him include
names.pop()//to remov from end array jast one value and save him include
console.log(names.pop());
console.log(names);

class:3

let names=['Mohmmed','Ali','Ahmed','mazen']
names.splice(2,1,'opp','javascript');//الرقم الاول من اي موقع تبدا و الرقم الثاني عندما تبدا من هذا الموقع كم عنصر تريد حذفه و ماذا تريد ان تضيف مكانه اخياري اذا لم تريد احذف فقط
names.splice(2,0,'Mohmmed');//اضافة من العنصر الثاني لا تحذف
console.log(names);

let names=['Mohmmed','Ali','Ahmed','mazen']
console.log(names.slice(0,3));//لا تؤثر على ال array لكن تخزن العناصر داخلها اي اذا طبعنا ال array تضهر كل العناصر 

class:4

let names=['Mohmmed','Ali','Ahmed','mazen','Ali','Mohmmed']
console.log(names.indexOf('Mohmmed',2));
console.log(names.lastIndexOf('Mohmmed',4));
console.log(names.includes('Mohmmed',5));

class:5

let names=['Mohmmed','Ali','Ahmed','mazen']
console.log(names.reverse());//لطباعة المصفوفة بالعكس
console.log(names.sort())//ترتب المفوفة حسب الحروف الابجدية

class:6

let name1=['Mohmmed','Ali','Ahmed','mazen']
let name2=['Mohmmed','Ali','Ahmed','mazen']
//name1+=name2;//هذا سيحولها الى string وليس array
name1.concat(name2);
console.log( name1);
console.log(typeof name1.join());//لتحويل المصفوفة الى stringوممكن ان تضيف بدل ',' اي شيء تضعه بداخلها
*/




//condation
/*
class:1   //== condation value

//toLowerCase():-for transformation string to lower case.
//trim():-for remov the space.
let askemil=prompt('enter your email');
let email='jafarfares@gmail.com';
console.log(askemil.toLowerCase().trim()==email);//transformation the string to lower case and remov any space.



class:2  //=== condation value and datatype

console.log(5 === '5');//Is the number data type equal to the string data type = false
console.log(4 != 4);
let prodect='TV_HR33';
let size=50;
let salary=10000;
console.log(salary<=10000 && size<=50);
console.log(salary<=10000 || size<=80);



class:3  //if1
let num1=prompt('enter the first number: ');
let num2=prompt('enter the second number: ');
if(num1>num2){
    document.write('jafar fares');
}

let num=prompt('enter the favret numbers: ')
if(num<=3 && num>=0)
{
    document.write('you Ahmed')
}
else if(num>3 && num<=10)
{
    document.write('you jafar')
}
else
{
    document.write('sorry I cant determn your name')
}



class:4   //if2

let dagree=prompt('enter dagree ')
if(dagree<50){
    document.write('you fail')
}
else if(dagree>50){
    document.write('Ok');
}



class:5

let age=prompt('enter yor age: ');
age<=15? document.write('you small'):
  age<=17? document.write('you small')
    :document.write('you big');
    


class:6   //switch

let role=prompt('what is your role: ');
switch(role){
    case 'admen':
        document.write('Mohmmed')
        break;
    case 'manger':
        document.write('Ali')
        break;
    case 'user':
        document.write('jafar')
        break;
    default:
        document.write('hallo user');
}
*/






//for loop
/*
class:1    

for(let i=0;i<6;i+=1){
    console.log("hallo");
    console.log("world");
}
for(let i=0;i<6;i+=1){
    console.log("hallo "+i);
}


class:2    //loop in array

let names=['Ahmed','Jafar','Fares','Ali','Mohmmed']
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}


class:3    //Nasted loop

let names=['A','B','C','D'];
let models=[2022,2023,2024,2025];
for(let i=0;i<names.length;i++){
    console.log(names[i]);
    for(let j=0;j<models.length;j++){
       console.log('models: '+ models[j]);
    }
}


class:4    //continue and break

let names=['A','B','C','D'];
for(let i=0;i<names.length;i++){
    if(names[i]=='A'){
        continue;
    }
    console.log(names[i]);
}

let names=['A','B','C','D'];
for(let i=0;i<names.length;i++){
    if(names[i]=='D'){
        break;
    }
    console.log(names[i]);
}


class:5    //while and dowhile

let i=0;
while(i<3){
document.write('<h3>hallo world</h3>');
i++;
}

let i=0;
do{
    document.write('<h3>hallo world</h3>');
    i++;
}while(i<3);
*/






//function
/*
class:1

function calcAge(age)
{
    let result=age*360;
    console.log(result);
}
calcAge(20);
calcAge(18);
calcAge(17);

function prodect(price,text,abs)
{
    let pro=price+text;
    let result=pro+abs;
    console.log(result);
}
prodect(1000,1000,1000);
prodect(2000,2000,2000);
prodect(3000,3000,3000);



class:2    //return function

function prodect(price,text,abs)
{
    //locil viruble:- any viruble defined in the function cant use out function.
    let pro=price+text;
    let result=pro+abs;
    return result;
}
let name=prodect(1000,1000,1000)/2;
console.log(name);


function day(age){
    let result=age * 360;
    return result;
}
let days=day(18);
console.log(days);
function hours(age){
    let result=age*24;
    return result;
}
console.log(hours(days));



class:3   //hoisting

//var :-عند تعريف المتغير بواسطة ال var فان الكومبايلر سياخذ المتغير و يضعه في البداية اين ما وضعته ياخذه و يضعه في البداية 
//let :- يضع المتغير في مكانه عادي اي لا يقوم بنقله الى الاعلى يبقى في مكانه اي الكومبايلر لا لايخذ المتغيرات و يضعها في بداية الكود
//note:-الكومبايلر عندما ياخذ المتغيرات و يضعها في البداية هذه العميلة تسمى ال hosting اضافة الى انه ياخذ المتغيرات من دون قيهما اي قيمها تبقى في المكان الذي عرفت المتغير فيه

sum=num+num;
var sum;
var num=5;
console.log(sum);

//كيف يقرا الكومبايلر
// var sum;
// var num;
// sum=undefined+undefined; ->undefined+undefined=NuN
// num=5;

//Function Declaration:-لميزة: يمكن استدعاؤها قبل تعريفها في الكود (بسبب hoisting).

greet(); // يعمل
function greet() {
  console.log("Hello");
}

//Function Expression:-لميزة: يتم تخزينها في متغير، ولا يمكن استخدامها قبل تعريفها (ليست مرفوعة "not hoisted").

let greet = function() {
  console.log("Hello");
};
greet();





class:4     فانكشن تستدعي نفسها

//لكن هذا لا ينطبق على الفانكشن لان الفانكشن حتى لو كل المتغيرا داخلها var لا يمكن استدعائه خارجها
// {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }
// console.log(a); // ✅ موجود لأنه var
// console.log(b); // ❌ خطأ - b خارج نطاق البلوك
//var -> hoisting
//let -> no hoisting

(function(){
console.log('hallo');
})();




class:5    arugments:-A default value passed to the function if nothing is written inside it when it is called.

function arugments(name='Ali') // -> this arugments (name='Ali)
{
console.log(`hallo ${name}`);
}
arugments('Ahmed');

function arugments(...numbers) // ->Define an array inside a function
{
  let result=0;
  for(let i=0;i<numbers.length;i++){
    result+=numbers[i];
  }
  console.log(result);
}
arugments(5,6,78,90,4,);



class:6      arrow function

let x = (num,r) => num*r;
console.log(x(3,5));

let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
*/








//object
/*
class:1      //property:- is name variable incide object

//هي قيمة بيانات مخزنة داخل كائن (object)     ما هي property؟
const car = {
  color: "red",     // ← هذه property
  brand: "Toyota"   // ← هذه property أيضًا
};

// method:-هي فانكشن داخل اوبجكت
const car = {
  brand: "Toyota",
  start: function() {
    console.log("Car started");
  }
};

let car={
    title:'BMW',
    color:['white','black','green'],
    price:500000,
    hallo:function(){
    return 'object';
    }
};
console.log(car); // for acsess to all object
console.log(car.hallo()); // for acsess to part from the object
console.log(car.color[0]);



class:2     //nasted object

let user={
    //property
    first_name:'jafar',
    last_name:'faras',
    phon_number:{
        first:'077027763',
        last:'077284394',
    },
    //method
    hallo:function(){
        return 'object';
    },
    condation:function(){
        if(user.last_name==='faras'){
            return 'welcome';
        }
        else{
           return 'sorry';
        }
    },
}
console.log(user);
console.log(user.hallo());
console.log(user.condation());
console.log(user.phon_number.first);





class:3         //add property and method to object from out object

car={
    name:'Ahmed',

}
car.name='jafar';//for change property in object'car'
console.log(car);
car.age=20;//for add property to the object'car' 
console.log(car);
car.hallo=function()//for add method to the object
{
    return 'object';
}
console.log(car.hallo());




class:4    //This

// يجب ان تعلم ان الـ This قيمتها تكون حسب مكان استخدامها:
// اذا استخدمتها في method ف ان This تشير هنا الى الـ owner object.
// وحده ، يشير هذا إلى الـ window.
// في function عادية ، يشير This إلى الـ window.
// في function in strict mode ، يشير This إلى undefined.
// في event ، يشير This إلى العنصر الذي استقبل الحدث.


// "use strict"; هو توجيه (directive) في JavaScript يجعل الكود يعمل في الوضع الصارم (Strict Mode)، وهو وضع خاص يساعدك على:

// التقليل من الأخطاء البرمجية.

// منع استخدام بعض الممارسات السيئة.

// جعل الكود أكثر أمانًا وقابلية للصيانة.


let user={
    name:'jafar',
    getName:function(){
        return this.name;//لا تحتاج الى كتابة اسم الاوبجكت لاستدعائه اكتي tThis
    }
}
console.log(user.getName());

//this مع فانشكشن عادية من دون اوبجكت تشير الى وندو و وحدها تشير الى وندو لكن عندما نستخدم ال"use strict";يضهر لك اندفايند





class:5      //create object كيف يتم نقل المعلومات من جدول لاخر

let user={
    name:'jafar',
    getname:function(){
        return `hallo ${this.name}`;//يجب ان تضع this هنا لحفظ التغيرات التي تغيرها من الاوبجكت الثاني
    }//لانك في هذه الفانكشن تطلب الاسم الذي تابع لل يوزر الاول اي مهما غيرت من اليوزر الثاني لا يحدث  شي لذلك استخدم this 
}
let user2=Object.create(user);
console.log(user2.getname());
user2.name='Ali';
console.log(user2.getname());
console.log(user2.getname());




class:6        //assing لدمج اكثر من جدول

let a1={
name1:'jafar',
}
let a2={
name2:'Mohmmed',
}
let a3={
name3:'Ali',
}
let a4=Object.assign(a1,a2,a3);
console.log(a4);

*/











//DOM
/*
class:1

//document.getElementById():-الوصول الى العنصر من خلال ال id  الخاص به
//document.getElementsByClassName():-الوصول الى العنصر من خلال ال class name  الخاص به
//document.getElementsByTagName():-الوصول الى العنصر من خلال ال tag name  الخاص به
//document.querySelector():-الوصول الى العنصر من خلال ال selector
//document.querySelectorAll():-الوصول الى العنصر من خلال ال collection
//document.body:-الوصول الى الـ body
//document.title:-الوصول الى الـ title
//document.images:-الوصول الى الـ images
//document.links:-الوصول الى الـ links
//document.forms:-الوصول الى الـ forms
let name=document.getElementsByClassName('Ali')[0];
name.style.color='red';
console.log(name);



class:2

let info=document.querySelector('.img');
console.log(info.className);//to show name class
console.log(info.src);//to show src 
console.log(info.id);//to show id

// لاضافة عناصر او تبديلها او حذفها
let info=document.querySelector('.img');
info.src='images/Moon-lunar-full-moon-amazing-creative-school-arabia-صورة-للقمر-تصوير-القمر-تصوير-فوتوغرافي-صورة-للقمر-مكونة-من-50-الف-صورة-تم-تجميعها-بالفوتوشوب3.webp';//تبديل الصورة
info.className='Ali ker albshar';//تبديل اسم الكلاس
info.title='text';//اضافة خاصية جديدة اتربيوت
console.log(info);
console.log(info.className);
console.log(info.hasAttributes());//هل العنصر فيه اتربيوت او لا
console.log(info.hasAttribute('class'))//للبحث عن اتربيوت معين انتبه تكتب من دون s
console.log(info.attributes);//لعرض جميع الاتربيوت الموجودة في العنصر
console.log(info.attributes[0]);//لعرض اتربيوت معين
info.setAttribute('id','passowred');//لتغيير قيمة الاتربيوت 
console.log(info.id);
info.removeAttribute('id');//لحذف اتربيوت معين
console.log(info);
console.log(info.id);





class:3
//previousElementSibling VS previousSibling
//الفرق انه عندما نكتب ايمينت يعطينا العنصر الذي قبله اما اذا بدون ايلمنت يحضر لنا اي شيء قبله تعليق او اي شيء قبله

let element=document.querySelector('#Ali');

element.nextElementSibling.innerHTML='four';
element.previousElementSibling.innerHTML='six';
element.parentElement.remove();//سيحذف كل شي لانه العنصر الاب
console.log(element.parentElement);//للوصول للعنصر الاب لهذا العنصر 
console.log(element.nextElementSibling);
console.log(element.previousElementSibling);
//element.previousElementSibling.remove();
//console.log(element.nextSibling);
//console.log(element.previousSibling);يحضر لك اي شي قبل العنصر الذي طلبته اي ليش بشرط عنصر اذا كان قبله تعليق يحضر لك تعليق
//console.log(element.nextElementSibling);//يجلب لك العصر الذي تحته
//console.log(element.previousElementSibling);//يجلب لك العنصر الذي فوقه





class:4     innerHTML VS outerHTML
innerText Vs outerText    HTMLنفس الشيء توضع بدل 
//innerHTML:تصل الى كل ما في  ال div و تحوله او تغيره او اي شيء تريده تفعل به
//outerHTML:تتحكم بل div كلها
let pop=document.getElementById('pop');
console.log(pop.innerHTML);//للوصول الى ما بداخل ال div
console.log(pop.outerHTML);//للوصول الى ال div نفسها
pop.innerHTML='<h3>hallo</h3>';
pop.outerHTML='<div>halo</div>';
console.log(pop.innerHTML);
console.log(pop.outerHTML);





class:5

let contener=document.getElementById('pop');
contener.innerText='<h3>Ali</h3>';
console.log(pop);
contener.style.backgroundColor='red';
contener.style.color='green';
contener.style.padding='10px';
contener.style.fontSize='20px';
contener.style.borderLeft='5px solid #3f7c74';
//طريقة خرى لكابة كود ال cssهذه الطريقة تغلي لك كل الخصائص التي استخدمتهل بالطريقة التي قبلها و تبدا من جديد
contener.style.cssText= `
background-color: #3f7c74;
color:red;
padding:20px;
`
//الطريقة الثالثة
contener.style.removeProperty('background');//سيمسح الباكروند
contener.style.setProperty('color','green');




class:6





class:7

let continer=document.createElement('div');
document.body.appendChild(continer);
continer.style.textAlign='center';

let names=['Ali','Abrihm','Mohmmed','Ahmed'];
let ages=['18 years old','19 years old','21 years old','20 years old']

function element(names,ages){
let card=document.createElement('div');
let name=document.createElement('h2');
let age=document.createElement('p');
let img=document.createElement('img');

info_name=document.createTextNode(names);
info_age=document.createTextNode(ages);
img.src='images/Moon-lunar-full-moon-amazing-creative-school-arabia-صورة-للقمر-تصوير-القمر-تصوير-فوتوغرافي-صورة-للقمر-مكونة-من-50-الف-صورة-تم-تجميعها-بالفوتوشوب3.webp'
name.appendChild(info_name);
age.appendChild(info_age);


//style
card.style.width='200px';
card.style.padding='10px';
card.style.background='#444';
card.style.color='white';
card.style.margin='10px';
card.style.display='inline-block';

img.style.width='100%';



card.appendChild(name);
card.appendChild(age);
card.appendChild(img);

continer.appendChild(card);
}
for(let i=0;i<4;i++){
    element(names[i],ages[i]);
}






class:8      Event

//tow method to add event     1-Html: <button onclick="console.log('hallo')">clikc</button> 
//2-javascript: 1-onclick      VS       2-addEventListener

//1-onclick
//تستطيع ان تنفذها هكذا 
function num(){
document.body.style.background='#444';
}
passowred.onclick=num;

//او تنفذها هكذا
passowred.onclick=function(){
document.body.style.background='#444';
}
//هذه الطريقة تنفذ لك امر واحد فقط
passowred.onclick=function(){
console.log('hallo');
}
passowred.onclick=function(){
console.log('llo');
}
passowred.onclick=function(){
console.log('Ali');
}//هنا عندما تضغط على الزر سيطبع لك فقط علي لانه ينفذ امر واد فقط

//2-addEventListener
//تنفذ اكثر من امر معا رائعة
let passowred=document.querySelector('#passowred');

passowred.addEventListener('click',function(){
    document.body.style.background='#444';
});
passowred.addEventListener('click',function(){
    passowred.style.background='white';
});
    
//فكرة جميلة لمثال
let bol=true;
passowred.onclick=function num(){
    if(!bol){
    document.body.style.backgroundColor='red';
    }
     else{
    document.body.style.backgroundColor='white';
    }
    bol=!bol;

};





class:9

let passowred=document.getElementById('passowred');
passowred.onmouseup=function(){
    console.log('Ali');
    passowred.style.fontSize='20px';
}

let passowred=document.getElementById('passowred');
 passowred.onmouseover=function(){
    console.log('Ali');
 }

 let passowred=document.getElementById('passowred');
 passowred.onmouseout=function(){
    console.log('Ali');
 }

 let passowred=document.getElementById('passowred');
 passowred.onmousemove=function(){
    console.log('Ali');
 }

 //احداث الكيبورد

let inp=document.getElementById('inp');
 inp.onkeyup=function(){
    console.log('Ali');
 }

//عندما تكون داخل اطار الinputهذه العملية تسمى فوكس
//و عندما تكون خارج اطال ال inputهذه العملية تسمى بلور كل عملية لها احداث مختلفة

let inp=document.getElementById('inp');
 inp.onfocus=function(){
    this.style.border='2px solid #f00';
    this.style.width='400px';
    this.style.height='50px';
    this.style.background='green';
}
inp.onblur=function(){
   inp.style.border='none';
   this.style.background='none';
}

//وتوجد احداث للبراوزر اطلع عليها




class:10

let inp=document.getElementById('inp');
let inp1=document.getElementById('inp1');

inp.addEventListener('keyup',function(){
    inp.value=inp1.value * 15.6;
})
inp.addEventListener('keyup',function(){
    inp1.value=inp.value / 15.6;
})






class:11

let after=document.getElementById('after');
let before=document.getElementById('before');
let append=document.getElementById('append');
let content=document.getElementById('content');
let contener=document.getElementById('contener');

contener.style.background='black';
contener.style.height='50px';
content.style.color='black';
after.onclick=function after1(){
    contener.after(content);
}
before.onclick=function before1(){
    contener.before(content);
}
append.onclick=function append1(){
    contener.append(content);
}




class:12    

//classList    هي تجلب لك جميع الكلاسات الموجودة في HTMl
//div.classList.add("hidden")     يضيف كلاس للعنصرالذي في جافاسكربت
//div.classList.remove("hidden")    يزيل كلاس من العنصر الذي في جافاسكربت

let info_open=document.getElementById('open');
let info_close=document.getElementById('close');
let info_contener = document.querySelector('.contener');

info_close.onclick = function(){
    info_contener.classList.add('hallo');
    this.classList.add('hallo');
    info_open.classList.remove('hallo');
};
info_open.onclick=function(){
    this.classList.add('hallo');
    info_contener.classList.remove('hallo');
    info_close.classList.remove('hallo');
}


class:13

let p1=document.getElementById('p1');

//الطريقة العادية
p1.onclick=function(){
    this.classList.add('name');//اول ضغطة سيضيف لك الكلاس
}
p1.oncontextmenu=function(){
    this.classList.remove('name');//تضغط كلك يمين يحذفه
}

//الطريقة الافضل
let p1=document.getElementById('p1');

p1.onclick=function(){
    this.classList.toggle('name');   //اول ضغطة تضيف الكلاس ثاني ضغطة تحذفه
}





class:14

let txt=document.getElementById('txt');
let d1=document.getElementById('d1');

window.onload=function(){
    txt.focus();     //اول متدخل تلكا عامل فوكس على الinput
    d1.onclick();    //بمجرد الدخول على الموقع يتغير لون الزر
    txt.placeholder='text';
}
d1.onclick=function(){
    d1.style.background='green';
}


//project

let inp=document.getElementById('inp');
let btn=document.getElementById('btn');
let task=document.getElementById('task List');
btn.onclick=function(){
    const li=document.createElement('li');
    li.textContent=inp.value;
    task.appendChild(li);
    inp.value="";
    li.onclick=function(){
        li.remove();
    }
}

//project

let btn=document.getElementById('btn');
let btn1=document.getElementById('btn1');
let contener=document.querySelector('.contener');
btn.onclick=function(){
   contener.classList.toggle('Ali');
   contener.classList.remove('Ali1');
}
btn1.onclick=function(){
   contener.classList.toggle('Ali1');
    contener.classList.remove('Ali');
}

//project

let btn=document.getElementById('btn1');
let contener=document.querySelector('.contener');
let counter=0
btn.onclick=function(){
    contener.classList.remove('Ali', 'Ali1');
    
    if(counter===0)
    {
      contener.classList.add('Ali');
    }
    if(counter===1)
    {
      contener.classList.add('Ali1');
    }
    
    counter=(counter+1)%2;
}

//الة حاسبة

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

for(let i=0;i<buttons.length;i++){
    const btn=buttons[i];
  btn.addEventListener('click', () => {
    const value=btn.textContent;

    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'خطأ';
      }
    } else {
      display.value += value;
    }
  });
}

*/


















//BOM 
/*
class:2

let box = document.getElementById('box');
// كم تم تمريره داخل الصندوق؟
console.log(box.scrollTop);

window.scroll(x,y)
window.scroll(50,50)اذا كانت الصفحة طويلة يتحكم بسكرل مالتهة اي الذي يحرك داخل الواجهة عندما تكون طويلة او عريضة
window.scrollBy(x,y)هذه اذا انت تحركت 50 فهي لا تعود من البداية و تمشي 50 لا تكمل من المكان الذي وقف عليه السكرول اخر مرة
scrollY;تضهر لك اين يقف السكرول بالضبط على المحور العمودي
scrollX;تضهر لك اين يقف السكرول بالضبط على المحور الافقي
document.getElementById('Ali').scrollIntoView({ behavior: 'smooth' });عندما انفذ تذهب الصفحة مباشرتا الى العنصر الذي وضعته

//مشروع صغير لفهم السهم الذي يضهر تحت في بعض المواقع تضغط عليه و يعيدك الى بداية الصفحة
let btn=document.getElementById('btn');

window.onscroll=function(){
    if(scrollY>=200){
        btn.style.display='block';
    }else{
        btn.style.display='none';
    }
}

// btn.onclick=function(){
//     scroll(0,0);
// }

btn.onclick=function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    });
 }




 class:3




 class:4        url ==    Uniform Resource Locator
 كل جزء و اسمه
https:// == protocol    www.jafar.com  == اhost name     /jafar_noufal/ == path name
  
 https://www.jafar.com/jafar_noufal/   اسمها الكامل href
location.assign('https://www.w3schools.com/tags/tag_img.asp');   تنقلك الى رابط و تمكنك من الرجوع مع حفظ الياانات في الصفحة لسابقة
location.replace('https://www.w3schools.com/tags/tag_img.asp');
ملاحضة الاثنثين يستخدمان في consoleوليس هنا




class:5   setTimeout    clearTimeout  setInterval  clearInterval

//1000 معناها ثانية واحدة

//setTimeout  تشغل لك ما تريده بعد وقت انت تحدده مرة واحدة
//clearTimeout توقفها ولا تجعلها تشتغل اصلا الا اذا وضعتها في شرط
//setInterval تشغل لك ما تريده بوقت انت تحدده و تظل تكرر فيه حتى انت توقفها بواسطة لاداة التي تحتها
//clearInterval الاداة التي ستوقفها و لكن يجب ان تضعها في شرط اذا وضعتها هكذا ستوقفها عن التنفيذ

//let hallo= setTimeout(function(){
//console.log('Ali');
//},3000)//سينفذ الفانكشن بعد 3 ثواني
//سيطبعها مرة واحدة من غير تكرار

// for(let i=0;i<5;i++){
// let hallo= setTimeout(function(){
// console.log('Ali');
// },1000)}//ستطبع اول خمسة في وقت واحد  بعد 3 ثواني

//clearTimeout(hallo)  اذا اردت ان توقفه ولا يعمل ضعها من دون شرط


let counter=0;
let hallo=setInterval(function(){
console.log(counter++);
if(counter===4){
    clearInterval(hallo);
}
},1000)//كل ثانية سينفذ الفانكشن مرة و سيستمر اذا لم توقفه بشرط كهذا و هذه الاداة التي توقفه

//project

const nums=['black','white','green','red','blue'];
let counter=0;
let hallo=setInterval(function(){
    document.body.style.background=nums[counter];
    counter++;
    if(counter===nums.length){
        counter=0;
    }
},3000);








class:6    loacalStorage   sessionStorage

//هما مساحتا تخزين يستخدمها مطور الفرونت اند لحفظ البيانات بطريقة دائمية او مؤقتة و هي من اهم ادوات مطور فرونت اند

//تخزين البيانات
// localStorage
localStorage.setItem("username", "Ahmed");
localStorage.setItem("key","value");

// sessionStorage
sessionStorage.setItem("username", "Ali");
localStorage.setItem("key","value");

//جلب العنصر
// localStorage
let user1 = localStorage.getItem("username");
console.log(user1); //Ahmed

// sessionStorage
let user2 = sessionStorage.getItem("username");
console.log(user2); //Ali

//حذف العنصر
// حذف عنصر واحد
localStorage.removeItem("username");
sessionStorage.removeItem("username");

// حذف كل العناصر
localStorage.clear();
sessionStorage.clear();

**localStorage** إذا كنت تحتاج حفظ بيانات حتى بعد إغلاق المتصفح، مثل
**sessionStorage** إذا كنت تحتاج حفظ بيانات مؤقتة خلال الجلسة فقط، مثل

localStorage:5MB _ 10MB مساحة التخزين
sessionStorage:5MB مساحة التخزين

kay  هي المكان الذي سنحزن به و لا تختار نفس اسم الكي مرتين لاه سينفذ الاخير فقط
value هي القيمة التي نريد خزنها و كلهما يعتبر سترنك

//كيف نرى المكان الذي خزنا به البيانات
// inspact => console => appliction => localStorage

localStorage.name='Ali';
console.log(localStorage.name);

//key and value يجب ان تكون سترنك يعني كل شي لازم تحوله الى سترنك قبل متخلي واذا متحوله راح يعتبرة سترنك

//localStorage.setItem('name',25);
//localStorage.setItem('name',[1,2,3]);
//localStorage.name={name:'jafar',age:20};
//console.log(typeof localStorage.name);//string
//في المثال الذي فوق سيحول كل شيء الى سترنك و سيخرب المصفوفة و الارقام و الاوبجكت لحل ذلك انضر تحت

//JSON.stringify(value)
//localStorage.setItem('name',JSON.stringify(25));
//localStorage.setItem('skals',JSON.stringify([1,2,3]));
//localStorage.name=JSON.stringify({name:'jafar',age:20});
//console.log(localStorage.skals);//string

//localStorage.setItem('opp',JSON.stringify(25));
//localStorage.setItem('skals',JSON.stringify([1,2,3]));
//localStorage.Ali=JSON.stringify({name:'jafar',age:20});
//JSON.pares(value)ستعيد لك نوع البياانات الى اصله و المفوفة هي object
//console.log(typeof JSON.parse(localStorage.skals));//object

// localStorage.setItem('opp',JSON.stringify(25));
// localStorage.setItem('skals',JSON.stringify([1,2,3]));
// localStorage.Ali=JSON.stringify({name:'jafar',age:20});
// console.log(localStorage.key(0));//لعرض اسم مكان التخزين مهم جدا عندما اعمل لوب
// //opp

// localStorage.setItem('opp',JSON.stringify(25));
// localStorage.setItem('skals',JSON.stringify([1,2,3]));
// localStorage.Ali=JSON.stringify({name:'jafar',age:20});
// localStorage.removeItem('skals');//لمسح عنصر معين من الذاكرة
// localStorage.clear();//to remove all elements



//الان سناخذ امثلة و نشرح الفرق بين localStorage and sessionStorage
//لا يوجد اي فرق بينهما كل ما قلناه على الاولى ينطبق على الاخرى لكن الاولى عندما تخرج من البراةزر و تعود تجد المعلومات الثانية تحفظ لك البيانات ما دامك انت في لبواجهة و لم تخرج منها حتى اذا عملت ريلود تبقى لكن اذا خرجت الواجهة ستمسح كل شيء

let text=document.getElementById('text');
if(localStorage.length>0){
    text.value=localStorage.getItem('text');//اذا كانت هناك قيمة مخزنة اعرضها داخل اطار الانبوت
}
text.onkeyup=function(){
    localStorage.setItem('text',text.value);//المكان الذي سنخزن فيه اسمه تكست و سنضع فيه قيمة الانبوت الذي يمثل الفاليو
}
//هنا ما ستكتبه داخل اطار الانبوت حتى لو خرجت من الرابط و عدت سترى نفس الكلام الذي كتبته

*/
















//CRUDS
/*
class:1

C:-create
R:-read
U:-update
D:-delet
S:-search





class:3
``:-Backticks
   onkeyupهذا الايفينت يقول بمجرد ان تضغط على اي زر في الكيبورد نفذ لي ما في داخل الفانكشن

// projec big

*/









/*
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let sumbit=document.getElementById('sumbit');
let count=document.getElementById('count');
let category=document.getElementById('category');

let mood='create';
let tmp;
//getTotal()
//نضع موجب قبل العناصر لان هذه العناصر تعتبر سترنك وبهذا ستكون عملية دمج و ليس جمع لذلك نضع موجب قبل كل عنصر لنحوله الى رقم
function getTotal(){
   if(price.value!=''){
    let result=(+price.value + +taxes.value + +ads.value)
    - +discount.value;
    total.innerHTML=result;
    total.style.background='green';
   }else{
    total.innerHTML='';
    total.style.background='#a00d02';
   }
}



//create

//اذا كانت الوكل ستورج فارغة ضع المعومات في المصفوفة الفارغة و بعد اول عنصر ستصبح غير فارغة و سيتنفذ ال الشرط الاول
//يحب ضع هذا الشرط لان لجافاسكربت لغة تبدا من الاعلى الى الاسفل و كل مرة تجد فوق مصفوفة فارغة اي تفرغها لذلك يجب وضع هذل الشرط اذا كان في الوكل ستورج بيانات فخزنها في متغير
//واذا لم تكن هنالك بيانات يبدا بمصفوفة جديدة فارغة و بعد اضافة اويل عنصر بيانات سيعمل الifلانه تحقق

let datapro;

if(localStorage.prodect!=null){
    datapro=JSON.parse(localStorage.prodect);
    
}else{
    datapro=[];
}
sumbit.onclick=function(){
    let newpro={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    if(mood==='create'){
    if(count.value>1){
      for(let i=0;i<count.value;i++){
        datapro.push(newpro);
       }
     }
    else{
        datapro.push(newpro);
     }
    }
    else{
        datapro[tmp]=newpro;
        mood='create';
        sumbit.innerHTML='Create';
        count.style.display='block';
    }
    
    localStorage.setItem('prodect',JSON.stringify(datapro));
    console.log(datapro);
    clear();
    showdata();
}
//clear
//تفرغ الوجهة من البيانات بعد الضغط على create
function clear(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
}
//read
//عرض البيانات على الشاشة
//تعمل الفانكشن عند الضغط على الزر ولكنها تبقى محفوضة حتى بعد الريلود لاننا استدعيناها خارج الز ايضا
function showdata(){
    let table='';
    for(let i=0;i<datapro.length;i++){
      table+=`
     <tr>
         <td>${i}</td>
         <td>${datapro[i].title}</td>
         <td>${datapro[i].price}</td>
         <td>${datapro[i].taxes}</td>
         <td>${datapro[i].ads}</td>
         <td>${datapro[i].discount}</td>
         <td>${datapro[i].total}</td>
         <td>${datapro[i].count}</td>
         <td>${datapro[i].category}</td>
         <td><button onclick="updatedata(${i})" id="update">update</button></td>
         <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
      </tr>
      `
    }

    document.getElementById('tbody').innerHTML=table;
    let btndelete=document.getElementById('deleteall')
    if(datapro.length>0){
        btndelete.innerHTML=`
        <button onclick="DeleteAll()" id="deleteall">Delete All ${datapro.length}</button>
        `
    }else{
        btndelete.innerHTML='';
    }
    getTotal();
}
showdata();


//Delete
function deletedata(i){
datapro.splice(i,1);
localStorage.prodect=JSON.stringify(datapro);
showdata();//يجب اضافة هذه الفانكشن حتى لا نضطر الى عمل ريلود لكي يختفي العنصر من html
}


//DeleteAll
function DeleteAll(){
   localStorage.clear();
   datapro=[];
   showdata();
}


//updatedata
function updatedata(i){
    title.value=datapro[i].title;
    price.value=datapro[i].price;
    taxes.value=datapro[i].taxes;
    ads.value=datapro[i].ads;
    discount.value=datapro[i].discount;
    getTotal();
    count.style.display='none';
    category.value=datapro[i].category;
    sumbit.innerHTML='update';
    mood='Update';
    tmp=i;
    scroll({
        top:0,
        behavior:'smooth',
    });
}



//Search
let searchMood='title';
function getSearchMood(id){
if(id=='searchtitle'){
    searchMood='title';
    search.placeholder='Search By Title';
}else{
    searchMood='Category';
    search.placeholder='Search By Category';
}
search.focus()
search.value='';
showdata();
}

function searchData(value){

    let table;
    if(searchMood==='title'){
       for(let i=0;i<datapro.length;i++){
        if(datapro[i].title.toLowerCase().includes(value.toLowerCase())){
              table+=`
                <tr>
                    <td>${i}</td>
                    <td>${datapro[i].title}</td>
                    <td>${datapro[i].price}</td>
                    <td>${datapro[i].taxes}</td>
                    <td>${datapro[i].ads}</td>
                    <td>${datapro[i].discount}</td>
                    <td>${datapro[i].total}</td>
                    <td>${datapro[i].count}</td>
                    <td>${datapro[i].category}</td>
                    <td><button onclick="updatedata(${i})" id="update">update</button></td>
                    <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
                </tr>
                `
        }
       }
    }
    
    
 else{
                    
                    for(let i=0;i<datapro.length;i++){
                        if(datapro[i].category.toLowerCase().includes(value.toLowerCase())){
                            table+=`
                                <tr>
                                <td>${i}</td>
                                <td>${datapro[i].title}</td>
                                <td>${datapro[i].price}</td>
                                <td>${datapro[i].taxes}</td>
                                <td>${datapro[i].ads}</td>
                                <td>${datapro[i].discount}</td>
                                <td>${datapro[i].total}</td>
                                <td>${datapro[i].count}</td>
                                <td>${datapro[i].category}</td>
                                <td><button onclick="updatedata(${i})" id="update">update</button></td>
                                <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
                                </tr>
                                `
                                }
                        }
    }
    document.getElementById('tbody').innerHTML=table;
}
*/



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



