import { Fragment, useEffect, useState } from "react";
import type { userInfo } from "./types";
import UserCard from "./components/UserCard";
function App() {
  const gitHubApi = "https://api.github.com/users";
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const [profile, setProfile] = useState<userInfo[]>([]);
  async function fetching(url: string): Promise<userInfo[]> {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      const data = await response.json();
      setProfile(data);
      return data;
    } catch (error) {
      alert(`Error de tipo ${error}`);
      throw error;
    }
  }

  useEffect(() => {
    fetching(gitHubApi);
  }, []);

  return (
    <Fragment>
      <section className="flex flex-row justify-around gap-3">
        {profile.map((card) => (
          <UserCard
            key={card.id}
            login={card.login}
            avatar_url={card.avatar_url}
            id={card.id}
            html_url={card.html_url}
            repos_url={card.repos_url}
            followers_url={card.followers_url}
          />
        ))}
      </section>
    </Fragment>
  );
}

export default App;
