export const translateType = (type: string) => {
  switch (type) {
    case "full-time":
      return "Teljes munkaidős";
    case "part-time":
      return "Részmunkaidős";
    case "internship":
      return "Gyakornoki";
    default:
      return "";
  }
};

export const formatNumber = (num: number) => {
  if (num.toString().length < 7) {
    return num
      .toString()
      .slice(0, num.toString().length - 3)
      .concat(".")
      .concat(num.toString().slice(num.toString().length - 3));
  } else {
    return num
      .toString()
      .slice(0, 1)
      .concat(".")
      .concat(num.toString().slice(1, 2))
      .concat(" M");
  }
};
