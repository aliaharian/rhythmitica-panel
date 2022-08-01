import { Avatar } from "@mui/material";
import { AvatarModel } from "../../app/models/avatar";

const RhAvatar = ({ bordered, image, content, width = 60 }: AvatarModel) => {
  const validColors = ["#820263", "#FFCF34", "#31BADA"];
  const rand = Math.floor(Math.random() * validColors.length);
  return image ? (
    <Avatar
      alt="Avatar"
      sx={{
        width: width,
        height: width,
        border: bordered ? "1px solid #820263" : "unset",
      }}
      src={image}
    />
  ) : (
    <Avatar
      sx={{
        bgcolor: validColors[rand] + "26",
        // opacity: 0.5,
        width: width,
        fontSize: width/3,
        height: width,
        textTransform: "uppercase",
        color: validColors[rand],
        border: bordered ? "1px solid "+validColors[rand] : "unset",
      }}
      alt="Avatar"
    >
      {content}
    </Avatar>
  );
};

export default RhAvatar;
