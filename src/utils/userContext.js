import { createContext } from "react";

const userContext = createContext({
    user: "Yashodeep",
});

userContext.displayName = "UserContext"

export default userContext;

