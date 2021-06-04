import { Storage } from "aws-amplify";
import { GetUser } from "../../types/user";

export const UseGetImage = (
  userInformation: GetUser,
  setImageUrl: React.Dispatch<React.SetStateAction<string>>
) => {
  const getImage = async () => {
    try {
      if (userInformation?.image) {
        await Storage.get(userInformation.image).then((url) => {
          if (typeof url === "string") {
            setImageUrl(url);
          }
        });
      }
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
  };
  return { getImage };
};
