import UnableToGetLocation from '../common/errors/unable-to-get-location-error';

export async function getLocation() {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return { lat: position.coords.latitude, lon: position.coords.longitude };
  } catch (error) {
    console.log(error);
    throw new UnableToGetLocation(error.message);
  }
}