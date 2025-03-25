import React, { useEffect } from 'react';

const Alert = ({ type, text, onClose }) => {
  useEffect(() => {
    // Auto-dismiss alert after 5 seconds
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 5000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
      <div
        className={`p-2 ${
          type === "danger" ? "bg-bittersweet-500" : "bg-cornmilk-500"
        } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}
        role='alert'
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-bittersweet-500 text-cornmilk-500" : "bg-cornmilk-500 text-bittersweet-500"
          } uppercase px-2 py-1 text-xs font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className='mr-2 text-left'>{text}</p>
      </div>
    </div>
  );
};

export default Alert;