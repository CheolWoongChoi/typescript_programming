export type FirstOrderFunc<T, R> = (T) => R;
export type SecondOrderFunc<T, R> = (T) => FirstOrderFunc<T, R>;
export type ThridOrderFunc<T, R> = (T) => SecondOrderFunc<T, R>;


