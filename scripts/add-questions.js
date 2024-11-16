import PocketBase from 'pocketbase';
//import { API_URL } from '~/config';
export const pb = new PocketBase('https://svgquiz-api.aboutsvg.com');

let questions = {
  CAPE_Pure_Mathematics_Questions: [
    {
      topic: 'Algebra',
      question: 'Which of the following is the factorization of ( x^2 - 5x + 6 )?',
      options: [
        { label: 'A', value: '(x - 2)(x - 3)' },
        { label: 'B', value: '(x - 1)(x - 6)' },
        { label: 'C', value: '(x + 2)(x - 3)' },
        { label: 'D', value: '(x - 1)(x + 6)' },
      ],
      answer: 'A',
    },
    {
      topic: 'Calculus',
      question: 'What is the second derivative of ( f(x) = x^4 - 4x^3 + 6x^2 - 3x )?',
      options: [
        { label: 'A', value: '12x^2 - 24x + 12' },
        { label: 'B', value: '12x^2 - 24x + 6' },
        { label: 'C', value: '24x^2 - 24x + 6' },
        { label: 'D', value: '12x^2 - 12x + 3' },
      ],
      answer: 'A',
    },
    {
      topic: 'Matrices',
      question:
        'What is the determinant of the matrix ( A = \begin{pmatrix} 3 & 2 \\ 4 & 1 end{pmatrix} )?',
      options: [
        { label: 'A', value: '5' },
        { label: 'B', value: '10' },
        { label: 'C', value: '-5' },
        { label: 'D', value: '6' },
      ],
      answer: 'C',
    },
    {
      topic: 'Trigonometry',
      question: 'What is the exact value of ( cos 60^circ )?',
      options: [
        { label: 'A', value: '( \frac{1}{2} )' },
        { label: 'B', value: '( \frac{sqrt{2}}{2} )' },
        { label: 'C', value: '( 1 )' },
        { label: 'D', value: '( \frac{sqrt{3}}{2} )' },
      ],
      answer: 'A',
    },
    {
      topic: 'Sequences and Series',
      question: 'What is the 10th term of the geometric sequence ( 3, 6, 12, 24, dots )?',
      options: [
        { label: 'A', value: '1536' },
        { label: 'B', value: '768' },
        { label: 'C', value: '1024' },
        { label: 'D', value: '512' },
      ],
      answer: 'A',
    },
    {
      topic: 'Differential Equations',
      question:
        'What is the general solution to the differential equation ( \frac{dy}{dx} = 5x^4 )?',
      options: [
        { label: 'A', value: 'y = x^5 + C' },
        { label: 'B', value: 'y = 5x^5 + C' },
        { label: 'C', value: 'y = 5x^4 + C' },
        { label: 'D', value: 'y = x^6 + C' },
      ],
      answer: 'A',
    },
    {
      topic: 'Complex Numbers',
      question: 'What is the modulus of the complex number ( 3 + 4i )?',
      options: [
        { label: 'A', value: '5' },
        { label: 'B', value: '7' },
        { label: 'C', value: '4' },
        { label: 'D', value: '3' },
      ],
      answer: 'A',
    },
    {
      topic: 'Logarithms',
      question: 'What is the value of ( log_10 1000 )?',
      options: [
        { label: 'A', value: '3' },
        { label: 'B', value: '2' },
        { label: 'C', value: '4' },
        { label: 'D', value: '1' },
      ],
      answer: 'A',
    },
    {
      topic: 'Vectors',
      question:
        'What is the magnitude of the vector ( mathbf{v} = \begin{pmatrix} 3 \\ 4 end{pmatrix} )?',
      options: [
        { label: 'A', value: '5' },
        { label: 'B', value: '4' },
        { label: 'C', value: '7' },
        { label: 'D', value: '3' },
      ],
      answer: 'A',
    },
    {
      topic: 'Algebra',
      question: 'Which of the following is the solution to the equation ( 2x^2 - 3x - 5 = 0 )?',
      options: [
        { label: 'A', value: 'x = 1 or x = -\frac{5}{2}' },
        { label: 'B', value: 'x = 2 or x = -\frac{5}{2}' },
        { label: 'C', value: 'x = \frac{5}{2} or x = -1' },
        { label: 'D', value: 'x = 1 or x = \frac{5}{2}' },
      ],
      answer: 'A',
    },
    {
      topic: 'Calculus',
      question: 'What is the derivative of ( f(x) = 3x^3 - 2x^2 + x - 5 )?',
      options: [
        { label: 'A', value: '9x^2 - 4x + 1' },
        { label: 'B', value: '6x^2 - 4x + 1' },
        { label: 'C', value: '9x^2 - 4x - 1' },
        { label: 'D', value: '6x^2 - 4x - 5' },
      ],
      answer: 'A',
    },
    {
      topic: 'Matrices',
      question:
        'If ( A = \begin{pmatrix} 2 & 3 \\ 4 & 1 end{pmatrix} ) and ( B = \begin{pmatrix} 1 & 2 \\ 3 & 4 end{pmatrix} ), what is the matrix product ( AB )?',
      options: [
        { label: 'A', value: '\begin{pmatrix} 11 & 14 \\ 7 & 10 end{pmatrix}' },
        { label: 'B', value: '\begin{pmatrix} 11 & 16 \\ 10 & 14 end{pmatrix}' },
        { label: 'C', value: '\begin{pmatrix} 7 & 10 \\ 11 & 14 end{pmatrix}' },
        { label: 'D', value: '\begin{pmatrix} 6 & 8 \\ 14 & 10 end{pmatrix}' },
      ],
      answer: 'A',
    },
    {
      topic: 'Trigonometry',
      question: 'Which of the following is the exact value of ( sin 30^circ )?',
      options: [
        { label: 'A', value: '( \frac{1}{2} )' },
        { label: 'B', value: '( \frac{sqrt{3}}{2} )' },
        { label: 'C', value: '( 1 )' },
        { label: 'D', value: '( \frac{sqrt{2}}{2} )' },
      ],
      answer: 'A',
    },
    {
      topic: 'Sequences and Series',
      question:
        'What is the sum of the first 10 terms of the arithmetic sequence ( 2, 5, 8, 11, dots )?',
      options: [
        { label: 'A', value: '160' },
        { label: 'B', value: '165' },
        { label: 'C', value: '170' },
        { label: 'D', value: '175' },
      ],
      answer: 'B',
    },
    {
      topic: 'Differential Equations',
      question:
        'Which of the following is the general solution to the differential equation ( \frac{dy}{dx} = 3y )?',
      options: [
        { label: 'A', value: 'y = Ae^{3x}' },
        { label: 'B', value: 'y = A e^{x}' },
        { label: 'C', value: 'y = A x^3' },
        { label: 'D', value: 'y = A e^{\frac{3}{x}}' },
      ],
      answer: 'A',
    },
    {
      topic: 'Complex Numbers',
      question: 'What is the product of the complex numbers ( (3 + 4i) ) and ( (2 - 3i) )?',
      options: [
        { label: 'A', value: '6 - 1i' },
        { label: 'B', value: '6 + 1i' },
        { label: 'C', value: '17 + 1i' },
        { label: 'D', value: '17 - 1i' },
      ],
      answer: 'D',
    },
    {
      topic: 'Logarithms',
      question: 'What is the value of ( log_2 32 )?',
      options: [
        { label: 'A', value: '5' },
        { label: 'B', value: '6' },
        { label: 'C', value: '4' },
        { label: 'D', value: '3' },
      ],
      answer: 'A',
    },
    {
      topic: 'Vectors',
      question:
        'If ( mathbf{a} = \begin{pmatrix} 2 \\ 3 end{pmatrix} ) and ( mathbf{b} = \begin{pmatrix} 1 \\ -4 end{pmatrix} ), what is the dot product ( mathbf{a} cdot mathbf{b} )?',
      options: [
        { label: 'A', value: '2' },
        { label: 'B', value: '-10' },
        { label: 'C', value: '10' },
        { label: 'D', value: '-2' },
      ],
      answer: 'B',
    },
    {
      topic: 'Probability',
      question: 'If two dice are rolled, what is the probability of getting a sum of 7?',
      options: [
        { label: 'A', value: '( \frac{1}{6} )' },
        { label: 'B', value: '( \frac{1}{36} )' },
        { label: 'C', value: '( \frac{5}{36} )' },
        { label: 'D', value: '( \frac{7}{36} )' },
      ],
      answer: 'A',
    },
  ],
};

async function insertQuestions() {
  for (let q of questions['CAPE_Pure_Mathematics_Questions']) {
    console.log('q ', q);
    let result = await pb
      .collection('questions')
      .getList(1, 10, { filter: pb.filter('title = {:title}', { title: q.question }) });

    if (result.length > 0) {
      console.log('question found');
      continue;
    }

    const newQuestion = await pb.collection('questions').create({
      subject: 'l58k6ex1358vjyh',
      title: q.question,
      topic: q.topic,
    });

    for (let option of q.options) {
      let newOption = await pb.collection('options').create({
        title: option.value,
        question: newQuestion.id,
      });

      if (option.label === q.answer) {
        await pb.collection('questions').update(newQuestion.id, {
          correct_option: newOption.id,
        });
      }
    }
  }
}

insertQuestions();
