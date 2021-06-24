const express = require('express');

const app = express();

app.use((req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});
app.use(express.json());

app.get('/favicon.ico', (req: any, res: any) => res.sendFile(__dirname+'/dist/BizlersWebPage/favicon.ico'));

app.get('/runtime*', (req: any, res: any) => res.sendFile(__dirname+'/dist/BizlersWebPage/' + req.originalUrl));
app.get('/polyfills*', (req: any, res: any) => res.sendFile(__dirname+'/dist/BizlersWebPage/' + req.originalUrl));
app.get('/styles*', (req: any, res: any) => res.sendFile(__dirname+'/dist/BizlersWebPage/' + req.originalUrl));
app.get('/main*', (req: any, res: any) => res.sendFile(__dirname+'/dist/BizlersWebPage/' + req.originalUrl));
app.get('/scripts*', (req: any, res: any) => res.sendFile(__dirname+'/dist/BizlersWebPage/' + req.originalUrl));
app.get('/vendor*', (req: any, res: any) => res.sendFile(__dirname+'/dist/BizlersWebPage/' + req.originalUrl));
app.get('/assets/*', (req: any, res: any) => res.sendFile(__dirname+'/dist/BizlersWebPage/' + req.originalUrl));
app.get('/*', (req: any, res: any) => res.sendFile(__dirname+'/dist/BizlersWebPage/index.html'));

const PORT = process.env.PORT || 4201;
app.listen(PORT, () => console.log('Server Listening on '+PORT));
