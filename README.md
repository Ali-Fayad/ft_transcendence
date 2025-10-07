# 🎮 ft_transcendence

> The final project at **42** — a full-stack web application combining modern web technologies, real-time multiplayer gameplay, and secure authentication — all built from scratch.

---

## 🧠 Overview

**ft_transcendence** is a modern **Single Page Application (SPA)** where users can:
- **Register, log in, and manage their profiles**
- **Play an interactive 3D Pong game** against AI, local players, or online opponents
- **Chat and add friends**
- **Join tournaments**
- **Customize their settings and language preferences**

The project demonstrates a full-stack microservice-based architecture, combining both **frontend and backend** technologies with **real-time WebSocket communication** — all containerized using **Docker**.

---

## 🏗️ Architecture

| Layer | Technology | Description |
|:------|:------------|:-------------|
| **Frontend** | **Vanilla TypeScript**, **Tailwind CSS**, **Babylon.js** | SPA for UI, dynamic routing, and 3D game rendering |
| **Backend** | **Fastify**, **WebSocket** | Handles API routes, authentication, and real-time communication |
| **Infrastructure** | **Docker**, **Makefile** | Automates build, run, and cleanup for microservices |
| **Database** | (Your DB choice here, e.g. PostgreSQL, MySQL, etc.) | Persistent user and match data |
| **Game Engine** | **Babylon.js** | Real-time 3D Pong gameplay (AI, Local, Remote modes) |

---

## ⚙️ Installation

### 1️⃣ Prerequisites
Make sure you have the following installed:
- **Docker** and **Docker Compose**
- **Node.js (≥ 18)** and **npm**
- **Make**

---

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/ft_transcendence.git
cd ft_transcendence
