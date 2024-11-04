import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-KMJX2WDA.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/atoms/Separator.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/atoms/Separator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/atoms/Separator.tsx"
  );
  import.meta.hot.lastModified = "1703329185812.8113";
}
function Separator({
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: `max-w-md w-full mx-auto ${className}` }, void 0, false, {
    fileName: "app/components/atoms/Separator.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = Separator;
var _c;
$RefreshReg$(_c, "Separator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Separator
};
//# sourceMappingURL=/build/_shared/chunk-D7Q44KC3.js.map
