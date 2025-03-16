import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);
  useEffect(() => {
    addEventListener("offline", () => {
      setonlineStatus(false);
    });
    addEventListener("online", () => {
      setonlineStatus(true);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
