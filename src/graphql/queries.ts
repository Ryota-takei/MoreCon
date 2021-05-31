/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        user {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
      nextToken
    }
  }
`;
export const getThank = /* GraphQL */ `
  query GetThank($id: ID!) {
    getThank(id: $id) {
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
export const listThanks = /* GraphQL */ `
  query ListThanks(
    $filter: ModelThankFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThanks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
      nextToken
    }
  }
`;
export const listPostsSortedByTimestamp = /* GraphQL */ `
  query ListPostsSortedByTimestamp(
    $type: String
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsSortedByTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const listPostsSortedByLikeCount = /* GraphQL */ `
  query ListPostsSortedByLikeCount(
    $type: String
    $likeCount: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsSortedByLikeCount(
      type: $type
      likeCount: $likeCount
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const listCommentsSortedByTimestamp = /* GraphQL */ `
  query ListCommentsSortedByTimestamp(
    $type: String
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentsSortedByTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        user {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
