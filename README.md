# 🐇 RabbitMQ Message Queue with Node.js

<div align="center">

![RabbitMQ](https://img.shields.io/badge/Message%20Broker-RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![amqplib](https://img.shields.io/badge/Library-amqplib-000000?style=for-the-badge)
![Event Driven](https://img.shields.io/badge/Architecture-Event%20Driven-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-ISC-lightgrey?style=for-the-badge)

</div>

> 💬 A lightweight **Event-Driven Architecture (EDA)** example built using **RabbitMQ** and **Node.js** to demonstrate **asynchronous message passing** between a publisher and consumer service.

---

## ⚙️ Overview

This project demonstrates how to build a simple **Publisher–Consumer model** using **RabbitMQ** in a **Node.js** environment.  
It showcases how microservices or distributed components can communicate **asynchronously** through message queues — a key concept in **Event-Driven Architecture (EDA)**.

---

## 🧩 Features

- 📤 **Publisher** – Sends events/messages to a RabbitMQ exchange.  
- 📥 **Consumer** – Listens for messages and processes them in real-time.  
- 🌀 **Asynchronous Communication** – Enables non-blocking data exchange.  
- 🔁 **Event-Driven Flow** – Demonstrates decoupled service communication.  
- 🧱 **Durable Queues (optional)** – Ensures reliable delivery even on server restarts.  
- 🧩 **Modular Structure** – Separate logic for producer and consumer services.

---

## 🧠 What is Event-Driven Architecture (EDA)?

**Event-Driven Architecture (EDA)** is a software design pattern in which components communicate by **emitting and reacting to events** rather than making direct calls.

### 🔹 Example Flow
1. **Producer (User Service)** emits an event → `user.registered`
2. **RabbitMQ** routes it to the appropriate queue.
3. **Consumer (Email Service)** listens for the event → sends a welcome email.

This allows systems to be:
- ⚡ **Asynchronous**
- 🧩 **Loosely coupled**
- 🚀 **Scalable**
- 🧠 **Easy to extend**

---

## 🐰 What is RabbitMQ?

**RabbitMQ** is a **message broker** that helps different services communicate by sending messages through **exchanges** and **queues**.

### 🧱 Core Components
| Component | Description |
|------------|--------------|
| **Producer** | Publishes messages (events). |
| **Exchange** | Routes messages to queues based on routing keys. |
| **Queue** | Buffers messages for consumers. |
| **Consumer** | Subscribes and processes messages. |

---

## 🧰 Tech Stack

| Tool | Purpose |
|------|----------|
| 🟩 **Node.js** | Runtime environment |
| 📦 **amqplib** | RabbitMQ client library |
| 🐇 **RabbitMQ** | Message broker server |

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/rabbitmq-nodejs.git
cd rabbitmq-nodejs


2️⃣ Install dependencies

npm install

3️⃣ Start RabbitMQ Server

brew services start rabbitmq


4️⃣ Run the Publisher

npm run dev


5️⃣ Run the Consumer

npm run email


📬 Example Output

Publisher

   User Registered: { name: "Ankit", email: "ankeetbhandari780@gmail.com" }
   Event published: user.registered

Consumer
   Waiting for user registration events...
   Sending welcome email to ankeetbhandari780@gmail.com

🔁 Event Flow Diagram

+----------------+       +----------------+       +----------------+
|  User Service  | --->  |   RabbitMQ     | --->  |  Email Service |
|  (Publisher)   |       |  (Message Bus) |       |  (Consumer)    |
+----------------+       +----------------+       +----------------+
        |                        |                        |
        |     "user.registered"  |                        |
        +------------------------>                        |



🧠 Key Concepts Demonstrated

📨 Message queue creation and management

⚙️ Producer–Consumer communication

🔄 Asynchronous message flow

🧱 Event-Driven Architecture principles

🧩 Service decoupling using RabbitMQ



📚 Learn More

🐇 RabbitMQ Official Docs

📦 amqplib (NPM)

🧠 Event-Driven Architecture Explained

👨‍💻 Author

Ankit Bhandari
📧 ankeetbhandari77@gmail.com





