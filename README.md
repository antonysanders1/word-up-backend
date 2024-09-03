# Words API Backend

This is the backend service for the Word Up application. The backend is built with NestJS and proxies requests to the WordsAPI to retrieve word definitions, examples, and synonyms.

## Features

- Proxy requests to the WordsAPI to fetch word details.
- Protect the API with a static API key.

## Prerequisites

- Node.js (v18.18.1 or higher)
- Yarn package manager

## Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd words-api-backend
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Create a `.env` file:**

   Create a `.env` file in the root directory with the following contents:

   ```env
   STATIC_API_KEY=thisIsJustAFakeKey_12345
   RAPIDAPI_KEY=your_actual_rapidapi_key_here
   ```

   - `STATIC_API_KEY`: This is the static API key that is used to protect your backend API.
   - `RAPIDAPI_KEY`: This is your actual RapidAPI key for accessing the WordsAPI.

4. **Run the server:**

   ```bash
   yarn start
   ```

   The backend will be running at `http://localhost:3000`.

## API Endpoints

- **GET /words?word={word}**

  Fetch the details for a given word from the WordsAPI. The request must include the `Authorization` header with the value `Bearer {STATIC_API_KEY}`.

## Notes

- Ensure that the `.env` file is properly configured with your API keys before running the server.
