import { Box } from '@mui/material';
// import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useMemo } from 'react';

const FaceCard = () => {
  const Favorites = [
    { name: 'react.js', icon: 'logos:react' },
    { name: 'redux', icon: 'logos:redux' },
    { name: 'typescript', icon: 'vscode-icons:file-type-typescript-official' },
  ];

  const renderFavorites = useMemo(
    () => (
      <Box
        component="ol"
        justifyContent="space-between"
        flexWrap={'wrap'}
        display={'flex'}
        padding={0}>
        {Favorites.map(({ name, icon }) => (
          <Box
            component="li"
            marginX={1}
            // className="technology-icon"
            sx={{ display: 'inline-flex' }}
            flexDirection="column"
            alignItems={'center'}>
            <Box
              component="span"
              className="iconify"
              data-icon={icon}
              data-width="56"
              data-height="56"
            />
            <Typography variant="caption">{name}</Typography>
          </Box>
        ))}
      </Box>
    ),
    [],
  );

  return (
    <Card sx={{ maxWidth: 345, paddingX: 2, paddingTop: 2 }} elevation={2}>
      <CardMedia component="img" alt="jing rong" image="/Profile.jpg" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Current Favorites
        </Typography>
        {renderFavorites}
      </CardContent>
    </Card>
  );
};

export default FaceCard;
