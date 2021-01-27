var amqp = require('amqplib/callback_api');
var i = 0
var numberJobs = 11

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

async function sendMessage() {

    amqp.connect('amqp://localhost', (err, conn) =>{
        conn.createChannel((err, ch) =>{
            var q = 'consumer'
            var msg = `[${getRandomInt(1, 10000)}]`
            ch.assertQueue(q, { durable: false })
            ch.sendToQueue(q, Buffer.from(msg))
            console.log(" [x] Sent Job: %s", msg)
        })

        if(i === numberJobs ){
            clearInterval(x)
            conn.close()
            process.exit(0)
        }
        // setTimeout(function () {
        //     
        // }, 500);

    })

}

var x = setInterval(()=>{
    sendMessage()
    i++
}, 1000)




// var q = 'consumer';
// var open = require('amqplib').connect('amqp://localhost');

// // Publisher
// open.then(function(conn) {

//     console.log('connected!!')

//   return conn.createChannel();

// }).then(function(ch) {
//   return ch.assertQueue(q).then(function(ok) {
//     return ch.sendToQueue(q, Buffer.from('something to do'));
//   });
// }).catch(console.warn);

