import axios from "axios";
import UnableToGetLocalAreaNameError from "../common/errors/unable-to-get-local-area-name-error";

function extractLocalAreaName(compoundCode) {
  const firstSpaceIndex = compoundCode.indexOf(' ');
  const localAreaName = compoundCode.slice(firstSpaceIndex + 1);
  return localAreaName
}

export async function getLocalAreaName({ lat, lon }) {
  try {
    const response = await axios.get(`${process.env.REACT_APP_GOOGLE_CLOUD_FUNCTIONS_URL}/geocoding-info?lat=${lat}&lon=${lon}`);
    const compoundCode = response.data.plus_code.compound_code;
    const localAreaName = extractLocalAreaName(compoundCode)
    return localAreaName;
  } catch (error) {
    console.log(error);
    throw new UnableToGetLocalAreaNameError(error.message);
  }
}