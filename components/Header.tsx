import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="px-6">
      <Link href="/">Home</Link>
      <Link href="/movies">
        <></>
      </Link>
    </div>
  );
};

export default Header;
