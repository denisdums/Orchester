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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// app/providers/ToastProvider.tsx
var import_react = __toESM(require_react(), 1);

// app/components/molecules/Toast.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/molecules/Toast.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/molecules/Toast.tsx"
  );
  import.meta.hot.lastModified = "1706304797110.3464";
}
function Toast({
  toast
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    toast.status === "success" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "toast toast-top toast-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "alert alert-success text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: toast.content }, void 0, false, {
      fileName: "app/components/molecules/Toast.tsx",
      lineNumber: 27,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/molecules/Toast.tsx",
      lineNumber: 26,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/molecules/Toast.tsx",
      lineNumber: 25,
      columnNumber: 44
    }, this),
    toast.status === "error" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "toast toast-top toast-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "alert alert-error text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: toast.content }, void 0, false, {
      fileName: "app/components/molecules/Toast.tsx",
      lineNumber: 32,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/molecules/Toast.tsx",
      lineNumber: 31,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/molecules/Toast.tsx",
      lineNumber: 30,
      columnNumber: 42
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/molecules/Toast.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = Toast;
var _c;
$RefreshReg$(_c, "Toast");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/providers/ToastProvider.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/providers/ToastProvider.tsx"' + id);
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
    "app/providers/ToastProvider.tsx"
  );
  import.meta.hot.lastModified = "1706305067421.4666";
}
var ToastContext = (0, import_react.createContext)({
  toast: void 0
});
function ToastProvider(props) {
  _s();
  const [toast, setToast] = (0, import_react.useState)(void 0);
  const [toastActive, setToastActive] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (toast === void 0)
      return;
    setToastActive(true);
    setTimeout(() => setToastActive(false), 3e3);
  }, [toast]);
  (0, import_react.useEffect)(() => {
    if (toastActive)
      return;
    setToast(void 0);
  }, [toastActive]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ToastContext.Provider, { value: {
    toast,
    setToast
  }, children: [
    props.children,
    toastActive && toast !== "undefined" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Toast, { toast }, void 0, false, {
      fileName: "app/providers/ToastProvider.tsx",
      lineNumber: 46,
      columnNumber: 54
    }, this)
  ] }, void 0, true, {
    fileName: "app/providers/ToastProvider.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(ToastProvider, "It2j/gToEqA/id21YFBMWrhiosQ=");
_c2 = ToastProvider;
var useToast = () => {
  _s2();
  const {
    toast,
    setToast
  } = (0, import_react.useContext)(ToastContext);
  return {
    toast,
    setToast
  };
};
_s2(useToast, "eCsipwwAhYFjGrTJdHWBLS4PH3I=");
var _c2;
$RefreshReg$(_c2, "ToastProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  require_classnames,
  ToastProvider,
  useToast
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=/build/_shared/chunk-U6HI3IZU.js.map
