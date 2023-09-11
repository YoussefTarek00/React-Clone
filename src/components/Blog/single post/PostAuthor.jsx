import { useSelector } from "react-redux";
import { selectAllUsers } from "../../../Services/user/userSlice";
import { Link, useTheme } from "@mui/material";

const PostAuthor = ({ userId }) => {
  const theme = useTheme();
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return (
    <span>
      {" "}
      by{" "}
      <Link
        sx={{  color: theme.palette.ColorChange.main }}
        href={`${userId}`}
        underline="hover"
      >
        {author ? author.name : "Unknown author"}
      </Link>
    </span>
  );
};
export default PostAuthor;
