import { useEffect, useState } from "react";
// import { fetchData } from "./fetchData";

export function ShowTime() {
  const [time, setTime] = useState("");
  const [isNight, setIsNight] = useState<Boolean>(false);

  setInterval(() => time, 60000);

  useEffect(() => {
    // getData();
    setIsNight(isEvening());
    setTime(getCurrentTime());
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
    <div>
      {isNight ? (
        <p>GOOD EVENING, IT'S CURRENTLY</p>
      ) : (
        <p>GOOD MORNING, IT'S CURRENTLY</p>
      )}
      <p>{time}</p>
      <p>IN TBILISI, GE</p>
    </div>
  );
}

// interface showTimeData {
//   data: {
//     ip: "46.49.47.202";
//     hostname: null;
//     type: "v4";
//     range_type: range_type;
//     connection: connection;
//     location: location;
//     tlds: [".ge"];
//     timezone: timezone;
//     security: security;
//     domains: domains;
//   };
// }
// interface range_type {
//   type: "PUBLIC";
//   description: "Public address";
// }
// interface connection {
//   asn: 16010;
//   organization: "Magticom Ltd.";
//   isp: "MAGTI-BROADBAND";
//   range: "46.49.47.0/24";
// }
// interface location {
//   geonames_id: 890443227;
//   latitude: 41.69392013549805;
//   longitude: 44.833526611328125;
//   zip: "0100";
//   continent: continent;
//   country: country;
//   city: city;
//   region: region;
// }
// interface continent {
//   code: "AS";
//   name: "Asia";
//   name_translated: "Asia";
//   geonames_id: 6255147;
//   wikidata_id: "Q48";
// }
// interface country {
//   alpha2: "GE";
//   alpha3: "GEO";
//   calling_codes: ["+995"];
//   currencies: [
//     {
//       symbol: "GEL";
//       name: "Georgian Lari";
//       symbol_native: "GEL";
//       decimal_digits: 2;
//       rounding: 0;
//       code: "GEL";
//       name_plural: "Georgian laris";
//       type: "fiat";
//     },
//   ];
//   emoji: "🇬🇪";
//   ioc: "GEO";
//   languages: [
//     {
//       name: "Georgian";
//       name_native: "ქართული";
//     },
//   ];
//   name: "Georgia";
//   name_translated: "Georgia";
//   timezones: ["Asia/Tbilisi"];
//   is_in_european_union: false;
//   fips: "GG";
//   geonames_id: 85633163;
//   hasc_id: "GE";
//   wikidata_id: "Q230";
// }
// interface city {
//   fips: null;
//   alpha2: null;
//   geonames_id: 890443227;
//   hasc_id: null;
//   wikidata_id: "Q994";
//   name: "Tbilisi";
//   name_translated: "Tbilisi";
// }
// interface region {
//   fips: "GG51";
//   alpha2: "GE-TB";
//   geonames_id: 1108805945;
//   hasc_id: "GE.TB";
//   wikidata_id: null;
//   name: "Tbilisi";
//   name_translated: "Tbilisi";
// }

// interface timezone {
//   id: "Asia/Tbilisi";
//   current_time: "2024-06-13T20:57:00+04:00";
//   code: "+04";
//   is_daylight_saving: false;
//   gmt_offset: 14400;
// }

// interface security {
//   is_anonymous: null;
//   is_datacenter: null;
//   is_vpn: null;
//   is_bot: null;
//   is_abuser: null;
//   is_known_attacker: null;
//   is_proxy: null;
//   is_spam: null;
//   is_tor: null;
//   proxy_type: null;
//   is_icloud_relay: null;
//   threat_score: null;
// }

// interface domains {
//   count: null;
//   domains: [];
// }

// https://api.ipbase.com/v2/info?apikey=ipb_live_StnSCmSs93H7SaeCHqhBTADSrqxyMD66BLqb8RGe

// const key = 244ebdbb-afe3-48e6-984e-6085bce18489
// const url = https://apiip.net/api/check?accessKey=
// const getData = async () => {
//     const url =
//       "https://api.ipbase.com/v2/info?apikey=ipb_live_StnSCmSs93H7SaeCHqhBTADSrqxyMD66BLqb8RGe";
//     try {
//       //   const fetch: showTimeData = await fetchData(url);
//       //   const data = fetch.data;
//       //   const dataIsDay: boolean = data.timezone.is_daylight_saving;
//       //   const dataCity = `In ${data.region.name}, ${data.country.alpha2}`;
//       //   console.log(dataIsDay, dataCity);
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     }
//   };
