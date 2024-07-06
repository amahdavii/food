import http from "src/services/httpService";

interface GetOtpBody {
  mobile: string;
  force_otp: boolean;
}

export const getOtp = (data: GetOtpBody) => {
  return http.post("/company/auth/check", data).then(({ data }) => data?.data);
};
