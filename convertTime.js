// Convert 12hrs time to 24hrs time
// input string - 01:02 PM

const convert12to24 = (time12h) => {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours) + 12;
  }

  return `${hours}:${minutes}`;
};

console.log(convert12to24("01:02 PM"));
console.log(convert12to24("04:06 PM"));
console.log(convert12to24("12:02 AM"));
console.log(convert12to24("12:02 PM"));
