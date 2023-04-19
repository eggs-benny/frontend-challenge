import { Box, Chip, Typography } from '@mui/material';
import { styles } from '../styles/Post.styles';
import { BlueDot, BlueDotContainer } from './BlueDot';

export function Post({ thumbnail, name, email }) {
  return (
    <Box data-testid="post" sx={styles.container}>
      <Box>
        <BlueDotContainer>
          <BlueDot />
          <BlueDot />
          <BlueDot />
        </BlueDotContainer>
      </Box>
      <img src={thumbnail} alt="description" />
      <Box sx={{ marginLeft: '5px'}}>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <Box sx={styles.chipContainer}>
            <Chip
              test-id="chip-approval-status"
              label="APPROVED"
              size="small"
              sx={styles.chipApprovalStatus}
            />
            <Chip test-id="chip-f" label="F" size="small" sx={styles.chipF} />
          </Box>
          <Typography
            test-id="post-type"
            variant="subtitle2"
            fontSize="10px"
            sx={styles.story}
          >
            story
          </Typography>
        </Box>
        <Typography
          test-id="name"
          variant="subtitle1"
          fontSize="12px"
          fontWeight="bold"
          sx={styles.image}
        >
          {name}
        </Typography>
        <Typography
          test-id="email"
          variant="subtitle2"
          fontSize="10px"
          sx={styles.email}
        >
          {email}
        </Typography>
      </Box>
    </Box>
  );
}
