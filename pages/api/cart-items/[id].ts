import type { NextApiRequest, NextApiResponse } from "next";

import { bearer, cors } from "@/lib";
import { CartRepository } from "@/repositories";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (Math.random() > 0.5) {
    throw new Error();
  }

  const userId = bearer(req, "access");
  const id = Number(req.query.id);

  if (req.method === "PATCH") {
    if (!req.body.quantity) {
      res.status(400).send("Invalid quantity");
    }

    await CartRepository.update(userId, id, { quantity: req.body.quantity });
  } else if (req.method === "DELETE") {
    await CartRepository.delete(userId, id);
  } else {
    res.status(404).send(`Cannot ${req.method} /api/cart-items`);
  }

  res.status(200).json(true);
});
