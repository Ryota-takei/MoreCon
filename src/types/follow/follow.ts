import { CreateFollowRelationshipMutation, GetUserQuery, ListFollowRelationshipByFollowerIdQuery, ListFollowRelationshipByFollowIdQuery, SearchByDisplayIdQuery } from "../../API";

export type SearchUser = {
  data: SearchByDisplayIdQuery;
};

export type FollowerInformation = {
  data: ListFollowRelationshipByFollowerIdQuery;
};

export type FollowInformation = {
  data: ListFollowRelationshipByFollowIdQuery;
};

export type CreateFollow = {
  data: CreateFollowRelationshipMutation;
};
export type FollowRelationshipInfo = {
  followId: string;
  followerId: string;
  id: string;
} | null;


export type UserInfo = {
  data: GetUserQuery;
};