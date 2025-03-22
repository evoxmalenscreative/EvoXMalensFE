import React, { useState } from "react";

const BookingAlert = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 transition-opacity">
      <div className="relative mx-auto my-6 w-full max-w-md">
        <div className="relative flex flex-col rounded-lg bg-white shadow-lg">
          {/* Alert Header */}
          <div className="flex items-center justify-between rounded-t border-b p-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Pemberitahuan
            </h3>
            <button
              onClick={onClose}
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Alert Content */}
          <div className="p-6">
            <div className="mb-5 text-center">
              <svg
                className="mx-auto mb-4 h-14 w-14 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-800">
                Maaf halaman saat ini sedang tidak bisa diakses mohon dicoba
                lagi nanti
              </h3>
              <p className="text-gray-600">
                Halaman sedang dalam maintance/pengembangan
              </p>
            </div>
            <button
              onClick={onClose}
              className="mx-auto block rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingAlert;
