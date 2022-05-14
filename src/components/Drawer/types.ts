import { UIEvent } from 'react';

export interface IDrawerProps {
  className?: string;
  theme?: 'dark' | 'white';
  direction?: 'left' | 'right' | 'bottom';

  open: boolean;
  fullScreen?: boolean;
  closeButton?: boolean;
  noValidateOverflow?: boolean;

  onClose: () => void;
  onScroll: (event: UIEvent<HTMLDivElement>) => void;

  children: React.ReactNode;
}
