🐇 RabbitMQ Message Queue with Node.js
This project demonstrates a simple publisher–consumer model using RabbitMQ and Node.js. It shows how to send and receive messages between services using message queues — a core concept in distributed systems and microservice communication.

🚀 Features
* 📤 Publisher – Sends messages to a RabbitMQ queue.
* 📥 Consumer – Listens for messages and processes them in real-time.
* ⚙️ Queue Management – Creates a durable queue for reliable delivery.
* 🔁 Asynchronous Messaging – Demonstrates event-driven communication.
* 🧩 Modular Code – Separate files for publisher and consumer logic.

🧰 Tech Stack
* Node.js – Backend runtime
* amqplib – RabbitMQ client for Node.js
* RabbitMQ – Message broker server

🛠️ Installation & Setup
1. Clone the repositorygit clone https://github.com/<your-username>/rabbitmq-nodejs.git
2. cd rabbitmq-nodejs
3. 
4. Install dependenciesnpm install
5. 
6. Start RabbitMQ serverbrew services start rabbitmq
7. (or run rabbitmq-server manually)
8. Run the Publishernode publisher.js
9. 
10. Run the Consumernode consumer.js
11. 

📬 Example Output
Publisher:

Message sent: This is Ankit
Consumer:

Received message: This is Ankit

🧠 Concepts Demonstrated
* Message queue creation and management
* Producer-consumer pattern
* Asynchronous and decoupled service communication
* Basics of event-driven architecture

📚 Learn More
* RabbitMQ Official Documentation
* amqplib on npm

👨‍💻 Author
Ankit Bhandari📧 ankeetbhandari77@gmail.com 
💼 https://www.linkedin.com/in/ankitbhandari77/
