# Leadgenix - B2B Contact Prospecting Platform

"Find. Enrich. Connect."

Leadgenix is a comprehensive SaaS platform designed for B2B contact prospecting, helping businesses find qualified leads, enrich their data, and connect with potential customers.

## Project Structure

```
leadgenix/
├── frontend/         # React.js frontend
├── backend/          # Node.js + Express backend
└── database/         # MySQL database scripts
```

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`.

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.template` to `.env`
   - Update the values in `.env` with your MySQL credentials and JWT secret

4. Start the development server:
```bash
npm start
```

The backend API will be available at `http://localhost:5000`.

## Database Setup

1. Ensure MySQL is installed and running on your system.

2. Create the database:
```bash
mysql -u root -p < database/create_database.sql
```

3. Create the tables:
```bash
mysql -u root -p leadgenix < database/create_tables.sql
```

## Deployment

### Frontend
The frontend is configured for deployment on Vercel. Connect your GitHub repository to Vercel for automatic deployments.

### Backend
The backend can be deployed on Render, AWS, or any other Node.js hosting service.

### Database
For production, consider using a managed MySQL service like AWS RDS or DigitalOcean Managed Databases.

## Features

- User authentication and management
- Lead searching and filtering
- Bulk lead enrichment via CSV upload
- API key management for programmatic access
- Interactive dashboard with lead analytics
- Mobile-responsive design

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JWT, bcrypt