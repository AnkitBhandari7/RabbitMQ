// this is consumer

import amqp from "amqplib";

async function listenForUserRegistration(){
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    const exchange = "user_events";
    const event = "user.registered";
    const queue = "email_queue";


    await channel.assertExchange(exchange, "topic", {durable:false});
    const q = await channel.assertQueue(queue);
    channel.bindQueue(q.queue, exchange, event);

    console.log("Waiting for user registration events...");

    channel.consume(q.queue, (msg)=>{
        if(msg.content){
            const user = JSON.parse(msg.content.toString());
            console.log(`Sending welcome email to ${user.email}`);

        }
    }, {noAck: true});

}

listenForUserRegistration();