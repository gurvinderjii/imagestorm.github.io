function setCookie(name, value, daysToLive) {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToLive);
    var cookieValue = encodeURIComponent(value) + ((daysToLive === null) ? "" : "; expires=" + expirationDate.toUTCString());
    document.cookie = name + "=" + cookieValue;
}


const username = "User123";
const password = "password1234";

function login(event){
    event.preventDefault();
    let inpUser = document.getElementById('username').value;
    let inpPass = document.getElementById('password').value;
    if (inpUser===username){
        if (inpPass===password){
            setCookie('status',1,1);
            document.location.href = "index.html";
        }else{ 
            Toastify({
                text: "Incorrect password",
                duration: 3000
                }).showToast();
        }
    }else{
        Toastify({
            text: "User not found",
            duration: 3000,
            style:{
                color: "black",
                background:"white"
            }
            }).showToast();
    }
}