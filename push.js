const push = require('web-push');
// const vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

const vapidKeys = {
    publicKey: 'BC60bfF7HdPfJTX2IDVUPoTZRpd2fD8bDu_uV7iOj2wsauq0P0M5jGBb0qJw9MlAj7-EHaRrr8cGhlPFs_yEDP4',
    privateKey: 'vxluPlIGHG06tXZKYkKRek4oCsVw8uo6MyRrzWMrac8'
  };

  push.setVapidDetails('mailto:brilook@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);
  const sub = {};
  push.sendNotification(sub, 'test message');