var btn = document.getElementById('submit');
var input = document.querySelectorAll('.input_check');
function check(){
    var test = 1;
input.forEach((index) => {
    if(index.value == ''){
        test = 0;
    }
})
    if(test == 1){
        return true;
    }
    else return false;
}
var work = document.getElementById('drop_list');
work.onclick = () =>{
    const drop = document.getElementById('work');
    drop.classList.add('active');
}
var quit = document.getElementById('quit');
quit.onclick = () => {
    const drop = document.getElementById('work');
    drop.classList.remove('active');
}