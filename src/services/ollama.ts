export const generateEmailReply = async (emailContent: string) => {
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama2',
        prompt: `Generate a professional email reply to the following email:\n\n${emailContent}\n\nReply:`,
        stream: false
      })
    });

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error generating reply:', error);
    return 'Error generating reply. Please ensure Ollama is running locally.';
  }
};
