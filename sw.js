self.addEventListener('push', () => {
    self.registraton.sendNotification('test message', {})
});