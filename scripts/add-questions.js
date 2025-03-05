import PocketBase from 'pocketbase';
//import { API_URL } from '~/config';
export const pb = new PocketBase('https://svgquiz-api.aboutsvg.com');

const subjectId = 'ug46vp4u96m62v0';
let questions = [
  {
    topic: 'Budgeting and Money Management',
    question: 'Which of the following is the best way to track your monthly expenses?',
    options: [
      { label: 'A', value: 'Using a savings account' },
      { label: 'B', value: 'Keeping receipts of all purchases' },
      { label: 'C', value: 'Using a budgeting app or spreadsheet' },
      { label: 'D', value: 'Using cash for all purchases' },
    ],
    answer: 'C',
  },
  {
    topic: 'Family Planning',
    question: 'Which of the following factors is most important when planning a family budget?',
    options: [
      { label: 'A', value: "The family's income" },
      { label: 'B', value: "The family's desires" },
      { label: 'C', value: "The family's age" },
      { label: 'D', value: "The family's location" },
    ],
    answer: 'A',
  },
  {
    topic: 'Consumer Awareness',
    question: 'What is the main purpose of consumer protection laws?',
    options: [
      { label: 'A', value: 'To protect the seller from competition' },
      { label: 'B', value: 'To ensure that consumers are treated fairly' },
      { label: 'C', value: 'To regulate the quality of goods and services' },
      { label: 'D', value: 'To increase product prices' },
    ],
    answer: 'B',
  },
  {
    topic: 'Household Management',
    question:
      'Which of the following is the most effective method for organizing household chores?',
    options: [
      { label: 'A', value: 'Assigning tasks randomly' },
      { label: 'B', value: 'Using a weekly schedule' },
      { label: 'C', value: 'Hiring professional help' },
      { label: 'D', value: 'Assigning chores only on weekends' },
    ],
    answer: 'B',
  },
  {
    topic: 'Financial Planning',
    question: 'What is the primary purpose of having an emergency fund?',
    options: [
      { label: 'A', value: 'To pay for luxury items' },
      { label: 'B', value: 'To save for retirement' },
      { label: 'C', value: 'To cover unexpected expenses' },
      { label: 'D', value: 'To invest in the stock market' },
    ],
    answer: 'C',
  },
  {
    topic: 'Nutrition and Health',
    question: 'Which of the following is an important element of a balanced diet?',
    options: [
      { label: 'A', value: 'Carbohydrates only' },
      { label: 'B', value: 'Proteins and fats only' },
      { label: 'C', value: 'A variety of nutrients from different food groups' },
      { label: 'D', value: 'Sugars and refined foods' },
    ],
    answer: 'C',
  },
  {
    topic: 'Household Equipment',
    question: 'What is the primary purpose of a refrigerator in the home?',
    options: [
      { label: 'A', value: 'To store food at a low temperature to prevent spoilage' },
      { label: 'B', value: 'To keep food warm' },
      { label: 'C', value: 'To prepare meals' },
      { label: 'D', value: 'To serve food' },
    ],
    answer: 'A',
  },
  {
    topic: 'Home Cleaning and Maintenance',
    question: 'Which of the following is the best method for cleaning hardwood floors?',
    options: [
      { label: 'A', value: 'Using a damp mop with a cleaning solution' },
      { label: 'B', value: 'Using a dry vacuum cleaner' },
      { label: 'C', value: 'Scrubbing with soap and water' },
      { label: 'D', value: 'Washing with a power washer' },
    ],
    answer: 'A',
  },
  {
    topic: 'Clothing and Textiles',
    question: 'Which of the following is the best method to remove a stain from a fabric?',
    options: [
      { label: 'A', value: 'Scrubbing the stain with a hard brush' },
      { label: 'B', value: 'Soaking the fabric in cold water immediately' },
      { label: 'C', value: 'Using bleach on all fabrics' },
      { label: 'D', value: 'Ironing the fabric before cleaning' },
    ],
    answer: 'B',
  },
  {
    topic: 'Time Management',
    question: 'Which of the following is an effective strategy for managing time at home?',
    options: [
      { label: 'A', value: 'Procrastinating until the last minute' },
      { label: 'B', value: 'Prioritizing tasks based on importance' },
      { label: 'C', value: 'Multitasking without a plan' },
      { label: 'D', value: 'Avoiding responsibilities' },
    ],
    answer: 'B',
  },
  {
    topic: 'Consumer Awareness',
    question: 'Which of the following is an example of a need rather than a want?',
    options: [
      { label: 'A', value: 'A new smartphone' },
      { label: 'B', value: 'Food and water' },
      { label: 'C', value: 'A luxury vacation' },
      { label: 'D', value: 'Designer clothing' },
    ],
    answer: 'B',
  },
  {
    topic: 'Budgeting and Money Management',
    question: 'What is the main purpose of creating a personal budget?',
    options: [
      { label: 'A', value: 'To plan for future income and expenses' },
      { label: 'B', value: 'To save money for retirement only' },
      { label: 'C', value: 'To help you make impulse purchases' },
      { label: 'D', value: 'To pay off loans quickly' },
    ],
    answer: 'A',
  },
  {
    topic: 'Home Management',
    question: 'Which of the following is the most effective way to prevent clutter in the home?',
    options: [
      { label: 'A', value: 'Buying more storage containers' },
      { label: 'B', value: 'Regularly decluttering and organizing' },
      { label: 'C', value: 'Storing items in any available space' },
      { label: 'D', value: 'Throwing away old items without considering value' },
    ],
    answer: 'B',
  },
  {
    topic: 'Financial Planning',
    question: 'Which of the following is a long-term financial goal?',
    options: [
      { label: 'A', value: 'Saving for a vacation' },
      { label: 'B', value: 'Paying off a credit card' },
      { label: 'C', value: 'Buying a car' },
      { label: 'D', value: 'Saving for retirement' },
    ],
    answer: 'D',
  },
  {
    topic: 'Nutrition and Health',
    question: 'Which of the following is a good source of vitamin C?',
    options: [
      { label: 'A', value: 'Carrots' },
      { label: 'B', value: 'Oranges' },
      { label: 'C', value: 'Chicken' },
      { label: 'D', value: 'Rice' },
    ],
    answer: 'B',
  },
  {
    topic: 'Time Management',
    question: 'What is the best way to prioritize daily tasks?',
    options: [
      { label: 'A', value: 'By importance and deadlines' },
      { label: 'B', value: 'By the amount of time they take' },
      { label: 'C', value: 'By how much you like the task' },
      { label: 'D', value: 'By random selection' },
    ],
    answer: 'A',
  },
  {
    topic: 'Clothing and Textiles',
    question: 'Which of the following fabrics is most commonly used for formal wear?',
    options: [
      { label: 'A', value: 'Cotton' },
      { label: 'B', value: 'Silk' },
      { label: 'C', value: 'Polyester' },
      { label: 'D', value: 'Denim' },
    ],
    answer: 'B',
  },
  {
    topic: 'Household Equipment',
    question:
      'Which of the following is a key factor to consider when buying household appliances?',
    options: [
      { label: 'A', value: 'The brand of the appliance' },
      { label: 'B', value: 'The energy efficiency of the appliance' },
      { label: 'C', value: "The appliance's color" },
      { label: 'D', value: "The appliance's size only" },
    ],
    answer: 'B',
  },
  {
    topic: 'Household Cleaning and Maintenance',
    question: 'What is the best way to clean windows?',
    options: [
      { label: 'A', value: 'Using a damp cloth with soap' },
      { label: 'B', value: 'Using a commercial window cleaner and a squeegee' },
      { label: 'C', value: 'Scrubbing with a dry towel' },
      { label: 'D', value: 'Washing with a power hose' },
    ],
    answer: 'B',
  },
  {
    topic: 'Food and Nutrition',
    question: 'Which of the following is an example of a complete protein?',
    options: [
      { label: 'A', value: 'Rice' },
      { label: 'B', value: 'Eggs' },
      { label: 'C', value: 'Potatoes' },
      { label: 'D', value: 'Beans' },
    ],
    answer: 'B',
  },
  {
    topic: 'Household Budgeting',
    question: 'What is a key feature of a well-balanced household budget?',
    options: [
      { label: 'A', value: 'Excessive spending on non-essentials' },
      { label: 'B', value: 'Allocating enough funds for savings' },
      { label: 'C', value: 'Cutting all entertainment expenses' },
      { label: 'D', value: 'Spending only on luxury items' },
    ],
    answer: 'B',
  },
  {
    topic: 'Consumer Awareness',
    question: 'What is the best way to avoid consumer fraud?',
    options: [
      { label: 'A', value: 'Avoid making any online purchases' },
      { label: 'B', value: 'Research products and companies before buying' },
      { label: 'C', value: 'Buy only from unverified sources' },
      { label: 'D', value: 'Always ignore return policies' },
    ],
    answer: 'B',
  },
  {
    topic: 'Clothing and Textiles',
    question: 'Which fabric is most commonly used to make activewear?',
    options: [
      { label: 'A', value: 'Linen' },
      { label: 'B', value: 'Cotton' },
      { label: 'C', value: 'Spandex' },
      { label: 'D', value: 'Wool' },
    ],
    answer: 'C',
  },
  {
    topic: 'Food Preparation',
    question: 'Which of the following is an example of dry heat cooking?',
    options: [
      { label: 'A', value: 'Boiling' },
      { label: 'B', value: 'Steaming' },
      { label: 'C', value: 'Grilling' },
      { label: 'D', value: 'Poaching' },
    ],
    answer: 'C',
  },
  {
    topic: 'Home Management',
    question: 'Which of the following is the first step in managing household tasks effectively?',
    options: [
      { label: 'A', value: 'Assign tasks to family members' },
      { label: 'B', value: 'Create a cleaning schedule' },
      { label: 'C', value: 'Prioritize tasks based on urgency' },
      { label: 'D', value: 'Hire a cleaning service' },
    ],
    answer: 'C',
  },
  {
    topic: 'Time Management',
    question: 'Which of the following is an effective time management technique?',
    options: [
      { label: 'A', value: 'Multitasking to finish more tasks at once' },
      { label: 'B', value: 'Focusing on one task at a time' },
      { label: 'C', value: 'Procrastinating until the last minute' },
      { label: 'D', value: 'Avoiding any breaks during tasks' },
    ],
    answer: 'B',
  },
  {
    topic: 'Financial Planning',
    question: 'What is the purpose of an emergency fund?',
    options: [
      { label: 'A', value: 'To pay for luxury items' },
      { label: 'B', value: 'To cover unexpected expenses or emergencies' },
      { label: 'C', value: 'To invest in the stock market' },
      { label: 'D', value: 'To save for vacation only' },
    ],
    answer: 'B',
  },
  {
    topic: 'Food and Nutrition',
    question: 'Which of the following foods is a good source of dietary fiber?',
    options: [
      { label: 'A', value: 'Chicken' },
      { label: 'B', value: 'Spinach' },
      { label: 'C', value: 'Rice' },
      { label: 'D', value: 'Apples' },
    ],
    answer: 'D',
  },
  {
    topic: 'Clothing and Textiles',
    question: 'What is the main purpose of using a pattern when sewing clothes?',
    options: [
      { label: 'A', value: 'To create a unique design' },
      { label: 'B', value: 'To ensure consistent fit and shape' },
      { label: 'C', value: 'To save time by avoiding creativity' },
      { label: 'D', value: 'To make clothes look more fashionable' },
    ],
    answer: 'B',
  },
  {
    topic: 'Household Management',
    question: 'What is the primary purpose of a household inventory?',
    options: [
      { label: 'A', value: 'To track household expenses' },
      { label: 'B', value: 'To record the quantity of household items' },
      { label: 'C', value: 'To organize family schedules' },
      { label: 'D', value: 'To evaluate the market value of items' },
    ],
    answer: 'B',
  },
  {
    topic: 'Food and Nutrition',
    question: 'Which nutrient is essential for building and repairing tissues in the body?',
    options: [
      { label: 'A', value: 'Carbohydrates' },
      { label: 'B', value: 'Proteins' },
      { label: 'C', value: 'Fats' },
      { label: 'D', value: 'Vitamins' },
    ],
    answer: 'B',
  },
  {
    topic: 'Time Management',
    question: 'Which of the following is an effective strategy for managing time?',
    options: [
      { label: 'A', value: 'Avoiding deadlines' },
      { label: 'B', value: 'Setting realistic goals and prioritizing tasks' },
      { label: 'C', value: 'Ignoring personal time' },
      { label: 'D', value: 'Procrastinating until the last moment' },
    ],
    answer: 'B',
  },
  {
    topic: 'Home Management',
    question: 'Which of the following helps maintain a safe home environment?',
    options: [
      { label: 'A', value: 'Regularly checking electrical systems' },
      { label: 'B', value: 'Ignoring potential hazards' },
      { label: 'C', value: 'Not fixing broken appliances' },
      { label: 'D', value: 'Avoiding cleaning tasks' },
    ],
    answer: 'A',
  },
  {
    topic: 'Consumer Awareness',
    question: "What is a common method for protecting consumers' rights?",
    options: [
      { label: 'A', value: 'Buying only from well-known brands' },
      { label: 'B', value: 'Reading product labels carefully' },
      { label: 'C', value: 'Making purchases without asking questions' },
      { label: 'D', value: 'Avoiding all warranties' },
    ],
    answer: 'B',
  },
  {
    topic: 'Food Preparation',
    question: 'What is the key benefit of meal planning?',
    options: [
      { label: 'A', value: 'It makes cooking faster and more efficient' },
      { label: 'B', value: 'It guarantees no cooking will be needed' },
      { label: 'C', value: 'It helps reduce grocery costs' },
      { label: 'D', value: 'It prevents the need to clean the kitchen' },
    ],
    answer: 'C',
  },
  {
    topic: 'Clothing and Textiles',
    question: 'Which of the following is the most common natural fiber used in clothing?',
    options: [
      { label: 'A', value: 'Nylon' },
      { label: 'B', value: 'Cotton' },
      { label: 'C', value: 'Polyester' },
      { label: 'D', value: 'Acrylic' },
    ],
    answer: 'B',
  },
  {
    topic: 'Financial Planning',
    question: 'What is the purpose of an insurance policy?',
    options: [
      { label: 'A', value: 'To ensure you never have to pay for health care' },
      { label: 'B', value: 'To protect against financial loss from unexpected events' },
      { label: 'C', value: 'To save for retirement' },
      { label: 'D', value: 'To cover all luxury expenses' },
    ],
    answer: 'B',
  },
  {
    topic: 'Food and Nutrition',
    question: 'Which of the following is the primary function of carbohydrates in the body?',
    options: [
      { label: 'A', value: 'To build muscles' },
      { label: 'B', value: 'To provide energy' },
      { label: 'C', value: 'To regulate body temperature' },
      { label: 'D', value: 'To improve digestion' },
    ],
    answer: 'B',
  },
  {
    topic: 'Household Cleaning',
    question:
      'Which of the following is the most effective way to remove grease from kitchen surfaces?',
    options: [
      { label: 'A', value: 'Using warm water only' },
      { label: 'B', value: 'Using a mixture of vinegar and baking soda' },
      { label: 'C', value: 'Using a dry cloth' },
      { label: 'D', value: 'Using soap and water only' },
    ],
    answer: 'B',
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
      subject: subjectId,
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
