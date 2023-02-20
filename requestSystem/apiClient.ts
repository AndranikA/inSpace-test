import ky, { Options } from "ky";

const baseUrl = 'https://63c91b0f904f040a96562ed6.mockapi.io';

export const apiClient = ky
  .create({ prefixUrl: baseUrl })
  // .extend({
  //   hooks: {
  //     beforeRequest: [addSecretCodeToPostBody],
  //   },
  // });

export default baseUrl;