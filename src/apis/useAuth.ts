import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { User } from "../types/apis/user"; 

export const useAuth = () => {

  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true)
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      if (res.data) {
        history.push("/home");
      } else {
        alert("いないよ");
      }
    })
    .catch(() => alert("ログイン出来ないよ"))
    .finally(() => setLoading(false));
  }, [])
  return { login, loading }
};

