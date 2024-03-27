const Btn = document.getElementById('btn');

const Text = document.getElementById('text');

Btn.addEventListener('click', () => {

    setTimeout(() => {
        Text.innerHTML = 'ボタンをクリックしました';

    }, 2000);    
});