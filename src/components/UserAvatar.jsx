import React from "react";
import { AvatarComponent } from "avatar-initials";

const UserAvatar = (props) => {
  return (
    <AvatarComponent
      useGravatar={false}
      initials={props.user[0]}
      size={36}
      classes="rounded-circle mx-2 my-3"
      background="#6f42c1"
      color="#ffffff"
      offsetY={20}
    ></AvatarComponent>
  );
};

export default UserAvatar;
