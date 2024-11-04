import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-KMJX2WDA.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/molecules/SuitRow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/molecules/SuitRow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/molecules/SuitRow.tsx"
  );
  import.meta.hot.lastModified = "1702498724307.8696";
}
function SuitRow(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: props.name }, void 0, false, {
      fileName: "app/components/molecules/SuitRow.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: props.item.quantity }, void 0, false, {
      fileName: "app/components/molecules/SuitRow.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: props.item.size }, void 0, false, {
      fileName: "app/components/molecules/SuitRow.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/molecules/SuitRow.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = SuitRow;
var _c;
$RefreshReg$(_c, "SuitRow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/organisms/SuitTable.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/organisms/SuitTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/organisms/SuitTable.tsx"
  );
  import.meta.hot.lastModified = "1702499812707.0684";
}
function SuitTable(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("table", { className: "table table-zebra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: "Element" }, void 0, false, {
        fileName: "app/components/organisms/SuitTable.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: "Quantit\xE9" }, void 0, false, {
        fileName: "app/components/organisms/SuitTable.tsx",
        lineNumber: 28,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: "Taille" }, void 0, false, {
        fileName: "app/components/organisms/SuitTable.tsx",
        lineNumber: 29,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/organisms/SuitTable.tsx",
      lineNumber: 26,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/organisms/SuitTable.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tbody", { children: props.suit.map((item, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SuitRow, { name: item.name, item }, index, false, {
        fileName: "app/components/organisms/SuitTable.tsx",
        lineNumber: 34,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/organisms/SuitTable.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/organisms/SuitTable.tsx",
    lineNumber: 24,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/organisms/SuitTable.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c2 = SuitTable;
var _c2;
$RefreshReg$(_c2, "SuitTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  SuitTable
};
//# sourceMappingURL=/build/_shared/chunk-ENARC73P.js.map
