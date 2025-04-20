export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
  const clientIp = ip.split(',')[0].trim();
  res.status(200).send(clientIp);
}