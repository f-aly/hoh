
document.addEventListener('DOMContentLoaded', function() {
var paragraph2 = document.createElement('p');
paragraph2.innerText = `I'm teaching this course!`;
document.body.appendChild(paragraph2);

paragraph2.style.fontSize = '18px';
paragraph2.style.fontFamily = 'comic-sans';
paragraph2.style.border = '1px solid orange';
paragraph2.style.padding = '30px';

paragraph2.addEventListener('mouseenter', function(event){
    event.target.style.color = 'orange';
});
});


// var newParagraph = document.createElement('p');
// newParagraph.innerText = 'I come here from your theDOM file!';
// document.body.appendChild(newParagraph);