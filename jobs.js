const queue = require('./service/queue')
var i = 1
var numberJobs = 10

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

async function sendMessage(){

    let msg = `[${getRandomInt(1, 10000)}]`

    queue.sendToQueue('consumer', msg)

    console.log(" [x] Sent Job: %s", msg)

    if(i >= numberJobs ){

        clearInterval(x)

        setTimeout(() => {

            process.exit(0)

        }, 500)
    }
}

var x = setInterval(()=>{
    sendMessage()
    i++
}, 1000)