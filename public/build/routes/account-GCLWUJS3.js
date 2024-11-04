import {
  SuitTable
} from "/build/_shared/chunk-ENARC73P.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
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

// app/routes/account.tsx
init_dist();
var import_node = __toESM(require_node(), 1);

// app/components/molecules/AccountInformation.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/molecules/AccountInformation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/molecules/AccountInformation.tsx"
  );
  import.meta.hot.lastModified = "1703103005427.23";
}
function AccountInformation({
  name,
  label,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: label }, void 0, false, {
      fileName: "app/components/molecules/AccountInformation.tsx",
      lineNumber: 27,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: value }, void 0, false, {
      fileName: "app/components/molecules/AccountInformation.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/molecules/AccountInformation.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = AccountInformation;
var _c;
$RefreshReg$(_c, "AccountInformation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/pages/Account.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/pages/Account.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/pages/Account.tsx"
  );
  import.meta.hot.lastModified = "1703103247788.662";
}
function Account({
  user
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Mon compte" }, void 0, false, {
        fileName: "app/pages/Account.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Bonjour ",
        user.musician.full_name,
        " !"
      ] }, void 0, true, {
        fileName: "app/pages/Account.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/Account.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { role: "tablist", className: "tabs tabs-lifted", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "radio", name: "my_tabs_2", role: "tab", className: "tab", "aria-label": "Mon Costume", defaultChecked: true }, void 0, false, {
        fileName: "app/pages/Account.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { role: "tabpanel", className: "tab-content bg-base-100 border-base-300 rounded-box p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SuitTable, { suit: user.musician.suit }, void 0, false, {
        fileName: "app/pages/Account.tsx",
        lineNumber: 34,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/pages/Account.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "radio", name: "my_tabs_2", role: "tab", className: "tab", "aria-label": "Mes informations" }, void 0, false, {
        fileName: "app/pages/Account.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { role: "tabpanel", className: "tab-content bg-base-100 border-base-300 rounded-box p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccountInformation, { name: "email", label: "Email", value: user.email }, void 0, false, {
          fileName: "app/pages/Account.tsx",
          lineNumber: 40,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccountInformation, { name: "username", label: "Nom d'utilisateur", value: user.username }, void 0, false, {
          fileName: "app/pages/Account.tsx",
          lineNumber: 41,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccountInformation, { name: "birth_date", label: "Date de naissance", value: user.musician.birth_date }, void 0, false, {
          fileName: "app/pages/Account.tsx",
          lineNumber: 42,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccountInformation, { name: "pupitre", label: "Pupitre", value: user.musician.pupitre.title }, void 0, false, {
          fileName: "app/pages/Account.tsx",
          lineNumber: 43,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/Account.tsx",
        lineNumber: 39,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/pages/Account.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/Account.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/pages/Account.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c2 = Account;
var _c2;
$RefreshReg$(_c2, "Account");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/account.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account.tsx"
  );
  import.meta.hot.lastModified = "1703021647082.944";
}
var meta = () => {
  return [{
    title: "Mon compte"
  }, {
    name: "description",
    content: "Mon compte"
  }];
};
function Index() {
  _s();
  const {
    user
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Account, { user }, void 0, false, {
    fileName: "app/routes/account.tsx",
    lineNumber: 56,
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
//# sourceMappingURL=/build/routes/account-GCLWUJS3.js.map
