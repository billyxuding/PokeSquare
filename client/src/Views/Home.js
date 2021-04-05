import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-ui/core';

const Home = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <h1>Hi</h1>
            <Button variant="contained" color="primary" size="small" onClick={() => loginWithRedirect()}>
                Login
            </Button>
        </>
    )
};

export default Home;