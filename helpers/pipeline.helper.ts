import { Stream } from "stream";
import { promisify } from "util";

export const pipeline = promisify(Stream.pipeline);
