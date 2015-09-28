getMedida();
function getMedida(){
    document.getElementById('width').innerHTML = window.innerWidth;
    document.getElementById('height').innerHTML = window.innerHeight;
    if(window.innerWidth > 600){
        document.getElementsByTagName('body')[0].style.background = '#cdcdcd';
        document.getElementById('height').style.color = 'tomato';
        document.getElementById('width').style.color = 'tomato';
        document.getElementsByTagName('body')[0].style.transition = 'all 0.5s';
       
    }else{
        document.getElementById('width').style.color = '#FFF';
        document.getElementById('height').style.color = '#FFF';
        document.getElementsByTagName('body')[0].style.background = 'tomato';
    }
}