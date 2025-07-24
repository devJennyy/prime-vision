import React, { createContext, useContext, useState } from "react";

type UserContextType = {
  displayName: string;
  setDisplayName: (name: string) => void;
  version: number;
  profileImage: string | null;
  setProfileImage: (uri: string | null) => void;
};

const UserContext = createContext<UserContextType>({
  displayName: "Your name here",
  setDisplayName: () => {},
  version: 0,
  profileImage: null,
  setProfileImage: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [displayName, setDisplayNameState] = useState("Your name here");
  const [version, setVersion] = useState(0);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const setDisplayName = (name: string) => {
    setDisplayNameState(name);
    setVersion((prev) => prev + 1);
  };

  return (
    <UserContext.Provider
      value={{ displayName, setDisplayName, version, profileImage, setProfileImage }}
    >
      {children}
    </UserContext.Provider>
  );
};
