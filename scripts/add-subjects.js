const subjects = [
  'Accounting',
  'Agricultural Science',
  'Applied Mathematics',
  'Art and Design',
  'Biology',
  'Building and Mechanical Engineering Drawing',
  'Caribbean Studies',
  'Chemistry',
  'Communication Studies',
  'Computer Science',
  'Digital Media',
  'Economics',
  'Electrical and Electronic Technology',
  'Entrepreneurship',
  'Environmental Science',
  'Financial Services Studies',
  'Food and Nutrition',
  'French',
  'Geography',
  'Green Engineering',
  'History',
  'Information Technology',
  'Integrated Mathematics',
  'Law',
  'Literatures in English',
  'Logistics and Supply Chain Operations',
  'Management of Business',
  'Performing Arts',
  'Physics',
  'Physical Education and Sport',
  'Pure Mathematics',
  'Sociology',
  'Spanish',
  'Tourism',
];

async function insertSubjects() {
  for (let subject of subjects) {
    const response = await fetch(
      'https://svgquiz-api.aboutsvg.com/api/collections/subjects/records',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: subject,
          level: 'CAPE',
        }),
      }
    );
  }
}

insertSubjects();
