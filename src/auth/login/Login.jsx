import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login, error, loading, token } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigator = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(()=>{
    if(token){
        navigator('/dashboard');
    }
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>

        {error && (
          <p className="text-red-600 text-center mb-4 font-medium">{error}</p>
        )}
        

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white font-medium transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
