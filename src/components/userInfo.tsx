import React from "react";

type userInfoProps = {
  userName: string;
  userImg: string;
};

export function UserInfo({ userName, userImg }: userInfoProps): JSX.Element {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-3">
        <h1 className="text-primary">Welcome {userName}! 👋</h1>
        <p className="text-title">Let’s relax and watch a movie!</p>
      </div>
      <img src={userImg} alt="" className="rounded-full w-10 h-10" />
    </div>
  );
}
