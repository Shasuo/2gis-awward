import { mainMaterialInterface } from "@/components/pages/personalized/sections/mainZone/materialChoice/materialChoice";

export const handleDownload = async (
  fileUrl: string,
  setIsLoading: (loading: boolean) => void,
  activeMaterial?: mainMaterialInterface,
) => {
  try {
    setIsLoading(true);
    const response = await fetch(
      `/api/download?url=${encodeURIComponent(fileUrl)}`,
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error("Ошибка при скачивании файла");
    }

    const blob = await response.blob();
    //@ts-ignore
    const url = window.URL.createObjectURL(blob);
    const fileName = activeMaterial
      ? `${activeMaterial.type === "IMAGE" ? "Персонализированная картинка" : "Персонализированное видео"} ${activeMaterial.sizes.width}x${activeMaterial.sizes.height}`
      : "Персонализированные материалы";

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    //@ts-ignore
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Ошибка при скачивании файла:", error);
  } finally {
    setIsLoading(false);
  }
};
