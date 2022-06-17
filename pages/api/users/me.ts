import type { NextApiRequest, NextApiResponse } from "next";

import { MeDto } from "@/dtos";
import { bearer, cors } from "@/lib";
import { UserRepository } from "@/repositories";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = bearer(req, "access");

  const user = await UserRepository.get(id);

  res.status(200).json(MeDto.from(user));
});
