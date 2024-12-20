"use client";

import { Menu, User, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useSidebar } from "@/contexts/sidebar-provider";

export default function NavBar() {
  const { toggle, isOpen } = useSidebar();

  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-[70px]">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={toggle}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
            <div className="flex flex-row justify-center items-center space-x-4">
              <div className="w-[50px] h-[50px] lg:ml-0 ml-4">
                <Image src={logo} alt="Logo" className="border rounded-full" />
              </div>
              <h2 className="lg:flex hidden text-xl font-semibold">
                Pies Na Glanc
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
            <div className="flex items-center ml-3">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outline" size="icon">
                    <User />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Wyloguj</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
