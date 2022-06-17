import type { NextApiRequest, NextApiResponse } from "next";

import { cors, createJwt } from "@/lib";
import { EmailRepository, UserRepository } from "@/repositories";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  const isExisting = await EmailRepository.check(email);
  if (isExisting) {
    throw new Error("이미 존재하는 이메일입니다.");
  }

  const user = await UserRepository.create(req.body);
  await EmailRepository.create(email, user.id);

  res.status(200).json(createJwt(user.id));
});
