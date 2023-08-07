import { Router } from 'express';
import { delayPenalty, fees, whoami } from '../mock/mock.js';

export const mainRouter = Router();

// mainRouter.get("/", (req, res) => {
//   res.json({ message: "Tepr by mainRouter" });
// });

// mainRouter.post("/", (req, res) => {
//   res.json(result);
// });

mainRouter.post('/login', (req, res) => {
  const { username, password } = req.body;

  switch (username) {
    case 'manager':
      res.json({ username, password, accessToken: 'managerBearer' });
      break;
    case 'teacher':
      res.json({ username, password, accessToken: 'teacherBearer' });
      break;
    case 'student':
      res.json({ username, password, accessToken: 'studentBearer' });
      break;

    default:
      res.json({ username, password, accessToken: 'studentBearer' });
      break;
  }
});

mainRouter.get('/whoami', (req, res) => {
  const { authorization } = req.headers;
  const { manager, student, teacher } = whoami;
  switch (authorization) {
    case 'Bearer managerBearer':
      res.json(manager);
      break;
    case 'Bearer teacherBearer':
      res.json(teacher);
      break;
    case 'Bearer studentBearer':
      res.json(student);
      break;

    default:
      res.json(student);
      break;
  }
});

// Get all fees
mainRouter.get('/fees', (req, res) => {
  res.json(fees);
});

// Get current delay penalty
mainRouter.get('/delay_penalty', (req, res) => {
  res.json(delayPenalty);
});

//  Change current delay penalty
mainRouter.post('/delay_penalty', (req, res) => {
  res.json(delayPenalty);
});
