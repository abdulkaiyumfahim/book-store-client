import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
    return (
        <div className='p-6'>
            <button onClick={handleGoogleSignIn} className="btn btn-active btn-ghost">GoogleSignIn</button>
        </div>
    );
};

export default SocialLogin;