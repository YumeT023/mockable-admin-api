import { Router } from 'express';
import { managers } from '../mock/mock.js';

export const managerRouter = Router();

// Get all managers
managerRouter.get('/', (req, res) => {
  res.json(managers);
});

// Get manager by Id
managerRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const result = managers.find((elt) => elt.id === id);
  res.json(result);
});
