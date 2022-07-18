import { Avatar } from "@mui/material";
import { AvatarModel } from "../../app/models/avatar";

const RhAvatar = ({ image, content, width = 60 }: AvatarModel) => {
  const validColors = ["red", "pink", "purple", "deepPurple"];
  return image ? (
    <Avatar alt="Avatar" src={image} />
  ) : (
    <Avatar
      sx={{
        bgcolor: validColors[Math.floor(Math.random() * validColors.length)],
      }}
      style={{ width: width, height: width }}
      alt="Avatar"
    >
      {content}
    </Avatar>
  );
};

export default RhAvatar;
