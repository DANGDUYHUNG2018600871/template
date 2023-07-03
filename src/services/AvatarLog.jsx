import React from 'react'
import { Avatar, Button } from 'antd';
import { useState } from 'react';
const UserList = ['H', 'U', 'N', 'G'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const GapList = [4, 3, 2, 1];

const AvatarLog = () => {
  const [user, setUser] = useState(UserList[0]);
  const [color, setColor] = useState(ColorList[0]);
  const [gap, setGap] = useState(GapList[0]);
  const changeUser = () => {
    const index = UserList.indexOf(user);
    setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
    setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
  };
  return (
    <React.Fragment>
      <Avatar
        style={{
          backgroundColor: color,
          verticalAlign: 'middle',
        }}
        size="large"
        gap={gap}
      >
        {user}
      </Avatar>
      <Button
        size="small"
        style={{
          margin: '0 12px',
          verticalAlign: 'middle',
        }}
        onClick={changeUser}
      >
        Đặng Duy Hùng
      </Button>
    </React.Fragment>
  );
};
export default AvatarLog;