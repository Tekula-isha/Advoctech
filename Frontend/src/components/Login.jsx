import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Login = () => {
  const navigate = useNavigate();
  
  // ✅ Define state for login form
  const [data, setData] = useState({ email: '', password: '' });

  // ✅ Define error states
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Handle input changes
  const handleChange = ({ target: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Reset previous errors

    try {
      console.log("🔹 Sending Login Request:", data);
      
      const res = await axios.post("http://localhost:5000/api/auth/login", data);

      if (res.data.success) {
        console.log("✅ Login Successful:", res.data);

        // ✅ Store JWT token in sessionStorage
        sessionStorage.setItem("token", res.data.token);
        
        // ✅ Redirect user to Home Page after login
        navigate('/home'); 
      } else {
        console.log("❌ Login Failed:", res.data.message);
        setError("Invalid credentials. Please try again.");
        setIsError(true);
      }
    } catch (err) {
      console.error("❌ Login Error:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Login failed. Try again.");
      setIsError(true);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>

            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
              autoComplete="off"
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
              
            />

            <button type="submit" className={styles.green_btn}>Sign In</button>

            {isError && <p style={{ color: "red" }}>{error}</p>}  {/* ✅ Show error messages */}
          </form>
        </div>

        <div className={styles.right}>
          <h1>New Here?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
