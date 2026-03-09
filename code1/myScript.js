const balance = document.getElementById('balance');
const form = document.getElementById('form');
const list = document.getElementById('list');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let totalBalance=0;
function addTransaction(e){
    e.preventDefault();
if (text.value.trim()===''|| amount.value.trim()===''){ 
    alert('Bạn ơi, nhập đầy đủ tên và số tiền nhé!');
    return;
}
const item = document.createElement('li');
item.innerHTML= `${text.value}<span>-${Number(amount.value).toLocaleString()}đ</span>`;
totalBalance += Number(amount.value);
balance.innerText = `-${totalBalance.toLocaleString()}đ`;
text.value = '';
amount.value ='';
}
form.addEventListener('submit',addTransaction);
