const current = location;
const hideElements = (elms) => elms.forEach(el => el.style.display = 'none');

if(current.host === 'www.google.com'){
    hideElements( document.querySelectorAll(".uEierd") );
}