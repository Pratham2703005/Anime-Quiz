import { processData } from "../processData";
export const generateMCQs = async (subject) => {
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCTJq8VtjKaRJnH5zMGrTSJ6ojEPetssn0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Generate 50 MCQs for the subject: ${subject}. The response should only contain the following format and next MCQ continue from that line and so on: !@!question:String!@!incorrect_answers:String|String|String!@!correct_answer:String!@!difficulty:String!@!category:String!@!`
            }]
          }]
        }),
      });
      
      const data = await response.json();
      console.log("DATA: ", data.candidates[0].content.parts[0].text)
      const mcqs = processData(data.candidates[0].content.parts[0].text);
      console.log("GENERATED: ", mcqs)
      return mcqs;
    } catch (error) {
      console.error('Error generating MCQs:', error);
      return [];
    }
  };
  