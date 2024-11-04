import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-KMJX2WDA.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/providers/UserProvider.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/providers/UserProvider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/providers/UserProvider.tsx"
  );
  import.meta.hot.lastModified = "1706562013978.2668";
}
var UserContext = (0, import_react.createContext)({
  isLogged: false,
  user: void 0
});
function UserProvider(props) {
  _s();
  const [isLogged, setIsLogged] = (0, import_react.useState)(props.isLogged);
  const [user, setUser] = (0, import_react.useState)(props.user);
  const [themeSwitchChecked, setThemeSwitchChecked] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setIsLogged(props.isLogged);
    setUser(props.user);
    const theme = localStorage.getItem("theme") ?? "light";
    setThemeSwitchChecked(theme === "dark");
  }, [props.isLogged, props.user]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserContext.Provider, { value: {
    isLogged,
    setIsLogged,
    user,
    setUser,
    themeSwitchChecked,
    setThemeSwitchChecked
  }, children: props.children }, void 0, false, {
    fileName: "app/providers/UserProvider.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s(UserProvider, "LjSsP82yv/ZvZ5W1FIigmEy8Z88=");
_c = UserProvider;
var useUser = () => {
  _s2();
  const {
    isLogged,
    setIsLogged,
    user,
    setUser,
    themeSwitchChecked,
    setThemeSwitchChecked
  } = (0, import_react.useContext)(UserContext);
  return {
    isLogged,
    setIsLogged,
    user,
    setUser,
    themeSwitchChecked,
    setThemeSwitchChecked
  };
};
_s2(useUser, "5bgCUPnFAx6/GTdlLn2B5+766pE=");
var _c;
$RefreshReg$(_c, "UserProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  UserContext,
  UserProvider,
  useUser
};
//# sourceMappingURL=/build/_shared/chunk-NCKGR2ZA.js.map
