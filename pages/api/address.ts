import type { NextApiRequest, NextApiResponse } from "next";

import { bearer, cors } from "@/lib";
import { addresses } from "@/models";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(404).send(`Cannot ${req.method} /api/address`);
  }

  try {
    bearer(req, "access");
  } catch {
    res.status(401).send("Unauthorized");
  }

  res.status(200).json(addresses);
});
