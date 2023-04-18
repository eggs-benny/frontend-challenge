import {Box, Typography} from "@mui/material";

export function Post({thumbnail, name, email}) {
  return (
    <Box sx={{ textAlign: "left" }}>
      <div className="image">
        <img src={thumbnail} alt="description" />
      </div>
      <Typography variant="subtitle1" fontSize="12px" fontWeight="bold">
        <p >{name}</p>
        </Typography>
        <Typography variant="subtitle2" fontSize="10px">
        <p>{email}</p>
        </Typography>
      </Box>
  
  );
}