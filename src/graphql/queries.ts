/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      type
      title
      content
      timestamp
      contributorId
      correspondingPersonId
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
            title
            content
            timestamp
            contributorId
            correspondingPersonId
            owner
          }
          user {
            id
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
            title
            content
            timestamp
            contributorId
            correspondingPersonId
            owner
          }
        }
        nextToken
      }
      user {
        id
        name
        profile
        image
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
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      contributor {
        id
        name
        profile
        image
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
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      correspondingPerson {
        id
        name
        profile
        image
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
        title
        content
        timestamp
        contributorId
        correspondingPersonId
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
        user {
          id
          name
          profile
          image
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
        contributor {
          id
          name
          profile
          image
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
        correspondingPerson {
          id
          name
          profile
          image
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
      name
      profile
      image
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
            title
            content
            timestamp
            contributorId
            correspondingPersonId
            owner
          }
          user {
            id
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
            title
            content
            timestamp
            contributorId
            correspondingPersonId
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
          user {
            id
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
            title
            content
            timestamp
            contributorId
            correspondingPersonId
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
        name
        profile
        image
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
        title
        content
        timestamp
        contributorId
        correspondingPersonId
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
        user {
          id
          name
          profile
          image
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
        contributor {
          id
          name
          profile
          image
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
        correspondingPerson {
          id
          name
          profile
          image
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
        name
        profile
        image
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
          title
          content
          timestamp
          contributorId
          correspondingPersonId
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          user {
            id
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
          contributor {
            id
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
          correspondingPerson {
            id
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
          name
          profile
          image
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
        name
        profile
        image
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
        title
        content
        timestamp
        contributorId
        correspondingPersonId
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
        user {
          id
          name
          profile
          image
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
        contributor {
          id
          name
          profile
          image
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
        correspondingPerson {
          id
          name
          profile
          image
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
          name
          profile
          image
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
          title
          content
          timestamp
          contributorId
          correspondingPersonId
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          user {
            id
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
          contributor {
            id
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
          correspondingPerson {
            id
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
      user {
        id
        name
        profile
        image
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
        title
        content
        timestamp
        contributorId
        correspondingPersonId
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
        user {
          id
          name
          profile
          image
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
        contributor {
          id
          name
          profile
          image
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
        correspondingPerson {
          id
          name
          profile
          image
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
        user {
          id
          name
          profile
          image
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
          title
          content
          timestamp
          contributorId
          correspondingPersonId
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          user {
            id
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
          contributor {
            id
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
          correspondingPerson {
            id
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
        title
        content
        timestamp
        contributorId
        correspondingPersonId
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
        user {
          id
          name
          profile
          image
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
        contributor {
          id
          name
          profile
          image
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
        correspondingPerson {
          id
          name
          profile
          image
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
          title
          content
          timestamp
          contributorId
          correspondingPersonId
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          user {
            id
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
          contributor {
            id
            name
            profile
            image
            createdAt
            updatedAt
            owner
          }
          correspondingPerson {
            id
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
          name
          profile
          image
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
