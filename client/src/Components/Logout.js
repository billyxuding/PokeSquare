import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-ui/core';

const Logout = () => {
    const { logout } = useAuth0();

    return (
        <Button variant="contained" size="small" onClick={() => logout({ returnTo: "http://localhost:3000/home" })}>
            Logout
        </Button>
    )
};

export default Logout;