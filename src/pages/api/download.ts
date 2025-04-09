import axios from "axios";
export default async function handler(req: any, res: any) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
    });

    res.setHeader("Content-Type", response.headers["content-type"]);
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=downloaded-file`,
    );

    response.data.pipe(res);
  } catch (error: any) {
    console.error("Error fetching file:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}
