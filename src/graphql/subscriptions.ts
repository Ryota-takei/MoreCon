/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
export const onCreateThank = /* GraphQL */ `
  subscription OnCreateThank {
    onCreateThank {
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
export const onUpdateThank = /* GraphQL */ `
  subscription OnUpdateThank {
    onUpdateThank {
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
export const onDeleteThank = /* GraphQL */ `
  subscription OnDeleteThank {
    onDeleteThank {
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
