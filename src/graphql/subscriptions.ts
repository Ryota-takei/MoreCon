/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      type
      likeCount
      thankCount
      url
      title
      content
      timestamp
      contributorId
      correspondingUserId
      correspondingUserMessage
      correspondingUserTitle
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          userId
          postId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      Thanks {
        items {
          id
          userId
          postId
          correspondingUserId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
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
      thankCount
      url
      title
      content
      timestamp
      contributorId
      correspondingUserId
      correspondingUserMessage
      correspondingUserTitle
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          userId
          postId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      Thanks {
        items {
          id
          userId
          postId
          correspondingUserId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
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
      thankCount
      url
      title
      content
      timestamp
      contributorId
      correspondingUserId
      correspondingUserMessage
      correspondingUserTitle
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          userId
          postId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      Thanks {
        items {
          id
          userId
          postId
          correspondingUserId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
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
          thankCount
          url
          title
          content
          timestamp
          contributorId
          correspondingUserId
          correspondingUserMessage
          correspondingUserTitle
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
          Thanks {
            nextToken
          }
        }
        nextToken
      }
      posts {
        items {
          id
          type
          likeCount
          thankCount
          url
          title
          content
          timestamp
          contributorId
          correspondingUserId
          correspondingUserMessage
          correspondingUserTitle
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
          Thanks {
            nextToken
          }
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
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          userId
          postId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      thankCounts {
        items {
          id
          userId
          postId
          correspondingUserId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      thank {
        items {
          id
          userId
          postId
          correspondingUserId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
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
          thankCount
          url
          title
          content
          timestamp
          contributorId
          correspondingUserId
          correspondingUserMessage
          correspondingUserTitle
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
          Thanks {
            nextToken
          }
        }
        nextToken
      }
      posts {
        items {
          id
          type
          likeCount
          thankCount
          url
          title
          content
          timestamp
          contributorId
          correspondingUserId
          correspondingUserMessage
          correspondingUserTitle
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
          Thanks {
            nextToken
          }
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
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          userId
          postId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      thankCounts {
        items {
          id
          userId
          postId
          correspondingUserId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      thank {
        items {
          id
          userId
          postId
          correspondingUserId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
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
          thankCount
          url
          title
          content
          timestamp
          contributorId
          correspondingUserId
          correspondingUserMessage
          correspondingUserTitle
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
          Thanks {
            nextToken
          }
        }
        nextToken
      }
      posts {
        items {
          id
          type
          likeCount
          thankCount
          url
          title
          content
          timestamp
          contributorId
          correspondingUserId
          correspondingUserMessage
          correspondingUserTitle
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
          Thanks {
            nextToken
          }
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
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          userId
          postId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      thankCounts {
        items {
          id
          userId
          postId
          correspondingUserId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
        }
        nextToken
      }
      thank {
        items {
          id
          userId
          postId
          correspondingUserId
          post {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
          owner
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
        thankCount
        url
        title
        content
        timestamp
        contributorId
        correspondingUserId
        correspondingUserMessage
        correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        Thanks {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
      }
      owner
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
        thankCount
        url
        title
        content
        timestamp
        contributorId
        correspondingUserId
        correspondingUserMessage
        correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        Thanks {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
      }
      owner
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
        thankCount
        url
        title
        content
        timestamp
        contributorId
        correspondingUserId
        correspondingUserMessage
        correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        Thanks {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
      }
      owner
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
        thankCount
        url
        title
        content
        timestamp
        contributorId
        correspondingUserId
        correspondingUserMessage
        correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        Thanks {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
      }
      owner
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
        thankCount
        url
        title
        content
        timestamp
        contributorId
        correspondingUserId
        correspondingUserMessage
        correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        Thanks {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
      }
      owner
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
        thankCount
        url
        title
        content
        timestamp
        contributorId
        correspondingUserId
        correspondingUserMessage
        correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        Thanks {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
      }
      owner
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
        thankCount
        url
        title
        content
        timestamp
        contributorId
        correspondingUserId
        correspondingUserMessage
        correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        Thanks {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
      }
      owner
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
        thankCount
        url
        title
        content
        timestamp
        contributorId
        correspondingUserId
        correspondingUserMessage
        correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        Thanks {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
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
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
            owner
          }
          nextToken
        }
        posts {
          items {
            id
            type
            likeCount
            thankCount
            url
            title
            content
            timestamp
            contributorId
            correspondingUserId
            correspondingUserMessage
            correspondingUserTitle
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
            owner
          }
          nextToken
        }
        likes {
          items {
            id
            userId
            postId
            owner
          }
          nextToken
        }
        thankCounts {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
        thank {
          items {
            id
            userId
            postId
            correspondingUserId
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
