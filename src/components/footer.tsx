import { useMediaQuery } from "react-responsive"

import { WideFooter } from "./wideFooter";
import { NarrowFooter } from "./narrowFooter";

export function Footer() {
    const isNarrow = useMediaQuery({ maxWidth: 600 })

    return isNarrow ? <NarrowFooter /> : <WideFooter />
}
