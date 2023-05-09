import { api } from "../configs";

export const getUser = async (userId) => {
  try {
    const { data } = await api.get(`/user/${userId}`);
    return data;
  } catch (error) {
    throw new Error(
      `ดึงข้อมูลผู้ใช้งานไม่ได้ เนื่องจาก ${error?.response?.data?.error?.message}`
    );
  }
};
