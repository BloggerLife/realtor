import SideBar from "@/components/SideBar";
import React from "react";

export const metadata = {
  title: "Guest House Assist",
  description: "Guest House Assist | Vacation rentals, cabins, houses, & more",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className=" flex gap-6">
        <SideBar />
        <div className="flex-1 mr-6 overflow-hidden">{children}</div>
      </main>
    </>
  );
};

export default layout;
