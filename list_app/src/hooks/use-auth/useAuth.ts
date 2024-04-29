import { API_URL } from "../../utils/contants";

const useAuth = () => {
  const isAuth = async () => {
    const reponse = await fetch(`${API_URL}/is-auth`, {
      headers: getAuthHeaders(),
    });
    if (!reponse.ok) {
      localStorage.clear();
    }
    return reponse.ok;
  };

  const authenticate = async (email: string, password: string) => {
    const base64Credentials = btoa(email + ":" + password);

    const reponse = await fetch(`${API_URL}/is-auth`, {
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    });

    if (reponse.ok) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("isAuth", "true");
    } else {
      localStorage.clear();
    }
    return reponse.ok;
  };

  const getAuthHeaders = () => {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password"); // README Never do this in real world, just for practicity in this case.

    const base64Credentials = btoa(email + ":" + password);

    return new Headers({ Authorization: `Basic ${base64Credentials}` });
  };

  const signOut = () => {
    localStorage.clear();
  };

  return {
    isAuth,
    getAuthHeaders,
    authenticate,
    signOut,
  };
};

export default useAuth;
