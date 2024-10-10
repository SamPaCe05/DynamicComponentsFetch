import { Fragment, useEffect, useState } from "react";
import type { userInfo } from "./types";
// import Header from "./components/Header";
import UserCard from "./components/UserCard";
// import footer from "./components/footer";
function App() {
  async function fetching(url: string) {
    if (["followers, repos"].includes(url)) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data.lenght;
      } catch (error) {
        alert(`Error de tipo ${error}`);
      }
    } else {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        alert(`Error de tipo ${error}`);
      }
    }
  }
  const gitHubApi = "https://api.github.com/users";
  const [profile, setProfile] = useState<userInfo[]>([]);
  useEffect(() => {
    fetching(gitHubApi);
  }, []);

  fetching(gitHubApi);

  return (
    <Fragment>
      <section>
        {profile.map((card) => (
          <UserCard
            login={card.login}
            avatar_url={card.avatar_url}
            id={card.id}
            url={card.url}
            repos_url={card.repos_url}
            followers_url={card.followers_url}
          />
        ))}
      </section>
    </Fragment>
  );
}

export default App;
