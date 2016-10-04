'use strict';
const express = require('express')
  , app = express()
  , port = process.env.PORT || 5432
  , EventEmitter = require('events')
  ;

console.info(`Express is an instance of EventEmitter: ${app instanceof EventEmitter}`);
console.info(`Express app type of: ${typeof app}`);

app.set('port', port);
app.use(express.static(__dirname + "/public"));

app.get('/',(req,res,next)=>{
  res.send("it can't get any simpler than this");
});

try{
  app.listen(app.get('port'), (error)=>{
    if(error) {
      console.error(error);
    } else {
      console.info(`Express app starting up on port ${app.get('port')}`);
    }
  });
} catch(error) {
  console.error("A low-level error exception occurred.  Express app has failed to start.");	
}

