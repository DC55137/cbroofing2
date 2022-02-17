import { useEffect } from "react";
// @mui
import { styled } from "@mui/material/styles";
import { Container, Box } from "@mui/material";
// components
import Page from "../components/Page";
import { GalleryHero, GalleryCard } from "src/sections/gallery";
import { SkeletonProductItem } from "src/components/skeleton";
// redux
import { useDispatch, useSelector } from "../redux/store";
import { getGalleries } from "../redux/slices/gallery";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Contact() {
  const dispatch = useDispatch();

  const { galleries, isLoading } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(getGalleries());
  }, [dispatch]);

  return (
    <Page title="Gallery">
      <RootStyle>
        <GalleryHero />
        <Container sx={{ my: 10 }}>
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
            }}
          >
            {(isLoading ? [...Array(12)] : galleries).map((gallery, index) =>
              gallery ? (
                <GalleryCard key={gallery._id} gallery={gallery} />
              ) : (
                <SkeletonProductItem key={index} />
              )
            )}
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
