export const parametersObjectToString = <Parameters>(
  parameters: Parameters
): string => {
  const parametersString = Object.keys(parameters)
    .map((key) => `${key}=${parameters[key]}`)
    .join('&');

  return parametersString;
};
