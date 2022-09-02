import type { NextApiRequest, NextApiResponse } from "next";

import { bearer, cors } from "@/lib";
import { CartRepository } from "@/repositories";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = bearer(req, "access");
  const cart = await CartRepository.get(id);
  res.status(200).json(cart);
});
