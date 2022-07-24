import { Avatar } from "@mui/material";
import { AvatarModel } from "../../app/models/avatar";

const RhAvatar = ({ image, content, width = 60 }: AvatarModel) => {
  const validColors = ["#820263", "#FFCF34", "#31BADA"];
  const rand = Math.floor(Math.random() * validColors.length);
  return image ? (
    <Avatar alt="Avatar" sx={{ width: width, height: width }} src={image} />
  ) : (
    <Avatar
      sx={{
        bgcolor: validColors[rand]+'26',
        // opacity: 0.5,
        width: width,
        height: width,
        textTransform: "uppercase",
        color: validColors[rand],
      }}
      alt="Avatar"
    >
      {content}
    </Avatar>
  );
};

export default RhAvatar;
