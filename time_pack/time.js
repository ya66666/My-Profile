function updateTime() {
    // Get current time
    const now = new Date();
    const localTime = now.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    // Get time display element
    const timeElement = document.getElementById('current-time');
    
    // Update time text
    timeElement.textContent = localTime;
    
    // Get current seconds and milliseconds for smoother color transition
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();
    
    // Calculate color using both seconds and milliseconds
    const hue = (seconds * 6) + (milliseconds / 1000 * 6);
    
    // Apply color to background using HSL
    timeElement.style.backgroundColor = `hsl(${hue}, 70%, 80%)`;
}

// Run immediately
updateTime();

// Update more frequently (every 50ms instead of 1000ms)
setInterval(updateTime, 50);