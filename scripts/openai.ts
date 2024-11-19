import OpenAI from "openai";

const openai = new OpenAI();

export async function executePrompt({ prompt }: { prompt: string }) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "system",
        content: `Generate a list in JSON format of 10 multiple choice 
        questions about ${prompt} showing the correct answer and the 
        topic of the question. The question.options field should be an array of values and the
        correct_answer field should be one of these values. Make sure the correct answer is 
        included in the options.`,
      },
    ],
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
  });

  console.log("completion ", completion.choices[0]?.message);

  const result = JSON.parse(
    completion?.choices?.[0]?.message.content?.replace("json", "") || "[]"
  );

  return result;
}
