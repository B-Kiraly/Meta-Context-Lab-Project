import {useUser} from "../providers/UserContext"
import { useTheme } from '../providers/ThemeContext';

function LoggedInUser({buttonStyle}) {
    const { theme } = useTheme();
    const {user, userSwap} = useUser()
    return (
        <div style={{color: theme === "light" ? "black" : "white", textAlign: "center", marginTop: "2em"}}>
            <h3>Current User: <span className="username">{user.name} ({user.email})</span></h3>
            <button onClick={userSwap} style={buttonStyle}>Click to swap users </button>
        </div>
    )
}

export default LoggedInUser