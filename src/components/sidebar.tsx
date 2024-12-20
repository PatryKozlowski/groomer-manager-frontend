"use client";

import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { useSidebar } from "@/contexts/sidebar-provider";

export default function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width ${
          !isOpen ? "hidden" : ""
        }`}
      >
        <div className="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90 hidden"></div>
        <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <ul className="pb-2 space-y-2">
                <li>
                  <Link
                    href="/dashboard"
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <LayoutDashboard />
                    <span className="ml-2">Dashboard</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <div
        className={`fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90 ${!isOpen ? "hidden" : ""}`}
      ></div>
    </>
  );
}
