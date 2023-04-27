import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import useAddCustomerModal from "@/app/hooks/useAddCustomerModal";
import Header from "../components/Header";
import UserMangementClient from "./UserManagementClient";
import getUser, { IUsersParams } from "@/app/actions/getUsers";
import getUsers from "@/app/actions/getUsers";

interface HomeProps {
  searchParams: IUsersParams;
}

export default async function page({ searchParams }: HomeProps) {
  const users = await getUsers(searchParams);
  return (
    <div>
      <UserMangementClient users />
    </div>
  );
}
