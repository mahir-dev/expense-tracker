const express = require('express');
const cors = require('cors');
require('dotenv').config();
const prisma = require('./prismaClient');
console.log('Prisma client loaded:', prisma);
console.log('Has expense model:', typeof prisma?.expense);
console.log('THIS IS THE LATEST VERSION - TEST 123');

const app = express();
app.use(cors());
app.use(express.json());

// GET all expenses
app.get('/expenses', async (req, res) => {
  const expenses = await prisma.expense.findMany({
    orderBy: { createdAt: 'desc' }
  });
  res.json(expenses);
});

// POST a new expense
app.post('/expenses', async (req, res) => {
  const { title, amount, category } = req.body;
  const expense = await prisma.expense.create({
    data: { title, amount: parseFloat(amount), category }
  });
  res.json(expense);
});

// DELETE an expense
app.delete('/expenses/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.expense.delete({ where: { id: parseInt(id) } });
  res.json({ message: 'Deleted' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));