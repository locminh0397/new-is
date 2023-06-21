import { http } from "./http";

export const getInfomation = async () => {
  const res = await http.get("/infomation?populate=*");
  return res.data;
};
