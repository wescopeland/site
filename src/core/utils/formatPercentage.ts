export const formatPercentage = (input: number) => {
  const sanitized = input / 100;

  return sanitized.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });
};
