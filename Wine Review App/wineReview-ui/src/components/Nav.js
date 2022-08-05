import React from 'react';
import { Link } from 'react-router-dom';
import {IoCreateOutline} from 'react-icons/io5';
import {AiOutlineHome} from 'react-icons/ai';




function Navigation() {
    return (
        <>
            <Link to="/" exact>Home<AiOutlineHome/></Link>
            <Link to="/add-wine">Create New Review<IoCreateOutline/></Link>
        </>
    );
}

export default Navigation;