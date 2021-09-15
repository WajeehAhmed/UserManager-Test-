import axios from "axios";

const backend = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_BACKEND
      : process.env.REACT_APP_BACKEND_DEV,
});

backend.interceptors.request.use(
  (config) => {
    let token = "";
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FjdGl2ZSI6dHJ1ZSwiY291bnRlcl9sb2dpbiI6NCwiX2lkIjoiNWVkZGU3MGQ4MDUzNjMxMWFiYzIzNDcxIiwidXNlcm5hbWUiOiJBZG1pbi1LaXBzLTEiLCJwZXJzb25fbmFtZSI6IkFkbWluLUtpcHMtMSIsInNjaG9vbCI6eyJfaWQiOiI1ZWM1MGEyODAzYTIxODIzZGNhMmQ1MWUiLCJuYW1lIjoiS0lQUy1FbnRyeSBUZXN0IiwiYWRkcmVzcyI6Ik1haW4gUm9hZCwgRy0xMCBNYXJrYXosIElzbGFtYWJhZCIsImNvbnRhY3QiOiIwNTEtMjI4MDQ2MiIsIl9fdiI6MH0sInJvbGUiOnsiX2lkIjoiNWVkMjI4Y2ExZTRkZjQyYjhjNGVjM2I0IiwidXNlclJvbGUiOiJTY2hvb2wgQWRtaW4iLCJfX3YiOjAsImxvZ2luTGltaXQiOjd9LCJwYXNzd29yZCI6IiQyYiQxMCRvb1ZYNXhpYnp3TmM0NGhPYW5TaG51UFZ4RHlVUS9aTXRYc2NtSll0OUkvNVVPelFLODFzeSIsIl9fdiI6MCwiaWF0IjoxNTkxNjgzMjYzfQ.a5XBZIC-A_fHsvN2dRrR9lElR7kVigoGvI0xzT1O5ZU";
    token = sessionStorage.getItem("token");

    if (!token) token = localStorage.getItem("token");
    if (token) config.headers = { Authorization: `bearer ${token}` };
    return config;
  },
  (error) => Promise.reject(error)
);

export default backend;
