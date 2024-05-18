/* eslint-disable react/no-children-prop */
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
