export const whoami = {
  manager: { id: 'managerId', role: 'MANAGER', bearer: 'managerBearer' },
  teacher: { id: 'teacherId', role: 'TEACHER', bearer: 'teacherBearer' },
  student: { id: 'studentId', role: 'STUDENT', bearer: 'studentBearer' },
};

export const students = [
  {
    id: 'studentId',
    ref: 'STD21000',
    first_name: 'First Name',
    last_name: 'Last Name',
    email: 'email@gmail.com',
    sex: 'M',
    birth_date: '2023-08-03',
    address: 'Ivandry HEI',
    phone: '+261340123456',
    entrance_datetime: '2023-08-03T06:48:01.207Z',
    status: 'ENABLED',
  },
];

export const teachers = [
  {
    id: 'teacherId',
    ref: 'TEA21001',
    first_name: 'Teacher 1',
    last_name: 'First Teacher',
    email: 'teacher@gmail.com',
    sex: 'M',
    birth_date: '2023-08-04',
    address: 'Ivandry',
    phone: '+261340414725',
    entrance_datetime: '2023-08-04T18:21:42.588Z',
    status: 'ENABLED',
  },
];

export const managers = [
  {
    id: 'managerId',
    ref: 'MAN21001',
    first_name: 'Manager 1',
    last_name: 'First Manager',
    email: 'manager@gmail.com',
    sex: 'M',
    birth_date: '2023-08-04',
    address: 'Ivandry',
    phone: '+261340414725',
    entrance_datetime: '2023-08-04T18:21:42.588Z',
    status: 'ENABLED',
  },
];

export const courses = [
  {
    id: 'courseId',
    code: 'PROG1',
    name: 'Algorithmics',
    credits: 20,
    total_hours: 22,
    main_teacher: {
      id: 'teacherId',
      ref: 'TEA21001',
      first_name: 'Teacher 1',
      last_name: 'First Teacher',
      email: 'teacher@gmail.com',
      sex: 'M',
      birth_date: '2023-08-04',
      address: 'Ivandry',
      phone: '+261340414725',
      entrance_datetime: '2023-08-04T18:21:42.588Z',
      status: 'ENABLED',
    },
  },
];

export const transcripts = [
  {
    id: 'transcriptId',
    student_id: 'studentId',
    semester: 'S1',
    academic_year: 2023,
    is_definitive: true,
    creation_datetime: '2023-08-04T18:42:32.965Z',
  },
];

export const versions = [
  {
    id: 'versionId',
    transcript_id: 'transcriptId',
    ref: 0,
    created_by_user_id: 'managerId',
    created_by_user_role: 'MANAGER',
    creation_datetime: '2023-08-04T18:53:47.964Z',
  },
];

export const claims = [
  {
    id: 'claimId',
    transcript_id: 'transcriptId',
    transcript_version_id: 'versionId',
    status: 'OPEN',
    creation_datetime: '2023-08-04T19:13:28.181Z',
    closed_datetime: '2023-08-04T19:13:28.181Z',
    reason: 'Lorem impsum dolor...',
  },
];

export const fees = [
  {
    type: 'TUITION',
    comment: 'string',
    total_amount: 200_000,
    creation_datetime: '2023-08-04T19:34:17.358Z',
    due_datetime: '2023-08-04T19:34:17.358Z',
    id: 'feeId',
    student_id: 'studentId',
    remaining_amount: 0,
    status: 'PAID',
    updated_at: '2023-08-04T19:34:17.358Z',
  },
];

export const payments = [
  {
    type: 'CASH',
    amount: 200_000,
    comment: 'string',
    id: 'paymentId',
    fee_id: 'feeId',
    creation_datetime: '2023-08-04T19:40:09.473Z',
  },
];

export const delayPenalty = {
  interest_percent: 2,
  interest_timerate: 'DAILY',
  grace_delay: 0,
  applicability_delay_after_grace: 10,
  id: 'delayPenaltyId',
  creation_datetime: '2023-08-05T11:15:54.890Z',
};

export const grades = [
  {
    ...courses[0],
    exams: [
      {
        id: 'examId',
        coefficient: 10,
        title: 'examen 1',
        examination_date: '2023-08-05T11:38:12.600Z',
        grade: {
          score: 12.5,
          created_at: '2023-08-05T11:38:12.600Z',
        },
      },
    ],
  },
];

export const groups = [
  {
    id: 'groupId',
    name: 'The group number one',
    ref: 'G1',
    creation_datetime: '2023-08-05T11:44:22.402Z',
  },
];

export const exams = [
  {
    id: 'examId',
    coefficient: 2,
    title: 'Examen 1',
    examination_date: '2023-08-05T11:53:23.439Z',
  },
];

export const examDetails = {
  ...exams[0],
  participants: [
    {
      id: 'studentId',
      ref: 'STD21000',
      first_name: 'First Name',
      last_name: 'Last Name',
      email: 'email@gmail.com',
      grade: {
        score: 12.5,
        created_at: '2023-08-05T11:56:39.105Z',
      },
    },
  ],
};

export const courseGrades = {
  id: 'examId',
  coefficient: 10,
  title: 'examen 1',
  examination_date: '2023-08-05T11:38:12.600Z',
  participants: [
    {
      id: 'studentId',
      ref: 'STD21000',
      first_name: 'First Name',
      last_name: 'Last Name',
      email: 'email@gmail.com',
      grade: {
        score: 12.5,
        created_at: '2023-08-05T11:56:39.105Z',
      },
    },
  ],
};
