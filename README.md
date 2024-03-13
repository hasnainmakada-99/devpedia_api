## Devpedia API

The Devpedia API is a Node.js-based API that utilizes MongoDB as its backend database.

### Prerequisites

Before running the Devpedia API, make sure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/en/download/)
- MongoDB: [Download and install MongoDB](https://www.mongodb.com/try/download/community)

### Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/devpedia-api.git
    ```

2. Install the dependencies:

    ```bash
    cd devpedia-api
    npm install
    ```

3. Configure the environment variables:

    Create a `.env` file in the root directory and provide the following variables:

    ```plaintext
    MONGODB_URI=<your-mongodb-uri>
    PORT=<port-number>
    ```

4. Start the server:

    ```bash
    npm start
    ```

### API Endpoints

- `GET /api/get-resources`: Get all the resources
- `POST /api/post-resources`: Post the resources

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.