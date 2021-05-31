/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
