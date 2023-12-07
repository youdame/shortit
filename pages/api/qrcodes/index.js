import dbConnect from "@/db/dbConnect";
import QRCode from "@/db/models/QRCode";

export default async function handler(req, res) {
  await dbConnect();
  console.log(QRCode);
  switch (req.method) {
    case "POST":
      const newQRcode = await QRCode.create(req.body);
      res.status(201).send(newQRcode);
      break;

    case "GET":
      const qrCodes = await QRCode.find();

      res.send(qrCodes);
      break;

    default:
      res.status(404).send();
      break;
  }
}
