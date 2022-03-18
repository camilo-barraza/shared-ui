import { compose } from "ramda"; // Replace with any compose() function of your choice
import { lighten, desaturate } from "polished";

// Create tone() helper
export const toneTestFn = compose(lighten(0.1), desaturate(0.1));
