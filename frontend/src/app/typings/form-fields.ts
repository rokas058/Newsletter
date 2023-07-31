export type FormFields<T> = {
  [key in keyof T]: key;
};
