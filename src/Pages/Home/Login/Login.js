import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import SocialLogin from "./SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../../Shared/Loading";

const Login = () => {
  const { signIn, loading } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  // const [error, setError] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  const auth = getAuth();

  let from = location?.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }
  // setError(errorMessage)
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);
        fetch("https://book-store-server-nine.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // enable localStorage
            localStorage.setItem('book-token', data?.token) 
            console.log(data);
          });
        navigate(from, { replace: true });
        // navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        toast("Password reset email send. Please check your email");
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorMessage);
        // ..
      });
  };
  return (
    <form onSubmit={handleSignIn}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onBlur={handleEmailBlur}
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
                  {/* <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a> */}
                  <p>
                    Forgot password? Please{" "}
                    <Link className="btn" onClick={handlePasswordReset}>
                      Reset
                    </Link>
                  </p>
                </label>
              </div>
              <p>
                New to this Website? Please{" "}
                <Link className="btn" to="/signup">
                  SignUp
                </Link>
              </p>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="text-center">
                {" "}
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Login;
