export interface Post {
  id: number;
  title: string;
  text: string;
  imageUrl: string | null;
  updatedAt: string;
  user: User;
  tags: Tag[];
}

export interface UserPage {
  user: User;
  posts: Post[];
}

export interface User {
  id: number;
  email: string;
  login: string;
  avatarUrl: string | null;
  createdAt: string;
}

export interface Tag {
  id: number;
  name: string;
}
