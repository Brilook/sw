const push = require('web-push');
// const vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

const vapidKeys = {
    publicKey: 'BC60bfF7HdPfJTX2IDVUPoTZRpd2fD8bDu_uV7iOj2wsauq0P0M5jGBb0qJw9MlAj7-EHaRrr8cGhlPFs_yEDP4',
    privateKey: 'vxluPlIGHG06tXZKYkKRek4oCsVw8uo6MyRrzWMrac8'
};

push.setVapidDetails('mailto:brilook@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);
//FIXX: this info should be from DB
const sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cVpt9uqGVlM:APA91bEE5YJdYjTuM2tgSU_D-vv57V1uxS1eFxOXbxatOAZiyimAdCbHyPKAYykSzLcp9UhWN1hJ9imIWF-puz7tl4b3r0AXrUUKvjOUA1rWNuVti3TxklM4rnl4-JD1a6RYYE_fkp0W",
    "expirationTime": null,
    "keys": {
        "p256dh": "BNRfJgSJRzczrtordlZLAn2FY-sGaBbrS63fBirmvNUiP-tAhJ1mc0-wmgkn0tyVxMcLPoc9TkN7PC_XRh3EBuw",
        "auth": "L8Uns0lUBhuLNNH1cghIXA"
    }
}
push.showNotification(sub, 'test message');