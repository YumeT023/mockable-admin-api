import { Router } from 'express';
import { result } from '../mock/response.js';
import { whoami } from '../mock/mock.js';

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
  const auth = req.headers.authorization;
  const { manager, student, teacher } = whoami;
  switch (auth) {
    case 'managerBearer':
      res.json(manager);
      break;
    case 'teacherBearer':
      res.json(teacher);
      break;
    case 'studentBearer':
      res.json(student);
      break;

    default:
      res.json(student);
      break;
  }
  res.json({ message: 'tepr' });
});
