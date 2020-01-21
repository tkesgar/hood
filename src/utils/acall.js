export function defaultErrorHandler(err) {
  // eslint-disable-next-line no-console
  console.error(err);
}

export default function acall(value, errorHandler = defaultErrorHandler) {
  if (typeof value === "function") {
    return acall(value(), errorHandler);
  }

  if (value && value.then) {
    return value.then(undefined, errorHandler);
  }

  return Promise.resolve(value);
}
