import React from 'react';

// Simple toaster component for notifications
export const Toaster = () => {
  return (
    <div id="toast-container" className="fixed top-4 right-4 z-50">
      {/* Toast notifications will appear here */}
    </div>
  );
};

// Simple toast function for notifications
export const toast = ({ title, description, variant = 'default' }) => {
  const toastElement = document.createElement('div');
  toastElement.className = `mb-4 p-4 rounded-lg shadow-lg max-w-sm transition-all duration-300 ${
    variant === 'destructive' 
      ? 'bg-red-100 text-red-800 border border-red-200' 
      : 'bg-green-100 text-green-800 border border-green-200'
  }`;
  
  toastElement.innerHTML = `
    <div class="font-semibold text-sm">${title}</div>
    ${description ? `<div class="text-sm mt-1">${description}</div>` : ''}
  `;
  
  const container = document.getElementById('toast-container');
  if (container) {
    container.appendChild(toastElement);
    
    // Remove toast after 5 seconds
    setTimeout(() => {
      toastElement.style.opacity = '0';
      toastElement.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (toastElement.parentNode) {
          toastElement.parentNode.removeChild(toastElement);
        }
      }, 300);
    }, 5000);
  }
};

export default { Toaster, toast };
