"use client";
import AppBarWithSideNav from "@/components/AppBar/AppBar";
import { ReactNode } from "react";
import { mockMenuItems } from "@/components/AppBar/mocks";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <AppBarWithSideNav drawerItems={mockMenuItems} />
            <div>{children}</div>
        </div>
    );
}
