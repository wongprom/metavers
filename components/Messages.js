import { useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';
import SendMessage from './SendMessage';
import { MESSAGES } from '../const';
import Message from './Message';

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  // 15 minutes
  const MINS_DURATION = 15;

  const { data, loading, error } = useMoralisQuery(
    MESSAGES,
    // (query) =>
    //   query
    //     .ascending('createdAt')
    //     .greaterThan(
    //       'createdAt',
    //       new Date(Date.now() - 1000 * 60 * MINS_DURATION)
    //     ),
    // [],
    // { live: true }
    (query) => query.ascending('createdAt'),
    [],

    { live: true }
  );

  console.log('🚀 ~ file: Messages.js ~ line 13 ~ Messages ~ data', data);
  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          variant="dark"
        />
      </div>
      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You are up to date {user.getUsername('username')}</p>
      </div>
    </div>
  );
};

export default Messages;
