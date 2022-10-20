let url = "https://xkcd.now.sh/?comic=latest";
let picture  = document.querySelector('.picture');
function fetchData(url){
    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error(`something happen unexpected ${response.status}`)
        }
return response.json();
    })
    .then(data =>{
        console.log(data)
        display(data);
    })
    .catch(err => console.log(err));
}
function display(data){
    let cardBody = document.querySelector('.card-body');
    let picture = document.createElement('img');
    picture.classList.add('picture');
    picture.src = data.img
    cardBody.append(picture);
}
fetchData(url);