import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import {
  Container,
  Stack,
  Box,
  DialogActions,
  CircularProgress,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormProvider, RHFTextField } from "src/components/hook-form";

//REDUX
import { createJob } from "src/redux/slices/jobs";
import { useState } from "react";

// ----------------------------------------------------------------------

export default function ContactForm() {
  const dispatch = useDispatch();
  const [sent, setSent] = useState(false);

  const { isLoading } = useSelector((state) => state.jobs);

  const NewJobSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string().required("Phone is required"),
    notes: Yup.string().required("notes is required"),
  });

  const defaultValues = {
    name: "",
    mobile: "",
    email: "",
    address: "",
    notes: "",
  };

  const methods = useForm({
    resolver: yupResolver(NewJobSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      dispatch(
        createJob({
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          address: data.address,
          notes: data.notes,
        })
      );
      setSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Get A free quote
      </Typography>
      {isLoading ? (
        <Container sx={{ textAlign: "center" }}>
          <CircularProgress sx={{ marginY: "150px" }} />
        </Container>
      ) : !sent ? (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Box
              sx={{
                display: "grid",
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                },
              }}
            >
              <RHFTextField name="name" label="Name *" />
              <RHFTextField name="mobile" label="Phone Number *" />
            </Box>

            <RHFTextField name="email" label="Email" />
            <RHFTextField name="address" label="Address" />
            <RHFTextField
              name="notes"
              label="Description *"
              multiline
              rows={4}
            />
          </Stack>

          <DialogActions>
            <LoadingButton
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Request Quote
            </LoadingButton>
          </DialogActions>
        </FormProvider>
      ) : (
        <Typography variant="p" sx={{ marginY: "150px" }}>
          Thank you for your message. Daniel will contact you shortly to discuss
          further.
        </Typography>
      )}
    </Container>
  );
}
