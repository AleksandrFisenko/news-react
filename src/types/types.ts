export interface Post {
  id: number;
  title: string;
  text: string;
  image_url: string | null;
  updatedAt: string;
  user: User;
  tags: Tag[];
}

export interface User {
  id: number;
  email: string;
}

export interface Tag {
  id: number;
  name: string;
}
