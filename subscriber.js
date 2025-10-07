const amqp = require('amqplib/callback_api');
amqp.connect(`amqp://localhost`, (err, connection) => {
    if (err) {
        throw err;

    }
    connection.createChannel((err, channel) => {
        if (err) {
            throw err;

        }
        let queueName = "Ankit";
        let message = "This is ankit ";
        channel.assertQueue(queueName, {
            durable: false
        });
        channel.consume(queueName, (msg)=>{
            console.log(`Recived: ${msg.content.toString()}`);

        },{
            noAck: true
        });
    })
})