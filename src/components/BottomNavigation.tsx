interface Props {
  isOpen: boolean;
}

export function BottomNavigation(props: Props) {
  const { isOpen } = props;

  const now = new Date();

  const currentTimezone = (date: object): string => {
    const timezoneOffset = date.getTimezoneOffset();
    const offsetHours = Math.floor(Math.abs(timezoneOffset) / 60);
    const sign = timezoneOffset > 0 ? "-" : "+";
    const formattedOffset = `GMT${sign}${String(offsetHours).padStart(2, "0")}`;
    return formattedOffset;
  };

  const getDayOfYear = (now: object): number => {
    const startOfYear = new Date(now.getFullYear(), 0, 0); // January 1 of the current year
    const diff = now - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24; // milliseconds in one day
    const dayOfYear = Math.floor(diff / oneDay);

    return dayOfYear;
  };

  const getWeekNumber = (now: object) => {
    return Math.round(getDayOfYear(now) / 7);
  };

  const getDayOfWeek = (now: object) => {
    const daysOfWeek: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek: number = now.getDay();

    const dayOfWeekName = daysOfWeek[dayOfWeek];
    return dayOfWeekName;
  };

  const mainElement = document.getElementById("main");

  // if (mainElement) {
  //   if (isOpen) {
  //     mainElement.style.marginBottom = "250px";
  //   } else {
  //     mainElement.style.marginBottom = "0";
  //   }
  // }

  return (
    <>
      {isOpen ? (
        <div
          className={`w-full overflow-hidden bg-blue-500 p-4 text-white transition-all duration-300 ${isOpen ? "min-h-64" : ""}`}
        >
          <p>current timezone: {currentTimezone(now)}</p>
          <p>day of the year: {getDayOfYear(now)}</p>
          <p>day of the week: {getWeekNumber(now)}</p>
          <p>week number: {getDayOfWeek(now)}</p>
        </div>
      ) : null}
    </>
  );
}
