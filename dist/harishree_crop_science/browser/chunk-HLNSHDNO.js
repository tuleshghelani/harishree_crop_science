import {
  environment
} from "./chunk-TP5SVJPG.js";
import {
  AsyncPipe,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  DomSanitizer,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  Location,
  Meta,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  PlatformLocation,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  Title,
  TransferState,
  Version,
  ViewChild,
  __async,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  debounceTime,
  forkJoin,
  forwardRef,
  from,
  fromEvent,
  getDOM,
  inject,
  isPlatformBrowser,
  isPromise,
  isSubscribable,
  makeStateKey2 as makeStateKey,
  map,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-FE7VCITN.js";

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static {
    this.\u0275fac = function BaseControlValueAccessor_Factory(t) {
      return new (t || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BaseControlValueAccessor
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BuiltInControlValueAccessor_BaseFactory;
      return function BuiltInControlValueAccessor_Factory(t) {
        return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(t || _BuiltInControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BuiltInControlValueAccessor,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxControlValueAccessor_BaseFactory;
      return function CheckboxControlValueAccessor_Factory(t) {
        return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(t || _CheckboxControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxControlValueAccessor,
      selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
      hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.checked);
          })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static {
    this.\u0275fac = function DefaultValueAccessor_Factory(t) {
      return new (t || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _DefaultValueAccessor,
      selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
      hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
            return ctx._handleInput($event.target.value);
          })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
            return ctx._compositionStart();
          })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
            return ctx._compositionEnd($event.target.value);
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control)
      this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatus_Factory(t) {
      return new (t || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatus,
      selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
      hostVars: 14,
      hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatusGroup_Factory(t) {
      return new (t || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatusGroup,
      selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
      hostVars: 16,
      hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException() {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formControlNameExample}`);
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = false;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this.pristine = true;
    this.touched = false;
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  /**
   * Marks the control as `touched`. A control is touched by focus and
   * blur events that do not change the value.
   *
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsTouched(opts = {}) {
    this.touched = true;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(opts);
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   */
  markAllAsTouched() {
    this.markAsTouched({
      onlySelf: true
    });
    this._forEachChild((control) => control.markAllAsTouched());
  }
  /**
   * Marks the control as `untouched`.
   *
   * If the control has any children, also marks all children as `untouched`
   * and recalculates the `touched` status of all parent controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after the marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsUntouched(opts = {}) {
    this.touched = false;
    this._pendingTouched = false;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /**
   * Marks the control as `dirty`. A control becomes dirty when
   * the control's value is changed through the UI; compare `markAsTouched`.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsDirty(opts = {}) {
    this.pristine = false;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(opts);
    }
  }
  /**
   * Marks the control as `pristine`.
   *
   * If the control has any children, marks all children as `pristine`,
   * and recalculates the `pristine` status of all parent
   * controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   *
   * @param opts Configuration options that determine how the control emits events after
   * marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsPristine(opts = {}) {
    this.pristine = true;
    this._pendingDirty = false;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /**
   * Marks the control as `pending`.
   *
   * A control is pending while the control performs async validation.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates changes and
   * emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event with the latest status the control is marked pending.
   * When false, no events are emitted.
   *
   */
  markAsPending(opts = {}) {
    this.status = PENDING;
    if (opts.emitEvent !== false) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(opts);
    }
  }
  /**
   * Disables the control. This means the control is exempt from validation checks and
   * excluded from the aggregate value of any parent. Its status is `DISABLED`.
   *
   * If the control has children, all children are also disabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control is disabled.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is disabled.
   * When false, no events are emitted.
   */
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine();
      }
      this._parent._updateTouched();
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  /**
   * Recalculates the value and validation status of the control.
   *
   * By default, it also updates the value and validity of its ancestors.
   *
   * @param opts Configuration options determine how the control propagates changes and emits events
   * after updates and validity checks are applied.
   * * `onlySelf`: When true, only update this control. When false or not supplied,
   * update all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is updated.
   * When false, no events are emitted.
   */
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(opts.emitEvent);
      }
    }
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = true;
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = false;
        this.setErrors(errors, {
          emitEvent
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      this._hasOwnPendingAsyncValidator = false;
    }
  }
  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   *
   * Calling `setErrors` also updates the validity of the parent control.
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control errors are set.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event after the errors are set.
   *
   * @usageNotes
   *
   * ### Manually set the errors for a control
   *
   * ```
   * const login = new FormControl('someLogin');
   * login.setErrors({
   *   notUnique: true
   * });
   *
   * expect(login.valid).toEqual(false);
   * expect(login.errors).toEqual({ notUnique: true });
   *
   * login.setValue('someOtherLogin');
   *
   * expect(login.valid).toEqual(true);
   * ```
   */
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null)
      return null;
    if (!Array.isArray(currPath))
      currPath = currPath.split(".");
    if (currPath.length === 0)
      return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled())
      return DISABLED;
    if (this.errors)
      return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
      return PENDING;
    if (this._anyControlsHaveStatus(INVALID))
      return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts = {}) {
    this.pristine = !this._anyControlsDirty();
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /** @internal */
  _updateTouched(opts = {}) {
    this.touched = this._anyControlsTouched();
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name])
      return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    if (control)
      this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static {
    this.\u0275fac = function NgForm_Factory(t) {
      return new (t || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgForm,
      selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
      hostBindings: function NgForm_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function NgForm_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        options: [InputFlags.None, "ngFormOptions", "options"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty)
        this.markAsDirty();
      if (this._pendingTouched)
        this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AbstractFormGroupDirective_BaseFactory;
      return function AbstractFormGroupDirective_Factory(t) {
        return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(t || _AbstractFormGroupDirective);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractFormGroupDirective,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static {
    this.\u0275fac = function NgModelGroup_Factory(t) {
      return new (t || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModelGroup,
      selectors: [["", "ngModelGroup", ""]],
      inputs: {
        name: [InputFlags.None, "ngModelGroup", "name"]
      },
      exportAs: ["ngModelGroup"],
      features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name)
      this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static {
    this.\u0275fac = function NgModel_Factory(t) {
      return new (t || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModel,
      selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
      inputs: {
        name: "name",
        isDisabled: [InputFlags.None, "disabled", "isDisabled"],
        model: [InputFlags.None, "ngModel", "model"],
        options: [InputFlags.None, "ngModelOptions", "options"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngModel"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static {
    this.\u0275fac = function \u0275NgNoValidate_Factory(t) {
      return new (t || _\u0275NgNoValidate)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgNoValidate,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NumberValueAccessor_BaseFactory;
      return function NumberValueAccessor_Factory(t) {
        return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(t || _NumberValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NumberValueAccessor,
      selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
      hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control)
      return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static {
    this.\u0275fac = function RadioControlRegistry_Factory(t) {
      return new (t || _RadioControlRegistry)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RadioControlRegistry,
      factory: _RadioControlRegistry.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName)
      this.name = this.formControlName;
  }
  static {
    this.\u0275fac = function RadioControlValueAccessor_Factory(t) {
      return new (t || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RadioControlValueAccessor,
      selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
      hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
            return ctx.onChange();
          })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RangeValueAccessor_BaseFactory;
      return function RangeValueAccessor_Factory(t) {
        return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(t || _RangeValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RangeValueAccessor,
      selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
      hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static {
    this.\u0275fac = function FormControlDirective_Factory(t) {
      return new (t || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlDirective,
      selectors: [["", "formControl", ""]],
      inputs: {
        form: [InputFlags.None, "formControl", "form"],
        isDisabled: [InputFlags.None, "disabled", "isDisabled"],
        model: [InputFlags.None, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static {
    this.\u0275fac = function FormGroupDirective_Factory(t) {
      return new (t || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupDirective,
      selectors: [["", "formGroup", ""]],
      hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function FormGroupDirective_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        form: [InputFlags.None, "formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static {
    this.\u0275fac = function FormGroupName_Factory(t) {
      return new (t || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupName,
      selectors: [["", "formGroupName", ""]],
      inputs: {
        name: [InputFlags.None, "formGroupName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
  static {
    this.\u0275fac = function FormArrayName_Factory(t) {
      return new (t || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormArrayName,
      selectors: [["", "formArrayName", ""]],
      inputs: {
        name: [InputFlags.None, "formArrayName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added)
      this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException();
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static {
    this.\u0275fac = function FormControlName_Factory(t) {
      return new (t || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlName,
      selectors: [["", "formControlName", ""]],
      inputs: {
        name: [InputFlags.None, "formControlName", "name"],
        isDisabled: [InputFlags.None, "disabled", "isDisabled"],
        model: [InputFlags.None, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectControlValueAccessor_BaseFactory;
      return function SelectControlValueAccessor_Factory(t) {
        return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(t || _SelectControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectControlValueAccessor,
      selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
      hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select)
      this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select)
      this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function NgSelectOption_Factory(t) {
      return new (t || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgSelectOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectMultipleControlValueAccessor_BaseFactory;
      return function SelectMultipleControlValueAccessor_Factory(t) {
        return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(t || _SelectMultipleControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectMultipleControlValueAccessor,
      selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
      hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target);
          })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function \u0275NgSelectMultipleOption_Factory(t) {
      return new (t || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgSelectMultipleOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
  static {
    this.\u0275fac = function AbstractValidatorDirective_Factory(t) {
      return new (t || _AbstractValidatorDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractValidatorDirective,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxValidator_BaseFactory;
      return function MaxValidator_Factory(t) {
        return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(t || _MaxValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxValidator,
      selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
        }
      },
      inputs: {
        max: "max"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinValidator_BaseFactory;
      return function MinValidator_Factory(t) {
        return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(t || _MinValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinValidator,
      selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
        }
      },
      inputs: {
        min: "min"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RequiredValidator_BaseFactory;
      return function RequiredValidator_Factory(t) {
        return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(t || _RequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RequiredValidator,
      selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
      hostVars: 1,
      hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      inputs: {
        required: "required"
      },
      features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxRequiredValidator_BaseFactory;
      return function CheckboxRequiredValidator_Factory(t) {
        return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(t || _CheckboxRequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxRequiredValidator,
      selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275EmailValidator_BaseFactory;
      return function EmailValidator_Factory(t) {
        return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(t || _EmailValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _EmailValidator,
      selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
      inputs: {
        email: "email"
      },
      features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinLengthValidator_BaseFactory;
      return function MinLengthValidator_Factory(t) {
        return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(t || _MinLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinLengthValidator,
      selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
        }
      },
      inputs: {
        minlength: "minlength"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxLengthValidator_BaseFactory;
      return function MaxLengthValidator_Factory(t) {
        return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(t || _MaxLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxLengthValidator,
      selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
        }
      },
      inputs: {
        maxlength: "maxlength"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PatternValidator_BaseFactory;
      return function PatternValidator_Factory(t) {
        return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(t || _PatternValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _PatternValidator,
      selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function PatternValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
        }
      },
      inputs: {
        pattern: "pattern"
      },
      features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static {
    this.\u0275fac = function \u0275InternalFormsSharedModule_Factory(t) {
      return new (t || _\u0275InternalFormsSharedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _\u0275InternalFormsSharedModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1)
      return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled)
        return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static {
    this.\u0275fac = function FormBuilder_Factory(t) {
      return new (t || _FormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FormBuilder,
      factory: _FormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static {
    this.\u0275fac = function NonNullableFormBuilder_Factory(t) {
      return new (t || _NonNullableFormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NonNullableFormBuilder,
      factory: () => (() => inject(FormBuilder).nonNullable)(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275UntypedFormBuilder_BaseFactory;
      return function UntypedFormBuilder_Factory(t) {
        return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(t || _UntypedFormBuilder);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _UntypedFormBuilder,
      factory: _UntypedFormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("17.3.12");
var FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function FormsModule_Factory(t) {
      return new (t || _FormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _FormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function ReactiveFormsModule_Factory(t) {
      return new (t || _ReactiveFormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ReactiveFormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// node_modules/ngx-extended-pdf-viewer/fesm2020/ngx-extended-pdf-viewer.mjs
var _c0 = ["thumbnailViewTemplate"];
var _c1 = ["*"];
function PdfSidebarContentComponent_ng_content_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 0, ["*ngTemplateOutlet", "customThumbnail ? customThumbnail : defaultThumbnail"]);
  }
}
function PdfSidebarContentComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "div", 9);
    \u0275\u0275element(2, "img", 10);
    \u0275\u0275elementEnd()();
  }
}
function PdfSidebarComponent_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 0, ["*ngTemplateOutlet", "customSidebar ? customSidebar : defaultSidebar"]);
  }
}
function PdfSidebarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "pdf-sidebar-toolbar", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pdf-sidebar-content", 5);
    \u0275\u0275listener("thumbnailDrawn", function PdfSidebarComponent_ng_template_2_Template_pdf_sidebar_content_thumbnailDrawn_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.thumbnailDrawn.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r1.sidebarPositionTop);
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r1.hideSidebarToolbar ? "none" : "");
    \u0275\u0275advance();
    \u0275\u0275property("mobileFriendlyZoomScale", ctx_r1.mobileFriendlyZoomScale);
    \u0275\u0275advance();
    \u0275\u0275property("customThumbnail", ctx_r1.customThumbnail)("hideSidebarToolbar", ctx_r1.hideSidebarToolbar)("mobileFriendlyZoomScale", ctx_r1.mobileFriendlyZoomScale);
  }
}
function PdfShyButtonComponent_button_0_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 0, ["*ngIf", "!image", "role", "img", "aria-hidden", "true"]);
  }
}
function PdfShyButtonComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275listener("click", function PdfShyButtonComponent_button_0_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick($event));
    });
    \u0275\u0275template(1, PdfShyButtonComponent_button_0_ng_content_1_Template, 1, 0, "ng-content", 2);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cssClass);
    \u0275\u0275classProp("toggled", ctx_r1.toggled);
    \u0275\u0275property("id", ctx_r1.primaryToolbarId)("title", ctx_r1.title)("disabled", ctx_r1.disabled)("innerHTML", ctx_r1.imageHtml, \u0275\u0275sanitizeHtml);
    \u0275\u0275attribute("data-l10n-id", ctx_r1.l10nId)("aria-label", ctx_r1.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.image);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-l10n-id", ctx_r1.l10nLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.title);
  }
}
var _c2 = "button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}";
var _c3 = "button[_ngcontent-%COMP%]{margin-left:-2px!important;margin-right:-2px!important;padding:0}";
var _c4 = ["sizeSelector"];
function PdfZoomDropdownComponent_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    \u0275\u0275property("id", level_r1.id);
    \u0275\u0275attribute("value", level_r1.value)("data-l10n-id", level_r1.dataL10nId)("data-l10n-args", level_r1.dataL10nArgs);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r1.displayValue, " ");
  }
}
function PdfRotatePageComponent_pdf_shy_button_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "pdf-shy-button", 2);
    \u0275\u0275pipe(1, "responsiveCSSClass");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("action", ctx_r0.rotateCW)("cssClass", \u0275\u0275pipeBind2(1, 5, ctx_r0.showRotateButton, "hiddenXLView"))("disabled", ctx_r0.disableRotate)("order", 900)("closeOnClick", false);
  }
}
function PdfRotatePageComponent_pdf_shy_button_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "pdf-shy-button", 3);
    \u0275\u0275pipe(1, "responsiveCSSClass");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("action", ctx_r0.rotateCCW)("cssClass", \u0275\u0275pipeBind2(1, 5, ctx_r0.showRotateButton, "hiddenXLView"))("disabled", ctx_r0.disableRotate)("order", 1e3)("closeOnClick", false);
  }
}
var _c5 = "[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}";
var _c6 = "[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}";
function PdfStampEditorComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275pipe(1, "responsiveCSSClass");
    \u0275\u0275elementStart(2, "div", 3)(3, "button", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 5);
    \u0275\u0275element(5, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7, "Add image");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275pipeBind2(1, 2, ctx_r0.show, "hiddenTinyView"));
  }
}
function PdfEditorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "pdf-stamp-editor", 3)(2, "pdf-text-editor", 3)(3, "pdf-draw-editor", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("show", ctx_r0.showStampEditor);
    \u0275\u0275advance();
    \u0275\u0275property("show", ctx_r0.showTextEditor);
    \u0275\u0275advance();
    \u0275\u0275property("show", ctx_r0.showDrawEditor);
  }
}
function PdfEditorComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function PdfToolbarComponent_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 0, ["*ngTemplateOutlet", "customToolbar ? customToolbar : defaultToolbar"]);
  }
}
function PdfToolbarComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "pdf-toggle-sidebar", 9)(3, "pdf-find-button", 10)(4, "pdf-paging-area", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "pdf-zoom-toolbar", 12);
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275element(7, "pdf-document-properties", 14)(8, "pdf-no-spread", 15)(9, "pdf-odd-spread", 15)(10, "pdf-even-spread", 15);
    \u0275\u0275elementStart(11, "pdf-single-page-mode", 16);
    \u0275\u0275listener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_single_page_mode_pageViewModeChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updatePageViewMode($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "pdf-vertical-scroll-mode", 16);
    \u0275\u0275listener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_vertical_scroll_mode_pageViewModeChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updatePageViewMode($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "pdf-horizontal-scroll", 16);
    \u0275\u0275listener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_horizontal_scroll_pageViewModeChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updatePageViewMode($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "pdf-wrapped-scroll-mode", 16);
    \u0275\u0275listener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_wrapped_scroll_mode_pageViewModeChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updatePageViewMode($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "pdf-infinite-scroll", 16);
    \u0275\u0275listener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_infinite_scroll_pageViewModeChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updatePageViewMode($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "pdf-book-mode", 16);
    \u0275\u0275listener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_book_mode_pageViewModeChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updatePageViewMode($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "pdf-hand-tool", 17)(18, "pdf-select-tool", 18)(19, "pdf-rotate-page", 19)(20, "pdf-rotate-page", 19)(21, "pdf-presentation-mode", 20)(22, "pdf-open-file", 21)(23, "pdf-print", 22)(24, "pdf-download", 23)(25, "pdf-editor", 24)(26, "pdf-toggle-secondary-toolbar", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("show", ctx_r1.showSidebarButton)("sidebarVisible", ctx_r1.sidebarVisible);
    \u0275\u0275advance();
    \u0275\u0275property("showFindButton", ctx_r1.showFindButton)("textLayer", ctx_r1.textLayer)("findbarVisible", ctx_r1.findbarVisible);
    \u0275\u0275advance();
    \u0275\u0275property("showPagingButtons", ctx_r1.showPagingButtons);
    \u0275\u0275advance();
    \u0275\u0275property("showZoomButtons", ctx_r1.showZoomButtons)("zoomLevels", ctx_r1.zoomLevels);
    \u0275\u0275advance(2);
    \u0275\u0275property("show", ctx_r1.showPropertiesButton);
    \u0275\u0275advance();
    \u0275\u0275property("scrollMode", ctx_r1.scrollMode)("show", ctx_r1.showSpreadButton);
    \u0275\u0275advance();
    \u0275\u0275property("scrollMode", ctx_r1.scrollMode)("show", ctx_r1.showSpreadButton);
    \u0275\u0275advance();
    \u0275\u0275property("scrollMode", ctx_r1.scrollMode)("show", ctx_r1.showSpreadButton);
    \u0275\u0275advance();
    \u0275\u0275property("show", ctx_r1.showSinglePageModeButton)("pageViewMode", ctx_r1.pageViewMode)("scrollMode", ctx_r1.scrollMode);
    \u0275\u0275advance();
    \u0275\u0275property("show", ctx_r1.showVerticalScrollButton)("pageViewMode", ctx_r1.pageViewMode)("scrollMode", ctx_r1.scrollMode);
    \u0275\u0275advance();
    \u0275\u0275property("show", ctx_r1.showHorizontalScrollButton)("pageViewMode", ctx_r1.pageViewMode)("scrollMode", ctx_r1.scrollMode);
    \u0275\u0275advance();
    \u0275\u0275property("show", ctx_r1.showWrappedScrollButton)("pageViewMode", ctx_r1.pageViewMode)("scrollMode", ctx_r1.scrollMode);
    \u0275\u0275advance();
    \u0275\u0275property("show", ctx_r1.showInfiniteScrollButton)("pageViewMode", ctx_r1.pageViewMode)("scrollMode", ctx_r1.scrollMode);
    \u0275\u0275advance();
    \u0275\u0275property("show", ctx_r1.showBookModeButton)("pageViewMode", ctx_r1.pageViewMode)("scrollMode", ctx_r1.scrollMode);
    \u0275\u0275advance();
    \u0275\u0275property("showHandToolButton", ctx_r1.showHandToolButton);
    \u0275\u0275advance();
    \u0275\u0275property("showSelectToolButton", ctx_r1.showHandToolButton);
    \u0275\u0275advance();
    \u0275\u0275property("showRotateButton", ctx_r1.showRotateButton)("clockwise", true)("counterClockwise", false);
    \u0275\u0275advance();
    \u0275\u0275property("showRotateButton", ctx_r1.showRotateButton)("clockwise", false)("counterClockwise", true);
    \u0275\u0275advance();
    \u0275\u0275property("showPresentationModeButton", ctx_r1.showPresentationModeButton);
    \u0275\u0275advance();
    \u0275\u0275property("showOpenFileButton", ctx_r1.showOpenFileButton);
    \u0275\u0275advance();
    \u0275\u0275property("showPrintButton", ctx_r1.showPrintButton);
    \u0275\u0275advance();
    \u0275\u0275property("showDownloadButton", ctx_r1.showDownloadButton);
    \u0275\u0275advance();
    \u0275\u0275property("showDrawEditor", ctx_r1.showDrawEditor)("showTextEditor", ctx_r1.showTextEditor)("showStampEditor", ctx_r1.showStampEditor);
    \u0275\u0275advance();
    \u0275\u0275property("showSecondaryToolbarButton", ctx_r1.showSecondaryToolbarButton);
  }
}
function PdfSecondaryToolbarComponent_ng_template_1_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const button_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerHTML", button_r2.image, \u0275\u0275sanitizeHtml);
    \u0275\u0275attribute("aria-label", button_r2.title);
  }
}
function PdfSecondaryToolbarComponent_ng_template_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275pipe(1, "invertForSecondaryToolbar");
    \u0275\u0275listener("click", function PdfSecondaryToolbarComponent_ng_template_1_button_2_Template_button_click_0_listener($event) {
      const button_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onClick($event, button_r2.action, button_r2.eventBusName, button_r2.closeOnClick));
    });
    \u0275\u0275template(2, PdfSecondaryToolbarComponent_ng_template_1_button_2_span_2_Template, 1, 2, "span", 6);
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const button_r2 = ctx.$implicit;
    \u0275\u0275classProp("toggled", button_r2.toggled);
    \u0275\u0275property("id", button_r2.id)("ngClass", \u0275\u0275pipeBind1(1, 10, button_r2.cssClass))("title", button_r2.title);
    \u0275\u0275attribute("data-l10n-id", button_r2.l10nId)("aria-label", button_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", button_r2.image);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-l10n-id", button_r2.l10nLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(button_r2.title);
  }
}
function PdfSecondaryToolbarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275template(2, PdfSecondaryToolbarComponent_ng_template_1_button_2_Template, 5, 12, "button", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r2.secondaryToolbarTop)("transform", "scale(" + ctx_r2.mobileFriendlyZoomScale + ")")("transform-origin", "right top");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.pdfShyButtonService.buttons);
  }
}
function PdfFindInputAreaComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "pdf-search-input-field")(2, "pdf-find-previous")(3, "pdf-find-next");
    \u0275\u0275elementEnd();
  }
}
function PdfFindbarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275elementContainer(1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultFindbarButtons_r2 = \u0275\u0275reference(4);
    \u0275\u0275styleProp("transform", "scale(" + ctx_r0.mobileFriendlyZoomScale + ")")("transform-origin", "left top")("left", ctx_r0.findbarLeft)("top", ctx_r0.findbarTop);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.customFindbarButtons ? ctx_r0.customFindbarButtons : defaultFindbarButtons_r2);
  }
}
function PdfFindbarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "pdf-find-input-area", 4)(1, "pdf-find-highlight-all")(2, "pdf-find-match-case")(3, "pdf-match-diacritics")(4, "pdf-find-entire-word")(5, "pdf-find-results-count")(6, "pdf-findbar-message-container");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("customFindbarInputArea", ctx_r0.customFindbarInputArea);
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", !ctx_r0.showFindHighlightAll);
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", !ctx_r0.showFindMatchCase);
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", !ctx_r0.showFindMatchDiacritics);
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", !ctx_r0.showFindEntireWord);
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", !ctx_r0.showFindResultsCount);
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", !ctx_r0.showFindMessages);
  }
}
var _c7 = ["root"];
var _c8 = ["pdfSecondaryToolbarComponent"];
var _c9 = ["pdfsidebar"];
var _c10 = ["*", "*"];
function NgxExtendedPdfViewerComponent_pdf_dark_theme_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "pdf-dark-theme");
  }
}
function NgxExtendedPdfViewerComponent_pdf_light_theme_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "pdf-light-theme");
  }
}
function NgxExtendedPdfViewerComponent_ng_content_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 0, ["*ngTemplateOutlet", "customPdfViewer ? customPdfViewer : defaultPdfViewer"]);
  }
}
function NgxExtendedPdfViewerComponent_ng_template_5_div_5_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1, ["*ngTemplateOutlet", "customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar"]);
  }
}
function NgxExtendedPdfViewerComponent_ng_template_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, NgxExtendedPdfViewerComponent_ng_template_5_div_5_ng_content_1_Template, 1, 0, "ng-content", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const defaultFreeFloatingBar_r3 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.customFreeFloatingBar ? ctx_r1.customFreeFloatingBar : defaultFreeFloatingBar_r3);
  }
}
function NgxExtendedPdfViewerComponent_ng_template_5_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind2(2, 1, "unverified_signature_warning", "This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid. Please download the file and open it in Acrobat Reader to verify the signature is valid.")), " ");
  }
}
function NgxExtendedPdfViewerComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8, 2)(2, "div", 9)(3, "div")(4, "div", 10);
    \u0275\u0275listener("resize", function NgxExtendedPdfViewerComponent_ng_template_5_Template_div_resize_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onResize());
    }, false, \u0275\u0275resolveWindow);
    \u0275\u0275template(5, NgxExtendedPdfViewerComponent_ng_template_5_div_5_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(6, "pdf-sidebar", 12, 3);
    \u0275\u0275listener("thumbnailDrawn", function NgxExtendedPdfViewerComponent_ng_template_5_Template_pdf_sidebar_thumbnailDrawn_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.thumbnailDrawn.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275element(9, "pdf-dummy-components");
    \u0275\u0275elementStart(10, "pdf-toolbar", 14);
    \u0275\u0275listener("onToolbarLoaded", function NgxExtendedPdfViewerComponent_ng_template_5_Template_pdf_toolbar_onToolbarLoaded_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onToolbarLoaded($event));
    });
    \u0275\u0275twoWayListener("pageViewModeChange", function NgxExtendedPdfViewerComponent_ng_template_5_Template_pdf_toolbar_pageViewModeChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageViewMode, $event) || (ctx_r1.pageViewMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15)(12, "div", 16)(13, "div", 17)(14, "label", 18);
    \u0275\u0275text(15, "Font Color");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 17)(18, "label", 20);
    \u0275\u0275text(19, "Font Size");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 22)(22, "div", 16)(23, "div", 17)(24, "label", 23);
    \u0275\u0275text(25, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 17)(28, "label", 25);
    \u0275\u0275text(29, "Thickness");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17)(32, "label", 27);
    \u0275\u0275text(33, "Opacity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "pdf-secondary-toolbar", 29, 4);
    \u0275\u0275listener("spreadChange", function NgxExtendedPdfViewerComponent_ng_template_5_Template_pdf_secondary_toolbar_spreadChange_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSpreadChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "pdf-findbar", 30)(38, "pdf-context-menu");
    \u0275\u0275elementStart(39, "div", 31);
    \u0275\u0275template(40, NgxExtendedPdfViewerComponent_ng_template_5_div_40_Template, 4, 6, "div", 32);
    \u0275\u0275elementStart(41, "div", 33);
    \u0275\u0275listener("dblclick", function NgxExtendedPdfViewerComponent_ng_template_5_Template_div_dblclick_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomToPageWidth($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "pdf-error-message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 34);
    \u0275\u0275element(44, "pdf-password-dialog")(45, "pdf-document-properties-dialog")(46, "pdf-prepare-printing-dialog");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(47, "input", 35)(48, "div", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_23_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.minHeight ? ctx_r1.minHeight : ctx_r1.height);
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("body pdf-js-version-", ctx_r1.majorMinorPdfJsVersion, "");
    \u0275\u0275styleProp("background-color", ctx_r1.backgroundColor);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showFreeFloatingBar);
    \u0275\u0275advance();
    \u0275\u0275property("sidebarVisible", ctx_r1.sidebarVisible || false)("showSidebarButton", ctx_r1.showSidebarButton)("customSidebar", ctx_r1.customSidebar)("customThumbnail", ctx_r1.customThumbnail)("mobileFriendlyZoomScale", ctx_r1.mobileFriendlyZoomScale)("sidebarPositionTop", ctx_r1.sidebarPositionTop);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("toolbar-hidden", !ctx_r1.primaryMenuVisible);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("server-side-rendering", ctx_r1.serverSideRendering);
    \u0275\u0275property("sidebarVisible", ctx_r1.sidebarVisible)("customToolbar", ctx_r1.customToolbar)("mobileFriendlyZoomScale", ctx_r1.mobileFriendlyZoomScale);
    \u0275\u0275twoWayProperty("pageViewMode", ctx_r1.pageViewMode);
    \u0275\u0275property("primaryMenuVisible", ctx_r1.primaryMenuVisible)("scrollMode", (tmp_23_0 = ctx_r1.scrollMode) !== null && tmp_23_0 !== void 0 ? tmp_23_0 : 0)("showPropertiesButton", ctx_r1.showPropertiesButton)("showBookModeButton", ctx_r1.showBookModeButton)("showDownloadButton", ctx_r1.showDownloadButton)("showDrawEditor", ctx_r1.showDrawEditor)("showFindButton", ctx_r1.showFindButton)("showHandToolButton", ctx_r1.showHandToolButton)("showHorizontalScrollButton", ctx_r1.showHorizontalScrollButton)("showInfiniteScrollButton", ctx_r1.showInfiniteScrollButton)("showOpenFileButton", ctx_r1.showOpenFileButton)("showPagingButtons", ctx_r1.showPagingButtons)("showPresentationModeButton", ctx_r1.showPresentationModeButton && ctx_r1.pageViewMode !== "book")("showPrintButton", ctx_r1.showPrintButton && ctx_r1.enablePrint)("showRotateButton", ctx_r1.showRotateButton)("showSecondaryToolbarButton", ctx_r1.showSecondaryToolbarButton && !ctx_r1.service.secondaryMenuIsEmpty)("showSidebarButton", ctx_r1.showSidebarButton)("showSinglePageModeButton", ctx_r1.showSinglePageModeButton)("showSpreadButton", ctx_r1.showSpreadButton)("showStampEditor", ctx_r1.showStampEditor)("showTextEditor", ctx_r1.showTextEditor)("showVerticalScrollButton", ctx_r1.showVerticalScrollButton)("showWrappedScrollButton", ctx_r1.showWrappedScrollButton)("showZoomButtons", ctx_r1.showZoomButtons && ctx_r1.pageViewMode !== "book")("spread", ctx_r1.spread)("textLayer", ctx_r1.textLayer)("toolbarMarginTop", ctx_r1.toolbarMarginTop)("toolbarWidth", ctx_r1.toolbarWidth)("zoomLevels", ctx_r1.zoomLevels)("findbarVisible", ctx_r1.findbarVisible);
    \u0275\u0275advance();
    \u0275\u0275classProp("server-side-rendering", ctx_r1.serverSideRendering);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("server-side-rendering", ctx_r1.serverSideRendering);
    \u0275\u0275advance(14);
    \u0275\u0275classProp("server-side-rendering", ctx_r1.serverSideRendering);
    \u0275\u0275property("customSecondaryToolbar", ctx_r1.customSecondaryToolbar)("secondaryToolbarTop", ctx_r1.secondaryToolbarTop)("mobileFriendlyZoomScale", ctx_r1.mobileFriendlyZoomScale)("localizationInitialized", ctx_r1.localizationInitialized);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("server-side-rendering", ctx_r1.serverSideRendering);
    \u0275\u0275property("findbarLeft", ctx_r1.findbarLeft)("findbarTop", ctx_r1.findbarTop)("mobileFriendlyZoomScale", ctx_r1.mobileFriendlyZoomScale)("showFindButton", ctx_r1.showFindButton || false)("customFindbarInputArea", ctx_r1.customFindbarInputArea)("customFindbarButtons", ctx_r1.customFindbarButtons)("showFindCurrentPageOnly", ctx_r1.showFindCurrentPageOnly)("showFindEntirePhrase", ctx_r1.showFindEntirePhrase)("showFindEntireWord", ctx_r1.showFindEntireWord)("showFindFuzzySearch", ctx_r1.showFindFuzzySearch)("showFindHighlightAll", ctx_r1.showFindHighlightAll)("showFindMatchDiacritics", ctx_r1.showFindMatchDiacritics)("showFindMatchCase", ctx_r1.showFindMatchCase)("showFindMessages", ctx_r1.showFindMessages)("showFindPageRange", ctx_r1.showFindPageRange)("showFindResultsCount", ctx_r1.showFindResultsCount);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("top", ctx_r1.viewerPositionTop)("background-color", ctx_r1.backgroundColor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasSignature && ctx_r1.showUnverifiedSignatures);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("server-side-rendering", ctx_r1.serverSideRendering);
  }
}
function NgxExtendedPdfViewerComponent_ng_template_7_Template(rf, ctx) {
}
var FindState;
(function(FindState2) {
  FindState2[FindState2["FOUND"] = 0] = "FOUND";
  FindState2[FindState2["NOT_FOUND"] = 1] = "NOT_FOUND";
  FindState2[FindState2["WRAPPED"] = 2] = "WRAPPED";
  FindState2[FindState2["PENDING"] = 3] = "PENDING";
})(FindState || (FindState = {}));
var PdfCursorTools;
(function(PdfCursorTools2) {
  PdfCursorTools2[PdfCursorTools2["SELECT"] = 0] = "SELECT";
  PdfCursorTools2[PdfCursorTools2["HAND"] = 1] = "HAND";
  PdfCursorTools2[PdfCursorTools2["ZOOM"] = 2] = "ZOOM";
})(PdfCursorTools || (PdfCursorTools = {}));
var _isIE11 = typeof window === "undefined" ? false : !!window.MSInputMethodContext && !!document.documentMode;
var isEdge = typeof navigator === "undefined" || /Edge\/\d./i.test(navigator.userAgent);
var needsES5 = typeof ReadableStream === "undefined" || typeof Promise["allSettled"] === "undefined";
var pdfjsVersion = "3.10.560";
function getVersionSuffix(folder) {
  if (folder?.includes("bleeding-edge")) {
    console.log("The bleeding edge version has been deleted in version 18.1.11.");
  }
  return pdfjsVersion;
}
function assetsUrl(url, postfixIfPathIsRelativ = "") {
  if (url.includes("://")) {
    return url;
  }
  return `./${url + postfixIfPathIsRelativ}`;
}
function getDefaultLanguage() {
  if (typeof navigator !== "undefined") {
    return navigator?.language || "en-US";
  }
  return "en-US";
}
var pdfDefaultOptions = {
  needsES5: _isIE11 || isEdge || needsES5,
  annotationEditorMode: 0,
  annotationMode: 2,
  defaultZoomDelay: 400,
  cursorToolOnLoad: 0,
  defaultUrl: "",
  defaultZoomValue: void 0,
  disableHistory: false,
  disablePageLabels: false,
  enablePermissions: false,
  docBaseUrl: "",
  enablePrintAutoRotate: true,
  externalLinkRel: "noopener noreferrer nofollow",
  externalLinkTarget: 0,
  historyUpdateUrl: false,
  ignoreDestinationZoom: false,
  imageResourcesPath: "./images/",
  maxCanvasPixels: 16777216,
  forcePageColors: false,
  pageColorsBackground: "Canvas",
  pageColorsForeground: "CanvasText",
  pdfBugEnabled: false,
  printResolution: 150,
  rangeChunkSize: 65536,
  removePageBorders: false,
  renderer: "canvas",
  renderForms: true,
  enableXfa: true,
  fontExtraProperties: false,
  sidebarViewOnLoad: -1,
  scrollModeOnLoad: -1,
  spreadModeOnLoad: -1,
  textLayerMode: 1,
  useOnlyCssZoom: false,
  // viewerCssTheme: 0, // not supported by ngx-extended-pdf-viewer
  viewOnLoad: 0,
  cMapPacked: true,
  cMapUrl: () => `${assetsUrl(pdfDefaultOptions.assetsFolder, "/..")}/cmaps/`,
  disableAutoFetch: false,
  disableFontFace: false,
  disableRange: false,
  disableStream: false,
  isEvalSupported: true,
  isOffscreenCanvasSupported: true,
  maxImageSize: -1,
  pdfBug: false,
  postMessageTransfers: true,
  verbosity: 1,
  workerPort: null,
  assetsFolder: "assets",
  sandboxBundleSrc: () => pdfDefaultOptions.needsES5 ? `${assetsUrl(pdfDefaultOptions.assetsFolder)}/pdf.sandbox-${getVersionSuffix(assetsUrl(pdfDefaultOptions.assetsFolder))}-es5.js` : `${assetsUrl(pdfDefaultOptions.assetsFolder)}/pdf.sandbox-${getVersionSuffix(assetsUrl(pdfDefaultOptions.assetsFolder))}.js`,
  workerSrc: () => pdfDefaultOptions.needsES5 ? `${assetsUrl(pdfDefaultOptions.assetsFolder)}/pdf.worker-${getVersionSuffix(assetsUrl(pdfDefaultOptions.assetsFolder))}-es5.js` : `${assetsUrl(pdfDefaultOptions.assetsFolder)}/pdf.worker-${getVersionSuffix(assetsUrl(pdfDefaultOptions.assetsFolder))}.js`,
  standardFontDataUrl: () => `${assetsUrl(pdfDefaultOptions.assetsFolder, "/..")}/standard_fonts/`,
  // options specific to ngx-extended-pdf-viewer (as opposed to being used by pdf.js)
  doubleTapZoomFactor: "page-width",
  doubleTapZoomsInHandMode: true,
  doubleTapZoomsInTextSelectionMode: false,
  doubleTapResetsZoomOnSecondDoubleTap: false,
  enableScripting: true,
  defaultCacheSize: 50,
  passwordPrompt: void 0,
  locale: getDefaultLanguage(),
  activateWillReadFrequentlyFlag: false
};
if (typeof window !== "undefined") {
  if (window.pdfDefaultOptions) {
    pdfDefaultOptions = window.pdfDefaultOptions;
  } else {
    window.pdfDefaultOptions = pdfDefaultOptions;
  }
}
var ScrollModeType;
(function(ScrollModeType2) {
  ScrollModeType2[ScrollModeType2["vertical"] = 0] = "vertical";
  ScrollModeType2[ScrollModeType2["horizontal"] = 1] = "horizontal";
  ScrollModeType2[ScrollModeType2["wrapped"] = 2] = "wrapped";
  ScrollModeType2[ScrollModeType2["page"] = 3] = "page";
})(ScrollModeType || (ScrollModeType = {}));
var SpreadModeType;
(function(SpreadModeType2) {
  SpreadModeType2[SpreadModeType2["UNKNOWN"] = -1] = "UNKNOWN";
  SpreadModeType2[SpreadModeType2["NONE"] = 0] = "NONE";
  SpreadModeType2[SpreadModeType2["ODD"] = 1] = "ODD";
  SpreadModeType2[SpreadModeType2["EVEN"] = 2] = "EVEN";
})(SpreadModeType || (SpreadModeType = {}));
var VerbosityLevel;
(function(VerbosityLevel2) {
  VerbosityLevel2[VerbosityLevel2["ERRORS"] = 0] = "ERRORS";
  VerbosityLevel2[VerbosityLevel2["WARNINGS"] = 1] = "WARNINGS";
  VerbosityLevel2[VerbosityLevel2["INFOS"] = 5] = "INFOS";
})(VerbosityLevel || (VerbosityLevel = {}));
var requiredIds = ["attachmentsView", "authorField", "contextFirstPage", "contextLastPage", "contextPageRotateCcw", "contextPageRotateCw", "creationDateField", "creatorField", "currentOutlineItem", "cursorHandTool", "cursorSelectTool", "customScaleOption", "documentProperties", "documentPropertiesClose", "download", "editorFreeText", "editorInk", "editorStamp", "editorModeButtons", "editorNone", "editorStampAddImage", "errorClose", "errorMessage", "errorMoreInfo", "errorShowLess", "errorShowMore", "errorWrapper", "fileNameField", "fileSizeField", "findbar", "findCurrentPage", "findEntireWord", "findFuzzy", "findHighlightAll", "findIgnoreAccents", "findInput", "findInputMultiline", "findMatchCase", "findMatchDiacritics", "findMsg", "findMultipleSearchTexts", "findNext", "findPrevious", "findRange", "findResultsCount", "firstPage", "individualWordsMode", "individualWordsModeLabel", "keywordsField", "lastPage", "linearizedField", "modificationDateField", "next", "numPages", "openFile", "outerContainer", "outerContainer", "outlineOptionsContainer", "outlineView", "pageCountField", "pageNumber", "pageRotateCcw", "pageRotateCw", "pageSizeField", "password", "passwordCancel", "passwordSubmit", "passwordText", "presentationMode", "previous", "print", "producerField", "scaleSelect", "scaleSelectContainer", "scaleSelectContainer", "scrollHorizontal", "scrollPage", "scrollVertical", "scrollWrapped", "secondaryDownload", "secondaryOpenFile", "secondaryPresentationMode", "secondaryPrint", "secondaryToolbar", "secondaryToolbarButtonContainer", "secondaryToolbarToggle", "secondaryViewBookmark", "sidebarResizer", "sidebarToggle", "spreadEven", "spreadNone", "spreadOdd", "subjectField", "thumbnailView", "titleField", "toolbarViewer", "versionField", "viewAttachments", "viewAttachments", "viewBookmark", "viewerContainer", "viewFind", "viewFind", "viewLayers", "viewOutline", "viewOutline", "viewThumbnail", "viewThumbnail", "zoomIn", "zoomOut"];
var PdfDummyComponentsComponent = class {
  addMissingStandardWidgets() {
    this.dummyComponentsContainer = document.getElementsByClassName("dummy-pdf-viewer-components")[0];
    const container = this.dummyComponentsContainer;
    if (!container) {
      return;
    }
    for (let i = 0; i < container.children.length; i++) {
      const child = container.firstChild;
      if (child) {
        container.removeChild(child);
      }
    }
    requiredIds.forEach((id) => {
      if (this.needsDummyWidget(id)) {
        const dummy = document.createElement("span");
        dummy.id = id;
        dummy.className = "invisible dummy-component";
        this.dummyComponentsContainer.appendChild(dummy);
      }
    });
    if (this.needsDummyWidget("scaleSelect")) {
      const dummy = document.createElement("select");
      dummy.id = "scaleSelect";
      dummy.className = "invisible dummy-component";
      this.dummyComponentsContainer.appendChild(dummy);
    }
  }
  needsDummyWidget(id) {
    const widget = document.getElementById(id);
    if (!widget) {
      return true;
    }
    return false;
  }
};
PdfDummyComponentsComponent.\u0275fac = function PdfDummyComponentsComponent_Factory(t) {
  return new (t || PdfDummyComponentsComponent)();
};
PdfDummyComponentsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfDummyComponentsComponent,
  selectors: [["pdf-dummy-components"]],
  decls: 1,
  vars: 0,
  consts: [[1, "invisible", "dummy-pdf-viewer-components"]],
  template: function PdfDummyComponentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "span", 0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfDummyComponentsComponent, [{
    type: Component,
    args: [{
      selector: "pdf-dummy-components",
      template: '<span class="invisible dummy-pdf-viewer-components">\n</span>\n'
    }]
  }], null, null);
})();
var UnitToPx = class {
  static initElements() {
    if (!document) {
      return;
    }
    if (!this.con || !this.el) {
      this.con = document.createElement("div");
      this.el = document.createElement("div");
    }
    this.con.style.position = "absolute";
    this.con.style.width = "0";
    this.con.style.height = "0";
    this.con.style.visibility = "hidden";
    this.con.style.overflow = "hidden";
    this.con.appendChild(this.el);
  }
  static pxPerUnit(unit) {
    if (!this.pxPerUnitCache[unit]) {
      if (!this.con || !this.el) {
        this.initElements();
      }
      if (!this.con || !this.el) {
        return 1;
      }
      this.el.style.width = this.sample + unit;
      document.body.appendChild(this.con);
      const dimension = this.el.getBoundingClientRect();
      this.con.parentNode.removeChild(this.con);
      this.pxPerUnitCache[unit] = dimension.width / this.sample;
    }
    return this.pxPerUnitCache[unit];
  }
  static toPx(length) {
    const unitRe = /^\s*([+-]?[\d\.]*)\s*(.*)\s*$/i;
    const match = unitRe.exec(length);
    if (match != null && match.length > 2) {
      const bare = match[1] === "";
      const val = bare ? 1 : Number(match[1]);
      const unit = match[2];
      const valid = !isNaN(val) && unit;
      if (valid) {
        return unit === "px" ? val : this.pxPerUnit(unit) * val;
      }
    }
    throw new TypeError("Error parsing length");
  }
};
UnitToPx.con = void 0;
UnitToPx.el = void 0;
UnitToPx.sample = 100;
UnitToPx.pxPerUnitCache = {};
var NgxFormSupport = class {
  constructor() {
    this.formIdToFullFieldName = {};
    this.formIdToField = {};
    this.radioButtons = {};
    this.formData = {};
    this.formDataChange = new EventEmitter();
  }
  reset() {
    this.formData = {};
    this.formIdToFullFieldName = {};
  }
  registerFormSupportWithPdfjs(ngZone) {
    this.ngZone = ngZone;
    globalThis.getFormValueFromAngular = (key) => this.getFormValueFromAngular(key);
    globalThis.updateAngularFormValue = (key, value) => this.updateAngularFormValueCalledByPdfjs(key, value);
    globalThis.registerAcroformField = (id, element, value, radioButtonValueName) => this.registerAcroformField(id, element, value, radioButtonValueName);
    globalThis.registerXFAField = (element, value) => this.registerXFAField(element, value);
  }
  registerAcroformField(id, element, value, radioButtonValueName) {
    const fieldName = element.name;
    this.formIdToField[id] = element;
    this.formIdToFullFieldName[id] = fieldName;
    if (element instanceof HTMLInputElement && element.type === "radio") {
      const groupName = fieldName;
      this.formIdToFullFieldName[id] = groupName;
      if (value) {
        this.formData[groupName] = radioButtonValueName;
      }
      element.setAttribute("exportValue", radioButtonValueName);
      if (!this.radioButtons[groupName]) {
        this.radioButtons[groupName] = [];
      }
      this.radioButtons[groupName].push(element);
    } else if (element instanceof HTMLSelectElement) {
      this.formData[fieldName] = this.getValueOfASelectField(element);
    } else {
      this.formData[fieldName] = value;
    }
  }
  registerXFAField(element, value) {
    const fullFieldName = this.findFullXFAName(element);
    if (element instanceof HTMLInputElement && element.type === "radio") {
      const id = element.getAttribute("fieldid") ?? "";
      const groupName = fullFieldName.substring(0, fullFieldName.lastIndexOf("."));
      this.formIdToFullFieldName[id] = groupName;
      this.formData[groupName] = value.value;
      if (!this.radioButtons[groupName]) {
        this.radioButtons[groupName] = [];
      }
      this.radioButtons[groupName].push(element);
    } else if (element instanceof HTMLInputElement) {
      const id = element.getAttribute("fieldid") ?? "";
      this.formIdToField[id] = element;
      this.formIdToFullFieldName[id] = fullFieldName;
      this.formData[fullFieldName] = value.value;
    } else if (element instanceof HTMLSelectElement) {
      const id = element.getAttribute("fieldid") ?? "";
      this.formIdToField[id] = element;
      this.formIdToFullFieldName[id] = fullFieldName;
      this.formData[fullFieldName] = value.value;
    } else if (element instanceof HTMLTextAreaElement) {
      const id = element.getAttribute("fieldid") ?? "";
      this.formIdToField[id] = element;
      this.formIdToFullFieldName[id] = fullFieldName;
      this.formData[fullFieldName] = value.value;
    } else {
      console.error("Couldn't register an XFA form field", element);
    }
  }
  getValueOfASelectField(selectElement) {
    const {
      options,
      multiple
    } = selectElement;
    if (!multiple) {
      return options.selectedIndex === -1 ? null : options[options.selectedIndex]["value"];
    }
    return Array.prototype.filter.call(options, (option) => option.selected).map((option) => option["value"]);
  }
  getFormValueFromAngular(element) {
    let key;
    if (element instanceof HTMLElement) {
      const fieldName = this.findXFAName(element);
      if (fieldName) {
        if (this.formData.hasOwnProperty(fieldName)) {
          key = fieldName;
        } else {
          key = this.findFullXFAName(element);
        }
      } else {
        console.error("Couldn't find the field name or XFA name of the form field", element);
        return {
          value: null
        };
      }
    } else {
      key = element;
    }
    return {
      value: this.formData[key]
    };
  }
  findXFAName(element) {
    let parentElement = element;
    while (!parentElement.getAttribute("xfaname") && parentElement.parentElement) {
      parentElement = parentElement.parentElement;
    }
    if (element instanceof HTMLInputElement && element.type === "radio") {
      do {
        parentElement = parentElement?.parentElement;
      } while (!parentElement?.getAttribute("xfaname") && parentElement);
    }
    let fieldName = parentElement?.getAttribute("xfaname");
    if (!fieldName) {
      throw new Error("Couldn't find the xfaname of the field");
    }
    return fieldName;
  }
  findFullXFAName(element) {
    let parentElement = element;
    let fieldName = "";
    while (parentElement instanceof HTMLElement && parentElement.parentElement) {
      const xfaName = parentElement.getAttribute("xfaname");
      if (xfaName) {
        fieldName = xfaName + "." + fieldName;
      }
      parentElement = parentElement.parentElement;
    }
    if (!fieldName) {
      throw new Error("Couldn't find the xfaname of the field");
    }
    fieldName = fieldName.substring(0, fieldName.length - 1);
    if (element instanceof HTMLInputElement && element.type === "radio") {
      return fieldName.substring(0, fieldName.lastIndexOf("."));
    }
    return fieldName;
  }
  updateAngularFormValueCalledByPdfjs(key, value) {
    if (!this.formData) {
      this.formData = {};
    }
    if (typeof key === "string") {
      const acroFormKey = this.formIdToFullFieldName[key];
      const fullKey = acroFormKey ?? Object.values(this.formIdToFullFieldName).find((k) => k === key || k.endsWith("." + key));
      if (fullKey) {
        const field = this.formIdToField[key];
        let change = this.doUpdateAngularFormValue(field, value, fullKey);
        if (change) {
          this.ngZone.run(() => this.formDataChange.emit(this.formData));
        }
      } else {
        console.error("Couldn't find the field with the name " + key);
      }
    } else {
      let change = false;
      const shortFieldName = this.findXFAName(key);
      if (this.formData.hasOwnProperty(shortFieldName)) {
        change = this.doUpdateAngularFormValue(key, value, shortFieldName);
      }
      const fullFieldName = this.findFullXFAName(key);
      if (fullFieldName !== shortFieldName) {
        change || (change = this.doUpdateAngularFormValue(key, value, fullFieldName));
      }
      if (change) {
        this.ngZone.run(() => this.formDataChange.emit(this.formData));
      }
    }
  }
  doUpdateAngularFormValue(field, value, fullKey) {
    let change = false;
    if (field instanceof HTMLInputElement && field.type === "checkbox") {
      const exportValue = field.getAttribute("exportvalue");
      if (exportValue) {
        if (value.value) {
          if (this.formData[fullKey] !== exportValue) {
            this.formData[fullKey] = exportValue;
            change = true;
          }
        } else {
          if (this.formData[fullKey] !== false) {
            this.formData[fullKey] = false;
            change = true;
          }
        }
      } else {
        if (this.formData[fullKey] !== value.value) {
          this.formData[fullKey] = value.value;
          change = true;
        }
      }
    } else if (field instanceof HTMLInputElement && field.type === "radio") {
      const exportValue = field.getAttribute("exportvalue") ?? field.getAttribute("xfaon");
      if (value.value) {
        if (this.formData[fullKey] !== exportValue) {
          this.formData[fullKey] = exportValue;
          change = true;
        }
      }
    } else {
      if (this.formData[fullKey] !== value.value) {
        this.formData[fullKey] = value.value;
        change = true;
      }
    }
    return change;
  }
  updateFormFieldsInPdfCalledByNgOnChanges(previousFormData) {
    const PDFViewerApplication = window.PDFViewerApplication;
    if (!PDFViewerApplication?.pdfDocument?.annotationStorage) {
      return;
    }
    for (const key in this.formData) {
      if (this.formData.hasOwnProperty(key)) {
        const newValue = this.formData[key];
        if (newValue !== previousFormData[key]) {
          this.setFieldValueAndUpdateAnnotationStorage(key, newValue);
        }
      }
    }
    for (const key in previousFormData) {
      if (previousFormData.hasOwnProperty(key) && previousFormData[key]) {
        let hasPreviousValue = this.formData.hasOwnProperty(key);
        if (!hasPreviousValue) {
          const fullKey = Object.keys(this.formData).find((k) => k === key || k.endsWith("." + key));
          if (fullKey) {
            hasPreviousValue = this.formData.hasOwnProperty(fullKey);
          }
        }
        if (!hasPreviousValue) {
          this.setFieldValueAndUpdateAnnotationStorage(key, null);
        }
      }
    }
  }
  setFieldValueAndUpdateAnnotationStorage(key, newValue) {
    const radios = this.findRadioButtonGroup(key);
    if (radios) {
      radios.forEach((r) => {
        const activeValue = r.getAttribute("exportValue") ?? r.getAttribute("xfaon");
        r.checked = activeValue === newValue;
      });
      const updateFromAngular = new CustomEvent("updateFromAngular", {
        detail: newValue
      });
      radios[0].dispatchEvent(updateFromAngular);
    } else {
      const fieldId = this.findFormIdFromFieldName(key);
      if (fieldId) {
        const htmlField = this.formIdToField[fieldId];
        if (htmlField) {
          if (htmlField instanceof HTMLInputElement && htmlField.type === "checkbox") {
            let activeValue = htmlField.getAttribute("xfaon") ?? htmlField.getAttribute("exportvalue") ?? true;
            if (newValue === true || newValue === false) {
              activeValue = true;
            }
            htmlField.checked = activeValue === newValue;
          } else if (htmlField instanceof HTMLSelectElement) {
            this.populateSelectField(htmlField, newValue);
          } else {
            htmlField.value = newValue;
          }
          const updateFromAngular = new CustomEvent("updateFromAngular", {
            detail: newValue
          });
          htmlField.dispatchEvent(updateFromAngular);
        } else {
          console.error("Couldn't set the value of the field", key);
        }
      }
    }
  }
  populateSelectField(htmlField, newValue) {
    if (htmlField.multiple) {
      const {
        options
      } = htmlField;
      const newValueArray = newValue;
      for (let i = 0; i < options.length; i++) {
        const option = options.item(i);
        if (option) {
          option.selected = newValueArray.some((o) => o === option.value);
        }
      }
    } else {
      htmlField.value = newValue;
    }
  }
  findFormIdFromFieldName(fieldName) {
    if (Object.entries(this.formIdToFullFieldName).length === 0) {
      return void 0;
    }
    const matchingEntries = Object.entries(this.formIdToFullFieldName).filter((entry) => entry[1] === fieldName || entry[1].endsWith("." + fieldName));
    if (matchingEntries.length > 1) {
      console.log(`More than one field name matches the field name ${fieldName}. Please use the one of these qualified field names:`, matchingEntries.map((f) => f[1]));
      console.log("ngx-extended-pdf-viewer uses the first matching field (which may or may not be the topmost field on your PDF form): " + matchingEntries[0][0]);
    } else if (matchingEntries.length === 0) {
      console.log("Couldn't find the field " + fieldName);
      return void 0;
    }
    return matchingEntries[0][0];
  }
  findRadioButtonGroup(fieldName) {
    const matchingEntries = Object.entries(this.radioButtons).filter((entry) => entry[0].endsWith("." + fieldName) || entry[0] === fieldName);
    if (matchingEntries.length === 0) {
      return null;
    }
    if (matchingEntries.length > 1) {
      console.log("More than one radio button group name matches this name. Please use the qualified field name", matchingEntries.map((radio) => radio[0]));
      console.log("ngx-extended-pdf-viewer uses the first matching field (which may not be the topmost field on your PDF form): " + matchingEntries[0][0]);
    }
    return matchingEntries[0][1];
  }
};
var PdfSidebarView;
(function(PdfSidebarView2) {
  PdfSidebarView2[PdfSidebarView2["UNKNOWN"] = -1] = "UNKNOWN";
  PdfSidebarView2[PdfSidebarView2["NONE"] = 0] = "NONE";
  PdfSidebarView2[PdfSidebarView2["THUMBS"] = 1] = "THUMBS";
  PdfSidebarView2[PdfSidebarView2["OUTLINE"] = 2] = "OUTLINE";
  PdfSidebarView2[PdfSidebarView2["ATTACHMENTS"] = 3] = "ATTACHMENTS";
  PdfSidebarView2[PdfSidebarView2["LAYERS"] = 4] = "LAYERS";
})(PdfSidebarView || (PdfSidebarView = {}));
var PDFNotificationService = class {
  constructor() {
    this.onPDFJSInit = new Subject();
    this.pdfjsVersion = getVersionSuffix(pdfDefaultOptions.assetsFolder);
  }
};
PDFNotificationService.\u0275fac = function PDFNotificationService_Factory(t) {
  return new (t || PDFNotificationService)();
};
PDFNotificationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: PDFNotificationService,
  factory: PDFNotificationService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFNotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgxExtendedPdfViewerService = class {
  constructor() {
    this.ngxExtendedPdfViewerInitialized = false;
    this.recalculateSize$ = new Subject();
    this.secondaryMenuIsEmpty = false;
  }
  find(text, options = {}) {
    if (!this.ngxExtendedPdfViewerInitialized) {
      console.error("The PDF viewer hasn't finished initializing. Please call find() later.");
      return false;
    } else {
      const highlightAllCheckbox = document.getElementById("findHighlightAll");
      if (highlightAllCheckbox) {
        highlightAllCheckbox.checked = options.highlightAll ?? false;
      }
      const matchCaseCheckbox = document.getElementById("findMatchCase");
      if (matchCaseCheckbox) {
        matchCaseCheckbox.checked = options.matchCase ?? false;
      }
      const entireWordCheckbox = document.getElementById("findEntireWord");
      if (entireWordCheckbox) {
        entireWordCheckbox.checked = options.wholeWords ?? false;
      }
      const matchDiacriticsCheckbox = document.getElementById("findMatchDiacritics");
      if (matchDiacriticsCheckbox) {
        matchDiacriticsCheckbox.checked = options.matchDiacritics ?? false;
      }
      const inputField = document.getElementById("findInput");
      if (inputField) {
        inputField.value = text;
        inputField.classList.remove("hidden");
        inputField.dispatchEvent(new Event("input"));
        return true;
      } else {
        console.error("Unexpected error: the input field used to search isn't part of the DOM.");
        return false;
      }
    }
  }
  findNext() {
    if (!this.ngxExtendedPdfViewerInitialized) {
      console.error("The PDF viewer hasn't finished initializing. Please call findNext() later.");
      return false;
    } else {
      const button = document.getElementById("findNext");
      if (button) {
        button.click();
        return true;
      }
      return false;
    }
  }
  findPrevious() {
    if (!this.ngxExtendedPdfViewerInitialized) {
      console.error("The PDF viewer hasn't finished initializing. Please call findPrevious() later.");
      return false;
    } else {
      const button = document.getElementById("findPrevious");
      if (button) {
        button.click();
        return true;
      }
      return false;
    }
  }
  print(printRange) {
    const PDFViewerApplication = window.PDFViewerApplication;
    const alreadyThere = !!window["isInPDFPrintRange"] && !printRange;
    if (!alreadyThere) {
      if (!printRange) {
        printRange = {};
      }
      this.setPrintRange(printRange);
    }
    window.printPDF();
    if (!alreadyThere) {
      PDFViewerApplication.eventBus.on("afterprint", () => {
        this.removePrintRange();
      });
    }
  }
  removePrintRange() {
    window["isInPDFPrintRange"] = void 0;
    window["filteredPageCount"] = void 0;
  }
  setPrintRange(printRange) {
    const PDFViewerApplication = window.PDFViewerApplication;
    window["isInPDFPrintRange"] = (page) => this.isInPDFPrintRange(page, printRange);
    window["filteredPageCount"] = this.filteredPageCount(PDFViewerApplication.pagesCount, printRange);
  }
  filteredPageCount(pageCount, range) {
    let result = 0;
    for (let page = 1; page <= pageCount; page++) {
      if (this.isInPDFPrintRange(page, range)) {
        result++;
      }
    }
    return result;
  }
  isInPDFPrintRange(pageIndex, printRange) {
    const page = pageIndex + 1;
    if (printRange.from) {
      if (page < printRange.from) {
        return false;
      }
    }
    if (printRange.to) {
      if (page > printRange.to) {
        return false;
      }
    }
    if (printRange.excluded) {
      if (printRange.excluded.some((p) => p === page)) {
        return false;
      }
    }
    if (printRange.included) {
      if (!printRange.included.some((p) => p === page)) {
        return false;
      }
    }
    return true;
  }
  getPageAsLines(pageNumber) {
    return __async(this, null, function* () {
      const PDFViewerApplication = window.PDFViewerApplication;
      const pdfDocument = PDFViewerApplication.pdfDocument;
      const page = yield pdfDocument.getPage(pageNumber);
      const textSnippets = (yield page.getTextContent()).items.filter((info) => !info["type"]);
      const snippets = textSnippets;
      let minX = Number.MAX_SAFE_INTEGER;
      let minY = Number.MAX_SAFE_INTEGER;
      let maxX = Number.MIN_SAFE_INTEGER;
      let maxY = Number.MIN_SAFE_INTEGER;
      let countLTR = 0;
      let countRTL = 0;
      let text = "";
      let lines = new Array();
      for (let i = 0; i < snippets.length; i++) {
        const currentSnippet = snippets[i];
        if (!currentSnippet.hasEOL) {
          const x = currentSnippet.transform[4];
          const y = -currentSnippet.transform[5];
          const width = currentSnippet.width;
          const height = currentSnippet.height;
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x + width);
          maxY = Math.max(maxY, y + height);
          text += currentSnippet.str;
          if (currentSnippet.dir === "rtl") {
            countRTL++;
          }
          if (currentSnippet.dir === "ltr") {
            countLTR++;
          }
        }
        let addIt = i === snippets.length - 1 || currentSnippet.hasEOL;
        if (addIt) {
          let direction = void 0;
          if (countLTR > 0 && countRTL > 0) {
            direction = "both";
          } else if (countLTR > 0) {
            direction = "ltr";
          } else if (countRTL > 0) {
            direction = "rtl";
          }
          const line = {
            direction,
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
            text: text.trim()
          };
          lines.push(line);
          minX = Number.MAX_SAFE_INTEGER;
          minY = Number.MAX_SAFE_INTEGER;
          maxX = Number.MIN_SAFE_INTEGER;
          maxY = Number.MIN_SAFE_INTEGER;
          countLTR = 0;
          countRTL = 0;
          text = "";
        }
      }
      return lines;
    });
  }
  getPageAsText(pageNumber) {
    return __async(this, null, function* () {
      const PDFViewerApplication = window.PDFViewerApplication;
      const pdfDocument = PDFViewerApplication.pdfDocument;
      const page = yield pdfDocument.getPage(pageNumber);
      const textSnippets = (yield page.getTextContent()).items;
      return this.convertTextInfoToText(textSnippets);
    });
  }
  convertTextInfoToText(textInfoItems) {
    if (!textInfoItems) {
      return "";
    }
    return textInfoItems.filter((info) => !info["type"]).map((info) => info.hasEOL ? info.str + "\n" : info.str).join("");
  }
  getPageAsImage(pageNumber, scale, background, backgroundColorToReplace = "#FFFFFF") {
    const PDFViewerApplication = window.PDFViewerApplication;
    const pdfDocument = PDFViewerApplication.pdfDocument;
    const pagePromise = pdfDocument.getPage(pageNumber);
    const imagePromise = (pdfPage) => Promise.resolve(this.draw(pdfPage, scale, background, backgroundColorToReplace));
    return pagePromise.then(imagePromise);
  }
  draw(pdfPage, scale, background, backgroundColorToReplace = "#FFFFFF") {
    let zoomFactor = 1;
    if (scale.scale) {
      zoomFactor = scale.scale;
    } else if (scale.width) {
      zoomFactor = scale.width / pdfPage.getViewport({
        scale: 1
      }).width;
    } else if (scale.height) {
      zoomFactor = scale.height / pdfPage.getViewport({
        scale: 1
      }).height;
    }
    const viewport = pdfPage.getViewport({
      scale: zoomFactor
    });
    const {
      ctx,
      canvas
    } = this.getPageDrawContext(viewport.width, viewport.height);
    const drawViewport = viewport.clone();
    const renderContext = {
      canvasContext: ctx,
      viewport: drawViewport,
      background,
      backgroundColorToReplace
    };
    const renderTask = pdfPage.render(renderContext);
    const dataUrlPromise = () => Promise.resolve(canvas.toDataURL());
    return renderTask.promise.then(dataUrlPromise);
  }
  getPageDrawContext(width, height) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", {
      alpha: true
    });
    if (!ctx) {
      throw new Error("Couldn't create the 2d context");
    }
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    return {
      ctx,
      canvas
    };
  }
  getCurrentDocumentAsBlob() {
    return __async(this, null, function* () {
      const PDFViewerApplication = window.PDFViewerApplication;
      return yield PDFViewerApplication.export();
    });
  }
  getFormData(currentFormValues = true) {
    return __async(this, null, function* () {
      const PDFViewerApplication = window.PDFViewerApplication;
      const pdf = PDFViewerApplication.pdfDocument;
      const dpiRatio = 96 / 72;
      const result = [];
      for (let i = 1; i <= pdf?.numPages; i++) {
        const currentPage = yield pdf.getPage(i);
        const annotations = yield currentPage.getAnnotations();
        annotations.filter((a) => a.subtype === "Widget").map((a) => __spreadValues({}, a)).forEach((a) => {
          const fieldRect = currentPage.getViewport({
            scale: dpiRatio
          }).convertToViewportRectangle(a.rect);
          if (currentFormValues && a.fieldName) {
            try {
              if (a.exportValue) {
                const currentValue = PDFViewerApplication.pdfDocument.annotationStorage.getValue(a.id, a.fieldName + "/" + a.exportValue, "");
                a.value = currentValue?.value;
              } else if (a.radioButton) {
                const currentValue = PDFViewerApplication.pdfDocument.annotationStorage.getValue(a.id, a.fieldName + "/" + a.fieldValue, "");
                a.value = currentValue?.value;
              } else {
                const currentValue = PDFViewerApplication.pdfDocument.annotationStorage.getValue(a.id, a.fieldName, "");
                a.value = currentValue?.value;
              }
            } catch (exception) {
            }
          }
          result.push({
            fieldAnnotation: a,
            fieldRect,
            pageNumber: i
          });
        });
      }
      return result;
    });
  }
  /**
   * Adds a page to the rendering queue
   * @param {number} pageIndex Index of the page to render
   * @returns {boolean} false, if the page has already been rendered
   * or if it's out of range
   */
  addPageToRenderQueue(pageIndex) {
    const PDFViewerApplication = window.PDFViewerApplication;
    return PDFViewerApplication.pdfViewer.addPageToRenderQueue(pageIndex);
  }
  isRenderQueueEmpty() {
    const scrolledDown = true;
    const renderExtra = false;
    const PDFViewerApplication = window.PDFViewerApplication;
    const nextPage = PDFViewerApplication.pdfViewer.renderingQueue.getHighestPriority(PDFViewerApplication.pdfViewer._getVisiblePages(), PDFViewerApplication.pdfViewer._pages, scrolledDown, renderExtra);
    return !nextPage;
  }
  hasPageBeenRendered(pageIndex) {
    const PDFViewerApplication = window.PDFViewerApplication;
    const pages = PDFViewerApplication.pdfViewer._pages;
    if (pages.length > pageIndex && pageIndex >= 0) {
      const pageView = pages[pageIndex];
      const isLoading = pageView.renderingState === 3;
      return !isLoading;
    }
    return false;
  }
  currentlyRenderedPages() {
    const PDFViewerApplication = window.PDFViewerApplication;
    const pages = PDFViewerApplication.pdfViewer._pages;
    return pages.filter((page) => page.renderingState === 3).map((page) => page.id);
  }
  numberOfPages() {
    const PDFViewerApplication = window.PDFViewerApplication;
    const pages = PDFViewerApplication.pdfViewer._pages;
    return pages.length;
  }
  getCurrentlyVisiblePageNumbers() {
    const app = window.PDFViewerApplication;
    const pages = app.pdfViewer._getVisiblePages().views;
    return pages?.map((page) => page.id);
  }
  recalculateSize() {
    this.recalculateSize$.next();
  }
  listLayers() {
    return __async(this, null, function* () {
      const PDFViewerApplication = window.PDFViewerApplication;
      const optionalContentConfig = yield PDFViewerApplication.pdfViewer.optionalContentConfigPromise;
      if (optionalContentConfig) {
        const levelData = optionalContentConfig.getOrder();
        const layerIds = levelData.filter((groupId) => typeof groupId !== "object");
        return layerIds.map((layerId) => {
          const config = optionalContentConfig.getGroup(layerId);
          return {
            layerId,
            name: config.name,
            visible: config.visible
          };
        });
      }
      return void 0;
    });
  }
  toggleLayer(layerId) {
    return __async(this, null, function* () {
      const PDFViewerApplication = window.PDFViewerApplication;
      const optionalContentConfig = yield PDFViewerApplication.pdfViewer.optionalContentConfigPromise;
      if (optionalContentConfig) {
        let isVisible = optionalContentConfig.getGroup(layerId).visible;
        const checkbox = document.querySelector(`input[id='${layerId}']`);
        if (checkbox) {
          isVisible = checkbox.checked;
          checkbox.checked = !isVisible;
        }
        optionalContentConfig.setVisibility(layerId, !isVisible);
        PDFViewerApplication.eventBus.dispatch("optionalcontentconfig", {
          source: this,
          promise: Promise.resolve(optionalContentConfig)
        });
      }
    });
  }
  scrollPageIntoView(pageNumber, pageSpot) {
    const PDFViewerApplication = window.PDFViewerApplication;
    const viewer = PDFViewerApplication.pdfViewer;
    viewer.scrollPagePosIntoView(pageNumber, pageSpot);
  }
  getSerializedAnnotations() {
    const PDFViewerApplication = window.PDFViewerApplication;
    return PDFViewerApplication.pdfViewer.getSerializedAnnotations();
  }
  addEditorAnnotation(serializedAnnotation) {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.pdfViewer.addEditorAnnotation(serializedAnnotation);
  }
  removeEditorAnnotations(filter) {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.pdfViewer.removeEditorAnnotations(filter);
  }
};
function addTrustedHTML(styles, css2) {
  if (typeof window === "undefined") {
    return;
  }
  const ttWindow = window;
  if (ttWindow.trustedTypes) {
    const sanitizer = ttWindow.trustedTypes.createPolicy("foo", {
      createHTML: (input) => input
    });
    styles.innerHTML = sanitizer.createHTML(css2);
  } else {
    styles.innerHTML = css2;
  }
}
var css$2 = `ngx-extended-pdf-viewer .textLayer{position:absolute;text-align:initial;inset:0;overflow:hidden;opacity:.25;line-height:1;text-size-adjust:none;forced-color-adjust:none;transform-origin:0 0;z-index:2}ngx-extended-pdf-viewer .textLayer :is(span,br){color:rgba(0,0,0,0);position:absolute;white-space:pre;cursor:text;transform-origin:0% 0%}ngx-extended-pdf-viewer .textLayer span.markedContent{top:0;height:0}ngx-extended-pdf-viewer .textLayer .highlight{margin:-1px;padding:1px;background-color:#b400aa;border-radius:4px}ngx-extended-pdf-viewer .textLayer .highlight.appended{position:initial}ngx-extended-pdf-viewer .textLayer .highlight.begin{border-radius:4px 0 0 4px}ngx-extended-pdf-viewer .textLayer .highlight.end{border-radius:0 4px 4px 0}ngx-extended-pdf-viewer .textLayer .highlight.middle{border-radius:0}ngx-extended-pdf-viewer .textLayer .highlight.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer ::selection{background:blue}ngx-extended-pdf-viewer .textLayer br::selection{background:rgba(0,0,0,0)}ngx-extended-pdf-viewer .textLayer .endOfContent{display:block;position:absolute;inset:100% 0 0;z-index:-1;cursor:default;user-select:none}ngx-extended-pdf-viewer .textLayer .endOfContent.active{top:0}ngx-extended-pdf-viewer *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom: none;--page-margin: 1px auto -8px;--page-border: 9px solid transparent;--spreadHorizontalWrapped-margin-LR: -3.5px;--zoom-factor: 1}@media screen and (forced-colors: active){ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom: 9px;--page-margin: 9px auto 0;--page-border: none;--spreadHorizontalWrapped-margin-LR: 4.5px}}ngx-extended-pdf-viewer [data-main-rotation="90"]{transform:rotate(90deg) translateY(-100%)}ngx-extended-pdf-viewer [data-main-rotation="180"]{transform:rotate(180deg) translate(-100%, -100%)}ngx-extended-pdf-viewer [data-main-rotation="270"]{transform:rotate(270deg) translateX(-100%)}ngx-extended-pdf-viewer .pdfViewer{padding-bottom:var(--pdfViewer-padding-bottom)}ngx-extended-pdf-viewer .pdfViewer .canvasWrapper{overflow:hidden}ngx-extended-pdf-viewer .pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px auto;position:relative;overflow:hidden;border:9px solid rgba(0,0,0,0);background-clip:content-box;-o-border-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=") 9 9 repeat;border-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=") 9 9 repeat;background-color:#fff;filter:opacity(1);-webkit-filter:opacity(1)}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .page{margin:0 auto 10px auto;border:none}ngx-extended-pdf-viewer .html .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .html .pdfViewer.scrollWrapped,ngx-extended-pdf-viewer .html .spread{margin-left:3.5px;margin-right:3.5px;text-align:center}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .spread{white-space:nowrap}ngx-extended-pdf-viewer .pdfViewer.removePageBorders,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .spread .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{display:inline-block;vertical-align:middle}ngx-extended-pdf-viewer .spread .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page{margin-left:-3.5px;margin-right:-3.5px}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .spread .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollWrapped .page{margin-left:5px;margin-right:5px}ngx-extended-pdf-viewer .pdfViewer .page canvas{margin:0;display:block}ngx-extended-pdf-viewer .pdfViewer .page canvas[hidden]{display:none}ngx-extended-pdf-viewer .pdfViewer .page canvas[zooming]{width:100%;height:100%}ngx-extended-pdf-viewer .pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url("data:image/gif;base64,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") center no-repeat}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .spread{display:block}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100vh !important}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .html{height:100%;width:100%;font-size:10px}ngx-extended-pdf-viewer .body{height:100%;width:100%;scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color)}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .body :is(.toolbar,.editorParamsToolbar,.findbar,#sidebarContainer) :is(input,button,select),ngx-extended-pdf-viewer .body .secondaryToolbar :is(input,button,a,select){outline:none;font-family:message-box,sans-serif;font-size:13px}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .pdf-viewer input,ngx-extended-pdf-viewer .pdf-viewer button,ngx-extended-pdf-viewer .pdf-viewer select{font-family:message-box,sans-serif;outline:none;scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color)}ngx-extended-pdf-viewer button{cursor:pointer}ngx-extended-pdf-viewer select{background-color:#474747 !important;color:#d9d9d9}ngx-extended-pdf-viewer .hidden,ngx-extended-pdf-viewer [hidden]{display:none !important}ngx-extended-pdf-viewer .pdfViewer.enablePermissions .textLayer span{-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important;cursor:not-allowed}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0 !important;overflow:hidden !important}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop{background-color:#000}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-webkit-full-screen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-moz-full-screen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-moz-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:fullscreen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls>*,ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls .textLayer span{cursor:default}ngx-extended-pdf-viewer #outerContainer{width:100%;height:100%;position:relative}ngx-extended-pdf-viewer #sidebarContainer{position:absolute;top:32px;bottom:0;width:200px;visibility:hidden;z-index:100;transition-duration:200ms;transition-timing-function:ease}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContainer{transition-property:left;left:-200px;left:-200px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContainer{transition-property:right;right:-200px}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #sidebarContainer{transition-duration:0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outerContainer.sidebarMoving #sidebarContainer,ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{visibility:visible}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{left:0}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{right:0}ngx-extended-pdf-viewer #mainContainer{position:absolute;top:0;right:0;bottom:0;left:0;min-width:min(102%,350px)}ngx-extended-pdf-viewer #sidebarContent{top:32px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;width:100%;background-color:rgba(0,0,0,.1)}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContent{left:0}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContent{right:0}ngx-extended-pdf-viewer #viewerContainer{overflow:auto;-webkit-overflow-scrolling:auto;position:absolute;top:32px;right:0;bottom:0;left:0;outline:none}ngx-extended-pdf-viewer #viewerContainer:not(.pdfPresentationMode){transition-duration:200ms;transition-timing-function:ease}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #viewerContainer{transition-duration:0s}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:left;left:200px}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:right;right:200px}ngx-extended-pdf-viewer .toolbar{position:relative;left:0;right:0;z-index:9999;cursor:default;border:0;border-bottom:1px solid rgba(0,0,0,.5)}ngx-extended-pdf-viewer #toolbarContainer{width:100%}ngx-extended-pdf-viewer #toolbarSidebar{width:calc(100% - 10px);height:32px;background-color:#424242;color:#d9d9d9;border:none;padding-top:1px;padding-left:5px;padding-right:5px}html[dir=ltr] #toolbarSidebarRight .toolbarButton{margin-right:3px !important}html[dir=rtl] #toolbarSidebarRight .toolbarButton{margin-left:3px !important}html[dir=ltr] #sidebarToggle{margin-right:5px}html[dir=rtl] #sidebarToggle{margin-left:5px}ngx-extended-pdf-viewer #sidebarResizer{position:absolute;top:0;bottom:0;width:6px;z-index:200;cursor:ew-resize}html[dir=ltr] ngx-extended-pdf-viewer #sidebarResizer{right:-6px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarResizer{left:-6px}ngx-extended-pdf-viewer #toolbarContainer,ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar,ngx-extended-pdf-viewer .editorParamsToolbar{position:relative;min-height:32px;background-color:#474747}ngx-extended-pdf-viewer #toolbarViewer{min-height:32px}ngx-extended-pdf-viewer #loadingBar{position:relative;width:100%;height:4px;background-color:#333;border-bottom:1px solid #333}ngx-extended-pdf-viewer #loadingBar .progress{position:absolute;top:0;left:0;width:0%;height:100%;background-color:#ddd;overflow:hidden;transition:width 200ms}@-webkit-keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}@keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate{background-color:#999;transition:none}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:calc(100% + 150px);background:repeating-linear-gradient(135deg, rgb(187, 187, 187) 0, rgb(153, 153, 153) 5px, rgb(153, 153, 153) 45px, rgb(221, 221, 221) 55px, rgb(221, 221, 221) 95px, rgb(187, 187, 187) 100px);-webkit-animation:progressIndeterminate 950ms linear infinite;animation:progressIndeterminate 950ms linear infinite}ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar,ngx-extended-pdf-viewer .editorParamsToolbar{top:40px;position:absolute;z-index:10000;height:auto;min-width:16px;padding:0 6px 0 6px;margin:4px 2px 4px 2px;font-size:12px;line-height:14px;text-align:left;cursor:default}ngx-extended-pdf-viewer .findbar{min-width:300px}ngx-extended-pdf-viewer .findbar>div{height:32px}ngx-extended-pdf-viewer .findbar.wrapContainers>div{clear:both}ngx-extended-pdf-viewer .findbar.wrapContainers>div#findbarMessageContainer{height:auto}html[dir=ltr] ngx-extended-pdf-viewer .findbar{left:34px}html[dir=rtl] ngx-extended-pdf-viewer .findbar{right:34px}ngx-extended-pdf-viewer .findbar label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #findInput{width:200px}ngx-extended-pdf-viewer #findInput::-webkit-input-placeholder{color:#d9d9d9}ngx-extended-pdf-viewer #findInput::-moz-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput:-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url("data:image/png;base64,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");background-repeat:no-repeat;background-position:right}html[dir=rtl] ngx-extended-pdf-viewer #findInput[data-status=pending]{background-position:left}#findInput[data-status=notFound]{background-color:#f66}ngx-extended-pdf-viewer ngx-extended-pdf-viewer .editorParamsToolbar{padding:6px;height:auto;z-index:3000}ngx-extended-pdf-viewer .editorParamsToolbarContainer{width:220px;margin-bottom:-4px}ngx-extended-pdf-viewer .editorParamsToolbarContainer>.editorParamsSetter{min-height:26px;display:flex;align-items:center;justify-content:space-between;padding-inline:10px}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsLabel{padding-inline-end:10px;flex:none;color:var(--main-color)}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsColor{width:32px;height:32px;flex:none}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider{background-color:rgba(0,0,0,0);width:90px;flex:0 1 0}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-progress{background-color:#000}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-runnable-track,ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-track{background-color:#000}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-thumb,ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-thumb{background-color:#fff}ngx-extended-pdf-viewer #editorStampParamsToolbar{inset-inline-end:40px;background-color:#474747}ngx-extended-pdf-viewer #editorInkParamsToolbar{inset-inline-end:68px;background-color:#474747}ngx-extended-pdf-viewer #editorFreeTextParamsToolbar{inset-inline-end:96px;background-color:#474747}ngx-extended-pdf-viewer .doorHanger,ngx-extended-pdf-viewer .doorHangerRight{border:1px solid rgba(0,0,0,.5);border-radius:2px}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:after,ngx-extended-pdf-viewer .doorHangerRight:before{bottom:100%;border:solid rgba(0,0,0,0);content:" ";height:0;width:0;position:absolute;pointer-events:none}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHangerRight:after{border-bottom-color:#474747;border-width:8px}ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:before{border-bottom-color:rgba(0,0,0,.5);border-width:9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:after{left:13px;margin-left:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:before{left:13px;margin-left:-9px}html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:after,html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:after{right:13px;margin-right:-8px}html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:before,html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:before{right:13px;margin-right:-9px}ngx-extended-pdf-viewer #findResultsCount{background-color:#d9d9d9;color:#474747;text-align:center;padding:3px 4px}ngx-extended-pdf-viewer #findMsg{font-style:italic;color:#f66}ngx-extended-pdf-viewer #findResultsCount:empty,ngx-extended-pdf-viewer #findMsg:empty{display:none}ngx-extended-pdf-viewer #toolbarViewerMiddle{position:absolute;left:50%;transform:translateX(-50%)}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight{float:left;margin-left:4px}html[dir=ltr] #toolbarSidebarLeft,html[dir=rtl] #toolbarSidebarRight{float:left}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft{float:right;margin-right:4px}html[dir=ltr] #toolbarSidebarRight,html[dir=rtl] #toolbarSidebarLeft{float:right}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight>*{position:relative;float:left}html[dir=ltr] #toolbarSidebarLeft *,html[dir=ltr] #toolbarSidebarRight *,html[dir=ltr] .findbar *{position:relative;float:left}html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight>*,html[dir=rtl] ngx-extended-pdf-viewer .findbar *{position:relative;float:right}html[dir=rtl] #toolbarSidebarLeft *,html[dir=rtl] #toolbarSidebarRight *{position:relative;float:right}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dialogButton{border:0 none;background:none;width:32px;height:25px}ngx-extended-pdf-viewer .toolbarButton>span{display:inline-block;width:0;height:0;overflow:hidden}ngx-extended-pdf-viewer .toolbarButton[disabled],ngx-extended-pdf-viewer .dialogButton[disabled]{opacity:.5}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dropdownToolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{border:1px solid rgba(0,0,0,0);color:#d9d9d9}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{min-width:16px;border-radius:2px;font-size:12px;line-height:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton,html[dir=ltr] ngx-extended-pdf-viewer .dialogButton{margin:3px 2px 4px 0}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton,html[dir=rtl] ngx-extended-pdf-viewer .dialogButton{margin:3px 0 4px 2px}ngx-extended-pdf-viewer .dialogButton{background-color:rgba(0,0,0,.2);background-clip:padding-box;border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton{background-color:rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .toolbarButton.toggled,ngx-extended-pdf-viewer .secondaryToolbarButton.toggled{background-color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton>select{color:#d9d9d9;background-color:rgba(255,255,255,.8)}ngx-extended-pdf-viewer .dropdownToolbarButton>select>option{background:#474747}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:first-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:last-child{margin-left:4px}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:4px}ngx-extended-pdf-viewer .toolbarButtonSpacer{width:30px;display:inline-block;height:1px}html[dir=ltr] ngx-extended-pdf-viewer #findPrevious{margin-left:3px}html[dir=ltr] ngx-extended-pdf-viewer #findNext{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findPrevious{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findNext{margin-left:3px}ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{position:absolute;display:inline-block;top:1px;content:"";background-color:#70db55;height:9px;width:9px;border-radius:50%}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{left:17px}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{right:17px}ngx-extended-pdf-viewer .html .toolbarField{padding:3px 6px;margin:4px 0 4px 0;border-radius:2px;background-color:rgba(255,255,255,.8);background-clip:padding-box;border-width:1px;border-style:solid;border-color:rgba(0,0,0,.4);color:#4d4d4d;font-size:12px;line-height:14px;outline-style:none}ngx-extended-pdf-viewer .html .toolbarField::placeholder,ngx-extended-pdf-viewer .html .toolbarField:-ms-input-placeholder,ngx-extended-pdf-viewer .html .toolbarField::-ms-input-placeholder{color:#d9d9d9}ngx-extended-pdf-viewer .html .toolbarField[type=checkbox]{display:inline-block;margin:8px 0}ngx-extended-pdf-viewer .html .toolbarField.pageNumber{-moz-appearance:textfield;min-width:16px;text-align:right;width:40px}ngx-extended-pdf-viewer .html .toolbarField.pageNumber.visiblePageIsLoading{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACGFjVEwAAAAMAAAAAEy9LREAAAAaZmNUTAAAAAAAAAAQAAAAEQAAAAAAAAAAAGQD6AAAM7xH0AAAAixJREFUeNqFUk2IEmEYHowKBrpEoS1JsYc6eNA26NBiS0uwRK39uG1LtLQTjutBkpw9qIewTh0399ohEJFAMPbepQ7RDyjCCosHxQUzQdARd0Cd+Xpemg8GS3vg4X3eef+G732FcTDGjlv0R/CzxbcJ04CEe+B38Okf3ziA/mXGLjI2kmFnJzYol8trSPhqGMYX2FOwdQMNoE9rg4EEG0yn03P/mrwE3oB0dDqd99A/hsOhcqgdftI07ZuuD19RcaFQ2KAc6HPgLC8+xnRGRXkwlc1m5fpB/W0qlVpAeJ7o9/td+Xx+PRwO06BlagbK/E1smUwmMhoM3jGD5fr9/kt884AiyEHaU61Wl6hYVdVANBp9QLU8welyuXy7H3a3QqHQojABXq/3SjKZXHM4HDfhnhUIOtO30PWNrus7vV7vhTltEsSfrdYq/YXJO0Kz2YpBvCY2G4248B9UKpXHvMF+ZX9dMB9q2el03sUDPkLg5JQ7ObG9s+2z2+0+qqFaHvCAz0Cl2+3emtQAK16kySM2ekKHxYuPYI3PYSOlUklOJBLXoa/RNOtk+haPxxfoFv5aYyQSeSjL8ir01Xa77aeEWq02R49ErNUapIMUoxxJklYCgcCKdY0z5oWdxzY21Y4acLvdF6iIwSeNYpl8yqFc8IwwDlzbZaw1qCjKfbhH+WuTjsVifjQP5nK5S8IUzIiieJsfSbFYlEp7exv82MwYJk+HzaLnieMxK34DT9WZqdJAhVAAAAAaZmNUTAAAAAEAAAAQAAAAEQAAAAAAAAAAAGQD6AAAqM+tBAAAAitmZEFUAAAAAnjahVJBaBNBFF2iRVhQBA/ZFiXiQY+pVkSssaUIKtpIbKs9WM3qZiV4ahYkuZRQimC8FHJIrlJQD4HoPQfxkENBNhRbqCFkD2KgNrBuaAtJdsf3cQcWY+KHx7w///3/Z/6M8LcxxoY8/A3w3uMfEQYZBBPAWyD8x3c+g6+7sZjjOAZWuW+B8nr5JgRrtm2vYT3OHOcTFQBOABvA93q9Hv9X54vtdnsMVGo0Gq/pFPAXzF/mu1ar9bHT6WjYM/YP9suiKA6DB4AzPPkws9kK1leM2YvZbPbB1tbX5XQ6fRnhcUIul5vc/bn7oVQqvYBuGlCBGOCjGr5MJhM92NtbwsbLZrMZw94oIALciI/i+Dco2bIsJZFIzFEuF5wKBAK38/n800gkclXoY6FQ6BJONi9J0i24J90rdOdRdRGD09D9Ce/cx8TGzs59OoWLu8K3Wk0GeU6ogQv/sWq1+pAX2K5uLwjuoKb9fn8YAwwjcGzAPzm6ml0Nk5ZyKJcHzgGPANU0zev9CiA2RZou6z6mHJ58CIhRQP+iR5PJ5CT4Nerm7Ux7qVRqQtf1aM8zxuPxOVmWZ8GvYJAzJDAM4wINiWAYP4irFCMNaRVFmfU+4wggQXQar/HMMi0lGAyepSQGnzj9D/JJQ1pguOeOxWJxzGa2qmnaPbhDfNrEcbUZFFcLhcJ5YYCN4K/f4Z+kUqnIG5ubUf7Z3Bg6Dzafh4+76Ilx+w2UJZls1j53fgAAABpmY1RMAAAAAwAAABAAAAARAAAAAAAAAAAAZAPoAABFWX7tAAACLGZkQVQAAAAEeNqFU01oE1EQDvUPFqrHbIuCJ+sttV7E+lMkBPxpCjZtKahNJEYCUgPxkFxyMkaChUIOelL0HMhBYrwv9SKyidDDsiEs2MSkkLKsh4Smu89vwj5ZrBsHPt78fDOzb+at529hjB116Flgw2Ef94wSEKaBHHDVtj8ARVtfZszawrnkWqBSqVyhroPB4AXOcdM031soAP2UZVmfcX5VFGXtX53P9/v9KahivV5/Bvsl7FudTmeju7f3Zn+/9xC+LcMwPgqCMAE9BDzgyUeAJ0ACWM1kMvPSF+lpIpGYQXiWkM/nZ5s7zXflcnndstgn8H4ATeAE1RhLpVIrv3Q9Dsd6q9W6C980IABcBPL1er234OwwizUkSXpFuZxwRhTFm7nnuVW/33/JbUbZbPZ2rVZ7HQgEQjBP8yssADEM7HG73V7hnV1E+Lm7u0x8GwsetdG4xx2qotz3/EdUVf3DV1Tw7UHNe73eYKFQCCJwcsQ7Gd8sbAaJSzmUywNTtBaqquu6360AYjeIc8AO1ijHucZHFJC/yWFsZA76Nerm7Ey+dDp9XZblMHHtnLHhGuPx+FIkEqHJXu52u4tE0DRthoZE0LQW6TGKEYe40Wg05FzjJCCCdJa2YehG1OfznRt2gk06kodfSRziAhOH7lgqlS6azIwlk0l6TMf4tEnH1RZRPFYsFi+M2tIk3vod/kiq1Wrk+/Z2mD82ivHOruK8F/8XXGJD+Q37kpq30C76ogAAABpmY1RMAAAABQAAABAAAAARAAAAAAAAAAAAZAPoAACokwyXAAACO2ZkQVQAAAAGeNqFUl9oUmEUvxgLulSvulEQEfUUrhUUDTRbrILNRdv6w2p5h92y2UuKKEGUDxU9DSSix6H0JPjgiw/RSxG+jCvBkDEctxzhEEFFYer9/Pod88Yl0w78uL/vO79zzj3fOcLfxjnfY+Ay8NhwHhIGGQTHgGXg5O8zew7+mnir1ZrgjK3iPNE3QTQaHYNoubm7+wjCfcAzSgDs1zT2Ft8PiqJc+1flo8ARUEsmsyaBeyuVyrlcLvfkx/b203q9PoW71WKx+E4UxWHwSWDmT8/A/W6/0w+93svJZHJxfmGB2hgnBAKBM9ls9lUsFltijL+H7jNv8zS+eymHye/336hWy25Kks/nr+BuFBAB3YiP1mq1l9B81TTtSyqVekGxuuCwxWK5Gg6HbzkcjrNCHwsGg5PpdPqNzWa7juMhvYUZQGaMPSgUCjf1yn1MbLZaH9ucq4j5DnwSNre27lACwubGxl3hP9ZoNNB7ewf6nWazmRa6DzVtNpudkUjECcfBAXtyYCWy4rTb7bcphmJ1xwlgEZDL5fKlfgngu0gajWv3KKZnjMqa4sJDXQC3UTVjZboLhUJ2LJKLtN0YU2eMHo9nXpKkOfDzpVJplgSqqo7RAxNU9SdxmXykIa3b7Z4zjnEEsNA20jSq5arbarUe71TCmTiCO3+pbyww3NNjIpE4zTiTfT4fzXlInw5xtDaL5HI8Hj8lDLAR7PqUviSZTEb6tr7u0pet60PlwWYy8HFCj89gvwCt8Jigk+pFgAAAABpmY1RMAAAABwAAABAAAAARAAAAAAAAAAAAZAPoAABFBd9+AAACNmZkQVQAAAAIeNqFkt+LElEUxwdj2VDq1WkpiB52H4K0FUp2oTKCCtrtx5TbwxYOTDeFLQiFlO2hpIJefPEvKCVfBLFA3EcjiCVMEVaRhWVAKglEmQeHVcfpe8wJSbQDH+Z77jn33Ln3HO5f03XdNKJvAveIf4CbZkg4ASSw8MfXfNCPh7FFTdNe4OuYWCAWi1HSw46qikichfZqKAB9sNvtPoX/OpfLXZx08nFIPp/Pe6BZs9m0l0olsVKpMEVRlrD2XJblZxaLhYc+A879vRd4ABhY8W5sXE6n0+uCIJxEeJmQJOnU9pftJ5FIxK1p+iby3oL3YIZqmAKBgFtRWhIVqdVqV7BmB2ZgGGk7/uoRcuK9TieeSCQCtNdIOMbz/NVwOHzX5XKd5SYYY8yV2dradDgcN+AeNa5wHTB6vHq9vmacPMHMqrr/DvmfwGcQ53b39tapALFbrd7j/mPtdvuDrvcLyP8G/ZEbPtSK1WpdjUajqwgcnjIn8+Vy+Y3T6VyjPbTXCCyA+4C1Wq1Lkwr0ej16+Z/9fr+Kr3esjYV8wRMMBi9Qj8EhYyNpWguFQudVVf0K/Qt8B7ODNvp8vjuiKN6GXmo0GgIVw9As0gMTsvyDNKMY5WQymZfZbPbVaBvnAE/TSN1QWopks9nmB48LnzQ2D/7SmFhwZOyOqVTKoeka8/v9t+DOGN0hjasJKM6SyeRpborNmc3ma8aQFItFsbSz4zGGbRjDydPNNKKXibHYiP0GfOKZpyi1j88AAAAaZmNUTAAAAAkAAAAQAAAAEQAAAAAAAAAAAGQD6AAAqHbuIgAAAjdmZEFUAAAACnjahVNfaFJRGJf1D4R61YaNEbkRhcoaBAsiIegPbZflWhFreMnphD2phI3ywdfFCHyJqL3IHkTByeilJ4lAEmQq+DAGQ3GIL6LckAve3Xv6fXLvkMldH/w4v++c78853/cdw2lhjI0M8DmAGzrTExhcBzzApKp7CSqfZOx4BesN3QDxeHxKlmVfTxR5GF4iTgGIi70e7a2mUqlpvczjoOZCoeAmp3a77ShXyu5ypeImTnulUukt2YBPALc153PAipppdnVt7VEmk1lyuVy3cHyPQHx3Z2c5EAg8hc1rYJ3JLIL1PMUYCYVCi4LQ8VCQer3+GHsOwAhoQtzRaDTmYfNB7IqRjY1Nus1JUa+ZzeYn0Wj0ldPpvKtXI47jZr5tbfmsVuszqBbtCRxlpoI1m82XajY9Mf7tdj/KMvsCn69AxHBweLiktetgf/+N4T+Cgn5mTN6G/TZxg1qoWZPJNBeLxWhwrpwxJ2O5XO6dzWZbIB/VVxsStgx4O53OQ70AkiRtwua3oig/sC4MtXGvsOcOh8MPwO8Dlwcy35SZ/D2bzfoFQdiF/gf4BVzst9Hv97/geZ4izrRaLRcFq1arU1RggiiKUaYozWNJ+kk2iURiPZlMvh9s46g6YePUDaEjeOx2+0S/uNCJY78G/QhYJFvg6tAb0+n0HVzVGwwGn0O9oHWHeD6f/8QU1qgd1XxndWnUaDSeDEmxWOTpL2jDZrFY5tXM+jL4Lu0v6Jz15R+RjZkDa3+g7wAAABpmY1RMAAAACwAAABAAAAARAAAAAAAAAAAAZAPoAABF4D3LAAACLmZkQVQAAAAMeNqFU99r01AUDlMRAvpoa6k4LGwPPrRUUFAqKwjdxP2y/hhjk4R1mYX6lIL10UD/gFFY9zSE7r0U+m6fNqaUQKHINlgL3WixhoYOmy4kuZ4juRAsmQc+8p17v3NOTs4J868RQsYcfA4wP3LnYii4B0gAJm1fQNh8khBjHTWuCQqFQtg0zQ1d03gQXkeOCZBrus4jR41b5XGg3mq1yqGw1+uFavUaV6vXOeR4JssyhxrgdzGGBl8BrNuVZt+nUrFSqbQSj8fvw/UTBPJisbiagjvU0NYwFnOMpdPpN/2+msDDVqs1DWchAAughjzUaDRiqPl9fi5AzBLGUsEdr9c7I0nSUjQafcS4WCQSeZjNZpf9fv9zcP20hXnMih+s0+m8pZVdjP2pKGug/wj4ZBDCM8cnJyu0p+PDw1XmP9Zut0VCTAn0EnLG/lCzHo9nLpfL4eLcvGRPPOVyeS0QCCxijB1Ll4S8Awiqqj5zSzAcDkViki8mMTdBOzUyRrkqc5lMZgr4U8ANR+UABGVxvN1uNw/+LiTagefVv2NMJpOveZ5/BfyxoihxTNZsNsPw3Ad8HQwGaWJZ33Vd30HN9vbWh3w+n3KO0Wdv2DhOo6/2E8FgcAL8X5ZlnQmCEDYMA5PtAWKoBdwe6RG27QG8qiCK4ktwr4G4CzhFXqlUPhOLHBwd/VhmLjEfy7Iv6JJcXGjfNE3bo8t2y+dboJVdzdkX/RdG7hz2Bwqhl8Rp37vgAAAAGmZjVEwAAAANAAAAEAAAABEAAAAAAAAAAABkA+gAAKgqT7EAAAIiZmRBVAAAAA542oVSQWsaQRReLKWQQ6F40C4NKb30UCiSQwMNQoVC2kKyBZM0hWTjgrYVPRTrQVoSVOgv8O6h0nqrWOgf8NCcRGrxEJQoCFbsQdkYF8Wd6ftgh0hl7Qcf+8287723M/Okf8E5d8zoLaIyF7MBDHeIQeJda/0KhMYe59MQPLYFcrncqmmaryeGoZHxGjQKQBuTiQYNj13n2yTd5XI5AGO/3/dUa9VAtVYLQGOvUqkE4CG9ghyRfIUYsjptvolGN4rF4r7f779H4XUQulAoHEQpBo/lDYk7ccTj8V1dHwQRaLfbT2jPQ1wiCkB7ms3mBjy6rgdjsdgOcoVh2e12P02n03s+n29NsoHX632QTCb34KXlLXEEBVVxYd1u94XobIOl373eLvwWFal+drYvNuqnpwfSf9BoNA7JGwahJeuiNl0u11Ymk8HgXF8wJzey2ey2LMsKcqxcMSRcxV8MBoPHdgVGo9FL8hzTcWP09cw9Y6VcCSQSiUekv6DoZSJfxi9Td6XVan0gneYmP0Iu4o5wOLyjado26YdTNv3BGOsZhvGeDN+In+nZMIV54+IiCU8qdaylUqnD2WeUrQlTGeN/mMnqkUhklXH+izN2oqrq/fF4nKf4J+IavMSbc2fsdDpvydAplUofaXmV9E8qcgJNk/jOnE7zNM7PpAWQCc/FkAyHw+/6+flXMWxOp1MRnRfBMaPXwfnYJf4C0LWYznBNwdwAAAAaZmNUTAAAAA8AAAAQAAAAEQAAAAAAAAAAAGQD6AAARbycWAAAAihmZEFUAAAAEHjahVJBiBJhFF7MiBa8pi1F0WWpPSQdCjIPQrR1GCUs8zBLLmg7pYcQL3tKhN25LgxdwpssHScLL14kO4YYwhxkYEU8NNiqy7jsgPv//r23zL9IMvbgg+/973vvzbz3lv41xphrhocBkbmYg6HgFiAJWLX9NwibrzJGUqhxLFAqle5RSrcmlrUJwkvIsQByazLZRI4ap843gfoajUYChaPRyN/SWomWpiWQ41uz2UygBvgNzOHJFwApu5MgZTLr5XJZjEajaxAOIJCrqrqRgRhqbG2Kz8SVy+VipnmUxECv13sKb37AMoAbcn+n01lHjWmayWw2+xJzueC6z+d7VigU4qFQ6IHTjILB4P18Ph9HLbjX+C9EsCoOzDCMV7yzgy3/7vdjfDtnK9YPDkT+oLfbG0v/MV3Xz/VtHfT2oASv1xtWFAUP586CO/HsKXth1GIO5vLAe0AX8IcQ8tmpwPHR8RPQSISR13hYPPkywGBTZlgn1o96vZ4B/+PsxY0ZuwL+c1mWH2uahp//jlK2db7GarW6o6rlD263O3BKyLcpY7/G4/Hbs0KUycPhUGCUyrC+FOgfSpIUT6fTsdk1rtgX9mI6ZS1ySr6LongX/K9QYF8QhDXLOpHBLwBuoxZwde4fu90uXtfPSqWyDe5F4F8oY/vIi8ViEla9W6vVHi3a0gpMOMKPZDAYfOofHir82Dwej8A7LzLXDA/YmItx+ws7dpnWNX0cvAAAABpmY1RMAAAAEQAAABAAAAARAAAAAAAAAAAAZAPoAACpvStIAAACLWZkQVQAAAASeNqFU8+LEnEUFzOKgSDw4LRs9OOyQR2koECRtMtuB13EbTPYJYfG6uBSiRDSHsQO7qHDUtGpm7XHTCL8EyrIJMFg8GCsQuyAqePBdXT89nnLTAzJ2IMPfN68z3vv+/2+N7Z/jTFmN/EQsDwVszIIzgIisKD7dwk6X2BsHCeNZYF8Pn9R07R76mAgQHiEOBUgPlBVgThprDqfBuXL5XKMhJ1Ox12tVWPVWi1GnL5VKpUYacBPUY6RfAiI652C9xOJxWKxuBaJRM4j7CUQLxQK6wnESKNr48ab2FOp1KqidEUKNJvNJXxzAxxgGHF3o9FYJI2iKGIymbxBuYbgJM/z17PZbDQQCFyxWZjP57ucyWSipIU7r19h8glVfwOd0Wj0Ve9mZdwvWV41pnMw4qGqfmYTtgdnbzgcfrH9x+r1+ppRQKpL6zb9oYIejycqSdIzmveMPTm2/WI75HK5QpRzkGtamG/AD1VVX1kV6Ha710g7ZuPbfxuBHAWqwPe+orwvlUp3wDPAvKnzcSCQTqev0i5MjREz3sSGPXY4HN59df/1hLEP/X7/psbYE4g2ZFn2MU172G63aXQeQRBWRFFcMY9xDuAxhSUkfMQ13obD4QvgL5nGtvx+/7ler/cIfgI4Q1rgxNQd8YhRCN7tvNnZgHsY/DlOsUU8l8vdwr/xAKe9NGtKc06nc9lYklar9fTn7u6msWwcxwX1zjPNbuJewlTMZH8AHPeamRiFZiAAAAAaZmNUTAAAABMAAAAQAAAAEQAAAAAAAAAAAGQD6AAARCv4oQAAAjFmZEFUAAAAFHjahVJNaBNREA4lKi7kKIlFafFgEQ+JDYhUkhIRqmDiYZviobVZ2ETBUCEgTUAxJwlIS5eK1xxyCgRjKgjeq7f8EAhLDJKeLOSHhEB2SfbnOSP7IHRNHPjgmzffzLz3ZixnjRAyN8EDgMfmmNmo4BqABywZfgRh8CVC1DBqphbIZDLLmqY9G8syB8ILyLEAcnk85pCj5l+deVVVnwJ1FIvFEAp7vZ6rWquGqrVaCDmelcvlEGqAL+BNaPJFwCmgA/j+PBpdKxQKmyzL3oTwXQTyfD6/FYUYaPzGrcL0T+aOj3+813X9Fxy0RqPRJzhzARgANeSuZrO5hsmDwYCPxWJBzKWCqz6fj61UKh9SqZTfMsU8Hs/tZDL5xOFwPAT3Cn3CEUCEG9QVRflGO08x5rTV2qDT+TtiSZKOiE7K4JQkafjF8h9rNBqbtEC9Ud+yGB/ld7vdwVKp9AYCizP2xHZweBCw2+0BzMFcGggC8oToX5WR8npagX6/fw87q0TdxsWiyeeNf/jcbrc/ZrNZ+sZLk50B3kQisYq7YBpjOp1+KQjCC6vVujKUh281QoROp3MfBCjeODn5vYxJ3W6XBf0Kx3HrPM+vT45x3tiwO0Qjh/JQfuf1em9AoV3wd5xO53VIDhudF1ELuGx6I6zxA9j/PWFf2Ab3HIhfQZEd5PF4nIVYJJfL3Zo1pXmbzeanSyKKYlQUf0bosjEM84h2nmX0XXTEAHOM2h+8YZu0q2asIAAAABpmY1RMAAAAFQAAABAAAAARAAAAAAAAAAAAZAPoAACp4YrbAAACMWZkQVQAAAAWOMtjYEAD////Z0di+wGxPxKfiQEfACqIA+LHQJwL5aeBMJSt/v//n1QgrYTTgHv37iUDFTz69+/fXSAt/vfv33SoIezff/1KBLEXL15shM3m0D9//gQCmRJfvnzZB+Q/AWquv3T1UsKlq1cT3r9/bwDSfP78+QSQGiBbHu4SkOlAfAyIzwDx6q1bt+a9evVy7Zw5c5yB0tYgHBwcrL1+/frYnJwcd6AaX6irUmFhwgTUVAN0wR6gwMnv379PB4oZADEXkiNBbIP79++DDEj79OlTSlFRUShIL0yBrJmZWcDBgweby8vL3XGFka2trVlDQ0OEhISEJ5ArA/NCHxCvA+INP378mI5mMzrgev7qVRgsdsBR/Pb9+wn///5fCuQsBQbWBAYC4Pbt2zEwA27evhnLAA0oX1VV1aBdu3aBok0cTzrhnTB5gp+4uLgfSA9UL1jCDojb/v7/2wOMxlhcBnz48MEJZPOf/3/iQQkLppkViDtABty5c6esq6vPA8j2BGI+ZJtBllRWVtqD0gJGNLa0tMSXlZXFsrCwWAGjKB6YiPIfPnxoDAokEH7w4JkRSNPbt2+DgeqtEhMTQ1JSUkKQo1EKksJ+qAMDtODzh88Z+vr6amCbgMkZxAZqToXarABSC8SSGH7ctm2bBdD2nNLSUpBNrEiZibWioiIYKJe2Zs0aQ3yxJMXFxeUDSyQXLlxIBOUFWGKDykkSimrkPG8NjypMOTAAAMmmmt+QK3ABAAAAE3RFWHRTb2Z0d2FyZQBKYXBuZyByMTE5J+izYQAAAABJRU5ErkJggg==");background-repeat:no-repeat;background-position:1px}ngx-extended-pdf-viewer .html .toolbarField.pageNumber::-webkit-inner-spin-button,ngx-extended-pdf-viewer .html .toolbarField.pageNumber::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}ngx-extended-pdf-viewer .html .toolbarLabel{min-width:16px;padding:3px 6px 3px 2px;margin:4px 2px 4px 0;border:1px solid rgba(0,0,0,0);border-radius:2px;color:#d9d9d9;font-size:12px;line-height:14px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}ngx-extended-pdf-viewer .html #thumbnailView{position:absolute;width:calc(100% - 60px);top:0;bottom:0;padding:10px 30px 0;overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer .html #thumbnailView>a:active{outline:0}ngx-extended-pdf-viewer .html .thumbnail{width:var(--thumbnail-width);height:var(--thumbnail-height);margin:0 10px 5px 10px;padding:1px;border:7px solid rgba(0,0,0,0);border-radius:2px}html[dir=ltr] ngx-extended-pdf-viewer .thumbnail{float:left}html[dir=rtl] ngx-extended-pdf-viewer .thumbnail{float:right}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail{margin-bottom:10px}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail:not([data-loaded]){margin-bottom:9px}ngx-extended-pdf-viewer .thumbnail:not([data-loaded]){border:1px dashed rgba(255,0,0,.5);margin:-1px 9px 4px 9px}ngx-extended-pdf-viewer .thumbnailImage{border:1px solid rgba(0,0,0,0);width:var(--thumbnail-width);height:var(--thumbnail-height);opacity:.8;z-index:1;background-color:#fff;background-clip:content-box}ngx-extended-pdf-viewer .thumbnailSelectionRing{border-radius:2px;padding:7px}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing>.thumbnailImage{opacity:1}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing{background-color:rgba(255,255,255,.4);background-clip:padding-box;color:#fff}ngx-extended-pdf-viewer .thumbnail.selected{border-color:rgba(255,255,255,.4) !important}ngx-extended-pdf-viewer .thumbnail:not([data-loaded])>.thumbnailImage{width:calc(var(--thumbnail-width) - 2px);height:calc(var(--thumbnail-height) - 2px);border:1px dashed #848484}ngx-extended-pdf-viewer #outlineView,ngx-extended-pdf-viewer #attachmentsView,ngx-extended-pdf-viewer #layersView{position:absolute;width:calc(100% - 8px);top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outlineView{padding:4px 4px 0}ngx-extended-pdf-viewer #attachmentsView{padding:3px 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem,html[dir=ltr] ngx-extended-pdf-viewer .treeItem>.treeItems{margin-left:20px}html[dir=rtl] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem,html[dir=rtl] ngx-extended-pdf-viewer .treeItem>.treeItems{margin-right:20px}ngx-extended-pdf-viewer .treeItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:#424242;font-size:13px;line-height:15px;user-select:none;white-space:normal;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>a{padding:2px 0 5px 4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>a{padding:2px 4px 5px 0}ngx-extended-pdf-viewer #layersView .treeItem>a *{cursor:pointer}ngx-extended-pdf-viewer #layersView .treeItem>a>label>input{float:inline-start;margin-top:1px}html[dir=ltr] ngx-extended-pdf-viewer #layersView .treeItem>a>label{padding-left:4px}html[dir=rtl] ngx-extended-pdf-viewer #layersView .treesItem>a>label{padding-right:4px}ngx-extended-pdf-viewer .treeItemToggler{position:relative;height:0;width:0}ngx-extended-pdf-viewer .treeItemToggler::before{content:url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M10 13l4-7H6z'/></svg>");display:inline-block;position:absolute;max-width:16px}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{content:url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M13 9L6 5v8z'/></svg>");max-width:16px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{transform:scaleX(-1)}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden~.treeItems{display:none}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler{float:left}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler{float:right}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler::before{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler::before{left:4px}ngx-extended-pdf-viewer .treeItemToggler:hover,ngx-extended-pdf-viewer .treeItemToggler:hover+a,ngx-extended-pdf-viewer .treeItemToggler:hover~.treeItems,ngx-extended-pdf-viewer .treeItem>a:hover{background-clip:padding-box;border-radius:2px}ngx-extended-pdf-viewer .treeItem.selected{background-clip:padding-box}ngx-extended-pdf-viewer ::-moz-selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer ::selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer #errorWrapper{background:none repeat scroll 0 0 #f66;color:#fff;left:0;position:absolute;right:0;z-index:5;padding:3px;font-size:.8em}ngx-extended-pdf-viewer #errorMessageLeft{float:left}ngx-extended-pdf-viewer #errorMessageRight{float:right}ngx-extended-pdf-viewer #errorMoreInfo{background-color:#fff;color:#f66;padding:3px;margin:3px;width:98%}ngx-extended-pdf-viewer .dialogButton{width:auto;margin:3px 4px 2px !important;padding:2px 11px;color:#d9d9d9;background-color:#474747;border:#474747 !important}ngx-extended-pdf-viewer dialog{margin:auto;padding:15px;border-spacing:4px;color:#d9d9d9;font-size:12px;line-height:14px;background-color:#474747;border:1px solid rgba(0,0,0,.5);border-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.3)}ngx-extended-pdf-viewer dialog::backdrop{background-color:rgba(0,0,0,.2);user-select:none}ngx-extended-pdf-viewer dialog>.row{display:table-row}ngx-extended-pdf-viewer dialog>.row>*{display:table-cell}ngx-extended-pdf-viewer dialog .toolbarField{margin:5px 0}ngx-extended-pdf-viewer dialog .separator{display:block;margin:4px 0;height:1px;width:100%;background-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer dialog .buttonRow{text-align:center;vertical-align:middle}ngx-extended-pdf-viewer dialog :link{color:#fff}ngx-extended-pdf-viewer #passwordDialog{text-align:center}ngx-extended-pdf-viewer #passwordDialog .toolbarField{width:200px}ngx-extended-pdf-viewer #documentPropertiesDialog{text-align:left}ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{min-width:100px;text-align:start}ngx-extended-pdf-viewer #documentPropertiesDialog .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .buttonRow{margin-top:10px}html[dir=ltr] ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{text-align:left}html[dir=rtl] ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{text-align:right}.fileInput{background:#fff;color:#000;margin-top:5px;visibility:hidden;position:fixed;right:0;top:0}ngx-extended-pdf-viewer #documentPropertiesDialog .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .buttonRow{margin-top:10px}ngx-extended-pdf-viewer .clearBoth{clear:both}ngx-extended-pdf-viewer .grab-to-pan-grab{cursor:url("data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAB/+AAA7/gAAM/8AAAP7AAAG2wAABtkAAAzYAAAM2AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//wAD//4AA//+AAH//yAB///AAf//wAH//4AL//+AD///yB////z///////////////////////////////////////8="),move !important;cursor:-webkit-grab !important;cursor:grab !important}ngx-extended-pdf-viewer .grab-to-pan-grab *:not(input):not(textarea):not(button):not(select):not(:link){cursor:inherit !important}ngx-extended-pdf-viewer .grab-to-pan-grab:active,ngx-extended-pdf-viewer .grab-to-pan-grabbing{cursor:url("data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAAP+AAAD/gAAB/oAAAbYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//8AD///gA///wAP//8AH///kn/////////////////////////////////////////////////////////////////8="),move !important;cursor:-webkit-grabbing !important;cursor:grabbing !important;position:fixed;background:rgba(0,0,0,0);display:block;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:10}@page{margin:0}@media screen and (-webkit-min-device-pixel-ratio: 1.1),screen and (min-resolution: 1.1dppx){ngx-extended-pdf-viewer .toolbarButton::before{transform:scale(0.5);top:-5px}ngx-extended-pdf-viewer .secondaryToolbarButton::before{transform:scale(0.5);top:-4px}}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton::before,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton::before{left:-1px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:-2px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:186px}ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading,ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url("data:image/png;base64,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");background-size:16px 17px}ngx-extended-pdf-viewer .html .unverified-signature-warning,ngx-extended-pdf-viewer .html .modified-background-warning{width:100%;background-color:#ff5353;font-size:12px;text-align:center;padding-top:5px;padding-bottom:5px}.treeItem.selected>a{font-weight:bold}ngx-extended-pdf-viewer .invisible{display:none !important}ngx-extended-pdf-viewer #outerContainer{clip-path:inset(0 0 0 0)}html[dir=ltr] ngx-extended-pdf-viewer .dialogButton,html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:0;margin-left:0}html[dir=ltr] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:4px;margin-left:0}html[dir=rtl] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:0;margin-left:4px}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dialogButton{padding-left:0;padding-right:0}ngx-extended-pdf-viewer .offscreen{position:fixed !important;left:-9999px !important;display:block !important;width:3000px !important}ngx-extended-pdf-viewer .offscreen #sidebarContainer{top:1000px !important}ngx-extended-pdf-viewer .toolbarButton{margin-left:-1px !important;margin-right:-2px !important}ngx-extended-pdf-viewer #numPages{padding-right:0}ngx-extended-pdf-viewer .pdf-viewer-template,ngx-extended-pdf-viewer .pdf-viewer-template *{display:none}ngx-extended-pdf-viewer button:focus,ngx-extended-pdf-viewer a:focus,ngx-extended-pdf-viewer input:focus,ngx-extended-pdf-viewer select:focus{outline:none;border:1px solid blue}ngx-extended-pdf-viewer input[type=checkbox]:focus{outline:1px solid blue}.hidden-by-fullscreen{display:none !important}:root{--scrollbar-color: rgba(121, 121, 123, 1);--scrollbar-bg-color: rgba(35, 35, 39, 1)} #printContainer{display:none}@media print{#printContainer{position:static;display:block}body[data-pdfjsprinting],html{overflow-y:visible !important;margin:0;padding:0}body[data-pdfjsprinting]{background:rgba(0,0,0,0) none;height:100%;width:100%}body[data-pdfjsprinting]>*{display:none !important;outline:0;padding:0;margin:0}body[data-pdfjsprinting] #printContainer{display:block !important;height:100%;width:100%}body[data-pdfjsprinting] #printContainer img{max-width:100%;max-height:100%;direction:ltr;display:block !important}body[data-pdfjsprinting] #printContainer>.printedPage{page-break-after:always;page-break-inside:avoid;height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}body[data-pdfjsprinting] #printContainer>.xfaPrintedPage .xfaPage{position:absolute}body[data-pdfjsprinting] #printContainer>.xfaPrintedPage{page-break-after:always;page-break-inside:avoid;width:100%;height:100%;position:relative}body[data-pdfjsprinting] #printContainer>.printedPage canvas,body[data-pdfjsprinting] #printContainer>.printedPage img{max-width:100%;max-height:100%;direction:ltr;display:block}html[data-pdfjsprinting].cdk-global-scrollblock{width:initial;position:initial}}`;
var PdfDarkThemeComponent = class {
  constructor(renderer, document2) {
    this.renderer = renderer;
    this.document = document2;
  }
  ngOnInit() {
    this.injectStyle();
  }
  injectStyle() {
    const styles = this.document.createElement("STYLE");
    styles.id = "pdf-theme-css";
    addTrustedHTML(styles, css$2);
    this.renderer.appendChild(this.document.head, styles);
  }
  ngOnDestroy() {
    const styles = this.document.getElementById("pdf-theme-css");
    styles?.parentElement?.removeChild(styles);
  }
};
PdfDarkThemeComponent.\u0275fac = function PdfDarkThemeComponent_Factory(t) {
  return new (t || PdfDarkThemeComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(DOCUMENT));
};
PdfDarkThemeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfDarkThemeComponent,
  selectors: [["pdf-dark-theme"]],
  decls: 0,
  vars: 0,
  template: function PdfDarkThemeComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfDarkThemeComponent, [{
    type: Component,
    args: [{
      selector: "pdf-dark-theme",
      template: ""
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var css$1 = `ngx-extended-pdf-viewer .textLayer{position:absolute;text-align:initial;inset:0;overflow:hidden;opacity:.25;line-height:1;text-size-adjust:none;forced-color-adjust:none;transform-origin:0 0;z-index:2}ngx-extended-pdf-viewer .textLayer :is(span,br){color:rgba(0,0,0,0);position:absolute;white-space:pre;cursor:text;transform-origin:0% 0%}ngx-extended-pdf-viewer .textLayer span.markedContent{top:0;height:0}ngx-extended-pdf-viewer .textLayer .highlight{margin:-1px;padding:1px;background-color:rgba(180,0,170,.4);border-radius:4px}ngx-extended-pdf-viewer .textLayer .highlight.appended{position:initial}ngx-extended-pdf-viewer .textLayer .highlight.begin{border-radius:4px 0 0 4px}ngx-extended-pdf-viewer .textLayer .highlight.end{border-radius:0 4px 4px 0}ngx-extended-pdf-viewer .textLayer .highlight.middle{border-radius:0}ngx-extended-pdf-viewer .textLayer .highlight.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer ::selection{background:blue}ngx-extended-pdf-viewer .textLayer br::selection{background:rgba(0,0,0,0)}ngx-extended-pdf-viewer .textLayer .endOfContent{display:block;position:absolute;inset:100% 0 0;z-index:-1;cursor:default;user-select:none}ngx-extended-pdf-viewer .textLayer .endOfContent.active{top:0}ngx-extended-pdf-viewer *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom: none;--page-margin: 1px auto -8px;--page-border: 9px solid transparent;--spreadHorizontalWrapped-margin-LR: -3.5px;--zoom-factor: 1}@media screen and (forced-colors: active){ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom: 9px;--page-margin: 9px auto 0;--page-border: none;--spreadHorizontalWrapped-margin-LR: 4.5px}}ngx-extended-pdf-viewer [data-main-rotation="90"]{transform:rotate(90deg) translateY(-100%)}ngx-extended-pdf-viewer [data-main-rotation="180"]{transform:rotate(180deg) translate(-100%, -100%)}ngx-extended-pdf-viewer [data-main-rotation="270"]{transform:rotate(270deg) translateX(-100%)}ngx-extended-pdf-viewer .pdfViewer{padding-bottom:var(--pdfViewer-padding-bottom)}ngx-extended-pdf-viewer .pdfViewer .canvasWrapper{overflow:hidden}ngx-extended-pdf-viewer .pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px auto;position:relative;overflow:hidden;border:9px solid rgba(0,0,0,0);background-clip:content-box;-o-border-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=") 9 9 repeat;border-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=") 9 9 repeat;background-color:#fff;filter:opacity(1);-webkit-filter:opacity(1)}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .page{margin:0 auto 10px auto;border:none}ngx-extended-pdf-viewer .html .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .html .pdfViewer.scrollWrapped,ngx-extended-pdf-viewer .html .spread{margin-left:3.5px;margin-right:3.5px;text-align:center}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .spread{white-space:nowrap}ngx-extended-pdf-viewer .pdfViewer.removePageBorders,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .spread .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{display:inline-block;vertical-align:middle}ngx-extended-pdf-viewer .spread .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page{margin-left:-3.5px;margin-right:-3.5px}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .spread .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollWrapped .page{margin-left:5px;margin-right:5px}ngx-extended-pdf-viewer .pdfViewer .page canvas{margin:0;display:block}ngx-extended-pdf-viewer .pdfViewer .page canvas[hidden]{display:none}ngx-extended-pdf-viewer .pdfViewer .page canvas[zooming]{width:100%;height:100%}ngx-extended-pdf-viewer .pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url("data:image/gif;base64,R0lGODlhGAAYAPQAAP///wAAAM7Ozvr6+uDg4LCwsOjo6I6OjsjIyJycnNjY2KioqMDAwPLy8nZ2doaGhri4uGhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJBwAAACwAAAAAGAAYAAAFriAgjiQAQWVaDgr5POSgkoTDjFE0NoQ8iw8HQZQTDQjDn4jhSABhAAOhoTqSDg7qSUQwxEaEwwFhXHhHgzOA1xshxAnfTzotGRaHglJqkJcaVEqCgyoCBQkJBQKDDXQGDYaIioyOgYSXA36XIgYMBWRzXZoKBQUMmil0lgalLSIClgBpO0g+s26nUWddXyoEDIsACq5SsTMMDIECwUdJPw0Mzsu0qHYkw72bBmozIQAh+QQJBwAAACwAAAAAGAAYAAAFsCAgjiTAMGVaDgR5HKQwqKNxIKPjjFCk0KNXC6ATKSI7oAhxWIhezwhENTCQEoeGCdWIPEgzESGxEIgGBWstEW4QCGGAIJEoxGmGt5ZkgCRQQHkGd2CESoeIIwoMBQUMP4cNeQQGDYuNj4iSb5WJnmeGng0CDGaBlIQEJziHk3sABidDAHBgagButSKvAAoyuHuUYHgCkAZqebw0AgLBQyyzNKO3byNuoSS8x8OfwIchACH5BAkHAAAALAAAAAAYABgAAAW4ICCOJIAgZVoOBJkkpDKoo5EI43GMjNPSokXCINKJCI4HcCRIQEQvqIOhGhBHhUTDhGo4diOZyFAoKEQDxra2mAEgjghOpCgz3LTBIxJ5kgwMBShACREHZ1V4Kg1rS44pBAgMDAg/Sw0GBAQGDZGTlY+YmpyPpSQDiqYiDQoCliqZBqkGAgKIS5kEjQ21VwCyp76dBHiNvz+MR74AqSOdVwbQuo+abppo10ssjdkAnc0rf8vgl8YqIQAh+QQJBwAAACwAAAAAGAAYAAAFrCAgjiQgCGVaDgZZFCQxqKNRKGOSjMjR0qLXTyciHA7AkaLACMIAiwOC1iAxCrMToHHYjWQiA4NBEA0Q1RpWxHg4cMXxNDk4OBxNUkPAQAEXDgllKgMzQA1pSYopBgonCj9JEA8REQ8QjY+RQJOVl4ugoYssBJuMpYYjDQSliwasiQOwNakALKqsqbWvIohFm7V6rQAGP6+JQLlFg7KDQLKJrLjBKbvAor3IKiEAIfkECQcAAAAsAAAAABgAGAAABbUgII4koChlmhokw5DEoI4NQ4xFMQoJO4uuhignMiQWvxGBIQC+AJBEUyUcIRiyE6CR0CllW4HABxBURTUw4nC4FcWo5CDBRpQaCoF7VjgsyCUDYDMNZ0mHdwYEBAaGMwwHDg4HDA2KjI4qkJKUiJ6faJkiA4qAKQkRB3E0i6YpAw8RERAjA4tnBoMApCMQDhFTuySKoSKMJAq6rD4GzASiJYtgi6PUcs9Kew0xh7rNJMqIhYchACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJEAQZZo2JIKQxqCOjWCMDDMqxT2LAgELkBMZCoXfyCBQiFwiRsGpku0EshNgUNAtrYPT0GQVNRBWwSKBMp98P24iISgNDAS4ipGA6JUpA2WAhDR4eWM/CAkHBwkIDYcGiTOLjY+FmZkNlCN3eUoLDmwlDW+AAwcODl5bYl8wCVYMDw5UWzBtnAANEQ8kBIM0oAAGPgcREIQnVloAChEOqARjzgAQEbczg8YkWJq8nSUhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJGAYZZoOpKKQqDoORDMKwkgwtiwSBBYAJ2owGL5RgxBziQQMgkwoMkhNqAEDARPSaiMDFdDIiRSFQowMXE8Z6RdpYHWnEAWGPVkajPmARVZMPUkCBQkJBQINgwaFPoeJi4GVlQ2Qc3VJBQcLV0ptfAMJBwdcIl+FYjALQgimoGNWIhAQZA4HXSpLMQ8PIgkOSHxAQhERPw7ASTSFyCMMDqBTJL8tf3y2fCEAIfkECQcAAAAsAAAAABgAGAAABa8gII4k0DRlmg6kYZCoOg5EDBDEaAi2jLO3nEkgkMEIL4BLpBAkVy3hCTAQKGAznM0AFNFGBAbj2cA9jQixcGZAGgECBu/9HnTp+FGjjezJFAwFBQwKe2Z+KoCChHmNjVMqA21nKQwJEJRlbnUFCQlFXlpeCWcGBUACCwlrdw8RKGImBwktdyMQEQciB7oACwcIeA4RVwAODiIGvHQKERAjxyMIB5QlVSTLYLZ0sW8hACH5BAkHAAAALAAAAAAYABgAAAW0ICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWPM5wNiV0UDUIBNkdoepTfMkA7thIECiyRtUAGq8fm2O4jIBgMBA1eAZ6Knx+gHaJR4QwdCMKBxEJRggFDGgQEREPjjAMBQUKIwIRDhBDC2QNDDEKoEkDoiMHDigICGkJBS2dDA6TAAnAEAkCdQ8ORQcHTAkLcQQODLPMIgIJaCWxJMIkPIoAt3EhACH5BAkHAAAALAAAAAAYABgAAAWtICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWHM5wNiV0UN3xdLiqr+mENcWpM9TIbrsBkEck8oC0DQqBQGGIz+t3eXtob0ZTPgNrIwQJDgtGAgwCWSIMDg4HiiUIDAxFAAoODwxDBWINCEGdSTQkCQcoegADBaQ6MggHjwAFBZUFCm0HB0kJCUy9bAYHCCPGIwqmRq0jySMGmj6yRiEAIfkECQcAAAAsAAAAABgAGAAABbIgII4k0DRlmg6kYZCsOg4EKhLE2BCxDOAxnIiW84l2L4BLZKipBopW8XRLDkeCiAMyMvQAA+uON4JEIo+vqukkKQ6RhLHplVGN+LyKcXA4Dgx5DWwGDXx+gIKENnqNdzIDaiMECwcFRgQCCowiCAcHCZIlCgICVgSfCEMMnA0CXaU2YSQFoQAKUQMMqjoyAglcAAyBAAIMRUYLCUkFlybDeAYJryLNk6xGNCTQXY0juHghACH5BAkHAAAALAAAAAAYABgAAAWzICCOJNA0ZVoOAmkY5KCSSgSNBDE2hDyLjohClBMNij8RJHIQvZwEVOpIekRQJyJs5AMoHA+GMbE1lnm9EcPhOHRnhpwUl3AsknHDm5RN+v8qCAkHBwkIfw1xBAYNgoSGiIqMgJQifZUjBhAJYj95ewIJCQV7KYpzBAkLLQADCHOtOpY5PgNlAAykAEUsQ1wzCgWdCIdeArczBQVbDJ0NAqyeBb64nQAGArBTt8R8mLuyPyEAOwAAAAAAAAAAAA==") center no-repeat}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .spread{display:block}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100vh !important}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .html{height:100%;width:100%;font-size:10px}ngx-extended-pdf-viewer .body{height:100%;width:100%;scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color)}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .body :is(.toolbar,.editorParamsToolbar,.findbar,#sidebarContainer) :is(input,button,select),ngx-extended-pdf-viewer .body .secondaryToolbar :is(input,button,a,select){outline:none;font-family:message-box,sans-serif;font-size:13px}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .pdf-viewer input,ngx-extended-pdf-viewer .pdf-viewer button,ngx-extended-pdf-viewer .pdf-viewer select{font-family:message-box,sans-serif;outline:none;scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color)}ngx-extended-pdf-viewer button{cursor:pointer}ngx-extended-pdf-viewer select{background-color:#fff !important;color:#5a5a5a}ngx-extended-pdf-viewer .hidden,ngx-extended-pdf-viewer [hidden]{display:none !important}ngx-extended-pdf-viewer .pdfViewer.enablePermissions .textLayer span{-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important;cursor:not-allowed}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0 !important;overflow:hidden !important}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop{background-color:#f9f9f9}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-webkit-full-screen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-moz-full-screen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-moz-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:fullscreen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls>*,ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls .textLayer span{cursor:default}ngx-extended-pdf-viewer #outerContainer{width:100%;height:100%;position:relative}ngx-extended-pdf-viewer #sidebarContainer{position:absolute;top:32px;bottom:0;width:200px;visibility:hidden;z-index:100;transition-duration:200ms;transition-timing-function:ease}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContainer{transition-property:left;left:-200px;left:-200px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContainer{transition-property:right;right:-200px}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #sidebarContainer{transition-duration:0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outerContainer.sidebarMoving #sidebarContainer,ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{visibility:visible}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{left:0}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{right:0}ngx-extended-pdf-viewer #mainContainer{position:absolute;top:0;right:0;bottom:0;left:0;min-width:min(102%,350px)}ngx-extended-pdf-viewer #sidebarContent{top:32px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;width:100%;background-color:#f2f2f3}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContent{left:0}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContent{right:0}ngx-extended-pdf-viewer #viewerContainer{overflow:auto;-webkit-overflow-scrolling:auto;position:absolute;top:32px;right:0;bottom:0;left:0;outline:none}ngx-extended-pdf-viewer #viewerContainer:not(.pdfPresentationMode){transition-duration:200ms;transition-timing-function:ease}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #viewerContainer{transition-duration:0s}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:left;left:200px}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:right;right:200px}ngx-extended-pdf-viewer .toolbar{position:relative;left:0;right:0;z-index:9999;cursor:default;border:0;border-bottom:1px solid #ddd}ngx-extended-pdf-viewer #toolbarContainer{width:100%}ngx-extended-pdf-viewer #toolbarSidebar{width:calc(100% - 10px);height:32px;background-color:#f2f2f3;color:#5a5a5a;border:none;padding-top:1px;padding-left:5px;padding-right:5px}html[dir=ltr] #toolbarSidebarRight .toolbarButton{margin-right:3px !important}html[dir=rtl] #toolbarSidebarRight .toolbarButton{margin-left:3px !important}html[dir=ltr] #sidebarToggle{margin-right:5px}html[dir=rtl] #sidebarToggle{margin-left:5px}ngx-extended-pdf-viewer #sidebarResizer{position:absolute;top:0;bottom:0;width:6px;z-index:200;cursor:ew-resize}html[dir=ltr] ngx-extended-pdf-viewer #sidebarResizer{right:-6px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarResizer{left:-6px}ngx-extended-pdf-viewer #toolbarContainer,ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar,ngx-extended-pdf-viewer .editorParamsToolbar{position:relative;min-height:32px;background-color:#f9f9f9}ngx-extended-pdf-viewer #toolbarViewer{min-height:32px}ngx-extended-pdf-viewer #loadingBar{position:relative;width:100%;height:4px;background-color:#333;border-bottom:1px solid #333}ngx-extended-pdf-viewer #loadingBar .progress{position:absolute;top:0;left:0;width:0%;height:100%;background-color:#ddd;overflow:hidden;transition:width 200ms}@-webkit-keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}@keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate{background-color:#999;transition:none}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:calc(100% + 150px);background:repeating-linear-gradient(135deg, rgb(187, 187, 187) 0, rgb(153, 153, 153) 5px, rgb(153, 153, 153) 45px, rgb(221, 221, 221) 55px, rgb(221, 221, 221) 95px, rgb(187, 187, 187) 100px);-webkit-animation:progressIndeterminate 950ms linear infinite;animation:progressIndeterminate 950ms linear infinite}ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar,ngx-extended-pdf-viewer .editorParamsToolbar{top:40px;position:absolute;z-index:10000;height:auto;min-width:16px;padding:0 6px 0 6px;margin:4px 2px 4px 2px;font-size:12px;line-height:14px;text-align:left;cursor:default}ngx-extended-pdf-viewer .findbar{min-width:300px}ngx-extended-pdf-viewer .findbar>div{height:32px}ngx-extended-pdf-viewer .findbar.wrapContainers>div{clear:both}ngx-extended-pdf-viewer .findbar.wrapContainers>div#findbarMessageContainer{height:auto}html[dir=ltr] ngx-extended-pdf-viewer .findbar{left:34px}html[dir=rtl] ngx-extended-pdf-viewer .findbar{right:34px}ngx-extended-pdf-viewer .findbar label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #findInput{width:200px}ngx-extended-pdf-viewer #findInput::-webkit-input-placeholder{color:#bfbfbf}ngx-extended-pdf-viewer #findInput::-moz-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput:-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url("data:image/png;base64,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");background-repeat:no-repeat;background-position:right}html[dir=rtl] ngx-extended-pdf-viewer #findInput[data-status=pending]{background-position:left}#findInput[data-status=notFound]{background-color:#f66}ngx-extended-pdf-viewer ngx-extended-pdf-viewer .editorParamsToolbar{padding:6px;height:auto;z-index:3000}ngx-extended-pdf-viewer .editorParamsToolbarContainer{width:220px;margin-bottom:-4px}ngx-extended-pdf-viewer .editorParamsToolbarContainer>.editorParamsSetter{min-height:26px;display:flex;align-items:center;justify-content:space-between;padding-inline:10px}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsLabel{padding-inline-end:10px;flex:none;color:var(--main-color)}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsColor{width:32px;height:32px;flex:none}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider{background-color:rgba(0,0,0,0);width:90px;flex:0 1 0}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-progress{background-color:#000}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-runnable-track,ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-track{background-color:#000}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-thumb,ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-thumb{background-color:#fff}ngx-extended-pdf-viewer #editorStampParamsToolbar{inset-inline-end:40px;background-color:#f9f9f9}ngx-extended-pdf-viewer #editorInkParamsToolbar{inset-inline-end:68px;background-color:#f9f9f9}ngx-extended-pdf-viewer #editorFreeTextParamsToolbar{inset-inline-end:96px;background-color:#f9f9f9}ngx-extended-pdf-viewer .doorHanger,ngx-extended-pdf-viewer .doorHangerRight{border:1px solid rgba(0,0,0,.5);border-radius:2px}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:after,ngx-extended-pdf-viewer .doorHangerRight:before{bottom:100%;border:solid rgba(0,0,0,0);content:" ";height:0;width:0;position:absolute;pointer-events:none}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHangerRight:after{border-bottom-color:#f9f9f9;border-width:8px}ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:before{border-bottom-color:rgba(0,0,0,.5);border-width:9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:after{left:13px;margin-left:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:before{left:13px;margin-left:-9px}html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:after,html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:after{right:13px;margin-right:-8px}html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:before,html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:before{right:13px;margin-right:-9px}ngx-extended-pdf-viewer #findResultsCount{background-color:#5a5a5a;color:#f9f9f9;text-align:center;padding:3px 4px}ngx-extended-pdf-viewer #findMsg{font-style:italic;color:#f66}ngx-extended-pdf-viewer #findResultsCount:empty,ngx-extended-pdf-viewer #findMsg:empty{display:none}ngx-extended-pdf-viewer #toolbarViewerMiddle{position:absolute;left:50%;transform:translateX(-50%)}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight{float:left;margin-left:4px}html[dir=ltr] #toolbarSidebarLeft,html[dir=rtl] #toolbarSidebarRight{float:left}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft{float:right;margin-right:4px}html[dir=ltr] #toolbarSidebarRight,html[dir=rtl] #toolbarSidebarLeft{float:right}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight>*{position:relative;float:left}html[dir=ltr] #toolbarSidebarLeft *,html[dir=ltr] #toolbarSidebarRight *,html[dir=ltr] .findbar *{position:relative;float:left}html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight>*,html[dir=rtl] ngx-extended-pdf-viewer .findbar *{position:relative;float:right}html[dir=rtl] #toolbarSidebarLeft *,html[dir=rtl] #toolbarSidebarRight *{position:relative;float:right}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dialogButton{border:0 none;background:none;width:32px;height:25px}ngx-extended-pdf-viewer .toolbarButton>span{display:inline-block;width:0;height:0;overflow:hidden}ngx-extended-pdf-viewer .toolbarButton[disabled],ngx-extended-pdf-viewer .dialogButton[disabled]{opacity:.5}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dropdownToolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{border:1px solid rgba(0,0,0,0);color:#5a5a5a}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{min-width:16px;border-radius:2px;font-size:12px;line-height:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton,html[dir=ltr] ngx-extended-pdf-viewer .dialogButton{margin:3px 2px 4px 0}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton,html[dir=rtl] ngx-extended-pdf-viewer .dialogButton{margin:3px 0 4px 2px}ngx-extended-pdf-viewer .dialogButton{background-color:rgba(0,0,0,.2);background-clip:padding-box;border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton{background-color:rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .toolbarButton.toggled,ngx-extended-pdf-viewer .secondaryToolbarButton.toggled{background-color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton>select{color:#5a5a5a;background-color:#fff}ngx-extended-pdf-viewer .dropdownToolbarButton>select>option{background:#f9f9f9}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:first-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:last-child{margin-left:4px}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:4px}ngx-extended-pdf-viewer .toolbarButtonSpacer{width:30px;display:inline-block;height:1px}html[dir=ltr] ngx-extended-pdf-viewer #findPrevious{margin-left:3px}html[dir=ltr] ngx-extended-pdf-viewer #findNext{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findPrevious{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findNext{margin-left:3px}ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{position:absolute;display:inline-block;top:1px;content:"";background-color:#70db55;height:9px;width:9px;border-radius:50%}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{left:17px}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{right:17px}ngx-extended-pdf-viewer .html .toolbarField{padding:3px 6px;margin:4px 0 4px 0;border-radius:2px;background-color:#fff;background-clip:padding-box;border-width:1px;border-style:solid;border-color:rgba(0,0,0,.4);color:#5a5a5a;font-size:12px;line-height:14px;outline-style:none}ngx-extended-pdf-viewer .html .toolbarField::placeholder,ngx-extended-pdf-viewer .html .toolbarField:-ms-input-placeholder,ngx-extended-pdf-viewer .html .toolbarField::-ms-input-placeholder{color:#bfbfbf}ngx-extended-pdf-viewer .html .toolbarField[type=checkbox]{display:inline-block;margin:8px 0}ngx-extended-pdf-viewer .html .toolbarField.pageNumber{-moz-appearance:textfield;min-width:16px;text-align:right;width:40px}ngx-extended-pdf-viewer .html .toolbarField.pageNumber.visiblePageIsLoading{background-image:url("data:image/png;base64,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");background-repeat:no-repeat;background-position:1px}ngx-extended-pdf-viewer .html .toolbarField.pageNumber::-webkit-inner-spin-button,ngx-extended-pdf-viewer .html .toolbarField.pageNumber::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}ngx-extended-pdf-viewer .html .toolbarLabel{min-width:16px;padding:3px 6px 3px 2px;margin:4px 2px 4px 0;border:1px solid rgba(0,0,0,0);border-radius:2px;color:#5a5a5a;font-size:12px;line-height:14px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}ngx-extended-pdf-viewer .html #thumbnailView{position:absolute;width:calc(100% - 60px);top:0;bottom:0;padding:10px 30px 0;overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer .html #thumbnailView>a:active{outline:0}ngx-extended-pdf-viewer .html .thumbnail{width:var(--thumbnail-width);height:var(--thumbnail-height);margin:0 10px 5px 10px;padding:1px;border:7px solid rgba(0,0,0,0);border-radius:2px}html[dir=ltr] ngx-extended-pdf-viewer .thumbnail{float:left}html[dir=rtl] ngx-extended-pdf-viewer .thumbnail{float:right}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail{margin-bottom:10px}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail:not([data-loaded]){margin-bottom:9px}ngx-extended-pdf-viewer .thumbnail:not([data-loaded]){border:1px dashed rgba(255,0,0,.5);margin:-1px 9px 4px 9px}ngx-extended-pdf-viewer .thumbnailImage{border:1px solid rgba(0,0,0,0);width:var(--thumbnail-width);height:var(--thumbnail-height);opacity:.8;z-index:1;background-color:#fff;background-clip:content-box}ngx-extended-pdf-viewer .thumbnailSelectionRing{border-radius:2px;padding:7px}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing>.thumbnailImage{opacity:1}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing{background-color:rgba(255,255,255,.4);background-clip:padding-box;color:#fff}ngx-extended-pdf-viewer .thumbnail.selected{border-color:rgba(255,255,255,.4) !important}ngx-extended-pdf-viewer .thumbnail:not([data-loaded])>.thumbnailImage{width:calc(var(--thumbnail-width) - 2px);height:calc(var(--thumbnail-height) - 2px);border:1px dashed #848484}ngx-extended-pdf-viewer #outlineView,ngx-extended-pdf-viewer #attachmentsView,ngx-extended-pdf-viewer #layersView{position:absolute;width:calc(100% - 8px);top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outlineView{padding:4px 4px 0}ngx-extended-pdf-viewer #attachmentsView{padding:3px 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem,html[dir=ltr] ngx-extended-pdf-viewer .treeItem>.treeItems{margin-left:20px}html[dir=rtl] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem,html[dir=rtl] ngx-extended-pdf-viewer .treeItem>.treeItems{margin-right:20px}ngx-extended-pdf-viewer .treeItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:#5a5a5a;font-size:13px;line-height:15px;user-select:none;white-space:normal;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>a{padding:2px 0 5px 4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>a{padding:2px 4px 5px 0}ngx-extended-pdf-viewer #layersView .treeItem>a *{cursor:pointer}ngx-extended-pdf-viewer #layersView .treeItem>a>label>input{float:inline-start;margin-top:1px}html[dir=ltr] ngx-extended-pdf-viewer #layersView .treeItem>a>label{padding-left:4px}html[dir=rtl] ngx-extended-pdf-viewer #layersView .treesItem>a>label{padding-right:4px}ngx-extended-pdf-viewer .treeItemToggler{position:relative;height:0;width:0}ngx-extended-pdf-viewer .treeItemToggler::before{content:url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M10 13l4-7H6z'/></svg>");display:inline-block;position:absolute;max-width:16px}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{content:url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M13 9L6 5v8z'/></svg>");max-width:16px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{transform:scaleX(-1)}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden~.treeItems{display:none}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler{float:left}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler{float:right}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler::before{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler::before{left:4px}ngx-extended-pdf-viewer .treeItemToggler:hover,ngx-extended-pdf-viewer .treeItemToggler:hover+a,ngx-extended-pdf-viewer .treeItemToggler:hover~.treeItems,ngx-extended-pdf-viewer .treeItem>a:hover{background-clip:padding-box;border-radius:2px}ngx-extended-pdf-viewer .treeItem.selected{background-clip:padding-box}ngx-extended-pdf-viewer ::-moz-selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer ::selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer #errorWrapper{background:none repeat scroll 0 0 #f66;color:#fff;left:0;position:absolute;right:0;z-index:5;padding:3px;font-size:.8em}ngx-extended-pdf-viewer #errorMessageLeft{float:left}ngx-extended-pdf-viewer #errorMessageRight{float:right}ngx-extended-pdf-viewer #errorMoreInfo{background-color:#fff;color:#f66;padding:3px;margin:3px;width:98%}ngx-extended-pdf-viewer .dialogButton{width:auto;margin:3px 4px 2px !important;padding:2px 11px;color:#5a5a5a;background-color:#f9f9f9;border:#f9f9f9 !important}ngx-extended-pdf-viewer dialog{margin:auto;padding:15px;border-spacing:4px;color:#5a5a5a;font-size:12px;line-height:14px;background-color:#f9f9f9;border:1px solid rgba(0,0,0,.5);border-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.3)}ngx-extended-pdf-viewer dialog::backdrop{background-color:rgba(0,0,0,.2);user-select:none}ngx-extended-pdf-viewer dialog>.row{display:table-row}ngx-extended-pdf-viewer dialog>.row>*{display:table-cell}ngx-extended-pdf-viewer dialog .toolbarField{margin:5px 0}ngx-extended-pdf-viewer dialog .separator{display:block;margin:4px 0;height:1px;width:100%;background-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer dialog .buttonRow{text-align:center;vertical-align:middle}ngx-extended-pdf-viewer dialog :link{color:#fff}ngx-extended-pdf-viewer #passwordDialog{text-align:center}ngx-extended-pdf-viewer #passwordDialog .toolbarField{width:200px}ngx-extended-pdf-viewer #documentPropertiesDialog{text-align:left}ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{min-width:100px;text-align:start}ngx-extended-pdf-viewer #documentPropertiesDialog .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .buttonRow{margin-top:10px}html[dir=ltr] ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{text-align:left}html[dir=rtl] ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{text-align:right}.fileInput{background:#fff;color:#f9f9f9;margin-top:5px;visibility:hidden;position:fixed;right:0;top:0}ngx-extended-pdf-viewer #documentPropertiesDialog .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .buttonRow{margin-top:10px}ngx-extended-pdf-viewer .clearBoth{clear:both}ngx-extended-pdf-viewer .grab-to-pan-grab{cursor:url("data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAB/+AAA7/gAAM/8AAAP7AAAG2wAABtkAAAzYAAAM2AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//wAD//4AA//+AAH//yAB///AAf//wAH//4AL//+AD///yB////z///////////////////////////////////////8="),move !important;cursor:-webkit-grab !important;cursor:grab !important}ngx-extended-pdf-viewer .grab-to-pan-grab *:not(input):not(textarea):not(button):not(select):not(:link){cursor:inherit !important}ngx-extended-pdf-viewer .grab-to-pan-grab:active,ngx-extended-pdf-viewer .grab-to-pan-grabbing{cursor:url("data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAAP+AAAD/gAAB/oAAAbYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//8AD///gA///wAP//8AH///kn/////////////////////////////////////////////////////////////////8="),move !important;cursor:-webkit-grabbing !important;cursor:grabbing !important;position:fixed;background:rgba(0,0,0,0);display:block;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:10}@page{margin:0}@media screen and (-webkit-min-device-pixel-ratio: 1.1),screen and (min-resolution: 1.1dppx){ngx-extended-pdf-viewer .toolbarButton::before{transform:scale(0.5);top:-5px}ngx-extended-pdf-viewer .secondaryToolbarButton::before{transform:scale(0.5);top:-4px}}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton::before,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton::before{left:-1px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:-2px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:186px}ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading,ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url("data:image/png;base64,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");background-size:16px 17px}ngx-extended-pdf-viewer .html .unverified-signature-warning,ngx-extended-pdf-viewer .html .modified-background-warning{width:100%;background-color:#ff5353;font-size:12px;text-align:center;padding-top:5px;padding-bottom:5px}.treeItem.selected>a{font-weight:bold}ngx-extended-pdf-viewer .invisible{display:none !important}ngx-extended-pdf-viewer #outerContainer{clip-path:inset(0 0 0 0)}html[dir=ltr] ngx-extended-pdf-viewer .dialogButton,html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:0;margin-left:0}html[dir=ltr] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:4px;margin-left:0}html[dir=rtl] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:0;margin-left:4px}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dialogButton{padding-left:0;padding-right:0}ngx-extended-pdf-viewer .offscreen{position:fixed !important;left:-9999px !important;display:block !important;width:3000px !important}ngx-extended-pdf-viewer .offscreen #sidebarContainer{top:1000px !important}ngx-extended-pdf-viewer .toolbarButton{margin-left:-1px !important;margin-right:-2px !important}ngx-extended-pdf-viewer #numPages{padding-right:0}ngx-extended-pdf-viewer .pdf-viewer-template,ngx-extended-pdf-viewer .pdf-viewer-template *{display:none}ngx-extended-pdf-viewer button:focus,ngx-extended-pdf-viewer a:focus,ngx-extended-pdf-viewer input:focus,ngx-extended-pdf-viewer select:focus{outline:none;border:1px solid blue}ngx-extended-pdf-viewer input[type=checkbox]:focus{outline:1px solid blue}.hidden-by-fullscreen{display:none !important}:root{--scrollbar-color: auto;--scrollbar-bg-color: auto} #printContainer{display:none}@media print{#printContainer{position:static;display:block}body[data-pdfjsprinting],html{overflow-y:visible !important;margin:0;padding:0}body[data-pdfjsprinting]{background:rgba(0,0,0,0) none;height:100%;width:100%}body[data-pdfjsprinting]>*{display:none !important;outline:0;padding:0;margin:0}body[data-pdfjsprinting] #printContainer{display:block !important;height:100%;width:100%}body[data-pdfjsprinting] #printContainer img{max-width:100%;max-height:100%;direction:ltr;display:block !important}body[data-pdfjsprinting] #printContainer>.printedPage{page-break-after:always;page-break-inside:avoid;height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}body[data-pdfjsprinting] #printContainer>.xfaPrintedPage .xfaPage{position:absolute}body[data-pdfjsprinting] #printContainer>.xfaPrintedPage{page-break-after:always;page-break-inside:avoid;width:100%;height:100%;position:relative}body[data-pdfjsprinting] #printContainer>.printedPage canvas,body[data-pdfjsprinting] #printContainer>.printedPage img{max-width:100%;max-height:100%;direction:ltr;display:block}html[data-pdfjsprinting].cdk-global-scrollblock{width:initial;position:initial}}`;
var PdfLightThemeComponent = class {
  constructor(renderer, document2) {
    this.renderer = renderer;
    this.document = document2;
  }
  ngOnInit() {
    this.injectStyle();
  }
  injectStyle() {
    const styles = this.document.createElement("STYLE");
    styles.id = "pdf-theme-css";
    addTrustedHTML(styles, css$1);
    this.renderer.appendChild(this.document.head, styles);
  }
  ngOnDestroy() {
    const styles = this.document.getElementById("pdf-theme-css");
    styles?.parentElement?.removeChild(styles);
  }
};
PdfLightThemeComponent.\u0275fac = function PdfLightThemeComponent_Factory(t) {
  return new (t || PdfLightThemeComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(DOCUMENT));
};
PdfLightThemeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfLightThemeComponent,
  selectors: [["pdf-light-theme"]],
  decls: 0,
  vars: 0,
  template: function PdfLightThemeComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfLightThemeComponent, [{
    type: Component,
    args: [{
      selector: "pdf-light-theme",
      template: ""
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var css = `:root{--annotation-unfocused-field-background: url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>");--input-focus-border-color: Highlight;--input-focus-outline: 1px solid Canvas;--input-unfocused-border-color: transparent;--input-disabled-border-color: transparent;--input-hover-border-color: black;--link-outline: none}@media screen and (forced-colors: active){:root{--input-focus-border-color: CanvasText;--input-unfocused-border-color: ActiveText;--input-disabled-border-color: GrayText;--input-hover-border-color: Highlight;--link-outline: 1.5px solid LinkText;--hcm-highligh-filter: invert(100%)}.annotationLayer .textWidgetAnnotation :is(input,textarea):required,.annotationLayer .choiceWidgetAnnotation select:required,.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) input:required{outline:1.5px solid selectedItem}.annotationLayer .linkAnnotation:hover{backdrop-filter:var(--hcm-highligh-filter)}.annotationLayer .linkAnnotation>a:hover{opacity:0 !important;background:none !important;box-shadow:none}.annotationLayer .popupAnnotation .popup{outline:calc(1.5px*var(--scale-factor)) solid CanvasText !important;background-color:ButtonFace !important;color:ButtonText !important}.annotationLayer .highlightArea:hover::after{position:absolute;top:0;left:0;width:100%;height:100%;backdrop-filter:var(--hcm-highligh-filter);content:"";pointer-events:none}.annotationLayer .popupAnnotation.focused .popup{outline:calc(3px*var(--scale-factor)) solid Highlight !important}}.annotationLayer{position:absolute;top:0;left:0;pointer-events:none;transform-origin:0 0;z-index:3}.annotationLayer[data-main-rotation="90"] .norotate{transform:rotate(270deg) translateX(-100%)}.annotationLayer[data-main-rotation="180"] .norotate{transform:rotate(180deg) translate(-100%, -100%)}.annotationLayer[data-main-rotation="270"] .norotate{transform:rotate(90deg) translateY(-100%)}.annotationLayer canvas{position:absolute;width:100%;height:100%;pointer-events:none}.annotationLayer section{position:absolute;text-align:initial;pointer-events:auto;box-sizing:border-box;transform-origin:0 0}.annotationLayer .linkAnnotation{outline:var(--link-outline)}.annotationLayer :is(.linkAnnotation,.buttonWidgetAnnotation.pushButton)>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}.annotationLayer :is(.linkAnnotation,.buttonWidgetAnnotation.pushButton):not(.hasBorder)>a:hover{opacity:.2;background-color:#ff0;box-shadow:0 2px 10px #ff0}.annotationLayer .linkAnnotation.hasBorder:hover{background-color:rgba(255,255,0,.2)}.annotationLayer .hasBorder{background-size:100% 100%}.annotationLayer .textAnnotation img{position:absolute;cursor:pointer;width:100%;height:100%;top:0;left:0}.annotationLayer .textWidgetAnnotation :is(input,textarea),.annotationLayer .choiceWidgetAnnotation select,.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) input{background-image:var(--annotation-unfocused-field-background);border:2px solid var(--input-unfocused-border-color);box-sizing:border-box;font:calc(9px*var(--scale-factor)) sans-serif;height:100%;margin:0;vertical-align:top;width:100%}.annotationLayer .textWidgetAnnotation :is(input,textarea):required,.annotationLayer .choiceWidgetAnnotation select:required,.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) input:required{outline:1.5px solid red}.annotationLayer .choiceWidgetAnnotation select option{padding:0}.annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}.annotationLayer .textWidgetAnnotation textarea{resize:none}.annotationLayer .textWidgetAnnotation :is(input,textarea)[disabled],.annotationLayer .choiceWidgetAnnotation select[disabled],.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) input[disabled]{background:none;border:2px solid var(--input-disabled-border-color);cursor:not-allowed}.annotationLayer .textWidgetAnnotation :is(input,textarea):hover,.annotationLayer .choiceWidgetAnnotation select:hover,.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) input:hover{border:2px solid var(--input-hover-border-color)}.annotationLayer .textWidgetAnnotation :is(input,textarea):hover,.annotationLayer .choiceWidgetAnnotation select:hover,.annotationLayer .buttonWidgetAnnotation.checkBox input:hover{border-radius:2px}.annotationLayer .textWidgetAnnotation :is(input,textarea):focus,.annotationLayer .choiceWidgetAnnotation select:focus{background:none;border:2px solid var(--input-focus-border-color);border-radius:2px;outline:var(--input-focus-outline)}.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) :focus{background-image:none;background-color:rgba(0,0,0,0)}.annotationLayer .buttonWidgetAnnotation.checkBox :focus{border:2px solid var(--input-focus-border-color);border-radius:2px;outline:var(--input-focus-outline)}.annotationLayer .buttonWidgetAnnotation.radioButton :focus{border:2px solid var(--input-focus-border-color);outline:var(--input-focus-outline)}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after,.annotationLayer .buttonWidgetAnnotation.radioButton input:checked::before{background-color:CanvasText;content:"";display:block;position:absolute}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after{height:80%;left:45%;width:1px}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before{transform:rotate(45deg)}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after{transform:rotate(-45deg)}.annotationLayer .buttonWidgetAnnotation.radioButton input:checked::before{border-radius:50%;height:50%;left:30%;top:20%;width:50%}.annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}.annotationLayer .textWidgetAnnotation input.comb:focus{width:103%}.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) input{appearance:none}.annotationLayer .fileAttachmentAnnotation .popupTriggerArea{height:100%;width:100%}.annotationLayer .popupAnnotation{position:absolute;font-size:calc(9px*var(--scale-factor));pointer-events:none;width:max-content;max-width:45%;height:auto}.annotationLayer .popup{background-color:#ff9;box-shadow:0 calc(2px*var(--scale-factor)) calc(5px*var(--scale-factor)) #888;border-radius:calc(2px*var(--scale-factor));outline:1.5px solid #ffff4a;padding:calc(6px*var(--scale-factor));cursor:pointer;font-family:message-box,sans-serif;white-space:normal;word-wrap:break-word;pointer-events:auto}.annotationLayer .popupAnnotation.focused .popup{outline-width:3px}.annotationLayer .popup *{font-size:calc(9px*var(--scale-factor))}.annotationLayer .popup>.header{display:inline-block}.annotationLayer .popup>.header h1{display:inline}.annotationLayer .popup>.header .popupDate{display:inline-block;margin-left:calc(5px*var(--scale-factor));width:fit-content}.annotationLayer .popupContent{border-top:1px solid #333;margin-top:calc(2px*var(--scale-factor));padding-top:calc(2px*var(--scale-factor))}.annotationLayer .richText>*{white-space:pre-wrap;font-size:calc(9px*var(--scale-factor))}.annotationLayer .highlightAnnotation,.annotationLayer .underlineAnnotation,.annotationLayer .squigglyAnnotation,.annotationLayer .strikeoutAnnotation,.annotationLayer .freeTextAnnotation,.annotationLayer .lineAnnotation svg line,.annotationLayer .squareAnnotation svg rect,.annotationLayer .circleAnnotation svg ellipse,.annotationLayer .polylineAnnotation svg polyline,.annotationLayer .polygonAnnotation svg polygon,.annotationLayer .caretAnnotation,.annotationLayer .inkAnnotation svg polyline,.annotationLayer .stampAnnotation,.annotationLayer .fileAttachmentAnnotation{cursor:pointer}.annotationLayer section svg{position:absolute;width:100%;height:100%;top:0;left:0}.annotationLayer .annotationTextContent{position:absolute;width:100%;height:100%;opacity:0;color:rgba(0,0,0,0);user-select:none;pointer-events:none}.annotationLayer .annotationTextContent span{width:100%;display:inline-block}.annotationLayer svg.quadrilateralsContainer{contain:strict;width:0;height:0;position:absolute;top:0;left:0;z-index:-1} :root{--xfa-unfocused-field-background: url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>");--xfa-focus-outline: auto}@media screen and (forced-colors: active){:root{--xfa-focus-outline: 2px solid CanvasText}.xfaLayer *:required{outline:1.5px solid selectedItem}}.xfaLayer .highlight{margin:-1px;padding:1px;background-color:#efcbed;border-radius:4px}.xfaLayer .highlight.appended{position:initial}.xfaLayer .highlight.begin{border-radius:4px 0 0 4px}.xfaLayer .highlight.end{border-radius:0 4px 4px 0}.xfaLayer .highlight.middle{border-radius:0}.xfaLayer .highlight.selected{background-color:#cbdfcb}.xfaPage{overflow:hidden;position:relative}.xfaContentarea{position:absolute}.xfaPrintOnly{display:none}.xfaLayer{background-color:rgba(0,0,0,0);position:absolute;text-align:initial;top:0;left:0;transform-origin:0 0;line-height:1.2}.xfaLayer *{color:inherit;font:inherit;font-style:inherit;font-weight:inherit;font-kerning:inherit;letter-spacing:-0.01px;text-align:inherit;text-decoration:inherit;box-sizing:border-box;background-color:rgba(0,0,0,0);padding:0;margin:0;pointer-events:auto;line-height:inherit}.xfaLayer *:required{outline:1.5px solid red}.xfaLayer div,.xfaLayer svg,.xfaLayer svg *{pointer-events:none}.xfaLayer a{color:blue}.xfaRich li{margin-left:3em}.xfaFont{color:#000;font-weight:normal;font-kerning:none;font-size:10px;font-style:normal;letter-spacing:0;text-decoration:none;vertical-align:0}.xfaCaption{overflow:hidden;flex:0 0 auto}.xfaCaptionForCheckButton{overflow:hidden;flex:1 1 auto}.xfaLabel{height:100%;width:100%}.xfaLeft{display:flex;flex-direction:row;align-items:center}.xfaRight{display:flex;flex-direction:row-reverse;align-items:center}:is(.xfaLeft,.xfaRight)>:is(.xfaCaption,.xfaCaptionForCheckButton){max-height:100%}.xfaTop{display:flex;flex-direction:column;align-items:flex-start}.xfaBottom{display:flex;flex-direction:column-reverse;align-items:flex-start}:is(.xfaTop,.xfaBottom)>:is(.xfaCaption,.xfaCaptionForCheckButton){width:100%}.xfaBorder{background-color:rgba(0,0,0,0);position:absolute;pointer-events:none}.xfaWrapped{width:100%;height:100%}:is(.xfaTextfield,.xfaSelect):focus{background-image:none;background-color:rgba(0,0,0,0);outline:var(--xfa-focus-outline);outline-offset:-1px}:is(.xfaCheckbox,.xfaRadio):focus{outline:var(--xfa-focus-outline)}.xfaTextfield,.xfaSelect{height:100%;width:100%;flex:1 1 auto;border:none;resize:none;background-image:var(--xfa-unfocused-field-background)}.xfaSelect{padding-inline:2px}:is(.xfaTop,.xfaBottom)>:is(.xfaTextfield,.xfaSelect){flex:0 1 auto}.xfaButton{cursor:pointer;width:100%;height:100%;border:none;text-align:center}.xfaLink{width:100%;height:100%;position:absolute;top:0;left:0}.xfaCheckbox,.xfaRadio{width:100%;height:100%;flex:0 0 auto;border:none}.xfaRich{white-space:pre-wrap;width:100%;height:100%}.xfaImage{object-position:left top;object-fit:contain;width:100%;height:100%}.xfaLrTb,.xfaRlTb,.xfaTb{display:flex;flex-direction:column;align-items:stretch}.xfaLr{display:flex;flex-direction:row;align-items:stretch}.xfaRl{display:flex;flex-direction:row-reverse;align-items:stretch}.xfaTb>div{justify-content:left}.xfaPosition{position:relative}.xfaArea{position:relative}.xfaValignMiddle{display:flex;align-items:center}.xfaTable{display:flex;flex-direction:column;align-items:stretch}.xfaTable .xfaRow{display:flex;flex-direction:row;align-items:stretch}.xfaTable .xfaRlRow{display:flex;flex-direction:row-reverse;align-items:stretch;flex:1}.xfaTable .xfaRlRow>div{flex:1}:is(.xfaNonInteractive,.xfaDisabled,.xfaReadOnly) :is(input,textarea){background:initial}@media print{.xfaTextfield,.xfaSelect{background:rgba(0,0,0,0)}.xfaSelect{appearance:none;text-indent:1px;text-overflow:""}} :root{--outline-width: 2px;--outline-color: blue;--focus-outline: solid var(--outline-width) var(--outline-color);--hover-outline: dashed var(--outline-width) var(--outline-color);--freetext-line-height: 1.35;--freetext-padding: 2px;--resizer-size: 8px;--resizer-shift: calc(0px - var(--outline-width) - var(--resizer-size) / 2 - var(--outline-width) / 2);--resizer-color: white;--editorFreeText-editing-cursor: text;--editorInk-editing-cursor: url("data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.49913 12.6251C2.61913 12.6251 2.73913 12.6051 2.85713 12.5661L6.29013 11.4201L13.2891 4.4221C14.0191 3.6911 14.0191 2.5011 13.2891 1.7701L12.2291 0.710098C11.4971 -0.0199023 10.3091 -0.0199023 9.57713 0.710098L2.57813 7.7091L1.43313 11.1451C1.29813 11.5511 1.40213 11.9931 1.70513 12.2951C1.92113 12.5101 2.20613 12.6251 2.49913 12.6251ZM10.4611 1.5951C10.7031 1.3511 11.1021 1.3511 11.3441 1.5951L12.4051 2.6561C12.6491 2.8991 12.6491 3.2961 12.4051 3.5391L11.3401 4.6051L9.39513 2.6601L10.4611 1.5951ZM3.67013 8.3851L8.51013 3.5451L10.4541 5.4891L5.61413 10.3301L2.69713 11.3031L3.67013 8.3851Z' fill='black'/><path d='M14.8169 13.314L13.0229 13.862C12.3309 14.073 11.5909 14.111 10.8859 13.968L8.80391 13.551C7.58491 13.308 6.29791 13.48 5.18491 14.036C3.95291 14.652 2.46691 14.412 1.49191 13.436L1.44091 13.385L0.60791 14.321C1.46291 15.175 2.59991 15.625 3.75291 15.625C4.42891 15.625 5.10991 15.471 5.74391 15.153C6.60891 14.721 7.60891 14.586 8.55891 14.777L10.6409 15.194C11.5509 15.376 12.5009 15.327 13.3879 15.056L15.1819 14.508L14.8169 13.314Z' fill='black'/></svg>") 0 16, pointer;--editorFreeText-editing-cursor: url("data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 2.75H12.5V2.25V1V0.5H12H10.358C9.91165 0.5 9.47731 0.625661 9.09989 0.860442L9.09886 0.861087L8 1.54837L6.89997 0.860979L6.89911 0.860443C6.5218 0.625734 6.08748 0.5 5.642 0.5H4H3.5V1V2.25V2.75H4H5.642C5.66478 2.75 5.6885 2.75641 5.71008 2.76968C5.71023 2.76977 5.71038 2.76986 5.71053 2.76995L6.817 3.461C6.81704 3.46103 6.81709 3.46105 6.81713 3.46108C6.81713 3.46108 6.81713 3.46108 6.81714 3.46109C6.8552 3.48494 6.876 3.52285 6.876 3.567V8V12.433C6.876 12.4771 6.85523 12.515 6.81722 12.5389C6.81715 12.5389 6.81707 12.539 6.817 12.539L5.70953 13.23C5.70941 13.2301 5.70929 13.2302 5.70917 13.2303C5.68723 13.2438 5.6644 13.25 5.641 13.25H4H3.5V13.75V15V15.5H4H5.642C6.08835 15.5 6.52269 15.3743 6.90011 15.1396L6.90086 15.1391L8 14.4526L9.10003 15.14L9.10089 15.1406C9.47831 15.3753 9.91265 15.501 10.359 15.501H12H12.5V15.001V13.751V13.251H12H10.358C10.3352 13.251 10.3115 13.2446 10.2899 13.2313C10.2897 13.2312 10.2896 13.2311 10.2895 13.231L9.183 12.54C9.18298 12.54 9.18295 12.54 9.18293 12.54C9.18291 12.5399 9.18288 12.5399 9.18286 12.5399C9.14615 12.5169 9.125 12.4797 9.125 12.434V8V3.567C9.125 3.52266 9.14603 3.48441 9.18364 3.4606C9.18377 3.46052 9.1839 3.46043 9.18404 3.46035L10.2895 2.76995C10.2896 2.76985 10.2898 2.76975 10.2899 2.76966C10.3119 2.75619 10.3346 2.75 10.358 2.75H12Z' fill='black' stroke='white'/></svg>") 0 16, text}@media screen and (forced-colors: active){:root{--outline-width: 3px;--outline-color: ButtonText;--resizer-size: 12px;--resizer-color: ButtonFace}}[data-editor-rotation="90"]{transform:rotate(90deg)}[data-editor-rotation="180"]{transform:rotate(180deg)}[data-editor-rotation="270"]{transform:rotate(270deg)}.annotationEditorLayer{background:rgba(0,0,0,0);position:absolute;inset:0;font-size:calc(100px*var(--scale-factor));transform-origin:0 0;cursor:auto;z-index:4}.annotationEditorLayer.waiting{content:"";cursor:wait;position:absolute;inset:0;width:100%;height:100%}.annotationEditorLayer.freeTextEditing{cursor:var(--editorFreeText-editing-cursor)}.annotationEditorLayer.inkEditing{cursor:var(--editorInk-editing-cursor)}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor).draggable.selectedEditor{cursor:move}.annotationEditorLayer .selectedEditor{outline:var(--focus-outline)}.ngx-extended-pdf-viewer-prevent-touch-move #viewerContainer{touch-action:none}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor){position:absolute;background:rgba(0,0,0,0);border-radius:3px;z-index:1;transform-origin:0 0;cursor:auto;max-width:100%;max-height:100%}.annotationEditorLayer .freeTextEditor{padding:calc(var(--freetext-padding)*var(--scale-factor));width:auto;height:auto;touch-action:none}.annotationEditorLayer .freeTextEditor .internal{background:rgba(0,0,0,0);border:none;inset:0;overflow:visible;white-space:nowrap;font:10px sans-serif;line-height:var(--freetext-line-height);user-select:none}.annotationEditorLayer .freeTextEditor .overlay{position:absolute;display:none;background:rgba(0,0,0,0);inset:0;width:100%;height:100%}.annotationEditorLayer .freeTextEditor .overlay.enabled{display:block}.annotationEditorLayer .freeTextEditor .internal:empty::before{content:attr(default-content);color:gray}.annotationEditorLayer .freeTextEditor .internal:focus{outline:none;user-select:auto}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor):hover:not(.selectedEditor){outline:var(--hover-outline)}.annotationEditorLayer .inkEditor{width:100%;height:100%}.annotationEditorLayer .inkEditor.editing{cursor:inherit}.annotationEditorLayer .inkEditor .inkEditorCanvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none}.annotationEditorLayer .stampEditor{width:auto;height:auto}.annotationEditorLayer .stampEditor canvas{width:100%;height:100%}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers{width:100%;height:100%;position:absolute;inset:0}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers.hidden{display:none}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer{width:var(--resizer-size);height:var(--resizer-size);border-radius:50%;background:var(--resizer-color);border:var(--focus-outline);position:absolute}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.topLeft{top:var(--resizer-shift);left:var(--resizer-shift)}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.topMiddle{top:var(--resizer-shift);left:calc(50% + var(--resizer-shift))}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.topRight{top:var(--resizer-shift);right:var(--resizer-shift)}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.middleRight{top:calc(50% + var(--resizer-shift));right:var(--resizer-shift)}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.bottomRight{bottom:var(--resizer-shift);right:var(--resizer-shift)}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.bottomMiddle{bottom:var(--resizer-shift);left:calc(50% + var(--resizer-shift))}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.bottomLeft{bottom:var(--resizer-shift);left:var(--resizer-shift)}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.middleLeft{top:calc(50% + var(--resizer-shift));left:var(--resizer-shift)}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.bottomRight,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.bottomRight,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.bottomRight,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.bottomRight{cursor:nwse-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.bottomMiddle,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.bottomMiddle,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.bottomMiddle,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.bottomMiddle{cursor:ns-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.bottomLeft,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.bottomLeft,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.bottomLeft,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.bottomLeft{cursor:nesw-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.middleLeft,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.middleLeft,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.middleLeft,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.middleLeft{cursor:ew-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.bottomRight,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.bottomRight,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.bottomRight,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.bottomRight{cursor:nesw-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.bottomMiddle,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.bottomMiddle,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.bottomMiddle,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.bottomMiddle{cursor:ew-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.bottomLeft,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.bottomLeft,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.bottomLeft,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.bottomLeft{cursor:nwse-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.middleLeft,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.middleLeft,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.middleLeft,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.middleLeft{cursor:ns-resize}`;
var PdfAcroformDefaultThemeComponent = class {
  constructor(renderer, document2) {
    this.renderer = renderer;
    this.document = document2;
  }
  ngOnInit() {
    this.injectStyle();
  }
  injectStyle() {
    const styles = this.document.createElement("STYLE");
    styles.id = "pdf-acroform-css";
    addTrustedHTML(styles, css);
    this.renderer.appendChild(this.document.head, styles);
  }
  ngOnDestroy() {
    const styles = this.document.getElementById("pdf-acroform-css");
    styles?.parentElement?.removeChild(styles);
  }
};
PdfAcroformDefaultThemeComponent.\u0275fac = function PdfAcroformDefaultThemeComponent_Factory(t) {
  return new (t || PdfAcroformDefaultThemeComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(DOCUMENT));
};
PdfAcroformDefaultThemeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfAcroformDefaultThemeComponent,
  selectors: [["pdf-acroform-default-theme"]],
  decls: 0,
  vars: 0,
  template: function PdfAcroformDefaultThemeComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfAcroformDefaultThemeComponent, [{
    type: Component,
    args: [{
      selector: "pdf-acroform-default-theme",
      template: "",
      styles: []
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var PdfBreakpoints = class {
};
PdfBreakpoints.xs = 490;
PdfBreakpoints.sm = 560;
PdfBreakpoints.md = 610;
PdfBreakpoints.lg = 660;
PdfBreakpoints.xl = 780;
PdfBreakpoints.xxl = 900;
var ResponsiveCSSClassPipe = class {
  transform(visible, defaultClass = "always-visible") {
    switch (visible) {
      case void 0:
        return defaultClass;
      case false:
        return "invisible";
      case true:
        return defaultClass;
      case "always-visible":
        return "always-visible";
      case "always-in-secondary-menu":
        return "always-in-secondary-menu";
      case "xxs":
        return "hiddenXXSView";
      case "xs":
        return "hiddenTinyView";
      case "sm":
        return "hiddenSmallView";
      case "md":
        return "hiddenMediumView";
      case "lg":
        return "hiddenLargeView";
      case "xl":
        return "hiddenXLView";
      case "xxl":
        return "hiddenXXLView";
    }
  }
};
ResponsiveCSSClassPipe.\u0275fac = function ResponsiveCSSClassPipe_Factory(t) {
  return new (t || ResponsiveCSSClassPipe)();
};
ResponsiveCSSClassPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "responsiveCSSClass",
  type: ResponsiveCSSClassPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResponsiveCSSClassPipe, [{
    type: Pipe,
    args: [{
      name: "responsiveCSSClass"
    }]
  }], null, null);
})();
var NegativeResponsiveCSSClassPipe = class {
  transform(visible) {
    switch (visible) {
      case void 0:
        return "always-visible";
      case "always-visible":
      case true:
        return "invisible";
      case "invisible":
      case false:
        return "invisible";
      case "always-in-secondary-menu":
        return "always-in-secondary-menu";
      case "hiddenXXSView":
      case "xxs":
        return "visibleXXSView";
      case "hiddenTinyView":
      case "xs":
        return "visibleTinyView";
      case "sm":
      case "hiddenSmallView":
        return "visibleSmallView";
      case "md":
      case "hiddenMediumView":
        return "visibleMediumView";
      case "lg":
      case "hiddenLargeView":
        return "visibleLargeView";
      case "xl":
      case "hiddenXLView":
        return "visibleXLView";
      case "xxl":
      case "hiddenXXLView":
        return "visibleXXLView";
    }
  }
};
NegativeResponsiveCSSClassPipe.\u0275fac = function NegativeResponsiveCSSClassPipe_Factory(t) {
  return new (t || NegativeResponsiveCSSClassPipe)();
};
NegativeResponsiveCSSClassPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "invertForSecondaryToolbar",
  type: NegativeResponsiveCSSClassPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NegativeResponsiveCSSClassPipe, [{
    type: Pipe,
    args: [{
      name: "invertForSecondaryToolbar"
    }]
  }], null, null);
})();
var DynamicCssComponent = class {
  constructor(renderer, document2, platformId) {
    this.renderer = renderer;
    this.document = document2;
    this.platformId = platformId;
    this.zoom = 1;
    this.width = 3.14159265359;
    this.xxs = 455;
    this.xs = 490;
    this.sm = 560;
    this.md = 610;
    this.lg = 660;
    this.xl = 740;
    this.xxl = 830;
    if (isPlatformBrowser(this.platformId)) {
      this.width = document2.body.clientWidth;
    }
  }
  get style() {
    return `
#toolbarContainer .always-in-secondary-menu {
  display: none;
}

#secondaryToolbar .always-in-secondary-menu {
  display: inline-flex;
}

#outerContainer #mainContainer .visibleXXSView,
#outerContainer #mainContainer .visibleTinyView,
#outerContainer #mainContainer .visibleSmallView,
#outerContainer #mainContainer .visibleMediumView,
#outerContainer #mainContainer .visibleLargeView,
#outerContainer #mainContainer .visibleXLView,
#outerContainer #mainContainer .visibleXXLView {
  display: none;
}

@media all and (max-width: ${this.xl}px) {
  #toolbarViewerMiddle {
    display: table;
    margin: auto;
    left: auto;
    position: inherit;
    transform: none;
  }
}

@media all and (max-width: ${this.xxl}) {
  #sidebarContent {
    background-color: rgba(0, 0, 0, 0.7);
  }

  html[dir='ltr'] #outerContainer.sidebarOpen #viewerContainer {
    left: 0px !important;
  }
  html[dir='rtl'] #outerContainer.sidebarOpen #viewerContainer {
    right: 0px !important;
  }

  #outerContainer .hiddenLargeView,
  #outerContainer .hiddenMediumView {
    display: inherit;
  }
}

@media all and (max-width: ${this.lg}px) {
  .toolbarButtonSpacer {
    width: 15px;
  }

  #outerContainer .hiddenLargeView {
    display: none;
  }
  #outerContainer  #mainContainer .visibleLargeView {
    display: inherit;
  }
}

@media all and (max-width: ${this.md}px) {
  .toolbarButtonSpacer {
    display: none;
  }
  #outerContainer .hiddenMediumView {
    display: none;
  }
  #outerContainer  #mainContainer .visibleMediumView {
    display: inherit;
  }
}

@media all and (max-width: ${this.sm}px) {
  #outerContainer .hiddenSmallView,
  #outerContainer .hiddenSmallView * {
    display: none;
  }
  #outerContainer  #mainContainer .visibleSmallView {
    display: inherit;
  }
  .toolbarButtonSpacer {
    width: 0;
  }
  html[dir='ltr'] .findbar {
    left: 38px;
  }
  html[dir='rtl'] .findbar {
    right: 38px;
  }
}

@media all and (max-width: ${this.sm}px) {
  #scaleSelectContainer {
    display: none;
  }
}

#outerContainer .visibleXLView,
#outerContainer .visibleXXLView,
#outerContainer .visibleTinyView {
  display: none;
}

#outerContainer .hiddenXLView,
#outerContainer .hiddenXXLView {
  display: unset;
}

@media all and (max-width: ${this.xl}px) {
  #outerContainer .hiddenXLView {
    display: none;
  }
  #outerContainer .visibleXLView {
    display: inherit;
  }

  #toolbarViewerMiddle {
    -webkit-transform: translateX(-36%);
    transform: translateX(-36%);
    display: unset;
    margin: unset;
    left: 50%;
    position: absolute;
  }
}

@media all and (max-width: ${this.xxl}px) {
  #outerContainer .hiddenXXLView {
    display: none;
  }
  #outerContainer  #mainContainer .visibleXXLView {
    display: inherit;
  }
}

@media all and (max-width: ${this.md}px) {
  #toolbarViewerMiddle {
    -webkit-transform: translateX(-26%);
    transform: translateX(-26%);
  }
}

@media all and (max-width: ${this.xs}px) {
  #outerContainer .hiddenTinyView,
  #outerContainer .hiddenTinyView * {
    display: none;
  }
  #outerContainer  #mainContainer .visibleTinyView {
    display: inherit;
  }
}

@media all and (max-width: ${this.xxs}px) {
  #outerContainer .hiddenXXSView,
  #outerContainer .hiddenXXSView * {
    display: none;
  }
  #outerContainer #mainContainer .visibleXXSView {
    display: inherit;
  }
}
  `;
  }
  ngOnInit() {
    this.injectStyle();
  }
  ngOnChanges() {
    const fullWith = this.document.body.clientWidth;
    const partialViewScale = fullWith / this.width;
    const scaleFactor = partialViewScale * (this.zoom ? this.zoom : 1);
    this.xs = scaleFactor * PdfBreakpoints.xs;
    this.sm = scaleFactor * PdfBreakpoints.sm;
    this.md = scaleFactor * PdfBreakpoints.md;
    this.lg = scaleFactor * PdfBreakpoints.lg;
    this.xl = scaleFactor * PdfBreakpoints.xl;
    this.xxl = scaleFactor * PdfBreakpoints.xxl;
    let styles = this.document.getElementById("pdf-dynamic-css");
    if (!styles) {
      styles = this.document.createElement("STYLE");
      styles.id = "pdf-dynamic-css";
      addTrustedHTML(styles, this.style);
      this.renderer.appendChild(this.document.head, styles);
    }
    addTrustedHTML(styles, this.style);
  }
  injectStyle() {
    if (this.width === 3.14159265359) {
      setTimeout(() => this.ngOnChanges(), 1);
    }
  }
  ngOnDestroy() {
    const styles = this.document.getElementById("pdf-dynamic-css");
    if (styles?.parentElement) {
      styles.parentElement.removeChild(styles);
    }
  }
};
DynamicCssComponent.\u0275fac = function DynamicCssComponent_Factory(t) {
  return new (t || DynamicCssComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID));
};
DynamicCssComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: DynamicCssComponent,
  selectors: [["pdf-dynamic-css"]],
  inputs: {
    zoom: "zoom",
    width: "width"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 0,
  vars: 0,
  template: function DynamicCssComponent_Template(rf, ctx) {
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicCssComponent, [{
    type: Component,
    args: [{
      selector: "pdf-dynamic-css",
      template: "",
      styles: [""]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    zoom: [{
      type: Input
    }],
    width: [{
      type: Input
    }]
  });
})();
var PdfSidebarToolbarComponent = class {
  constructor() {
    this.mobileFriendlyZoomScale = 1;
  }
  get height() {
    const h = 32 * this.mobileFriendlyZoomScale;
    return `${h}px`;
  }
};
PdfSidebarToolbarComponent.\u0275fac = function PdfSidebarToolbarComponent_Factory(t) {
  return new (t || PdfSidebarToolbarComponent)();
};
PdfSidebarToolbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfSidebarToolbarComponent,
  selectors: [["pdf-sidebar-toolbar"]],
  inputs: {
    mobileFriendlyZoomScale: "mobileFriendlyZoomScale"
  },
  decls: 31,
  vars: 12,
  consts: [["id", "toolbarSidebar"], ["id", "toolbarSidebarLeft"], ["aria-label", "Thumbnails", "type", "button", "id", "viewThumbnail", "title", "Show Thumbnails", "data-l10n-id", "thumbs", 1, "toolbarButton", "toggled"], ["data-l10n-id", "thumbs_label"], ["role", "img", "aria-label", "Thumbnails", "viewBox", "0 0 24 24", 2, "width", "20px", "height", "20px"], ["fill", "currentColor", "d", "M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"], ["type", "button", "id", "viewOutline", "title", "Show Document Outline (double-click to expand/collapse all items)", "data-l10n-id", "document_outline", "hidden", "true", "aria-label", "Show Document Outline (double-click to expand/collapse all items)", 1, "toolbarButton"], ["data-l10n-id", "document_outline_label"], ["role", "img", "aria-label", "Show Document Outline (double-click to expand/collapse all items)", "viewBox", "0 0 24 24", 2, "width", "20px", "height", "20px"], ["fill", "currentColor", "d", "M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z"], ["type", "button", "id", "viewAttachments", "title", "Show Attachments", "data-l10n-id", "attachments", "hidden", "true", 1, "toolbarButton"], ["data-l10n-id", "attachments_label"], ["viewBox", "0 0 24 24", 2, "width", "20px", "height", "20px"], ["fill", "currentColor", "d", "M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z"], ["id", "viewLayers", "type", "button", "title", "Show Layers (double-click to reset all layers to the default state)", "data-l10n-id", "layers", "hidden", "true", "aria-label", "Show Layers (double-click to reset all layers to the default state)", 1, "toolbarButton"], ["data-l10n-id", "layers_label"], ["role", "img", "aria-label", "Show Layers (double-click to reset all layers to the default state)", "xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 4.233 4.233", 2, "width", "20px", "height", "20px", "margin-left", "1px"], ["d", "M.15 2.992c-.198.1-.2.266-.002.365l1.604.802a.93.93 0 00.729-.001l1.602-.801c.198-.1.197-.264 0-.364l-.695-.348c-1.306.595-2.542 0-2.542 0m-.264.53l.658-.329c.6.252 1.238.244 1.754 0l.659.329-1.536.768zM.15 1.935c-.198.1-.198.265 0 .364l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363l-.694-.35c-1.14.56-2.546.001-2.546.001m-.264.53l.664-.332c.52.266 1.261.235 1.75.002l.659.33-1.537.768zM.15.877c-.198.099-.198.264 0 .363l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363L2.481.075a.926.926 0 00-.727 0zm.43.182L2.117.29l1.538.769-1.538.768z"], ["id", "toolbarSidebarRight"], ["id", "outlineOptionsContainer", 1, "hidden"], [1, "verticalToolbarSeparator"], ["type", "button", "id", "currentOutlineItem", "disabled", "disabled", "title", "Find Current Outline Item", "tabindex", "6", "data-l10n-id", "current_outline_item", "aria-label", "Find Current Outline Item", 1, "toolbarButton"], ["data-l10n-id", "current_outline_item_label"], ["role", "img", "aria-label", "Find Current Outline Item", "xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", 2, "width", "20px", "height", "20px"], ["d", "m14 9h-6c-1.3 0-1.3 2 0 2h6c1.3 0 1.3-2 0-2zm-5.2-8h-3.8c-1.3 0-1.3 2 0 2h1.7zm-6.8 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.3 1.7-0.7 0-0.5-0.4-1-1-1zm3 8c-1 0-1.3 1-0.7 1.7 0.6 0.6 1.7 0.2 1.7-0.7 0-0.5-0.4-1-1-1zm0.3-4h-0.3c-1.4 0-1.4 2 0 2h2.3zm-3.3 0c-0.9 0-1.4 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.7 0-0.6-0.5-1-1-1zm12 8h-9c-1.3 0-1.3 2 0 2h9c1.3 0 1.3-2 0-2zm-12 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.712 0-0.5-0.4-1-1-1z"], ["d", "m7.37 4.838 3.93-3.911v2.138h3.629v3.546h-3.629v2.138l-3.93-3.911"]],
  template: function PdfSidebarToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "span", 3);
      \u0275\u0275text(4, "Thumbnails");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 4);
      \u0275\u0275element(6, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "button", 6)(8, "span", 7);
      \u0275\u0275text(9, "Document Outline");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 8);
      \u0275\u0275element(11, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "button", 10)(13, "span", 11);
      \u0275\u0275text(14, "Attachments");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 12);
      \u0275\u0275element(16, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "button", 14)(18, "span", 15);
      \u0275\u0275text(19, "Layers");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 16);
      \u0275\u0275element(21, "path", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "div", 18)(23, "div", 19);
      \u0275\u0275element(24, "div", 20);
      \u0275\u0275elementStart(25, "button", 21)(26, "span", 22);
      \u0275\u0275text(27, "Current Outline Item");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 23);
      \u0275\u0275element(29, "path", 24)(30, "path", 25);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("height", ctx.height);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("zoom", ctx.mobileFriendlyZoomScale);
      \u0275\u0275advance(5);
      \u0275\u0275styleProp("zoom", ctx.mobileFriendlyZoomScale);
      \u0275\u0275advance(5);
      \u0275\u0275styleProp("zoom", ctx.mobileFriendlyZoomScale);
      \u0275\u0275advance(5);
      \u0275\u0275styleProp("zoom", ctx.mobileFriendlyZoomScale);
      \u0275\u0275advance(8);
      \u0275\u0275styleProp("zoom", ctx.mobileFriendlyZoomScale);
    }
  },
  styles: ["button.toolbarButton[_ngcontent-%COMP%]{margin-right:4px!important;width:22px;height:22px}div#toolbarSidebar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-child{margin-left:4px!important}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfSidebarToolbarComponent, [{
    type: Component,
    args: [{
      selector: "pdf-sidebar-toolbar",
      template: '<div id="toolbarSidebar" [style.height]="height">\n  <div id="toolbarSidebarLeft">\n    <button\n      aria-label="Thumbnails"\n      type="button"\n      id="viewThumbnail"\n      class="toolbarButton toggled"\n      title="Show Thumbnails"\n      data-l10n-id="thumbs"\n      [style.zoom]="mobileFriendlyZoomScale"\n    >\n      <span data-l10n-id="thumbs_label">Thumbnails</span>\n      <svg role="img" aria-label="Thumbnails" style="width: 20px; height: 20px" viewBox="0 0 24 24">\n        <path\n          fill="currentColor"\n          d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"\n        />\n      </svg>\n    </button>\n\n    <button\n      type="button"\n      id="viewOutline"\n      class="toolbarButton"\n      title="Show Document Outline (double-click to expand/collapse all items)"\n      data-l10n-id="document_outline"\n      hidden="true"\n      [style.zoom]="mobileFriendlyZoomScale"\n      aria-label="Show Document Outline (double-click to expand/collapse all items)"\n    >\n      <span data-l10n-id="document_outline_label">Document Outline</span>\n      <svg role="img" aria-label="Show Document Outline (double-click to expand/collapse all items)" style="width: 20px; height: 20px" viewBox="0 0 24 24">\n        <path fill="currentColor" d="M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z" />\n      </svg>\n    </button>\n\n    <button\n      type="button"\n      id="viewAttachments"\n      class="toolbarButton"\n      title="Show Attachments"\n      data-l10n-id="attachments"\n      hidden="true"\n      [style.zoom]="mobileFriendlyZoomScale"\n    >\n      <span data-l10n-id="attachments_label">Attachments</span>\n      <svg style="width: 20px; height: 20px" viewBox="0 0 24 24">\n        <path\n          fill="currentColor"\n          d="M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z"\n        />\n      </svg>\n    </button>\n    <button\n      id="viewLayers"\n      class="toolbarButton"\n      type="button"\n      title="Show Layers (double-click to reset all layers to the default state)"\n      data-l10n-id="layers"\n      hidden="true"\n      [style.zoom]="mobileFriendlyZoomScale"\n      aria-label="Show Layers (double-click to reset all layers to the default state)"\n    >\n      <span data-l10n-id="layers_label">Layers</span>\n      <svg\n        role="img"\n        aria-label="Show Layers (double-click to reset all layers to the default state)"\n        style="width: 20px; height: 20px; margin-left: 1px"\n        xmlns="http://www.w3.org/2000/svg"\n        fill="currentColor"\n        viewBox="0 0 4.233 4.233"\n      >\n        <path\n          d="M.15 2.992c-.198.1-.2.266-.002.365l1.604.802a.93.93 0 00.729-.001l1.602-.801c.198-.1.197-.264 0-.364l-.695-.348c-1.306.595-2.542 0-2.542 0m-.264.53l.658-.329c.6.252 1.238.244 1.754 0l.659.329-1.536.768zM.15 1.935c-.198.1-.198.265 0 .364l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363l-.694-.35c-1.14.56-2.546.001-2.546.001m-.264.53l.664-.332c.52.266 1.261.235 1.75.002l.659.33-1.537.768zM.15.877c-.198.099-.198.264 0 .363l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363L2.481.075a.926.926 0 00-.727 0zm.43.182L2.117.29l1.538.769-1.538.768z"\n        />\n      </svg>\n    </button>\n  </div>\n\n  <div id="toolbarSidebarRight">\n    <div id="outlineOptionsContainer" class="hidden">\n      <div class="verticalToolbarSeparator"></div>\n\n      <button\n        type="button"\n        id="currentOutlineItem"\n        class="toolbarButton"\n        disabled="disabled"\n        title="Find Current Outline Item"\n        tabindex="6"\n        data-l10n-id="current_outline_item"\n        [style.zoom]="mobileFriendlyZoomScale"\n        aria-label="Find Current Outline Item"\n      >\n        <span data-l10n-id="current_outline_item_label">Current Outline Item</span>\n        <svg role="img" aria-label="Find Current Outline Item" style="width: 20px; height: 20px" xmlns="http://www.w3.org/2000/svg" fill="currentColor">\n          <path\n            d="m14 9h-6c-1.3 0-1.3 2 0 2h6c1.3 0 1.3-2 0-2zm-5.2-8h-3.8c-1.3 0-1.3 2 0 2h1.7zm-6.8 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.3 1.7-0.7 0-0.5-0.4-1-1-1zm3 8c-1 0-1.3 1-0.7 1.7 0.6 0.6 1.7 0.2 1.7-0.7 0-0.5-0.4-1-1-1zm0.3-4h-0.3c-1.4 0-1.4 2 0 2h2.3zm-3.3 0c-0.9 0-1.4 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.7 0-0.6-0.5-1-1-1zm12 8h-9c-1.3 0-1.3 2 0 2h9c1.3 0 1.3-2 0-2zm-12 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.712 0-0.5-0.4-1-1-1z"\n          />\n          <path d="m7.37 4.838 3.93-3.911v2.138h3.629v3.546h-3.629v2.138l-3.93-3.911" />\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n',
      styles: ["button.toolbarButton{margin-right:4px!important;width:22px;height:22px}div#toolbarSidebar>button:first-child{margin-left:4px!important}\n"]
    }]
  }], null, {
    mobileFriendlyZoomScale: [{
      type: Input
    }]
  });
})();
var THUMBNAIL_CANVAS_BORDER_WIDTH = 1;
var PdfSidebarContentComponent = class {
  constructor() {
    this.hideSidebarToolbar = false;
    this.mobileFriendlyZoomScale = 1;
    this.thumbnailDrawn = new EventEmitter();
    if (typeof window !== "undefined") {
      window.pdfThumbnailGeneratorReady = () => this.pdfThumbnailGeneratorReady();
      window.pdfThumbnailGenerator = (pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) => this.createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromise);
    }
  }
  get top() {
    let top = 0;
    if (!this.hideSidebarToolbar) {
      top = 32 * this.mobileFriendlyZoomScale;
      if (top === 32) {
        top = 33;
      }
    }
    return `${top}px`;
  }
  ngOnDestroy() {
    this.linkService = void 0;
  }
  pdfThumbnailGeneratorReady() {
    if (!this.thumbnailViewTemplate) {
      return false;
    }
    const t = this.thumbnailViewTemplate.nativeElement;
    return !!t && !!t.innerHTML && t.innerHTML.length > 0;
  }
  createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) {
    this.linkService = linkService;
    const template = this.thumbnailViewTemplate;
    const inner = template.nativeElement.innerHTML.split(/_ng\w+-\w+-\w+=""/g).join("").split(/ng-\w+-\w+/g).join("").split(/<!--[\s\S]*?-->/g).join("");
    const borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
    const widthOfRing = `${pdfThumbnailView.canvasWidth + borderAdjustment}px`;
    const heightOfRing = `${pdfThumbnailView.canvasHeight + borderAdjustment}px`;
    const newHtml = inner.split("WIDTH_OF_RING").join(widthOfRing).split("HEIGHT_OF_RING").join(heightOfRing).split("PAGE_NUMBER").join(id);
    const newElement = this.createElementFromHTML(newHtml);
    newElement.classList.remove("pdf-viewer-template");
    const anchor = newElement;
    anchor.href = linkService.getAnchorUrl(`#page=${id}`);
    thumbPageTitlePromise.then((msg) => {
      anchor.title = msg;
    });
    anchor.onclick = () => {
      linkService.page = id;
      return false;
    };
    pdfThumbnailView.anchor = anchor;
    const img = newElement.getElementsByTagName("img")[0];
    pdfThumbnailView.div = newElement.getElementsByClassName("thumbnail")[0];
    container.appendChild(newElement);
    const thumbnailDrawnEvent = {
      thumbnail: newElement,
      container,
      pageId: id
    };
    this.thumbnailDrawn.emit(thumbnailDrawnEvent);
    return img;
  }
  getTrustedHtml(html) {
    if (typeof window === "undefined") {
      return html;
    }
    const ttWindow = window;
    if (ttWindow.trustedTypes) {
      const sanitizer = ttWindow.trustedTypes.createPolicy("foo", {
        createHTML: (input) => input
      });
      return sanitizer.createHTML(html);
    } else {
      return html;
    }
  }
  createElementFromHTML(htmlString) {
    const div = document.createElement("div");
    const trustedHtml = this.getTrustedHtml(htmlString.trim());
    div.innerHTML = trustedHtml;
    return div.firstChild;
  }
  onKeyDown(event) {
    if (event.code === "ArrowDown") {
      if (this.linkService) {
        if (event.ctrlKey || event.metaKey) {
          this.linkService.page = this.linkService.pagesCount;
        } else if (this.linkService.page < this.linkService.pagesCount) {
          this.linkService.page = this.linkService.page + 1;
        }
        event.preventDefault();
      }
    } else if (event.code === "ArrowUp") {
      if (this.linkService) {
        if (event.ctrlKey || event.metaKey) {
          this.linkService.page = 1;
        } else if (this.linkService.page > 1) {
          this.linkService.page = this.linkService.page - 1;
        }
        event.preventDefault();
      }
    }
  }
};
PdfSidebarContentComponent.\u0275fac = function PdfSidebarContentComponent_Factory(t) {
  return new (t || PdfSidebarContentComponent)();
};
PdfSidebarContentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfSidebarContentComponent,
  selectors: [["pdf-sidebar-content"]],
  viewQuery: function PdfSidebarContentComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.thumbnailViewTemplate = _t.first);
    }
  },
  inputs: {
    customThumbnail: "customThumbnail",
    hideSidebarToolbar: "hideSidebarToolbar",
    mobileFriendlyZoomScale: "mobileFriendlyZoomScale"
  },
  outputs: {
    thumbnailDrawn: "thumbnailDrawn"
  },
  ngContentSelectors: _c1,
  decls: 10,
  vars: 3,
  consts: [["thumbnailViewTemplate", ""], ["defaultThumbnail", ""], ["id", "sidebarContent"], [4, "ngTemplateOutlet"], ["id", "thumbnailView", 3, "keydown"], ["id", "outlineView", 1, "hidden"], ["id", "attachmentsView", 1, "hidden"], ["id", "layersView", 1, "hidden"], [1, "pdf-viewer-template"], ["data-page-number", "PAGE_NUMBER", 1, "thumbnail"], ["alt", "miniature of the page", 1, "thumbnailImage"]],
  template: function PdfSidebarContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", null, 0);
      \u0275\u0275template(3, PdfSidebarContentComponent_ng_content_3_Template, 1, 0, "ng-content", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275listener("keydown", function PdfSidebarContentComponent_Template_div_keydown_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKeyDown($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, PdfSidebarContentComponent_ng_template_8_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const defaultThumbnail_r2 = \u0275\u0275reference(9);
      \u0275\u0275styleProp("top", ctx.top);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngTemplateOutlet", ctx.customThumbnail ? ctx.customThumbnail : defaultThumbnail_r2);
    }
  },
  dependencies: [NgTemplateOutlet]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfSidebarContentComponent, [{
    type: Component,
    args: [{
      selector: "pdf-sidebar-content",
      template: '<div id="sidebarContent" [style.top]="top">\n  <div #thumbnailViewTemplate>\n    <ng-content *ngTemplateOutlet="customThumbnail ? customThumbnail : defaultThumbnail"></ng-content>\n  </div>\n\n  <div id="thumbnailView" (keydown)="onKeyDown($event)"></div>\n  <div id="outlineView" class="hidden"></div>\n  <div id="attachmentsView" class="hidden"></div>\n  <div id="layersView" class="hidden"></div>\n</div>\n\n<ng-template #defaultThumbnail>\n  <a class="pdf-viewer-template">\n    <div class="thumbnail" data-page-number="PAGE_NUMBER">\n      <img class="thumbnailImage" alt="miniature of the page" />\n    </div>\n  </a>\n</ng-template>\n',
      styles: [""]
    }]
  }], function() {
    return [];
  }, {
    customThumbnail: [{
      type: Input
    }],
    hideSidebarToolbar: [{
      type: Input
    }],
    mobileFriendlyZoomScale: [{
      type: Input
    }],
    thumbnailViewTemplate: [{
      type: ViewChild,
      args: ["thumbnailViewTemplate"]
    }],
    thumbnailDrawn: [{
      type: Output
    }]
  });
})();
var PdfSidebarComponent = class {
  constructor(elementRef, ref) {
    this.elementRef = elementRef;
    this.ref = ref;
    this.sidebarVisible = true;
    this.mobileFriendlyZoomScale = 1;
    this.showSidebarButton = true;
    this.thumbnailDrawn = new EventEmitter();
    this.hideSidebarToolbar = true;
  }
  showToolbarWhenNecessary() {
    const element = this.elementRef.nativeElement;
    const buttons = element.querySelectorAll("button");
    let visible = 0;
    for (let index = 0; index < buttons.length; index++) {
      const b = buttons.item(index);
      if (!b.hidden) {
        visible++;
      }
    }
    this.hideSidebarToolbar = visible <= 1;
    this.ref.markForCheck();
  }
};
PdfSidebarComponent.\u0275fac = function PdfSidebarComponent_Factory(t) {
  return new (t || PdfSidebarComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
};
PdfSidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfSidebarComponent,
  selectors: [["pdf-sidebar"]],
  inputs: {
    sidebarPositionTop: "sidebarPositionTop",
    sidebarVisible: "sidebarVisible",
    mobileFriendlyZoomScale: "mobileFriendlyZoomScale",
    showSidebarButton: "showSidebarButton",
    customSidebar: "customSidebar",
    customThumbnail: "customThumbnail"
  },
  outputs: {
    thumbnailDrawn: "thumbnailDrawn"
  },
  ngContentSelectors: _c1,
  decls: 4,
  vars: 1,
  consts: [["defaultSidebar", ""], [4, "ngTemplateOutlet"], ["id", "sidebarContainer"], ["id", "additionalSidebarContainer"], [3, "mobileFriendlyZoomScale"], [3, "thumbnailDrawn", "customThumbnail", "hideSidebarToolbar", "mobileFriendlyZoomScale"], ["id", "sidebarResizer", 1, "hidden"]],
  template: function PdfSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div");
      \u0275\u0275template(1, PdfSidebarComponent_ng_content_1_Template, 1, 0, "ng-content", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, PdfSidebarComponent_ng_template_2_Template, 5, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const defaultSidebar_r3 = \u0275\u0275reference(3);
      \u0275\u0275advance();
      \u0275\u0275property("ngTemplateOutlet", ctx.customSidebar ? ctx.customSidebar : defaultSidebar_r3);
    }
  },
  dependencies: [PdfSidebarToolbarComponent, PdfSidebarContentComponent, NgTemplateOutlet]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfSidebarComponent, [{
    type: Component,
    args: [{
      selector: "pdf-sidebar",
      template: `<div>
  <ng-content *ngTemplateOutlet="customSidebar ? customSidebar : defaultSidebar"></ng-content>
</div>

<ng-template #defaultSidebar>
  <div id="sidebarContainer" [style.top]="sidebarPositionTop">
    <div id="additionalSidebarContainer" [style.display]="hideSidebarToolbar ? 'none' : ''">
      <pdf-sidebar-toolbar [mobileFriendlyZoomScale]="mobileFriendlyZoomScale"></pdf-sidebar-toolbar>
    </div>
    <pdf-sidebar-content
      [customThumbnail]="customThumbnail"
      (thumbnailDrawn)="thumbnailDrawn.emit($event)"
      [hideSidebarToolbar]="hideSidebarToolbar"
      [mobileFriendlyZoomScale]="mobileFriendlyZoomScale"
    ></pdf-sidebar-content>
    <div id="sidebarResizer" class="hidden"></div>
  </div>
</ng-template>
`,
      styles: [""]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    sidebarPositionTop: [{
      type: Input
    }],
    sidebarVisible: [{
      type: Input
    }],
    mobileFriendlyZoomScale: [{
      type: Input
    }],
    showSidebarButton: [{
      type: Input
    }],
    customSidebar: [{
      type: Input
    }],
    customThumbnail: [{
      type: Input
    }],
    thumbnailDrawn: [{
      type: Output
    }]
  });
})();
var PdfShyButtonService = class {
  constructor() {
    this.buttons = [];
  }
  add(button) {
    const id = button.secondaryMenuId ?? this.addDefaultPrefix(button);
    const previousDefinition = this.buttons.findIndex((b) => b.id === id);
    const description = {
      id,
      cssClass: button.cssClass,
      l10nId: button.l10nId,
      l10nLabel: button.l10nLabel,
      title: button.title,
      toggled: button.toggled,
      disabled: button.disabled,
      order: button.order ?? 99999,
      image: button.imageHtml,
      action: button.action,
      eventBusName: button.eventBusName,
      closeOnClick: button.closeOnClick
    };
    if (previousDefinition >= 0) {
      this.buttons[previousDefinition] = description;
      setTimeout(() => {
        const PDFViewerApplication = window.PDFViewerApplication;
        if (PDFViewerApplication?.l10n) {
          const element = document.getElementById(id);
          PDFViewerApplication.l10n.translate(element).then(() => {
          });
        }
      }, 0);
    } else {
      this.buttons.push(description);
    }
    this.buttons.sort((a, b) => a.order - b.order);
  }
  addDefaultPrefix(button) {
    if (button.primaryToolbarId.startsWith("primary")) {
      return button.primaryToolbarId.replace("primary", "secondary");
    }
    return "secondary" + button.primaryToolbarId.substring(0, 1).toUpperCase() + button.primaryToolbarId.substring(1);
  }
  update(button) {
    const id = button.secondaryMenuId ?? this.addDefaultPrefix(button);
    if (this.buttons.some((b) => b.id === id)) {
      this.add(button);
    }
  }
};
PdfShyButtonService.\u0275fac = function PdfShyButtonService_Factory(t) {
  return new (t || PdfShyButtonService)();
};
PdfShyButtonService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: PdfShyButtonService,
  factory: PdfShyButtonService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfShyButtonService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PdfShyButtonComponent = class {
  constructor(pdfShyButtonServiceService, sanitizer) {
    this.pdfShyButtonServiceService = pdfShyButtonServiceService;
    this.sanitizer = sanitizer;
    this.eventBusName = void 0;
    this.action = void 0;
    this.closeOnClick = true;
    this.onlySecondaryMenu = false;
  }
  get imageHtml() {
    return this._imageHtml;
  }
  set image(value) {
    const svgTags = [
      // 'a' is not allowed!
      "animate",
      "animateMotion",
      "animateTransform",
      "audio",
      "canvas",
      "circle",
      "clipPath",
      "defs",
      "desc",
      "discard",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "foreignObject",
      "g",
      "iframe",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "script",
      "set",
      "stop",
      "style",
      "svg",
      "switch",
      "symbol",
      "text",
      "textPath",
      "title",
      "tspan",
      "unknown",
      "use",
      "video",
      "view"
    ];
    const tags = value.split("<").filter((tag) => tag.length > 0);
    const legal = tags.every((tag) => tag.startsWith("svg") || tag.startsWith("/") || svgTags.includes(tag.split(/\s|>/)[0]));
    if (!legal) {
      throw new Error("Illegal image for PDFShyButton. Only SVG images are allowed. Please use only the tags <svg> and <path>. " + value);
    }
    this._imageHtml = this.sanitizeHtml(value);
  }
  ngOnInit() {
    this.pdfShyButtonServiceService.add(this);
  }
  ngOnChanges(changes) {
    this.pdfShyButtonServiceService.update(this);
  }
  sanitizeHtml(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  onClick(event) {
    if (this.action) {
      this.action();
      event.preventDefault();
    } else if (this.eventBusName) {
      const PDFViewerApplication = window.PDFViewerApplication;
      PDFViewerApplication.eventBus.dispatch(this.eventBusName);
      event.preventDefault();
    }
  }
};
PdfShyButtonComponent.\u0275fac = function PdfShyButtonComponent_Factory(t) {
  return new (t || PdfShyButtonComponent)(\u0275\u0275directiveInject(PdfShyButtonService), \u0275\u0275directiveInject(DomSanitizer));
};
PdfShyButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfShyButtonComponent,
  selectors: [["pdf-shy-button"]],
  inputs: {
    primaryToolbarId: "primaryToolbarId",
    secondaryMenuId: "secondaryMenuId",
    cssClass: "cssClass",
    eventBusName: "eventBusName",
    l10nId: "l10nId",
    l10nLabel: "l10nLabel",
    title: "title",
    toggled: "toggled",
    disabled: "disabled",
    order: "order",
    action: "action",
    closeOnClick: "closeOnClick",
    onlySecondaryMenu: "onlySecondaryMenu",
    image: "image"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 1,
  consts: [["type", "button", "class", "toolbarButton", "role", "button", 3, "id", "class", "title", "toggled", "disabled", "innerHTML", "click", 4, "ngIf"], ["type", "button", "role", "button", 1, "toolbarButton", 3, "click", "id", "title", "disabled", "innerHTML"], [4, "ngIf"]],
  template: function PdfShyButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, PdfShyButtonComponent_button_0_Template, 4, 13, "button", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.onlySecondaryMenu);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfShyButtonComponent, [{
    type: Component,
    args: [{
      selector: "pdf-shy-button",
      template: '<button\n  *ngIf="!onlySecondaryMenu"\n  type="button"\n  [id]="primaryToolbarId"\n  class="toolbarButton"\n  [class]="cssClass"\n  [title]="title"\n  [attr.data-l10n-id]="l10nId"\n  [class.toggled]="toggled"\n  [disabled]="disabled"\n  [innerHTML]="imageHtml"\n  (click)="onClick($event)"\n  [attr.aria-label]="title"\n  role="button"\n>\n  <ng-content *ngIf="!image" role="img" aria-hidden="true"></ng-content>\n  <span [attr.data-l10n-id]="l10nLabel">{{ title }}</span>\n</button>\n'
    }]
  }], function() {
    return [{
      type: PdfShyButtonService
    }, {
      type: DomSanitizer
    }];
  }, {
    primaryToolbarId: [{
      type: Input
    }],
    secondaryMenuId: [{
      type: Input
    }],
    cssClass: [{
      type: Input
    }],
    eventBusName: [{
      type: Input
    }],
    l10nId: [{
      type: Input
    }],
    l10nLabel: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    toggled: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    order: [{
      type: Input
    }],
    action: [{
      type: Input
    }],
    closeOnClick: [{
      type: Input
    }],
    onlySecondaryMenu: [{
      type: Input
    }],
    image: [{
      type: Input
    }]
  });
})();
var PdfToggleSidebarComponent = class {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.show = true;
    this.sidebarVisible = false;
    this.showChange = new EventEmitter();
    const emitter = this.showChange;
    this.onClick = () => {
      const PDFViewerApplication = window.PDFViewerApplication;
      const newVisibility = !PDFViewerApplication.pdfSidebar.isOpen;
      emitter.emit(newVisibility);
      PDFViewerApplication.eventBus.dispatch("toggleSidebar", {
        visible: newVisibility
      });
    };
  }
};
PdfToggleSidebarComponent.\u0275fac = function PdfToggleSidebarComponent_Factory(t) {
  return new (t || PdfToggleSidebarComponent)(\u0275\u0275directiveInject(NgZone));
};
PdfToggleSidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfToggleSidebarComponent,
  selectors: [["pdf-toggle-sidebar"]],
  inputs: {
    show: "show",
    sidebarVisible: "sidebarVisible"
  },
  outputs: {
    showChange: "showChange"
  },
  decls: 2,
  vars: 8,
  consts: [["title", "Toggle Sidebar", "primaryToolbarId", "primarySidebarToggle", "l10nId", "toggle_sidebar", "l10nLabel", "toggle_sidebar_label", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'> <path fill='currentColor' d='M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z' /> </svg>", 3, "cssClass", "toggled", "order", "closeOnClick", "action"]],
  template: function PdfToggleSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 5, ctx.show, "always-visible"))("toggled", ctx.sidebarVisible === true)("order", 4500)("closeOnClick", true)("action", ctx.onClick);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button#sidebarToggle[_ngcontent-%COMP%]{height:24px;width:24px;margin-right:5px!important}button[_ngcontent-%COMP%]{padding:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfToggleSidebarComponent, [{
    type: Component,
    args: [{
      selector: "pdf-toggle-sidebar",
      template: `<pdf-shy-button
  title="Toggle Sidebar"
  primaryToolbarId="primarySidebarToggle"
  [cssClass]="show | responsiveCSSClass : 'always-visible'"
  [toggled]="sidebarVisible === true"
  l10nId="toggle_sidebar"
  l10nLabel="toggle_sidebar_label"
  [order]="4500"
  [closeOnClick]="true"
  [action]="onClick"
  image="<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'> <path fill='currentColor' d='M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z' /> </svg>"
>
</pdf-shy-button>
`,
      styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button#sidebarToggle{height:24px;width:24px;margin-right:5px!important}button{padding:0}\n"]
    }]
  }], function() {
    return [{
      type: NgZone
    }];
  }, {
    show: [{
      type: Input
    }],
    sidebarVisible: [{
      type: Input
    }],
    showChange: [{
      type: Output
    }]
  });
})();
var PdfFindButtonComponent = class {
  constructor() {
    this.showFindButton = void 0;
    this.textLayer = void 0;
    this.findbarVisible = false;
  }
  onClick() {
    const PDFViewerApplication = window.PDFViewerApplication;
    if (PDFViewerApplication.findBar.opened) {
      PDFViewerApplication.findBar.close();
    } else {
      PDFViewerApplication.findBar.open();
    }
  }
};
PdfFindButtonComponent.\u0275fac = function PdfFindButtonComponent_Factory(t) {
  return new (t || PdfFindButtonComponent)();
};
PdfFindButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfFindButtonComponent,
  selectors: [["pdf-find-button"]],
  inputs: {
    showFindButton: "showFindButton",
    textLayer: "textLayer",
    findbarVisible: "findbarVisible"
  },
  decls: 2,
  vars: 7,
  consts: [["primaryToolbarId", "primaryViewFind", "title", "Find in Document", "l10nId", "findbar", "l10nLabel", "findbar_label", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'> <path fill='currentColor' d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /> </svg>", 3, "cssClass", "order", "action", "toggled"]],
  template: function PdfFindButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 4, ctx.showFindButton, ctx.textLayer ? "always-visible" : "invisible"))("order", 1400)("action", ctx.onClick)("toggled", ctx.findbarVisible);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfFindButtonComponent, [{
    type: Component,
    args: [{
      selector: "pdf-find-button",
      template: `<pdf-shy-button
  [cssClass]="showFindButton | responsiveCSSClass : (textLayer ? 'always-visible' : 'invisible')"
  primaryToolbarId="primaryViewFind"
  title="Find in Document"
  l10nId="findbar"
  l10nLabel="findbar_label"
  [order]="1400"
  [action]="onClick"
  [toggled]="findbarVisible"
  image="<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'> <path fill='currentColor' d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /> </svg>"
>
</pdf-shy-button>
`,
      styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"]
    }]
  }], null, {
    showFindButton: [{
      type: Input
    }],
    textLayer: [{
      type: Input
    }],
    findbarVisible: [{
      type: Input
    }]
  });
})();
var PdfFirstPageComponent = class {
  constructor(notificationService, changeDetectorRef) {
    this.notificationService = notificationService;
    this.changeDetectorRef = changeDetectorRef;
    this.show = true;
    this.disableFirstPage = true;
    const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
      this.onPdfJsInit();
      subscription.unsubscribe();
    });
  }
  firstPage() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.dispatch("firstpage");
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("updateuistate", (event) => this.updateUIState(event));
  }
  updateUIState(event) {
    this.disableFirstPage = event.pageNumber <= 1;
    this.changeDetectorRef.markForCheck();
  }
};
PdfFirstPageComponent.\u0275fac = function PdfFirstPageComponent_Factory(t) {
  return new (t || PdfFirstPageComponent)(\u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
PdfFirstPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfFirstPageComponent,
  selectors: [["pdf-first-page"]],
  inputs: {
    show: "show"
  },
  decls: 2,
  vars: 7,
  consts: [["title", "First page", "primaryToolbarId", "primaryFirstPage", "l10nId", "first_page", "l10nLabel", "first_page_label", "eventBusName", "firstpage", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z' /></svg>", 3, "click", "cssClass", "disabled", "order", "closeOnClick"]],
  template: function PdfFirstPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
      \u0275\u0275listener("click", function PdfFirstPageComponent_Template_pdf_shy_button_click_0_listener() {
        return ctx.firstPage();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 4, ctx.show, "hiddenLargeView"))("disabled", ctx.disableFirstPage)("order", 500)("closeOnClick", false);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: ["button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfFirstPageComponent, [{
    type: Component,
    args: [{
      selector: "pdf-first-page",
      template: `<pdf-shy-button
  [cssClass]="show | responsiveCSSClass : 'hiddenLargeView'"
  title="First page"
  primaryToolbarId="primaryFirstPage"
  l10nId="first_page"
  (click)="firstPage()"
  [disabled]="disableFirstPage"
  l10nLabel="first_page_label"
  [order]="500"
  eventBusName="firstpage"
  [closeOnClick]="false"
  image="<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z' /></svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    show: [{
      type: Input
    }]
  });
})();
var PdfPreviousPageComponent = class {
  constructor(notificationService, ngZone, changeDetectorRef) {
    this.notificationService = notificationService;
    this.ngZone = ngZone;
    this.changeDetectorRef = changeDetectorRef;
    this.disablePreviousPage = true;
    const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
      this.onPdfJsInit();
      subscription.unsubscribe();
    });
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("updateuistate", (event) => this.updateUIState(event));
  }
  updateUIState(event) {
    this.disablePreviousPage = event.pageNumber <= 1;
    this.changeDetectorRef.markForCheck();
  }
};
PdfPreviousPageComponent.\u0275fac = function PdfPreviousPageComponent_Factory(t) {
  return new (t || PdfPreviousPageComponent)(\u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef));
};
PdfPreviousPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfPreviousPageComponent,
  selectors: [["pdf-previous-page"]],
  decls: 2,
  vars: 6,
  consts: [["title", "Previous Page", "primaryToolbarId", "primaryPrevious", "secondaryMenuId", "secondaryPreviousPage", "l10nId", "previous", "l10nLabel", "previous_label", "eventBusName", "previouspage", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /></svg>", 3, "cssClass", "disabled", "order", "closeOnClick"]],
  template: function PdfPreviousPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind1(1, 4, "xs"))("disabled", ctx.disablePreviousPage)("order", 600)("closeOnClick", false);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c2]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfPreviousPageComponent, [{
    type: Component,
    args: [{
      selector: "pdf-previous-page",
      template: `<pdf-shy-button
  [cssClass]="'xs' | responsiveCSSClass"
  title="Previous Page"
  primaryToolbarId="primaryPrevious"
  secondaryMenuId="secondaryPreviousPage"
  l10nId="previous"
  l10nLabel="previous_label"
  [disabled]="disablePreviousPage"
  [order]="600"
  eventBusName="previouspage"
  [closeOnClick]="false"
  image="<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /></svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var PdfPageNumberComponent = class {
  constructor() {
    this.showPagingButtons = true;
  }
};
PdfPageNumberComponent.\u0275fac = function PdfPageNumberComponent_Factory(t) {
  return new (t || PdfPageNumberComponent)();
};
PdfPageNumberComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfPageNumberComponent,
  selectors: [["pdf-page-number"]],
  inputs: {
    showPagingButtons: "showPagingButtons"
  },
  decls: 3,
  vars: 5,
  consts: [["type", "number", "id", "pageNumber", "title", "Page", "value", "1", "size", "4", "min", "1", "data-l10n-id", "page", "autocomplete", "off", 1, "toolbarField", "pageNumber"], ["id", "numPages", 1, "toolbarLabel"]],
  template: function PdfPageNumberComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "input", 0)(1, "span", 1);
      \u0275\u0275pipe(2, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275pipeBind2(2, 2, ctx.showPagingButtons, "hiddenXLView"));
    }
  },
  dependencies: [ResponsiveCSSClassPipe],
  styles: ["button[_ngcontent-%COMP%]{padding:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfPageNumberComponent, [{
    type: Component,
    args: [{
      selector: "pdf-page-number",
      template: `<input type="number" id="pageNumber" class="toolbarField pageNumber" title="Page" value="1" size="4" min="1" data-l10n-id="page" autocomplete="off" />
<span [class]="showPagingButtons | responsiveCSSClass : 'hiddenXLView'" id="numPages" class="toolbarLabel"></span>
`,
      styles: ["button{padding:0}\n"]
    }]
  }], null, {
    showPagingButtons: [{
      type: Input
    }]
  });
})();
var PdfNextPageComponent = class {
  constructor(notificationService, changeDetectorRef) {
    this.notificationService = notificationService;
    this.changeDetectorRef = changeDetectorRef;
    this.disableNextPage = true;
    const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
      this.onPdfJsInit();
      subscription.unsubscribe();
    });
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("updateuistate", (event) => this.updateUIState(event));
  }
  updateUIState(event) {
    this.disableNextPage = event.pageNumber === event.pagesCount;
    this.changeDetectorRef.markForCheck();
  }
};
PdfNextPageComponent.\u0275fac = function PdfNextPageComponent_Factory(t) {
  return new (t || PdfNextPageComponent)(\u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
PdfNextPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfNextPageComponent,
  selectors: [["pdf-next-page"]],
  decls: 2,
  vars: 6,
  consts: [["title", "Next Page", "primaryToolbarId", "primaryNext", "secondaryMenuId", "primaryNextPage", "l10nId", "next", "l10nLabel", "next_label", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /></svg>", "eventBusName", "nextpage", 3, "cssClass", "disabled", "order", "closeOnClick"]],
  template: function PdfNextPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind1(1, 4, "xs"))("disabled", ctx.disableNextPage)("order", 700)("closeOnClick", false);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c2]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfNextPageComponent, [{
    type: Component,
    args: [{
      selector: "pdf-next-page",
      template: `<pdf-shy-button
  title="Next Page"
  [cssClass]="'xs' | responsiveCSSClass"
  primaryToolbarId="primaryNext"
  secondaryMenuId="primaryNextPage"
  l10nId="next"
  l10nLabel="next_label"
  [disabled]="disableNextPage"
  image="<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /></svg>"
  [order]="700"
  [closeOnClick]="false"
  eventBusName="nextpage"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var PdfLastPageComponent = class {
  constructor(notificationService, changeDetectorRef) {
    this.notificationService = notificationService;
    this.changeDetectorRef = changeDetectorRef;
    this.disableLastPage = true;
    const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
      this.onPdfJsInit();
      subscription.unsubscribe();
    });
  }
  firstPage() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.dispatch("firstpage");
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("updateuistate", (event) => this.updateUIState(event));
  }
  updateUIState(event) {
    this.disableLastPage = event.pageNumber === event.pagesCount;
    this.changeDetectorRef.markForCheck();
  }
  lastPage() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.dispatch("lastpage");
  }
};
PdfLastPageComponent.\u0275fac = function PdfLastPageComponent_Factory(t) {
  return new (t || PdfLastPageComponent)(\u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
PdfLastPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfLastPageComponent,
  selectors: [["pdf-last-page"]],
  decls: 1,
  vars: 3,
  consts: [["cssClass", "hiddenLargeView", "title", "Last page", "primaryToolbarId", "primaryLastPage", "l10nId", "last_page", "l10nLabel", "last_page_label", "eventBusName", "lastpage", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z' /></svg>", 3, "click", "disabled", "order", "closeOnClick"]],
  template: function PdfLastPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "pdf-shy-button", 0);
      \u0275\u0275listener("click", function PdfLastPageComponent_Template_pdf_shy_button_click_0_listener() {
        return ctx.lastPage();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("disabled", ctx.disableLastPage)("order", 800)("closeOnClick", false);
    }
  },
  dependencies: [PdfShyButtonComponent],
  styles: [_c2]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfLastPageComponent, [{
    type: Component,
    args: [{
      selector: "pdf-last-page",
      template: `<pdf-shy-button
  cssClass="hiddenLargeView"
  title="Last page"
  primaryToolbarId="primaryLastPage"
  l10nId="last_page"
  l10nLabel="last_page_label"
  (click)="lastPage()"
  [disabled]="disableLastPage"
  [order]="800"
  eventBusName="lastpage"
  [closeOnClick]="false"
  image="<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z' /></svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var PdfPagingAreaComponent = class {
  constructor() {
    this.showPagingButtons = true;
  }
};
PdfPagingAreaComponent.\u0275fac = function PdfPagingAreaComponent_Factory(t) {
  return new (t || PdfPagingAreaComponent)();
};
PdfPagingAreaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfPagingAreaComponent,
  selectors: [["pdf-paging-area"]],
  inputs: {
    showPagingButtons: "showPagingButtons"
  },
  decls: 10,
  vars: 15,
  consts: [[1, "paging-left"], [2, "margin-right", "-3px"], [2, "margin-left", "-3px"], [1, "paging-right"], [2, "margin-right", "-3px", "margin-left", "-3px"]],
  template: function PdfPagingAreaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
      \u0275\u0275element(2, "pdf-first-page", 1)(3, "pdf-previous-page", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "pdf-page-number");
      \u0275\u0275pipe(5, "responsiveCSSClass");
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275pipe(7, "responsiveCSSClass");
      \u0275\u0275element(8, "pdf-next-page", 4)(9, "pdf-last-page", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(\u0275\u0275pipeBind2(1, 6, ctx.showPagingButtons, "hiddenTinyView"));
      \u0275\u0275advance(4);
      \u0275\u0275classMap(\u0275\u0275pipeBind2(5, 9, ctx.showPagingButtons, "hiddenXXSView"));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(\u0275\u0275pipeBind2(7, 12, ctx.showPagingButtons, "hiddenTinyView"));
    }
  },
  dependencies: [PdfFirstPageComponent, PdfPreviousPageComponent, PdfPageNumberComponent, PdfNextPageComponent, PdfLastPageComponent, ResponsiveCSSClassPipe],
  styles: [".paging-right[_ngcontent-%COMP%]{float:right;display:block}.paging-left[_ngcontent-%COMP%]{float:left;display:block}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfPagingAreaComponent, [{
    type: Component,
    args: [{
      selector: "pdf-paging-area",
      template: `<div [class]="showPagingButtons | responsiveCSSClass : 'hiddenTinyView'" class="paging-left">
  <pdf-first-page style="margin-right: -3px"></pdf-first-page>
  <pdf-previous-page style="margin-left: -3px"></pdf-previous-page>
</div>
<pdf-page-number [class]="showPagingButtons | responsiveCSSClass : 'hiddenXXSView'"></pdf-page-number>
<div [class]="showPagingButtons | responsiveCSSClass : 'hiddenTinyView'" class="paging-right">
  <pdf-next-page style="margin-right: -3px; margin-left: -3px"></pdf-next-page>
  <pdf-last-page style="margin-left: -3px"></pdf-last-page>
</div>
`,
      styles: [".paging-right{float:right;display:block}.paging-left{float:left;display:block}\n"]
    }]
  }], null, {
    showPagingButtons: [{
      type: Input
    }]
  });
})();
var PdfZoomOutComponent = class {
  constructor() {
    this.showZoomButtons = true;
  }
};
PdfZoomOutComponent.\u0275fac = function PdfZoomOutComponent_Factory(t) {
  return new (t || PdfZoomOutComponent)();
};
PdfZoomOutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfZoomOutComponent,
  selectors: [["pdf-zoom-out"]],
  inputs: {
    showZoomButtons: "showZoomButtons"
  },
  decls: 2,
  vars: 5,
  consts: [["primaryToolbarId", "zoomOut", "title", "Zoom Out", "l10nId", "zoom_out", "l10nLabel", "zoom_out_label", "eventBusName", "zoomout", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M19,13H5V11H19V13Z' /></svg>", 1, "zoomOut", 3, "cssClass", "order"]],
  template: function PdfZoomOutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 2, ctx.showZoomButtons, "always-visible"))("order", 1500);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: ["button[_ngcontent-%COMP%]{margin-left:-2px!important;margin-right:-2px!important;padding:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfZoomOutComponent, [{
    type: Component,
    args: [{
      selector: "pdf-zoom-out",
      template: `<pdf-shy-button
  primaryToolbarId="zoomOut"
  class="zoomOut"
  title="Zoom Out"
  l10nId="zoom_out"
  l10nLabel="zoom_out_label"
  eventBusName="zoomout"
  [cssClass]="showZoomButtons | responsiveCSSClass : 'always-visible'"
  [order]="1500"
  image="<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M19,13H5V11H19V13Z' /></svg>"
>
</pdf-shy-button>
`,
      styles: ["button{margin-left:-2px!important;margin-right:-2px!important;padding:0}\n"]
    }]
  }], null, {
    showZoomButtons: [{
      type: Input
    }]
  });
})();
var PdfZoomInComponent = class {
  constructor() {
    this.showZoomButtons = true;
  }
};
PdfZoomInComponent.\u0275fac = function PdfZoomInComponent_Factory(t) {
  return new (t || PdfZoomInComponent)();
};
PdfZoomInComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfZoomInComponent,
  selectors: [["pdf-zoom-in"]],
  inputs: {
    showZoomButtons: "showZoomButtons"
  },
  decls: 2,
  vars: 5,
  consts: [["primaryToolbarId", "zoomIn", "title", "Zoom In", "l10nId", "zoom_in", "l10nLabel", "zoom_in_label", "eventBusName", "zoomin", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' /></svg>", 1, "zoomIn", 3, "cssClass", "order"]],
  template: function PdfZoomInComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 2, ctx.showZoomButtons, "always-visible"))("order", 1600);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c3]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfZoomInComponent, [{
    type: Component,
    args: [{
      selector: "pdf-zoom-in",
      template: `<pdf-shy-button
  primaryToolbarId="zoomIn"
  [cssClass]="showZoomButtons | responsiveCSSClass : 'always-visible'"
  class="zoomIn"
  title="Zoom In"
  l10nId="zoom_in"
  l10nLabel="zoom_in_label"
  eventBusName="zoomin"
  [order]="1600"
  image="<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' /></svg>"
>
</pdf-shy-button>
`,
      styles: ["button{margin-left:-2px!important;margin-right:-2px!important;padding:0}\n"]
    }]
  }], null, {
    showZoomButtons: [{
      type: Input
    }]
  });
})();
var PdfZoomDropdownComponent = class {
  constructor(element) {
    this.element = element;
    this._zoomLevels = [];
  }
  set zoomLevels(levels) {
    this._zoomLevels = levels.map((l) => this.valueToZoomLevel(l));
  }
  valueToZoomLevel(value) {
    if (value.toString().endsWith("%")) {
      value = value.toString().replace("%", "");
      value = Number(value) / 100;
    }
    const numericalValue = Number(value);
    if (!numericalValue) {
      const v = String(value);
      return {
        id: this.snakeToCamel(value + "Option"),
        value: v,
        dataL10nId: "page_scale_" + v.replace("page-", ""),
        dataL10nArgs: void 0,
        displayValue: v
      };
    }
    const percentage = Math.round(numericalValue * 100);
    return {
      id: `scale_${percentage}`,
      value: String(numericalValue),
      dataL10nId: "page_scale_percent",
      dataL10nArgs: `{ "scale": ${percentage} }`,
      displayValue: isNaN(percentage) ? "" : String(percentage) + "%"
    };
  }
  snakeToCamel(str) {
    return str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace("-", "").replace("_", ""));
  }
};
PdfZoomDropdownComponent.\u0275fac = function PdfZoomDropdownComponent_Factory(t) {
  return new (t || PdfZoomDropdownComponent)(\u0275\u0275directiveInject(ElementRef));
};
PdfZoomDropdownComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfZoomDropdownComponent,
  selectors: [["pdf-zoom-dropdown"]],
  viewQuery: function PdfZoomDropdownComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sizeSelector = _t.first);
    }
  },
  inputs: {
    zoomLevels: "zoomLevels"
  },
  decls: 5,
  vars: 1,
  consts: [["sizeSelector", ""], ["id", "scaleSelectContainer"], ["id", "scaleSelect", "title", "Zoom", "data-l10n-id", "zoom"], [3, "id", 4, "ngFor", "ngForOf"], ["id", "customScaleOption", "title", "", "value", "custom", "disabled", "disabled", "hidden", "true"], [3, "id"]],
  template: function PdfZoomDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 1)(1, "select", 2, 0);
      \u0275\u0275template(3, PdfZoomDropdownComponent_option_3_Template, 2, 5, "option", 3);
      \u0275\u0275element(4, "option", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx._zoomLevels);
    }
  },
  dependencies: [NgForOf, NgSelectOption, \u0275NgSelectMultipleOption],
  styles: ["select[_ngcontent-%COMP%]{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption[_ngcontent-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfZoomDropdownComponent, [{
    type: Component,
    args: [{
      selector: "pdf-zoom-dropdown",
      template: '<span id="scaleSelectContainer">\n  <select\n    id="scaleSelect"\n    title="Zoom"\n    data-l10n-id="zoom"\n    #sizeSelector\n  >\n    <option *ngFor="let level of _zoomLevels"\n      [id]="level.id"\n      [attr.value]="level.value"\n      [attr.data-l10n-id]="level.dataL10nId"\n      [attr.data-l10n-args]="level.dataL10nArgs">\n      {{level.displayValue}}\n    </option>\n    <option\n    id="customScaleOption"\n    title=""\n    value="custom"\n    disabled="disabled"\n    hidden="true"\n  ></option>\n\n  </select>\n</span>\n',
      styles: ["select{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption{display:none}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    zoomLevels: [{
      type: Input
    }],
    sizeSelector: [{
      type: ViewChild,
      args: ["sizeSelector"]
    }]
  });
})();
var PdfZoomToolbarComponent = class {
  constructor() {
    this.showZoomButtons = true;
    this.zoomLevels = ["auto", "page-actual", "page-fit", "page-width", 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
  }
};
PdfZoomToolbarComponent.\u0275fac = function PdfZoomToolbarComponent_Factory(t) {
  return new (t || PdfZoomToolbarComponent)();
};
PdfZoomToolbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfZoomToolbarComponent,
  selectors: [["pdf-zoom-toolbar"]],
  inputs: {
    showZoomButtons: "showZoomButtons",
    zoomLevels: "zoomLevels"
  },
  decls: 5,
  vars: 8,
  consts: [["id", "toolbarViewerMiddle"], [3, "showZoomButtons"], [2, "width", "unset", "max-width", "unset", "padding-top", "3px", 3, "zoomLevels"]],
  template: function PdfZoomToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
      \u0275\u0275element(2, "pdf-zoom-out", 1)(3, "pdf-zoom-in", 1)(4, "pdf-zoom-dropdown", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(\u0275\u0275pipeBind2(1, 5, ctx.showZoomButtons, "always-visible"));
      \u0275\u0275advance(2);
      \u0275\u0275property("showZoomButtons", ctx.showZoomButtons);
      \u0275\u0275advance();
      \u0275\u0275property("showZoomButtons", ctx.showZoomButtons);
      \u0275\u0275advance();
      \u0275\u0275property("zoomLevels", ctx.zoomLevels);
    }
  },
  dependencies: [PdfZoomOutComponent, PdfZoomInComponent, PdfZoomDropdownComponent, ResponsiveCSSClassPipe]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfZoomToolbarComponent, [{
    type: Component,
    args: [{
      selector: "pdf-zoom-toolbar",
      template: `<div id="toolbarViewerMiddle" [class]="showZoomButtons | responsiveCSSClass : 'always-visible'">
  <pdf-zoom-out [showZoomButtons]="showZoomButtons"></pdf-zoom-out>
  <pdf-zoom-in [showZoomButtons]="showZoomButtons"></pdf-zoom-in>
  <pdf-zoom-dropdown style="width: unset; max-width: unset; padding-top: 3px" [zoomLevels]="zoomLevels"> </pdf-zoom-dropdown>
</div>
`,
      styles: [""]
    }]
  }], null, {
    showZoomButtons: [{
      type: Input
    }],
    zoomLevels: [{
      type: Input
    }]
  });
})();
var PdfDocumentPropertiesComponent = class {
  constructor() {
    this.show = true;
  }
};
PdfDocumentPropertiesComponent.\u0275fac = function PdfDocumentPropertiesComponent_Factory(t) {
  return new (t || PdfDocumentPropertiesComponent)();
};
PdfDocumentPropertiesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfDocumentPropertiesComponent,
  selectors: [["pdf-document-properties"]],
  inputs: {
    show: "show"
  },
  decls: 2,
  vars: 6,
  consts: [["title", "Document Properties\u2026", "primaryToolbarId", "documentProperties", "l10nId", "document_properties", "l10nLabel", "document_properties_label", "eventBusName", "documentproperties", "image", "<svg style='width: 16px; height: 16px; margin-top: 3px' viewBox='0 0 16 16'><path fill='currentColor' d='M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zM8 2a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6z' /><path fill='currentColor' d='M8 7a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z' /><circle fill='currentColor' cx='8' cy='5' r='1.188' /></svg>", 3, "cssClass", "order", "closeOnClick"]],
  template: function PdfDocumentPropertiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 3, ctx.show, "always-in-secondary-menu"))("order", 5e3)("closeOnClick", true);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c2]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfDocumentPropertiesComponent, [{
    type: Component,
    args: [{
      selector: "pdf-document-properties",
      template: `<pdf-shy-button
  title="Document Properties\u2026"
  primaryToolbarId="documentProperties"
  [cssClass]="show | responsiveCSSClass : 'always-in-secondary-menu'"
  l10nId="document_properties"
  l10nLabel="document_properties_label"
  [order]="5000"
  eventBusName="documentproperties"
  [closeOnClick]="true"
  image="<svg style='width: 16px; height: 16px; margin-top: 3px' viewBox='0 0 16 16'><path fill='currentColor' d='M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zM8 2a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6z' /><path fill='currentColor' d='M8 7a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z' /><circle fill='currentColor' cx='8' cy='5' r='1.188' /></svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], null, {
    show: [{
      type: Input
    }]
  });
})();
var PdfNoSpreadComponent = class {
  constructor(notificationService, ngZone) {
    this.notificationService = notificationService;
    this.ngZone = ngZone;
    this.show = true;
    this.spread = "off";
    this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
      this.onPdfJsInit();
    });
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("spreadmodechanged", (event) => {
      this.ngZone.run(() => {
        const modes = ["off", "odd", "even"];
        this.spread = modes[event.mode];
      });
    });
  }
  onClick() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.pdfViewer.spreadMode = 0;
  }
};
PdfNoSpreadComponent.\u0275fac = function PdfNoSpreadComponent_Factory(t) {
  return new (t || PdfNoSpreadComponent)(\u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(NgZone));
};
PdfNoSpreadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfNoSpreadComponent,
  selectors: [["pdf-no-spread"]],
  inputs: {
    show: "show",
    scrollMode: "scrollMode"
  },
  decls: 2,
  vars: 9,
  consts: [["title", "Do not join page spreads", "primaryToolbarId", "spreadNone", "l10nId", "spread_none", "l10nLabel", "spread_none_label", "image", "<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M6 3c-1 0-1.5.5-1.5 1.5v7c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5v-7c0-1-.5-1.5-1.5-1.5z' /></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick", "disabled"]],
  template: function PdfNoSpreadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 6, ctx.show, "always-in-secondary-menu"))("toggled", ctx.spread === "off")("action", ctx.onClick)("order", 2e3)("closeOnClick", false)("disabled", ctx.scrollMode === 1);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c2]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfNoSpreadComponent, [{
    type: Component,
    args: [{
      selector: "pdf-no-spread",
      template: `<pdf-shy-button
  [cssClass]="show | responsiveCSSClass : 'always-in-secondary-menu'"
  title="Do not join page spreads"
  primaryToolbarId="spreadNone"
  l10nId="spread_none"
  [toggled]="spread === 'off'"
  [action]="onClick"
  l10nLabel="spread_none_label"
  [order]="2000"
  [closeOnClick]="false"
  [disabled]="scrollMode === 1"
  image="<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M6 3c-1 0-1.5.5-1.5 1.5v7c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5v-7c0-1-.5-1.5-1.5-1.5z' /></svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }, {
      type: NgZone
    }];
  }, {
    show: [{
      type: Input
    }],
    scrollMode: [{
      type: Input
    }]
  });
})();
var PdfOddSpreadComponent = class {
  constructor(notificationService, ngZone) {
    this.notificationService = notificationService;
    this.ngZone = ngZone;
    this.show = true;
    this.spread = "off";
    this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
      this.onPdfJsInit();
    });
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("spreadmodechanged", (event) => {
      this.ngZone.run(() => {
        const modes = ["off", "odd", "even"];
        this.spread = modes[event.mode];
      });
    });
  }
  onClick() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.pdfViewer.spreadMode = 1;
  }
};
PdfOddSpreadComponent.\u0275fac = function PdfOddSpreadComponent_Factory(t) {
  return new (t || PdfOddSpreadComponent)(\u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(NgZone));
};
PdfOddSpreadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfOddSpreadComponent,
  selectors: [["pdf-odd-spread"]],
  inputs: {
    show: "show",
    scrollMode: "scrollMode"
  },
  decls: 2,
  vars: 9,
  consts: [["title", "Join page spreads starting with odd-numbered pages", "primaryToolbarId", "spreadOdd", "l10nId", "spread_odd", "l10nLabel", "spread_odd_label", "image", "<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M10.56 3.5C9.56 3.5 9 4 9 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.93 1.2c.8 0 1.4.2 1.8.64.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.44-.2.3-.6.6-1 .93l-.6.4c-.4.3-.6.4-.7.55-.1.1-.2.2-.3.4h3.2v1.27h-5c0-.5.1-1 .3-1.43.2-.49.7-1 1.5-1.54.7-.5 1.1-.8 1.3-1.02.3-.3.4-.7.4-1.05 0-.3-.1-.6-.3-.77-.2-.2-.4-.3-.7-.3-.4 0-.7.2-.9.5-.1.2-.1.5-.2.9h-1.4c0-.6.2-1.1.3-1.5.4-.7 1.1-1.1 2-1.1zM1.54 3.5C.54 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.54 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.8 1.125H4.5V12H3V6.9H1.3v-1c.5 0 .8 0 .97-.03.33-.07.53-.17.73-.37.1-.2.2-.3.25-.5.05-.2.05-.3.05-.3z' /></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick", "disabled"]],
  template: function PdfOddSpreadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 6, ctx.show, "always-in-secondary-menu"))("toggled", ctx.spread === "odd")("action", ctx.onClick)("order", 2100)("closeOnClick", false)("disabled", ctx.scrollMode === 1);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c2]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfOddSpreadComponent, [{
    type: Component,
    args: [{
      selector: "pdf-odd-spread",
      template: `<pdf-shy-button
  [cssClass]="show | responsiveCSSClass : 'always-in-secondary-menu'"
  title="Join page spreads starting with odd-numbered pages"
  primaryToolbarId="spreadOdd"
  [toggled]="spread === 'odd'"
  l10nId="spread_odd"
  [action]="onClick"
  l10nLabel="spread_odd_label"
  [order]="2100"
  [closeOnClick]="false"
  [disabled]="scrollMode === 1"
  image="<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M10.56 3.5C9.56 3.5 9 4 9 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.93 1.2c.8 0 1.4.2 1.8.64.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.44-.2.3-.6.6-1 .93l-.6.4c-.4.3-.6.4-.7.55-.1.1-.2.2-.3.4h3.2v1.27h-5c0-.5.1-1 .3-1.43.2-.49.7-1 1.5-1.54.7-.5 1.1-.8 1.3-1.02.3-.3.4-.7.4-1.05 0-.3-.1-.6-.3-.77-.2-.2-.4-.3-.7-.3-.4 0-.7.2-.9.5-.1.2-.1.5-.2.9h-1.4c0-.6.2-1.1.3-1.5.4-.7 1.1-1.1 2-1.1zM1.54 3.5C.54 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.54 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.8 1.125H4.5V12H3V6.9H1.3v-1c.5 0 .8 0 .97-.03.33-.07.53-.17.73-.37.1-.2.2-.3.25-.5.05-.2.05-.3.05-.3z' /></svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }, {
      type: NgZone
    }];
  }, {
    show: [{
      type: Input
    }],
    scrollMode: [{
      type: Input
    }]
  });
})();
var PdfEvenSpreadComponent = class {
  constructor(notificationService, ngZone) {
    this.notificationService = notificationService;
    this.ngZone = ngZone;
    this.show = true;
    this.spread = "off";
    this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
      this.onPdfJsInit();
    });
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("spreadmodechanged", (event) => {
      this.ngZone.run(() => {
        const modes = ["off", "odd", "even"];
        this.spread = modes[event.mode];
      });
    });
  }
  onClick() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.pdfViewer.spreadMode = 2;
  }
};
PdfEvenSpreadComponent.\u0275fac = function PdfEvenSpreadComponent_Factory(t) {
  return new (t || PdfEvenSpreadComponent)(\u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(NgZone));
};
PdfEvenSpreadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfEvenSpreadComponent,
  selectors: [["pdf-even-spread"]],
  inputs: {
    show: "show",
    scrollMode: "scrollMode"
  },
  decls: 2,
  vars: 9,
  consts: [["title", "Join page spreads starting with even-numbered pages", "primaryToolbarId", "spreadEven", "l10nId", "spread_even", "l10nLabel", "spread_even_label", "image", "<svg style='width: 24px; height: 24px; margin-top: 3px'><path fill='currentColor' d='M1.5 3.5C.5 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm2 1.2c.8 0 1.4.2 1.8.6.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.4-.2.3-.5.7-1 1l-.6.4c-.4.3-.6.4-.75.56-.15.14-.25.24-.35.44H6v1.3H1c0-.6.1-1.1.3-1.5.3-.6.7-1 1.5-1.6.7-.4 1.1-.8 1.28-1 .32-.3.42-.6.42-1 0-.3-.1-.6-.23-.8-.17-.2-.37-.3-.77-.3s-.7.1-.9.5c-.04.2-.1.5-.1.9H1.1c0-.6.1-1.1.3-1.5.4-.7 1.1-1.1 2.1-1.1zM10.54 3.54C9.5 3.54 9 4 9 5v6.5c0 1 .5 1.5 1.54 1.5h4c.96 0 1.46-.5 1.46-1.5V5c0-1-.5-1.46-1.5-1.46zm1.9.95c.7 0 1.3.2 1.7.5.4.4.6.8.6 1.4 0 .4-.1.8-.4 1.1-.2.2-.3.3-.5.4.1 0 .3.1.6.3.4.3.5.8.5 1.4 0 .6-.2 1.2-.6 1.6-.4.5-1.1.7-1.9.7-1 0-1.8-.3-2.2-1-.14-.29-.24-.69-.24-1.29h1.4c0 .3 0 .5.1.7.2.4.5.5 1 .5.3 0 .5-.1.7-.3.2-.2.3-.5.3-.8 0-.5-.2-.8-.6-.95-.2-.05-.5-.15-1-.15v-1c.5 0 .8-.1 1-.14.3-.1.5-.4.5-.9 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.7-.3-.3 0-.6.1-.75.3-.2.2-.2.5-.2.86h-1.34c0-.4.1-.7.19-1.1 0-.12.2-.32.4-.62.2-.2.4-.3.7-.4.3-.1.6-.1 1-.1z'/></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick", "disabled"]],
  template: function PdfEvenSpreadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 6, ctx.show, "always-in-secondary-menu"))("toggled", ctx.spread === "even")("action", ctx.onClick)("order", 2200)("closeOnClick", false)("disabled", ctx.scrollMode === 1);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c2]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfEvenSpreadComponent, [{
    type: Component,
    args: [{
      selector: "pdf-even-spread",
      template: `<pdf-shy-button
  [cssClass]="show | responsiveCSSClass : 'always-in-secondary-menu'"
  [toggled]="spread === 'even'"
  title="Join page spreads starting with even-numbered pages"
  primaryToolbarId="spreadEven"
  l10nId="spread_even"
  [action]="onClick"
  l10nLabel="spread_even_label"
  [order]="2200"
  [closeOnClick]="false"
  [disabled]="scrollMode === 1"
  image="<svg style='width: 24px; height: 24px; margin-top: 3px'><path fill='currentColor' d='M1.5 3.5C.5 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm2 1.2c.8 0 1.4.2 1.8.6.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.4-.2.3-.5.7-1 1l-.6.4c-.4.3-.6.4-.75.56-.15.14-.25.24-.35.44H6v1.3H1c0-.6.1-1.1.3-1.5.3-.6.7-1 1.5-1.6.7-.4 1.1-.8 1.28-1 .32-.3.42-.6.42-1 0-.3-.1-.6-.23-.8-.17-.2-.37-.3-.77-.3s-.7.1-.9.5c-.04.2-.1.5-.1.9H1.1c0-.6.1-1.1.3-1.5.4-.7 1.1-1.1 2.1-1.1zM10.54 3.54C9.5 3.54 9 4 9 5v6.5c0 1 .5 1.5 1.54 1.5h4c.96 0 1.46-.5 1.46-1.5V5c0-1-.5-1.46-1.5-1.46zm1.9.95c.7 0 1.3.2 1.7.5.4.4.6.8.6 1.4 0 .4-.1.8-.4 1.1-.2.2-.3.3-.5.4.1 0 .3.1.6.3.4.3.5.8.5 1.4 0 .6-.2 1.2-.6 1.6-.4.5-1.1.7-1.9.7-1 0-1.8-.3-2.2-1-.14-.29-.24-.69-.24-1.29h1.4c0 .3 0 .5.1.7.2.4.5.5 1 .5.3 0 .5-.1.7-.3.2-.2.3-.5.3-.8 0-.5-.2-.8-.6-.95-.2-.05-.5-.15-1-.15v-1c.5 0 .8-.1 1-.14.3-.1.5-.4.5-.9 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.7-.3-.3 0-.6.1-.75.3-.2.2-.2.5-.2.86h-1.34c0-.4.1-.7.19-1.1 0-.12.2-.32.4-.62.2-.2.4-.3.7-.4.3-.1.6-.1 1-.1z'/></svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }, {
      type: NgZone
    }];
  }, {
    show: [{
      type: Input
    }],
    scrollMode: [{
      type: Input
    }]
  });
})();
var ScrollMode;
(function(ScrollMode2) {
  ScrollMode2[ScrollMode2["UNKNOWN"] = -1] = "UNKNOWN";
  ScrollMode2[ScrollMode2["VERTICAL"] = 0] = "VERTICAL";
  ScrollMode2[ScrollMode2["HORIZONTAL"] = 1] = "HORIZONTAL";
  ScrollMode2[ScrollMode2["WRAPPED"] = 2] = "WRAPPED";
  ScrollMode2[ScrollMode2["PAGE"] = 3] = "PAGE";
  ScrollMode2[ScrollMode2["INFINITE"] = 4] = "INFINITE";
})(ScrollMode || (ScrollMode = {}));
var PdfSinglePageModeComponent = class {
  constructor(notificationService, ngZone) {
    this.notificationService = notificationService;
    this.ngZone = ngZone;
    this.show = true;
    this.pageViewModeChange = new EventEmitter();
    this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
      this.onPdfJsInit();
    });
    this.onClick = () => {
      ngZone.run(() => {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch("switchscrollmode", {
          mode: ScrollMode.PAGE
        });
      });
    };
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("switchscrollmode", (event) => {
      this.ngZone.run(() => {
        this.scrollMode = event.mode;
      });
    });
  }
};
PdfSinglePageModeComponent.\u0275fac = function PdfSinglePageModeComponent_Factory(t) {
  return new (t || PdfSinglePageModeComponent)(\u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(NgZone));
};
PdfSinglePageModeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfSinglePageModeComponent,
  selectors: [["pdf-single-page-mode"]],
  inputs: {
    show: "show",
    scrollMode: "scrollMode",
    pageViewMode: "pageViewMode"
  },
  outputs: {
    pageViewModeChange: "pageViewModeChange"
  },
  decls: 2,
  vars: 8,
  consts: [["title", "Use Page Scrolling", "primaryToolbarId", "scrollPage", "l10nId", "scroll_page", "l10nLabel", "scroll_page_label", "image", "<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M10,7V9H12V17H14V7H10Z' /></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick"]],
  template: function PdfSinglePageModeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 5, ctx.show, "always-in-secondary-menu"))("toggled", ctx.scrollMode == 3)("action", ctx.onClick)("order", 3e3)("closeOnClick", false);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c2]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfSinglePageModeComponent, [{
    type: Component,
    args: [{
      selector: "pdf-single-page-mode",
      template: `<pdf-shy-button
  [cssClass]="show | responsiveCSSClass : 'always-in-secondary-menu'"
  title="Use Page Scrolling"
  primaryToolbarId="scrollPage"
  [toggled]="scrollMode == 3"
  l10nId="scroll_page"
  [action]="onClick"
  l10nLabel="scroll_page_label"
  [order]="3000"
  [closeOnClick]="false"
  image="<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M10,7V9H12V17H14V7H10Z' /></svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }, {
      type: NgZone
    }];
  }, {
    show: [{
      type: Input
    }],
    scrollMode: [{
      type: Input
    }],
    pageViewMode: [{
      type: Input
    }],
    pageViewModeChange: [{
      type: Output
    }]
  });
})();
var PdfVerticalScrollModeComponent = class {
  constructor(notificationService, ngZone) {
    this.notificationService = notificationService;
    this.ngZone = ngZone;
    this.show = true;
    this.pageViewModeChange = new EventEmitter();
    this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
      this.onPdfJsInit();
    });
    const emitter = this.pageViewModeChange;
    this.onClick = () => {
      this.ngZone.run(() => {
        if (this.pageViewMode !== "multiple" && this.pageViewMode !== "infinite-scroll") {
          emitter.emit("multiple");
        }
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch("switchscrollmode", {
          mode: ScrollMode.VERTICAL
        });
      });
    };
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("switchscrollmode", (event) => {
      this.ngZone.run(() => {
        this.scrollMode = event.mode;
      });
    });
  }
};
PdfVerticalScrollModeComponent.\u0275fac = function PdfVerticalScrollModeComponent_Factory(t) {
  return new (t || PdfVerticalScrollModeComponent)(\u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(NgZone));
};
PdfVerticalScrollModeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfVerticalScrollModeComponent,
  selectors: [["pdf-vertical-scroll-mode"]],
  inputs: {
    show: "show",
    scrollMode: "scrollMode",
    pageViewMode: "pageViewMode"
  },
  outputs: {
    pageViewModeChange: "pageViewModeChange"
  },
  decls: 2,
  vars: 8,
  consts: [["title", "Use Vertical Scrolling", "primaryToolbarId", "scrollVertical", "l10nId", "scroll_vertical", "l10nLabel", "scroll_vertical_label", "image", "<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM11 0v.5c0 1-.5 1.5-1.5 1.5h-3C5.5 2 5 1.5 5 .5V0h6zM11 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6z' /></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick"]],
  template: function PdfVerticalScrollModeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 5, ctx.show, "always-in-secondary-menu"))("toggled", ctx.scrollMode == 0 && ctx.pageViewMode !== "book")("action", ctx.onClick)("order", 3100)("closeOnClick", false);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c2]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfVerticalScrollModeComponent, [{
    type: Component,
    args: [{
      selector: "pdf-vertical-scroll-mode",
      template: `<pdf-shy-button
  [cssClass]="show | responsiveCSSClass : 'always-in-secondary-menu'"
  title="Use Vertical Scrolling"
  primaryToolbarId="scrollVertical"
  l10nId="scroll_vertical"
  [toggled]="scrollMode == 0 && pageViewMode !== 'book'"
  [action]="onClick"
  l10nLabel="scroll_vertical_label"
  [order]="3100"
  [closeOnClick]="false"
  image="<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM11 0v.5c0 1-.5 1.5-1.5 1.5h-3C5.5 2 5 1.5 5 .5V0h6zM11 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6z' /></svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }, {
      type: NgZone
    }];
  }, {
    show: [{
      type: Input
    }],
    scrollMode: [{
      type: Input
    }],
    pageViewMode: [{
      type: Input
    }],
    pageViewModeChange: [{
      type: Output
    }]
  });
})();
var PdfHorizontalScrollComponent = class {
  constructor(notificationService, ngZone) {
    this.notificationService = notificationService;
    this.ngZone = ngZone;
    this.show = true;
    this.pageViewModeChange = new EventEmitter();
    this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
      this.onPdfJsInit();
    });
    const emitter = this.pageViewModeChange;
    this.onClick = () => {
      this.ngZone.run(() => {
        if (this.pageViewMode !== "multiple" && this.pageViewMode !== "infinite-scroll") {
          emitter.emit("multiple");
        }
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch("switchscrollmode", {
          mode: ScrollMode.HORIZONTAL
        });
      });
    };
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("switchscrollmode", (event) => {
      this.ngZone.run(() => {
        this.scrollMode = event.mode;
      });
    });
  }
};
PdfHorizontalScrollComponent.\u0275fac = function PdfHorizontalScrollComponent_Factory(t) {
  return new (t || PdfHorizontalScrollComponent)(\u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(NgZone));
};
PdfHorizontalScrollComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfHorizontalScrollComponent,
  selectors: [["pdf-horizontal-scroll"]],
  inputs: {
    show: "show",
    scrollMode: "scrollMode",
    pageViewMode: "pageViewMode"
  },
  outputs: {
    pageViewModeChange: "pageViewModeChange"
  },
  decls: 2,
  vars: 8,
  consts: [["title", "Use Horizontal Scrolling", "primaryToolbarId", "scrollHorizontal", "l10nId", "scroll_horizontal", "l10nLabel", "scroll_horizontal_label", "image", "<svg style='width: 24px; height: 24px; margin-top: 3px'> <path fill='currentColor' d='M0 4h1.5c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5H0zM9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM16 4h-1.5c-1 0-1.5.5-1.5 1.5v5c0 1 .5 1.5 1.5 1.5H16z' /> </svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick"]],
  template: function PdfHorizontalScrollComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 5, ctx.show, "always-in-secondary-menu"))("toggled", ctx.scrollMode == 1)("action", ctx.onClick)("order", 3200)("closeOnClick", false);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c2]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfHorizontalScrollComponent, [{
    type: Component,
    args: [{
      selector: "pdf-horizontal-scroll",
      template: `<pdf-shy-button
  [cssClass]="show | responsiveCSSClass : 'always-in-secondary-menu'"
  title="Use Horizontal Scrolling"
  primaryToolbarId="scrollHorizontal"
  l10nId="scroll_horizontal"
  [toggled]="scrollMode == 1"
  [action]="onClick"
  l10nLabel="scroll_horizontal_label"
  [order]="3200"
  [closeOnClick]="false"
  image="<svg style='width: 24px; height: 24px; margin-top: 3px'> <path fill='currentColor' d='M0 4h1.5c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5H0zM9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM16 4h-1.5c-1 0-1.5.5-1.5 1.5v5c0 1 .5 1.5 1.5 1.5H16z' /> </svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }, {
      type: NgZone
    }];
  }, {
    show: [{
      type: Input
    }],
    scrollMode: [{
      type: Input
    }],
    pageViewMode: [{
      type: Input
    }],
    pageViewModeChange: [{
      type: Output
    }]
  });
})();
var PdfWrappedScrollModeComponent = class {
  constructor(notificationService, ngZone) {
    this.notificationService = notificationService;
    this.ngZone = ngZone;
    this.show = true;
    this.pageViewModeChange = new EventEmitter();
    this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
      this.onPdfJsInit();
    });
    const emitter = this.pageViewModeChange;
    this.onClick = () => {
      this.ngZone.run(() => {
        if (this.pageViewMode !== "multiple" && this.pageViewMode !== "infinite-scroll") {
          emitter.emit("multiple");
        }
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch("switchscrollmode", {
          mode: ScrollMode.WRAPPED
        });
      });
    };
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("switchscrollmode", (event) => {
      this.ngZone.run(() => {
        this.scrollMode = event.mode;
      });
    });
  }
};
PdfWrappedScrollModeComponent.\u0275fac = function PdfWrappedScrollModeComponent_Factory(t) {
  return new (t || PdfWrappedScrollModeComponent)(\u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(NgZone));
};
PdfWrappedScrollModeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfWrappedScrollModeComponent,
  selectors: [["pdf-wrapped-scroll-mode"]],
  inputs: {
    show: "show",
    scrollMode: "scrollMode",
    pageViewMode: "pageViewMode"
  },
  outputs: {
    pageViewModeChange: "pageViewModeChange"
  },
  decls: 2,
  vars: 8,
  consts: [["title", "Wrapped Scrolling", "primaryToolbarId", "scrollWrapped", "l10nId", "scroll_wrapped", "l10nLabel", "scroll_wrapped_label", "image", "<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C1 4.5 1.5 4 2.5 4zM7 0v.5C7 1.5 6.5 2 5.5 2h-3C1.5 2 1 1.5 1 .5V0h6zM7 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6zM13.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5c0-1 .5-1.5 1.5-1.5zM15 0v.5c0 1-.5 1.5-1.5 1.5h-3C9.5 2 9 1.5 9 .5V0h6zM15 16v-.507c0-1-.5-1.5-1.5-1.5h-3C9.5 14 9 14.5 9 15.5v.5h6z' /></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick"]],
  template: function PdfWrappedScrollModeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 5, ctx.show, "always-in-secondary-menu"))("toggled", ctx.scrollMode == 2)("action", ctx.onClick)("order", 3300)("closeOnClick", false);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c2]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfWrappedScrollModeComponent, [{
    type: Component,
    args: [{
      selector: "pdf-wrapped-scroll-mode",
      template: `<pdf-shy-button
  [cssClass]="show | responsiveCSSClass : 'always-in-secondary-menu'"
  title="Wrapped Scrolling"
  primaryToolbarId="scrollWrapped"
  [toggled]="scrollMode == 2"
  l10nId="scroll_wrapped"
  [action]="onClick"
  l10nLabel="scroll_wrapped_label"
  [order]="3300"
  [closeOnClick]="false"
  image="<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C1 4.5 1.5 4 2.5 4zM7 0v.5C7 1.5 6.5 2 5.5 2h-3C1.5 2 1 1.5 1 .5V0h6zM7 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6zM13.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5c0-1 .5-1.5 1.5-1.5zM15 0v.5c0 1-.5 1.5-1.5 1.5h-3C9.5 2 9 1.5 9 .5V0h6zM15 16v-.507c0-1-.5-1.5-1.5-1.5h-3C9.5 14 9 14.5 9 15.5v.5h6z' /></svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }, {
      type: NgZone
    }];
  }, {
    show: [{
      type: Input
    }],
    scrollMode: [{
      type: Input
    }],
    pageViewMode: [{
      type: Input
    }],
    pageViewModeChange: [{
      type: Output
    }]
  });
})();
var PdfInfiniteScrollComponent = class {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.show = true;
    this.pageViewModeChange = new EventEmitter();
    const emitter = this.pageViewModeChange;
    this.onClick = () => {
      this.ngZone.run(() => {
        if (this.pageViewMode === "infinite-scroll") {
          emitter.emit("multiple");
        } else {
          const PDFViewerApplication = window.PDFViewerApplication;
          if (this.scrollMode !== ScrollModeType.wrapped && this.scrollMode !== ScrollModeType.vertical) {
            PDFViewerApplication.eventBus.dispatch("switchscrollmode", {
              mode: ScrollMode.VERTICAL
            });
          }
          emitter.emit("infinite-scroll");
        }
      });
    };
  }
};
PdfInfiniteScrollComponent.\u0275fac = function PdfInfiniteScrollComponent_Factory(t) {
  return new (t || PdfInfiniteScrollComponent)(\u0275\u0275directiveInject(NgZone));
};
PdfInfiniteScrollComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfInfiniteScrollComponent,
  selectors: [["pdf-infinite-scroll"]],
  inputs: {
    show: "show",
    pageViewMode: "pageViewMode",
    scrollMode: "scrollMode"
  },
  outputs: {
    pageViewModeChange: "pageViewModeChange"
  },
  decls: 2,
  vars: 8,
  consts: [["title", "Infinite scroll", "primaryToolbarId", "infiniteScroll", "l10nLabel", "infinite_scroll_label", "image", "<svg xmlns='http://www.w3.org/2000/svg' height= '24' viewBox= '0 -960 960 960' width='24'><path d= 'M212-260q-90 0-151-65.5T0-482q0-90 61.5-154T212-700q36 0 69.5 12t59.5 37l93 90-42 42-89-87q-18-18-41.5-26t-49.5-8q-64 0-108 46.5T60-482q0 66 43.5 114T212-320q25 0 48.5-8t42.5-25l316-298q26-25 59.5-37t68.5-12q90 0 151.5 64T960-482q0 91-61.5 156.5T747-260q-35 0-69-11.5T619-308l-91-90 42-42 87 87q17 17 41 25t49 8q65 0 109-48t44-114q0-65-44.5-111.5T747-640q-25 0-48.5 9T657-605L341-307q-26 24-60 35.5T212-260Z '/></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick"]],
  template: function PdfInfiniteScrollComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 5, ctx.show, "always-in-secondary-menu"))("toggled", ctx.pageViewMode == "infinite-scroll")("action", ctx.onClick)("order", 3400)("closeOnClick", false);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c2]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfInfiniteScrollComponent, [{
    type: Component,
    args: [{
      selector: "pdf-infinite-scroll",
      template: `<pdf-shy-button
  [cssClass]="show | responsiveCSSClass : 'always-in-secondary-menu'"
  title="Infinite scroll"
  primaryToolbarId="infiniteScroll"
  [toggled]="pageViewMode == 'infinite-scroll'"
  [action]="onClick"
  l10nLabel="infinite_scroll_label"
  [order]="3400"
  [closeOnClick]="false"
  image="<svg xmlns='http://www.w3.org/2000/svg' height= '24' viewBox= '0 -960 960 960' width='24'><path d= 'M212-260q-90 0-151-65.5T0-482q0-90 61.5-154T212-700q36 0 69.5 12t59.5 37l93 90-42 42-89-87q-18-18-41.5-26t-49.5-8q-64 0-108 46.5T60-482q0 66 43.5 114T212-320q25 0 48.5-8t42.5-25l316-298q26-25 59.5-37t68.5-12q90 0 151.5 64T960-482q0 91-61.5 156.5T747-260q-35 0-69-11.5T619-308l-91-90 42-42 87 87q17 17 41 25t49 8q65 0 109-48t44-114q0-65-44.5-111.5T747-640q-25 0-48.5 9T657-605L341-307q-26 24-60 35.5T212-260Z '/></svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: NgZone
    }];
  }, {
    show: [{
      type: Input
    }],
    pageViewMode: [{
      type: Input
    }],
    scrollMode: [{
      type: Input
    }],
    pageViewModeChange: [{
      type: Output
    }]
  });
})();
var PdfBookModeComponent = class {
  constructor() {
    this.show = true;
    this.pageViewModeChange = new EventEmitter();
    const emitter = this.pageViewModeChange;
    this.onClick = () => {
      setTimeout(() => {
        emitter.emit("book");
      });
    };
  }
};
PdfBookModeComponent.\u0275fac = function PdfBookModeComponent_Factory(t) {
  return new (t || PdfBookModeComponent)();
};
PdfBookModeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfBookModeComponent,
  selectors: [["pdf-book-mode"]],
  inputs: {
    show: "show",
    pageViewMode: "pageViewMode",
    scrollMode: "scrollMode"
  },
  outputs: {
    pageViewModeChange: "pageViewModeChange"
  },
  decls: 2,
  vars: 8,
  consts: [["title", "Book mode", "primaryToolbarId", "book-mode", "image", "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M560-574v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-610q-38 0-73 9.5T560-574Zm0 220v-49q33-13.5 67.5-20.25T700-430q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-390q-38 0-73 9t-67 27Zm0-110v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-500q-38 0-73 9.5T560-464ZM248-300q53.566 0 104.283 12.5T452-250v-427q-45-30-97.619-46.5Q301.763-740 248-740q-38 0-74.5 9.5T100-707v434q31-14 70.5-20.5T248-300Zm264 50q50-25 98-37.5T712-300q38 0 78.5 6t69.5 16v-429q-34-17-71.822-25-37.823-8-76.178-8-54 0-104.5 16.5T512-677v427Zm-30 90q-51-38-111-58.5T248-239q-36.537 0-71.768 9Q141-221 106-208q-23.1 11-44.55-3Q40-225 40-251v-463q0-15 7-27.5T68-761q42-20 87.395-29.5Q200.789-800 248-800q63 0 122.5 17T482-731q51-35 109.5-52T712-800q46.868 0 91.934 9.5Q849-781 891-761q14 7 21.5 19.5T920-714v463q0 27.894-22.5 42.447Q875-194 853-208q-34-14-69.232-22.5Q748.537-239 712-239q-63 0-121 21t-109 58ZM276-489Z'/></svg>", 3, "cssClass", "toggled", "action", "order", "closeOnClick"]],
  template: function PdfBookModeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 5, ctx.show, "always-in-secondary-menu"))("toggled", ctx.pageViewMode == "book")("action", ctx.onClick)("order", 3400)("closeOnClick", false);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c2]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfBookModeComponent, [{
    type: Component,
    args: [{
      selector: "pdf-book-mode",
      template: `<pdf-shy-button [cssClass]="show | responsiveCSSClass : 'always-in-secondary-menu'" title="Book mode"
  primaryToolbarId="book-mode" [toggled]="pageViewMode == 'book'" [action]="onClick" [order]="3400"
  [closeOnClick]="false"
  image="<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M560-574v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-610q-38 0-73 9.5T560-574Zm0 220v-49q33-13.5 67.5-20.25T700-430q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-390q-38 0-73 9t-67 27Zm0-110v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-500q-38 0-73 9.5T560-464ZM248-300q53.566 0 104.283 12.5T452-250v-427q-45-30-97.619-46.5Q301.763-740 248-740q-38 0-74.5 9.5T100-707v434q31-14 70.5-20.5T248-300Zm264 50q50-25 98-37.5T712-300q38 0 78.5 6t69.5 16v-429q-34-17-71.822-25-37.823-8-76.178-8-54 0-104.5 16.5T512-677v427Zm-30 90q-51-38-111-58.5T248-239q-36.537 0-71.768 9Q141-221 106-208q-23.1 11-44.55-3Q40-225 40-251v-463q0-15 7-27.5T68-761q42-20 87.395-29.5Q200.789-800 248-800q63 0 122.5 17T482-731q51-35 109.5-52T712-800q46.868 0 91.934 9.5Q849-781 891-761q14 7 21.5 19.5T920-714v463q0 27.894-22.5 42.447Q875-194 853-208q-34-14-69.232-22.5Q748.537-239 712-239q-63 0-121 21t-109 58ZM276-489Z'/></svg>">
</pdf-shy-button>`,
      styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [];
  }, {
    show: [{
      type: Input
    }],
    pageViewMode: [{
      type: Input
    }],
    scrollMode: [{
      type: Input
    }],
    pageViewModeChange: [{
      type: Output
    }]
  });
})();
var PdfHandToolComponent = class {
  constructor(notificationService) {
    this.notificationService = notificationService;
    this.showHandToolButton = true;
    this.isSelected = false;
    const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
      this.onPdfJsInit();
      subscription.unsubscribe();
    });
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("cursortoolchanged", ({
      tool
    }) => this.isSelected = tool === PdfCursorTools.HAND);
  }
  onClick() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.dispatch("switchcursortool", {
      tool: PdfCursorTools.HAND
    });
  }
};
PdfHandToolComponent.\u0275fac = function PdfHandToolComponent_Factory(t) {
  return new (t || PdfHandToolComponent)(\u0275\u0275directiveInject(PDFNotificationService));
};
PdfHandToolComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfHandToolComponent,
  selectors: [["pdf-hand-tool"]],
  inputs: {
    showHandToolButton: "showHandToolButton"
  },
  decls: 2,
  vars: 7,
  consts: [["primaryToolbarId", "primaryCursorHandTool", "title", "Enable hand tool", "l10nId", "cursor_hand_tool", "l10nLabel", "cursor_hand_tool_label", "image", "<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'> <path fill='currentColor' d='M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z'/></svg>", 3, "action", "toggled", "cssClass", "order"]],
  template: function PdfHandToolComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("action", ctx.onClick)("toggled", ctx.isSelected)("cssClass", \u0275\u0275pipeBind2(1, 4, ctx.showHandToolButton, "hiddenXXLView"))("order", 1200);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: ["[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}.toggled[_ngcontent-%COMP%]{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button[_ngcontent-%COMP%]{padding:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfHandToolComponent, [{
    type: Component,
    args: [{
      selector: "pdf-hand-tool",
      template: `<pdf-shy-button
  [action]="onClick"
  [toggled]="isSelected"
  primaryToolbarId="primaryCursorHandTool"
  [cssClass]="showHandToolButton | responsiveCSSClass : 'hiddenXXLView'"
  title="Enable hand tool"
  l10nId="cursor_hand_tool"
  l10nLabel="cursor_hand_tool_label"
  [order]="1200"
  image="<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'> <path fill='currentColor' d='M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z'/></svg>"
>
</pdf-shy-button>
`,
      styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button{padding:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }];
  }, {
    showHandToolButton: [{
      type: Input
    }]
  });
})();
var PdfSelectToolComponent = class {
  constructor(notificationService) {
    this.notificationService = notificationService;
    this.showSelectToolButton = true;
    this.isSelected = true;
    const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
      this.onPdfJsInit();
      subscription.unsubscribe();
    });
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("cursortoolchanged", ({
      tool
    }) => this.isSelected = tool === PdfCursorTools.SELECT);
  }
  onClick() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.dispatch("switchcursortool", {
      tool: PdfCursorTools.SELECT
    });
  }
};
PdfSelectToolComponent.\u0275fac = function PdfSelectToolComponent_Factory(t) {
  return new (t || PdfSelectToolComponent)(\u0275\u0275directiveInject(PDFNotificationService));
};
PdfSelectToolComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfSelectToolComponent,
  selectors: [["pdf-select-tool"]],
  inputs: {
    showSelectToolButton: "showSelectToolButton"
  },
  decls: 2,
  vars: 7,
  consts: [["primaryToolbarId", "primaryCursorSelectTool", "title", "Enable text selection tool", "l10nId", "cursor_text_select_tool", "l10nLabel", "cursor_text_select_tool_label", "image", "<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'><path fill='currentColor' d='M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z'/></svg>", 3, "action", "toggled", "cssClass", "order"]],
  template: function PdfSelectToolComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("action", ctx.onClick)("toggled", ctx.isSelected)("cssClass", \u0275\u0275pipeBind2(1, 4, ctx.showSelectToolButton, "hiddenXXLView"))("order", 1100);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: ["[_nghost-%COMP%]{margin-top:0;margin-right:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}.toggled[_ngcontent-%COMP%]{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button[_ngcontent-%COMP%]{padding:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfSelectToolComponent, [{
    type: Component,
    args: [{
      selector: "pdf-select-tool",
      template: `<pdf-shy-button
  [action]="onClick"
  [toggled]="isSelected"
  primaryToolbarId="primaryCursorSelectTool"
  [cssClass]="showSelectToolButton | responsiveCSSClass : 'hiddenXXLView'"
  title="Enable text selection tool"
  l10nId="cursor_text_select_tool"
  l10nLabel="cursor_text_select_tool_label"
  image="<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'><path fill='currentColor' d='M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z'/></svg>"
  [order]="1100"
>
</pdf-shy-button>
`,
      styles: [":host{margin-top:0;margin-right:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button{padding:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }];
  }, {
    showSelectToolButton: [{
      type: Input
    }]
  });
})();
var PdfRotatePageComponent = class {
  constructor(notificationService, changeDetectorRef) {
    this.notificationService = notificationService;
    this.changeDetectorRef = changeDetectorRef;
    this.showRotateButton = true;
    this.disableRotate = true;
    this.clockwise = true;
    this.counterClockwise = true;
    const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
      this.onPdfJsInit();
      subscription.unsubscribe();
    });
  }
  rotateCW() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.dispatch("rotatecw");
  }
  rotateCCW() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.dispatch("rotateccw");
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("updateuistate", (event) => this.updateUIState(event));
  }
  updateUIState(event) {
    this.disableRotate = event.pagesCount === 0;
    this.changeDetectorRef.markForCheck();
  }
};
PdfRotatePageComponent.\u0275fac = function PdfRotatePageComponent_Factory(t) {
  return new (t || PdfRotatePageComponent)(\u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
PdfRotatePageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfRotatePageComponent,
  selectors: [["pdf-rotate-page"]],
  inputs: {
    showRotateButton: "showRotateButton",
    clockwise: "clockwise",
    counterClockwise: "counterClockwise"
  },
  decls: 2,
  vars: 2,
  consts: [["primaryToolbarId", "primaryPageRotateCw", "class", "rotateCw", "title", "Rotate Clockwise", "l10nId", "page_rotate_cw", "l10nLabel", "page_rotate_cw_label", "image", "<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3'/></svg>", 3, "action", "cssClass", "disabled", "order", "closeOnClick", 4, "ngIf"], ["primaryToolbarId", "primaryPageRotateCcw", "class", "rotateCcw", "title", "Rotate Counterclockwise", "l10nId", "page_rotate_ccw", "l10nLabel", "page_rotate_ccw_label", "image", "<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3'/></svg>", 3, "action", "cssClass", "disabled", "order", "closeOnClick", 4, "ngIf"], ["primaryToolbarId", "primaryPageRotateCw", "title", "Rotate Clockwise", "l10nId", "page_rotate_cw", "l10nLabel", "page_rotate_cw_label", "image", "<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3'/></svg>", 1, "rotateCw", 3, "action", "cssClass", "disabled", "order", "closeOnClick"], ["primaryToolbarId", "primaryPageRotateCcw", "title", "Rotate Counterclockwise", "l10nId", "page_rotate_ccw", "l10nLabel", "page_rotate_ccw_label", "image", "<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3'/></svg>", 1, "rotateCcw", 3, "action", "cssClass", "disabled", "order", "closeOnClick"]],
  template: function PdfRotatePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PdfRotatePageComponent_pdf_shy_button_0_Template, 2, 8, "pdf-shy-button", 0)(1, PdfRotatePageComponent_pdf_shy_button_1_Template, 2, 8, "pdf-shy-button", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.clockwise);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.counterClockwise);
    }
  },
  dependencies: [PdfShyButtonComponent, NgIf, ResponsiveCSSClassPipe],
  styles: ["[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0;margin-top:0;margin-bottom:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfRotatePageComponent, [{
    type: Component,
    args: [{
      selector: "pdf-rotate-page",
      template: `<pdf-shy-button
  *ngIf="clockwise"
  [action]="rotateCW"
  primaryToolbarId="primaryPageRotateCw"
  class="rotateCw"
  [cssClass]="showRotateButton | responsiveCSSClass : 'hiddenXLView'"
  title="Rotate Clockwise"
  l10nId="page_rotate_cw"
  l10nLabel="page_rotate_cw_label"
  [disabled]="disableRotate"
  [order]="900"
  [closeOnClick]="false"
  image="<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3'/></svg>"
>
</pdf-shy-button>
<pdf-shy-button
  *ngIf="counterClockwise"
  [action]="rotateCCW"
  primaryToolbarId="primaryPageRotateCcw"
  class="rotateCcw"
  [cssClass]="showRotateButton | responsiveCSSClass : 'hiddenXLView'"
  title="Rotate Counterclockwise"
  l10nId="page_rotate_ccw"
  l10nLabel="page_rotate_ccw_label"
  [disabled]="disableRotate"
  [order]="1000"
  [closeOnClick]="false"
  image="<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3'/></svg>"
>
</pdf-shy-button>
`,
      styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    showRotateButton: [{
      type: Input
    }],
    clockwise: [{
      type: Input
    }],
    counterClockwise: [{
      type: Input
    }]
  });
})();
var PdfPresentationModeComponent = class {
  constructor() {
    this.showPresentationModeButton = true;
  }
};
PdfPresentationModeComponent.\u0275fac = function PdfPresentationModeComponent_Factory(t) {
  return new (t || PdfPresentationModeComponent)();
};
PdfPresentationModeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfPresentationModeComponent,
  selectors: [["pdf-presentation-mode"]],
  inputs: {
    showPresentationModeButton: "showPresentationModeButton"
  },
  decls: 2,
  vars: 5,
  consts: [["primaryToolbarId", "presentationMode", "title", "Switch to Presentation Mode", "l10nId", "presentation_mode", "l10nLabel", "presentation_mode_label", "image", "<svg style='width: 27px; height: 27px; margin-top: -2px' viewBox='0 0 24 24'><path fill='currentColor' d='M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z' /></svg>", 3, "cssClass", "order"]],
  template: function PdfPresentationModeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 2, ctx.showPresentationModeButton, "hiddenLargeView"))("order", 100);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: ["[_nghost-%COMP%]   button.toolbarButton[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfPresentationModeComponent, [{
    type: Component,
    args: [{
      selector: "pdf-presentation-mode",
      template: `<pdf-shy-button
  primaryToolbarId="presentationMode"
  [cssClass]="showPresentationModeButton | responsiveCSSClass : 'hiddenLargeView'"
  title="Switch to Presentation Mode"
  l10nId="presentation_mode"
  l10nLabel="presentation_mode_label"
  [order]="100"
  image="<svg style='width: 27px; height: 27px; margin-top: -2px' viewBox='0 0 24 24'><path fill='currentColor' d='M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z' /></svg>"
>
</pdf-shy-button>
`,
      styles: [":host button.toolbarButton{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"]
    }]
  }], null, {
    showPresentationModeButton: [{
      type: Input
    }]
  });
})();
var PdfOpenFileComponent = class {
  constructor() {
    this.showOpenFileButton = true;
  }
};
PdfOpenFileComponent.\u0275fac = function PdfOpenFileComponent_Factory(t) {
  return new (t || PdfOpenFileComponent)();
};
PdfOpenFileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfOpenFileComponent,
  selectors: [["pdf-open-file"]],
  inputs: {
    showOpenFileButton: "showOpenFileButton"
  },
  decls: 2,
  vars: 5,
  consts: [["primaryToolbarId", "openFile", "title", "Open File", "l10nId", "open_file", "l10nLabel", "open_file_label", "image", "<svg style='width: 24px; height: 20px' viewBox='0 0 24 24'><path fill='currentColor' d='M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z' /></svg>", 3, "cssClass", "order"]],
  template: function PdfOpenFileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 2, ctx.showOpenFileButton, "hiddenMediumView"))("order", 200);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: ["[_nghost-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfOpenFileComponent, [{
    type: Component,
    args: [{
      selector: "pdf-open-file",
      template: `<pdf-shy-button
  [cssClass]="showOpenFileButton | responsiveCSSClass : 'hiddenMediumView'"
  primaryToolbarId="openFile"
  title="Open File"
  l10nId="open_file"
  l10nLabel="open_file_label"
  image="<svg style='width: 24px; height: 20px' viewBox='0 0 24 24'><path fill='currentColor' d='M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z' /></svg>"
  [order]="200"
>
</pdf-shy-button>
`,
      styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"]
    }]
  }], null, {
    showOpenFileButton: [{
      type: Input
    }]
  });
})();
var PdfPrintComponent = class {
  constructor() {
    this.showPrintButton = true;
  }
};
PdfPrintComponent.\u0275fac = function PdfPrintComponent_Factory(t) {
  return new (t || PdfPrintComponent)();
};
PdfPrintComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfPrintComponent,
  selectors: [["pdf-print"]],
  inputs: {
    showPrintButton: "showPrintButton"
  },
  decls: 2,
  vars: 5,
  consts: [["primaryToolbarId", "print", "title", "Print", "l10nId", "print", "l10nLabel", "print", "image", "<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'><path fill='currentColor' d='M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z' /></svg>", 3, "cssClass", "order"]],
  template: function PdfPrintComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 2, ctx.showPrintButton, "hiddenSmallView"))("order", 300);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c5]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfPrintComponent, [{
    type: Component,
    args: [{
      selector: "pdf-print",
      template: `<pdf-shy-button
  primaryToolbarId="print"
  [cssClass]="showPrintButton | responsiveCSSClass : 'hiddenSmallView'"
  title="Print"
  l10nId="print"
  l10nLabel="print"
  [order]="300"
  image="<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'><path fill='currentColor' d='M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z' /></svg>"
>
</pdf-shy-button>
`,
      styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0;margin-top:0;margin-bottom:0}\n"]
    }]
  }], null, {
    showPrintButton: [{
      type: Input
    }]
  });
})();
var PdfDownloadComponent = class {
  constructor() {
    this.showDownloadButton = true;
  }
};
PdfDownloadComponent.\u0275fac = function PdfDownloadComponent_Factory(t) {
  return new (t || PdfDownloadComponent)();
};
PdfDownloadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfDownloadComponent,
  selectors: [["pdf-download"]],
  inputs: {
    showDownloadButton: "showDownloadButton"
  },
  decls: 4,
  vars: 5,
  consts: [["primaryToolbarId", "download", "title", "Download", "l10nId", "save", "l10nLabel", "save", "image", "<svg style= 'width: 20px; height: 20px ' viewBox= '0 0 24 24 '><path fill= 'currentColor ' d= 'M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z ' /></svg>", 3, "cssClass", "order"], ["data-l10n-id", "save_label"]],
  template: function PdfDownloadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
      \u0275\u0275elementStart(2, "span", 1);
      \u0275\u0275text(3, "Download");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 2, ctx.showDownloadButton, "hiddenSmallView"))("order", 400);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: [_c6]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfDownloadComponent, [{
    type: Component,
    args: [{
      selector: "pdf-download",
      template: `<pdf-shy-button
  primaryToolbarId="download"
  [cssClass]="showDownloadButton | responsiveCSSClass : 'hiddenSmallView'"
  title="Download"
  l10nId="save"
  l10nLabel="save"
  image="<svg style= 'width: 20px; height: 20px ' viewBox= '0 0 24 24 '><path fill= 'currentColor ' d= 'M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z ' /></svg>"
  [order]="400"
>
  <span data-l10n-id="save_label">Download</span>
</pdf-shy-button>
`,
      styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"]
    }]
  }], null, {
    showDownloadButton: [{
      type: Input
    }]
  });
})();
var PdfStampEditorComponent = class {
  constructor(notificationService) {
    this.notificationService = notificationService;
    this.show = true;
    this.isSelected = false;
    const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
      this.onPdfJsInit();
      subscription.unsubscribe();
    });
  }
  get pdfJsVersion() {
    return getVersionSuffix(pdfDefaultOptions.assetsFolder);
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("annotationeditormodechanged", ({
      mode
    }) => this.isSelected = mode === 13);
  }
  onClick() {
    document.getElementById("editorStamp")?.click();
  }
};
PdfStampEditorComponent.\u0275fac = function PdfStampEditorComponent_Factory(t) {
  return new (t || PdfStampEditorComponent)(\u0275\u0275directiveInject(PDFNotificationService));
};
PdfStampEditorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfStampEditorComponent,
  selectors: [["pdf-stamp-editor"]],
  inputs: {
    show: "show"
  },
  decls: 3,
  vars: 9,
  consts: [["title", "Text", "primaryToolbarId", "primaryEditorStamp", "l10nId", "editor_stamp1", "l10nLabel", "editor_stamp1_label", "image", "<svg style='width: 20px; height: 20px' viewBox='0 0 24 24'> <path fill='currentColor' d='M13 19C13 19.7 13.13 20.37 13.35 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5V13.35C20.37 13.13 19.7 13 19 13V5H5V19H13M13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H13.35C13.75 15.88 14.47 14.91 15.4 14.21L13.96 12.29M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z' /> </svg>", 3, "cssClass", "order", "action", "toggled", "closeOnClick"], ["class", "editorParamsToolbar hidden doorHangerRight", "id", "editorStampParamsToolbar", 3, "class", 4, "ngIf"], ["id", "editorStampParamsToolbar", 1, "editorParamsToolbar", "hidden", "doorHangerRight"], [1, "editorParamsToolbarContainer"], ["id", "editorStampAddImage", "title", "Add image", "tabindex", "105", "data-l10n-id", "editor_stamp_add_image", "aria-label", "Add image", 1, "secondaryToolbarButton"], ["role", "img", "aria-label", "Add image", "width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.00488 9.75V14C7.00488 14.1658 7.07073 14.3247 7.18794 14.4419C7.30515 14.5592 7.46412 14.625 7.62988 14.625C7.79564 14.625 7.95461 14.5592 8.07183 14.4419C8.18904 14.3247 8.25488 14.1658 8.25488 14V9.75L8.75488 9.25H13.0049C13.1706 9.25 13.3296 9.18415 13.4468 9.06694C13.564 8.94973 13.6299 8.79076 13.6299 8.625C13.6299 8.45924 13.564 8.30027 13.4468 8.18306C13.3296 8.06585 13.1706 8 13.0049 8H8.75488L8.25488 7.5V3.25C8.25488 3.08424 8.18904 2.92527 8.07183 2.80806C7.95461 2.69085 7.79564 2.625 7.62988 2.625C7.46412 2.625 7.30515 2.69085 7.18794 2.80806C7.07073 2.92527 7.00488 3.08424 7.00488 3.25V7.5L6.50488 8H2.25488C2.08912 8 1.93015 8.06585 1.81294 8.18306C1.69573 8.30027 1.62988 8.45924 1.62988 8.625C1.62988 8.79076 1.69573 8.94973 1.81294 9.06694C1.93015 9.18415 2.08912 9.25 2.25488 9.25H6.39188L7.00488 9.75Z", "fill", "black"], ["data-l10n-id", "editor_stamp_add_image_label"]],
  template: function PdfStampEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
      \u0275\u0275template(2, PdfStampEditorComponent_div_2_Template, 8, 5, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 6, ctx.show, "hiddenTinyView"))("order", 4200)("action", ctx.onClick)("toggled", ctx.isSelected)("closeOnClick", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.pdfJsVersion >= "3.10");
    }
  },
  dependencies: [PdfShyButtonComponent, NgIf, ResponsiveCSSClassPipe],
  styles: ["button[_ngcontent-%COMP%]{padding:0;height:25px;background-color:transparent}button[_ngcontent-%COMP%]:focus{outline:none;border:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfStampEditorComponent, [{
    type: Component,
    args: [{
      selector: "pdf-stamp-editor",
      template: `<pdf-shy-button
  title="Text"
  primaryToolbarId="primaryEditorStamp"
  [cssClass]="show | responsiveCSSClass : 'hiddenTinyView'"
  l10nId="editor_stamp1"
  l10nLabel="editor_stamp1_label"
  [order]="4200"
  [action]="onClick"
  [toggled]="isSelected"
  [closeOnClick]="true"
  image="<svg style='width: 20px; height: 20px' viewBox='0 0 24 24'> <path fill='currentColor' d='M13 19C13 19.7 13.13 20.37 13.35 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5V13.35C20.37 13.13 19.7 13 19 13V5H5V19H13M13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H13.35C13.75 15.88 14.47 14.91 15.4 14.21L13.96 12.29M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z' /> </svg>"
>
</pdf-shy-button>
<div
  class="editorParamsToolbar hidden doorHangerRight"
  id="editorStampParamsToolbar"
  [class]="show | responsiveCSSClass : 'hiddenTinyView'"
  *ngIf="pdfJsVersion >= '3.10'"
>
  <div class="editorParamsToolbarContainer">
    <button
      id="editorStampAddImage"
      class="secondaryToolbarButton"
      title="Add image"
      tabindex="105"
      data-l10n-id="editor_stamp_add_image"
      aria-label="Add image"
    >
      <svg role="img" aria-label="Add image" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.00488 9.75V14C7.00488 14.1658 7.07073 14.3247 7.18794 14.4419C7.30515 14.5592 7.46412 14.625 7.62988 14.625C7.79564 14.625 7.95461 14.5592 8.07183 14.4419C8.18904 14.3247 8.25488 14.1658 8.25488 14V9.75L8.75488 9.25H13.0049C13.1706 9.25 13.3296 9.18415 13.4468 9.06694C13.564 8.94973 13.6299 8.79076 13.6299 8.625C13.6299 8.45924 13.564 8.30027 13.4468 8.18306C13.3296 8.06585 13.1706 8 13.0049 8H8.75488L8.25488 7.5V3.25C8.25488 3.08424 8.18904 2.92527 8.07183 2.80806C7.95461 2.69085 7.79564 2.625 7.62988 2.625C7.46412 2.625 7.30515 2.69085 7.18794 2.80806C7.07073 2.92527 7.00488 3.08424 7.00488 3.25V7.5L6.50488 8H2.25488C2.08912 8 1.93015 8.06585 1.81294 8.18306C1.69573 8.30027 1.62988 8.45924 1.62988 8.625C1.62988 8.79076 1.69573 8.94973 1.81294 9.06694C1.93015 9.18415 2.08912 9.25 2.25488 9.25H6.39188L7.00488 9.75Z"
          fill="black"
        />
      </svg>
      <span data-l10n-id="editor_stamp_add_image_label">Add image</span>
    </button>
  </div>
</div>
`,
      styles: ["button{padding:0;height:25px;background-color:transparent}button:focus{outline:none;border:none}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }];
  }, {
    show: [{
      type: Input
    }]
  });
})();
var PdfTextEditorComponent = class {
  constructor(notificationService) {
    this.notificationService = notificationService;
    this.show = true;
    this.isSelected = false;
    const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
      this.onPdfJsInit();
      subscription.unsubscribe();
    });
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("annotationeditormodechanged", ({
      mode
    }) => this.isSelected = mode === 3);
  }
  onClick() {
    document.getElementById("editorFreeText")?.click();
  }
};
PdfTextEditorComponent.\u0275fac = function PdfTextEditorComponent_Factory(t) {
  return new (t || PdfTextEditorComponent)(\u0275\u0275directiveInject(PDFNotificationService));
};
PdfTextEditorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfTextEditorComponent,
  selectors: [["pdf-text-editor"]],
  inputs: {
    show: "show"
  },
  decls: 2,
  vars: 8,
  consts: [["title", "Draw", "primaryToolbarId", "primaryEditorFreeText", "l10nId", "editor_free_text2", "l10nLabel", "editor_free_text2_label", "image", "<svg style='width: 20px; height: 20px' viewBox='0 0 24 24'> <path fill='currentColor' d='M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z' /> </svg>", 3, "cssClass", "order", "action", "toggled", "closeOnClick"]],
  template: function PdfTextEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 5, ctx.show, "hiddenTinyView"))("order", 4100)("action", ctx.onClick)("toggled", ctx.isSelected)("closeOnClick", true);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: ["button[_ngcontent-%COMP%]{padding:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfTextEditorComponent, [{
    type: Component,
    args: [{
      selector: "pdf-text-editor",
      template: `<pdf-shy-button
  title="Draw"
  primaryToolbarId="primaryEditorFreeText"
  [cssClass]="show | responsiveCSSClass : 'hiddenTinyView'"
  l10nId="editor_free_text2"
  l10nLabel="editor_free_text2_label"
  [order]="4100"
  [action]="onClick"
  [toggled]="isSelected"
  [closeOnClick]="true"
  image="<svg style='width: 20px; height: 20px' viewBox='0 0 24 24'> <path fill='currentColor' d='M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z' /> </svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }];
  }, {
    show: [{
      type: Input
    }]
  });
})();
var PdfDrawEditorComponent = class {
  constructor(notificationService) {
    this.notificationService = notificationService;
    this.show = true;
    this.isSelected = false;
    const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
      this.onPdfJsInit();
      subscription.unsubscribe();
    });
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("annotationeditormodechanged", ({
      mode
    }) => this.isSelected = mode === 15);
  }
  onClick() {
    document.getElementById("editorInk")?.click();
  }
};
PdfDrawEditorComponent.\u0275fac = function PdfDrawEditorComponent_Factory(t) {
  return new (t || PdfDrawEditorComponent)(\u0275\u0275directiveInject(PDFNotificationService));
};
PdfDrawEditorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfDrawEditorComponent,
  selectors: [["pdf-draw-editor"]],
  inputs: {
    show: "show"
  },
  decls: 2,
  vars: 8,
  consts: [["title", "Draw", "primaryToolbarId", "primaryEditorInk", "l10nId", "editor_ink2", "l10nLabel", "editor_ink2_label", "image", "<svg style='width: 20px; height: 20px' version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' xmlns:xlink='http://www.w3.org/1999/xlink' enable-background='new 0 0 16 16' > <g> <g transform='scale(0.03125)'>  <path  d='m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z'  /> </g> </g> </svg>", 3, "cssClass", "order", "action", "toggled", "closeOnClick"]],
  template: function PdfDrawEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "pdf-shy-button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
    }
    if (rf & 2) {
      \u0275\u0275property("cssClass", \u0275\u0275pipeBind2(1, 5, ctx.show, "hiddenTinyView"))("order", 4e3)("action", ctx.onClick)("toggled", ctx.isSelected)("closeOnClick", true);
    }
  },
  dependencies: [PdfShyButtonComponent, ResponsiveCSSClassPipe],
  styles: ["button[_ngcontent-%COMP%]{padding:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfDrawEditorComponent, [{
    type: Component,
    args: [{
      selector: "pdf-draw-editor",
      template: `<pdf-shy-button
  title="Draw"
  primaryToolbarId="primaryEditorInk"
  [cssClass]="show | responsiveCSSClass : 'hiddenTinyView'"
  l10nId="editor_ink2"
  l10nLabel="editor_ink2_label"
  [order]="4000"
  [action]="onClick"
  [toggled]="isSelected"
  [closeOnClick]="true"
  image="<svg style='width: 20px; height: 20px' version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' xmlns:xlink='http://www.w3.org/1999/xlink' enable-background='new 0 0 16 16' > <g> <g transform='scale(0.03125)'>  <path  d='m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z'  /> </g> </g> </svg>"
>
</pdf-shy-button>
`,
      styles: ["button{padding:0}\n"]
    }]
  }], function() {
    return [{
      type: PDFNotificationService
    }];
  }, {
    show: [{
      type: Input
    }]
  });
})();
var PdfEditorComponent = class {
  constructor() {
    this.showDrawEditor = true;
    this.showTextEditor = true;
    this.showStampEditor = true;
  }
};
PdfEditorComponent.\u0275fac = function PdfEditorComponent_Factory(t) {
  return new (t || PdfEditorComponent)();
};
PdfEditorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfEditorComponent,
  selectors: [["pdf-editor"]],
  inputs: {
    showDrawEditor: "showDrawEditor",
    showTextEditor: "showTextEditor",
    showStampEditor: "showStampEditor"
  },
  decls: 2,
  vars: 2,
  consts: [["id", "editorModeButtons", "class", "splitToolbarButton toggled hiddenTinyView", "role", "radiogroup", 4, "ngIf"], ["id", "editorModeSeparator", "class", "verticalToolbarSeparator hiddenTinyView", 4, "ngIf"], ["id", "editorModeButtons", "role", "radiogroup", 1, "splitToolbarButton", "toggled", "hiddenTinyView"], [3, "show"], ["id", "editorModeSeparator", 1, "verticalToolbarSeparator", "hiddenTinyView"]],
  template: function PdfEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PdfEditorComponent_div_0_Template, 4, 3, "div", 0)(1, PdfEditorComponent_div_1_Template, 1, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !!ctx.showStampEditor || !!ctx.showDrawEditor || !!ctx.showTextEditor);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !!ctx.showStampEditor || !!ctx.showDrawEditor || !!ctx.showTextEditor);
    }
  },
  dependencies: [PdfStampEditorComponent, PdfTextEditorComponent, PdfDrawEditorComponent, NgIf],
  styles: ["button[_ngcontent-%COMP%]{padding:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfEditorComponent, [{
    type: Component,
    args: [{
      selector: "pdf-editor",
      template: '<div\n  id="editorModeButtons"\n  class="splitToolbarButton toggled hiddenTinyView"\n  role="radiogroup"\n  *ngIf="!!showStampEditor || !!showDrawEditor || !!showTextEditor"\n>\n  <pdf-stamp-editor [show]="showStampEditor"></pdf-stamp-editor>\n  <pdf-text-editor [show]="showTextEditor"></pdf-text-editor>\n  <pdf-draw-editor [show]="showDrawEditor"></pdf-draw-editor>\n</div>\n\n<div id="editorModeSeparator" class="verticalToolbarSeparator hiddenTinyView" *ngIf="!!showStampEditor || !!showDrawEditor || !!showTextEditor"></div>\n',
      styles: ["button{padding:0}\n"]
    }]
  }], null, {
    showDrawEditor: [{
      type: Input
    }],
    showTextEditor: [{
      type: Input
    }],
    showStampEditor: [{
      type: Input
    }]
  });
})();
var PdfToggleSecondaryToolbarComponent = class {
  constructor(service) {
    this.service = service;
    this.showSecondaryToolbarButton = true;
  }
  onClick(event) {
    event.preventDefault();
    return false;
  }
};
PdfToggleSecondaryToolbarComponent.\u0275fac = function PdfToggleSecondaryToolbarComponent_Factory(t) {
  return new (t || PdfToggleSecondaryToolbarComponent)(\u0275\u0275directiveInject(NgxExtendedPdfViewerService));
};
PdfToggleSecondaryToolbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfToggleSecondaryToolbarComponent,
  selectors: [["pdf-toggle-secondary-toolbar"]],
  inputs: {
    showSecondaryToolbarButton: "showSecondaryToolbarButton"
  },
  decls: 6,
  vars: 7,
  consts: [["type", "button", "id", "secondaryToolbarToggle", "title", "Tools", "data-l10n-id", "tools", "aria-label", "Tools", 1, "toolbarButton"], ["role", "img", "aria-label", "Tools", "viewBox", "0 0 24 24", 2, "width", "27px", "height", "27px", 3, "click"], ["fill", "currentColor", "d", "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"], ["data-l10n-id", "tools_label"]],
  template: function PdfToggleSecondaryToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275pipe(1, "responsiveCSSClass");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 1);
      \u0275\u0275listener("click", function PdfToggleSecondaryToolbarComponent_Template_svg_click_2_listener($event) {
        return ctx.onClick($event);
      });
      \u0275\u0275element(3, "path", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5, "Tools");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(\u0275\u0275pipeBind2(1, 4, ctx.showSecondaryToolbarButton, "always-visible"));
      \u0275\u0275classProp("hidden", ctx.service.secondaryMenuIsEmpty);
    }
  },
  dependencies: [ResponsiveCSSClassPipe],
  styles: ["button[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-top:-3px}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfToggleSecondaryToolbarComponent, [{
    type: Component,
    args: [{
      selector: "pdf-toggle-secondary-toolbar",
      template: `<button
  type="button"
  [class]="showSecondaryToolbarButton | responsiveCSSClass : 'always-visible'"
  id="secondaryToolbarToggle"
  class="toolbarButton"
  title="Tools"
  data-l10n-id="tools"
  aria-label="Tools"
  [class.hidden]="service.secondaryMenuIsEmpty"
>
  <svg role="img" aria-label="Tools" style="width: 27px; height: 27px" viewBox="0 0 24 24" (click)="onClick($event)">
    <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
  </svg>
  <span data-l10n-id="tools_label">Tools</span>
</button>
`,
      styles: ["button>svg{margin-top:-3px}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"]
    }]
  }], function() {
    return [{
      type: NgxExtendedPdfViewerService
    }];
  }, {
    showSecondaryToolbarButton: [{
      type: Input
    }]
  });
})();
var PdfToolbarComponent = class {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.mobileFriendlyZoomScale = 1;
    this.primaryMenuVisible = true;
    this.showDownloadButton = true;
    this.showDrawEditor = false;
    this.showTextEditor = false;
    this.showStampEditor = false;
    this.showFindButton = void 0;
    this.showHandToolButton = true;
    this.showOpenFileButton = true;
    this.showPrintButton = true;
    this.showPagingButtons = true;
    this.showPresentationModeButton = false;
    this.showRotateButton = true;
    this.showSecondaryToolbarButton = true;
    this.showSidebarButton = true;
    this.sidebarVisible = false;
    this.showZoomButtons = true;
    this.textLayer = void 0;
    this.toolbarMarginTop = "0px";
    this.toolbarWidth = "100%";
    this.zoomLevels = ["auto", "page-actual", "page-fit", "page-width", 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
    this.pageViewModeChange = new EventEmitter();
    this.showPropertiesButton = true;
    this.showSpreadButton = true;
    this.showSinglePageModeButton = true;
    this.showVerticalScrollButton = true;
    this.showHorizontalScrollButton = true;
    this.showWrappedScrollButton = true;
    this.showInfiniteScrollButton = true;
    this.showBookModeButton = true;
    this.onToolbarLoaded = new EventEmitter();
    this.findbarVisible = false;
  }
  ngAfterViewInit() {
    this.onToolbarLoaded.emit(this.elementRef.nativeElement.getElementsByClassName("toolbar")[0]);
  }
  updatePageViewMode(pageViewMode) {
    if (pageViewMode) {
      this.pageViewModeChange.emit(pageViewMode);
      this.pageViewMode = pageViewMode;
    }
  }
};
PdfToolbarComponent.\u0275fac = function PdfToolbarComponent_Factory(t) {
  return new (t || PdfToolbarComponent)(\u0275\u0275directiveInject(ElementRef));
};
PdfToolbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfToolbarComponent,
  selectors: [["pdf-toolbar"]],
  inputs: {
    customToolbar: "customToolbar",
    mobileFriendlyZoomScale: "mobileFriendlyZoomScale",
    primaryMenuVisible: "primaryMenuVisible",
    showDownloadButton: "showDownloadButton",
    showDrawEditor: "showDrawEditor",
    showTextEditor: "showTextEditor",
    showStampEditor: "showStampEditor",
    showFindButton: "showFindButton",
    showHandToolButton: "showHandToolButton",
    showOpenFileButton: "showOpenFileButton",
    showPrintButton: "showPrintButton",
    showPagingButtons: "showPagingButtons",
    showPresentationModeButton: "showPresentationModeButton",
    showRotateButton: "showRotateButton",
    showSecondaryToolbarButton: "showSecondaryToolbarButton",
    showSidebarButton: "showSidebarButton",
    sidebarVisible: "sidebarVisible",
    showZoomButtons: "showZoomButtons",
    textLayer: "textLayer",
    toolbarMarginTop: "toolbarMarginTop",
    toolbarWidth: "toolbarWidth",
    zoomLevels: "zoomLevels",
    pageViewMode: "pageViewMode",
    spread: "spread",
    scrollMode: "scrollMode",
    showPropertiesButton: "showPropertiesButton",
    showSpreadButton: "showSpreadButton",
    showSinglePageModeButton: "showSinglePageModeButton",
    showVerticalScrollButton: "showVerticalScrollButton",
    showHorizontalScrollButton: "showHorizontalScrollButton",
    showWrappedScrollButton: "showWrappedScrollButton",
    showInfiniteScrollButton: "showInfiniteScrollButton",
    showBookModeButton: "showBookModeButton",
    findbarVisible: "findbarVisible"
  },
  outputs: {
    pageViewModeChange: "pageViewModeChange",
    onToolbarLoaded: "onToolbarLoaded"
  },
  ngContentSelectors: _c1,
  decls: 8,
  vars: 11,
  consts: [["defaultToolbar", ""], [1, "toolbar"], ["id", "toolbarContainer"], [4, "ngTemplateOutlet"], ["id", "loadingBar"], [1, "progress"], [1, "glimmer"], ["id", "toolbarViewer"], ["id", "toolbarViewerLeft"], [3, "show", "sidebarVisible"], [3, "showFindButton", "textLayer", "findbarVisible"], [3, "showPagingButtons"], [3, "showZoomButtons", "zoomLevels"], ["id", "toolbarViewerRight"], [3, "show"], [3, "scrollMode", "show"], [3, "pageViewModeChange", "show", "pageViewMode", "scrollMode"], [3, "showHandToolButton"], [3, "showSelectToolButton"], [3, "showRotateButton", "clockwise", "counterClockwise"], [3, "showPresentationModeButton"], [3, "showOpenFileButton"], [3, "showPrintButton"], [3, "showDownloadButton"], [3, "showDrawEditor", "showTextEditor", "showStampEditor"], [3, "showSecondaryToolbarButton"]],
  template: function PdfToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275template(2, PdfToolbarComponent_ng_content_2_Template, 1, 0, "ng-content", 3);
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
      \u0275\u0275element(5, "div", 6);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(6, PdfToolbarComponent_ng_template_6_Template, 27, 49, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const defaultToolbar_r3 = \u0275\u0275reference(7);
      \u0275\u0275styleProp("transform", "scale(" + ctx.mobileFriendlyZoomScale + ")")("transform-origin", "left center")("width", ctx.toolbarWidth)("margin-top", ctx.toolbarMarginTop);
      \u0275\u0275classProp("invisible", !ctx.primaryMenuVisible);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngTemplateOutlet", ctx.customToolbar ? ctx.customToolbar : defaultToolbar_r3);
    }
  },
  dependencies: [PdfToggleSidebarComponent, PdfFindButtonComponent, PdfPagingAreaComponent, PdfZoomToolbarComponent, PdfDocumentPropertiesComponent, PdfNoSpreadComponent, PdfOddSpreadComponent, PdfEvenSpreadComponent, PdfSinglePageModeComponent, PdfVerticalScrollModeComponent, PdfHorizontalScrollComponent, PdfWrappedScrollModeComponent, PdfInfiniteScrollComponent, PdfBookModeComponent, PdfHandToolComponent, PdfSelectToolComponent, PdfRotatePageComponent, PdfPresentationModeComponent, PdfOpenFileComponent, PdfPrintComponent, PdfDownloadComponent, PdfEditorComponent, PdfToggleSecondaryToolbarComponent, NgTemplateOutlet]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfToolbarComponent, [{
    type: Component,
    args: [{
      selector: "pdf-toolbar",
      template: `<div
  class="toolbar"
  [class.invisible]="!primaryMenuVisible"
  [style.transform]="'scale(' + mobileFriendlyZoomScale + ')'"
  [style.transformOrigin]="'left center'"
  [style.width]="toolbarWidth"
  [style.marginTop]="toolbarMarginTop"
>
  <div id="toolbarContainer">
    <ng-content *ngTemplateOutlet="customToolbar ? customToolbar : defaultToolbar"></ng-content>
    <div id="loadingBar">
      <div class="progress">
        <div class="glimmer"></div>
      </div>
    </div>
  </div>
</div>

<ng-template #defaultToolbar>
  <div id="toolbarViewer">
    <div id="toolbarViewerLeft">
      <pdf-toggle-sidebar [show]="showSidebarButton" [sidebarVisible]="sidebarVisible"></pdf-toggle-sidebar>
      <pdf-find-button [showFindButton]="showFindButton" [textLayer]="textLayer" [findbarVisible]="findbarVisible"></pdf-find-button>
      <pdf-paging-area [showPagingButtons]="showPagingButtons"></pdf-paging-area>
    </div>
    <pdf-zoom-toolbar [showZoomButtons]="showZoomButtons" [zoomLevels]="zoomLevels"></pdf-zoom-toolbar>
    <div id="toolbarViewerRight">
      <pdf-document-properties [show]="showPropertiesButton"></pdf-document-properties>
      <pdf-no-spread [scrollMode]="scrollMode" [show]="showSpreadButton"></pdf-no-spread>
      <pdf-odd-spread [scrollMode]="scrollMode" [show]="showSpreadButton"></pdf-odd-spread>
      <pdf-even-spread [scrollMode]="scrollMode" [show]="showSpreadButton"></pdf-even-spread>
      <pdf-single-page-mode
        [show]="showSinglePageModeButton"
        [pageViewMode]="pageViewMode"
        (pageViewModeChange)="updatePageViewMode($event)"
        [scrollMode]="scrollMode"
      ></pdf-single-page-mode>
      <pdf-vertical-scroll-mode
        [show]="showVerticalScrollButton"
        [pageViewMode]="pageViewMode"
        (pageViewModeChange)="updatePageViewMode($event)"
        [scrollMode]="scrollMode"
      ></pdf-vertical-scroll-mode>
      <pdf-horizontal-scroll
        [show]="showHorizontalScrollButton"
        [pageViewMode]="pageViewMode"
        (pageViewModeChange)="updatePageViewMode($event)"
        [scrollMode]="scrollMode"
      ></pdf-horizontal-scroll>
      <pdf-wrapped-scroll-mode
        [show]="showWrappedScrollButton"
        [pageViewMode]="pageViewMode"
        (pageViewModeChange)="updatePageViewMode($event)"
        [scrollMode]="scrollMode"
      ></pdf-wrapped-scroll-mode>
      <pdf-infinite-scroll
        [show]="showInfiniteScrollButton"
        [pageViewMode]="pageViewMode"
        (pageViewModeChange)="updatePageViewMode($event)"
        [scrollMode]="scrollMode"
      ></pdf-infinite-scroll>
      <pdf-book-mode
        [show]="showBookModeButton"
        [pageViewMode]="pageViewMode"
        (pageViewModeChange)="updatePageViewMode($event)"
        [scrollMode]="scrollMode"
      ></pdf-book-mode>
      <pdf-hand-tool [showHandToolButton]="showHandToolButton"></pdf-hand-tool>
      <pdf-select-tool [showSelectToolButton]="showHandToolButton"></pdf-select-tool>
      <pdf-rotate-page [showRotateButton]="showRotateButton" [clockwise]="true" [counterClockwise]="false"> </pdf-rotate-page>
      <pdf-rotate-page [showRotateButton]="showRotateButton" [clockwise]="false" [counterClockwise]="true"> </pdf-rotate-page>
      <pdf-presentation-mode [showPresentationModeButton]="showPresentationModeButton"></pdf-presentation-mode>
      <pdf-open-file [showOpenFileButton]="showOpenFileButton"></pdf-open-file>
      <pdf-print [showPrintButton]="showPrintButton"></pdf-print>
      <pdf-download [showDownloadButton]="showDownloadButton"></pdf-download>

      <pdf-editor [showDrawEditor]="showDrawEditor" [showTextEditor]="showTextEditor" [showStampEditor]="showStampEditor"></pdf-editor>
      <pdf-toggle-secondary-toolbar [showSecondaryToolbarButton]="showSecondaryToolbarButton"> </pdf-toggle-secondary-toolbar>
    </div>
  </div>
</ng-template>
`,
      styles: [""]
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    customToolbar: [{
      type: Input
    }],
    mobileFriendlyZoomScale: [{
      type: Input
    }],
    primaryMenuVisible: [{
      type: Input
    }],
    showDownloadButton: [{
      type: Input
    }],
    showDrawEditor: [{
      type: Input
    }],
    showTextEditor: [{
      type: Input
    }],
    showStampEditor: [{
      type: Input
    }],
    showFindButton: [{
      type: Input
    }],
    showHandToolButton: [{
      type: Input
    }],
    showOpenFileButton: [{
      type: Input
    }],
    showPrintButton: [{
      type: Input
    }],
    showPagingButtons: [{
      type: Input
    }],
    showPresentationModeButton: [{
      type: Input
    }],
    showRotateButton: [{
      type: Input
    }],
    showSecondaryToolbarButton: [{
      type: Input
    }],
    showSidebarButton: [{
      type: Input
    }],
    sidebarVisible: [{
      type: Input
    }],
    showZoomButtons: [{
      type: Input
    }],
    textLayer: [{
      type: Input
    }],
    toolbarMarginTop: [{
      type: Input
    }],
    toolbarWidth: [{
      type: Input
    }],
    zoomLevels: [{
      type: Input
    }],
    pageViewMode: [{
      type: Input
    }],
    pageViewModeChange: [{
      type: Output
    }],
    spread: [{
      type: Input
    }],
    scrollMode: [{
      type: Input
    }],
    showPropertiesButton: [{
      type: Input
    }],
    showSpreadButton: [{
      type: Input
    }],
    showSinglePageModeButton: [{
      type: Input
    }],
    showVerticalScrollButton: [{
      type: Input
    }],
    showHorizontalScrollButton: [{
      type: Input
    }],
    showWrappedScrollButton: [{
      type: Input
    }],
    showInfiniteScrollButton: [{
      type: Input
    }],
    showBookModeButton: [{
      type: Input
    }],
    onToolbarLoaded: [{
      type: Output
    }],
    findbarVisible: [{
      type: Input
    }]
  });
})();
var PdfSecondaryToolbarComponent = class {
  constructor(element, notificationService, platformId, pdfShyButtonService, ngxExtendedPdfViewerService) {
    this.element = element;
    this.notificationService = notificationService;
    this.platformId = platformId;
    this.pdfShyButtonService = pdfShyButtonService;
    this.ngxExtendedPdfViewerService = ngxExtendedPdfViewerService;
    this.spreadChange = new EventEmitter();
    this.disablePreviousPage = true;
    this.disableNextPage = true;
    this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
      this.onPdfJsInit();
    });
  }
  onPdfJsInit() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.on("pagechanging", () => {
      this.updateUIState();
    });
    PDFViewerApplication.eventBus.on("pagerendered", () => {
      this.updateUIState();
    });
  }
  updateUIState() {
    setTimeout(() => {
      const PDFViewerApplication = window.PDFViewerApplication;
      const currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
      const previousButton = document.getElementById("previousPage");
      if (previousButton) {
        this.disablePreviousPage = Number(currentPage) <= 1;
        previousButton.disabled = this.disablePreviousPage;
      }
      const nextButton = document.getElementById("nextPage");
      if (nextButton) {
        this.disableNextPage = currentPage === PDFViewerApplication.pagesCount;
        nextButton.disabled = this.disableNextPage;
      }
    });
  }
  onSpreadChange(newSpread) {
    this.spreadChange.emit(newSpread);
  }
  ngOnChanges(changes) {
    setTimeout(() => this.checkVisibility());
  }
  onResize() {
    setTimeout(() => this.checkVisibility());
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const targetNode = this.element.nativeElement;
      const config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      this.classMutationObserver = new MutationObserver((mutationList, observer) => {
        for (const mutation of mutationList) {
          if (mutation.type === "attributes") {
            if (mutation.attributeName === "class") {
              this.checkVisibility();
              break;
            }
          } else if (mutation.type === "childList") {
            this.checkVisibility();
            break;
          }
        }
      });
      this.classMutationObserver.observe(targetNode, config);
    }
  }
  ngOnDestroy() {
    if (this.classMutationObserver) {
      this.classMutationObserver.disconnect();
      this.classMutationObserver = void 0;
    }
  }
  checkVisibility() {
    let visibleButtons = 0;
    const e = this.element.nativeElement;
    const f = e.children.item(0);
    if (f) {
      const g = f.children.item(0);
      if (g && g instanceof HTMLElement) {
        visibleButtons = this.checkVisibilityRecursively(g);
      }
    }
    this.ngxExtendedPdfViewerService.secondaryMenuIsEmpty = visibleButtons === 0;
  }
  checkVisibilityRecursively(e) {
    if (typeof window === "undefined") {
      return 0;
    }
    if (e.style.display === "none") {
      return 0;
    }
    if (e.classList.contains("hidden")) {
      return 0;
    }
    if (e.classList.contains("invisible")) {
      return 0;
    }
    const style = window.getComputedStyle(e);
    if (style.display === "none") {
      return 0;
    }
    if (e instanceof HTMLButtonElement || e instanceof HTMLAnchorElement) {
      return 1;
    }
    let count = 0;
    const children = e.children;
    if (children?.length) {
      for (let i = 0; i < children.length && count === 0; i++) {
        const child = children.item(i);
        if (child && child instanceof HTMLElement) {
          count += this.checkVisibilityRecursively(child);
        }
      }
    }
    return count;
  }
  onClick(htmlevent, action, eventBusName, closeOnClick) {
    const PDFViewerApplication = window.PDFViewerApplication;
    const origin = htmlevent.target;
    origin?.classList.add("toggled");
    if (action) {
      action();
      htmlevent.preventDefault();
    } else if (eventBusName) {
      PDFViewerApplication.eventBus.dispatch(eventBusName);
      htmlevent.preventDefault();
    }
    if (closeOnClick) {
      PDFViewerApplication.secondaryToolbar.close();
    }
  }
};
PdfSecondaryToolbarComponent.\u0275fac = function PdfSecondaryToolbarComponent_Factory(t) {
  return new (t || PdfSecondaryToolbarComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(PdfShyButtonService), \u0275\u0275directiveInject(NgxExtendedPdfViewerService));
};
PdfSecondaryToolbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfSecondaryToolbarComponent,
  selectors: [["pdf-secondary-toolbar"]],
  hostBindings: function PdfSecondaryToolbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function PdfSecondaryToolbarComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow);
    }
  },
  inputs: {
    customSecondaryToolbar: "customSecondaryToolbar",
    secondaryToolbarTop: "secondaryToolbarTop",
    mobileFriendlyZoomScale: "mobileFriendlyZoomScale",
    localizationInitialized: "localizationInitialized"
  },
  outputs: {
    spreadChange: "spreadChange"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["defaultSecondaryToolbar", ""], [3, "ngTemplateOutlet"], ["id", "secondaryToolbar", 1, "secondaryToolbar", "hidden", "doorHangerRight"], ["id", "secondaryToolbarButtonContainer"], ["type", "button", "class", "secondaryToolbarButton", "role", "button", 3, "id", "ngClass", "toggled", "title", "click", 4, "ngFor", "ngForOf"], ["type", "button", "role", "button", 1, "secondaryToolbarButton", 3, "click", "id", "ngClass", "title"], ["class", "icon", "role", "img", "aria-hidden", "true", 3, "innerHTML", 4, "ngIf"], [1, "toolbar-caption"], ["role", "img", "aria-hidden", "true", 1, "icon", 3, "innerHTML"]],
  template: function PdfSecondaryToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 1);
      \u0275\u0275template(1, PdfSecondaryToolbarComponent_ng_template_1_Template, 3, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const defaultSecondaryToolbar_r4 = \u0275\u0275reference(2);
      \u0275\u0275property("ngTemplateOutlet", ctx.customSecondaryToolbar ? ctx.customSecondaryToolbar : defaultSecondaryToolbar_r4);
    }
  },
  dependencies: [NgTemplateOutlet, NgForOf, NgClass, NgIf, NegativeResponsiveCSSClassPipe],
  styles: ["svg[_ngcontent-%COMP%]{position:absolute;display:inline-block;top:0;left:0}.secondaryToolbarButton[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:flex-start;border:0 none;background:none;width:calc(100% - 4px);height:25px;position:relative;margin:0 0 4px;padding:3px 0 1px;min-height:25px;white-space:normal}.secondaryToolbarButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}.secondaryToolbarButton[disabled][_ngcontent-%COMP%]{opacity:.5}  html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:4px;text-align:left}  html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:4px;text-align:right}  html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}  html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbar[_ngcontent-%COMP%]{height:auto;z-index:3000}  html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}  [dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer[_ngcontent-%COMP%]{width:250px;max-height:775px;overflow-y:auto;-webkit-overflow-scrolling:touch}.toolbar-caption[_ngcontent-%COMP%]{position:relative;top:-3px}.icon[_ngcontent-%COMP%]{width:24px}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfSecondaryToolbarComponent, [{
    type: Component,
    args: [{
      selector: "pdf-secondary-toolbar",
      template: `<ng-container [ngTemplateOutlet]="customSecondaryToolbar ? customSecondaryToolbar : defaultSecondaryToolbar"> </ng-container>

<ng-template #defaultSecondaryToolbar>
  <div
    id="secondaryToolbar"
    class="secondaryToolbar hidden doorHangerRight"
    [style.top]="secondaryToolbarTop"
    [style.transform]="'scale(' + mobileFriendlyZoomScale + ')'"
    [style.transformOrigin]="'right top'"
  >
    <div id="secondaryToolbarButtonContainer">
      <button
        *ngFor="let button of pdfShyButtonService.buttons"
        type="button"
        [id]="button.id"
        [ngClass]="button.cssClass | invertForSecondaryToolbar"
        [class.toggled]="button.toggled"
        class="secondaryToolbarButton"
        [title]="button.title"
        [attr.data-l10n-id]="button.l10nId"
        (click)="onClick($event, button.action, button.eventBusName, button.closeOnClick)"
        [attr.aria-label]="button.title"
        role="button"
      >
        <span class="icon" role="img" aria-hidden="true" [attr.aria-label]="button.title" *ngIf="button.image" [innerHTML]="button.image"></span>
        <span class="toolbar-caption" [attr.data-l10n-id]="button.l10nLabel">{{ button.title }}</span>
      </button>
    </div>
  </div>
</ng-template>
`,
      styles: ["svg{position:absolute;display:inline-block;top:0;left:0}.secondaryToolbarButton{display:inline-flex;align-items:center;justify-content:flex-start;border:0 none;background:none;width:calc(100% - 4px);height:25px;position:relative;margin:0 0 4px;padding:3px 0 1px;min-height:25px;white-space:normal}.secondaryToolbarButton span{display:inline-block}.secondaryToolbarButton[disabled]{opacity:.5}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:4px;text-align:left}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:4px;text-align:right}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbar{height:auto;z-index:3000}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}::ng-deep [dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer{width:250px;max-height:775px;overflow-y:auto;-webkit-overflow-scrolling:touch}.toolbar-caption{position:relative;top:-3px}.icon{width:24px}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: PDFNotificationService
    }, {
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: PdfShyButtonService
    }, {
      type: NgxExtendedPdfViewerService
    }];
  }, {
    customSecondaryToolbar: [{
      type: Input
    }],
    secondaryToolbarTop: [{
      type: Input
    }],
    mobileFriendlyZoomScale: [{
      type: Input
    }],
    localizationInitialized: [{
      type: Input
    }],
    spreadChange: [{
      type: Output
    }],
    onResize: [{
      type: HostListener,
      args: ["window:resize"]
    }]
  });
})();
var PdfSearchInputFieldComponent = class {
};
PdfSearchInputFieldComponent.\u0275fac = function PdfSearchInputFieldComponent_Factory(t) {
  return new (t || PdfSearchInputFieldComponent)();
};
PdfSearchInputFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfSearchInputFieldComponent,
  selectors: [["pdf-search-input-field"]],
  decls: 1,
  vars: 1,
  consts: [["autocomplete", "off", "id", "findInput", "title", "Find", "data-l10n-id", "find_input", "name", "search-input-field", 1, "toolbarField", 3, "placeholder"]],
  template: function PdfSearchInputFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "input", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("placeholder", "Find in document\u2026");
    }
  },
  styles: ["textarea[_ngcontent-%COMP%]{width:200px;height:3.5em}textarea[_ngcontent-%COMP%]::placeholder{font-style:italic}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfSearchInputFieldComponent, [{
    type: Component,
    args: [{
      selector: "pdf-search-input-field",
      template: `<input
  autocomplete="off"
  id="findInput"
  class="toolbarField"
  title="Find"
  [placeholder]="'Find in document\u2026'"
  data-l10n-id="find_input"
  name="search-input-field"
/>
`,
      styles: ["textarea{width:200px;height:3.5em}textarea::placeholder{font-style:italic}\n"]
    }]
  }], null, null);
})();
var PdfFindPreviousComponent = class {
};
PdfFindPreviousComponent.\u0275fac = function PdfFindPreviousComponent_Factory(t) {
  return new (t || PdfFindPreviousComponent)();
};
PdfFindPreviousComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfFindPreviousComponent,
  selectors: [["pdf-find-previous"]],
  decls: 5,
  vars: 0,
  consts: [["type", "button", "id", "findPrevious", "title", "Find the previous occurrence of the phrase", "data-l10n-id", "find_previous", "aria-label", "Find the previous occurrence of the phrase", 1, "toolbarButton"], ["role", "img", "aria-label", "Find the previous occurrence of the phrase", "viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"], ["data-l10n-id", "find_previous_label"]],
  template: function PdfFindPreviousComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "path", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4, "Previous");
      \u0275\u0275elementEnd()();
    }
  },
  styles: ["button.toolbarButton#findPrevious[_ngcontent-%COMP%]{margin-top:0;width:24px;margin-left:1px!important}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfFindPreviousComponent, [{
    type: Component,
    args: [{
      selector: "pdf-find-previous",
      template: '<button\n  type="button"\n  id="findPrevious"\n  class="toolbarButton"\n  title="Find the previous occurrence of the phrase"\n  data-l10n-id="find_previous"\n  aria-label="Find the previous occurrence of the phrase"\n>\n  <svg role="img" aria-label="Find the previous occurrence of the phrase" style="width: 24px; height: 24px" viewBox="0 0 24 24">\n    <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />\n  </svg>\n  <span data-l10n-id="find_previous_label">Previous</span>\n</button>\n',
      styles: ["button.toolbarButton#findPrevious{margin-top:0;width:24px;margin-left:1px!important}\n"]
    }]
  }], null, null);
})();
var PdfFindNextComponent = class {
};
PdfFindNextComponent.\u0275fac = function PdfFindNextComponent_Factory(t) {
  return new (t || PdfFindNextComponent)();
};
PdfFindNextComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfFindNextComponent,
  selectors: [["pdf-find-next"]],
  decls: 5,
  vars: 0,
  consts: [["type", "button", "id", "findNext", "title", "Find the next occurrence of the phrase", "data-l10n-id", "find_next", "aria-label", "Find the next occurrence of the phrase", 1, "toolbarButton"], ["role", "img", "aria-label", "Find the next occurrence of the phrase", "viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"], ["data-l10n-id", "find_next_label"]],
  template: function PdfFindNextComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "path", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4, "Next");
      \u0275\u0275elementEnd()();
    }
  },
  styles: ["button.toolbarButton#findNext[_ngcontent-%COMP%]{margin-top:0;margin-left:-4px!important;margin-right:3px!important;width:24px}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfFindNextComponent, [{
    type: Component,
    args: [{
      selector: "pdf-find-next",
      template: '<button\n  type="button"\n  id="findNext"\n  class="toolbarButton"\n  title="Find the next occurrence of the phrase"\n  data-l10n-id="find_next"\n  aria-label="Find the next occurrence of the phrase"\n>\n  <svg role="img" aria-label="Find the next occurrence of the phrase" style="width: 24px; height: 24px" viewBox="0 0 24 24">\n    <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />\n  </svg>\n  <span data-l10n-id="find_next_label">Next</span>\n</button>\n',
      styles: ["button.toolbarButton#findNext{margin-top:0;margin-left:-4px!important;margin-right:3px!important;width:24px}\n"]
    }]
  }], null, null);
})();
var PdfFindInputAreaComponent = class {
};
PdfFindInputAreaComponent.\u0275fac = function PdfFindInputAreaComponent_Factory(t) {
  return new (t || PdfFindInputAreaComponent)();
};
PdfFindInputAreaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfFindInputAreaComponent,
  selectors: [["pdf-find-input-area"]],
  inputs: {
    customFindbarInputArea: "customFindbarInputArea"
  },
  decls: 2,
  vars: 2,
  consts: [["id", "findbarInputContainer", 4, "ngIf"], [3, "ngTemplateOutlet"], ["id", "findbarInputContainer"]],
  template: function PdfFindInputAreaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PdfFindInputAreaComponent_div_0_Template, 4, 0, "div", 0);
      \u0275\u0275elementContainer(1, 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.customFindbarInputArea);
      \u0275\u0275advance();
      \u0275\u0275property("ngTemplateOutlet", ctx.customFindbarInputArea || null);
    }
  },
  dependencies: [PdfSearchInputFieldComponent, PdfFindPreviousComponent, PdfFindNextComponent, NgIf, NgTemplateOutlet]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfFindInputAreaComponent, [{
    type: Component,
    args: [{
      selector: "pdf-find-input-area",
      template: '<div id="findbarInputContainer" *ngIf="!customFindbarInputArea">\n  <pdf-search-input-field></pdf-search-input-field>\n  <pdf-find-previous></pdf-find-previous>\n  <pdf-find-next></pdf-find-next>\n</div>\n\n<ng-container [ngTemplateOutlet]="customFindbarInputArea || null"> </ng-container>\n',
      styles: [""]
    }]
  }], null, {
    customFindbarInputArea: [{
      type: Input
    }]
  });
})();
var PdfFindHighlightAllComponent = class {
};
PdfFindHighlightAllComponent.\u0275fac = function PdfFindHighlightAllComponent_Factory(t) {
  return new (t || PdfFindHighlightAllComponent)();
};
PdfFindHighlightAllComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfFindHighlightAllComponent,
  selectors: [["pdf-find-highlight-all"]],
  decls: 3,
  vars: 0,
  consts: [["type", "checkbox", "id", "findHighlightAll", 1, "toolbarField"], ["for", "findHighlightAll", "data-l10n-id", "find_highlight", 1, "toolbarLabel"]],
  template: function PdfFindHighlightAllComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "input", 0);
      \u0275\u0275elementStart(1, "label", 1);
      \u0275\u0275text(2, " Highlight all\n");
      \u0275\u0275elementEnd();
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfFindHighlightAllComponent, [{
    type: Component,
    args: [{
      selector: "pdf-find-highlight-all",
      template: '<input\n  type="checkbox"\n  id="findHighlightAll"\n  class="toolbarField"\n/>\n<label\n  for="findHighlightAll"\n  class="toolbarLabel"\n  data-l10n-id="find_highlight">\n  Highlight all\n</label>\n',
      styles: [""]
    }]
  }], null, null);
})();
var PdfFindMatchCaseComponent = class {
};
PdfFindMatchCaseComponent.\u0275fac = function PdfFindMatchCaseComponent_Factory(t) {
  return new (t || PdfFindMatchCaseComponent)();
};
PdfFindMatchCaseComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfFindMatchCaseComponent,
  selectors: [["pdf-find-match-case"]],
  decls: 3,
  vars: 0,
  consts: [["type", "checkbox", "id", "findMatchCase", 1, "toolbarField"], ["for", "findMatchCase", "data-l10n-id", "find_match_case_label", 1, "toolbarLabel"]],
  template: function PdfFindMatchCaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "input", 0);
      \u0275\u0275elementStart(1, "label", 1);
      \u0275\u0275text(2, " Match case\n");
      \u0275\u0275elementEnd();
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfFindMatchCaseComponent, [{
    type: Component,
    args: [{
      selector: "pdf-find-match-case",
      template: '<input\n  type="checkbox"\n  id="findMatchCase"\n  class="toolbarField"\n/>\n<label\n  for="findMatchCase"\n  class="toolbarLabel"\n  data-l10n-id="find_match_case_label">\n    Match case\n</label>\n',
      styles: [""]
    }]
  }], null, null);
})();
var PdfMatchDiacriticsComponent = class {
};
PdfMatchDiacriticsComponent.\u0275fac = function PdfMatchDiacriticsComponent_Factory(t) {
  return new (t || PdfMatchDiacriticsComponent)();
};
PdfMatchDiacriticsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfMatchDiacriticsComponent,
  selectors: [["pdf-match-diacritics"]],
  decls: 3,
  vars: 0,
  consts: [["type", "checkbox", "id", "findMatchDiacritics", "tabindex", "96", 1, "toolbarField"], ["for", "findMatchDiacritics", "data-l10n-id", "find_match_diacritics_label", 1, "toolbarLabel"]],
  template: function PdfMatchDiacriticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "input", 0);
      \u0275\u0275elementStart(1, "label", 1);
      \u0275\u0275text(2, "Match Diacritics");
      \u0275\u0275elementEnd();
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfMatchDiacriticsComponent, [{
    type: Component,
    args: [{
      selector: "pdf-match-diacritics",
      template: '<input type="checkbox" id="findMatchDiacritics" class="toolbarField" tabindex="96" />\n<label for="findMatchDiacritics" class="toolbarLabel" data-l10n-id="find_match_diacritics_label">Match Diacritics</label>\n',
      styles: []
    }]
  }], null, null);
})();
var PdfFindEntireWordComponent = class {
};
PdfFindEntireWordComponent.\u0275fac = function PdfFindEntireWordComponent_Factory(t) {
  return new (t || PdfFindEntireWordComponent)();
};
PdfFindEntireWordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfFindEntireWordComponent,
  selectors: [["pdf-find-entire-word"]],
  decls: 3,
  vars: 0,
  consts: [["type", "checkbox", "id", "findEntireWord", 1, "toolbarField"], ["for", "findEntireWord", "data-l10n-id", "find_entire_word_label", 1, "toolbarLabel"]],
  template: function PdfFindEntireWordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "input", 0);
      \u0275\u0275elementStart(1, "label", 1);
      \u0275\u0275text(2, " Whole words ");
      \u0275\u0275elementEnd();
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfFindEntireWordComponent, [{
    type: Component,
    args: [{
      selector: "pdf-find-entire-word",
      template: '<input type="checkbox" id="findEntireWord" class="toolbarField" />\n<label for="findEntireWord" class="toolbarLabel" data-l10n-id="find_entire_word_label"> Whole words </label>\n',
      styles: [""]
    }]
  }], null, null);
})();
var PdfFindResultsCountComponent = class {
};
PdfFindResultsCountComponent.\u0275fac = function PdfFindResultsCountComponent_Factory(t) {
  return new (t || PdfFindResultsCountComponent)();
};
PdfFindResultsCountComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfFindResultsCountComponent,
  selectors: [["pdf-find-results-count"]],
  decls: 3,
  vars: 0,
  consts: [["id", "findbarMessageContainer", "aria-live", "polite"], ["id", "findResultsCount", 1, "toolbarLabel"], ["id", "findMsg", 1, "toolbarLabel"]],
  template: function PdfFindResultsCountComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "span", 1)(2, "span", 2);
      \u0275\u0275elementEnd();
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfFindResultsCountComponent, [{
    type: Component,
    args: [{
      selector: "pdf-find-results-count",
      template: '<div id="findbarMessageContainer" aria-live="polite">\n  <span id="findResultsCount" class="toolbarLabel"></span>\n  <span id="findMsg" class="toolbarLabel"></span>\n</div>\n',
      styles: [""]
    }]
  }], null, null);
})();
var PdfFindbarMessageContainerComponent = class {
};
PdfFindbarMessageContainerComponent.\u0275fac = function PdfFindbarMessageContainerComponent_Factory(t) {
  return new (t || PdfFindbarMessageContainerComponent)();
};
PdfFindbarMessageContainerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfFindbarMessageContainerComponent,
  selectors: [["pdf-findbar-message-container"]],
  decls: 2,
  vars: 0,
  consts: [["id", "findbarMessageContainer"], ["id", "findMsg", 1, "toolbarLabel"]],
  template: function PdfFindbarMessageContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "span", 1);
      \u0275\u0275elementEnd();
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfFindbarMessageContainerComponent, [{
    type: Component,
    args: [{
      selector: "pdf-findbar-message-container",
      template: '<div id="findbarMessageContainer">\n  <span id="findMsg" class="toolbarLabel"></span>\n</div>\n',
      styles: [""]
    }]
  }], null, null);
})();
var PdfFindbarComponent = class {
  constructor() {
    this.showFindButton = true;
    this.showFindHighlightAll = true;
    this.showFindMatchCase = true;
    this.showFindCurrentPageOnly = true;
    this.showFindPageRange = true;
    this.showFindEntireWord = true;
    this.showFindEntirePhrase = true;
    this.showFindMatchDiacritics = true;
    this.showFindFuzzySearch = true;
    this.showFindResultsCount = true;
    this.showFindMessages = true;
  }
};
PdfFindbarComponent.\u0275fac = function PdfFindbarComponent_Factory(t) {
  return new (t || PdfFindbarComponent)();
};
PdfFindbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfFindbarComponent,
  selectors: [["pdf-findbar"]],
  inputs: {
    showFindButton: "showFindButton",
    mobileFriendlyZoomScale: "mobileFriendlyZoomScale",
    findbarLeft: "findbarLeft",
    findbarTop: "findbarTop",
    customFindbarInputArea: "customFindbarInputArea",
    customFindbar: "customFindbar",
    customFindbarButtons: "customFindbarButtons",
    showFindHighlightAll: "showFindHighlightAll",
    showFindMatchCase: "showFindMatchCase",
    showFindCurrentPageOnly: "showFindCurrentPageOnly",
    showFindPageRange: "showFindPageRange",
    showFindEntireWord: "showFindEntireWord",
    showFindEntirePhrase: "showFindEntirePhrase",
    showFindMatchDiacritics: "showFindMatchDiacritics",
    showFindFuzzySearch: "showFindFuzzySearch",
    showFindResultsCount: "showFindResultsCount",
    showFindMessages: "showFindMessages"
  },
  decls: 5,
  vars: 1,
  consts: [["defaultFindbar", ""], ["defaultFindbarButtons", ""], [3, "ngTemplateOutlet"], ["id", "findbar", 1, "findbar", "hidden", "doorHanger"], [3, "customFindbarInputArea"]],
  template: function PdfFindbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainer(0, 2);
      \u0275\u0275template(1, PdfFindbarComponent_ng_template_1_Template, 2, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, PdfFindbarComponent_ng_template_3_Template, 7, 13, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const defaultFindbar_r3 = \u0275\u0275reference(2);
      \u0275\u0275property("ngTemplateOutlet", ctx.customFindbar ? ctx.customFindbar : defaultFindbar_r3);
    }
  },
  dependencies: [PdfFindInputAreaComponent, PdfFindHighlightAllComponent, PdfFindMatchCaseComponent, PdfMatchDiacriticsComponent, PdfFindEntireWordComponent, PdfFindResultsCountComponent, PdfFindbarMessageContainerComponent, NgTemplateOutlet]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfFindbarComponent, [{
    type: Component,
    args: [{
      selector: "pdf-findbar",
      template: `<ng-container [ngTemplateOutlet]="customFindbar ? customFindbar : defaultFindbar"> </ng-container>

<ng-template #defaultFindbar>
  <div
    class="findbar hidden doorHanger"
    id="findbar"
    [style.transform]="'scale(' + mobileFriendlyZoomScale + ')'"
    [style.transformOrigin]="'left top'"
    [style.left]="findbarLeft"
    [style.top]="findbarTop"
  >
    <ng-container [ngTemplateOutlet]="customFindbarButtons ? customFindbarButtons : defaultFindbarButtons"> </ng-container>
  </div>
</ng-template>

<ng-template #defaultFindbarButtons>
  <pdf-find-input-area [customFindbarInputArea]="customFindbarInputArea"></pdf-find-input-area>
  <pdf-find-highlight-all [class.hidden]="!showFindHighlightAll"></pdf-find-highlight-all>
  <pdf-find-match-case [class.hidden]="!showFindMatchCase"></pdf-find-match-case>
  <pdf-match-diacritics [class.hidden]="!showFindMatchDiacritics"></pdf-match-diacritics>
  <pdf-find-entire-word [class.hidden]="!showFindEntireWord"></pdf-find-entire-word>
  <pdf-find-results-count [class.hidden]="!showFindResultsCount"></pdf-find-results-count>
  <pdf-findbar-message-container [class.hidden]="!showFindMessages"></pdf-findbar-message-container>
</ng-template>
`,
      styles: [""]
    }]
  }], null, {
    showFindButton: [{
      type: Input
    }],
    mobileFriendlyZoomScale: [{
      type: Input
    }],
    findbarLeft: [{
      type: Input
    }],
    findbarTop: [{
      type: Input
    }],
    customFindbarInputArea: [{
      type: Input
    }],
    customFindbar: [{
      type: Input
    }],
    customFindbarButtons: [{
      type: Input
    }],
    showFindHighlightAll: [{
      type: Input
    }],
    showFindMatchCase: [{
      type: Input
    }],
    showFindCurrentPageOnly: [{
      type: Input
    }],
    showFindPageRange: [{
      type: Input
    }],
    showFindEntireWord: [{
      type: Input
    }],
    showFindEntirePhrase: [{
      type: Input
    }],
    showFindMatchDiacritics: [{
      type: Input
    }],
    showFindFuzzySearch: [{
      type: Input
    }],
    showFindResultsCount: [{
      type: Input
    }],
    showFindMessages: [{
      type: Input
    }]
  });
})();
var PdfContextMenuComponent = class {
};
PdfContextMenuComponent.\u0275fac = function PdfContextMenuComponent_Factory(t) {
  return new (t || PdfContextMenuComponent)();
};
PdfContextMenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfContextMenuComponent,
  selectors: [["pdf-context-menu"]],
  decls: 5,
  vars: 0,
  consts: [["type", "context", "id", "viewerContextMenu", 2, "display", "none"], ["id", "contextFirstPage", 2, "display", "none"], ["id", "contextLastPage", 2, "display", "none"], ["id", "contextPageRotateCw", 2, "display", "none"], ["id", "contextPageRotateCcw", 2, "display", "none"]],
  template: function PdfContextMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementEnd();
    }
  },
  styles: ["[_nghost-%COMP%]{margin-top:4px}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfContextMenuComponent, [{
    type: Component,
    args: [{
      selector: "pdf-context-menu",
      template: '<!-- the context menu is deactivated because only Firefox supports it -->\n<div style="display:none" type="context" id="viewerContextMenu">\n  <div style="display:none" id="contextFirstPage"></div>\n  <div style="display:none" id="contextLastPage"></div>\n  <div style="display:none" id="contextPageRotateCw"></div>\n  <div style="display:none" id="contextPageRotateCcw"></div>\n</div>\n',
      styles: [":host{margin-top:4px}\n"]
    }]
  }], null, null);
})();
var PdfErrorMessageComponent = class {
};
PdfErrorMessageComponent.\u0275fac = function PdfErrorMessageComponent_Factory(t) {
  return new (t || PdfErrorMessageComponent)();
};
PdfErrorMessageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfErrorMessageComponent,
  selectors: [["pdf-error-message"]],
  decls: 12,
  vars: 0,
  consts: [["id", "errorWrapper", "hidden", "true"], ["id", "errorMessageLeft"], ["id", "errorMessage"], ["type", "button", "id", "errorShowMore"], ["type", "button", "id", "errorShowLess", "hidden", "true"], ["id", "errorMessageRight"], ["type", "button", "id", "errorClose"], [1, "clearBoth"], ["id", "errorMoreInfo", "hidden", "true", "readonly", "readonly"]],
  template: function PdfErrorMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275text(4, "More Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275text(6, "Less Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275text(9, "Close");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(10, "div", 7)(11, "textarea", 8);
      \u0275\u0275elementEnd();
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfErrorMessageComponent, [{
    type: Component,
    args: [{
      selector: "pdf-error-message",
      template: '<div id="errorWrapper" hidden="true">\n  <div id="errorMessageLeft">\n    <span id="errorMessage"></span>\n    <button type="button" id="errorShowMore">More Information</button>\n    <button type="button" id="errorShowLess" hidden="true">Less Information</button>\n  </div>\n  <div id="errorMessageRight">\n    <button type="button" id="errorClose">Close</button>\n  </div>\n  <div class="clearBoth"></div>\n  <textarea id="errorMoreInfo" hidden="true" readonly="readonly"></textarea>\n</div>\n'
    }]
  }], null, null);
})();
var PdfPasswordDialogComponent = class {
};
PdfPasswordDialogComponent.\u0275fac = function PdfPasswordDialogComponent_Factory(t) {
  return new (t || PdfPasswordDialogComponent)();
};
PdfPasswordDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfPasswordDialogComponent,
  selectors: [["pdf-password-dialog"]],
  decls: 13,
  vars: 0,
  consts: [["id", "passwordDialog"], [1, "row"], ["for", "password", "id", "passwordText", "data-l10n-id", "password_label"], ["type", "hidden", "id", "password", 1, "toolbarField"], [1, "buttonRow"], ["id", "passwordCancel", 1, "dialogButton"], ["data-l10n-id", "password_cancel"], ["id", "passwordSubmit", 1, "dialogButton"], ["data-l10n-id", "password_ok"]],
  template: function PdfPasswordDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "dialog", 0)(1, "div", 1)(2, "label", 2);
      \u0275\u0275text(3, "Enter the password to open this PDF file:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 1);
      \u0275\u0275element(5, "input", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "button", 5)(8, "span", 6);
      \u0275\u0275text(9, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 7)(11, "span", 8);
      \u0275\u0275text(12, "OK");
      \u0275\u0275elementEnd()()()();
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfPasswordDialogComponent, [{
    type: Component,
    args: [{
      selector: "pdf-password-dialog",
      template: '<dialog id="passwordDialog">\n  <div class="row">\n    <label for="password" id="passwordText" data-l10n-id="password_label">Enter the password to open this PDF\n      file:</label>\n  </div>\n  <div class="row">\n    <input type="hidden" id="password" class="toolbarField" />\n  </div>\n  <div class="buttonRow">\n    <button id="passwordCancel" class="dialogButton"><span data-l10n-id="password_cancel">Cancel</span></button>\n    <button id="passwordSubmit" class="dialogButton"><span data-l10n-id="password_ok">OK</span></button>\n  </div>\n</dialog>\n'
    }]
  }], null, null);
})();
var PdfDocumentPropertiesDialogComponent = class {
};
PdfDocumentPropertiesDialogComponent.\u0275fac = function PdfDocumentPropertiesDialogComponent_Factory(t) {
  return new (t || PdfDocumentPropertiesDialogComponent)();
};
PdfDocumentPropertiesDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfDocumentPropertiesDialogComponent,
  selectors: [["pdf-document-properties-dialog"]],
  decls: 78,
  vars: 0,
  consts: [["id", "documentPropertiesDialog"], [1, "row"], ["id", "fileNameLabel", "data-l10n-id", "document_properties_file_name"], ["id", "fileNameField", "aria-labelledby", "fileNameLabel"], ["id", "fileSizeLabel", "data-l10n-id", "document_properties_file_size"], ["id", "fileSizeField", "aria-labelledby", "fileSizeLabel"], [1, "separator"], ["id", "titleLabel", "data-l10n-id", "document_properties_title"], ["id", "titleField", "aria-labelledby", "titleLabel"], ["id", "authorLabel", "data-l10n-id", "document_properties_author"], ["id", "authorField", "aria-labelledby", "authorLabel"], ["id", "subjectLabel", "data-l10n-id", "document_properties_subject"], ["id", "subjectField", "aria-labelledby", "subjectLabel"], ["id", "keywordsLabel", "data-l10n-id", "document_properties_keywords"], ["id", "keywordsField", "aria-labelledby", "keywordsLabel"], ["id", "creationDateLabel", "data-l10n-id", "document_properties_creation_date"], ["id", "creationDateField", "aria-labelledby", "creationDateLabel"], ["id", "modificationDateLabel", "data-l10n-id", "document_properties_modification_date"], ["id", "modificationDateField", "aria-labelledby", "modificationDateLabel"], ["id", "creatorLabel", "data-l10n-id", "document_properties_creator"], ["id", "creatorField", "aria-labelledby", "creatorLabel"], ["id", "producerLabel", "data-l10n-id", "document_properties_producer"], ["id", "producerField", "aria-labelledby", "producerLabel"], ["id", "versionLabel", "data-l10n-id", "document_properties_version"], ["id", "versionField", "aria-labelledby", "versionLabel"], ["id", "pageCountLabel", "data-l10n-id", "document_properties_page_count"], ["id", "pageCountField", "aria-labelledby", "pageCountLabel"], ["id", "pageSizeLabel", "data-l10n-id", "document_properties_page_size"], ["id", "pageSizeField", "aria-labelledby", "pageSizeLabel"], ["id", "linearizedLabel", "data-l10n-id", "document_properties_linearized"], ["id", "linearizedField", "aria-labelledby", "linearizedLabel"], [1, "buttonRow"], ["id", "documentPropertiesClose", "type", "button", 1, "dialogButton"], ["data-l10n-id", "document_properties_close"]],
  template: function PdfDocumentPropertiesDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "dialog", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "File name:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 1)(7, "span", 4);
      \u0275\u0275text(8, "File size:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 5);
      \u0275\u0275text(10, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(11, "div", 6);
      \u0275\u0275elementStart(12, "div", 1)(13, "span", 7);
      \u0275\u0275text(14, "Title:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 8);
      \u0275\u0275text(16, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 1)(18, "span", 9);
      \u0275\u0275text(19, "Author:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 10);
      \u0275\u0275text(21, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 1)(23, "span", 11);
      \u0275\u0275text(24, "Subject:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 12);
      \u0275\u0275text(26, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 1)(28, "span", 13);
      \u0275\u0275text(29, "Keywords:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p", 14);
      \u0275\u0275text(31, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 1)(33, "span", 15);
      \u0275\u0275text(34, "Creation Date:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p", 16);
      \u0275\u0275text(36, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 1)(38, "span", 17);
      \u0275\u0275text(39, "Modification Date:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p", 18);
      \u0275\u0275text(41, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 1)(43, "span", 19);
      \u0275\u0275text(44, "Creator:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p", 20);
      \u0275\u0275text(46, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(47, "div", 6);
      \u0275\u0275elementStart(48, "div", 1)(49, "span", 21);
      \u0275\u0275text(50, "PDF Producer:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p", 22);
      \u0275\u0275text(52, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 1)(54, "span", 23);
      \u0275\u0275text(55, "PDF Version:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p", 24);
      \u0275\u0275text(57, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 1)(59, "span", 25);
      \u0275\u0275text(60, "Page Count:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p", 26);
      \u0275\u0275text(62, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 1)(64, "span", 27);
      \u0275\u0275text(65, "Page Size:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "p", 28);
      \u0275\u0275text(67, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(68, "div", 6);
      \u0275\u0275elementStart(69, "div", 1)(70, "span", 29);
      \u0275\u0275text(71, "Fast Web View:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p", 30);
      \u0275\u0275text(73, "-");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 31)(75, "button", 32)(76, "span", 33);
      \u0275\u0275text(77, "Close");
      \u0275\u0275elementEnd()()()();
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfDocumentPropertiesDialogComponent, [{
    type: Component,
    args: [{
      selector: "pdf-document-properties-dialog",
      template: '<dialog id="documentPropertiesDialog">\n  <div class="row">\n    <span id="fileNameLabel" data-l10n-id="document_properties_file_name">File name:</span>\n    <p id="fileNameField" aria-labelledby="fileNameLabel">-</p>\n  </div>\n  <div class="row">\n    <span id="fileSizeLabel" data-l10n-id="document_properties_file_size">File size:</span>\n    <p id="fileSizeField" aria-labelledby="fileSizeLabel">-</p>\n  </div>\n  <div class="separator"></div>\n  <div class="row">\n    <span id="titleLabel" data-l10n-id="document_properties_title">Title:</span>\n    <p id="titleField" aria-labelledby="titleLabel">-</p>\n  </div>\n  <div class="row">\n    <span id="authorLabel" data-l10n-id="document_properties_author">Author:</span>\n    <p id="authorField" aria-labelledby="authorLabel">-</p>\n  </div>\n  <div class="row">\n    <span id="subjectLabel" data-l10n-id="document_properties_subject">Subject:</span>\n    <p id="subjectField" aria-labelledby="subjectLabel">-</p>\n  </div>\n  <div class="row">\n    <span id="keywordsLabel" data-l10n-id="document_properties_keywords">Keywords:</span>\n    <p id="keywordsField" aria-labelledby="keywordsLabel">-</p>\n  </div>\n  <div class="row">\n    <span id="creationDateLabel" data-l10n-id="document_properties_creation_date">Creation Date:</span>\n    <p id="creationDateField" aria-labelledby="creationDateLabel">-</p>\n  </div>\n  <div class="row">\n    <span id="modificationDateLabel" data-l10n-id="document_properties_modification_date">Modification Date:</span>\n    <p id="modificationDateField" aria-labelledby="modificationDateLabel">-</p>\n  </div>\n  <div class="row">\n    <span id="creatorLabel" data-l10n-id="document_properties_creator">Creator:</span>\n    <p id="creatorField" aria-labelledby="creatorLabel">-</p>\n  </div>\n  <div class="separator"></div>\n  <div class="row">\n    <span id="producerLabel" data-l10n-id="document_properties_producer">PDF Producer:</span>\n    <p id="producerField" aria-labelledby="producerLabel">-</p>\n  </div>\n  <div class="row">\n    <span id="versionLabel" data-l10n-id="document_properties_version">PDF Version:</span>\n    <p id="versionField" aria-labelledby="versionLabel">-</p>\n  </div>\n  <div class="row">\n    <span id="pageCountLabel" data-l10n-id="document_properties_page_count">Page Count:</span>\n    <p id="pageCountField" aria-labelledby="pageCountLabel">-</p>\n  </div>\n  <div class="row">\n    <span id="pageSizeLabel" data-l10n-id="document_properties_page_size">Page Size:</span>\n    <p id="pageSizeField" aria-labelledby="pageSizeLabel">-</p>\n  </div>\n  <div class="separator"></div>\n  <div class="row">\n    <span id="linearizedLabel" data-l10n-id="document_properties_linearized">Fast Web View:</span>\n    <p id="linearizedField" aria-labelledby="linearizedLabel">-</p>\n  </div>\n  <div class="buttonRow">\n    <button id="documentPropertiesClose" class="dialogButton" type="button"><span data-l10n-id="document_properties_close">Close</span></button>\n  </div>\n</dialog>\n'
    }]
  }], null, null);
})();
var PdfPreparePrintingDialogComponent = class {
};
PdfPreparePrintingDialogComponent.\u0275fac = function PdfPreparePrintingDialogComponent_Factory(t) {
  return new (t || PdfPreparePrintingDialogComponent)();
};
PdfPreparePrintingDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PdfPreparePrintingDialogComponent,
  selectors: [["pdf-prepare-printing-dialog"]],
  decls: 12,
  vars: 0,
  consts: [["id", "printServiceDialog", 2, "min-width", "200px"], [1, "row"], ["data-l10n-id", "print_progress_message"], ["value", "0", "max", "100"], ["data-l10n-id", "print_progress_percent", "data-l10n-args", '{ "progress": 0 }', 1, "relative-progress"], [1, "buttonRow"], ["id", "printCancel", "type", "button", 1, "dialogButton"], ["data-l10n-id", "print_progress_close"]],
  template: function PdfPreparePrintingDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "dialog", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Preparing document for printing\u2026");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 1);
      \u0275\u0275element(5, "progress", 3);
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "0%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "button", 6)(10, "span", 7);
      \u0275\u0275text(11, "Cancel");
      \u0275\u0275elementEnd()()()();
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfPreparePrintingDialogComponent, [{
    type: Component,
    args: [{
      selector: "pdf-prepare-printing-dialog",
      template: `<dialog id="printServiceDialog" style="min-width: 200px">
  <div class="row">
    <span data-l10n-id="print_progress_message">Preparing document for printing\u2026</span>
  </div>
  <div class="row">
    <progress value="0" max="100"></progress>
    <span data-l10n-id="print_progress_percent" data-l10n-args='{ "progress": 0 }' class="relative-progress">0%</span>
  </div>
  <div class="buttonRow">
    <button id="printCancel" class="dialogButton" type="button">
      <span data-l10n-id="print_progress_close">Cancel</span></button>
  </div>
</dialog>
`
    }]
  }], null, null);
})();
var TranslatePipe = class {
  transform(key, fallback) {
    return this.translate(key, fallback);
  }
  translate(key, englishText) {
    return __async(this, null, function* () {
      const PDFViewerApplication = window.PDFViewerApplication;
      return PDFViewerApplication.l10n.get(key, null, englishText);
    });
  }
};
TranslatePipe.\u0275fac = function TranslatePipe_Factory(t) {
  return new (t || TranslatePipe)();
};
TranslatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "translate",
  type: TranslatePipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Pipe,
    args: [{
      name: "translate"
    }]
  }], null, null);
})();
function isIOS() {
  if (typeof window === "undefined") {
    return false;
  }
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
var NgxExtendedPdfViewerComponent = class _NgxExtendedPdfViewerComponent {
  constructor(ngZone, platformId, notificationService, location, elementRef, platformLocation, cdr, service, renderer) {
    this.ngZone = ngZone;
    this.platformId = platformId;
    this.notificationService = notificationService;
    this.location = location;
    this.elementRef = elementRef;
    this.platformLocation = platformLocation;
    this.cdr = cdr;
    this.service = service;
    this.renderer = renderer;
    this.ngxExtendedPdfViewerIncompletelyInitialized = true;
    this.formSupport = new NgxFormSupport();
    this.showFreeFloatingBar = true;
    this.enableDragAndDrop = true;
    this.localizationInitialized = false;
    this.disableForms = false;
    this._pageViewMode = "multiple";
    this.srcChangeTriggeredByUser = false;
    this.pageViewModeChange = new EventEmitter();
    this.progress = new EventEmitter();
    this.srcChange = new EventEmitter();
    this._scrollMode = ScrollModeType.vertical;
    this.scrollModeChange = new EventEmitter();
    this.authorization = void 0;
    this.httpHeaders = void 0;
    this.contextMenuAllowed = true;
    this.afterPrint = new EventEmitter();
    this.beforePrint = new EventEmitter();
    this.currentZoomFactor = new EventEmitter();
    this.enablePrint = true;
    this.delayFirstView = 0;
    this.showTextEditor = true;
    this.showStampEditor = true;
    this.showDrawEditor = true;
    this.logLevel = VerbosityLevel.WARNINGS;
    this.relativeCoordsOptions = {};
    this.minifiedJSLibraries = true;
    this.primaryMenuVisible = true;
    this.printResolution = null;
    this.rotationChange = new EventEmitter();
    this.annotationLayerRendered = new EventEmitter();
    this.annotationEditorLayerRendered = new EventEmitter();
    this.xfaLayerRendered = new EventEmitter();
    this.outlineLoaded = new EventEmitter();
    this.attachmentsloaded = new EventEmitter();
    this.layersloaded = new EventEmitter();
    this.autoHeight = false;
    this.minHeight = void 0;
    this._height = "100%";
    this._useBrowserLocale = void 0;
    this.forceUsingLegacyES5 = false;
    this.backgroundColor = "#e8e8eb";
    this.filenameForDownload = void 0;
    this.ignoreKeyboard = false;
    this.ignoreKeys = [];
    this.acceptKeys = [];
    this.imageResourcesPath = assetsUrl(pdfDefaultOptions.assetsFolder) + "/images/";
    this.localeFolderPath = assetsUrl(pdfDefaultOptions.assetsFolder) + "/locale";
    this.language = void 0;
    this.listenToURL = false;
    this.nameddest = void 0;
    this.password = void 0;
    this.replaceBrowserPrint = true;
    this._showSidebarButton = true;
    this.viewerPositionTop = "32px";
    this.showUnverifiedSignatures = false;
    this._sidebarVisible = void 0;
    this.sidebarVisibleChange = new EventEmitter();
    this.activeSidebarView = PdfSidebarView.OUTLINE;
    this.activeSidebarViewChange = new EventEmitter();
    this.findbarVisible = false;
    this.findbarVisibleChange = new EventEmitter();
    this.propertiesDialogVisible = false;
    this.propertiesDialogVisibleChange = new EventEmitter();
    this.showFindButton = void 0;
    this.showFindHighlightAll = true;
    this.showFindMatchCase = true;
    this.showFindCurrentPageOnly = true;
    this.showFindPageRange = true;
    this.showFindEntireWord = true;
    this.showFindEntirePhrase = true;
    this.showFindMatchDiacritics = true;
    this.showFindFuzzySearch = true;
    this.showFindResultsCount = true;
    this.showFindMessages = true;
    this.showPagingButtons = true;
    this.showZoomButtons = true;
    this.showPresentationModeButton = false;
    this.showOpenFileButton = true;
    this.showPrintButton = true;
    this.showDownloadButton = true;
    this.theme = "light";
    this.showToolbar = true;
    this.showSecondaryToolbarButton = true;
    this.showSinglePageModeButton = true;
    this.showVerticalScrollButton = true;
    this.showHorizontalScrollButton = true;
    this.showWrappedScrollButton = true;
    this.showInfiniteScrollButton = true;
    this.showBookModeButton = true;
    this.showRotateButton = true;
    this._handTool = !isIOS();
    this.handToolChange = new EventEmitter();
    this.showHandToolButton = false;
    this._showScrollingButton = true;
    this.showSpreadButton = true;
    this.showPropertiesButton = true;
    this.showBorders = true;
    this.spreadChange = new EventEmitter();
    this.thumbnailDrawn = new EventEmitter();
    this._page = void 0;
    this.pageChange = new EventEmitter();
    this.pageLabel = void 0;
    this.pageLabelChange = new EventEmitter();
    this.pagesLoaded = new EventEmitter();
    this.pageRender = new EventEmitter();
    this.pageRendered = new EventEmitter();
    this.pdfDownloaded = new EventEmitter();
    this.pdfLoaded = new EventEmitter();
    this.pdfLoadingStarts = new EventEmitter();
    this.pdfLoadingFailed = new EventEmitter();
    this.textLayer = void 0;
    this.textLayerRendered = new EventEmitter();
    this.annotationEditorModeChanged = new EventEmitter();
    this.updateFindMatchesCount = new EventEmitter();
    this.updateFindState = new EventEmitter();
    this.zoom = void 0;
    this.zoomChange = new EventEmitter();
    this.zoomLevels = ["auto", "page-actual", "page-fit", "page-width", 0.5, 1, 1.25, 1.5, 2, 3, 4];
    this.maxZoom = 10;
    this.minZoom = 0.1;
    this._mobileFriendlyZoom = "100%";
    this.mobileFriendlyZoomScale = 1;
    this.toolbarMarginTop = "0px";
    this.toolbarWidth = "100%";
    this.toolbar = void 0;
    this.toolbarWidthInPixels = 3.14159265359;
    this.secondaryToolbarTop = void 0;
    this.sidebarPositionTop = void 0;
    this.findbarTop = void 0;
    this.findbarLeft = void 0;
    this.shuttingDown = false;
    this.serverSideRendering = true;
    this.baseHref = this.platformLocation.getBaseHrefFromDOM();
    this.service.recalculateSize$.subscribe(() => this.onResize());
    if (isPlatformBrowser(this.platformId)) {
      this.serverSideRendering = false;
      this.toolbarWidth = String(document.body.clientWidth);
    }
  }
  set formData(formData) {
    this.formSupport.formData = formData;
  }
  get formDataChange() {
    return this.formSupport.formDataChange;
  }
  get pageViewMode() {
    return this._pageViewMode;
  }
  set pageViewMode(viewMode) {
    if (isPlatformBrowser(this.platformId)) {
      const hasChanged = this._pageViewMode !== viewMode;
      if (hasChanged) {
        const mustRedraw = !this.ngxExtendedPdfViewerIncompletelyInitialized && (this._pageViewMode === "book" || viewMode === "book");
        this._pageViewMode = viewMode;
        this.pageViewModeChange.emit(this._pageViewMode);
        const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
        PDFViewerApplicationOptions?.set("pageViewMode", this.pageViewMode);
        const PDFViewerApplication = window.PDFViewerApplication;
        if (PDFViewerApplication) {
          PDFViewerApplication.pdfViewer.pageViewMode = this._pageViewMode;
          PDFViewerApplication.findController.pageViewMode = this._pageViewMode;
        }
        if (viewMode === "infinite-scroll") {
          if (this.scrollMode === ScrollModeType.page || this.scrollMode === ScrollModeType.horizontal) {
            this.scrollMode = ScrollModeType.vertical;
            PDFViewerApplication.eventBus.dispatch("switchscrollmode", {
              mode: Number(this.scrollMode)
            });
          }
          this.removeScrollbarInInfiniteScrollMode(false);
        } else if (viewMode !== "multiple") {
          this.scrollMode = ScrollModeType.vertical;
        } else {
          if (this.scrollMode === ScrollModeType.page) {
            this.scrollMode = ScrollModeType.vertical;
          }
          this.removeScrollbarInInfiniteScrollMode(true);
        }
        if (viewMode === "single") {
          this.scrollMode = ScrollModeType.page;
          this._pageViewMode = viewMode;
        }
        if (viewMode === "book") {
          this.showBorders = false;
          if (this.scrollMode !== ScrollModeType.vertical) {
            this.scrollMode = ScrollModeType.vertical;
          }
        }
        if (mustRedraw) {
          if (viewMode !== "book") {
            const ngx = this.elementRef.nativeElement;
            const viewerContainer = ngx.querySelector("#viewerContainer");
            viewerContainer.style.width = "";
            viewerContainer.style.overflow = "";
            viewerContainer.style.marginRight = "";
            viewerContainer.style.marginLeft = "";
            const viewer = ngx.querySelector("#viewer");
            viewer.style.maxWidth = "";
            viewer.style.minWidth = "";
          }
          this.openPDF2();
        }
      }
    }
  }
  get scrollMode() {
    return this._scrollMode;
  }
  set scrollMode(value) {
    if (this._scrollMode !== value) {
      const PDFViewerApplication = window.PDFViewerApplication;
      if (PDFViewerApplication?.pdfViewer) {
        if (PDFViewerApplication.pdfViewer.scrollMode !== Number(this.scrollMode)) {
          PDFViewerApplication.eventBus.dispatch("switchscrollmode", {
            mode: Number(this.scrollMode)
          });
        }
      }
      this._scrollMode = value;
      if (this._scrollMode === ScrollModeType.page) {
        if (this.pageViewMode !== "single") {
          this._pageViewMode = "single";
          this.pageViewModeChange.emit(this.pageViewMode);
        }
      } else if (this.pageViewMode === "single" || this._scrollMode === ScrollModeType.horizontal) {
        this._pageViewMode = "multiple";
        this.pageViewModeChange.emit(this.pageViewMode);
      }
    }
  }
  set src(url) {
    if (url instanceof Uint8Array) {
      this._src = url.buffer;
    } else if (url instanceof URL) {
      this._src = url.toString();
    } else if (typeof Blob !== "undefined" && url instanceof Blob) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTimeout(() => {
          this.src = new Uint8Array(reader.result);
          if (this.service.ngxExtendedPdfViewerInitialized) {
            if (this.ngxExtendedPdfViewerIncompletelyInitialized) {
              this.openPDF();
            } else {
              (() => __async(this, null, function* () {
                return this.openPDF2();
              }))();
            }
          }
        });
      };
      reader.readAsArrayBuffer(url);
    } else if (typeof url === "string") {
      this._src = url;
      if (url.length > 980) {
        if (url.length % 4 === 0) {
          if (/^[a-zA-Z\d/+]+={0,2}$/.test(url)) {
            console.error("The URL looks like a base64 encoded string. If so, please use the attribute [base64Src] instead of [src]");
          }
        }
      }
    } else {
      this._src = url;
    }
  }
  set base64Src(base64) {
    if (base64) {
      if (typeof window === "undefined") {
        return;
      }
      const binary_string = atob(base64);
      const len = binary_string.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
      }
      this.src = bytes.buffer;
    } else {
      this._src = void 0;
    }
  }
  set height(h) {
    this.minHeight = void 0;
    this.autoHeight = false;
    if (h) {
      if (h === "auto") {
        this.autoHeight = true;
        this._height = void 0;
      } else {
        this._height = h;
      }
    } else {
      this.height = "100%";
    }
    setTimeout(() => {
      this.checkHeight();
    });
  }
  get height() {
    return this._height;
  }
  get useBrowserLocale() {
    return !!this._useBrowserLocale;
  }
  /**
   * If this flag is true, this components adds a link to the locale assets. The pdf viewer
   * sees this link and uses it to load the locale files automatically.
   * @param useBrowserLocale boolean
   */
  set useBrowserLocale(value) {
    this._useBrowserLocale = value;
  }
  get showSidebarButton() {
    return this._showSidebarButton;
  }
  set showSidebarButton(show) {
    if (typeof window === "undefined") {
      this._showSidebarButton = false;
      return;
    }
    this._showSidebarButton = show;
    if (this._showSidebarButton) {
      const isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
      let factor = 1;
      if (isIE) {
        factor = Number((this._mobileFriendlyZoom || "100").replace("%", "")) / 100;
      }
      this.findbarLeft = (68 * factor).toString() + "px";
      return;
    }
    this.findbarLeft = "0px";
  }
  get sidebarVisible() {
    return this._sidebarVisible;
  }
  set sidebarVisible(value) {
    if (value !== this._sidebarVisible) {
      this.sidebarVisibleChange.emit(value);
    }
    this._sidebarVisible = value;
    const PDFViewerApplication = window.PDFViewerApplication;
    if (PDFViewerApplication?.pdfSidebar) {
      if (this.sidebarVisible) {
        PDFViewerApplication.pdfSidebar.open();
        const view = Number(this.activeSidebarView);
        if (view === 1 || view === 2 || view === 3 || view === 4) {
          PDFViewerApplication.pdfSidebar.switchView(view, true);
        } else {
          console.error("[activeSidebarView] must be an integer value between 1 and 4");
        }
      } else {
        PDFViewerApplication.pdfSidebar.close();
      }
    }
  }
  set handTool(handTool) {
    if (isIOS() && handTool) {
      console.log("On iOS, the handtool doesn't work reliably. Plus, you don't need it because touch gestures allow you to distinguish easily between swiping and selecting text. Therefore, the library ignores your setting.");
      return;
    }
    this._handTool = handTool;
  }
  get handTool() {
    return this._handTool;
  }
  get showScrollingButton() {
    if (this.pageViewMode === "multiple") {
      return this._showScrollingButton;
    }
    return false;
  }
  set showScrollingButton(val) {
    this._showScrollingButton = val;
  }
  get page() {
    return this._page;
  }
  set page(p) {
    if (p) {
      this._page = Number(p);
    } else {
      this._page = void 0;
    }
  }
  onToolbarLoaded(toolbarElement) {
    this.toolbar = toolbarElement;
  }
  get mobileFriendlyZoom() {
    return this._mobileFriendlyZoom;
  }
  get pdfJsVersion() {
    return getVersionSuffix(pdfDefaultOptions.assetsFolder);
  }
  get majorMinorPdfJsVersion() {
    const fullVersion = this.pdfJsVersion;
    const pos = fullVersion.lastIndexOf(".");
    return fullVersion.substring(0, pos).replace(".", "-");
  }
  /**
   * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
   * This attribute is a string with a percent character at the end (e.g. "150%").
   */
  set mobileFriendlyZoom(zoom) {
    if (zoom == "true") {
      zoom = "150%";
    } else if (zoom == "false" || zoom === void 0 || zoom === null) {
      zoom = "100%";
    }
    this._mobileFriendlyZoom = zoom;
    let factor = 1;
    if (!String(zoom).includes("%")) {
      zoom = 100 * Number(zoom) + "%";
    }
    factor = Number((zoom || "100").replace("%", "")) / 100;
    this.mobileFriendlyZoomScale = factor;
    this.toolbarWidth = (100 / factor).toString() + "%";
    this.toolbarMarginTop = (factor - 1) * 16 + "px";
    setTimeout(() => this.calcViewerPositionTop());
  }
  calcViewerPositionTop() {
    if (this.toolbar === void 0) {
      this.sidebarPositionTop = "0";
      return;
    }
    let top = this.toolbar.getBoundingClientRect().height;
    if (top < 33) {
      this.viewerPositionTop = "33px";
    } else {
      this.viewerPositionTop = top + "px";
    }
    const factor = top / 33;
    if (this.primaryMenuVisible) {
      this.sidebarPositionTop = (33 + 33 * (factor - 1)).toString() + "px";
    } else {
      this.sidebarPositionTop = "0";
    }
    this.secondaryToolbarTop = (33 + 38 * (factor - 1)).toString() + "px";
    this.findbarTop = (33 + 38 * (factor - 1)).toString() + "px";
    const findButton = document.getElementById("primaryViewFind");
    if (findButton) {
      const containerPositionLeft = this.toolbar.getBoundingClientRect().left;
      const findButtonPosition = findButton.getBoundingClientRect();
      const left = Math.max(0, findButtonPosition.left - containerPositionLeft);
      this.findbarLeft = left + "px";
    } else if (this.showSidebarButton) {
      this.findbarLeft = 34 + (32 * factor).toString() + "px";
    } else {
      this.findbarLeft = "0";
    }
  }
  iOSVersionRequiresES5() {
    if (typeof window === "undefined") {
      return false;
    }
    const match = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    if (match !== void 0 && match !== null) {
      return parseInt(match[1], 10) < 14;
    }
    return false;
  }
  needsES5() {
    return __async(this, null, function* () {
      if (typeof window === "undefined") {
        return false;
      }
      const isIE = !!window.MSInputMethodContext && !!document.documentMode;
      const isEdge2 = /Edge\/\d./i.test(navigator.userAgent);
      const isIOs13OrBelow = this.iOSVersionRequiresES5();
      let needsES52 = typeof ReadableStream === "undefined" || typeof Promise["allSettled"] === "undefined";
      if (needsES52 || isIE || isEdge2 || isIOs13OrBelow || this.forceUsingLegacyES5) {
        return true;
      }
      return !(yield this.supportsOptionalChaining());
    });
  }
  supportsOptionalChaining() {
    return new Promise((resolve) => {
      const support = window.supportsOptionalChaining;
      support !== void 0 ? resolve(support) : resolve(this.addScriptOpChainingSupport());
    });
  }
  addScriptOpChainingSupport() {
    return new Promise((resolve) => {
      if (pdfDefaultOptions.assetsFolder === "bleeding-edge") {
        pdfDefaultOptions.assetsFolder = "assets";
      }
      const script = this.createScriptElement(pdfDefaultOptions.assetsFolder + "/op-chaining-support.js");
      script.onload = () => {
        script.remove();
        resolve(window.supportsOptionalChaining);
      };
      script.onerror = () => {
        script.remove();
        window.supportsOptionalChaining = false;
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  createScriptElement(sourcePath) {
    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    const ttWindow = window;
    if (ttWindow.trustedTypes) {
      const sanitizer = ttWindow.trustedTypes.createPolicy("foo", {
        createScriptURL: (input) => input
      });
      script.src = sanitizer.createScriptURL(this.location.normalize(sourcePath));
    } else {
      script.src = this.location.normalize(sourcePath);
    }
    return script;
  }
  getPdfJsPath(artifact, needsES52) {
    const suffix = this.minifiedJSLibraries ? ".min.js" : ".js";
    const assets = pdfDefaultOptions.assetsFolder;
    const versionSuffix = getVersionSuffix(assets);
    const artifactPath = `/${artifact}-`;
    const es5 = needsES52 ? "-es5" : "";
    return assets + artifactPath + versionSuffix + es5 + suffix;
  }
  loadViewer() {
    globalThis["ngxZone"] = this.ngZone;
    this.ngZone.runOutsideAngular(() => {
      this.needsES5().then((needsES52) => {
        const viewerPath = this.getPdfJsPath("viewer", needsES52);
        const script = this.createScriptElement(viewerPath);
        document.getElementsByTagName("head")[0].appendChild(script);
      });
    });
  }
  addFeatures() {
    return new Promise((resolve) => {
      const script = this.createScriptElement(pdfDefaultOptions.assetsFolder + "/additional-features.js");
      script.onload = () => {
        script.remove();
      };
      script.onerror = () => {
        script.remove();
        resolve();
      };
      document.body.appendChild(script);
    });
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      globalThis["setNgxExtendedPdfViewerSource"] = (url) => {
        this._src = url;
        this.srcChangeTriggeredByUser = true;
        this.srcChange.emit(url);
      };
      this.addTranslationsUnlessProvidedByTheUser();
      this.formSupport.registerFormSupportWithPdfjs(this.ngZone);
      this.loadPdfJs();
      this.hideToolbarIfItIsEmpty();
    }
  }
  loadPdfJs() {
    globalThis["ngxZone"] = this.ngZone;
    this.ngZone.runOutsideAngular(() => {
      if (!globalThis["pdfjs-dist/build/pdf"]) {
        this.needsES5().then((needsES52) => {
          if (needsES52) {
            if (!pdfDefaultOptions.needsES5) {
              console.log(`If you see the error message "expected expression, got '='" above: you can safely ignore it as long as you know what you're doing. It means your browser is out-of-date. Please update your browser to benefit from the latest security updates and to enjoy a faster PDF viewer.`);
            }
            pdfDefaultOptions.needsES5 = true;
            console.log("Using the ES5 version of the PDF viewer. Your PDF files show faster if you update your browser.");
          }
          if (this.minifiedJSLibraries) {
            if (!pdfDefaultOptions.workerSrc().endsWith(".min.js")) {
              const src = pdfDefaultOptions.workerSrc();
              pdfDefaultOptions.workerSrc = () => src.replace(".js", ".min.js");
            }
          }
          const pdfJsPath = this.getPdfJsPath("pdf", needsES52);
          const script = this.createScriptElement(pdfJsPath);
          script.onload = () => {
            if (!globalThis.webViewerLoad) {
              this.loadViewer();
            }
          };
          document.getElementsByTagName("head")[0].appendChild(script);
        });
      } else if (!globalThis.webViewerLoad) {
        this.loadViewer();
      }
    });
  }
  ngAfterViewInit() {
    if (typeof window !== "undefined") {
      if (!this.shuttingDown) {
        if (globalThis.webViewerLoad) {
          this.ngZone.runOutsideAngular(() => this.doInitPDFViewer());
        } else {
          setTimeout(() => this.ngAfterViewInit(), 50);
        }
      }
    }
  }
  assignTabindexes() {
    if (this.startTabindex) {
      const r = this.root.nativeElement.cloneNode(true);
      r.classList.add("offscreen");
      this.showElementsRecursively(r);
      document.body.appendChild(r);
      const elements = this.collectElementPositions(r, this.root.nativeElement, []);
      document.body.removeChild(r);
      const topRightGreaterThanBottomLeftComparator = (a, b) => {
        if (a.y - b.y > 15) {
          return 1;
        }
        if (b.y - a.y > 15) {
          return -1;
        }
        return a.x - b.x;
      };
      const sorted = [...elements].sort(topRightGreaterThanBottomLeftComparator);
      for (let i = 0; i < sorted.length; i++) {
        sorted[i].element.tabIndex = this.startTabindex + i;
      }
    }
  }
  showElementsRecursively(root) {
    root.classList.remove("hidden");
    root.classList.remove("invisible");
    root.classList.remove("hiddenXXLView");
    root.classList.remove("hiddenXLView");
    root.classList.remove("hiddenLargeView");
    root.classList.remove("hiddenMediumView");
    root.classList.remove("hiddenSmallView");
    root.classList.remove("hiddenTinyView");
    root.classList.remove("visibleXXLView");
    root.classList.remove("visibleXLView");
    root.classList.remove("visibleLargeView");
    root.classList.remove("visibleMediumView");
    root.classList.remove("visibleSmallView");
    root.classList.remove("visibleTinyView");
    if (root instanceof HTMLButtonElement || root instanceof HTMLAnchorElement || root instanceof HTMLInputElement || root instanceof HTMLSelectElement) {
      return;
    } else if (root.childElementCount > 0) {
      for (let i = 0; i < root.childElementCount; i++) {
        const c = root.children.item(i);
        if (c) {
          this.showElementsRecursively(c);
        }
      }
    }
  }
  collectElementPositions(copy, original, elements) {
    if (copy instanceof HTMLButtonElement || copy instanceof HTMLAnchorElement || copy instanceof HTMLInputElement || copy instanceof HTMLSelectElement) {
      const rect = copy.getBoundingClientRect();
      const elementAndPos = {
        element: original,
        x: Math.round(rect.left),
        y: Math.round(rect.top)
      };
      elements.push(elementAndPos);
    } else if (copy.childElementCount > 0) {
      for (let i = 0; i < copy.childElementCount; i++) {
        const c = copy.children.item(i);
        const o = original.children.item(i);
        if (c && o) {
          elements = this.collectElementPositions(c, o, elements);
        }
      }
    }
    return elements;
  }
  doInitPDFViewer() {
    if (typeof window === "undefined") {
      return;
    }
    const callback = () => {
      document.removeEventListener("localized", callback);
      this.localizationInitialized = true;
      this.initTimeout = setTimeout(() => {
        if (!this.shuttingDown) {
          this.calcViewerPositionTop();
          this.afterLibraryInit();
          this.openPDF();
          this.assignTabindexes();
          if (this.replaceBrowserPrint) {
            window.print = window.printPDF;
          }
        }
      }, this.delayFirstView);
    };
    window.addEventListener("afterprint", () => {
      this.afterPrint.emit();
    });
    window.addEventListener("beforeprint", () => {
      this.beforePrint.emit();
    });
    document.addEventListener("localized", callback);
    if (this.service.ngxExtendedPdfViewerInitialized) {
      console.error("You're trying to open two instances of the PDF viewer. Most likely, this will result in errors.");
    }
    const onLoaded = () => {
      this.overrideDefaultSettings();
      document.removeEventListener("webviewerloaded", onLoaded);
    };
    document.addEventListener("webviewerloaded", onLoaded);
    this.activateTextlayerIfNecessary(null);
    setTimeout(() => {
      if (!this.shuttingDown) {
        this.onResize();
        this.hideToolbarIfItIsEmpty();
        this.dummyComponents.addMissingStandardWidgets();
        this.ngZone.runOutsideAngular(() => globalThis.webViewerLoad());
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.appConfig.defaultUrl = "";
        if (this.filenameForDownload) {
          PDFViewerApplication.appConfig.filenameForDownload = this.filenameForDownload;
        }
        const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
        PDFViewerApplicationOptions.set("enableDragAndDrop", this.enableDragAndDrop);
        let language = this.language === "" ? void 0 : this.language;
        if (!language) {
          if (typeof window === "undefined") {
            language = "en";
          } else {
            language = navigator.language;
          }
        }
        PDFViewerApplicationOptions.set("locale", language);
        PDFViewerApplicationOptions.set("imageResourcesPath", this.imageResourcesPath);
        PDFViewerApplicationOptions.set("minZoom", this.minZoom);
        PDFViewerApplicationOptions.set("maxZoom", this.maxZoom);
        PDFViewerApplicationOptions.set("pageViewMode", this.pageViewMode);
        PDFViewerApplicationOptions.set("verbosity", this.logLevel);
        PDFViewerApplicationOptions.set("initialZoom", this.zoom);
        PDFViewerApplication.isViewerEmbedded = true;
        if (PDFViewerApplication.printKeyDownListener) {
          window.addEventListener("keydown", PDFViewerApplication.printKeyDownListener, true);
        }
        const body = document.getElementsByTagName("body");
        if (body[0]) {
          const topLevelElements = body[0].children;
          for (let i = topLevelElements.length - 1; i >= 0; i--) {
            const e = topLevelElements.item(i);
            if (e && e.id === "printContainer") {
              body[0].removeChild(e);
            }
          }
        }
        const pc = document.getElementById("printContainer");
        if (pc) {
          document.getElementsByTagName("body")[0].appendChild(pc);
        }
      }
    }, 0);
  }
  addTranslationsUnlessProvidedByTheUser() {
    const langLinks = document.querySelectorAll('link[type="application/l10n"]');
    const langCount = langLinks.length;
    const dict = document.querySelector('script[type="application/l10n"]');
    const userProvidesTranslations = langCount > 0 || !!dict;
    if (this._useBrowserLocale === void 0) {
      this.useBrowserLocale = !userProvidesTranslations;
    }
    if (!userProvidesTranslations) {
      if (!this.useBrowserLocale) {
        console.error("If you set the attribute 'useBrowserLocale' to false, you must provide the translations yourself in a script or link tag.");
        console.error("The easiest way to do this is to add them to the index.html.");
        console.error("The PDF viewer ignores your setting and loads the default translations.");
      }
      const link = this.renderer.createElement("link");
      link.rel = "resource";
      link.type = "application/l10n";
      link.href = this.localeFolderPath + "/locale.properties";
      link.setAttribute("origin", "ngx-extended-pdf-viewer");
      this.renderer.appendChild(this.elementRef.nativeElement, link);
    } else if (this.useBrowserLocale && langCount > 0) {
      const o = langLinks[0].attributes["origin"];
      if (o && o.value !== "ngx-extended-pdf-viewer") {
        console.error("Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
      }
    }
  }
  hideToolbarIfItIsEmpty() {
    this.primaryMenuVisible = this.showToolbar;
    if (!this.showSecondaryToolbarButton || this.service.secondaryMenuIsEmpty) {
      if (!this.isPrimaryMenuVisible()) {
        this.primaryMenuVisible = false;
      }
    }
  }
  /** Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available */
  afterLibraryInit() {
    this.notificationService.onPDFJSInit.next();
  }
  checkHeight() {
    if (this._height) {
      if (isNaN(Number(this._height.replace("%", "")))) {
        return;
      }
    }
    if (document.querySelector("[data-pdfjsprinting]")) {
      return;
    }
    if (typeof document !== "undefined") {
      const container = document.getElementsByClassName("zoom")[0];
      if (container) {
        if (container.clientHeight === 0) {
          if (this.logLevel >= VerbosityLevel.WARNINGS && !this.autoHeight) {
            console.warn("The height of the PDF viewer widget is zero pixels. Please check the height attribute. Is there a syntax error? Or are you using a percentage with a CSS framework that doesn't support this? The height is adjusted automatedly.");
          }
          this.autoHeight = true;
        }
        if (this.autoHeight) {
          const available = window.innerHeight;
          const rect = container.getBoundingClientRect();
          const top = rect.top;
          let maximumHeight = available - top;
          const padding = this.calculateBorderMargin(container);
          maximumHeight -= padding;
          if (maximumHeight > 100) {
            this.minHeight = `${maximumHeight}px`;
          } else {
            this.minHeight = "100px";
          }
          this.cdr.markForCheck();
        }
      }
    }
  }
  calculateBorderMargin(container) {
    if (container) {
      const computedStyle = window.getComputedStyle(container);
      const padding = UnitToPx.toPx(computedStyle.paddingBottom);
      const margin = UnitToPx.toPx(computedStyle.marginBottom);
      if (container.style.zIndex) {
        return padding + margin;
      }
      return padding + margin + this.calculateBorderMargin(container.parentElement);
    }
    return 0;
  }
  onSpreadChange(newSpread) {
    this.spreadChange.emit(newSpread);
  }
  activateTextlayerIfNecessary(options) {
    if (this.textLayer === void 0) {
      if (!this.handTool) {
        if (options) {
          options.set("textLayerMode", pdfDefaultOptions.textLayerMode);
        }
        this.textLayer = true;
        if (this.showFindButton === void 0) {
          this.showFindButton = true;
          setTimeout(() => {
            const viewFind = document.getElementById("viewFind");
            if (viewFind) {
              viewFind.classList.remove("invisible");
            }
            const findbar = document.getElementById("findbar");
            if (findbar) {
              findbar.classList.remove("invisible");
            }
          });
        }
      } else {
        if (options) {
          options.set("textLayerMode", this.showHandToolButton ? pdfDefaultOptions.textLayerMode : 0);
        }
        if (!this.showHandToolButton) {
          if (this.showFindButton || this.showFindButton === void 0) {
            this.ngZone.run(() => {
              this.showFindButton = false;
            });
            if (this.logLevel >= VerbosityLevel.WARNINGS) {
              console.warn(
                // tslint:disable-next-line:max-line-length
                'Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.'
              );
            }
          }
          if (this.showHandToolButton) {
            if (this.logLevel >= VerbosityLevel.WARNINGS) {
              console.warn(
                // tslint:disable-next-line:max-line-length
                'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.'
              );
              this.showHandToolButton = false;
            }
          }
        }
      }
    } else {
      if (this.textLayer) {
        if (options) {
          options.set("textLayerMode", pdfDefaultOptions.textLayerMode);
        }
        this.textLayer = true;
        if (this.showFindButton === void 0) {
          this.showFindButton = true;
          setTimeout(() => {
            const viewFind = document.getElementById("viewFind");
            if (viewFind) {
              viewFind.classList.remove("invisible");
            }
            const findbar = document.getElementById("findbar");
            if (findbar) {
              findbar.classList.remove("invisible");
            }
          });
        }
      } else {
        if (options) {
          options.set("textLayerMode", 0);
        }
        this.textLayer = false;
        if (this.showFindButton) {
          if (this.logLevel >= VerbosityLevel.WARNINGS) {
            console.warn('Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
            this.ngZone.run(() => {
              this.showFindButton = false;
            });
          }
        }
        if (this.showHandToolButton) {
          if (this.logLevel >= VerbosityLevel.WARNINGS) {
            console.warn(
              // tslint:disable-next-line:max-line-length
              'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.'
            );
            this.showHandToolButton = false;
          }
        }
      }
    }
  }
  overrideDefaultSettings() {
    return __async(this, null, function* () {
      if (typeof window === "undefined") {
        return;
      }
      const options = window.PDFViewerApplicationOptions;
      for (const key in pdfDefaultOptions) {
        options.set(key, pdfDefaultOptions[key]);
      }
      options.set("disablePreferences", true);
      yield this.setZoom();
      options.set("ignoreKeyboard", this.ignoreKeyboard);
      options.set("ignoreKeys", this.ignoreKeys);
      options.set("acceptKeys", this.acceptKeys);
      this.activateTextlayerIfNecessary(options);
      if (this.scrollMode || this.scrollMode === ScrollModeType.vertical) {
        options.set("scrollModeOnLoad", this.scrollMode);
      }
      const sidebarVisible = this.sidebarVisible;
      const PDFViewerApplication = window.PDFViewerApplication;
      if (sidebarVisible !== void 0) {
        PDFViewerApplication.sidebarViewOnLoad = sidebarVisible ? 1 : 0;
        if (PDFViewerApplication.appConfig) {
          PDFViewerApplication.appConfig.sidebarViewOnLoad = sidebarVisible ? this.activeSidebarView : PdfSidebarView.NONE;
        }
        options.set("sidebarViewOnLoad", this.sidebarVisible ? this.activeSidebarView : 0);
      }
      if (this.spread === "even") {
        options.set("spreadModeOnLoad", 2);
        if (PDFViewerApplication.pdfViewer) {
          PDFViewerApplication.pdfViewer.spreadMode = 2;
        }
        this.onSpreadChange("even");
      } else if (this.spread === "odd") {
        options.set("spreadModeOnLoad", 1);
        if (PDFViewerApplication.pdfViewer) {
          PDFViewerApplication.pdfViewer.spreadMode = 1;
        }
        this.onSpreadChange("odd");
      } else {
        options.set("spreadModeOnLoad", 0);
        if (PDFViewerApplication.pdfViewer) {
          PDFViewerApplication.pdfViewer.spreadMode = 0;
        }
        this.onSpreadChange("off");
      }
      if (this.printResolution) {
        options.set("printResolution", this.printResolution);
      }
      if (this.showBorders === false) {
        options.set("removePageBorders", !this.showBorders);
      }
    });
  }
  openPDF() {
    ServiceWorkerOptions.showUnverifiedSignatures = this.showUnverifiedSignatures;
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.enablePrint = this.enablePrint;
    this.service.ngxExtendedPdfViewerInitialized = true;
    if (this._src) {
      this.ngxExtendedPdfViewerIncompletelyInitialized = false;
      if (!this.listenToURL) {
        PDFViewerApplication.pdfLinkService.setHash = function() {
        };
      }
      this.initTimeout = null;
      this.selectCursorTool();
      PDFViewerApplication.eventBus.on("toggleSidebar", (x) => {
        this.ngZone.run(() => {
          this.sidebarVisible = x.visible;
          this.sidebarVisibleChange.emit(x.visible);
        });
      });
      PDFViewerApplication.eventBus.on("textlayerrendered", (x) => {
        this.ngZone.run(() => this.textLayerRendered.emit(x));
      });
      PDFViewerApplication.eventBus.on("annotationeditormodechanged", (x) => {
        setTimeout(() => this.annotationEditorModeChanged.emit(x));
        if (x.mode === 0) {
          document.body.classList.remove("ngx-extended-pdf-viewer-prevent-touch-move");
        } else {
          document.body.classList.add("ngx-extended-pdf-viewer-prevent-touch-move");
        }
      });
      PDFViewerApplication.eventBus.on("scrollmodechanged", (x) => {
        this.ngZone.run(() => {
          this._scrollMode = x.mode;
          this.scrollModeChange.emit(x.mode);
          if (x.mode === ScrollModeType.page) {
            if (this.pageViewMode !== "single") {
              this.pageViewModeChange.emit("single");
              this._pageViewMode = "single";
            }
          }
        });
      });
      PDFViewerApplication.eventBus.on("progress", (x) => {
        this.ngZone.run(() => this.progress.emit(x));
      });
      PDFViewerApplication.eventBus.on("findbarclose", () => {
        this.ngZone.run(() => {
          this.findbarVisible = false;
          this.findbarVisibleChange.emit(false);
          this.cdr.markForCheck();
        });
      });
      PDFViewerApplication.eventBus.on("findbaropen", () => {
        this.ngZone.run(() => {
          this.findbarVisible = true;
          this.findbarVisibleChange.emit(true);
          this.cdr.markForCheck();
        });
      });
      PDFViewerApplication.eventBus.on("propertiesdialogclose", () => {
        this.propertiesDialogVisible = false;
        this.ngZone.run(() => this.propertiesDialogVisibleChange.emit(false));
      });
      PDFViewerApplication.eventBus.on("propertiesdialogopen", () => {
        this.propertiesDialogVisible = true;
        this.ngZone.run(() => this.propertiesDialogVisibleChange.emit(true));
      });
      PDFViewerApplication.eventBus.on("pagesloaded", (x) => {
        this.ngZone.run(() => this.pagesLoaded.emit(x));
        this.removeScrollbarInInfiniteScrollMode(false);
        if (this.rotation !== void 0 && this.rotation !== null) {
          const r = Number(this.rotation);
          if (r === 0 || r === 90 || r === 180 || r === 270) {
            PDFViewerApplication.pdfViewer.pagesRotation = r;
          }
        }
        setTimeout(() => {
          if (!this.shuttingDown) {
            if (this.nameddest) {
              PDFViewerApplication.pdfLinkService.goToDestination(this.nameddest);
            } else if (this.page) {
              PDFViewerApplication.page = Number(this.page);
            } else if (this.pageLabel) {
              PDFViewerApplication.pdfViewer.currentPageLabel = this.pageLabel;
            }
          }
        });
        this.setZoom();
      });
      PDFViewerApplication.eventBus.on("pagerendered", (x) => {
        this.ngZone.run(() => {
          this.pageRendered.emit(x);
          this.removeScrollbarInInfiniteScrollMode(false);
        });
      });
      PDFViewerApplication.eventBus.on("pagerender", (x) => {
        this.ngZone.run(() => {
          this.pageRender.emit(x);
        });
      });
      PDFViewerApplication.eventBus.on("download", (x) => {
        this.ngZone.run(() => {
          this.pdfDownloaded.emit(x);
        });
      });
      PDFViewerApplication.eventBus.on("scalechanging", (x) => {
        setTimeout(() => {
          this.currentZoomFactor.emit(x.scale);
          this.cdr.markForCheck();
        });
        if (x.presetValue !== "auto" && x.presetValue !== "page-fit" && x.presetValue !== "page-actual" && x.presetValue !== "page-width") {
          if (Math.abs(x.previousScale - x.scale) > 1e-6) {
            this.zoom = x.scale * 100;
            this.zoomChange.emit(x.scale * 100);
          }
        } else if (x.previousPresetValue !== x.presetValue) {
          this.zoomChange.emit(x.presetValue);
        }
      });
      PDFViewerApplication.eventBus.on("rotationchanging", (x) => {
        this.ngZone.run(() => {
          this.rotationChange.emit(x.pagesRotation);
        });
      });
      PDFViewerApplication.eventBus.on("fileinputchange", (x) => {
        this.ngZone.run(() => {
          if (x.fileInput.files && x.fileInput.files.length >= 1) {
            this.srcChange.emit(x.fileInput.files[0].name);
          } else {
            const path = x.fileInput?.value?.replace("C:\\fakepath\\", "");
            this.srcChange.emit(path);
          }
        });
      });
      PDFViewerApplication.eventBus.on("cursortoolchanged", (x) => {
        this.ngZone.run(() => {
          this.handTool = x.tool === PdfCursorTools.HAND;
          this.handToolChange.emit(x.tool === PdfCursorTools.HAND);
        });
      });
      PDFViewerApplication.eventBus.on("sidebarviewchanged", (x) => {
        this.ngZone.run(() => {
          this.sidebarVisibleChange.emit(x.view > 0);
          if (x.view > 0) {
            this.activeSidebarViewChange.emit(x.view);
          }
          if (this.sidebarComponent) {
            this.sidebarComponent.showToolbarWhenNecessary();
          }
        });
      });
      PDFViewerApplication.eventBus.on("documentloaded", (pdfLoadedEvent) => {
        this.ngZone.run(() => {
          const pages = pdfLoadedEvent.source.pagesCount;
          this.pageLabel = void 0;
          if (this.page && this.page >= pages) {
            this.page = pages;
          }
          this.scrollSignatureWarningIntoView(pdfLoadedEvent.source.pdfDocument);
          if (this.findbarVisible) {
            PDFViewerApplication.findBar.open();
          }
          if (this.propertiesDialogVisible) {
            PDFViewerApplication.pdfDocumentProperties.open();
          }
        });
      });
      PDFViewerApplication.eventBus.on("spreadmodechanged", (event) => {
        this.ngZone.run(() => {
          const modes = ["off", "odd", "even"];
          this.spread = modes[event.mode];
        });
      });
      const hideSidebarToolbar = () => {
        this.ngZone.run(() => {
          if (this.sidebarComponent) {
            this.sidebarComponent.showToolbarWhenNecessary();
          }
        });
      };
      PDFViewerApplication.eventBus.on("outlineloaded", hideSidebarToolbar);
      PDFViewerApplication.eventBus.on("attachmentsloaded", hideSidebarToolbar);
      PDFViewerApplication.eventBus.on("layersloaded", hideSidebarToolbar);
      PDFViewerApplication.eventBus.on("annotationlayerrendered", (event) => {
        this.ngZone.run(() => {
          this.annotationLayerRendered.emit(event);
          this.enableOrDisableForms(event.source.div, true);
        });
      });
      PDFViewerApplication.eventBus.on("annotationeditorlayerrendered", (event) => this.ngZone.run(() => this.annotationEditorLayerRendered.emit(event)));
      PDFViewerApplication.eventBus.on("xfalayerrendered", (event) => this.ngZone.run(() => this.xfaLayerRendered.emit(event)));
      PDFViewerApplication.eventBus.on("outlineloaded", (event) => this.ngZone.run(() => this.outlineLoaded.emit(event)));
      PDFViewerApplication.eventBus.on("attachmentsloaded", (event) => this.ngZone.run(() => this.attachmentsloaded.emit(event)));
      PDFViewerApplication.eventBus.on("layersloaded", (event) => this.ngZone.run(() => this.layersloaded.emit(event)));
      PDFViewerApplication.eventBus.on("presentationmodechanged", (event) => {
        const PDFViewerApplication2 = window.PDFViewerApplication;
        PDFViewerApplication2?.pdfViewer?.destroyBookMode();
      });
      PDFViewerApplication.eventBus.on("updatefindcontrolstate", (x) => {
        this.ngZone.run(() => {
          let type = PDFViewerApplication.findController.state.type || "find";
          if (type === "again") {
            type = "findagain";
          }
          const result = {
            caseSensitive: PDFViewerApplication.findController.state.caseSensitive,
            entireWord: PDFViewerApplication.findController.state.entireWord,
            findPrevious: PDFViewerApplication.findController.state.findPrevious,
            highlightAll: PDFViewerApplication.findController.state.highlightAll,
            matchDiacritics: PDFViewerApplication.findController.state.matchDiacritics,
            query: PDFViewerApplication.findController.state.query,
            type
          };
          this.updateFindMatchesCount.emit(__spreadProps(__spreadValues({}, result), {
            current: x.matchesCount.current,
            total: x.matchesCount.total,
            matches: PDFViewerApplication.findController._pageMatches,
            matchesLength: PDFViewerApplication.findController._pageMatchesLength
          }));
          if (this.updateFindState) {
            this.updateFindState.emit(x.state);
          }
        });
      });
      PDFViewerApplication.eventBus.on("updatefindmatchescount", (x) => {
        x.matchesCount.matches = PDFViewerApplication.findController._pageMatches;
        x.matchesCount.matchesLength = PDFViewerApplication.findController._pageMatchesLength;
        this.ngZone.run(() => this.updateFindMatchesCount.emit({
          caseSensitive: PDFViewerApplication.findController.state.caseSensitive,
          entireWord: PDFViewerApplication.findController.state.entireWord,
          findPrevious: PDFViewerApplication.findController.state.findPrevious,
          highlightAll: PDFViewerApplication.findController.state.highlightAll,
          matchDiacritics: PDFViewerApplication.findController.state.matchDiacritics,
          query: PDFViewerApplication.findController.state.query,
          type: PDFViewerApplication.findController.state.type,
          current: x.matchesCount.current,
          total: x.matchesCount.total,
          matches: x.matchesCount.matches,
          matchesLength: x.matchesCount.matchesLength
        }));
      });
      PDFViewerApplication.eventBus.on("pagechanging", (x) => {
        if (!this.shuttingDown) {
          this.ngZone.run(() => {
            const currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
            const currentPageLabel = PDFViewerApplication.pdfViewer.currentPageLabel;
            if (currentPage !== this.page) {
              this.pageChange.emit(currentPage);
            }
            if (currentPageLabel !== this.pageLabel) {
              this.pageLabelChange.emit(currentPageLabel);
            }
          });
        }
      });
      setTimeout(() => __async(this, null, function* () {
        return this.checkHeight();
      }), 100);
      if (!!this._src) {
        const options = {
          password: this.password,
          verbosity: this.logLevel
        };
        if (this._src["range"]) {
          options.range = this._src["range"];
        }
        if (this.httpHeaders) {
          options.httpHeaders = this.httpHeaders;
        }
        if (this.authorization) {
          options.withCredentials = true;
          if (typeof this.authorization != "boolean") {
            if (!options.httpHeaders)
              options.httpHeaders = {};
            options.httpHeaders.Authorization = this.authorization;
          }
        }
        options.baseHref = this.baseHref;
        PDFViewerApplication.onError = (error) => this.pdfLoadingFailed.emit(error);
        this.ngZone.runOutsideAngular(() => __async(this, null, function* () {
          if (typeof this._src === "string") {
            options.url = this._src;
          } else if (this._src instanceof ArrayBuffer) {
            options.data = this._src;
          } else if (this._src instanceof Uint8Array) {
            options.data = this._src;
          }
          options.rangeChunkSize = pdfDefaultOptions.rangeChunkSize;
          yield PDFViewerApplication.open(options);
          this.pdfLoadingStarts.emit({});
          setTimeout(() => __async(this, null, function* () {
            return this.setZoom();
          }));
        }));
      }
      setTimeout(() => {
        if (!this.shuttingDown) {
          if (this.page) {
            PDFViewerApplication.page = Number(this.page);
          }
        }
      }, 100);
    }
  }
  removeScrollbarInInfiniteScrollMode(restoreHeight) {
    if (this.pageViewMode === "infinite-scroll" || restoreHeight) {
      const viewer = document.getElementById("viewer");
      const zoom = document.getElementsByClassName("zoom")[0];
      if (viewer) {
        setTimeout(() => {
          if (this.pageViewMode === "infinite-scroll") {
            const height = viewer.clientHeight + 17;
            if (this.primaryMenuVisible) {
              this.height = height + 35 + "px";
            } else if (height > 17) {
              this.height = height + "px";
            } else if (this.height === void 0) {
              this.height = "100%";
            }
            if (zoom) {
              zoom.style.height = this.height;
            }
          } else if (restoreHeight) {
            this.autoHeight = true;
            this._height = void 0;
            this.checkHeight();
          }
        });
      }
    }
  }
  openPDF2() {
    return __async(this, null, function* () {
      this.overrideDefaultSettings();
      const PDFViewerApplication = window.PDFViewerApplication;
      PDFViewerApplication.pdfViewer.destroyBookMode();
      PDFViewerApplication.pdfViewer.stopRendering();
      PDFViewerApplication.pdfThumbnailViewer.stopRendering();
      PDFViewerApplication.pdfDocument?.annotationStorage?.resetModified();
      yield PDFViewerApplication.close();
      this.formSupport.reset();
      const options = {
        password: this.password,
        verbosity: this.logLevel
      };
      if (this._src?.["range"]) {
        options.range = this._src["range"];
      }
      if (this.httpHeaders) {
        options.httpHeaders = this.httpHeaders;
      }
      if (this.authorization) {
        options.withCredentials = true;
        if (typeof this.authorization != "boolean") {
          if (!options.httpHeaders)
            options.httpHeaders = {};
          options.httpHeaders.Authorization = this.authorization;
        }
      }
      options.baseHref = this.baseHref;
      try {
        if (typeof this._src === "string") {
          options.url = this._src;
        } else if (this._src instanceof ArrayBuffer) {
          options.data = this._src;
          if (this._src.byteLength === 0) {
            return;
          }
        } else if (this._src instanceof Uint8Array) {
          options.data = this._src;
          if (this._src.length === 0) {
            return;
          }
        }
        options.rangeChunkSize = pdfDefaultOptions.rangeChunkSize;
        yield PDFViewerApplication.open(options);
        this.pdfLoaded.emit({
          pagesCount: PDFViewerApplication.pagesCount
        });
      } catch (error) {
        this.pdfLoadingFailed.emit(error);
      }
    });
  }
  selectCursorTool() {
    const PDFViewerApplication = window.PDFViewerApplication;
    PDFViewerApplication.eventBus.dispatch("switchcursortool", {
      tool: this.handTool ? 1 : 0
    });
  }
  ngOnDestroy() {
    return __async(this, null, function* () {
      if (typeof window === "undefined") {
        return;
      }
      const PDFViewerApplication = window.PDFViewerApplication;
      PDFViewerApplication?.pdfViewer?.destroyBookMode();
      PDFViewerApplication?.pdfViewer?.stopRendering();
      PDFViewerApplication?.pdfThumbnailViewer?.stopRendering();
      const originalPrint = _NgxExtendedPdfViewerComponent.originalPrint;
      if (window && originalPrint && !originalPrint.toString().includes("printPdf")) {
        window.print = originalPrint;
      }
      const printContainer = document.querySelector("#printContainer");
      if (printContainer) {
        printContainer.parentElement?.removeChild(printContainer);
      }
      window.getFormValueFromAngular = void 0;
      window.registerAcroformAnnotations = void 0;
      this.shuttingDown = true;
      this.service.ngxExtendedPdfViewerInitialized = false;
      if (this.initTimeout) {
        clearTimeout(this.initTimeout);
        this.initTimeout = void 0;
      }
      if (PDFViewerApplication) {
        PDFViewerApplication.pdfDocument?.annotationStorage?.resetModified();
        this.formSupport.reset();
        PDFViewerApplication._cleanup();
        try {
          yield PDFViewerApplication.close();
        } catch (error) {
        }
        if (PDFViewerApplication.printKeyDownListener) {
          removeEventListener("keydown", PDFViewerApplication.printKeyDownListener, true);
        }
        setTimeout(() => {
          if (PDFViewerApplication._boundEvents) {
            PDFViewerApplication.unbindWindowEvents();
          }
          const bus = PDFViewerApplication.eventBus;
          if (bus) {
            PDFViewerApplication.unbindEvents();
            for (const key in bus._listeners) {
              if (bus._listeners[key]) {
                const list = bus._listeners[key];
                for (let i = 0; i < list.length; i++) {
                  list[i] = void 0;
                }
                bus._listeners[key] = void 0;
              }
            }
          }
          PDFViewerApplication.eventBus = null;
        });
      }
    });
  }
  isPrimaryMenuVisible() {
    if (this.showToolbar) {
      const visible = this.showDownloadButton || this.showDrawEditor || this.showTextEditor || this.showFindButton || this.showOpenFileButton || this.showPagingButtons || this.showPresentationModeButton || this.showPrintButton || this.showPropertiesButton || this.showRotateButton || this.showHandToolButton || this.showScrollingButton || this.showSpreadButton || this.showSidebarButton || this.showZoomButtons;
      if (visible) {
        return true;
      }
    }
    return false;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (typeof window === "undefined") {
        return;
      }
      const PDFViewerApplication = window.PDFViewerApplication;
      const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
      if (this.service.ngxExtendedPdfViewerInitialized) {
        if ("src" in changes || "base64Src" in changes) {
          if (this.srcChangeTriggeredByUser) {
            this.srcChangeTriggeredByUser = false;
          } else {
            if (this.pageViewMode === "book") {
              const PDFViewerApplication2 = window.PDFViewerApplication;
              PDFViewerApplication2?.pdfViewer?.destroyBookMode();
              PDFViewerApplication2?.pdfViewer?.stopRendering();
              PDFViewerApplication2?.pdfThumbnailViewer?.stopRendering();
            }
            if (!!this._src) {
              if (this.ngxExtendedPdfViewerIncompletelyInitialized) {
                this.openPDF();
              } else {
                yield this.openPDF2();
              }
            } else {
              PDFViewerApplication.pdfDocument?.annotationStorage?.resetModified();
              this.formSupport.reset();
              let inputField = PDFViewerApplication.appConfig?.openFileInput;
              if (!inputField) {
                inputField = document.querySelector("#fileInput");
              }
              if (inputField) {
                inputField.value = "";
              }
              yield PDFViewerApplication.close();
            }
          }
        }
        if ("enableDragAndDrop" in changes) {
          PDFViewerApplicationOptions.set("enableDragAndDrop", this.enableDragAndDrop);
        }
        if ("findbarVisible" in changes) {
          if (changes["findbarVisible"].currentValue) {
            PDFViewerApplication.findBar.open();
          } else {
            PDFViewerApplication.findBar.close();
          }
        }
        if ("propertiesDialogVisible" in changes) {
          if (this.propertiesDialogVisible) {
            PDFViewerApplication.pdfDocumentProperties.open();
          } else {
            PDFViewerApplication.pdfDocumentProperties.close();
          }
        }
        if ("zoom" in changes) {
          yield this.setZoom();
        }
        if ("maxZoom" in changes) {
          PDFViewerApplicationOptions.set("maxZoom", this.maxZoom);
        }
        if ("minZoom" in changes) {
          PDFViewerApplicationOptions.set("minZoom", this.minZoom);
        }
        if ("handTool" in changes) {
          this.selectCursorTool();
        }
        if ("page" in changes) {
          if (this.page) {
            if (this.page != PDFViewerApplication.page) {
              PDFViewerApplication.page = this.page;
            }
          }
        }
        if ("pageLabel" in changes) {
          if (this.pageLabel) {
            if (this.pageLabel !== PDFViewerApplication.pdfViewer.currentPageLabel) {
              PDFViewerApplication.pdfViewer.currentPageLabel = this.pageLabel;
            }
          }
        }
        if ("rotation" in changes) {
          if (this.rotation) {
            const r = Number(this.rotation);
            if (r === 0 || r === 90 || r === 180 || r === 270) {
              PDFViewerApplication.pdfViewer.pagesRotation = r;
            }
          } else {
            PDFViewerApplication.pdfViewer.pagesRotation = 0;
          }
        }
        if ("scrollMode" in changes) {
          if (this.scrollMode || this.scrollMode === ScrollModeType.vertical) {
            if (PDFViewerApplication.pdfViewer.scrollMode !== Number(this.scrollMode)) {
              PDFViewerApplication.eventBus.dispatch("switchscrollmode", {
                mode: Number(this.scrollMode)
              });
            }
          }
        }
        if ("activeSidebarView" in changes) {
          if (this.sidebarVisible) {
            PDFViewerApplication.pdfSidebar.open();
            const view = Number(this.activeSidebarView);
            if (view === 1 || view === 2 || view === 3 || view === 4) {
              PDFViewerApplication.pdfSidebar.switchView(view, true);
            } else {
              console.error("[activeSidebarView] must be an integer value between 1 and 4");
            }
          } else {
            PDFViewerApplication.pdfSidebar.close();
          }
        }
        if ("filenameForDownload" in changes) {
          PDFViewerApplication.appConfig.filenameForDownload = this.filenameForDownload;
        }
        if ("nameddest" in changes) {
          if (this.nameddest) {
            PDFViewerApplication.pdfLinkService.goToDestination(this.nameddest);
          }
        }
        if ("spread" in changes) {
          if (this.spread === "even") {
            PDFViewerApplication.spreadModeOnLoad = 2;
            PDFViewerApplication.pdfViewer.spreadMode = 2;
            this.onSpreadChange("even");
          } else if (this.spread === "odd") {
            PDFViewerApplication.spreadModeOnLoad = 1;
            PDFViewerApplication.pdfViewer.spreadMode = 1;
            this.onSpreadChange("odd");
          } else {
            PDFViewerApplication.spreadModeOnLoad = 0;
            PDFViewerApplication.pdfViewer.spreadMode = 0;
            this.onSpreadChange("off");
          }
        }
        this.hideToolbarIfItIsEmpty();
        setTimeout(() => this.calcViewerPositionTop());
      }
      if ("printResolution" in changes) {
        const options = PDFViewerApplicationOptions;
        if (options) {
          options.set("printResolution", this.printResolution);
        }
      }
      if ("ignoreKeyboard" in changes) {
        const options = PDFViewerApplicationOptions;
        if (options) {
          this.overrideDefaultSettings();
        }
      }
      if ("ignoreKeys" in changes) {
        const options = PDFViewerApplicationOptions;
        if (options) {
          this.overrideDefaultSettings();
        }
      }
      if ("acceptKeys" in changes) {
        const options = PDFViewerApplicationOptions;
        if (options) {
          this.overrideDefaultSettings();
        }
      }
      if ("showBorders" in changes) {
        if (!changes["showBorders"].isFirstChange()) {
          const options = PDFViewerApplicationOptions;
          if (options) {
            this.overrideDefaultSettings();
            const viewer = document.getElementById("viewer");
            if (this.showBorders) {
              viewer.classList.remove("removePageBorders");
            } else {
              viewer.classList.add("removePageBorders");
            }
            if (PDFViewerApplication.pdfViewer) {
              PDFViewerApplication.pdfViewer.removePageBorders = !this.showBorders;
            }
            const zoomEvent = {
              source: viewer,
              // tslint:disable-next-line:no-bitwise
              scale: (Number(this.zoom) | 100) / 100,
              presetValue: this.zoom
            };
            PDFViewerApplication.eventBus.dispatch("scalechanging", zoomEvent);
          }
        }
      }
      if ("showUnverifiedSignatures" in changes) {
        if (PDFViewerApplication?.pdfDocument) {
          PDFViewerApplication.pdfDocument._transport.messageHandler.send("showUnverifiedSignatures", this.showUnverifiedSignatures);
        }
      }
      if ("formData" in changes) {
        if (!changes["formData"].isFirstChange()) {
          this.formSupport.updateFormFieldsInPdfCalledByNgOnChanges(changes["formData"].previousValue);
        }
      }
      if ("enablePrint" in changes) {
        if (!changes["enablePrint"].isFirstChange()) {
          PDFViewerApplication.enablePrint = this.enablePrint;
        }
      }
      if ("customFindbar" in changes && !changes["customFindbar"].isFirstChange() || "customFindbarButtons" in changes && !changes["customFindbarButtons"].isFirstChange() || "customFindbarInputArea" in changes && !changes["customFindbarInputArea"].isFirstChange() || "customToolbar" in changes && !changes["customToolbar"].isFirstChange()) {
        if (this.dummyComponents) {
          this.dummyComponents.addMissingStandardWidgets();
        }
      }
      if ("pageViewMode" in changes && !changes["pageViewMode"].isFirstChange()) {
        this.pageViewMode = changes["pageViewMode"].currentValue;
      }
      if ("replaceBrowserPrint" in changes && typeof window !== "undefined") {
        if (this.replaceBrowserPrint) {
          if (window.printPDF) {
            window.print = window.printPDF;
          }
        } else {
          const originalPrint = _NgxExtendedPdfViewerComponent.originalPrint;
          if (originalPrint && !originalPrint.toString().includes("printPdf")) {
            window.print = originalPrint;
          }
        }
      }
      if ("disableForms" in changes) {
        this.enableOrDisableForms(this.elementRef.nativeElement, false);
      }
      setTimeout(() => this.calcViewerPositionTop());
    });
  }
  setZoom() {
    return __async(this, null, function* () {
      if (typeof window === "undefined") {
        return;
      }
      if (this.root) {
        const PDFViewerApplication = window.PDFViewerApplication;
        let zoomAsNumber = this.zoom;
        if (String(zoomAsNumber).endsWith("%")) {
          zoomAsNumber = Number(String(zoomAsNumber).replace("%", "")) / 100;
        } else if (!isNaN(Number(zoomAsNumber))) {
          zoomAsNumber = Number(zoomAsNumber) / 100;
        }
        if (!zoomAsNumber) {
          if (!PDFViewerApplication.store) {
          } else {
            const userSetting = yield PDFViewerApplication.store.get("zoom");
            if (userSetting) {
              if (!isNaN(Number(userSetting))) {
                zoomAsNumber = Number(userSetting) / 100;
              } else {
                zoomAsNumber = userSetting;
              }
            } else {
              zoomAsNumber = "auto";
            }
          }
        }
        if (PDFViewerApplication) {
          const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
          PDFViewerApplicationOptions.set("defaultZoomValue", zoomAsNumber);
        }
        const scaleDropdownField = this.root.nativeElement.querySelector("#scaleSelect");
        if (scaleDropdownField) {
          if (this.zoom === "auto" || this.zoom === "page-fit" || this.zoom === "page-actual" || this.zoom === "page-width") {
            scaleDropdownField.value = this.zoom;
          } else {
            scaleDropdownField.value = "custom";
            if (scaleDropdownField.options) {
              for (const option of scaleDropdownField.options) {
                if (option.value === "custom") {
                  option.textContent = `${Math.round(Number(zoomAsNumber) * 1e5) / 1e3}%`;
                }
              }
            }
          }
        }
        if (PDFViewerApplication.pdfViewer) {
          PDFViewerApplication.pdfViewer.currentScaleValue = zoomAsNumber ?? "auto";
        }
      }
    });
  }
  onResize() {
    const pdfViewer = document.getElementsByClassName("html");
    if (pdfViewer && pdfViewer.length > 0) {
      const container = document.getElementById("outerContainer");
      if (container) {
        const width = container.clientWidth;
        this.toolbarWidthInPixels = width;
        if (this.secondaryToolbarComponent) {
          this.secondaryToolbarComponent.checkVisibility();
        }
      }
      this.checkHeight();
    }
    try {
      const observer = new ResizeObserver(() => this.removeScrollbarInInfiniteScrollMode(false));
      const viewer = document.getElementById("viewer");
      if (viewer) {
        observer.observe(viewer);
      }
    } catch (exception) {
      console.log("ResizeObserver is not supported by your browser");
    }
  }
  onContextMenu() {
    return this.contextMenuAllowed;
  }
  scrollSignatureWarningIntoView(pdf) {
    return __async(this, null, function* () {
      this.hasSignature = false;
      for (let i = 1; i <= pdf?.numPages; i++) {
        const page = yield pdf.getPage(i);
        const annotations = yield page.getAnnotations();
        annotations.forEach((a) => {
          if (a.fieldType === "Sig") {
            this.ngZone.run(() => {
              this.hasSignature = true;
              setTimeout(() => {
                const viewerContainer = document.querySelector("#viewerContainer");
                viewerContainer.scrollBy(0, -32);
              });
            });
          }
        });
      }
      this.pdfLoaded.emit({
        pagesCount: pdf?.numPages
      });
    });
  }
  zoomToPageWidth(event) {
    return __async(this, null, function* () {
      if (this.handTool) {
        if (!pdfDefaultOptions.doubleTapZoomsInHandMode) {
          return;
        }
      } else {
        if (!pdfDefaultOptions.doubleTapZoomsInTextSelectionMode) {
          return;
        }
      }
      const PDFViewerApplication = window.PDFViewerApplication;
      const desiredCenterY = event.clientY;
      const previousScale = PDFViewerApplication.pdfViewer.currentScale;
      if (this.zoom !== pdfDefaultOptions.doubleTapZoomFactor && this.zoom + "%" !== pdfDefaultOptions.doubleTapZoomFactor) {
        this.previousZoom = this.zoom;
        this.zoom = pdfDefaultOptions.doubleTapZoomFactor;
        yield this.setZoom();
      } else if (pdfDefaultOptions.doubleTapResetsZoomOnSecondDoubleTap) {
        if (this.previousZoom) {
          this.zoom = this.previousZoom;
        } else {
          this.zoom = "page-width";
        }
        yield this.setZoom();
      } else {
        return;
      }
      const currentScale = PDFViewerApplication.pdfViewer.currentScale;
      const scaleCorrectionFactor = currentScale / previousScale - 1;
      const rect = PDFViewerApplication.pdfViewer.container.getBoundingClientRect();
      const dy = desiredCenterY - rect.top;
      PDFViewerApplication.pdfViewer.container.scrollTop += dy * scaleCorrectionFactor;
    });
  }
  enableOrDisableForms(div, doNotEnable) {
    if (!this.disableForms && doNotEnable) {
      return;
    }
    const xfaLayers = Array.from(div.querySelectorAll(".xfaLayer"));
    const acroFormLayers = Array.from(div.querySelectorAll(".annotationLayer"));
    const layers = xfaLayers.concat(...acroFormLayers);
    layers.forEach((layer) => layer.querySelectorAll("input").forEach((x) => x.disabled = this.disableForms));
    layers.forEach((layer) => layer.querySelectorAll("select").forEach((x) => x.disabled = this.disableForms));
    layers.forEach((layer) => layer.querySelectorAll("textarea").forEach((x) => x.disabled = this.disableForms));
  }
};
NgxExtendedPdfViewerComponent.originalPrint = typeof window !== "undefined" ? window.print : void 0;
NgxExtendedPdfViewerComponent.\u0275fac = function NgxExtendedPdfViewerComponent_Factory(t) {
  return new (t || NgxExtendedPdfViewerComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(PDFNotificationService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(PlatformLocation), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgxExtendedPdfViewerService), \u0275\u0275directiveInject(Renderer2));
};
NgxExtendedPdfViewerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: NgxExtendedPdfViewerComponent,
  selectors: [["ngx-extended-pdf-viewer"]],
  viewQuery: function NgxExtendedPdfViewerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(PdfDummyComponentsComponent, 5);
      \u0275\u0275viewQuery(_c7, 5);
      \u0275\u0275viewQuery(_c8, 5);
      \u0275\u0275viewQuery(_c9, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dummyComponents = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.root = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.secondaryToolbarComponent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sidebarComponent = _t.first);
    }
  },
  hostBindings: function NgxExtendedPdfViewerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("contextmenu", function NgxExtendedPdfViewerComponent_contextmenu_HostBindingHandler() {
        return ctx.onContextMenu();
      });
    }
  },
  inputs: {
    customFindbarInputArea: "customFindbarInputArea",
    customToolbar: "customToolbar",
    customFindbar: "customFindbar",
    customFindbarButtons: "customFindbarButtons",
    customPdfViewer: "customPdfViewer",
    customSecondaryToolbar: "customSecondaryToolbar",
    customSidebar: "customSidebar",
    customThumbnail: "customThumbnail",
    customFreeFloatingBar: "customFreeFloatingBar",
    showFreeFloatingBar: "showFreeFloatingBar",
    enableDragAndDrop: "enableDragAndDrop",
    formData: "formData",
    disableForms: "disableForms",
    pageViewMode: "pageViewMode",
    scrollMode: "scrollMode",
    authorization: "authorization",
    httpHeaders: "httpHeaders",
    contextMenuAllowed: "contextMenuAllowed",
    enablePrint: "enablePrint",
    delayFirstView: "delayFirstView",
    showTextEditor: "showTextEditor",
    showStampEditor: "showStampEditor",
    showDrawEditor: "showDrawEditor",
    logLevel: "logLevel",
    relativeCoordsOptions: "relativeCoordsOptions",
    minifiedJSLibraries: "minifiedJSLibraries",
    printResolution: "printResolution",
    rotation: "rotation",
    src: "src",
    base64Src: "base64Src",
    minHeight: "minHeight",
    height: "height",
    useBrowserLocale: "useBrowserLocale",
    forceUsingLegacyES5: "forceUsingLegacyES5",
    backgroundColor: "backgroundColor",
    filenameForDownload: "filenameForDownload",
    ignoreKeyboard: "ignoreKeyboard",
    ignoreKeys: "ignoreKeys",
    acceptKeys: "acceptKeys",
    imageResourcesPath: "imageResourcesPath",
    localeFolderPath: "localeFolderPath",
    language: "language",
    listenToURL: "listenToURL",
    nameddest: "nameddest",
    password: "password",
    replaceBrowserPrint: "replaceBrowserPrint",
    showUnverifiedSignatures: "showUnverifiedSignatures",
    startTabindex: "startTabindex",
    showSidebarButton: "showSidebarButton",
    sidebarVisible: "sidebarVisible",
    activeSidebarView: "activeSidebarView",
    findbarVisible: "findbarVisible",
    propertiesDialogVisible: "propertiesDialogVisible",
    showFindButton: "showFindButton",
    showFindHighlightAll: "showFindHighlightAll",
    showFindMatchCase: "showFindMatchCase",
    showFindCurrentPageOnly: "showFindCurrentPageOnly",
    showFindPageRange: "showFindPageRange",
    showFindEntireWord: "showFindEntireWord",
    showFindEntirePhrase: "showFindEntirePhrase",
    showFindMatchDiacritics: "showFindMatchDiacritics",
    showFindFuzzySearch: "showFindFuzzySearch",
    showFindResultsCount: "showFindResultsCount",
    showFindMessages: "showFindMessages",
    showPagingButtons: "showPagingButtons",
    showZoomButtons: "showZoomButtons",
    showPresentationModeButton: "showPresentationModeButton",
    showOpenFileButton: "showOpenFileButton",
    showPrintButton: "showPrintButton",
    showDownloadButton: "showDownloadButton",
    theme: "theme",
    showToolbar: "showToolbar",
    showSecondaryToolbarButton: "showSecondaryToolbarButton",
    showSinglePageModeButton: "showSinglePageModeButton",
    showVerticalScrollButton: "showVerticalScrollButton",
    showHorizontalScrollButton: "showHorizontalScrollButton",
    showWrappedScrollButton: "showWrappedScrollButton",
    showInfiniteScrollButton: "showInfiniteScrollButton",
    showBookModeButton: "showBookModeButton",
    showRotateButton: "showRotateButton",
    handTool: "handTool",
    showHandToolButton: "showHandToolButton",
    showScrollingButton: "showScrollingButton",
    showSpreadButton: "showSpreadButton",
    showPropertiesButton: "showPropertiesButton",
    showBorders: "showBorders",
    spread: "spread",
    page: "page",
    pageLabel: "pageLabel",
    textLayer: "textLayer",
    zoom: "zoom",
    zoomLevels: "zoomLevels",
    maxZoom: "maxZoom",
    minZoom: "minZoom",
    mobileFriendlyZoom: "mobileFriendlyZoom"
  },
  outputs: {
    formDataChange: "formDataChange",
    pageViewModeChange: "pageViewModeChange",
    progress: "progress",
    srcChange: "srcChange",
    scrollModeChange: "scrollModeChange",
    afterPrint: "afterPrint",
    beforePrint: "beforePrint",
    currentZoomFactor: "currentZoomFactor",
    rotationChange: "rotationChange",
    annotationLayerRendered: "annotationLayerRendered",
    annotationEditorLayerRendered: "annotationEditorLayerRendered",
    xfaLayerRendered: "xfaLayerRendered",
    outlineLoaded: "outlineLoaded",
    attachmentsloaded: "attachmentsloaded",
    layersloaded: "layersloaded",
    sidebarVisibleChange: "sidebarVisibleChange",
    activeSidebarViewChange: "activeSidebarViewChange",
    findbarVisibleChange: "findbarVisibleChange",
    propertiesDialogVisibleChange: "propertiesDialogVisibleChange",
    handToolChange: "handToolChange",
    spreadChange: "spreadChange",
    thumbnailDrawn: "thumbnailDrawn",
    pageChange: "pageChange",
    pageLabelChange: "pageLabelChange",
    pagesLoaded: "pagesLoaded",
    pageRender: "pageRender",
    pageRendered: "pageRendered",
    pdfDownloaded: "pdfDownloaded",
    pdfLoaded: "pdfLoaded",
    pdfLoadingStarts: "pdfLoadingStarts",
    pdfLoadingFailed: "pdfLoadingFailed",
    textLayerRendered: "textLayerRendered",
    annotationEditorModeChanged: "annotationEditorModeChanged",
    updateFindMatchesCount: "updateFindMatchesCount",
    updateFindState: "updateFindState",
    zoomChange: "zoomChange"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c10,
  decls: 9,
  vars: 5,
  consts: [["defaultPdfViewer", ""], ["defaultFreeFloatingBar", ""], ["root", ""], ["pdfsidebar", ""], ["pdfSecondaryToolbarComponent", ""], [4, "ngIf"], [3, "zoom", "width"], [4, "ngTemplateOutlet"], [1, "zoom"], [1, "html"], ["id", "outerContainer", 3, "resize"], ["class", "free-floating-bar", 4, "ngIf"], [3, "thumbnailDrawn", "sidebarVisible", "showSidebarButton", "customSidebar", "customThumbnail", "mobileFriendlyZoomScale", "sidebarPositionTop"], ["id", "mainContainer"], [3, "onToolbarLoaded", "pageViewModeChange", "sidebarVisible", "customToolbar", "mobileFriendlyZoomScale", "pageViewMode", "primaryMenuVisible", "scrollMode", "showPropertiesButton", "showBookModeButton", "showDownloadButton", "showDrawEditor", "showFindButton", "showHandToolButton", "showHorizontalScrollButton", "showInfiniteScrollButton", "showOpenFileButton", "showPagingButtons", "showPresentationModeButton", "showPrintButton", "showRotateButton", "showSecondaryToolbarButton", "showSidebarButton", "showSinglePageModeButton", "showSpreadButton", "showStampEditor", "showTextEditor", "showVerticalScrollButton", "showWrappedScrollButton", "showZoomButtons", "spread", "textLayer", "toolbarMarginTop", "toolbarWidth", "zoomLevels", "findbarVisible"], ["id", "editorFreeTextParamsToolbar", 1, "editorParamsToolbar", "hidden", "doorHangerRight"], [1, "editorParamsToolbarContainer"], [1, "editorParamsSetter"], ["for", "editorFreeTextColor", "data-l10n-id", "editor_free_text_color", 1, "editorParamsLabel"], ["type", "color", "id", "editorFreeTextColor", "tabindex", "100", 1, "editorParamsColor"], ["for", "editorFreeTextFontSize", "data-l10n-id", "editor_free_text_size", 1, "editorParamsLabel"], ["type", "range", "id", "editorFreeTextFontSize", "value", "10", "min", "5", "max", "100", "step", "1", "tabindex", "101", 1, "editorParamsSlider"], ["id", "editorInkParamsToolbar", 1, "editorParamsToolbar", "hidden", "doorHangerRight"], ["for", "editorInkColor", "data-l10n-id", "editor_ink_color", 1, "editorParamsLabel"], ["type", "color", "id", "editorInkColor", "tabindex", "102", 1, "editorParamsColor"], ["for", "editorInkThickness", "data-l10n-id", "editor_ink_thickness", 1, "editorParamsLabel"], ["type", "range", "id", "editorInkThickness", "value", "1", "min", "1", "max", "20", "step", "1", "tabindex", "103", 1, "editorParamsSlider"], ["for", "editorInkOpacity", "data-l10n-id", "editor_ink_opacity", 1, "editorParamsLabel"], ["type", "range", "id", "editorInkOpacity", "value", "100", "min", "1", "max", "100", "step", "1", "tabindex", "104", 1, "editorParamsSlider"], [3, "spreadChange", "customSecondaryToolbar", "secondaryToolbarTop", "mobileFriendlyZoomScale", "localizationInitialized"], [3, "findbarLeft", "findbarTop", "mobileFriendlyZoomScale", "showFindButton", "customFindbarInputArea", "customFindbarButtons", "showFindCurrentPageOnly", "showFindEntirePhrase", "showFindEntireWord", "showFindFuzzySearch", "showFindHighlightAll", "showFindMatchDiacritics", "showFindMatchCase", "showFindMessages", "showFindPageRange", "showFindResultsCount"], ["id", "viewerContainer", "tabindex", "0", "role", "document"], ["class", "unverified-signature-warning", 4, "ngIf"], ["id", "viewer", 1, "pdfViewer", 3, "dblclick"], ["id", "dialogContainer"], ["type", "file", "id", "fileInput", 1, "hidden"], ["id", "printContainer"], [1, "free-floating-bar"], [1, "unverified-signature-warning"]],
  template: function NgxExtendedPdfViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c10);
      \u0275\u0275template(0, NgxExtendedPdfViewerComponent_pdf_dark_theme_0_Template, 1, 0, "pdf-dark-theme", 5)(1, NgxExtendedPdfViewerComponent_pdf_light_theme_1_Template, 1, 0, "pdf-light-theme", 5);
      \u0275\u0275element(2, "pdf-acroform-default-theme")(3, "pdf-dynamic-css", 6);
      \u0275\u0275template(4, NgxExtendedPdfViewerComponent_ng_content_4_Template, 1, 0, "ng-content", 7)(5, NgxExtendedPdfViewerComponent_ng_template_5_Template, 49, 87, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, NgxExtendedPdfViewerComponent_ng_template_7_Template, 0, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const defaultPdfViewer_r4 = \u0275\u0275reference(6);
      \u0275\u0275property("ngIf", ctx.theme === "dark");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.theme === "light");
      \u0275\u0275advance(2);
      \u0275\u0275property("zoom", ctx.mobileFriendlyZoomScale)("width", ctx.toolbarWidthInPixels);
      \u0275\u0275advance();
      \u0275\u0275property("ngTemplateOutlet", ctx.customPdfViewer ? ctx.customPdfViewer : defaultPdfViewer_r4);
    }
  },
  dependencies: [PdfDarkThemeComponent, PdfLightThemeComponent, PdfAcroformDefaultThemeComponent, DynamicCssComponent, PdfSidebarComponent, PdfDummyComponentsComponent, PdfToolbarComponent, PdfSecondaryToolbarComponent, PdfFindbarComponent, PdfContextMenuComponent, PdfErrorMessageComponent, PdfPasswordDialogComponent, PdfDocumentPropertiesDialogComponent, PdfPreparePrintingDialogComponent, NgIf, NgTemplateOutlet, AsyncPipe, TranslatePipe],
  styles: ["#mainContainer.toolbar-hidden[_ngcontent-%COMP%]{margin-top:-30px}.server-side-rendering[_ngcontent-%COMP%], .hidden[_ngcontent-%COMP%]{display:none}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxExtendedPdfViewerComponent, [{
    type: Component,
    args: [{
      selector: "ngx-extended-pdf-viewer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<pdf-dark-theme *ngIf="theme === 'dark'"></pdf-dark-theme>
<pdf-light-theme *ngIf="theme === 'light'"></pdf-light-theme>
<pdf-acroform-default-theme></pdf-acroform-default-theme>

<pdf-dynamic-css [zoom]="mobileFriendlyZoomScale" [width]="toolbarWidthInPixels"></pdf-dynamic-css>
<ng-content *ngTemplateOutlet="customPdfViewer ? customPdfViewer : defaultPdfViewer"></ng-content>

<ng-template #defaultPdfViewer>
  <div class="zoom" [style.height]="minHeight ? minHeight : height" #root>
    <div class="html">
      <div class="body pdf-js-version-{{ majorMinorPdfJsVersion }}" [style.backgroundColor]="backgroundColor">
        <div id="outerContainer" (window:resize)="onResize()">
          <div class="free-floating-bar" *ngIf="showFreeFloatingBar">
            <ng-content *ngTemplateOutlet="customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar"> </ng-content>
          </div>
          <pdf-sidebar
            #pdfsidebar
            [sidebarVisible]="sidebarVisible || false"
            [showSidebarButton]="showSidebarButton"
            [customSidebar]="customSidebar"
            [customThumbnail]="customThumbnail"
            (thumbnailDrawn)="thumbnailDrawn.emit($event)"
            [mobileFriendlyZoomScale]="mobileFriendlyZoomScale"
            [sidebarPositionTop]="sidebarPositionTop"
          >
          </pdf-sidebar>
          <div id="mainContainer" [class.toolbar-hidden]="!primaryMenuVisible">
            <pdf-dummy-components></pdf-dummy-components>

            <pdf-toolbar
              (onToolbarLoaded)="onToolbarLoaded($event)"
              [sidebarVisible]="sidebarVisible"
              [class.server-side-rendering]="serverSideRendering"
              [customToolbar]="customToolbar"
              [mobileFriendlyZoomScale]="mobileFriendlyZoomScale"
              [(pageViewMode)]="pageViewMode"
              [primaryMenuVisible]="primaryMenuVisible"
              [scrollMode]="scrollMode ?? 0"
              [showPropertiesButton]="showPropertiesButton"
              [showBookModeButton]="showBookModeButton"
              [showDownloadButton]="showDownloadButton"
              [showDrawEditor]="showDrawEditor"
              [showFindButton]="showFindButton"
              [showHandToolButton]="showHandToolButton"
              [showHorizontalScrollButton]="showHorizontalScrollButton"
              [showInfiniteScrollButton]="showInfiniteScrollButton"
              [showOpenFileButton]="showOpenFileButton"
              [showPagingButtons]="showPagingButtons"
              [showPresentationModeButton]="showPresentationModeButton && pageViewMode !== 'book'"
              [showPrintButton]="showPrintButton && enablePrint"
              [showRotateButton]="showRotateButton"
              [showSecondaryToolbarButton]="showSecondaryToolbarButton && !service.secondaryMenuIsEmpty"
              [showSidebarButton]="showSidebarButton"
              [showSinglePageModeButton]="showSinglePageModeButton"
              [showSpreadButton]="showSpreadButton"
              [showStampEditor]="showStampEditor"
              [showTextEditor]="showTextEditor"
              [showVerticalScrollButton]="showVerticalScrollButton"
              [showWrappedScrollButton]="showWrappedScrollButton"
              [showZoomButtons]="showZoomButtons && pageViewMode !== 'book'"
              [spread]="spread"
              [textLayer]="textLayer"
              [toolbarMarginTop]="toolbarMarginTop"
              [toolbarWidth]="toolbarWidth"
              [zoomLevels]="zoomLevels"
              [findbarVisible]="findbarVisible"
            ></pdf-toolbar>

            <div class="editorParamsToolbar hidden doorHangerRight" id="editorFreeTextParamsToolbar" [class.server-side-rendering]="serverSideRendering">
              <div class="editorParamsToolbarContainer">
                <div class="editorParamsSetter">
                  <label for="editorFreeTextColor" class="editorParamsLabel" data-l10n-id="editor_free_text_color">Font Color</label>
                  <input type="color" id="editorFreeTextColor" class="editorParamsColor" tabindex="100" />
                </div>
                <div class="editorParamsSetter">
                  <label for="editorFreeTextFontSize" class="editorParamsLabel" data-l10n-id="editor_free_text_size">Font Size</label>
                  <input type="range" id="editorFreeTextFontSize" class="editorParamsSlider" value="10" min="5" max="100" step="1" tabindex="101" />
                </div>
              </div>
            </div>

            <div class="editorParamsToolbar hidden doorHangerRight" id="editorInkParamsToolbar" [class.server-side-rendering]="serverSideRendering">
              <div class="editorParamsToolbarContainer">
                <div class="editorParamsSetter">
                  <label for="editorInkColor" class="editorParamsLabel" data-l10n-id="editor_ink_color">Color</label>
                  <input type="color" id="editorInkColor" class="editorParamsColor" tabindex="102" />
                </div>
                <div class="editorParamsSetter">
                  <label for="editorInkThickness" class="editorParamsLabel" data-l10n-id="editor_ink_thickness">Thickness</label>
                  <input type="range" id="editorInkThickness" class="editorParamsSlider" value="1" min="1" max="20" step="1" tabindex="103" />
                </div>
                <div class="editorParamsSetter">
                  <label for="editorInkOpacity" class="editorParamsLabel" data-l10n-id="editor_ink_opacity">Opacity</label>
                  <input type="range" id="editorInkOpacity" class="editorParamsSlider" value="100" min="1" max="100" step="1" tabindex="104" />
                </div>
              </div>
            </div>

            <pdf-secondary-toolbar
              #pdfSecondaryToolbarComponent
              [class.server-side-rendering]="serverSideRendering"
              [customSecondaryToolbar]="customSecondaryToolbar"
              [secondaryToolbarTop]="secondaryToolbarTop"
              [mobileFriendlyZoomScale]="mobileFriendlyZoomScale"
              (spreadChange)="onSpreadChange($event)"
              [localizationInitialized]="localizationInitialized"
            >
            </pdf-secondary-toolbar>

            <pdf-findbar
              [class.server-side-rendering]="serverSideRendering"
              [findbarLeft]="findbarLeft"
              [findbarTop]="findbarTop"
              [mobileFriendlyZoomScale]="mobileFriendlyZoomScale"
              [showFindButton]="showFindButton || false"
              [customFindbarInputArea]="customFindbarInputArea"
              [customFindbarButtons]="customFindbarButtons"
              [showFindCurrentPageOnly]="showFindCurrentPageOnly"
              [showFindEntirePhrase]="showFindEntirePhrase"
              [showFindEntireWord]="showFindEntireWord"
              [showFindFuzzySearch]="showFindFuzzySearch"
              [showFindHighlightAll]="showFindHighlightAll"
              [showFindMatchDiacritics]="showFindMatchDiacritics"
              [showFindMatchCase]="showFindMatchCase"
              [showFindMessages]="showFindMessages"
              [showFindPageRange]="showFindPageRange"
              [showFindResultsCount]="showFindResultsCount"
            >
            </pdf-findbar>

            <pdf-context-menu></pdf-context-menu>

            <div id="viewerContainer" [style.top]="viewerPositionTop" [style.backgroundColor]="backgroundColor" tabindex="0" role="document">
              <div class="unverified-signature-warning" *ngIf="hasSignature && showUnverifiedSignatures">
                {{
                  'unverified_signature_warning'
                    | translate
                      : "This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid.
                Please download the file and open it in Acrobat Reader to verify the signature is valid."
                    | async
                }}
              </div>
              <div id="viewer" class="pdfViewer" (dblclick)="zoomToPageWidth($event)"></div>
            </div>
            <pdf-error-message></pdf-error-message>
          </div>
          <!-- mainContainer -->

          <div id="dialogContainer">
            <pdf-password-dialog></pdf-password-dialog>
            <pdf-document-properties-dialog></pdf-document-properties-dialog>
            <pdf-prepare-printing-dialog></pdf-prepare-printing-dialog>
          </div>
          <!-- dialogContainer -->
        </div>
        <!-- outerContainer -->
        <input type="file" id="fileInput" class="hidden" [class.server-side-rendering]="serverSideRendering" />
        <div id="printContainer"></div>
      </div>
    </div>
  </div>
</ng-template>

<ng-template #defaultFreeFloatingBar> </ng-template>
`,
      styles: ["#mainContainer.toolbar-hidden{margin-top:-30px}.server-side-rendering,.hidden{display:none}\n"]
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: PDFNotificationService
    }, {
      type: Location
    }, {
      type: ElementRef
    }, {
      type: PlatformLocation
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgxExtendedPdfViewerService
    }, {
      type: Renderer2
    }];
  }, {
    dummyComponents: [{
      type: ViewChild,
      args: [PdfDummyComponentsComponent]
    }],
    root: [{
      type: ViewChild,
      args: ["root"]
    }],
    customFindbarInputArea: [{
      type: Input
    }],
    customToolbar: [{
      type: Input
    }],
    customFindbar: [{
      type: Input
    }],
    customFindbarButtons: [{
      type: Input
    }],
    customPdfViewer: [{
      type: Input
    }],
    customSecondaryToolbar: [{
      type: Input
    }],
    customSidebar: [{
      type: Input
    }],
    customThumbnail: [{
      type: Input
    }],
    customFreeFloatingBar: [{
      type: Input
    }],
    showFreeFloatingBar: [{
      type: Input
    }],
    enableDragAndDrop: [{
      type: Input
    }],
    formData: [{
      type: Input
    }],
    disableForms: [{
      type: Input
    }],
    formDataChange: [{
      type: Output
    }],
    pageViewMode: [{
      type: Input
    }],
    pageViewModeChange: [{
      type: Output
    }],
    progress: [{
      type: Output
    }],
    secondaryToolbarComponent: [{
      type: ViewChild,
      args: ["pdfSecondaryToolbarComponent"]
    }],
    sidebarComponent: [{
      type: ViewChild,
      args: ["pdfsidebar"]
    }],
    srcChange: [{
      type: Output
    }],
    scrollMode: [{
      type: Input
    }],
    scrollModeChange: [{
      type: Output
    }],
    authorization: [{
      type: Input
    }],
    httpHeaders: [{
      type: Input
    }],
    contextMenuAllowed: [{
      type: Input
    }],
    afterPrint: [{
      type: Output
    }],
    beforePrint: [{
      type: Output
    }],
    currentZoomFactor: [{
      type: Output
    }],
    enablePrint: [{
      type: Input
    }],
    delayFirstView: [{
      type: Input
    }],
    showTextEditor: [{
      type: Input
    }],
    showStampEditor: [{
      type: Input
    }],
    showDrawEditor: [{
      type: Input
    }],
    logLevel: [{
      type: Input
    }],
    relativeCoordsOptions: [{
      type: Input
    }],
    minifiedJSLibraries: [{
      type: Input
    }],
    printResolution: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    rotationChange: [{
      type: Output
    }],
    annotationLayerRendered: [{
      type: Output
    }],
    annotationEditorLayerRendered: [{
      type: Output
    }],
    xfaLayerRendered: [{
      type: Output
    }],
    outlineLoaded: [{
      type: Output
    }],
    attachmentsloaded: [{
      type: Output
    }],
    layersloaded: [{
      type: Output
    }],
    src: [{
      type: Input
    }],
    base64Src: [{
      type: Input
    }],
    minHeight: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    useBrowserLocale: [{
      type: Input
    }],
    forceUsingLegacyES5: [{
      type: Input
    }],
    backgroundColor: [{
      type: Input
    }],
    filenameForDownload: [{
      type: Input
    }],
    ignoreKeyboard: [{
      type: Input
    }],
    ignoreKeys: [{
      type: Input
    }],
    acceptKeys: [{
      type: Input
    }],
    imageResourcesPath: [{
      type: Input
    }],
    localeFolderPath: [{
      type: Input
    }],
    language: [{
      type: Input
    }],
    listenToURL: [{
      type: Input
    }],
    nameddest: [{
      type: Input
    }],
    password: [{
      type: Input
    }],
    replaceBrowserPrint: [{
      type: Input
    }],
    showUnverifiedSignatures: [{
      type: Input
    }],
    startTabindex: [{
      type: Input
    }],
    showSidebarButton: [{
      type: Input
    }],
    sidebarVisible: [{
      type: Input
    }],
    sidebarVisibleChange: [{
      type: Output
    }],
    activeSidebarView: [{
      type: Input
    }],
    activeSidebarViewChange: [{
      type: Output
    }],
    findbarVisible: [{
      type: Input
    }],
    findbarVisibleChange: [{
      type: Output
    }],
    propertiesDialogVisible: [{
      type: Input
    }],
    propertiesDialogVisibleChange: [{
      type: Output
    }],
    showFindButton: [{
      type: Input
    }],
    showFindHighlightAll: [{
      type: Input
    }],
    showFindMatchCase: [{
      type: Input
    }],
    showFindCurrentPageOnly: [{
      type: Input
    }],
    showFindPageRange: [{
      type: Input
    }],
    showFindEntireWord: [{
      type: Input
    }],
    showFindEntirePhrase: [{
      type: Input
    }],
    showFindMatchDiacritics: [{
      type: Input
    }],
    showFindFuzzySearch: [{
      type: Input
    }],
    showFindResultsCount: [{
      type: Input
    }],
    showFindMessages: [{
      type: Input
    }],
    showPagingButtons: [{
      type: Input
    }],
    showZoomButtons: [{
      type: Input
    }],
    showPresentationModeButton: [{
      type: Input
    }],
    showOpenFileButton: [{
      type: Input
    }],
    showPrintButton: [{
      type: Input
    }],
    showDownloadButton: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    showToolbar: [{
      type: Input
    }],
    showSecondaryToolbarButton: [{
      type: Input
    }],
    showSinglePageModeButton: [{
      type: Input
    }],
    showVerticalScrollButton: [{
      type: Input
    }],
    showHorizontalScrollButton: [{
      type: Input
    }],
    showWrappedScrollButton: [{
      type: Input
    }],
    showInfiniteScrollButton: [{
      type: Input
    }],
    showBookModeButton: [{
      type: Input
    }],
    showRotateButton: [{
      type: Input
    }],
    handTool: [{
      type: Input
    }],
    handToolChange: [{
      type: Output
    }],
    showHandToolButton: [{
      type: Input
    }],
    showScrollingButton: [{
      type: Input
    }],
    showSpreadButton: [{
      type: Input
    }],
    showPropertiesButton: [{
      type: Input
    }],
    showBorders: [{
      type: Input
    }],
    spread: [{
      type: Input
    }],
    spreadChange: [{
      type: Output
    }],
    thumbnailDrawn: [{
      type: Output
    }],
    page: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    pageLabel: [{
      type: Input
    }],
    pageLabelChange: [{
      type: Output
    }],
    pagesLoaded: [{
      type: Output
    }],
    pageRender: [{
      type: Output
    }],
    pageRendered: [{
      type: Output
    }],
    pdfDownloaded: [{
      type: Output
    }],
    pdfLoaded: [{
      type: Output
    }],
    pdfLoadingStarts: [{
      type: Output
    }],
    pdfLoadingFailed: [{
      type: Output
    }],
    textLayer: [{
      type: Input
    }],
    textLayerRendered: [{
      type: Output
    }],
    annotationEditorModeChanged: [{
      type: Output
    }],
    updateFindMatchesCount: [{
      type: Output
    }],
    updateFindState: [{
      type: Output
    }],
    zoom: [{
      type: Input
    }],
    zoomChange: [{
      type: Output
    }],
    zoomLevels: [{
      type: Input
    }],
    maxZoom: [{
      type: Input
    }],
    minZoom: [{
      type: Input
    }],
    mobileFriendlyZoom: [{
      type: Input
    }],
    onContextMenu: [{
      type: HostListener,
      args: ["contextmenu"]
    }]
  });
})();
globalThis["ngxConsoleFilter"] = (_level, _message) => {
  return true;
};
var NgxConsole = class {
  log(message, reason) {
    if (globalThis["ngxConsoleFilter"]("log", message)) {
      if (reason !== void 0) {
        console.log(message, reason);
      } else {
        console.log(message);
      }
    }
  }
  error(message, reason) {
    if (globalThis["ngxConsoleFilter"]("error", message)) {
      if (reason !== void 0) {
        console.error(message, reason);
      } else {
        console.error(message);
      }
    }
  }
  warn(message, reason) {
    if (globalThis["ngxConsoleFilter"]("warn", message)) {
      if (reason !== void 0) {
        console.warn(message, reason);
      } else {
        console.warn(message);
      }
    }
  }
};
globalThis["ngxConsole"] = new NgxConsole();
if ((/* @__PURE__ */ new Date()).getTime() === 0) {
  new NgxConsole().log("");
}
if (!Promise["allSettled"]) {
  if (!!window["Zone"] && !window["__zone_symbol__Promise.allSettled"]) {
    console.error("Please update zone.js to version 0.10.3 or higher. Otherwise, you'll run the slow ECMAScript 5 version even on modern browser that can run the fast ESMAScript 2015 version.");
  }
}
function isKeyIgnored(cmd, keycode) {
  const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
  const ignoreKeys = PDFViewerApplicationOptions.get("ignoreKeys");
  const acceptKeys = PDFViewerApplicationOptions.get("acceptKeys");
  if (keycode === "WHEEL") {
    if (!!ignoreKeys && isKeyInList(ignoreKeys, cmd, "WHEEL")) {
      return true;
    }
    if (!!acceptKeys && acceptKeys.length > 0) {
      return !isKeyInList(acceptKeys, cmd, "WHEEL");
    }
    return false;
  }
  if (keycode === 16 || keycode === 17 || keycode === 18 || keycode === 224) {
    return true;
  }
  const ignoreKeyboard = PDFViewerApplicationOptions.get("ignoreKeyboard");
  if (!!ignoreKeyboard) {
    return true;
  }
  if (!!ignoreKeys && ignoreKeys.length > 0) {
    if (isKeyInList(ignoreKeys, cmd, keycode)) {
      return true;
    }
  }
  if (!!acceptKeys && acceptKeys.length > 0) {
    return !isKeyInList(acceptKeys, cmd, keycode);
  }
  return false;
}
function isKeyInList(settings, cmd, keycode) {
  if (!settings) {
    return true;
  }
  return settings.some((keyDef) => isKey(keyDef, cmd, keycode));
}
function isKey(keyDef, cmd, keycode) {
  let cmdDef = 0;
  let key = 0;
  keyDef = keyDef.toLowerCase();
  if (keyDef.includes("ctrl+")) {
    cmdDef |= 1;
    keyDef = keyDef.replace("ctrl+", "");
  }
  if (keyDef.includes("cmd+")) {
    cmdDef |= 8;
    keyDef = keyDef.replace("cmd+", "");
  }
  if (keyDef.includes("alt+")) {
    cmdDef |= 2;
    keyDef = keyDef.replace("alt+", "");
  }
  if (keyDef.includes("shift+")) {
    cmdDef |= 4;
    keyDef = keyDef.replace("shift+", "");
  }
  if (keyDef.includes("meta+")) {
    cmdDef |= 8;
    keyDef = keyDef.replace("meta+", "");
  }
  if (keyDef === "up") {
    key = 38;
  } else if (keyDef === "down") {
    key = 40;
  } else if (keyDef === "+" || keyDef === '"+"') {
    key = 171;
  } else if (keyDef === "-" || keyDef === '"-"') {
    key = 173;
  } else if (keyDef === "esc") {
    key = 27;
  } else if (keyDef === "enter") {
    key = 13;
  } else if (keyDef === "space") {
    key = 32;
  } else if (keyDef === "f4") {
    key = 115;
  } else if (keyDef === "backspace") {
    key = 8;
  } else if (keyDef === "home") {
    key = 36;
  } else if (keyDef === "end") {
    key = 35;
  } else if (keyDef === "left") {
    key = 37;
  } else if (keyDef === "right") {
    key = 39;
  } else if (keyDef === "pagedown") {
    key = 34;
  } else if (keyDef === "pageup") {
    key = 33;
  } else {
    key = keyDef.toUpperCase().charCodeAt(0);
  }
  if (keycode === "WHEEL") {
    return keyDef === "wheel" && cmd === cmdDef;
  }
  return key === keycode && cmd === cmdDef;
}
if (typeof window !== "undefined") {
  window.isKeyIgnored = isKeyIgnored;
}
var NgxExtendedPdfViewerModule = class {
};
NgxExtendedPdfViewerModule.\u0275fac = function NgxExtendedPdfViewerModule_Factory(t) {
  return new (t || NgxExtendedPdfViewerModule)();
};
NgxExtendedPdfViewerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NgxExtendedPdfViewerModule
});
NgxExtendedPdfViewerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [NgxExtendedPdfViewerService],
  imports: [[CommonModule, FormsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxExtendedPdfViewerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule],
      declarations: [DynamicCssComponent, NegativeResponsiveCSSClassPipe, NgxExtendedPdfViewerComponent, PdfAcroformDefaultThemeComponent, PdfBookModeComponent, PdfContextMenuComponent, PdfDarkThemeComponent, PdfDrawEditorComponent, PdfDocumentPropertiesComponent, PdfDocumentPropertiesDialogComponent, PdfDownloadComponent, PdfDummyComponentsComponent, PdfEditorComponent, PdfErrorMessageComponent, PdfEvenSpreadComponent, PdfFindbarComponent, PdfFindbarMessageContainerComponent, PdfFindButtonComponent, PdfFindEntireWordComponent, PdfFindHighlightAllComponent, PdfFindInputAreaComponent, PdfFindMatchCaseComponent, PdfFindNextComponent, PdfFindPreviousComponent, PdfFindResultsCountComponent, PdfFirstPageComponent, PdfHandToolComponent, PdfHorizontalScrollComponent, PdfInfiniteScrollComponent, PdfLastPageComponent, PdfLightThemeComponent, PdfMatchDiacriticsComponent, PdfNextPageComponent, PdfNoSpreadComponent, PdfOddSpreadComponent, PdfOpenFileComponent, PdfPageNumberComponent, PdfPagingAreaComponent, PdfPasswordDialogComponent, PdfPreparePrintingDialogComponent, PdfPresentationModeComponent, PdfPreviousPageComponent, PdfPrintComponent, PdfRotatePageComponent, PdfSearchInputFieldComponent, PdfSecondaryToolbarComponent, PdfSelectToolComponent, PdfShyButtonComponent, PdfSidebarComponent, PdfSidebarContentComponent, PdfSidebarToolbarComponent, PdfSinglePageModeComponent, PdfStampEditorComponent, PdfTextEditorComponent, PdfToggleSecondaryToolbarComponent, PdfToggleSidebarComponent, PdfToolbarComponent, PdfVerticalScrollModeComponent, PdfWrappedScrollModeComponent, PdfZoomDropdownComponent, PdfZoomInComponent, PdfZoomOutComponent, PdfZoomToolbarComponent, ResponsiveCSSClassPipe, TranslatePipe],
      providers: [NgxExtendedPdfViewerService],
      exports: [NegativeResponsiveCSSClassPipe, NgxExtendedPdfViewerComponent, PdfAcroformDefaultThemeComponent, PdfBookModeComponent, PdfContextMenuComponent, PdfDarkThemeComponent, PdfDrawEditorComponent, PdfDocumentPropertiesDialogComponent, PdfDownloadComponent, PdfEditorComponent, PdfErrorMessageComponent, PdfEvenSpreadComponent, PdfFindbarComponent, PdfFindbarMessageContainerComponent, PdfFindButtonComponent, PdfFindEntireWordComponent, PdfFindHighlightAllComponent, PdfFindInputAreaComponent, PdfFindMatchCaseComponent, PdfFindNextComponent, PdfFindPreviousComponent, PdfFindResultsCountComponent, PdfFirstPageComponent, PdfHandToolComponent, PdfHorizontalScrollComponent, PdfInfiniteScrollComponent, PdfLastPageComponent, PdfLightThemeComponent, PdfMatchDiacriticsComponent, PdfNextPageComponent, PdfNoSpreadComponent, PdfOddSpreadComponent, PdfOpenFileComponent, PdfPageNumberComponent, PdfPagingAreaComponent, PdfPasswordDialogComponent, PdfPreparePrintingDialogComponent, PdfPresentationModeComponent, PdfPreviousPageComponent, PdfPrintComponent, PdfRotatePageComponent, PdfSearchInputFieldComponent, PdfSecondaryToolbarComponent, PdfSelectToolComponent, PdfShyButtonComponent, PdfSidebarComponent, PdfSidebarContentComponent, PdfSidebarToolbarComponent, PdfSinglePageModeComponent, PdfStampEditorComponent, PdfTextEditorComponent, PdfToggleSecondaryToolbarComponent, PdfToggleSidebarComponent, PdfToolbarComponent, PdfVerticalScrollModeComponent, PdfWrappedScrollModeComponent, PdfZoomDropdownComponent, PdfZoomInComponent, PdfZoomOutComponent, PdfZoomToolbarComponent, ResponsiveCSSClassPipe]
    }]
  }], null, null);
})();

// src/app/pages/catalogue/catalogue.component.ts
var _c02 = ["pdfViewer"];
function CatalogueComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " Loading PDF... ");
    \u0275\u0275elementEnd();
  }
}
function CatalogueComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " Failed to load PDF. Please try again later. ");
    \u0275\u0275elementEnd();
  }
}
var META_KEY = makeStateKey("catalogue_meta");
var STRUCTURED_DATA_KEY = makeStateKey("catalogue_structured_data");
var CatalogueComponent = class _CatalogueComponent {
  constructor(meta, title, transferState, platformId) {
    this.meta = meta;
    this.title = title;
    this.transferState = transferState;
    this.platformId = platformId;
    this.pdfSrc = "assets/catalogue/HARISHREE_CROP_SCIENCE_CATALOGUE.pdf";
    this.pdfLoading = true;
    this.pdfLoadError = false;
    this.baseUrl = environment.baseUrl;
    this.isMobile = false;
    this.currentPage = 1;
    this.totalPages = 0;
    this.pdfLoaded = false;
    this.pdfViewerConfig = {
      cMapUrl: "assets/cmaps/",
      cMapPacked: true,
      enableXfa: true,
      defaultViewport: {
        width: 595.28,
        height: 841.89
      },
      spread: true,
      spreadMode: 2,
      // even pages on the left
      scrollMode: 0,
      // vertical scrolling
      pageViewMode: "book"
    };
  }
  isPlatformBrowser(platformId) {
    return isPlatformBrowser(platformId);
  }
  handleError(error) {
    console.error("PDF Error:", error);
    this.pdfLoadError = true;
    this.pdfLoading = false;
  }
  handleDocumentLoad() {
    this.pdfLoading = false;
  }
  ngOnInit() {
    this.setMetaData();
    if (this.isPlatformBrowser(this.platformId)) {
      this.setStructuredData();
      this.checkMobile();
      fromEvent(window, "resize").pipe(debounceTime(200)).subscribe(() => this.checkMobile());
    }
  }
  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }
  setMetaData() {
    if (this.transferState.hasKey(META_KEY))
      return;
    this.title.setTitle("Product Catalogue | Harishree Crop Science");
    const metaTags = [
      { name: "description", content: "Browse our comprehensive product catalogue featuring sustainable agricultural solutions, pesticides, fertilizers, and more." },
      { name: "keywords", content: "product catalogue, agricultural products, pesticides, fertilizers, crop protection" },
      { property: "og:title", content: "Product Catalogue | Harishree Crop Science" },
      { property: "og:description", content: "Explore our complete range of agricultural products and solutions." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      { name: "twitter:card", content: "summary_large_image" },
      // { name: 'canonical', content: `${this.baseUrl}/catalogue` },
      { property: "og:url", content: `${this.baseUrl}/catalogue` },
      { property: "og:type", content: "website" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Harishree Crop Science" }
    ];
    metaTags.forEach((tag) => this.meta.updateTag(tag));
    this.transferState.set(META_KEY, true);
  }
  setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY) || !this.isPlatformBrowser(this.platformId))
      return;
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "DataCatalog",
      "name": "Harishree Crop Science Product Catalogue",
      "description": "Comprehensive catalogue of agricultural products and solutions",
      "url": `${this.baseUrl}/catalogue`,
      "provider": {
        "@type": "Organization",
        "name": "Harishree Crop Science"
      }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }
  onPageChange(page) {
    this.currentPage = page;
  }
  checkMobile() {
    if (this.isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
      if (this.pdfViewer) {
        this.pdfViewer.pageViewMode = this.isMobile ? "single" : "book";
        this.pdfViewer.zoom = this.isMobile ? "page-width" : "page-fit";
      }
    }
  }
  ngAfterViewInit() {
    if (this.isPlatformBrowser(this.platformId)) {
      this.checkMobile();
      setTimeout(() => {
        this.pdfLoading = false;
      }, 1e3);
    }
  }
  onPdfLoadComplete(event) {
    if ("numPages" in event) {
      this.totalPages = event.numPages;
    }
    this.pdfLoaded = true;
    this.pdfLoading = false;
  }
  onPdfLoaded(event) {
    console.log("PDF Loaded:", event);
    this.pdfLoaded = true;
    this.pdfLoading = false;
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pdfViewer.page = this.currentPage;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pdfViewer.page = this.currentPage;
    }
  }
  static {
    this.\u0275fac = function CatalogueComponent_Factory(t) {
      return new (t || _CatalogueComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(TransferState), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogueComponent, selectors: [["app-catalogue"]], viewQuery: function CatalogueComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.pdfViewer = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 22, consts: [["pdfViewer", ""], [1, "catalogue-page"], [1, "catalogue-hero"], [1, "hero-content"], ["data-aos", "fade-up"], ["data-aos", "fade-up", "data-aos-delay", "200"], [1, "hero-bg"], ["viewBox", "0 0 1440 160", "preserveAspectRatio", "none"], ["fill", "var(--primary-lightest)", "d", "M0,48L48,56C96,64,192,80,288,80C384,80,480,64,576,56C672,48,768,48,864,56C960,64,1056,80,1152,80C1248,80,1344,64,1392,56L1440,48L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"], [1, "pdf-viewer-section"], [1, "container"], ["data-aos", "fade-up", 1, "pdf-container"], [3, "error", "documentLoaded", "src", "height", "useBrowserLocale", "textLayer", "handTool", "zoom", "minZoom", "maxZoom", "pageViewMode", "page", "showBorders", "showDownloadButton", "showHandToolButton", "showPagingButtons", "showPresentationModeButton", "showPrintButton", "showSidebarButton", "showZoomButtons", "mobileFriendlyZoom", "backgroundColor"], ["class", "pdf-loading", 4, "ngIf"], ["class", "pdf-error", 4, "ngIf"], [1, "pdf-loading"], [1, "pdf-error"]], template: function CatalogueComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "main", 1)(1, "section", 2)(2, "div", 3)(3, "h1", 4);
        \u0275\u0275text(4, "Product Catalogue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 5)(6, "strong");
        \u0275\u0275text(7, "Explore our comprehensive range of agricultural solutions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 7);
        \u0275\u0275element(10, "path", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "section", 9)(12, "div", 10)(13, "div", 11)(14, "ngx-extended-pdf-viewer", 12, 0);
        \u0275\u0275listener("error", function CatalogueComponent_Template_ngx_extended_pdf_viewer_error_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleError($event));
        })("documentLoaded", function CatalogueComponent_Template_ngx_extended_pdf_viewer_documentLoaded_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPdfLoadComplete($event));
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(16, CatalogueComponent_div_16_Template, 2, 0, "div", 13)(17, CatalogueComponent_div_17_Template, 2, 0, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("src", ctx.pdfSrc)("height", "90vh")("useBrowserLocale", true)("textLayer", false)("handTool", true)("zoom", ctx.isMobile ? "page-width" : "page-fit")("minZoom", 0.5)("maxZoom", 4)("pageViewMode", ctx.isMobile ? "single" : "book")("page", ctx.currentPage)("showBorders", true)("showDownloadButton", true)("showHandToolButton", true)("showPagingButtons", true)("showPresentationModeButton", !ctx.isMobile)("showPrintButton", !ctx.isMobile)("showSidebarButton", !ctx.isMobile)("showZoomButtons", true)("mobileFriendlyZoom", ctx.isMobile ? "100%" : "auto")("backgroundColor", "#f8f9fa");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.pdfLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pdfLoadError);
      }
    }, dependencies: [CommonModule, NgIf, NgxExtendedPdfViewerModule, NgxExtendedPdfViewerComponent], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --primary: #009846;\n  --primary-light: #33b46e;\n  --primary-lighter: #66cf96;\n  --primary-lightest: #e6f5ed;\n  --secondary: #529433;\n  --secondary-light: #75ac5c;\n  --secondary-lighter: #98c485;\n  --secondary-lightest: #edf4ea;\n  --accent: #fecd08;\n  --accent-light: #fed73d;\n  --accent-lighter: #fee172;\n  --accent-lightest: #fff9e6;\n  --font-primary: "DM Sans", sans-serif;\n  --font-secondary: "Libre Baskerville", serif;\n  --font-accent: "Manrope", sans-serif;\n  --font-regular: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-2xl: 1.5rem;\n  --text-3xl: 1.875rem;\n  --text-4xl: 2.25rem;\n  --text-5xl: 3rem;\n  --primary-rgb:\n    0,\n    152,\n    70;\n  --secondary-rgb:\n    82,\n    148,\n    51;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary) !important;\n}\n.bg-primary-light[_ngcontent-%COMP%] {\n  background-color: var(--primary-light) !important;\n}\n.bg-primary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--primary-lighter) !important;\n}\n.bg-primary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--primary-lightest) !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary) !important;\n}\n.bg-secondary-light[_ngcontent-%COMP%] {\n  background-color: var(--secondary-light) !important;\n}\n.bg-secondary-lighter[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lighter) !important;\n}\n.bg-secondary-lightest[_ngcontent-%COMP%] {\n  background-color: var(--secondary-lightest) !important;\n}\n.bg-accent[_ngcontent-%COMP%] {\n  background-color: var(--accent) !important;\n}\n.bg-accent-light[_ngcontent-%COMP%] {\n  background-color: var(--accent-light) !important;\n}\n.bg-accent-lighter[_ngcontent-%COMP%] {\n  background-color: var(--accent-lighter) !important;\n}\n.bg-accent-lightest[_ngcontent-%COMP%] {\n  background-color: var(--accent-lightest) !important;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--secondary) !important;\n}\n.text-accent[_ngcontent-%COMP%] {\n  color: var(--accent) !important;\n}\n.font-primary[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n}\n.font-secondary[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n}\n.font-accent[_ngcontent-%COMP%] {\n  font-family: var(--font-accent);\n}\n.font-regular[_ngcontent-%COMP%] {\n  font-weight: var(--font-regular);\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: var(--font-medium);\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold);\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: var(--font-bold);\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-base);\n  line-height: 1.5;\n  color: var(--gray-700);\n  touch-action: manipulation;\n}\n.catalogue-page[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%], .premium-products[_ngcontent-%COMP%], .what-we-do[_ngcontent-%COMP%], .key-features[_ngcontent-%COMP%], .testimonials[_ngcontent-%COMP%], .crop-categories[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%] {\n  content-visibility: auto;\n  contain-intrinsic-size: 1px 800px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  image-rendering: -webkit-optimize-contrast;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  font-weight: var(--font-semibold);\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--text-5xl);\n}\nh2[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n}\nh4[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\nh5[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\nh6[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n@media (max-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: var(--text-2xl);\n  }\n  h4[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n  }\n  h5[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n  h6[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n}\n.catalogue-hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 52vh;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n}\n.catalogue-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 152, 70, 0.9) 0%,\n      rgba(82, 148, 51, 0.85) 100%);\n  z-index: 1;\n}\n.catalogue-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  color: white;\n  padding: 4rem 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.catalogue-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 2rem;\n  font-weight: var(--font-bold);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n.catalogue-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  opacity: 1;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  line-height: 1.6;\n  letter-spacing: 0.5px;\n}\n.catalogue-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  z-index: 3;\n}\n.catalogue-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.catalogue-hero[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: var(--primary-lightest);\n}\n.pdf-viewer-section[_ngcontent-%COMP%] {\n  padding: clamp(2rem, 4vw, 4rem) 0;\n  background-color: var(--light);\n  min-height: 90vh;\n}\n.pdf-viewer-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0;\n}\n@media (min-width: 1921px) {\n  .pdf-viewer-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 1800px;\n  }\n}\n.pdf-viewer-section[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  height: 90vh;\n}\n.pdf-viewer-section[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]     .toolbar {\n  background-color: var(--primary-lightest);\n  border-bottom: 1px solid var(--primary-light);\n  padding: 0.5rem;\n}\n.pdf-viewer-section[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]     .toolbar button:hover {\n  background-color: var(--primary-light);\n}\n.pdf-viewer-section[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]     #viewerContainer {\n  background-color: #f8f9fa;\n}\n.pdf-viewer-section[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]     .page {\n  margin: 1rem auto;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.pdf-viewer-section[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]     .spread {\n  margin: 0 auto;\n}\n.pdf-loading[_ngcontent-%COMP%], .pdf-error[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 1rem 2rem;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n}\n.pdf-error[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n@media (max-width: 768px) {\n  .pdf-viewer-section[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .pdf-viewer-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .pdf-viewer-section[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%] {\n    border-radius: 0;\n    height: calc(100vh - 60px);\n  }\n  .pdf-viewer-section[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]     .toolbar {\n    padding: 0.25rem;\n  }\n  .pdf-viewer-section[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]     #viewerContainer {\n    top: 40px !important;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .pdf-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 150px);\n  }\n}\n@media print {\n  .catalogue-hero[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=catalogue.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogueComponent, { className: "CatalogueComponent", filePath: "src\\app\\pages\\catalogue\\catalogue.component.ts", lineNumber: 21 });
})();
export {
  CatalogueComponent
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-HLNSHDNO.js.map
