import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState} = createGlobalState({
    darkMode: false,
});

export { setGlobalState, useGlobalState };