export const UseGetCreateDate = (timestamp: number | undefined) => {
  let date;
  if(!timestamp) return {date}
    const createTime = new Date(timestamp * 1000);
    const time1 = new Date(createTime);
     date = `${time1.getFullYear()}-${
      time1.getMonth() + 1
    }-${time1.getDate()}`;
    return { date };
  

};
