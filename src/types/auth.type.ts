export type SendOtpForm = {
  mobile: string;
  setMobile: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export type SendOtpAuth = {
  error?: any,
  response?: any
}