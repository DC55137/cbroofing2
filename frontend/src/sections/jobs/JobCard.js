import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { Box, Card, Divider, Typography, CardActionArea } from "@mui/material";
// utils
import cssStyles from "src/utils/cssStyles";

// components
import Image from "src/components/Image";

// ----------------------------------------------------------------------

const OverlayStyle = styled("div")(({ theme }) => ({
  ...cssStyles().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
  top: 0,
  zIndex: 8,
  content: "''",
  width: "100%",
  height: "100%",
  position: "absolute",
}));

// ----------------------------------------------------------------------

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default function JobCard({ job }) {
  const { number, name, images, notes, stage, _id } = job;
  const image = images[0];

  return (
    <Card sx={{ textAlign: "center" }}>
      <CardActionArea to={`/dashboard/job/${_id}`} component={RouterLink}>
        <Box sx={{ position: "relative" }}>
          <OverlayStyle />
          <Image src={image} alt={image} ratio="16/9" />
        </Box>

        <Typography variant="subtitle1" sx={{ mt: 6 }}>
          {name}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {notes}
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
              Stage
            </Typography>
            <Typography variant="subtitle1">{stage}</Typography>
          </div>
          <div>
            <Typography
              variant="caption"
              component="div"
              sx={{ mb: 0.75, color: "text.disabled" }}
            >
              Number
            </Typography>
            <Typography variant="subtitle1">{number}</Typography>
          </div>
        </Box>
      </CardActionArea>
    </Card>
  );
}
