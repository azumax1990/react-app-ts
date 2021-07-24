import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import { User } from "../types/apis/user"; 
import { useMessage } from "../hooks/useMessage";

export const useAuth = () => {

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();

  const login = useCallback((id: string) => {
    setLoading(true)
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      if (res.data) {
        showMessage({ title: "ログインしました", status: "success"});
        history.push("/home");
      } else {
        showMessage({ title: "ユーザーが見つかりません!!!", status: "error"});
      }
    })
    .catch(() => showMessage({ title: "ユーザーが見つかりません", status: "error"}))
    .finally(() => setLoading(false));
  }, [])
  return { login, loading }
};

