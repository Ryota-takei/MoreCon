/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UpdatePostInput = {
  id: string,
  type?: string | null,
  likeCount?: number | null,
  title?: string | null,
  content?: string | null,
  timestamp?: number | null,
  contributorId?: string | null,
  correspondingUserId?: string | null,
};

export type ModelPostConditionInput = {
  type?: ModelStringInput | null,
  likeCount?: ModelIntInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  contributorId?: ModelIDInput | null,
  correspondingUserId?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

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
  contributor?: User | null,
  correspondingUser?: User | null,
  comments?: ModelCommentConnection | null,
  likes?: ModelLikeConnection | null,
};

export type User = {
  __typename: "User",
  id: string,
  displayId?: string | null,
  name: string,
  profile: string,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
  correspondingPosts?: ModelPostConnection | null,
  posts?: ModelPostConnection | null,
  owner?: string | null,
  comments?: ModelCommentConnection | null,
  likes?: ModelLikeConnection | null,
  thankCounts?: ModelThankConnection | null,
  thank?: ModelThankConnection | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

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
  post?: Post | null,
  user?: User | null,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items?:  Array<Like | null > | null,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  userId: string,
  postId: string,
  post?: Post | null,
  user?: User | null,
};

export type ModelThankConnection = {
  __typename: "ModelThankConnection",
  items?:  Array<Thank | null > | null,
  nextToken?: string | null,
};

export type Thank = {
  __typename: "Thank",
  id: string,
  userId: string,
  postId: string,
  correspondingUserId: string,
  post?: Post | null,
  user?: User | null,
};

export type DeletePostInput = {
  id: string,
};

export type UpdateUserInput = {
  id: string,
  displayId?: string | null,
  name?: string | null,
  profile?: string | null,
  image?: string | null,
};

export type ModelUserConditionInput = {
  displayId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  profile?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type DeleteUserInput = {
  id: string,
};

export type DeleteCommentInput = {
  id: string,
};

export type ModelCommentConditionInput = {
  type?: ModelStringInput | null,
  content?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  userId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateLikeInput = {
  userId?: string | null,
  postId?: string | null,
};

export type ModelLikeConditionInput = {
  userId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type UpdateThankInput = {
  userId?: string | null,
  postId?: string | null,
  correspondingUserId?: string | null,
};

export type ModelThankConditionInput = {
  userId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  correspondingUserId?: ModelIDInput | null,
  and?: Array< ModelThankConditionInput | null > | null,
  or?: Array< ModelThankConditionInput | null > | null,
  not?: ModelThankConditionInput | null,
};

export type DeleteThankInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  type: string,
  likeCount?: number | null,
  title: string,
  content: string,
  timestamp: number,
  contributorId: string,
  correspondingUserId?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  displayId?: string | null,
  name: string,
  profile: string,
  image?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  type: string,
  content: string,
  timestamp: number,
  userId: string,
  postId: string,
};

export type CreateLikeInput = {
  id?: string | null,
  userId: string,
  postId: string,
};

export type CreateThankInput = {
  id?: string | null,
  userId: string,
  postId: string,
  correspondingUserId: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  likeCount?: ModelIntInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  contributorId?: ModelIDInput | null,
  correspondingUserId?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  displayId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  profile?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  content?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  userId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelLikeFilterInput = {
  userId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
};

export type ModelThankFilterInput = {
  userId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  correspondingUserId?: ModelIDInput | null,
  and?: Array< ModelThankFilterInput | null > | null,
  or?: Array< ModelThankFilterInput | null > | null,
  not?: ModelThankFilterInput | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
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
    correspondingUser?:  {
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
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
    correspondingUser?:  {
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
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
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thankCounts?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thank?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
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
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thankCounts?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thank?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
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
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    userId: string,
    postId: string,
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
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    userId: string,
    postId: string,
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
  } | null,
};

export type UpdateThankMutationVariables = {
  input: UpdateThankInput,
  condition?: ModelThankConditionInput | null,
};

export type UpdateThankMutation = {
  updateThank?:  {
    __typename: "Thank",
    id: string,
    userId: string,
    postId: string,
    correspondingUserId: string,
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
  } | null,
};

export type DeleteThankMutationVariables = {
  input: DeleteThankInput,
  condition?: ModelThankConditionInput | null,
};

export type DeleteThankMutation = {
  deleteThank?:  {
    __typename: "Thank",
    id: string,
    userId: string,
    postId: string,
    correspondingUserId: string,
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
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
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
    correspondingUser?:  {
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
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
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thankCounts?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thank?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
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
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    userId: string,
    postId: string,
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
  } | null,
};

export type CreateThankMutationVariables = {
  input: CreateThankInput,
  condition?: ModelThankConditionInput | null,
};

export type CreateThankMutation = {
  createThank?:  {
    __typename: "Thank",
    id: string,
    userId: string,
    postId: string,
    correspondingUserId: string,
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
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
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
    correspondingUser?:  {
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
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
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListPostsSortedByTimestampQueryVariables = {
  type?: string | null,
  timestamp?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsSortedByTimestampQuery = {
  listPostsSortedByTimestamp?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
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
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListPostsSortedByLikeCountQueryVariables = {
  type?: string | null,
  likeCount?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsSortedByLikeCountQuery = {
  listPostsSortedByLikeCount?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
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
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListPostsSortedByContributorQueryVariables = {
  contributorId?: string | null,
  timestamp?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsSortedByContributorQuery = {
  listPostsSortedByContributor?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
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
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListPostsSortedByCorrespondingUserQueryVariables = {
  correspondingUserId?: string | null,
  timestamp?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsSortedByCorrespondingUserQuery = {
  listPostsSortedByCorrespondingUser?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
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
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
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
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thankCounts?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thank?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
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
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SearchByDisplayIdQueryVariables = {
  displayId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchByDisplayIdQuery = {
  searchByDisplayId?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
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
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
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
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
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
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListCommentsSortedByTimestampQueryVariables = {
  type?: string | null,
  timestamp?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsSortedByTimestampQuery = {
  listCommentsSortedByTimestamp?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
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
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    id: string,
    userId: string,
    postId: string,
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
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items?:  Array< {
      __typename: "Like",
      id: string,
      userId: string,
      postId: string,
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
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetThankQueryVariables = {
  id: string,
};

export type GetThankQuery = {
  getThank?:  {
    __typename: "Thank",
    id: string,
    userId: string,
    postId: string,
    correspondingUserId: string,
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
  } | null,
};

export type ListThanksQueryVariables = {
  filter?: ModelThankFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListThanksQuery = {
  listThanks?:  {
    __typename: "ModelThankConnection",
    items?:  Array< {
      __typename: "Thank",
      id: string,
      userId: string,
      postId: string,
      correspondingUserId: string,
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
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
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
    correspondingUser?:  {
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
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
    correspondingUser?:  {
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
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
    correspondingUser?:  {
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
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
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
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thankCounts?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thank?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
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
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thankCounts?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thank?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
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
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
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
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        type: string,
        content: string,
        timestamp: number,
        userId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userId: string,
        postId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thankCounts?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    thank?:  {
      __typename: "ModelThankConnection",
      items?:  Array< {
        __typename: "Thank",
        id: string,
        userId: string,
        postId: string,
        correspondingUserId: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
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
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
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
  } | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    userId: string,
    postId: string,
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
  } | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    userId: string,
    postId: string,
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
  } | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    userId: string,
    postId: string,
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
  } | null,
};

export type OnCreateThankSubscription = {
  onCreateThank?:  {
    __typename: "Thank",
    id: string,
    userId: string,
    postId: string,
    correspondingUserId: string,
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
  } | null,
};

export type OnUpdateThankSubscription = {
  onUpdateThank?:  {
    __typename: "Thank",
    id: string,
    userId: string,
    postId: string,
    correspondingUserId: string,
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
  } | null,
};

export type OnDeleteThankSubscription = {
  onDeleteThank?:  {
    __typename: "Thank",
    id: string,
    userId: string,
    postId: string,
    correspondingUserId: string,
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
  } | null,
};
