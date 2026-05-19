export type CategorySelect = {
  id: number;
  imgSource: NodeJS.Require;
  centrang: boolean;
  title: string;
};

const CATEGORY: CategorySelect[] = [
  {
    id: 0,
    imgSource: require("@/assets/images/category/romance.webp"),
    centrang: false,
    title: "Romance",
  },
  {
    id: 1,
    imgSource: require("@/assets/images/category/action.webp"),
    centrang: false,
    title: "Action",
  },
  {
    id: 2,
    imgSource: require("@/assets/images/category/fantasy.jpg"),
    centrang: false,
    title: "Fantasy",
  },
  {
    id: 3,
    imgSource: require("@/assets/images/category/isekai.webp"),
    centrang: false,
    title: "Isekai",
  },
  {
    id: 4,
    imgSource: require("@/assets/images/category/horror.webp"),
    centrang: false,
    title: "Horror",
  },
  {
    id: 5,
    imgSource: require("@/assets/images/category/comedy.jpg"), // 👈 jpg
    centrang: false,
    title: "Comedy",
  },
  {
    id: 6,
    imgSource: require("@/assets/images/category/drama.webp"),
    centrang: false,
    title: "Drama",
  },
  {
    id: 7,
    imgSource: require("@/assets/images/category/scifi.jpg"), // 👈 jpg
    centrang: false,
    title: "Sci-Fi",
  },
  {
    id: 8,
    imgSource: require("@/assets/images/category/slice-of-life.jpg"), // 👈 jpg
    centrang: false,
    title: "Slice of Life",
  },
  {
    id: 9,
    imgSource: require("@/assets/images/category/adventure.jpg"), // 👈 jpg
    centrang: false,
    title: "Adventure",
  },
  {
    id: 10,
    imgSource: require("@/assets/images/category/mystery.webp"),
    centrang: false,
    title: "Mystery",
  },
  {
    id: 11,
    imgSource: require("@/assets/images/category/supernatural.jpg"), // 👈 jpg
    centrang: false,
    title: "Supernatural",
  },
  {
    id: 12,
    imgSource: require("@/assets/images/category/harem.jpg"), // 👈 jpg
    centrang: false,
    title: "Harem",
  },
  {
    id: 13,
    imgSource: require("@/assets/images/category/sports.jpg"), // 👈 jpg
    centrang: false,
    title: "Sports",
  },
  {
    id: 14,
    imgSource: require("@/assets/images/category/mecha.webp"),
    centrang: false,
    title: "Mecha",
  },
];

export default CATEGORY;
