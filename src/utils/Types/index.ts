type NumberRange<Min extends number, Max extends number> =
  | Min
  | Max
  | (Min & number)
  | (Max & number);

export type {NumberRange};
