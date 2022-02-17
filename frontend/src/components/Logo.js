import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// @mui

import { Box } from "@mui/material";

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <img
        src="https://res.cloudinary.com/dddxwdp7v/image/upload/v1644284642/cbroofing/logo_hllzih.png"
        alt="Logo"
        style={{ width: "200px" }}
      />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
