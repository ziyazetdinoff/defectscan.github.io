"use client";
import React from "react";
import Header from "@/components/Header";
import { withBasePath } from "@/lib/basePath";

export default function MagnetogramPage() {
  const [file, setFile] = React.useState<File | null>(null);
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFile(f ?? null);
    setError(null);
    setImageUrl(null);
  };

  const onChooseFile = () => {
    fileInputRef.current?.click();
  };

  const onGetReport = async () => {
    if (!file) {
      setError("Выберите файл с магнитограммой");
      return;
    }
    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      // Простая оффлайн-логика выбора картинки по имени файла
      const name = file.name.trim().toLowerCase();
      let imagePath: string | null = null;
      if (name === "dataset1.txt") imagePath = "/magnetogram1.jpeg";
      if (name === "dataset2.txt") imagePath = "/magnetogram2.jpeg";

      if (imagePath) {
        setImageUrl(withBasePath(imagePath));
      } else {
        setError("Файл не поддерживается. Используйте dataset1.txt или dataset2.txt");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Не удалось обработать файл";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <main className="container py-10">
        <h1 className="text-2xl font-semibold mb-6">Загрузка магнитограммы</h1>
        <div className="flex flex-col gap-4 max-w-xl">
          <input
            ref={fileInputRef}
            type="file"
            accept=".txt,.csv,text/plain"
            onChange={onFileChange}
            className="hidden"
          />
          <div className="flex items-center gap-3">
            <button type="button" className="btn-ghost" onClick={onChooseFile}>
              Загрузить файл
            </button>
            <button type="button" className="btn-cta" disabled={isLoading || !file} onClick={onGetReport}>
              {isLoading ? "Обработка..." : "Получить отчёт"}
            </button>
          </div>
          {file && (
            <div className="text-xs text-muted-foreground">Выбран файл: {file.name}</div>
          )}
        </div>

        {error && (
          <div className="mt-6 text-sm text-red-500">{error}</div>
        )}

        {imageUrl && (
          <div className="mt-8">
            <h2 className="text-lg font-medium mb-3">Магнитограмма</h2>
            <img src={imageUrl} alt="Магнитограмма" className="max-w-full border border-border rounded" />
          </div>
        )}
      </main>
    </div>
  );
}


