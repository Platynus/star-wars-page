import Link from "next/link";
import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

const Header = () => {
  return (
    <div className="px-6 ">
      <Link href="/">Home</Link>
      <Link href="/movies">
        <FiFacebook></FiFacebook>
      </Link>
      <Link href="/movies">
        <FiInstagram></FiInstagram>
      </Link>
      <Link href="/movies">
        <FaTiktok></FaTiktok>
      </Link>
    </div>
  );
};

export default Header;
