import { api } from "../configs";

export const getUser = async (userId) => {
  try {
    const { data } = await api.get(
      `${process.env.REACT_APP_API_URL}/user/${userId}`
    );
    return data;
  } catch (error) {
    throw new Error(
      `ดึงข้อมูลผู้ใช้งานไม่ได้ เนื่องจาก ${error?.response?.data?.error?.message}`
    );
  }
};

export const userLogin = async (payload) => {
  try {
    const { data } = await api.post(
      `${process.env.REACT_APP_API_URL}/user/login`,
      payload
    );

    window.localStorage.setItem("warehouse_remember", data?.userData?.uid?.id);
    window.localStorage.setItem("token", data?.accessToken);
    return data;
  } catch (error) {
    throw new Error(
      `ลงชื่อเข้าใช้ไม่สำเร็จเนื่องจาก ${
        error?.response?.data?.error?.message || error?.response?.data
      }`
    );
  }
};
