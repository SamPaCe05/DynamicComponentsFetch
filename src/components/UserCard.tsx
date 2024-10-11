import { Fragment, useEffect, useState } from "react";
import type { userInfo } from "../types";
import user from "../assets/user.svg";
import people from "../assets/people.svg";
import repository from "../assets/repository.svg";
export default function UserCard({
  avatar_url,
  followers_url,
  id,
  login,
  repos_url,
  html_url,
}: userInfo) {
  // const token = import.meta.env.VITE_GITHUB_TOKEN;

  const [followers, setFollowers] = useState<number>(0);
  const [repos, setRepos] = useState<number>(0);

  async function fectCard(url: string, url2: string) {
    const s = performance.now();

    try {
      const [responseF, responseR] = await Promise.all([
        fetch(url, {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        }),
        fetch(url2, {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        }),
      ]);
      const [dataF, dataR] = await Promise.all([
        responseF.json(),
        responseR.json(),
      ]);
      setFollowers(dataF.length);
      setRepos(dataR.length);
      const e = performance.now();

      console.log(e - s, "ms UserCard");
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
        className="bg-ghBg rounded-lg text-white font-bold p-4 shadow-md space-y-6"
        key={id}
      >
        <div className="flex flex-row align-middle justify-center gap-3">
          <img src={user} alt="github Logo" width={32} height={32} />
          <h1 className="text-center overflow-hidden">{login}</h1>
        </div>

        <img
          className="rounded-full w-48 h-48 mx-auto"
          src={avatar_url}
          alt="Profile User"
        />
        <div className="flex justify-around">
          <div className="flex flex-row gap-3">
            <img src={people} width={28} height={28} alt="followers" />
            <h2>{followers}</h2>
          </div>
          <div className="flex flex-row gap-3">
            <img src={repository} width={28} height={28} alt="repository" />
            <h2>{repos}</h2>
          </div>
        </div>

        <button
          onClick={() => (window.location.href = html_url)}
          className="bg-buttonGh capitalize hover:bg-buttonHover rounded-lg py-3 w-full block mx-auto cursor-pointer"
        >
          visit profile
        </button>
      </article>
    </Fragment>
  );
}
