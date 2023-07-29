const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date: string): string => {
  const [year, month, day] = date.substring(0, 10).split("-");
  const formatedMonth = months[+month - 1];
  const fullDate = `${+day < 10 ? "0" + day : day}, ${formatedMonth}, ${year}`;

  return fullDate;
};

export default formatDate;
