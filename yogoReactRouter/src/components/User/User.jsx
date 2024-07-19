import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="bg-green-800 p-5 text-[2rem] font-bold text-center">
      User {userId}
    </div>
  );
}

export default User;
