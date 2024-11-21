import { getPayload } from "payload";

import payloadPromise from "../../../payload.config";

export const payload = await getPayload({ config: payloadPromise });
