import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string
}

const Input = ({ type, placeholder, value, onChange, name }: InputProps) => {
  return (
    <div className="w-full">
      <input
        onChange={onChange}
        style={{
          borderBottom: "1px solid #252525",
        }}
        className="outline-none bg-transparent pb-2 placeholder-black w-full"
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
