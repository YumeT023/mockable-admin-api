import { Router } from 'express';
import { courseGrades, courses, examDetails, exams } from '../mock/mock.js';

export const courseRouter = Router();

// Get all courses
courseRouter.get('/', (req, res) => {
  res.json(courses);
});

// Get course by Id
courseRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const result = courses.find((elt) => elt.id === id);
  res.json(result);
});

// Crupdate course
courseRouter.put('/', (req, res) => {
  res.json(courses);
});

// Get all exams info
courseRouter.get('/:courseId/exams', (req, res) => {
  const { courseId } = req.params;
  res.json(exams);
});

// Crupdate exams
courseRouter.put('/:courseId/exams', (req, res) => {
  const { courseId } = req.params;
  res.json(exams);
});

// Get exam details
courseRouter.get('/:courseId/exams/:examId/details', (req, res) => {
  const { courseId, examId } = req.params;
  res.json(examDetails);
});

// Update std grades
courseRouter.put('/:courseId/exams/:examId/grades', (req, res) => {
  const { courseId, examId } = req.params;
  res.json(courseGrades);
});

// Return a participant with the specific exam & grade
courseRouter.get(
  '/:courseId/exams/:examId/participants/:participantId',
  (req, res) => {
    const { courseId, examId, participantId } = req.params;
    res.json(courseGrades.participants[0]);
  }
);
