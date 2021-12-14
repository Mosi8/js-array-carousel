const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


// ciclo for immagini piccole 
let itemsPiccole = '';
let fotoActive = 0;

for (let i = 0; i < items.length; i++) {
    itemsPiccole += `
    <div class="col-12 p-0 ms_h20 ms_oscura" id=items-${i}>
        <img src="${items[i]}">
    </div>`;
}

const imgPiccole = document.getElementById('img_piccole');
imgPiccole.innerHTML = itemsPiccole;

let fotoPiccolaActive = document.getElementById('items-'+ fotoActive);
fotoPiccolaActive.classList.remove('ms_oscura')
fotoPiccolaActive.classList.add('ms_no_oscura');
fotoPiccolaActive.classList.add('ms_border');


// ciclo for immagini grande 
let itemGrande = '';
let elementActive = 0;

for (let i = 0; i < items.length; i++) {
    itemGrande += `
    <img class="hidden" id=item-grande-${i} src="${items[i]}">`;
    
}

const imgGrande = document.getElementById('img_grande');
imgGrande.innerHTML = itemGrande;

let itemActive = document.getElementById('item-grande-'+ elementActive);
itemActive.classList.remove('hidden')
itemActive.classList.add('active');

