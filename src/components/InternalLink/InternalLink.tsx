import Link from 'next/link';

import { IInternalLinkProps } from './types';

import scss from './InternalLink.module.scss';

function InternalLink(props: IInternalLinkProps) {
  const linkClass = [scss.link];

  const target = props.target ? props.target : '_self';
  let link = props.to;

  if (typeof props.to !== 'string' && props?.to?.pathname) link = props.to.pathname;
  if (props.className) linkClass.push(props.className);

  return (
    <Link href={props.to}>
      <a
        onClick={props.onClick}
        className={linkClass.join(' ')}
        href={link as string}
        target={target}
      >
        {props.children}
      </a>
    </Link>
  );
}

export default InternalLink;
