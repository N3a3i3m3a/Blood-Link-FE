import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('https://blood-link-be.onrender.com/api/contact-us/listMessage'); // Adjust the URL to your API endpoint
      if (Array.isArray(response.data)) {
        setMessages(response.data);
      } else {
        throw new Error('API response is not an array');
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`https://blood-link-be.onrender.com/api/contact-us/deleteMessage/${id}`); // Adjust the URL to your API endpoint
      setMessages(messages.filter(message => message.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-4">Error loading messages: {error.message}</p>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Messages from Donors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {messages.map((message) => (
          <div key={message.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{message.fullName}</h3>
            <p className="text-gray-700"><strong>Email:</strong> {message.email}</p>
            <p className="text-gray-700 mb-2"><strong>Message:</strong> {message.message}</p>
            <p className="text-gray-700"><strong>Date:</strong> {new Date(message.createdAt).toLocaleDateString()}</p>
            <button
              onClick={() => deleteMessage(message.id)}
              className="mt-2 py-1 px-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
