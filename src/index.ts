import { TwIsolated } from "./TwIsolated";

if (!customElements.get("tw-isolated")) {
  customElements.define("tw-isolated", TwIsolated);
}

export { TwIsolated };
