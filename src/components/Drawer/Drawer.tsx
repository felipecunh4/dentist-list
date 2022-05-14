import { CSSProperties, UIEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { IDrawerProps } from './types';

import scss from './Drawer.module.scss';

import CloseSVG from './images/close.svg';

function Drawer(props: IDrawerProps) {
  const drawerWrapperClass = [scss.drawerWrapper];
  const drawerContentClass = [scss.drawerContent];
  const [isOpen, setIsOpen] = useState(false);
  const [shouldMount, setShouldMount] = useState(false);

  const onCloseDrawer = () => {
    if (props.onClose) props.onClose();
  };

  const onContentScroll = (event: UIEvent<HTMLDivElement>) => {
    if (props.onScroll) props.onScroll(event);
  };

  const getStyle = () => {
    const style: CSSProperties = {};

    if (props.theme === 'white') {
      style.filter = 'invert(1)';
    }

    return style;
  };

  useEffect(() => {
    if (props.open) {
      setShouldMount(true);

      setTimeout(() => setIsOpen(true), 100);
    } else {
      setIsOpen(false);

      setTimeout(() => setShouldMount(false), 100);
    }
  }, [props.open]);

  useEffect(() => {
    if (!props.noValidateOverflow) {
      document.body.style.overflow = '';

      if (isOpen) {
        document.body.style.overflow = 'hidden';
      }
    }
  }, [isOpen, props.noValidateOverflow]);

  if (isOpen) {
    drawerWrapperClass.push(scss.drawerOpen);
    drawerContentClass.push(scss.drawerAnimation);
  }

  if (props.theme) drawerContentClass.push(scss[props.theme]);
  if (props.fullScreen) drawerContentClass.push(scss.fullScreen);
  if (props.direction) drawerContentClass.push(scss[props.direction]);
  if (props.className) drawerContentClass.push(props.className);

  const DrawerComponent = (
    <div className={drawerWrapperClass.join(' ')}>
      <div className={scss.drawerContainer} onClick={onCloseDrawer} aria-hidden="true" />
      <div
        className={drawerContentClass.join(' ')}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onScroll={onContentScroll}
        aria-hidden="true"
      >
        {props.closeButton && (
          <CloseSVG style={getStyle()} className={scss.close} onClick={onCloseDrawer} />
        )}
        {props.children}
      </div>
    </div>
  );

  return shouldMount
    ? createPortal(DrawerComponent, document.getElementById('drawers-portal')!)
    : null;
}

Drawer.defaultProps = {
  theme: 'dark',
  direction: 'left',
} as IDrawerProps;

export default Drawer;
