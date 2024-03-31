"use client"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import React from "react";
import { logout } from "@/actions/logout";
import { EncryptedScopedIdToken } from "@/app/core/types";

const UserButton: React.FC<{ user: EncryptedScopedIdToken, address: string; logout: () => void }> = ({ user, address, logout }) => {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              size: "sm",
              src: user.picture ?? undefined,
            }}
            className="transition-transform"
            description={<div className="text-left">
              {user.email}
              <br />
              {address}
            </div>}
            name={user.name ?? "User"}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          {/* <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">{user.name ?? user.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">
            Analytics
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem> */}
          <DropdownItem key="logout" color="danger" onClick={logout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
export default UserButton