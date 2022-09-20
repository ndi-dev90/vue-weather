if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/vue-ewather/sw.js', { scope: '/vue-ewather/' })})}
