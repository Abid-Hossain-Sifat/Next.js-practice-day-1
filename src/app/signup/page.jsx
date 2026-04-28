"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: signUpError } = await authClient.signUp.email({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      callbackURL: "/dashboard",
    });

    setLoading(false);

    if (signUpError) {
      setError(signUpError.message || "Signup failed");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 rounded-xl shadow bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="input input-bordered w-full"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="input input-bordered w-full"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          minLength={8}
          required
          className="input input-bordered w-full"
        />
        {error ? <p className="text-red-500 text-sm">{error}</p> : null}
        <button type="submit" disabled={loading} className="btn btn-primary w-full">
          {loading ? "Creating account..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
