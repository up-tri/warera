import { Warera } from "./classes/warera";
import { IDateOfJapaneseCalendar } from "./interfaces/i-date-of-japanese-calendar";

function warera(date: IDateOfJapaneseCalendar | Date): Warera {
  if (date instanceof Date) {
    return Warera.createFromDate(date);
  } else {
    return Warera.create(date);
  }
}

export default warera;
