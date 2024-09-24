
import Nav from "./elements/Nav";
import SwitchMode from "./elements/SwitchMode";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/data/Header";
const Header = () => {
  return (
    <header className="header header--left">
      <div className="header__container">
        <div className="header__logo">
          <Link href="/">
            <Image
              src={logo?.image}
              alt="logo"
              width={logo?.width}
              height={logo?.height}
              className="header__logo-image"/>
          </Link>
        </div>
        <Nav />
        <SwitchMode />
      </div>
    </header>
  );
};

export default Header;
