const Month = {
  short_name: [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  long_name: [
    "",
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
  ],
};

const DateConverter = (date) => {
  let date_arr = date.split("-");
  let transformed_date = "";
  if (window.innerWidth < 800) {
    transformed_date = `${Month.short_name[parseInt(date_arr[1])]} ${
      date_arr[2]
    }, ${date_arr[0]}`;
  } else {
    transformed_date = `${Month.long_name[parseInt(date_arr[1])]} ${
      date_arr[2]
    }, ${date_arr[0]}`;
  }
  return transformed_date;
};

export default DateConverter;
