import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full p-y-4 px-16 flex items-center justify-between">
      <div className="shrink-0">
        <Image
          alt="logo"
          src={"/Logo-Lettermark.png"}
          width={100}
          height={100}
        />
      </div>

      <button
        className="hidden max-[600px]:block z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="space-y-2">
          <span
            className={`block w-8 h-0.5 bg-black transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-black ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-black transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </div>
      </button>

      <div
        className={`
        max-[600px]:fixed max-[600px]:inset-0
        max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center 
        max-[600px]:justify-center max-[600px]:z-40
        ${
          isMenuOpen
            ? "max-[600px]:translate-x-0"
            : "max-[600px]:translate-x-full"
        }
        transition-transform duration-300 ease-in-out
      `}
        style={
          isMenuOpen
            ? {
                background:
                  "linear-gradient(90deg, hsla(211, 66%, 87%, 1) 0%, hsla(348, 67%, 88%, 1) 50%, hsla(272, 26%, 72%, 1) 100%)",
              }
            : {}
        }
      >
        <NavigationMenu>
          <NavigationMenuList className="min-w-96 flex justify-around max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-8">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink>Portfolio</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink>About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant={"primary"}>Hire me</Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Header;
