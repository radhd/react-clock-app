import { useEffect, useState } from "react";
import { fetchData } from "./fetchData";
import { MoreButton } from "./MoreButton";

interface ShowTimeApi {
  ip: "46.49.47.202";
  continentCode: "AS";
  continentName: "Asia";
  countryCode: "GE";
  countryName: "Georgia";
  countryNameNative: "საქართველო";
  officialCountryName: "Georgia";
  regionCode: "TB";
  regionName: "Tbilisi";
  cityGeoNameId: 611717;
  city: "Tbilisi";
  latitude: 41.6959;
  longitude: 44.832;
  capital: "Tbilisi";
  phoneCode: "995";
  countryFlagEmoj: "🇬🇪";
  countryFlagEmojUnicode: "U+1F1EC U+1F1EA";
  isEu: false;
  borders: ["ARM", "AZE", "RUS", "TUR"];
  topLevelDomains: [".ge"];
}

export function ShowTime() {
  const [time, setTime] = useState("");
  const [isNight, setIsNight] = useState<Boolean>(false);
  const [capital, setCapital] = useState<string>("Unknown");
  const [countryCode, setCountryCode] = useState<string>("Unknown");
  const [border, SetBorder] = useState<string>("Unknown");

  setInterval(() => time, 60000);

  useEffect(() => {
    setIsNight(isEvening());
    setTime(getCurrentTime());
    const fetchData = async () => {
      const result = await getData();
      setCapital(result.capital);
      setCountryCode(result.countryCode);

      const formatBorders = result?.borders
        .map((border) => border.charAt(0) + border.slice(1).toLowerCase())
        .join(", ");
      const borderResult = `${capital} borders with: ${formatBorders}.`;
      SetBorder(borderResult);
    };

    // fetchData();
  }, []);

  const getCurrentTime = (): string => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZoneName: "short",
    };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  const isEvening = (): boolean => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    return currentHour >= 18;
  };

  return (
    <>
      <div>
        {isNight ? (
          <p>GOOD EVENING, IT'S CURRENTLY</p>
        ) : (
          <p>GOOD MORNING, IT'S CURRENTLY</p>
        )}
        <p>{time}</p>
        <p>
          IN {capital}, {countryCode}
        </p>
      </div>
    </>
  );
}

const getData = async () => {
  const url =
    "https://apiip.net/api/check?accessKey=244ebdbb-afe3-48e6-984e-6085bce18489";
  try {
    const fetch: ShowTimeApi = await fetchData(url);
    return fetch;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
