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
            showToast('Incorrect password');
        }
    }else{
        showToast('User not found');
    }
}
function showToast(msg){
    Toastify({
        text: msg,
        duration: 3000,
        style:{
            color: "black",
            background:"white"
        }
        }).showToast();
}