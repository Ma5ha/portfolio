export type Post={
  image: string;
  category: string;
  title: string;
  date: string;
  body: string;
  slug: string;
  published: boolean;
  description?: string | undefined;
  tags?: string[] | undefined;
  
}