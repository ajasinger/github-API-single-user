const form = document.getElementById("myForm");

form.addEventListener("submit", eventHandler)

 function eventHandler(e) {
    e.preventDefault()

     //get search input
     let search = document.getElementById("search").value;

     //remove spaces from search value
     let nameString = search.split(' ').join('');
    
     //fetch API
     fetch("https://api.github.com/users/"+nameString)
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
        })

}