export async function postOptionsAndQuestion() {
  // The question and options
  const questionTitle =
    'Which famous movie was partially filmed in the St. Vincent and the Grenadines?';
  const options = ['Pirates of the Caribbean', 'Jurassic Park', 'Cast Away', 'Avatar'];
  const question15Category = 'Movies & Entertainment';
  //const question2Category = 'History & Politics';
  const politicsCategory = ['ft8398m935zpl89'];
  const peopleCategory = ['v587r801j71957h'];
  const geographyCategory = ['26o8l87netwm3c7'];
  const foodCategory = ['qlsfuu0sro16k73'];
  const sportCategory = ['x6wy9wsvgpk9e75'];

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
          categories: geographyCategory,
        }),
      }
    );

    const questionData = await questionResponse.json();

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
              question: questionData.id,
            }),
          }
        );

        const optionData = await optionResponse.json();
        //const optionId = optionData.id;
        //optionIds.push(optionId);
      } catch (error) {
        console.error(`Error posting option "${option}":`, error.message);
        return;
      }
    }
  } catch (error) {
    console.error('Error posting question:', error.message);
  }
}

// Run the function
postOptionsAndQuestion();
