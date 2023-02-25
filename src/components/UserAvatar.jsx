import React from "react";
import { AvatarComponent } from "avatar-initials";

const UserAvatar = (props) => {
  return (
    <AvatarComponent
      useGravatar={false}
      initials={props.user[0]}
      size={props.size || 36}
      classes="rounded-circle mx-2 my-3"
      background="#0d6efd"
      color="#f8f9fa"
      offsetY={props.size / 2 + 2 || 20}
    ></AvatarComponent>
  );
};

export default UserAvatar;
