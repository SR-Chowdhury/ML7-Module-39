document.getElementById('btnId').addEventListener('click', () => {
    const inputId = document.getElementById('inputId');
    const inputValue = inputId.value;
    const errTag = document.getElementById('errorId')
    inputId.value = '';
    try {
        if(isNaN(inputValue)) {
            document.getElementById('errorId').innerText = '';
            throw 'It is a string';
        }
        errTag.innerHTML = '';
    }
    catch(err) {
        console.log('Error: '+ err);
        errTag.innerHTML = `Error: ${err}`;
    }
});