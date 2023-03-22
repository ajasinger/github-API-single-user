const form = document.getElementById("myForm");

form.addEventListener("submit", eventHandler)

 function eventHandler(e) {
    e.preventDefault()

     //get search input
     let search = document.getElementById("search").value;

     //remove spaces from search value
     let nameString = search.split(' ').join('');

     //allows consecutive searches 
     document.getElementById("result").innerHTML = "";
    
     //fetch API
     fetch("https://api.github.com/users/"+nameString)
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
            //result is clickable user profile image that links to their github profile
            document.getElementById("result").innerHTML = 
                `<a target="_blank" href="https://www.github.com/${nameString}"> <img src="${data.avatar_url}"/></a>`
        })

}