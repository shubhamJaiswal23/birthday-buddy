import { useState } from 'react';
import data from './data';
import Person from './Person';

const App = () => {
  const [userdata, setUserData] = useState(data);

  const handleClick = () => {
    setUserData([]);
  };

  return (
    <main>
      <div className="container">
        <h3>{userdata.length} birthdays today</h3>
        <ul>
          {userdata.map((user) => {
            return <Person user={user} key={user.id} />;
          })}
        </ul>
        <button className="btn" onClick={handleClick}>
          clear All
        </button>
      </div>
    </main>
  );
};
export default App;
