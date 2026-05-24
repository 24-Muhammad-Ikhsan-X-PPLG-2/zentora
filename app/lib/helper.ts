import { ChaptersDataType } from "../types/chapters";
import { MangaData } from "../types/manga";
import { MangaData as MangaDataMangas } from "../types/mangas";

export function getCoverImage(manga: MangaData | MangaDataMangas | null) {
  if (!manga) return "";
  const coverImageObject = manga.relationships.find(
    (item) => item.type === "cover_art",
  );
  const coverImage = coverImageObject
    ? `https://uploads.mangadex.dev/covers/${manga?.id}/${coverImageObject.attributes?.fileName}`
    : "";
  return coverImage;
}

export function getTitleManga(manga: MangaData | MangaDataMangas | null) {
  if (!manga) return "Loading...";
  const titleIndex =
    manga?.attributes.altTitles.findIndex((item) => item.en) ?? 0;
  const title = manga?.attributes.title.en
    ? manga?.attributes.title.en
    : manga?.attributes.altTitles.at(titleIndex)?.en;
  return title;
}

export function getGenresManga(manga: MangaData | MangaDataMangas | null) {
  if (!manga) return null;
  return manga.attributes.tags.filter(
    (item) => item.attributes.group === "genre",
  );
}

export function getMangakaManga(manga: MangaData | null) {
  if (!manga) return null;
  return manga.relationships.filter(
    (item) => item.type === "author" || item.type === "artist",
  );
}

export function pickBestChapters(
  chapters: ChaptersDataType[],
): ChaptersDataType[] {
  const priority = ["id", "en", "ja"];

  const map = new Map();

  for (const ch of chapters) {
    const key = `${ch.attributes.chapter}`;

    if (!map.has(key)) {
      map.set(key, ch);
      continue;
    }

    const current = map.get(key);

    const currentLang = priority.indexOf(current.attributes.translatedLanguage);
    const newLang = priority.indexOf(ch.attributes.translatedLanguage);

    if (newLang < currentLang) {
      map.set(key, ch);
    }
  }

  return Array.from(map.values());
}

export const skeletonData = Array.from({ length: 6 }, (_, i) => ({
  id: `skeleton-${i}`,
}));
