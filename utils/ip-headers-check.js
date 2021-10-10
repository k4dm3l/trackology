"use strict";

const getClientIpRequest = (requestObject) => {
  let clientIPsAddresses = [];

  if (requestObject.connection && requestObject.connection.remoteAddress)
    clientIPsAddresses.push(requestObject.connection.remoteAddress);

  if (requestObject.header("X-Client-IP"))
    clientIPsAddresses.push(requestObject.header("X-Client-IP"));

  if (requestObject.header("X-Forwarded-For"))
    clientIPsAddresses.push(requestObject.header("X-Forwarded-For"));

  if (requestObject.header("CF-Connecting-IP"))
    clientIPsAddresses.push(requestObject.header("CF-Connecting-IP"));

  if (requestObject.header("Fastly-Client-IP"))
    clientIPsAddresses.push(requestObject.header("Fastly-Client-IP"));

  if (requestObject.header("X-Real-IP"))
    clientIPsAddresses.push(requestObject.header("X-Real-IP"));

  if (requestObject.header && requestObject.header("X-Cluster-Client-IP"))
    clientIPsAddresses.push(requestObject.header("X-Cluster-Client-IP"));

  if (requestObject.socket && requestObject.socket.remoteAddress)
    clientIPsAddresses.push(requestObject.socket.remoteAddress);

  if (requestObject.info && requestObject.info.remoteAddress)
    clientIPsAddresses.push(requestObject.info.remoteAddress);

  return clientIPsAddresses;
};

module.exports = {
  getClientIpRequest,
};
