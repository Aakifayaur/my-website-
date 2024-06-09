let currentTotal = 1000;
const maxTotal = 230000;
const storageKey = 'lastClickTime';

function getLastClickTime() {
    return localStorage.getItem(storageKey);
}

function setLastClickTime(time) {
    localStorage.setItem(storageKey, time);
}

function canClick() {
    const lastClickTime = getLastClickTime();
    if (!lastClickTime) return true;

    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastClickTime;
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    
    return hoursDifference >= 24;
}

function updateDisplayText() {
    document.getElementById('displayText').textContent = `Current total: ${currentTotal.toLocaleString()}/${maxTotal.toLocaleString()}`;
}

document.getElementById('clickButton').addEventListener('click', function() {
    if (canClick()) {
        currentTotal += 1000;
        setLastClickTime(new Date().getTime());
        updateDisplayText();
    } else {
        alert('You can only click the button once per day.');
    }
});

updateDisplayText();

if (!canClick()) {
    document.getElementById('clickButton').disabled = true;
}
