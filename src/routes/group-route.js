import { Router } from 'express';
import { groups } from '../mock/mock.js';

export const groupRouter = Router();

// Get all groups
groupRouter.get('/', (req, res) => {
  res.json(groups);
});

// Get group by Id
groupRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const result = groups.find((elt) => elt.id === id);
  res.json(result);
});

// Crupdate group
groupRouter.put('/', (req, res) => {
  res.json(groups);
});
