import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
//  <script src="https://accounts.google.com/gsi/client" async defer></script>
export default function GoogleReactLogin({
  client_id,
  onSuccess,
  onFailure,
  onTap,
}) {
  useEffect(() => {
    const google = window.google;
    function handleCredentialResponse(response) {
      if (response.error) {
        onFailure(response.error);
      } else {
        onSuccess(jwt_decode(response.credential));
      }
    }
    google.accounts.id.initialize({
      client_id: client_id,
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "dark", size: "large" } 
    );
    if (onTap === true) {
      google.accounts.id.prompt();
    }
  }, [client_id, onSuccess, onFailure, onTap]);

  return (
    <>
      <div id="buttonDiv"></div>
    </>
  );
}
