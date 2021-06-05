export type Post = {

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
} | null