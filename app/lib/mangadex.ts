import { ChaptersType } from "../types/chapters";
import { Manga } from "../types/manga";
import { Mangas } from "../types/mangas";

export const BASE_URL = "https://api-zentora.vercel.app";

export class MangaDexIkhsan {
  async getMangas(page: number = 1): Promise<Mangas> {
    const res = await fetch(`${BASE_URL}/api/v1/manga?page=${page}`);

    const data = await res.json();
    return data;
  }
  async getManga(mangaId: string): Promise<Manga> {
    const res = await fetch(`${BASE_URL}/api/v1/manga/${mangaId}`);
    const data = await res.json();
    return data;
  }
  async getChapters(
    mangaId: string,
    page: number = 1,
  ): Promise<ChaptersType | null> {
    try {
      const res = await fetch(
        `${BASE_URL}/api/v1/manga/${mangaId}/chapters?page=${page}`,
      );
      const data = await res.json();
      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
