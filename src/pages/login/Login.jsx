import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const loginMutation = useLogin();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    mobile: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    loginMutation.mutate(form, {
      onSuccess: (data) => {
        localStorage.setItem("token", data.data.token);
        alert("Login success");
        navigate("/profile");
      },
      onError: (err) => {
        alert(err?.response?.data?.message || "Login failed");
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4" style={{ background: "radial-gradient(circle at center, var(--bg-surface-hover), var(--bg-color))" }}>
      <div className="card glass-panel animate-fade-in w-full" style={{ maxWidth: "420px" }}>
        <div className="text-center mb-8">
          <h2 className="text-gradient" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Welcome Back</h2>
          <p className="text-secondary">Sign in to your account to continue</p>
        </div>

        <form onSubmit={login} className="flex flex-col gap-4">
          <div className="input-group">
            <label className="text-sm font-medium mb-2 block" style={{ color: "var(--text-secondary)" }}>Mobile Number</label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              required
              className="w-full"
            />
          </div>

          <div className="input-group">
            <label className="text-sm font-medium mb-2 block" style={{ color: "var(--text-secondary)" }}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="w-full"
            />
          </div>

          <button 
            type="submit" 
            className="btn primary lg w-full mt-4" 
            disabled={loginMutation.isPending}
            style={{ backgroundImage: "var(--accent-gradient)", border: "none" }}
          >
            {loginMutation.isPending ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-secondary">
            Don't have an account? <Link to="/register" className="font-medium hover:text-accent-hover" style={{ color: "var(--accent-color)" }}>Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}