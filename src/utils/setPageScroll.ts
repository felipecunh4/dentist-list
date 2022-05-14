import isUndefined from 'lodash.isundefined';

export const setPageScroll = (status: boolean) => {
  const kind = status ? 'auto' : 'hidden';

  if (!isUndefined(document)) {
    document.body.style.overflow = kind;
  }
};
