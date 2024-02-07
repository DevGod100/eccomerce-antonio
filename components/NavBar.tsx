"use client";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { mainLinks } from "@/constants";
import { userLinks } from "@/constants";
import { User } from "@prisma/client";

//icons
import {
  AiOutlineUser,
  AiOutlineHeart,
} from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { TbBracketsAngle } from "react-icons/tb";
import CartIcon from "@/app/(shoppingcart)/components/ui/CartIcon";

interface NavBarProps{
  user: User
}
const NavBar: React.FC<NavBarProps> = ({user}) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const openMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const userMenuHandler = () => {
    setOpenUserMenu(!openUserMenu);
  };

  return (
    <nav>
      <div className="main-container border-b border-1 flex justify-between items-center py-2 relative">
        <Link href={"/"}>
          <div className="flex gap-1 items-center text-xl font-medium text-black">
            <h1>DEV-THREADS</h1>
            <TbBracketsAngle />
          </div>
        </Link>

        <ul className="flex gap-10 max-md:hidden">
          {mainLinks.map((link, index) => (
            <Link key={index} href={link.route}>
              <li>{link.label}</li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-5 text-xl [&>*]:cursor-pointer">
          <CartIcon />
          <AiOutlineHeart />
          <div className="max-md:hidden" onClick={userMenuHandler}>
            <AiOutlineUser />
          </div>

          <div className="md:hidden" onClick={openMenuHandler}>
            {openMobileMenu ? <MdClose /> : <FiMenu />}
          </div>
        </div>

        {/* THE USER MENU */}
        {openUserMenu && (
          <div className="z-10 absolute right-0 top-[40px] w-28 bg-gray-700 shadow-md rounded-md p-4 text-white max-md:hidden text-center">
            {!user ? (
              <ul>
                <Link href={"/sign-in"}>
                  <li>Log In</li>
                </Link>
                <Link href={"/sign-up"}>
                  <li>Sign Up</li>
                </Link>
              </ul>
            ) : (
              <ul>
                {userLinks.map((link) => (
                  <Link href={link.route}>
                    <li>{link.label}</li>
                  </Link>
                ))}
                <li className="cursor-pointer" onClick={() => signOut()}>
                  Sign Out
                </li>
              </ul>
            )}
          </div>
        )}
        {/* <div className="flex gap-5 text-xl [&>*]:cursor-pointer"></div> */}
      </div>
      {/* other menu */}
      {openMobileMenu && (
        <div className="md-hidden">
          <div className="absolute right-5 width-48 bg-gray-700 py-5 rounded-md shadow-md p-4 text-white text-center z-[99999]F">
            <ul className="flex flex-col gap-5">
            {mainLinks.map((link, index) => (
            <Link key={index} href={link.route}>
              <li>{link.label}</li>
            </Link>
          ))}
            {!user ? (
              <>
                <Link href={"/sign-in"}>
                  <li>Log In</li>
                </Link>
                <Link href={"/sign-up"}>
                  <li>Sign Up</li>
                </Link>
              </>
            ) : (
              <>
                {userLinks.map((link) => (
                  <Link href={link.route}>
                    <li>{link.label}</li>
                  </Link>
                ))}
                <li className="cursor-pointer" onClick={() => signOut()}>
                  Sign Out
                </li>
              </>
            )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
