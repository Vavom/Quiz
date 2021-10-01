cd api
echo "installing api"
npm install
cd ../client
echo "installing client"
npm install
cd ../
echo "installing server"
npm install
node server.js
