function getCookie(name) {
    var cookieName = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


document.getElementById('openMenu').addEventListener('click', function(){
    console.log('Opened')
    document.getElementById('side-menu').style.right = 0;
});
document.getElementById('closeMenu').addEventListener('click', function(){
    console.log('Closed')
    document.getElementById('side-menu').style.right = '-400px';
});

document.getElementById('loginBtn').addEventListener("click", function() {
    document.location.href = 'login.html';
});

function init(){
    var status = getCookie('status');
    if(status==1){
        document.querySelector('.profile').style.display = 'flex';
        document.querySelector('#loginBtn').style.display = 'none';
    }else{
        document.querySelector('.profile').style.display = 'none';
        document.querySelector('#loginBtn').style.display = 'block';
    }
}
function logout(){
    deleteCookie('status');
    location.reload();
}