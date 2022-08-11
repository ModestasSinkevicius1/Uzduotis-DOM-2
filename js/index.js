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



