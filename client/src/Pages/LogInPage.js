import {useParams} from "react-router-dom";
// import api from '../Scripts/api';
import { OrgLogIn } from "../Components/OrgLogIn";
import { UserLogIn } from "../Components/UserLogIn";

export function LogInPage(props) {
    const type = useParams().type;
    // console.log(type);
    return (
        <div>
            {type === "user" ? <h3>User Log In</h3> : <h3>Organization Log In</h3>}
        {type === "user" ? <UserLogIn setUser={props.setUser}/> : <OrgLogIn />}
        </div>
    );

}
