import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  background?: string;
  className?: string;
  onClick?: any;
  type?: any;
}

const Button = ({
  children,
  color,
  background,
  className,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <div
      style={{
        backgroundColor: `${background}`,
        color: `${color}`,
      }}
      onClick={onClick}
      className={`w-full h-[50px] rounded-full text-[${color}] duration-150 shadow-md relative`}
    >
      <button type={type} className="w-full h-full font-bold flex items-center justify-center gap-2">{children}</button>
    </div>
  );
};

export default Button;
