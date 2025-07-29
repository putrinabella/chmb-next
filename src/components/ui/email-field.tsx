"use client";

type Props = {
  email: string;
  onChange: (val: string) => void;
  error?: string;
};

export const EmailField = ({ email, onChange, error }: Props) => {
  return (
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
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
