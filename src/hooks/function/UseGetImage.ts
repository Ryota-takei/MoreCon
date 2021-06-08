import { Storage } from "aws-amplify";
import { GetUser } from "../../types/user/user";
import { useCallback, useEffect, useState } from "react";

export const useGetImage = (userInformation: GetUser) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>("");

  const getImage =useCallback( async (userInformation: GetUser) => {
    try {
      if (userInformation?.image) {
        const res = (await Storage.get(userInformation.image)) as string;
        console.log(res);
        return res;
      }
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
  },[userInformation])

  useEffect(() => {
    let sub = false;
    const getURL = async () => {
      const res = await getImage(userInformation);
      if (!sub) {
        setImageUrl(res);
      }
    };
    getURL();

    return () => {
      sub = true;
    };
  }, [userInformation]);

  return {imageUrl};
};
