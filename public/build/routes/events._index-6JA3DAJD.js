import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
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
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/events._index.tsx
init_dist();
var import_node = __toESM(require_node(), 1);

// app/components/molecules/EventCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/molecules/EventCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/molecules/EventCard.tsx"
  );
  import.meta.hot.lastModified = "1704228246166.6172";
}
function EventCard({
  event
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card w-full bg-base-100 shadow-xl relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-body flex flex-col gap-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/events/${event.id}`, className: "after:block after:absolute after:w-full after:h-full after:top-0 after:left-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "card-title", children: event.title }, void 0, false, {
        fileName: "app/components/molecules/EventCard.tsx",
        lineNumber: 29,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/molecules/EventCard.tsx",
        lineNumber: 28,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-neutral/30", children: new Date(event.date).toLocaleString() }, void 0, false, {
        fileName: "app/components/molecules/EventCard.tsx",
        lineNumber: 31,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/molecules/EventCard.tsx",
      lineNumber: 27,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: event.description }, void 0, false, {
      fileName: "app/components/molecules/EventCard.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-actions justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-primary", children: "Voir l'\xE9v\xE8nement" }, void 0, false, {
      fileName: "app/components/molecules/EventCard.tsx",
      lineNumber: 35,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/molecules/EventCard.tsx",
      lineNumber: 34,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/molecules/EventCard.tsx",
    lineNumber: 26,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/molecules/EventCard.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = EventCard;
var _c;
$RefreshReg$(_c, "EventCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/organisms/EventList.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/organisms/EventList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/organisms/EventList.tsx"
  );
  import.meta.hot.lastModified = "1704228318494.1235";
}
function EventList({
  events
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-10 w-full max-w-xl mx-auto", children: events.map((event, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EventCard, { event }, index, false, {
    fileName: "app/components/organisms/EventList.tsx",
    lineNumber: 26,
    columnNumber: 43
  }, this)) }, void 0, false, {
    fileName: "app/components/organisms/EventList.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = EventList;
var _c2;
$RefreshReg$(_c2, "EventList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/pages/Events.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/pages/Events.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/pages/Events.tsx"
  );
  import.meta.hot.lastModified = "1704227712789.7769";
}
function Events({
  user,
  events
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-24 py-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hero", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-5xl font-bold text-center", children: "Liste des \xE9v\xE8nements" }, void 0, false, {
      fileName: "app/pages/Events.tsx",
      lineNumber: 29,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/pages/Events.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Separator, {}, void 0, false, {
      fileName: "app/pages/Events.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EventList, { events }, void 0, false, {
      fileName: "app/pages/Events.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/pages/Events.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c3 = Events;
var _c3;
$RefreshReg$(_c3, "Events");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/events._index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/events._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/events._index.tsx"
  );
  import.meta.hot.lastModified = "1704229296790.8958";
}
var meta = () => {
  return [{
    title: "Ev\xE8nements"
  }, {
    name: "description",
    content: "Ev\xE8nements"
  }];
};
function Index() {
  _s();
  const {
    user,
    events
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Events, { user, events }, void 0, false, {
    fileName: "app/routes/events._index.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_s(Index, "UGd6Srho9ZIz3WBO/oX8v/JIOKQ=", false, function() {
  return [useLoaderData];
});
_c4 = Index;
var _c4;
$RefreshReg$(_c4, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/events._index-6JA3DAJD.js.map
