import generateContent from '../services/ai.service.js';
const getReview = async (req, res) => {
  const prompt = req.body.code;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await generateContent(prompt);
    return res.status(200).json({ response });
  } catch (error) {
    console.error('Error generating content:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default getReview;
