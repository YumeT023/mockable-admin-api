import express, { json } from 'express';
import cors from 'cors';
import { mainRouter } from './routes/main-route.js';
import { studentRouter } from './routes/student-route.js';
import { teacherRouter } from './routes/teacher-route.js';
import { managerRouter } from './routes/manager-route.js';
import { groupRouter } from './routes/group-route.js';
import { courseRouter } from './routes/course-route.js';

const port = 5000;
const app = express();

app.use(json());
app.use(cors());

app.use('/', mainRouter);
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter);
app.use('/managers', managerRouter);
app.use('/groups', groupRouter);
app.use('/courses', courseRouter);

app.listen(port, () => console.log(`Server listen on port ${port}...`));
