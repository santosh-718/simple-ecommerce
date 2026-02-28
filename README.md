# Simple Ecommerce

A simple ecommerce application with separate frontend and backend services.

## Project Structure

```
simple-ecommerce/
├── backend/          # Node.js Express backend
│   ├── package.json
│   ├── server.js
│   ├── db.js
│   └── Dockerfile
├── frontend/         # React frontend
│   ├── package.json
│   ├── public/
│   ├── src/
│   └── Dockerfile
├── docker-compose.yml
└── .gitignore
```

## Getting Started

### Without Docker

**Backend:**
```bash
cd backend
npm install
npm start
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

### With Docker

```bash
docker-compose up --build
```

## Services

- **Backend**: Runs on http://localhost:5000
- **Frontend**: Runs on http://localhost:3000
