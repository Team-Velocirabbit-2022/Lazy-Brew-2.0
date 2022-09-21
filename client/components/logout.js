import { GoogleLogout } from "react-google-login"

const clientId= '830039597158-6nhs6p1u8eabg6k01r5qtnam1u1fa75q.apps.googleusercontent.com';
const clientSecret = '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';

function Logout() {
    
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




export default GoogleLogout;