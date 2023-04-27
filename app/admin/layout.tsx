import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import { FiSettings } from "react-icons/fi";
import { RxDashboard, RxPerson } from "react-icons/rx";
import Link from "next/link";

interface Dash {
  children: React.ReactNode;
}
export default async function DashboardLyout({ children }: Dash) {
  const currentUser = await getCurrentUser();

  {
    /**
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState showReset title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }
 */
  }
  return (
    <div className="bg-slate-500 min-h-screen">
      <ClientOnly>
        <div className="flex">
          <div className="fixed w-20 lg:w-60 h-screen bg-white p-4 border-r-[1px] flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <Link href="/">
                <div className="bg-purple-800 p-3 rounded-lg inline-block">
                  <span className="uppercase font-extrabold text-white text-xl tracking-wide">
                    fty
                  </span>
                </div>
              </Link>
              <span className="border-b-[1px] border-gray-300 w-full p-2 "></span>
              <Link href="/admin/dashboard">
                <div className="flex items-center gap-3 mt-5">
                  <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
                    <RxDashboard size={20} />
                  </div>
                  <span className="font-medium text-base hidden lg:inline-block w-20">
                    Dashboard
                  </span>
                </div>
              </Link>
              <Link href="/admin/user-management">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
                    <RxPerson size={20} />
                  </div>
                  <span className="font-medium text-base hidden lg:inline-block w-20">
                    User Manegement
                  </span>
                </div>
              </Link>

              <Link href="/admin/settings">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block">
                    <FiSettings size={20} />
                  </div>
                  <span className="font-medium text-base hidden lg:inline-block w-20">
                    Settings
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <main className="ml-20 lg:ml-60 w-full relative">{children}</main>
        </div>
      </ClientOnly>
    </div>
  );
}
