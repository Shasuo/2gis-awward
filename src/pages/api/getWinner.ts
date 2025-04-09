import axios from "axios";

export default async function handler(req: any, res: any) {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: "User ID is required" });
  }

  try {
    const externalApiResponse = await axios.get(
      `${process.env.API_URL}/api/winitems/${id}`,
    );
    res.status(200).json(externalApiResponse.data);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
