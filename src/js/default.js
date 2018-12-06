//default 

var mainCnt = document.getElementById("mainCnt");
var matrixHandler = document.getElementById("matrixHandler");
var addCard = document.getElementById("addCard");

addCard.addEventListener('click', cardHandler);

function cardHandler(e){
    e.preventDefault();
    console.log("Add Card Clicked");
    var card = document.createElement('div'),
        cardHtml = '';
    card.className = 'col col-sm-3';
    cardHtml += '<div class="card">' +
                    '<div class="card-header">Featured</div>' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">Special title treatment</h5>' +
                        '<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>' +
                        '<a href="#" class="btn btn-primary">Go somewhere</a>' +
                    '</div>'+
                '</div>';
    console.log(card);
    card.innerHTML=cardHtml;
    matrixHandler.appendChild(card);
}





