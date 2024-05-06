import { SendOtpForm } from "../../types/auth.type";
import { sendOtp } from "../../services/auth";
import toast from "react-hot-toast/headless";

const SendOtpForm = ({ mobile, setMobile, setStep }: SendOtpForm) => {
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mobile.length !== 11) {
      toast.error("شماره موبایل باید 11 رقمی باشد");
      return;
    };

    const { response, error } = await sendOtp(mobile);

    if (response) setStep(2);
    if (error) console.log(error.response.date.message);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد
        تأیید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
};

export default SendOtpForm;
