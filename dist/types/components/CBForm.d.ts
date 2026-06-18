import { type FormikProps } from "formik";
interface CBFormProps<T extends Record<string, unknown>> {
    formik: FormikProps<T>;
    children: React.ReactNode;
}
export declare function CBForm<T extends Record<string, unknown>>({ formik, children, }: CBFormProps<T>): import("react").JSX.Element;
export {};
