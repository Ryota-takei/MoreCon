import { Storage } from "aws-amplify";
import { GetUser } from "../../types/user/user";
import { useCallback, useEffect, useState } from "react";

export const useGetImage = (userInformation: GetUser) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>("");

  const getImage = useCallback(
    async (userInformation: GetUser) => {
      try {
        if (userInformation?.image) {
          const res = (await Storage.get(userInformation.image)) as string;
          return res;
        }
      } catch (error) {
        console.log(error);
        alert("エラーが発生しました");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userInformation]
  );

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInformation]);

  return { imageUrl };
};
