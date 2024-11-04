import {
  SuitTable
} from "/build/_shared/chunk-ENARC73P.js";
import {
  OpenIcon
} from "/build/_shared/chunk-QQWXCPPB.js";
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

// app/routes/musicians.$id.tsx
init_dist();

// app/components/organisms/SuitStats.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/organisms/SuitStats.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/organisms/SuitStats.tsx"
  );
  import.meta.hot.lastModified = "1702503696296.3396";
}
function SuitStats(props) {
  const {
    musician
  } = props;
  const {
    suit
  } = musician;
  const sizes = suit.map((item) => item.size);
  const mostCommonSize = sizes.sort((a, b) => {
    return sizes.filter((v) => v === a).length - sizes.filter((v) => v === b).length;
  }).pop();
  let suitElementCount = 0;
  suit.forEach((item) => {
    suitElementCount += item.quantity;
  });
  const date = new Date(musician.updatedAt);
  const dateInFrench = date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stats shadow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-title", children: "Total d'\xE9l\xE9ments pr\xEAt\xE9s" }, void 0, false, {
        fileName: "app/components/organisms/SuitStats.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-value text-primary", children: suitElementCount }, void 0, false, {
        fileName: "app/components/organisms/SuitStats.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/organisms/SuitStats.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-title", children: "Taille recommand\xE9e" }, void 0, false, {
        fileName: "app/components/organisms/SuitStats.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-value text-secondary", children: mostCommonSize }, void 0, false, {
        fileName: "app/components/organisms/SuitStats.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-desc", children: "par rapport aux \xE9l\xE9ment d\xE9j\xE0 pr\xEAt\xE9s" }, void 0, false, {
        fileName: "app/components/organisms/SuitStats.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/organisms/SuitStats.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-title", children: "Date de derni\xE8re mise \xE0 jours" }, void 0, false, {
        fileName: "app/components/organisms/SuitStats.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "stat-value", children: dateInFrench }, void 0, false, {
        fileName: "app/components/organisms/SuitStats.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/organisms/SuitStats.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/organisms/SuitStats.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_c = SuitStats;
var _c;
$RefreshReg$(_c, "SuitStats");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/pages/Musician.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/pages/Musician.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/pages/Musician.tsx"
  );
  import.meta.hot.lastModified = "1703196415787.3218";
}
function Musician(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-10 pb-32", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-baseline", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: props.musician.full_name }, void 0, false, {
          fileName: "app/pages/Musician.tsx",
          lineNumber: 29,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm", children: [
          "Date de naissance: ",
          props.musician.birth_date
        ] }, void 0, true, {
          fileName: "app/pages/Musician.tsx",
          lineNumber: 30,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/Musician.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { children: props.musician.pupitre.title }, void 0, false, {
        fileName: "app/pages/Musician.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/Musician.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "divider", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "font-bold", children: "Costume" }, void 0, false, {
        fileName: "app/pages/Musician.tsx",
        lineNumber: 35,
        columnNumber: 42
      }, this) }, void 0, false, {
        fileName: "app/pages/Musician.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SuitStats, { musician: props.musician }, void 0, false, {
        fileName: "app/pages/Musician.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SuitTable, { suit: props.musician.suit }, void 0, false, {
        fileName: "app/pages/Musician.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/Musician.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: props.musician.editLink, className: "btn btn-primary", target: "_blank", children: [
        "Modifier les informations",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OpenIcon, { className: "inline w-3" }, void 0, false, {
          fileName: "app/pages/Musician.tsx",
          lineNumber: 42,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/Musician.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/musicians", className: "btn btn-secondary", children: "Retour \xE0 la liste des musiciens" }, void 0, false, {
        fileName: "app/pages/Musician.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/Musician.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/pages/Musician.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c2 = Musician;
var _c2;
$RefreshReg$(_c2, "Musician");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/musicians.$id.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/musicians.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/musicians.$id.tsx"
  );
  import.meta.hot.lastModified = "1702073502722.6863";
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
    musician
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Musician, { musician }, void 0, false, {
    fileName: "app/routes/musicians.$id.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s(Index, "UGd6Srho9ZIz3WBO/oX8v/JIOKQ=", false, function() {
  return [useLoaderData];
});
_c3 = Index;
var _c3;
$RefreshReg$(_c3, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/musicians.$id-B3H7GEGF.js.map
