import { ILoadingProps } from './types';

import scss from './Loading.module.scss';

import Spinner from './images/spinner.svg';

function Loading({ ...props }: ILoadingProps) {
  const containerClass = [scss.container];

  const renderLoading = () => (
    <div className={scss.overlay}>
      <Spinner className={scss.spinner} />
    </div>
  );

  if (props.className) containerClass.push(props.className);

  return (
    <div className={containerClass.join(' ')}>
      {props.loading && renderLoading()}
      {props.children}
    </div>
  );
}

export default Loading;
