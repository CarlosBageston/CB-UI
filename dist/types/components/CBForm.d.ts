import { type FormikProps } from "formik";
import type { ReactNode } from "react";
interface CBFormProps<T extends object> {
    formik: FormikProps<T>;
    children: ReactNode;
    className?: string;
    onSubmit?: () => void;
}
declare function CBForm<T extends object>({ formik, children, className, onSubmit, }: CBFormProps<T>): import("react").JSX.Element;
export default CBForm;
