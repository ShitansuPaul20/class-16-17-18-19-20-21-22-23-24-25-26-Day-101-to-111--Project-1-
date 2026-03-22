import { useContext } from "react";
import { ProfileContext } from "../profileContext";

export default function useUserProfile() {
  const context = useContext(ProfileContext);
  
  if (!context) {
    throw new Error("useUserProfile must be used within a ProfileProvider");
  }
  
  return context;
};

