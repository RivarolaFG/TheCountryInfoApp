"use client";
import { getCountryList } from "@/helpers/petitions";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountryList()
      .then((responseData) => {
        setCountries(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full h-full flex items-center  justify-center flex-col text-white ">
      <div className="text-7xl my-4 "> COUNTRIES </div>
      <div className="w-4/5 items-center  justify-center flex-col flex ">
        {countries ? (
          <div>
            {countries.map((country, id) => (
              <a
                key={id}
                className=" items-center flex-col flex mb-2 hover:underline "
                href={`./country/${country.name}_${country.countryCode}`}
              >
                <div className="text-4xl">{country.countryCode} </div>
                <div className="text-2xl"> {country.name} </div>
              </a>
            ))}
          </div>
        ) : (
          <div>No countries available</div>
        )}
      </div>
    </div>
  );
}
