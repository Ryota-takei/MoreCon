export type WantPost = {
    __typename: "Post",
    id: string,
    type: string,
    likeCount?: number | null,
    thankCount?: number | null,
    url?: string | null,
    title: string,
    content: string,
    timestamp: number,
    contributorId: string,
    correspondingUserId?: string | null,
    correspondingUserMessage?: string | null,
    correspondingUserTitle?: string | null,
    owner?: string | null,
    contributor?:  {
      __typename: "User",
      id: string,
      displayId?: string | null,
      name: string,
      profile: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    correspondingUser?:  {
      __typename: "User",
      id: string,
      displayId?: string | null,
      name: string,
      profile: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null ,
    comments?:  {
      items?: Array<{
        __typename: "Comment";
        id: string;
        type: string;
        content: string;
        timestamp: number;
        userId: string;
        postId: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null> | null;
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    Thanks?:  {
      __typename: "ModelThankConnection",
      nextToken?: string | null,
    } | null,
  } | null |undefined