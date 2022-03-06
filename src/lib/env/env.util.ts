/**
 * Type safe getter for an environment variable
 * @param key Environment variable name
 * @returns Environment variable "{@link key}"
 * @throws Throws when environment variable "{@link key}" is not defined
 */
export const getEnvVar = (key: string) => {
  const envVar = process.env[key];
  if (envVar === undefined) {
    throw new TypeError(`environment variable "${key}" is not defined`);
  }
  return envVar;
};
