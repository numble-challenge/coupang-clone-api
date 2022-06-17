import type { NextApiRequest, NextApiResponse } from "next";

import { UserRepository } from "@/repositories";
import { cors } from "@/lib";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.query;
  const user = await UserRepository.get({ email: email as string });

  const { password, ...userDto } = user;

  res.status(200).json(userDto);
});
