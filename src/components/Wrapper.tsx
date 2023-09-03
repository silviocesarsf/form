import React from "react";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

const Wrapper = ({ children, className }: SectionProps) => {
  return (
    <section className={`min-h-screen max-w-full ${className}`}>
      {children}
    </section>
  );
};

export default Wrapper;
