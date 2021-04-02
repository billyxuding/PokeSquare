import React from 'react';
import goodJob from '../Images/goodjob.jpeg';
import Logout from '../Components/Logout';

const Success = () => {
    return (
        <>
            <h1>Thanks for your order!</h1>
            <img src={ goodJob } alt="good job!" className="success-page-message"/>
            <h3>Please pick up your order at 1823 Eastlake Ave E Seattle 98102</h3>
            <iframe
                title="Poke Square location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.5051970231693!2d-122.32795098424347!3d47.63574879395685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490150600ae3361%3A0x5d49fb8382bab02f!2sPoke%20Square!5e0!3m2!1sen!2sus!4v1617382419617!5m2!1sen!2sus"
                allowFullScreen="" loading="lazy" className="block">
            </iframe>
            <Logout />
        </>
    )
};

export default Success;