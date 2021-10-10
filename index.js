"use strict";

const { getIpGeolocationInformation } = require("./utils/geolocation");
const { getClientIpRequest } = require("./utils/ip-headers-check");

const getAuditInformation = (request, response, next) => {
  const ips = getClientIpRequest(request);
  request['audit'] = {
    ips
  };
  next();
};

module.exports = {
  getAuditInformation,
};
