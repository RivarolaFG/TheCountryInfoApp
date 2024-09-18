"use client";
import PopChartC from "@/components/chartPopulation";
import { getCountryInfo } from "@/helpers/petitions";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Country({ params }) {
  const countryId = params.countryId.split("_");
  const [country, setCountry] = useState({});
  useEffect(() => {
    getCountryInfo(params.countryId)
      .then((responseData) => {
        setCountry(responseData);
        console.log(responseData.border);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full h-full flex   items-center  justify-center flex-col text-white ">
      {country ? (
        <div className="w-full h-full flex items-center  justify-center flex-col">
          <div className="flex flex-col md:flex-row items-center mb-8 justify-center  ">
            <Image
              src={country.flag}
              alt="country flag"
              width={250}
              height={175}
            />
            <h1 className="text-7xl my-4 ">{countryId[0]}</h1>
          </div>
          <div className=" flex flex-col  md:flex-row md:w-4/5  md:justify-between h-full justify-center ">
            <div className=" md:w-1/5  flex md:flex-1 flex-col md:my-0 my-4 ">
              <h2 className="text-2xl">Border Countries: </h2>
              <div className=" flex md:w-1/5 flex-col">
                {country?.border?.map((country, id) => (
                  <a
                    href={`./${country.commonName}_${country.countryCode}`}
                    className=" mb-2 hover:underline "
                    key={id}
                  >
                    {country.commonName}{" "}
                  </a>
                ))}
              </div>
            </div>
            <div className=" md:w-4/5 h-96 ">
              <PopChartC populationData={country.population} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
