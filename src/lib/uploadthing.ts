import type { ourFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react/hooks";

export const { useUploadThing } = generateReactHelpers<ourFileRouter>();
