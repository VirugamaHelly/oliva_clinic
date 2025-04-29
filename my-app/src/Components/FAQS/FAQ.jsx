import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FAQ.css'; // Your styles

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // default to false

  const authHeader = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.role) {
      console.log("Logged-in role:", user.role);
      const normalizedRole = user.role.trim().toLowerCase();
      if (normalizedRole === "admin") {
        setIsAdmin(true);
      }
    }
  
    fetchFaqs();
  }, []);
  
  

  const fetchFaqs = async () => {
    try {
      const res = await axios.get('http://localhost:8981/faqs/all');
      setFaqs(res.data);
    } catch (err) {
      console.error('Error fetching FAQs:', err);
    }
  };

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question || !answer) {
      alert('Please fill in both fields');
      return;
    }
    try {
      await axios.post('http://localhost:8981/faqs/add', { question, answer });
      setQuestion('');
      setAnswer('');
      fetchFaqs();
    } catch (err) {
      console.error('Error adding FAQ:', err);
    }
  };

  return (
    <div className="faqs">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      {/* Only admin can see this form */}
      {isAdmin && (
        <form className="faq-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <textarea
            placeholder="Enter Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>
          <button type="submit">Add FAQ</button>
        </form>
      )}

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h4>{faq.question}</h4>
              <span style={{ color: '#00B6BE' }}>
                {openIndex === index ? '-' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
