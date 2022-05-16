

let searchTerm = document.getElementById('searchTerm');
let btn = document.querySelector('button');
let results=document.getElementById('results');
let bookResults= document.getElementById('book-results');


btn.addEventListener('click', function searchLibrary(){

if(bookResults.innerHTML !=''){
    bookResults.innerHTML='';
}


fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm.value}&key=AIzaSyCWvjDY4JNWySwLM-BqcgbBnCEIwtfXbgw`)
.then(response => response.json())
.then(data => {

     data.items.map(card => {
        console.log(card)
        let cardContainer=document.createElement('div');
        let cardTitle=document.createElement('div');
        let cardDesc=document.createElement('div');
        let cardAuthor= document.createElement('div');
        let cardImage=document.createElement('img');

        cardContainer.classList.add('card-container');
        cardTitle.classList.add('book-title');
        cardDesc.classList.add('book-description');
        cardImage.classList.add('book-image');
        cardAuthor.classList.add('book-author');
        
        cardTitle.innerHTML=`${card.volumeInfo.title}`;            
        cardDesc.innerHTML=`${card.volumeInfo.description}`;            
        cardImage.src=`${card.volumeInfo.imageLinks.thumbnail}`;
        cardAuthor.innerHTML=`${card.volumeInfo.authors}`;
        
        cardContainer.append(cardTitle, cardDesc, cardImage, cardAuthor);            
        bookResults.append(cardContainer);
        
        if(cardDesc.innerHTML == 'undefined'){
        cardDesc.innerHTML='No description available.';
}

        if(cardImage.src=='undefined'){
            cardImage.src='https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg';
        }

        if(cardAuthor.innerHTML == 'undefined'){
            cardAuthor.innerHTML = 'No author available.';
        }
        
})
})

}   
)




results.style.display='none';

function showRes(){
results.style.display='block';
}


btn.addEventListener('click', showRes);