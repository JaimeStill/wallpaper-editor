(self["webpackChunkwallpaper_editor"] = self["webpackChunkwallpaper_editor"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var D_a_wallpaper_editor_wallpaper_editor_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ 2139);
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-to-image */ 6991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ 1866);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header.component */ 4615);
/* harmony import */ var _components_editor_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/editor-preview.component */ 8988);
/* harmony import */ var _components_image_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/image-loader.component */ 7300);
/* harmony import */ var _components_wallpaper_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/wallpaper-editor.component */ 4987);













const _c0 = ["previewElement"];
const _c1 = ["target"];

function AppComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "editor-preview", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("preview", ctx_r1.preview)("wallpaper", ctx_r1.wallpaper);
  }
}

function AppComponent_image_loader_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "image-loader", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("loaded", function AppComponent_image_loader_5_Template_image_loader_loaded_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r4.load($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dropWidth", ctx_r2.getLoaderSize())("dropHeight", ctx_r2.getLoaderSize());
  }
}

function AppComponent_section_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "wallpaper-editor", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("loaded", function AppComponent_section_6_Template_wallpaper_editor_loaded_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r6.load($event);
    })("refresh", function AppComponent_section_6_Template_wallpaper_editor_refresh_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r8.refresh();
    })("download", function AppComponent_section_6_Template_wallpaper_editor_download_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r9.download();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("wallpaper", ctx_r3.wallpaper);
  }
}

class AppComponent {
  constructor(resizeSvc, sanitizer, themer) {
    var _this = this;

    this.resizeSvc = resizeSvc;
    this.sanitizer = sanitizer;
    this.themer = themer;
    this.loading = false;

    this.updatePreview = el => this.preview = new _models__WEBPACK_IMPORTED_MODULE_1__.Preview(el.offsetWidth, el.offsetHeight, this.wallpaper);

    this.getLoaderSize = () => {
      const width = window.innerWidth > 300 ? window.innerWidth - 200 : 200;
      const height = window.innerHeight > 300 ? window.innerHeight - 200 : 200;
      return Math.min(width, height);
    };

    this.resize = () => {
      var _a;

      if ((_a = this.previewElement) === null || _a === void 0 ? void 0 : _a.nativeElement) this.updatePreview(this.previewElement.nativeElement);
    };

    this.load = file => {
      if (file) {
        this.loading = true;
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);

        img.onload = () => {
          var _a;

          this.wallpaper = new _models__WEBPACK_IMPORTED_MODULE_1__.Wallpaper(img.src, this.sanitizer.bypassSecurityTrustUrl(img.src), file, img.width, img.height, (_a = file.name) === null || _a === void 0 ? void 0 : _a.split('.')[0], 2560, 1440);
          this.updatePreview(this.previewElement.nativeElement);
          this.loading = false;
        };
      }
    };

    this.refresh = () => {
      this.updatePreview(this.previewElement.nativeElement);
    };

    this.download = /*#__PURE__*/(0,D_a_wallpaper_editor_wallpaper_editor_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      const target = document.getElementById('target');
      const targetSize = {
        width: target.style.width,
        height: target.style.height
      };
      const effects = target === null || target === void 0 ? void 0 : target.children[0];
      const img = (_a = target === null || target === void 0 ? void 0 : target.children[0]) === null || _a === void 0 ? void 0 : _a.children[0];
      const imgSize = {
        width: img.style.width,
        height: img.style.height
      };

      if (target && effects && img) {
        target.style.width = effects.style.width = `${_this.wallpaper.containerSize.width}px`;
        target.style.height = effects.style.height = `${_this.wallpaper.containerSize.height}px`;
        img.src = _this.wallpaper.src;
        img.style.width = `${_this.wallpaper.imageSize.width}px`;
        img.style.height = `${_this.wallpaper.imageSize.height}px`;
        const result = yield (0,html_to_image__WEBPACK_IMPORTED_MODULE_2__.toPng)(target);
        target.style.width = effects.style.width = targetSize.width;
        target.style.height = effects.style.height = targetSize.height;
        img.style.width = imgSize.width;
        img.style.height = imgSize.height;
        const link = document.createElement('a');
        link.download = `${_this.wallpaper.name}.png`;
        link.href = result;
        link.click();
      }
    });
  }

  ngAfterViewInit() {
    var _a;

    this.sub = this.resizeSvc.init();
    if ((_a = this.previewElement) === null || _a === void 0 ? void 0 : _a.nativeElement) this.updatePreview(this.previewElement.nativeElement);
  }

  ngOnDestroy() {
    var _a;

    (_a = this.sub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.ResizeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.ThemeService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.previewElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.target = _t.first);
    }
  },
  decls: 7,
  vars: 7,
  consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "mat-typography", "mat-app-background", "app-frame", 3, "ngClass"], ["heading", "Wallpaper Editor", "containerStyle", "p8 background-card", 3, "loading"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "p8", "background-card", 3, "fxFlex.gt-sm", "fxFlex.lt-md", "resize"], ["previewElement", ""], [4, "ngIf"], [3, "dropWidth", "dropHeight", "loaded", 4, "ngIf"], ["fxLayout.lt-md", "column", "fxLayout.gt-sm", "row | wrap", "fxLayoutAlign", "start stretch", "fxFlex.gt-sm", "40%", "fxFlex.lt-md", "60%", "class", "p8 background-default scroll-container", 4, "ngIf"], [3, "preview", "wallpaper"], [3, "dropWidth", "dropHeight", "loaded"], ["fxLayout.lt-md", "column", "fxLayout.gt-sm", "row | wrap", "fxLayoutAlign", "start stretch", "fxFlex.gt-sm", "40%", "fxFlex.lt-md", "60%", 1, "p8", "background-default", "scroll-container"], ["fxFlex", "", 3, "wallpaper", "loaded", "refresh", "download"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "section", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function AppComponent_Template_section_resize_2_listener() {
        return ctx.resize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, AppComponent_ng_container_4_Template, 2, 2, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AppComponent_image_loader_5_Template, 1, 2, "image-loader", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AppComponent_section_6_Template, 2, 1, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "app-light" : "app-dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loading", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fxFlex.gt-sm", ctx.wallpaper ? "60%" : "100%")("fxFlex.lt-md", ctx.wallpaper ? "40%" : "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.wallpaper);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.wallpaper);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.wallpaper);
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _components_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _components_editor_preview_component__WEBPACK_IMPORTED_MODULE_5__.EditorPreviewComponent, _components_image_loader_component__WEBPACK_IMPORTED_MODULE_6__.ImageLoaderComponent, _components_wallpaper_editor_component__WEBPACK_IMPORTED_MODULE_7__.WallpaperEditorComponent],
  encapsulation: 2
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_aspect_ratio_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/aspect-ratio-editor.component */ 8600);
/* harmony import */ var _components_editor_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/editor-control.component */ 1047);
/* harmony import */ var _components_editor_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/editor-preview.component */ 8988);
/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header.component */ 4615);
/* harmony import */ var _components_image_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/image-loader.component */ 7300);
/* harmony import */ var _components_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/info.component */ 7861);
/* harmony import */ var _components_link_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/link-loader.component */ 6007);
/* harmony import */ var _components_wallpaper_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/wallpaper-editor.component */ 4987);
/* harmony import */ var _dialogs_confirm_confirm_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialogs/confirm/confirm.dialog */ 5439);
/* harmony import */ var _directives_backdrop_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/backdrop.directive */ 6321);
/* harmony import */ var _pipes_bytes_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/bytes.pipe */ 6335);
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/truncate.pipe */ 5911);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_aspect_ratio_editor_component__WEBPACK_IMPORTED_MODULE_2__.AspectRatioEditorComponent, _components_editor_control_component__WEBPACK_IMPORTED_MODULE_3__.EditorControlComponent, _components_editor_preview_component__WEBPACK_IMPORTED_MODULE_4__.EditorPreviewComponent, _components_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _components_image_loader_component__WEBPACK_IMPORTED_MODULE_6__.ImageLoaderComponent, _components_info_component__WEBPACK_IMPORTED_MODULE_7__.InfoComponent, _components_link_loader_component__WEBPACK_IMPORTED_MODULE_8__.LinkLoaderComponent, _components_wallpaper_editor_component__WEBPACK_IMPORTED_MODULE_9__.WallpaperEditorComponent, _dialogs_confirm_confirm_dialog__WEBPACK_IMPORTED_MODULE_10__.ConfirmDialog, _directives_backdrop_directive__WEBPACK_IMPORTED_MODULE_11__.BackdropDirective, _pipes_bytes_pipe__WEBPACK_IMPORTED_MODULE_12__.BytesPipe, _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_13__.TruncatePipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule] }); })();


/***/ }),

/***/ 8600:
/*!*************************************************************!*\
  !*** ./src/app/components/aspect-ratio-editor.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AspectRatioEditorComponent": () => (/* binding */ AspectRatioEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 1866);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ 3894);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 781);











const _c0 = ["width"];
const _c1 = ["height"];
class AspectRatioEditorComponent {
    constructor(core) {
        this.core = core;
        this.subs = [];
        this.gap = '12px';
        this.lockIcon = 'lock';
        this.unlockIcon = 'lock_open';
        this.lockStyle = 'material-icons-outlined';
        this.unlockStyle = 'material-icons-outlined';
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.sync = (emit = true) => {
            this.w = this.ar.width;
            this.h = this.ar.height;
            emit && this.refresh.emit();
        };
        this.updateLock = (locked) => this.ar.locked = locked;
        this.reset = () => {
            this.ar.reset();
            this.sync();
        };
    }
    set data(data) {
        if (data) {
            this.ar = data;
            this.sync();
        }
    }
    ngAfterViewInit() {
        this.sync(false);
        this.subs.push(this.core.generateInputObservable(this.width)
            .subscribe((data) => {
            if (Number.isInteger(+data)) {
                this.ar.setWidth(+data);
                this.sync();
            }
        }), this.core.generateInputObservable(this.height)
            .subscribe((data) => {
            if (Number.isInteger(+data)) {
                this.ar.setHeight(+data);
                this.sync();
            }
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
}
AspectRatioEditorComponent.ɵfac = function AspectRatioEditorComponent_Factory(t) { return new (t || AspectRatioEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.CoreService)); };
AspectRatioEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AspectRatioEditorComponent, selectors: [["aspect-ratio-editor"]], viewQuery: function AspectRatioEditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.width = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.height = _t.first);
    } }, inputs: { data: "data", gap: "gap", lockIcon: "lockIcon", unlockIcon: "unlockIcon", lockStyle: "lockStyle", unlockStyle: "unlockStyle" }, outputs: { refresh: "refresh" }, decls: 20, vars: 12, consts: [["fxLayout", "row", "fxLayoutAlign", "start center", 3, "fxLayoutGap"], [3, "value", "change"], ["matTooltip", "Lock Aspect Ratio", 3, "value"], ["matTooltip", "Unlock Aspect Ratio", 3, "value"], ["fxFlex", ""], ["matInput", "", "type", "number", "min", "0", 3, "ngModel", "ngModelChange"], ["width", ""], ["height", ""], ["mat-button", "", "color", "primary", 3, "click"]], template: function AspectRatioEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-button-toggle-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AspectRatioEditorComponent_Template_mat_button_toggle_group_change_1_listener($event) { return ctx.updateLock($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AspectRatioEditorComponent_Template_input_ngModelChange_11_listener($event) { return ctx.w = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 5, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AspectRatioEditorComponent_Template_input_ngModelChange_16_listener($event) { return ctx.h = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AspectRatioEditorComponent_Template_button_click_18_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.ar.locked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.lockStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.lockIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.unlockStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.unlockIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.w);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.h);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutGapDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], encapsulation: 2 });


/***/ }),

/***/ 1047:
/*!********************************************************!*\
  !*** ./src/app/components/editor-control.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorControlComponent": () => (/* binding */ EditorControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 1866);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);



const _c0 = ["*"];
class EditorControlComponent {
    constructor(resizeSvc) {
        this.resizeSvc = resizeSvc;
        this.controlStyle = 'm4 background-card rounded';
        this.minWidth = 420;
        this.labelStyle = 'mat-subheading-1';
        this.label = 'Label';
        this.calcWidth = (width) => this.controlWidth = typeof (this.minWidth) === 'number'
            ? this.minWidth >= width - 36
                ? width - 36
                : this.minWidth
            : this.minWidth;
    }
    ngOnInit() {
        this.calcWidth(window.innerWidth);
        this.sub = this.resizeSvc.size$.subscribe(size => {
            if (size)
                this.calcWidth(size.width);
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.sub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
EditorControlComponent.ɵfac = function EditorControlComponent_Factory(t) { return new (t || EditorControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.ResizeService)); };
EditorControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditorControlComponent, selectors: [["editor-control"]], inputs: { controlStyle: "controlStyle", minWidth: "minWidth", labelStyle: "labelStyle", label: "label" }, ngContentSelectors: _c0, decls: 4, vars: 7, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "p8"]], template: function EditorControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.controlStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("min-width", ctx.controlWidth, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.labelStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.label);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective], encapsulation: 2 });


/***/ }),

/***/ 8988:
/*!********************************************************!*\
  !*** ./src/app/components/editor-preview.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorPreviewComponent": () => (/* binding */ EditorPreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);


class EditorPreviewComponent {
    constructor() {
        this.minWidth = 420;
        this.getUrl = () => {
            var _a, _b, _c, _d;
            return ((_a = this.wallpaper) === null || _a === void 0 ? void 0 : _a.backgroundSelect) === null
                ? null
                : ((_b = this.wallpaper) === null || _b === void 0 ? void 0 : _b.backgroundSelect) === false
                    ? `url(${(_c = this.wallpaper) === null || _c === void 0 ? void 0 : _c.src})`
                    : `url(${(_d = this.wallpaper) === null || _d === void 0 ? void 0 : _d.containerImage})`;
        };
    }
}
EditorPreviewComponent.ɵfac = function EditorPreviewComponent_Factory(t) { return new (t || EditorPreviewComponent)(); };
EditorPreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorPreviewComponent, selectors: [["editor-preview"]], inputs: { preview: "preview", wallpaper: "wallpaper", minWidth: "minWidth" }, decls: 3, vars: 39, consts: [["id", "target"], ["fxFlex", "", "fxLayout", "column", 3, "fxLayoutAlign"], [3, "src", "alt", "height", "width"]], template: function EditorPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.wallpaper == null ? null : ctx.wallpaper.containerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.preview == null ? null : ctx.preview.containerSize == null ? null : ctx.preview.containerSize.height, "px")("width", ctx.preview == null ? null : ctx.preview.containerSize == null ? null : ctx.preview.containerSize.width, "px")("border", ctx.wallpaper == null ? null : ctx.wallpaper.containerBorder)("background-clip", ctx.wallpaper == null ? null : ctx.wallpaper.containerClip)("background-color", ctx.wallpaper == null ? null : ctx.wallpaper.containerColor)("background-image", ctx.getUrl())("background-position", ctx.wallpaper == null ? null : ctx.wallpaper.containerPosition)("background-repeat", ctx.wallpaper == null ? null : ctx.wallpaper.containerRepeat)("background-size", ctx.wallpaper == null ? null : ctx.wallpaper.containerBgSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.wallpaper == null ? null : ctx.wallpaper.containerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("backdrop-filter", ctx.wallpaper == null ? null : ctx.wallpaper.containerFilter)("-webkit-backdrop-filter", ctx.wallpaper == null ? null : ctx.wallpaper.containerFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayoutAlign", ctx.wallpaper == null ? null : ctx.wallpaper.alignment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.wallpaper == null ? null : ctx.wallpaper.imageStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.wallpaper == null ? null : ctx.wallpaper.imageBorder)("filter", ctx.wallpaper == null ? null : ctx.wallpaper.imageFilter)("transform", ctx.wallpaper == null ? null : ctx.wallpaper.imageTransform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.wallpaper == null ? null : ctx.wallpaper.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.wallpaper == null ? null : ctx.wallpaper.name)("height", ctx.preview == null ? null : ctx.preview.imageSize == null ? null : ctx.preview.imageSize.height)("width", ctx.preview == null ? null : ctx.preview.imageSize == null ? null : ctx.preview.imageSize.width);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective], encapsulation: 2 });


/***/ }),

/***/ 4615:
/*!************************************************!*\
  !*** ./src/app/components/header.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 1866);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);








function HeaderComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.lightIcon);
} }
function HeaderComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.darkIcon);
} }
function HeaderComponent_mat_progress_bar_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 4);
} }
class HeaderComponent {
    constructor(themer) {
        this.themer = themer;
        this.alignment = 'space-between center';
        this.containerStyle = 'p8';
        this.headerStyle = 'm4 mat-title';
        this.heading = 'Heading';
        this.lightIcon = 'brightness_5';
        this.lightIconColor = 'color-amber';
        this.darkIcon = 'brightness_3';
        this.darkIconColor = 'color-text';
        this.loading = false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.ThemeService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { alignment: "alignment", containerStyle: "containerStyle", headerStyle: "headerStyle", heading: "heading", lightIcon: "lightIcon", lightIconColor: "lightIconColor", darkIcon: "darkIcon", darkIconColor: "darkIconColor", loading: "loading" }, decls: 7, vars: 10, consts: [["fxLayout", "row", 3, "fxLayoutAlign"], ["mat-icon-button", "", 3, "ngClass", "click"], [4, "ngIf"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], ["mode", "indeterminate", "color", "accent"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.themer.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderComponent_mat_icon_4_Template, 2, 1, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderComponent_mat_icon_5_Template, 2, 1, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderComponent_mat_progress_bar_6_Template, 1, 0, "mat-progress-bar", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.containerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxLayoutAlign", ctx.alignment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.headerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? ctx.lightIconColor : ctx.darkIconColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.themer.isLight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.themer.isLight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBar], encapsulation: 2 });


/***/ }),

/***/ 7300:
/*!******************************************************!*\
  !*** ./src/app/components/image-loader.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageLoaderComponent": () => (/* binding */ ImageLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _link_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link-loader.component */ 6007);







const _c0 = ["fileInput"];
class ImageLoaderComponent {
    constructor() {
        this.dropWidth = 'auto';
        this.dropHeight = 'auto';
        this.dropStyle = 'm4 rounded background-default card-outline-accent border-x-dashed border-width-2';
        this.dropIconScale = 5;
        this.dropIcon = 'file_upload';
        this.dropIconClass = 'material-icons-outlined';
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.hovered = false;
        this.fileChange = (event) => {
            var _a, _b;
            if (((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                this.emitFile(event.target.files[0]);
                this.fileInput.nativeElement.value = null;
            }
        };
        this.dragOver = (event) => {
            event.stopPropagation();
            event.preventDefault();
            this.hovered = true;
        };
        this.dragLeave = () => {
            this.hovered = false;
        };
        this.drop = (event) => {
            var _a, _b;
            event.stopPropagation();
            event.preventDefault();
            this.hovered = false;
            if (((_b = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b.length) && event.dataTransfer.files.length > 0)
                this.emitFile(event.dataTransfer.files[0]);
        };
        this.emitFile = (file) => { var _a; return ((_a = file === null || file === void 0 ? void 0 : file.type) === null || _a === void 0 ? void 0 : _a.match(/image.*/)) && this.loaded.emit(file); };
    }
}
ImageLoaderComponent.ɵfac = function ImageLoaderComponent_Factory(t) { return new (t || ImageLoaderComponent)(); };
ImageLoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImageLoaderComponent, selectors: [["image-loader"]], viewQuery: function ImageLoaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, inputs: { dropWidth: "dropWidth", dropHeight: "dropHeight", dropStyle: "dropStyle", dropIconScale: "dropIconScale", dropIcon: "dropIcon", dropIconClass: "dropIconClass" }, outputs: { loaded: "loaded" }, decls: 10, vars: 13, consts: [["type", "file", "accept", "image/*", 1, "styled", 3, "change"], ["fileInput", ""], ["fxLayout", "column", "fxLayoutAlign", "start stretch"], [1, "drop-container", "cursor-pointer", 3, "ngClass", "click", "drop", "dragover", "dragleave"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "drop-overlay"], [3, "ngClass"], ["fxFlexAlign", "center", 1, "m4", "mat-caption"], [3, "loaded"]], template: function ImageLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ImageLoaderComponent_Template_input_change_0_listener($event) { return ctx.fileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageLoaderComponent_Template_section_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r0.click(); })("drop", function ImageLoaderComponent_Template_section_drop_3_listener($event) { return ctx.drop($event); })("dragover", function ImageLoaderComponent_Template_section_dragover_3_listener($event) { return ctx.dragOver($event); })("dragleave", function ImageLoaderComponent_Template_section_dragleave_3_listener() { return ctx.dragLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Click or drop a file into the area above to upload. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "link-loader", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("loaded", function ImageLoaderComponent_Template_link_loader_loaded_9_listener($event) { return ctx.emitFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.dropWidth, "px")("height", ctx.dropHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.dropStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("opacity", ctx.hovered ? 0.5 : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", "scale(" + ctx.dropIconScale + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.dropIconClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dropIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-width", ctx.dropWidth, "px");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexAlignDirective, _link_loader_component__WEBPACK_IMPORTED_MODULE_0__.LinkLoaderComponent], styles: [".drop-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.drop-overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  opacity: 0;\r\n  transition: .3s ease;\r\n  background-color: black;\r\n}\r\n\r\n.drop-container[_ngcontent-%COMP%]:hover   .drop-overlay[_ngcontent-%COMP%]:hover {\r\n  opacity: .5!important;\r\n}\r\n\r\n.drop-container[_ngcontent-%COMP%]   mat-icon.material-icons[_ngcontent-%COMP%], .drop-container[_ngcontent-%COMP%]   mat-icon.material-icons-outlined[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLWxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLFlBQVk7QUFDZCIsImZpbGUiOiJpbWFnZS1sb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZHJvcC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZHJvcC1jb250YWluZXI6aG92ZXIgLmRyb3Atb3ZlcmxheTpob3ZlciB7XHJcbiAgb3BhY2l0eTogLjUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcC1jb250YWluZXIgbWF0LWljb24ubWF0ZXJpYWwtaWNvbnMsXHJcbi5kcm9wLWNvbnRhaW5lciBtYXQtaWNvbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 7861:
/*!**********************************************!*\
  !*** ./src/app/components/info.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoComponent": () => (/* binding */ InfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 298);




class InfoComponent {
    constructor() {
        this.infoStyle = 'color-primary';
        this.icon = 'help_outline';
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(); };
InfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["info"]], inputs: { tip: "tip", infoStyle: "infoStyle", icon: "icon" }, decls: 4, vars: 4, consts: [["mat-icon-button", "", 3, "click"], ["matTooltipClass", "pre-line large-tooltip", "matTooltipPosition", "above", 3, "matTooltip"], ["info", "matTooltip"]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.infoStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.tip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icon);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltip], encapsulation: 2 });


/***/ }),

/***/ 6007:
/*!*****************************************************!*\
  !*** ./src/app/components/link-loader.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkLoaderComponent": () => (/* binding */ LinkLoaderComponent)
/* harmony export */ });
/* harmony import */ var D_a_wallpaper_editor_wallpaper_editor_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 1866);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 781);









const _c0 = ["linkInput"];

function LinkLoaderComponent_mat_hint_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Load an image of type: ", ctx_r1.extStrings(), "");
  }
}

function LinkLoaderComponent_mat_hint_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Link must end with an extension: ", ctx_r2.extStrings(), "");
  }
}

function LinkLoaderComponent_mat_hint_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.error);
  }
}

class LinkLoaderComponent {
  constructor(core) {
    var _this = this;

    this.core = core;
    this.valid = false;
    this.dirty = false;
    this.extensions = ['.jpg', '.png'];
    this.gap = '16px';
    this.buttonStyle = 'color-primary';
    this.label = 'Load Image';
    this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();

    this.getExtension = data => {
      var _a;

      return `.${(_a = data === null || data === void 0 ? void 0 : data.split('.')) === null || _a === void 0 ? void 0 : _a.pop()}`;
    };

    this.getFilename = ext => {
      var _a;

      const check = (_a = this.url.split('/')) === null || _a === void 0 ? void 0 : _a.pop();
      return check ? check : `image${ext}`;
    };

    this.isValid = ext => this.extensions.includes(ext);

    this.extStrings = () => this.extensions.join(', ');

    this.load = /*#__PURE__*/(0,D_a_wallpaper_editor_wallpaper_editor_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this.valid && _this.dirty) {
        try {
          const response = yield fetch(_this.url);

          if (response.ok) {
            _this.error = undefined;
            const data = yield response.blob();
            const metadata = {
              type: _this.url.endsWith('.jpg') ? 'image/jpeg' : 'image/png'
            };

            const ext = _this.getExtension(_this.url);

            const name = _this.getFilename(ext);

            const file = new File([data], name, metadata);

            _this.loaded.emit(file);

            _this.dirty = false;
          } else {
            console.error(response);
            _this.error = response.statusText;
          }
        } catch (err) {
          _this.error = `Unable to fetch ${_this.url}`;
          console.error(err);
        }
      }
    });
  }

  ngAfterViewInit() {
    this.sub = this.core.generateInputObservable(this.linkInput).subscribe(data => {
      const ext = this.getExtension(data);
      this.valid = ext ? this.isValid(ext) : false;
      this.dirty = true;
      this.url = data;
    });
  }

  ngOnDestroy() {
    var _a;

    (_a = this.sub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
  }

}

LinkLoaderComponent.ɵfac = function LinkLoaderComponent_Factory(t) {
  return new (t || LinkLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.CoreService));
};

LinkLoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LinkLoaderComponent,
  selectors: [["link-loader"]],
  viewQuery: function LinkLoaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.linkInput = _t.first);
    }
  },
  inputs: {
    extensions: "extensions",
    gap: "gap",
    buttonStyle: "buttonStyle",
    label: "label"
  },
  outputs: {
    loaded: "loaded"
  },
  decls: 11,
  vars: 8,
  consts: [["fxLayout", "row", "fxLayoutAlign", "start center", 1, "mt4", "mx4", 3, "fxLayoutGap"], ["fxFlex", ""], ["matInput", ""], ["linkInput", ""], [4, "ngIf"], ["class", "color-warn", 4, "ngIf"], ["mat-flat-button", "", 3, "disabled", "click"], [1, "color-warn"]],
  template: function LinkLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "URL");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LinkLoaderComponent_mat_hint_6_Template, 2, 1, "mat-hint", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, LinkLoaderComponent_mat_hint_7_Template, 2, 1, "mat-hint", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LinkLoaderComponent_mat_hint_8_Template, 2, 1, "mat-hint", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LinkLoaderComponent_Template_button_click_9_listener() {
        return ctx.load();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.valid && ctx.dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.buttonStyle);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutGapDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatHint],
  encapsulation: 2
});

/***/ }),

/***/ 4987:
/*!**********************************************************!*\
  !*** ./src/app/components/wallpaper-editor.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WallpaperEditorComponent": () => (/* binding */ WallpaperEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _editor_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-control.component */ 1047);
/* harmony import */ var _aspect_ratio_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aspect-ratio-editor.component */ 8600);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 3894);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.component */ 7861);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _image_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-loader.component */ 7300);



















function WallpaperEditorComponent_mat_option_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", a_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](a_r2);
} }
class WallpaperEditorComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.alignments = [
            'start start',
            'start center',
            'start end',
            'center start',
            'center center',
            'center end',
            'end start',
            'end center',
            'end end'
        ];
        this.backdropTip = `
backdrop-filter: grayscale(1);
backdrop-filter: brightness(1.5);
backdrop-filter: blur(5px);
backdrop-filter: contrast(0.8);
backdrop-filter: invert(0.7);
backdrop-filter: opacity(0.4);
backdrop-filter: sepia(0.4);
backdrop-filter: saturate(1.8);
backdrop-filter: hue-rotate(120deg);
`;
        this.filterTip = `
filter: grayscale(0.2);
filter: sepia(0.8);
filter: saturate(2);
filter: hue-rotate(180deg);
filter: invert(1);
filter: opacity(0.5);
filter: brightness(0.5);
filter: contrast(4);
filter: blur(5px);
filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
filter: drop-shadow(4px 4px red);
`;
        this.borderTip = `
border: {border-width} {border-style} {color};

border-style:
* solid
* none
* hidden
* dashed
* dotted
* double
* groove
* ridge
* inset
* outset
`;
        this.editorStyle = 'p8';
        this.gap = '12px';
        this.download = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.setBackgroundImage = () => this.wallpaper.containerUrl = this.wallpaper.containerImage
            ? this.sanitizer.bypassSecurityTrustUrl(this.wallpaper.containerImage)
            : null;
    }
}
WallpaperEditorComponent.ɵfac = function WallpaperEditorComponent_Factory(t) { return new (t || WallpaperEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer)); };
WallpaperEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WallpaperEditorComponent, selectors: [["wallpaper-editor"]], inputs: { wallpaper: "wallpaper", editorStyle: "editorStyle", gap: "gap" }, outputs: { download: "download", refresh: "refresh", loaded: "loaded" }, decls: 103, vars: 41, consts: [["animationDuration", "0ms", 1, "flexible", 3, "disablePagination"], ["label", "Container"], ["fxLayout.gt-lg", "row | wrap", "fxLayoutAlign.gt-lg", "start center", "fxLayout.lt-xl", "column", "fxLayoutAlign.lt-xl", "start stretch"], ["fxLayout", "row | wrap", "fxLayoutAlign", "start center", "fxFlex.gt-lg", ""], ["label", "Container Size", "fxFlex", ""], [3, "data", "gap", "refresh"], ["label", "Background Image", "fxFlex", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 3, "fxLayoutGap"], [3, "ngModel", "ngModelChange"], ["imageGroup", "matButtonToggleGroup"], ["matTooltip", "No Image", 3, "value"], [1, "material-icons-outlined"], ["matTooltip", "Default Image", 3, "value"], ["matTooltip", "Custom Image", 3, "value"], ["fxFlex", ""], ["matInput", "", 3, "disabled", "ngModel", "input", "ngModelChange"], ["label", "Filters", "fxFlex", ""], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["matInput", "", 3, "ngModel", "ngModelChange"], [3, "tip"], ["label", "Border", "fxFlex", ""], ["label", "Classes", "fxFlex", ""], ["label", "Color", "fxFlex", ""], ["label", "Size", "fxFlex", ""], ["label", "Position", "fxFlex", ""], ["label", "Clip", "fxFlex", ""], ["value", "border-box"], ["value", "padding-box"], ["value", "content-box"], ["value", "text"], ["label", "Repeat", "fxFlex", ""], ["label", "Image"], ["label", "Image Size", "fxFlex", ""], ["label", "Alignment", "fxFlex", ""], [3, "value", 4, "ngFor", "ngForOf"], ["label", "Transform", "fxFlex", ""], ["label", "File"], ["fxLayout", "column", "fxLayoutAlign", "start stretch"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "4px", 1, "m4"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Export Wallpaper", 3, "click"], [3, "dropHeight", "loaded"], [3, "value"]], template: function WallpaperEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "editor-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "aspect-ratio-editor", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("refresh", function WallpaperEditorComponent_Template_aspect_ratio_editor_refresh_5_listener() { return ctx.refresh.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "editor-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-button-toggle-group", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_mat_button_toggle_group_ngModelChange_8_listener($event) { return ctx.wallpaper.backgroundSelect = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-button-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "image_not_supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-button-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-button-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "image_search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function WallpaperEditorComponent_Template_input_input_22_listener() { return ctx.setBackgroundImage(); })("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_22_listener($event) { return ctx.wallpaper.containerImage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "editor-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_27_listener($event) { return ctx.wallpaper.containerFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "info", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "editor-control", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_32_listener($event) { return ctx.wallpaper.containerBorder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "info", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "editor-control", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_37_listener($event) { return ctx.wallpaper.containerStyle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "editor-control", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_40_listener($event) { return ctx.wallpaper.containerColor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "editor-control", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_44_listener($event) { return ctx.wallpaper.containerBgSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "editor-control", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_47_listener($event) { return ctx.wallpaper.containerPosition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "editor-control", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_mat_select_ngModelChange_51_listener($event) { return ctx.wallpaper.containerClip = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "border-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "padding-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "content-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "editor-control", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_64_listener($event) { return ctx.wallpaper.containerRepeat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "mat-tab", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "editor-control", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "aspect-ratio-editor", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("refresh", function WallpaperEditorComponent_Template_aspect_ratio_editor_refresh_69_listener() { return ctx.refresh.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "editor-control", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_mat_select_ngModelChange_72_listener($event) { return ctx.wallpaper.alignment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, WallpaperEditorComponent_mat_option_73_Template, 2, 2, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "editor-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_78_listener($event) { return ctx.wallpaper.imageFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "info", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "editor-control", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_83_listener($event) { return ctx.wallpaper.imageBorder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "info", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "editor-control", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_88_listener($event) { return ctx.wallpaper.imageStyle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "editor-control", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_91_listener($event) { return ctx.wallpaper.imageTransform = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "mat-tab", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "section", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_98_listener($event) { return ctx.wallpaper.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WallpaperEditorComponent_Template_button_click_99_listener() { return ctx.download.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "image-loader", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("loaded", function WallpaperEditorComponent_Template_image_loader_loaded_102_listener($event) { return ctx.loaded.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disablePagination", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.editorStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.wallpaper.containerSize)("gap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.backgroundSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.wallpaper.backgroundSelect)("ngModel", ctx.wallpaper.containerImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.containerFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tip", ctx.backdropTip);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.containerBorder);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tip", ctx.borderTip);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.containerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.containerColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.containerBgSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.containerPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.containerClip);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.containerRepeat);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.editorStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.wallpaper.imageSize)("gap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.alignment);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.alignments);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.imageFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tip", ctx.filterTip);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.imageBorder);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tip", ctx.borderTip);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.imageStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.imageTransform);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.editorStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.wallpaper.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dropHeight", 180);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _editor_control_component__WEBPACK_IMPORTED_MODULE_0__.EditorControlComponent, _aspect_ratio_editor_component__WEBPACK_IMPORTED_MODULE_1__.AspectRatioEditorComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutGapDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _info_component__WEBPACK_IMPORTED_MODULE_2__.InfoComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _image_loader_component__WEBPACK_IMPORTED_MODULE_3__.ImageLoaderComponent], encapsulation: 2 });


/***/ }),

/***/ 5439:
/*!***************************************************!*\
  !*** ./src/app/dialogs/confirm/confirm.dialog.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialog": () => (/* binding */ ConfirmDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 781);




class ConfirmDialog {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        if (this.data) {
            this.data.title = this.data.title
                ? this.data.title
                : 'Confirm Action?';
            this.data.content = this.data.content
                ? this.data.content
                : 'Are you sure you would like to perform this action?';
        }
        else {
            this.data = {
                title: 'Confirm Action?',
                content: 'Are you sure you would like to perform this action?'
            };
        }
    }
}
ConfirmDialog.ɵfac = function ConfirmDialog_Factory(t) { return new (t || ConfirmDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialog, selectors: [["confirm-dialog"]], decls: 11, vars: 4, consts: [[1, "mat-typography"], ["mat-dialog-title", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "color", "warn", 3, "mat-dialog-close"]], template: function ConfirmDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], encapsulation: 2 });


/***/ }),

/***/ 6321:
/*!**************************************************!*\
  !*** ./src/app/directives/backdrop.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackdropDirective": () => (/* binding */ BackdropDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class BackdropDirective {
    constructor(el) {
        this.el = el;
        this.filters = 'blur(30px) brightness(1.8)';
        this.hover = 'blur(30px) brightness(1.8)';
    }
    ngOnInit() {
        this.el.nativeElement.style.backdropFilter = this.filters;
        this.el.nativeElement.classList.add('backdropped');
    }
    onMouseEnter() {
        this.el.nativeElement.style.backdropFilter = this.hover;
    }
    onMouseLeave() {
        this.el.nativeElement.style.backdropFilter = this.filters;
    }
}
BackdropDirective.ɵfac = function BackdropDirective_Factory(t) { return new (t || BackdropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
BackdropDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BackdropDirective, selectors: [["", "backdrop", ""]], hostBindings: function BackdropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function BackdropDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function BackdropDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { filters: "filters", hover: "hover" } });


/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ 8662);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/badge */ 330);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ 3894);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ 3616);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);






















class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__.FlexLayoutModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__.MatBadgeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatLineModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOptionModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatPseudoCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__.FlexLayoutModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__.MatBadgeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatLineModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOptionModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatPseudoCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule] }); })();


/***/ }),

/***/ 6365:
/*!****************************************!*\
  !*** ./src/app/models/aspect-ratio.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AspectRatio": () => (/* binding */ AspectRatio)
/* harmony export */ });
class AspectRatio {
    constructor(width, height, locked = false) {
        this.ensureGreaterThanZero = (value) => value > 0 ? value : 1;
        this.getAspectHeight = (newWidth) => this.ensureGreaterThanZero(Math.floor(newWidth * (this.height / this.width)));
        this.getAspectWidth = (newHeight) => this.ensureGreaterThanZero(Math.floor(newHeight * (this.width / this.height)));
        this.scale = (wFactor, hFactor) => new AspectRatio(this.ensureGreaterThanZero(Math.floor(this.width * wFactor)), this.ensureGreaterThanZero(Math.floor(this.height * hFactor)));
        this.setHeight = (height, lock = this.locked) => {
            const width = this.getAspectWidth(height);
            this._height = height;
            if (lock)
                this._width = width;
        };
        this.setWidth = (width, lock = this.locked) => {
            const height = this.getAspectHeight(width);
            this._width = width;
            if (lock)
                this._height = height;
        };
        this.reset = () => {
            this._width = this.originalWidth;
            this._height = this.originalHeight;
        };
        this.render = () => `${this.width} x ${this.height}`;
        this._originalWidth = this._width = width;
        this._originalHeight = this._height = height;
        this.locked = locked;
    }
    get originalWidth() { return this._originalWidth; }
    get originalHeight() { return this._originalHeight; }
    get width() { return this._width; }
    get height() { return this._height; }
}


/***/ }),

/***/ 2139:
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AspectRatio": () => (/* reexport safe */ _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__.AspectRatio),
/* harmony export */   "Preview": () => (/* reexport safe */ _preview__WEBPACK_IMPORTED_MODULE_1__.Preview),
/* harmony export */   "Wallpaper": () => (/* reexport safe */ _wallpaper__WEBPACK_IMPORTED_MODULE_2__.Wallpaper)
/* harmony export */ });
/* harmony import */ var _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aspect-ratio */ 6365);
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview */ 7127);
/* harmony import */ var _wallpaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallpaper */ 8775);





/***/ }),

/***/ 7127:
/*!***********************************!*\
  !*** ./src/app/models/preview.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preview": () => (/* binding */ Preview)
/* harmony export */ });
/* harmony import */ var _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aspect-ratio */ 6365);

class Preview {
    constructor(width, height, wallpaper) {
        this.buildRatio = (source, container, padding = 0) => {
            const adjust = (source.width > container.width - padding) || (source.height > container.height - padding);
            if (adjust) {
                let w;
                let h;
                if (source.width > container.width - padding && source.height > container.height - padding) {
                    if (source.width >= source.height) {
                        w = container.width - padding;
                        h = source.getAspectHeight(w);
                    }
                    else {
                        h = container.height - padding;
                        w = source.getAspectWidth(h);
                    }
                    return this.buildRatio(new _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__.AspectRatio(w, h), container, padding);
                }
                else if (source.width > container.width - padding) {
                    w = container.width - padding;
                    h = source.getAspectHeight(w);
                    return new _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__.AspectRatio(w, h);
                }
                else {
                    h = container.height - padding;
                    w = source.getAspectWidth(h);
                    return new _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__.AspectRatio(w, h);
                }
            }
            else
                return source;
        };
        this.calculateRatio = (original, result, scaleDown = true) => {
            if (scaleDown) {
                return original > result
                    ? result / original
                    : original / result;
            }
            else {
                return original > result
                    ? original / result
                    : result / original;
            }
        };
        this.updateContainer = (wp) => {
            this.containerSize = this.buildRatio(wp.containerSize, this.previewSize, 12);
            const wFactor = this.calculateRatio(wp.containerSize.width, this.containerSize.width);
            const hFactor = this.calculateRatio(wp.containerSize.height, this.containerSize.height);
            return { wFactor, hFactor };
        };
        this.updateImage = (wp, scale) => this.imageSize = wp.imageSize.scale(scale.wFactor, scale.hFactor);
        this.update = (width, height, wallpaper) => {
            this.previewSize = new _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__.AspectRatio(width, height);
            if ((wallpaper === null || wallpaper === void 0 ? void 0 : wallpaper.containerSize) && (wallpaper === null || wallpaper === void 0 ? void 0 : wallpaper.imageSize)) {
                const scale = this.updateContainer(wallpaper);
                this.updateImage(wallpaper, scale);
            }
        };
        this.render = () => this.containerSize && this.imageSize
            ? `Preview: ${this.previewSize.render()}, Container: ${this.containerSize.render()}, Image: ${this.imageSize.render()}`
            : `Preview: ${this.previewSize.render()}, Pending Wallpaper`;
        this.update(width, height, wallpaper);
    }
}


/***/ }),

/***/ 8775:
/*!*************************************!*\
  !*** ./src/app/models/wallpaper.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wallpaper": () => (/* binding */ Wallpaper)
/* harmony export */ });
/* harmony import */ var _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aspect-ratio */ 6365);

class Wallpaper {
    constructor(src, url, file, imageWidth, imageHeight, name = '', containerWidth = undefined, containerHeight = undefined) {
        this.alignment = 'center center';
        this.backgroundSelect = true;
        this.containerBorder = '';
        this.containerClip = '';
        this.containerColor = '';
        this.containerFilter = 'brightness(1.8)';
        this.containerImage = '';
        this.containerPosition = '';
        this.containerRepeat = '';
        this.containerBgSize = 'cover';
        this.containerStyle = '';
        this.imageFilter = '';
        this.imageBorder = '';
        this.imageStyle = '';
        this.imageTransform = '';
        this.setContainerHeight = (height) => this.containerSize.setHeight(height);
        this.setContainerWidth = (width) => this.containerSize.setWidth(width);
        this.setImageHeight = (height) => this.imageSize.setHeight(height);
        this.setImageWidth = (width) => this.imageSize.setWidth(width);
        this.render = () => `Container: ${this.containerSize.render()}, Image: ${this.imageSize.render()}`;
        this.reset = () => {
            this.containerSize.reset();
            this.imageSize.reset();
        };
        containerWidth = containerWidth && containerWidth > imageWidth ? containerWidth : imageWidth;
        containerHeight = containerHeight && containerHeight > imageHeight ? containerHeight : imageHeight;
        this.src = src;
        this.url = url;
        this.file = file;
        this.name = name;
        this._imageSize = new _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__.AspectRatio(imageWidth, imageHeight, true);
        this._containerSize = new _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__.AspectRatio(containerWidth, containerHeight);
    }
    get containerSize() { return this._containerSize; }
    get imageSize() { return this._imageSize; }
}


/***/ }),

/***/ 6335:
/*!*************************************!*\
  !*** ./src/app/pipes/bytes.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BytesPipe": () => (/* binding */ BytesPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class BytesPipe {
    transform(value, precision = 2) {
        if (!value || value === 0)
            return '0 Bytes';
        const k = 1024, dm = precision <= 0 ? 0 : precision || 2, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(value) / Math.log(k));
        return parseFloat((value / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
}
BytesPipe.ɵfac = function BytesPipe_Factory(t) { return new (t || BytesPipe)(); };
BytesPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "bytes", type: BytesPipe, pure: true });


/***/ }),

/***/ 5911:
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class TruncatePipe {
    transform(value, limit = 50, ellipses = '...') {
        if (!value)
            return '';
        return value.length <= limit ? value : `${value.substr(0, limit)}${ellipses}`;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });


/***/ }),

/***/ 2597:
/*!******************************************!*\
  !*** ./src/app/services/core.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreService": () => (/* binding */ CoreService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3399);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);




class CoreService {
    constructor() {
        this.ssnPattern = /^(?!(000|666|9))\d{3}-(?!(00))\d{2}-(?!(0000))\d{4}$/g;
        this.getUploadOptions = () => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
            headers.set('Accept', 'application/json');
            headers.delete('Content-Type');
            return headers;
        };
        this.getTextOptions = () => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
            headers.set('Content-Type', 'text/plain');
            headers.delete('Pragma');
            return headers;
        };
        this.urlEncode = (value) => {
            const regex = /[^a-zA-Z0-9-.]/gi;
            let newValue = value.replace(/\s/g, '-').toLowerCase();
            newValue = newValue.replace(regex, '');
            return newValue;
        };
        this.generateInputObservable = (input) => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(input.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((event) => event.target.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)());
    }
}
CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(); };
CoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1866:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreService": () => (/* reexport safe */ _core_service__WEBPACK_IMPORTED_MODULE_0__.CoreService),
/* harmony export */   "ResizeService": () => (/* reexport safe */ _resize_service__WEBPACK_IMPORTED_MODULE_1__.ResizeService),
/* harmony export */   "SnackerService": () => (/* reexport safe */ _snacker_service__WEBPACK_IMPORTED_MODULE_2__.SnackerService),
/* harmony export */   "ThemeService": () => (/* reexport safe */ _theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService)
/* harmony export */ });
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.service */ 2597);
/* harmony import */ var _resize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resize.service */ 4357);
/* harmony import */ var _snacker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snacker.service */ 9964);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme.service */ 8140);






/***/ }),

/***/ 4357:
/*!********************************************!*\
  !*** ./src/app/services/resize.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeService": () => (/* binding */ ResizeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);


class ResizeService {
    constructor() {
        this.size = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.size$ = this.size.asObservable();
        this.init = () => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(window, 'resize')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => { return { width: window.innerWidth, height: window.innerHeight }; }))
            .subscribe(data => this.size.next(data));
    }
}
ResizeService.ɵfac = function ResizeService_Factory(t) { return new (t || ResizeService)(); };
ResizeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ResizeService, factory: ResizeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9964:
/*!*********************************************!*\
  !*** ./src/app/services/snacker.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackerService": () => (/* binding */ SnackerService)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class SnackerService {
    constructor(snackbar) {
        this.snackbar = snackbar;
        this.config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        this.sendMessage = (message) => this.snackbar.open(message, 'Close', this.config);
        this.setClasses = (classes) => {
            classes.push('snacker');
            this.config.panelClass = classes;
        };
        this.sendColorMessage = (message, colors) => {
            this.setClasses(colors);
            this.sendMessage(message);
        };
        this.sendErrorMessage = (message) => {
            this.setClasses(['snacker-red']);
            this.sendMessage(message);
        };
        this.sendWarningMessage = (message) => {
            this.setClasses(['snacker-orange']);
            this.sendMessage(message);
        };
        this.sendSuccessMessage = (message) => {
            this.setClasses(['snacker-green']);
            this.sendMessage(message);
        };
        this.config.duration = 5000;
        this.config.panelClass = [];
    }
    setDuration(duration) {
        this.config.duration = duration;
    }
}
SnackerService.ɵfac = function SnackerService_Factory(t) { return new (t || SnackerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar)); };
SnackerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SnackerService, factory: SnackerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8140:
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);


class ThemeService {
    constructor(overlay) {
        this.overlay = overlay;
        this.key = 'jps-wp-editor-theme';
        this.cacheTheme = () => localStorage.setItem(this.key, this.isLight.toString());
        this.loadTheme = () => {
            var _a;
            const cache = localStorage.getItem(this.key);
            return cache
                ? cache === 'true'
                : (_a = this.isLight) !== null && _a !== void 0 ? _a : true;
        };
        this.setOverlayContainerTheme = () => {
            if (this.isLight) {
                this.overlay.getContainerElement().classList.remove('app-dark');
                this.overlay.getContainerElement().classList.add('app-light');
            }
            else {
                this.overlay.getContainerElement().classList.remove('app-light');
                this.overlay.getContainerElement().classList.add('app-dark');
            }
        };
        this.toggleTheme = () => {
            this.isLight = !this.isLight;
            this.setOverlayContainerTheme();
            this.cacheTheme();
        };
        this.isLight = this.loadTheme();
        this.setOverlayContainerTheme();
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayContainer)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map