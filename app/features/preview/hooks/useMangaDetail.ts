import {
  getCoverImage,
  getGenresManga,
  getMangakaManga,
  getTitleManga,
} from "@/app/lib/helper";
import { MangaData } from "@/app/types/manga";

const useMangaDetail = (manga: MangaData | null) => {
  const coverImage = getCoverImage(manga);
  const title = getTitleManga(manga);
  const genres = getGenresManga(manga);
  const mangaka = getMangakaManga(manga);
  return {
    coverImage,
    title,
    genres,
    mangaka,
  };
};

export default useMangaDetail;
