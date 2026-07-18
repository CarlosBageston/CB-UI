import { FormikProvider, type FormikProps } from "formik";
import type { ReactNode } from "react";

interface CBFormProps<T extends object> {
  formik: FormikProps<T>;
  children: ReactNode;
  className?: string;
  onSubmit?: () => void;
}

function CBForm<T extends object>({
  formik,
  children,
  className,
  onSubmit,
}: CBFormProps<T>) {
  return (
    <FormikProvider value={formik}>
      <form
        className={className}
        onSubmit={onSubmit ? onSubmit : formik.handleSubmit}
      >
        {children}
      </form>
    </FormikProvider>
  );
}

export default CBForm;
