/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
export const onCreateThank = /* GraphQL */ `
  subscription OnCreateThank {
    onCreateThank {
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
export const onUpdateThank = /* GraphQL */ `
  subscription OnUpdateThank {
    onUpdateThank {
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
export const onDeleteThank = /* GraphQL */ `
  subscription OnDeleteThank {
    onDeleteThank {
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
