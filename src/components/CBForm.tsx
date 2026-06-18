import { FormikProvider, type FormikProps } from "formik";

interface CBFormProps<T extends Record<string, unknown>> {
  formik: FormikProps<T>;
  children: React.ReactNode;
}

function CBForm<T extends Record<string, unknown>>({
  formik,
  children,
}: CBFormProps<T>) {
  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>{children}</form>
    </FormikProvider>
  );
}

export default CBForm;
