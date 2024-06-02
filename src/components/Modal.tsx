import { ReactNode, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 300);
  };

  if (!isOpen && !isAnimating) {
    return null;
  }

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed inset-0 bg-black/30 bg-opacity-75 transition-opacity flex items-center`}
      style={{ backdropFilter: 'blur(5px)' }}>
      <div className='bg-white w-1/2 mx-auto mt-20 p-4 rounded shadow'>
        {children}
        <button
          className='close-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
          onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};
