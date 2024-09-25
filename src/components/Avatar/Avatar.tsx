import placeholderAvatar from "../../images/avatar.png";

interface AvatarProps {
  avatarUrl: string | null;
  className: string;
}

const Avatar = ({ avatarUrl, className }: AvatarProps) => {
  return (
    <img
      src={avatarUrl ?? placeholderAvatar}
      alt="User Avatar"
      className={className}
    />
  );
};

export default Avatar;
