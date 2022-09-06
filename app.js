const leftContainer = document.querySelector('.toolbar-container');
const tools = document.querySelectorAll('.toolbar');
const noteNum = document.querySelector('#noteNum');
const msgNum = document.querySelector('#msgNum');
const noteContent = document.querySelector('.note-content');
const msgContainer = document.querySelector('.messages');
const inputMsg = document.querySelector('.messages-input input');
const msgRows = document.querySelectorAll('.messages-in-name');
const inputNames = document.querySelectorAll('.messages-in h3');
const overlay = document.querySelector('.overlay');
const setting = document.querySelector('.setting');
const settingFont = document.querySelector('.setting-font');
const settingColors = document.querySelector('.setting-colors');
const settingBackground = document.querySelector('.setting-background');
const btnPost = document.querySelector('.left button');
const headerBtn = document.querySelector('input[type="submit"]');
const headerInput = document.querySelector('input[type="text"]');


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
    if(!click.classList.contains('sort')){
        noteContent.classList.remove('active');
    }


    if(click.classList.contains('sort')){
        noteContent.classList.toggle('active');
    }
    
    if(click.classList.contains('setting-sort')){
        setting.classList.add('active');
        overlay.classList.add('active');
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

overlay.addEventListener('click', (e) => {
    setting.classList.remove('active');
    overlay.classList.remove('active');
})

settingFont.addEventListener('click', (e) => {
    const click = e.target.closest('span');
    if(!click) return;
    document.querySelectorAll('.setting-font span').forEach(span => {
        span.classList.remove('active');
    })
    click.classList.add('active');
    if(e.target.classList.contains('font--10'))
    document.querySelector('body').style.fontSize='10px';
    if(e.target.classList.contains('font--13'))
    document.querySelector('body').style.fontSize='13px';
    if(e.target.classList.contains('font--16'))
    document.querySelector('body').style.fontSize='16px';
    if(e.target.classList.contains('font--17'))
    document.querySelector('body').style.fontSize='17px';
    if(e.target.classList.contains('font--18'))
    document.querySelector('body').style.fontSize='18px';
})
settingColors.addEventListener('click', (e) => {
    const click = e.target.closest('span');
    if(!click) return;
    document.querySelectorAll('.setting-colors span').forEach(span => {
        span.classList.remove('active');
    })
    click.classList.add('active');
    if(e.target.classList.contains('color--blue'))
    document.documentElement.style.setProperty('--main-color','blue');
    if(e.target.classList.contains('color--yellow'))
    document.documentElement.style.setProperty('--main-color','yellow');
    if(e.target.classList.contains('color--orange'))
    document.documentElement.style.setProperty('--main-color','rgb(255, 102, 0)');
    if(e.target.classList.contains('color--green'))
    document.documentElement.style.setProperty('--main-color','rgb(9, 255, 0)');
    if(e.target.classList.contains('color--lightBlue'))
    document.documentElement.style.setProperty('--main-color','rgb(0, 238, 255)');
})
settingBackground.addEventListener('click', (e) => {
    const click = e.target.closest('.color-background');
    if(!click) return;
    document.querySelectorAll('.color-background').forEach(span => {
        span.classList.remove('active');
    })
    click.classList.add('active');
    if(click.classList.contains('bg-white')){
        document.documentElement.style.setProperty('--bg-main','rgb(243, 241, 241)');
        document.documentElement.style.setProperty('--box-color','white');
    }
    if(click.classList.contains('bg-blue')){
        document.documentElement.style.setProperty('--bg-main','rgb(9, 9, 51)');
        document.documentElement.style.setProperty('--box-color','rgba(0, 0, 255, 0.555)');
    }
    
    if(click.classList.contains('bg-dark')){
        document.documentElement.style.setProperty('--bg-main','black');
        document.documentElement.style.setProperty('--box-color','rgba(0, 0, 255, 0.555)');
    }
})

btnPost.addEventListener('click', (e) => {
    msgContainer.classList.add('active');
    setTimeout(() => {
        msgContainer.classList.remove('active');
    },2000)   
})

headerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    headerInput.focus();
})