import { Router } from 'express';
import {
  claims,
  courses,
  fees,
  grades,
  payments,
  students,
  transcripts,
  versions,
} from '../mock/mock.js';
import { __dirname } from '../index.js';

export const studentRouter = Router();

// Get all students
studentRouter.get('/', (req, res) => {
  res.json(students);
});

// Crupdate students
studentRouter.put('/', (req, res) => {
  res.json(students);
});

// Get student by id
studentRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const student = students.find((std) => std.id === id);
  res.json(student);
});

// Get a specific student courses
studentRouter.get('/:studentId/courses', (req, res) => {
  const { studentId } = req.params;
  res.json(courses);
});

// Link/Unlink courses to a specific student
studentRouter.put('/:studentId/courses', (req, res) => {
  const { studentId } = req.params;
  console.log(req.body);
  res.json(courses);
});

// -------- All about transcript ----------
// Get all transcripts
studentRouter.get('/:studentId/transcripts', (req, res) => {
  const { studentId } = req.params;
  const results = transcripts.filter(
    (transcript) => transcript.student_id === studentId
  );
  res.json(results);
});

// Crupdate transcript
studentRouter.put('/:studentId/transcripts', (req, res) => {
  const { studentId } = req.params;
  const results = transcripts.filter(
    (transcript) => transcript.student_id === studentId
  );
  res.json(results);
});

// Get a student transcript by id
studentRouter.get('/:studentId/transcripts/:transcriptId', (req, res) => {
  const { studentId, transcriptId } = req.params;
  const results = transcripts.find(
    (transcript) => transcript.id === transcriptId
  );
  res.json(results);
});

// Get all versions of transcript
studentRouter.get(
  '/:studentId/transcripts/:transcriptId/versions',
  (req, res) => {
    const { studentId, transcriptId } = req.params;
    res.json(versions);
  }
);

// Get details of a specific version of a student transcript
studentRouter.get(
  '/:studentId/transcripts/:transcriptId/versions/:versionId',
  (req, res) => {
    const { studentId, transcriptId, versionId } = req.params;
    const results = versions.find((version) => version.id === versionId);
    res.json(results);
  }
);

// Get all claims for a version of transcript
studentRouter.get(
  '/:studentId/transcripts/:transcriptId/versions/:versionId/claims',
  (req, res) => {
    const { studentId, transcriptId, versionId } = req.params;
    res.json(claims);
  }
);

// Get a claim by id
studentRouter.get(
  '/:studentId/transcripts/:transcriptId/versions/:versionId/claims/:claimId',
  (req, res) => {
    const { studentId, transcriptId, versionId, claimId } = req.params;
    const results = claims.find((claim) => claim.id === claimId);
    res.json(results);
  }
);

// Crupdate a claim
studentRouter.put(
  '/:studentId/transcripts/:transcriptId/versions/:versionId/claims/:claimId',
  (req, res) => {
    const { studentId, transcriptId, versionId, claimId } = req.params;
    res.json(claims[0]);
  }
);

// Get pdf of a specific version of a student transcript
studentRouter.get(
  '/:studentId/transcripts/:transcriptId/versions/:versionId/raw',
  (req, res) => {
    const { studentId, transcriptId, versionId } = req.params;
    // res.json({ msg: 'tepr' });
    res.sendFile(`${__dirname}/mock/mock.pdf`);
  }
);

// Upload pdf of a specific version
studentRouter.post(
  '/:studentId/transcripts/:transcriptId/versions/latest/raw',
  (req, res) => {
    const { studentId, transcriptId } = req.params;
    res.json(versions[0]);
  }
);

// --------- Paying ---------
// Get fee by Id
studentRouter.get('/:studentId/fees/:feeId', (req, res) => {
  const { feeId, studentId } = req.params;
  const results = fees.find((value) => value.id === feeId);
  res.json(results);
});

// Get all student fees
studentRouter.get('/:studentId/fees', (req, res) => {
  const { studentId } = req.params;
  res.json(fees);
});

// Create student fees
studentRouter.post('/:studentId/fees', (req, res) => {
  const { studentId } = req.params;
  res.json(fees);
});

// Get all student payments of specific fee
studentRouter.get('/:studentId/fees/:feeId/payments', (req, res) => {
  const { studentId, feeId } = req.params;
  res.json(payments);
});

// Create student payment
studentRouter.post('/:studentId/fees/:feeId/payments', (req, res) => {
  const { studentId, feeId } = req.params;
  res.json(payments);
});

studentRouter.get('/:studentId/grades', (req, res) => {
  const { studentId } = req.params;
  res.json(grades);
});
