import {
  LoginForm
} from "/build/_shared/chunk-B2344H7Y.js";
import {
  OpenIcon
} from "/build/_shared/chunk-QQWXCPPB.js";
import {
  ToastProvider,
  require_classnames
} from "/build/_shared/chunk-U6HI3IZU.js";
import {
  UserContext,
  UserProvider
} from "/build/_shared/chunk-NCKGR2ZA.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-2IHLCPYS.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  Outlet,
  init_dist,
  useLoaderData,
  useLocation
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@algolia/events/events.js
var require_events = __commonJS({
  "node_modules/@algolia/events/events.js"(exports, module) {
    function EventEmitter2() {
      this._events = this._events || {};
      this._maxListeners = this._maxListeners || void 0;
    }
    module.exports = EventEmitter2;
    EventEmitter2.prototype._events = void 0;
    EventEmitter2.prototype._maxListeners = void 0;
    EventEmitter2.defaultMaxListeners = 10;
    EventEmitter2.prototype.setMaxListeners = function(n) {
      if (!isNumber(n) || n < 0 || isNaN(n))
        throw TypeError("n must be a positive number");
      this._maxListeners = n;
      return this;
    };
    EventEmitter2.prototype.emit = function(type) {
      var er, handler, len, args, i, listeners;
      if (!this._events)
        this._events = {};
      if (type === "error") {
        if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
          er = arguments[1];
          if (er instanceof Error) {
            throw er;
          } else {
            var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
            err.context = er;
            throw err;
          }
        }
      }
      handler = this._events[type];
      if (isUndefined(handler))
        return false;
      if (isFunction(handler)) {
        switch (arguments.length) {
          case 1:
            handler.call(this);
            break;
          case 2:
            handler.call(this, arguments[1]);
            break;
          case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
          default:
            args = Array.prototype.slice.call(arguments, 1);
            handler.apply(this, args);
        }
      } else if (isObject(handler)) {
        args = Array.prototype.slice.call(arguments, 1);
        listeners = handler.slice();
        len = listeners.length;
        for (i = 0; i < len; i++)
          listeners[i].apply(this, args);
      }
      return true;
    };
    EventEmitter2.prototype.addListener = function(type, listener) {
      var m;
      if (!isFunction(listener))
        throw TypeError("listener must be a function");
      if (!this._events)
        this._events = {};
      if (this._events.newListener)
        this.emit(
          "newListener",
          type,
          isFunction(listener.listener) ? listener.listener : listener
        );
      if (!this._events[type])
        this._events[type] = listener;
      else if (isObject(this._events[type]))
        this._events[type].push(listener);
      else
        this._events[type] = [this._events[type], listener];
      if (isObject(this._events[type]) && !this._events[type].warned) {
        if (!isUndefined(this._maxListeners)) {
          m = this._maxListeners;
        } else {
          m = EventEmitter2.defaultMaxListeners;
        }
        if (m && m > 0 && this._events[type].length > m) {
          this._events[type].warned = true;
          console.error(
            "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
            this._events[type].length
          );
          if (typeof console.trace === "function") {
            console.trace();
          }
        }
      }
      return this;
    };
    EventEmitter2.prototype.on = EventEmitter2.prototype.addListener;
    EventEmitter2.prototype.once = function(type, listener) {
      if (!isFunction(listener))
        throw TypeError("listener must be a function");
      var fired = false;
      function g() {
        this.removeListener(type, g);
        if (!fired) {
          fired = true;
          listener.apply(this, arguments);
        }
      }
      g.listener = listener;
      this.on(type, g);
      return this;
    };
    EventEmitter2.prototype.removeListener = function(type, listener) {
      var list, position, length, i;
      if (!isFunction(listener))
        throw TypeError("listener must be a function");
      if (!this._events || !this._events[type])
        return this;
      list = this._events[type];
      length = list.length;
      position = -1;
      if (list === listener || isFunction(list.listener) && list.listener === listener) {
        delete this._events[type];
        if (this._events.removeListener)
          this.emit("removeListener", type, listener);
      } else if (isObject(list)) {
        for (i = length; i-- > 0; ) {
          if (list[i] === listener || list[i].listener && list[i].listener === listener) {
            position = i;
            break;
          }
        }
        if (position < 0)
          return this;
        if (list.length === 1) {
          list.length = 0;
          delete this._events[type];
        } else {
          list.splice(position, 1);
        }
        if (this._events.removeListener)
          this.emit("removeListener", type, listener);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function(type) {
      var key, listeners;
      if (!this._events)
        return this;
      if (!this._events.removeListener) {
        if (arguments.length === 0)
          this._events = {};
        else if (this._events[type])
          delete this._events[type];
        return this;
      }
      if (arguments.length === 0) {
        for (key in this._events) {
          if (key === "removeListener")
            continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = {};
        return this;
      }
      listeners = this._events[type];
      if (isFunction(listeners)) {
        this.removeListener(type, listeners);
      } else if (listeners) {
        while (listeners.length)
          this.removeListener(type, listeners[listeners.length - 1]);
      }
      delete this._events[type];
      return this;
    };
    EventEmitter2.prototype.listeners = function(type) {
      var ret;
      if (!this._events || !this._events[type])
        ret = [];
      else if (isFunction(this._events[type]))
        ret = [this._events[type]];
      else
        ret = this._events[type].slice();
      return ret;
    };
    EventEmitter2.prototype.listenerCount = function(type) {
      if (this._events) {
        var evlistener = this._events[type];
        if (isFunction(evlistener))
          return 1;
        else if (evlistener)
          return evlistener.length;
      }
      return 0;
    };
    EventEmitter2.listenerCount = function(emitter, type) {
      return emitter.listenerCount(type);
    };
    function isFunction(arg) {
      return typeof arg === "function";
    }
    function isNumber(arg) {
      return typeof arg === "number";
    }
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    function isUndefined(arg) {
      return arg === void 0;
    }
  }
});

// node_modules/algoliasearch-helper/src/functions/inherits.js
var require_inherits = __commonJS({
  "node_modules/algoliasearch-helper/src/functions/inherits.js"(exports, module) {
    "use strict";
    function inherits(ctor, superCtor) {
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
    module.exports = inherits;
  }
});

// node_modules/algoliasearch-helper/src/DerivedHelper/index.js
var require_DerivedHelper = __commonJS({
  "node_modules/algoliasearch-helper/src/DerivedHelper/index.js"(exports, module) {
    "use strict";
    var EventEmitter2 = require_events();
    var inherits = require_inherits();
    function DerivedHelper(mainHelper, fn) {
      this.main = mainHelper;
      this.fn = fn;
      this.lastResults = null;
    }
    inherits(DerivedHelper, EventEmitter2);
    DerivedHelper.prototype.detach = function() {
      this.removeAllListeners();
      this.main.detachDerivedHelper(this);
    };
    DerivedHelper.prototype.getModifiedState = function(parameters) {
      return this.fn(parameters);
    };
    module.exports = DerivedHelper;
  }
});

// node_modules/algoliasearch-helper/src/functions/escapeFacetValue.js
var require_escapeFacetValue = __commonJS({
  "node_modules/algoliasearch-helper/src/functions/escapeFacetValue.js"(exports, module) {
    "use strict";
    function escapeFacetValue(value) {
      if (typeof value !== "string")
        return value;
      return String(value).replace(/^-/, "\\-");
    }
    function unescapeFacetValue(value) {
      if (typeof value !== "string")
        return value;
      return value.replace(/^\\-/, "-");
    }
    module.exports = {
      escapeFacetValue,
      unescapeFacetValue
    };
  }
});

// node_modules/algoliasearch-helper/src/functions/merge.js
var require_merge = __commonJS({
  "node_modules/algoliasearch-helper/src/functions/merge.js"(exports, module) {
    "use strict";
    function clone(value) {
      if (typeof value === "object" && value !== null) {
        return _merge(Array.isArray(value) ? [] : {}, value);
      }
      return value;
    }
    function isObjectOrArrayOrFunction(value) {
      return typeof value === "function" || Array.isArray(value) || Object.prototype.toString.call(value) === "[object Object]";
    }
    function _merge(target, source) {
      if (target === source) {
        return target;
      }
      for (var key in source) {
        if (!Object.prototype.hasOwnProperty.call(source, key) || key === "__proto__" || key === "constructor") {
          continue;
        }
        var sourceVal = source[key];
        var targetVal = target[key];
        if (typeof targetVal !== "undefined" && typeof sourceVal === "undefined") {
          continue;
        }
        if (isObjectOrArrayOrFunction(targetVal) && isObjectOrArrayOrFunction(sourceVal)) {
          target[key] = _merge(targetVal, sourceVal);
        } else {
          target[key] = clone(sourceVal);
        }
      }
      return target;
    }
    function merge(target) {
      if (!isObjectOrArrayOrFunction(target)) {
        target = {};
      }
      for (var i = 1, l = arguments.length; i < l; i++) {
        var source = arguments[i];
        if (isObjectOrArrayOrFunction(source)) {
          _merge(target, source);
        }
      }
      return target;
    }
    module.exports = merge;
  }
});

// node_modules/algoliasearch-helper/src/functions/objectHasKeys.js
var require_objectHasKeys = __commonJS({
  "node_modules/algoliasearch-helper/src/functions/objectHasKeys.js"(exports, module) {
    "use strict";
    function objectHasKeys(obj) {
      return obj && Object.keys(obj).length > 0;
    }
    module.exports = objectHasKeys;
  }
});

// node_modules/algoliasearch-helper/src/functions/omit.js
var require_omit = __commonJS({
  "node_modules/algoliasearch-helper/src/functions/omit.js"(exports, module) {
    "use strict";
    function _objectWithoutPropertiesLoose11(source, excluded) {
      if (source === null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key;
      var i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    module.exports = _objectWithoutPropertiesLoose11;
  }
});

// node_modules/algoliasearch-helper/src/requestBuilder.js
var require_requestBuilder = __commonJS({
  "node_modules/algoliasearch-helper/src/requestBuilder.js"(exports, module) {
    "use strict";
    var merge = require_merge();
    function sortObject(obj) {
      return Object.keys(obj).sort().reduce(function(acc, curr) {
        acc[curr] = obj[curr];
        return acc;
      }, {});
    }
    var requestBuilder = {
      /**
       * Get all the queries to send to the client, those queries can used directly
       * with the Algolia client.
       * @private
       * @param  {string} index The name of the index
       * @param  {SearchParameters} state The state from which to get the queries
       * @return {object[]} The queries
       */
      _getQueries: function getQueries(index3, state) {
        var queries = [];
        queries.push({
          indexName: index3,
          params: requestBuilder._getHitsSearchParams(state)
        });
        state.getRefinedDisjunctiveFacets().forEach(function(refinedFacet) {
          queries.push({
            indexName: index3,
            params: requestBuilder._getDisjunctiveFacetSearchParams(
              state,
              refinedFacet
            )
          });
        });
        state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
          var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
          var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
          var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
          if (currentRefinement.length > 0 && currentRefinement[0].split(separator).length > 1) {
            var filtersMap = currentRefinement[0].split(separator).slice(0, -1).reduce(function createFiltersMap(map, segment, level) {
              return map.concat({
                attribute: hierarchicalFacet.attributes[level],
                value: level === 0 ? segment : [map[map.length - 1].value, segment].join(separator)
              });
            }, []);
            filtersMap.forEach(function(filter, level) {
              var params = requestBuilder._getDisjunctiveFacetSearchParams(
                state,
                filter.attribute,
                level === 0
              );
              function hasHierarchicalFacetFilter(value) {
                return hierarchicalFacet.attributes.some(function(attribute) {
                  return attribute === value.split(":")[0];
                });
              }
              var filteredFacetFilters = (params.facetFilters || []).reduce(
                function(acc, facetFilter) {
                  if (Array.isArray(facetFilter)) {
                    var filtered = facetFilter.filter(function(filterValue) {
                      return !hasHierarchicalFacetFilter(filterValue);
                    });
                    if (filtered.length > 0) {
                      acc.push(filtered);
                    }
                  }
                  if (typeof facetFilter === "string" && !hasHierarchicalFacetFilter(facetFilter)) {
                    acc.push(facetFilter);
                  }
                  return acc;
                },
                []
              );
              var parent = filtersMap[level - 1];
              if (level > 0) {
                params.facetFilters = filteredFacetFilters.concat(
                  parent.attribute + ":" + parent.value
                );
              } else {
                params.facetFilters = filteredFacetFilters.length > 0 ? filteredFacetFilters : void 0;
              }
              queries.push({ indexName: index3, params });
            });
          }
        });
        return queries;
      },
      /**
       * Build search parameters used to fetch hits
       * @private
       * @param  {SearchParameters} state The state from which to get the queries
       * @return {object.<string, any>} The search parameters for hits
       */
      _getHitsSearchParams: function(state) {
        var facets = state.facets.concat(state.disjunctiveFacets).concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state)).sort();
        var facetFilters = requestBuilder._getFacetFilters(state);
        var numericFilters = requestBuilder._getNumericFilters(state);
        var tagFilters = requestBuilder._getTagFilters(state);
        var additionalParams = {
          facets: facets.indexOf("*") > -1 ? ["*"] : facets,
          tagFilters
        };
        if (facetFilters.length > 0) {
          additionalParams.facetFilters = facetFilters;
        }
        if (numericFilters.length > 0) {
          additionalParams.numericFilters = numericFilters;
        }
        return sortObject(merge({}, state.getQueryParams(), additionalParams));
      },
      /**
       * Build search parameters used to fetch a disjunctive facet
       * @private
       * @param  {SearchParameters} state The state from which to get the queries
       * @param  {string} facet the associated facet name
       * @param  {boolean} hierarchicalRootLevel ?? FIXME
       * @return {object} The search parameters for a disjunctive facet
       */
      _getDisjunctiveFacetSearchParams: function(state, facet, hierarchicalRootLevel) {
        var facetFilters = requestBuilder._getFacetFilters(
          state,
          facet,
          hierarchicalRootLevel
        );
        var numericFilters = requestBuilder._getNumericFilters(state, facet);
        var tagFilters = requestBuilder._getTagFilters(state);
        var additionalParams = {
          hitsPerPage: 0,
          page: 0,
          analytics: false,
          clickAnalytics: false
        };
        if (tagFilters.length > 0) {
          additionalParams.tagFilters = tagFilters;
        }
        var hierarchicalFacet = state.getHierarchicalFacetByName(facet);
        if (hierarchicalFacet) {
          additionalParams.facets = requestBuilder._getDisjunctiveHierarchicalFacetAttribute(
            state,
            hierarchicalFacet,
            hierarchicalRootLevel
          );
        } else {
          additionalParams.facets = facet;
        }
        if (numericFilters.length > 0) {
          additionalParams.numericFilters = numericFilters;
        }
        if (facetFilters.length > 0) {
          additionalParams.facetFilters = facetFilters;
        }
        return sortObject(merge({}, state.getQueryParams(), additionalParams));
      },
      /**
       * Return the numeric filters in an algolia request fashion
       * @private
       * @param {SearchParameters} state the state from which to get the filters
       * @param {string} [facetName] the name of the attribute for which the filters should be excluded
       * @return {string[]} the numeric filters in the algolia format
       */
      _getNumericFilters: function(state, facetName) {
        if (state.numericFilters) {
          return state.numericFilters;
        }
        var numericFilters = [];
        Object.keys(state.numericRefinements).forEach(function(attribute) {
          var operators = state.numericRefinements[attribute] || {};
          Object.keys(operators).forEach(function(operator) {
            var values = operators[operator] || [];
            if (facetName !== attribute) {
              values.forEach(function(value) {
                if (Array.isArray(value)) {
                  var vs = value.map(function(v) {
                    return attribute + operator + v;
                  });
                  numericFilters.push(vs);
                } else {
                  numericFilters.push(attribute + operator + value);
                }
              });
            }
          });
        });
        return numericFilters;
      },
      /**
       * Return the tags filters depending on which format is used, either tagFilters or tagRefinements
       * @private
       * @param {SearchParameters} state the state from which to get the filters
       * @return {string} Tag filters in a single string
       */
      _getTagFilters: function(state) {
        if (state.tagFilters) {
          return state.tagFilters;
        }
        return state.tagRefinements.join(",");
      },
      /**
       * Build facetFilters parameter based on current refinements. The array returned
       * contains strings representing the facet filters in the algolia format.
       * @private
       * @param  {SearchParameters} state The state from which to get the queries
       * @param  {string} [facet] if set, the current disjunctive facet
       * @param  {boolean} [hierarchicalRootLevel] ?? FIXME
       * @return {array.<string>} The facet filters in the algolia format
       */
      _getFacetFilters: function(state, facet, hierarchicalRootLevel) {
        var facetFilters = [];
        var facetsRefinements = state.facetsRefinements || {};
        Object.keys(facetsRefinements).sort().forEach(function(facetName) {
          var facetValues = facetsRefinements[facetName] || [];
          facetValues.sort().forEach(function(facetValue) {
            facetFilters.push(facetName + ":" + facetValue);
          });
        });
        var facetsExcludes = state.facetsExcludes || {};
        Object.keys(facetsExcludes).sort().forEach(function(facetName) {
          var facetValues = facetsExcludes[facetName] || [];
          facetValues.sort().forEach(function(facetValue) {
            facetFilters.push(facetName + ":-" + facetValue);
          });
        });
        var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {};
        Object.keys(disjunctiveFacetsRefinements).sort().forEach(function(facetName) {
          var facetValues = disjunctiveFacetsRefinements[facetName] || [];
          if (facetName === facet || !facetValues || facetValues.length === 0) {
            return;
          }
          var orFilters = [];
          facetValues.sort().forEach(function(facetValue) {
            orFilters.push(facetName + ":" + facetValue);
          });
          facetFilters.push(orFilters);
        });
        var hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements || {};
        Object.keys(hierarchicalFacetsRefinements).sort().forEach(function(facetName) {
          var facetValues = hierarchicalFacetsRefinements[facetName] || [];
          var facetValue = facetValues[0];
          if (facetValue === void 0) {
            return;
          }
          var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);
          var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
          var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
          var attributeToRefine;
          var attributesIndex;
          if (facet === facetName) {
            if (facetValue.indexOf(separator) === -1 || !rootPath && hierarchicalRootLevel === true || rootPath && rootPath.split(separator).length === facetValue.split(separator).length) {
              return;
            }
            if (!rootPath) {
              attributesIndex = facetValue.split(separator).length - 2;
              facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
            } else {
              attributesIndex = rootPath.split(separator).length - 1;
              facetValue = rootPath;
            }
            attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
          } else {
            attributesIndex = facetValue.split(separator).length - 1;
            attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
          }
          if (attributeToRefine) {
            facetFilters.push([attributeToRefine + ":" + facetValue]);
          }
        });
        return facetFilters;
      },
      _getHitsHierarchicalFacetsAttributes: function(state) {
        var out = [];
        return state.hierarchicalFacets.reduce(
          // ask for as much levels as there's hierarchical refinements
          function getHitsAttributesForHierarchicalFacet(allAttributes, hierarchicalFacet) {
            var hierarchicalRefinement = state.getHierarchicalRefinement(
              hierarchicalFacet.name
            )[0];
            if (!hierarchicalRefinement) {
              allAttributes.push(hierarchicalFacet.attributes[0]);
              return allAttributes;
            }
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            var level = hierarchicalRefinement.split(separator).length;
            var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);
            return allAttributes.concat(newAttributes);
          },
          out
        );
      },
      _getDisjunctiveHierarchicalFacetAttribute: function(state, hierarchicalFacet, rootLevel) {
        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        if (rootLevel === true) {
          var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
          var attributeIndex = 0;
          if (rootPath) {
            attributeIndex = rootPath.split(separator).length;
          }
          return [hierarchicalFacet.attributes[attributeIndex]];
        }
        var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || "";
        var parentLevel = hierarchicalRefinement.split(separator).length - 1;
        return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
      },
      getSearchForFacetQuery: function(facetName, query, maxFacetHits, state) {
        var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName) ? state.clearRefinements(facetName) : state;
        var searchForFacetSearchParameters = {
          facetQuery: query,
          facetName
        };
        if (typeof maxFacetHits === "number") {
          searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
        }
        return sortObject(
          merge(
            {},
            requestBuilder._getHitsSearchParams(stateForSearchForFacetValues),
            searchForFacetSearchParameters
          )
        );
      }
    };
    module.exports = requestBuilder;
  }
});

// node_modules/algoliasearch-helper/src/functions/defaultsPure.js
var require_defaultsPure = __commonJS({
  "node_modules/algoliasearch-helper/src/functions/defaultsPure.js"(exports, module) {
    "use strict";
    module.exports = function defaultsPure() {
      var sources = Array.prototype.slice.call(arguments);
      return sources.reduceRight(function(acc, source) {
        Object.keys(Object(source)).forEach(function(key) {
          if (source[key] === void 0) {
            return;
          }
          if (acc[key] !== void 0) {
            delete acc[key];
          }
          acc[key] = source[key];
        });
        return acc;
      }, {});
    };
  }
});

// node_modules/algoliasearch-helper/src/functions/find.js
var require_find = __commonJS({
  "node_modules/algoliasearch-helper/src/functions/find.js"(exports, module) {
    "use strict";
    module.exports = function find2(array, comparator) {
      if (!Array.isArray(array)) {
        return void 0;
      }
      for (var i = 0; i < array.length; i++) {
        if (comparator(array[i])) {
          return array[i];
        }
      }
      return void 0;
    };
  }
});

// node_modules/algoliasearch-helper/src/functions/intersection.js
var require_intersection = __commonJS({
  "node_modules/algoliasearch-helper/src/functions/intersection.js"(exports, module) {
    "use strict";
    function intersection(arr1, arr2) {
      return arr1.filter(function(value, index3) {
        return arr2.indexOf(value) > -1 && arr1.indexOf(value) === index3;
      });
    }
    module.exports = intersection;
  }
});

// node_modules/algoliasearch-helper/src/functions/valToNumber.js
var require_valToNumber = __commonJS({
  "node_modules/algoliasearch-helper/src/functions/valToNumber.js"(exports, module) {
    "use strict";
    function valToNumber(v) {
      if (typeof v === "number") {
        return v;
      } else if (typeof v === "string") {
        return parseFloat(v);
      } else if (Array.isArray(v)) {
        return v.map(valToNumber);
      }
      throw new Error(
        "The value should be a number, a parsable string or an array of those."
      );
    }
    module.exports = valToNumber;
  }
});

// node_modules/algoliasearch-helper/src/utils/isValidUserToken.js
var require_isValidUserToken = __commonJS({
  "node_modules/algoliasearch-helper/src/utils/isValidUserToken.js"(exports, module) {
    "use strict";
    module.exports = function isValidUserToken(userToken) {
      if (userToken === null) {
        return false;
      }
      return /^[a-zA-Z0-9_-]{1,64}$/.test(userToken);
    };
  }
});

// node_modules/algoliasearch-helper/src/SearchParameters/RefinementList.js
var require_RefinementList = __commonJS({
  "node_modules/algoliasearch-helper/src/SearchParameters/RefinementList.js"(exports, module) {
    "use strict";
    var defaultsPure = require_defaultsPure();
    var objectHasKeys = require_objectHasKeys();
    var omit = require_omit();
    var lib = {
      /**
       * Adds a refinement to a RefinementList
       * @param {RefinementList} refinementList the initial list
       * @param {string} attribute the attribute to refine
       * @param {string} value the value of the refinement, if the value is not a string it will be converted
       * @return {RefinementList} a new and updated refinement list
       */
      addRefinement: function addRefinement(refinementList, attribute, value) {
        if (lib.isRefined(refinementList, attribute, value)) {
          return refinementList;
        }
        var valueAsString = "" + value;
        var facetRefinement = !refinementList[attribute] ? [valueAsString] : refinementList[attribute].concat(valueAsString);
        var mod = {};
        mod[attribute] = facetRefinement;
        return defaultsPure({}, mod, refinementList);
      },
      /**
       * Removes refinement(s) for an attribute:
       *  - if the value is specified removes the refinement for the value on the attribute
       *  - if no value is specified removes all the refinements for this attribute
       * @param {RefinementList} refinementList the initial list
       * @param {string} attribute the attribute to refine
       * @param {string} [value] the value of the refinement
       * @return {RefinementList} a new and updated refinement lst
       */
      removeRefinement: function removeRefinement(refinementList, attribute, value) {
        if (value === void 0) {
          return lib.clearRefinement(refinementList, function(v, f) {
            return attribute === f;
          });
        }
        var valueAsString = "" + value;
        return lib.clearRefinement(refinementList, function(v, f) {
          return attribute === f && valueAsString === v;
        });
      },
      /**
       * Toggles the refinement value for an attribute.
       * @param {RefinementList} refinementList the initial list
       * @param {string} attribute the attribute to refine
       * @param {string} value the value of the refinement
       * @return {RefinementList} a new and updated list
       */
      toggleRefinement: function toggleRefinement(refinementList, attribute, value) {
        if (value === void 0)
          throw new Error("toggleRefinement should be used with a value");
        if (lib.isRefined(refinementList, attribute, value)) {
          return lib.removeRefinement(refinementList, attribute, value);
        }
        return lib.addRefinement(refinementList, attribute, value);
      },
      /**
       * Clear all or parts of a RefinementList. Depending on the arguments, three
       * kinds of behavior can happen:
       *  - if no attribute is provided: clears the whole list
       *  - if an attribute is provided as a string: clears the list for the specific attribute
       *  - if an attribute is provided as a function: discards the elements for which the function returns true
       * @param {RefinementList} refinementList the initial list
       * @param {string} [attribute] the attribute or function to discard
       * @param {string} [refinementType] optional parameter to give more context to the attribute function
       * @return {RefinementList} a new and updated refinement list
       */
      clearRefinement: function clearRefinement(refinementList, attribute, refinementType) {
        if (attribute === void 0) {
          if (!objectHasKeys(refinementList)) {
            return refinementList;
          }
          return {};
        } else if (typeof attribute === "string") {
          return omit(refinementList, [attribute]);
        } else if (typeof attribute === "function") {
          var hasChanged = false;
          var newRefinementList = Object.keys(refinementList).reduce(
            function(memo, key) {
              var values = refinementList[key] || [];
              var facetList = values.filter(function(value) {
                return !attribute(value, key, refinementType);
              });
              if (facetList.length !== values.length) {
                hasChanged = true;
              }
              memo[key] = facetList;
              return memo;
            },
            {}
          );
          if (hasChanged)
            return newRefinementList;
          return refinementList;
        }
        return void 0;
      },
      /**
       * Test if the refinement value is used for the attribute. If no refinement value
       * is provided, test if the refinementList contains any refinement for the
       * given attribute.
       * @param {RefinementList} refinementList the list of refinement
       * @param {string} attribute name of the attribute
       * @param {string} [refinementValue] value of the filter/refinement
       * @return {boolean} true if the attribute is refined, false otherwise
       */
      isRefined: function isRefined(refinementList, attribute, refinementValue) {
        var containsRefinements = Boolean(refinementList[attribute]) && refinementList[attribute].length > 0;
        if (refinementValue === void 0 || !containsRefinements) {
          return containsRefinements;
        }
        var refinementValueAsString = "" + refinementValue;
        return refinementList[attribute].indexOf(refinementValueAsString) !== -1;
      }
    };
    module.exports = lib;
  }
});

// node_modules/algoliasearch-helper/src/SearchParameters/index.js
var require_SearchParameters = __commonJS({
  "node_modules/algoliasearch-helper/src/SearchParameters/index.js"(exports, module) {
    "use strict";
    var defaultsPure = require_defaultsPure();
    var find2 = require_find();
    var intersection = require_intersection();
    var merge = require_merge();
    var objectHasKeys = require_objectHasKeys();
    var omit = require_omit();
    var valToNumber = require_valToNumber();
    var isValidUserToken = require_isValidUserToken();
    var RefinementList = require_RefinementList();
    function isEqualNumericRefinement(a, b) {
      if (Array.isArray(a) && Array.isArray(b)) {
        return a.length === b.length && a.every(function(el, i) {
          return isEqualNumericRefinement(b[i], el);
        });
      }
      return a === b;
    }
    function findArray(array, searchedValue) {
      return find2(array, function(currentValue) {
        return isEqualNumericRefinement(currentValue, searchedValue);
      });
    }
    function SearchParameters(newParameters) {
      var params = newParameters ? SearchParameters._parseNumbers(newParameters) : {};
      if (params.userToken !== void 0 && !isValidUserToken(params.userToken)) {
        console.warn(
          "[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"
        );
      }
      this.facets = params.facets || [];
      this.disjunctiveFacets = params.disjunctiveFacets || [];
      this.hierarchicalFacets = params.hierarchicalFacets || [];
      this.facetsRefinements = params.facetsRefinements || {};
      this.facetsExcludes = params.facetsExcludes || {};
      this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {};
      this.numericRefinements = params.numericRefinements || {};
      this.tagRefinements = params.tagRefinements || [];
      this.hierarchicalFacetsRefinements = params.hierarchicalFacetsRefinements || {};
      var self2 = this;
      Object.keys(params).forEach(function(paramName) {
        var isKeyKnown = SearchParameters.PARAMETERS.indexOf(paramName) !== -1;
        var isValueDefined = params[paramName] !== void 0;
        if (!isKeyKnown && isValueDefined) {
          self2[paramName] = params[paramName];
        }
      });
    }
    SearchParameters.PARAMETERS = Object.keys(new SearchParameters());
    SearchParameters._parseNumbers = function(partialState) {
      if (partialState instanceof SearchParameters)
        return partialState;
      var numbers = {};
      var numberKeys = [
        "aroundPrecision",
        "aroundRadius",
        "getRankingInfo",
        "minWordSizefor2Typos",
        "minWordSizefor1Typo",
        "page",
        "maxValuesPerFacet",
        "distinct",
        "minimumAroundRadius",
        "hitsPerPage",
        "minProximity"
      ];
      numberKeys.forEach(function(k) {
        var value = partialState[k];
        if (typeof value === "string") {
          var parsedValue = parseFloat(value);
          numbers[k] = isNaN(parsedValue) ? value : parsedValue;
        }
      });
      if (Array.isArray(partialState.insideBoundingBox)) {
        numbers.insideBoundingBox = partialState.insideBoundingBox.map(function(geoRect) {
          if (Array.isArray(geoRect)) {
            return geoRect.map(function(value) {
              return parseFloat(value);
            });
          }
          return geoRect;
        });
      }
      if (partialState.numericRefinements) {
        var numericRefinements = {};
        Object.keys(partialState.numericRefinements).forEach(function(attribute) {
          var operators = partialState.numericRefinements[attribute] || {};
          numericRefinements[attribute] = {};
          Object.keys(operators).forEach(function(operator) {
            var values = operators[operator];
            var parsedValues = values.map(function(v) {
              if (Array.isArray(v)) {
                return v.map(function(vPrime) {
                  if (typeof vPrime === "string") {
                    return parseFloat(vPrime);
                  }
                  return vPrime;
                });
              } else if (typeof v === "string") {
                return parseFloat(v);
              }
              return v;
            });
            numericRefinements[attribute][operator] = parsedValues;
          });
        });
        numbers.numericRefinements = numericRefinements;
      }
      return merge({}, partialState, numbers);
    };
    SearchParameters.make = function makeSearchParameters(newParameters) {
      var instance = new SearchParameters(newParameters);
      var hierarchicalFacets = newParameters.hierarchicalFacets || [];
      hierarchicalFacets.forEach(function(facet) {
        if (facet.rootPath) {
          var currentRefinement = instance.getHierarchicalRefinement(facet.name);
          if (currentRefinement.length > 0 && currentRefinement[0].indexOf(facet.rootPath) !== 0) {
            instance = instance.clearRefinements(facet.name);
          }
          currentRefinement = instance.getHierarchicalRefinement(facet.name);
          if (currentRefinement.length === 0) {
            instance = instance.toggleHierarchicalFacetRefinement(
              facet.name,
              facet.rootPath
            );
          }
        }
      });
      return instance;
    };
    SearchParameters.validate = function(currentState, parameters) {
      var params = parameters || {};
      if (currentState.tagFilters && params.tagRefinements && params.tagRefinements.length > 0) {
        return new Error(
          "[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method."
        );
      }
      if (currentState.tagRefinements.length > 0 && params.tagFilters) {
        return new Error(
          "[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method."
        );
      }
      if (currentState.numericFilters && params.numericRefinements && objectHasKeys(params.numericRefinements)) {
        return new Error(
          "[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
        );
      }
      if (objectHasKeys(currentState.numericRefinements) && params.numericFilters) {
        return new Error(
          "[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
        );
      }
      return null;
    };
    SearchParameters.prototype = {
      constructor: SearchParameters,
      /**
       * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
       * @method
       * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
       * - If not given, means to clear all the filters.
       * - If `string`, means to clear all refinements for the `attribute` named filter.
       * - If `function`, means to clear all the refinements that return truthy values.
       * @return {SearchParameters} new instance with filters cleared
       */
      clearRefinements: function clearRefinements(attribute) {
        var patch = {
          numericRefinements: this._clearNumericRefinements(attribute),
          facetsRefinements: RefinementList.clearRefinement(
            this.facetsRefinements,
            attribute,
            "conjunctiveFacet"
          ),
          facetsExcludes: RefinementList.clearRefinement(
            this.facetsExcludes,
            attribute,
            "exclude"
          ),
          disjunctiveFacetsRefinements: RefinementList.clearRefinement(
            this.disjunctiveFacetsRefinements,
            attribute,
            "disjunctiveFacet"
          ),
          hierarchicalFacetsRefinements: RefinementList.clearRefinement(
            this.hierarchicalFacetsRefinements,
            attribute,
            "hierarchicalFacet"
          )
        };
        if (patch.numericRefinements === this.numericRefinements && patch.facetsRefinements === this.facetsRefinements && patch.facetsExcludes === this.facetsExcludes && patch.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements) {
          return this;
        }
        return this.setQueryParameters(patch);
      },
      /**
       * Remove all the refined tags from the SearchParameters
       * @method
       * @return {SearchParameters} new instance with tags cleared
       */
      clearTags: function clearTags() {
        if (this.tagFilters === void 0 && this.tagRefinements.length === 0)
          return this;
        return this.setQueryParameters({
          tagFilters: void 0,
          tagRefinements: []
        });
      },
      /**
       * Set the index.
       * @method
       * @param {string} index the index name
       * @return {SearchParameters} new instance
       */
      setIndex: function setIndex(index3) {
        if (index3 === this.index)
          return this;
        return this.setQueryParameters({
          index: index3
        });
      },
      /**
       * Query setter
       * @method
       * @param {string} newQuery value for the new query
       * @return {SearchParameters} new instance
       */
      setQuery: function setQuery(newQuery) {
        if (newQuery === this.query)
          return this;
        return this.setQueryParameters({
          query: newQuery
        });
      },
      /**
       * Page setter
       * @method
       * @param {number} newPage new page number
       * @return {SearchParameters} new instance
       */
      setPage: function setPage(newPage) {
        if (newPage === this.page)
          return this;
        return this.setQueryParameters({
          page: newPage
        });
      },
      /**
       * Facets setter
       * The facets are the simple facets, used for conjunctive (and) faceting.
       * @method
       * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
       * @return {SearchParameters} new instance
       */
      setFacets: function setFacets(facets) {
        return this.setQueryParameters({
          facets
        });
      },
      /**
       * Disjunctive facets setter
       * Change the list of disjunctive (or) facets the helper chan handle.
       * @method
       * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
       * @return {SearchParameters} new instance
       */
      setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
        return this.setQueryParameters({
          disjunctiveFacets: facets
        });
      },
      /**
       * HitsPerPage setter
       * Hits per page represents the number of hits retrieved for this query
       * @method
       * @param {number} n number of hits retrieved per page of results
       * @return {SearchParameters} new instance
       */
      setHitsPerPage: function setHitsPerPage(n) {
        if (this.hitsPerPage === n)
          return this;
        return this.setQueryParameters({
          hitsPerPage: n
        });
      },
      /**
       * typoTolerance setter
       * Set the value of typoTolerance
       * @method
       * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
       * @return {SearchParameters} new instance
       */
      setTypoTolerance: function setTypoTolerance(typoTolerance) {
        if (this.typoTolerance === typoTolerance)
          return this;
        return this.setQueryParameters({
          typoTolerance
        });
      },
      /**
       * Add a numeric filter for a given attribute
       * When value is an array, they are combined with OR
       * When value is a single value, it will combined with AND
       * @method
       * @param {string} attribute attribute to set the filter on
       * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
       * @param {number | number[]} value value of the filter
       * @return {SearchParameters} new instance
       * @example
       * // for price = 50 or 40
       * state.addNumericRefinement('price', '=', [50, 40]);
       * @example
       * // for size = 38 and 40
       * state.addNumericRefinement('size', '=', 38);
       * state.addNumericRefinement('size', '=', 40);
       */
      addNumericRefinement: function(attribute, operator, value) {
        var val = valToNumber(value);
        if (this.isNumericRefined(attribute, operator, val))
          return this;
        var mod = merge({}, this.numericRefinements);
        mod[attribute] = merge({}, mod[attribute]);
        if (mod[attribute][operator]) {
          mod[attribute][operator] = mod[attribute][operator].slice();
          mod[attribute][operator].push(val);
        } else {
          mod[attribute][operator] = [val];
        }
        return this.setQueryParameters({
          numericRefinements: mod
        });
      },
      /**
       * Get the list of conjunctive refinements for a single facet
       * @param {string} facetName name of the attribute used for faceting
       * @return {string[]} list of refinements
       */
      getConjunctiveRefinements: function(facetName) {
        if (!this.isConjunctiveFacet(facetName)) {
          return [];
        }
        return this.facetsRefinements[facetName] || [];
      },
      /**
       * Get the list of disjunctive refinements for a single facet
       * @param {string} facetName name of the attribute used for faceting
       * @return {string[]} list of refinements
       */
      getDisjunctiveRefinements: function(facetName) {
        if (!this.isDisjunctiveFacet(facetName)) {
          return [];
        }
        return this.disjunctiveFacetsRefinements[facetName] || [];
      },
      /**
       * Get the list of hierarchical refinements for a single facet
       * @param {string} facetName name of the attribute used for faceting
       * @return {string[]} list of refinements
       */
      getHierarchicalRefinement: function(facetName) {
        return this.hierarchicalFacetsRefinements[facetName] || [];
      },
      /**
       * Get the list of exclude refinements for a single facet
       * @param {string} facetName name of the attribute used for faceting
       * @return {string[]} list of refinements
       */
      getExcludeRefinements: function(facetName) {
        if (!this.isConjunctiveFacet(facetName)) {
          return [];
        }
        return this.facetsExcludes[facetName] || [];
      },
      /**
       * Remove all the numeric filter for a given (attribute, operator)
       * @method
       * @param {string} attribute attribute to set the filter on
       * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
       * @param {number} [number] the value to be removed
       * @return {SearchParameters} new instance
       */
      removeNumericRefinement: function(attribute, operator, number) {
        var paramValue = number;
        if (paramValue !== void 0) {
          if (!this.isNumericRefined(attribute, operator, paramValue)) {
            return this;
          }
          return this.setQueryParameters({
            numericRefinements: this._clearNumericRefinements(function(value, key) {
              return key === attribute && value.op === operator && isEqualNumericRefinement(value.val, valToNumber(paramValue));
            })
          });
        } else if (operator !== void 0) {
          if (!this.isNumericRefined(attribute, operator))
            return this;
          return this.setQueryParameters({
            numericRefinements: this._clearNumericRefinements(function(value, key) {
              return key === attribute && value.op === operator;
            })
          });
        }
        if (!this.isNumericRefined(attribute))
          return this;
        return this.setQueryParameters({
          numericRefinements: this._clearNumericRefinements(function(value, key) {
            return key === attribute;
          })
        });
      },
      /**
       * Get the list of numeric refinements for a single facet
       * @param {string} facetName name of the attribute used for faceting
       * @return {SearchParameters.OperatorList} list of refinements
       */
      getNumericRefinements: function(facetName) {
        return this.numericRefinements[facetName] || {};
      },
      /**
       * Return the current refinement for the (attribute, operator)
       * @param {string} attribute attribute in the record
       * @param {string} operator operator applied on the refined values
       * @return {Array.<number|number[]>} refined values
       */
      getNumericRefinement: function(attribute, operator) {
        return this.numericRefinements[attribute] && this.numericRefinements[attribute][operator];
      },
      /**
       * Clear numeric filters.
       * @method
       * @private
       * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
       * - If not given, means to clear all the filters.
       * - If `string`, means to clear all refinements for the `attribute` named filter.
       * - If `function`, means to clear all the refinements that return truthy values.
       * @return {Object.<string, OperatorList>} new numeric refinements
       */
      _clearNumericRefinements: function _clearNumericRefinements(attribute) {
        if (attribute === void 0) {
          if (!objectHasKeys(this.numericRefinements)) {
            return this.numericRefinements;
          }
          return {};
        } else if (typeof attribute === "string") {
          return omit(this.numericRefinements, [attribute]);
        } else if (typeof attribute === "function") {
          var hasChanged = false;
          var numericRefinements = this.numericRefinements;
          var newNumericRefinements = Object.keys(numericRefinements).reduce(
            function(memo, key) {
              var operators = numericRefinements[key];
              var operatorList = {};
              operators = operators || {};
              Object.keys(operators).forEach(function(operator) {
                var values = operators[operator] || [];
                var outValues = [];
                values.forEach(function(value) {
                  var predicateResult = attribute(
                    { val: value, op: operator },
                    key,
                    "numeric"
                  );
                  if (!predicateResult)
                    outValues.push(value);
                });
                if (outValues.length !== values.length) {
                  hasChanged = true;
                }
                operatorList[operator] = outValues;
              });
              memo[key] = operatorList;
              return memo;
            },
            {}
          );
          if (hasChanged)
            return newNumericRefinements;
          return this.numericRefinements;
        }
        return void 0;
      },
      /**
       * Add a facet to the facets attribute of the helper configuration, if it
       * isn't already present.
       * @method
       * @param {string} facet facet name to add
       * @return {SearchParameters} new instance
       */
      addFacet: function addFacet(facet) {
        if (this.isConjunctiveFacet(facet)) {
          return this;
        }
        return this.setQueryParameters({
          facets: this.facets.concat([facet])
        });
      },
      /**
       * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
       * configuration, if it isn't already present.
       * @method
       * @param {string} facet disjunctive facet name to add
       * @return {SearchParameters} new instance
       */
      addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
        if (this.isDisjunctiveFacet(facet)) {
          return this;
        }
        return this.setQueryParameters({
          disjunctiveFacets: this.disjunctiveFacets.concat([facet])
        });
      },
      /**
       * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
       * configuration.
       * @method
       * @param {object} hierarchicalFacet hierarchical facet to add
       * @return {SearchParameters} new instance
       * @throws will throw an error if a hierarchical facet with the same name was already declared
       */
      addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
        if (this.isHierarchicalFacet(hierarchicalFacet.name)) {
          throw new Error(
            "Cannot declare two hierarchical facets with the same name: `" + hierarchicalFacet.name + "`"
          );
        }
        return this.setQueryParameters({
          hierarchicalFacets: this.hierarchicalFacets.concat([hierarchicalFacet])
        });
      },
      /**
       * Add a refinement on a "normal" facet
       * @method
       * @param {string} facet attribute to apply the faceting on
       * @param {string} value value of the attribute (will be converted to string)
       * @return {SearchParameters} new instance
       */
      addFacetRefinement: function addFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) {
          throw new Error(
            facet + " is not defined in the facets attribute of the helper configuration"
          );
        }
        if (RefinementList.isRefined(this.facetsRefinements, facet, value))
          return this;
        return this.setQueryParameters({
          facetsRefinements: RefinementList.addRefinement(
            this.facetsRefinements,
            facet,
            value
          )
        });
      },
      /**
       * Exclude a value from a "normal" facet
       * @method
       * @param {string} facet attribute to apply the exclusion on
       * @param {string} value value of the attribute (will be converted to string)
       * @return {SearchParameters} new instance
       */
      addExcludeRefinement: function addExcludeRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) {
          throw new Error(
            facet + " is not defined in the facets attribute of the helper configuration"
          );
        }
        if (RefinementList.isRefined(this.facetsExcludes, facet, value))
          return this;
        return this.setQueryParameters({
          facetsExcludes: RefinementList.addRefinement(
            this.facetsExcludes,
            facet,
            value
          )
        });
      },
      /**
       * Adds a refinement on a disjunctive facet.
       * @method
       * @param {string} facet attribute to apply the faceting on
       * @param {string} value value of the attribute (will be converted to string)
       * @return {SearchParameters} new instance
       */
      addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) {
          throw new Error(
            facet + " is not defined in the disjunctiveFacets attribute of the helper configuration"
          );
        }
        if (RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value))
          return this;
        return this.setQueryParameters({
          disjunctiveFacetsRefinements: RefinementList.addRefinement(
            this.disjunctiveFacetsRefinements,
            facet,
            value
          )
        });
      },
      /**
       * addTagRefinement adds a tag to the list used to filter the results
       * @param {string} tag tag to be added
       * @return {SearchParameters} new instance
       */
      addTagRefinement: function addTagRefinement(tag) {
        if (this.isTagRefined(tag))
          return this;
        var modification = {
          tagRefinements: this.tagRefinements.concat(tag)
        };
        return this.setQueryParameters(modification);
      },
      /**
       * Remove a facet from the facets attribute of the helper configuration, if it
       * is present.
       * @method
       * @param {string} facet facet name to remove
       * @return {SearchParameters} new instance
       */
      removeFacet: function removeFacet(facet) {
        if (!this.isConjunctiveFacet(facet)) {
          return this;
        }
        return this.clearRefinements(facet).setQueryParameters({
          facets: this.facets.filter(function(f) {
            return f !== facet;
          })
        });
      },
      /**
       * Remove a disjunctive facet from the disjunctiveFacets attribute of the
       * helper configuration, if it is present.
       * @method
       * @param {string} facet disjunctive facet name to remove
       * @return {SearchParameters} new instance
       */
      removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
        if (!this.isDisjunctiveFacet(facet)) {
          return this;
        }
        return this.clearRefinements(facet).setQueryParameters({
          disjunctiveFacets: this.disjunctiveFacets.filter(function(f) {
            return f !== facet;
          })
        });
      },
      /**
       * Remove a hierarchical facet from the hierarchicalFacets attribute of the
       * helper configuration, if it is present.
       * @method
       * @param {string} facet hierarchical facet name to remove
       * @return {SearchParameters} new instance
       */
      removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
        if (!this.isHierarchicalFacet(facet)) {
          return this;
        }
        return this.clearRefinements(facet).setQueryParameters({
          hierarchicalFacets: this.hierarchicalFacets.filter(function(f) {
            return f.name !== facet;
          })
        });
      },
      /**
       * Remove a refinement set on facet. If a value is provided, it will clear the
       * refinement for the given value, otherwise it will clear all the refinement
       * values for the faceted attribute.
       * @method
       * @param {string} facet name of the attribute used for faceting
       * @param {string} [value] value used to filter
       * @return {SearchParameters} new instance
       */
      removeFacetRefinement: function removeFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) {
          throw new Error(
            facet + " is not defined in the facets attribute of the helper configuration"
          );
        }
        if (!RefinementList.isRefined(this.facetsRefinements, facet, value))
          return this;
        return this.setQueryParameters({
          facetsRefinements: RefinementList.removeRefinement(
            this.facetsRefinements,
            facet,
            value
          )
        });
      },
      /**
       * Remove a negative refinement on a facet
       * @method
       * @param {string} facet name of the attribute used for faceting
       * @param {string} value value used to filter
       * @return {SearchParameters} new instance
       */
      removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) {
          throw new Error(
            facet + " is not defined in the facets attribute of the helper configuration"
          );
        }
        if (!RefinementList.isRefined(this.facetsExcludes, facet, value))
          return this;
        return this.setQueryParameters({
          facetsExcludes: RefinementList.removeRefinement(
            this.facetsExcludes,
            facet,
            value
          )
        });
      },
      /**
       * Remove a refinement on a disjunctive facet
       * @method
       * @param {string} facet name of the attribute used for faceting
       * @param {string} value value used to filter
       * @return {SearchParameters} new instance
       */
      removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) {
          throw new Error(
            facet + " is not defined in the disjunctiveFacets attribute of the helper configuration"
          );
        }
        if (!RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value))
          return this;
        return this.setQueryParameters({
          disjunctiveFacetsRefinements: RefinementList.removeRefinement(
            this.disjunctiveFacetsRefinements,
            facet,
            value
          )
        });
      },
      /**
       * Remove a tag from the list of tag refinements
       * @method
       * @param {string} tag the tag to remove
       * @return {SearchParameters} new instance
       */
      removeTagRefinement: function removeTagRefinement(tag) {
        if (!this.isTagRefined(tag))
          return this;
        var modification = {
          tagRefinements: this.tagRefinements.filter(function(t) {
            return t !== tag;
          })
        };
        return this.setQueryParameters(modification);
      },
      /**
       * Generic toggle refinement method to use with facet, disjunctive facets
       * and hierarchical facets
       * @param  {string} facet the facet to refine
       * @param  {string} value the associated value
       * @return {SearchParameters} new instance
       * @throws will throw an error if the facet is not declared in the settings of the helper
       * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
       */
      toggleRefinement: function toggleRefinement(facet, value) {
        return this.toggleFacetRefinement(facet, value);
      },
      /**
       * Generic toggle refinement method to use with facet, disjunctive facets
       * and hierarchical facets
       * @param  {string} facet the facet to refine
       * @param  {string} value the associated value
       * @return {SearchParameters} new instance
       * @throws will throw an error if the facet is not declared in the settings of the helper
       */
      toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
        if (this.isHierarchicalFacet(facet)) {
          return this.toggleHierarchicalFacetRefinement(facet, value);
        } else if (this.isConjunctiveFacet(facet)) {
          return this.toggleConjunctiveFacetRefinement(facet, value);
        } else if (this.isDisjunctiveFacet(facet)) {
          return this.toggleDisjunctiveFacetRefinement(facet, value);
        }
        throw new Error(
          "Cannot refine the undeclared facet " + facet + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets"
        );
      },
      /**
       * Switch the refinement applied over a facet/value
       * @method
       * @param {string} facet name of the attribute used for faceting
       * @param {value} value value used for filtering
       * @return {SearchParameters} new instance
       */
      toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) {
          throw new Error(
            facet + " is not defined in the facets attribute of the helper configuration"
          );
        }
        return this.setQueryParameters({
          facetsRefinements: RefinementList.toggleRefinement(
            this.facetsRefinements,
            facet,
            value
          )
        });
      },
      /**
       * Switch the refinement applied over a facet/value
       * @method
       * @param {string} facet name of the attribute used for faceting
       * @param {value} value value used for filtering
       * @return {SearchParameters} new instance
       */
      toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) {
          throw new Error(
            facet + " is not defined in the facets attribute of the helper configuration"
          );
        }
        return this.setQueryParameters({
          facetsExcludes: RefinementList.toggleRefinement(
            this.facetsExcludes,
            facet,
            value
          )
        });
      },
      /**
       * Switch the refinement applied over a facet/value
       * @method
       * @param {string} facet name of the attribute used for faceting
       * @param {value} value value used for filtering
       * @return {SearchParameters} new instance
       */
      toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) {
          throw new Error(
            facet + " is not defined in the disjunctiveFacets attribute of the helper configuration"
          );
        }
        return this.setQueryParameters({
          disjunctiveFacetsRefinements: RefinementList.toggleRefinement(
            this.disjunctiveFacetsRefinements,
            facet,
            value
          )
        });
      },
      /**
       * Switch the refinement applied over a facet/value
       * @method
       * @param {string} facet name of the attribute used for faceting
       * @param {value} value value used for filtering
       * @return {SearchParameters} new instance
       */
      toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(facet, value) {
        if (!this.isHierarchicalFacet(facet)) {
          throw new Error(
            facet + " is not defined in the hierarchicalFacets attribute of the helper configuration"
          );
        }
        var separator = this._getHierarchicalFacetSeparator(
          this.getHierarchicalFacetByName(facet)
        );
        var mod = {};
        var upOneOrMultipleLevel = this.hierarchicalFacetsRefinements[facet] !== void 0 && this.hierarchicalFacetsRefinements[facet].length > 0 && // remove current refinement:
        // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
        (this.hierarchicalFacetsRefinements[facet][0] === value || // remove a parent refinement of the current refinement:
        //  - refinement was 'beer > IPA > Flying dog'
        //  - call is toggleRefine('beer > IPA')
        //  - refinement should be `beer`
        this.hierarchicalFacetsRefinements[facet][0].indexOf(
          value + separator
        ) === 0);
        if (upOneOrMultipleLevel) {
          if (value.indexOf(separator) === -1) {
            mod[facet] = [];
          } else {
            mod[facet] = [value.slice(0, value.lastIndexOf(separator))];
          }
        } else {
          mod[facet] = [value];
        }
        return this.setQueryParameters({
          hierarchicalFacetsRefinements: defaultsPure(
            {},
            mod,
            this.hierarchicalFacetsRefinements
          )
        });
      },
      /**
       * Adds a refinement on a hierarchical facet.
       * @param {string} facet the facet name
       * @param {string} path the hierarchical facet path
       * @return {SearchParameter} the new state
       * @throws Error if the facet is not defined or if the facet is refined
       */
      addHierarchicalFacetRefinement: function(facet, path) {
        if (this.isHierarchicalFacetRefined(facet)) {
          throw new Error(facet + " is already refined.");
        }
        if (!this.isHierarchicalFacet(facet)) {
          throw new Error(
            facet + " is not defined in the hierarchicalFacets attribute of the helper configuration."
          );
        }
        var mod = {};
        mod[facet] = [path];
        return this.setQueryParameters({
          hierarchicalFacetsRefinements: defaultsPure(
            {},
            mod,
            this.hierarchicalFacetsRefinements
          )
        });
      },
      /**
       * Removes the refinement set on a hierarchical facet.
       * @param {string} facet the facet name
       * @return {SearchParameter} the new state
       * @throws Error if the facet is not defined or if the facet is not refined
       */
      removeHierarchicalFacetRefinement: function(facet) {
        if (!this.isHierarchicalFacetRefined(facet)) {
          return this;
        }
        var mod = {};
        mod[facet] = [];
        return this.setQueryParameters({
          hierarchicalFacetsRefinements: defaultsPure(
            {},
            mod,
            this.hierarchicalFacetsRefinements
          )
        });
      },
      /**
       * Switch the tag refinement
       * @method
       * @param {string} tag the tag to remove or add
       * @return {SearchParameters} new instance
       */
      toggleTagRefinement: function toggleTagRefinement(tag) {
        if (this.isTagRefined(tag)) {
          return this.removeTagRefinement(tag);
        }
        return this.addTagRefinement(tag);
      },
      /**
       * Test if the facet name is from one of the disjunctive facets
       * @method
       * @param {string} facet facet name to test
       * @return {boolean} true if facet is a disjunctive facet
       */
      isDisjunctiveFacet: function(facet) {
        return this.disjunctiveFacets.indexOf(facet) > -1;
      },
      /**
       * Test if the facet name is from one of the hierarchical facets
       * @method
       * @param {string} facetName facet name to test
       * @return {boolean} true if facetName is a hierarchical facet
       */
      isHierarchicalFacet: function(facetName) {
        return this.getHierarchicalFacetByName(facetName) !== void 0;
      },
      /**
       * Test if the facet name is from one of the conjunctive/normal facets
       * @method
       * @param {string} facet facet name to test
       * @return {boolean} true if facet is a conjunctive facet
       */
      isConjunctiveFacet: function(facet) {
        return this.facets.indexOf(facet) > -1;
      },
      /**
       * Returns true if the facet is refined, either for a specific value or in
       * general.
       * @method
       * @param {string} facet name of the attribute for used for faceting
       * @param {string} value, optional value. If passed will test that this value
       * is filtering the given facet.
       * @return {boolean} returns true if refined
       */
      isFacetRefined: function isFacetRefined(facet, value) {
        if (!this.isConjunctiveFacet(facet)) {
          return false;
        }
        return RefinementList.isRefined(this.facetsRefinements, facet, value);
      },
      /**
       * Returns true if the facet contains exclusions or if a specific value is
       * excluded.
       *
       * @method
       * @param {string} facet name of the attribute for used for faceting
       * @param {string} [value] optional value. If passed will test that this value
       * is filtering the given facet.
       * @return {boolean} returns true if refined
       */
      isExcludeRefined: function isExcludeRefined(facet, value) {
        if (!this.isConjunctiveFacet(facet)) {
          return false;
        }
        return RefinementList.isRefined(this.facetsExcludes, facet, value);
      },
      /**
       * Returns true if the facet contains a refinement, or if a value passed is a
       * refinement for the facet.
       * @method
       * @param {string} facet name of the attribute for used for faceting
       * @param {string} value optional, will test if the value is used for refinement
       * if there is one, otherwise will test if the facet contains any refinement
       * @return {boolean} true if the facet is refined
       */
      isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) {
          return false;
        }
        return RefinementList.isRefined(
          this.disjunctiveFacetsRefinements,
          facet,
          value
        );
      },
      /**
       * Returns true if the facet contains a refinement, or if a value passed is a
       * refinement for the facet.
       * @method
       * @param {string} facet name of the attribute for used for faceting
       * @param {string} value optional, will test if the value is used for refinement
       * if there is one, otherwise will test if the facet contains any refinement
       * @return {boolean} true if the facet is refined
       */
      isHierarchicalFacetRefined: function isHierarchicalFacetRefined(facet, value) {
        if (!this.isHierarchicalFacet(facet)) {
          return false;
        }
        var refinements = this.getHierarchicalRefinement(facet);
        if (!value) {
          return refinements.length > 0;
        }
        return refinements.indexOf(value) !== -1;
      },
      /**
       * Test if the triple (attribute, operator, value) is already refined.
       * If only the attribute and the operator are provided, it tests if the
       * contains any refinement value.
       * @method
       * @param {string} attribute attribute for which the refinement is applied
       * @param {string} [operator] operator of the refinement
       * @param {string} [value] value of the refinement
       * @return {boolean} true if it is refined
       */
      isNumericRefined: function isNumericRefined(attribute, operator, value) {
        if (value === void 0 && operator === void 0) {
          return Boolean(this.numericRefinements[attribute]);
        }
        var isOperatorDefined = this.numericRefinements[attribute] && this.numericRefinements[attribute][operator] !== void 0;
        if (value === void 0 || !isOperatorDefined) {
          return isOperatorDefined;
        }
        var parsedValue = valToNumber(value);
        var isAttributeValueDefined = findArray(this.numericRefinements[attribute][operator], parsedValue) !== void 0;
        return isOperatorDefined && isAttributeValueDefined;
      },
      /**
       * Returns true if the tag refined, false otherwise
       * @method
       * @param {string} tag the tag to check
       * @return {boolean} true if tag is refined
       */
      isTagRefined: function isTagRefined(tag) {
        return this.tagRefinements.indexOf(tag) !== -1;
      },
      /**
       * Returns the list of all disjunctive facets refined
       * @method
       * @param {string} facet name of the attribute used for faceting
       * @param {value} value value used for filtering
       * @return {string[]} returns the list of refinements
       */
      getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
        var self2 = this;
        var disjunctiveNumericRefinedFacets = intersection(
          Object.keys(this.numericRefinements).filter(function(facet) {
            return Object.keys(self2.numericRefinements[facet]).length > 0;
          }),
          this.disjunctiveFacets
        );
        return Object.keys(this.disjunctiveFacetsRefinements).filter(function(facet) {
          return self2.disjunctiveFacetsRefinements[facet].length > 0;
        }).concat(disjunctiveNumericRefinedFacets).concat(this.getRefinedHierarchicalFacets()).sort();
      },
      /**
       * Returns the list of all disjunctive facets refined
       * @method
       * @param {string} facet name of the attribute used for faceting
       * @param {value} value value used for filtering
       * @return {string[]} returns the list of refinements
       */
      getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
        var self2 = this;
        return intersection(
          // enforce the order between the two arrays,
          // so that refinement name index === hierarchical facet index
          this.hierarchicalFacets.map(function(facet) {
            return facet.name;
          }),
          Object.keys(this.hierarchicalFacetsRefinements).filter(function(facet) {
            return self2.hierarchicalFacetsRefinements[facet].length > 0;
          })
        ).sort();
      },
      /**
       * Returned the list of all disjunctive facets not refined
       * @method
       * @return {string[]} returns the list of facets that are not refined
       */
      getUnrefinedDisjunctiveFacets: function() {
        var refinedFacets = this.getRefinedDisjunctiveFacets();
        return this.disjunctiveFacets.filter(function(f) {
          return refinedFacets.indexOf(f) === -1;
        });
      },
      managedParameters: [
        "index",
        "facets",
        "disjunctiveFacets",
        "facetsRefinements",
        "hierarchicalFacets",
        "facetsExcludes",
        "disjunctiveFacetsRefinements",
        "numericRefinements",
        "tagRefinements",
        "hierarchicalFacetsRefinements"
      ],
      getQueryParams: function getQueryParams() {
        var managedParameters = this.managedParameters;
        var queryParams = {};
        var self2 = this;
        Object.keys(this).forEach(function(paramName) {
          var paramValue = self2[paramName];
          if (managedParameters.indexOf(paramName) === -1 && paramValue !== void 0) {
            queryParams[paramName] = paramValue;
          }
        });
        return queryParams;
      },
      /**
       * Let the user set a specific value for a given parameter. Will return the
       * same instance if the parameter is invalid or if the value is the same as the
       * previous one.
       * @method
       * @param {string} parameter the parameter name
       * @param {any} value the value to be set, must be compliant with the definition
       * of the attribute on the object
       * @return {SearchParameters} the updated state
       */
      setQueryParameter: function setParameter(parameter, value) {
        if (this[parameter] === value)
          return this;
        var modification = {};
        modification[parameter] = value;
        return this.setQueryParameters(modification);
      },
      /**
       * Let the user set any of the parameters with a plain object.
       * @method
       * @param {object} params all the keys and the values to be updated
       * @return {SearchParameters} a new updated instance
       */
      setQueryParameters: function setQueryParameters(params) {
        if (!params)
          return this;
        var error = SearchParameters.validate(this, params);
        if (error) {
          throw error;
        }
        var self2 = this;
        var nextWithNumbers = SearchParameters._parseNumbers(params);
        var previousPlainObject = Object.keys(this).reduce(function(acc, key) {
          acc[key] = self2[key];
          return acc;
        }, {});
        var nextPlainObject = Object.keys(nextWithNumbers).reduce(
          function(previous, key) {
            var isPreviousValueDefined = previous[key] !== void 0;
            var isNextValueDefined = nextWithNumbers[key] !== void 0;
            if (isPreviousValueDefined && !isNextValueDefined) {
              return omit(previous, [key]);
            }
            if (isNextValueDefined) {
              previous[key] = nextWithNumbers[key];
            }
            return previous;
          },
          previousPlainObject
        );
        return new this.constructor(nextPlainObject);
      },
      /**
       * Returns a new instance with the page reset. Two scenarios possible:
       * the page is omitted -> return the given instance
       * the page is set -> return a new instance with a page of 0
       * @return {SearchParameters} a new updated instance
       */
      resetPage: function() {
        if (this.page === void 0) {
          return this;
        }
        return this.setPage(0);
      },
      /**
       * Helper function to get the hierarchicalFacet separator or the default one (`>`)
       * @param  {object} hierarchicalFacet the hierarchicalFacet object
       * @return {string} returns the hierarchicalFacet.separator or `>` as default
       */
      _getHierarchicalFacetSortBy: function(hierarchicalFacet) {
        return hierarchicalFacet.sortBy || ["isRefined:desc", "name:asc"];
      },
      /**
       * Helper function to get the hierarchicalFacet separator or the default one (`>`)
       * @private
       * @param  {object} hierarchicalFacet the hierarchicalFacet object
       * @return {string} returns the hierarchicalFacet.separator or `>` as default
       */
      _getHierarchicalFacetSeparator: function(hierarchicalFacet) {
        return hierarchicalFacet.separator || " > ";
      },
      /**
       * Helper function to get the hierarchicalFacet prefix path or null
       * @private
       * @param  {object} hierarchicalFacet the hierarchicalFacet object
       * @return {string} returns the hierarchicalFacet.rootPath or null as default
       */
      _getHierarchicalRootPath: function(hierarchicalFacet) {
        return hierarchicalFacet.rootPath || null;
      },
      /**
       * Helper function to check if we show the parent level of the hierarchicalFacet
       * @private
       * @param  {object} hierarchicalFacet the hierarchicalFacet object
       * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
       */
      _getHierarchicalShowParentLevel: function(hierarchicalFacet) {
        if (typeof hierarchicalFacet.showParentLevel === "boolean") {
          return hierarchicalFacet.showParentLevel;
        }
        return true;
      },
      /**
       * Helper function to get the hierarchicalFacet by it's name
       * @param  {string} hierarchicalFacetName the hierarchicalFacet name
       * @return {object} a hierarchicalFacet
       */
      getHierarchicalFacetByName: function(hierarchicalFacetName) {
        return find2(this.hierarchicalFacets, function(f) {
          return f.name === hierarchicalFacetName;
        });
      },
      /**
       * Get the current breadcrumb for a hierarchical facet, as an array
       * @param  {string} facetName Hierarchical facet name
       * @return {array.<string>} the path as an array of string
       */
      getHierarchicalFacetBreadcrumb: function(facetName) {
        if (!this.isHierarchicalFacet(facetName)) {
          return [];
        }
        var refinement = this.getHierarchicalRefinement(facetName)[0];
        if (!refinement)
          return [];
        var separator = this._getHierarchicalFacetSeparator(
          this.getHierarchicalFacetByName(facetName)
        );
        var path = refinement.split(separator);
        return path.map(function(part) {
          return part.trim();
        });
      },
      toString: function() {
        return JSON.stringify(this, null, 2);
      }
    };
    module.exports = SearchParameters;
  }
});

// node_modules/algoliasearch-helper/src/functions/compact.js
var require_compact = __commonJS({
  "node_modules/algoliasearch-helper/src/functions/compact.js"(exports, module) {
    "use strict";
    module.exports = function compact(array) {
      if (!Array.isArray(array)) {
        return [];
      }
      return array.filter(Boolean);
    };
  }
});

// node_modules/algoliasearch-helper/src/functions/findIndex.js
var require_findIndex = __commonJS({
  "node_modules/algoliasearch-helper/src/functions/findIndex.js"(exports, module) {
    "use strict";
    module.exports = function find2(array, comparator) {
      if (!Array.isArray(array)) {
        return -1;
      }
      for (var i = 0; i < array.length; i++) {
        if (comparator(array[i])) {
          return i;
        }
      }
      return -1;
    };
  }
});

// node_modules/algoliasearch-helper/src/functions/formatSort.js
var require_formatSort = __commonJS({
  "node_modules/algoliasearch-helper/src/functions/formatSort.js"(exports, module) {
    "use strict";
    var find2 = require_find();
    module.exports = function formatSort(sortBy, defaults) {
      var defaultInstructions = (defaults || []).map(function(sort) {
        return sort.split(":");
      });
      return sortBy.reduce(
        function preparePredicate(out, sort) {
          var sortInstruction = sort.split(":");
          var matchingDefault = find2(
            defaultInstructions,
            function(defaultInstruction) {
              return defaultInstruction[0] === sortInstruction[0];
            }
          );
          if (sortInstruction.length > 1 || !matchingDefault) {
            out[0].push(sortInstruction[0]);
            out[1].push(sortInstruction[1]);
            return out;
          }
          out[0].push(matchingDefault[0]);
          out[1].push(matchingDefault[1]);
          return out;
        },
        [[], []]
      );
    };
  }
});

// node_modules/algoliasearch-helper/src/functions/orderBy.js
var require_orderBy = __commonJS({
  "node_modules/algoliasearch-helper/src/functions/orderBy.js"(exports, module) {
    "use strict";
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== void 0;
        var valIsNull = value === null;
        var othIsDefined = other !== void 0;
        var othIsNull = other === null;
        if (!othIsNull && value > other || valIsNull && othIsDefined || !valIsDefined) {
          return 1;
        }
        if (!valIsNull && value < other || othIsNull && valIsDefined || !othIsDefined) {
          return -1;
        }
      }
      return 0;
    }
    function orderBy(collection, iteratees, orders) {
      if (!Array.isArray(collection)) {
        return [];
      }
      if (!Array.isArray(orders)) {
        orders = [];
      }
      var result = collection.map(function(value, index3) {
        return {
          criteria: iteratees.map(function(iteratee) {
            return value[iteratee];
          }),
          index: index3,
          value
        };
      });
      result.sort(function comparer(object, other) {
        var index3 = -1;
        while (++index3 < object.criteria.length) {
          var res = compareAscending(object.criteria[index3], other.criteria[index3]);
          if (res) {
            if (index3 >= orders.length) {
              return res;
            }
            if (orders[index3] === "desc") {
              return -res;
            }
            return res;
          }
        }
        return object.index - other.index;
      });
      return result.map(function(res) {
        return res.value;
      });
    }
    module.exports = orderBy;
  }
});

// node_modules/algoliasearch-helper/src/SearchResults/generate-hierarchical-tree.js
var require_generate_hierarchical_tree = __commonJS({
  "node_modules/algoliasearch-helper/src/SearchResults/generate-hierarchical-tree.js"(exports, module) {
    "use strict";
    module.exports = generateTrees;
    var fv = require_escapeFacetValue();
    var find2 = require_find();
    var prepareHierarchicalFacetSortBy = require_formatSort();
    var orderBy = require_orderBy();
    var escapeFacetValue = fv.escapeFacetValue;
    var unescapeFacetValue = fv.unescapeFacetValue;
    function generateTrees(state) {
      return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
        var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
        var hierarchicalFacetRefinement = state.hierarchicalFacetsRefinements[hierarchicalFacet.name] && state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0] || "";
        var hierarchicalSeparator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var hierarchicalRootPath = state._getHierarchicalRootPath(hierarchicalFacet);
        var hierarchicalShowParentLevel = state._getHierarchicalShowParentLevel(hierarchicalFacet);
        var sortBy = prepareHierarchicalFacetSortBy(
          state._getHierarchicalFacetSortBy(hierarchicalFacet)
        );
        var rootExhaustive = hierarchicalFacetResult.every(function(facetResult) {
          return facetResult.exhaustive;
        });
        var generateTreeFn = generateHierarchicalTree(
          sortBy,
          hierarchicalSeparator,
          hierarchicalRootPath,
          hierarchicalShowParentLevel,
          hierarchicalFacetRefinement
        );
        var results = hierarchicalFacetResult;
        if (hierarchicalRootPath) {
          results = hierarchicalFacetResult.slice(
            hierarchicalRootPath.split(hierarchicalSeparator).length
          );
        }
        return results.reduce(generateTreeFn, {
          name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
          count: null,
          // root level, no count
          isRefined: true,
          // root level, always refined
          path: null,
          // root level, no path
          escapedValue: null,
          exhaustive: rootExhaustive,
          data: null
        });
      };
    }
    function generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, currentRefinement) {
      return function generateTree(hierarchicalTree, hierarchicalFacetResult, currentHierarchicalLevel) {
        var parent = hierarchicalTree;
        if (currentHierarchicalLevel > 0) {
          var level = 0;
          parent = hierarchicalTree;
          while (level < currentHierarchicalLevel) {
            var data = parent && Array.isArray(parent.data) ? parent.data : [];
            parent = find2(data, function(subtree) {
              return subtree.isRefined;
            });
            level++;
          }
        }
        if (parent) {
          var picked = Object.keys(hierarchicalFacetResult.data).map(function(facetValue) {
            return [facetValue, hierarchicalFacetResult.data[facetValue]];
          }).filter(function(tuple) {
            var facetValue = tuple[0];
            return onlyMatchingTree(
              facetValue,
              parent.path || hierarchicalRootPath,
              currentRefinement,
              hierarchicalSeparator,
              hierarchicalRootPath,
              hierarchicalShowParentLevel
            );
          });
          parent.data = orderBy(
            picked.map(function(tuple) {
              var facetValue = tuple[0];
              var facetCount = tuple[1];
              return format(
                facetCount,
                facetValue,
                hierarchicalSeparator,
                unescapeFacetValue(currentRefinement),
                hierarchicalFacetResult.exhaustive
              );
            }),
            sortBy[0],
            sortBy[1]
          );
        }
        return hierarchicalTree;
      };
    }
    function onlyMatchingTree(facetValue, parentPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel) {
      if (hierarchicalRootPath && (facetValue.indexOf(hierarchicalRootPath) !== 0 || hierarchicalRootPath === facetValue)) {
        return false;
      }
      return !hierarchicalRootPath && facetValue.indexOf(hierarchicalSeparator) === -1 || // if there is a rootPath, being root level mean 1 level under rootPath
      hierarchicalRootPath && facetValue.split(hierarchicalSeparator).length - hierarchicalRootPath.split(hierarchicalSeparator).length === 1 || // if current refinement is a root level and current facetValue is a root level,
      // keep the facetValue
      facetValue.indexOf(hierarchicalSeparator) === -1 && currentRefinement.indexOf(hierarchicalSeparator) === -1 || // currentRefinement is a child of the facet value
      currentRefinement.indexOf(facetValue) === 0 || // facetValue is a child of the current parent, add it
      facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 && (hierarchicalShowParentLevel || facetValue.indexOf(currentRefinement) === 0);
    }
    function format(facetCount, facetValue, hierarchicalSeparator, currentRefinement, exhaustive) {
      var parts = facetValue.split(hierarchicalSeparator);
      return {
        name: parts[parts.length - 1].trim(),
        path: facetValue,
        escapedValue: escapeFacetValue(facetValue),
        count: facetCount,
        isRefined: currentRefinement === facetValue || currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
        exhaustive,
        data: null
      };
    }
  }
});

// node_modules/algoliasearch-helper/src/SearchResults/index.js
var require_SearchResults = __commonJS({
  "node_modules/algoliasearch-helper/src/SearchResults/index.js"(exports, module) {
    "use strict";
    var compact = require_compact();
    var defaultsPure = require_defaultsPure();
    var fv = require_escapeFacetValue();
    var find2 = require_find();
    var findIndex2 = require_findIndex();
    var formatSort = require_formatSort();
    var merge = require_merge();
    var orderBy = require_orderBy();
    var escapeFacetValue = fv.escapeFacetValue;
    var unescapeFacetValue = fv.unescapeFacetValue;
    var generateHierarchicalTree = require_generate_hierarchical_tree();
    function getIndices(attributes) {
      var indices = {};
      attributes.forEach(function(val, idx) {
        indices[val] = idx;
      });
      return indices;
    }
    function assignFacetStats(dest, facetStats, key) {
      if (facetStats && facetStats[key]) {
        dest.stats = facetStats[key];
      }
    }
    function findMatchingHierarchicalFacetFromAttributeName(hierarchicalFacets, hierarchicalAttributeName) {
      return find2(
        hierarchicalFacets,
        function facetKeyMatchesAttribute(hierarchicalFacet) {
          var facetNames = hierarchicalFacet.attributes || [];
          return facetNames.indexOf(hierarchicalAttributeName) > -1;
        }
      );
    }
    function SearchResults(state, results, options) {
      var mainSubResponse = results[0];
      this._rawResults = results;
      var self2 = this;
      Object.keys(mainSubResponse).forEach(function(key) {
        self2[key] = mainSubResponse[key];
      });
      var opts = merge(
        {
          persistHierarchicalRootCount: false
        },
        options
      );
      Object.keys(opts).forEach(function(key) {
        self2[key] = opts[key];
      });
      this.processingTimeMS = results.reduce(function(sum, result) {
        return result.processingTimeMS === void 0 ? sum : sum + result.processingTimeMS;
      }, 0);
      this.disjunctiveFacets = [];
      this.hierarchicalFacets = state.hierarchicalFacets.map(
        function initFutureTree() {
          return [];
        }
      );
      this.facets = [];
      var disjunctiveFacets = state.getRefinedDisjunctiveFacets();
      var facetsIndices = getIndices(state.facets);
      var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
      var nextDisjunctiveResult = 1;
      var mainFacets = mainSubResponse.facets || {};
      Object.keys(mainFacets).forEach(function(facetKey) {
        var facetValueObject = mainFacets[facetKey];
        var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(
          state.hierarchicalFacets,
          facetKey
        );
        if (hierarchicalFacet) {
          var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
          var idxAttributeName = findIndex2(state.hierarchicalFacets, function(f) {
            return f.name === hierarchicalFacet.name;
          });
          self2.hierarchicalFacets[idxAttributeName][facetIndex] = {
            attribute: facetKey,
            data: facetValueObject,
            exhaustive: mainSubResponse.exhaustiveFacetsCount
          };
        } else {
          var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;
          var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;
          var position;
          if (isFacetDisjunctive) {
            position = disjunctiveFacetsIndices[facetKey];
            self2.disjunctiveFacets[position] = {
              name: facetKey,
              data: facetValueObject,
              exhaustive: mainSubResponse.exhaustiveFacetsCount
            };
            assignFacetStats(
              self2.disjunctiveFacets[position],
              mainSubResponse.facets_stats,
              facetKey
            );
          }
          if (isFacetConjunctive) {
            position = facetsIndices[facetKey];
            self2.facets[position] = {
              name: facetKey,
              data: facetValueObject,
              exhaustive: mainSubResponse.exhaustiveFacetsCount
            };
            assignFacetStats(
              self2.facets[position],
              mainSubResponse.facets_stats,
              facetKey
            );
          }
        }
      });
      this.hierarchicalFacets = compact(this.hierarchicalFacets);
      disjunctiveFacets.forEach(function(disjunctiveFacet) {
        var result = results[nextDisjunctiveResult];
        var facets = result && result.facets ? result.facets : {};
        var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet);
        Object.keys(facets).forEach(function(dfacet) {
          var facetResults = facets[dfacet];
          var position;
          if (hierarchicalFacet) {
            position = findIndex2(state.hierarchicalFacets, function(f) {
              return f.name === hierarchicalFacet.name;
            });
            var attributeIndex = findIndex2(
              self2.hierarchicalFacets[position],
              function(f) {
                return f.attribute === dfacet;
              }
            );
            if (attributeIndex === -1) {
              return;
            }
            self2.hierarchicalFacets[position][attributeIndex].data = merge(
              {},
              self2.hierarchicalFacets[position][attributeIndex].data,
              facetResults
            );
          } else {
            position = disjunctiveFacetsIndices[dfacet];
            var dataFromMainRequest = mainSubResponse.facets && mainSubResponse.facets[dfacet] || {};
            self2.disjunctiveFacets[position] = {
              name: dfacet,
              data: defaultsPure({}, facetResults, dataFromMainRequest),
              exhaustive: result.exhaustiveFacetsCount
            };
            assignFacetStats(
              self2.disjunctiveFacets[position],
              result.facets_stats,
              dfacet
            );
            if (state.disjunctiveFacetsRefinements[dfacet]) {
              state.disjunctiveFacetsRefinements[dfacet].forEach(function(refinementValue) {
                if (!self2.disjunctiveFacets[position].data[refinementValue] && state.disjunctiveFacetsRefinements[dfacet].indexOf(
                  unescapeFacetValue(refinementValue)
                ) > -1) {
                  self2.disjunctiveFacets[position].data[refinementValue] = 0;
                }
              });
            }
          }
        });
        nextDisjunctiveResult++;
      });
      state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
        var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
        if (currentRefinement.length === 0 || currentRefinement[0].split(separator).length < 2) {
          return;
        }
        results.slice(nextDisjunctiveResult).forEach(function(result) {
          var facets = result && result.facets ? result.facets : {};
          Object.keys(facets).forEach(function(dfacet) {
            var facetResults = facets[dfacet];
            var position = findIndex2(state.hierarchicalFacets, function(f) {
              return f.name === hierarchicalFacet.name;
            });
            var attributeIndex = findIndex2(
              self2.hierarchicalFacets[position],
              function(f) {
                return f.attribute === dfacet;
              }
            );
            if (attributeIndex === -1) {
              return;
            }
            var defaultData = {};
            if (currentRefinement.length > 0 && !self2.persistHierarchicalRootCount) {
              var root = currentRefinement[0].split(separator)[0];
              defaultData[root] = self2.hierarchicalFacets[position][attributeIndex].data[root];
            }
            self2.hierarchicalFacets[position][attributeIndex].data = defaultsPure(
              defaultData,
              facetResults,
              self2.hierarchicalFacets[position][attributeIndex].data
            );
          });
          nextDisjunctiveResult++;
        });
      });
      Object.keys(state.facetsExcludes).forEach(function(facetName) {
        var excludes = state.facetsExcludes[facetName];
        var position = facetsIndices[facetName];
        self2.facets[position] = {
          name: facetName,
          data: mainFacets[facetName],
          exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
        excludes.forEach(function(facetValue) {
          self2.facets[position] = self2.facets[position] || { name: facetName };
          self2.facets[position].data = self2.facets[position].data || {};
          self2.facets[position].data[facetValue] = 0;
        });
      });
      this.hierarchicalFacets = this.hierarchicalFacets.map(
        generateHierarchicalTree(state)
      );
      this.facets = compact(this.facets);
      this.disjunctiveFacets = compact(this.disjunctiveFacets);
      this._state = state;
    }
    SearchResults.prototype.getFacetByName = function(name) {
      function predicate(facet) {
        return facet.name === name;
      }
      return find2(this.facets, predicate) || find2(this.disjunctiveFacets, predicate) || find2(this.hierarchicalFacets, predicate);
    };
    function extractNormalizedFacetValues(results, attribute) {
      function predicate(facet2) {
        return facet2.name === attribute;
      }
      if (results._state.isConjunctiveFacet(attribute)) {
        var facet = find2(results.facets, predicate);
        if (!facet)
          return [];
        return Object.keys(facet.data).map(function(name) {
          var value = escapeFacetValue(name);
          return {
            name,
            escapedValue: value,
            count: facet.data[name],
            isRefined: results._state.isFacetRefined(attribute, value),
            isExcluded: results._state.isExcludeRefined(attribute, name)
          };
        });
      } else if (results._state.isDisjunctiveFacet(attribute)) {
        var disjunctiveFacet = find2(results.disjunctiveFacets, predicate);
        if (!disjunctiveFacet)
          return [];
        return Object.keys(disjunctiveFacet.data).map(function(name) {
          var value = escapeFacetValue(name);
          return {
            name,
            escapedValue: value,
            count: disjunctiveFacet.data[name],
            isRefined: results._state.isDisjunctiveFacetRefined(attribute, value)
          };
        });
      } else if (results._state.isHierarchicalFacet(attribute)) {
        var hierarchicalFacetValues = find2(results.hierarchicalFacets, predicate);
        if (!hierarchicalFacetValues)
          return hierarchicalFacetValues;
        var hierarchicalFacet = results._state.getHierarchicalFacetByName(attribute);
        var separator = results._state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var currentRefinement = unescapeFacetValue(
          results._state.getHierarchicalRefinement(attribute)[0] || ""
        );
        if (currentRefinement.indexOf(hierarchicalFacet.rootPath) === 0) {
          currentRefinement = currentRefinement.replace(
            hierarchicalFacet.rootPath + separator,
            ""
          );
        }
        var currentRefinementSplit = currentRefinement.split(separator);
        currentRefinementSplit.unshift(attribute);
        setIsRefined(hierarchicalFacetValues, currentRefinementSplit, 0);
        return hierarchicalFacetValues;
      }
      return void 0;
    }
    function setIsRefined(item, currentRefinement, depth) {
      item.isRefined = item.name === currentRefinement[depth];
      if (item.data) {
        item.data.forEach(function(child) {
          setIsRefined(child, currentRefinement, depth + 1);
        });
      }
    }
    function recSort(sortFn, node, names, level) {
      level = level || 0;
      if (Array.isArray(node)) {
        return sortFn(node, names[level]);
      }
      if (!node.data || node.data.length === 0) {
        return node;
      }
      var children = node.data.map(function(childNode) {
        return recSort(sortFn, childNode, names, level + 1);
      });
      var sortedChildren = sortFn(children, names[level]);
      var newNode = defaultsPure({ data: sortedChildren }, node);
      return newNode;
    }
    SearchResults.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"];
    function vanillaSortFn(order, data) {
      return data.sort(order);
    }
    function sortViaFacetOrdering(facetValues, facetOrdering) {
      var orderedFacets = [];
      var remainingFacets = [];
      var order = facetOrdering.order || [];
      var reverseOrder = order.reduce(function(acc, name, i) {
        acc[name] = i;
        return acc;
      }, {});
      facetValues.forEach(function(item) {
        var name = item.path || item.name;
        if (reverseOrder[name] !== void 0) {
          orderedFacets[reverseOrder[name]] = item;
        } else {
          remainingFacets.push(item);
        }
      });
      orderedFacets = orderedFacets.filter(function(facet) {
        return facet;
      });
      var sortRemainingBy = facetOrdering.sortRemainingBy;
      var ordering;
      if (sortRemainingBy === "hidden") {
        return orderedFacets;
      } else if (sortRemainingBy === "alpha") {
        ordering = [
          ["path", "name"],
          ["asc", "asc"]
        ];
      } else {
        ordering = [["count"], ["desc"]];
      }
      return orderedFacets.concat(
        orderBy(remainingFacets, ordering[0], ordering[1])
      );
    }
    function getFacetOrdering(results, attribute) {
      return results.renderingContent && results.renderingContent.facetOrdering && results.renderingContent.facetOrdering.values && results.renderingContent.facetOrdering.values[attribute];
    }
    SearchResults.prototype.getFacetValues = function(attribute, opts) {
      var facetValues = extractNormalizedFacetValues(this, attribute);
      if (!facetValues) {
        return void 0;
      }
      var options = defaultsPure({}, opts, {
        sortBy: SearchResults.DEFAULT_SORT,
        // if no sortBy is given, attempt to sort based on facetOrdering
        // if it is given, we still allow to sort via facet ordering first
        facetOrdering: !(opts && opts.sortBy)
      });
      var results = this;
      var attributes;
      if (Array.isArray(facetValues)) {
        attributes = [attribute];
      } else {
        var config = results._state.getHierarchicalFacetByName(facetValues.name);
        attributes = config.attributes;
      }
      return recSort(
        function(data, facetName) {
          if (options.facetOrdering) {
            var facetOrdering = getFacetOrdering(results, facetName);
            if (facetOrdering) {
              return sortViaFacetOrdering(data, facetOrdering);
            }
          }
          if (Array.isArray(options.sortBy)) {
            var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);
            return orderBy(data, order[0], order[1]);
          } else if (typeof options.sortBy === "function") {
            return vanillaSortFn(options.sortBy, data);
          }
          throw new Error(
            "options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function"
          );
        },
        facetValues,
        attributes
      );
    };
    SearchResults.prototype.getFacetStats = function(attribute) {
      if (this._state.isConjunctiveFacet(attribute)) {
        return getFacetStatsIfAvailable(this.facets, attribute);
      } else if (this._state.isDisjunctiveFacet(attribute)) {
        return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
      }
      return void 0;
    };
    function getFacetStatsIfAvailable(facetList, facetName) {
      var data = find2(facetList, function(facet) {
        return facet.name === facetName;
      });
      return data && data.stats;
    }
    SearchResults.prototype.getRefinements = function() {
      var state = this._state;
      var results = this;
      var res = [];
      Object.keys(state.facetsRefinements).forEach(function(attributeName) {
        state.facetsRefinements[attributeName].forEach(function(name) {
          res.push(
            getRefinement(state, "facet", attributeName, name, results.facets)
          );
        });
      });
      Object.keys(state.facetsExcludes).forEach(function(attributeName) {
        state.facetsExcludes[attributeName].forEach(function(name) {
          res.push(
            getRefinement(state, "exclude", attributeName, name, results.facets)
          );
        });
      });
      Object.keys(state.disjunctiveFacetsRefinements).forEach(function(attributeName) {
        state.disjunctiveFacetsRefinements[attributeName].forEach(function(name) {
          res.push(
            getRefinement(
              state,
              "disjunctive",
              attributeName,
              name,
              results.disjunctiveFacets
            )
          );
        });
      });
      Object.keys(state.hierarchicalFacetsRefinements).forEach(function(attributeName) {
        state.hierarchicalFacetsRefinements[attributeName].forEach(function(name) {
          res.push(
            getHierarchicalRefinement(
              state,
              attributeName,
              name,
              results.hierarchicalFacets
            )
          );
        });
      });
      Object.keys(state.numericRefinements).forEach(function(attributeName) {
        var operators = state.numericRefinements[attributeName];
        Object.keys(operators).forEach(function(operator) {
          operators[operator].forEach(function(value) {
            res.push({
              type: "numeric",
              attributeName,
              name: value,
              numericValue: value,
              operator
            });
          });
        });
      });
      state.tagRefinements.forEach(function(name) {
        res.push({ type: "tag", attributeName: "_tags", name });
      });
      return res;
    };
    function getRefinement(state, type, attributeName, name, resultsFacets) {
      var facet = find2(resultsFacets, function(f) {
        return f.name === attributeName;
      });
      var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;
      var exhaustive = facet && facet.exhaustive || false;
      return {
        type,
        attributeName,
        name,
        count,
        exhaustive
      };
    }
    function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
      var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
      var separator = state._getHierarchicalFacetSeparator(facetDeclaration);
      var split = name.split(separator);
      var rootFacet = find2(resultsFacets, function(facet2) {
        return facet2.name === attributeName;
      });
      var facet = split.reduce(function(intermediateFacet, part) {
        var newFacet = intermediateFacet && find2(intermediateFacet.data, function(f) {
          return f.name === part;
        });
        return newFacet !== void 0 ? newFacet : intermediateFacet;
      }, rootFacet);
      var count = facet && facet.count || 0;
      var exhaustive = facet && facet.exhaustive || false;
      var path = facet && facet.path || "";
      return {
        type: "hierarchical",
        attributeName,
        name: path,
        count,
        exhaustive
      };
    }
    module.exports = SearchResults;
  }
});

// node_modules/algoliasearch-helper/src/version.js
var require_version = __commonJS({
  "node_modules/algoliasearch-helper/src/version.js"(exports, module) {
    "use strict";
    module.exports = "3.16.1";
  }
});

// node_modules/algoliasearch-helper/src/algoliasearch.helper.js
var require_algoliasearch_helper = __commonJS({
  "node_modules/algoliasearch-helper/src/algoliasearch.helper.js"(exports, module) {
    "use strict";
    var EventEmitter2 = require_events();
    var DerivedHelper = require_DerivedHelper();
    var escapeFacetValue = require_escapeFacetValue().escapeFacetValue;
    var inherits = require_inherits();
    var merge = require_merge();
    var objectHasKeys = require_objectHasKeys();
    var omit = require_omit();
    var requestBuilder = require_requestBuilder();
    var SearchParameters = require_SearchParameters();
    var SearchResults = require_SearchResults();
    var version = require_version();
    function AlgoliaSearchHelper(client, index3, options, searchResultsOptions) {
      if (typeof client.addAlgoliaAgent === "function") {
        client.addAlgoliaAgent("JS Helper (" + version + ")");
      }
      this.setClient(client);
      var opts = options || {};
      opts.index = index3;
      this.state = SearchParameters.make(opts);
      this.lastResults = null;
      this._queryId = 0;
      this._lastQueryIdReceived = -1;
      this.derivedHelpers = [];
      this._currentNbQueries = 0;
      this._searchResultsOptions = searchResultsOptions;
    }
    inherits(AlgoliaSearchHelper, EventEmitter2);
    AlgoliaSearchHelper.prototype.search = function() {
      this._search({ onlyWithDerivedHelpers: false });
      return this;
    };
    AlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function() {
      this._search({ onlyWithDerivedHelpers: true });
      return this;
    };
    AlgoliaSearchHelper.prototype.getQuery = function() {
      var state = this.state;
      return requestBuilder._getHitsSearchParams(state);
    };
    AlgoliaSearchHelper.prototype.searchOnce = function(options, cb) {
      var tempState = !options ? this.state : this.state.setQueryParameters(options);
      var queries = requestBuilder._getQueries(tempState.index, tempState);
      var self2 = this;
      this._currentNbQueries++;
      this.emit("searchOnce", {
        state: tempState
      });
      if (cb) {
        this.client.search(queries).then(function(content) {
          self2._currentNbQueries--;
          if (self2._currentNbQueries === 0) {
            self2.emit("searchQueueEmpty");
          }
          cb(null, new SearchResults(tempState, content.results), tempState);
        }).catch(function(err) {
          self2._currentNbQueries--;
          if (self2._currentNbQueries === 0) {
            self2.emit("searchQueueEmpty");
          }
          cb(err, null, tempState);
        });
        return void 0;
      }
      return this.client.search(queries).then(
        function(content) {
          self2._currentNbQueries--;
          if (self2._currentNbQueries === 0)
            self2.emit("searchQueueEmpty");
          return {
            content: new SearchResults(tempState, content.results),
            state: tempState,
            _originalResponse: content
          };
        },
        function(e) {
          self2._currentNbQueries--;
          if (self2._currentNbQueries === 0)
            self2.emit("searchQueueEmpty");
          throw e;
        }
      );
    };
    AlgoliaSearchHelper.prototype.findAnswers = function(options) {
      console.warn("[algoliasearch-helper] answers is no longer supported");
      var state = this.state;
      var derivedHelper = this.derivedHelpers[0];
      if (!derivedHelper) {
        return Promise.resolve([]);
      }
      var derivedState = derivedHelper.getModifiedState(state);
      var data = merge(
        {
          attributesForPrediction: options.attributesForPrediction,
          nbHits: options.nbHits
        },
        {
          params: omit(requestBuilder._getHitsSearchParams(derivedState), [
            "attributesToSnippet",
            "hitsPerPage",
            "restrictSearchableAttributes",
            "snippetEllipsisText"
          ])
        }
      );
      var errorMessage = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
      if (typeof this.client.initIndex !== "function") {
        throw new Error(errorMessage);
      }
      var index3 = this.client.initIndex(derivedState.index);
      if (typeof index3.findAnswers !== "function") {
        throw new Error(errorMessage);
      }
      return index3.findAnswers(derivedState.query, options.queryLanguages, data);
    };
    AlgoliaSearchHelper.prototype.searchForFacetValues = function(facet, query, maxFacetHits, userState) {
      var clientHasSFFV = typeof this.client.searchForFacetValues === "function";
      var clientHasInitIndex = typeof this.client.initIndex === "function";
      if (!clientHasSFFV && !clientHasInitIndex && typeof this.client.search !== "function") {
        throw new Error(
          "search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues"
        );
      }
      var state = this.state.setQueryParameters(userState || {});
      var isDisjunctive = state.isDisjunctiveFacet(facet);
      var algoliaQuery = requestBuilder.getSearchForFacetQuery(
        facet,
        query,
        maxFacetHits,
        state
      );
      this._currentNbQueries++;
      var self2 = this;
      var searchForFacetValuesPromise;
      if (clientHasSFFV) {
        searchForFacetValuesPromise = this.client.searchForFacetValues([
          { indexName: state.index, params: algoliaQuery }
        ]);
      } else if (clientHasInitIndex) {
        searchForFacetValuesPromise = this.client.initIndex(state.index).searchForFacetValues(algoliaQuery);
      } else {
        delete algoliaQuery.facetName;
        searchForFacetValuesPromise = this.client.search([
          {
            type: "facet",
            facet,
            indexName: state.index,
            params: algoliaQuery
          }
        ]).then(function processResponse(response) {
          return response.results[0];
        });
      }
      this.emit("searchForFacetValues", {
        state,
        facet,
        query
      });
      return searchForFacetValuesPromise.then(
        function addIsRefined(content) {
          self2._currentNbQueries--;
          if (self2._currentNbQueries === 0)
            self2.emit("searchQueueEmpty");
          content = Array.isArray(content) ? content[0] : content;
          content.facetHits.forEach(function(f) {
            f.escapedValue = escapeFacetValue(f.value);
            f.isRefined = isDisjunctive ? state.isDisjunctiveFacetRefined(facet, f.escapedValue) : state.isFacetRefined(facet, f.escapedValue);
          });
          return content;
        },
        function(e) {
          self2._currentNbQueries--;
          if (self2._currentNbQueries === 0)
            self2.emit("searchQueueEmpty");
          throw e;
        }
      );
    };
    AlgoliaSearchHelper.prototype.setQuery = function(q) {
      this._change({
        state: this.state.resetPage().setQuery(q),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.clearRefinements = function(name) {
      this._change({
        state: this.state.resetPage().clearRefinements(name),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.clearTags = function() {
      this._change({
        state: this.state.resetPage().clearTags(),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function(facet, value) {
      this._change({
        state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function() {
      return this.addDisjunctiveFacetRefinement.apply(this, arguments);
    };
    AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function(facet, path) {
      this._change({
        state: this.state.resetPage().addHierarchicalFacetRefinement(facet, path),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.addNumericRefinement = function(attribute, operator, value) {
      this._change({
        state: this.state.resetPage().addNumericRefinement(attribute, operator, value),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.addFacetRefinement = function(facet, value) {
      this._change({
        state: this.state.resetPage().addFacetRefinement(facet, value),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.addRefine = function() {
      return this.addFacetRefinement.apply(this, arguments);
    };
    AlgoliaSearchHelper.prototype.addFacetExclusion = function(facet, value) {
      this._change({
        state: this.state.resetPage().addExcludeRefinement(facet, value),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.addExclude = function() {
      return this.addFacetExclusion.apply(this, arguments);
    };
    AlgoliaSearchHelper.prototype.addTag = function(tag) {
      this._change({
        state: this.state.resetPage().addTagRefinement(tag),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.removeNumericRefinement = function(attribute, operator, value) {
      this._change({
        state: this.state.resetPage().removeNumericRefinement(attribute, operator, value),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function(facet, value) {
      this._change({
        state: this.state.resetPage().removeDisjunctiveFacetRefinement(facet, value),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function() {
      return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
    };
    AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function(facet) {
      this._change({
        state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.removeFacetRefinement = function(facet, value) {
      this._change({
        state: this.state.resetPage().removeFacetRefinement(facet, value),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.removeRefine = function() {
      return this.removeFacetRefinement.apply(this, arguments);
    };
    AlgoliaSearchHelper.prototype.removeFacetExclusion = function(facet, value) {
      this._change({
        state: this.state.resetPage().removeExcludeRefinement(facet, value),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.removeExclude = function() {
      return this.removeFacetExclusion.apply(this, arguments);
    };
    AlgoliaSearchHelper.prototype.removeTag = function(tag) {
      this._change({
        state: this.state.resetPage().removeTagRefinement(tag),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.toggleFacetExclusion = function(facet, value) {
      this._change({
        state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.toggleExclude = function() {
      return this.toggleFacetExclusion.apply(this, arguments);
    };
    AlgoliaSearchHelper.prototype.toggleRefinement = function(facet, value) {
      return this.toggleFacetRefinement(facet, value);
    };
    AlgoliaSearchHelper.prototype.toggleFacetRefinement = function(facet, value) {
      this._change({
        state: this.state.resetPage().toggleFacetRefinement(facet, value),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.toggleRefine = function() {
      return this.toggleFacetRefinement.apply(this, arguments);
    };
    AlgoliaSearchHelper.prototype.toggleTag = function(tag) {
      this._change({
        state: this.state.resetPage().toggleTagRefinement(tag),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.nextPage = function() {
      var page = this.state.page || 0;
      return this.setPage(page + 1);
    };
    AlgoliaSearchHelper.prototype.previousPage = function() {
      var page = this.state.page || 0;
      return this.setPage(page - 1);
    };
    function setCurrentPage(page) {
      if (page < 0)
        throw new Error("Page requested below 0.");
      this._change({
        state: this.state.setPage(page),
        isPageReset: false
      });
      return this;
    }
    AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;
    AlgoliaSearchHelper.prototype.setPage = setCurrentPage;
    AlgoliaSearchHelper.prototype.setIndex = function(name) {
      this._change({
        state: this.state.resetPage().setIndex(name),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.setQueryParameter = function(parameter, value) {
      this._change({
        state: this.state.resetPage().setQueryParameter(parameter, value),
        isPageReset: true
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.setState = function(newState) {
      this._change({
        state: SearchParameters.make(newState),
        isPageReset: false
      });
      return this;
    };
    AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent = function(newState) {
      this.state = new SearchParameters(newState);
      return this;
    };
    AlgoliaSearchHelper.prototype.hasRefinements = function(attribute) {
      if (objectHasKeys(this.state.getNumericRefinements(attribute))) {
        return true;
      } else if (this.state.isConjunctiveFacet(attribute)) {
        return this.state.isFacetRefined(attribute);
      } else if (this.state.isDisjunctiveFacet(attribute)) {
        return this.state.isDisjunctiveFacetRefined(attribute);
      } else if (this.state.isHierarchicalFacet(attribute)) {
        return this.state.isHierarchicalFacetRefined(attribute);
      }
      return false;
    };
    AlgoliaSearchHelper.prototype.isExcluded = function(facet, value) {
      return this.state.isExcludeRefined(facet, value);
    };
    AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function(facet, value) {
      return this.state.isDisjunctiveFacetRefined(facet, value);
    };
    AlgoliaSearchHelper.prototype.hasTag = function(tag) {
      return this.state.isTagRefined(tag);
    };
    AlgoliaSearchHelper.prototype.isTagRefined = function() {
      return this.hasTagRefinements.apply(this, arguments);
    };
    AlgoliaSearchHelper.prototype.getIndex = function() {
      return this.state.index;
    };
    function getCurrentPage() {
      return this.state.page;
    }
    AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
    AlgoliaSearchHelper.prototype.getPage = getCurrentPage;
    AlgoliaSearchHelper.prototype.getTags = function() {
      return this.state.tagRefinements;
    };
    AlgoliaSearchHelper.prototype.getRefinements = function(facetName) {
      var refinements = [];
      if (this.state.isConjunctiveFacet(facetName)) {
        var conjRefinements = this.state.getConjunctiveRefinements(facetName);
        conjRefinements.forEach(function(r) {
          refinements.push({
            value: r,
            type: "conjunctive"
          });
        });
        var excludeRefinements = this.state.getExcludeRefinements(facetName);
        excludeRefinements.forEach(function(r) {
          refinements.push({
            value: r,
            type: "exclude"
          });
        });
      } else if (this.state.isDisjunctiveFacet(facetName)) {
        var disjunctiveRefinements = this.state.getDisjunctiveRefinements(facetName);
        disjunctiveRefinements.forEach(function(r) {
          refinements.push({
            value: r,
            type: "disjunctive"
          });
        });
      }
      var numericRefinements = this.state.getNumericRefinements(facetName);
      Object.keys(numericRefinements).forEach(function(operator) {
        var value = numericRefinements[operator];
        refinements.push({
          value,
          operator,
          type: "numeric"
        });
      });
      return refinements;
    };
    AlgoliaSearchHelper.prototype.getNumericRefinement = function(attribute, operator) {
      return this.state.getNumericRefinement(attribute, operator);
    };
    AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function(facetName) {
      return this.state.getHierarchicalFacetBreadcrumb(facetName);
    };
    AlgoliaSearchHelper.prototype._search = function(options) {
      var state = this.state;
      var states = [];
      var mainQueries = [];
      if (!options.onlyWithDerivedHelpers) {
        mainQueries = requestBuilder._getQueries(state.index, state);
        states.push({
          state,
          queriesCount: mainQueries.length,
          helper: this
        });
        this.emit("search", {
          state,
          results: this.lastResults
        });
      }
      var derivedQueries = this.derivedHelpers.map(function(derivedHelper) {
        var derivedState = derivedHelper.getModifiedState(state);
        var derivedStateQueries = derivedState.index ? requestBuilder._getQueries(derivedState.index, derivedState) : [];
        states.push({
          state: derivedState,
          queriesCount: derivedStateQueries.length,
          helper: derivedHelper
        });
        derivedHelper.emit("search", {
          state: derivedState,
          results: derivedHelper.lastResults
        });
        return derivedStateQueries;
      });
      var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);
      var queryId = this._queryId++;
      this._currentNbQueries++;
      if (!queries.length) {
        return Promise.resolve({ results: [] }).then(
          this._dispatchAlgoliaResponse.bind(this, states, queryId)
        );
      }
      try {
        this.client.search(queries).then(this._dispatchAlgoliaResponse.bind(this, states, queryId)).catch(this._dispatchAlgoliaError.bind(this, queryId));
      } catch (error) {
        this.emit("error", {
          error
        });
      }
      return void 0;
    };
    AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function(states, queryId, content) {
      var self2 = this;
      if (queryId < this._lastQueryIdReceived) {
        return;
      }
      this._currentNbQueries -= queryId - this._lastQueryIdReceived;
      this._lastQueryIdReceived = queryId;
      if (this._currentNbQueries === 0)
        this.emit("searchQueueEmpty");
      var results = content.results.slice();
      states.forEach(function(s) {
        var state = s.state;
        var queriesCount = s.queriesCount;
        var helper = s.helper;
        var specificResults = results.splice(0, queriesCount);
        if (!state.index) {
          helper.emit("result", {
            results: null,
            state
          });
          return;
        }
        helper.lastResults = new SearchResults(
          state,
          specificResults,
          self2._searchResultsOptions
        );
        helper.emit("result", {
          results: helper.lastResults,
          state
        });
      });
    };
    AlgoliaSearchHelper.prototype._dispatchAlgoliaError = function(queryId, error) {
      if (queryId < this._lastQueryIdReceived) {
        return;
      }
      this._currentNbQueries -= queryId - this._lastQueryIdReceived;
      this._lastQueryIdReceived = queryId;
      this.emit("error", {
        error
      });
      if (this._currentNbQueries === 0)
        this.emit("searchQueueEmpty");
    };
    AlgoliaSearchHelper.prototype.containsRefinement = function(query, facetFilters, numericFilters, tagFilters) {
      return query || facetFilters.length !== 0 || numericFilters.length !== 0 || tagFilters.length !== 0;
    };
    AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function(facet) {
      return this.state.disjunctiveRefinements[facet] && this.state.disjunctiveRefinements[facet].length > 0;
    };
    AlgoliaSearchHelper.prototype._change = function(event) {
      var state = event.state;
      var isPageReset = event.isPageReset;
      if (state !== this.state) {
        this.state = state;
        this.emit("change", {
          state: this.state,
          results: this.lastResults,
          isPageReset
        });
      }
    };
    AlgoliaSearchHelper.prototype.clearCache = function() {
      if (this.client.clearCache)
        this.client.clearCache();
      return this;
    };
    AlgoliaSearchHelper.prototype.setClient = function(newClient) {
      if (this.client === newClient)
        return this;
      if (typeof newClient.addAlgoliaAgent === "function") {
        newClient.addAlgoliaAgent("JS Helper (" + version + ")");
      }
      this.client = newClient;
      return this;
    };
    AlgoliaSearchHelper.prototype.getClient = function() {
      return this.client;
    };
    AlgoliaSearchHelper.prototype.derive = function(fn) {
      var derivedHelper = new DerivedHelper(this, fn);
      this.derivedHelpers.push(derivedHelper);
      return derivedHelper;
    };
    AlgoliaSearchHelper.prototype.detachDerivedHelper = function(derivedHelper) {
      var pos = this.derivedHelpers.indexOf(derivedHelper);
      if (pos === -1)
        throw new Error("Derived helper already detached");
      this.derivedHelpers.splice(pos, 1);
    };
    AlgoliaSearchHelper.prototype.hasPendingRequests = function() {
      return this._currentNbQueries > 0;
    };
    module.exports = AlgoliaSearchHelper;
  }
});

// node_modules/algoliasearch-helper/index.js
var require_algoliasearch_helper2 = __commonJS({
  "node_modules/algoliasearch-helper/index.js"(exports, module) {
    "use strict";
    var AlgoliaSearchHelper = require_algoliasearch_helper();
    var SearchParameters = require_SearchParameters();
    var SearchResults = require_SearchResults();
    function algoliasearchHelper4(client, index3, opts, searchResultsOptions) {
      return new AlgoliaSearchHelper(client, index3, opts, searchResultsOptions);
    }
    algoliasearchHelper4.version = require_version();
    algoliasearchHelper4.AlgoliaSearchHelper = AlgoliaSearchHelper;
    algoliasearchHelper4.SearchParameters = SearchParameters;
    algoliasearchHelper4.SearchResults = SearchResults;
    module.exports = algoliasearchHelper4;
  }
});

// node_modules/instantsearch.js/node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/instantsearch.js/node_modules/qs/lib/formats.js"(exports, module) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/instantsearch.js/node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/instantsearch.js/node_modules/qs/lib/utils.js"(exports, module) {
    "use strict";
    var formats = require_formats();
    var has2 = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object") {
        if (isArray(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has2.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has2.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has2.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);
        if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
          out += string.charAt(i);
          continue;
        }
        if (c < 128) {
          out = out + hexTable[c];
          continue;
        }
        if (c < 2048) {
          out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
          continue;
        }
        if (c < 55296 || c >= 57344) {
          out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
          continue;
        }
        i += 1;
        c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
        out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys2 = Object.keys(obj);
        for (var j = 0; j < keys2.length; ++j) {
          var key = keys2[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b) {
      return [].concat(a, b);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    module.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// node_modules/instantsearch.js/node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/instantsearch.js/node_modules/qs/lib/stringify.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var formats = require_formats();
    var has2 = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray = Array.isArray;
    var split = String.prototype.split;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      charset: "utf-8",
      charsetSentinel: false,
      delimiter: "&",
      encode: true,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var stringify = function stringify2(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset) {
      var obj = object;
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          if (generateArrayPrefix === "comma" && encodeValuesOnly) {
            var valuesArray = split.call(String(obj), ",");
            var valuesJoined = "";
            for (var i = 0; i < valuesArray.length; ++i) {
              valuesJoined += (i === 0 ? "" : ",") + formatter(encoder(valuesArray[i], defaults.encoder, charset, "value", format));
            }
            return [formatter(keyValue) + "=" + valuesJoined];
          }
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys2 = Object.keys(obj);
        objKeys = sort ? keys2.sort(sort) : keys2;
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(prefix, key) : prefix : prefix + (allowDots ? "." + key : "[" + key + "]");
        pushToArray(values, stringify2(
          value,
          keyPrefix,
          generateArrayPrefix,
          strictNullHandling,
          skipNulls,
          encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has2.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys2 = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var arrayFormat;
      if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if (opts && "indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = "indices";
      }
      var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) {
          continue;
        }
        pushToArray(keys2, stringify(
          obj[key],
          key,
          generateArrayPrefix,
          options.strictNullHandling,
          options.skipNulls,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset
        ));
      }
      var joined = keys2.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/instantsearch.js/node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/instantsearch.js/node_modules/qs/lib/parse.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var has2 = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowPrototypes: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = {};
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(part.slice(pos + 1), options),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults.decoder, charset, "value");
            }
          );
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [val] : val;
        }
        if (has2.call(obj, key)) {
          obj[key] = utils.combine(obj[key], val);
        } else {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          obj = [].concat(leaf);
        } else {
          obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var index3 = parseInt(cleanRoot, 10);
          if (!options.parseArrays && cleanRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index3) && root !== cleanRoot && String(index3) === cleanRoot && index3 >= 0 && (options.parseArrays && index3 <= options.arrayLimit)) {
            obj = [];
            obj[index3] = leaf;
          } else if (cleanRoot !== "__proto__") {
            obj[cleanRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys2 = [];
      if (parent) {
        if (!options.plainObjects && has2.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys2.push(parent);
      }
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has2.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys2.push(segment[1]);
      }
      if (segment) {
        keys2.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys2, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      return {
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var keys2 = Object.keys(tempObj);
      for (var i = 0; i < keys2.length; ++i) {
        var key = keys2[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/instantsearch.js/node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/instantsearch.js/node_modules/qs/lib/index.js"(exports, module) {
    "use strict";
    var stringify = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module.exports = {
      formats,
      parse,
      stringify
    };
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React8 = require_react();
        var ReactSharedInternals = React8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState7 = React8.useState, useEffect7 = React8.useEffect, useLayoutEffect2 = React8.useLayoutEffect, useDebugValue = React8.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React8.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState7({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect2(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect7(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore2;
        var useSyncExternalStore$2 = React8.useSyncExternalStore !== void 0 ? React8.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/cross-fetch/dist/browser-polyfill.js
var require_browser_polyfill = __commonJS({
  "node_modules/cross-fetch/dist/browser-polyfill.js"(exports) {
    (function(self2) {
      var irrelevant = function(exports2) {
        var support = {
          searchParams: "URLSearchParams" in self2,
          iterable: "Symbol" in self2 && "iterator" in Symbol,
          blob: "FileReader" in self2 && "Blob" in self2 && function() {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          }(),
          formData: "FormData" in self2,
          arrayBuffer: "ArrayBuffer" in self2
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name) {
          if (typeof name !== "string") {
            name = String(name);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
            throw new TypeError("Invalid character in header field name");
          }
          return name.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers(headers) {
          this.map = {};
          if (headers instanceof Headers) {
            headers.forEach(function(value, name) {
              this.append(name, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
        Headers.prototype.append = function(name, value) {
          name = normalizeName(name);
          value = normalizeValue(value);
          var oldValue = this.map[name];
          this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name) {
          delete this.map[normalizeName(name)];
        };
        Headers.prototype.get = function(name) {
          name = normalizeName(name);
          return this.has(name) ? this.map[name] : null;
        };
        Headers.prototype.has = function(name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers.prototype.set = function(name, value) {
          this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this);
            }
          }
        };
        Headers.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push(name);
          });
          return iteratorFor(items);
        };
        Headers.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push([name, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        }
        function consumed(body) {
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsText(blob);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);
          for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i]);
          }
          return chars.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this._bodyInit = body;
            if (!body) {
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
            this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) {
                return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
              } else {
                return this.blob().then(readBlobAsArrayBuffer);
              }
            };
          }
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
          options = options || {};
          var body = options.body;
          if (input instanceof Request) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal;
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
        }
        Request.prototype.clone = function() {
          return new Request(this, { body: this._bodyInit });
        };
        function decode(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              headers.append(key, value);
            }
          });
          return headers;
        }
        Body.call(Request.prototype);
        function Response2(bodyInit, options) {
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = "statusText" in options ? options.statusText : "OK";
          this.headers = new Headers(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response2.prototype);
        Response2.prototype.clone = function() {
          return new Response2(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
          });
        };
        Response2.error = function() {
          var response = new Response2(null, { status: 0, statusText: "" });
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response2.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response2(null, { status, headers: { location: url } });
        };
        exports2.DOMException = self2.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name) {
            this.message = message;
            this.name = name;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init) {
          return new Promise(function(resolve, reject) {
            var request = new Request(input, init);
            if (request.signal && request.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              resolve(new Response2(body, options));
            };
            xhr.onerror = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.ontimeout = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.onabort = function() {
              reject(new exports2.DOMException("Aborted", "AbortError"));
            };
            xhr.open(request.method, request.url, true);
            if (request.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr && support.blob) {
              xhr.responseType = "blob";
            }
            request.headers.forEach(function(value, name) {
              xhr.setRequestHeader(name, value);
            });
            if (request.signal) {
              request.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!self2.fetch) {
          self2.fetch = fetch2;
          self2.Headers = Headers;
          self2.Request = Request;
          self2.Response = Response2;
        }
        exports2.Headers = Headers;
        exports2.Request = Request;
        exports2.Response = Response2;
        exports2.fetch = fetch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
        return exports2;
      }({});
    })(typeof self !== "undefined" ? self : exports);
  }
});

// node_modules/@meilisearch/instant-meilisearch/dist/instant-meilisearch.umd.js
var require_instant_meilisearch_umd = __commonJS({
  "node_modules/@meilisearch/instant-meilisearch/dist/instant-meilisearch.umd.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_browser_polyfill()) : typeof define === "function" && define.amd ? define(["exports", "cross-fetch/polyfill"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.window = global2.window || {}));
    })(exports, function(exports2) {
      "use strict";
      var __assign = function() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      function __rest(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      }
      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }
      function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      }
      function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      }
      typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
      };
      var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
      function createCommonjsModule(fn) {
        var module2 = { exports: {} };
        return fn(module2, module2.exports), module2.exports;
      }
      var meilisearch_umd = createCommonjsModule(function(module2, exports3) {
        (function(global2, factory) {
          factory(exports3);
        })(commonjsGlobal, function(exports4) {
          var MatchingStrategies = {
            ALL: "all",
            LAST: "last"
          };
          var ContentTypeEnum = {
            JSON: "application/json",
            CSV: "text/csv",
            NDJSON: "application/x-ndjson"
          };
          function _regeneratorRuntime() {
            _regeneratorRuntime = function() {
              return exports5;
            };
            var exports5 = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
            function define2(obj, key, value) {
              return Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
              }), obj[key];
            }
            try {
              define2({}, "");
            } catch (err) {
              define2 = function(obj, key, value) {
                return obj[key] = value;
              };
            }
            function wrap(innerFn, outerFn, self2, tryLocsList) {
              var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
              return generator._invoke = function(innerFn2, self3, context2) {
                var state = "suspendedStart";
                return function(method, arg) {
                  if ("executing" === state)
                    throw new Error("Generator is already running");
                  if ("completed" === state) {
                    if ("throw" === method)
                      throw arg;
                    return doneResult();
                  }
                  for (context2.method = method, context2.arg = arg; ; ) {
                    var delegate = context2.delegate;
                    if (delegate) {
                      var delegateResult = maybeInvokeDelegate(delegate, context2);
                      if (delegateResult) {
                        if (delegateResult === ContinueSentinel)
                          continue;
                        return delegateResult;
                      }
                    }
                    if ("next" === context2.method)
                      context2.sent = context2._sent = context2.arg;
                    else if ("throw" === context2.method) {
                      if ("suspendedStart" === state)
                        throw state = "completed", context2.arg;
                      context2.dispatchException(context2.arg);
                    } else
                      "return" === context2.method && context2.abrupt("return", context2.arg);
                    state = "executing";
                    var record = tryCatch(innerFn2, self3, context2);
                    if ("normal" === record.type) {
                      if (state = context2.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
                        continue;
                      return {
                        value: record.arg,
                        done: context2.done
                      };
                    }
                    "throw" === record.type && (state = "completed", context2.method = "throw", context2.arg = record.arg);
                  }
                };
              }(innerFn, self2, context), generator;
            }
            function tryCatch(fn, obj, arg) {
              try {
                return {
                  type: "normal",
                  arg: fn.call(obj, arg)
                };
              } catch (err) {
                return {
                  type: "throw",
                  arg: err
                };
              }
            }
            exports5.wrap = wrap;
            var ContinueSentinel = {};
            function Generator() {
            }
            function GeneratorFunction() {
            }
            function GeneratorFunctionPrototype() {
            }
            var IteratorPrototype = {};
            define2(IteratorPrototype, iteratorSymbol, function() {
              return this;
            });
            var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
            NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
            var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
            function defineIteratorMethods(prototype) {
              ["next", "throw", "return"].forEach(function(method) {
                define2(prototype, method, function(arg) {
                  return this._invoke(method, arg);
                });
              });
            }
            function AsyncIterator(generator, PromiseImpl) {
              function invoke(method, arg, resolve, reject) {
                var record = tryCatch(generator[method], generator, arg);
                if ("throw" !== record.type) {
                  var result = record.arg, value = result.value;
                  return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
                    invoke("next", value2, resolve, reject);
                  }, function(err) {
                    invoke("throw", err, resolve, reject);
                  }) : PromiseImpl.resolve(value).then(function(unwrapped) {
                    result.value = unwrapped, resolve(result);
                  }, function(error) {
                    return invoke("throw", error, resolve, reject);
                  });
                }
                reject(record.arg);
              }
              var previousPromise;
              this._invoke = function(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
              };
            }
            function maybeInvokeDelegate(delegate, context) {
              var method = delegate.iterator[context.method];
              if (void 0 === method) {
                if (context.delegate = null, "throw" === context.method) {
                  if (delegate.iterator.return && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method))
                    return ContinueSentinel;
                  context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return ContinueSentinel;
              }
              var record = tryCatch(method, delegate.iterator, context.arg);
              if ("throw" === record.type)
                return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
              var info = record.arg;
              return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
            }
            function pushTryEntry(locs) {
              var entry = {
                tryLoc: locs[0]
              };
              1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
            }
            function resetTryEntry(entry) {
              var record = entry.completion || {};
              record.type = "normal", delete record.arg, entry.completion = record;
            }
            function Context(tryLocsList) {
              this.tryEntries = [{
                tryLoc: "root"
              }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
            }
            function values(iterable) {
              if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod)
                  return iteratorMethod.call(iterable);
                if ("function" == typeof iterable.next)
                  return iterable;
                if (!isNaN(iterable.length)) {
                  var i = -1, next = function next2() {
                    for (; ++i < iterable.length; )
                      if (hasOwn.call(iterable, i))
                        return next2.value = iterable[i], next2.done = false, next2;
                    return next2.value = void 0, next2.done = true, next2;
                  };
                  return next.next = next;
                }
              }
              return {
                next: doneResult
              };
            }
            function doneResult() {
              return {
                value: void 0,
                done: true
              };
            }
            return GeneratorFunction.prototype = GeneratorFunctionPrototype, define2(Gp, "constructor", GeneratorFunctionPrototype), define2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports5.isGeneratorFunction = function(genFun) {
              var ctor = "function" == typeof genFun && genFun.constructor;
              return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
            }, exports5.mark = function(genFun) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define2(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
            }, exports5.awrap = function(arg) {
              return {
                __await: arg
              };
            }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, asyncIteratorSymbol, function() {
              return this;
            }), exports5.AsyncIterator = AsyncIterator, exports5.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
              return exports5.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
                return result.done ? result.value : iter.next();
              });
            }, defineIteratorMethods(Gp), define2(Gp, toStringTagSymbol, "Generator"), define2(Gp, iteratorSymbol, function() {
              return this;
            }), define2(Gp, "toString", function() {
              return "[object Generator]";
            }), exports5.keys = function(object) {
              var keys2 = [];
              for (var key in object)
                keys2.push(key);
              return keys2.reverse(), function next() {
                for (; keys2.length; ) {
                  var key2 = keys2.pop();
                  if (key2 in object)
                    return next.value = key2, next.done = false, next;
                }
                return next.done = true, next;
              };
            }, exports5.values = values, Context.prototype = {
              constructor: Context,
              reset: function(skipTempReset) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
                  for (var name in this)
                    "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
              },
              stop: function() {
                this.done = true;
                var rootRecord = this.tryEntries[0].completion;
                if ("throw" === rootRecord.type)
                  throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function(exception) {
                if (this.done)
                  throw exception;
                var context = this;
                function handle(loc, caught) {
                  return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i], record = entry.completion;
                  if ("root" === entry.tryLoc)
                    return handle("end");
                  if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, true);
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, true);
                    } else {
                      if (!hasFinally)
                        throw new Error("try statement without catch or finally");
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
              },
              complete: function(record, afterLoc) {
                if ("throw" === record.type)
                  throw record.arg;
                return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
              },
              finish: function(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
                }
              },
              catch: function(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ("throw" === record.type) {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function(iterable, resultName, nextLoc) {
                return this.delegate = {
                  iterator: values(iterable),
                  resultName,
                  nextLoc
                }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
              }
            }, exports5;
          }
          function _typeof25(obj) {
            "@babel/helpers - typeof";
            return _typeof25 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
              return typeof obj2;
            } : function(obj2) {
              return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            }, _typeof25(obj);
          }
          function _classCallCheck3(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _defineProperties3(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          function _createClass3(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties3(Constructor.prototype, protoProps);
            if (staticProps)
              _defineProperties3(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
              writable: false
            });
            return Constructor;
          }
          function _defineProperty21(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }
          function _inherits2(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function");
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            });
            Object.defineProperty(subClass, "prototype", {
              writable: false
            });
            if (superClass)
              _setPrototypeOf2(subClass, superClass);
          }
          function _getPrototypeOf2(o) {
            _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf3(o2) {
              return o2.__proto__ || Object.getPrototypeOf(o2);
            };
            return _getPrototypeOf2(o);
          }
          function _setPrototypeOf2(o, p) {
            _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o2, p2) {
              o2.__proto__ = p2;
              return o2;
            };
            return _setPrototypeOf2(o, p);
          }
          function _isNativeReflectConstruct2() {
            if (typeof Reflect === "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy === "function")
              return true;
            try {
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
              return true;
            } catch (e) {
              return false;
            }
          }
          function _construct(Parent, args, Class) {
            if (_isNativeReflectConstruct2()) {
              _construct = Reflect.construct.bind();
            } else {
              _construct = function _construct2(Parent2, args2, Class2) {
                var a = [null];
                a.push.apply(a, args2);
                var Constructor = Function.bind.apply(Parent2, a);
                var instance = new Constructor();
                if (Class2)
                  _setPrototypeOf2(instance, Class2.prototype);
                return instance;
              };
            }
            return _construct.apply(null, arguments);
          }
          function _isNativeFunction(fn) {
            return Function.toString.call(fn).indexOf("[native code]") !== -1;
          }
          function _wrapNativeSuper(Class) {
            var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
            _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
              if (Class2 === null || !_isNativeFunction(Class2))
                return Class2;
              if (typeof Class2 !== "function") {
                throw new TypeError("Super expression must either be null or a function");
              }
              if (typeof _cache !== "undefined") {
                if (_cache.has(Class2))
                  return _cache.get(Class2);
                _cache.set(Class2, Wrapper);
              }
              function Wrapper() {
                return _construct(Class2, arguments, _getPrototypeOf2(this).constructor);
              }
              Wrapper.prototype = Object.create(Class2.prototype, {
                constructor: {
                  value: Wrapper,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              });
              return _setPrototypeOf2(Wrapper, Class2);
            };
            return _wrapNativeSuper(Class);
          }
          function _assertThisInitialized2(self2) {
            if (self2 === void 0) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return self2;
          }
          function _possibleConstructorReturn2(self2, call) {
            if (call && (typeof call === "object" || typeof call === "function")) {
              return call;
            } else if (call !== void 0) {
              throw new TypeError("Derived constructors may only return object or undefined");
            }
            return _assertThisInitialized2(self2);
          }
          function _createSuper2(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct2();
            return function _createSuperInternal() {
              var Super = _getPrototypeOf2(Derived), result;
              if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf2(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
              } else {
                result = Super.apply(this, arguments);
              }
              return _possibleConstructorReturn2(this, result);
            };
          }
          function _slicedToArray11(arr, i) {
            return _arrayWithHoles11(arr) || _iterableToArrayLimit11(arr, i) || _unsupportedIterableToArray12(arr, i) || _nonIterableRest11();
          }
          function _arrayWithHoles11(arr) {
            if (Array.isArray(arr))
              return arr;
          }
          function _iterableToArrayLimit11(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null)
              return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s5, _e;
            try {
              for (_i = _i.call(arr); !(_n = (_s5 = _i.next()).done); _n = true) {
                _arr.push(_s5.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"] != null)
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          function _unsupportedIterableToArray12(o, minLen) {
            if (!o)
              return;
            if (typeof o === "string")
              return _arrayLikeToArray12(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor)
              n = o.constructor.name;
            if (n === "Map" || n === "Set")
              return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray12(o, minLen);
          }
          function _arrayLikeToArray12(arr, len) {
            if (len == null || len > arr.length)
              len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++)
              arr2[i] = arr[i];
            return arr2;
          }
          function _nonIterableRest11() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          function _createForOfIteratorHelper(o, allowArrayLike) {
            var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
            if (!it) {
              if (Array.isArray(o) || (it = _unsupportedIterableToArray12(o)) || allowArrayLike && o && typeof o.length === "number") {
                if (it)
                  o = it;
                var i = 0;
                var F = function() {
                };
                return {
                  s: F,
                  n: function() {
                    if (i >= o.length)
                      return {
                        done: true
                      };
                    return {
                      done: false,
                      value: o[i++]
                    };
                  },
                  e: function(e) {
                    throw e;
                  },
                  f: F
                };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var normalCompletion = true, didErr = false, err;
            return {
              s: function() {
                it = it.call(o);
              },
              n: function() {
                var step = it.next();
                normalCompletion = step.done;
                return step;
              },
              e: function(e) {
                didErr = true;
                err = e;
              },
              f: function() {
                try {
                  if (!normalCompletion && it.return != null)
                    it.return();
                } finally {
                  if (didErr)
                    throw err;
                }
              }
            };
          }
          function __awaiter2(thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P ? value : new P(function(resolve) {
                resolve(value);
              });
            }
            return new (P || (P = Promise))(function(resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator["throw"](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
              }
              step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
          }
          var MeiliSearchCommunicationError = /* @__PURE__ */ function(_Error) {
            _inherits2(MeiliSearchCommunicationError2, _Error);
            var _super = _createSuper2(MeiliSearchCommunicationError2);
            function MeiliSearchCommunicationError2(message, body, url, stack) {
              var _this;
              _classCallCheck3(this, MeiliSearchCommunicationError2);
              var _a, _b, _c9;
              _this = _super.call(this, message);
              Object.setPrototypeOf(_assertThisInitialized2(_this), MeiliSearchCommunicationError2.prototype);
              _this.name = "MeiliSearchCommunicationError";
              if (body instanceof Response) {
                _this.message = body.statusText;
                _this.statusCode = body.status;
              }
              if (body instanceof Error) {
                _this.errno = body.errno;
                _this.code = body.code;
              }
              if (stack) {
                _this.stack = stack;
                _this.stack = (_a = _this.stack) === null || _a === void 0 ? void 0 : _a.replace(/(TypeError|FetchError)/, _this.name);
                _this.stack = (_b = _this.stack) === null || _b === void 0 ? void 0 : _b.replace("Failed to fetch", "request to ".concat(url, " failed, reason: connect ECONNREFUSED"));
                _this.stack = (_c9 = _this.stack) === null || _c9 === void 0 ? void 0 : _c9.replace("Not Found", "Not Found: ".concat(url));
              } else {
                if (Error.captureStackTrace) {
                  Error.captureStackTrace(_assertThisInitialized2(_this), MeiliSearchCommunicationError2);
                }
              }
              return _this;
            }
            return _createClass3(MeiliSearchCommunicationError2);
          }(/* @__PURE__ */ _wrapNativeSuper(Error));
          var MeiliSearchApiError = /* @__PURE__ */ function(_Error) {
            _inherits2(MeiliSearchApiError2, _Error);
            var _super = _createSuper2(MeiliSearchApiError2);
            function MeiliSearchApiError2(error, status) {
              var _this;
              _classCallCheck3(this, MeiliSearchApiError2);
              _this = _super.call(this, error.message);
              Object.setPrototypeOf(_assertThisInitialized2(_this), MeiliSearchApiError2.prototype);
              _this.name = "MeiliSearchApiError";
              _this.code = error.code;
              _this.type = error.type;
              _this.link = error.link;
              _this.message = error.message;
              _this.httpStatus = status;
              if (Error.captureStackTrace) {
                Error.captureStackTrace(_assertThisInitialized2(_this), MeiliSearchApiError2);
              }
              return _this;
            }
            return _createClass3(MeiliSearchApiError2);
          }(/* @__PURE__ */ _wrapNativeSuper(Error));
          function httpResponseErrorHandler(response) {
            return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
              var responseBody;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (response.ok) {
                        _context.next = 11;
                        break;
                      }
                      _context.prev = 1;
                      _context.next = 4;
                      return response.json();
                    case 4:
                      responseBody = _context.sent;
                      _context.next = 10;
                      break;
                    case 7:
                      _context.prev = 7;
                      _context.t0 = _context["catch"](1);
                      throw new MeiliSearchCommunicationError(response.statusText, response, response.url);
                    case 10:
                      throw new MeiliSearchApiError(responseBody, response.status);
                    case 11:
                      return _context.abrupt("return", response);
                    case 12:
                    case "end":
                      return _context.stop();
                  }
              }, _callee, null, [[1, 7]]);
            }));
          }
          function httpErrorHandler(response, stack, url) {
            if (response.name !== "MeiliSearchApiError") {
              throw new MeiliSearchCommunicationError(response.message, response, url, stack);
            }
            throw response;
          }
          var MeiliSearchError = /* @__PURE__ */ function(_Error) {
            _inherits2(MeiliSearchError2, _Error);
            var _super = _createSuper2(MeiliSearchError2);
            function MeiliSearchError2(message) {
              var _this;
              _classCallCheck3(this, MeiliSearchError2);
              _this = _super.call(this, message);
              Object.setPrototypeOf(_assertThisInitialized2(_this), MeiliSearchError2.prototype);
              _this.name = "MeiliSearchError";
              if (Error.captureStackTrace) {
                Error.captureStackTrace(_assertThisInitialized2(_this), MeiliSearchError2);
              }
              return _this;
            }
            return _createClass3(MeiliSearchError2);
          }(/* @__PURE__ */ _wrapNativeSuper(Error));
          var MeiliSearchTimeOutError = /* @__PURE__ */ function(_Error) {
            _inherits2(MeiliSearchTimeOutError2, _Error);
            var _super = _createSuper2(MeiliSearchTimeOutError2);
            function MeiliSearchTimeOutError2(message) {
              var _this;
              _classCallCheck3(this, MeiliSearchTimeOutError2);
              _this = _super.call(this, message);
              Object.setPrototypeOf(_assertThisInitialized2(_this), MeiliSearchTimeOutError2.prototype);
              _this.name = "MeiliSearchTimeOutError";
              if (Error.captureStackTrace) {
                Error.captureStackTrace(_assertThisInitialized2(_this), MeiliSearchTimeOutError2);
              }
              return _this;
            }
            return _createClass3(MeiliSearchTimeOutError2);
          }(/* @__PURE__ */ _wrapNativeSuper(Error));
          function versionErrorHintMessage(message, method) {
            return "".concat(message, "\nHint: It might not be working because maybe you're not up to date with the Meilisearch version that ").concat(method, " call requires.");
          }
          function removeUndefinedFromObject(obj) {
            return Object.entries(obj).reduce(function(acc, curEntry) {
              var _curEntry = _slicedToArray11(curEntry, 2), key = _curEntry[0], val = _curEntry[1];
              if (val !== void 0)
                acc[key] = val;
              return acc;
            }, {});
          }
          function sleep(ms) {
            return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return new Promise(function(resolve) {
                        return setTimeout(resolve, ms);
                      });
                    case 2:
                      return _context.abrupt("return", _context.sent);
                    case 3:
                    case "end":
                      return _context.stop();
                  }
              }, _callee);
            }));
          }
          function addProtocolIfNotPresent(host) {
            if (!(host.startsWith("https://") || host.startsWith("http://"))) {
              return "http://".concat(host);
            }
            return host;
          }
          function addTrailingSlash(url) {
            if (!url.endsWith("/")) {
              url += "/";
            }
            return url;
          }
          var PACKAGE_VERSION2 = "0.35.0";
          function toQueryParams(parameters) {
            var params = Object.keys(parameters);
            var queryParams = params.reduce(function(acc, key) {
              var value = parameters[key];
              if (value === void 0) {
                return acc;
              } else if (Array.isArray(value)) {
                return Object.assign(Object.assign({}, acc), _defineProperty21({}, key, value.join(",")));
              } else if (value instanceof Date) {
                return Object.assign(Object.assign({}, acc), _defineProperty21({}, key, value.toISOString()));
              }
              return Object.assign(Object.assign({}, acc), _defineProperty21({}, key, value));
            }, {});
            return queryParams;
          }
          function constructHostURL(host) {
            try {
              host = addProtocolIfNotPresent(host);
              host = addTrailingSlash(host);
              return host;
            } catch (e) {
              throw new MeiliSearchError("The provided host is not valid.");
            }
          }
          function cloneAndParseHeaders(headers) {
            if (Array.isArray(headers)) {
              return headers.reduce(function(acc, headerPair) {
                acc[headerPair[0]] = headerPair[1];
                return acc;
              }, {});
            } else if ("has" in headers) {
              var clonedHeaders = {};
              headers.forEach(function(value, key) {
                return clonedHeaders[key] = value;
              });
              return clonedHeaders;
            } else {
              return Object.assign({}, headers);
            }
          }
          function createHeaders(config) {
            var _a, _b;
            var agentHeader = "X-Meilisearch-Client";
            var packageAgent = "Meilisearch JavaScript (v".concat(PACKAGE_VERSION2, ")");
            var contentType = "Content-Type";
            var authorization = "Authorization";
            var headers = cloneAndParseHeaders((_b = (_a = config.requestConfig) === null || _a === void 0 ? void 0 : _a.headers) !== null && _b !== void 0 ? _b : {});
            if (config.apiKey && !headers[authorization]) {
              headers[authorization] = "Bearer ".concat(config.apiKey);
            }
            if (!headers[contentType]) {
              headers["Content-Type"] = "application/json";
            }
            if (config.clientAgents && Array.isArray(config.clientAgents)) {
              var clients = config.clientAgents.concat(packageAgent);
              headers[agentHeader] = clients.join(" ; ");
            } else if (config.clientAgents && !Array.isArray(config.clientAgents)) {
              throw new MeiliSearchError('Meilisearch: The header "'.concat(agentHeader, '" should be an array of string(s).\n'));
            } else {
              headers[agentHeader] = packageAgent;
            }
            return headers;
          }
          var HttpRequests = /* @__PURE__ */ function() {
            function HttpRequests2(config) {
              _classCallCheck3(this, HttpRequests2);
              this.headers = createHeaders(config);
              this.requestConfig = config.requestConfig;
              this.httpClient = config.httpClient;
              try {
                var host = constructHostURL(config.host);
                this.url = new URL(host);
              } catch (e) {
                throw new MeiliSearchError("The provided host is not valid.");
              }
            }
            _createClass3(HttpRequests2, [{
              key: "request",
              value: function request(_ref) {
                var method = _ref.method, url = _ref.url, params = _ref.params, body = _ref.body, _ref$config = _ref.config, config = _ref$config === void 0 ? {} : _ref$config;
                var _a;
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
                  var constructURL, queryParams, headers, fetchFn, result, response, parsedBody, stack;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1)
                      switch (_context.prev = _context.next) {
                        case 0:
                          constructURL = new URL(url, this.url);
                          if (params) {
                            queryParams = new URLSearchParams();
                            Object.keys(params).filter(function(x) {
                              return params[x] !== null;
                            }).map(function(x) {
                              return queryParams.set(x, params[x]);
                            });
                            constructURL.search = queryParams.toString();
                          }
                          if (!((_a = config.headers) === null || _a === void 0 ? void 0 : _a["Content-Type"])) {
                            body = JSON.stringify(body);
                          }
                          headers = Object.assign(Object.assign({}, this.headers), config.headers);
                          _context.prev = 5;
                          fetchFn = this.httpClient ? this.httpClient : fetch;
                          result = fetchFn(constructURL.toString(), Object.assign(Object.assign(Object.assign({}, config), this.requestConfig), {
                            method,
                            body,
                            headers
                          }));
                          if (!this.httpClient) {
                            _context.next = 12;
                            break;
                          }
                          _context.next = 11;
                          return result;
                        case 11:
                          return _context.abrupt("return", _context.sent);
                        case 12:
                          _context.next = 14;
                          return result.then(function(res) {
                            return httpResponseErrorHandler(res);
                          });
                        case 14:
                          response = _context.sent;
                          _context.next = 17;
                          return response.json().catch(function() {
                            return void 0;
                          });
                        case 17:
                          parsedBody = _context.sent;
                          return _context.abrupt("return", parsedBody);
                        case 21:
                          _context.prev = 21;
                          _context.t0 = _context["catch"](5);
                          stack = _context.t0.stack;
                          httpErrorHandler(_context.t0, stack, constructURL.toString());
                        case 25:
                        case "end":
                          return _context.stop();
                      }
                  }, _callee, this, [[5, 21]]);
                }));
              }
            }, {
              key: "get",
              value: function get(url, params, config) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee2() {
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1)
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return this.request({
                            method: "GET",
                            url,
                            params,
                            config
                          });
                        case 2:
                          return _context2.abrupt("return", _context2.sent);
                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                  }, _callee2, this);
                }));
              }
            }, {
              key: "post",
              value: function post(url, data, params, config) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee3() {
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1)
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return this.request({
                            method: "POST",
                            url,
                            body: data,
                            params,
                            config
                          });
                        case 2:
                          return _context3.abrupt("return", _context3.sent);
                        case 3:
                        case "end":
                          return _context3.stop();
                      }
                  }, _callee3, this);
                }));
              }
            }, {
              key: "put",
              value: function put(url, data, params, config) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee4() {
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1)
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return this.request({
                            method: "PUT",
                            url,
                            body: data,
                            params,
                            config
                          });
                        case 2:
                          return _context4.abrupt("return", _context4.sent);
                        case 3:
                        case "end":
                          return _context4.stop();
                      }
                  }, _callee4, this);
                }));
              }
            }, {
              key: "patch",
              value: function patch(url, data, params, config) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee5() {
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1)
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return this.request({
                            method: "PATCH",
                            url,
                            body: data,
                            params,
                            config
                          });
                        case 2:
                          return _context5.abrupt("return", _context5.sent);
                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                  }, _callee5, this);
                }));
              }
            }, {
              key: "delete",
              value: function _delete(url, data, params, config) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee6() {
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1)
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return this.request({
                            method: "DELETE",
                            url,
                            body: data,
                            params,
                            config
                          });
                        case 2:
                          return _context6.abrupt("return", _context6.sent);
                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                  }, _callee6, this);
                }));
              }
            }]);
            return HttpRequests2;
          }();
          var EnqueuedTask = /* @__PURE__ */ _createClass3(function EnqueuedTask2(task) {
            _classCallCheck3(this, EnqueuedTask2);
            this.taskUid = task.taskUid;
            this.indexUid = task.indexUid;
            this.status = task.status;
            this.type = task.type;
            this.enqueuedAt = new Date(task.enqueuedAt);
          });
          var Task = /* @__PURE__ */ _createClass3(function Task2(task) {
            _classCallCheck3(this, Task2);
            this.indexUid = task.indexUid;
            this.status = task.status;
            this.type = task.type;
            this.uid = task.uid;
            this.details = task.details;
            this.canceledBy = task.canceledBy;
            this.error = task.error;
            this.duration = task.duration;
            this.startedAt = new Date(task.startedAt);
            this.enqueuedAt = new Date(task.enqueuedAt);
            this.finishedAt = new Date(task.finishedAt);
          });
          var TaskClient = /* @__PURE__ */ function() {
            function TaskClient2(config) {
              _classCallCheck3(this, TaskClient2);
              this.httpRequest = new HttpRequests(config);
            }
            _createClass3(TaskClient2, [{
              key: "getTask",
              value: function getTask(uid) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
                  var url, taskItem;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1)
                      switch (_context.prev = _context.next) {
                        case 0:
                          url = "tasks/".concat(uid);
                          _context.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          taskItem = _context.sent;
                          return _context.abrupt("return", new Task(taskItem));
                        case 5:
                        case "end":
                          return _context.stop();
                      }
                  }, _callee, this);
                }));
              }
              /**
               * Get tasks
               *
               * @param parameters - Parameters to browse the tasks
               * @returns Promise containing all tasks
               */
            }, {
              key: "getTasks",
              value: function getTasks() {
                var parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee2() {
                  var url, tasks;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1)
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          url = "tasks";
                          _context2.next = 3;
                          return this.httpRequest.get(url, toQueryParams(parameters));
                        case 3:
                          tasks = _context2.sent;
                          return _context2.abrupt("return", Object.assign(Object.assign({}, tasks), {
                            results: tasks.results.map(function(task) {
                              return new Task(task);
                            })
                          }));
                        case 5:
                        case "end":
                          return _context2.stop();
                      }
                  }, _callee2, this);
                }));
              }
              /**
               * Wait for a task to be processed.
               *
               * @param taskUid - Task identifier
               * @param options - Additional configuration options
               * @returns Promise returning a task after it has been processed
               */
            }, {
              key: "waitForTask",
              value: function waitForTask(taskUid) {
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$timeOutMs = _ref.timeOutMs, timeOutMs = _ref$timeOutMs === void 0 ? 5e3 : _ref$timeOutMs, _ref$intervalMs = _ref.intervalMs, intervalMs = _ref$intervalMs === void 0 ? 50 : _ref$intervalMs;
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee3() {
                  var startingTime, response;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1)
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          startingTime = Date.now();
                        case 1:
                          if (!(Date.now() - startingTime < timeOutMs)) {
                            _context3.next = 11;
                            break;
                          }
                          _context3.next = 4;
                          return this.getTask(taskUid);
                        case 4:
                          response = _context3.sent;
                          if ([
                            "enqueued",
                            "processing"
                            /* TaskStatus.TASK_PROCESSING */
                          ].includes(response.status)) {
                            _context3.next = 7;
                            break;
                          }
                          return _context3.abrupt("return", response);
                        case 7:
                          _context3.next = 9;
                          return sleep(intervalMs);
                        case 9:
                          _context3.next = 1;
                          break;
                        case 11:
                          throw new MeiliSearchTimeOutError("timeout of ".concat(timeOutMs, "ms has exceeded on process ").concat(taskUid, " when waiting a task to be resolved."));
                        case 12:
                        case "end":
                          return _context3.stop();
                      }
                  }, _callee3, this);
                }));
              }
              /**
               * Waits for multiple tasks to be processed
               *
               * @param taskUids - Tasks identifier list
               * @param options - Wait options
               * @returns Promise returning a list of tasks after they have been processed
               */
            }, {
              key: "waitForTasks",
              value: function waitForTasks(taskUids) {
                var _ref22 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$timeOutMs = _ref22.timeOutMs, timeOutMs = _ref2$timeOutMs === void 0 ? 5e3 : _ref2$timeOutMs, _ref2$intervalMs = _ref22.intervalMs, intervalMs = _ref2$intervalMs === void 0 ? 50 : _ref2$intervalMs;
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee4() {
                  var tasks, _iterator, _step, taskUid, task;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1)
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          tasks = [];
                          _iterator = _createForOfIteratorHelper(taskUids);
                          _context4.prev = 2;
                          _iterator.s();
                        case 4:
                          if ((_step = _iterator.n()).done) {
                            _context4.next = 12;
                            break;
                          }
                          taskUid = _step.value;
                          _context4.next = 8;
                          return this.waitForTask(taskUid, {
                            timeOutMs,
                            intervalMs
                          });
                        case 8:
                          task = _context4.sent;
                          tasks.push(task);
                        case 10:
                          _context4.next = 4;
                          break;
                        case 12:
                          _context4.next = 17;
                          break;
                        case 14:
                          _context4.prev = 14;
                          _context4.t0 = _context4["catch"](2);
                          _iterator.e(_context4.t0);
                        case 17:
                          _context4.prev = 17;
                          _iterator.f();
                          return _context4.finish(17);
                        case 20:
                          return _context4.abrupt("return", tasks);
                        case 21:
                        case "end":
                          return _context4.stop();
                      }
                  }, _callee4, this, [[2, 14, 17, 20]]);
                }));
              }
              /**
               * Cancel a list of enqueued or processing tasks.
               *
               * @param parameters - Parameters to filter the tasks.
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "cancelTasks",
              value: function cancelTasks() {
                var parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee5() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1)
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          url = "tasks/cancel";
                          _context5.next = 3;
                          return this.httpRequest.post(url, {}, toQueryParams(parameters));
                        case 3:
                          task = _context5.sent;
                          return _context5.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context5.stop();
                      }
                  }, _callee5, this);
                }));
              }
              /**
               * Delete a list tasks.
               *
               * @param parameters - Parameters to filter the tasks.
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "deleteTasks",
              value: function deleteTasks() {
                var parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee6() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1)
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          url = "tasks";
                          _context6.next = 3;
                          return this.httpRequest.delete(url, {}, toQueryParams(parameters));
                        case 3:
                          task = _context6.sent;
                          return _context6.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context6.stop();
                      }
                  }, _callee6, this);
                }));
              }
            }]);
            return TaskClient2;
          }();
          var Index2 = /* @__PURE__ */ function() {
            function Index3(config, uid, primaryKey) {
              _classCallCheck3(this, Index3);
              this.uid = uid;
              this.primaryKey = primaryKey;
              this.httpRequest = new HttpRequests(config);
              this.tasks = new TaskClient(config);
            }
            _createClass3(Index3, [{
              key: "search",
              value: function search(query, options, config) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1)
                      switch (_context.prev = _context.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/search");
                          _context.next = 3;
                          return this.httpRequest.post(url, removeUndefinedFromObject(Object.assign({
                            q: query
                          }, options)), void 0, config);
                        case 3:
                          return _context.abrupt("return", _context.sent);
                        case 4:
                        case "end":
                          return _context.stop();
                      }
                  }, _callee, this);
                }));
              }
              /**
               * Search for documents into an index using the GET method
               *
               * @param query - Query string
               * @param options - Search options
               * @param config - Additional request configuration options
               * @returns Promise containing the search response
               */
            }, {
              key: "searchGet",
              value: function searchGet(query, options, config) {
                var _a, _b, _c9, _d, _e, _f, _g;
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee2() {
                  var url, parseFilter, getParams;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1)
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/search");
                          parseFilter = function parseFilter2(filter) {
                            if (typeof filter === "string")
                              return filter;
                            else if (Array.isArray(filter))
                              throw new MeiliSearchError("The filter query parameter should be in string format when using searchGet");
                            else
                              return void 0;
                          };
                          getParams = Object.assign(Object.assign({
                            q: query
                          }, options), {
                            filter: parseFilter(options === null || options === void 0 ? void 0 : options.filter),
                            sort: (_a = options === null || options === void 0 ? void 0 : options.sort) === null || _a === void 0 ? void 0 : _a.join(","),
                            facets: (_b = options === null || options === void 0 ? void 0 : options.facets) === null || _b === void 0 ? void 0 : _b.join(","),
                            attributesToRetrieve: (_c9 = options === null || options === void 0 ? void 0 : options.attributesToRetrieve) === null || _c9 === void 0 ? void 0 : _c9.join(","),
                            attributesToCrop: (_d = options === null || options === void 0 ? void 0 : options.attributesToCrop) === null || _d === void 0 ? void 0 : _d.join(","),
                            attributesToHighlight: (_e = options === null || options === void 0 ? void 0 : options.attributesToHighlight) === null || _e === void 0 ? void 0 : _e.join(","),
                            vector: (_f = options === null || options === void 0 ? void 0 : options.vector) === null || _f === void 0 ? void 0 : _f.join(","),
                            attributesToSearchOn: (_g = options === null || options === void 0 ? void 0 : options.attributesToSearchOn) === null || _g === void 0 ? void 0 : _g.join(",")
                          });
                          _context2.next = 5;
                          return this.httpRequest.get(url, removeUndefinedFromObject(getParams), config);
                        case 5:
                          return _context2.abrupt("return", _context2.sent);
                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                  }, _callee2, this);
                }));
              }
              /**
               * Search for facet values
               *
               * @param params - Parameters used to search on the facets
               * @param config - Additional request configuration options
               * @returns Promise containing the search response
               */
            }, {
              key: "searchForFacetValues",
              value: function searchForFacetValues(params, config) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee3() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1)
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/facet-search");
                          _context3.next = 3;
                          return this.httpRequest.post(url, removeUndefinedFromObject(params), void 0, config);
                        case 3:
                          return _context3.abrupt("return", _context3.sent);
                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                  }, _callee3, this);
                }));
              }
              ///
              /// INDEX
              ///
              /**
               * Get index information.
               *
               * @returns Promise containing index information
               */
            }, {
              key: "getRawInfo",
              value: function getRawInfo() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee4() {
                  var url, res;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1)
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          url = "indexes/".concat(this.uid);
                          _context4.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          res = _context4.sent;
                          this.primaryKey = res.primaryKey;
                          this.updatedAt = new Date(res.updatedAt);
                          this.createdAt = new Date(res.createdAt);
                          return _context4.abrupt("return", res);
                        case 8:
                        case "end":
                          return _context4.stop();
                      }
                  }, _callee4, this);
                }));
              }
              /**
               * Fetch and update Index information.
               *
               * @returns Promise to the current Index object with updated information
               */
            }, {
              key: "fetchInfo",
              value: function fetchInfo() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee5() {
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1)
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return this.getRawInfo();
                        case 2:
                          return _context5.abrupt("return", this);
                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                  }, _callee5, this);
                }));
              }
              /**
               * Get Primary Key.
               *
               * @returns Promise containing the Primary Key of the index
               */
            }, {
              key: "fetchPrimaryKey",
              value: function fetchPrimaryKey() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee6() {
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1)
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return this.getRawInfo();
                        case 2:
                          this.primaryKey = _context6.sent.primaryKey;
                          return _context6.abrupt("return", this.primaryKey);
                        case 4:
                        case "end":
                          return _context6.stop();
                      }
                  }, _callee6, this);
                }));
              }
              /**
               * Create an index.
               *
               * @param uid - Unique identifier of the Index
               * @param options - Index options
               * @param config - Request configuration options
               * @returns Newly created Index object
               */
            }, {
              key: "update",
              value: (
                /**
                 * Update an index.
                 *
                 * @param data - Data to update
                 * @returns Promise to the current Index object with updated information
                 */
                function update(data) {
                  return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee7() {
                    var url, task;
                    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                      while (1)
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            url = "indexes/".concat(this.uid);
                            _context7.next = 3;
                            return this.httpRequest.patch(url, data);
                          case 3:
                            task = _context7.sent;
                            task.enqueuedAt = new Date(task.enqueuedAt);
                            return _context7.abrupt("return", task);
                          case 6:
                          case "end":
                            return _context7.stop();
                        }
                    }, _callee7, this);
                  }));
                }
              )
              /**
               * Delete an index.
               *
               * @returns Promise which resolves when index is deleted successfully
               */
            }, {
              key: "delete",
              value: function _delete() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee8() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                    while (1)
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          url = "indexes/".concat(this.uid);
                          _context8.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context8.sent;
                          return _context8.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context8.stop();
                      }
                  }, _callee8, this);
                }));
              }
              ///
              /// TASKS
              ///
              /**
               * Get the list of all the tasks of the index.
               *
               * @param parameters - Parameters to browse the tasks
               * @returns Promise containing all tasks
               */
            }, {
              key: "getTasks",
              value: function getTasks() {
                var parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee9() {
                  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                    while (1)
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return this.tasks.getTasks(Object.assign(Object.assign({}, parameters), {
                            indexUids: [this.uid]
                          }));
                        case 2:
                          return _context9.abrupt("return", _context9.sent);
                        case 3:
                        case "end":
                          return _context9.stop();
                      }
                  }, _callee9, this);
                }));
              }
              /**
               * Get one task of the index.
               *
               * @param taskUid - Task identifier
               * @returns Promise containing a task
               */
            }, {
              key: "getTask",
              value: function getTask(taskUid) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee10() {
                  return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                    while (1)
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.next = 2;
                          return this.tasks.getTask(taskUid);
                        case 2:
                          return _context10.abrupt("return", _context10.sent);
                        case 3:
                        case "end":
                          return _context10.stop();
                      }
                  }, _callee10, this);
                }));
              }
              /**
               * Wait for multiple tasks to be processed.
               *
               * @param taskUids - Tasks identifier
               * @param waitOptions - Options on timeout and interval
               * @returns Promise containing an array of tasks
               */
            }, {
              key: "waitForTasks",
              value: function waitForTasks(taskUids) {
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$timeOutMs = _ref.timeOutMs, timeOutMs = _ref$timeOutMs === void 0 ? 5e3 : _ref$timeOutMs, _ref$intervalMs = _ref.intervalMs, intervalMs = _ref$intervalMs === void 0 ? 50 : _ref$intervalMs;
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee11() {
                  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                    while (1)
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _context11.next = 2;
                          return this.tasks.waitForTasks(taskUids, {
                            timeOutMs,
                            intervalMs
                          });
                        case 2:
                          return _context11.abrupt("return", _context11.sent);
                        case 3:
                        case "end":
                          return _context11.stop();
                      }
                  }, _callee11, this);
                }));
              }
              /**
               * Wait for a task to be processed.
               *
               * @param taskUid - Task identifier
               * @param waitOptions - Options on timeout and interval
               * @returns Promise containing an array of tasks
               */
            }, {
              key: "waitForTask",
              value: function waitForTask(taskUid) {
                var _ref22 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$timeOutMs = _ref22.timeOutMs, timeOutMs = _ref2$timeOutMs === void 0 ? 5e3 : _ref2$timeOutMs, _ref2$intervalMs = _ref22.intervalMs, intervalMs = _ref2$intervalMs === void 0 ? 50 : _ref2$intervalMs;
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee12() {
                  return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                    while (1)
                      switch (_context12.prev = _context12.next) {
                        case 0:
                          _context12.next = 2;
                          return this.tasks.waitForTask(taskUid, {
                            timeOutMs,
                            intervalMs
                          });
                        case 2:
                          return _context12.abrupt("return", _context12.sent);
                        case 3:
                        case "end":
                          return _context12.stop();
                      }
                  }, _callee12, this);
                }));
              }
              ///
              /// STATS
              ///
              /**
               * Get stats of an index
               *
               * @returns Promise containing object with stats of the index
               */
            }, {
              key: "getStats",
              value: function getStats() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee13() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                    while (1)
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/stats");
                          _context13.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context13.abrupt("return", _context13.sent);
                        case 4:
                        case "end":
                          return _context13.stop();
                      }
                  }, _callee13, this);
                }));
              }
              ///
              /// DOCUMENTS
              ///
              /**
               * Get documents of an index.
               *
               * @param parameters - Parameters to browse the documents. Parameters can
               *   contain the `filter` field only available in Meilisearch v1.2 and newer
               * @returns Promise containing the returned documents
               */
            }, {
              key: "getDocuments",
              value: function getDocuments() {
                var parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _a;
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee14() {
                  var url, _url, fields;
                  return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                    while (1)
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          parameters = removeUndefinedFromObject(parameters);
                          if (!(parameters.filter !== void 0)) {
                            _context14.next = 15;
                            break;
                          }
                          _context14.prev = 2;
                          url = "indexes/".concat(this.uid, "/documents/fetch");
                          _context14.next = 6;
                          return this.httpRequest.post(url, parameters);
                        case 6:
                          return _context14.abrupt("return", _context14.sent);
                        case 9:
                          _context14.prev = 9;
                          _context14.t0 = _context14["catch"](2);
                          if (_context14.t0 instanceof MeiliSearchCommunicationError) {
                            _context14.t0.message = versionErrorHintMessage(_context14.t0.message, "getDocuments");
                          } else if (_context14.t0 instanceof MeiliSearchApiError) {
                            _context14.t0.message = versionErrorHintMessage(_context14.t0.message, "getDocuments");
                          }
                          throw _context14.t0;
                        case 13:
                          _context14.next = 20;
                          break;
                        case 15:
                          _url = "indexes/".concat(this.uid, "/documents");
                          fields = Array.isArray(parameters === null || parameters === void 0 ? void 0 : parameters.fields) ? {
                            fields: (_a = parameters === null || parameters === void 0 ? void 0 : parameters.fields) === null || _a === void 0 ? void 0 : _a.join(",")
                          } : {};
                          _context14.next = 19;
                          return this.httpRequest.get(_url, Object.assign(Object.assign({}, parameters), fields));
                        case 19:
                          return _context14.abrupt("return", _context14.sent);
                        case 20:
                        case "end":
                          return _context14.stop();
                      }
                  }, _callee14, this, [[2, 9]]);
                }));
              }
              /**
               * Get one document
               *
               * @param documentId - Document ID
               * @param parameters - Parameters applied on a document
               * @returns Promise containing Document response
               */
            }, {
              key: "getDocument",
              value: function getDocument(documentId, parameters) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee15() {
                  var url, fields;
                  return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                    while (1)
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/documents/").concat(documentId);
                          fields = function() {
                            var _a;
                            if (Array.isArray(parameters === null || parameters === void 0 ? void 0 : parameters.fields)) {
                              return (_a = parameters === null || parameters === void 0 ? void 0 : parameters.fields) === null || _a === void 0 ? void 0 : _a.join(",");
                            }
                            return void 0;
                          }();
                          _context15.next = 4;
                          return this.httpRequest.get(url, removeUndefinedFromObject(Object.assign(Object.assign({}, parameters), {
                            fields
                          })));
                        case 4:
                          return _context15.abrupt("return", _context15.sent);
                        case 5:
                        case "end":
                          return _context15.stop();
                      }
                  }, _callee15, this);
                }));
              }
              /**
               * Add or replace multiples documents to an index
               *
               * @param documents - Array of Document objects to add/replace
               * @param options - Options on document addition
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "addDocuments",
              value: function addDocuments(documents, options) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee16() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                    while (1)
                      switch (_context16.prev = _context16.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/documents");
                          _context16.next = 3;
                          return this.httpRequest.post(url, documents, options);
                        case 3:
                          task = _context16.sent;
                          return _context16.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context16.stop();
                      }
                  }, _callee16, this);
                }));
              }
              /**
               * Add or replace multiples documents in a string format to an index. It only
               * supports csv, ndjson and json formats.
               *
               * @param documents - Documents provided in a string to add/replace
               * @param contentType - Content type of your document:
               *   'text/csv'|'application/x-ndjson'|'application/json'
               * @param options - Options on document addition
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "addDocumentsFromString",
              value: function addDocumentsFromString(documents, contentType, queryParams) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee17() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                    while (1)
                      switch (_context17.prev = _context17.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/documents");
                          _context17.next = 3;
                          return this.httpRequest.post(url, documents, queryParams, {
                            headers: {
                              "Content-Type": contentType
                            }
                          });
                        case 3:
                          task = _context17.sent;
                          return _context17.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context17.stop();
                      }
                  }, _callee17, this);
                }));
              }
              /**
               * Add or replace multiples documents to an index in batches
               *
               * @param documents - Array of Document objects to add/replace
               * @param batchSize - Size of the batch
               * @param options - Options on document addition
               * @returns Promise containing array of enqueued task objects for each batch
               */
            }, {
              key: "addDocumentsInBatches",
              value: function addDocumentsInBatches(documents) {
                var batchSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
                var options = arguments.length > 2 ? arguments[2] : void 0;
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee18() {
                  var updates, i;
                  return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                    while (1)
                      switch (_context18.prev = _context18.next) {
                        case 0:
                          updates = [];
                          i = 0;
                        case 2:
                          if (!(i < documents.length)) {
                            _context18.next = 11;
                            break;
                          }
                          _context18.t0 = updates;
                          _context18.next = 6;
                          return this.addDocuments(documents.slice(i, i + batchSize), options);
                        case 6:
                          _context18.t1 = _context18.sent;
                          _context18.t0.push.call(_context18.t0, _context18.t1);
                        case 8:
                          i += batchSize;
                          _context18.next = 2;
                          break;
                        case 11:
                          return _context18.abrupt("return", updates);
                        case 12:
                        case "end":
                          return _context18.stop();
                      }
                  }, _callee18, this);
                }));
              }
              /**
               * Add or update multiples documents to an index
               *
               * @param documents - Array of Document objects to add/update
               * @param options - Options on document update
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "updateDocuments",
              value: function updateDocuments(documents, options) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee19() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                    while (1)
                      switch (_context19.prev = _context19.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/documents");
                          _context19.next = 3;
                          return this.httpRequest.put(url, documents, options);
                        case 3:
                          task = _context19.sent;
                          return _context19.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context19.stop();
                      }
                  }, _callee19, this);
                }));
              }
              /**
               * Add or update multiples documents to an index in batches
               *
               * @param documents - Array of Document objects to add/update
               * @param batchSize - Size of the batch
               * @param options - Options on document update
               * @returns Promise containing array of enqueued task objects for each batch
               */
            }, {
              key: "updateDocumentsInBatches",
              value: function updateDocumentsInBatches(documents) {
                var batchSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
                var options = arguments.length > 2 ? arguments[2] : void 0;
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee20() {
                  var updates, i;
                  return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                    while (1)
                      switch (_context20.prev = _context20.next) {
                        case 0:
                          updates = [];
                          i = 0;
                        case 2:
                          if (!(i < documents.length)) {
                            _context20.next = 11;
                            break;
                          }
                          _context20.t0 = updates;
                          _context20.next = 6;
                          return this.updateDocuments(documents.slice(i, i + batchSize), options);
                        case 6:
                          _context20.t1 = _context20.sent;
                          _context20.t0.push.call(_context20.t0, _context20.t1);
                        case 8:
                          i += batchSize;
                          _context20.next = 2;
                          break;
                        case 11:
                          return _context20.abrupt("return", updates);
                        case 12:
                        case "end":
                          return _context20.stop();
                      }
                  }, _callee20, this);
                }));
              }
              /**
               * Add or update multiples documents in a string format to an index. It only
               * supports csv, ndjson and json formats.
               *
               * @param documents - Documents provided in a string to add/update
               * @param contentType - Content type of your document:
               *   'text/csv'|'application/x-ndjson'|'application/json'
               * @param queryParams - Options on raw document addition
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "updateDocumentsFromString",
              value: function updateDocumentsFromString(documents, contentType, queryParams) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee21() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                    while (1)
                      switch (_context21.prev = _context21.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/documents");
                          _context21.next = 3;
                          return this.httpRequest.put(url, documents, queryParams, {
                            headers: {
                              "Content-Type": contentType
                            }
                          });
                        case 3:
                          task = _context21.sent;
                          return _context21.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context21.stop();
                      }
                  }, _callee21, this);
                }));
              }
              /**
               * Delete one document
               *
               * @param documentId - Id of Document to delete
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "deleteDocument",
              value: function deleteDocument(documentId) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee22() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                    while (1)
                      switch (_context22.prev = _context22.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/documents/").concat(documentId);
                          _context22.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context22.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context22.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context22.stop();
                      }
                  }, _callee22, this);
                }));
              }
              /**
               * Delete multiples documents of an index.
               *
               * @param params - Params value can be:
               *
               *   - DocumentsDeletionQuery: An object containing the parameters to customize
               *       your document deletion. Only available in Meilisearch v1.2 and newer
               *   - DocumentsIds: An array of document ids to delete
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "deleteDocuments",
              value: function deleteDocuments(params) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee23() {
                  var isDocumentsDeletionQuery, endpoint, url, task;
                  return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                    while (1)
                      switch (_context23.prev = _context23.next) {
                        case 0:
                          isDocumentsDeletionQuery = !Array.isArray(params) && _typeof25(params) === "object";
                          endpoint = isDocumentsDeletionQuery ? "documents/delete" : "documents/delete-batch";
                          url = "indexes/".concat(this.uid, "/").concat(endpoint);
                          _context23.prev = 3;
                          _context23.next = 6;
                          return this.httpRequest.post(url, params);
                        case 6:
                          task = _context23.sent;
                          return _context23.abrupt("return", new EnqueuedTask(task));
                        case 10:
                          _context23.prev = 10;
                          _context23.t0 = _context23["catch"](3);
                          if (_context23.t0 instanceof MeiliSearchCommunicationError && isDocumentsDeletionQuery) {
                            _context23.t0.message = versionErrorHintMessage(_context23.t0.message, "deleteDocuments");
                          } else if (_context23.t0 instanceof MeiliSearchApiError) {
                            _context23.t0.message = versionErrorHintMessage(_context23.t0.message, "deleteDocuments");
                          }
                          throw _context23.t0;
                        case 14:
                        case "end":
                          return _context23.stop();
                      }
                  }, _callee23, this, [[3, 10]]);
                }));
              }
              /**
               * Delete all documents of an index
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "deleteAllDocuments",
              value: function deleteAllDocuments() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee24() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                    while (1)
                      switch (_context24.prev = _context24.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/documents");
                          _context24.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context24.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context24.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context24.stop();
                      }
                  }, _callee24, this);
                }));
              }
              ///
              /// SETTINGS
              ///
              /**
               * Retrieve all settings
               *
               * @returns Promise containing Settings object
               */
            }, {
              key: "getSettings",
              value: function getSettings() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee25() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                    while (1)
                      switch (_context25.prev = _context25.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings");
                          _context25.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context25.abrupt("return", _context25.sent);
                        case 4:
                        case "end":
                          return _context25.stop();
                      }
                  }, _callee25, this);
                }));
              }
              /**
               * Update all settings Any parameters not provided will be left unchanged.
               *
               * @param settings - Object containing parameters with their updated values
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "updateSettings",
              value: function updateSettings(settings) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee26() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                    while (1)
                      switch (_context26.prev = _context26.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings");
                          _context26.next = 3;
                          return this.httpRequest.patch(url, settings);
                        case 3:
                          task = _context26.sent;
                          task.enqueued = new Date(task.enqueuedAt);
                          return _context26.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context26.stop();
                      }
                  }, _callee26, this);
                }));
              }
              /**
               * Reset settings.
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetSettings",
              value: function resetSettings() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee27() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                    while (1)
                      switch (_context27.prev = _context27.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings");
                          _context27.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context27.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context27.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context27.stop();
                      }
                  }, _callee27, this);
                }));
              }
              ///
              /// PAGINATION SETTINGS
              ///
              /**
               * Get the pagination settings.
               *
               * @returns Promise containing object of pagination settings
               */
            }, {
              key: "getPagination",
              value: function getPagination() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee28() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                    while (1)
                      switch (_context28.prev = _context28.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/pagination");
                          _context28.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context28.abrupt("return", _context28.sent);
                        case 4:
                        case "end":
                          return _context28.stop();
                      }
                  }, _callee28, this);
                }));
              }
              /**
               * Update the pagination settings.
               *
               * @param pagination - Pagination object
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "updatePagination",
              value: function updatePagination(pagination) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee29() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee29$(_context29) {
                    while (1)
                      switch (_context29.prev = _context29.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/pagination");
                          _context29.next = 3;
                          return this.httpRequest.patch(url, pagination);
                        case 3:
                          task = _context29.sent;
                          return _context29.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context29.stop();
                      }
                  }, _callee29, this);
                }));
              }
              /**
               * Reset the pagination settings.
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetPagination",
              value: function resetPagination() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee30() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                    while (1)
                      switch (_context30.prev = _context30.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/pagination");
                          _context30.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context30.sent;
                          return _context30.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context30.stop();
                      }
                  }, _callee30, this);
                }));
              }
              ///
              /// SYNONYMS
              ///
              /**
               * Get the list of all synonyms
               *
               * @returns Promise containing object of synonym mappings
               */
            }, {
              key: "getSynonyms",
              value: function getSynonyms() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee31() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee31$(_context31) {
                    while (1)
                      switch (_context31.prev = _context31.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/synonyms");
                          _context31.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context31.abrupt("return", _context31.sent);
                        case 4:
                        case "end":
                          return _context31.stop();
                      }
                  }, _callee31, this);
                }));
              }
              /**
               * Update the list of synonyms. Overwrite the old list.
               *
               * @param synonyms - Mapping of synonyms with their associated words
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "updateSynonyms",
              value: function updateSynonyms(synonyms) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee32() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee32$(_context32) {
                    while (1)
                      switch (_context32.prev = _context32.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/synonyms");
                          _context32.next = 3;
                          return this.httpRequest.put(url, synonyms);
                        case 3:
                          task = _context32.sent;
                          return _context32.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context32.stop();
                      }
                  }, _callee32, this);
                }));
              }
              /**
               * Reset the synonym list to be empty again
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetSynonyms",
              value: function resetSynonyms() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee33() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee33$(_context33) {
                    while (1)
                      switch (_context33.prev = _context33.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/synonyms");
                          _context33.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context33.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context33.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context33.stop();
                      }
                  }, _callee33, this);
                }));
              }
              ///
              /// STOP WORDS
              ///
              /**
               * Get the list of all stop-words
               *
               * @returns Promise containing array of stop-words
               */
            }, {
              key: "getStopWords",
              value: function getStopWords() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee34() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee34$(_context34) {
                    while (1)
                      switch (_context34.prev = _context34.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/stop-words");
                          _context34.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context34.abrupt("return", _context34.sent);
                        case 4:
                        case "end":
                          return _context34.stop();
                      }
                  }, _callee34, this);
                }));
              }
              /**
               * Update the list of stop-words. Overwrite the old list.
               *
               * @param stopWords - Array of strings that contains the stop-words.
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "updateStopWords",
              value: function updateStopWords(stopWords) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee35() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee35$(_context35) {
                    while (1)
                      switch (_context35.prev = _context35.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/stop-words");
                          _context35.next = 3;
                          return this.httpRequest.put(url, stopWords);
                        case 3:
                          task = _context35.sent;
                          return _context35.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context35.stop();
                      }
                  }, _callee35, this);
                }));
              }
              /**
               * Reset the stop-words list to be empty again
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetStopWords",
              value: function resetStopWords() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee36() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee36$(_context36) {
                    while (1)
                      switch (_context36.prev = _context36.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/stop-words");
                          _context36.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context36.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context36.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context36.stop();
                      }
                  }, _callee36, this);
                }));
              }
              ///
              /// RANKING RULES
              ///
              /**
               * Get the list of all ranking-rules
               *
               * @returns Promise containing array of ranking-rules
               */
            }, {
              key: "getRankingRules",
              value: function getRankingRules() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee37() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee37$(_context37) {
                    while (1)
                      switch (_context37.prev = _context37.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/ranking-rules");
                          _context37.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context37.abrupt("return", _context37.sent);
                        case 4:
                        case "end":
                          return _context37.stop();
                      }
                  }, _callee37, this);
                }));
              }
              /**
               * Update the list of ranking-rules. Overwrite the old list.
               *
               * @param rankingRules - Array that contain ranking rules sorted by order of
               *   importance.
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "updateRankingRules",
              value: function updateRankingRules(rankingRules) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee38() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee38$(_context38) {
                    while (1)
                      switch (_context38.prev = _context38.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/ranking-rules");
                          _context38.next = 3;
                          return this.httpRequest.put(url, rankingRules);
                        case 3:
                          task = _context38.sent;
                          return _context38.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context38.stop();
                      }
                  }, _callee38, this);
                }));
              }
              /**
               * Reset the ranking rules list to its default value
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetRankingRules",
              value: function resetRankingRules() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee39() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee39$(_context39) {
                    while (1)
                      switch (_context39.prev = _context39.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/ranking-rules");
                          _context39.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context39.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context39.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context39.stop();
                      }
                  }, _callee39, this);
                }));
              }
              ///
              /// DISTINCT ATTRIBUTE
              ///
              /**
               * Get the distinct-attribute
               *
               * @returns Promise containing the distinct-attribute of the index
               */
            }, {
              key: "getDistinctAttribute",
              value: function getDistinctAttribute() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee40() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee40$(_context40) {
                    while (1)
                      switch (_context40.prev = _context40.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/distinct-attribute");
                          _context40.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context40.abrupt("return", _context40.sent);
                        case 4:
                        case "end":
                          return _context40.stop();
                      }
                  }, _callee40, this);
                }));
              }
              /**
               * Update the distinct-attribute.
               *
               * @param distinctAttribute - Field name of the distinct-attribute
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "updateDistinctAttribute",
              value: function updateDistinctAttribute(distinctAttribute) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee41() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee41$(_context41) {
                    while (1)
                      switch (_context41.prev = _context41.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/distinct-attribute");
                          _context41.next = 3;
                          return this.httpRequest.put(url, distinctAttribute);
                        case 3:
                          task = _context41.sent;
                          return _context41.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context41.stop();
                      }
                  }, _callee41, this);
                }));
              }
              /**
               * Reset the distinct-attribute.
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetDistinctAttribute",
              value: function resetDistinctAttribute() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee42() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee42$(_context42) {
                    while (1)
                      switch (_context42.prev = _context42.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/distinct-attribute");
                          _context42.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context42.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context42.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context42.stop();
                      }
                  }, _callee42, this);
                }));
              }
              ///
              /// FILTERABLE ATTRIBUTES
              ///
              /**
               * Get the filterable-attributes
               *
               * @returns Promise containing an array of filterable-attributes
               */
            }, {
              key: "getFilterableAttributes",
              value: function getFilterableAttributes() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee43() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee43$(_context43) {
                    while (1)
                      switch (_context43.prev = _context43.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/filterable-attributes");
                          _context43.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context43.abrupt("return", _context43.sent);
                        case 4:
                        case "end":
                          return _context43.stop();
                      }
                  }, _callee43, this);
                }));
              }
              /**
               * Update the filterable-attributes.
               *
               * @param filterableAttributes - Array of strings containing the attributes
               *   that can be used as filters at query time
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "updateFilterableAttributes",
              value: function updateFilterableAttributes(filterableAttributes) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee44() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee44$(_context44) {
                    while (1)
                      switch (_context44.prev = _context44.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/filterable-attributes");
                          _context44.next = 3;
                          return this.httpRequest.put(url, filterableAttributes);
                        case 3:
                          task = _context44.sent;
                          return _context44.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context44.stop();
                      }
                  }, _callee44, this);
                }));
              }
              /**
               * Reset the filterable-attributes.
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetFilterableAttributes",
              value: function resetFilterableAttributes() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee45() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee45$(_context45) {
                    while (1)
                      switch (_context45.prev = _context45.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/filterable-attributes");
                          _context45.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context45.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context45.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context45.stop();
                      }
                  }, _callee45, this);
                }));
              }
              ///
              /// SORTABLE ATTRIBUTES
              ///
              /**
               * Get the sortable-attributes
               *
               * @returns Promise containing array of sortable-attributes
               */
            }, {
              key: "getSortableAttributes",
              value: function getSortableAttributes() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee46() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee46$(_context46) {
                    while (1)
                      switch (_context46.prev = _context46.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/sortable-attributes");
                          _context46.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context46.abrupt("return", _context46.sent);
                        case 4:
                        case "end":
                          return _context46.stop();
                      }
                  }, _callee46, this);
                }));
              }
              /**
               * Update the sortable-attributes.
               *
               * @param sortableAttributes - Array of strings containing the attributes that
               *   can be used to sort search results at query time
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "updateSortableAttributes",
              value: function updateSortableAttributes(sortableAttributes) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee47() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee47$(_context47) {
                    while (1)
                      switch (_context47.prev = _context47.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/sortable-attributes");
                          _context47.next = 3;
                          return this.httpRequest.put(url, sortableAttributes);
                        case 3:
                          task = _context47.sent;
                          return _context47.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context47.stop();
                      }
                  }, _callee47, this);
                }));
              }
              /**
               * Reset the sortable-attributes.
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetSortableAttributes",
              value: function resetSortableAttributes() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee48() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee48$(_context48) {
                    while (1)
                      switch (_context48.prev = _context48.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/sortable-attributes");
                          _context48.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context48.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context48.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context48.stop();
                      }
                  }, _callee48, this);
                }));
              }
              ///
              /// SEARCHABLE ATTRIBUTE
              ///
              /**
               * Get the searchable-attributes
               *
               * @returns Promise containing array of searchable-attributes
               */
            }, {
              key: "getSearchableAttributes",
              value: function getSearchableAttributes() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee49() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee49$(_context49) {
                    while (1)
                      switch (_context49.prev = _context49.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/searchable-attributes");
                          _context49.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context49.abrupt("return", _context49.sent);
                        case 4:
                        case "end":
                          return _context49.stop();
                      }
                  }, _callee49, this);
                }));
              }
              /**
               * Update the searchable-attributes.
               *
               * @param searchableAttributes - Array of strings that contains searchable
               *   attributes sorted by order of importance(most to least important)
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "updateSearchableAttributes",
              value: function updateSearchableAttributes(searchableAttributes) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee50() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee50$(_context50) {
                    while (1)
                      switch (_context50.prev = _context50.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/searchable-attributes");
                          _context50.next = 3;
                          return this.httpRequest.put(url, searchableAttributes);
                        case 3:
                          task = _context50.sent;
                          return _context50.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context50.stop();
                      }
                  }, _callee50, this);
                }));
              }
              /**
               * Reset the searchable-attributes.
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetSearchableAttributes",
              value: function resetSearchableAttributes() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee51() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee51$(_context51) {
                    while (1)
                      switch (_context51.prev = _context51.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/searchable-attributes");
                          _context51.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context51.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context51.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context51.stop();
                      }
                  }, _callee51, this);
                }));
              }
              ///
              /// DISPLAYED ATTRIBUTE
              ///
              /**
               * Get the displayed-attributes
               *
               * @returns Promise containing array of displayed-attributes
               */
            }, {
              key: "getDisplayedAttributes",
              value: function getDisplayedAttributes() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee52() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee52$(_context52) {
                    while (1)
                      switch (_context52.prev = _context52.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/displayed-attributes");
                          _context52.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context52.abrupt("return", _context52.sent);
                        case 4:
                        case "end":
                          return _context52.stop();
                      }
                  }, _callee52, this);
                }));
              }
              /**
               * Update the displayed-attributes.
               *
               * @param displayedAttributes - Array of strings that contains attributes of
               *   an index to display
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "updateDisplayedAttributes",
              value: function updateDisplayedAttributes(displayedAttributes) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee53() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee53$(_context53) {
                    while (1)
                      switch (_context53.prev = _context53.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/displayed-attributes");
                          _context53.next = 3;
                          return this.httpRequest.put(url, displayedAttributes);
                        case 3:
                          task = _context53.sent;
                          return _context53.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context53.stop();
                      }
                  }, _callee53, this);
                }));
              }
              /**
               * Reset the displayed-attributes.
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetDisplayedAttributes",
              value: function resetDisplayedAttributes() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee54() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee54$(_context54) {
                    while (1)
                      switch (_context54.prev = _context54.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/displayed-attributes");
                          _context54.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context54.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context54.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context54.stop();
                      }
                  }, _callee54, this);
                }));
              }
              ///
              /// TYPO TOLERANCE
              ///
              /**
               * Get the typo tolerance settings.
               *
               * @returns Promise containing the typo tolerance settings.
               */
            }, {
              key: "getTypoTolerance",
              value: function getTypoTolerance() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee55() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee55$(_context55) {
                    while (1)
                      switch (_context55.prev = _context55.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/typo-tolerance");
                          _context55.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context55.abrupt("return", _context55.sent);
                        case 4:
                        case "end":
                          return _context55.stop();
                      }
                  }, _callee55, this);
                }));
              }
              /**
               * Update the typo tolerance settings.
               *
               * @param typoTolerance - Object containing the custom typo tolerance
               *   settings.
               * @returns Promise containing object of the enqueued update
               */
            }, {
              key: "updateTypoTolerance",
              value: function updateTypoTolerance(typoTolerance) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee56() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee56$(_context56) {
                    while (1)
                      switch (_context56.prev = _context56.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/typo-tolerance");
                          _context56.next = 3;
                          return this.httpRequest.patch(url, typoTolerance);
                        case 3:
                          task = _context56.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context56.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context56.stop();
                      }
                  }, _callee56, this);
                }));
              }
              /**
               * Reset the typo tolerance settings.
               *
               * @returns Promise containing object of the enqueued update
               */
            }, {
              key: "resetTypoTolerance",
              value: function resetTypoTolerance() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee57() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee57$(_context57) {
                    while (1)
                      switch (_context57.prev = _context57.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/typo-tolerance");
                          _context57.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context57.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context57.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context57.stop();
                      }
                  }, _callee57, this);
                }));
              }
              ///
              /// FACETING
              ///
              /**
               * Get the faceting settings.
               *
               * @returns Promise containing object of faceting index settings
               */
            }, {
              key: "getFaceting",
              value: function getFaceting() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee58() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee58$(_context58) {
                    while (1)
                      switch (_context58.prev = _context58.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/faceting");
                          _context58.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context58.abrupt("return", _context58.sent);
                        case 4:
                        case "end":
                          return _context58.stop();
                      }
                  }, _callee58, this);
                }));
              }
              /**
               * Update the faceting settings.
               *
               * @param faceting - Faceting index settings object
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "updateFaceting",
              value: function updateFaceting(faceting) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee59() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee59$(_context59) {
                    while (1)
                      switch (_context59.prev = _context59.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/faceting");
                          _context59.next = 3;
                          return this.httpRequest.patch(url, faceting);
                        case 3:
                          task = _context59.sent;
                          return _context59.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context59.stop();
                      }
                  }, _callee59, this);
                }));
              }
              /**
               * Reset the faceting settings.
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetFaceting",
              value: function resetFaceting() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee60() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee60$(_context60) {
                    while (1)
                      switch (_context60.prev = _context60.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/faceting");
                          _context60.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context60.sent;
                          return _context60.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context60.stop();
                      }
                  }, _callee60, this);
                }));
              }
              ///
              /// SEPARATOR TOKENS
              ///
              /**
               * Get the list of all separator tokens.
               *
               * @returns Promise containing array of separator tokens
               */
            }, {
              key: "getSeparatorTokens",
              value: function getSeparatorTokens() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee61() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee61$(_context61) {
                    while (1)
                      switch (_context61.prev = _context61.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/separator-tokens");
                          _context61.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context61.abrupt("return", _context61.sent);
                        case 4:
                        case "end":
                          return _context61.stop();
                      }
                  }, _callee61, this);
                }));
              }
              /**
               * Update the list of separator tokens. Overwrite the old list.
               *
               * @param separatorTokens - Array that contains separator tokens.
               * @returns Promise containing an EnqueuedTask or null
               */
            }, {
              key: "updateSeparatorTokens",
              value: function updateSeparatorTokens(separatorTokens) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee62() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee62$(_context62) {
                    while (1)
                      switch (_context62.prev = _context62.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/separator-tokens");
                          _context62.next = 3;
                          return this.httpRequest.put(url, separatorTokens);
                        case 3:
                          task = _context62.sent;
                          return _context62.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context62.stop();
                      }
                  }, _callee62, this);
                }));
              }
              /**
               * Reset the separator tokens list to its default value
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetSeparatorTokens",
              value: function resetSeparatorTokens() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee63() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee63$(_context63) {
                    while (1)
                      switch (_context63.prev = _context63.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/separator-tokens");
                          _context63.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context63.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context63.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context63.stop();
                      }
                  }, _callee63, this);
                }));
              }
              ///
              /// NON-SEPARATOR TOKENS
              ///
              /**
               * Get the list of all non-separator tokens.
               *
               * @returns Promise containing array of non-separator tokens
               */
            }, {
              key: "getNonSeparatorTokens",
              value: function getNonSeparatorTokens() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee64() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee64$(_context64) {
                    while (1)
                      switch (_context64.prev = _context64.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/non-separator-tokens");
                          _context64.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context64.abrupt("return", _context64.sent);
                        case 4:
                        case "end":
                          return _context64.stop();
                      }
                  }, _callee64, this);
                }));
              }
              /**
               * Update the list of non-separator tokens. Overwrite the old list.
               *
               * @param nonSeparatorTokens - Array that contains non-separator tokens.
               * @returns Promise containing an EnqueuedTask or null
               */
            }, {
              key: "updateNonSeparatorTokens",
              value: function updateNonSeparatorTokens(nonSeparatorTokens) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee65() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee65$(_context65) {
                    while (1)
                      switch (_context65.prev = _context65.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/non-separator-tokens");
                          _context65.next = 3;
                          return this.httpRequest.put(url, nonSeparatorTokens);
                        case 3:
                          task = _context65.sent;
                          return _context65.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context65.stop();
                      }
                  }, _callee65, this);
                }));
              }
              /**
               * Reset the non-separator tokens list to its default value
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetNonSeparatorTokens",
              value: function resetNonSeparatorTokens() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee66() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee66$(_context66) {
                    while (1)
                      switch (_context66.prev = _context66.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/non-separator-tokens");
                          _context66.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context66.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context66.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context66.stop();
                      }
                  }, _callee66, this);
                }));
              }
              ///
              /// DICTIONARY
              ///
              /**
               * Get the dictionary settings of a Meilisearch index.
               *
               * @returns Promise containing the dictionary settings
               */
            }, {
              key: "getDictionary",
              value: function getDictionary() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee67() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee67$(_context67) {
                    while (1)
                      switch (_context67.prev = _context67.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/dictionary");
                          _context67.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context67.abrupt("return", _context67.sent);
                        case 4:
                        case "end":
                          return _context67.stop();
                      }
                  }, _callee67, this);
                }));
              }
              /**
               * Update the the dictionary settings. Overwrite the old settings.
               *
               * @param dictionary - Array that contains the new dictionary settings.
               * @returns Promise containing an EnqueuedTask or null
               */
            }, {
              key: "updateDictionary",
              value: function updateDictionary(dictionary) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee68() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee68$(_context68) {
                    while (1)
                      switch (_context68.prev = _context68.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/dictionary");
                          _context68.next = 3;
                          return this.httpRequest.put(url, dictionary);
                        case 3:
                          task = _context68.sent;
                          return _context68.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context68.stop();
                      }
                  }, _callee68, this);
                }));
              }
              /**
               * Reset the dictionary settings to its default value
               *
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "resetDictionary",
              value: function resetDictionary() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee69() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee69$(_context69) {
                    while (1)
                      switch (_context69.prev = _context69.next) {
                        case 0:
                          url = "indexes/".concat(this.uid, "/settings/dictionary");
                          _context69.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          task = _context69.sent;
                          task.enqueuedAt = new Date(task.enqueuedAt);
                          return _context69.abrupt("return", task);
                        case 6:
                        case "end":
                          return _context69.stop();
                      }
                  }, _callee69, this);
                }));
              }
            }], [{
              key: "create",
              value: function create(uid) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var config = arguments.length > 2 ? arguments[2] : void 0;
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee70() {
                  var url, req, task;
                  return _regeneratorRuntime().wrap(function _callee70$(_context70) {
                    while (1)
                      switch (_context70.prev = _context70.next) {
                        case 0:
                          url = "indexes";
                          req = new HttpRequests(config);
                          _context70.next = 4;
                          return req.post(url, Object.assign(Object.assign({}, options), {
                            uid
                          }));
                        case 4:
                          task = _context70.sent;
                          return _context70.abrupt("return", new EnqueuedTask(task));
                        case 6:
                        case "end":
                          return _context70.stop();
                      }
                  }, _callee70);
                }));
              }
            }]);
            return Index3;
          }();
          var Client = /* @__PURE__ */ function() {
            function Client2(config) {
              _classCallCheck3(this, Client2);
              this.config = config;
              this.httpRequest = new HttpRequests(config);
              this.tasks = new TaskClient(config);
            }
            _createClass3(Client2, [{
              key: "index",
              value: function index3(indexUid) {
                return new Index2(this.config, indexUid);
              }
              /**
               * Gather information about an index by calling MeiliSearch and return an
               * Index instance with the gathered information
               *
               * @param indexUid - The index UID
               * @returns Promise returning Index instance
               */
            }, {
              key: "getIndex",
              value: function getIndex(indexUid) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1)
                      switch (_context.prev = _context.next) {
                        case 0:
                          return _context.abrupt("return", new Index2(this.config, indexUid).fetchInfo());
                        case 1:
                        case "end":
                          return _context.stop();
                      }
                  }, _callee, this);
                }));
              }
              /**
               * Gather information about an index by calling MeiliSearch and return the raw
               * JSON response
               *
               * @param indexUid - The index UID
               * @returns Promise returning index information
               */
            }, {
              key: "getRawIndex",
              value: function getRawIndex(indexUid) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee2() {
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1)
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          return _context2.abrupt("return", new Index2(this.config, indexUid).getRawInfo());
                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                  }, _callee2, this);
                }));
              }
              /**
               * Get all the indexes as Index instances.
               *
               * @param parameters - Parameters to browse the indexes
               * @returns Promise returning array of raw index information
               */
            }, {
              key: "getIndexes",
              value: function getIndexes() {
                var parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee3() {
                  var _this = this;
                  var rawIndexes, indexes;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1)
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return this.getRawIndexes(parameters);
                        case 2:
                          rawIndexes = _context3.sent;
                          indexes = rawIndexes.results.map(function(index3) {
                            return new Index2(_this.config, index3.uid, index3.primaryKey);
                          });
                          return _context3.abrupt("return", Object.assign(Object.assign({}, rawIndexes), {
                            results: indexes
                          }));
                        case 5:
                        case "end":
                          return _context3.stop();
                      }
                  }, _callee3, this);
                }));
              }
              /**
               * Get all the indexes in their raw value (no Index instances).
               *
               * @param parameters - Parameters to browse the indexes
               * @returns Promise returning array of raw index information
               */
            }, {
              key: "getRawIndexes",
              value: function getRawIndexes() {
                var parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee4() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1)
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          url = "indexes";
                          _context4.next = 3;
                          return this.httpRequest.get(url, parameters);
                        case 3:
                          return _context4.abrupt("return", _context4.sent);
                        case 4:
                        case "end":
                          return _context4.stop();
                      }
                  }, _callee4, this);
                }));
              }
              /**
               * Create a new index
               *
               * @param uid - The index UID
               * @param options - Index options
               * @returns Promise returning Index instance
               */
            }, {
              key: "createIndex",
              value: function createIndex(uid) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee5() {
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1)
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return Index2.create(uid, options, this.config);
                        case 2:
                          return _context5.abrupt("return", _context5.sent);
                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                  }, _callee5, this);
                }));
              }
              /**
               * Update an index
               *
               * @param uid - The index UID
               * @param options - Index options to update
               * @returns Promise returning Index instance after updating
               */
            }, {
              key: "updateIndex",
              value: function updateIndex(uid) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee6() {
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1)
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return new Index2(this.config, uid).update(options);
                        case 2:
                          return _context6.abrupt("return", _context6.sent);
                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                  }, _callee6, this);
                }));
              }
              /**
               * Delete an index
               *
               * @param uid - The index UID
               * @returns Promise which resolves when index is deleted successfully
               */
            }, {
              key: "deleteIndex",
              value: function deleteIndex(uid) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee7() {
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1)
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return new Index2(this.config, uid).delete();
                        case 2:
                          return _context7.abrupt("return", _context7.sent);
                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                  }, _callee7, this);
                }));
              }
              /**
               * Deletes an index if it already exists.
               *
               * @param uid - The index UID
               * @returns Promise which resolves to true when index exists and is deleted
               *   successfully, otherwise false if it does not exist
               */
            }, {
              key: "deleteIndexIfExists",
              value: function deleteIndexIfExists(uid) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee8() {
                  return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                    while (1)
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.prev = 0;
                          _context8.next = 3;
                          return this.deleteIndex(uid);
                        case 3:
                          return _context8.abrupt("return", true);
                        case 6:
                          _context8.prev = 6;
                          _context8.t0 = _context8["catch"](0);
                          if (!(_context8.t0.code === "index_not_found")) {
                            _context8.next = 10;
                            break;
                          }
                          return _context8.abrupt("return", false);
                        case 10:
                          throw _context8.t0;
                        case 11:
                        case "end":
                          return _context8.stop();
                      }
                  }, _callee8, this, [[0, 6]]);
                }));
              }
              /**
               * Swaps a list of index tuples.
               *
               * @param params - List of indexes tuples to swap.
               * @returns Promise returning object of the enqueued task
               */
            }, {
              key: "swapIndexes",
              value: function swapIndexes(params) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee9() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                    while (1)
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          url = "/swap-indexes";
                          _context9.next = 3;
                          return this.httpRequest.post(url, params);
                        case 3:
                          return _context9.abrupt("return", _context9.sent);
                        case 4:
                        case "end":
                          return _context9.stop();
                      }
                  }, _callee9, this);
                }));
              }
              ///
              /// Multi Search
              ///
              /**
               * Perform multiple search queries.
               *
               * It is possible to make multiple search queries on the same index or on
               * different ones
               *
               * @example
               *
               * ```ts
               * client.multiSearch({
               *   queries: [
               *     { indexUid: 'movies', q: 'wonder' },
               *     { indexUid: 'books', q: 'flower' },
               *   ],
               * })
               * ```
               *
               * @param queries - Search queries
               * @param config - Additional request configuration options
               * @returns Promise containing the search responses
               */
            }, {
              key: "multiSearch",
              value: function multiSearch(queries, config) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee10() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                    while (1)
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          url = "multi-search";
                          _context10.next = 3;
                          return this.httpRequest.post(url, queries, void 0, config);
                        case 3:
                          return _context10.abrupt("return", _context10.sent);
                        case 4:
                        case "end":
                          return _context10.stop();
                      }
                  }, _callee10, this);
                }));
              }
              ///
              /// TASKS
              ///
              /**
               * Get the list of all client tasks
               *
               * @param parameters - Parameters to browse the tasks
               * @returns Promise returning all tasks
               */
            }, {
              key: "getTasks",
              value: function getTasks() {
                var parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee11() {
                  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                    while (1)
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _context11.next = 2;
                          return this.tasks.getTasks(parameters);
                        case 2:
                          return _context11.abrupt("return", _context11.sent);
                        case 3:
                        case "end":
                          return _context11.stop();
                      }
                  }, _callee11, this);
                }));
              }
              /**
               * Get one task on the client scope
               *
               * @param taskUid - Task identifier
               * @returns Promise returning a task
               */
            }, {
              key: "getTask",
              value: function getTask(taskUid) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee12() {
                  return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                    while (1)
                      switch (_context12.prev = _context12.next) {
                        case 0:
                          _context12.next = 2;
                          return this.tasks.getTask(taskUid);
                        case 2:
                          return _context12.abrupt("return", _context12.sent);
                        case 3:
                        case "end":
                          return _context12.stop();
                      }
                  }, _callee12, this);
                }));
              }
              /**
               * Wait for multiple tasks to be finished.
               *
               * @param taskUids - Tasks identifier
               * @param waitOptions - Options on timeout and interval
               * @returns Promise returning an array of tasks
               */
            }, {
              key: "waitForTasks",
              value: function waitForTasks(taskUids) {
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$timeOutMs = _ref.timeOutMs, timeOutMs = _ref$timeOutMs === void 0 ? 5e3 : _ref$timeOutMs, _ref$intervalMs = _ref.intervalMs, intervalMs = _ref$intervalMs === void 0 ? 50 : _ref$intervalMs;
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee13() {
                  return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                    while (1)
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          _context13.next = 2;
                          return this.tasks.waitForTasks(taskUids, {
                            timeOutMs,
                            intervalMs
                          });
                        case 2:
                          return _context13.abrupt("return", _context13.sent);
                        case 3:
                        case "end":
                          return _context13.stop();
                      }
                  }, _callee13, this);
                }));
              }
              /**
               * Wait for a task to be finished.
               *
               * @param taskUid - Task identifier
               * @param waitOptions - Options on timeout and interval
               * @returns Promise returning an array of tasks
               */
            }, {
              key: "waitForTask",
              value: function waitForTask(taskUid) {
                var _ref22 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$timeOutMs = _ref22.timeOutMs, timeOutMs = _ref2$timeOutMs === void 0 ? 5e3 : _ref2$timeOutMs, _ref2$intervalMs = _ref22.intervalMs, intervalMs = _ref2$intervalMs === void 0 ? 50 : _ref2$intervalMs;
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee14() {
                  return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                    while (1)
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          _context14.next = 2;
                          return this.tasks.waitForTask(taskUid, {
                            timeOutMs,
                            intervalMs
                          });
                        case 2:
                          return _context14.abrupt("return", _context14.sent);
                        case 3:
                        case "end":
                          return _context14.stop();
                      }
                  }, _callee14, this);
                }));
              }
              /**
               * Cancel a list of enqueued or processing tasks.
               *
               * @param parameters - Parameters to filter the tasks.
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "cancelTasks",
              value: function cancelTasks(parameters) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee15() {
                  return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                    while (1)
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          _context15.next = 2;
                          return this.tasks.cancelTasks(parameters);
                        case 2:
                          return _context15.abrupt("return", _context15.sent);
                        case 3:
                        case "end":
                          return _context15.stop();
                      }
                  }, _callee15, this);
                }));
              }
              /**
               * Delete a list of tasks.
               *
               * @param parameters - Parameters to filter the tasks.
               * @returns Promise containing an EnqueuedTask
               */
            }, {
              key: "deleteTasks",
              value: function deleteTasks() {
                var parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee16() {
                  return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                    while (1)
                      switch (_context16.prev = _context16.next) {
                        case 0:
                          _context16.next = 2;
                          return this.tasks.deleteTasks(parameters);
                        case 2:
                          return _context16.abrupt("return", _context16.sent);
                        case 3:
                        case "end":
                          return _context16.stop();
                      }
                  }, _callee16, this);
                }));
              }
              ///
              /// KEYS
              ///
              /**
               * Get all API keys
               *
               * @param parameters - Parameters to browse the indexes
               * @returns Promise returning an object with keys
               */
            }, {
              key: "getKeys",
              value: function getKeys() {
                var parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee17() {
                  var url, keys2;
                  return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                    while (1)
                      switch (_context17.prev = _context17.next) {
                        case 0:
                          url = "keys";
                          _context17.next = 3;
                          return this.httpRequest.get(url, parameters);
                        case 3:
                          keys2 = _context17.sent;
                          keys2.results = keys2.results.map(function(key) {
                            return Object.assign(Object.assign({}, key), {
                              createdAt: new Date(key.createdAt),
                              updatedAt: new Date(key.updatedAt)
                            });
                          });
                          return _context17.abrupt("return", keys2);
                        case 6:
                        case "end":
                          return _context17.stop();
                      }
                  }, _callee17, this);
                }));
              }
              /**
               * Get one API key
               *
               * @param keyOrUid - Key or uid of the API key
               * @returns Promise returning a key
               */
            }, {
              key: "getKey",
              value: function getKey(keyOrUid) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee18() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                    while (1)
                      switch (_context18.prev = _context18.next) {
                        case 0:
                          url = "keys/".concat(keyOrUid);
                          _context18.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context18.abrupt("return", _context18.sent);
                        case 4:
                        case "end":
                          return _context18.stop();
                      }
                  }, _callee18, this);
                }));
              }
              /**
               * Create one API key
               *
               * @param options - Key options
               * @returns Promise returning a key
               */
            }, {
              key: "createKey",
              value: function createKey(options) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee19() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                    while (1)
                      switch (_context19.prev = _context19.next) {
                        case 0:
                          url = "keys";
                          _context19.next = 3;
                          return this.httpRequest.post(url, options);
                        case 3:
                          return _context19.abrupt("return", _context19.sent);
                        case 4:
                        case "end":
                          return _context19.stop();
                      }
                  }, _callee19, this);
                }));
              }
              /**
               * Update one API key
               *
               * @param keyOrUid - Key
               * @param options - Key options
               * @returns Promise returning a key
               */
            }, {
              key: "updateKey",
              value: function updateKey(keyOrUid, options) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee20() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                    while (1)
                      switch (_context20.prev = _context20.next) {
                        case 0:
                          url = "keys/".concat(keyOrUid);
                          _context20.next = 3;
                          return this.httpRequest.patch(url, options);
                        case 3:
                          return _context20.abrupt("return", _context20.sent);
                        case 4:
                        case "end":
                          return _context20.stop();
                      }
                  }, _callee20, this);
                }));
              }
              /**
               * Delete one API key
               *
               * @param keyOrUid - Key
               * @returns
               */
            }, {
              key: "deleteKey",
              value: function deleteKey(keyOrUid) {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee21() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                    while (1)
                      switch (_context21.prev = _context21.next) {
                        case 0:
                          url = "keys/".concat(keyOrUid);
                          _context21.next = 3;
                          return this.httpRequest.delete(url);
                        case 3:
                          return _context21.abrupt("return", _context21.sent);
                        case 4:
                        case "end":
                          return _context21.stop();
                      }
                  }, _callee21, this);
                }));
              }
              ///
              /// HEALTH
              ///
              /**
               * Checks if the server is healthy, otherwise an error will be thrown.
               *
               * @returns Promise returning an object with health details
               */
            }, {
              key: "health",
              value: function health() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee22() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                    while (1)
                      switch (_context22.prev = _context22.next) {
                        case 0:
                          url = "health";
                          _context22.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context22.abrupt("return", _context22.sent);
                        case 4:
                        case "end":
                          return _context22.stop();
                      }
                  }, _callee22, this);
                }));
              }
              /**
               * Checks if the server is healthy, return true or false.
               *
               * @returns Promise returning a boolean
               */
            }, {
              key: "isHealthy",
              value: function isHealthy() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee23() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                    while (1)
                      switch (_context23.prev = _context23.next) {
                        case 0:
                          _context23.prev = 0;
                          url = "health";
                          _context23.next = 4;
                          return this.httpRequest.get(url);
                        case 4:
                          return _context23.abrupt("return", true);
                        case 7:
                          _context23.prev = 7;
                          _context23.t0 = _context23["catch"](0);
                          return _context23.abrupt("return", false);
                        case 10:
                        case "end":
                          return _context23.stop();
                      }
                  }, _callee23, this, [[0, 7]]);
                }));
              }
              ///
              /// STATS
              ///
              /**
               * Get the stats of all the database
               *
               * @returns Promise returning object of all the stats
               */
            }, {
              key: "getStats",
              value: function getStats() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee24() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                    while (1)
                      switch (_context24.prev = _context24.next) {
                        case 0:
                          url = "stats";
                          _context24.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context24.abrupt("return", _context24.sent);
                        case 4:
                        case "end":
                          return _context24.stop();
                      }
                  }, _callee24, this);
                }));
              }
              ///
              /// VERSION
              ///
              /**
               * Get the version of MeiliSearch
               *
               * @returns Promise returning object with version details
               */
            }, {
              key: "getVersion",
              value: function getVersion() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee25() {
                  var url;
                  return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                    while (1)
                      switch (_context25.prev = _context25.next) {
                        case 0:
                          url = "version";
                          _context25.next = 3;
                          return this.httpRequest.get(url);
                        case 3:
                          return _context25.abrupt("return", _context25.sent);
                        case 4:
                        case "end":
                          return _context25.stop();
                      }
                  }, _callee25, this);
                }));
              }
              ///
              /// DUMPS
              ///
              /**
               * Creates a dump
               *
               * @returns Promise returning object of the enqueued task
               */
            }, {
              key: "createDump",
              value: function createDump() {
                return __awaiter2(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee26() {
                  var url, task;
                  return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                    while (1)
                      switch (_context26.prev = _context26.next) {
                        case 0:
                          url = "dumps";
                          _context26.next = 3;
                          return this.httpRequest.post(url);
                        case 3:
                          task = _context26.sent;
                          return _context26.abrupt("return", new EnqueuedTask(task));
                        case 5:
                        case "end":
                          return _context26.stop();
                      }
                  }, _callee26, this);
                }));
              }
              ///
              /// TOKENS
              ///
              /**
               * Generate a tenant token
               *
               * @param apiKeyUid - The uid of the api key used as issuer of the token.
               * @param searchRules - Search rules that are applied to every search.
               * @param options - Token options to customize some aspect of the token.
               * @returns The token in JWT format.
               */
            }, {
              key: "generateTenantToken",
              value: function generateTenantToken(_apiKeyUid, _searchRules, _options) {
                var error = new Error();
                throw new Error("Meilisearch: failed to generate a tenant token. Generation of a token only works in a node environment \n ".concat(error.stack, "."));
              }
            }]);
            return Client2;
          }();
          var MeiliSearch = /* @__PURE__ */ function(_Client) {
            _inherits2(MeiliSearch2, _Client);
            var _super = _createSuper2(MeiliSearch2);
            function MeiliSearch2(config) {
              _classCallCheck3(this, MeiliSearch2);
              return _super.call(this, config);
            }
            return _createClass3(MeiliSearch2);
          }(Client);
          exports4.ContentTypeEnum = ContentTypeEnum;
          exports4.Index = Index2;
          exports4.MatchingStrategies = MatchingStrategies;
          exports4.MeiliSearch = MeiliSearch;
          exports4.MeiliSearchApiError = MeiliSearchApiError;
          exports4.MeiliSearchCommunicationError = MeiliSearchCommunicationError;
          exports4.MeiliSearchError = MeiliSearchError;
          exports4.MeiliSearchTimeOutError = MeiliSearchTimeOutError;
          exports4["default"] = MeiliSearch;
          exports4.httpErrorHandler = httpErrorHandler;
          exports4.httpResponseErrorHandler = httpResponseErrorHandler;
          exports4.versionErrorHintMessage = versionErrorHintMessage;
          Object.defineProperty(exports4, "__esModule", {
            value: true
          });
        });
      });
      function isPureObject(data) {
        return typeof data === "object" && !Array.isArray(data) && data !== null;
      }
      function getInstantMeilisearchConfig(options) {
        var defaultOptions = {
          placeholderSearch: true,
          keepZeroFacets: false,
          clientAgents: [],
          finitePagination: false
        };
        return __assign(__assign({}, defaultOptions), options);
      }
      function getApiKey(apiKey) {
        if (typeof apiKey === "function") {
          var apiKeyFnValue = apiKey();
          if (typeof apiKeyFnValue !== "string") {
            throw new TypeError("Provided apiKey function (2nd parameter) did not return a string, expected string");
          }
          return apiKeyFnValue;
        }
        return apiKey;
      }
      function validateInstantMeiliSearchParams(hostUrl, apiKey, instantMeiliSearchOptions) {
        var requestConfig = instantMeiliSearchOptions.requestConfig, httpClient = instantMeiliSearchOptions.httpClient;
        if (typeof hostUrl !== "string") {
          throw new TypeError("Provided hostUrl value (1st parameter) is not a string, expected string");
        }
        if (typeof apiKey !== "string" && typeof apiKey !== "function") {
          throw new TypeError("Provided apiKey value (2nd parameter) is not a string or a function, expected string or function");
        }
        if (requestConfig !== void 0 && !isPureObject(requestConfig)) {
          throw new TypeError("Provided requestConfig should be an object");
        }
        if (httpClient && typeof httpClient !== "function") {
          throw new TypeError("Provided custom httpClient should be a function");
        }
      }
      function SearchResolver(client, cache) {
        return {
          multiSearch: function(searchQueries, instantSearchPagination) {
            return __awaiter(this, void 0, void 0, function() {
              var key, cachedResponse, searchResponses, responseWithPagination;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    key = cache.formatKey([searchQueries]);
                    cachedResponse = cache.getEntry(key);
                    if (cachedResponse)
                      return [2, cachedResponse];
                    return [4, client.multiSearch({
                      queries: searchQueries
                    })];
                  case 1:
                    searchResponses = _a.sent();
                    responseWithPagination = searchResponses.results.map(function(response, index3) {
                      return __assign(__assign({}, response), {
                        // TODO: should be removed at one point
                        pagination: instantSearchPagination[index3] || {}
                      });
                    });
                    cache.setEntry(key, responseWithPagination);
                    return [2, responseWithPagination];
                }
              });
            });
          }
        };
      }
      function adaptGeoSearch(_a) {
        var insideBoundingBox = _a.insideBoundingBox, aroundLatLng = _a.aroundLatLng, aroundRadius = _a.aroundRadius, minimumAroundRadius = _a.minimumAroundRadius;
        var middlePoint;
        var radius;
        var filter;
        if (aroundLatLng) {
          var _b = aroundLatLng.split(",").map(function(pt) {
            return Number.parseFloat(pt).toFixed(5);
          }), lat = _b[0], lng = _b[1];
          middlePoint = [lat, lng];
        }
        if (aroundRadius != null || minimumAroundRadius != null) {
          if (aroundRadius === "all") {
            console.warn("instant-meilisearch is not compatible with the `all` value on the aroundRadius parameter");
          } else if (aroundRadius != null) {
            radius = aroundRadius;
          } else {
            radius = minimumAroundRadius;
          }
        }
        if (insideBoundingBox && typeof insideBoundingBox === "string") {
          var _c9 = insideBoundingBox.split(",").map(function(pt) {
            return parseFloat(pt);
          }), lat1 = _c9[0], lng1 = _c9[1], lat2 = _c9[2], lng2 = _c9[3];
          filter = "_geoBoundingBox([".concat(lat1, ", ").concat(lng1, "], [").concat(lat2, ", ").concat(lng2, "])");
        } else if (middlePoint != null && radius != null) {
          var lat = middlePoint[0], lng = middlePoint[1];
          filter = "_geoRadius(".concat(lat, ", ").concat(lng, ", ").concat(radius, ")");
        }
        return filter;
      }
      function transformFilter(filter) {
        return filter.replace(/(.*):(.*)/i, '"$1"="$2"');
      }
      function transformFilters(filters) {
        if (typeof filters === "string") {
          return transformFilter(filters);
        } else if (Array.isArray(filters))
          return filters.map(function(filter) {
            if (Array.isArray(filter))
              return filter.map(function(nestedFilter) {
                return transformFilter(nestedFilter);
              }).filter(function(elem) {
                return elem;
              });
            else {
              return transformFilter(filter);
            }
          }).filter(function(elem) {
            return elem;
          });
        return [];
      }
      function filterToArray(filter) {
        if (filter === "")
          return [];
        else if (typeof filter === "string")
          return [filter];
        return filter;
      }
      function mergeFilters(facetFilters, numericFilters, filters) {
        var adaptedFilters = filters.trim();
        var adaptedFacetFilters = filterToArray(facetFilters);
        var adaptedNumericFilters = filterToArray(numericFilters);
        var adaptedFilter = __spreadArray(__spreadArray(__spreadArray([], adaptedFacetFilters, true), adaptedNumericFilters, true), [
          adaptedFilters
        ], false);
        var cleanedFilters = adaptedFilter.filter(function(filter) {
          if (Array.isArray(filter)) {
            return filter.length;
          }
          return filter;
        });
        return cleanedFilters;
      }
      function adaptFilters(filters, numericFilters, facetFilters) {
        var transformedFilter = transformFilters(facetFilters || []);
        var transformedNumericFilter = transformFilters(numericFilters || []);
        return mergeFilters(transformedFilter, transformedNumericFilter, filters || "");
      }
      function isPaginationRequired(filter, query, placeholderSearch) {
        if (!placeholderSearch && !query && (!filter || filter.length === 0)) {
          return false;
        }
        return true;
      }
      function setScrollPagination(pagination, paginationRequired) {
        var page = pagination.page, hitsPerPage = pagination.hitsPerPage;
        if (!paginationRequired) {
          return {
            limit: 0,
            offset: 0
          };
        }
        return {
          limit: hitsPerPage + 1,
          offset: page * hitsPerPage
        };
      }
      function setFinitePagination(pagination, paginationRequired) {
        var page = pagination.page, hitsPerPage = pagination.hitsPerPage;
        if (!paginationRequired) {
          return {
            hitsPerPage: 0,
            page: page + 1
          };
        } else {
          return {
            hitsPerPage,
            page: page + 1
          };
        }
      }
      function MeiliParamsCreator(searchContext) {
        var meiliSearchParams = {};
        var facets = searchContext.facets, attributesToSnippet = searchContext.attributesToSnippet, snippetEllipsisText = searchContext.snippetEllipsisText, attributesToRetrieve = searchContext.attributesToRetrieve, attributesToHighlight = searchContext.attributesToHighlight, highlightPreTag = searchContext.highlightPreTag, highlightPostTag = searchContext.highlightPostTag, placeholderSearch = searchContext.placeholderSearch, query = searchContext.query, sort = searchContext.sort, pagination = searchContext.pagination, matchingStrategy = searchContext.matchingStrategy, filters = searchContext.filters, numericFilters = searchContext.numericFilters, facetFilters = searchContext.facetFilters, indexUid = searchContext.indexUid;
        var meilisearchFilters = adaptFilters(filters, numericFilters, facetFilters);
        return {
          getParams: function() {
            return meiliSearchParams;
          },
          addQuery: function() {
            meiliSearchParams.q = query;
          },
          addIndexUid: function() {
            meiliSearchParams.indexUid = indexUid;
          },
          addFacets: function() {
            if (Array.isArray(facets)) {
              meiliSearchParams.facets = facets;
            } else if (typeof facets === "string") {
              meiliSearchParams.facets = [facets];
            }
          },
          addAttributesToCrop: function() {
            if (attributesToSnippet) {
              meiliSearchParams.attributesToCrop = attributesToSnippet;
            }
          },
          addCropMarker: function() {
            if (snippetEllipsisText != null) {
              meiliSearchParams.cropMarker = snippetEllipsisText;
            }
          },
          addAttributesToRetrieve: function() {
            if (attributesToRetrieve) {
              meiliSearchParams.attributesToRetrieve = attributesToRetrieve;
            }
          },
          addFilters: function() {
            if (meilisearchFilters.length) {
              meiliSearchParams.filter = meilisearchFilters;
            }
          },
          addAttributesToHighlight: function() {
            meiliSearchParams.attributesToHighlight = attributesToHighlight || ["*"];
          },
          addPreTag: function() {
            if (highlightPreTag) {
              meiliSearchParams.highlightPreTag = highlightPreTag;
            } else {
              meiliSearchParams.highlightPreTag = "__ais-highlight__";
            }
          },
          addPostTag: function() {
            if (highlightPostTag) {
              meiliSearchParams.highlightPostTag = highlightPostTag;
            } else {
              meiliSearchParams.highlightPostTag = "__/ais-highlight__";
            }
          },
          addPagination: function() {
            var paginationRequired = isPaginationRequired(meilisearchFilters, query, placeholderSearch);
            if (pagination.finite) {
              var _a = setFinitePagination(pagination, paginationRequired), hitsPerPage = _a.hitsPerPage, page = _a.page;
              meiliSearchParams.hitsPerPage = hitsPerPage;
              meiliSearchParams.page = page;
            } else {
              var _b = setScrollPagination(pagination, paginationRequired), limit = _b.limit, offset = _b.offset;
              meiliSearchParams.limit = limit;
              meiliSearchParams.offset = offset;
            }
          },
          addSort: function() {
            if (sort === null || sort === void 0 ? void 0 : sort.length) {
              meiliSearchParams.sort = Array.isArray(sort) ? sort : [sort];
            }
          },
          addGeoSearchFilter: function() {
            var insideBoundingBox = searchContext.insideBoundingBox, aroundLatLng = searchContext.aroundLatLng, aroundRadius = searchContext.aroundRadius, minimumAroundRadius = searchContext.minimumAroundRadius;
            var filter = adaptGeoSearch({
              insideBoundingBox,
              aroundLatLng,
              aroundRadius,
              minimumAroundRadius
            });
            if (filter) {
              if (meiliSearchParams.filter) {
                meiliSearchParams.filter.unshift(filter);
              } else {
                meiliSearchParams.filter = [filter];
              }
            }
          },
          addMatchingStrategy: function() {
            if (matchingStrategy) {
              meiliSearchParams.matchingStrategy = matchingStrategy;
            }
          }
        };
      }
      function adaptSearchParams(searchContext) {
        var meilisearchParams = MeiliParamsCreator(searchContext);
        meilisearchParams.addQuery();
        meilisearchParams.addIndexUid();
        meilisearchParams.addFacets();
        meilisearchParams.addAttributesToHighlight();
        meilisearchParams.addPreTag();
        meilisearchParams.addPostTag();
        meilisearchParams.addAttributesToRetrieve();
        meilisearchParams.addAttributesToCrop();
        meilisearchParams.addCropMarker();
        meilisearchParams.addPagination();
        meilisearchParams.addFilters();
        meilisearchParams.addSort();
        meilisearchParams.addGeoSearchFilter();
        meilisearchParams.addMatchingStrategy();
        return meilisearchParams.getParams();
      }
      function removeDuplicate(key) {
        var indexes = [];
        return function(object) {
          if (indexes.includes(object[key])) {
            return false;
          }
          indexes.push(object[key]);
          return true;
        };
      }
      function stringifyArray(arr) {
        return arr.reduce(function(acc, curr) {
          return acc += JSON.stringify(curr);
        }, "");
      }
      function stringifyValue(value) {
        if (typeof value === "string") {
          return value;
        } else if (value === void 0) {
          return JSON.stringify(null);
        } else {
          return JSON.stringify(value);
        }
      }
      function wrapValue(value) {
        if (Array.isArray(value)) {
          return value.map(function(elem) {
            return wrapValue(elem);
          });
        } else if (isPureObject(value)) {
          return Object.keys(value).reduce(function(nested, key) {
            nested[key] = wrapValue(value[key]);
            return nested;
          }, {});
        } else {
          return { value: stringifyValue(value) };
        }
      }
      function adaptFormattedFields(hit) {
        if (!hit)
          return {};
        var _formattedResult = wrapValue(hit);
        var highlightedHit = {
          // We could not determine what the differences are between those two fields.
          _highlightResult: _formattedResult,
          _snippetResult: _formattedResult
        };
        return highlightedHit;
      }
      function adaptGeoResponse(hits) {
        var _a;
        for (var i = 0; i < hits.length; i++) {
          var objectID = "".concat(i + Math.random() * 1e6);
          if (hits[i]._geo) {
            hits[i]._geoloc = hits[i]._geo;
            hits[i].objectID = objectID;
          }
          if ((_a = hits[i]._formatted) === null || _a === void 0 ? void 0 : _a._geo) {
            hits[i]._formatted._geoloc = hits[i]._formatted._geo;
            hits[i]._formatted.objectID = objectID;
          }
        }
        return hits;
      }
      function adaptHits(searchResponse, config) {
        var hits = searchResponse.hits;
        var hitsPerPage = searchResponse.pagination.hitsPerPage;
        var finitePagination = config.finitePagination, primaryKey = config.primaryKey;
        if (!finitePagination && hits.length > hitsPerPage) {
          hits.splice(hits.length - 1, 1);
        }
        var adaptedHits = hits.map(function(hit) {
          if (Object.keys(hit).length > 0) {
            var formattedHit = hit._formatted;
            hit._matchesPosition;
            var documentFields = __rest(hit, ["_formatted", "_matchesPosition"]);
            var adaptedHit = Object.assign(documentFields, adaptFormattedFields(formattedHit));
            if (primaryKey) {
              adaptedHit.objectID = hit[primaryKey];
            }
            return adaptedHit;
          }
          return hit;
        });
        adaptedHits = adaptGeoResponse(adaptedHits);
        return adaptedHits;
      }
      function adaptTotalHits(searchResponse) {
        var _a = searchResponse.hitsPerPage, hitsPerPage = _a === void 0 ? 0 : _a, _b = searchResponse.totalPages, totalPages = _b === void 0 ? 0 : _b, estimatedTotalHits = searchResponse.estimatedTotalHits, totalHits = searchResponse.totalHits;
        if (estimatedTotalHits != null) {
          return estimatedTotalHits;
        } else if (totalHits != null) {
          return totalHits;
        }
        return hitsPerPage * totalPages;
      }
      function adaptNbPages(searchResponse, hitsPerPage) {
        if (searchResponse.totalPages != null) {
          return searchResponse.totalPages;
        }
        if (hitsPerPage === 0) {
          return 0;
        }
        var _a = searchResponse.limit, limit = _a === void 0 ? 20 : _a, _b = searchResponse.offset, offset = _b === void 0 ? 0 : _b, hits = searchResponse.hits;
        var additionalPage = hits.length >= limit ? 1 : 0;
        return offset / hitsPerPage + 1 + additionalPage;
      }
      function adaptPaginationParameters(searchResponse, paginationState) {
        var hitsPerPage = paginationState.hitsPerPage, page = paginationState.page;
        var nbPages = adaptNbPages(searchResponse, hitsPerPage);
        return {
          page,
          nbPages,
          hitsPerPage
        };
      }
      function getFacetNames(facets) {
        if (!facets)
          return [];
        else if (typeof facets === "string")
          return [facets];
        return facets;
      }
      function fillMissingFacetValues(facets, initialFacetDistribution, facetDistribution) {
        var facetNames = getFacetNames(facets);
        var filledDistribution = {};
        for (var _i = 0, facetNames_1 = facetNames; _i < facetNames_1.length; _i++) {
          var facet = facetNames_1[_i];
          for (var facetValue in initialFacetDistribution[facet]) {
            if (!filledDistribution[facet]) {
              filledDistribution[facet] = facetDistribution[facet] || {};
            }
            if (!filledDistribution[facet][facetValue]) {
              filledDistribution[facet][facetValue] = 0;
            } else {
              filledDistribution[facet][facetValue] = facetDistribution[facet][facetValue];
            }
          }
        }
        return filledDistribution;
      }
      function adaptFacetDistribution(keepZeroFacets, facets, initialFacetDistribution, facetDistribution) {
        if (keepZeroFacets) {
          facetDistribution = facetDistribution || {};
          return fillMissingFacetValues(facets, initialFacetDistribution, facetDistribution);
        }
        return facetDistribution;
      }
      function adaptFacetStats(meiliFacetStats) {
        var facetStats = Object.keys(meiliFacetStats).reduce(function(stats, facet) {
          stats[facet] = __assign(__assign({}, meiliFacetStats[facet]), { avg: 0, sum: 0 });
          return stats;
        }, {});
        return facetStats;
      }
      function adaptSearchResults(meilisearchResults, initialFacetDistribution, config) {
        var instantSearchResult = meilisearchResults.map(function(meilisearchResult) {
          return adaptSearchResult(meilisearchResult, initialFacetDistribution[meilisearchResult.indexUid], config);
        });
        return { results: instantSearchResult };
      }
      function adaptSearchResult(meiliSearchResult, initialFacetDistribution, config) {
        var processingTimeMs = meiliSearchResult.processingTimeMs, query = meiliSearchResult.query, indexUid = meiliSearchResult.indexUid, _a = meiliSearchResult.facetDistribution, responseFacetDistribution = _a === void 0 ? {} : _a, _b = meiliSearchResult.facetStats, facetStats = _b === void 0 ? {} : _b;
        var facets = Object.keys(responseFacetDistribution);
        var _c9 = adaptPaginationParameters(meiliSearchResult, meiliSearchResult.pagination), hitsPerPage = _c9.hitsPerPage, page = _c9.page, nbPages = _c9.nbPages;
        var hits = adaptHits(meiliSearchResult, config);
        var nbHits = adaptTotalHits(meiliSearchResult);
        var facetDistribution = adaptFacetDistribution(config.keepZeroFacets, facets, initialFacetDistribution, responseFacetDistribution);
        var adaptedSearchResult = {
          index: indexUid,
          hitsPerPage,
          page,
          facets: facetDistribution,
          nbPages,
          nbHits,
          processingTimeMS: processingTimeMs,
          query,
          hits,
          params: "",
          exhaustiveNbHits: false,
          facets_stats: adaptFacetStats(facetStats)
        };
        return adaptedSearchResult;
      }
      function splitSortString(sortStr) {
        if (!sortStr)
          return [];
        var sortRules = sortStr.split(/,(?=\w+:(?:asc|desc))/);
        return sortRules;
      }
      function createPaginationState(finite, hitsPerPage, page) {
        return {
          hitsPerPage: hitsPerPage === void 0 ? 20 : hitsPerPage,
          page: page || 0,
          finite: !!finite
        };
      }
      function separateIndexFromSortRules(indexName) {
        var colonIndex = indexName.indexOf(":");
        if (colonIndex === -1) {
          return {
            indexUid: indexName,
            sortBy: ""
          };
        }
        return {
          indexUid: indexName.substring(0, colonIndex),
          sortBy: indexName.substring(colonIndex + 1)
        };
      }
      function createSearchContext(searchRequest, options) {
        var query = searchRequest.query, indexName = searchRequest.indexName, instantSearchParams = searchRequest.params;
        var _a = separateIndexFromSortRules(indexName), indexUid = _a.indexUid, sortBy = _a.sortBy;
        var paginationState = createPaginationState(options.finitePagination, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.hitsPerPage, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.page);
        var searchContext = __assign(__assign(__assign(__assign({}, options), { query }), instantSearchParams), { sort: splitSortString(sortBy), indexUid, pagination: paginationState, placeholderSearch: options.placeholderSearch !== false, keepZeroFacets: !!options.keepZeroFacets });
        return searchContext;
      }
      function createFacetSearchContext(searchRequest, options) {
        var _a = separateIndexFromSortRules(searchRequest.indexName), indexUid = _a.indexUid, sortBy = _a.sortBy;
        var instantSearchParams = searchRequest.params;
        var paginationState = createPaginationState(options.finitePagination, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.hitsPerPage, instantSearchParams === null || instantSearchParams === void 0 ? void 0 : instantSearchParams.page);
        var searchContext = __assign(__assign(__assign({}, options), instantSearchParams), { sort: splitSortString(sortBy), indexUid, pagination: paginationState, placeholderSearch: options.placeholderSearch !== false, keepZeroFacets: !!options.keepZeroFacets });
        return searchContext;
      }
      function SearchCache(cache) {
        if (cache === void 0) {
          cache = {};
        }
        var searchCache = cache;
        return {
          getEntry: function(key) {
            if (searchCache[key]) {
              try {
                return JSON.parse(searchCache[key]);
              } catch (_) {
                return void 0;
              }
            }
            return void 0;
          },
          formatKey: function(components) {
            return stringifyArray(components);
          },
          setEntry: function(key, searchResponse) {
            searchCache[key] = JSON.stringify(searchResponse);
          },
          clearCache: function() {
            searchCache = {};
          }
        };
      }
      function getParametersWithoutFilters(searchContext) {
        var defaultSearchContext = __assign(__assign({}, searchContext), {
          // placeholdersearch true to ensure a request is made
          placeholderSearch: true,
          // query set to empty to ensure retrieving the default facetdistribution
          query: ""
        });
        var meilisearchParams = MeiliParamsCreator(defaultSearchContext);
        meilisearchParams.addFacets();
        meilisearchParams.addIndexUid();
        meilisearchParams.addPagination();
        return meilisearchParams.getParams();
      }
      function initFacetDistribution(searchResolver, queries, initialFacetDistribution) {
        return __awaiter(this, void 0, void 0, function() {
          var removeIndexUidDuplicates, searchQueries, results, _i, results_1, searchResult;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                removeIndexUidDuplicates = removeDuplicate("indexUid");
                searchQueries = queries.filter(removeIndexUidDuplicates).filter(function(_a2) {
                  var indexUid = _a2.indexUid;
                  return !Object.keys(initialFacetDistribution).includes(indexUid);
                });
                if (searchQueries.length === 0)
                  return [2, initialFacetDistribution];
                return [4, searchResolver.multiSearch(searchQueries, [])];
              case 1:
                results = _a.sent();
                for (_i = 0, results_1 = results; _i < results_1.length; _i++) {
                  searchResult = results_1[_i];
                  initialFacetDistribution[searchResult.indexUid] = searchResult.facetDistribution || {};
                }
                return [2, initialFacetDistribution];
            }
          });
        });
      }
      function fillMissingFacets(initialFacetDistribution, meilisearchResults) {
        for (var _i = 0, meilisearchResults_1 = meilisearchResults; _i < meilisearchResults_1.length; _i++) {
          var searchResult = meilisearchResults_1[_i];
          initialFacetDistribution[searchResult.indexUid] = __assign(__assign({}, searchResult.facetDistribution || {}), initialFacetDistribution[searchResult.indexUid] || {});
        }
        return initialFacetDistribution;
      }
      var PACKAGE_VERSION = "0.13.6";
      var constructClientAgents = function(clientAgents) {
        if (clientAgents === void 0) {
          clientAgents = [];
        }
        var instantMeilisearchAgent = "Meilisearch instant-meilisearch (v".concat(PACKAGE_VERSION, ")");
        return clientAgents.concat(instantMeilisearchAgent);
      };
      function instantMeiliSearch2(hostUrl, apiKey, instantMeiliSearchOptions) {
        if (apiKey === void 0) {
          apiKey = "";
        }
        if (instantMeiliSearchOptions === void 0) {
          instantMeiliSearchOptions = {};
        }
        validateInstantMeiliSearchParams(hostUrl, apiKey, instantMeiliSearchOptions);
        apiKey = getApiKey(apiKey);
        var clientAgents = constructClientAgents(instantMeiliSearchOptions.clientAgents);
        var meilisearchConfig = {
          host: hostUrl,
          apiKey,
          clientAgents
        };
        if (instantMeiliSearchOptions.httpClient !== void 0) {
          meilisearchConfig.httpClient = instantMeiliSearchOptions.httpClient;
        }
        if (instantMeiliSearchOptions.requestConfig !== void 0) {
          meilisearchConfig.requestConfig = instantMeiliSearchOptions.requestConfig;
        }
        var meilisearchClient = new meilisearch_umd.MeiliSearch(meilisearchConfig);
        var searchCache = SearchCache();
        var searchResolver = SearchResolver(meilisearchClient, searchCache);
        var initialFacetDistribution = {};
        var instantMeilisearchConfig = getInstantMeilisearchConfig(instantMeiliSearchOptions);
        return {
          clearCache: function() {
            return searchCache.clearCache();
          },
          /**
           * @param  {readonlyAlgoliaMultipleQueriesQuery[]} instantSearchRequests
           * @returns {Array}
           */
          search: function(instantSearchRequests) {
            return __awaiter(this, void 0, void 0, function() {
              var meilisearchRequests, instantSearchPagination, initialFacetDistributionsRequests, _i, instantSearchRequests_1, searchRequest, searchContext, meilisearchSearchQuery, defaultSearchQuery, meilisearchResults, instantSearchResponse, e_1;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 3, , 4]);
                    meilisearchRequests = [];
                    instantSearchPagination = [];
                    initialFacetDistributionsRequests = [];
                    for (_i = 0, instantSearchRequests_1 = instantSearchRequests; _i < instantSearchRequests_1.length; _i++) {
                      searchRequest = instantSearchRequests_1[_i];
                      searchContext = createSearchContext(searchRequest, instantMeiliSearchOptions);
                      meilisearchSearchQuery = adaptSearchParams(searchContext);
                      meilisearchRequests.push(meilisearchSearchQuery);
                      defaultSearchQuery = getParametersWithoutFilters(searchContext);
                      initialFacetDistributionsRequests.push(defaultSearchQuery);
                      instantSearchPagination.push(searchContext.pagination);
                    }
                    return [
                      4,
                      initFacetDistribution(searchResolver, initialFacetDistributionsRequests, initialFacetDistribution)
                      // Search request to Meilisearch happens here
                    ];
                  case 1:
                    initialFacetDistribution = _a.sent();
                    return [
                      4,
                      searchResolver.multiSearch(
                        meilisearchRequests,
                        instantSearchPagination
                        // Create issue on pagination
                      )
                      // Fill the missing facet values if keepZeroFacets is true
                    ];
                  case 2:
                    meilisearchResults = _a.sent();
                    initialFacetDistribution = fillMissingFacets(initialFacetDistribution, meilisearchResults);
                    instantSearchResponse = adaptSearchResults(meilisearchResults, initialFacetDistribution, instantMeilisearchConfig);
                    return [2, instantSearchResponse];
                  case 3:
                    e_1 = _a.sent();
                    console.error(e_1);
                    throw new Error(e_1);
                  case 4:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          },
          searchForFacetValues: function(requests) {
            return __awaiter(this, void 0, void 0, function() {
              var results, _i, requests_1, request, searchContext, meilisearchSearchQuery, meilisearchRequest, meilisearchResponse, facetHits, result;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    results = [];
                    _i = 0, requests_1 = requests;
                    _a.label = 1;
                  case 1:
                    if (!(_i < requests_1.length))
                      return [3, 4];
                    request = requests_1[_i];
                    searchContext = createFacetSearchContext(request, instantMeiliSearchOptions);
                    meilisearchSearchQuery = adaptSearchParams(searchContext);
                    meilisearchRequest = __assign(__assign({}, meilisearchSearchQuery), { facetQuery: request.params.facetQuery, facetName: request.params.facetName });
                    delete meilisearchRequest.indexUid;
                    return [4, meilisearchClient.index(searchContext.indexUid).searchForFacetValues(meilisearchRequest)];
                  case 2:
                    meilisearchResponse = _a.sent();
                    facetHits = meilisearchResponse.facetHits.map(function(facetHit) {
                      return __assign(__assign({}, facetHit), {
                        // not currently supported
                        highlighted: facetHit.value
                      });
                    });
                    result = {
                      facetHits,
                      exhaustiveFacetsCount: false,
                      processingTimeMS: meilisearchResponse.processingTimeMs
                    };
                    results.push(result);
                    _a.label = 3;
                  case 3:
                    _i++;
                    return [3, 1];
                  case 4:
                    return [2, results];
                }
              });
            });
          }
        };
      }
      exports2.MatchingStrategies = void 0;
      (function(MatchingStrategies) {
        MatchingStrategies["ALL"] = "all";
        MatchingStrategies["LAST"] = "last";
      })(exports2.MatchingStrategies || (exports2.MatchingStrategies = {}));
      exports2.instantMeiliSearch = instantMeiliSearch2;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LDUFYKG7.css";

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = void 0;

// node_modules/react-instantsearch-core/dist/es/version.js
var version_default = "7.5.0";

// node_modules/instantsearch.js/es/lib/utils/capitalize.js
function capitalize(text) {
  return text.toString().charAt(0).toUpperCase() + text.toString().slice(1);
}

// node_modules/instantsearch.js/es/lib/utils/noop.js
function noop() {
}

// node_modules/instantsearch.js/es/lib/utils/logger.js
var deprecate = function deprecate2(fn, message) {
  return fn;
};
var warn = noop;
var _warning = noop;
if (true) {
  warn = function warn3(message) {
    console.warn("[InstantSearch.js]: ".concat(message.trim()));
  };
  deprecate = function deprecate3(fn, message) {
    var hasAlreadyPrinted = false;
    return function() {
      if (!hasAlreadyPrinted) {
        hasAlreadyPrinted = true;
        true ? warn(message) : void 0;
      }
      return fn.apply(void 0, arguments);
    };
  };
  _warning = function warning(condition, message) {
    if (condition) {
      return;
    }
    var hasAlreadyPrinted = _warning.cache[message];
    if (!hasAlreadyPrinted) {
      _warning.cache[message] = true;
      true ? warn(message) : void 0;
    }
  };
  _warning.cache = {};
}

// node_modules/instantsearch.js/es/lib/utils/typedObject.js
var keys = Object.keys;

// node_modules/instantsearch.js/es/lib/utils/checkIndexUiState.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s5, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s5 = _x.call(_i)).done) && (_arr.push(_s5.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function getWidgetNames(connectorName) {
  switch (connectorName) {
    case "range":
      return [];
    case "menu":
      return ["menu", "menuSelect"];
    default:
      return [connectorName];
  }
}
var stateToWidgetsMap = {
  query: {
    connectors: ["connectSearchBox"],
    widgets: ["ais.searchBox", "ais.autocomplete", "ais.voiceSearch"]
  },
  refinementList: {
    connectors: ["connectRefinementList"],
    widgets: ["ais.refinementList"]
  },
  menu: {
    connectors: ["connectMenu"],
    widgets: ["ais.menu"]
  },
  hierarchicalMenu: {
    connectors: ["connectHierarchicalMenu"],
    widgets: ["ais.hierarchicalMenu"]
  },
  numericMenu: {
    connectors: ["connectNumericMenu"],
    widgets: ["ais.numericMenu"]
  },
  ratingMenu: {
    connectors: ["connectRatingMenu"],
    widgets: ["ais.ratingMenu"]
  },
  range: {
    connectors: ["connectRange"],
    widgets: ["ais.rangeInput", "ais.rangeSlider", "ais.range"]
  },
  toggle: {
    connectors: ["connectToggleRefinement"],
    widgets: ["ais.toggleRefinement"]
  },
  geoSearch: {
    connectors: ["connectGeoSearch"],
    widgets: ["ais.geoSearch"]
  },
  sortBy: {
    connectors: ["connectSortBy"],
    widgets: ["ais.sortBy"]
  },
  page: {
    connectors: ["connectPagination"],
    widgets: ["ais.pagination", "ais.infiniteHits"]
  },
  hitsPerPage: {
    connectors: ["connectHitsPerPage"],
    widgets: ["ais.hitsPerPage"]
  },
  configure: {
    connectors: ["connectConfigure"],
    widgets: ["ais.configure"]
  },
  places: {
    connectors: [],
    widgets: ["ais.places"]
  }
};
function checkIndexUiState(_ref) {
  var index3 = _ref.index, indexUiState = _ref.indexUiState;
  var mountedWidgets = index3.getWidgets().map(function(widget) {
    return widget.$$type;
  }).filter(Boolean);
  var missingWidgets = keys(indexUiState).reduce(function(acc, parameter) {
    var widgetUiState = stateToWidgetsMap[parameter];
    if (!widgetUiState) {
      return acc;
    }
    var requiredWidgets = widgetUiState.widgets;
    if (requiredWidgets && !requiredWidgets.some(function(requiredWidget) {
      return mountedWidgets.includes(requiredWidget);
    })) {
      acc.push([parameter, {
        connectors: widgetUiState.connectors,
        widgets: widgetUiState.widgets.map(function(widgetIdentifier) {
          return widgetIdentifier.split("ais.")[1];
        })
      }]);
    }
    return acc;
  }, []);
  true ? _warning(missingWidgets.length === 0, 'The UI state for the index "'.concat(index3.getIndexId(), '" is not consistent with the widgets mounted.\n\nThis can happen when the UI state is specified via `initialUiState`, `routing` or `setUiState` but that the widgets responsible for this state were not added. This results in those query parameters not being sent to the API.\n\nTo fully reflect the state, some widgets need to be added to the index "').concat(index3.getIndexId(), '":\n\n').concat(missingWidgets.map(function(_ref22) {
    var _ref42;
    var _ref3 = _slicedToArray(_ref22, 2), stateParameter = _ref3[0], widgets = _ref3[1].widgets;
    return "- `".concat(stateParameter, "` needs one of these widgets: ").concat((_ref42 = []).concat.apply(_ref42, _toConsumableArray(widgets.map(function(name) {
      return getWidgetNames(name);
    }))).map(function(name) {
      return '"'.concat(name, '"');
    }).join(", "));
  }).join("\n"), '\n\nIf you do not wish to display widgets but still want to support their search parameters, you can mount "virtual widgets" that don\'t render anything:\n\n```\n').concat(missingWidgets.filter(function(_ref5) {
    var _ref62 = _slicedToArray(_ref5, 2), _stateParameter = _ref62[0], connectors = _ref62[1].connectors;
    return connectors.length > 0;
  }).map(function(_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2), _stateParameter = _ref8[0], _ref8$ = _ref8[1], connectors = _ref8$.connectors, widgets = _ref8$.widgets;
    var capitalizedWidget = capitalize(widgets[0]);
    var connectorName = connectors[0];
    return "const virtual".concat(capitalizedWidget, " = ").concat(connectorName, "(() => null);");
  }).join("\n"), "\n\nsearch.addWidgets([\n  ").concat(missingWidgets.filter(function(_ref9) {
    var _ref10 = _slicedToArray(_ref9, 2), _stateParameter = _ref10[0], connectors = _ref10[1].connectors;
    return connectors.length > 0;
  }).map(function(_ref11) {
    var _ref12 = _slicedToArray(_ref11, 2), _stateParameter = _ref12[0], widgets = _ref12[1].widgets;
    var capitalizedWidget = capitalize(widgets[0]);
    return "virtual".concat(capitalizedWidget, "({ /* ... */ })");
  }).join(",\n  "), "\n]);\n```\n\nIf you're using custom widgets that do set these query parameters, we recommend using connectors instead.\n\nSee https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#customize-the-complete-ui-of-the-widgets")) : void 0;
}

// node_modules/instantsearch.js/es/lib/utils/getObjectType.js
function getObjectType(object) {
  return Object.prototype.toString.call(object).slice(8, -1);
}

// node_modules/instantsearch.js/es/lib/utils/checkRendering.js
function checkRendering(rendering, usage) {
  if (rendering === void 0 || typeof rendering !== "function") {
    throw new Error("The render function is not valid (received type ".concat(getObjectType(rendering), ").\n\n").concat(usage));
  }
}

// node_modules/instantsearch.js/es/lib/utils/escape-html.js
var htmlEntities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var regexUnescapedHtml = /[&<>"']/g;
var regexHasUnescapedHtml = RegExp(regexUnescapedHtml.source);
function escape2(value) {
  return value && regexHasUnescapedHtml.test(value) ? value.replace(regexUnescapedHtml, function(character) {
    return htmlEntities[character];
  }) : value;
}
var htmlCharacters = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
};
var regexEscapedHtml = /&(amp|quot|lt|gt|#39);/g;
var regexHasEscapedHtml = RegExp(regexEscapedHtml.source);
function unescape2(value) {
  return value && regexHasEscapedHtml.test(value) ? value.replace(regexEscapedHtml, function(character) {
    return htmlCharacters[character];
  }) : value;
}

// node_modules/instantsearch.js/es/lib/utils/isPlainObject.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function getTag(value) {
  if (value === null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}
function isObjectLike(value) {
  return _typeof(value) === "object" && value !== null;
}
function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  var proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}

// node_modules/instantsearch.js/es/lib/utils/escape-highlight.js
function _typeof2(obj) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof2(obj);
}
function _objectDestructuringEmpty(obj) {
  if (obj == null)
    throw new TypeError("Cannot destructure " + obj);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof2(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof2(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof2(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var TAG_PLACEHOLDER = {
  highlightPreTag: "__ais-highlight__",
  highlightPostTag: "__/ais-highlight__"
};
var TAG_REPLACEMENT = {
  highlightPreTag: "<mark>",
  highlightPostTag: "</mark>"
};
function replaceTagsAndEscape(value) {
  return escape2(value).replace(new RegExp(TAG_PLACEHOLDER.highlightPreTag, "g"), TAG_REPLACEMENT.highlightPreTag).replace(new RegExp(TAG_PLACEHOLDER.highlightPostTag, "g"), TAG_REPLACEMENT.highlightPostTag);
}
function recursiveEscape(input) {
  if (isPlainObject(input) && typeof input.value !== "string") {
    return Object.keys(input).reduce(function(acc, key) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, recursiveEscape(input[key])));
    }, {});
  }
  if (Array.isArray(input)) {
    return input.map(recursiveEscape);
  }
  return _objectSpread(_objectSpread({}, input), {}, {
    value: replaceTagsAndEscape(input.value)
  });
}
function escapeHits(hits) {
  if (hits.__escaped === void 0) {
    hits = hits.map(function(_ref) {
      var hit = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
      if (hit._highlightResult) {
        hit._highlightResult = recursiveEscape(hit._highlightResult);
      }
      if (hit._snippetResult) {
        hit._snippetResult = recursiveEscape(hit._snippetResult);
      }
      return hit;
    });
    hits.__escaped = true;
  }
  return hits;
}

// node_modules/instantsearch.js/es/lib/utils/concatHighlightedParts.js
function concatHighlightedParts(parts) {
  var highlightPreTag = TAG_REPLACEMENT.highlightPreTag, highlightPostTag = TAG_REPLACEMENT.highlightPostTag;
  return parts.map(function(part) {
    return part.isHighlighted ? highlightPreTag + part.value + highlightPostTag : part.value;
  }).join("");
}

// node_modules/instantsearch.js/es/lib/utils/serializer.js
function serializePayload(payload) {
  return btoa(encodeURIComponent(JSON.stringify(payload)));
}

// node_modules/instantsearch.js/es/lib/utils/createSendEventForHits.js
function ownKeys2(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return _typeof3(key) === "symbol" ? key : String(key);
}
function _toPrimitive2(input, hint) {
  if (_typeof3(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof3(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit2(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s5, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s5 = _x.call(_i)).done) && (_arr.push(_s5.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _typeof3(obj) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof3(obj);
}
function chunk(arr) {
  var chunkSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20;
  var chunks = [];
  for (var i = 0; i < Math.ceil(arr.length / chunkSize); i++) {
    chunks.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
  }
  return chunks;
}
function _buildEventPayloadsForHits(_ref) {
  var index3 = _ref.index, widgetType = _ref.widgetType, methodName = _ref.methodName, args = _ref.args, instantSearchInstance = _ref.instantSearchInstance;
  if (args.length === 1 && _typeof3(args[0]) === "object") {
    return [args[0]];
  }
  var _args$0$split = args[0].split(":"), _args$0$split2 = _slicedToArray2(_args$0$split, 2), eventType = _args$0$split2[0], eventModifier = _args$0$split2[1];
  var hits = args[1];
  var eventName = args[2];
  var additionalData = args[3] || {};
  if (!hits) {
    if (true) {
      throw new Error("You need to pass hit or hits as the second argument like:\n  ".concat(methodName, "(eventType, hit);\n  "));
    } else {
      return [];
    }
  }
  if ((eventType === "click" || eventType === "conversion") && !eventName) {
    if (true) {
      throw new Error("You need to pass eventName as the third argument for 'click' or 'conversion' events like:\n  ".concat(methodName, "('click', hit, 'Product Purchased');\n\n  To learn more about event naming: https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/in-depth/clicks-conversions-best-practices/\n  "));
    } else {
      return [];
    }
  }
  var hitsArray = Array.isArray(hits) ? hits : [hits];
  if (hitsArray.length === 0) {
    return [];
  }
  var queryID = hitsArray[0].__queryID;
  var hitsChunks = chunk(hitsArray);
  var objectIDsByChunk = hitsChunks.map(function(batch) {
    return batch.map(function(hit) {
      return hit.objectID;
    });
  });
  var positionsByChunk = hitsChunks.map(function(batch) {
    return batch.map(function(hit) {
      return hit.__position;
    });
  });
  if (eventType === "view") {
    if (instantSearchInstance.status !== "idle") {
      return [];
    }
    return hitsChunks.map(function(batch, i) {
      return {
        insightsMethod: "viewedObjectIDs",
        widgetType,
        eventType,
        payload: _objectSpread2({
          eventName: eventName || "Hits Viewed",
          index: index3,
          objectIDs: objectIDsByChunk[i]
        }, additionalData),
        hits: batch,
        eventModifier
      };
    });
  } else if (eventType === "click") {
    return hitsChunks.map(function(batch, i) {
      return {
        insightsMethod: "clickedObjectIDsAfterSearch",
        widgetType,
        eventType,
        payload: _objectSpread2({
          eventName: eventName || "Hit Clicked",
          index: index3,
          queryID,
          objectIDs: objectIDsByChunk[i],
          positions: positionsByChunk[i]
        }, additionalData),
        hits: batch,
        eventModifier
      };
    });
  } else if (eventType === "conversion") {
    return hitsChunks.map(function(batch, i) {
      return {
        insightsMethod: "convertedObjectIDsAfterSearch",
        widgetType,
        eventType,
        payload: _objectSpread2({
          eventName: eventName || "Hit Converted",
          index: index3,
          queryID,
          objectIDs: objectIDsByChunk[i]
        }, additionalData),
        hits: batch,
        eventModifier
      };
    });
  } else if (true) {
    throw new Error('eventType("'.concat(eventType, '") is not supported.\n    If you want to send a custom payload, you can pass one object: ').concat(methodName, "(customPayload);\n    "));
  } else {
    return [];
  }
}
function createSendEventForHits(_ref22) {
  var instantSearchInstance = _ref22.instantSearchInstance, index3 = _ref22.index, widgetType = _ref22.widgetType;
  var sentEvents = {};
  var timer = void 0;
  var sendEventForHits = function sendEventForHits2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var payloads = _buildEventPayloadsForHits({
      widgetType,
      index: index3,
      methodName: "sendEvent",
      args,
      instantSearchInstance
    });
    payloads.forEach(function(payload) {
      if (payload.eventType === "click" && payload.eventModifier === "internal" && sentEvents[payload.eventType]) {
        return;
      }
      sentEvents[payload.eventType] = true;
      instantSearchInstance.sendEventToInsights(payload);
    });
    clearTimeout(timer);
    timer = setTimeout(function() {
      sentEvents = {};
    }, 0);
  };
  return sendEventForHits;
}
function createBindEventForHits(_ref3) {
  var index3 = _ref3.index, widgetType = _ref3.widgetType, instantSearchInstance = _ref3.instantSearchInstance;
  var bindEventForHits = function bindEventForHits2() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var payloads = _buildEventPayloadsForHits({
      widgetType,
      index: index3,
      methodName: "bindEvent",
      args,
      instantSearchInstance
    });
    return payloads.length ? "data-insights-event=".concat(serializePayload(payloads)) : "";
  };
  return bindEventForHits;
}

// node_modules/instantsearch.js/es/lib/utils/isIndexWidget.js
function isIndexWidget(widget) {
  return widget.$$type === "ais.index";
}

// node_modules/instantsearch.js/es/lib/utils/setIndexHelperState.js
function setIndexHelperState(finalUiState, indexWidget) {
  var nextIndexUiState = finalUiState[indexWidget.getIndexId()] || {};
  if (true) {
    checkIndexUiState({
      index: indexWidget,
      indexUiState: nextIndexUiState
    });
  }
  indexWidget.getHelper().setState(indexWidget.getWidgetSearchParameters(indexWidget.getHelper().state, {
    uiState: nextIndexUiState
  }));
  indexWidget.getWidgets().filter(isIndexWidget).forEach(function(widget) {
    return setIndexHelperState(finalUiState, widget);
  });
}

// node_modules/instantsearch.js/es/lib/utils/defer.js
var nextMicroTask = Promise.resolve();
function defer(callback) {
  var progress = null;
  var cancelled = false;
  var fn = function fn2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (progress !== null) {
      return;
    }
    progress = nextMicroTask.then(function() {
      progress = null;
      if (cancelled) {
        cancelled = false;
        return;
      }
      callback.apply(void 0, args);
    });
  };
  fn.wait = function() {
    if (progress === null) {
      throw new Error("The deferred function should be called before calling `wait()`");
    }
    return progress;
  };
  fn.cancel = function() {
    if (progress === null) {
      return;
    }
    cancelled = true;
  };
  return fn;
}

// node_modules/instantsearch.js/es/lib/utils/documentation.js
function createDocumentationLink(_ref) {
  var name = _ref.name, _ref$connector = _ref.connector, connector = _ref$connector === void 0 ? false : _ref$connector;
  return ["https://www.algolia.com/doc/api-reference/widgets/", name, "/js/", connector ? "#connector" : ""].join("");
}
function createDocumentationMessageGenerator() {
  for (var _len = arguments.length, widgets = new Array(_len), _key = 0; _key < _len; _key++) {
    widgets[_key] = arguments[_key];
  }
  var links2 = widgets.map(function(widget) {
    return createDocumentationLink(widget);
  }).join(", ");
  return function(message) {
    return [message, "See documentation: ".concat(links2)].filter(Boolean).join("\n\n");
  };
}

// node_modules/instantsearch.js/es/lib/utils/find.js
function find(items, predicate) {
  var value;
  for (var i = 0; i < items.length; i++) {
    value = items[i];
    if (predicate(value, i, items)) {
      return value;
    }
  }
  return void 0;
}

// node_modules/instantsearch.js/es/lib/utils/findIndex.js
function findIndex(array, comparator) {
  if (!Array.isArray(array)) {
    return -1;
  }
  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return i;
    }
  }
  return -1;
}

// node_modules/instantsearch.js/es/lib/utils/getAppIdAndApiKey.js
function getAppIdAndApiKey(searchClient2) {
  if (searchClient2.transporter) {
    var _searchClient$transpo = searchClient2.transporter, headers = _searchClient$transpo.headers, queryParameters = _searchClient$transpo.queryParameters;
    var APP_ID = "x-algolia-application-id";
    var API_KEY = "x-algolia-api-key";
    var appId = headers[APP_ID] || queryParameters[APP_ID];
    var apiKey = headers[API_KEY] || queryParameters[API_KEY];
    return [appId, apiKey];
  } else {
    return [searchClient2.applicationID, searchClient2.apiKey];
  }
}

// node_modules/instantsearch.js/es/lib/utils/getHighlightedParts.js
function getHighlightedParts(highlightedValue) {
  var highlightPostTag = TAG_REPLACEMENT.highlightPostTag, highlightPreTag = TAG_REPLACEMENT.highlightPreTag;
  var splitByPreTag = highlightedValue.split(highlightPreTag);
  var firstValue = splitByPreTag.shift();
  var elements = !firstValue ? [] : [{
    value: firstValue,
    isHighlighted: false
  }];
  splitByPreTag.forEach(function(split) {
    var splitByPostTag = split.split(highlightPostTag);
    elements.push({
      value: splitByPostTag[0],
      isHighlighted: true
    });
    if (splitByPostTag[1] !== "") {
      elements.push({
        value: splitByPostTag[1],
        isHighlighted: false
      });
    }
  });
  return elements;
}

// node_modules/instantsearch.js/es/lib/utils/getHighlightFromSiblings.js
var hasAlphanumeric = new RegExp(/\w/i);
function getHighlightFromSiblings(parts, i) {
  var _parts, _parts2;
  var current = parts[i];
  var isNextHighlighted = ((_parts = parts[i + 1]) === null || _parts === void 0 ? void 0 : _parts.isHighlighted) || true;
  var isPreviousHighlighted = ((_parts2 = parts[i - 1]) === null || _parts2 === void 0 ? void 0 : _parts2.isHighlighted) || true;
  if (!hasAlphanumeric.test(unescape2(current.value)) && isPreviousHighlighted === isNextHighlighted) {
    return isPreviousHighlighted;
  }
  return current.isHighlighted;
}

// node_modules/instantsearch.js/es/lib/utils/getPropertyByPath.js
function getPropertyByPath(object, path) {
  var parts = Array.isArray(path) ? path : path.split(".");
  return parts.reduce(function(current, key) {
    return current && current[key];
  }, object);
}

// node_modules/instantsearch.js/es/lib/utils/hits-absolute-position.js
function _typeof4(obj) {
  "@babel/helpers - typeof";
  return _typeof4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof4(obj);
}
function ownKeys3(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  key = _toPropertyKey3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey3(arg) {
  var key = _toPrimitive3(arg, "string");
  return _typeof4(key) === "symbol" ? key : String(key);
}
function _toPrimitive3(input, hint) {
  if (_typeof4(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof4(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function addAbsolutePosition(hits, page, hitsPerPage) {
  return hits.map(function(hit, idx) {
    return _objectSpread3(_objectSpread3({}, hit), {}, {
      __position: hitsPerPage * page + idx + 1
    });
  });
}

// node_modules/instantsearch.js/es/lib/utils/hits-query-id.js
function _typeof5(obj) {
  "@babel/helpers - typeof";
  return _typeof5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof5(obj);
}
function ownKeys4(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys4(Object(source), true).forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty4(obj, key, value) {
  key = _toPropertyKey4(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey4(arg) {
  var key = _toPrimitive4(arg, "string");
  return _typeof5(key) === "symbol" ? key : String(key);
}
function _toPrimitive4(input, hint) {
  if (_typeof5(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof5(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function addQueryID(hits, queryID) {
  if (!queryID) {
    return hits;
  }
  return hits.map(function(hit) {
    return _objectSpread4(_objectSpread4({}, hit), {}, {
      __queryID: queryID
    });
  });
}

// node_modules/instantsearch.js/es/lib/utils/hydrateSearchClient.js
function _typeof6(obj) {
  "@babel/helpers - typeof";
  return _typeof6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof6(obj);
}
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit3(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s5, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s5 = _x.call(_i)).done) && (_arr.push(_s5.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys5(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys5(Object(source), true).forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys5(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty5(obj, key, value) {
  key = _toPropertyKey5(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey5(arg) {
  var key = _toPrimitive5(arg, "string");
  return _typeof6(key) === "symbol" ? key : String(key);
}
function _toPrimitive5(input, hint) {
  if (_typeof6(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof6(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function hydrateSearchClient(client, results) {
  if (!results) {
    return;
  }
  if ((!("transporter" in client) || client._cacheHydrated) && (!client._useCache || typeof client.addAlgoliaAgent !== "function")) {
    return;
  }
  var cachedRequest = Object.keys(results).map(function(key) {
    return results[key].results.map(function(result) {
      return {
        indexName: result.index,
        // We normalize the params received from the server as they can
        // be serialized differently depending on the engine.
        params: serializeQueryParameters(deserializeQueryParameters(result.params))
      };
    });
  });
  var cachedResults = Object.keys(results).reduce(function(acc, key) {
    return acc.concat(results[key].results);
  }, []);
  if ("transporter" in client && !client._cacheHydrated) {
    client._cacheHydrated = true;
    var baseMethod = client.search;
    client.search = function(requests) {
      for (var _len = arguments.length, methodArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        methodArgs[_key - 1] = arguments[_key];
      }
      var requestsWithSerializedParams = requests.map(function(request) {
        return _objectSpread5(_objectSpread5({}, request), {}, {
          params: serializeQueryParameters(request.params)
        });
      });
      return client.transporter.responsesCache.get({
        method: "search",
        args: [requestsWithSerializedParams].concat(methodArgs)
      }, function() {
        return baseMethod.apply(void 0, [requests].concat(methodArgs));
      });
    };
    client.transporter.responsesCache.set({
      method: "search",
      args: cachedRequest
    }, {
      results: cachedResults
    });
  }
  if (!("transporter" in client)) {
    var cacheKey = "/1/indexes/*/queries_body_".concat(JSON.stringify({
      requests: cachedRequest
    }));
    client.cache = _objectSpread5(_objectSpread5({}, client.cache), {}, _defineProperty5({}, cacheKey, JSON.stringify({
      results: Object.keys(results).map(function(key) {
        return results[key].results;
      })
    })));
  }
}
function deserializeQueryParameters(parameters) {
  return parameters.split("&").reduce(function(acc, parameter) {
    var _parameter$split = parameter.split("="), _parameter$split2 = _slicedToArray3(_parameter$split, 2), key = _parameter$split2[0], value = _parameter$split2[1];
    acc[key] = value ? decodeURIComponent(value) : "";
    return acc;
  }, {});
}
function serializeQueryParameters(parameters) {
  var isObjectOrArray = function isObjectOrArray2(value) {
    return Object.prototype.toString.call(value) === "[object Object]" || Object.prototype.toString.call(value) === "[object Array]";
  };
  var encode = function encode2(format) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    var i = 0;
    return format.replace(/%s/g, function() {
      return encodeURIComponent(args[i++]);
    });
  };
  return Object.keys(parameters).map(function(key) {
    return encode("%s=%s", key, isObjectOrArray(parameters[key]) ? JSON.stringify(parameters[key]) : parameters[key]);
  }).join("&");
}

// node_modules/instantsearch.js/es/lib/utils/isEqual.js
function isPrimitive(obj) {
  return obj !== Object(obj);
}
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (isPrimitive(first) || isPrimitive(second) || typeof first === "function" || typeof second === "function") {
    return first === second;
  }
  if (Object.keys(first).length !== Object.keys(second).length) {
    return false;
  }
  for (var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    if (!(key in second)) {
      return false;
    }
    if (!isEqual(first[key], second[key])) {
      return false;
    }
  }
  return true;
}

// node_modules/instantsearch.js/es/lib/utils/uniq.js
function uniq(array) {
  return array.filter(function(value, index3, self2) {
    return self2.indexOf(value) === index3;
  });
}

// node_modules/instantsearch.js/es/lib/utils/mergeSearchParameters.js
function _typeof7(obj) {
  "@babel/helpers - typeof";
  return _typeof7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof7(obj);
}
var _excluded = ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"];
function ownKeys6(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys6(Object(source), true).forEach(function(key) {
      _defineProperty6(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys6(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty6(obj, key, value) {
  key = _toPropertyKey6(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey6(arg) {
  var key = _toPrimitive6(arg, "string");
  return _typeof7(key) === "symbol" ? key : String(key);
}
function _toPrimitive6(input, hint) {
  if (_typeof7(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof7(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var mergeWithRest = function mergeWithRest2(left, right) {
  var facets = right.facets, disjunctiveFacets = right.disjunctiveFacets, facetsRefinements = right.facetsRefinements, facetsExcludes = right.facetsExcludes, disjunctiveFacetsRefinements = right.disjunctiveFacetsRefinements, numericRefinements = right.numericRefinements, tagRefinements = right.tagRefinements, hierarchicalFacets = right.hierarchicalFacets, hierarchicalFacetsRefinements = right.hierarchicalFacetsRefinements, ruleContexts = right.ruleContexts, rest = _objectWithoutProperties(right, _excluded);
  return left.setQueryParameters(rest);
};
var mergeFacets = function mergeFacets2(left, right) {
  return right.facets.reduce(function(_, name) {
    return _.addFacet(name);
  }, left);
};
var mergeDisjunctiveFacets = function mergeDisjunctiveFacets2(left, right) {
  return right.disjunctiveFacets.reduce(function(_, name) {
    return _.addDisjunctiveFacet(name);
  }, left);
};
var mergeHierarchicalFacets = function mergeHierarchicalFacets2(left, right) {
  return left.setQueryParameters({
    hierarchicalFacets: right.hierarchicalFacets.reduce(function(facets, facet) {
      var index3 = findIndex(facets, function(_) {
        return _.name === facet.name;
      });
      if (index3 === -1) {
        return facets.concat(facet);
      }
      var nextFacets = facets.slice();
      nextFacets.splice(index3, 1, facet);
      return nextFacets;
    }, left.hierarchicalFacets)
  });
};
var mergeTagRefinements = function mergeTagRefinements2(left, right) {
  return right.tagRefinements.reduce(function(_, value) {
    return _.addTagRefinement(value);
  }, left);
};
var mergeFacetRefinements = function mergeFacetRefinements2(left, right) {
  return left.setQueryParameters({
    facetsRefinements: _objectSpread6(_objectSpread6({}, left.facetsRefinements), right.facetsRefinements)
  });
};
var mergeFacetsExcludes = function mergeFacetsExcludes2(left, right) {
  return left.setQueryParameters({
    facetsExcludes: _objectSpread6(_objectSpread6({}, left.facetsExcludes), right.facetsExcludes)
  });
};
var mergeDisjunctiveFacetsRefinements = function mergeDisjunctiveFacetsRefinements2(left, right) {
  return left.setQueryParameters({
    disjunctiveFacetsRefinements: _objectSpread6(_objectSpread6({}, left.disjunctiveFacetsRefinements), right.disjunctiveFacetsRefinements)
  });
};
var mergeNumericRefinements = function mergeNumericRefinements2(left, right) {
  return left.setQueryParameters({
    numericRefinements: _objectSpread6(_objectSpread6({}, left.numericRefinements), right.numericRefinements)
  });
};
var mergeHierarchicalFacetsRefinements = function mergeHierarchicalFacetsRefinements2(left, right) {
  return left.setQueryParameters({
    hierarchicalFacetsRefinements: _objectSpread6(_objectSpread6({}, left.hierarchicalFacetsRefinements), right.hierarchicalFacetsRefinements)
  });
};
var mergeRuleContexts = function mergeRuleContexts2(left, right) {
  var ruleContexts = uniq([].concat(left.ruleContexts).concat(right.ruleContexts).filter(Boolean));
  if (ruleContexts.length > 0) {
    return left.setQueryParameters({
      ruleContexts
    });
  }
  return left;
};
var mergeSearchParameters = function mergeSearchParameters2() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }
  return parameters.reduce(function(left, right) {
    var hierarchicalFacetsRefinementsMerged = mergeHierarchicalFacetsRefinements(left, right);
    var hierarchicalFacetsMerged = mergeHierarchicalFacets(hierarchicalFacetsRefinementsMerged, right);
    var tagRefinementsMerged = mergeTagRefinements(hierarchicalFacetsMerged, right);
    var numericRefinementsMerged = mergeNumericRefinements(tagRefinementsMerged, right);
    var disjunctiveFacetsRefinementsMerged = mergeDisjunctiveFacetsRefinements(numericRefinementsMerged, right);
    var facetsExcludesMerged = mergeFacetsExcludes(disjunctiveFacetsRefinementsMerged, right);
    var facetRefinementsMerged = mergeFacetRefinements(facetsExcludesMerged, right);
    var disjunctiveFacetsMerged = mergeDisjunctiveFacets(facetRefinementsMerged, right);
    var ruleContextsMerged = mergeRuleContexts(disjunctiveFacetsMerged, right);
    var facetsMerged = mergeFacets(ruleContextsMerged, right);
    return mergeWithRest(facetsMerged, right);
  });
};

// node_modules/instantsearch.js/es/lib/utils/render-args.js
function createInitArgs(instantSearchInstance, parent, uiState) {
  var helper = parent.getHelper();
  return {
    uiState,
    helper,
    parent,
    instantSearchInstance,
    state: helper.state,
    renderState: instantSearchInstance.renderState,
    templatesConfig: instantSearchInstance.templatesConfig,
    createURL: parent.createURL,
    scopedResults: [],
    searchMetadata: {
      isSearchStalled: instantSearchInstance.status === "stalled"
    },
    status: instantSearchInstance.status,
    error: instantSearchInstance.error
  };
}
function createRenderArgs(instantSearchInstance, parent) {
  var results = parent.getResults();
  var helper = parent.getHelper();
  return {
    helper,
    parent,
    instantSearchInstance,
    results,
    scopedResults: parent.getScopedResults(),
    state: results ? results._state : helper.state,
    renderState: instantSearchInstance.renderState,
    templatesConfig: instantSearchInstance.templatesConfig,
    createURL: parent.createURL,
    searchMetadata: {
      isSearchStalled: instantSearchInstance.status === "stalled"
    },
    status: instantSearchInstance.status,
    error: instantSearchInstance.error
  };
}

// node_modules/instantsearch.js/es/lib/utils/resolveSearchParameters.js
function resolveSearchParameters(current) {
  var parent = current.getParent();
  var states = [current.getHelper().state];
  while (parent !== null) {
    states = [parent.getHelper().state].concat(states);
    parent = parent.getParent();
  }
  return states;
}

// node_modules/instantsearch.js/es/lib/utils/reverseHighlightedParts.js
function _typeof8(obj) {
  "@babel/helpers - typeof";
  return _typeof8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof8(obj);
}
function ownKeys7(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys7(Object(source), true).forEach(function(key) {
      _defineProperty7(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys7(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty7(obj, key, value) {
  key = _toPropertyKey7(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey7(arg) {
  var key = _toPrimitive7(arg, "string");
  return _typeof8(key) === "symbol" ? key : String(key);
}
function _toPrimitive7(input, hint) {
  if (_typeof8(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof8(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function reverseHighlightedParts(parts) {
  if (!parts.some(function(part) {
    return part.isHighlighted;
  })) {
    return parts.map(function(part) {
      return _objectSpread7(_objectSpread7({}, part), {}, {
        isHighlighted: false
      });
    });
  }
  return parts.map(function(part, i) {
    return _objectSpread7(_objectSpread7({}, part), {}, {
      isHighlighted: !getHighlightFromSiblings(parts, i)
    });
  });
}

// node_modules/instantsearch.js/es/lib/utils/safelyRunOnBrowser.js
function safelyRunOnBrowser(callback) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    fallback: function fallback2() {
      return void 0;
    }
  }, fallback = _ref.fallback;
  if (typeof window === "undefined") {
    return fallback();
  }
  return callback({
    window
  });
}

// node_modules/react-instantsearch-core/dist/es/hooks/useConnector.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/react-instantsearch-core/dist/es/lib/dequal.js
function _typeof9(obj) {
  "@babel/helpers - typeof";
  return _typeof9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof9(obj);
}
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar, compare) {
  if (compare !== null && compare !== void 0 && compare(foo, bar)) {
    return true;
  }
  var ctor;
  var len;
  if (foo === bar)
    return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date)
      return foo.getTime() === bar.getTime();
    if (ctor === RegExp)
      return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len], compare))
          ;
      }
      return len === -1;
    }
    if (!ctor || _typeof9(foo) === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
          return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor], compare))
          return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}

// node_modules/react-instantsearch-core/dist/es/lib/createSearchResults.js
var import_algoliasearch_helper = __toESM(require_algoliasearch_helper2(), 1);
function createSearchResults(state) {
  var _state$query, _state$page, _state$hitsPerPage;
  return new import_algoliasearch_helper.default.SearchResults(state, [{
    query: (_state$query = state.query) !== null && _state$query !== void 0 ? _state$query : "",
    page: (_state$page = state.page) !== null && _state$page !== void 0 ? _state$page : 0,
    hitsPerPage: (_state$hitsPerPage = state.hitsPerPage) !== null && _state$hitsPerPage !== void 0 ? _state$hitsPerPage : 20,
    hits: [],
    nbHits: 0,
    nbPages: 0,
    params: "",
    exhaustiveNbHits: true,
    exhaustiveFacetsCount: true,
    processingTimeMS: 0,
    index: state.index
  }], {
    /** used by connectors to prevent persisting these results */
    __isArtificial: true
  });
}

// node_modules/react-instantsearch-core/dist/es/lib/getIndexSearchResults.js
function _typeof10(obj) {
  "@babel/helpers - typeof";
  return _typeof10 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof10(obj);
}
function ownKeys8(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys8(Object(source), true).forEach(function(key) {
      _defineProperty8(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys8(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty8(obj, key, value) {
  key = _toPropertyKey8(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey8(arg) {
  var key = _toPrimitive8(arg, "string");
  return _typeof10(key) === "symbol" ? key : String(key);
}
function _toPrimitive8(input, hint) {
  if (_typeof10(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof10(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function getIndexSearchResults(indexWidget) {
  var helper = indexWidget.getHelper();
  var results = (
    // On SSR, we get the results injected on the Index.
    indexWidget.getResults() || // On the browser, we create fallback results based on the helper state.
    createSearchResults(helper.state)
  );
  var scopedResults = indexWidget.getScopedResults().map(function(scopedResult) {
    var fallbackResults = scopedResult.indexId === indexWidget.getIndexId() ? results : createSearchResults(scopedResult.helper.state);
    return _objectSpread8(_objectSpread8({}, scopedResult), {}, {
      // We keep `results` from being `null`.
      results: scopedResult.results || fallbackResults
    });
  });
  return {
    results,
    scopedResults
  };
}

// node_modules/react-instantsearch-core/dist/es/lib/useIndexContext.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/react-instantsearch-core/dist/es/lib/invariant.js
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (false) {
    throw new Error("Invariant failed");
  }
  if (true) {
    throw new Error("[InstantSearch] ".concat(typeof message === "function" ? message() : message));
  }
}

// node_modules/react-instantsearch-core/dist/es/lib/IndexContext.js
var import_react = __toESM(require_react(), 1);
var IndexContext = /* @__PURE__ */ (0, import_react.createContext)(null);
if (true) {
  IndexContext.displayName = "Index";
}

// node_modules/react-instantsearch-core/dist/es/lib/useIndexContext.js
function useIndexContext() {
  var context = (0, import_react2.useContext)(IndexContext);
  invariant(context !== null, "The <Index> component must be used within <InstantSearch>.");
  return context;
}

// node_modules/react-instantsearch-core/dist/es/lib/useInstantSearchContext.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/react-instantsearch-core/dist/es/lib/InstantSearchContext.js
var import_react3 = __toESM(require_react(), 1);
var InstantSearchContext = /* @__PURE__ */ (0, import_react3.createContext)(null);
if (true) {
  InstantSearchContext.displayName = "InstantSearch";
}

// node_modules/react-instantsearch-core/dist/es/lib/useInstantSearchContext.js
function useInstantSearchContext() {
  var search = (0, import_react4.useContext)(InstantSearchContext);
  invariant(search !== null, "Hooks must be used inside the <InstantSearch> component.\n\nThey are not compatible with the `react-instantsearch-core@6.x` and `react-instantsearch-dom` packages, so make sure to use the <InstantSearch> component from `react-instantsearch-core@7.x`.");
  return search;
}

// node_modules/react-instantsearch-core/dist/es/lib/useInstantSearchServerContext.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/react-instantsearch-core/dist/es/components/InstantSearchServerContext.js
var import_react5 = __toESM(require_react(), 1);
var InstantSearchServerContext = /* @__PURE__ */ (0, import_react5.createContext)(null);
if (true) {
  InstantSearchServerContext.displayName = "InstantSearchServer";
}

// node_modules/react-instantsearch-core/dist/es/lib/useInstantSearchServerContext.js
function useInstantSearchServerContext() {
  return (0, import_react6.useContext)(InstantSearchServerContext);
}

// node_modules/react-instantsearch-core/dist/es/lib/useStableValue.js
var import_react7 = __toESM(require_react(), 1);
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray4(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray4(o, minLen);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit4(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s5, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s5 = _x.call(_i)).done) && (_arr.push(_s5.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useStableValue(value) {
  var _useState = (0, import_react7.useState)(function() {
    return value;
  }), _useState2 = _slicedToArray4(_useState, 2), stableValue = _useState2[0], setStableValue = _useState2[1];
  if (!dequal(stableValue, value)) {
    setStableValue(value);
  }
  return stableValue;
}

// node_modules/react-instantsearch-core/dist/es/lib/useWidget.js
var import_react11 = __toESM(require_react(), 1);

// node_modules/react-instantsearch-core/dist/es/lib/use.js
var React = __toESM(require_react(), 1);
var useKey = "use";
var use = React[useKey];

// node_modules/react-instantsearch-core/dist/es/lib/useIsomorphicLayoutEffect.js
var import_react8 = __toESM(require_react(), 1);
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react8.useLayoutEffect : import_react8.useEffect;

// node_modules/react-instantsearch-core/dist/es/lib/useRSCContext.js
var import_react10 = __toESM(require_react(), 1);

// node_modules/react-instantsearch-core/dist/es/lib/InstantSearchRSCContext.js
var import_react9 = __toESM(require_react(), 1);
var InstantSearchRSCContext = /* @__PURE__ */ (0, import_react9.createContext)(null);

// node_modules/react-instantsearch-core/dist/es/lib/useRSCContext.js
function useRSCContext() {
  return (0, import_react10.useContext)(InstantSearchRSCContext);
}

// node_modules/react-instantsearch-core/dist/es/lib/useWidget.js
function useWidget(_ref) {
  var _waitingForResultsRef;
  var widget = _ref.widget, parentIndex = _ref.parentIndex, props = _ref.props, shouldSsr = _ref.shouldSsr;
  var waitingForResultsRef = useRSCContext();
  var prevPropsRef = (0, import_react11.useRef)(props);
  (0, import_react11.useEffect)(function() {
    prevPropsRef.current = props;
  }, [props]);
  var prevWidgetRef = (0, import_react11.useRef)(widget);
  (0, import_react11.useEffect)(function() {
    prevWidgetRef.current = widget;
  }, [widget]);
  var cleanupTimerRef = (0, import_react11.useRef)(null);
  var shouldAddWidgetEarly = shouldSsr && !parentIndex.getWidgets().includes(widget);
  var search = useInstantSearchContext();
  useIsomorphicLayoutEffect(function() {
    var previousWidget = prevWidgetRef.current;
    if (!cleanupTimerRef.current) {
      if (!shouldAddWidgetEarly) {
        parentIndex.addWidgets([widget]);
      }
    } else {
      clearTimeout(cleanupTimerRef.current);
      var arePropsEqual = dequal(props, prevPropsRef.current);
      if (!arePropsEqual) {
        parentIndex.removeWidgets([previousWidget]);
        parentIndex.addWidgets([widget]);
      }
    }
    return function() {
      cleanupTimerRef.current = setTimeout(function() {
        search._schedule(function() {
          if (search._preventWidgetCleanup)
            return;
          parentIndex.removeWidgets([previousWidget]);
        });
      });
    };
  }, [parentIndex, widget, shouldAddWidgetEarly, search, props]);
  if (shouldAddWidgetEarly || (waitingForResultsRef === null || waitingForResultsRef === void 0 ? void 0 : (_waitingForResultsRef = waitingForResultsRef.current) === null || _waitingForResultsRef === void 0 ? void 0 : _waitingForResultsRef.status) === "pending") {
    parentIndex.addWidgets([widget]);
  }
  if (typeof window === "undefined" && waitingForResultsRef !== null && waitingForResultsRef !== void 0 && waitingForResultsRef.current && // We need the widgets contained in the index to be added before we trigger the search request.
  widget.$$type !== "ais.index") {
    var _search$helper;
    use(waitingForResultsRef.current);
    if (widget.$$type !== "ais.dynamicWidgets" && (_search$helper = search.helper) !== null && _search$helper !== void 0 && _search$helper.lastResults) {
      use(waitingForResultsRef.current);
    }
  }
}

// node_modules/react-instantsearch-core/dist/es/hooks/useConnector.js
function _typeof11(obj) {
  "@babel/helpers - typeof";
  return _typeof11 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof11(obj);
}
var _excluded2 = ["instantSearchInstance", "widgetParams"];
var _excluded22 = ["widgetParams"];
function _slicedToArray5(arr, i) {
  return _arrayWithHoles5(arr) || _iterableToArrayLimit5(arr, i) || _unsupportedIterableToArray5(arr, i) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray5(o, minLen);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit5(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s5, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s5 = _x.call(_i)).done) && (_arr.push(_s5.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles5(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys9(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys9(Object(source), true).forEach(function(key) {
      _defineProperty9(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys9(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty9(obj, key, value) {
  key = _toPropertyKey9(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey9(arg) {
  var key = _toPrimitive9(arg, "string");
  return _typeof11(key) === "symbol" ? key : String(key);
}
function _toPrimitive9(input, hint) {
  if (_typeof11(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof11(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useConnector(connector) {
  var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var additionalWidgetProperties = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var serverContext = useInstantSearchServerContext();
  var search = useInstantSearchContext();
  var parentIndex = useIndexContext();
  var stableProps = useStableValue(props);
  var stableAdditionalWidgetProperties = useStableValue(additionalWidgetProperties);
  var shouldSetStateRef = (0, import_react12.useRef)(true);
  var previousRenderStateRef = (0, import_react12.useRef)(null);
  var previousStatusRef = (0, import_react12.useRef)(search.status);
  var widget = (0, import_react12.useMemo)(function() {
    var createWidget = connector(function(connectorState, isFirstRender) {
      if (isFirstRender) {
        shouldSetStateRef.current = true;
        return;
      }
      if (shouldSetStateRef.current) {
        var instantSearchInstance = connectorState.instantSearchInstance, widgetParams = connectorState.widgetParams, renderState = _objectWithoutProperties2(connectorState, _excluded2);
        if (!dequal(renderState, previousRenderStateRef.current, function(a, b) {
          return (a === null || a === void 0 ? void 0 : a.constructor) === Function && (b === null || b === void 0 ? void 0 : b.constructor) === Function;
        }) || instantSearchInstance.status !== previousStatusRef.current) {
          setState(renderState);
          previousRenderStateRef.current = renderState;
          previousStatusRef.current = instantSearchInstance.status;
        }
      }
    }, function() {
      shouldSetStateRef.current = false;
    });
    return _objectSpread9(_objectSpread9({}, createWidget(stableProps)), stableAdditionalWidgetProperties);
  }, [connector, stableProps, stableAdditionalWidgetProperties]);
  var _useState = (0, import_react12.useState)(function() {
    if (widget.getWidgetRenderState) {
      var _widget$getWidgetSear;
      var helper = parentIndex.getHelper();
      var uiState = parentIndex.getWidgetUiState({})[parentIndex.getIndexId()];
      helper.state = ((_widget$getWidgetSear = widget.getWidgetSearchParameters) === null || _widget$getWidgetSear === void 0 ? void 0 : _widget$getWidgetSear.call(widget, helper.state, {
        uiState
      })) || helper.state;
      var _getIndexSearchResult = getIndexSearchResults(parentIndex), results = _getIndexSearchResult.results, scopedResults = _getIndexSearchResult.scopedResults;
      var _widget$getWidgetRend = widget.getWidgetRenderState({
        helper,
        parent: parentIndex,
        instantSearchInstance: search,
        results,
        scopedResults,
        state: helper.state,
        renderState: search.renderState,
        templatesConfig: search.templatesConfig,
        createURL: parentIndex.createURL,
        searchMetadata: {
          isSearchStalled: search.status === "stalled"
        },
        status: search.status,
        error: search.error
      }), widgetParams = _widget$getWidgetRend.widgetParams, renderState = _objectWithoutProperties2(_widget$getWidgetRend, _excluded22);
      return renderState;
    }
    return {};
  }), _useState2 = _slicedToArray5(_useState, 2), state = _useState2[0], setState = _useState2[1];
  useWidget({
    widget,
    parentIndex,
    props: stableProps,
    shouldSsr: Boolean(serverContext)
  });
  return state;
}

// node_modules/react-instantsearch-core/dist/es/lib/warn.js
var warnCache = {
  current: {}
};
function warn2(condition, message) {
  if (false) {
    return;
  }
  if (condition) {
    return;
  }
  var sanitizedMessage = message.trim();
  var hasAlreadyPrinted = warnCache.current[sanitizedMessage];
  if (!hasAlreadyPrinted) {
    warnCache.current[sanitizedMessage] = true;
    var warning = "[InstantSearch] ".concat(sanitizedMessage);
    console.warn(warning);
    try {
      throw new Error(warning);
    } catch (error) {
    }
  }
}

// node_modules/react-instantsearch-core/dist/es/components/Index.js
var import_react17 = __toESM(require_react(), 1);

// node_modules/instantsearch.js/es/widgets/index/index.js
var import_algoliasearch_helper2 = __toESM(require_algoliasearch_helper2(), 1);
function _typeof12(obj) {
  "@babel/helpers - typeof";
  return _typeof12 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof12(obj);
}
var _excluded3 = ["initialSearchParameters"];
function ownKeys10(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread10(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys10(Object(source), true).forEach(function(key) {
      _defineProperty10(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys10(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty10(obj, key, value) {
  key = _toPropertyKey10(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey10(arg) {
  var key = _toPrimitive10(arg, "string");
  return _typeof12(key) === "symbol" ? key : String(key);
}
function _toPrimitive10(input, hint) {
  if (_typeof12(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof12(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray6(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray6(o, minLen);
}
function _iterableToArray2(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray6(arr);
}
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _objectWithoutProperties3(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose3(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var withUsage = createDocumentationMessageGenerator({
  name: "index-widget"
});
function privateHelperSetState(helper, _ref) {
  var state = _ref.state, isPageReset = _ref.isPageReset, _uiState = _ref._uiState;
  if (state !== helper.state) {
    helper.state = state;
    helper.emit("change", {
      state: helper.state,
      results: helper.lastResults,
      isPageReset,
      _uiState
    });
  }
}
function getLocalWidgetsUiState(widgets, widgetStateOptions) {
  var initialUiState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return widgets.reduce(function(uiState, widget) {
    if (isIndexWidget(widget)) {
      return uiState;
    }
    if (!widget.getWidgetUiState && !widget.getWidgetState) {
      return uiState;
    }
    if (widget.getWidgetUiState) {
      return widget.getWidgetUiState(uiState, widgetStateOptions);
    }
    return widget.getWidgetState(uiState, widgetStateOptions);
  }, initialUiState);
}
function getLocalWidgetsSearchParameters(widgets, widgetSearchParametersOptions) {
  var initialSearchParameters = widgetSearchParametersOptions.initialSearchParameters, rest = _objectWithoutProperties3(widgetSearchParametersOptions, _excluded3);
  return widgets.filter(function(widget) {
    return !isIndexWidget(widget);
  }).reduce(function(state, widget) {
    if (!widget.getWidgetSearchParameters) {
      return state;
    }
    return widget.getWidgetSearchParameters(state, rest);
  }, initialSearchParameters);
}
function resetPageFromWidgets(widgets) {
  var indexWidgets = widgets.filter(isIndexWidget);
  if (indexWidgets.length === 0) {
    return;
  }
  indexWidgets.forEach(function(widget) {
    var widgetHelper = widget.getHelper();
    privateHelperSetState(widgetHelper, {
      state: widgetHelper.state.resetPage(),
      isPageReset: true
    });
    resetPageFromWidgets(widget.getWidgets());
  });
}
function resolveScopedResultsFromWidgets(widgets) {
  var indexWidgets = widgets.filter(isIndexWidget);
  return indexWidgets.reduce(function(scopedResults, current) {
    return scopedResults.concat.apply(scopedResults, [{
      indexId: current.getIndexId(),
      results: current.getResults(),
      helper: current.getHelper()
    }].concat(_toConsumableArray2(resolveScopedResultsFromWidgets(current.getWidgets()))));
  }, []);
}
var index = function index2(widgetParams) {
  if (widgetParams === void 0 || widgetParams.indexName === void 0) {
    throw new Error(withUsage("The `indexName` option is required."));
  }
  var indexName = widgetParams.indexName, _widgetParams$indexId = widgetParams.indexId, indexId = _widgetParams$indexId === void 0 ? indexName : _widgetParams$indexId;
  var localWidgets = [];
  var localUiState = {};
  var localInstantSearchInstance = null;
  var localParent = null;
  var helper = null;
  var derivedHelper = null;
  var lastValidSearchParameters = null;
  return {
    $$type: "ais.index",
    $$widgetType: "ais.index",
    getIndexName: function getIndexName() {
      return indexName;
    },
    getIndexId: function getIndexId() {
      return indexId;
    },
    getHelper: function getHelper() {
      return helper;
    },
    getResults: function getResults() {
      var _derivedHelper;
      if (!((_derivedHelper = derivedHelper) !== null && _derivedHelper !== void 0 && _derivedHelper.lastResults))
        return null;
      derivedHelper.lastResults._state = helper.state;
      return derivedHelper.lastResults;
    },
    getPreviousState: function getPreviousState() {
      return lastValidSearchParameters;
    },
    getScopedResults: function getScopedResults() {
      var widgetParent = this.getParent();
      var widgetSiblings = widgetParent ? widgetParent.getWidgets() : [this];
      return resolveScopedResultsFromWidgets(widgetSiblings);
    },
    getParent: function getParent() {
      return localParent;
    },
    createURL: function createURL(nextState) {
      if (typeof nextState === "function") {
        return localInstantSearchInstance._createURL(_defineProperty10({}, indexId, nextState(localUiState)));
      }
      return localInstantSearchInstance._createURL(_defineProperty10({}, indexId, getLocalWidgetsUiState(localWidgets, {
        searchParameters: nextState,
        helper
      })));
    },
    getWidgets: function getWidgets() {
      return localWidgets;
    },
    addWidgets: function addWidgets(widgets) {
      var _this = this;
      if (!Array.isArray(widgets)) {
        throw new Error(withUsage("The `addWidgets` method expects an array of widgets."));
      }
      if (widgets.some(function(widget) {
        return typeof widget.init !== "function" && typeof widget.render !== "function";
      })) {
        throw new Error(withUsage("The widget definition expects a `render` and/or an `init` method."));
      }
      localWidgets = localWidgets.concat(widgets);
      if (localInstantSearchInstance && Boolean(widgets.length)) {
        privateHelperSetState(helper, {
          state: getLocalWidgetsSearchParameters(localWidgets, {
            uiState: localUiState,
            initialSearchParameters: helper.state
          }),
          _uiState: localUiState
        });
        widgets.forEach(function(widget) {
          if (widget.getRenderState) {
            var renderState = widget.getRenderState(localInstantSearchInstance.renderState[_this.getIndexId()] || {}, createInitArgs(localInstantSearchInstance, _this, localInstantSearchInstance._initialUiState));
            storeRenderState({
              renderState,
              instantSearchInstance: localInstantSearchInstance,
              parent: _this
            });
          }
        });
        widgets.forEach(function(widget) {
          if (widget.init) {
            widget.init(createInitArgs(localInstantSearchInstance, _this, localInstantSearchInstance._initialUiState));
          }
        });
        localInstantSearchInstance.scheduleSearch();
      }
      return this;
    },
    removeWidgets: function removeWidgets(widgets) {
      var _this2 = this;
      if (!Array.isArray(widgets)) {
        throw new Error(withUsage("The `removeWidgets` method expects an array of widgets."));
      }
      if (widgets.some(function(widget) {
        return typeof widget.dispose !== "function";
      })) {
        throw new Error(withUsage("The widget definition expects a `dispose` method."));
      }
      localWidgets = localWidgets.filter(function(widget) {
        return widgets.indexOf(widget) === -1;
      });
      if (localInstantSearchInstance && Boolean(widgets.length)) {
        var cleanedState = widgets.reduce(function(state, widget) {
          var next = widget.dispose({
            helper,
            state,
            parent: _this2
          });
          return next || state;
        }, helper.state);
        var newState = localInstantSearchInstance.future.preserveSharedStateOnUnmount ? getLocalWidgetsSearchParameters(localWidgets, {
          uiState: localUiState,
          initialSearchParameters: new import_algoliasearch_helper2.default.SearchParameters({
            index: this.getIndexName()
          })
        }) : getLocalWidgetsSearchParameters(localWidgets, {
          uiState: getLocalWidgetsUiState(localWidgets, {
            searchParameters: cleanedState,
            helper
          }),
          initialSearchParameters: cleanedState
        });
        localUiState = getLocalWidgetsUiState(localWidgets, {
          searchParameters: newState,
          helper
        });
        helper.setState(newState);
        if (localWidgets.length) {
          localInstantSearchInstance.scheduleSearch();
        }
      }
      return this;
    },
    init: function init(_ref22) {
      var _this3 = this, _instantSearchInstanc;
      var instantSearchInstance = _ref22.instantSearchInstance, parent = _ref22.parent, uiState = _ref22.uiState;
      if (helper !== null) {
        return;
      }
      localInstantSearchInstance = instantSearchInstance;
      localParent = parent;
      localUiState = uiState[indexId] || {};
      var mainHelper = instantSearchInstance.mainHelper;
      var parameters = getLocalWidgetsSearchParameters(localWidgets, {
        uiState: localUiState,
        initialSearchParameters: new import_algoliasearch_helper2.default.SearchParameters({
          index: indexName
        })
      });
      helper = (0, import_algoliasearch_helper2.default)({}, parameters.index, parameters);
      helper.search = function() {
        if (instantSearchInstance.onStateChange) {
          instantSearchInstance.onStateChange({
            uiState: instantSearchInstance.mainIndex.getWidgetUiState({}),
            setUiState: function setUiState(nextState) {
              return instantSearchInstance.setUiState(nextState, false);
            }
          });
          return mainHelper;
        }
        return mainHelper.search();
      };
      helper.searchWithoutTriggeringOnStateChange = function() {
        return mainHelper.search();
      };
      helper.searchForFacetValues = function(facetName, facetValue, maxFacetHits, userState) {
        var state = helper.state.setQueryParameters(userState);
        return mainHelper.searchForFacetValues(facetName, facetValue, maxFacetHits, state);
      };
      derivedHelper = mainHelper.derive(function() {
        return mergeSearchParameters.apply(void 0, [mainHelper.state].concat(_toConsumableArray2(resolveSearchParameters(_this3))));
      });
      var indexInitialResults = (_instantSearchInstanc = instantSearchInstance._initialResults) === null || _instantSearchInstanc === void 0 ? void 0 : _instantSearchInstanc[this.getIndexId()];
      if (indexInitialResults) {
        var results = new import_algoliasearch_helper2.default.SearchResults(new import_algoliasearch_helper2.default.SearchParameters(indexInitialResults.state), indexInitialResults.results);
        derivedHelper.lastResults = results;
        helper.lastResults = results;
      }
      helper.on("change", function(_ref3) {
        var isPageReset = _ref3.isPageReset;
        if (isPageReset) {
          resetPageFromWidgets(localWidgets);
        }
      });
      derivedHelper.on("search", function() {
        instantSearchInstance.scheduleStalledRender();
        if (true) {
          checkIndexUiState({
            index: _this3,
            indexUiState: localUiState
          });
        }
      });
      derivedHelper.on("result", function(_ref42) {
        var results2 = _ref42.results;
        instantSearchInstance.scheduleRender();
        helper.lastResults = results2;
        lastValidSearchParameters = results2 === null || results2 === void 0 ? void 0 : results2._state;
      });
      localWidgets.forEach(function(widget) {
        if (widget.getRenderState) {
          var renderState = widget.getRenderState(instantSearchInstance.renderState[_this3.getIndexId()] || {}, createInitArgs(instantSearchInstance, _this3, uiState));
          storeRenderState({
            renderState,
            instantSearchInstance,
            parent: _this3
          });
        }
      });
      localWidgets.forEach(function(widget) {
        true ? _warning(
          // if it has NO getWidgetState or if it has getWidgetUiState, we don't warn
          // aka we warn if there's _only_ getWidgetState
          !widget.getWidgetState || Boolean(widget.getWidgetUiState),
          "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead."
        ) : void 0;
        if (widget.init) {
          widget.init(createInitArgs(instantSearchInstance, _this3, uiState));
        }
      });
      helper.on("change", function(event) {
        var state = event.state;
        var _uiState = event._uiState;
        localUiState = getLocalWidgetsUiState(localWidgets, {
          searchParameters: state,
          helper
        }, _uiState || {});
        if (!instantSearchInstance.onStateChange) {
          instantSearchInstance.onInternalStateChange();
        }
      });
      if (indexInitialResults) {
        instantSearchInstance.scheduleRender();
      }
    },
    render: function render(_ref5) {
      var _this4 = this;
      var instantSearchInstance = _ref5.instantSearchInstance;
      if (instantSearchInstance.status === "error" && !instantSearchInstance.mainHelper.hasPendingRequests() && lastValidSearchParameters) {
        helper.setState(lastValidSearchParameters);
      }
      var widgetsToRender = this.getResults() ? localWidgets : localWidgets.filter(isIndexWidget);
      widgetsToRender.forEach(function(widget) {
        if (widget.getRenderState) {
          var renderState = widget.getRenderState(instantSearchInstance.renderState[_this4.getIndexId()] || {}, createRenderArgs(instantSearchInstance, _this4));
          storeRenderState({
            renderState,
            instantSearchInstance,
            parent: _this4
          });
        }
      });
      widgetsToRender.forEach(function(widget) {
        if (widget.render) {
          widget.render(createRenderArgs(instantSearchInstance, _this4));
        }
      });
    },
    dispose: function dispose() {
      var _this5 = this, _helper, _derivedHelper2;
      localWidgets.forEach(function(widget) {
        if (widget.dispose) {
          widget.dispose({
            helper,
            state: helper.state,
            parent: _this5
          });
        }
      });
      localInstantSearchInstance = null;
      localParent = null;
      (_helper = helper) === null || _helper === void 0 ? void 0 : _helper.removeAllListeners();
      helper = null;
      (_derivedHelper2 = derivedHelper) === null || _derivedHelper2 === void 0 ? void 0 : _derivedHelper2.detach();
      derivedHelper = null;
    },
    getWidgetUiState: function getWidgetUiState(uiState) {
      return localWidgets.filter(isIndexWidget).reduce(function(previousUiState, innerIndex) {
        return innerIndex.getWidgetUiState(previousUiState);
      }, _objectSpread10(_objectSpread10({}, uiState), {}, _defineProperty10({}, indexId, _objectSpread10(_objectSpread10({}, uiState[indexId]), localUiState))));
    },
    getWidgetState: function getWidgetState(uiState) {
      true ? _warning(false, "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead.") : void 0;
      return this.getWidgetUiState(uiState);
    },
    getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref62) {
      var uiState = _ref62.uiState;
      return getLocalWidgetsSearchParameters(localWidgets, {
        uiState,
        initialSearchParameters: searchParameters
      });
    },
    refreshUiState: function refreshUiState() {
      localUiState = getLocalWidgetsUiState(localWidgets, {
        searchParameters: this.getHelper().state,
        helper: this.getHelper()
      }, localUiState);
    },
    setIndexUiState: function setIndexUiState(indexUiState) {
      var nextIndexUiState = typeof indexUiState === "function" ? indexUiState(localUiState) : indexUiState;
      localInstantSearchInstance.setUiState(function(state) {
        return _objectSpread10(_objectSpread10({}, state), {}, _defineProperty10({}, indexId, nextIndexUiState));
      });
    }
  };
};
var index_default = index;
function storeRenderState(_ref7) {
  var renderState = _ref7.renderState, instantSearchInstance = _ref7.instantSearchInstance, parent = _ref7.parent;
  var parentIndexName = parent ? parent.getIndexId() : instantSearchInstance.mainIndex.getIndexId();
  instantSearchInstance.renderState = _objectSpread10(_objectSpread10({}, instantSearchInstance.renderState), {}, _defineProperty10({}, parentIndexName, _objectSpread10(_objectSpread10({}, instantSearchInstance.renderState[parentIndexName]), renderState)));
}

// node_modules/react-instantsearch-core/dist/es/lib/useIndex.js
var import_react16 = __toESM(require_react(), 1);

// node_modules/react-instantsearch-core/dist/es/lib/useForceUpdate.js
var import_react13 = __toESM(require_react(), 1);
function _slicedToArray6(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray7(arr, i) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray7(o, minLen);
}
function _arrayLikeToArray7(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit6(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s5, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s5 = _x.call(_i)).done) && (_arr.push(_s5.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useForceUpdate() {
  var _useReducer = (0, import_react13.useReducer)(function(x) {
    return x + 1;
  }, 0), _useReducer2 = _slicedToArray6(_useReducer, 2), forceUpdate = _useReducer2[1];
  return forceUpdate;
}

// node_modules/react-instantsearch-core/dist/es/lib/useInstantSearchSSRContext.js
var import_react15 = __toESM(require_react(), 1);

// node_modules/react-instantsearch-core/dist/es/lib/InstantSearchSSRContext.js
var import_react14 = __toESM(require_react(), 1);
var InstantSearchSSRContext = /* @__PURE__ */ (0, import_react14.createContext)(null);
if (true) {
  InstantSearchSSRContext.displayName = "InstantSearchSSR";
}

// node_modules/react-instantsearch-core/dist/es/lib/useInstantSearchSSRContext.js
function useInstantSearchSSRContext() {
  return (0, import_react15.useContext)(InstantSearchSSRContext);
}

// node_modules/react-instantsearch-core/dist/es/lib/useIndex.js
function useIndex(props) {
  var serverContext = useInstantSearchServerContext();
  var ssrContext = useInstantSearchSSRContext();
  var initialResults = ssrContext === null || ssrContext === void 0 ? void 0 : ssrContext.initialResults;
  var parentIndex = useIndexContext();
  var stableProps = useStableValue(props);
  var indexWidget = (0, import_react16.useMemo)(function() {
    return index_default(stableProps);
  }, [stableProps]);
  var helper = indexWidget.getHelper();
  var forceUpdate = useForceUpdate();
  useIsomorphicLayoutEffect(function() {
    forceUpdate();
  }, [helper, forceUpdate]);
  useWidget({
    widget: indexWidget,
    parentIndex,
    props: stableProps,
    shouldSsr: Boolean(serverContext || initialResults)
  });
  return indexWidget;
}

// node_modules/react-instantsearch-core/dist/es/components/Index.js
var _excluded4 = ["children"];
function _objectWithoutProperties4(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose4(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function Index(_ref) {
  var children = _ref.children, props = _objectWithoutProperties4(_ref, _excluded4);
  var index3 = useIndex(props);
  if (index3.getHelper() === null) {
    return null;
  }
  return /* @__PURE__ */ import_react17.default.createElement(IndexContext.Provider, {
    value: index3
  }, children);
}

// node_modules/react-instantsearch-core/dist/es/components/InstantSearch.js
var import_react19 = __toESM(require_react(), 1);

// node_modules/instantsearch.js/es/lib/InstantSearch.js
var import_events = __toESM(require_events(), 1);
var import_algoliasearch_helper3 = __toESM(require_algoliasearch_helper2(), 1);

// node_modules/instantsearch.js/es/lib/suit.js
var NAMESPACE = "ais";
var component = function component2(componentName) {
  return function() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, descendantName = _ref.descendantName, modifierName = _ref.modifierName;
    var descendent = descendantName ? "-".concat(descendantName) : "";
    var modifier = modifierName ? "--".concat(modifierName) : "";
    return "".concat(NAMESPACE, "-").concat(componentName).concat(descendent).concat(modifier);
  };
};

// node_modules/instantsearch.js/es/helpers/highlight.js
var suit = component("Highlight");
function highlight(_ref) {
  var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
  true ? _warning(false, "`instantsearch.highlight` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `Highlight` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates") : void 0;
  var highlightAttributeResult = getPropertyByPath(hit._highlightResult, attribute);
  true ? _warning(highlightAttributeResult, 'Could not enable highlight for "'.concat(attribute, '", will display an empty string.\nPlease check whether this attribute exists and is either searchable or specified in `attributesToHighlight`.\n\nSee: https://alg.li/highlighting\n')) : void 0;
  var _ref22 = highlightAttributeResult || {}, _ref2$value = _ref22.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value;
  var className = suit({
    descendantName: "highlighted"
  }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
  return attributeValue.replace(new RegExp(TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp(TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
}

// node_modules/instantsearch.js/es/helpers/reverseHighlight.js
var suit2 = component("ReverseHighlight");
function reverseHighlight(_ref) {
  var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
  true ? _warning(false, "`instantsearch.reverseHighlight` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `ReverseHighlight` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates") : void 0;
  var highlightAttributeResult = getPropertyByPath(hit._highlightResult, attribute);
  true ? _warning(highlightAttributeResult, 'Could not enable reverse highlight for "'.concat(attribute, '", will display an empty string.\nPlease check whether this attribute exists and is either searchable or specified in `attributesToHighlight`.\n\nSee: https://alg.li/highlighting\n')) : void 0;
  var _ref22 = highlightAttributeResult || {}, _ref2$value = _ref22.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value;
  var className = suit2({
    descendantName: "highlighted"
  }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
  var reverseHighlightedValue = concatHighlightedParts(reverseHighlightedParts(getHighlightedParts(attributeValue)));
  return reverseHighlightedValue.replace(new RegExp(TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp(TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
}

// node_modules/instantsearch.js/es/helpers/snippet.js
var suit3 = component("Snippet");
function snippet(_ref) {
  var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
  true ? _warning(false, "`instantsearch.snippet` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `Snippet` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates") : void 0;
  var snippetAttributeResult = getPropertyByPath(hit._snippetResult, attribute);
  true ? _warning(snippetAttributeResult, 'Could not enable snippet for "'.concat(attribute, '", will display an empty string.\nPlease check whether this attribute exists and is specified in `attributesToSnippet`.\n\nSee: https://alg.li/highlighting\n')) : void 0;
  var _ref22 = snippetAttributeResult || {}, _ref2$value = _ref22.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value;
  var className = suit3({
    descendantName: "highlighted"
  }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
  return attributeValue.replace(new RegExp(TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp(TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
}

// node_modules/instantsearch.js/es/helpers/reverseSnippet.js
var suit4 = component("ReverseSnippet");
function reverseSnippet(_ref) {
  var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
  true ? _warning(false, "`instantsearch.reverseSnippet` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `ReverseSnippet` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates") : void 0;
  var snippetAttributeResult = getPropertyByPath(hit._snippetResult, attribute);
  true ? _warning(snippetAttributeResult, 'Could not enable reverse snippet for "'.concat(attribute, '", will display an empty string.\nPlease check whether this attribute exists and is specified in `attributesToSnippet`.\n\nSee: https://alg.li/highlighting\n')) : void 0;
  var _ref22 = snippetAttributeResult || {}, _ref2$value = _ref22.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value;
  var className = suit4({
    descendantName: "highlighted"
  }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
  var reverseHighlightedValue = concatHighlightedParts(reverseHighlightedParts(getHighlightedParts(attributeValue)));
  return reverseHighlightedValue.replace(new RegExp(TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp(TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
}

// node_modules/instantsearch.js/es/helpers/insights.js
function _typeof13(obj) {
  "@babel/helpers - typeof";
  return _typeof13 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof13(obj);
}
function writeDataAttributes(_ref) {
  var method = _ref.method, payload = _ref.payload;
  if (_typeof13(payload) !== "object") {
    throw new Error("The insights helper expects the payload to be an object.");
  }
  var serializedPayload;
  try {
    serializedPayload = serializePayload(payload);
  } catch (error) {
    throw new Error("Could not JSON serialize the payload object.");
  }
  return 'data-insights-method="'.concat(method, '" data-insights-payload="').concat(serializedPayload, '"');
}
function insights(method, payload) {
  true ? _warning(false, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/") : void 0;
  return writeDataAttributes({
    method,
    payload
  });
}

// node_modules/instantsearch.js/es/helpers/get-insights-anonymous-user-token.js
function _typeof14(obj) {
  "@babel/helpers - typeof";
  return _typeof14 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof14(obj);
}
var ANONYMOUS_TOKEN_COOKIE_KEY = "_ALGOLIA";
function getCookie(name) {
  if ((typeof document === "undefined" ? "undefined" : _typeof14(document)) !== "object" || typeof document.cookie !== "string") {
    return void 0;
  }
  var prefix = "".concat(name, "=");
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(prefix) === 0) {
      return cookie.substring(prefix.length, cookie.length);
    }
  }
  return void 0;
}
function getInsightsAnonymousUserTokenInternal() {
  return getCookie(ANONYMOUS_TOKEN_COOKIE_KEY);
}

// node_modules/instantsearch.js/es/middlewares/createInsightsMiddleware.js
function _typeof15(obj) {
  "@babel/helpers - typeof";
  return _typeof15 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof15(obj);
}
function ownKeys11(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread11(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys11(Object(source), true).forEach(function(key) {
      _defineProperty11(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys11(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty11(obj, key, value) {
  key = _toPropertyKey11(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey11(arg) {
  var key = _toPrimitive11(arg, "string");
  return _typeof15(key) === "symbol" ? key : String(key);
}
function _toPrimitive11(input, hint) {
  if (_typeof15(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof15(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray7(arr, i) {
  return _arrayWithHoles7(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray8(arr, i) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit7(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s5, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s5 = _x.call(_i)).done) && (_arr.push(_s5.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles7(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray3(arr) {
  return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray8(arr) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray8(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray8(o, minLen);
}
function _iterableToArray3(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray8(arr);
}
function _arrayLikeToArray8(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var ALGOLIA_INSIGHTS_VERSION = "2.13.0";
var ALGOLIA_INSIGHTS_SRC = "https://cdn.jsdelivr.net/npm/search-insights@".concat(ALGOLIA_INSIGHTS_VERSION, "/dist/search-insights.min.js");
function createInsightsMiddleware() {
  var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _insightsClient = props.insightsClient, insightsInitParams = props.insightsInitParams, onEvent = props.onEvent, _props$$$internal = props.$$internal, $$internal = _props$$$internal === void 0 ? false : _props$$$internal, _props$$$automatic = props.$$automatic, $$automatic = _props$$$automatic === void 0 ? false : _props$$$automatic;
  var potentialInsightsClient = _insightsClient;
  if (!_insightsClient && _insightsClient !== null) {
    safelyRunOnBrowser(function(_ref) {
      var window2 = _ref.window;
      var pointer = window2.AlgoliaAnalyticsObject || "aa";
      if (typeof pointer === "string") {
        potentialInsightsClient = window2[pointer];
      }
      if (!potentialInsightsClient) {
        window2.AlgoliaAnalyticsObject = pointer;
        if (!window2[pointer]) {
          window2[pointer] = function() {
            if (!window2[pointer].queue) {
              window2[pointer].queue = [];
            }
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            window2[pointer].queue.push(args);
          };
          window2[pointer].version = ALGOLIA_INSIGHTS_VERSION;
          window2[pointer].shouldAddScript = true;
        }
        potentialInsightsClient = window2[pointer];
      }
    });
  }
  var insightsClient = potentialInsightsClient || noop;
  return function(_ref22) {
    var instantSearchInstance = _ref22.instantSearchInstance;
    var existingInsightsMiddlewares = instantSearchInstance.middleware.filter(function(m) {
      return m.instance.$$type === "ais.insights" && m.instance.$$internal;
    }).map(function(m) {
      return m.creator;
    });
    instantSearchInstance.unuse.apply(instantSearchInstance, _toConsumableArray3(existingInsightsMiddlewares));
    var _getAppIdAndApiKey = getAppIdAndApiKey(instantSearchInstance.client), _getAppIdAndApiKey2 = _slicedToArray7(_getAppIdAndApiKey, 2), appId = _getAppIdAndApiKey2[0], apiKey = _getAppIdAndApiKey2[1];
    true ? _warning(Boolean(appId && apiKey), "could not extract Algolia credentials from searchClient in insights middleware.") : void 0;
    var queuedUserToken = void 0;
    var userTokenBeforeInit = void 0;
    if (Array.isArray(insightsClient.queue)) {
      var _ref3 = find(insightsClient.queue.slice().reverse(), function(_ref5) {
        var _ref62 = _slicedToArray7(_ref5, 1), method = _ref62[0];
        return method === "setUserToken";
      }) || [];
      var _ref42 = _slicedToArray7(_ref3, 2);
      queuedUserToken = _ref42[1];
    }
    insightsClient("getUserToken", null, function(_error, userToken) {
      userTokenBeforeInit = normalizeUserToken(userToken);
    });
    if (insightsInitParams || !isModernInsightsClient(insightsClient)) {
      insightsClient("init", _objectSpread11({
        appId,
        apiKey,
        partial: true
      }, insightsInitParams));
    }
    var initialParameters;
    var helper;
    return {
      $$type: "ais.insights",
      $$internal,
      $$automatic,
      onStateChange: function onStateChange() {
      },
      subscribe: function subscribe() {
        if (!insightsClient.shouldAddScript)
          return;
        var errorMessage = "[insights middleware]: could not load search-insights.js. Please load it manually following https://alg.li/insights-init";
        try {
          var script = document.createElement("script");
          script.async = true;
          script.src = ALGOLIA_INSIGHTS_SRC;
          script.onerror = function() {
            instantSearchInstance.emit("error", new Error(errorMessage));
          };
          document.body.appendChild(script);
          insightsClient.shouldAddScript = false;
        } catch (cause) {
          insightsClient.shouldAddScript = false;
          instantSearchInstance.emit("error", new Error(errorMessage));
        }
      },
      started: function started() {
        insightsClient("addAlgoliaAgent", "insights-middleware");
        helper = instantSearchInstance.mainHelper;
        initialParameters = {
          userToken: helper.state.userToken,
          clickAnalytics: helper.state.clickAnalytics
        };
        if (!$$automatic) {
          helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread11(_objectSpread11({}, helper.state), {}, {
            clickAnalytics: true
          }));
        }
        if (!$$internal) {
          instantSearchInstance.scheduleSearch();
        }
        var setUserTokenToSearch = function setUserTokenToSearch2(userToken) {
          var immediate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          var normalizedUserToken = normalizeUserToken(userToken);
          if (!normalizedUserToken) {
            return;
          }
          var existingToken = helper.state.userToken;
          function applyToken() {
            helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread11(_objectSpread11({}, helper.state), {}, {
              userToken: normalizedUserToken
            }));
            if (existingToken && existingToken !== userToken) {
              instantSearchInstance.scheduleSearch();
            }
          }
          if (!immediate) {
            setTimeout(applyToken, 0);
          } else {
            applyToken();
          }
        };
        var anonymousUserToken = getInsightsAnonymousUserTokenInternal();
        if (anonymousUserToken) {
          setUserTokenToSearch(anonymousUserToken, true);
        }
        if (userTokenBeforeInit) {
          setUserTokenToSearch(userTokenBeforeInit, true);
          insightsClient("setUserToken", userTokenBeforeInit);
        } else if (queuedUserToken) {
          setUserTokenToSearch(queuedUserToken, true);
          insightsClient("setUserToken", queuedUserToken);
        }
        insightsClient("onUserTokenChange", setUserTokenToSearch, {
          immediate: true
        });
        var insightsClientWithLocalCredentials = insightsClient;
        if (isModernInsightsClient(insightsClient)) {
          insightsClientWithLocalCredentials = function insightsClientWithLocalCredentials2(method, payload) {
            var extraParams = {
              headers: {
                "X-Algolia-Application-Id": appId,
                "X-Algolia-API-Key": apiKey
              }
            };
            return insightsClient(method, payload, extraParams);
          };
        }
        instantSearchInstance.sendEventToInsights = function(event) {
          if (onEvent) {
            onEvent(event, insightsClientWithLocalCredentials);
          } else if (event.insightsMethod) {
            event.payload.algoliaSource = ["instantsearch"];
            if ($$automatic) {
              event.payload.algoliaSource.push("instantsearch-automatic");
            }
            if (event.eventModifier === "internal") {
              event.payload.algoliaSource.push("instantsearch-internal");
            }
            insightsClientWithLocalCredentials(event.insightsMethod, event.payload);
            true ? _warning(Boolean(helper.state.userToken), "\nCannot send event to Algolia Insights because `userToken` is not set.\n\nSee documentation: https://www.algolia.com/doc/guides/building-search-ui/going-further/send-insights-events/js/#setting-the-usertoken\n") : void 0;
          } else {
            true ? _warning(false, "Cannot send event to Algolia Insights because `insightsMethod` option is missing.") : void 0;
          }
        };
      },
      unsubscribe: function unsubscribe() {
        insightsClient("onUserTokenChange", void 0);
        instantSearchInstance.sendEventToInsights = noop;
        if (helper && initialParameters) {
          helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread11(_objectSpread11({}, helper.state), initialParameters));
          instantSearchInstance.scheduleSearch();
        }
      }
    };
  };
}
function isModernInsightsClient(client) {
  var _split$map = (client.version || "").split(".").map(Number), _split$map2 = _slicedToArray7(_split$map, 2), major = _split$map2[0], minor = _split$map2[1];
  var v3 = major >= 3;
  var v2_6 = major === 2 && minor >= 6;
  var v1_10 = major === 1 && minor >= 10;
  return v3 || v2_6 || v1_10;
}
function normalizeUserToken(userToken) {
  if (!userToken) {
    return void 0;
  }
  return typeof userToken === "number" ? userToken.toString() : userToken;
}

// node_modules/instantsearch.js/es/middlewares/createMetadataMiddleware.js
function extractWidgetPayload(widgets, instantSearchInstance, payload) {
  var initOptions = createInitArgs(instantSearchInstance, instantSearchInstance.mainIndex, instantSearchInstance._initialUiState);
  widgets.forEach(function(widget) {
    var widgetParams = {};
    if (widget.getWidgetRenderState) {
      var renderState = widget.getWidgetRenderState(initOptions);
      if (renderState && renderState.widgetParams) {
        widgetParams = renderState.widgetParams;
      }
    }
    var params = Object.keys(widgetParams).filter(function(key) {
      return widgetParams[key] !== void 0;
    });
    payload.widgets.push({
      type: widget.$$type,
      widgetType: widget.$$widgetType,
      params
    });
    if (widget.$$type === "ais.index") {
      extractWidgetPayload(widget.getWidgets(), instantSearchInstance, payload);
    }
  });
}
function isMetadataEnabled() {
  return safelyRunOnBrowser(function(_ref) {
    var _window$navigator, _window$navigator$use;
    var window2 = _ref.window;
    return ((_window$navigator = window2.navigator) === null || _window$navigator === void 0 ? void 0 : (_window$navigator$use = _window$navigator.userAgent) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.indexOf("Algolia Crawler")) > -1;
  }, {
    fallback: function fallback() {
      return false;
    }
  });
}
function createMetadataMiddleware() {
  var _ref22 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$$$internal = _ref22.$$internal, $$internal = _ref2$$$internal === void 0 ? false : _ref2$$$internal;
  return function(_ref3) {
    var instantSearchInstance = _ref3.instantSearchInstance;
    var payload = {
      widgets: []
    };
    var payloadContainer = document.createElement("meta");
    var refNode = document.querySelector("head");
    payloadContainer.name = "instantsearch:widgets";
    return {
      $$type: "ais.metadata",
      $$internal,
      onStateChange: function onStateChange() {
      },
      subscribe: function subscribe() {
        setTimeout(function() {
          var client = instantSearchInstance.client;
          payload.ua = client.transporter && client.transporter.userAgent ? client.transporter.userAgent.value : client._ua;
          extractWidgetPayload(instantSearchInstance.mainIndex.getWidgets(), instantSearchInstance, payload);
          instantSearchInstance.middleware.forEach(function(middleware) {
            return payload.widgets.push({
              middleware: true,
              type: middleware.instance.$$type,
              internal: middleware.instance.$$internal
            });
          });
          payloadContainer.content = JSON.stringify(payload);
          refNode.appendChild(payloadContainer);
        }, 0);
      },
      started: function started() {
      },
      unsubscribe: function unsubscribe() {
        payloadContainer.remove();
      }
    };
  };
}

// node_modules/instantsearch.js/es/lib/routers/history.js
var import_qs = __toESM(require_lib(), 1);
function _typeof16(obj) {
  "@babel/helpers - typeof";
  return _typeof16 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof16(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey12(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _defineProperty12(obj, key, value) {
  key = _toPropertyKey12(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey12(arg) {
  var key = _toPrimitive12(arg, "string");
  return _typeof16(key) === "symbol" ? key : String(key);
}
function _toPrimitive12(input, hint) {
  if (_typeof16(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof16(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var setWindowTitle = function setWindowTitle2(title) {
  if (title) {
    window.document.title = title;
  }
};
var BrowserHistory = /* @__PURE__ */ function() {
  function BrowserHistory2(_ref) {
    var _this = this;
    var windowTitle = _ref.windowTitle, _ref$writeDelay = _ref.writeDelay, writeDelay = _ref$writeDelay === void 0 ? 400 : _ref$writeDelay, createURL = _ref.createURL, parseURL = _ref.parseURL, getLocation = _ref.getLocation, start = _ref.start, dispose = _ref.dispose, push = _ref.push, cleanUrlOnDispose = _ref.cleanUrlOnDispose;
    _classCallCheck(this, BrowserHistory2);
    _defineProperty12(this, "$$type", "ais.browser");
    _defineProperty12(this, "windowTitle", void 0);
    _defineProperty12(this, "writeDelay", void 0);
    _defineProperty12(this, "_createURL", void 0);
    _defineProperty12(this, "parseURL", void 0);
    _defineProperty12(this, "getLocation", void 0);
    _defineProperty12(this, "writeTimer", void 0);
    _defineProperty12(this, "_onPopState", void 0);
    _defineProperty12(this, "inPopState", false);
    _defineProperty12(this, "isDisposed", false);
    _defineProperty12(this, "latestAcknowledgedHistory", 0);
    _defineProperty12(this, "_start", void 0);
    _defineProperty12(this, "_dispose", void 0);
    _defineProperty12(this, "_push", void 0);
    _defineProperty12(this, "_cleanUrlOnDispose", void 0);
    this.windowTitle = windowTitle;
    this.writeTimer = void 0;
    this.writeDelay = writeDelay;
    this._createURL = createURL;
    this.parseURL = parseURL;
    this.getLocation = getLocation;
    this._start = start;
    this._dispose = dispose;
    this._push = push;
    this._cleanUrlOnDispose = typeof cleanUrlOnDispose === "undefined" ? true : cleanUrlOnDispose;
    if (typeof cleanUrlOnDispose === "undefined") {
      console.info("Starting from the next major version, InstantSearch will not clean up the URL from active refinements when it is disposed.\n\nWe recommend setting `cleanUrlOnDispose` to false to adopt this change today.\nTo stay with the current behaviour and remove this warning, set the option to true.\n\nSee documentation: ".concat(createDocumentationLink({
        name: "history-router"
      }), "#widget-param-cleanurlondispose"));
    }
    safelyRunOnBrowser(function(_ref22) {
      var window2 = _ref22.window;
      var title = _this.windowTitle && _this.windowTitle(_this.read());
      setWindowTitle(title);
      _this.latestAcknowledgedHistory = window2.history.length;
    });
  }
  _createClass(BrowserHistory2, [{
    key: "read",
    value: function read() {
      return this.parseURL({
        qsModule: import_qs.default,
        location: this.getLocation()
      });
    }
    /**
     * Pushes a search state into the URL.
     */
  }, {
    key: "write",
    value: function write(routeState) {
      var _this2 = this;
      safelyRunOnBrowser(function(_ref3) {
        var window2 = _ref3.window;
        var url = _this2.createURL(routeState);
        var title = _this2.windowTitle && _this2.windowTitle(routeState);
        if (_this2.writeTimer) {
          clearTimeout(_this2.writeTimer);
        }
        _this2.writeTimer = setTimeout(function() {
          setWindowTitle(title);
          if (_this2.shouldWrite(url)) {
            if (_this2._push) {
              _this2._push(url);
            } else {
              window2.history.pushState(routeState, title || "", url);
            }
            _this2.latestAcknowledgedHistory = window2.history.length;
          }
          _this2.inPopState = false;
          _this2.writeTimer = void 0;
        }, _this2.writeDelay);
      });
    }
    /**
     * Sets a callback on the `onpopstate` event of the history API of the current page.
     * It enables the URL sync to keep track of the changes.
     */
  }, {
    key: "onUpdate",
    value: function onUpdate(callback) {
      var _this3 = this;
      if (this._start) {
        this._start(function() {
          callback(_this3.read());
        });
      }
      this._onPopState = function() {
        if (_this3.writeTimer) {
          clearTimeout(_this3.writeTimer);
          _this3.writeTimer = void 0;
        }
        _this3.inPopState = true;
        callback(_this3.read());
      };
      safelyRunOnBrowser(function(_ref42) {
        var window2 = _ref42.window;
        window2.addEventListener("popstate", _this3._onPopState);
      });
    }
    /**
     * Creates a complete URL from a given syncable UI state.
     *
     * It always generates the full URL, not a relative one.
     * This allows to handle cases like using a <base href>.
     * See: https://github.com/algolia/instantsearch/issues/790
     */
  }, {
    key: "createURL",
    value: function createURL(routeState) {
      var url = this._createURL({
        qsModule: import_qs.default,
        routeState,
        location: this.getLocation()
      });
      if (true) {
        try {
          new URL(url);
        } catch (e) {
          true ? _warning(false, "The URL returned by the `createURL` function is invalid.\nPlease make sure it returns an absolute URL to avoid issues, e.g: `https://algolia.com/search?query=iphone`.") : void 0;
        }
      }
      return url;
    }
    /**
     * Removes the event listener and cleans up the URL.
     */
  }, {
    key: "dispose",
    value: function dispose() {
      var _this4 = this;
      if (this._dispose) {
        this._dispose();
      }
      this.isDisposed = true;
      safelyRunOnBrowser(function(_ref5) {
        var window2 = _ref5.window;
        if (_this4._onPopState) {
          window2.removeEventListener("popstate", _this4._onPopState);
        }
      });
      if (this.writeTimer) {
        clearTimeout(this.writeTimer);
      }
      if (this._cleanUrlOnDispose) {
        this.write({});
      }
    }
  }, {
    key: "start",
    value: function start() {
      this.isDisposed = false;
    }
  }, {
    key: "shouldWrite",
    value: function shouldWrite(url) {
      var _this5 = this;
      return safelyRunOnBrowser(function(_ref62) {
        var window2 = _ref62.window;
        var lastPushWasByISAfterDispose = !(_this5.isDisposed && _this5.latestAcknowledgedHistory !== window2.history.length);
        return (
          // When the last state change was through popstate, the IS.js state changes,
          // but that should not write the URL.
          !_this5.inPopState && // When the previous pushState after dispose was by IS.js, we want to write the URL.
          lastPushWasByISAfterDispose && // When the URL is the same as the current one, we do not want to write it.
          url !== window2.location.href
        );
      });
    }
  }]);
  return BrowserHistory2;
}();
function historyRouter() {
  var _ref7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref7$createURL = _ref7.createURL, createURL = _ref7$createURL === void 0 ? function(_ref8) {
    var qsModule = _ref8.qsModule, routeState = _ref8.routeState, location = _ref8.location;
    var protocol = location.protocol, hostname = location.hostname, _location$port = location.port, port = _location$port === void 0 ? "" : _location$port, pathname = location.pathname, hash = location.hash;
    var queryString = qsModule.stringify(routeState);
    var portWithPrefix = port === "" ? "" : ":".concat(port);
    if (!queryString) {
      return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname).concat(hash);
    }
    return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname, "?").concat(queryString).concat(hash);
  } : _ref7$createURL, _ref7$parseURL = _ref7.parseURL, parseURL = _ref7$parseURL === void 0 ? function(_ref9) {
    var qsModule = _ref9.qsModule, location = _ref9.location;
    return qsModule.parse(location.search.slice(1), {
      arrayLimit: 99
    });
  } : _ref7$parseURL, _ref7$writeDelay = _ref7.writeDelay, writeDelay = _ref7$writeDelay === void 0 ? 400 : _ref7$writeDelay, windowTitle = _ref7.windowTitle, _ref7$getLocation = _ref7.getLocation, getLocation = _ref7$getLocation === void 0 ? function() {
    return safelyRunOnBrowser(function(_ref10) {
      var window2 = _ref10.window;
      return window2.location;
    }, {
      fallback: function fallback() {
        throw new Error("You need to provide `getLocation` to the `history` router in environments where `window` does not exist.");
      }
    });
  } : _ref7$getLocation, start = _ref7.start, dispose = _ref7.dispose, push = _ref7.push, cleanUrlOnDispose = _ref7.cleanUrlOnDispose;
  return new BrowserHistory({
    createURL,
    parseURL,
    writeDelay,
    windowTitle,
    getLocation,
    start,
    dispose,
    push,
    cleanUrlOnDispose
  });
}

// node_modules/instantsearch.js/es/lib/stateMappings/simple.js
function _typeof17(obj) {
  "@babel/helpers - typeof";
  return _typeof17 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof17(obj);
}
var _excluded5 = ["configure"];
function ownKeys12(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread12(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys12(Object(source), true).forEach(function(key) {
      _defineProperty13(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys12(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty13(obj, key, value) {
  key = _toPropertyKey13(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey13(arg) {
  var key = _toPrimitive13(arg, "string");
  return _typeof17(key) === "symbol" ? key : String(key);
}
function _toPrimitive13(input, hint) {
  if (_typeof17(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof17(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _objectWithoutProperties5(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose5(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose5(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function getIndexStateWithoutConfigure(uiState) {
  var configure = uiState.configure, trackedUiState = _objectWithoutProperties5(uiState, _excluded5);
  return trackedUiState;
}
function simpleStateMapping() {
  return {
    $$type: "ais.simple",
    stateToRoute: function stateToRoute(uiState) {
      return Object.keys(uiState).reduce(function(state, indexId) {
        return _objectSpread12(_objectSpread12({}, state), {}, _defineProperty13({}, indexId, getIndexStateWithoutConfigure(uiState[indexId])));
      }, {});
    },
    routeToState: function routeToState() {
      var routeState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Object.keys(routeState).reduce(function(state, indexId) {
        return _objectSpread12(_objectSpread12({}, state), {}, _defineProperty13({}, indexId, getIndexStateWithoutConfigure(routeState[indexId])));
      }, {});
    }
  };
}

// node_modules/instantsearch.js/es/middlewares/createRouterMiddleware.js
function _typeof18(obj) {
  "@babel/helpers - typeof";
  return _typeof18 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof18(obj);
}
function ownKeys13(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread13(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys13(Object(source), true).forEach(function(key) {
      _defineProperty14(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys13(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty14(obj, key, value) {
  key = _toPropertyKey14(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey14(arg) {
  var key = _toPrimitive14(arg, "string");
  return _typeof18(key) === "symbol" ? key : String(key);
}
function _toPrimitive14(input, hint) {
  if (_typeof18(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof18(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var createRouterMiddleware = function createRouterMiddleware2() {
  var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _props$router = props.router, router = _props$router === void 0 ? historyRouter() : _props$router, _props$stateMapping = props.stateMapping, stateMapping = _props$stateMapping === void 0 ? simpleStateMapping() : _props$stateMapping, _props$$$internal = props.$$internal, $$internal = _props$$$internal === void 0 ? false : _props$$$internal;
  return function(_ref) {
    var instantSearchInstance = _ref.instantSearchInstance;
    function topLevelCreateURL(nextState) {
      var previousUiState = (
        // If only the mainIndex is initialized, we don't yet know what other
        // index widgets are used. Therefore we fall back to the initialUiState.
        // We can't indiscriminately use the initialUiState because then we
        // reintroduce state that was changed by the user.
        // When there are no widgets, we are sure the user can't yet have made
        // any changes.
        instantSearchInstance.mainIndex.getWidgets().length === 0 ? instantSearchInstance._initialUiState : instantSearchInstance.mainIndex.getWidgetUiState({})
      );
      var uiState = Object.keys(nextState).reduce(function(acc, indexId) {
        return _objectSpread13(_objectSpread13({}, acc), {}, _defineProperty14({}, indexId, nextState[indexId]));
      }, previousUiState);
      var route = stateMapping.stateToRoute(uiState);
      return router.createURL(route);
    }
    instantSearchInstance._createURL = topLevelCreateURL;
    var lastRouteState = void 0;
    var initialUiState = instantSearchInstance._initialUiState;
    return {
      $$type: "ais.router({router:".concat(router.$$type || "__unknown__", ", stateMapping:").concat(stateMapping.$$type || "__unknown__", "})"),
      $$internal,
      onStateChange: function onStateChange(_ref22) {
        var uiState = _ref22.uiState;
        var routeState = stateMapping.stateToRoute(uiState);
        if (lastRouteState === void 0 || !isEqual(lastRouteState, routeState)) {
          router.write(routeState);
          lastRouteState = routeState;
        }
      },
      subscribe: function subscribe() {
        instantSearchInstance._initialUiState = _objectSpread13(_objectSpread13({}, initialUiState), stateMapping.routeToState(router.read()));
        router.onUpdate(function(route) {
          if (instantSearchInstance.mainIndex.getWidgets().length > 0) {
            instantSearchInstance.setUiState(stateMapping.routeToState(route));
          }
        });
      },
      started: function started() {
        var _router$start;
        (_router$start = router.start) === null || _router$start === void 0 ? void 0 : _router$start.call(router);
      },
      unsubscribe: function unsubscribe() {
        router.dispose();
      }
    };
  };
};

// node_modules/instantsearch.js/es/lib/formatNumber.js
function formatNumber(value, numberLocale) {
  return value.toLocaleString(numberLocale);
}

// node_modules/instantsearch.js/es/lib/createHelpers.js
function _typeof19(obj) {
  "@babel/helpers - typeof";
  return _typeof19 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof19(obj);
}
function ownKeys14(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread14(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys14(Object(source), true).forEach(function(key) {
      _defineProperty15(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys14(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty15(obj, key, value) {
  key = _toPropertyKey15(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey15(arg) {
  var key = _toPrimitive15(arg, "string");
  return _typeof19(key) === "symbol" ? key : String(key);
}
function _toPrimitive15(input, hint) {
  if (_typeof19(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof19(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function hoganHelpers(_ref) {
  var numberLocale = _ref.numberLocale;
  return {
    formatNumber: function formatNumber2(value, render) {
      return formatNumber(Number(render(value)), numberLocale);
    },
    highlight: function highlight2(options, render) {
      try {
        var highlightOptions = JSON.parse(options);
        return render(highlight(_objectSpread14(_objectSpread14({}, highlightOptions), {}, {
          hit: this
        })));
      } catch (error) {
        throw new Error('\nThe highlight helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
      }
    },
    reverseHighlight: function reverseHighlight2(options, render) {
      try {
        var reverseHighlightOptions = JSON.parse(options);
        return render(reverseHighlight(_objectSpread14(_objectSpread14({}, reverseHighlightOptions), {}, {
          hit: this
        })));
      } catch (error) {
        throw new Error('\n  The reverseHighlight helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }');
      }
    },
    snippet: function snippet2(options, render) {
      try {
        var snippetOptions = JSON.parse(options);
        return render(snippet(_objectSpread14(_objectSpread14({}, snippetOptions), {}, {
          hit: this
        })));
      } catch (error) {
        throw new Error('\nThe snippet helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
      }
    },
    reverseSnippet: function reverseSnippet2(options, render) {
      try {
        var reverseSnippetOptions = JSON.parse(options);
        return render(reverseSnippet(_objectSpread14(_objectSpread14({}, reverseSnippetOptions), {}, {
          hit: this
        })));
      } catch (error) {
        throw new Error('\n  The reverseSnippet helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }');
      }
    },
    insights: function insights2(options, render) {
      try {
        var _JSON$parse = JSON.parse(options), method = _JSON$parse.method, payload = _JSON$parse.payload;
        return render(insights(method, _objectSpread14({
          objectIDs: [this.objectID]
        }, payload)));
      } catch (error) {
        throw new Error('\nThe insights helper expects a JSON object of the format:\n{ "method": "method-name", "payload": { "eventName": "name of the event" } }');
      }
    }
  };
}

// node_modules/instantsearch.js/es/lib/version.js
var version_default2 = "4.63.0";

// node_modules/instantsearch.js/es/lib/InstantSearch.js
function _typeof20(obj) {
  "@babel/helpers - typeof";
  return _typeof20 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof20(obj);
}
function ownKeys15(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread15(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys15(Object(source), true).forEach(function(key) {
      _defineProperty16(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys15(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey16(descriptor.key), descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof20(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _defineProperty16(obj, key, value) {
  key = _toPropertyKey16(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey16(arg) {
  var key = _toPrimitive16(arg, "string");
  return _typeof20(key) === "symbol" ? key : String(key);
}
function _toPrimitive16(input, hint) {
  if (_typeof20(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof20(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var withUsage2 = createDocumentationMessageGenerator({
  name: "instantsearch"
});
function defaultCreateURL() {
  return "#";
}
var INSTANTSEARCH_FUTURE_DEFAULTS = {
  preserveSharedStateOnUnmount: false,
  persistHierarchicalRootCount: false
};
var InstantSearch = /* @__PURE__ */ function(_EventEmitter) {
  _inherits(InstantSearch3, _EventEmitter);
  var _super = _createSuper(InstantSearch3);
  function InstantSearch3(options) {
    var _options$future2;
    var _this;
    _classCallCheck2(this, InstantSearch3);
    _this = _super.call(this);
    _defineProperty16(_assertThisInitialized(_this), "client", void 0);
    _defineProperty16(_assertThisInitialized(_this), "indexName", void 0);
    _defineProperty16(_assertThisInitialized(_this), "insightsClient", void 0);
    _defineProperty16(_assertThisInitialized(_this), "onStateChange", null);
    _defineProperty16(_assertThisInitialized(_this), "future", void 0);
    _defineProperty16(_assertThisInitialized(_this), "helper", void 0);
    _defineProperty16(_assertThisInitialized(_this), "mainHelper", void 0);
    _defineProperty16(_assertThisInitialized(_this), "mainIndex", void 0);
    _defineProperty16(_assertThisInitialized(_this), "started", void 0);
    _defineProperty16(_assertThisInitialized(_this), "templatesConfig", void 0);
    _defineProperty16(_assertThisInitialized(_this), "renderState", {});
    _defineProperty16(_assertThisInitialized(_this), "_stalledSearchDelay", void 0);
    _defineProperty16(_assertThisInitialized(_this), "_searchStalledTimer", void 0);
    _defineProperty16(_assertThisInitialized(_this), "_initialUiState", void 0);
    _defineProperty16(_assertThisInitialized(_this), "_initialResults", void 0);
    _defineProperty16(_assertThisInitialized(_this), "_createURL", void 0);
    _defineProperty16(_assertThisInitialized(_this), "_searchFunction", void 0);
    _defineProperty16(_assertThisInitialized(_this), "_mainHelperSearch", void 0);
    _defineProperty16(_assertThisInitialized(_this), "_insights", void 0);
    _defineProperty16(_assertThisInitialized(_this), "middleware", []);
    _defineProperty16(_assertThisInitialized(_this), "sendEventToInsights", void 0);
    _defineProperty16(_assertThisInitialized(_this), "status", "idle");
    _defineProperty16(_assertThisInitialized(_this), "error", void 0);
    _defineProperty16(_assertThisInitialized(_this), "scheduleSearch", defer(function() {
      if (_this.started) {
        _this.mainHelper.search();
      }
    }));
    _defineProperty16(_assertThisInitialized(_this), "scheduleRender", defer(function() {
      var _this$mainHelper;
      var shouldResetStatus = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      if (!((_this$mainHelper = _this.mainHelper) !== null && _this$mainHelper !== void 0 && _this$mainHelper.hasPendingRequests())) {
        clearTimeout(_this._searchStalledTimer);
        _this._searchStalledTimer = null;
        if (shouldResetStatus) {
          _this.status = "idle";
          _this.error = void 0;
        }
      }
      _this.mainIndex.render({
        instantSearchInstance: _assertThisInitialized(_this)
      });
      _this.emit("render");
    }));
    _defineProperty16(_assertThisInitialized(_this), "onInternalStateChange", defer(function() {
      var nextUiState = _this.mainIndex.getWidgetUiState({});
      _this.middleware.forEach(function(_ref) {
        var instance = _ref.instance;
        instance.onStateChange({
          uiState: nextUiState
        });
      });
    }));
    _this.setMaxListeners(100);
    var _options$indexName = options.indexName, indexName = _options$indexName === void 0 ? "" : _options$indexName, numberLocale = options.numberLocale, _options$initialUiSta = options.initialUiState, initialUiState = _options$initialUiSta === void 0 ? {} : _options$initialUiSta, _options$routing = options.routing, routing = _options$routing === void 0 ? null : _options$routing, _options$insights = options.insights, insights2 = _options$insights === void 0 ? void 0 : _options$insights, searchFunction = options.searchFunction, _options$stalledSearc = options.stalledSearchDelay, stalledSearchDelay = _options$stalledSearc === void 0 ? 200 : _options$stalledSearc, _options$searchClient = options.searchClient, searchClient2 = _options$searchClient === void 0 ? null : _options$searchClient, _options$insightsClie = options.insightsClient, insightsClient = _options$insightsClie === void 0 ? null : _options$insightsClie, _options$onStateChang = options.onStateChange, onStateChange = _options$onStateChang === void 0 ? null : _options$onStateChang, _options$future = options.future, future = _options$future === void 0 ? _objectSpread15(_objectSpread15({}, INSTANTSEARCH_FUTURE_DEFAULTS), options.future || {}) : _options$future;
    if (searchClient2 === null) {
      throw new Error(withUsage2("The `searchClient` option is required."));
    }
    if (typeof searchClient2.search !== "function") {
      throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
    }
    if (typeof searchClient2.addAlgoliaAgent === "function") {
      searchClient2.addAlgoliaAgent("instantsearch.js (".concat(version_default2, ")"));
    }
    true ? _warning(insightsClient === null, "`insightsClient` property has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/") : void 0;
    if (insightsClient && typeof insightsClient !== "function") {
      throw new Error(withUsage2("The `insightsClient` option should be a function."));
    }
    true ? _warning(!options.searchParameters, "The `searchParameters` option is deprecated and will not be supported in InstantSearch.js 4.x.\n\nYou can replace it with the `configure` widget:\n\n```\nsearch.addWidgets([\n  configure(".concat(JSON.stringify(options.searchParameters, null, 2), ")\n]);\n```\n\nSee ").concat(createDocumentationLink({
      name: "configure"
    }))) : void 0;
    if (((_options$future2 = options.future) === null || _options$future2 === void 0 ? void 0 : _options$future2.preserveSharedStateOnUnmount) === void 0) {
      console.info("Starting from the next major version, InstantSearch will change how widgets state is preserved when they are removed. InstantSearch will keep the state of unmounted widgets to be usable by other widgets with the same attribute.\n\nWe recommend setting `future.preserveSharedStateOnUnmount` to true to adopt this change today.\nTo stay with the current behaviour and remove this warning, set the option to false.\n\nSee documentation: ".concat(createDocumentationLink({
        name: "instantsearch"
      }), "#widget-param-future\n          "));
    }
    _this.client = searchClient2;
    _this.future = future;
    _this.insightsClient = insightsClient;
    _this.indexName = indexName;
    _this.helper = null;
    _this.mainHelper = null;
    _this.mainIndex = index_default({
      indexName
    });
    _this.onStateChange = onStateChange;
    _this.started = false;
    _this.templatesConfig = {
      helpers: hoganHelpers({
        numberLocale
      }),
      compileOptions: {}
    };
    _this._stalledSearchDelay = stalledSearchDelay;
    _this._searchStalledTimer = null;
    _this._createURL = defaultCreateURL;
    _this._initialUiState = initialUiState;
    _this._initialResults = null;
    _this._insights = insights2;
    if (searchFunction) {
      true ? _warning(false, "The `searchFunction` option is deprecated. Use `onStateChange` instead.") : void 0;
      _this._searchFunction = searchFunction;
    }
    _this.sendEventToInsights = noop;
    if (routing) {
      var routerOptions = typeof routing === "boolean" ? {} : routing;
      routerOptions.$$internal = true;
      _this.use(createRouterMiddleware(routerOptions));
    }
    if (insights2) {
      var insightsOptions = typeof insights2 === "boolean" ? {} : insights2;
      insightsOptions.$$internal = true;
      _this.use(createInsightsMiddleware(insightsOptions));
    }
    if (isMetadataEnabled()) {
      _this.use(createMetadataMiddleware({
        $$internal: true
      }));
    }
    return _this;
  }
  _createClass2(InstantSearch3, [{
    key: "_isSearchStalled",
    get: (
      /**
       * @deprecated use `status === 'stalled'` instead
       */
      function get() {
        true ? _warning(false, '`InstantSearch._isSearchStalled` is deprecated and will be removed in InstantSearch.js 5.0.\n\nUse `InstantSearch.status === "stalled"` instead.') : void 0;
        return this.status === "stalled";
      }
    )
  }, {
    key: "use",
    value: function use2() {
      var _this2 = this;
      for (var _len = arguments.length, middleware = new Array(_len), _key = 0; _key < _len; _key++) {
        middleware[_key] = arguments[_key];
      }
      var newMiddlewareList = middleware.map(function(fn) {
        var newMiddleware = _objectSpread15({
          $$type: "__unknown__",
          $$internal: false,
          subscribe: noop,
          started: noop,
          unsubscribe: noop,
          onStateChange: noop
        }, fn({
          instantSearchInstance: _this2
        }));
        _this2.middleware.push({
          creator: fn,
          instance: newMiddleware
        });
        return newMiddleware;
      });
      if (this.started) {
        newMiddlewareList.forEach(function(m) {
          m.subscribe();
          m.started();
        });
      }
      return this;
    }
    /**
     * Removes a middleware from the InstantSearch lifecycle.
     */
  }, {
    key: "unuse",
    value: function unuse() {
      for (var _len2 = arguments.length, middlewareToUnuse = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        middlewareToUnuse[_key2] = arguments[_key2];
      }
      this.middleware.filter(function(m) {
        return middlewareToUnuse.includes(m.creator);
      }).forEach(function(m) {
        return m.instance.unsubscribe();
      });
      this.middleware = this.middleware.filter(function(m) {
        return !middlewareToUnuse.includes(m.creator);
      });
      return this;
    }
    // @major we shipped with EXPERIMENTAL_use, but have changed that to just `use` now
  }, {
    key: "EXPERIMENTAL_use",
    value: function EXPERIMENTAL_use() {
      true ? _warning(false, "The middleware API is now considered stable, so we recommend replacing `EXPERIMENTAL_use` with `use` before upgrading to the next major version.") : void 0;
      return this.use.apply(this, arguments);
    }
    /**
     * Adds a widget to the search instance.
     * A widget can be added either before or after InstantSearch has started.
     * @param widget The widget to add to InstantSearch.
     *
     * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`.
     */
  }, {
    key: "addWidget",
    value: function addWidget(widget) {
      true ? _warning(false, "addWidget will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`") : void 0;
      return this.addWidgets([widget]);
    }
    /**
     * Adds multiple widgets to the search instance.
     * Widgets can be added either before or after InstantSearch has started.
     * @param widgets The array of widgets to add to InstantSearch.
     */
  }, {
    key: "addWidgets",
    value: function addWidgets(widgets) {
      if (!Array.isArray(widgets)) {
        throw new Error(withUsage2("The `addWidgets` method expects an array of widgets. Please use `addWidget`."));
      }
      if (widgets.some(function(widget) {
        return typeof widget.init !== "function" && typeof widget.render !== "function";
      })) {
        throw new Error(withUsage2("The widget definition expects a `render` and/or an `init` method."));
      }
      this.mainIndex.addWidgets(widgets);
      return this;
    }
    /**
     * Removes a widget from the search instance.
     * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`
     * @param widget The widget instance to remove from InstantSearch.
     *
     * The widget must implement a `dispose()` method to clear its state.
     */
  }, {
    key: "removeWidget",
    value: function removeWidget(widget) {
      true ? _warning(false, "removeWidget will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`") : void 0;
      return this.removeWidgets([widget]);
    }
    /**
     * Removes multiple widgets from the search instance.
     * @param widgets Array of widgets instances to remove from InstantSearch.
     *
     * The widgets must implement a `dispose()` method to clear their states.
     */
  }, {
    key: "removeWidgets",
    value: function removeWidgets(widgets) {
      if (!Array.isArray(widgets)) {
        throw new Error(withUsage2("The `removeWidgets` method expects an array of widgets. Please use `removeWidget`."));
      }
      if (widgets.some(function(widget) {
        return typeof widget.dispose !== "function";
      })) {
        throw new Error(withUsage2("The widget definition expects a `dispose` method."));
      }
      this.mainIndex.removeWidgets(widgets);
      return this;
    }
    /**
     * Ends the initialization of InstantSearch.js and triggers the
     * first search. This method should be called after all widgets have been added
     * to the instance of InstantSearch.js. InstantSearch.js also supports adding and removing
     * widgets after the start as an **EXPERIMENTAL** feature.
     */
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;
      if (this.started) {
        throw new Error(withUsage2("The `start` method has already been called once."));
      }
      var mainHelper = this.mainHelper || (0, import_algoliasearch_helper3.default)(this.client, this.indexName, void 0, {
        persistHierarchicalRootCount: this.future.persistHierarchicalRootCount
      });
      mainHelper.search = function() {
        _this3.status = "loading";
        _this3.scheduleRender(false);
        true ? _warning(Boolean(_this3.indexName) || _this3.mainIndex.getWidgets().some(isIndexWidget), "No indexName provided, nor an explicit index widget in the widgets tree. This is required to be able to display results.") : void 0;
        return mainHelper.searchOnlyWithDerivedHelpers();
      };
      if (this._searchFunction) {
        var fakeClient = {
          search: function search() {
            return new Promise(noop);
          }
        };
        this._mainHelperSearch = mainHelper.search.bind(mainHelper);
        mainHelper.search = function() {
          var mainIndexHelper = _this3.mainIndex.getHelper();
          var searchFunctionHelper = (0, import_algoliasearch_helper3.default)(fakeClient, mainIndexHelper.state.index, mainIndexHelper.state);
          searchFunctionHelper.once("search", function(_ref22) {
            var state = _ref22.state;
            mainIndexHelper.overrideStateWithoutTriggeringChangeEvent(state);
            _this3._mainHelperSearch();
          });
          searchFunctionHelper.on("change", function(_ref3) {
            var state = _ref3.state;
            mainIndexHelper.setState(state);
          });
          _this3._searchFunction(searchFunctionHelper);
          return mainHelper;
        };
      }
      mainHelper.on("error", function(_ref42) {
        var error = _ref42.error;
        if (!(error instanceof Error)) {
          var err = error;
          error = Object.keys(err).reduce(function(acc, key) {
            acc[key] = err[key];
            return acc;
          }, new Error(err.message));
        }
        error.error = error;
        _this3.error = error;
        _this3.status = "error";
        _this3.scheduleRender(false);
        _this3.emit("error", error);
      });
      this.mainHelper = mainHelper;
      this.middleware.forEach(function(_ref5) {
        var instance = _ref5.instance;
        instance.subscribe();
      });
      this.mainIndex.init({
        instantSearchInstance: this,
        parent: null,
        uiState: this._initialUiState
      });
      if (this._initialResults) {
        hydrateSearchClient(this.client, this._initialResults);
        var originalScheduleSearch = this.scheduleSearch;
        this.scheduleSearch = defer(noop);
        defer(function() {
          _this3.scheduleSearch = originalScheduleSearch;
        })();
      } else if (this.mainIndex.getWidgets().length > 0) {
        this.scheduleSearch();
      }
      this.helper = this.mainIndex.getHelper();
      this.started = true;
      this.middleware.forEach(function(_ref62) {
        var instance = _ref62.instance;
        instance.started();
      });
      if (typeof this._insights === "undefined") {
        mainHelper.derivedHelpers[0].once("result", function() {
          var hasAutomaticInsights = _this3.mainIndex.getScopedResults().some(function(_ref7) {
            var results = _ref7.results;
            return results === null || results === void 0 ? void 0 : results._automaticInsights;
          });
          if (hasAutomaticInsights) {
            _this3.use(createInsightsMiddleware({
              $$internal: true,
              $$automatic: true
            }));
          }
        });
      }
    }
    /**
     * Removes all widgets without triggering a search afterwards. This is an **EXPERIMENTAL** feature,
     * if you find an issue with it, please
     * [open an issue](https://github.com/algolia/instantsearch/issues/new?title=Problem%20with%20dispose).
     * @return {undefined} This method does not return anything
     */
  }, {
    key: "dispose",
    value: function dispose() {
      var _this$mainHelper2;
      this.scheduleSearch.cancel();
      this.scheduleRender.cancel();
      clearTimeout(this._searchStalledTimer);
      this.removeWidgets(this.mainIndex.getWidgets());
      this.mainIndex.dispose();
      this.started = false;
      this.removeAllListeners();
      (_this$mainHelper2 = this.mainHelper) === null || _this$mainHelper2 === void 0 ? void 0 : _this$mainHelper2.removeAllListeners();
      this.mainHelper = null;
      this.helper = null;
      this.middleware.forEach(function(_ref8) {
        var instance = _ref8.instance;
        instance.unsubscribe();
      });
    }
  }, {
    key: "scheduleStalledRender",
    value: function scheduleStalledRender() {
      var _this4 = this;
      if (!this._searchStalledTimer) {
        this._searchStalledTimer = setTimeout(function() {
          _this4.status = "stalled";
          _this4.scheduleRender();
        }, this._stalledSearchDelay);
      }
    }
    /**
     * Set the UI state and trigger a search.
     * @param uiState The next UI state or a function computing it from the current state
     * @param callOnStateChange private parameter used to know if the method is called from a state change
     */
  }, {
    key: "setUiState",
    value: function setUiState(uiState) {
      var _this5 = this;
      var callOnStateChange = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (!this.mainHelper) {
        throw new Error(withUsage2("The `start` method needs to be called before `setUiState`."));
      }
      this.mainIndex.refreshUiState();
      var nextUiState = typeof uiState === "function" ? uiState(this.mainIndex.getWidgetUiState({})) : uiState;
      if (this.onStateChange && callOnStateChange) {
        this.onStateChange({
          uiState: nextUiState,
          setUiState: function setUiState2(finalUiState) {
            setIndexHelperState(typeof finalUiState === "function" ? finalUiState(nextUiState) : finalUiState, _this5.mainIndex);
            _this5.scheduleSearch();
            _this5.onInternalStateChange();
          }
        });
      } else {
        setIndexHelperState(nextUiState, this.mainIndex);
        this.scheduleSearch();
        this.onInternalStateChange();
      }
    }
  }, {
    key: "getUiState",
    value: function getUiState() {
      if (this.started) {
        this.mainIndex.refreshUiState();
      }
      return this.mainIndex.getWidgetUiState({});
    }
  }, {
    key: "createURL",
    value: function createURL() {
      var nextState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!this.started) {
        throw new Error(withUsage2("The `start` method needs to be called before `createURL`."));
      }
      return this._createURL(nextState);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (!this.mainHelper) {
        throw new Error(withUsage2("The `start` method needs to be called before `refresh`."));
      }
      this.mainHelper.clearCache().search();
    }
  }]);
  return InstantSearch3;
}(import_events.default);
var InstantSearch_default = InstantSearch;

// node_modules/react-instantsearch-core/dist/es/lib/useInstantSearchApi.js
var import_react18 = __toESM(require_react(), 1);
var import_shim = __toESM(require_shim(), 1);
function _typeof21(obj) {
  "@babel/helpers - typeof";
  return _typeof21 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof21(obj);
}
function ownKeys16(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread16(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys16(Object(source), true).forEach(function(key) {
      _defineProperty17(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys16(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty17(obj, key, value) {
  key = _toPropertyKey17(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey17(arg) {
  var key = _toPrimitive17(arg, "string");
  return _typeof21(key) === "symbol" ? key : String(key);
}
function _toPrimitive17(input, hint) {
  if (_typeof21(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof21(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var defaultUserAgents = ["react (".concat(import_react18.version, ")"), "react-instantsearch (".concat(version_default, ")"), "react-instantsearch-core (".concat(version_default, ")")];
var serverUserAgent = "react-instantsearch-server (".concat(version_default, ")");
var nextUserAgent = function nextUserAgent2(nextVersion) {
  return nextVersion ? "next.js (".concat(nextVersion, ")") : null;
};
function useInstantSearchApi(props) {
  var forceUpdate = useForceUpdate();
  var serverContext = useInstantSearchServerContext();
  var serverState = useInstantSearchSSRContext();
  var waitingForResultsRef = useRSCContext();
  var initialResults = serverState === null || serverState === void 0 ? void 0 : serverState.initialResults;
  var prevPropsRef = (0, import_react18.useRef)(props);
  var shouldRenderAtOnce = serverContext || initialResults || waitingForResultsRef;
  var searchRef = (0, import_react18.useRef)(null);
  if (serverState) {
    searchRef = serverState.ssrSearchRef;
  }
  if (searchRef.current === null) {
    var search = new InstantSearch_default(props);
    search._schedule = function _schedule(cb) {
      search._schedule.queue.push(cb);
      clearTimeout(search._schedule.timer);
      search._schedule.timer = setTimeout(function() {
        search._schedule.queue.forEach(function(callback) {
          callback();
        });
        search._schedule.queue = [];
      }, 0);
    };
    search._schedule.queue = [];
    if (shouldRenderAtOnce) {
      search._initialResults = initialResults || {};
    }
    addAlgoliaAgents(props.searchClient, [].concat(defaultUserAgents, [serverContext && serverUserAgent, nextUserAgent(getNextVersion())]));
    if (shouldRenderAtOnce) {
      search.start();
    }
    if (serverContext) {
      serverContext.notifyServer({
        search
      });
    }
    warnNextRouter(props.routing);
    warnNextAppDir(Boolean(waitingForResultsRef));
    searchRef.current = search;
  }
  {
    var _search = searchRef.current;
    var prevProps = prevPropsRef.current;
    if (prevProps.indexName !== props.indexName) {
      _search.helper.setIndex(props.indexName || "").search();
      prevPropsRef.current = props;
    }
    if (prevProps.searchClient !== props.searchClient) {
      true ? warn2(false, "The `searchClient` prop of `<InstantSearch>` changed between renders, which may cause more search requests than necessary. If this is an unwanted behavior, please provide a stable reference: https://www.algolia.com/doc/api-reference/widgets/instantsearch/react/#widget-param-searchclient") : void 0;
      addAlgoliaAgents(props.searchClient, [].concat(defaultUserAgents, [serverContext && serverUserAgent]));
      _search.mainHelper.setClient(props.searchClient).search();
      prevPropsRef.current = props;
    }
    if (prevProps.onStateChange !== props.onStateChange) {
      _search.onStateChange = props.onStateChange;
      prevPropsRef.current = props;
    }
    if (prevProps.searchFunction !== props.searchFunction) {
      _search._searchFunction = props.searchFunction;
      prevPropsRef.current = props;
    }
    if (prevProps.stalledSearchDelay !== props.stalledSearchDelay) {
      var _props$stalledSearchD;
      _search._stalledSearchDelay = (_props$stalledSearchD = props.stalledSearchDelay) !== null && _props$stalledSearchD !== void 0 ? _props$stalledSearchD : 200;
      prevPropsRef.current = props;
    }
    if (!dequal(prevProps.future, props.future)) {
      _search.future = _objectSpread16(_objectSpread16({}, INSTANTSEARCH_FUTURE_DEFAULTS), props.future);
      prevPropsRef.current = props;
    }
  }
  var cleanupTimerRef = (0, import_react18.useRef)(null);
  var store = (0, import_shim.useSyncExternalStore)((0, import_react18.useCallback)(function() {
    var search2 = searchRef.current;
    if (cleanupTimerRef.current === null) {
      if (!search2.started) {
        search2.start();
        forceUpdate();
      }
    } else {
      clearTimeout(cleanupTimerRef.current);
      search2._preventWidgetCleanup = false;
    }
    return function() {
      function cleanup() {
        search2.dispose();
      }
      clearTimeout(search2._schedule.timer);
      cleanupTimerRef.current = setTimeout(cleanup);
      search2._preventWidgetCleanup = true;
    };
  }, [forceUpdate]), function() {
    return searchRef.current;
  }, function() {
    return searchRef.current;
  });
  return store;
}
function addAlgoliaAgents(searchClient2, userAgents) {
  if (typeof searchClient2.addAlgoliaAgent !== "function") {
    return;
  }
  userAgents.filter(Boolean).forEach(function(userAgent) {
    searchClient2.addAlgoliaAgent(userAgent);
  });
}
function warnNextRouter(routing) {
  if (true) {
    var _routing$router;
    if (!routing || typeof window === "undefined" || !("__NEXT_DATA__" in window)) {
      return;
    }
    var isUsingNextRouter = (
      // @ts-expect-error: _isNextRouter is only set on the Next.js router
      routing !== true && (routing === null || routing === void 0 ? void 0 : (_routing$router = routing.router) === null || _routing$router === void 0 ? void 0 : _routing$router._isNextRouter)
    );
    true ? warn2(isUsingNextRouter, `
You are using Next.js with InstantSearch without the "react-instantsearch-router-nextjs" package.
This package is recommended to make the routing work correctly with Next.js.
Please check its usage instructions: https://github.com/algolia/instantsearch/tree/master/packages/react-instantsearch-router-nextjs

You can ignore this warning if you are using a custom router that suits your needs, it won't be outputted in production builds.`) : void 0;
  }
}
function warnNextAppDir(isRscContextDefined) {
  var _next;
  if (typeof window === "undefined" || isRscContextDefined) {
    return;
  }
  true ? warn2(Boolean((_next = window.next) === null || _next === void 0 ? void 0 : _next.appDir) === false, `
We've detected you are using Next.js with the App Router.
We released an **experimental** package called "react-instantsearch-nextjs" that makes SSR work with the App Router.
Please check its usage instructions: https://www.algolia.com/doc/guides/building-search-ui/going-further/server-side-rendering/react/#with-nextjs

This warning will not be outputted in production builds.`) : void 0;
}
function getNextVersion() {
  var _next2, _process$env;
  return typeof window !== "undefined" && ((_next2 = window.next) === null || _next2 === void 0 ? void 0 : _next2.version) || (typeof process !== "undefined" ? (_process$env = process.env) === null || _process$env === void 0 ? void 0 : _process$env.NEXT_RUNTIME : void 0);
}

// node_modules/react-instantsearch-core/dist/es/components/InstantSearch.js
var _excluded6 = ["children"];
function _objectWithoutProperties6(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose6(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose6(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function InstantSearch2(_ref) {
  var children = _ref.children, props = _objectWithoutProperties6(_ref, _excluded6);
  var search = useInstantSearchApi(props);
  if (!search.started) {
    return null;
  }
  return /* @__PURE__ */ import_react19.default.createElement(InstantSearchContext.Provider, {
    value: search
  }, /* @__PURE__ */ import_react19.default.createElement(IndexContext.Provider, {
    value: search.mainIndex
  }, children));
}

// node_modules/instantsearch.js/es/connectors/hits/connectHits.js
function _typeof22(obj) {
  "@babel/helpers - typeof";
  return _typeof22 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof22(obj);
}
function ownKeys17(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread17(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys17(Object(source), true).forEach(function(key) {
      _defineProperty18(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys17(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty18(obj, key, value) {
  key = _toPropertyKey18(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey18(arg) {
  var key = _toPrimitive18(arg, "string");
  return _typeof22(key) === "symbol" ? key : String(key);
}
function _toPrimitive18(input, hint) {
  if (_typeof22(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof22(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var withUsage3 = createDocumentationMessageGenerator({
  name: "hits",
  connector: true
});
var connectHits = function connectHits2(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
  checkRendering(renderFn, withUsage3());
  return function(widgetParams) {
    var _ref = widgetParams || {}, _ref$escapeHTML = _ref.escapeHTML, escapeHTML = _ref$escapeHTML === void 0 ? true : _ref$escapeHTML, _ref$transformItems = _ref.transformItems, transformItems = _ref$transformItems === void 0 ? function(items) {
      return items;
    } : _ref$transformItems;
    var sendEvent;
    var bindEvent;
    return {
      $$type: "ais.hits",
      init: function init(initOptions) {
        renderFn(_objectSpread17(_objectSpread17({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: initOptions.instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var renderState = this.getWidgetRenderState(renderOptions);
        renderFn(_objectSpread17(_objectSpread17({}, renderState), {}, {
          instantSearchInstance: renderOptions.instantSearchInstance
        }), false);
        renderState.sendEvent("view:internal", renderState.hits);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return _objectSpread17(_objectSpread17({}, renderState), {}, {
          hits: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref22) {
        var results = _ref22.results, helper = _ref22.helper, instantSearchInstance = _ref22.instantSearchInstance;
        if (!sendEvent) {
          sendEvent = createSendEventForHits({
            instantSearchInstance,
            index: helper.getIndex(),
            widgetType: this.$$type
          });
        }
        if (!bindEvent) {
          bindEvent = createBindEventForHits({
            index: helper.getIndex(),
            widgetType: this.$$type,
            instantSearchInstance
          });
        }
        if (!results) {
          return {
            hits: [],
            results: void 0,
            sendEvent,
            bindEvent,
            widgetParams
          };
        }
        if (escapeHTML && results.hits.length > 0) {
          results.hits = escapeHits(results.hits);
        }
        var hitsWithAbsolutePosition = addAbsolutePosition(results.hits, results.page, results.hitsPerPage);
        var hitsWithAbsolutePositionAndQueryID = addQueryID(hitsWithAbsolutePosition, results.queryID);
        var transformedHits = transformItems(hitsWithAbsolutePositionAndQueryID, {
          results
        });
        return {
          hits: transformedHits,
          results,
          sendEvent,
          bindEvent,
          widgetParams
        };
      },
      dispose: function dispose(_ref3) {
        var state = _ref3.state;
        unmountFn();
        if (!escapeHTML) {
          return state;
        }
        return state.setQueryParameters(Object.keys(TAG_PLACEHOLDER).reduce(function(acc, key) {
          return _objectSpread17(_objectSpread17({}, acc), {}, _defineProperty18({}, key, void 0));
        }, {}));
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(state) {
        if (!escapeHTML) {
          return state;
        }
        return state.setQueryParameters(TAG_PLACEHOLDER);
      }
    };
  };
};
var connectHits_default = connectHits;

// node_modules/react-instantsearch-core/dist/es/connectors/useHits.js
function useHits(props, additionalWidgetProperties) {
  return useConnector(connectHits_default, props, additionalWidgetProperties);
}

// node_modules/instantsearch.js/es/connectors/search-box/connectSearchBox.js
function _typeof23(obj) {
  "@babel/helpers - typeof";
  return _typeof23 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof23(obj);
}
function ownKeys18(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread18(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys18(Object(source), true).forEach(function(key) {
      _defineProperty19(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys18(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty19(obj, key, value) {
  key = _toPropertyKey19(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey19(arg) {
  var key = _toPrimitive19(arg, "string");
  return _typeof23(key) === "symbol" ? key : String(key);
}
function _toPrimitive19(input, hint) {
  if (_typeof23(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof23(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var withUsage4 = createDocumentationMessageGenerator({
  name: "search-box",
  connector: true
});
var defaultQueryHook = function defaultQueryHook2(query, hook) {
  return hook(query);
};
var connectSearchBox = function connectSearchBox2(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
  checkRendering(renderFn, withUsage4());
  return function(widgetParams) {
    var _ref = widgetParams || {}, _ref$queryHook = _ref.queryHook, queryHook = _ref$queryHook === void 0 ? defaultQueryHook : _ref$queryHook;
    var _refine;
    var _clear;
    return {
      $$type: "ais.searchBox",
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(_objectSpread18(_objectSpread18({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(_objectSpread18(_objectSpread18({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref22) {
        var state = _ref22.state;
        unmountFn();
        return state.setQueryParameter("query", void 0);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return _objectSpread18(_objectSpread18({}, renderState), {}, {
          searchBox: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref3) {
        var helper = _ref3.helper, searchMetadata = _ref3.searchMetadata, state = _ref3.state;
        if (!_refine) {
          _refine = function _refine2(query) {
            queryHook(query, function(q) {
              return helper.setQuery(q).search();
            });
          };
          _clear = function _clear2() {
            helper.setQuery("").search();
          };
        }
        return {
          query: state.query || "",
          refine: _refine,
          clear: _clear,
          widgetParams,
          isSearchStalled: searchMetadata.isSearchStalled
        };
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref42) {
        var searchParameters = _ref42.searchParameters;
        var query = searchParameters.query || "";
        if (query === "" || uiState && uiState.query === query) {
          return uiState;
        }
        return _objectSpread18(_objectSpread18({}, uiState), {}, {
          query
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
        var uiState = _ref5.uiState;
        return searchParameters.setQueryParameter("query", uiState.query || "");
      }
    };
  };
};
var connectSearchBox_default = connectSearchBox;

// node_modules/react-instantsearch-core/dist/es/connectors/useSearchBox.js
function useSearchBox(props, additionalWidgetProperties) {
  return useConnector(connectSearchBox_default, props, additionalWidgetProperties);
}

// node_modules/react-instantsearch-core/dist/es/hooks/useInstantSearch.js
var import_react22 = __toESM(require_react(), 1);

// node_modules/react-instantsearch-core/dist/es/lib/useSearchResults.js
var import_react20 = __toESM(require_react(), 1);
function _slicedToArray8(arr, i) {
  return _arrayWithHoles8(arr) || _iterableToArrayLimit8(arr, i) || _unsupportedIterableToArray9(arr, i) || _nonIterableRest8();
}
function _nonIterableRest8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray9(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray9(o, minLen);
}
function _arrayLikeToArray9(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit8(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s5, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s5 = _x.call(_i)).done) && (_arr.push(_s5.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles8(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useSearchResults() {
  var search = useInstantSearchContext();
  var searchIndex = useIndexContext();
  var _useState = (0, import_react20.useState)(function() {
    return getIndexSearchResults(searchIndex);
  }), _useState2 = _slicedToArray8(_useState, 2), searchResults = _useState2[0], setSearchResults = _useState2[1];
  (0, import_react20.useEffect)(function() {
    function handleRender() {
      var results = searchIndex.getResults();
      if (results !== null) {
        setSearchResults({
          results,
          scopedResults: searchIndex.getScopedResults()
        });
      }
    }
    search.addListener("render", handleRender);
    return function() {
      search.removeListener("render", handleRender);
    };
  }, [search, searchIndex]);
  return searchResults;
}

// node_modules/react-instantsearch-core/dist/es/lib/useSearchState.js
var import_react21 = __toESM(require_react(), 1);
function _slicedToArray9(arr, i) {
  return _arrayWithHoles9(arr) || _iterableToArrayLimit9(arr, i) || _unsupportedIterableToArray10(arr, i) || _nonIterableRest9();
}
function _nonIterableRest9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray10(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray10(o, minLen);
}
function _arrayLikeToArray10(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit9(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s5, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s5 = _x.call(_i)).done) && (_arr.push(_s5.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles9(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useSearchState() {
  var search = useInstantSearchContext();
  var searchIndex = useIndexContext();
  var indexId = searchIndex.getIndexId();
  var _useState = (0, import_react21.useState)(function() {
    return search.getUiState();
  }), _useState2 = _slicedToArray9(_useState, 2), uiState = _useState2[0], setLocalUiState = _useState2[1];
  var indexUiState = uiState[indexId];
  var _useState3 = (0, import_react21.useState)(function() {
    return search.renderState;
  }), _useState4 = _slicedToArray9(_useState3, 2), renderState = _useState4[0], setRenderState = _useState4[1];
  var indexRenderState = renderState[indexId] || {};
  var setUiState = (0, import_react21.useCallback)(function(nextUiState) {
    search.setUiState(nextUiState);
  }, [search]);
  var setIndexUiState = (0, import_react21.useCallback)(function(nextIndexUiState) {
    searchIndex.setIndexUiState(nextIndexUiState);
  }, [searchIndex]);
  (0, import_react21.useEffect)(function() {
    function handleRender() {
      setLocalUiState(search.getUiState());
      setRenderState(search.renderState);
    }
    search.addListener("render", handleRender);
    return function() {
      search.removeListener("render", handleRender);
    };
  }, [search]);
  return {
    uiState,
    setUiState,
    indexUiState,
    setIndexUiState,
    renderState,
    indexRenderState
  };
}

// node_modules/react-instantsearch-core/dist/es/hooks/useInstantSearch.js
function useInstantSearch() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, catchError = _ref.catchError;
  var search = useInstantSearchContext();
  var _useSearchState = useSearchState(), uiState = _useSearchState.uiState, setUiState = _useSearchState.setUiState, indexUiState = _useSearchState.indexUiState, setIndexUiState = _useSearchState.setIndexUiState, renderState = _useSearchState.renderState, indexRenderState = _useSearchState.indexRenderState;
  var _useSearchResults = useSearchResults(), results = _useSearchResults.results, scopedResults = _useSearchResults.scopedResults;
  var addMiddlewares = (0, import_react22.useCallback)(function() {
    for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
      middlewares[_key] = arguments[_key];
    }
    search.use.apply(search, middlewares);
    return function() {
      search.unuse.apply(search, middlewares);
    };
  }, [search]);
  var refresh = (0, import_react22.useCallback)(function() {
    search.refresh();
  }, [search]);
  useIsomorphicLayoutEffect(function() {
    if (catchError) {
      var onError = function onError2() {
      };
      search.addListener("error", onError);
      return function() {
        return search.removeListener("error", onError);
      };
    }
    return function() {
    };
  }, [search, catchError]);
  return {
    results,
    scopedResults,
    uiState,
    setUiState,
    indexUiState,
    setIndexUiState,
    renderState,
    indexRenderState,
    addMiddlewares,
    refresh,
    status: search.status,
    error: search.error
  };
}

// node_modules/react-instantsearch/dist/es/ui/lib/cx.js
function cx() {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }
  return classNames.filter(Boolean).join(" ");
}

// node_modules/react-instantsearch/dist/es/widgets/Hits.js
var import_react24 = __toESM(require_react(), 1);

// node_modules/react-instantsearch/dist/es/ui/Hits.js
var import_react23 = __toESM(require_react(), 1);
var _excluded7 = ["hits", "sendEvent", "hitComponent", "classNames"];
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _objectWithoutProperties7(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose7(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose7(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function DefaultHitComponent(_ref) {
  var hit = _ref.hit;
  return /* @__PURE__ */ import_react23.default.createElement("div", {
    style: {
      wordBreak: "break-all"
    }
  }, JSON.stringify(hit).slice(0, 100), "\u2026");
}
function Hits(_ref22) {
  var hits = _ref22.hits, sendEvent = _ref22.sendEvent, _ref2$hitComponent = _ref22.hitComponent, HitComponent = _ref2$hitComponent === void 0 ? DefaultHitComponent : _ref2$hitComponent, _ref2$classNames = _ref22.classNames, classNames = _ref2$classNames === void 0 ? {} : _ref2$classNames, props = _objectWithoutProperties7(_ref22, _excluded7);
  return /* @__PURE__ */ import_react23.default.createElement("div", _extends2({}, props, {
    className: cx("ais-Hits", classNames.root, hits.length === 0 && cx("ais-Hits--empty", classNames.emptyRoot), props.className)
  }), /* @__PURE__ */ import_react23.default.createElement("ol", {
    className: cx("ais-Hits-list", classNames.list)
  }, hits.map(function(hit) {
    return /* @__PURE__ */ import_react23.default.createElement("li", {
      key: hit.objectID,
      className: cx("ais-Hits-item", classNames.item),
      onClick: function onClick() {
        sendEvent("click:internal", hit, "Hit Clicked");
      },
      onAuxClick: function onAuxClick() {
        sendEvent("click:internal", hit, "Hit Clicked");
      }
    }, /* @__PURE__ */ import_react23.default.createElement(HitComponent, {
      hit,
      sendEvent
    }));
  })));
}

// node_modules/react-instantsearch/dist/es/widgets/Hits.js
var _excluded8 = ["escapeHTML", "transformItems"];
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function _objectWithoutProperties8(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose8(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose8(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function Hits2(_ref) {
  var escapeHTML = _ref.escapeHTML, transformItems = _ref.transformItems, props = _objectWithoutProperties8(_ref, _excluded8);
  var _useHits = useHits({
    escapeHTML,
    transformItems
  }, {
    $$widgetType: "ais.hits"
  }), hits = _useHits.hits, sendEvent = _useHits.sendEvent;
  var uiProps = {
    hits,
    sendEvent
  };
  return /* @__PURE__ */ import_react24.default.createElement(Hits, _extends3({}, props, uiProps));
}

// node_modules/react-instantsearch/dist/es/ui/SearchBox.js
var import_react25 = __toESM(require_react(), 1);
var _excluded9 = ["formRef", "inputRef", "isSearchStalled", "onChange", "onReset", "onSubmit", "placeholder", "value", "autoFocus", "resetIconComponent", "submitIconComponent", "loadingIconComponent", "classNames", "translations"];
function _extends4() {
  _extends4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
function _objectWithoutProperties9(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose9(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose9(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _ref2 = /* @__PURE__ */ import_react25.default.createElement("path", {
  d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
});
function DefaultSubmitIcon(_ref) {
  var classNames = _ref.classNames;
  return /* @__PURE__ */ import_react25.default.createElement("svg", {
    className: cx("ais-SearchBox-submitIcon", classNames.submitIcon),
    width: "10",
    height: "10",
    viewBox: "0 0 40 40",
    "aria-hidden": "true"
  }, _ref2);
}
var _ref4 = /* @__PURE__ */ import_react25.default.createElement("path", {
  d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
});
function DefaultResetIcon(_ref3) {
  var classNames = _ref3.classNames;
  return /* @__PURE__ */ import_react25.default.createElement("svg", {
    className: cx("ais-SearchBox-resetIcon", classNames.resetIcon),
    viewBox: "0 0 20 20",
    width: "10",
    height: "10",
    "aria-hidden": "true"
  }, _ref4);
}
var _ref6 = /* @__PURE__ */ import_react25.default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /* @__PURE__ */ import_react25.default.createElement("g", {
  transform: "translate(1 1)",
  strokeWidth: "2"
}, /* @__PURE__ */ import_react25.default.createElement("circle", {
  strokeOpacity: ".5",
  cx: "18",
  cy: "18",
  r: "18"
}), /* @__PURE__ */ import_react25.default.createElement("path", {
  d: "M36 18c0-9.94-8.06-18-18-18"
}, /* @__PURE__ */ import_react25.default.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 18 18",
  to: "360 18 18",
  dur: "1s",
  repeatCount: "indefinite"
}))));
function DefaultLoadingIcon(_ref5) {
  var classNames = _ref5.classNames;
  return /* @__PURE__ */ import_react25.default.createElement("svg", {
    "aria-label": "Results are loading",
    width: "16",
    height: "16",
    viewBox: "0 0 38 38",
    stroke: "#444",
    className: cx("ais-SearchBox-loadingIcon", classNames.loadingIcon),
    "aria-hidden": "true"
  }, _ref6);
}
function SearchBox(_ref7) {
  var formRef = _ref7.formRef, inputRef = _ref7.inputRef, isSearchStalled = _ref7.isSearchStalled, onChange = _ref7.onChange, onReset = _ref7.onReset, onSubmit = _ref7.onSubmit, _ref7$placeholder = _ref7.placeholder, placeholder = _ref7$placeholder === void 0 ? "" : _ref7$placeholder, value = _ref7.value, autoFocus = _ref7.autoFocus, _ref7$resetIconCompon = _ref7.resetIconComponent, ResetIcon = _ref7$resetIconCompon === void 0 ? DefaultResetIcon : _ref7$resetIconCompon, _ref7$submitIconCompo = _ref7.submitIconComponent, SubmitIcon = _ref7$submitIconCompo === void 0 ? DefaultSubmitIcon : _ref7$submitIconCompo, _ref7$loadingIconComp = _ref7.loadingIconComponent, LoadingIcon = _ref7$loadingIconComp === void 0 ? DefaultLoadingIcon : _ref7$loadingIconComp, _ref7$classNames = _ref7.classNames, classNames = _ref7$classNames === void 0 ? {} : _ref7$classNames, translations = _ref7.translations, props = _objectWithoutProperties9(_ref7, _excluded9);
  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (onSubmit) {
      onSubmit(event);
    }
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }
  function handleReset(event) {
    event.preventDefault();
    event.stopPropagation();
    onReset(event);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  return /* @__PURE__ */ import_react25.default.createElement("div", _extends4({}, props, {
    className: cx("ais-SearchBox", classNames.root, props.className)
  }), /* @__PURE__ */ import_react25.default.createElement("form", {
    ref: formRef,
    action: "",
    className: cx("ais-SearchBox-form", classNames.form),
    noValidate: true,
    onSubmit: handleSubmit,
    onReset: handleReset,
    role: "search"
  }, /* @__PURE__ */ import_react25.default.createElement("input", {
    ref: inputRef,
    className: cx("ais-SearchBox-input", classNames.input),
    "aria-label": "Search",
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    placeholder,
    spellCheck: false,
    maxLength: 512,
    type: "search",
    value,
    onChange,
    onCompositionEnd: onChange,
    autoFocus
  }), /* @__PURE__ */ import_react25.default.createElement("button", {
    className: cx("ais-SearchBox-submit", classNames.submit),
    type: "submit",
    title: translations.submitButtonTitle
  }, /* @__PURE__ */ import_react25.default.createElement(SubmitIcon, {
    classNames
  })), /* @__PURE__ */ import_react25.default.createElement("button", {
    className: cx("ais-SearchBox-reset", classNames.reset),
    type: "reset",
    title: translations.resetButtonTitle,
    hidden: value.length === 0 || isSearchStalled
  }, /* @__PURE__ */ import_react25.default.createElement(ResetIcon, {
    classNames
  })), /* @__PURE__ */ import_react25.default.createElement("span", {
    className: cx("ais-SearchBox-loadingIndicator", classNames.loadingIndicator),
    hidden: !isSearchStalled
  }, /* @__PURE__ */ import_react25.default.createElement(LoadingIcon, {
    classNames
  }))));
}

// node_modules/react-instantsearch/dist/es/widgets/SearchBox.js
var import_react26 = __toESM(require_react(), 1);
function _typeof24(obj) {
  "@babel/helpers - typeof";
  return _typeof24 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof24(obj);
}
var _excluded10 = ["queryHook", "searchAsYouType", "translations"];
function _extends5() {
  _extends5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}
function ownKeys19(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread19(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys19(Object(source), true).forEach(function(key) {
      _defineProperty20(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys19(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty20(obj, key, value) {
  key = _toPropertyKey20(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey20(arg) {
  var key = _toPrimitive20(arg, "string");
  return _typeof24(key) === "symbol" ? key : String(key);
}
function _toPrimitive20(input, hint) {
  if (_typeof24(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof24(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray10(arr, i) {
  return _arrayWithHoles10(arr) || _iterableToArrayLimit10(arr, i) || _unsupportedIterableToArray11(arr, i) || _nonIterableRest10();
}
function _nonIterableRest10() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray11(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray11(o, minLen);
}
function _arrayLikeToArray11(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit10(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s5, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s5 = _x.call(_i)).done) && (_arr.push(_s5.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles10(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _objectWithoutProperties10(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose10(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose10(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function SearchBox2(_ref) {
  var queryHook = _ref.queryHook, _ref$searchAsYouType = _ref.searchAsYouType, searchAsYouType = _ref$searchAsYouType === void 0 ? true : _ref$searchAsYouType, translations = _ref.translations, props = _objectWithoutProperties10(_ref, _excluded10);
  var _useSearchBox = useSearchBox({
    queryHook
  }, {
    $$widgetType: "ais.searchBox"
  }), query = _useSearchBox.query, refine = _useSearchBox.refine, isSearchStalled = _useSearchBox.isSearchStalled;
  var _useState = (0, import_react26.useState)(query), _useState2 = _slicedToArray10(_useState, 2), inputValue = _useState2[0], setInputValue = _useState2[1];
  var inputRef = (0, import_react26.useRef)(null);
  function setQuery(newQuery) {
    var compositionComplete = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    setInputValue(newQuery);
    if (searchAsYouType && compositionComplete) {
      refine(newQuery);
    }
  }
  function onReset() {
    setQuery("");
    if (!searchAsYouType) {
      refine("");
    }
  }
  function onChange(event) {
    var compositionComplete = event.type === "compositionend" || !event.nativeEvent.isComposing;
    setQuery(event.currentTarget.value, compositionComplete);
  }
  function onSubmit(event) {
    if (!searchAsYouType) {
      refine(inputValue);
    }
    if (props.onSubmit) {
      props.onSubmit(event);
    }
  }
  if (query !== inputValue && document.activeElement !== inputRef.current) {
    setInputValue(query);
  }
  var uiProps = {
    inputRef,
    isSearchStalled,
    onChange,
    onReset,
    onSubmit,
    value: inputValue,
    translations: _objectSpread19({
      submitButtonTitle: "Submit the search query",
      resetButtonTitle: "Clear the search query"
    }, translations)
  };
  return /* @__PURE__ */ import_react26.default.createElement(SearchBox, _extends5({}, props, uiProps));
}

// app/components/molecules/SearchBar.tsx
var import_instant_meilisearch = __toESM(require_instant_meilisearch_umd(), 1);
var import_react28 = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/molecules/SearchBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/molecules/SearchBar.tsx"
  );
  import.meta.hot.lastModified = "1704389985445.004";
}
var searchClient = (0, import_instant_meilisearch.instantMeiliSearch)("localhost:7700", "wmMQuO4TCFMcxfheSRZZhPgpXoMyw8p-Furw8xjxF8g", {
  placeholderSearch: false
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full max-w-sm z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InstantSearch2, { indexName: "fiche-information", searchClient, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchComponent, {}, void 0, false, {
    fileName: "app/components/molecules/SearchBar.tsx",
    lineNumber: 34,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/molecules/SearchBar.tsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/molecules/SearchBar.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = App;
var SearchComponent = () => {
  _s();
  const [query, setQuery] = (0, import_react28.useState)("");
  const [isResultsVisible, setIsResultsVisible] = (0, import_react28.useState)(false);
  const {
    results,
    setUiState,
    uiState
  } = useInstantSearch();
  const inputRef = (0, import_react28.createRef)();
  function handleInput(e) {
    setQuery(e.target.value);
  }
  function handleReset() {
    setQuery("");
    setIsResultsVisible(false);
    setUiState({
      musician: {
        query: ""
      }
    });
  }
  function handleKeyDown(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      inputRef.current?.querySelector("input")?.focus();
    }
    if (e.key === "Escape") {
      inputRef.current?.querySelector("input")?.blur();
    }
  }
  (0, import_react28.useEffect)(() => {
    setIsResultsVisible(query.length > 0);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [query]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchBox2, { onInput: handleInput, formRef: inputRef, placeholder: "Rechercher un musicien" }, void 0, false, {
      fileName: "app/components/molecules/SearchBar.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("transition-all absolute top-full bg-white mt-4 w-full p-2 rounded drop-shadow-xl max-h-96 overflow-y-scroll primary-scrollbar", {
      "invisible translate-y-12 opacity-0": !isResultsVisible
    }), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Index, { indexName: "fiche-information", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hits2, { hitComponent: Hit, onClick: handleReset }, void 0, false, {
        fileName: "app/components/molecules/SearchBar.tsx",
        lineNumber: 83,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/molecules/SearchBar.tsx",
        lineNumber: 82,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Index, { indexName: "event", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hits2, { hitComponent: Hit, onClick: handleReset }, void 0, false, {
        fileName: "app/components/molecules/SearchBar.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/molecules/SearchBar.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/molecules/SearchBar.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/molecules/SearchBar.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
};
_s(SearchComponent, "FwX0H8CklZRoqq0TlNL1FGfOw3Q=", false, function() {
  return [useInstantSearch];
});
_c2 = SearchComponent;
var Hit = ({
  hit
}) => {
  const hitType = hit._meilisearch_id.split("-").shift();
  if (hitType === "fiche") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/musicians/${hit.id}`, className: "px-8 p-4 focus:ring-primary focus:bg-primary/5 hover:bg-primary/5 rounded flex items-center justify-between group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
        hit.full_name,
        " ",
        hit.Nom
      ] }, void 0, true, {
        fileName: "app/components/molecules/SearchBar.tsx",
        lineNumber: 101,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OpenIcon, { className: "w-4 text-primary opacity-0 group-focus:opacity-100 group-hover:opacity-100" }, void 0, false, {
        fileName: "app/components/molecules/SearchBar.tsx",
        lineNumber: 102,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/molecules/SearchBar.tsx",
      lineNumber: 100,
      columnNumber: 12
    }, this);
  }
  if (hitType === "event") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/events/${hit.id}`, className: "px-8 p-4 focus:ring-primary focus:bg-primary/5 hover:bg-primary/5 rounded flex items-center justify-between group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: hit.title }, void 0, false, {
        fileName: "app/components/molecules/SearchBar.tsx",
        lineNumber: 107,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OpenIcon, { className: "w-4 text-primary opacity-0 group-focus:opacity-100 group-hover:opacity-100" }, void 0, false, {
        fileName: "app/components/molecules/SearchBar.tsx",
        lineNumber: 108,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/molecules/SearchBar.tsx",
      lineNumber: 106,
      columnNumber: 12
    }, this);
  }
  return null;
};
_c3 = Hit;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "SearchComponent");
$RefreshReg$(_c3, "Hit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/atoms/UserIcon.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/atoms/UserIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/atoms/UserIcon.tsx"
  );
  import.meta.hot.lastModified = "1702932732757.047";
}
function UserIcon({
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", className, width: "24", height: "24", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" }, void 0, false, {
    fileName: "app/components/atoms/UserIcon.tsx",
    lineNumber: 25,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/atoms/UserIcon.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c4 = UserIcon;
var _c4;
$RefreshReg$(_c4, "UserIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/organisms/UserStatus.tsx
var import_react29 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/organisms/UserStatus.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/organisms/UserStatus.tsx"
  );
  import.meta.hot.lastModified = "1704387827264.1016";
}
function UserStatus() {
  _s2();
  const connectedDropdown = (0, import_react29.useRef)(null);
  const modal = (0, import_react29.useRef)(null);
  const {
    isLogged,
    user,
    themeSwitchChecked,
    setThemeSwitchChecked
  } = (0, import_react29.useContext)(UserContext);
  const {
    pathname
  } = useLocation();
  (0, import_react29.useEffect)(() => {
    connectedDropdown.current?.querySelectorAll("*").forEach((element) => {
      const elementWithFocus = element;
      elementWithFocus.blur();
    });
  }, [pathname]);
  function handleShowModal() {
    modal.current?.showModal();
  }
  function handleThemeChange(event) {
    const theme = event.currentTarget.checked ? "dark" : "light";
    localStorage.setItem("theme", theme);
    setThemeSwitchChecked(theme === "dark");
  }
  if (isLogged && user) {
    const {
      musician
    } = user;
    const {
      full_name
    } = musician;
    const letters = full_name.split(" ").map((name) => name[0]).join("");
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown dropdown-end", ref: connectedDropdown, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { tabIndex: 0, role: "button", className: "avatar placeholder", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-neutral hover:bg-neutral/80 text-neutral-content rounded-full w-12 transition-all", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-xs", children: letters }, void 0, false, {
        fileName: "app/components/organisms/UserStatus.tsx",
        lineNumber: 65,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/organisms/UserStatus.tsx",
        lineNumber: 64,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/organisms/UserStatus.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { tabIndex: 0, className: "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/account", children: "Mon compte" }, void 0, false, {
          fileName: "app/components/organisms/UserStatus.tsx",
          lineNumber: 70,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/organisms/UserStatus.tsx",
          lineNumber: 69,
          columnNumber: 21
        }, this),
        user.role.type === "comite" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/events", children: "Ev\xE8nements" }, void 0, false, {
          fileName: "app/components/organisms/UserStatus.tsx",
          lineNumber: 73,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/organisms/UserStatus.tsx",
          lineNumber: 72,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/logout", children: "Se d\xE9connecter" }, void 0, false, {
          fileName: "app/components/organisms/UserStatus.tsx",
          lineNumber: 76,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/organisms/UserStatus.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "flex cursor-pointer gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { cx: "12", cy: "12", r: "5" }, void 0, false, {
              fileName: "app/components/organisms/UserStatus.tsx",
              lineNumber: 81,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" }, void 0, false, {
              fileName: "app/components/organisms/UserStatus.tsx",
              lineNumber: 82,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/organisms/UserStatus.tsx",
            lineNumber: 80,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "checkbox", value: "dark", className: "toggle theme-controller", defaultChecked: themeSwitchChecked, onChange: (e) => handleThemeChange(e) }, void 0, false, {
            fileName: "app/components/organisms/UserStatus.tsx",
            lineNumber: 84,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, void 0, false, {
            fileName: "app/components/organisms/UserStatus.tsx",
            lineNumber: 86,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/organisms/UserStatus.tsx",
            lineNumber: 85,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/organisms/UserStatus.tsx",
          lineNumber: 79,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/organisms/UserStatus.tsx",
          lineNumber: 78,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/organisms/UserStatus.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/organisms/UserStatus.tsx",
      lineNumber: 62,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "btn btn-primary text-white", onClick: handleShowModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UserIcon, { className: "w-4" }, void 0, false, {
      fileName: "app/components/organisms/UserStatus.tsx",
      lineNumber: 95,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/organisms/UserStatus.tsx",
      lineNumber: 94,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dialog", { ref: modal, className: "modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "modal-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LoginForm, {}, void 0, false, {
      fileName: "app/components/organisms/UserStatus.tsx",
      lineNumber: 99,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/organisms/UserStatus.tsx",
      lineNumber: 98,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/organisms/UserStatus.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/organisms/UserStatus.tsx",
    lineNumber: 93,
    columnNumber: 10
  }, this);
}
_s2(UserStatus, "S6KG8aOFISnosen44h9Xz9LQdXM=", false, function() {
  return [useLocation];
});
_c5 = UserStatus;
var _c5;
$RefreshReg$(_c5, "UserStatus");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/templates/Header.tsx
var import_react32 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/templates/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/templates/Header.tsx"
  );
  import.meta.hot.lastModified = "1704401051713.5334";
}
function Header() {
  _s3();
  const {
    user
  } = (0, import_react32.useContext)(UserContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-5xl px-4 lg:px-0 mx-auto flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/", className: "text-2xl font-bold", children: "Orchester." }, void 0, false, {
      fileName: "app/components/templates/Header.tsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    user && user.role.type === "comite" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(App, {}, void 0, false, {
      fileName: "app/components/templates/Header.tsx",
      lineNumber: 35,
      columnNumber: 57
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UserStatus, {}, void 0, false, {
      fileName: "app/components/templates/Header.tsx",
      lineNumber: 37,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/templates/Header.tsx",
      lineNumber: 36,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/templates/Header.tsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/templates/Header.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s3(Header, "JGtbL9nF23m+KDtp3kj55mw9GTc=");
_c6 = Header;
var _c6;
$RefreshReg$(_c6, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
init_dist();

// app/providers/GlobalProvider.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/providers/GlobalProvider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/providers/GlobalProvider.tsx"
  );
  import.meta.hot.lastModified = "1706304505886.3523";
}
function GlobalProvider({
  children,
  data
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(UserProvider, { isLogged: data.isLogged, user: data?.user, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ToastProvider, { children }, void 0, false, {
    fileName: "app/providers/GlobalProvider.tsx",
    lineNumber: 29,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/providers/GlobalProvider.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c7 = GlobalProvider;
var _c7;
$RefreshReg$(_c7, "GlobalProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}, ...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : []];
function App2() {
  _s4();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { "data-theme": "light", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(GlobalProvider, { data, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Header, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "max-w-4xl px-4 lg:px-0 mx-auto mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s4(App2, "UGd6Srho9ZIz3WBO/oX8v/JIOKQ=", false, function() {
  return [useLoaderData];
});
_c8 = App2;
var _c8;
$RefreshReg$(_c8, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App2 as default,
  links
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@meilisearch/instant-meilisearch/dist/instant-meilisearch.umd.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
//# sourceMappingURL=/build/root-6VKFQRHB.js.map
