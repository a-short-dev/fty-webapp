"use client";
import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import useAddCustomerModal from "@/app/hooks/useAddCustomerModal";
import Header from "../components/Header";
import Link from "next/link";
import formatCurrency from "@/app/libs/formatCurrency";
import { SafeUser } from "@/app/types";

interface UserClientProps {
  users: SafeUser;
}
const UserMangementClient = (users: UserClientProps) => {
  const addCustomerModal = useAddCustomerModal();
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="p-4">
        <div className="pb-4 flex space-x-4">
          <button
            onClick={addCustomerModal.onOpen}
            className="bg-blue-200 py-2 px-4  backdrop:before:  rounded font-medium text-center"
          >
            Add New User
          </button>

          <button className="bg-purple-200 py-2 px-4 backdrop:before: rounded font-medium text-center">
            Add New Staff
          </button>
        </div>
        <div className="w-full p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid">Total</span>
            <span className="hidden sm:grid">Date Joined</span>
          </div>
          <ul>
            {users.map(
              (
                customer: {
                  firstName: string;
                  lastName: string;
                  name: {
                    first:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                  };
                  total: number;
                  date:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                },
                id: number
              ) => (
                <Link
                  key={id}
                  href={{
                    pathname: "/admin/view-user/[uid]",
                    query: { uid: id + 1 },
                  }}
                >
                  <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <BsPersonFill className="text-purple-800" />
                      </div>
                      <p className="pl-4">
                        {customer?.firstName + " " + customer?.lastName}
                      </p>
                    </div>
                    <p className="text-gray-600 pl-4 sm:text-left text-right">
                      {customer?.name.first}@gmail.com
                    </p>
                    <p className="hidden md:flex pl-4">
                      {formatCurrency(customer?.total)}
                    </p>
                    <div className="sm:flex hidden justify-between items-center">
                      <p>{customer?.date}</p>
                      <BsThreeDotsVertical />
                    </div>
                  </li>
                </Link>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserMangementClient;
