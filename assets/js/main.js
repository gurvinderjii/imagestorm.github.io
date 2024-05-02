document.getElementById('openMenu').addEventListener('click', function(){
    console.log('Opened')
    document.getElementById('side-menu').style.right = 0;
});
document.getElementById('closeMenu').addEventListener('click', function(){
    console.log('Opened')
    document.getElementById('side-menu').style.right = '-400px';
});