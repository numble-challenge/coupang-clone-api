import type { NextApiRequest, NextApiResponse } from "next";

import { cors } from "@/lib";
import { PRODUCTS } from ".";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(PRODUCTS.length);
});
