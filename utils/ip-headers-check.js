"use strict";

const getClientIpRequest = (requestObject) => {
  let clientIPsAddresses = [];

  if (requestObject.connection && requestObject.connection.remoteAddress)
    clientIPsAddresses.push(requestObject.connection.remoteAddress);

  if (requestObject.header("X-Client-IP"))
    clientIPsAddresses.push(requestObject.header("X-Client-IP"));

  if (requestObject.header("x-client-ip"))
    clientIPsAddresses.push(requestObject.header("x-client-ip"));

  if (requestObject.header("x-forwarded-for"))
    clientIPsAddresses.push(requestObject.header("x-forwarded-for")[0]);

  if (requestObject.header("X-Forwarded-For"))
    clientIPsAddresses.push(requestObject.header("X-Forwarded-For")[0]);

  if (requestObject.header("CF-Connecting-IP"))
    clientIPsAddresses.push(requestObject.header("CF-Connecting-IP"));

  if (requestObject.header("cf-connecting-ip"))
    clientIPsAddresses.push(requestObject.header("cf-connecting-ip"));

  if (requestObject.header("Fastly-Client-IP"))
    clientIPsAddresses.push(requestObject.header("Fastly-Client-IP"));

  if (requestObject.header("fastly-client-ip"))
    clientIPsAddresses.push(requestObject.header("fastly-client-ip"));

  if (requestObject.header("X-Real-IP"))
    clientIPsAddresses.push(requestObject.header("X-Real-IP"));

  if (requestObject.header("x-real-ip"))
    clientIPsAddresses.push(requestObject.header("x-real-ip"));

  if (requestObject.header && requestObject.header("X-Cluster-Client-IP"))
    clientIPsAddresses.push(requestObject.header("X-Cluster-Client-IP"));

  if (requestObject.header && requestObject.header("x-cluster-client-ip"))
    clientIPsAddresses.push(requestObject.header("x-cluster-client-ip"));

  if (requestObject.socket && requestObject.socket.remoteAddress)
    clientIPsAddresses.push(requestObject.socket.remoteAddress);

  if (requestObject.info && requestObject.info.remoteAddress)
    clientIPsAddresses.push(requestObject.info.remoteAddress);

  return clientIPsAddresses;
};

module.exports = {
  getClientIpRequest,
};
