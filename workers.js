const queue = require('./service/queue')

console.log(" [*] Waiting for messages in %s. To exit press CTRL+C")

queue.consume('consumer', message =>{

    console.log('processing: ', message.content.toString())

})
