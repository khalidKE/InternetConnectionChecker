const statusEl = document.getElementById('status');
const checkBtn = document.getElementById('checkBtn');


async function checkConnection() {
    if (!navigator.onLine) {
        statusEl.textContent = 'Offline';
        statusEl.className = 'status offline';
        return;
    }


    try {
        await fetch('https://www.google.com/favicon.ico', { mode: 'no-cors' });
        statusEl.textContent = 'Online';
        statusEl.className = 'status online';
    } catch (error) {
        statusEl.textContent = 'Offline';
        statusEl.className = 'status offline';
    }
}


checkBtn.addEventListener('click', checkConnection);
window.addEventListener('online', checkConnection);
window.addEventListener('offline', checkConnection);


checkConnection();