import { getUser } from "@/utils/aptos";

export const useCurrentUser = () => {
  const user = getUser()
  return user
};
