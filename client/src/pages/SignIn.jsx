import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
export default function SignIn() {

  const [formData, setformData] = useState({});
  const [error,setError] = useState(null);
  const [loading,setLoading]=useState(false);
const navigate = useNavigate();
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

const handleSubmit = async(e)=>{
  e.preventDefault(); 
  try{
    setLoading(true);
    const res = await fetch('/api/auth/sign-in',
    {
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json();
    if(data.success ==false){
      setError(data.message);
      setLoading(false);
      return
    }
    setLoading(false);
    console.log(formData);
    setError(null);
    navigate('/');
  }
 catch(error){
  setLoading(false);
  setError(error.message);
 }
};
   return (
    <div className="p-3 max-w-lg m-auto">
    <h1 className="text-center text-3xl font-semibold my-7">Sign In</h1>
    <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
     
      <input
        placeholder="email"
        type="email"
        className="border p-3 rounded-lg"
        id="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        className="border p-3 rounded-lg"
        id="password"
        onChange={handleChange}
      />
      <button disabled={loading}className="bg-emerald-700 text-white rounded-lg uppercase p-3 hover:opacity-90 disabled:opacity-80 ">
       {loading ? 'Loading...' : 'Sign In'}
      </button>
      </form>
      <div className="flex gap-2 mt-2">
        <p>Dont have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
   {error && <p className="text-red-500 mt-5">{error}</p> }
    </div>
  );
}

