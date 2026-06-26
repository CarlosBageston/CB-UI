import { FormikProvider, type FormikProps } from "formik";
import type { ReactNode, FormEventHandler } from "react";

interface CBFormProps<T extends object> {
  formik: FormikProps<T>;
  children: ReactNode;
  action?: string;
  method?: "post" | "get";
  activeOnSubmit?: boolean;
  className?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

function CBForm<T extends object>({
  formik,
  children,
  action,
  method,
  activeOnSubmit = true,
  className,
  onSubmit,
}: CBFormProps<T>) {
  return (
    <FormikProvider value={formik}>
      <form
        className={className}
        action={action}
        method={method}
        onSubmit={
          onSubmit ? onSubmit : activeOnSubmit ? formik.handleSubmit : undefined
        }
      >
        {children}
      </form>
    </FormikProvider>
  );
}

export default CBForm;
