const https = require('node:https');

https.get('https://swapi.dev/api/planets/1/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
  res.on('data', (d) => {
    console.log(d.toString())
  });
}).on('error', (e) => {
  console.error(e);
});