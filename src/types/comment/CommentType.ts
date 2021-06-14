export type CommentType = {
    __typename: "Comment";
    id: string;
    type: string;
    content: string;
    timestamp: number;
    userId: string;
    postId: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null | undefined;
  } | null;

  export type Comment = {
      __typename: "Comment",
      id: string,
      type: string,
      content: string,
      timestamp: number,
      userId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
      post?:  {
        __typename: "Post",
        id: string,
        type: string,
        likeCount?: number | null,
        title: string,
        content: string,
        timestamp: number,
        contributorId: string,
        correspondingUserId?: string | null,
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
        } | null,
        comments?:  {
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
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        displayId?: string | null,
        name: string,
        profile: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        correspondingPosts?:  {
          __typename: "ModelPostConnection",
          nextToken?: string | null,
        } | null,
        posts?:  {
          __typename: "ModelPostConnection",
          nextToken?: string | null,
        } | null,
        owner?: string | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        likes?:  {
          __typename: "ModelLikeConnection",
          nextToken?: string | null,
        } | null,
        thankCounts?:  {
          __typename: "ModelThankConnection",
          nextToken?: string | null,
        } | null,
        thank?:  {
          __typename: "ModelThankConnection",
          nextToken?: string | null,
        } | null,
      } | null,
      owner?: string | null,
    } | null
