import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import { User } from "../types/apis/user"; 
import { useMessage } from "../hooks/useMessage";

export const AllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    setLoading(true)
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      setUsers(res.data)
    })
    .catch(() => showMessage({ title: "ユーザー取得出来ません。", status: "error"}))
    .finally(() => setLoading(false))
  }, []);
  return { getUsers, users, loading }
}



