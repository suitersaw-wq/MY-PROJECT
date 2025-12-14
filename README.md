# my-project

[![CI](https://github.com/suitersaw-wq/my-project/actions/workflows/ci.yml/badge.svg)](https://github.com/suitersaw-wq/my-project/actions/workflows/ci.yml)

A Node.js/TypeScript web server with Express.js.

## Getting Started

```bash
npm install
npm run build
npm start
```

The server runs at http://localhost:3000

## API Endpoints

- `GET /` - Returns greeting
- `GET /health` - Health check endpoint
- `GET /greet/:name` - Personalized greeting
- `POST /ai/chat` - Chat with Claude AI

### AI Chat Endpoint

```bash
curl -X POST http://localhost:3000/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, Claude!"}'
```

Requires `ANTHROPIC_API_KEY` environment variable.

## Scripts

- `npm run build` - Compile TypeScript
- `npm run dev` - Watch mode
- `npm start` - Run the server
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier

## Docker

```bash
# Build image
docker build -t my-project .

# Run container
docker run -p 3000:3000 my-project
```

## Docker Compose

```bash
# Start the application
docker compose up -d

# View logs
docker compose logs -f

# Stop the application
docker compose down
```
