"use strict";

const { getIpGeolocationInformation } = require("./utils/geolocation");
const { getClientIpRequest } = require("./utils/ip-headers-check");

const getAuditInformation = (request, response, next) => {
  const clientIps = getClientIpRequest(request);
  const requestTime = new Date();

  return new Promise(async (resove, reject) => {
    await Promise.all(
      clientIps.map(async (ip) => {
        ip["requestTime"] = requestTime;

        try {
          const geolocation = await getIpGeolocationInformation(ip.value);
          ip["geolocation"] = geolocation;
        } catch (error) {
          ip["geolocation"] = {};
        }
      })
    );

    request["audit"] = { clientIps };
    resove(next());
  });
};

module.exports = {
  getAuditInformation,
};
