import React from "react";
import Avatar from "./public/Avatar.jpg";
type userInfoProps = {
  userName: string;
};
export const userInfoIMG = [
  (user1 = {
    userName: "User 1",
    url: Avatar,
  }),
];

const Img = (props: { project: { url: string | undefined } }) => {
  return (
    <div>
      <img src={props.project.url} />
    </div>
  );
};

export function UserInfo({ userName }: userInfoProps) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <h1 className="text-body">Welcome {userName}!</h1>
        <p className="text-title">Let’s relax and watch a movie!</p>
      </div>
      <React.Fragment>
        {userInfoIMG.map(() => {
          return <Img project={user1} key={i} />;
        })}
      </React.Fragment>
    </div>
  );
}
