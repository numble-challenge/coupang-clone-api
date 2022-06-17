import { NextApiRequest, NextApiResponse } from "next";

export type ApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>;

export const cors =
  (handler: ApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
      res.status(204).end();
      return;
    }
    return await handler(req, res);
  };
