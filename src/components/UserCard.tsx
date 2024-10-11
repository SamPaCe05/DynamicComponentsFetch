import { Fragment, useEffect, useState } from "react";
import type { userInfo } from "../types";

export default function UserCard({
  avatar_url,
  followers_url,
  id,
  login,
  repos_url,
  html_url,
}: userInfo) {
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const [followers, setFollowers] = useState<number>(0);
  const [repos, setRepos] = useState<number>(0);

  async function fectCard(url: string, url2: string) {
    try {
      const [responseF, responseR] = await Promise.all([
        fetch(url, {
          headers: {
            Authorization: `token ${token}`,
          },
        }),
        fetch(url2, {
          headers: {
            Authorization: `token ${token}`,
          },
        }),
      ]);
      const [dataF, dataR] = await Promise.all([
        responseF.json(),
        responseR.json(),
      ]);
      setFollowers(dataF.length);
      setRepos(dataR.length);
    } catch (error) {
      console.error("Error fetching followers or repos:", error);
    }
  }

  useEffect(() => {
    fectCard(followers_url, repos_url);
  }, [followers_url, repos_url]);

  return (
    <Fragment>
      <article
        className="bg-slate-500 rounded-lg text-white font-bold p-4 shadow-md"
        key={id}
      >
        <h1>USUARIO{login}</h1>
        <h2> SEGUIDORES{followers}</h2>
        <h2>REPOS {repos}</h2>
        <h2>ID {id}</h2>
        <h2>LINK {html_url}</h2>
        <img src={avatar_url} alt="Profile User" />
      </article>
    </Fragment>
  );
}
