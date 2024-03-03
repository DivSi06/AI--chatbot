# Generative-AI ChatBot
This is generative ai customer support chatbot of a particular website with authentication and chat features
This repository contains a React application with both client and server components.

## Installation
Follow these steps to set up the project:

Clone the repository to your local machine:
```
git clone <repository_url>
```
Navigate to the client folder and install the dependencies:
```
cd client-fe
npm install
```
Navigate to the server folder and install the dependencies:
```
cd ../server-be
npm install
```
Configuration
In the server folder, create a .env file with the following variables:

```
API_KEY=YOUR_GOOGLE_API_KEY
SALT=YOUR_SALT_NUMBER
JWTKEY=YOUR_JWT_PRIVATE_KEY
DB=YOUR_MONGODB_URL
```
Replace YOUR_GOOGLE_API_KEY, YOUR_SALT_NUMBER, YOUR_JWT_PRIVATE_KEY, and YOUR_MONGODB_URL with your actual values.

Running the Server
To start the server, navigate to the server folder and run:

```
npm start
```
The server will start running on the specified port.

Running the Client
To start the client, navigate to the client folder and run:

```
npm start
```
The client application will open in your default web browser.
