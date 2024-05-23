import { authKey } from "@/constant/authkey";
import { deleteCookies } from "./deleteCookies";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const logoutUser = (router:AppRouterInstance) => {
    localStorage.removeUser();
    deleteCookies(authKey, 'refreshToken')
    router.push('/')
    router.refresh();
  };