import React, { useEffect, useState } from 'react';
import illustration from '../../assets/thumb.png'; // Move your image here
import '../../Component/RegisterLogin/Login.css'; // Adjust the path as necessary
 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // optional, install with `npm install react-icons`
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { API_URL } from '../../env';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // toggle visibility
  const navigate = useNavigate(); // Correct naming for clarity

  // const LoginApi = async () => {
  //   setLoading(true);
  //   setError('');

  //   const myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

  //   const raw = JSON.stringify({
  //     email,
  //     password
  //   });

  //   const requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow"
  //   };

  //   try {
  //     const response = await fetch(`${API_URL}/api/admin/v1/auth/signin`, requestOptions);
  //     const result = await response.json();

  //     if (!response.ok) {
  //       toast.error(result?.error?.explanation?.[0]);
  //       throw new Error(result.message);
  //     }

  //     if (result.token) {
  //       localStorage.setItem('token', result.data); // Match the key used in ProtectedRoute
  //     }

  //     toast.success(result?.message);

  //     // Reset form fields
  //     setEmail('');
  //     setPassword('');

  //     // Redirect to /home immediately after setting the token
  //     navigate('/home', { replace: true });

  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };



   const LoginApi = () => {
  setLoading(true);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email: email, // ✅ fixed
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`${API_URL}/api/admin/v1/auth/signin`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.success === true) {
        localStorage.setItem("token", result.data);
 
        toast.success(result.message); 

        setTimeout(() => { 
            navigate("/home");
            setEmail('');
            setPassword('');
        }, 1000);
      } else {
        toast.error(result.error?.explanation || "Login failed");
      }
      setLoading(false);  
    })
    .catch((error) => {
      console.error("Login Error:", error);
      toast.error("Something went wrong");
      setLoading(false);  
    });
};
 useEffect(() => {
  if (localStorage.getItem("token")) {
    navigate("/home", { replace: true });
  }
}, []);
  return (
    <div>
          <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className='container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-dark'>
        <div className='row w-100' style={{ maxWidth: '1200px' }}>
          <div className='col-lg-6 d-none d-lg-flex justify-content-center'>
            <img src={illustration} alt="illustration" className="w-75 p-5" />
          </div>

          <div className='col-lg-6 col-12 px-4'>
            <div className="bg-dark p-4 rounded shadow">
              <h3 className="text-white mb-4">Welcome Back</h3>

              <div className="form-group mb-4">
                <label className="form-label text-white">Enter Email</label>
                <input
                  type="email"
                  className="form-control py-2"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ boxShadow: 'none', borderRadius: '10px' }}
                />
              </div>

              <div className="form-group mb-3 position-relative">
                <label className="form-label text-white">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control py-2"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ boxShadow: 'none', borderRadius: '10px' }}
                />
                <span
                  className="position-absolute top-50 end-0 translate-middle-y pe-3 text-white mt-2 pt-3"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash style={{ fontSize: '20px', color: '#ffc107' }} /> : <FaEye style={{ fontSize: '20px', color: '#ffc107' }} />}
                </span>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <label className="text-white" style={{ fontSize: '14px' }}>
                  Don't have an account yet? <span className='text-warning'>Create Account</span>
                </label>
              </div>

              <button
                type="button"
                className="btn btn-warning w-100"
                onClick={LoginApi}
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;