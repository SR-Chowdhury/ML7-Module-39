let count = 0;
let setIntervalId;

document.getElementById('startBtn').addEventListener('click', function(){
    
    setIntervalId = setInterval(() => {
        
        document.getElementById('displayId').innerText = ++count;
        
    }, 1000);
});


document.getElementById('stopBtn').addEventListener('click', function(){
    clearInterval(setIntervalId);
});


document.getElementById('resetBtn').addEventListener('click', function(){
    document.getElementById('displayId').innerText = '0';
    count = 0;
    clearInterval(setIntervalId);
});




