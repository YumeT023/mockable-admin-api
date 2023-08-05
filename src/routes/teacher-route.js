import { Router } from 'express';
import { teachers } from '../mock/mock.js';

export const teacherRouter = Router();

// Get all teachers
teacherRouter.get('/', (req, res) => {
  res.json(teachers);
});

// Get teacher by Id
teacherRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const result = teachers.find((elt) => elt.id === id);
  res.json(result);
});

// Crupdate teachers
teacherRouter.put('/', (req, res) => {
  res.json(teachers);
});
