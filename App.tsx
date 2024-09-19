import { AppNavigator } from "./src/navigation/AppNavigator";
import React, { useState } from "react";
import { UserContext } from "./src/contexts/UserContext";
import { User } from "./src/types/user";

export default function App() {
  const [user, setUser] = useState<User>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppNavigator />
    </UserContext.Provider>
  );
}
