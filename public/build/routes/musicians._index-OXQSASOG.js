import {
  Link
} from "/build/_shared/chunk-2IHLCPYS.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  init_dist,
  useLoaderData
} from "/build/_shared/chunk-FRVIQQCP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-KMJX2WDA.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/musicians._index.tsx
init_dist();

// app/components/molecules/MusicianRow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/molecules/MusicianRow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/molecules/MusicianRow.tsx"
  );
  import.meta.hot.lastModified = "1703336444127.8154";
}
function MusicianRow(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "relative hover:bg-secondary hover:text-white even:bg-black/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/musicians/${props.musician.id}`, className: "after:block after:w-full after:h-full after:absolute after:top-0 after:left-0", children: props.musician.id }, void 0, false, {
      fileName: "app/components/molecules/MusicianRow.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/molecules/MusicianRow.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: props.musician.full_name }, void 0, false, {
      fileName: "app/components/molecules/MusicianRow.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: props.musician.pupitre.title }, void 0, false, {
      fileName: "app/components/molecules/MusicianRow.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/molecules/MusicianRow.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = MusicianRow;
var _c;
$RefreshReg$(_c, "MusicianRow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/organisms/MusiciansTable.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/organisms/MusiciansTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/organisms/MusiciansTable.tsx"
  );
  import.meta.hot.lastModified = "1702499854257.7227";
}
function MusiciansTable(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("table", { className: "table", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: "ID" }, void 0, false, {
        fileName: "app/components/organisms/MusiciansTable.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: "Nom" }, void 0, false, {
        fileName: "app/components/organisms/MusiciansTable.tsx",
        lineNumber: 28,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { children: "Pupitre" }, void 0, false, {
        fileName: "app/components/organisms/MusiciansTable.tsx",
        lineNumber: 29,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/organisms/MusiciansTable.tsx",
      lineNumber: 26,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/organisms/MusiciansTable.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tbody", { children: props.musicians.map((musician, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MusicianRow, { musician }, index, false, {
      fileName: "app/components/organisms/MusiciansTable.tsx",
      lineNumber: 33,
      columnNumber: 59
    }, this)) }, void 0, false, {
      fileName: "app/components/organisms/MusiciansTable.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/organisms/MusiciansTable.tsx",
    lineNumber: 24,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/organisms/MusiciansTable.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c2 = MusiciansTable;
var _c2;
$RefreshReg$(_c2, "MusiciansTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/molecules/StrapiPagination.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/molecules/StrapiPagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/molecules/StrapiPagination.tsx"
  );
  import.meta.hot.lastModified = "1702333817934.5112";
}
function StrapiPagination(props) {
  const {
    meta: meta2
  } = props;
  if (!meta2.pagination)
    return null;
  const {
    page,
    pageCount
  } = meta2.pagination;
  const currentPage = page;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `${pageCount > 1 ? "join" : ""}`, children: Array.from({
    length: pageCount
  }, (_, i) => i + 1).map((page2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { className: `join-item btn btn-square ${currentPage === page2 ? "btn-primary" : ""}`, to: `/musicians?page=${page2}`, children: page2 }, index, false, {
    fileName: "app/components/molecules/StrapiPagination.tsx",
    lineNumber: 36,
    columnNumber: 48
  }, this)) }, void 0, false, {
    fileName: "app/components/molecules/StrapiPagination.tsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/molecules/StrapiPagination.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c3 = StrapiPagination;
var _c3;
$RefreshReg$(_c3, "StrapiPagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/molecules/StrapiListInfos.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/molecules/StrapiListInfos.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/molecules/StrapiListInfos.tsx"
  );
  import.meta.hot.lastModified = "1702585579891.7485";
}
function StrapiListInfos(props) {
  const {
    meta: meta2
  } = props;
  if (!meta2.pagination)
    return null;
  const pageSize = parseInt(meta2.pagination.pageSize);
  const itemsStart = parseInt(meta2.pagination.page) * pageSize - pageSize + 1;
  const viewedItems = (parseInt(meta2.pagination.page) - 1) * pageSize;
  const maxOnPage = viewedItems + parseInt(meta2.pagination.pageSize) > meta2.pagination.total ? meta2.pagination.total : viewedItems + parseInt(meta2.pagination.pageSize);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center justify-between text-sm text-black/50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: [
      "R\xE9sultats: ",
      itemsStart,
      " \xE0 ",
      maxOnPage
    ] }, void 0, true, {
      fileName: "app/components/molecules/StrapiListInfos.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: [
      "Nombre de r\xE9sultats: ",
      meta2.pagination.total
    ] }, void 0, true, {
      fileName: "app/components/molecules/StrapiListInfos.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/molecules/StrapiListInfos.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c4 = StrapiListInfos;
var _c4;
$RefreshReg$(_c4, "StrapiListInfos");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/pages/Musicians.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/pages/Musicians.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/pages/Musicians.tsx"
  );
  import.meta.hot.lastModified = "1702073830562.31";
}
function Musicians(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col gap-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: "Liste des musiciens" }, void 0, false, {
      fileName: "app/pages/Musicians.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StrapiListInfos, { meta: props.meta }, void 0, false, {
      fileName: "app/pages/Musicians.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MusiciansTable, { musicians: props.musicians }, void 0, false, {
      fileName: "app/pages/Musicians.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StrapiPagination, { meta: props.meta }, void 0, false, {
      fileName: "app/pages/Musicians.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/pages/Musicians.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c5 = Musicians;
var _c5;
$RefreshReg$(_c5, "Musicians");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/musicians._index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/musicians._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/musicians._index.tsx"
  );
  import.meta.hot.lastModified = "1702331344131.4463";
}
var meta = () => {
  return [{
    title: "Musiciens"
  }, {
    name: "description",
    content: "Liste des musiciens"
  }];
};
function Index() {
  _s();
  const {
    musicians,
    meta: meta2
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Musicians, { musicians, meta: meta2 }, void 0, false, {
    fileName: "app/routes/musicians._index.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(Index, "UGd6Srho9ZIz3WBO/oX8v/JIOKQ=", false, function() {
  return [useLoaderData];
});
_c6 = Index;
var _c6;
$RefreshReg$(_c6, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/musicians._index-OXQSASOG.js.map
