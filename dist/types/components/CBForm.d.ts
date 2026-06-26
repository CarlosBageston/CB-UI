import { type FormikProps } from "formik";
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
declare function CBForm<T extends object>({ formik, children, action, method, activeOnSubmit, className, onSubmit, }: CBFormProps<T>): import("react").JSX.Element;
export default CBForm;
