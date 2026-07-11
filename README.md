# Expense Tracker

A full-stack expense tracking app that lets users add, view, and delete personal expenses, with data persisted in a PostgreSQL database.

## Features
- Add expenses with title, amount, and category
- View all expenses in real time
- Delete expenses
- Data persisted via PostgreSQL (Supabase) using Prisma ORM

## Tech Stack
- **Frontend:** React, Vite
- **Backend:** Node.js, Express
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma

## Running Locally

### Backend
\`\`\`bash
cd server
npm install
npx prisma generate
npm run dev
\`\`\`

### Frontend
\`\`\`bash
npm install
npm run dev
\`\`\`

Create a \`.env\` file inside \`server/\` with:
\`\`\`
DATABASE_URL=your_supabase_connection_string
\`\`\`

## What I Learned
Building this project involved setting up a full-stack connection between React, Express, and a PostgreSQL database using Prisma — including debugging ORM version mismatches and understanding how schema migrations sync with a live database.
