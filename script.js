let hr = document.getElementById('hour');
let minHand = document.getElementById('min');  // renamed to avoid conflict with "min" keyword
let secHand = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Calculate rotations
    let hrotation = 30 * hh + mm / 2;  // 30° per hour + 0.5° per minute
    let mrotation = 6 * mm;            // 6° per minute
    let srotation = 6 * ss;            // 6° per second

    // Apply rotations
    hr.style.transform = `rotate(${hrotation}deg)`;
    minHand.style.transform = `rotate(${mrotation}deg)`;
    secHand.style.transform = `rotate(${srotation}deg)`;
}

// Update every second
setInterval(displayTime, 1000);

// Run immediately when page loads
displayTime();

