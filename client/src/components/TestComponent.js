import React from "react";
import {useDMContext} from "../utils/DMContext";

export default function TestComponent() {
    const {message} = useDMContext();

    return (
        <p>{message}</p>
    )
}