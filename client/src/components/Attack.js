import React from "react";
import { Input } from "@chakra-ui/react";

// - Input field for Attack
// used this as reference
// https://www.d20srd.org/srd/monsters/minotaur.htm
export const Attack = () => {
    return (
        <Input placeholder="Greataxe +9 melee (3d6+6/×3) or gore +9 melee (1d8+4)" />
    )
}

export default Attack;