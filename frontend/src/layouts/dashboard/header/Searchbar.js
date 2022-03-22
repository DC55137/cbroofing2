import { useState } from "react";
// @mui
import { styled } from "@mui/material/styles";
import {
  Input,
  Slide,
  Button,
  InputAdornment,
  ClickAwayListener,
} from "@mui/material";
// utils
import cssStyles from "../../../utils/cssStyles";
// components
import Iconify from "../../../components/Iconify";
import { IconButtonAnimate } from "../../../components/animate";
import { searchJob } from "src/redux/slices/jobs";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled("div")(({ theme }) => ({
  ...cssStyles(theme).bgBlur(),
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  height: APPBAR_MOBILE,
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  [theme.breakpoints.up("md")]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isOpen, setOpen] = useState(false);

  const handleSearch = () => {
    dispatch(searchJob(search));
    setOpen(false);
    navigate("/dashboard/jobs/search");
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!isOpen && (
          <IconButtonAnimate onClick={handleOpen}>
            <Iconify icon={"eva:search-fill"} width={20} height={20} />
          </IconButtonAnimate>
        )}

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyle>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              onChange={(event) => setSearch(event.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <Iconify
                    icon={"eva:search-fill"}
                    sx={{ color: "text.disabled", width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: "fontWeightBold" }}
            />
            <Button variant="contained" onClick={handleSearch}>
              Search
            </Button>
          </SearchbarStyle>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
