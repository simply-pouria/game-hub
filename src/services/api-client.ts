import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "53aab910be0c412b8184af8c219491e2",
  },
});
