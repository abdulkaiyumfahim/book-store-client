import { getAuth, sendEmailVerification } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import SocialLogin from "../Login/SocialLogin";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../../Shared/Loading";

const SignUp = () => {
  const auth = getAuth();
  const { user, createUser, loading } = useContext(AuthContext);

  if(loading){
    return <Loading></Loading>
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then((user) =>{
        const result = user.user;
        console.log(result);
        form.reset()
        verifyEmail()
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorMessage);
        // ..
      });
  };



  const verifyEmail = () =>{
    sendEmailVerification(auth.currentUser)
  .then(() => {
    toast('Please check your email & verify your email address')
    // Email verification sent!
    // ...

  });
  }
  return (
    <form onSubmit={handleCreateUser} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-1/2">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p>Already Register? Please <Link className="btn" to="/login">Login</Link></p>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignUp" />
            </div>
           <div className="text-center"> <SocialLogin></SocialLogin></div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default SignUp;
