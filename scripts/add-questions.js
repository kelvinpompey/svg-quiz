import PocketBase from 'pocketbase';
//import { API_URL } from '~/config';
export const pb = new PocketBase('https://svgquiz-api.aboutsvg.com');

let questions = [
  {
    topic: 'Algebra',
    question: 'Solve for x: 2x + 4 = 12',
    options: [
      { label: 'A', value: 'x = 4' },
      { label: 'B', value: 'x = 2' },
      { label: 'C', value: 'x = 3' },
      { label: 'D', value: 'x = 5' },
    ],
    answer: 'A',
  },
  {
    topic: 'Ratio and Proportion',
    question:
      'If the ratio of the length to the width of a rectangle is 5:2 and the length is 15 cm, what is the width?',
    options: [
      { label: 'A', value: '6 cm' },
      { label: 'B', value: '7 cm' },
      { label: 'C', value: '8 cm' },
      { label: 'D', value: '10 cm' },
    ],
    answer: 'A',
  },
  {
    topic: 'Percentage',
    question: 'What is 30% of 150?',
    options: [
      { label: 'A', value: '45' },
      { label: 'B', value: '40' },
      { label: 'C', value: '50' },
      { label: 'D', value: '60' },
    ],
    answer: 'A',
  },
  {
    topic: 'Geometry',
    question: 'What is the area of a triangle with a base of 8 cm and a height of 6 cm?',
    options: [
      { label: 'A', value: '24 cm²' },
      { label: 'B', value: '28 cm²' },
      { label: 'C', value: '48 cm²' },
      { label: 'D', value: '36 cm²' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'Solve for x: 7x - 4 = 24',
    options: [
      { label: 'A', value: 'x = 4' },
      { label: 'B', value: 'x = 3' },
      { label: 'C', value: 'x = 5' },
      { label: 'D', value: 'x = 6' },
    ],
    answer: 'A',
  },
  {
    topic: 'Statistics',
    question:
      'The numbers 4, 6, 8, 10, and 12 are the scores of five students in a test. What is the median score?',
    options: [
      { label: 'A', value: '8' },
      { label: 'B', value: '7' },
      { label: 'C', value: '9' },
      { label: 'D', value: '6' },
    ],
    answer: 'A',
  },
  {
    topic: 'Probability',
    question: 'A die is rolled. What is the probability of rolling an even number?',
    options: [
      { label: 'A', value: '1/2' },
      { label: 'B', value: '1/3' },
      { label: 'C', value: '1/6' },
      { label: 'D', value: '1/4' },
    ],
    answer: 'A',
  },
  {
    topic: 'Geometry',
    question: 'What is the circumference of a circle with a radius of 7 cm? (Use π = 22/7)',
    options: [
      { label: 'A', value: '44 cm' },
      { label: 'B', value: '22 cm' },
      { label: 'C', value: '14 cm' },
      { label: 'D', value: '28 cm' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'Simplify: 3x - 5 + 2x + 8',
    options: [
      { label: 'A', value: '5x + 3' },
      { label: 'B', value: '5x + 13' },
      { label: 'C', value: '6x + 3' },
      { label: 'D', value: '6x + 13' },
    ],
    answer: 'B',
  },
  {
    topic: 'Algebra',
    question: 'Solve for y: 4y - 3 = 13',
    options: [
      { label: 'A', value: 'y = 4' },
      { label: 'B', value: 'y = 3' },
      { label: 'C', value: 'y = 5' },
      { label: 'D', value: 'y = 2' },
    ],
    answer: 'A',
  },
  {
    topic: 'Ratio and Proportion',
    question:
      'A recipe calls for 4 cups of flour and 2 cups of sugar. If we use 12 cups of flour, how many cups of sugar should we use?',
    options: [
      { label: 'A', value: '6 cups' },
      { label: 'B', value: '8 cups' },
      { label: 'C', value: '4 cups' },
      { label: 'D', value: '10 cups' },
    ],
    answer: 'A',
  },
  {
    topic: 'Percentage',
    question: 'A shirt is on sale for $30 after a 20% discount. What was the original price?',
    options: [
      { label: 'A', value: '$37.50' },
      { label: 'B', value: '$35' },
      { label: 'C', value: '$40' },
      { label: 'D', value: '$45' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'Solve for x: 3x + 5 = 20',
    options: [
      { label: 'A', value: 'x = 5' },
      { label: 'B', value: 'x = 3' },
      { label: 'C', value: 'x = 7' },
      { label: 'D', value: 'x = 6' },
    ],
    answer: 'A',
  },
  {
    topic: 'Geometry',
    question:
      'The area of a rectangle is 50 cm² and its length is 10 cm. What is the width of the rectangle?',
    options: [
      { label: 'A', value: '5 cm' },
      { label: 'B', value: '10 cm' },
      { label: 'C', value: '7 cm' },
      { label: 'D', value: '3 cm' },
    ],
    answer: 'A',
  },
  {
    topic: 'Statistics',
    question: 'The ages of 6 children are: 10, 12, 14, 15, 18, and 20. What is the mean age?',
    options: [
      { label: 'A', value: '15' },
      { label: 'B', value: '14.5' },
      { label: 'C', value: '13' },
      { label: 'D', value: '16' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'Solve for x: 5(x - 2) = 25',
    options: [
      { label: 'A', value: 'x = 7' },
      { label: 'B', value: 'x = 5' },
      { label: 'C', value: 'x = 8' },
      { label: 'D', value: 'x = 6' },
    ],
    answer: 'A',
  },
  {
    topic: 'Percentage',
    question: 'What is 25% of 200?',
    options: [
      { label: 'A', value: '50' },
      { label: 'B', value: '40' },
      { label: 'C', value: '60' },
      { label: 'D', value: '70' },
    ],
    answer: 'A',
  },
  {
    topic: 'Ratio and Proportion',
    question:
      'If the ratio of boys to girls in a class is 3:5 and there are 24 boys, how many girls are there?',
    options: [
      { label: 'A', value: '40' },
      { label: 'B', value: '45' },
      { label: 'C', value: '50' },
      { label: 'D', value: '35' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'Simplify the expression: 3x + 2x - 5x',
    options: [
      { label: 'A', value: '0' },
      { label: 'B', value: '5x' },
      { label: 'C', value: '10x' },
      { label: 'D', value: '4x' },
    ],
    answer: 'A',
  },
  {
    topic: 'Probability',
    question:
      'A bag contains 5 red balls, 3 blue balls, and 2 green balls. What is the probability of picking a blue ball?',
    options: [
      { label: 'A', value: '3/10' },
      { label: 'B', value: '1/2' },
      { label: 'C', value: '1/3' },
      { label: 'D', value: '2/5' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'Solve for x: 4x - 3 = 9',
    options: [
      { label: 'A', value: 'x = 3' },
      { label: 'B', value: 'x = 2' },
      { label: 'C', value: 'x = 4' },
      { label: 'D', value: 'x = 5' },
    ],
    answer: 'A',
  },
  {
    topic: 'Geometry',
    question: 'What is the perimeter of a rectangle with a length of 8 cm and width of 5 cm?',
    options: [
      { label: 'A', value: '26 cm' },
      { label: 'B', value: '16 cm' },
      { label: 'C', value: '20 cm' },
      { label: 'D', value: '18 cm' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'What is the value of x in the equation: 2(x - 4) = 10?',
    options: [
      { label: 'A', value: 'x = 9' },
      { label: 'B', value: 'x = 7' },
      { label: 'C', value: 'x = 6' },
      { label: 'D', value: 'x = 8' },
    ],
    answer: 'A',
  },
  {
    topic: 'Percentage',
    question:
      'A store offers a 15% discount on a pair of shoes that costs $80. What is the discounted price?',
    options: [
      { label: 'A', value: '$68' },
      { label: 'B', value: '$75' },
      { label: 'C', value: '$70' },
      { label: 'D', value: '$72' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'Solve for x: 2x - 7 = 15',
    options: [
      { label: 'A', value: 'x = 11' },
      { label: 'B', value: 'x = 6' },
      { label: 'C', value: 'x = 5' },
      { label: 'D', value: 'x = 8' },
    ],
    answer: 'A',
  },
  {
    topic: 'Geometry',
    question: 'What is the volume of a cube with a side length of 4 cm?',
    options: [
      { label: 'A', value: '64 cm³' },
      { label: 'B', value: '16 cm³' },
      { label: 'C', value: '32 cm³' },
      { label: 'D', value: '48 cm³' },
    ],
    answer: 'A',
  },
  {
    topic: 'Statistics',
    question:
      'The scores of 5 students in a class are: 12, 15, 20, 25, and 30. What is the median score?',
    options: [
      { label: 'A', value: '20' },
      { label: 'B', value: '15' },
      { label: 'C', value: '25' },
      { label: 'D', value: '12' },
    ],
    answer: 'A',
  },
  {
    topic: 'Arithmetic',
    question: 'What is the sum of the first 10 prime numbers?',
    options: [
      { label: 'A', value: '129' },
      { label: 'B', value: '130' },
      { label: 'C', value: '120' },
      { label: 'D', value: '125' },
    ],
    answer: 'A',
  },
  {
    topic: 'Fraction',
    question: 'Simplify the expression: (3/4) + (2/3)',
    options: [
      { label: 'A', value: '17/12' },
      { label: 'B', value: '1/4' },
      { label: 'C', value: '5/12' },
      { label: 'D', value: '1' },
    ],
    answer: 'A',
  },
  {
    topic: 'Ratio and Proportion',
    question:
      'The ratio of cats to dogs in a shelter is 5:8. If there are 40 cats, how many dogs are there?',
    options: [
      { label: 'A', value: '64' },
      { label: 'B', value: '60' },
      { label: 'C', value: '50' },
      { label: 'D', value: '48' },
    ],
    answer: 'A',
  },
  {
    topic: 'Probability',
    question:
      'If a box contains 5 red balls, 3 blue balls, and 2 green balls, what is the probability of picking a green ball?',
    options: [
      { label: 'A', value: '2/10' },
      { label: 'B', value: '1/5' },
      { label: 'C', value: '1/3' },
      { label: 'D', value: '2/5' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'What is the solution to the equation 4(x - 3) = 16?',
    options: [
      { label: 'A', value: 'x = 7' },
      { label: 'B', value: 'x = 3' },
      { label: 'C', value: 'x = 4' },
      { label: 'D', value: 'x = 8' },
    ],
    answer: 'A',
  },
  {
    topic: 'Geometry',
    question: 'The area of a circle is 78.5 cm². What is its radius? (Use π = 3.14)',
    options: [
      { label: 'A', value: '5 cm' },
      { label: 'B', value: '7 cm' },
      { label: 'C', value: '6 cm' },
      { label: 'D', value: '8 cm' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'Solve for x: 2x + 4 = 12',
    options: [
      { label: 'A', value: 'x = 4' },
      { label: 'B', value: 'x = 3' },
      { label: 'C', value: 'x = 5' },
      { label: 'D', value: 'x = 2' },
    ],
    answer: 'A',
  },
  {
    topic: 'Decimals',
    question: 'Convert 0.6 to a fraction.',
    options: [
      { label: 'A', value: '3/5' },
      { label: 'B', value: '6/10' },
      { label: 'C', value: '2/3' },
      { label: 'D', value: '1/2' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'What is the value of y in the equation: 2y - 8 = 10?',
    options: [
      { label: 'A', value: 'y = 9' },
      { label: 'B', value: 'y = 5' },
      { label: 'C', value: 'y = 4' },
      { label: 'D', value: 'y = 8' },
    ],
    answer: 'A',
  },
  {
    topic: 'Percentage',
    question: 'A shirt originally costs $50. If it is marked up by 20%, what is the new price?',
    options: [
      { label: 'A', value: '$60' },
      { label: 'B', value: '$55' },
      { label: 'C', value: '$65' },
      { label: 'D', value: '$70' },
    ],
    answer: 'A',
  },
  {
    topic: 'Arithmetic',
    question: 'What is the value of 45% of 200?',
    options: [
      { label: 'A', value: '90' },
      { label: 'B', value: '100' },
      { label: 'C', value: '110' },
      { label: 'D', value: '120' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'Solve for x: 3x + 5 = 20',
    options: [
      { label: 'A', value: 'x = 5' },
      { label: 'B', value: 'x = 3' },
      { label: 'C', value: 'x = 4' },
      { label: 'D', value: 'x = 10' },
    ],
    answer: 'A',
  },
  {
    topic: 'Geometry',
    question: 'What is the area of a triangle with base 10 cm and height 6 cm?',
    options: [
      { label: 'A', value: '30 cm²' },
      { label: 'B', value: '60 cm²' },
      { label: 'C', value: '20 cm²' },
      { label: 'D', value: '15 cm²' },
    ],
    answer: 'A',
  },
  {
    topic: 'Statistics',
    question: 'What is the mean of the following set of numbers: 3, 5, 7, 9, 11?',
    options: [
      { label: 'A', value: '7' },
      { label: 'B', value: '8' },
      { label: 'C', value: '9' },
      { label: 'D', value: '10' },
    ],
    answer: 'A',
  },
  {
    topic: 'Fractions',
    question: 'Simplify the fraction 12/36.',
    options: [
      { label: 'A', value: '1/3' },
      { label: 'B', value: '1/2' },
      { label: 'C', value: '1/4' },
      { label: 'D', value: '2/3' },
    ],
    answer: 'A',
  },
  {
    topic: 'Decimals',
    question: 'What is 0.75 expressed as a fraction?',
    options: [
      { label: 'A', value: '3/4' },
      { label: 'B', value: '1/2' },
      { label: 'C', value: '7/10' },
      { label: 'D', value: '1/4' },
    ],
    answer: 'A',
  },
  {
    topic: 'Ratio and Proportion',
    question:
      'If the ratio of boys to girls in a class is 3:4, how many girls are there in a class of 21 students?',
    options: [
      { label: 'A', value: '12' },
      { label: 'B', value: '9' },
      { label: 'C', value: '7' },
      { label: 'D', value: '14' },
    ],
    answer: 'A',
  },
  {
    topic: 'Probability',
    question: 'If a fair die is rolled, what is the probability of getting an even number?',
    options: [
      { label: 'A', value: '1/2' },
      { label: 'B', value: '1/3' },
      { label: 'C', value: '1/6' },
      { label: 'D', value: '1/4' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'What is the value of x in the equation 5x - 2 = 3x + 6?',
    options: [
      { label: 'A', value: 'x = 4' },
      { label: 'B', value: 'x = 3' },
      { label: 'C', value: 'x = 5' },
      { label: 'D', value: 'x = 2' },
    ],
    answer: 'A',
  },
  {
    topic: 'Geometry',
    question: 'What is the circumference of a circle with radius 7 cm? (Use π = 22/7)',
    options: [
      { label: 'A', value: '44 cm' },
      { label: 'B', value: '14 cm' },
      { label: 'C', value: '49 cm' },
      { label: 'D', value: '154 cm' },
    ],
    answer: 'A',
  },
  {
    topic: 'Algebra',
    question: 'Simplify the expression: 2x + 3x - 5.',
    options: [
      { label: 'A', value: '5x - 5' },
      { label: 'B', value: '5x + 5' },
      { label: 'C', value: 'x - 5' },
      { label: 'D', value: '5x' },
    ],
    answer: 'A',
  },
  {
    topic: 'Percentage',
    question:
      'A product originally costs $120. It is now on sale for 25% off. What is the sale price?',
    options: [
      { label: 'A', value: '$90' },
      { label: 'B', value: '$100' },
      { label: 'C', value: '$110' },
      { label: 'D', value: '$80' },
    ],
    answer: 'A',
  },
];

async function insertQuestions() {
  for (let q of questions) {
    console.log('q ', q);
    let result = await pb
      .collection('questions')
      .getList(1, 10, { filter: pb.filter('title = {:title}', { title: q.question }) });

    if (result.length > 0) {
      console.log('question found');
      continue;
    }

    const newQuestion = await pb.collection('questions').create({
      subject: 'wa2lmj93j57cpq8',
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
