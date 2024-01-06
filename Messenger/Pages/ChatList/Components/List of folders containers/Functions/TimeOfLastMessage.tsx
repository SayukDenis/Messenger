import Message from "../../../../../dao/Models/Message";

const formattedTime = (lastMessage:Message): string => {
    if (!lastMessage) return "";
    const now: Date = new Date();
    const timeDiff: number = now.getTime() - lastMessage.sendingTime.getTime();
    const dayInMilliseconds: number = 24 * 60 * 60 * 1000;
    const weekInMilliseconds: number = 7 * dayInMilliseconds;
    const yearInMilliseconds: number = 365 * dayInMilliseconds;
    const minutes: number = lastMessage.sendingTime.getMinutes();
    const hours: number = lastMessage.sendingTime.getHours();
    const day: number = lastMessage.sendingTime.getDate();
    const month: number = lastMessage.sendingTime.getMonth();
    const minutesString: string =
      minutes < 10 ? `0${minutes}` : minutes.toString();
    const hoursString: string = hours < 10 ? `0${hours}` : hours.toString();
    const daySting: string = day < 10 ? `0${day}` : day.toString();
    const monthString: string = month < 10 ? `0${month}` : month.toString();

    if (timeDiff < dayInMilliseconds) {
      return `${hoursString}:${minutesString}`;
    } else if (timeDiff < weekInMilliseconds) {
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayOfWeek: string = daysOfWeek[lastMessage.sendingTime.getDay()];
      return dayOfWeek.slice(0, 3);
    } else if (timeDiff < yearInMilliseconds) {
      return `${daySting}.${monthString}`;
    } else {
      return `${daySting}.${monthString}.${
        lastMessage.sendingTime.getFullYear() - 2000
      }`;
    }
  };
  export default formattedTime