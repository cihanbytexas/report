// api/check.js
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Sadece POST isteği kabul edilir" });
  }

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "message parametresi gerekli" });

  // Link kontrolü
  const hasLink = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi.test(message);

  res.status(200).json({ blocked: hasLink });
}
