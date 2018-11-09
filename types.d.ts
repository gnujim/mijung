/**
 * Makes it so you can import from .json files and TS will
 * know that the value is *ambiguous*
 */
declare module '*.json' {
  const value: unknown;
  export default value;
}

/**
 * Will tell typescript that when you import from .jpg files
 * the type will be a string (because webpack converts it to a string)
 */
declare module '*.jpg' {
  const value: string;
  export default value;
}

/**
 * Will tell typescript that when you import from .png files
 * the type will be a string (because webpack converts it to a string)
 */
declare module '*.png' {
  const value: string;
  export default value;
}
