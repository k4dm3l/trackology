"use strict";

const getClientIpRequest = (requestObject) => {
  let clientIPsAddresses = [];

  if (requestObject.connection && requestObject.connection.remoteAddress)
    clientIPsAddresses.push({
      type: "connection-remote-address",
      value: requestObject.connection.remoteAddress || null,
    });

  if (requestObject.header("X-Client-IP"))
    clientIPsAddresses.push({
      type: "x-client-id",
      value: requestObject.header("X-Client-IP") || null,
    });

  if (requestObject.header("X-Forwarded-For"))
    clientIPsAddresses.push({
      type: "x-forwarded-for",
      value: requestObject.header("X-Forwarded-For") || null,
    });

  if (requestObject.header("CF-Connecting-IP"))
    clientIPsAddresses.push({
      type: "cf-connecting-ip",
      value: requestObject.header("CF-Connecting-IP") || null,
    });

  if (requestObject.header("Fastly-Client-IP"))
    clientIPsAddresses.push({
      type: "fastly-client-ip",
      value: requestObject.header("Fastly-Client-IP") || null,
    });

  if (requestObject.header("X-Real-IP"))
    clientIPsAddresses.push({
      type: "x-real-ip",
      value: requestObject.header("X-Real-IP") || null,
    });

  if (requestObject.header("X-Cluster-Client-IP"))
    clientIPsAddresses.push({
      type: "x-cluster-client-ip",
      value: requestObject.header("X-Cluster-Client-IP") || null,
    });

  if (requestObject.socket && requestObject.socket.remoteAddress)
    clientIPsAddresses.push({
      type: "socket-remote-address",
      value: requestObject.socket.remoteAddress || null,
    });

  if (requestObject.info && requestObject.info.remoteAddress)
    clientIPsAddresses.push({
      type: "info-remote-address",
      value: requestObject.info.remoteAddress || null,
    });

  return clientIPsAddresses;
};

module.exports = {
  getClientIpRequest,
};
