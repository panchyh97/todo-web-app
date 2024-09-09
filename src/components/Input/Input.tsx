import { ChangeEvent, useState } from 'react';

interface IInput {
  label: string;
  maxLength: number;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ label, maxLength, value, onChange }: IInput) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="relative w-full mt-6">
      <input
        type="text"
        value={value}
        maxLength={maxLength}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value !== '')}
        className="w-full border-2 px-4 py-2 border-gray-300 rounded-full focus:border-yellow outline-none transition-all duration-300 ease-in-out peer"
      />

      <label
        className={`absolute left-0 transition-all font-barlow uppercase duration-300 ease-in-out ml-4 ${isFocused || value ? '-top-3 px-1 text-yellow bg-white text-sm' : 'top-2 text-gray-300'
          }`}
      >
        {label}
      </label>

      <span className={`absolute -bottom-4 right-0 text-sm text-gray-300 font-barlow ${isFocused && 'text-yellow'}`}>
        {value.length}/{maxLength}
      </span>
    </div>
  );
};