import api from "../configs/api";
import { urls } from "../utils/urls";
import { SendOtpAuth } from "../types/auth.type";


const sendOtp = async (mobile: string): Promise<SendOtpAuth> => {
  try {
    const response = await api.post(urls.sendOtp, { mobile });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { sendOtp };
