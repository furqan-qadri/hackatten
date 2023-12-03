import React, { useState } from 'react';

const ApiAnswer = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const apiUrl = 'https://3573-34-106-210-166.ngrok.io/api/ask_question';

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAskQuestion = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}?question=${encodeURIComponent(question)}`);
      const data = await response.text(); // Use text() instead of json()

      setAnswer(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setAnswer('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    
      <label className="flex items-center border border-gray-300 rounded p-3 mt-4">
        
        <input type="text" placeholder="Ask any question about your generated report here"
        className="flex-1 outline-none border-none"
        value={question} onChange={handleQuestionChange} />
        <button className="bg-green-500 hover:bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center ml-2"
            onClick={handleAskQuestion} disabled={loading}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 transform rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
      </label>
      <br>
      </br>

      
      {loading && <p>Loading...</p>}
      {answer && <p>Answer: {answer}</p>}
    </div>
  );
};

export default ApiAnswer;
