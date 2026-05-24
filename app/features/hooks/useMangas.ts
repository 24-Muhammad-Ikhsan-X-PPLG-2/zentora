import { MangaDexIkhsan } from "@/app/lib/mangadex";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchMangas = async (page: number = 1) => {
  const manga = new MangaDexIkhsan();
  const res = await manga.getMangas(page);
  return res;
};

const useMangas = () => {
  const {
    data: mangas,
    hasNextPage,
    fetchNextPage,
    refetch,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["mangas"],
    queryFn: async ({ pageParam }) => fetchMangas(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPages, pages) => {
      const offset = (pages.length - 1) * 10;
      const nextOffset = offset + 10;
      if (nextOffset >= lastPages.total) {
        return undefined;
      }
      return pages.length + 1;
    },
  });

  return {
    mangas,
    hasNextPage,
    fetchNextPage,
    refetch,
    isFetchingNextPage,
    isLoading,
  };
};

export default useMangas;
