import type { NextApiRequest } from "next";
import * as jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const REFRESH_SERCET = process.env.JWT_REFRESH_SECRET;

export const bearer = (req: NextApiRequest, type: "access" | "refresh") => {
  if (!req.headers.authorization) {
    throw new Error("Unauthorized");
  }

  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    throw new Error("인증정보가 없습니다.");
  }

  const secret = type === "access" ? ACCESS_SECRET : REFRESH_SERCET;

  try {
    const payload = jwt.verify(token, secret!);
    return payload as jwt.JwtPayload;
  } catch {
    throw new Error("토큰이 만료되었습니다.");
  }
};
