export interface CategoryItem {
  id: string;
  label: string;
  description?: string;
  link?: string;
  subItems?: CategoryItem[];
}

export const categoryItems: CategoryItem[] = [
  {
    id: "action",
    label: "Action",
    link: "/action",
  },
  {
    id: "anime",
    label: "Anime",
    link: "/anime",
  },
  {
    id: "crime",
    label: "Crime",
    link: "/crime",
  },
  {
    id: "comedies",
    label: "Comedies",
    link: "/comedies",
  },
  {
    id: "documentaries",
    label: "Documentaries",
    link: "/documentaries",
  },
  {
    id: "dramas",
    label: "Dramas",
    link: "/dramas",
  },
  {
    id: "fantasy",
    label: "Fantasy",
    link: "/fantasy",
  },
  {
    id: "kids&family ",
    label: "Kids & Family ",
    link: "/kids&family ",
  },
  {
    id: "horror",
    label: "Horror",
    link: "/horror",
  },
  {
    id: "reality",
    label: "Reality",
    link: "/reality",
  },
  {
    id: "romance",
    label: "Romance",
    link: "/romance",
  },
  {
    id: "sci-fi",
    label: "Sci-fi",
    link: "/sci-fi",
  },
];
