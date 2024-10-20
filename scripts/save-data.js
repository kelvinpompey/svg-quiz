export async function postOptionsAndQuestion() {
  // The question and options
  const questionTitle =
    'Who was declared a National Hero of St.Vincent and the Grenadines in 2002?';
  const options = [
    'Joseph Chatoyer',
    'Captain William Bligh',
    'Captain William Bright',
    'Chistopher Columbus',
  ];

  const optionIds = [];

  // Post each option to the options API and save the returned ID
  for (const option of options) {
    try {
      const optionResponse = await fetch(
        'https://svgquiz-api.aboutsvg.com/api/collections/options/records',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: option,
          }),
        }
      );

      const optionData = await optionResponse.json();
      const optionId = optionData.id;
      optionIds.push(optionId);
    } catch (error) {
      console.error(`Error posting option "${option}":`, error.message);
      return;
    }
  }

  // Post the question with the saved option IDs to the question API
  try {
    const questionResponse = await fetch(
      'https://svgquiz-api.aboutsvg.com/api/collections/questions/records',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: questionTitle,
          options: optionIds,
        }),
      }
    );

    const questionData = await questionResponse.json();
    console.log('Question posted successfully:', questionData);
  } catch (error) {
    console.error('Error posting question:', error.message);
  }
}

// Run the function
postOptionsAndQuestion();
