// add following to your typings e.g. lodash-override.d.ts
export { };

type TTuple<O> = {
  [Field in keyof O]: [field: Field, value: O[Field]];
}[keyof O];

declare module 'lodash' {
  interface LoDashStatic {
    toPairs<O>(object?: O): TTuple<O>[];
    entries<O>(object?: O): TTuple<O>[];
  }
}

declare module 'lodash' {
  interface LoDashStatic {
    keys<O>(object?: O): (keyof O)[];
  }
}