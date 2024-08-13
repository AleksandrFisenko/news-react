export interface Post {
  id: number;
  title: string;
  text: string;
  image_url: string | null;
  updatedAt: string;
  user: User;
  tags: Tag[];
}

interface User {
  id: number;
  login: string;
}

interface Tag {
  id: number;
  name: string;
}
