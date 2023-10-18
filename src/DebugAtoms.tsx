import { useAtomsDebugValue } from "jotai-devtools";

function DebugAtoms() {
  useAtomsDebugValue();
  return null;
}

export default DebugAtoms;
