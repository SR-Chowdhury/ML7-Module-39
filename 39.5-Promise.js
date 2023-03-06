const promise3 = new Promise((resolved, reject) => {
    const num = Math.random()*10;
    if (num < 5) {
        resolved(123);
    }
    else {
        reject('No data found');
    }
});

promise3
    .then(res => console.log(res))
    .catch(err => console.log(err)) //No data found