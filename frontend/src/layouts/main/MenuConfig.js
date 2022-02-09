// routes
import { PATH_PAGE } from "../../routes/paths";

// components
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Home",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: "/",
  },
  {
    title: "Gallery",
    icon: <Iconify icon={"clarity:image-gallery-line"} {...ICON_SIZE} />,
    path: PATH_PAGE.gallery,
  },
  {
    title: "About Us",
    icon: <Iconify icon={"mdi:home-roof"} {...ICON_SIZE} />,
    path: PATH_PAGE.about,
  },
  {
    title: "Testimonials",
    icon: <Iconify icon={"ic:outline-reviews"} {...ICON_SIZE} />,
    path: PATH_PAGE.testimonials,
  },
];

export default menuConfig;
