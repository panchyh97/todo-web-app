import { ReactNode } from 'react';

interface ITabLayout {
  children: ReactNode;
}

export const TabLayout = ({ children }: ITabLayout) => {
  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      {children}
    </div>
  );
};
