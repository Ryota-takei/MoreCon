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
      comments {
        items {
          id
          type
          content
          timestamp
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
          }
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          }
        }
        nextToken
      }
      contributor {
        id
        displayId
        name
        profile
        image
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      owner
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
      comments {
        items {
          id
          type
          content
          timestamp
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
          }
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          }
        }
        nextToken
      }
      contributor {
        id
        displayId
        name
        profile
        image
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      owner
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
      comments {
        items {
          id
          type
          content
          timestamp
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
          }
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          }
        }
        nextToken
      }
      contributor {
        id
        displayId
        name
        profile
        image
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      owner
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
      thankCounts {
        items {
          id
          userId
          postId
          correspondingUserId
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          }
        }
        nextToken
      }
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
          comments {
            nextToken
          }
          likes {
            nextToken
          }
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
          comments {
            nextToken
          }
          likes {
            nextToken
          }
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
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          type
          content
          timestamp
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
          }
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          }
        }
        nextToken
      }
      thank {
        items {
          id
          userId
          postId
          correspondingUserId
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
      thankCounts {
        items {
          id
          userId
          postId
          correspondingUserId
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          }
        }
        nextToken
      }
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
          comments {
            nextToken
          }
          likes {
            nextToken
          }
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
          comments {
            nextToken
          }
          likes {
            nextToken
          }
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
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          type
          content
          timestamp
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
          }
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          }
        }
        nextToken
      }
      thank {
        items {
          id
          userId
          postId
          correspondingUserId
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
      thankCounts {
        items {
          id
          userId
          postId
          correspondingUserId
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          }
        }
        nextToken
      }
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
          comments {
            nextToken
          }
          likes {
            nextToken
          }
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
          comments {
            nextToken
          }
          likes {
            nextToken
          }
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
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          type
          content
          timestamp
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
          }
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          }
        }
        nextToken
      }
      thank {
        items {
          id
          userId
          postId
          correspondingUserId
          user {
            id
            displayId
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
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
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
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
        contributor {
          id
          displayId
          name
          profile
          image
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
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
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        owner
      }
      user {
        id
        displayId
        name
        profile
        image
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
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
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
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
        contributor {
          id
          displayId
          name
          profile
          image
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
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
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        owner
      }
      user {
        id
        displayId
        name
        profile
        image
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      userId
      postId
      user {
        id
        displayId
        name
        profile
        image
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
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
        contributor {
          id
          displayId
          name
          profile
          image
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
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
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        owner
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
      user {
        id
        displayId
        name
        profile
        image
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
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
        contributor {
          id
          displayId
          name
          profile
          image
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
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
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        owner
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
      user {
        id
        displayId
        name
        profile
        image
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
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
        contributor {
          id
          displayId
          name
          profile
          image
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
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
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        owner
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
      user {
        id
        displayId
        name
        profile
        image
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
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
        contributor {
          id
          displayId
          name
          profile
          image
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
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
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        owner
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
      user {
        id
        displayId
        name
        profile
        image
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
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
        contributor {
          id
          displayId
          name
          profile
          image
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
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
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        owner
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
      user {
        id
        displayId
        name
        profile
        image
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
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
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      post {
        id
        type
        likeCount
        title
        content
        timestamp
        contributorId
        correspondingUserId
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
        contributor {
          id
          displayId
          name
          profile
          image
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
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
          thankCounts {
            nextToken
          }
          correspondingPosts {
            nextToken
          }
          posts {
            nextToken
          }
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          thank {
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
