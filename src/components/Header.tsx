import { Fragment } from "react";
import user from "../assets/user.svg";
export default function Header() {
  return (
    <Fragment>
      <header
        className="bg-buttonHover p-5
      max-w-7xl mx-auto md:flex md:flex-row md:justify-center 
      md:items-center gap-3 rounded-md my-3 custom-small:grid custom-small:place-items-center"
      >
        <img src={user} width={70} height={70} alt="Logo Principal" />
        <h1 className=" text-white font-black text-5xl  text-center uppercase">
          some users from github!
        </h1>
      </header>
    </Fragment>
  );
}
