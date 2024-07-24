export const formatDate = (timestamp: number) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const now = new Date(timestamp);

  return `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`; //February 12 2013
};
