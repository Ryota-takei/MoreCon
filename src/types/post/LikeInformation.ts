export type LikeInformation =
  | {
      __typename: "Like";
      id: string;
      userId: string;
      postId: string;
      owner?: string | null | undefined;
    }
  | null
  | undefined;
