import Profile from "./Profile/Profile";
import user from '../data/user.json';
import './App.css';


export const App = () => {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
