# Build Your Own Redis Service  

A minimal Redis clone built using **JavaScript** and **Node.js**. This project provides a basic subset of the core Redis functionality, using **hashmaps** for key-value storage. It utilizes the `redis-parser` package to handle protocol parsing, allowing communication through a Redis-like CLI interface.  

⚠️ **Note**: This project is for **educational purposes only** and lacks advanced features of the official Redis service (like concurrency, master-slave configuration, and sorting algorithms). Make sure to uninstall this implementation from your system after you're done exploring it.

---

## Features

- **Key-Value Storage:** Supports `SET` and `GET` commands using hashmaps.
- **Redis Protocol Parser:** Uses the `redis-parser` package for request parsing.
- **Simple Node.js Implementation:** Built with minimal dependencies.
- **Expandable:** Aims to add more Redis-like features in the future.

---

## Getting Started  

Follow the instructions below to install and run the service on your local machine.

### Prerequisites  
- **Node.js** (v12+ recommended)  
- **npm** (for package management)

### Installation  

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Anish15AG/Build-your-own-REDIS.git
   cd your-redis-clone

2. **Install Dependencies**:
    ````bash
    npm install redis-parser

3. **Run the Server**:
    ````bash
    node index.js

3. **Use the Redis CLI: In a separate terminal window, connect to the Redis service via:**:
    ````bash
    redis-cli -p 8000

---

### Current Limitations

This Redis clone is a **work-in-progress** and currently lacks several functionalities found in the full Redis implementation:

*   **Sorting algorithms** (e.g., ZSETs) are not implemented.
    
*   **Concurrency and multi-threading** features are not supported (currently single-threaded).
    
*   **Persistence** mechanisms like **snapshotting** or **AOF** (Append-Only File) are missing.
    
*   **Master-slave replication** and **cluster mode** are not implemented.
    
*   **Pub/Sub messaging** functionality is currently not available.
    

These features may be considered in future updates to bring the service closer to the real Redis.

---

### Uninstall Instructions

If you no longer need this Redis clone, follow these steps to uninstall it:

1.  **Stop the server**
    ````
    bash 
    Ctrl + C
    
2.  **Remove Repository and Files** 
    ````
    bash 
    cd ..rm -rf your-redis-clone
    