"use client";

import { useState } from "react";

type Props = {
  password: string;
  onChange: (val: string) => void;
  error?: string;
};

export const PasswordField = ({ password, onChange, error }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
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
          onChange={(e) => onChange(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="inline-flex items-center px-3 bg-gray-100 text-gray-500 text-sm rounded-r-lg border-l border-gray-300"
        >
          <i
            className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
          />
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
