import axios from "axios";

export default async function handler(req: any, res: any) {
  const { q } = req.query;

  try {
    const response = await axios.get(
      `http://localhost:3101/products/search?q=${q}`,
    );
    res.status(200).json(response.data.hits.hits);
  } catch (error) {
    console.error("Ошибка при запросе к внешнему серверу:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
}
