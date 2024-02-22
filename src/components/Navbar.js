import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-10 inset-x-1 max-w-2xl mx-auto z-50 font-Montserrat", className)}>
      <Menu setActive={setActive}>
      <Link href="/">
        <Image src="/athena-logo.svg" alt="Logo" width={100} height={100} />
        </Link>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <Link href="/about">
          <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
        </Link>
        <Link href="/contact">
          <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
