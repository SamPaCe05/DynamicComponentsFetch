import { Fragment, useEffect, useState } from "react";
import type { userInfo } from "./types";
import UserCard from "./components/UserCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import spinner from "./assets/spinner.svg";
function App() {
  const gitHubApi = "https://api.github.com/users";
  const [profile, setProfile] = useState<userInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  async function fetching(url: string): Promise<userInfo[]> {
    const s = performance.now();

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });
      const data = await response.json();
      setProfile(data);
      const e = performance.now();
      console.log(e - s, "ms App");
      return data;
    } catch (error) {
      alert(`Error de tipo ${error}`);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetching(gitHubApi);
  }, []);

  if (loading) {
    return (
      <div className="m-auto w-48 relative h-screen">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={spinner} alt="spinner" />
        </div>
      </div>
    );
  }
  return (
    <Fragment>
      <Header></Header>

      <section
        className="max-w-7xl mx-auto grid lg:grid-cols-5 
      custom-medium:grid-cols-4 sm:grid-cols-3 grid-cols-2 
      justify-around gap-3"
      >
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

      <Footer></Footer>
    </Fragment>
  );
}

export default App;
