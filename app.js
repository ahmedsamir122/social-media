const leftContainer = document.querySelector('.toolbar-container');
const tools = document.querySelectorAll('.toolbar');
const noteNum = document.querySelector('#noteNum');
const msgNum = document.querySelector('#msgNum');
const noteContent = document.querySelector('.note-content');
const inputMsg = document.querySelector('.messages-input input');
const msgRows = document.querySelectorAll('.messages-in-name')
const inputNames = document.querySelectorAll('.messages-in h3')
console.log(inputNames);
inputNames.forEach(name => {
    console.log(name.textContent)
})

leftContainer.addEventListener('click', (e) => {
    e.preventDefault()
    const click = e.target.closest('.toolbar');
    if(!click) return;
    tools.forEach(tool => {
        tool.classList.remove('active');
    })
    click.classList.add('active');
    noteContent.classList.remove('active');
    console.log(click);

    if(e.target.closest('#noteNum')){
        noteContent.classList.toggle('active');
    }

    if(e.target.closest('#noteNum') && document.querySelector('#num'))
    noteNum.querySelector('#num').remove();

    if(e.target.closest('#msgNum') && document.querySelector('#numMsg'))
    msgNum.querySelector('#numMsg').remove();
})

inputMsg.addEventListener('input', (e) => {
    const value = inputMsg.value.toLowerCase();
    msgRows.forEach(row => {
        if(row.querySelector('h3').textContent.toLowerCase().includes(value))
        row.style.display='flex';
        else
        row.style.display='none';
    })
})

