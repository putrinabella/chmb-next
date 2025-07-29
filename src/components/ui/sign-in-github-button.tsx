"use client";
import { loginGithub } from "@/lib/actions/auth";
export const SignInGithubButton = () => {
  return (
    <button
      onClick={() => loginGithub()}
      type="button"
      className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
    >
      <i className="fa-brands fa-github text-gray-800" />
      <span className="text-sm font-medium text-gray-700">
        Masuk dengan GitHub
      </span>
    </button>
  );
};
