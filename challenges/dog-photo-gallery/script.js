let url = "https://dog.ceo/api/breeds/image/random";
let image = document.querySelector('.picture');
let cardBody = document.querySelector('.card-body');
let firstBtn = document.querySelector('.firstBtn');
firstBtn.addEventListener('click', getFactAjax);

function getFactAjax(){
    fetch(url)
    .then(function(response){
        if(!response.ok){
            throw new Error(`Network response was not ok ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data.message);
        if (data  !== ''){
            display(data);
        }
    })
    .catch(err => console.log(err));
}

function display(data){
    let unorderList = document.querySelector('.unorderList');
    let listElement = document.createElement("li");
    let image = document.createElement("img");
    cardBody.style.display = 'block';
    image.src = data.message;
    image.style.height = "30%";
    image.style.width = "50%";
    listElement.append(image);
    unorderList.appendChild(listElement);
}