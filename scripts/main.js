const birthDate = new Date(2005, 10, 14); // maand is 0-based: 10 = november
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const birthdayThisYear = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
if (today < birthdayThisYear) age--;

document.querySelectorAll('[data-age]').forEach(el => el.textContent = age);
document.querySelectorAll('[data-year]').forEach(el => el.textContent = today.getFullYear());
