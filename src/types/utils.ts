export type TImplements<T, R extends T> = R;

export type TGenericObject = {
  [key: string]: any;
};

export type TEmptyObject = {
  [key: string]: never;
};
