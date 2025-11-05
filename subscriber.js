// subscriber.js
import amqp from "amqplib/callback_api.js";

// Connect to RabbitMQ server
amqp.connect("amqp://localhost", (err, connection) => {
    if (err) {
        throw err;
    }

    // Create a channel
    connection.createChannel((err, channel) => {
        if (err) {
            throw err;
        }

        const queueName = "Ankit";

        // Ensure the queue exists
        channel.assertQueue(queueName, { durable: false });

        console.log(`Waiting for messages in queue: "${queueName}"...`);

        // Consume messages from queue
        channel.consume(
            queueName,
            (msg) => {
                console.log(` Received: ${msg.content.toString()}`);
            },
            { noAck: true }
        );
    });
});
