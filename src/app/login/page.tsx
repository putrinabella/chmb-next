"use client";
import Link from "next/link";
import { useState } from "react";
import "@/styles/auth.css";
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setErrors({ email: "Email tidak valid." });
    } else if (password.length < 8) {
      setErrors({ password: "Kata sandi minimal 8 karakter." });
    } else {
      setErrors({});
      // Kirim ke backend di sini (axios/fetch)
      console.log({ email, password });
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* Left Section - Logo + Background */}
      <div className="lg:w-1/2 w-full flex-1 full-image-section">
        <div className="position-relative">
          <img src="/images/logo.png" alt="Logo" className="logo" />
          <div className="circle"></div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex-1 flex items-center justify-center auth-form-container bg-gray-50 min-h-screen">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Masuk ke Akun Anda
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Masukkan email dan kata sandi untuk masuk.
          </p>

          <form
            onSubmit={handleSubmit}
            id="login"
            className="space-y-5 text-left"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="flex rounded-lg shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
                <span className="inline-flex items-center px-3 bg-gray-100 text-gray-500 text-sm rounded-l-lg border-r border-gray-300">
                  <i className="fa-solid fa-envelope" />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="flex-1 block w-full rounded-r-lg border-0 px-3 py-2 text-sm focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Kata Sandi
              </label>
              <div className="flex rounded-lg shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
                <span className="inline-flex items-center px-3 bg-gray-100 text-gray-500 text-sm rounded-l-lg border-r border-gray-300">
                  <i className="fa-solid fa-lock" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="flex-1 block w-full px-3 py-2 text-sm border-0 focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="inline-flex items-center px-3 bg-gray-100 text-gray-500 text-sm rounded-r-lg border-l border-gray-300"
                >
                  <i
                    className={`fa-solid ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  />
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Masuk
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="mx-3 text-sm text-gray-400">atau</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <i className="fa-brands fa-google text-red-500" />
              <span className="text-sm font-medium text-gray-700">
                Masuk dengan Google
              </span>
            </button>

            {/* GitHub Login */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <i className="fa-brands fa-github text-gray-800" />
              <span className="text-sm font-medium text-gray-700">
                Masuk dengan GitHub
              </span>
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-sm text-gray-600 text-center space-y-2">
            <Link
              href="/password/reset-request"
              className="text-blue-600 hover:underline"
            >
              Lupa kata sandi?
            </Link>
            <div>
              Belum punya akun?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Daftar di sini
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
