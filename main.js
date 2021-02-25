const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i <=5 ; i++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', "images/pic" + [i] + ".jpg");
thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'lighten')
        overlay.style.backgroundColor = 'rgba(0,0,0,.3)';
        btn.textContent = 'lighten';
    } else if (btn.getAttribute('class') !== 'dark' ) {
        btn.setAttribute('class', 'dark')
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        btn.textContent = 'darken';
    }   
}

thumbBar.onclick = (e)=> {    
    let source = e.target.getAttribute('src');
    displayedImage.setAttribute('src', source);
}

