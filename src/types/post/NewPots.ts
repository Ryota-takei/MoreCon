export type Post = {
  __typename: "Post";
  id: string;
  type: string;
  likeCount?: number | null;
  thankCount?: number | null;
  url?: string | null;
  title: string;
  content: string;
  timestamp: number;
  contributorId: string;
  correspondingUserId?: string | null;
  correspondingUserMessage?: string | null;
  correspondingUserTitle?: string | null,
  owner?: string | null;
  contributor?: {
    __typename: "User";
    id: string;
    displayId?: string | null;
    name: string;
    profile: string;
    image?: string | null;
    createdAt: string;
    updatedAt: string;
    correspondingPosts?: {
      __typename: "ModelPostConnection";
      items?: Array<{
        __typename: "Post";
        id: string;
        type: string;
        likeCount?: number | null;
        thankCount?: number | null;
        url?: string | null;
        title: string;
        content: string;
        timestamp: number;
        contributorId: string;
        correspondingUserId?: string | null;
        correspondingUserMessage?: string | null;
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      items?: Array<{
        __typename: "Post";
        id: string;
        type: string;
        likeCount?: number | null;
        thankCount?: number | null;
        url?: string | null;
        title: string;
        content: string;
        timestamp: number;
        contributorId: string;
        correspondingUserId?: string | null;
        correspondingUserMessage?: string | null;
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    comments?: {
      __typename: "ModelCommentConnection";
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
      nextToken?: string | null;
    } | null;
    likes?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        id: string;
        userId: string;
        postId: string;
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    thankCounts?: {
      __typename: "ModelThankConnection";
      items?: Array<{
        __typename: "Thank";
        id: string;
        userId: string;
        postId: string;
        correspondingUserId: string;
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    thank?: {
      __typename: "ModelThankConnection";
      items?: Array<{
        __typename: "Thank";
        id: string;
        userId: string;
        postId: string;
        correspondingUserId: string;
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
  correspondingUser?: {
    __typename: "User";
    id: string;
    displayId?: string | null;
    name: string;
    profile: string;
    image?: string | null;
    createdAt: string;
    updatedAt: string;
    correspondingPosts?: {
      __typename: "ModelPostConnection";
      items?: Array<{
        __typename: "Post";
        id: string;
        type: string;
        likeCount?: number | null;
        thankCount?: number | null;
        url?: string | null;
        title: string;
        content: string;
        timestamp: number;
        contributorId: string;
        correspondingUserId?: string | null;
        correspondingUserMessage?: string | null;
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      items?: Array<{
        __typename: "Post";
        id: string;
        type: string;
        likeCount?: number | null;
        thankCount?: number | null;
        url?: string | null;
        title: string;
        content: string;
        timestamp: number;
        contributorId: string;
        correspondingUserId?: string | null;
        correspondingUserMessage?: string | null;
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    comments?: {
      __typename: "ModelCommentConnection";
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
      nextToken?: string | null;
    } | null;
    likes?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        id: string;
        userId: string;
        postId: string;
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    thankCounts?: {
      __typename: "ModelThankConnection";
      items?: Array<{
        __typename: "Thank";
        id: string;
        userId: string;
        postId: string;
        correspondingUserId: string;
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    thank?: {
      __typename: "ModelThankConnection";
      items?: Array<{
        __typename: "Thank";
        id: string;
        userId: string;
        postId: string;
        correspondingUserId: string;
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
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
      post?: {
        __typename: "Post";
        id: string;
        type: string;
        likeCount?: number | null;
        thankCount?: number | null;
        url?: string | null;
        title: string;
        content: string;
        timestamp: number;
        contributorId: string;
        correspondingUserId?: string | null;
        correspondingUserMessage?: string | null;
        owner?: string | null;
      } | null;
      user?: {
        __typename: "User";
        id: string;
        displayId?: string | null;
        name: string;
        profile: string;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  likes?: {
    __typename: "ModelLikeConnection";
    items?: Array<{
      __typename: "Like";
      id: string;
      userId: string;
      postId: string;
      post?: {
        __typename: "Post";
        id: string;
        type: string;
        likeCount?: number | null;
        thankCount?: number | null;
        url?: string | null;
        title: string;
        content: string;
        timestamp: number;
        contributorId: string;
        correspondingUserId?: string | null;
        correspondingUserMessage?: string | null;
        owner?: string | null;
      } | null;
      user?: {
        __typename: "User";
        id: string;
        displayId?: string | null;
        name: string;
        profile: string;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  Thanks?: {
    __typename: "ModelThankConnection";
    items?: Array<{
      __typename: "Thank";
      id: string;
      userId: string;
      postId: string;
      correspondingUserId: string;
      post?: {
        __typename: "Post";
        id: string;
        type: string;
        likeCount?: number | null;
        thankCount?: number | null;
        url?: string | null;
        title: string;
        content: string;
        timestamp: number;
        contributorId: string;
        correspondingUserId?: string | null;
        correspondingUserMessage?: string | null;
        owner?: string | null;
      } | null;
      user?: {
        __typename: "User";
        id: string;
        displayId?: string | null;
        name: string;
        profile: string;
        image?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
} | null;
