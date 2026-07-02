import { Node } from "./modules.js";

// Used to make expected lists in tests
export function makeList(...values) {
  if (values.length === 0) return null;
  return Node(values[0], makeList(...values.slice(1)));
}
