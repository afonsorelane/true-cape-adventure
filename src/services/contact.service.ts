import api from "../api/axios";

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const sendContactMessage = async (data: ContactData) => {
  const res = await api.post("/contact", data);
  return res.data;
};

