type PostInput = {
  title: string;
  description: string;
};

type Post = {
  id: number;
  title: string;
  description: string;
};

export const createPost = ({ title, description }: PostInput): Post => {
  return {
    id: 1,
    title,
    description,
  };
};
