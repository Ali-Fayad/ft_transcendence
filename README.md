# 🕹️ ft_transcendence

**ft_transcendence** is the final project of the 42 Common Core — a full-stack web application built around a real-time multiplayer **Pong game**, including authentication, chat, friend system, and tournaments.
This project is designed to combine **frontend, backend, and DevOps** skills into a single cohesive platform.

---

## 🚀 Features

* 🎮 **Real-time Pong Game**

  * Local play (same device)
  * Remote multiplayer (1v1 or 3v3)
  * AI opponent

* 💬 **Friend System & Chat**

  * Add, remove, or invite friends
  * Direct messaging and live conversations

* 🏆 **Tournaments**

  * 4 or 8-player brackets
  * Automated match progression

* ⚙️ **User Settings**

  * Multi-language support
  * Profile customization
  * Two-factor authentication (2FA)

* 🔐 **Authentication System**

  * Google OAuth2
  * Email verification
  * Password reset
  * Secure session management

---

## 🧩 Tech Stack

| Layer              | Technology                         |
| :----------------- | :--------------------------------- |
| **Frontend**       | TypeScript / TailwindCSS           |
| **Backend**        | Fastif.js / Node.js                |
| **Database**       | SQLite                             |
| **Authentication** | OAuth2 / JWT / 2FA                 |
| **Deployment**     | Docker / Nginx / Makefile          |
| **Launcher**       | Custom `start.sh` interactive menu |

---

## 🛠️ Setup

Make sure you have the following installed:

* Docker & Docker Compose
* Make
* Bash (for `start.sh`)
* Node.js and npm (if you want to run locally without Docker)

Clone the repository:

```bash
git clone https://github.com/yourusername/ft_transcendence.git
cd ft_transcendence
```

---

## ▶️ Run the Project

The project provides a **custom interactive launcher**:

```bash
./start.sh
```

From there, you can:

* 🟢 **Run** the full stack (frontend + backend + database)
* 🧱 **Build** everything from scratch
* 🧹 **Clean** containers, images, and volumes
* 🧩 **Debug** the stack (runs with logs enabled)

Alternatively, you can use `make` directly:

```bash
make up       # Run services
make build    # Build containers
make down     # Stop services
make fclean   # Full cleanup
```

---

## 🐞 Debug Mode

You can start the app in **debug mode** directly using:

```bash
./start.sh debug
```

This enables verbose logging for both backend and frontend, helpful during development.

---

## 🔍 Project Structure

```
ft_transcendence/
├── backend/           # FastifyJS backend
├── frontend/          # TypeScript frontend
├── database/          # Database config, migrations, seeds
├── Makefile           # Main build & run logic
├── start.sh           # Interactive launcher
├── .env               # Environment variables (not exposed)
└── README.md
```

---

## 🧪 Evaluation / Testing

**Evaluator quick guide:**

| Task                 | Command                   |
| :------------------- | :------------------------ |
| Build all containers | `make build`              |
| Run the app          | `make up` or `./start.sh` |
| Access frontend      | `http://localhost:5173`   |
| Access backend       | `http://localhost:8080`   |
| Clean everything     | `make fclean`             |

---

## 📸 Screenshots / Demo

> *(You can add images or GIFs here)*
> Example:
>
> ```
> ![Home Page](assets/home.png)
> ![Game Preview](assets/game.gif)
> ```

---

## 🧠 Authors

* **Ali [@yourusername]** – Frontend lead
* **[Your teammates’ names]** – Backend, design, or infrastructure

Special thanks to **our instructors and mentors** for their guidance throughout the project 💚

---

## 🏁 Notes

* The project follows 42 standards and best practices.
* All scripts are designed to work out-of-the-box inside the 42 environment.
* For any local development, ensure `.env` is properly set.

---

**🎉 ft_transcendence – Beyond the game, it’s a full stack journey.**
