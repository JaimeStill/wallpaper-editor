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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ 1866);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header.component */ 4615);
/* harmony import */ var _components_image_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/image-loader.component */ 7300);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _components_wallpaper_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/wallpaper-editor.component */ 4987);
















const _c0 = ["previewElement"];
function AppComponent_ng_container_4_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.preview.render());
} }
function AppComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppComponent_ng_container_4_p_5_Template, 2, 1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("height", ctx_r1.preview.imageSize.height)("width", ctx_r1.preview.imageSize.width)("src", ctx_r1.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", ctx_r1.wallpaper.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.wallpaper.render());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.preview);
} }
function AppComponent_image_loader_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "image-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("loaded", function AppComponent_image_loader_5_Template_image_loader_loaded_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.load($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dropWidth", 400);
} }
function AppComponent_section_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AppComponent_section_6_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.wallpaper.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "image-loader", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("loaded", function AppComponent_section_6_Template_image_loader_loaded_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.load($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "wallpaper-editor", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.wallpaper.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mini", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("wallpaper", ctx_r3.wallpaper);
} }
class AppComponent {
    constructor(sanitizer, themer) {
        this.sanitizer = sanitizer;
        this.themer = themer;
        this.loading = false;
        this.updatePreview = (el) => this.preview = new _models__WEBPACK_IMPORTED_MODULE_0__.Preview(el.offsetWidth, el.offsetHeight, this.wallpaper);
        this.resize = () => {
            var _a;
            if ((_a = this.previewElement) === null || _a === void 0 ? void 0 : _a.nativeElement)
                this.updatePreview(this.previewElement.nativeElement);
        };
        this.load = (file) => {
            if (file) {
                this.loading = true;
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.onload = () => {
                    var _a;
                    this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(img.src);
                    this.wallpaper = new _models__WEBPACK_IMPORTED_MODULE_0__.Wallpaper(img.src, this.imageSrc, file, img.width, img.height, (_a = file.name) === null || _a === void 0 ? void 0 : _a.split('.')[0]);
                    this.updatePreview(this.previewElement.nativeElement);
                    this.loading = false;
                };
            }
        };
    }
    ngAfterViewInit() {
        var _a;
        if ((_a = this.previewElement) === null || _a === void 0 ? void 0 : _a.nativeElement)
            this.updatePreview(this.previewElement.nativeElement);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.ThemeService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.previewElement = _t.first);
    } }, decls: 7, vars: 6, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "mat-typography", "mat-app-background", "app-frame", 3, "ngClass"], ["heading", "Wallpaper Editor", "containerStyle", "p8 background-card", 3, "loading"], ["fxFlex", "", "fxLayout", "column", 1, "p8", "scroll-container", "background-card", 3, "fxLayoutAlign", "resize"], ["previewElement", ""], [4, "ngIf"], [3, "dropWidth", "loaded", 4, "ngIf"], ["fxLayout.lt-md", "column", "fxLayout.gt-sm", "row | wrap", "fxLayoutAlign", "start stretch", "class", "p8 background-default el-8 scroll-container control-panel", 4, "ngIf"], [3, "height", "width", "src", "alt"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "monospace", "p8"], [1, "m4"], ["class", "m4", 4, "ngIf"], [3, "dropWidth", "loaded"], ["fxLayout.lt-md", "column", "fxLayout.gt-sm", "row | wrap", "fxLayoutAlign", "start stretch", 1, "p8", "background-default", "el-8", "scroll-container", "control-panel"], ["fxLayout", "column", "fxLayoutAlign", "start stretch"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "4px", 1, "m4"], ["fxFlex", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Export Wallpaper"], [1, "material-icons-outlined"], [3, "mini", "loaded"], ["fxFlex", "", 3, "wallpaper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "section", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function AppComponent_Template_section_resize_2_listener() { return ctx.resize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_ng_container_4_Template, 6, 6, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppComponent_image_loader_5_Template, 1, 1, "image-loader", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AppComponent_section_6_Template, 12, 3, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "app-light" : "app-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fxLayoutAlign", (tmp_2_0 = ctx.wallpaper == null ? null : ctx.wallpaper.alignment) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "center center");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.imageSrc && ctx.wallpaper);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.wallpaper);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.wallpaper);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultClassDirective, _components_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _components_image_loader_component__WEBPACK_IMPORTED_MODULE_3__.ImageLoaderComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutGapDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _components_wallpaper_editor_component__WEBPACK_IMPORTED_MODULE_4__.WallpaperEditorComponent], encapsulation: 2 });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_aspect_ratio_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/aspect-ratio-editor.component */ 8600);
/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header.component */ 4615);
/* harmony import */ var _components_image_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/image-loader.component */ 7300);
/* harmony import */ var _components_link_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/link-loader.component */ 6007);
/* harmony import */ var _components_wallpaper_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/wallpaper-editor.component */ 4987);
/* harmony import */ var _dialogs_confirm_confirm_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogs/confirm/confirm.dialog */ 5439);
/* harmony import */ var _directives_backdrop_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/backdrop.directive */ 6321);
/* harmony import */ var _pipes_bytes_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/bytes.pipe */ 6335);
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/truncate.pipe */ 5911);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_aspect_ratio_editor_component__WEBPACK_IMPORTED_MODULE_2__.AspectRatioEditorComponent, _components_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_image_loader_component__WEBPACK_IMPORTED_MODULE_4__.ImageLoaderComponent, _components_link_loader_component__WEBPACK_IMPORTED_MODULE_5__.LinkLoaderComponent, _components_wallpaper_editor_component__WEBPACK_IMPORTED_MODULE_6__.WallpaperEditorComponent, _dialogs_confirm_confirm_dialog__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialog, _directives_backdrop_directive__WEBPACK_IMPORTED_MODULE_8__.BackdropDirective, _pipes_bytes_pipe__WEBPACK_IMPORTED_MODULE_9__.BytesPipe, _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_10__.TruncatePipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
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
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);









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
        this.update = () => {
            this.w = this.ar.width;
            this.h = this.ar.height;
        };
        this.updateLock = (locked) => this.ar.locked = locked;
        this.reset = () => {
            this.ar.reset();
            this.update();
        };
    }
    set data(data) {
        if (data) {
            this.ar = data;
            this.update();
        }
    }
    ngAfterViewInit() {
        this.update();
        this.subs.push(this.core.generateInputObservable(this.width)
            .subscribe((data) => {
            if (Number.isInteger(+data)) {
                this.ar.setWidth(+data);
                this.update();
            }
        }), this.core.generateInputObservable(this.height)
            .subscribe((data) => {
            if (Number.isInteger(+data)) {
                this.ar.setHeight(+data);
                this.update();
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
    } }, inputs: { data: "data", gap: "gap", lockIcon: "lockIcon", unlockIcon: "unlockIcon", lockStyle: "lockStyle", unlockStyle: "unlockStyle" }, decls: 20, vars: 12, consts: [["fxLayout", "row", "fxLayoutAlign", "start center", 3, "fxLayoutGap"], [3, "value", "change"], [3, "value"], ["fxFlex", ""], ["matInput", "", "type", "number", "min", "0", 3, "ngModel", "ngModelChange"], ["width", ""], ["height", ""], ["mat-button", "", "color", "primary", 3, "click"]], template: function AspectRatioEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-button-toggle-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AspectRatioEditorComponent_Template_mat_button_toggle_group_change_1_listener($event) { return ctx.updateLock($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AspectRatioEditorComponent_Template_input_ngModelChange_11_listener($event) { return ctx.w = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 4, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AspectRatioEditorComponent_Template_input_ngModelChange_16_listener($event) { return ctx.h = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 7);
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutGapDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton], encapsulation: 2 });


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
        this.mini = false;
        this.dropWidth = 'auto';
        this.dropHeight = 440;
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
    ngOnInit() {
        this.dropHeight = this.mini
            ? 120
            : this.dropHeight;
    }
}
ImageLoaderComponent.ɵfac = function ImageLoaderComponent_Factory(t) { return new (t || ImageLoaderComponent)(); };
ImageLoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImageLoaderComponent, selectors: [["image-loader"]], viewQuery: function ImageLoaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, inputs: { mini: "mini", dropWidth: "dropWidth", dropHeight: "dropHeight", dropStyle: "dropStyle", dropIconScale: "dropIconScale", dropIcon: "dropIcon", dropIconClass: "dropIconClass" }, outputs: { loaded: "loaded" }, decls: 10, vars: 13, consts: [["type", "file", "accept", "image/*", 1, "styled", 3, "change"], ["fileInput", ""], ["fxLayout", "column", "fxLayoutAlign", "start stretch"], [1, "drop-container", "cursor-pointer", 3, "ngClass", "click", "drop", "dragover", "dragleave"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "drop-overlay"], [3, "ngClass"], ["fxFlexAlign", "center", 1, "m4", "mat-caption"], [3, "loaded"]], template: function ImageLoaderComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _aspect_ratio_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aspect-ratio-editor.component */ 8600);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 2220);












function WallpaperEditorComponent_mat_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", a_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](a_r5);
} }
class WallpaperEditorComponent {
    constructor() {
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
    }
}
WallpaperEditorComponent.ɵfac = function WallpaperEditorComponent_Factory(t) { return new (t || WallpaperEditorComponent)(); };
WallpaperEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WallpaperEditorComponent, selectors: [["wallpaper-editor"]], inputs: { wallpaper: "wallpaper", editorStyle: "editorStyle" }, decls: 51, vars: 12, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch"], ["fxLayout", "row | wrap", "fxLayoutAlign", "start center"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxFlex", "", 1, "p8", "m4", "background-card", "rounded"], [1, "mat-subheading-1"], [3, "data"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "p8", "m4", "background-card", "rounded"], ["fxLayout", "row | wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "12px"], ["fxFlex", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["matTooltipClass", "pre-line large-tooltip", "matTooltipPosition", "above", 3, "matTooltip"], ["backdropInfo", "matTooltip"], ["filterInfo", "matTooltip"], ["borderInfo", "matTooltip"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matTooltipClass", "pre-line large-tooltip", "matTooltipPosition", "above", "matTooltip", "Indicates alignment of the image within the container"], ["alignInfo", "matTooltip"], [3, "value"]], template: function WallpaperEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Container Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "aspect-ratio-editor", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Image Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "aspect-ratio-editor", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Container Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_17_listener($event) { return ctx.wallpaper.backdropFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WallpaperEditorComponent_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Image Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_25_listener($event) { return ctx.wallpaper.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WallpaperEditorComponent_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-icon", 10, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Image Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_input_ngModelChange_37_listener($event) { return ctx.wallpaper.border = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WallpaperEditorComponent_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-icon", 10, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Alignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WallpaperEditorComponent_Template_mat_select_ngModelChange_45_listener($event) { return ctx.wallpaper.alignment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, WallpaperEditorComponent_mat_option_46_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WallpaperEditorComponent_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49); return _r4.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-icon", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.editorStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.wallpaper.containerSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.wallpaper.imageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.wallpaper.backdropFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.backdropTip);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.wallpaper.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.filterTip);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.wallpaper.border);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.borderTip);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.wallpaper.alignment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.alignments);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _aspect_ratio_editor_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioEditorComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutGapDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption], encapsulation: 2 });


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
        this.getAspectHeight = (newWidth) => Math.floor(newWidth * (this.height / this.width));
        this.getAspectWidth = (newHeight) => Math.floor(newHeight * (this.height / this.width));
        this.setHeight = (height, lock = this.locked) => {
            const width = this.getAspectWidth(height);
            this._height = height;
            if (lock)
                this._width = width > 0 ? width : 0;
        };
        this.setWidth = (width, lock = this.locked) => {
            const height = this.getAspectHeight(width);
            this._width = width;
            if (lock)
                this._height = height > 0 ? height : 0;
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
            const sideA = source.width > source.height
                ? source.width > (container.width - padding)
                    ? { size: container.width - padding, isWidth: true }
                    : { size: source.width, isWidth: true }
                : source.height > (container.height - padding)
                    ? { size: container.height - padding, isWidth: false }
                    : { size: source.height, isWidth: false };
            const sideB = sideA.isWidth
                ? { size: source.getAspectHeight(sideA.size), isWidth: false }
                : { size: source.getAspectWidth(sideA.size), isWidth: true };
            return sideA.isWidth
                ? new _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__.AspectRatio(sideA.size, sideB.size)
                : new _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__.AspectRatio(sideB.size, sideA.size);
        };
        this.updateContainer = (wp) => this.containerSize = this.buildRatio(wp.containerSize, this.previewSize, 24);
        this.updateImage = (wp) => this.imageSize = this.buildRatio(wp.imageSize, this.containerSize);
        this.update = (width, height, wallpaper) => {
            this.previewSize = new _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__.AspectRatio(width, height);
            if ((wallpaper === null || wallpaper === void 0 ? void 0 : wallpaper.containerSize) && (wallpaper === null || wallpaper === void 0 ? void 0 : wallpaper.imageSize)) {
                this.updateContainer(wallpaper);
                this.updateImage(wallpaper);
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
        this.backdropFilter = '';
        this.filter = '';
        this.border = '';
        this.alignment = 'center center';
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
/* harmony export */   "SnackerService": () => (/* reexport safe */ _snacker_service__WEBPACK_IMPORTED_MODULE_1__.SnackerService),
/* harmony export */   "ThemeService": () => (/* reexport safe */ _theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService)
/* harmony export */ });
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.service */ 2597);
/* harmony import */ var _snacker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snacker.service */ 9964);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.service */ 8140);





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