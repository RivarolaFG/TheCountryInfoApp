import axios from "axios";

export async function getCountryList() {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_COUNTRIES);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getCountryInfo(id) {
  console.log(`${process.env.NEXT_PUBLIC_COUNTRIES_INFO}${id}`);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_COUNTRIES_INFO}${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
