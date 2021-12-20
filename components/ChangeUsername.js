import { useMoralis } from 'react-moralis';

const ChangeUsername = () => {
  const { setUserData, user, isUserUpdating, userError } = useMoralis();
  const setUsername = (params) => {
    const username = prompt(
      `Enter your new Username current: ${user.getUsername()}`
    );
    if (!username) return;
    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        onClick={setUsername}
        disabled={isUserUpdating}
        className="hover:text-pink-700"
      >
        Change your Username
      </button>
    </div>
  );
};

export default ChangeUsername;
