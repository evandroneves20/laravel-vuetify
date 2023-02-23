"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_layout_MainLayout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layout/MainLayout.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layout/MainLayout.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MainLayout",
  data: function data() {
    return {
      drawer: true,
      items: [{
        title: 'Home',
        icon: 'mdi-home-city'
      }, {
        title: 'My Account',
        icon: 'mdi-account'
      }, {
        title: 'Users',
        icon: 'mdi-account-group-outline'
      }],
      rail: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layout/MainLayout.vue?vue&type=template&id=1818a84c":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layout/MainLayout.vue?vue&type=template&id=1818a84c ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Fulano da Silva", -1 /* HOISTED */);
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "Administrador", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_img = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-img");
  var _component_v_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-col");
  var _component_v_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-row");
  var _component_v_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-container");
  var _component_v_list_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-list-item");
  var _component_v_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-list");
  var _component_v_navigation_drawer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-navigation-drawer");
  var _component_v_theme_provider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-theme-provider");
  var _component_v_app_bar_nav_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-app-bar-nav-icon");
  var _component_v_app_bar_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-app-bar-title");
  var _component_v_spacer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-spacer");
  var _component_v_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-icon");
  var _component_v_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-btn");
  var _component_v_app_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-app-bar");
  var _component_v_breadcrumbs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-breadcrumbs");
  var _component_v_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-card");
  var _component_v_main = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-main");
  var _component_v_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_card, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_layout, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_theme_provider, {
            theme: "dark",
            "with-background": ""
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_navigation_drawer, {
                modelValue: $data.drawer,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                  return $data.drawer = $event;
                }),
                rail: $data.rail,
                permanent: "",
                onClick: _cache[1] || (_cache[1] = function ($event) {
                  return $data.rail = false;
                }),
                width: "220"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_container, null, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, {
                        align: "center",
                        "no-gutters": "",
                        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($data.rail === false ? 'height: 90px;' : '')
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                            cols: "12",
                            align: "center"
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_img, {
                                width: 100,
                                "aspect-ratio": "16/9",
                                cover: "",
                                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                              })];
                            }),
                            _: 1 /* STABLE */
                          })];
                        }),

                        _: 1 /* STABLE */
                      }, 8 /* PROPS */, ["style"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, {
                        align: "center",
                        "no-gutters": ""
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                            cols: "12",
                            align: "center",
                            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($data.rail ? 'd-none' : '')
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [_hoisted_1, _hoisted_2, _hoisted_3];
                            }),
                            _: 1 /* STABLE */
                          }, 8 /* PROPS */, ["class"])];
                        }),
                        _: 1 /* STABLE */
                      })];
                    }),

                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_list, {
                    density: "compact",
                    nav: ""
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_list_item, {
                        "prepend-icon": "mdi-home-city",
                        title: "Home",
                        value: "home",
                        active: ""
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_list_item, {
                        "prepend-icon": "mdi-account",
                        title: "My Account",
                        value: "account"
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_list_item, {
                        "prepend-icon": "mdi-account-group-outline",
                        title: "Users",
                        value: "users"
                      })];
                    }),
                    _: 1 /* STABLE */
                  })];
                }),

                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["modelValue", "rail"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_main, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card, {
                color: "grey-lighten-3"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_layout, null, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_app_bar, {
                        color: "teal-darken-4",
                        image: "https://picsum.photos/1920/1080?random"
                      }, {
                        image: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_img, {
                            gradient: "to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
                          })];
                        }),
                        prepend: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_app_bar_nav_icon, {
                            onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
                              return $data.rail = !$data.rail;
                            }, ["stop"]))
                          })];
                        }),
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_app_bar_title, null, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Title")];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_spacer), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_btn, {
                            icon: ""
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_icon, null, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("mdi-power")];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),

                            _: 1 /* STABLE */
                          })];
                        }),

                        _: 1 /* STABLE */
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_main, null, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card, {
                            title: "Página de exemplo",
                            color: "white",
                            height: "80",
                            rounded: 0
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_breadcrumbs, {
                                items: ['Foo', 'Bar', 'Fizz'],
                                style: {
                                  "padding-top": "0"
                                }
                              })];
                            }),
                            _: 1 /* STABLE */
                          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_container, {
                            fluid: ""
                          }, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, {
                                dense: ""
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(4, function (n) {
                                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                                      key: n,
                                      cols: "12"
                                    }, {
                                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card, {
                                          title: "Content ".concat(n),
                                          subtitle: "Subtitle for Content ".concat(n),
                                          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
                                        }, null, 8 /* PROPS */, ["title", "subtitle"])];
                                      }),
                                      _: 2 /* DYNAMIC */
                                    }, 1024 /* DYNAMIC_SLOTS */);
                                  }), 64 /* STABLE_FRAGMENT */))];
                                }),

                                _: 1 /* STABLE */
                              })];
                            }),

                            _: 1 /* STABLE */
                          })];
                        }),

                        _: 1 /* STABLE */
                      })];
                    }),

                    _: 1 /* STABLE */
                  })];
                }),

                _: 1 /* STABLE */
              })];
            }),

            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      })];
    }),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/layout/MainLayout.vue":
/*!********************************************!*\
  !*** ./resources/js/layout/MainLayout.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainLayout_vue_vue_type_template_id_1818a84c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainLayout.vue?vue&type=template&id=1818a84c */ "./resources/js/layout/MainLayout.vue?vue&type=template&id=1818a84c");
/* harmony import */ var _MainLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainLayout.vue?vue&type=script&lang=js */ "./resources/js/layout/MainLayout.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MainLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MainLayout_vue_vue_type_template_id_1818a84c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/layout/MainLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/layout/MainLayout.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/layout/MainLayout.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layout/MainLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/layout/MainLayout.vue?vue&type=template&id=1818a84c":
/*!**************************************************************************!*\
  !*** ./resources/js/layout/MainLayout.vue?vue&type=template&id=1818a84c ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_template_id_1818a84c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_template_id_1818a84c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainLayout.vue?vue&type=template&id=1818a84c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layout/MainLayout.vue?vue&type=template&id=1818a84c");


/***/ })

}]);