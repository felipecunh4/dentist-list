import { SyntheticEvent } from 'react';

import { LinkProps } from 'next/link';

export interface IInternalLinkProps extends Omit<LinkProps, 'href'> {
  to: LinkProps['href'];
  className?: string;
  children: React.ReactNode;
  onClick?: (e: SyntheticEvent<any>) => void;
  target?: string;
}
