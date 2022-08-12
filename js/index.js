//Task 1

const domH1= document.querySelector('h1');
const domI = document.querySelector('i');
const domH2= document.querySelector('h1 + h2');

domH1.style.color = 'darkgreen';

domI.classList.add("small");

domH1.classList.remove("main");

domH2.classList.add("first");

domH2.classList.remove("main");

//Task 2

const domAllH2= document.querySelectorAll('h2');

console.log('H2 count: ', domAllH2.length);
console.log('H2 except class "first" count: ', [...domAllH2].filter(a => a.className !== 'first').length);
[...domAllH2].map(a => a.style.color = 'lightblue');

const domDiv = document.querySelectorAll('div.prices > h2');

[...domDiv].map(a => a.classList.add("price-tag"))

const domAllNew= document.querySelectorAll('.new');

[...domAllNew].map(a => a.style.textDecoration = 'underline');

const domAllUl = document.querySelectorAll('ul');
const domAllGirafe = document.querySelector('#zirafos');

console.log('Žirafu ir gyvunu yra: ',domAllUl.length + (domAllGirafe.children.length - 1));

[...domAllUl].map(a => a.style.padding = '15px 50px');

const domAllUlNew = document.querySelectorAll('ul > li.new');

console.log('Nauju gyvunu yra: ', domAllUlNew.length);

let domTemp = [...domAllUl].map(a=>[...a.children]);

domTemp = domTemp.map(a => a.filter(b => b.className === "new"));

for(const child of domTemp){
    if(child.length !== 0)
        console.log('Yra nauju gyvunu kategoriuose: ',child ,child.length);
}

//Task 3

const domBtnH1Color = document.querySelector('#h1-color');
const domBtnH1Font = document.querySelector('#h1-font');
domBtnH1Color.addEventListener('click', () => domH1.style.color = 'green');
domBtnH1Font.addEventListener('click', () => domH1.style.fontSize = '10px');

domI.addEventListener('click', (e)=> e.target.style.fontWeight = 'bold');

const domDivPrice = document.querySelector('div.prices');

domDivPrice.addEventListener('click', (e) => {
    if(e.target.style.backgroundColor === 'rgb(128, 128, 128)'){
        e.target.style.backgroundColor = 'white';    
    }
    else{
        e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
});

//const domContact = document.querySelector('#contacts').sheet;
//domContact.insertRule('#contacts { color: orange }');

const domContact = document.querySelector('#contacts');
const domUContact = document.querySelector('#contacts u');
const domXContact = document.querySelector('#contacts b');

const sheets = document.styleSheets;

let thisFunc=null;
domContact.addEventListener('click', thisFunc = function(e){
    sheets[0].insertRule('#contacts{ color: orange }', 7);
});

domUContact.addEventListener('click', (e) => {
    sheets[0].insertRule('#contacts{ font-size: 20px }', 7);
});

domXContact.addEventListener('click', (e) => {
    domContact.removeEventListener('click', thisFunc);
    sheets[0].deleteRule(7);
});

const domBtnReturnC = document.querySelector('#h1-color-back');
const domBtnReturnF = document.querySelector('#h1-font-back');

domBtnReturnC.addEventListener('click', () =>{
    console.log(domH1.style.color);
});
domBtnReturnF.addEventListener('click', () =>{
    if(domH1.style.fontSize != '')
        console.log(domH1.style.fontSize);
});

//Task 4

for(const child of domAllUlNew){
    child.addEventListener('dblclick', (e)=>{
        e.target.style.color = 'red';
    });
}

let domAllAnimals = document.querySelectorAll('li');

const domAllLikes = [...domAllAnimals].filter(a => a.className === "like-button");
domAllAnimals = [...domAllAnimals].filter(a => a.className !== "like-button");

for(const child of domAllAnimals){
    child.addEventListener('click', (e)=>e.target.style.fontSize = '130%');
}

for(const child of domAllLikes){
    child.addEventListener('click', (e)=> e.target.parentNode.classList.add("like"));
}

//Task 5

const elH1 = document.createElement('h2');
elH1.textContent = 'Senjorai tik: 1.99 eur';

domDivPrice.insertBefore(elH1, domDivPrice.children[3]);

const elH1Group = document.createElement('h2');
elH1Group.textContent = 'Senjorų grupė iki 10: tik 5.99 eur';
elH1Group.classList.add("new");

domDivPrice.insertBefore(elH1Group, domDivPrice.children[4]);

elH1Group.addEventListener('dblclick', (e)=>e.target.style.color = 'green');


for(const child of domAllUl){
    const elDislike = document.createElement('li');
    elDislike.textContent = 'NEPATINKA';
    child.insertBefore(elDislike, child.children[1]);
    elDislike.addEventListener('click', ()=>child.classList.remove('like'));
}

const elField = document.createElement('fieldset');
const elLegend = document.createElement('legend');

const elButtonH1Underline = document.createElement('button');
const elButtonH1NoLine = document.createElement('button');

elLegend.textContent = 'HEADER 3';
elButtonH1Underline.setAttribute('id','h1-underline');
elButtonH1NoLine.setAttribute('id','h1-none');

elButtonH1Underline.textContent = 'Pabraukti H1 tagą';
elButtonH1NoLine.textContent = 'Nepabraukti H1 tagą';

elField.appendChild(elLegend);
elField.appendChild(elButtonH1Underline);
elField.appendChild(elButtonH1NoLine);
document.body.appendChild(elField);

document.body.insertBefore(elField, document.body.children[8]);

elButtonH1Underline.addEventListener('click', ()=>domH1.style.textDecoration = 'underline');
elButtonH1NoLine.addEventListener('click', ()=>domH1.style.textDecoration = 'none');





