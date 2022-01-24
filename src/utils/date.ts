export function sortTimes(alpha: string, beta: string) {
  const alphaTimes = new Date(alpha).getTime();
  const betaTimes = new Date(beta).getTime();
  return alphaTimes - betaTimes;
}
export function getNewDate(alpha: string, beta: string) {
  const alphaDate = new Date(alpha);
  const betaDate = new Date(beta);
  const alphaDateStr = alphaDate.toDateString();
  const betaDateStr = betaDate.toDateString();

  return alphaDateStr === betaDateStr
    ? undefined
    : alphaDate.getTime() - betaDate.getTime() < 0
    ? transformDateString(betaDateStr)
    : transformDateString(alphaDateStr);
}
export function transformDateString(dateStr: string) {
  const dateObj = new Date(dateStr);
  const years = dateObj.getFullYear();

  const month = transformToDoubleDigits(dateObj.getMonth() + 1);
  const date = transformToDoubleDigits(dateObj.getDate());
  return `${years}, ${month}, ${date}`;
}

export function getTime(timestamp: string) {
  const date = new Date(timestamp);
  const hours = transformToDoubleDigits(date.getHours());
  const mins = transformToDoubleDigits(date.getMinutes());
  return `${hours}: ${mins}`;
}

function transformToDoubleDigits(input: number) {
  return input < 10 ? `0${input}` : input;
}
