import { ReactNode } from "react";

interface IBottomSheet {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  children: ReactNode;
}

export const BottomSheet = ({
  isOpen,
  setIsOpen,
  children
}: IBottomSheet) => {
  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleBottomSheet}
        ></div>
      )}
      <div
        className={`fixed pb-4 bottom-0 left-0 right-0 bg-white rounded-t-lg shadow-lg transform transition-transform duration-300 z-20 max-w-lg mx-auto ${isOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
      >
        {children}
      </div>
    </>
  );
};