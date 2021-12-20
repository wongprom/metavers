import { useState } from 'react';
import { useMoralis } from 'react-moralis';

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    // Moralis database...
    const Messages = Moralis.Object.extend('Messages');
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user.getUsername('username'),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (message) => {
          // If save success, we end up here...
        },
        (error) => {
          // if save error, we end up here...
          console.log(
            '🚀 ~ file: SendMessage.js ~ line 23 ~ sendMessage ~ error',
            error
          );
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });

    setMessage('');
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder={`Enter a Message ${user.getUsername('username')}...`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send Message
      </button>
    </form>
  );
};

export default SendMessage;
