if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/vue-weather/sw.js', { scope: '/' })})}
