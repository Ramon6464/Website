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