import type { NextApiRequest, NextApiResponse } from "next";

import { cors, createJwt } from "@/lib";
import { UserRepository } from "@/repositories";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  const user = await UserRepository.findByEmail(email);
  if (user.password !== req.body.password) {
    res.status(401).json("password unmatched");
  }

  res.status(200).json(createJwt(user.id));
});
