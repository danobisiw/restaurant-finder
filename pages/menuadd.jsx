import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const menuadd = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status== "authenticated") {
      router.push("/admin/login");
    }
  }, [status]);
  return <div>Adding Menu</div>;
};

export default menuadd;
