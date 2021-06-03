/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      type
      likeCount
      title
      content
      timestamp
      contributorId
      correspondingUserId
      owner
      contributor {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
      correspondingUser {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
      comments {
        items {
          id
          type
          content
          timestamp
          userId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userId
          postId
        }
        nextToken
      }
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      type
      likeCount
      title
      content
      timestamp
      contributorId
      correspondingUserId
      owner
      contributor {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
      correspondingUser {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
      comments {
        items {
          id
          type
          content
          timestamp
          userId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userId
          postId
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      displayId
      name
      profile
      image
      createdAt
      updatedAt
      correspondingPosts {
        items {
          id
          type
          likeCount
          title
          content
          timestamp
          contributorId
          correspondingUserId
          owner
        }
        nextToken
      }
      posts {
        items {
          id
          type
          likeCount
          title
          content
          timestamp
          contributorId
          correspondingUserId
          owner
        }
        nextToken
      }
      owner
      comments {
        items {
          id
          type
          content
          timestamp
          userId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userId
          postId
        }
        nextToken
      }
      thankCounts {
        items {
          id
          userId
          postId
          correspondingUserId
        }
        nextToken
      }
      thank {
        items {
          id
          userId
          postId
          correspondingUserId
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      displayId
      name
      profile
      image
      createdAt
      updatedAt
      correspondingPosts {
        items {
          id
          type
          likeCount
          title
          content
          timestamp
          contributorId
          correspondingUserId
          owner
        }
        nextToken
      }
      posts {
        items {
          id
          type
          likeCount
          title
          content
          timestamp
          contributorId
          correspondingUserId
          owner
        }
        nextToken
      }
      owner
      comments {
        items {
          id
          type
          content
          timestamp
          userId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userId
          postId
        }
        nextToken
      }
      thankCounts {
        items {
          id
          userId
          postId
          correspondingUserId
        }
        nextToken
      }
      thank {
        items {
          id
          userId
          postId
          correspondingUserId
        }
        nextToken
      }
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      type
      content
      timestamp
      userId
      postId
      createdAt
      updatedAt
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
        owner
        contributor {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        correspondingUser {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      user {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      userId
      postId
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
        owner
        contributor {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        correspondingUser {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      user {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      userId
      postId
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
        owner
        contributor {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        correspondingUser {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      user {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
    }
  }
`;
export const updateThank = /* GraphQL */ `
  mutation UpdateThank(
    $input: UpdateThankInput!
    $condition: ModelThankConditionInput
  ) {
    updateThank(input: $input, condition: $condition) {
      id
      userId
      postId
      correspondingUserId
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
        owner
        contributor {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        correspondingUser {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      user {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
    }
  }
`;
export const deleteThank = /* GraphQL */ `
  mutation DeleteThank(
    $input: DeleteThankInput!
    $condition: ModelThankConditionInput
  ) {
    deleteThank(input: $input, condition: $condition) {
      id
      userId
      postId
      correspondingUserId
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
        owner
        contributor {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        correspondingUser {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      user {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      type
      likeCount
      title
      content
      timestamp
      contributorId
      correspondingUserId
      owner
      contributor {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
      correspondingUser {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
      comments {
        items {
          id
          type
          content
          timestamp
          userId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userId
          postId
        }
        nextToken
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      displayId
      name
      profile
      image
      createdAt
      updatedAt
      correspondingPosts {
        items {
          id
          type
          likeCount
          title
          content
          timestamp
          contributorId
          correspondingUserId
          owner
        }
        nextToken
      }
      posts {
        items {
          id
          type
          likeCount
          title
          content
          timestamp
          contributorId
          correspondingUserId
          owner
        }
        nextToken
      }
      owner
      comments {
        items {
          id
          type
          content
          timestamp
          userId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userId
          postId
        }
        nextToken
      }
      thankCounts {
        items {
          id
          userId
          postId
          correspondingUserId
        }
        nextToken
      }
      thank {
        items {
          id
          userId
          postId
          correspondingUserId
        }
        nextToken
      }
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      type
      content
      timestamp
      userId
      postId
      createdAt
      updatedAt
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
        owner
        contributor {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        correspondingUser {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      user {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      userId
      postId
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
        owner
        contributor {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        correspondingUser {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      user {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
    }
  }
`;
export const createThank = /* GraphQL */ `
  mutation CreateThank(
    $input: CreateThankInput!
    $condition: ModelThankConditionInput
  ) {
    createThank(input: $input, condition: $condition) {
      id
      userId
      postId
      correspondingUserId
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
        owner
        contributor {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        correspondingUser {
          id
          displayId
          name
          profile
          image
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      user {
        id
        displayId
        name
        profile
        image
        createdAt
        updatedAt
        correspondingPosts {
          nextToken
        }
        posts {
          nextToken
        }
        owner
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        thankCounts {
          nextToken
        }
        thank {
          nextToken
        }
      }
    }
  }
`;
