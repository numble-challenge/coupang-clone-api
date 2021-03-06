import type { NextApiRequest, NextApiResponse } from "next";

import { bearer, cors, createJwt } from "@/lib";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = bearer(req, "refresh");
  res.status(200).json(createJwt(id!));
});
