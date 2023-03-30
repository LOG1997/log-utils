export const isObject = (val: any) => val !== null && typeof val === "object";
export const isArray = (val: any) => Array.isArray(val);
export const isUndefined = (val: any) => typeof val === "undefined";
export const isNull = (val: any) => val === null;
export const isUndefinedOrNull = (val: any) => isUndefined(val) || isNull(val);
export const isFunction = (val: any) => typeof val === "function";
export const isString = (val: any) => typeof val === "string";
export const isNumber = (val: any) => typeof val === "number";
export const isBoolean = (val: any) => typeof val === "boolean";
export const isSymbol = (val: any) => typeof val === "symbol";
export const isDate = (val: any) => val instanceof Date;
export const isRegExp = (val: any) => val instanceof RegExp;
export const isPromise = (val: any) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
export const isElement = (val: any) => {
  return isObject(val) && val.nodeType === 1;
};
export const isEvent = (val: any) => {
  return isObject(val) && val.constructor.name === "Event";
};
