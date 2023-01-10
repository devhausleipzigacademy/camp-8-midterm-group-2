type userInfoProps = {
  userName: string;
};

export function UserInfo({ userName }: userInfoProps) {
  return (
    <div>
      <div>
        <h1 className="text-title">Home</h1>
        <h1 className="text-body">Welcome {userName}!</h1>
        <p className="text-primary">Let’s relax and watch a movie!</p>
      </div>
      <div> </div>
    </div>
  );
}
