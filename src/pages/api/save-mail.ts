import fs from "fs";
import path from "path";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      const formData = req.body;

      const filePath = path.join(process.cwd(), "mails", `${Date.now()}.txt`);

      const formattedData = `
        Имя и фамилия: ${formData.name}
        Электронная почта: ${formData.email}
        Город: ${formData.city}
        Вопрос: ${formData.question}
      `;

      const dataDir = path.join(process.cwd(), "mails");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      fs.writeFileSync(filePath, formattedData);

      res.status(200).json({ message: "Данные успешно сохранены" });
    } catch (error: any) {
      console.error("Ошибка при сохранении данных:", error);
      res.status(500).json({ error: "Произошла ошибка при сохранении данных" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Метод не поддерживается");
  }
}
