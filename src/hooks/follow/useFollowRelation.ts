import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import {
  createFollowRelationship,
  deleteFollowRelationship,
} from "../../graphql/mutations";
import {
  listFollowRelationshipByFollowerId,
  listFollowRelationshipByFollowId,
} from "../../graphql/queries";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/slices/user/userSlice";
import {
  CreateFollow,
  FollowerInformation,
  FollowInformation,
  FollowRelationshipInfo,
} from "../../types/follow/follow";
import { GetUser } from "../../types/user/user";

export const useFollowRelation = (user: GetUser) => {
  const [followerRelationshipInfo, setFollowerRelationshipInfo] = useState<
    FollowRelationshipInfo[] | undefined | null
  >();
  const [followRelationshipInfo, setFollowRelationshipInfo] = useState<
    FollowRelationshipInfo[] | undefined | null
  >();
  const [isFollow, setIsFollow] = useState<
    FollowRelationshipInfo | undefined
  >();
  const [followerCount, setFollowerCount] = useState(0);
  const loginUser = useAppSelector(selectUser);

  const createNewFollowRelationship = async () => {
    if (isFollow) {
      const input = {
        id: isFollow.id,
      };
      try {
        await API.graphql(
          graphqlOperation(deleteFollowRelationship, { input })
        );
        setIsFollow(undefined);
        setFollowerCount((preCount) => preCount - 1);
      } catch (error) {
        console.log(error);
        alert("エラーが発生しました");
      }
    } else {
      const input = {
        followId: loginUser?.id,
        followerId: user?.id,
      };
      try {
        const res = (await API.graphql(
          graphqlOperation(createFollowRelationship, { input })
        )) as CreateFollow;
        setIsFollow(res.data.createFollowRelationship);
        setFollowerCount((preCount) => preCount + 1);
      } catch (error) {
        console.log(error);
        alert("エラーが発生しました");
      }
    }
  };

  useEffect(() => {
    if (user) {
      const getFollowInformation = async () => {
        const res = (await API.graphql(
          graphqlOperation(listFollowRelationshipByFollowerId, {
            followerId: user?.id,
          })
        )) as FollowerInformation;
        setFollowerRelationshipInfo(
          res.data.listFollowRelationshipByFollowerId?.items
        );
        setFollowerCount(
          res.data.listFollowRelationshipByFollowerId?.items?.length ?? 0
        );
      };

      const getFollowerInformation = async () => {
        const res = (await API.graphql(
          graphqlOperation(listFollowRelationshipByFollowId, {
            followId: user?.id,
          })
        )) as FollowInformation;
        setFollowRelationshipInfo(
          res.data.listFollowRelationshipByFollowId?.items
        );
      };

      getFollowerInformation();
      getFollowInformation();
    }
  }, [user, followerCount]);

  useEffect(() => {
    setIsFollow(() =>
      followerRelationshipInfo?.find((res) => res?.followId === loginUser?.id)
    );
  }, [loginUser, followerRelationshipInfo]);

  return {
    followerRelationshipInfo,
    followRelationshipInfo,
    isFollow,
    followerCount,
    createNewFollowRelationship,
  };
};
