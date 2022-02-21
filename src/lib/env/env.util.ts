/**
 * type safe getter for an environment variable
 *
 * @param key environment variable name
 * @returns environment variable
 */
export const getEnvVar = (key: string) => {
  const envVar = process.env[key];
  if (envVar === undefined) {
    throw new TypeError(`environment variable "${key}" is not defined`);
  }
  return envVar;
};
