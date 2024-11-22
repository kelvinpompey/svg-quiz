import PocketBase from 'pocketbase';
//import { API_URL } from '~/config';
export const pb = new PocketBase('https://svgquiz-api.aboutsvg.com');

let questions = [
  {
    topic: 'Hydrology',
    question: 'What is the process by which water moves from plants to the atmosphere?',
    options: [
      { label: 'A', value: 'Evaporation' },
      { label: 'B', value: 'Transpiration' },
      { label: 'C', value: 'Condensation' },
      { label: 'D', value: 'Infiltration' },
    ],
    answer: 'B',
  },
  {
    topic: 'Soil Erosion',
    question: 'Which of the following is a human cause of soil erosion?',
    options: [
      { label: 'A', value: 'Deforestation' },
      { label: 'B', value: 'Hurricane activity' },
      { label: 'C', value: 'Earthquake' },
      { label: 'D', value: 'Volcanic eruption' },
    ],
    answer: 'A',
  },
  {
    topic: 'Rocks',
    question: 'Which type of rock is formed from cooling magma?',
    options: [
      { label: 'A', value: 'Igneous' },
      { label: 'B', value: 'Sedimentary' },
      { label: 'C', value: 'Metamorphic' },
      { label: 'D', value: 'Fossilized' },
    ],
    answer: 'A',
  },
  {
    topic: 'Economic Activities',
    question: 'Which economic activity is associated with the primary sector?',
    options: [
      { label: 'A', value: 'Manufacturing' },
      { label: 'B', value: 'Mining' },
      { label: 'C', value: 'Retail' },
      { label: 'D', value: 'Tourism' },
    ],
    answer: 'B',
  },
  {
    topic: 'Urban Planning',
    question: 'What is the term for the spreading of urban areas into rural land?',
    options: [
      { label: 'A', value: 'Urban consolidation' },
      { label: 'B', value: 'Urban sprawl' },
      { label: 'C', value: 'Urban decay' },
      { label: 'D', value: 'Urban renewal' },
    ],
    answer: 'B',
  },
  {
    topic: 'Energy',
    question: 'Which of the following is considered a non-renewable energy source?',
    options: [
      { label: 'A', value: 'Solar power' },
      { label: 'B', value: 'Wind energy' },
      { label: 'C', value: 'Coal' },
      { label: 'D', value: 'Geothermal energy' },
    ],
    answer: 'C',
  },
  {
    topic: 'Weathering',
    question:
      'What type of weathering is caused by the expansion and contraction of rocks due to temperature changes?',
    options: [
      { label: 'A', value: 'Chemical weathering' },
      { label: 'B', value: 'Biological weathering' },
      { label: 'C', value: 'Physical weathering' },
      { label: 'D', value: 'Erosional weathering' },
    ],
    answer: 'C',
  },
  {
    topic: 'Tourism',
    question: 'Which of the following is an example of ecotourism?',
    options: [
      { label: 'A', value: 'Resort vacations' },
      { label: 'B', value: 'Visiting coral reefs' },
      { label: 'C', value: 'Luxury cruises' },
      { label: 'D', value: 'Shopping in cities' },
    ],
    answer: 'B',
  },
  {
    topic: 'Earthquakes',
    question: "What is the point on the Earth's surface directly above an earthquake's origin?",
    options: [
      { label: 'A', value: 'Hypocenter' },
      { label: 'B', value: 'Epicenter' },
      { label: 'C', value: 'Fault line' },
      { label: 'D', value: 'Seismic zone' },
    ],
    answer: 'B',
  },
  {
    topic: 'Biomes',
    question: 'Which biome is characterized by low rainfall and high temperatures?',
    options: [
      { label: 'A', value: 'Tundra' },
      { label: 'B', value: 'Rainforest' },
      { label: 'C', value: 'Desert' },
      { label: 'D', value: 'Savanna' },
    ],
    answer: 'C',
  },
  {
    topic: 'Map Reading',
    question: 'What does the scale on a map represent?',
    options: [
      { label: 'A', value: 'The distance between two places in reality' },
      { label: 'B', value: 'The elevation of the terrain' },
      { label: 'C', value: 'The type of vegetation' },
      { label: 'D', value: 'The climate of the area' },
    ],
    answer: 'A',
  },
  {
    topic: 'Coastal Management',
    question: 'What is the purpose of groynes in coastal management?',
    options: [
      { label: 'A', value: 'To reduce wave energy' },
      { label: 'B', value: 'To prevent cliff erosion' },
      { label: 'C', value: 'To trap sand and reduce beach erosion' },
      { label: 'D', value: 'To protect mangrove forests' },
    ],
    answer: 'C',
  },
  {
    topic: 'Climate Zones',
    question: 'Which climate zone is most common near the equator?',
    options: [
      { label: 'A', value: 'Tundra' },
      { label: 'B', value: 'Mediterranean' },
      { label: 'C', value: 'Tropical' },
      { label: 'D', value: 'Desert' },
    ],
    answer: 'C',
  },
  {
    topic: 'Weather',
    question: 'What instrument is used to measure atmospheric pressure?',
    options: [
      { label: 'A', value: 'Thermometer' },
      { label: 'B', value: 'Barometer' },
      { label: 'C', value: 'Hygrometer' },
      { label: 'D', value: 'Anemometer' },
    ],
    answer: 'B',
  },
  {
    topic: 'Plate Tectonics',
    question: 'What is the name of the boundary where two tectonic plates collide?',
    options: [
      { label: 'A', value: 'Divergent boundary' },
      { label: 'B', value: 'Convergent boundary' },
      { label: 'C', value: 'Transform boundary' },
      { label: 'D', value: 'Subduction zone' },
    ],
    answer: 'B',
  },
  {
    topic: 'Rivers',
    question: 'What is the term for the area drained by a river and its tributaries?',
    options: [
      { label: 'A', value: 'Watershed' },
      { label: 'B', value: 'Floodplain' },
      { label: 'C', value: 'Drainage basin' },
      { label: 'D', value: 'River mouth' },
    ],
    answer: 'C',
  },
  {
    topic: 'Population',
    question: 'What is the main cause of rural-urban migration in the Caribbean?',
    options: [
      { label: 'A', value: 'Natural disasters' },
      { label: 'B', value: 'Lack of education' },
      { label: 'C', value: 'Employment opportunities in cities' },
      { label: 'D', value: 'Poor agricultural yields' },
    ],
    answer: 'C',
  },
  {
    topic: 'Coasts',
    question: 'What is a spit in coastal geography?',
    options: [
      { label: 'A', value: 'A narrow strip of land projecting into the sea' },
      { label: 'B', value: 'An area of sand dunes' },
      { label: 'C', value: 'A coral island' },
      { label: 'D', value: 'A mangrove swamp' },
    ],
    answer: 'A',
  },
  {
    topic: 'Soil',
    question: 'What is the process by which water carries nutrients away from the soil?',
    options: [
      { label: 'A', value: 'Erosion' },
      { label: 'B', value: 'Leaching' },
      { label: 'C', value: 'Deposition' },
      { label: 'D', value: 'Compaction' },
    ],
    answer: 'B',
  },
  {
    topic: 'Climate',
    question: 'What is the main characteristic of a tropical rainforest climate?',
    options: [
      { label: 'A', value: 'Low rainfall and high temperatures' },
      { label: 'B', value: 'Seasonal rainfall with moderate temperatures' },
      { label: 'C', value: 'High rainfall and high temperatures year-round' },
      { label: 'D', value: 'Low humidity with variable temperatures' },
    ],
    answer: 'C',
  },
  {
    topic: 'Resources',
    question: 'What is an example of a renewable resource in the Caribbean?',
    options: [
      { label: 'A', value: 'Petroleum' },
      { label: 'B', value: 'Coal' },
      { label: 'C', value: 'Wind energy' },
      { label: 'D', value: 'Natural gas' },
    ],
    answer: 'C',
  },
  {
    topic: 'Urbanization',
    question: 'Which of the following is a push factor for urbanization?',
    options: [
      { label: 'A', value: 'Job opportunities' },
      { label: 'B', value: 'Better healthcare' },
      { label: 'C', value: 'Poor rural infrastructure' },
      { label: 'D', value: 'Higher wages in cities' },
    ],
    answer: 'C',
  },
  {
    topic: 'Natural Hazards',
    question: 'Which type of plate boundary is most likely to cause earthquakes?',
    options: [
      { label: 'A', value: 'Divergent' },
      { label: 'B', value: 'Convergent' },
      { label: 'C', value: 'Transform' },
      { label: 'D', value: 'Subduction' },
    ],
    answer: 'C',
  },
  {
    topic: 'Ecosystems',
    question: 'Which of the following ecosystems is best known for its high biodiversity?',
    options: [
      { label: 'A', value: 'Grasslands' },
      { label: 'B', value: 'Deserts' },
      { label: 'C', value: 'Rainforests' },
      { label: 'D', value: 'Tundra' },
    ],
    answer: 'C',
  },
  {
    topic: 'Climate Change',
    question: 'What is a key impact of global warming in the Caribbean?',
    options: [
      { label: 'A', value: 'Lower sea levels' },
      { label: 'B', value: 'More frequent hurricanes' },
      { label: 'C', value: 'Less drought occurrences' },
      { label: 'D', value: 'Cooler temperatures' },
    ],
    answer: 'B',
  },
  {
    topic: 'Development',
    question: 'Which indicator is commonly used to measure the level of development in a country?',
    options: [
      { label: 'A', value: 'Birth rate' },
      { label: 'B', value: 'Gross Domestic Product (GDP)' },
      { label: 'C', value: 'Forest cover' },
      { label: 'D', value: 'Literacy rate' },
    ],
    answer: 'B',
  },
  {
    topic: 'Climate',
    question:
      'Which type of rainfall occurs when moist air is forced to rise over a mountain range?',
    options: [
      { label: 'A', value: 'Convectional rainfall' },
      { label: 'B', value: 'Orographic rainfall' },
      { label: 'C', value: 'Cyclonic rainfall' },
      { label: 'D', value: 'Frontal rainfall' },
    ],
    answer: 'B',
  },
  {
    topic: 'Population',
    question: 'What term describes the number of people living per unit area?',
    options: [
      { label: 'A', value: 'Population density' },
      { label: 'B', value: 'Birth rate' },
      { label: 'C', value: 'Population growth' },
      { label: 'D', value: 'Population distribution' },
    ],
    answer: 'A',
  },
  {
    topic: 'Rivers',
    question: 'Which feature is commonly found in the upper course of a river?',
    options: [
      { label: 'A', value: 'Delta' },
      { label: 'B', value: 'Waterfall' },
      { label: 'C', value: 'Floodplain' },
      { label: 'D', value: 'Oxbow lake' },
    ],
    answer: 'B',
  },
  {
    topic: 'Natural Hazards',
    question: 'Which natural hazard is most associated with the Caribbean region?',
    options: [
      { label: 'A', value: 'Tornadoes' },
      { label: 'B', value: 'Hurricanes' },
      { label: 'C', value: 'Earthquakes' },
      { label: 'D', value: 'Volcanic eruptions' },
    ],
    answer: 'B',
  },
  {
    topic: 'Agriculture',
    question: 'What is the main type of farming in the Caribbean?',
    options: [
      { label: 'A', value: 'Subsistence farming' },
      { label: 'B', value: 'Commercial plantation farming' },
      { label: 'C', value: 'Pastoral farming' },
      { label: 'D', value: 'Shifting cultivation' },
    ],
    answer: 'B',
  },
  {
    topic: 'Coasts',
    question: 'What is the main cause of coral reef destruction in the Caribbean?',
    options: [
      { label: 'A', value: 'Rising sea levels' },
      { label: 'B', value: 'Overfishing' },
      { label: 'C', value: 'Coastal pollution' },
      { label: 'D', value: 'Wave erosion' },
    ],
    answer: 'C',
  },
  {
    topic: 'Urbanization',
    question: 'What is a common effect of rapid urbanization in the Caribbean?',
    options: [
      { label: 'A', value: 'Improved air quality' },
      { label: 'B', value: 'Increased unemployment' },
      { label: 'C', value: 'Development of slums' },
      { label: 'D', value: 'Decreased traffic congestion' },
    ],
    answer: 'C',
  },
  {
    topic: 'Tourism',
    question: 'What is one major environmental impact of tourism in the Caribbean?',
    options: [
      { label: 'A', value: 'Deforestation' },
      { label: 'B', value: 'Water shortages' },
      { label: 'C', value: 'Coral reef degradation' },
      { label: 'D', value: 'Land reclamation' },
    ],
    answer: 'C',
  },
  {
    topic: 'Energy',
    question: 'Which renewable energy source has significant potential in the Caribbean?',
    options: [
      { label: 'A', value: 'Coal' },
      { label: 'B', value: 'Solar energy' },
      { label: 'C', value: 'Nuclear energy' },
      { label: 'D', value: 'Oil and gas' },
    ],
    answer: 'B',
  },
  {
    topic: 'Volcanoes',
    question: 'Which Caribbean island is known for the Soufrière Hills volcano?',
    options: [
      { label: 'A', value: 'Montserrat' },
      { label: 'B', value: 'St. Lucia' },
      { label: 'C', value: 'Trinidad' },
      { label: 'D', value: 'Grenada' },
    ],
    answer: 'A',
  },
  {
    topic: 'Climate Change',
    question: 'What is a major impact of climate change in the Caribbean?',
    options: [
      { label: 'A', value: 'Decreased hurricane activity' },
      { label: 'B', value: 'Sea level rise' },
      { label: 'C', value: 'Lower global temperatures' },
      { label: 'D', value: 'Reduced biodiversity' },
    ],
    answer: 'B',
  },
  {
    topic: 'Industries',
    question: 'Which of the following is a primary industry in the Caribbean?',
    options: [
      { label: 'A', value: 'Tourism' },
      { label: 'B', value: 'Fishing' },
      { label: 'C', value: 'Technology' },
      { label: 'D', value: 'Finance' },
    ],
    answer: 'B',
  },
  {
    topic: 'Ecosystems',
    question:
      'What type of ecosystem is found in the coastal areas of the Caribbean and serves as a nursery for many marine species?',
    options: [
      { label: 'A', value: 'Mangroves' },
      { label: 'B', value: 'Coral reefs' },
      { label: 'C', value: 'Grasslands' },
      { label: 'D', value: 'Rainforests' },
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
      subject: 'pr1v56dfxfs2ssn',
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
