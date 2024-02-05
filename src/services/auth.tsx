import api from "../configs/api";
import { urls } from "../utils/urls";

const sendOtp = async (mobile: string) => {
  try {
    const response = await api.post(urls.sendOtp, { mobile });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { sendOtp };
