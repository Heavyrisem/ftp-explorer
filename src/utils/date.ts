export const formatDateToYYYYDDMM = (date: Date) => {
  // Date 객체에서 연도, 월, 일을 가져옵니다.
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고 두 자리로 포맷팅합니다.
  const day = String(date.getDate()).padStart(2, "0");

  // "YYYY-DD-MM" 형식으로 날짜를 조합합니다.
  const formattedDate = `${year}-${day}-${month}`;

  return formattedDate;
};
