const form = document.getElementById('form');

const btn = document.getElementById('btn');

const day = document.getElementById('in-day');
const month = document.getElementById('in-month');
const year = document.getElementById('in-year');

const date = new Date();

let monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

btn.onclick = function(){
    let inputDay = form.day.value;
    let inputMonth = form.month.value;
    let inputYear = form.year.value;

    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    const dayEr = document.getElementById('dayEr');
    const monthEr = document.getElementById('monthEr');
    const yearEr = document.getElementById('yearEr');


    if(inputDay>31 || inputDay<=0){
        dayEr.innerHTML = `must be valid day`;
        form.style.border = 'crimson';
        form.style.color = 'crimson';

        day.innerHTML = `- -`;
        month.innerHTML = `- -`;
        year.innerHTML = `- -`;
    }
    
    else if(inputMonth>12 || inputMonth<=0){
        dayEr.innerHTML = ``;
        monthEr.innerHTML = `must be valid month`;
        form.style.border = 'crimson';
        form.style.color = 'crimson';

        day.innerHTML = `- -`;
        month.innerHTML = `- -`;
        year.innerHTML = `- -`;
    }
    
    else if(inputYear>date.getFullYear() || inputYear==``){
        dayEr.innerHTML = ``;
        monthEr.innerHTML = ``;
        yearEr.innerHTML = `must be valid year`;
        form.style.border = 'crimson';
        form.style.color = 'crimson';

        day.innerHTML = `- -`;
        month.innerHTML = `- -`;
        year.innerHTML = `- -`;
    }
    else{

        dayEr.innerHTML = ``;
        monthEr.innerHTML = ``;
        yearEr.innerHTML = ``;
        form.style.border = '';
        form.style.color = '';

        if(inputDay>d){
            d = d + month[m-1];
            inputMonth = inputMonth -1;
        }

        if(inputMonth > m){
            inputMonth = inputMonth + 12;
            i
            y = y -1;
        }
        
        let outputDay = d - inputDay;
        let outputMonth = m - inputMonth;
        let outputYear = y - inputYear;

        day.innerHTML = outputDay;
        month.innerHTML = outputMonth;
        year.innerHTML = outputYear
    }
}

