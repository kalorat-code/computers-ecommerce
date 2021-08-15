var admin = require('firebase-admin');

var serviceAccount = require('../config/fbServiceAccountKey.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'http://ecommerce-ec4af.firebaseio.com',
});
module.exports = admin;
