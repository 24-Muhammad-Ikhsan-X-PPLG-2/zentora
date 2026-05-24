import { MangaDexIkhsan } from "@/app/lib/mangadex";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchChapters = async (manga_id: string, page: number = 1) => {
  const manga = new MangaDexIkhsan();
  const res = await manga.getChapters(manga_id, page);
  return res;
};

const useChapters = (manga_id: string) => {
  const {
    data: chapters,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: [`chapters-${manga_id}`],
    queryFn: async ({ pageParam }) => await fetchChapters(manga_id, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPages, pages) => {
      const offset = (pages.length - 1) * 10;
      const nextOffset = offset + 10;
      if (nextOffset >= (lastPages?.total ?? 0)) {
        return undefined;
      }
      return pages.length + 1;
    },
  });
  return {
    chapters,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isLoading,
  };
};

export default useChapters;
