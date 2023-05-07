# ydentity

This app is built with react-native and developer didn't got much time to finalize into production
version so it have to be run inside [ExpoGo](https://expo.dev/client) please install this.

Steps to run after cloning the repo

1. npm install
2. npm start
3. Make sure [ydentityServer](https://github.com/xpd54/ydentityServer) already up and running
4. scan the QR code from your phone camera
5. You should see one service there (Google)

What can go wrong so far and how to fix it

1. If you are seeing something is wrong it means the local server is not reachable.
2. [useFetch.js](https://github.com/xpd54/ydentity/blob/main/hooks/useFetch.js) and [addService.js](https://github.com/xpd54/ydentity/blob/main/hooks/addService.js) address may not match with your local network. Please check your local and IP and replace here. (localhost doesn't work with react-native for some reason)

How to add more QR code to scan with + button

1. pip3 install qrcode
2. qr "otpauth://totp/fire@google.com?secret=JBSWY3DPEHPSFWE&issuer=Firebase&logo=https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-1024.png"
3. ToTp QR code have value formate like mentioned in 2
4. code with change after 1 min
