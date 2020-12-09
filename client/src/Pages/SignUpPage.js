import {useParams} from "react-router-dom";
// import api from '../Scripts/api';
import { OrgSignUp } from "../Components/OrgSignUp";
import { UserSignUp } from "../Components/UserSignUp";

export function SignUpPage() {
    const type = useParams().type;
    // console.log(type);
    return (
        <div>
            {type === "user" ? <h3>User Sign Up</h3> : <h3>Organization Sign Up</h3>}
        {type === "user" ? <UserSignUp /> : <OrgSignUp />}
        </div>
    );

}