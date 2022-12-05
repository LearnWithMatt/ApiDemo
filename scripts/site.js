window.onload = init;


function init(){


    let element = document.getElementById("emailDropdown");
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(
        response => response.json()
        )
    .then(
        data => 
        {
            for(let i=0; i<data.length; i++) 
            {
            let opt = document.createElement("option");
            opt.textContent = data[i].name + " " + data[i].email;
            opt.value = data[i].email;
            element.appendChild(opt);
            console.log("end process result");
            }
        }
    );
    console.log("end do something");


}

