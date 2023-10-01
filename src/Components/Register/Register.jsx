import  { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import auth from '../../Firebase/Config';

const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setRegisterError('Password must be at least 6 characters long.');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('Password must contain at least one uppercase letter.');
      return;
    }

    // Reset error and success messages.
    setRegisterError('');
    setSuccess('');

    // Create user.
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess('Registration successful.');
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="p-4 border m-4 rounded-xl border-1 border-indigo-500/100 text-center">
      <h2 className="border-2 border-red-500 p-4 m-2 rounded-2xl">Please Register</h2>
      <br />
      <form onSubmit={handleRegistration}>
        <input
          className="rounded-xl px-10 py-3"
          type="email"
          name="email"
          placeholder="Your email"
          required
        />
        <br /> <br />
        <div className="relative">
          <input
            className="rounded-xl px-10 py-3 pl-12"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Your password"
            required
          />
          <span
            className="absolute top-2 left-4 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <br /> <br />
        <button className="btn btn-ghost border-1 border-indigo-500/100 hover:bg-red-300">
          Register
        </button>
      </form>
      {registerError && <p className="text-red-700">{registerError}</p>}
      {success && <p className="text-green-800">{success}</p>}
    </div>
  );
};

export default Register;
