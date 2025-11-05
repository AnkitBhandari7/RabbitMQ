// this is producer
import amqp from "amqplib";

async function registerUser(user) {
    console.log("User Registered:", user);


    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    const exchange = "user_events";  // this is exchange it routes messages to routes based on rules
    const event = "user.registered";


    await channel.assertExchange(exchange, "topic", { durable: false });
    channel.publish(exchange, event, Buffer.from(JSON.stringify(user)));

    console.log("Event published:", event);

    await channel.close();
    await connection.close();

}

// example use :

registerUser({ name: "Ankit", email: "ankeetbhandari780@gmail.com" });
