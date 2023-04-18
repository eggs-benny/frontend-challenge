import { Box, Chip, Typography } from '@mui/material';

export function Post({ thumbnail, name, email }) {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <div className="image">
        <img src={thumbnail} alt="description" />
      </div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Chip
            label="APPROVED"
            size="small"
            sx={{
              backgroundColor: 'limegreen',
              color: 'white',
              fontWeight: 'bold',
              marginLeft: '-20px',
              transform: 'scale(0.5)'
            }}
          />
          <Chip
            label="F"
            size="small"
            sx={{
              marginLeft: '-27px',
              backgroundColor: 'dodgerblue',
              color: 'white',
              fontWeight: 'bold',
              transform: 'scale(0.5)'
            }}
          />
        </Box>
        <Typography
          variant="subtitle2"
          fontSize="10px"
          sx={{
            color: 'darkgrey',
            marginRight: '5px'
          }}
        >
          story
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'left', marginLeft: '3px' }}>
        <Typography
          variant="subtitle1"
          fontSize="12px"
          fontWeight="bold"
          sx={{
            overflow: 'hidden',
            marginTop: '-6px',
            marginBottom: '-3px',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '130px'
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="subtitle2"
          fontSize="10px"
          sx={{
            marginBottom: '15px'
          }}
        >
          {email}
        </Typography>
      </Box>
    </Box>
  );
}
