import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

import { createJwt, initMiddleware } from "@/lib";
import { UserRepository } from "@/repositories";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["POST", "OPTIONS"],
  })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res);

  const user = await UserRepository.get({ email: req.body.email });
  if (user.password !== req.body.password) {
    res.status(401).json("password unmatched");
  }

  res.status(200).json(createJwt(user.email));
}
