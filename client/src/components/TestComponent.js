import React from "react";
import {useDMContext} from "../utils/DMContext";

export default function TestComponent() {
    const { testmessage } = useDMContext();

    return (
        <p>{testmessage}</p>
    )
}