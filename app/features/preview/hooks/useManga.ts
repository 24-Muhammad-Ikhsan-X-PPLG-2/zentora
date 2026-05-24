import { MangaDexIkhsan } from "@/app/lib/mangadex";
import { useQuery } from "@tanstack/react-query";

const fetchManga = async (manga_id: string) => {
  const manga = new MangaDexIkhsan();
  const res = await manga.getManga(manga_id);
  return res.data;
};

const useManga = (manga_id: string) => {
  const { data: manga } = useQuery({
    queryKey: [`manga-${manga_id}`],
    queryFn: async () => await fetchManga(manga_id),
    initialData: null,
  });
  return { manga };
};

export default useManga;
