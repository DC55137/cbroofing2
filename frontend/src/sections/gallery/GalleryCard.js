import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { Box, Card, Divider, Typography, CardActionArea } from "@mui/material";
// utils
import cssStyles from "src/utils/cssStyles";
import { fShortenNumber } from "src/utils/formatNumber";
// components
import Image from "src/components/Image";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

GalleryCard.propTypes = {
  gallery: PropTypes.object.isRequired,
};

export default function GalleryCard({ gallery }) {
  const { location, cover, description, duration, date, _id } = gallery;

  return (
    <Card sx={{ textAlign: "center" }}>
      <CardActionArea to={`/gallery/${_id}`} component={RouterLink}>
        <Box sx={{ position: "relative" }}>
          <Image src={cover} alt={cover} ratio="16/9" />
        </Box>

        <Typography variant="subtitle1" sx={{ mt: 6 }}>
          {location}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>

        <Divider sx={{ borderStyle: "dashed", my: 3 }} />

        <Box
          sx={{ py: 3, display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <div>
            <Typography
              variant="caption"
              component="div"
              sx={{ mb: 0.75, color: "text.disabled" }}
            >
              Days
            </Typography>
            <Typography variant="subtitle1">
              {fShortenNumber(duration)}
            </Typography>
          </div>

          <div>
            <Typography
              variant="caption"
              component="div"
              sx={{ mb: 0.75, color: "text.disabled" }}
            >
              Start Date
            </Typography>
            <Typography variant="subtitle1">{date}</Typography>
          </div>
        </Box>
      </CardActionArea>
    </Card>
  );
}
