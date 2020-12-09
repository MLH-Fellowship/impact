import {useParams} from "react-router-dom";
// import api from '../Scripts/api';
import { OrgLogIn } from "../Components/OrgLogIn";
import { UserLogIn } from "../Components/UserLogIn";

export function LogInPage() {
    const type = useParams().type;
    // console.log(type);
    return (
        <div>
            {type === "user" ? <h3>User Sign Up</h3> : <h3>Organization Sign Up</h3>}
        {type === "user" ? <UserLogIn /> : <OrgLogIn />}
        </div>
    );

}
