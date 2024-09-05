export interface Post {
  id: number;
  title: string;
  text: string;
  imageUrl: string | null;
  updatedAt: string;
  user: User;
  tags: Tag[];
}

export interface User {
  id: number;
  email: string;
  avatarUrl: string | null;
}

export interface Tag {
  id: number;
  name: string;
}
