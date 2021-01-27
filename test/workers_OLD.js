// var amqp = require('amqplib/callback_api')
// amqp.connect('amqp://localhost',(err, conn) => {
//     conn.createChannel((err, ch) =>{
//         var q = 'consumer'
//         ch.assertQueue(q, { durable: false })
//         ch.prefetch(1);
//         console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
//         ch.consume(q,(msg)=> {
//             console.log(" [x] Received Job %s", msg.content.toString());
//         }, { noAck: true })
//     })
// })

// var open = require('amqplib').connect('amqp://localhost');
// var q = 'consume';
// // // Consumer
// open.then(function(conn) {
//   return conn.createChannel();
// }).then(function(ch) {
//   return ch.assertQueue(q).then(function(ok) {
//     return ch.consume(q, function(msg) {
     
//         console.log('test',msg.content.toString());
//         ch.ack(msg);
      
//     });
//   });
// }).catch(console.warn)