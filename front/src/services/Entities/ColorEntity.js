import { axiosInstance } from "services/axiosConfiguration";

export default class ColorEntity {
  /**
   *
   * @param {Object} data { colorHexadecimal : <RGB Code> }
   * @return Axios Instance
   */
  static async postColor(data) {
    return await axiosInstance.post(`/color`, data);
  }
}
