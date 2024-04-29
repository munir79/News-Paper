import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const Login = () => {
  const {SignIn}=useContext(AuthContext);
    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        SignIn(email,password)
        .then(user=>{
          const result=user.result;
          console.log(result);
        })
        .catch(error=>{
          console.log(error);
        })

    }
    return (
        <div>
            <Navbar></Navbar>
           <div>
           <h3 className="text-center text-3xl"> Log in Your account</h3>
        <form onSubmit={handleLogin} className=" md:w-3/4 lg:1/2 mx-auto" >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
       <p className="text-center"> do not have an Account ? <Link className="text-green-700" to="/registar">Registar</Link> </p>
           </div>
        </div>
    );
};

export default Login;