import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-KMJX2WDA.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/organisms/LoginForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/organisms/LoginForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/organisms/LoginForm.tsx"
  );
  import.meta.hot.lastModified = "1703020135629.592";
}
function LoginForm({
  error = void 0
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold text-lg text-center", children: "Connexion" }, void 0, false, {
        fileName: "app/components/organisms/LoginForm.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center", children: "Connectez vous \xE0 votre compte." }, void 0, false, {
        fileName: "app/components/organisms/LoginForm.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/organisms/LoginForm.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", action: "/login", className: "flex flex-col items-center gap-4", children: [
      error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { role: "alert", className: "alert alert-error text-white max-w-sm mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "stroke-current shrink-0 h-6 w-6", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, false, {
          fileName: "app/components/organisms/LoginForm.tsx",
          lineNumber: 31,
          columnNumber: 141
        }, this) }, void 0, false, {
          fileName: "app/components/organisms/LoginForm.tsx",
          lineNumber: 31,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: error }, void 0, false, {
          fileName: "app/components/organisms/LoginForm.tsx",
          lineNumber: 32,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/organisms/LoginForm.tsx",
        lineNumber: 30,
        columnNumber: 27
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", className: "input input-bordered w-full max-w-sm", placeholder: "Email" }, void 0, false, {
        fileName: "app/components/organisms/LoginForm.tsx",
        lineNumber: 35,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/organisms/LoginForm.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", className: "input input-bordered w-full max-w-sm", placeholder: "Password" }, void 0, false, {
        fileName: "app/components/organisms/LoginForm.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/organisms/LoginForm.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-primary text-white mt-4 max-w-sm", children: "Login" }, void 0, false, {
        fileName: "app/components/organisms/LoginForm.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/organisms/LoginForm.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/organisms/LoginForm.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = LoginForm;
var _c;
$RefreshReg$(_c, "LoginForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  LoginForm
};
//# sourceMappingURL=/build/_shared/chunk-B2344H7Y.js.map
