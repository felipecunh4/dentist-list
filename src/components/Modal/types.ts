import React from 'react';

export interface IModalProps {
  className?: string;
  isOpen: boolean;
  containerClass?: string;
  noPortal?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
