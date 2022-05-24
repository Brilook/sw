self.addEventListener('push', () => {
    self.registraton.showNotification('test message', {})
});