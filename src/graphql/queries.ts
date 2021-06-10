/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
      nextToken
    }
  }
`;
export const listPostsSortedByContributor = /* GraphQL */ `
  query ListPostsSortedByContributor(
    $contributorId: ID
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsSortedByContributor(
      contributorId: $contributorId
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
      nextToken
    }
  }
`;
export const listPostsSortedByCorrespondingUser = /* GraphQL */ `
  query ListPostsSortedByCorrespondingUser(
    $correspondingUserId: ID
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsSortedByCorrespondingUser(
      correspondingUserId: $correspondingUserId
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
      nextToken
    }
  }
`;
export const searchByDisplayId = /* GraphQL */ `
  query SearchByDisplayId(
    $displayId: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    searchByDisplayId(
      displayId: $displayId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        owner
      }
      nextToken
    }
  }
`;
export const listCommentsSortedByTimestamp = /* GraphQL */ `
  query ListCommentsSortedByTimestamp(
    $postId: ID
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentsSortedByTimestamp(
      postId: $postId
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
        owner
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
        owner
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
        owner
      }
      nextToken
    }
  }
`;
