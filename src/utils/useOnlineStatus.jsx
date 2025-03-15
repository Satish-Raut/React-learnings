import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [internetStatus, setInternetStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
        setInternetStatus(false)
    });
  }, []);

  useEffect(() => {
    window.addEventListener("online", () => {
        setInternetStatus(true)
    });
  }, []);

  //boolean value return
  return internetStatus;
};

export default useOnlineStatus;
