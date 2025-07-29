"use client";
import "@/styles/auth.css";
import Cookies from "js-cookie";
import Link from "next/link";
import { useState } from "react";

import api from "@/lib/axios";

import { SignInGithubButton } from "@/components/ui/sign-in-github-button";
import { SignInGoogleButton } from "@/components/ui/sign-in-google-button";
import { SubmitButton } from "@/components/ui/submit-button";
import { Divider } from "@/components/ui/divider";
import { EmailField } from "@/components/ui/email-field";
import { PasswordField } from "@/components/ui/password-field";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setErrors({ email: "Email tidak valid." });
      return;
    }

    if (password.length < 8) {
      setErrors({ password: "Kata sandi minimal 8 karakter." });
      return;
    }

    setErrors({});

    try {
      // Ambil CSRF token
      await api.get("/sanctum/csrf-cookie");

      const csrf = Cookies.get("XSRF-TOKEN");

      const response = await api.post(
        "/api/v1/login",
        {
          email,
          password,
        },
        {
          headers: {
            Accept: "application/json",
            "X-XSRF-TOKEN": csrf ?? "",
          },
        }
      );

      console.log("Login sukses:", response.data);
      // Simpan session/token atau redirect di sini
    } catch (error: any) {
      console.error("Error login:", error);

      if (error.response?.status === 422) {
        const resErrors = error.response.data.errors;
        setErrors({
          email: resErrors?.email?.[0],
          password: resErrors?.password?.[0],
        });
      } else if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Terjadi kesalahan, coba lagi nanti.");
      }
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
            <EmailField
              email={email}
              onChange={setEmail}
              error={errors.email}
            />

            {/* Password */}
            <PasswordField
              password={password}
              onChange={setPassword}
              error={errors.password}
            />

            {/* Submit */}
            <SubmitButton />

            {/* Divider */}
            <Divider />

            {/* Google Login */}
            <SignInGoogleButton />

            {/* GitHub Login */}
            <SignInGithubButton />
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
