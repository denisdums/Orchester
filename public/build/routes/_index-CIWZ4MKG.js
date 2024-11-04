import {
  UserContext
} from "/build/_shared/chunk-NCKGR2ZA.js";
import {
  Separator
} from "/build/_shared/chunk-D7Q44KC3.js";
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/pages/Homepage.tsx
var import_react2 = __toESM(require_react(), 1);

// app/components/organisms/BinderList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/organisms/BinderList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/organisms/BinderList.tsx"
  );
  import.meta.hot.lastModified = "1703329295742.3096";
}
function BinderList({
  className,
  currentPieces
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-4 bg-base-100 " + className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Contenu du classeur" }, void 0, false, {
      fileName: "app/components/organisms/BinderList.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "table table-zebra", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Num\xE9ro" }, void 0, false, {
          fileName: "app/components/organisms/BinderList.tsx",
          lineNumber: 31,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Titre" }, void 0, false, {
          fileName: "app/components/organisms/BinderList.tsx",
          lineNumber: 32,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Compositeur" }, void 0, false, {
          fileName: "app/components/organisms/BinderList.tsx",
          lineNumber: 33,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/organisms/BinderList.tsx",
        lineNumber: 30,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/organisms/BinderList.tsx",
        lineNumber: 29,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: currentPieces.map((piece, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: index + 1 }, void 0, false, {
          fileName: "app/components/organisms/BinderList.tsx",
          lineNumber: 38,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: piece.title }, void 0, false, {
          fileName: "app/components/organisms/BinderList.tsx",
          lineNumber: 39,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: piece.composer.full_name }, void 0, false, {
          fileName: "app/components/organisms/BinderList.tsx",
          lineNumber: 40,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/organisms/BinderList.tsx",
        lineNumber: 37,
        columnNumber: 58
      }, this)) }, void 0, false, {
        fileName: "app/components/organisms/BinderList.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/organisms/BinderList.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/organisms/BinderList.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/organisms/BinderList.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = BinderList;
var _c;
$RefreshReg$(_c, "BinderList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/molecules/EventSquareCard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/molecules/EventSquareCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/molecules/EventSquareCard.tsx"
  );
  import.meta.hot.lastModified = "1704392598569.3074";
}
function EventSquareCard({
  event
}) {
  const date = new Date(event.date);
  const dayInLetters = date.toLocaleString("default", {
    weekday: "long"
  });
  const day = date.getDate() > 1 ? date.getDate() : "1er";
  const monthInLetters = date.toLocaleString("default", {
    month: "long"
  });
  const year = date.getFullYear();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "carousel-item relative group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "transition-all card min-w-32 aspect-[1/1] shadow-lg group-hover:shadow-xl flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-body justify-center items-center text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "leading-none flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-lg font-bold first-letter:uppercase", children: [
        dayInLetters,
        " ",
        day,
        " ",
        monthInLetters
      ] }, void 0, true, {
        fileName: "app/components/molecules/EventSquareCard.tsx",
        lineNumber: 38,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-4xl font-bold text-neutral/10", children: year }, void 0, false, {
        fileName: "app/components/molecules/EventSquareCard.tsx",
        lineNumber: 39,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/molecules/EventSquareCard.tsx",
      lineNumber: 37,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/events/" + event.id, className: "after:block after:absolute after:w-full after:h-full after:top-0 after:left-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-neutral/60", children: event.title }, void 0, false, {
      fileName: "app/components/molecules/EventSquareCard.tsx",
      lineNumber: 42,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/molecules/EventSquareCard.tsx",
      lineNumber: 41,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/molecules/EventSquareCard.tsx",
    lineNumber: 36,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/molecules/EventSquareCard.tsx",
    lineNumber: 35,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/molecules/EventSquareCard.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c2 = EventSquareCard;
var _c2;
$RefreshReg$(_c2, "EventSquareCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/organisms/NextEventsList.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/organisms/NextEventsList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/organisms/NextEventsList.tsx"
  );
  import.meta.hot.lastModified = "1704391750025.6638";
}
function NextEventsList({
  events
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "col-span-4 bg-base-100 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Prochains \xE9v\xE8nements" }, void 0, false, {
      fileName: "app/components/organisms/NextEventsList.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "carousel carousel-center p-4 space-x-4 rounded-box", children: events.map((event, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EventSquareCard, { event }, index, false, {
      fileName: "app/components/organisms/NextEventsList.tsx",
      lineNumber: 28,
      columnNumber: 47
    }, this)) }, void 0, false, {
      fileName: "app/components/organisms/NextEventsList.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/organisms/NextEventsList.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c3 = NextEventsList;
var _c3;
$RefreshReg$(_c3, "NextEventsList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/pages/Homepage.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/pages/Homepage.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/pages/Homepage.tsx"
  );
  import.meta.hot.lastModified = "1715802726186.1714";
}
function Homepage({
  currentPieces,
  events
}) {
  _s();
  const {
    user
  } = (0, import_react2.useContext)(UserContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-24 py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hero bg-base-200 py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hero-content text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-5xl font-bold", children: [
        "Bienvenue ",
        user?.musician.first_name,
        " !"
      ] }, void 0, true, {
        fileName: "app/pages/Homepage.tsx",
        lineNumber: 40,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "py-6", children: "Orchester est un outil permettant de garder \xE0 jour toutes les informations musiciens de notre orchestre. Mais aussi plein d'autres choses !" }, void 0, false, {
        fileName: "app/pages/Homepage.tsx",
        lineNumber: 41,
        columnNumber: 25
      }, this),
      user && user.role.type === "comite" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/musicians", className: "btn btn-primary", children: "Voir la liste des musiciens" }, void 0, false, {
        fileName: "app/pages/Homepage.tsx",
        lineNumber: 45,
        columnNumber: 65
      }, this),
      !user && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "py-2 flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "opacity-30", children: "Vous n'\xEAtes pas encore connect\xE9 ?" }, void 0, false, {
          fileName: "app/pages/Homepage.tsx",
          lineNumber: 48,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/login", className: "btn btn-primary", children: "Connectez-vous" }, void 0, false, {
          fileName: "app/pages/Homepage.tsx",
          lineNumber: 49,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/Homepage.tsx",
        lineNumber: 47,
        columnNumber: 35
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/Homepage.tsx",
      lineNumber: 39,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/pages/Homepage.tsx",
      lineNumber: 38,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/pages/Homepage.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    user && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Separator, {}, void 0, false, {
        fileName: "app/pages/Homepage.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(NextEventsList, { events }, void 0, false, {
        fileName: "app/pages/Homepage.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Separator, {}, void 0, false, {
        fileName: "app/pages/Homepage.tsx",
        lineNumber: 57,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BinderList, { currentPieces }, void 0, false, {
        fileName: "app/pages/Homepage.tsx",
        lineNumber: 58,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/Homepage.tsx",
      lineNumber: 54,
      columnNumber: 22
    }, this)
  ] }, void 0, true, {
    fileName: "app/pages/Homepage.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s(Homepage, "JGtbL9nF23m+KDtp3kj55mw9GTc=");
_c4 = Homepage;
var _c4;
$RefreshReg$(_c4, "Homepage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
init_dist();
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1704390884483.3428";
}
var meta = () => {
  return [{
    title: "Orchester"
  }, {
    name: "description",
    content: "Une app de costume"
  }];
};
function Index() {
  _s2();
  const {
    currentPieces,
    events
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Homepage, { currentPieces, events }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s2(Index, "UGd6Srho9ZIz3WBO/oX8v/JIOKQ=", false, function() {
  return [useLoaderData];
});
_c5 = Index;
var _c5;
$RefreshReg$(_c5, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-CIWZ4MKG.js.map
