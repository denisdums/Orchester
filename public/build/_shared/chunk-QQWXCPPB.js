import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-KMJX2WDA.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/atoms/OpenIcon.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/atoms/OpenIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/atoms/OpenIcon.tsx"
  );
  import.meta.hot.lastModified = "1703104455851.2375";
}
function OpenIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" }, void 0, false, {
    fileName: "app/components/atoms/OpenIcon.tsx",
    lineNumber: 23,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/atoms/OpenIcon.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = OpenIcon;
var _c;
$RefreshReg$(_c, "OpenIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  OpenIcon
};
//# sourceMappingURL=/build/_shared/chunk-QQWXCPPB.js.map
