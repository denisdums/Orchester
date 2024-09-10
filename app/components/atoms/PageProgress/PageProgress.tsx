import { useEffect } from "react";
import { useNavigation } from "@remix-run/react";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import "./PageProgress.css";

export default function PageProgress() {
  const navigation = useNavigation();
  const loading = navigation.state !== "idle";

  useEffect(() => {
    if (loading) {
      if (NProgress.status === null) {
        NProgress.start();
      }
    } else {
      NProgress.done();
    }
  }, [loading]);

  return <></>;
}