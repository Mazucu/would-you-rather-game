import React from "react";
function Avatar(props) {
  const defaultAvatar = "/avatar.png";
  const avatarURL = props.url ? props.url : defaultAvatar;
  const className = props.small ? "avatar small" : "avatar";
  return (
    <img
      src={avatarURL}
      alt={`Avatar of ${props.name}`}
      className={className}
    />
  );
}

export default Avatar;
