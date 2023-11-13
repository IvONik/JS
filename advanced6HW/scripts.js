'use strict';


function addFeedback (productName, text){
    if (productName.length < 1 || text.length <1){
        messageEl.textContent = "Поля не могут быть пустыми";
    }    
    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || {};
    if (!existingReviews[productName]) {
        existingReviews[productName] = [];
    }
    existingReviews[productName].push(textEl.value);
    localStorage.setItem("reviews", JSON.stringify(existingReviews));
}

function createText (key){
    textEl.style.display = "none"; 
    for (let i = 0; i < reviews[key].length; i++) {
        const ulRev = document.createElement('ul')            
        const ListItem = document.createElement('li');           
        ulRev.append(ListItem)
        ListItem.textContent = reviews[key][i];            
        const btnDelete = document.createElement('button');
        btnDelete.textContent = "Удалить отзыв";
        textEl.append(ListItem)
        textEl.append(btnDelete)
        btnDelete.addEventListener('click',() =>{
            deleteReview(key, textEl)
        })
           
    // for (const i in reviews[key]) {                   
    //     const ulRev = document.createElement('ul')            
    //     const ListItem = document.createElement('li');           
    //     ulRev.append(ListItem)
    //     ListItem.textContent = reviews[key][i];            
    //     const btnDelete = document.createElement('button');
    //     btnDelete.textContent = "Удалить отзыв";
    //     textEl.append(ListItem)
    //     textEl.append(btnDelete)
   
    }
}

function deleteReview(key, ListItem){
    var reviews = JSON.parse(localStorage.getItem("reviews")) || {};
    reviews[key] = reviews[key].filter(function (r) {
        return r !== r;
    });
    if (reviews[key].length === 0) {
        delete reviews[key];
    }
    localStorage.setItem("reviews", JSON.stringify(reviews));
    location.reload();
}