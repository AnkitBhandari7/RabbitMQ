// publisher.js
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
        const message = "This is Ankit  - sent from publisher!";

        // Ensure the queue exists (non-durable for demo)
        channel.assertQueue(queueName, { durable: false });

        // Send message to the queue
        channel.sendToQueue(queueName, Buffer.from(message));

        console.log(`Message Sent: ${message}`);

        // Close connection after 1 second
        setTimeout(() => {
            connection.close();
            process.exit(0);
        }, 1000);
    });
});
