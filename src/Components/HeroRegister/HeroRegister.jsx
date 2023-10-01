import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Config";


const HeroRegister = () => {
    const handleRegistration = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
          console.log(result.user);

        })
        .catch(error=>{
          console.log(error);

        })
    
    
    }
    return (
        <div className="hero min-h-screen bg-base-200 items-center flex justify-center">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form onSubmit={handleRegistration}>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
       </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default HeroRegister;