import dbConnect from "@/db/dbConnect";
import QRCode from "@/db/models/QRCode";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  switch (req.method) {
    case "GET":
      const qrcode = await QRCode.findById(id);
      res.send(qrcode);
      break;

    case "PATCH":
      const updatedQRcode = await QRCode.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updatedQRcode);

      break;

    case "DELETE":
      await QRCode.findByIdAndDelete(id);
      res.status(204).send();
      break;

    default:
      res.status(404).send();
  }
}
