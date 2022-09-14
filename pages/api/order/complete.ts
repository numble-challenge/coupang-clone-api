import type { NextApiRequest, NextApiResponse } from "next";

import { bearer, cors } from "@/lib";

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(404).send(`Cannot ${req.method} /api/order/complete`);
  }

  try {
    bearer(req, "access");
  } catch {
    res.status(401).send("Unauthorized");
  }

  if (req.body.ordersheetId == null) {
    res.status(400).send("ordersheetId is required");
  }
  if (req.body.addressId == null) {
    res.status(400).send("addressId is required");
  }
  if (req.body.usedCash == null) {
    res.status(400).send("usedCash is required");
  }
  if (req.body.payMethod == null) {
    res.status(400).send("payMethod is required");
  }
  if (!["mobile", "coupaymoney"].includes(req.body.payMethod)) {
    res.status(400).send("payMethod must be 'mobile' or 'coupaymoney'");
  }
  if (req.body.payMethod === "mobile") {
    if (req.body.mobileCarrier == null) {
      res.status(400).send("mobileCarrier is required for mobile pay");
    }
    if (!["skt", "kt", "hello", "kct"].includes(req.body.mobileCarrier)) {
      res
        .status(400)
        .send("mobileCarrier must be 'skt' or 'kt' or 'hello' or 'kct'");
    }
  }
  if (req.body.payMethod === "coupaymoney") {
    if (req.body.usedCoupaymoney == null) {
      res.status(400).send("usedCoupaymoney is required for coupaymoney pay");
    }
  }

  res.status(200).json(true);
});
