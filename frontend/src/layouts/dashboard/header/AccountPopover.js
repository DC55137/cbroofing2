import { useSnackbar } from "notistack";

import { useNavigate } from "react-router-dom";
// @mui
import { Stack, Button } from "@mui/material";
// routes
import { PATH_AUTH } from "../../../routes/paths";
// hooks
import useAuth from "../../../hooks/useAuth";

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    try {
      await logout();
      navigate(PATH_AUTH.home, { replace: true });
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Unable to logout!", { variant: "error" });
    }
  };

  return (
    <>
      <Stack sx={{ p: 1 }}>
        <Button variant="contained" onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </Button>
      </Stack>
    </>
  );
}
