import React from "react";
import type { CBAutocompleteProps } from "./types";
declare function CBAutocomplete<T>({ label, value, items, getLabel, getValue, onValueChange, onSearch, placeholder, helperText, error, loading: externalLoading, disabled, debounce, minSearchLength, color, radius, noResultsText, clearable, }: CBAutocompleteProps<T>): React.JSX.Element;
export default CBAutocomplete;
