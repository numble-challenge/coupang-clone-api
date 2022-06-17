import * as jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const REFRESH_SERCET = process.env.JWT_REFRESH_SECRET;

export const createJwt = (input: string) => {
  const payload = { sub: input };

  return {
    access: jwt.sign(payload, ACCESS_SECRET!, {
      expiresIn: "1d",
    }),
    refresh: jwt.sign(payload, REFRESH_SERCET!, {
      expiresIn: "7d",
    }),
  };
};
