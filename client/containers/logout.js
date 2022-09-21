import { GoogleLogout } from "react-google-login"
import React from 'react'
const clientId= '830039597158-6nhs6p1u8eabg6k01r5qtnam1u1fa75q.apps.googleusercontent.com';
const clientSecret = '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';

function Logout() {
    
    const onSuccess = () => {
        console.log("Log out successfull!")
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}




export default Logout;