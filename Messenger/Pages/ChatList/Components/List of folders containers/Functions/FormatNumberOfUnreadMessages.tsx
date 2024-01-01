export const formatNumber = (num: number): string => {
    if (num < 1000) {
      return num.toString();
    } else if (num < 100000) {
      if (num % 1000 !== 0) {
        const thousands = (num / 1000).toFixed(1);
        return thousands.endsWith(".0")
          ? thousands.slice(0, -2) + "K"
          : thousands + "K";
      } else {
        return (num / 1000).toFixed(0) + "K";
      }
    } else if (num < 1000000) {
      if (num % 1000 !== 0) {
        const thousands = (num / 1000).toFixed(0);
        return thousands.endsWith(".0")
          ? thousands.slice(0, -2) + "K"
          : thousands + "K";
      } else {
        return (num / 1000).toFixed(0) + "K";
      }
    } else if (num < 100000000) {
      if (num % 1000000 !== 0) {
        const millions = (num / 1000000).toFixed(1);
        return millions.endsWith(".0")
          ? millions.slice(0, -2) + "M"
          : millions + "M";
      } else {
        return (num / 1000).toFixed(0) + "M";
      }
    } else if (num < 1000000000) {
      if (num % 1000000 !== 0) {
        const millions = (num / 1000000).toFixed(0);
        return millions.endsWith(".0")
          ? millions.slice(0, -2) + "M"
          : millions + "M";
      } else {
        return (num / 1000000).toFixed(0) + "M";
      }
    } else {
      if (num % 1000000000 !== 0) {
        const billions = (num / 1000000000).toFixed(1);
        return billions.endsWith(".0")
          ? billions.slice(0, -2) + "B"
          : billions + "B";
      } else {
        return (num / 1000000000).toFixed(0) + "B";
      }
    }
    return "0";
  };