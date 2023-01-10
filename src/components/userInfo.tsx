type userInfoProps = {
  userName: string;
};

export function UserInfo({ userName }: userInfoProps) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <h1 className="text-body">Welcome {userName}!</h1>
        <p className="text-title">Let’s relax and watch a movie!</p>
      </div>
      <div>{userImg}</div>
    </div>
  );
}
