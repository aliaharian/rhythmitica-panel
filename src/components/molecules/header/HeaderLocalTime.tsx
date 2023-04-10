import { Button, Typography } from "@mui/material";
import styles from "../../../assets/scss/molecules/headerLocalTime.module.scss";

const HeaderLocalTime = () => {

return(
    <Button className={styles.localtime}>
        <Typography>10 : 34</Typography>
    </Button>
)



};
export default HeaderLocalTime;