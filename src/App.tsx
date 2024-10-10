import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import footer from "./components/footer";
function App() {
  async function fetching(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      alert(`Error de tipo ${error}`);
    }
  }
  const gitHubApi = "https://api.github.com/users";
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetching(gitHubApi);
  }, []);

  fetching(gitHubApi);

  return (
    <Fragment>



{profile.map(card=> (
  <UserCard key={card.id} card={card} />
))}


    </Fragment>
  );
}

export default App;
