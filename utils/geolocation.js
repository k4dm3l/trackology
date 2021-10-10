"use strict";

const path = require("path");
const Reader = require("@maxmind/geoip2-node").Reader;

/**
 *
 * @param ipAddress ip Ip address
 * @returns Object with geolocation information related to the IP
 */
const getIpGeolocationInformation = async (ipAddress) => {
  try {
    const maxMindCity = await Reader.open(
      path.join(__dirname, "/static/GeoLite2-City.mmdb")
    );
    const cityRequest = maxMindCity.city(ipAddress);

    return {
      postalCode: cityRequest.postal.code || "",
      latitud: cityRequest.location.latitude || null,
      longitude: cityRequest.location.longitude || null,
      city: cityRequest.city.names.en || "",
      state:
        cityRequest.subdivisions && cityRequest.subdivisions.length
          ? cityRequest.subdivisions[0].names.en
            ? `${cityRequest.subdivisions[0].names.en}, ${
                cityRequest.subdivisions[0].isoCode || ""
              }`
            : ""
          : "",
      country: cityRequest.country.names.en || "",
      continent: cityRequest.continent.names.en || "",
    };
  } catch (error) {
    throw Error("Error trying to get IP geolocation information");
  }
};

module.exports = {
  getIpGeolocationInformation,
};
