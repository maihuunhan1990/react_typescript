import { useState } from 'react';
const users = [
  { name: 'Nhan', age: 20 },
  { name: 'jojo', age: 20 },
  { name: 'molly', age: 20 },
];
interface userProps {
  name?: string;
  age?: number;
}
const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<userProps>();

  const onclick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={onclick}> Find User</button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
