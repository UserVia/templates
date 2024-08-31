import {
    Box,
    Container,
    MenuItem,
    Typography,
    Unstable_Grid2 as Grid,
    TextField

  } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const companySizeOptions = ['1-10', '11-30', '31-50', '50+'];

const initialValues = {
  companyName: 'ACME Corp LLC.',
  companySize: '1-10',
  email: 'chen.simmons@acmecorp.com',
  name: 'Chen Simmons',
  jobTitle: 'Operation',
  submit: null
};

const validationSchema = Yup.object({
  companyName: Yup
    .string()
    .max(255)
    .required('Company name is required'),
  companySize: Yup
    .string()
    .max(255)
    .oneOf(companySizeOptions)
    .required('Company size is required'),
  email: Yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  name: Yup
    .string()
    .max(255)
    .required('Name is required'),
  jobTitle: Yup
    .string()
    .max(255)
    .required('Job title is required')
});

export const Select = () => {

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers) => {
      helpers.setStatus({ success: true });
      helpers.setSubmitting(false);
    }
  });

  return (
    <>
    <Box sx={{m:2, width:300}}>
        <TextField
                error={Boolean(formik.touched.companySize && formik.errors.companySize)}
                fullWidth
                helperText={formik.touched.companySize && formik.errors.companySize}
               /* label="Company size"*/
                name="companySize"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                select
                value={formik.values.companySize}
            >
            {companySizeOptions.map((companySizeOption) => (
            <MenuItem
            key={companySizeOption}
            value={companySizeOption}
            >
              {companySizeOption}
            </MenuItem>
            ))}
        </TextField>
    </Box>
    </>
  )
}

