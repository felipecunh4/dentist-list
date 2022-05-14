export interface IButtonProps {
  to?: string;
  className?: string;

  type?: 'button' | 'submit';

  children: React.ReactNode;
  onClick?: (e: any) => void;
}
