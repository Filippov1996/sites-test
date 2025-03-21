/*! For license information please see firebase-packages~7dbd8cdd.a63dedfd.chunk.js.LICENSE */
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
            [28], {
                "40/0": function(e, t, n) {
                    "use strict";
                    n.d(t, "a", (function() {
                        return r
                    })), n.d(t, "b", (function() {
                        return u
                    })), n.d(t, "c", (function() {
                        return d
                    })), n.d(t, "d", (function() {
                        return l
                    }));
                    const i = [];
                    var r;
                    ! function(e) {
                        e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
                    }(r || (r = {}));
                    const s = {
                            debug: r.DEBUG,
                            verbose: r.VERBOSE,
                            info: r.INFO,
                            warn: r.WARN,
                            error: r.ERROR,
                            silent: r.SILENT
                        },
                        o = r.INFO,
                        a = {
                            [r.DEBUG]: "log",
                            [r.VERBOSE]: "log",
                            [r.INFO]: "info",
                            [r.WARN]: "warn",
                            [r.ERROR]: "error"
                        },
                        c = function(e, t) {
                            if (t < e.logLevel) return;
                            const n = (new Date).toISOString(),
                                i = a[t];
                            if (!i) throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
                            for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) s[o - 2] = arguments[o];
                            console[i](`[${n}]  ${e.name}:`, ...s)
                        };
                    class u {
                        constructor(e) {
                            this.name = e, this._logLevel = o, this._logHandler = c, this._userLogHandler = null, i.push(this)
                        }
                        get logLevel() {
                            return this._logLevel
                        }
                        set logLevel(e) {
                            if (!(e in r)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
                            this._logLevel = e
                        }
                        setLogLevel(e) {
                            this._logLevel = "string" === typeof e ? s[e] : e
                        }
                        get logHandler() {
                            return this._logHandler
                        }
                        set logHandler(e) {
                            if ("function" !== typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                            this._logHandler = e
                        }
                        get userLogHandler() {
                            return this._userLogHandler
                        }
                        set userLogHandler(e) {
                            this._userLogHandler = e
                        }
                        debug() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler(this, r.DEBUG, ...t), this._logHandler(this, r.DEBUG, ...t)
                        }
                        log() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler(this, r.VERBOSE, ...t), this._logHandler(this, r.VERBOSE, ...t)
                        }
                        info() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler(this, r.INFO, ...t), this._logHandler(this, r.INFO, ...t)
                        }
                        warn() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler(this, r.WARN, ...t), this._logHandler(this, r.WARN, ...t)
                        }
                        error() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler(this, r.ERROR, ...t), this._logHandler(this, r.ERROR, ...t)
                        }
                    }

                    function d(e) {
                        i.forEach(t => {
                            t.setLogLevel(e)
                        })
                    }

                    function l(e, t) {
                        for (const n of i) {
                            let i = null;
                            t && t.level && (i = s[t.level]), n.userLogHandler = null === e ? null : function(t, n) {
                                for (var s = arguments.length, o = new Array(s > 2 ? s - 2 : 0), a = 2; a < s; a++) o[a - 2] = arguments[a];
                                const c = o.map(e => {
                                    if (null == e) return null;
                                    if ("string" === typeof e) return e;
                                    if ("number" === typeof e || "boolean" === typeof e) return e.toString();
                                    if (e instanceof Error) return e.message;
                                    try {
                                        return JSON.stringify(e)
                                    } catch (t) {
                                        return null
                                    }
                                }).filter(e => e).join(" ");
                                n >= (null !== i && void 0 !== i ? i : t.logLevel) && e({
                                    level: r[n].toLowerCase(),
                                    message: c,
                                    args: o,
                                    type: t.name
                                })
                            }
                        }
                    }
                },
                "8zj8": function(e, t, n) {
                        "use strict";
                        var i = n("qZ8Y"),
                            r = n("dw81"),
                            s = n("40/0"),
                            o = n("Z5oE"),
                            a = n("jlyq");

                        function c(e) {
                            return void 0 !== e && void 0 !== e.enterprise
                        }
                        class u {
                            constructor(e) {
                                if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === e.recaptchaKey) throw new Error("recaptchaKey undefined");
                                this.siteKey = e.recaptchaKey.split("/")[3], this.emailPasswordEnabled = e.recaptchaEnforcementState.some(e => "EMAIL_PASSWORD_PROVIDER" === e.provider && "OFF" !== e.enforcementState)
                            }
                        }

                        function d() {
                            return {
                                "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
                            }
                        }
                        const l = function() {
                                return {
                                    "admin-restricted-operation": "This operation is restricted to administrators only.",
                                    "argument-error": "",
                                    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                                    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                                    "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                                    "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
                                    "cordova-not-ready": "Cordova framework is not ready.",
                                    "cors-unsupported": "This browser is not supported.",
                                    "credential-already-in-use": "This credential is already associated with a different user account.",
                                    "custom-token-mismatch": "The custom token corresponds to a different audience.",
                                    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                                    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
                                    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                                    "email-change-needs-verification": "Multi-factor users must always have a verified email.",
                                    "email-already-in-use": "The email address is already in use by another account.",
                                    "emulator-config-failed": 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
                                    "expired-action-code": "The action code has expired.",
                                    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
                                    "internal-error": "An internal AuthError has occurred.",
                                    "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                                    "invalid-app-id": "The mobile app identifier is not registed for the current project.",
                                    "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
                                    "invalid-auth-event": "An internal AuthError has occurred.",
                                    "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
                                    "invalid-continue-uri": "The continue URL provided in the request is invalid.",
                                    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                                    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
                                    "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
                                    "invalid-email": "The email address is badly formatted.",
                                    "invalid-emulator-scheme": "Emulator URL must start with a valid scheme (http:// or https://).",
                                    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
                                    "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
                                    "invalid-credential": "The supplied auth credential is malformed or has expired.",
                                    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                                    "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
                                    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                                    "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
                                    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                                    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                                    "wrong-password": "The password is invalid or the user does not have a password.",
                                    "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
                                    "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                                    "invalid-provider-id": "The specified provider ID is invalid.",
                                    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                                    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                                    "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
                                    "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
                                    "login-blocked": "Login blocked by user-provided method: {$originalMessage}",
                                    "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
                                    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                                    "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                                    "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
                                    "missing-continue-uri": "A continue URL must be provided in the request.",
                                    "missing-iframe-start": "An internal AuthError has occurred.",
                                    "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
                                    "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
                                    "missing-password": "A non-empty password must be provided",
                                    "missing-multi-factor-info": "No second factor identifier is provided.",
                                    "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
                                    "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                                    "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
                                    "app-deleted": "This instance of FirebaseApp has been deleted.",
                                    "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
                                    "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
                                    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                                    "network-request-failed": "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
                                    "no-auth-event": "An internal AuthError has occurred.",
                                    "no-such-provider": "User was not linked to an account with the given provider.",
                                    "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
                                    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                                    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                                    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                                    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
                                    "provider-already-linked": "User can only be linked to one identity for the given provider.",
                                    "quota-exceeded": "The project's quota for this operation has been exceeded.",
                                    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
                                    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
                                    "rejected-credential": "The request contains malformed or mismatching credentials.",
                                    "second-factor-already-in-use": "The second factor is already enrolled on this account.",
                                    "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
                                    "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
                                    timeout: "The operation has timed out.",
                                    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
                                    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
                                    "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                                    "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
                                    "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
                                    "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
                                    "unverified-email": "The operation requires a verified email.",
                                    "user-cancelled": "The user did not grant your application the permissions it requested.",
                                    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                                    "user-disabled": "The user account has been disabled by an administrator.",
                                    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
                                    "user-signed-out": "",
                                    "weak-password": "The password must be 6 characters long or more.",
                                    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled.",
                                    "already-initialized": "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
                                    "missing-recaptcha-token": "The reCAPTCHA token is missing when sending request to the backend.",
                                    "invalid-recaptcha-token": "The reCAPTCHA token is invalid when sending request to the backend.",
                                    "invalid-recaptcha-action": "The reCAPTCHA action is invalid when sending request to the backend.",
                                    "recaptcha-not-enabled": "reCAPTCHA Enterprise integration is not enabled for this project.",
                                    "missing-client-type": "The reCAPTCHA client type is missing when sending request to the backend.",
                                    "missing-recaptcha-version": "The reCAPTCHA version is missing when sending request to the backend.",
                                    "invalid-req-type": "Invalid request parameters.",
                                    "invalid-recaptcha-version": "The reCAPTCHA version is invalid when sending request to the backend.",
                                    "unsupported-password-policy-schema-version": "The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",
                                    "password-does-not-meet-requirements": "The password does not meet the requirements."
                                }
                            },
                            h = d,
                            p = new i.b("auth", "Firebase", {
                                "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
                            }),
                            f = {
                                ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
                                ARGUMENT_ERROR: "auth/argument-error",
                                APP_NOT_AUTHORIZED: "auth/app-not-authorized",
                                APP_NOT_INSTALLED: "auth/app-not-installed",
                                CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
                                CODE_EXPIRED: "auth/code-expired",
                                CORDOVA_NOT_READY: "auth/cordova-not-ready",
                                CORS_UNSUPPORTED: "auth/cors-unsupported",
                                CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
                                CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
                                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
                                DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
                                DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
                                EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
                                EMAIL_EXISTS: "auth/email-already-in-use",
                                EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
                                EXPIRED_OOB_CODE: "auth/expired-action-code",
                                EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
                                INTERNAL_ERROR: "auth/internal-error",
                                INVALID_API_KEY: "auth/invalid-api-key",
                                INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
                                INVALID_APP_ID: "auth/invalid-app-id",
                                INVALID_AUTH: "auth/invalid-user-token",
                                INVALID_AUTH_EVENT: "auth/invalid-auth-event",
                                INVALID_CERT_HASH: "auth/invalid-cert-hash",
                                INVALID_CODE: "auth/invalid-verification-code",
                                INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
                                INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
                                INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
                                INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
                                INVALID_EMAIL: "auth/invalid-email",
                                INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
                                INVALID_IDP_RESPONSE: "auth/invalid-credential",
                                INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
                                INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
                                INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
                                INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
                                INVALID_OOB_CODE: "auth/invalid-action-code",
                                INVALID_ORIGIN: "auth/unauthorized-domain",
                                INVALID_PASSWORD: "auth/wrong-password",
                                INVALID_PERSISTENCE: "auth/invalid-persistence-type",
                                INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
                                INVALID_PROVIDER_ID: "auth/invalid-provider-id",
                                INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
                                INVALID_SENDER: "auth/invalid-sender",
                                INVALID_SESSION_INFO: "auth/invalid-verification-id",
                                INVALID_TENANT_ID: "auth/invalid-tenant-id",
                                MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
                                MFA_REQUIRED: "auth/multi-factor-auth-required",
                                MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
                                MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
                                MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
                                MISSING_CODE: "auth/missing-verification-code",
                                MISSING_CONTINUE_URI: "auth/missing-continue-uri",
                                MISSING_IFRAME_START: "auth/missing-iframe-start",
                                MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
                                MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
                                MISSING_MFA_INFO: "auth/missing-multi-factor-info",
                                MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
                                MISSING_PHONE_NUMBER: "auth/missing-phone-number",
                                MISSING_SESSION_INFO: "auth/missing-verification-id",
                                MODULE_DESTROYED: "auth/app-deleted",
                                NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
                                NETWORK_REQUEST_FAILED: "auth/network-request-failed",
                                NULL_USER: "auth/null-user",
                                NO_AUTH_EVENT: "auth/no-auth-event",
                                NO_SUCH_PROVIDER: "auth/no-such-provider",
                                OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
                                OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
                                POPUP_BLOCKED: "auth/popup-blocked",
                                POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
                                PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
                                QUOTA_EXCEEDED: "auth/quota-exceeded",
                                REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
                                REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
                                REJECTED_CREDENTIAL: "auth/rejected-credential",
                                SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
                                SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
                                TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
                                TIMEOUT: "auth/timeout",
                                TOKEN_EXPIRED: "auth/user-token-expired",
                                TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
                                UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
                                UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
                                UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
                                UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
                                UNVERIFIED_EMAIL: "auth/unverified-email",
                                USER_CANCELLED: "auth/user-cancelled",
                                USER_DELETED: "auth/user-not-found",
                                USER_DISABLED: "auth/user-disabled",
                                USER_MISMATCH: "auth/user-mismatch",
                                USER_SIGNED_OUT: "auth/user-signed-out",
                                WEAK_PASSWORD: "auth/weak-password",
                                WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
                                ALREADY_INITIALIZED: "auth/already-initialized",
                                RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
                                MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
                                INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
                                INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
                                MISSING_CLIENT_TYPE: "auth/missing-client-type",
                                MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
                                INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
                                INVALID_REQ_TYPE: "auth/invalid-req-type"
                            },
                            m = new s.b("@firebase/auth");

                        function g(e) {
                            if (m.logLevel <= s.a.ERROR) {
                                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                                m.error(`Auth (${r.a}): ${e}`, ...n)
                            }
                        }

                        function v(e) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                            throw b(e, ...n)
                        }

                        function _(e) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                            return b(e, ...n)
                        }

                        function I(e, t, n) {
                            const r = Object.assign(Object.assign({}, h()), {
                                [t]: n
                            });
                            return new i.b("auth", "Firebase", r).create(t, {
                                appName: e.name
                            })
                        }

                        function w(e, t, n) {
                            if (!(t instanceof n)) throw n.name !== t.constructor.name && v(e, "argument-error"), I(e, "argument-error", `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
                        }

                        function b(e) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                            if ("string" !== typeof e) {
                                const t = n[0],
                                    i = [...n.slice(1)];
                                return i[0] && (i[0].appName = e.name), e._errorFactory.create(t, ...i)
                            }
                            return p.create(e, ...n)
                        }

                        function y(e, t) {
                            if (!e) {
                                for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
                                throw b(t, ...i)
                            }
                        }

                        function E(e) {
                            const t = "INTERNAL ASSERTION FAILED: " + e;
                            throw g(t), new Error(t)
                        }

                        function T(e, t) {
                            e || E(t)
                        }

                        function A() {
                            var e;
                            return "undefined" !== typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.href) || ""
                        }

                        function k() {
                            return "http:" === O() || "https:" === O()
                        }

                        function O() {
                            var e;
                            return "undefined" !== typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.protocol) || null
                        }
                        class S {
                            constructor(e, t) {
                                this.shortDelay = e, this.longDelay = t, T(t > e, "Short delay should be less than long delay!"), this.isMobile = Object(i.u)() || Object(i.v)()
                            }
                            get() {
                                return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (k() || Object(i.q)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
                            }
                        }

                        function C(e, t) {
                            T(e.emulator, "Emulator should always be set here");
                            const {
                                url: n
                            } = e.emulator;
                            return t ? `${n}${t.startsWith("/")?t.slice(1):t}` : n
                        }
                        class P {
                            static initialize(e, t, n) {
                                this.fetchImpl = e, t && (this.headersImpl = t), n && (this.responseImpl = n)
                            }
                            static fetch() {
                                return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                            }
                            static headers() {
                                return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                            }
                            static response() {
                                return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                            }
                        }
                        const N = {
                                CREDENTIAL_MISMATCH: "custom-token-mismatch",
                                MISSING_CUSTOM_TOKEN: "internal-error",
                                INVALID_IDENTIFIER: "invalid-email",
                                MISSING_CONTINUE_URI: "internal-error",
                                INVALID_PASSWORD: "wrong-password",
                                MISSING_PASSWORD: "missing-password",
                                EMAIL_EXISTS: "email-already-in-use",
                                PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                                INVALID_IDP_RESPONSE: "invalid-credential",
                                INVALID_PENDING_TOKEN: "invalid-credential",
                                FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                                MISSING_REQ_TYPE: "internal-error",
                                EMAIL_NOT_FOUND: "user-not-found",
                                RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                                EXPIRED_OOB_CODE: "expired-action-code",
                                INVALID_OOB_CODE: "invalid-action-code",
                                MISSING_OOB_CODE: "internal-error",
                                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                                INVALID_ID_TOKEN: "invalid-user-token",
                                TOKEN_EXPIRED: "user-token-expired",
                                USER_NOT_FOUND: "user-token-expired",
                                TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                                PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
                                INVALID_CODE: "invalid-verification-code",
                                INVALID_SESSION_INFO: "invalid-verification-id",
                                INVALID_TEMPORARY_PROOF: "invalid-credential",
                                MISSING_SESSION_INFO: "missing-verification-id",
                                SESSION_EXPIRED: "code-expired",
                                MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                                UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                                INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                                ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                                INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                                MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                                MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                                MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                                SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                                SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
                                BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
                                RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
                                MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
                                INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
                                INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
                                MISSING_CLIENT_TYPE: "missing-client-type",
                                MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
                                INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
                                INVALID_REQ_TYPE: "invalid-req-type"
                            },
                            R = new S(3e4, 6e4);

                        function D(e, t) {
                            return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {
                                tenantId: e.tenantId
                            }) : t
                        }
                        async function L(e, t, n, r) {
                            let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                            return M(e, s, async () => {
                                let s = {},
                                    o = {};
                                r && ("GET" === t ? o = r : s = {
                                    body: JSON.stringify(r)
                                });
                                const a = Object(i.x)(Object.assign({
                                        key: e.config.apiKey
                                    }, o)).slice(1),
                                    c = await e._getAdditionalHeaders();
                                return c["Content-Type"] = "application/json", e.languageCode && (c["X-Firebase-Locale"] = e.languageCode), P.fetch()(j(e, e.config.apiHost, n, a), Object.assign({
                                    method: t,
                                    headers: c,
                                    referrerPolicy: "no-referrer"
                                }, s))
                            })
                        }
                        async function M(e, t, n) {
                            e._canInitEmulator = !1;
                            const r = Object.assign(Object.assign({}, N), t);
                            try {
                                const t = new x(e),
                                    i = await Promise.race([n(), t.promise]);
                                t.clearNetworkTimeout();
                                const s = await i.json();
                                if ("needConfirmation" in s) throw F(e, "account-exists-with-different-credential", s);
                                if (i.ok && !("errorMessage" in s)) return s; {
                                    const t = i.ok ? s.errorMessage : s.error.message,
                                        [n, o] = t.split(" : ");
                                    if ("FEDERATED_USER_ID_ALREADY_LINKED" === n) throw F(e, "credential-already-in-use", s);
                                    if ("EMAIL_EXISTS" === n) throw F(e, "email-already-in-use", s);
                                    if ("USER_DISABLED" === n) throw F(e, "user-disabled", s);
                                    const a = r[n] || n.toLowerCase().replace(/[_\s]+/g, "-");
                                    if (o) throw I(e, a, o);
                                    v(e, a)
                                }
                            } catch (s) {
                                if (s instanceof i.c) throw s;
                                v(e, "network-request-failed", {
                                    message: String(s)
                                })
                            }
                        }
                        async function U(e, t, n, i) {
                            let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                            const s = await L(e, t, n, i, r);
                            return "mfaPendingCredential" in s && v(e, "multi-factor-auth-required", {
                                _serverResponse: s
                            }), s
                        }

                        function j(e, t, n, i) {
                            const r = `${t}${n}?${i}`;
                            return e.config.emulator ? C(e.config, r) : `${e.config.apiScheme}://${r}`
                        }
                        class x {
                            constructor(e) {
                                this.auth = e, this.timer = null, this.promise = new Promise((e, t) => {
                                    this.timer = setTimeout(() => t(_(this.auth, "network-request-failed")), R.get())
                                })
                            }
                            clearNetworkTimeout() {
                                clearTimeout(this.timer)
                            }
                        }

                        function F(e, t, n) {
                            const i = {
                                appName: e.name
                            };
                            n.email && (i.email = n.email), n.phoneNumber && (i.phoneNumber = n.phoneNumber);
                            const r = _(e, t, i);
                            return r.customData._tokenResponse = n, r
                        }
                        async function V(e, t) {
                            return L(e, "GET", "/v2/recaptchaConfig", D(e, t))
                        }

                        function H(e) {
                            if (e) try {
                                const t = new Date(Number(e));
                                if (!isNaN(t.getTime())) return t.toUTCString()
                            } catch (t) {}
                        }

                        function z(e) {
                            return 1e3 * Number(e)
                        }

                        function B(e) {
                            const [t, n, r] = e.split(".");
                            if (void 0 === t || void 0 === n || void 0 === r) return g("JWT malformed, contained fewer than 3 sections"), null;
                            try {
                                const e = Object(i.e)(n);
                                return e ? JSON.parse(e) : (g("Failed to decode base64 JWT payload"), null)
                            } catch (s) {
                                return g("Caught error parsing JWT payload as JSON", null === s || void 0 === s ? void 0 : s.toString()), null
                            }
                        }
                        async function q(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (n) return t;
                            try {
                                return await t
                            } catch (r) {
                                throw r instanceof i.c && W(r) && e.auth.currentUser === e && await e.auth.signOut(), r
                            }
                        }

                        function W(e) {
                            let {
                                code: t
                            } = e;
                            return "auth/user-disabled" === t || "auth/user-token-expired" === t
                        }
                        class K {
                            constructor(e) {
                                this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
                            }
                            _start() {
                                this.isRunning || (this.isRunning = !0, this.schedule())
                            }
                            _stop() {
                                this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
                            }
                            getInterval(e) {
                                var t;
                                if (e) {
                                    const e = this.errorBackoff;
                                    return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), e
                                } {
                                    this.errorBackoff = 3e4;
                                    const e = (null !== (t = this.user.stsTokenManager.expirationTime) && void 0 !== t ? t : 0) - Date.now() - 3e5;
                                    return Math.max(0, e)
                                }
                            }
                            schedule() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!this.isRunning) return;
                                const t = this.getInterval(e);
                                this.timerId = setTimeout(async () => {
                                    await this.iteration()
                                }, t)
                            }
                            async iteration() {
                                try {
                                    await this.user.getIdToken(!0)
                                } catch (e) {
                                    return void("auth/network-request-failed" === (null === e || void 0 === e ? void 0 : e.code) && this.schedule(!0))
                                }
                                this.schedule()
                            }
                        }
                        class $ {
                            constructor(e, t) {
                                this.createdAt = e, this.lastLoginAt = t, this._initializeTime()
                            }
                            _initializeTime() {
                                this.lastSignInTime = H(this.lastLoginAt), this.creationTime = H(this.createdAt)
                            }
                            _copy(e) {
                                this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime()
                            }
                            toJSON() {
                                return {
                                    createdAt: this.createdAt,
                                    lastLoginAt: this.lastLoginAt
                                }
                            }
                        }
                        async function G(e) {
                            var t;
                            const n = e.auth,
                                i = await e.getIdToken(),
                                r = await q(e, async function(e, t) {
                                    return L(e, "POST", "/v1/accounts:lookup", t)
                                }(n, {
                                    idToken: i
                                }));
                            y(null === r || void 0 === r ? void 0 : r.users.length, n, "internal-error");
                            const s = r.users[0];
                            e._notifyReloadListener(s);
                            const a = (null === (t = s.providerUserInfo) || void 0 === t ? void 0 : t.length) ? s.providerUserInfo.map(e => {
                                var {
                                    providerId: t
                                } = e, n = Object(o.e)(e, ["providerId"]);
                                return {
                                    providerId: t,
                                    uid: n.rawId || "",
                                    displayName: n.displayName || null,
                                    email: n.email || null,
                                    phoneNumber: n.phoneNumber || null,
                                    photoURL: n.photoUrl || null
                                }
                            }) : [];
                            const c = (u = e.providerData, d = a, [...u.filter(e => !d.some(t => t.providerId === e.providerId)), ...d]);
                            var u, d;
                            const l = e.isAnonymous,
                                h = !(e.email && s.passwordHash) && !(null === c || void 0 === c ? void 0 : c.length),
                                p = !!l && h,
                                f = {
                                    uid: s.localId,
                                    displayName: s.displayName || null,
                                    photoURL: s.photoUrl || null,
                                    email: s.email || null,
                                    emailVerified: s.emailVerified || !1,
                                    phoneNumber: s.phoneNumber || null,
                                    tenantId: s.tenantId || null,
                                    providerData: c,
                                    metadata: new $(s.createdAt, s.lastLoginAt),
                                    isAnonymous: p
                                };
                            Object.assign(e, f)
                        }
                        class J {
                            constructor() {
                                this.refreshToken = null, this.accessToken = null, this.expirationTime = null
                            }
                            get isExpired() {
                                return !this.expirationTime || Date.now() > this.expirationTime - 3e4
                            }
                            updateFromServerResponse(e) {
                                y(e.idToken, "internal-error"), y("undefined" !== typeof e.idToken, "internal-error"), y("undefined" !== typeof e.refreshToken, "internal-error");
                                const t = "expiresIn" in e && "undefined" !== typeof e.expiresIn ? Number(e.expiresIn) : function(e) {
                                    const t = B(e);
                                    return y(t, "internal-error"), y("undefined" !== typeof t.exp, "internal-error"), y("undefined" !== typeof t.iat, "internal-error"), Number(t.exp) - Number(t.iat)
                                }(e.idToken);
                                this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
                            }
                            async getToken(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return y(!this.accessToken || this.refreshToken, e, "user-token-expired"), t || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null : this.accessToken
                            }
                            clearRefreshToken() {
                                this.refreshToken = null
                            }
                            async refresh(e, t) {
                                const {
                                    accessToken: n,
                                    refreshToken: r,
                                    expiresIn: s
                                } = await async function(e, t) {
                                    const n = await M(e, {}, async () => {
                                        const n = Object(i.x)({
                                                grant_type: "refresh_token",
                                                refresh_token: t
                                            }).slice(1),
                                            {
                                                tokenApiHost: r,
                                                apiKey: s
                                            } = e.config,
                                            o = j(e, r, "/v1/token", "key=" + s),
                                            a = await e._getAdditionalHeaders();
                                        return a["Content-Type"] = "application/x-www-form-urlencoded", P.fetch()(o, {
                                            method: "POST",
                                            headers: a,
                                            body: n
                                        })
                                    });
                                    return {
                                        accessToken: n.access_token,
                                        expiresIn: n.expires_in,
                                        refreshToken: n.refresh_token
                                    }
                                }(e, t);
                                this.updateTokensAndExpiration(n, r, Number(s))
                            }
                            updateTokensAndExpiration(e, t, n) {
                                this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + 1e3 * n
                            }
                            static fromJSON(e, t) {
                                const {
                                    refreshToken: n,
                                    accessToken: i,
                                    expirationTime: r
                                } = t, s = new J;
                                return n && (y("string" === typeof n, "internal-error", {
                                    appName: e
                                }), s.refreshToken = n), i && (y("string" === typeof i, "internal-error", {
                                    appName: e
                                }), s.accessToken = i), r && (y("number" === typeof r, "internal-error", {
                                    appName: e
                                }), s.expirationTime = r), s
                            }
                            toJSON() {
                                return {
                                    refreshToken: this.refreshToken,
                                    accessToken: this.accessToken,
                                    expirationTime: this.expirationTime
                                }
                            }
                            _assign(e) {
                                this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime
                            }
                            _clone() {
                                return Object.assign(new J, this.toJSON())
                            }
                            _performRefresh() {
                                return E("not implemented")
                            }
                        }

                        function Y(e, t) {
                            y("string" === typeof e || "undefined" === typeof e, "internal-error", {
                                appName: t
                            })
                        }
                        class X {
                            constructor(e) {
                                var {
                                    uid: t,
                                    auth: n,
                                    stsTokenManager: i
                                } = e, r = Object(o.e)(e, ["uid", "auth", "stsTokenManager"]);
                                this.providerId = "firebase", this.proactiveRefresh = new K(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = n, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = r.displayName || null, this.email = r.email || null, this.emailVerified = r.emailVerified || !1, this.phoneNumber = r.phoneNumber || null, this.photoURL = r.photoURL || null, this.isAnonymous = r.isAnonymous || !1, this.tenantId = r.tenantId || null, this.providerData = r.providerData ? [...r.providerData] : [], this.metadata = new $(r.createdAt || void 0, r.lastLoginAt || void 0)
                            }
                            async getIdToken(e) {
                                const t = await q(this, this.stsTokenManager.getToken(this.auth, e));
                                return y(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t
                            }
                            getIdTokenResult(e) {
                                return async function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    const n = Object(i.o)(e),
                                        r = await n.getIdToken(t),
                                        s = B(r);
                                    y(s && s.exp && s.auth_time && s.iat, n.auth, "internal-error");
                                    const o = "object" === typeof s.firebase ? s.firebase : void 0,
                                        a = null === o || void 0 === o ? void 0 : o.sign_in_provider;
                                    return {
                                        claims: s,
                                        token: r,
                                        authTime: H(z(s.auth_time)),
                                        issuedAtTime: H(z(s.iat)),
                                        expirationTime: H(z(s.exp)),
                                        signInProvider: a || null,
                                        signInSecondFactor: (null === o || void 0 === o ? void 0 : o.sign_in_second_factor) || null
                                    }
                                }(this, e)
                            }
                            reload() {
                                return async function(e) {
                                    const t = Object(i.o)(e);
                                    await G(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t)
                                }(this)
                            }
                            _assign(e) {
                                this !== e && (y(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map(e => Object.assign({}, e)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager))
                            }
                            _clone(e) {
                                const t = new X(Object.assign(Object.assign({}, this), {
                                    auth: e,
                                    stsTokenManager: this.stsTokenManager._clone()
                                }));
                                return t.metadata._copy(this.metadata), t
                            }
                            _onReload(e) {
                                y(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
                            }
                            _notifyReloadListener(e) {
                                this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
                            }
                            _startProactiveRefresh() {
                                this.proactiveRefresh._start()
                            }
                            _stopProactiveRefresh() {
                                this.proactiveRefresh._stop()
                            }
                            async _updateTokensIfNecessary(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = !1;
                                e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), n = !0), t && await G(this), await this.auth._persistUserIfCurrent(this), n && this.auth._notifyListenersIfCurrent(this)
                            }
                            async delete() {
                                const e = await this.getIdToken();
                                return await q(this, async function(e, t) {
                                    return L(e, "POST", "/v1/accounts:delete", t)
                                }(this.auth, {
                                    idToken: e
                                })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
                            }
                            toJSON() {
                                return Object.assign(Object.assign({
                                    uid: this.uid,
                                    email: this.email || void 0,
                                    emailVerified: this.emailVerified,
                                    displayName: this.displayName || void 0,
                                    isAnonymous: this.isAnonymous,
                                    photoURL: this.photoURL || void 0,
                                    phoneNumber: this.phoneNumber || void 0,
                                    tenantId: this.tenantId || void 0,
                                    providerData: this.providerData.map(e => Object.assign({}, e)),
                                    stsTokenManager: this.stsTokenManager.toJSON(),
                                    _redirectEventId: this._redirectEventId
                                }, this.metadata.toJSON()), {
                                    apiKey: this.auth.config.apiKey,
                                    appName: this.auth.name
                                })
                            }
                            get refreshToken() {
                                return this.stsTokenManager.refreshToken || ""
                            }
                            static _fromJSON(e, t) {
                                var n, i, r, s, o, a, c, u;
                                const d = null !== (n = t.displayName) && void 0 !== n ? n : void 0,
                                    l = null !== (i = t.email) && void 0 !== i ? i : void 0,
                                    h = null !== (r = t.phoneNumber) && void 0 !== r ? r : void 0,
                                    p = null !== (s = t.photoURL) && void 0 !== s ? s : void 0,
                                    f = null !== (o = t.tenantId) && void 0 !== o ? o : void 0,
                                    m = null !== (a = t._redirectEventId) && void 0 !== a ? a : void 0,
                                    g = null !== (c = t.createdAt) && void 0 !== c ? c : void 0,
                                    v = null !== (u = t.lastLoginAt) && void 0 !== u ? u : void 0,
                                    {
                                        uid: _,
                                        emailVerified: I,
                                        isAnonymous: w,
                                        providerData: b,
                                        stsTokenManager: E
                                    } = t;
                                y(_ && E, e, "internal-error");
                                const T = J.fromJSON(this.name, E);
                                y("string" === typeof _, e, "internal-error"), Y(d, e.name), Y(l, e.name), y("boolean" === typeof I, e, "internal-error"), y("boolean" === typeof w, e, "internal-error"), Y(h, e.name), Y(p, e.name), Y(f, e.name), Y(m, e.name), Y(g, e.name), Y(v, e.name);
                                const A = new X({
                                    uid: _,
                                    auth: e,
                                    email: l,
                                    emailVerified: I,
                                    displayName: d,
                                    isAnonymous: w,
                                    photoURL: p,
                                    phoneNumber: h,
                                    tenantId: f,
                                    stsTokenManager: T,
                                    createdAt: g,
                                    lastLoginAt: v
                                });
                                return b && Array.isArray(b) && (A.providerData = b.map(e => Object.assign({}, e))), m && (A._redirectEventId = m), A
                            }
                            static async _fromIdTokenResponse(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                const i = new J;
                                i.updateFromServerResponse(t);
                                const r = new X({
                                    uid: t.localId,
                                    auth: e,
                                    stsTokenManager: i,
                                    isAnonymous: n
                                });
                                return await G(r), r
                            }
                        }
                        const Z = new Map;

                        function Q(e) {
                            T(e instanceof Function, "Expected a class definition");
                            let t = Z.get(e);
                            return t ? (T(t instanceof e, "Instance stored in cache mismatched with class"), t) : (t = new e, Z.set(e, t), t)
                        }
                        class ee {
                            constructor() {
                                this.type = "NONE", this.storage = {}
                            }
                            async _isAvailable() {
                                return !0
                            }
                            async _set(e, t) {
                                this.storage[e] = t
                            }
                            async _get(e) {
                                const t = this.storage[e];
                                return void 0 === t ? null : t
                            }
                            async _remove(e) {
                                delete this.storage[e]
                            }
                            _addListener(e, t) {}
                            _removeListener(e, t) {}
                        }
                        ee.type = "NONE";
                        const te = ee;

                        function ne(e, t, n) {
                            return `firebase:${e}:${t}:${n}`
                        }
                        class ie {
                            constructor(e, t, n) {
                                this.persistence = e, this.auth = t, this.userKey = n;
                                const {
                                    config: i,
                                    name: r
                                } = this.auth;
                                this.fullUserKey = ne(this.userKey, i.apiKey, r), this.fullPersistenceKey = ne("persistence", i.apiKey, r), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
                            }
                            setCurrentUser(e) {
                                return this.persistence._set(this.fullUserKey, e.toJSON())
                            }
                            async getCurrentUser() {
                                const e = await this.persistence._get(this.fullUserKey);
                                return e ? X._fromJSON(this.auth, e) : null
                            }
                            removeCurrentUser() {
                                return this.persistence._remove(this.fullUserKey)
                            }
                            savePersistenceForRedirect() {
                                return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
                            }
                            async setPersistence(e) {
                                if (this.persistence === e) return;
                                const t = await this.getCurrentUser();
                                return await this.removeCurrentUser(), this.persistence = e, t ? this.setCurrentUser(t) : void 0
                            }
                            delete() {
                                this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
                            }
                            static async create(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
                                if (!t.length) return new ie(Q(te), e, n);
                                const i = (await Promise.all(t.map(async e => {
                                    if (await e._isAvailable()) return e
                                }))).filter(e => e);
                                let r = i[0] || Q(te);
                                const s = ne(n, e.config.apiKey, e.name);
                                let o = null;
                                for (const u of t) try {
                                    const t = await u._get(s);
                                    if (t) {
                                        const n = X._fromJSON(e, t);
                                        u !== r && (o = n), r = u;
                                        break
                                    }
                                } catch (c) {}
                                const a = i.filter(e => e._shouldAllowMigration);
                                return r._shouldAllowMigration && a.length ? (r = a[0], o && await r._set(s, o.toJSON()), await Promise.all(t.map(async e => {
                                    if (e !== r) try {
                                        await e._remove(s)
                                    } catch (c) {}
                                })), new ie(r, e, n)) : new ie(r, e, n)
                            }
                        }

                        function re(e) {
                            const t = e.toLowerCase();
                            if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
                            if (ce(t)) return "IEMobile";
                            if (t.includes("msie") || t.includes("trident/")) return "IE";
                            if (t.includes("edge/")) return "Edge";
                            if (se(t)) return "Firefox";
                            if (t.includes("silk/")) return "Silk";
                            if (de(t)) return "Blackberry";
                            if (le(t)) return "Webos";
                            if (oe(t)) return "Safari";
                            if ((t.includes("chrome/") || ae(t)) && !t.includes("edge/")) return "Chrome";
                            if (ue(t)) return "Android"; {
                                const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
                                    n = e.match(t);
                                if (2 === (null === n || void 0 === n ? void 0 : n.length)) return n[1]
                            }
                            return "Other"
                        }

                        function se() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.p)();
                            return /firefox\//i.test(e)
                        }

                        function oe() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.p)();
                            const t = e.toLowerCase();
                            return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android")
                        }

                        function ae() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.p)();
                            return /crios\//i.test(e)
                        }

                        function ce() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.p)();
                            return /iemobile/i.test(e)
                        }

                        function ue() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.p)();
                            return /android/i.test(e)
                        }

                        function de() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.p)();
                            return /blackberry/i.test(e)
                        }

                        function le() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.p)();
                            return /webos/i.test(e)
                        }

                        function he() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.p)();
                            return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e)
                        }

                        function pe() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.p)();
                            var t;
                            return he(e) && !!(null === (t = window.navigator) || void 0 === t ? void 0 : t.standalone)
                        }

                        function fe() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.p)();
                            return he(e) || ue(e) || le(e) || de(e) || /windows phone/i.test(e) || ce(e)
                        }

                        function me(e) {
                            let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            switch (e) {
                                case "Browser":
                                    t = re(Object(i.p)());
                                    break;
                                case "Worker":
                                    t = `${re(Object(i.p)())}-${e}`;
                                    break;
                                default:
                                    t = e
                            }
                            const s = n.length ? n.join(",") : "FirebaseCore-web";
                            return `${t}/JsCore/${r.a}/${s}`
                        }
                        class ge {
                            constructor(e) {
                                this.auth = e, this.queue = []
                            }
                            pushCallback(e, t) {
                                const n = t => new Promise((n, i) => {
                                    try {
                                        n(e(t))
                                    } catch (r) {
                                        i(r)
                                    }
                                });
                                n.onAbort = t, this.queue.push(n);
                                const i = this.queue.length - 1;
                                return () => {
                                    this.queue[i] = () => Promise.resolve()
                                }
                            }
                            async runMiddleware(e) {
                                if (this.auth.currentUser === e) return;
                                const t = [];
                                try {
                                    for (const n of this.queue) await n(e), n.onAbort && t.push(n.onAbort)
                                } catch (n) {
                                    t.reverse();
                                    for (const e of t) try {
                                        e()
                                    } catch (i) {}
                                    throw this.auth._errorFactory.create("login-blocked", {
                                        originalMessage: null === n || void 0 === n ? void 0 : n.message
                                    })
                                }
                            }
                        }
                        class ve {
                            constructor(e) {
                                var t, n, i, r;
                                const s = e.customStrengthOptions;
                                this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = null !== (t = s.minPasswordLength) && void 0 !== t ? t : 6, s.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = s.maxPasswordLength), void 0 !== s.containsLowercaseCharacter && (this.customStrengthOptions.containsLowercaseLetter = s.containsLowercaseCharacter), void 0 !== s.containsUppercaseCharacter && (this.customStrengthOptions.containsUppercaseLetter = s.containsUppercaseCharacter), void 0 !== s.containsNumericCharacter && (this.customStrengthOptions.containsNumericCharacter = s.containsNumericCharacter), void 0 !== s.containsNonAlphanumericCharacter && (this.customStrengthOptions.containsNonAlphanumericCharacter = s.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, "ENFORCEMENT_STATE_UNSPECIFIED" === this.enforcementState && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = null !== (i = null === (n = e.allowedNonAlphanumericCharacters) || void 0 === n ? void 0 : n.join("")) && void 0 !== i ? i : "", this.forceUpgradeOnSignin = null !== (r = e.forceUpgradeOnSignin) && void 0 !== r && r, this.schemaVersion = e.schemaVersion
                            }
                            validatePassword(e) {
                                var t, n, i, r, s, o;
                                const a = {
                                    isValid: !0,
                                    passwordPolicy: this
                                };
                                return this.validatePasswordLengthOptions(e, a), this.validatePasswordCharacterOptions(e, a), a.isValid && (a.isValid = null === (t = a.meetsMinPasswordLength) || void 0 === t || t), a.isValid && (a.isValid = null === (n = a.meetsMaxPasswordLength) || void 0 === n || n), a.isValid && (a.isValid = null === (i = a.containsLowercaseLetter) || void 0 === i || i), a.isValid && (a.isValid = null === (r = a.containsUppercaseLetter) || void 0 === r || r), a.isValid && (a.isValid = null === (s = a.containsNumericCharacter) || void 0 === s || s), a.isValid && (a.isValid = null === (o = a.containsNonAlphanumericCharacter) || void 0 === o || o), a
                            }
                            validatePasswordLengthOptions(e, t) {
                                const n = this.customStrengthOptions.minPasswordLength,
                                    i = this.customStrengthOptions.maxPasswordLength;
                                n && (t.meetsMinPasswordLength = e.length >= n), i && (t.meetsMaxPasswordLength = e.length <= i)
                            }
                            validatePasswordCharacterOptions(e, t) {
                                let n;
                                this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
                                for (let i = 0; i < e.length; i++) n = e.charAt(i), this.updatePasswordCharacterOptionsStatuses(t, n >= "a" && n <= "z", n >= "A" && n <= "Z", n >= "0" && n <= "9", this.allowedNonAlphanumericCharacters.includes(n))
                            }
                            updatePasswordCharacterOptionsStatuses(e, t, n, i, r) {
                                this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = n)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = i)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = r))
                            }
                        }
                        class _e {
                            constructor(e, t, n, i) {
                                this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = n, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new we(this), this.idTokenSubscription = new we(this), this.beforeStateQueue = new ge(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = p, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
                                    appVerificationDisabledForTesting: !1
                                }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion
                            }
                            _initializeWithPersistence(e, t) {
                                return t && (this._popupRedirectResolver = Q(t)), this._initializationPromise = this.queue(async () => {
                                    var n, i;
                                    if (!this._deleted && (this.persistenceManager = await ie.create(this, e), !this._deleted)) {
                                        if (null === (n = this._popupRedirectResolver) || void 0 === n ? void 0 : n._shouldInitProactively) try {
                                            await this._popupRedirectResolver._initialize(this)
                                        } catch (r) {}
                                        await this.initializeCurrentUser(t), this.lastNotifiedUid = (null === (i = this.currentUser) || void 0 === i ? void 0 : i.uid) || null, this._deleted || (this._isInitialized = !0)
                                    }
                                }), this._initializationPromise
                            }
                            async _onStorageEvent() {
                                if (this._deleted) return;
                                const e = await this.assertedPersistence.getCurrentUser();
                                return this.currentUser || e ? this.currentUser && e && this.currentUser.uid === e.uid ? (this._currentUser._assign(e), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(e, !0) : void 0
                            }
                            async initializeCurrentUser(e) {
                                var t;
                                const n = await this.assertedPersistence.getCurrentUser();
                                let i = n,
                                    r = !1;
                                if (e && this.config.authDomain) {
                                    await this.getOrInitRedirectPersistenceManager();
                                    const n = null === (t = this.redirectUser) || void 0 === t ? void 0 : t._redirectEventId,
                                        s = null === i || void 0 === i ? void 0 : i._redirectEventId,
                                        o = await this.tryRedirectSignIn(e);
                                    n && n !== s || !(null === o || void 0 === o ? void 0 : o.user) || (i = o.user, r = !0)
                                }
                                if (!i) return this.directlySetCurrentUser(null);
                                if (!i._redirectEventId) {
                                    if (r) try {
                                        await this.beforeStateQueue.runMiddleware(i)
                                    } catch (s) {
                                        i = n, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(s))
                                    }
                                    return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
                                }
                                return y(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i)
                            }
                            async tryRedirectSignIn(e) {
                                let t = null;
                                try {
                                    t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
                                } catch (n) {
                                    await this._setRedirectUser(null)
                                }
                                return t
                            }
                            async reloadAndSetCurrentUserOrClear(e) {
                                try {
                                    await G(e)
                                } catch (t) {
                                    if ("auth/network-request-failed" !== (null === t || void 0 === t ? void 0 : t.code)) return this.directlySetCurrentUser(null)
                                }
                                return this.directlySetCurrentUser(e)
                            }
                            useDeviceLanguage() {
                                this.languageCode = function() {
                                    if ("undefined" === typeof navigator) return null;
                                    const e = navigator;
                                    return e.languages && e.languages[0] || e.language || null
                                }()
                            }
                            async _delete() {
                                this._deleted = !0
                            }
                            async updateCurrentUser(e) {
                                const t = e ? Object(i.o)(e) : null;
                                return t && y(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this))
                            }
                            async _updateCurrentUser(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (!this._deleted) return e && y(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
                                    await this.directlySetCurrentUser(e), this.notifyAuthListeners()
                                })
                            }
                            async signOut() {
                                return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
                            }
                            setPersistence(e) {
                                return this.queue(async () => {
                                    await this.assertedPersistence.setPersistence(Q(e))
                                })
                            }
                            _getRecaptchaConfig() {
                                return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
                            }
                            async validatePassword(e) {
                                this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
                                const t = this._getPasswordPolicyInternal();
                                return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : t.validatePassword(e)
                            }
                            _getPasswordPolicyInternal() {
                                return null === this.tenantId ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
                            }
                            async _updatePasswordPolicy() {
                                const e = await async function(e) {
                                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return L(e, "GET", "/v2/passwordPolicy", D(e, t))
                                    }(this),
                                    t = new ve(e);
                                null === this.tenantId ? this._projectPasswordPolicy = t : this._tenantPasswordPolicies[this.tenantId] = t
                            }
                            _getPersistence() {
                                return this.assertedPersistence.persistence.type
                            }
                            _updateErrorMap(e) {
                                this._errorFactory = new i.b("auth", "Firebase", e())
                            }
                            onAuthStateChanged(e, t, n) {
                                return this.registerStateListener(this.authStateSubscription, e, t, n)
                            }
                            beforeAuthStateChanged(e, t) {
                                return this.beforeStateQueue.pushCallback(e, t)
                            }
                            onIdTokenChanged(e, t, n) {
                                return this.registerStateListener(this.idTokenSubscription, e, t, n)
                            }
                            authStateReady() {
                                return new Promise((e, t) => {
                                    if (this.currentUser) e();
                                    else {
                                        const n = this.onAuthStateChanged(() => {
                                            n(), e()
                                        }, t)
                                    }
                                })
                            }
                            toJSON() {
                                var e;
                                return {
                                    apiKey: this.config.apiKey,
                                    authDomain: this.config.authDomain,
                                    appName: this.name,
                                    currentUser: null === (e = this._currentUser) || void 0 === e ? void 0 : e.toJSON()
                                }
                            }
                            async _setRedirectUser(e, t) {
                                const n = await this.getOrInitRedirectPersistenceManager(t);
                                return null === e ? n.removeCurrentUser() : n.setCurrentUser(e)
                            }
                            async getOrInitRedirectPersistenceManager(e) {
                                if (!this.redirectPersistenceManager) {
                                    const t = e && Q(e) || this._popupRedirectResolver;
                                    y(t, this, "argument-error"), this.redirectPersistenceManager = await ie.create(this, [Q(t._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
                                }
                                return this.redirectPersistenceManager
                            }
                            async _redirectUserForId(e) {
                                var t, n;
                                return this._isInitialized && await this.queue(async () => {}), (null === (t = this._currentUser) || void 0 === t ? void 0 : t._redirectEventId) === e ? this._currentUser : (null === (n = this.redirectUser) || void 0 === n ? void 0 : n._redirectEventId) === e ? this.redirectUser : null
                            }
                            async _persistUserIfCurrent(e) {
                                if (e === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(e))
                            }
                            _notifyListenersIfCurrent(e) {
                                e === this.currentUser && this.notifyAuthListeners()
                            }
                            _key() {
                                return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
                            }
                            _startProactiveRefresh() {
                                this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
                            }
                            _stopProactiveRefresh() {
                                this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
                            }
                            get _currentUser() {
                                return this.currentUser
                            }
                            notifyAuthListeners() {
                                var e, t;
                                if (!this._isInitialized) return;
                                this.idTokenSubscription.next(this.currentUser);
                                const n = null !== (t = null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) && void 0 !== t ? t : null;
                                this.lastNotifiedUid !== n && (this.lastNotifiedUid = n, this.authStateSubscription.next(this.currentUser))
                            }
                            registerStateListener(e, t, n, i) {
                                if (this._deleted) return () => {};
                                const r = "function" === typeof t ? t : t.next.bind(t);
                                let s = !1;
                                const o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
                                if (y(o, this, "internal-error"), o.then(() => {
                                        s || r(this.currentUser)
                                    }), "function" === typeof t) {
                                    const r = e.addObserver(t, n, i);
                                    return () => {
                                        s = !0, r()
                                    }
                                } {
                                    const n = e.addObserver(t);
                                    return () => {
                                        s = !0, n()
                                    }
                                }
                            }
                            async directlySetCurrentUser(e) {
                                this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
                            }
                            queue(e) {
                                return this.operations = this.operations.then(e, e), this.operations
                            }
                            get assertedPersistence() {
                                return y(this.persistenceManager, this, "internal-error"), this.persistenceManager
                            }
                            _logFramework(e) {
                                e && !this.frameworks.includes(e) && (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = me(this.config.clientPlatform, this._getFrameworks()))
                            }
                            _getFrameworks() {
                                return this.frameworks
                            }
                            async _getAdditionalHeaders() {
                                var e;
                                const t = {
                                    "X-Client-Version": this.clientVersion
                                };
                                this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
                                const n = await (null === (e = this.heartbeatServiceProvider.getImmediate({
                                    optional: !0
                                })) || void 0 === e ? void 0 : e.getHeartbeatsHeader());
                                n && (t["X-Firebase-Client"] = n);
                                const i = await this._getAppCheckToken();
                                return i && (t["X-Firebase-AppCheck"] = i), t
                            }
                            async _getAppCheckToken() {
                                var e;
                                const t = await (null === (e = this.appCheckServiceProvider.getImmediate({
                                    optional: !0
                                })) || void 0 === e ? void 0 : e.getToken());
                                return (null === t || void 0 === t ? void 0 : t.error) && function(e) {
                                    if (m.logLevel <= s.a.WARN) {
                                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                                        m.warn(`Auth (${r.a}): ${e}`, ...n)
                                    }
                                }("Error while retrieving App Check token: " + t.error), null === t || void 0 === t ? void 0 : t.token
                            }
                        }

                        function Ie(e) {
                            return Object(i.o)(e)
                        }
                        class we {
                            constructor(e) {
                                this.auth = e, this.observer = null, this.addObserver = Object(i.h)(e => this.observer = e)
                            }
                            get next() {
                                return y(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
                            }
                        }

                        function be(e) {
                            return new Promise((t, n) => {
                                const i = document.createElement("script");
                                i.setAttribute("src", e), i.onload = t, i.onerror = e => {
                                        const t = _("internal-error");
                                        t.customData = e, n(t)
                                    }, i.type = "text/javascript", i.charset = "UTF-8",
                                    function() {
                                        var e, t;
                                        return null !== (t = null === (e = document.getElementsByTagName("head")) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : document
                                    }().appendChild(i)
                            })
                        }

                        function ye(e) {
                            return `__${e}${Math.floor(1e6*Math.random())}`
                        }
                        class Ee {
                            constructor(e) {
                                this.type = "recaptcha-enterprise", this.auth = Ie(e)
                            }
                            async verify() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

                                function n(t, n, i) {
                                    const r = window.grecaptcha;
                                    c(r) ? r.enterprise.ready(() => {
                                        r.enterprise.execute(t, {
                                            action: e
                                        }).then(e => {
                                            n(e)
                                        }).catch(() => {
                                            n("NO_RECAPTCHA")
                                        })
                                    }) : i(Error("No reCAPTCHA enterprise script loaded."))
                                }
                                return new Promise((e, i) => {
                                    (async function(e) {
                                        if (!t) {
                                            if (null == e.tenantId && null != e._agentRecaptchaConfig) return e._agentRecaptchaConfig.siteKey;
                                            if (null != e.tenantId && void 0 !== e._tenantRecaptchaConfigs[e.tenantId]) return e._tenantRecaptchaConfigs[e.tenantId].siteKey
                                        }
                                        return new Promise(async (t, n) => {
                                            V(e, {
                                                clientType: "CLIENT_TYPE_WEB",
                                                version: "RECAPTCHA_ENTERPRISE"
                                            }).then(i => {
                                                if (void 0 !== i.recaptchaKey) {
                                                    const n = new u(i);
                                                    return null == e.tenantId ? e._agentRecaptchaConfig = n : e._tenantRecaptchaConfigs[e.tenantId] = n, t(n.siteKey)
                                                }
                                                n(new Error("recaptcha Enterprise site key undefined"))
                                            }).catch(e => {
                                                n(e)
                                            })
                                        })
                                    })(this.auth).then(r => {
                                        if (!t && c(window.grecaptcha)) n(r, e, i);
                                        else {
                                            if ("undefined" === typeof window) return void i(new Error("RecaptchaVerifier is only supported in browser"));
                                            be("https://www.google.com/recaptcha/enterprise.js?render=" + r).then(() => {
                                                n(r, e, i)
                                            }).catch(e => {
                                                i(e)
                                            })
                                        }
                                    }).catch(e => {
                                        i(e)
                                    })
                                })
                            }
                        }
                        async function Te(e, t, n) {
                            let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            const r = new Ee(e);
                            let s;
                            try {
                                s = await r.verify(n)
                            } catch (a) {
                                s = await r.verify(n, !0)
                            }
                            const o = Object.assign({}, t);
                            return i ? Object.assign(o, {
                                captchaResp: s
                            }) : Object.assign(o, {
                                captchaResponse: s
                            }), Object.assign(o, {
                                clientType: "CLIENT_TYPE_WEB"
                            }), Object.assign(o, {
                                recaptchaVersion: "RECAPTCHA_ENTERPRISE"
                            }), o
                        }

                        function Ae(e, t) {
                            const n = Object(r.b)(e, "auth");
                            if (n.isInitialized()) {
                                const e = n.getImmediate(),
                                    r = n.getOptions();
                                if (Object(i.i)(r, null !== t && void 0 !== t ? t : {})) return e;
                                v(e, "already-initialized")
                            }
                            return n.initialize({
                                options: t
                            })
                        }

                        function ke(e, t, n) {
                            const i = Ie(e);
                            y(i._canInitEmulator, i, "emulator-config-failed"), y(/^https?:\/\//.test(t), i, "invalid-emulator-scheme");
                            const r = !!(null === n || void 0 === n ? void 0 : n.disableWarnings),
                                s = Oe(t),
                                {
                                    host: o,
                                    port: a
                                } = function(e) {
                                    const t = Oe(e),
                                        n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
                                    if (!n) return {
                                        host: "",
                                        port: null
                                    };
                                    const i = n[2].split("@").pop() || "",
                                        r = /^(\[[^\]]+\])(:|$)/.exec(i);
                                    if (r) {
                                        const e = r[1];
                                        return {
                                            host: e,
                                            port: Se(i.substr(e.length + 1))
                                        }
                                    } {
                                        const [e, t] = i.split(":");
                                        return {
                                            host: e,
                                            port: Se(t)
                                        }
                                    }
                                }(t),
                                c = null === a ? "" : ":" + a;
                            i.config.emulator = {
                                url: `${s}//${o}${c}/`
                            }, i.settings.appVerificationDisabledForTesting = !0, i.emulatorConfig = Object.freeze({
                                host: o,
                                port: a,
                                protocol: s.replace(":", ""),
                                options: Object.freeze({
                                    disableWarnings: r
                                })
                            }), r || function() {
                                function e() {
                                    const e = document.createElement("p"),
                                        t = e.style;
                                    e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e)
                                }
                                "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
                                "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", e) : e())
                            }()
                        }

                        function Oe(e) {
                            const t = e.indexOf(":");
                            return t < 0 ? "" : e.substr(0, t + 1)
                        }

                        function Se(e) {
                            if (!e) return null;
                            const t = Number(e);
                            return isNaN(t) ? null : t
                        }
                        class Ce {
                            constructor(e, t) {
                                this.providerId = e, this.signInMethod = t
                            }
                            toJSON() {
                                return E("not implemented")
                            }
                            _getIdTokenResponse(e) {
                                return E("not implemented")
                            }
                            _linkToIdToken(e, t) {
                                return E("not implemented")
                            }
                            _getReauthenticationResolver(e) {
                                return E("not implemented")
                            }
                        }
                        async function Pe(e, t) {
                            return L(e, "POST", "/v1/accounts:resetPassword", D(e, t))
                        }
                        async function Ne(e, t) {
                            return L(e, "POST", "/v1/accounts:update", t)
                        }
                        async function Re(e, t) {
                            return U(e, "POST", "/v1/accounts:signInWithPassword", D(e, t))
                        }
                        class De extends Ce {
                            constructor(e, t, n) {
                                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                super("password", n), this._email = e, this._password = t, this._tenantId = i
                            }
                            static _fromEmailAndPassword(e, t) {
                                return new De(e, t, "password")
                            }
                            static _fromEmailAndCode(e, t) {
                                return new De(e, t, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
                            }
                            toJSON() {
                                return {
                                    email: this._email,
                                    password: this._password,
                                    signInMethod: this.signInMethod,
                                    tenantId: this._tenantId
                                }
                            }
                            static fromJSON(e) {
                                const t = "string" === typeof e ? JSON.parse(e) : e;
                                if ((null === t || void 0 === t ? void 0 : t.email) && (null === t || void 0 === t ? void 0 : t.password)) {
                                    if ("password" === t.signInMethod) return this._fromEmailAndPassword(t.email, t.password);
                                    if ("emailLink" === t.signInMethod) return this._fromEmailAndCode(t.email, t.password, t.tenantId)
                                }
                                return null
                            }
                            async _getIdTokenResponse(e) {
                                var t;
                                switch (this.signInMethod) {
                                    case "password":
                                        const n = {
                                            returnSecureToken: !0,
                                            email: this._email,
                                            password: this._password,
                                            clientType: "CLIENT_TYPE_WEB"
                                        };
                                        if (null === (t = e._getRecaptchaConfig()) || void 0 === t ? void 0 : t.emailPasswordEnabled) {
                                            const t = await Te(e, n, "signInWithPassword");
                                            return Re(e, t)
                                        }
                                        return Re(e, n).catch(async t => {
                                            if ("auth/missing-recaptcha-token" === t.code) {
                                                console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                                                const t = await Te(e, n, "signInWithPassword");
                                                return Re(e, t)
                                            }
                                            return Promise.reject(t)
                                        });
                                    case "emailLink":
                                        return async function(e, t) {
                                            return U(e, "POST", "/v1/accounts:signInWithEmailLink", D(e, t))
                                        }(e, {
                                            email: this._email,
                                            oobCode: this._password
                                        });
                                    default:
                                        v(e, "internal-error")
                                }
                            }
                            async _linkToIdToken(e, t) {
                                switch (this.signInMethod) {
                                    case "password":
                                        return Ne(e, {
                                            idToken: t,
                                            returnSecureToken: !0,
                                            email: this._email,
                                            password: this._password
                                        });
                                    case "emailLink":
                                        return async function(e, t) {
                                            return U(e, "POST", "/v1/accounts:signInWithEmailLink", D(e, t))
                                        }(e, {
                                            idToken: t,
                                            email: this._email,
                                            oobCode: this._password
                                        });
                                    default:
                                        v(e, "internal-error")
                                }
                            }
                            _getReauthenticationResolver(e) {
                                return this._getIdTokenResponse(e)
                            }
                        }
                        async function Le(e, t) {
                            return U(e, "POST", "/v1/accounts:signInWithIdp", D(e, t))
                        }
                        class Me extends Ce {
                            constructor() {
                                super(...arguments), this.pendingToken = null
                            }
                            static _fromParams(e) {
                                const t = new Me(e.providerId, e.signInMethod);
                                return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : v("argument-error"), t
                            }
                            toJSON() {
                                return {
                                    idToken: this.idToken,
                                    accessToken: this.accessToken,
                                    secret: this.secret,
                                    nonce: this.nonce,
                                    pendingToken: this.pendingToken,
                                    providerId: this.providerId,
                                    signInMethod: this.signInMethod
                                }
                            }
                            static fromJSON(e) {
                                const t = "string" === typeof e ? JSON.parse(e) : e,
                                    {
                                        providerId: n,
                                        signInMethod: i
                                    } = t,
                                    r = Object(o.e)(t, ["providerId", "signInMethod"]);
                                if (!n || !i) return null;
                                const s = new Me(n, i);
                                return s.idToken = r.idToken || void 0, s.accessToken = r.accessToken || void 0, s.secret = r.secret, s.nonce = r.nonce, s.pendingToken = r.pendingToken || null, s
                            }
                            _getIdTokenResponse(e) {
                                return Le(e, this.buildRequest())
                            }
                            _linkToIdToken(e, t) {
                                const n = this.buildRequest();
                                return n.idToken = t, Le(e, n)
                            }
                            _getReauthenticationResolver(e) {
                                const t = this.buildRequest();
                                return t.autoCreate = !1, Le(e, t)
                            }
                            buildRequest() {
                                const e = {
                                    requestUri: "http://localhost",
                                    returnSecureToken: !0
                                };
                                if (this.pendingToken) e.pendingToken = this.pendingToken;
                                else {
                                    const t = {};
                                    this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = Object(i.x)(t)
                                }
                                return e
                            }
                        }
                        const Ue = {
                            USER_NOT_FOUND: "user-not-found"
                        };
                        class je extends Ce {
                            constructor(e) {
                                super("phone", "phone"), this.params = e
                            }
                            static _fromVerification(e, t) {
                                return new je({
                                    verificationId: e,
                                    verificationCode: t
                                })
                            }
                            static _fromTokenResponse(e, t) {
                                return new je({
                                    phoneNumber: e,
                                    temporaryProof: t
                                })
                            }
                            _getIdTokenResponse(e) {
                                return async function(e, t) {
                                    return U(e, "POST", "/v1/accounts:signInWithPhoneNumber", D(e, t))
                                }(e, this._makeVerificationRequest())
                            }
                            _linkToIdToken(e, t) {
                                return async function(e, t) {
                                    const n = await U(e, "POST", "/v1/accounts:signInWithPhoneNumber", D(e, t));
                                    if (n.temporaryProof) throw F(e, "account-exists-with-different-credential", n);
                                    return n
                                }(e, Object.assign({
                                    idToken: t
                                }, this._makeVerificationRequest()))
                            }
                            _getReauthenticationResolver(e) {
                                return async function(e, t) {
                                    return U(e, "POST", "/v1/accounts:signInWithPhoneNumber", D(e, Object.assign(Object.assign({}, t), {
                                        operation: "REAUTH"
                                    })), Ue)
                                }(e, this._makeVerificationRequest())
                            }
                            _makeVerificationRequest() {
                                const {
                                    temporaryProof: e,
                                    phoneNumber: t,
                                    verificationId: n,
                                    verificationCode: i
                                } = this.params;
                                return e && t ? {
                                    temporaryProof: e,
                                    phoneNumber: t
                                } : {
                                    sessionInfo: n,
                                    code: i
                                }
                            }
                            toJSON() {
                                const e = {
                                    providerId: this.providerId
                                };
                                return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (e.verificationCode = this.params.verificationCode), this.params.verificationId && (e.verificationId = this.params.verificationId), e
                            }
                            static fromJSON(e) {
                                "string" === typeof e && (e = JSON.parse(e));
                                const {
                                    verificationId: t,
                                    verificationCode: n,
                                    phoneNumber: i,
                                    temporaryProof: r
                                } = e;
                                return n || t || i || r ? new je({
                                    verificationId: t,
                                    verificationCode: n,
                                    phoneNumber: i,
                                    temporaryProof: r
                                }) : null
                            }
                        }
                        class xe {
                            constructor(e) {
                                var t, n, r, s, o, a;
                                const c = Object(i.y)(Object(i.j)(e)),
                                    u = null !== (t = c.apiKey) && void 0 !== t ? t : null,
                                    d = null !== (n = c.oobCode) && void 0 !== n ? n : null,
                                    l = function(e) {
                                        switch (e) {
                                            case "recoverEmail":
                                                return "RECOVER_EMAIL";
                                            case "resetPassword":
                                                return "PASSWORD_RESET";
                                            case "signIn":
                                                return "EMAIL_SIGNIN";
                                            case "verifyEmail":
                                                return "VERIFY_EMAIL";
                                            case "verifyAndChangeEmail":
                                                return "VERIFY_AND_CHANGE_EMAIL";
                                            case "revertSecondFactorAddition":
                                                return "REVERT_SECOND_FACTOR_ADDITION";
                                            default:
                                                return null
                                        }
                                    }(null !== (r = c.mode) && void 0 !== r ? r : null);
                                y(u && d && l, "argument-error"), this.apiKey = u, this.operation = l, this.code = d, this.continueUrl = null !== (s = c.continueUrl) && void 0 !== s ? s : null, this.languageCode = null !== (o = c.languageCode) && void 0 !== o ? o : null, this.tenantId = null !== (a = c.tenantId) && void 0 !== a ? a : null
                            }
                            static parseLink(e) {
                                const t = function(e) {
                                    const t = Object(i.y)(Object(i.j)(e)).link,
                                        n = t ? Object(i.y)(Object(i.j)(t)).deep_link_id : null,
                                        r = Object(i.y)(Object(i.j)(e)).deep_link_id;
                                    return (r ? Object(i.y)(Object(i.j)(r)).link : null) || r || n || t || e
                                }(e);
                                try {
                                    return new xe(t)
                                } catch (n) {
                                    return null
                                }
                            }
                        }
                        class Fe {
                            constructor() {
                                this.providerId = Fe.PROVIDER_ID
                            }
                            static credential(e, t) {
                                return De._fromEmailAndPassword(e, t)
                            }
                            static credentialWithLink(e, t) {
                                const n = xe.parseLink(t);
                                return y(n, "argument-error"), De._fromEmailAndCode(e, n.code, n.tenantId)
                            }
                        }
                        Fe.PROVIDER_ID = "password", Fe.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Fe.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
                        class Ve {
                            constructor(e) {
                                this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {}
                            }
                            setDefaultLanguage(e) {
                                this.defaultLanguageCode = e
                            }
                            setCustomParameters(e) {
                                return this.customParameters = e, this
                            }
                            getCustomParameters() {
                                return this.customParameters
                            }
                        }
                        class He extends Ve {
                            constructor() {
                                super(...arguments), this.scopes = []
                            }
                            addScope(e) {
                                return this.scopes.includes(e) || this.scopes.push(e), this
                            }
                            getScopes() {
                                return [...this.scopes]
                            }
                        }
                        class ze extends He {
                            static credentialFromJSON(e) {
                                const t = "string" === typeof e ? JSON.parse(e) : e;
                                return y("providerId" in t && "signInMethod" in t, "argument-error"), Me._fromParams(t)
                            }
                            credential(e) {
                                return this._credential(Object.assign(Object.assign({}, e), {
                                    nonce: e.rawNonce
                                }))
                            }
                            _credential(e) {
                                return y(e.idToken || e.accessToken, "argument-error"), Me._fromParams(Object.assign(Object.assign({}, e), {
                                    providerId: this.providerId,
                                    signInMethod: this.providerId
                                }))
                            }
                            static credentialFromResult(e) {
                                return ze.oauthCredentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return ze.oauthCredentialFromTaggedObject(e.customData || {})
                            }
                            static oauthCredentialFromTaggedObject(e) {
                                let {
                                    _tokenResponse: t
                                } = e;
                                if (!t) return null;
                                const {
                                    oauthIdToken: n,
                                    oauthAccessToken: i,
                                    oauthTokenSecret: r,
                                    pendingToken: s,
                                    nonce: o,
                                    providerId: a
                                } = t;
                                if (!i && !r && !n && !s) return null;
                                if (!a) return null;
                                try {
                                    return new ze(a)._credential({
                                        idToken: n,
                                        accessToken: i,
                                        nonce: o,
                                        pendingToken: s
                                    })
                                } catch (c) {
                                    return null
                                }
                            }
                        }
                        class Be extends He {
                            constructor() {
                                super("facebook.com")
                            }
                            static credential(e) {
                                return Me._fromParams({
                                    providerId: Be.PROVIDER_ID,
                                    signInMethod: Be.FACEBOOK_SIGN_IN_METHOD,
                                    accessToken: e
                                })
                            }
                            static credentialFromResult(e) {
                                return Be.credentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return Be.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject(e) {
                                let {
                                    _tokenResponse: t
                                } = e;
                                if (!t || !("oauthAccessToken" in t)) return null;
                                if (!t.oauthAccessToken) return null;
                                try {
                                    return Be.credential(t.oauthAccessToken)
                                } catch (n) {
                                    return null
                                }
                            }
                        }
                        Be.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Be.PROVIDER_ID = "facebook.com";
                        class qe extends He {
                            constructor() {
                                super("google.com"), this.addScope("profile")
                            }
                            static credential(e, t) {
                                return Me._fromParams({
                                    providerId: qe.PROVIDER_ID,
                                    signInMethod: qe.GOOGLE_SIGN_IN_METHOD,
                                    idToken: e,
                                    accessToken: t
                                })
                            }
                            static credentialFromResult(e) {
                                return qe.credentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return qe.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject(e) {
                                let {
                                    _tokenResponse: t
                                } = e;
                                if (!t) return null;
                                const {
                                    oauthIdToken: n,
                                    oauthAccessToken: i
                                } = t;
                                if (!n && !i) return null;
                                try {
                                    return qe.credential(n, i)
                                } catch (r) {
                                    return null
                                }
                            }
                        }
                        qe.GOOGLE_SIGN_IN_METHOD = "google.com", qe.PROVIDER_ID = "google.com";
                        class We extends He {
                            constructor() {
                                super("github.com")
                            }
                            static credential(e) {
                                return Me._fromParams({
                                    providerId: We.PROVIDER_ID,
                                    signInMethod: We.GITHUB_SIGN_IN_METHOD,
                                    accessToken: e
                                })
                            }
                            static credentialFromResult(e) {
                                return We.credentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return We.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject(e) {
                                let {
                                    _tokenResponse: t
                                } = e;
                                if (!t || !("oauthAccessToken" in t)) return null;
                                if (!t.oauthAccessToken) return null;
                                try {
                                    return We.credential(t.oauthAccessToken)
                                } catch (n) {
                                    return null
                                }
                            }
                        }
                        We.GITHUB_SIGN_IN_METHOD = "github.com", We.PROVIDER_ID = "github.com";
                        class Ke extends He {
                            constructor() {
                                super("twitter.com")
                            }
                            static credential(e, t) {
                                return Me._fromParams({
                                    providerId: Ke.PROVIDER_ID,
                                    signInMethod: Ke.TWITTER_SIGN_IN_METHOD,
                                    oauthToken: e,
                                    oauthTokenSecret: t
                                })
                            }
                            static credentialFromResult(e) {
                                return Ke.credentialFromTaggedObject(e)
                            }
                            static credentialFromError(e) {
                                return Ke.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject(e) {
                                let {
                                    _tokenResponse: t
                                } = e;
                                if (!t) return null;
                                const {
                                    oauthAccessToken: n,
                                    oauthTokenSecret: i
                                } = t;
                                if (!n || !i) return null;
                                try {
                                    return Ke.credential(n, i)
                                } catch (r) {
                                    return null
                                }
                            }
                        }
                        async function $e(e, t) {
                            return U(e, "POST", "/v1/accounts:signUp", D(e, t))
                        }
                        Ke.TWITTER_SIGN_IN_METHOD = "twitter.com", Ke.PROVIDER_ID = "twitter.com";
                        class Ge {
                            constructor(e) {
                                this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType
                            }
                            static async _fromIdTokenResponse(e, t, n) {
                                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                const r = await X._fromIdTokenResponse(e, n, i),
                                    s = Je(n);
                                return new Ge({
                                    user: r,
                                    providerId: s,
                                    _tokenResponse: n,
                                    operationType: t
                                })
                            }
                            static async _forOperation(e, t, n) {
                                await e._updateTokensIfNecessary(n, !0);
                                const i = Je(n);
                                return new Ge({
                                    user: e,
                                    providerId: i,
                                    _tokenResponse: n,
                                    operationType: t
                                })
                            }
                        }

                        function Je(e) {
                            return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null
                        }
                        class Ye extends i.c {
                            constructor(e, t, n, i) {
                                var r;
                                super(t.code, t.message), this.operationType = n, this.user = i, Object.setPrototypeOf(this, Ye.prototype), this.customData = {
                                    appName: e.name,
                                    tenantId: null !== (r = e.tenantId) && void 0 !== r ? r : void 0,
                                    _serverResponse: t.customData._serverResponse,
                                    operationType: n
                                }
                            }
                            static _fromErrorAndOperation(e, t, n, i) {
                                return new Ye(e, t, n, i)
                            }
                        }

                        function Xe(e, t, n, i) {
                            return ("reauthenticate" === t ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch(n => {
                                if ("auth/multi-factor-auth-required" === n.code) throw Ye._fromErrorAndOperation(e, n, t, i);
                                throw n
                            })
                        }

                        function Ze(e) {
                            return new Set(e.map(e => {
                                let {
                                    providerId: t
                                } = e;
                                return t
                            }).filter(e => !!e))
                        }
                        async function Qe(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            const i = await q(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
                            return Ge._forOperation(e, "link", i)
                        }
                        async function et(e, t, n) {
                            await G(t);
                            const i = !1 === e ? "provider-already-linked" : "no-such-provider";
                            y(Ze(t.providerData).has(n) === e, t.auth, i)
                        }
                        async function tt(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            const {
                                auth: i
                            } = e, r = "reauthenticate";
                            try {
                                const s = await q(e, Xe(i, r, t, e), n);
                                y(s.idToken, i, "internal-error");
                                const o = B(s.idToken);
                                y(o, i, "internal-error");
                                const {
                                    sub: a
                                } = o;
                                return y(e.uid === a, i, "user-mismatch"), Ge._forOperation(e, r, s)
                            } catch (s) {
                                throw "auth/user-not-found" === (null === s || void 0 === s ? void 0 : s.code) && v(i, "user-mismatch"), s
                            }
                        }
                        async function nt(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            const i = "signIn",
                                r = await Xe(e, i, t),
                                s = await Ge._fromIdTokenResponse(e, i, r);
                            return n || await e._updateCurrentUser(s.user), s
                        }
                        async function it(e, t) {
                            return nt(Ie(e), t)
                        }
                        async function rt(e, t) {
                            const n = Object(i.o)(e);
                            return await et(!1, n, t.providerId), Qe(n, t)
                        }
                        async function st(e, t) {
                            return tt(Object(i.o)(e), t)
                        }
                        async function ot(e) {
                            const t = Ie(e);
                            t._getPasswordPolicyInternal() && await t._updatePasswordPolicy()
                        }
                        async function at(e, t, n) {
                            await Pe(Object(i.o)(e), {
                                oobCode: t,
                                newPassword: n
                            }).catch(async t => {
                                throw "auth/password-does-not-meet-requirements" === t.code && ot(e), t
                            })
                        }
                        async function ct(e, t) {
                            await async function(e, t) {
                                return L(e, "POST", "/v1/accounts:update", D(e, t))
                            }(Object(i.o)(e), {
                                oobCode: t
                            })
                        }
                        async function ut(e, t, n) {
                            var i;
                            const r = Ie(e),
                                s = {
                                    returnSecureToken: !0,
                                    email: t,
                                    password: n,
                                    clientType: "CLIENT_TYPE_WEB"
                                };
                            let o;
                            if (null === (i = r._getRecaptchaConfig()) || void 0 === i ? void 0 : i.emailPasswordEnabled) {
                                const e = await Te(r, s, "signUpPassword");
                                o = $e(r, e)
                            } else o = $e(r, s).catch(async e => {
                                if ("auth/missing-recaptcha-token" === e.code) {
                                    console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
                                    const e = await Te(r, s, "signUpPassword");
                                    return $e(r, e)
                                }
                                throw e
                            });
                            const a = await o.catch(t => {
                                    throw "auth/password-does-not-meet-requirements" === t.code && ot(e), t
                                }),
                                c = await Ge._fromIdTokenResponse(r, "signIn", a);
                            return await r._updateCurrentUser(c.user), c
                        }

                        function dt(e, t, n) {
                            return it(Object(i.o)(e), Fe.credential(t, n)).catch(async t => {
                                throw "auth/password-does-not-meet-requirements" === t.code && ot(e), t
                            })
                        }
                        async function lt(e, t) {
                            const n = {
                                    identifier: t,
                                    continueUri: k() ? A() : "http://localhost"
                                },
                                {
                                    signinMethods: r
                                } = await async function(e, t) {
                                    return L(e, "POST", "/v1/accounts:createAuthUri", D(e, t))
                                }(Object(i.o)(e), n);
                            return r || []
                        }
                        async function ht(e, t) {
                            let {
                                displayName: n,
                                photoURL: r
                            } = t;
                            if (void 0 === n && void 0 === r) return;
                            const s = Object(i.o)(e),
                                o = {
                                    idToken: await s.getIdToken(),
                                    displayName: n,
                                    photoUrl: r,
                                    returnSecureToken: !0
                                },
                                a = await q(s, async function(e, t) {
                                    return L(e, "POST", "/v1/accounts:update", t)
                                }(s.auth, o));
                            s.displayName = a.displayName || null, s.photoURL = a.photoUrl || null;
                            const c = s.providerData.find(e => {
                                let {
                                    providerId: t
                                } = e;
                                return "password" === t
                            });
                            c && (c.displayName = s.displayName, c.photoURL = s.photoURL), await s._updateTokensIfNecessary(a)
                        }

                        function pt(e, t) {
                            return ft(Object(i.o)(e), null, t)
                        }
                        async function ft(e, t, n) {
                            const {
                                auth: i
                            } = e, r = {
                                idToken: await e.getIdToken(),
                                returnSecureToken: !0
                            };
                            t && (r.email = t), n && (r.password = n);
                            const s = await q(e, Ne(i, r));
                            await e._updateTokensIfNecessary(s, !0)
                        }
                        class mt {
                            constructor(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                this.isNewUser = e, this.providerId = t, this.profile = n
                            }
                        }
                        class gt extends mt {
                            constructor(e, t, n, i) {
                                super(e, t, n), this.username = i
                            }
                        }
                        class vt extends mt {
                            constructor(e, t) {
                                super(e, "facebook.com", t)
                            }
                        }
                        class _t extends gt {
                            constructor(e, t) {
                                super(e, "github.com", t, "string" === typeof(null === t || void 0 === t ? void 0 : t.login) ? null === t || void 0 === t ? void 0 : t.login : null)
                            }
                        }
                        class It extends mt {
                            constructor(e, t) {
                                super(e, "google.com", t)
                            }
                        }
                        class wt extends gt {
                            constructor(e, t, n) {
                                super(e, "twitter.com", t, n)
                            }
                        }

                        function bt(e) {
                            const {
                                user: t,
                                _tokenResponse: n
                            } = e;
                            return t.isAnonymous && !n ? {
                                providerId: null,
                                isNewUser: !1,
                                profile: null
                            } : function(e) {
                                var t, n;
                                if (!e) return null;
                                const {
                                    providerId: i
                                } = e, r = e.rawUserInfo ? JSON.parse(e.rawUserInfo) : {}, s = e.isNewUser || "identitytoolkit#SignupNewUserResponse" === e.kind;
                                if (!i && (null === e || void 0 === e ? void 0 : e.idToken)) {
                                    const i = null === (n = null === (t = B(e.idToken)) || void 0 === t ? void 0 : t.firebase) || void 0 === n ? void 0 : n.sign_in_provider;
                                    if (i) {
                                        return new mt(s, "anonymous" !== i && "custom" !== i ? i : null)
                                    }
                                }
                                if (!i) return null;
                                switch (i) {
                                    case "facebook.com":
                                        return new vt(s, r);
                                    case "github.com":
                                        return new _t(s, r);
                                    case "google.com":
                                        return new It(s, r);
                                    case "twitter.com":
                                        return new wt(s, r, e.screenName || null);
                                    case "custom":
                                    case "anonymous":
                                        return new mt(s, null);
                                    default:
                                        return new mt(s, i, r)
                                }
                            }(n)
                        }

                        function yt(e, t, n, r) {
                            return Object(i.o)(e).onIdTokenChanged(t, n, r)
                        }

                        function Et(e, t, n) {
                            return Object(i.o)(e).beforeAuthStateChanged(t, n)
                        }
                        new WeakMap;
                        class Tt {
                            constructor(e, t) {
                                this.storageRetriever = e, this.type = t
                            }
                            _isAvailable() {
                                try {
                                    return this.storage ? (this.storage.setItem("__sak", "1"), this.storage.removeItem("__sak"), Promise.resolve(!0)) : Promise.resolve(!1)
                                } catch (e) {
                                    return Promise.resolve(!1)
                                }
                            }
                            _set(e, t) {
                                return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve()
                            }
                            _get(e) {
                                const t = this.storage.getItem(e);
                                return Promise.resolve(t ? JSON.parse(t) : null)
                            }
                            _remove(e) {
                                return this.storage.removeItem(e), Promise.resolve()
                            }
                            get storage() {
                                return this.storageRetriever()
                            }
                        }
                        class At extends Tt {
                            constructor() {
                                super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
                                    const e = Object(i.p)();
                                    return oe(e) || he(e)
                                }() && function() {
                                    try {
                                        return !(!window || window === window.top)
                                    } catch (e) {
                                        return !1
                                    }
                                }(), this.fallbackToPolling = fe(), this._shouldAllowMigration = !0
                            }
                            forAllChangedKeys(e) {
                                for (const t of Object.keys(this.listeners)) {
                                    const n = this.storage.getItem(t),
                                        i = this.localCache[t];
                                    n !== i && e(t, i, n)
                                }
                            }
                            onStorageEvent(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (!e.key) return void this.forAllChangedKeys((e, t, n) => {
                                    this.notifyListeners(e, n)
                                });
                                const n = e.key;
                                if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
                                    const i = this.storage.getItem(n);
                                    if (e.newValue !== i) null !== e.newValue ? this.storage.setItem(n, e.newValue) : this.storage.removeItem(n);
                                    else if (this.localCache[n] === e.newValue && !t) return
                                }
                                const r = () => {
                                        const e = this.storage.getItem(n);
                                        (t || this.localCache[n] !== e) && this.notifyListeners(n, e)
                                    },
                                    s = this.storage.getItem(n);
                                Object(i.s)() && 10 === document.documentMode && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, 10) : r()
                            }
                            notifyListeners(e, t) {
                                this.localCache[e] = t;
                                const n = this.listeners[e];
                                if (n)
                                    for (const i of Array.from(n)) i(t ? JSON.parse(t) : t)
                            }
                            startPolling() {
                                this.stopPolling(), this.pollTimer = setInterval(() => {
                                    this.forAllChangedKeys((e, t, n) => {
                                        this.onStorageEvent(new StorageEvent("storage", {
                                            key: e,
                                            oldValue: t,
                                            newValue: n
                                        }), !0)
                                    })
                                }, 1e3)
                            }
                            stopPolling() {
                                this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
                            }
                            attachListener() {
                                window.addEventListener("storage", this.boundEventHandler)
                            }
                            detachListener() {
                                window.removeEventListener("storage", this.boundEventHandler)
                            }
                            _addListener(e, t) {
                                0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t)
                            }
                            _removeListener(e, t) {
                                this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
                            }
                            async _set(e, t) {
                                await super._set(e, t), this.localCache[e] = JSON.stringify(t)
                            }
                            async _get(e) {
                                const t = await super._get(e);
                                return this.localCache[e] = JSON.stringify(t), t
                            }
                            async _remove(e) {
                                await super._remove(e), delete this.localCache[e]
                            }
                        }
                        At.type = "LOCAL";
                        const kt = At;
                        class Ot extends Tt {
                            constructor() {
                                super(() => window.sessionStorage, "SESSION")
                            }
                            _addListener(e, t) {}
                            _removeListener(e, t) {}
                        }
                        Ot.type = "SESSION";
                        const St = Ot;
                        class Ct {
                            constructor(e) {
                                this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
                            }
                            static _getInstance(e) {
                                const t = this.receivers.find(t => t.isListeningto(e));
                                if (t) return t;
                                const n = new Ct(e);
                                return this.receivers.push(n), n
                            }
                            isListeningto(e) {
                                return this.eventTarget === e
                            }
                            async handleEvent(e) {
                                const t = e,
                                    {
                                        eventId: n,
                                        eventType: i,
                                        data: r
                                    } = t.data,
                                    s = this.handlersMap[i];
                                if (!(null === s || void 0 === s ? void 0 : s.size)) return;
                                t.ports[0].postMessage({
                                    status: "ack",
                                    eventId: n,
                                    eventType: i
                                });
                                const o = Array.from(s).map(async e => e(t.origin, r)),
                                    a = await
                                function(e) {
                                    return Promise.all(e.map(async e => {
                                        try {
                                            return {
                                                fulfilled: !0,
                                                value: await e
                                            }
                                        } catch (t) {
                                            return {
                                                fulfilled: !1,
                                                reason: t
                                            }
                                        }
                                    }))
                                }(o);
                                t.ports[0].postMessage({
                                    status: "done",
                                    eventId: n,
                                    eventType: i,
                                    response: a
                                })
                            }
                            _subscribe(e, t) {
                                0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = new Set), this.handlersMap[e].add(t)
                            }
                            _unsubscribe(e, t) {
                                this.handlersMap[e] && t && this.handlersMap[e].delete(t), t && 0 !== this.handlersMap[e].size || delete this.handlersMap[e], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
                            }
                        }

                        function Pt() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                                n = "";
                            for (let i = 0; i < t; i++) n += Math.floor(10 * Math.random());
                            return e + n
                        }
                        Ct.receivers = [];
                        class Nt {
                            constructor(e) {
                                this.target = e, this.handlers = new Set
                            }
                            removeMessageHandler(e) {
                                e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e)
                            }
                            async _send(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
                                const i = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
                                if (!i) throw new Error("connection_unavailable");
                                let r, s;
                                return new Promise((o, a) => {
                                    const c = Pt("", 20);
                                    i.port1.start();
                                    const u = setTimeout(() => {
                                        a(new Error("unsupported_event"))
                                    }, n);
                                    s = {
                                        messageChannel: i,
                                        onMessage(e) {
                                            const t = e;
                                            if (t.data.eventId === c) switch (t.data.status) {
                                                case "ack":
                                                    clearTimeout(u), r = setTimeout(() => {
                                                        a(new Error("timeout"))
                                                    }, 3e3);
                                                    break;
                                                case "done":
                                                    clearTimeout(r), o(t.data.response);
                                                    break;
                                                default:
                                                    clearTimeout(u), clearTimeout(r), a(new Error("invalid_response"))
                                            }
                                        }
                                    }, this.handlers.add(s), i.port1.addEventListener("message", s.onMessage), this.target.postMessage({
                                        eventType: e,
                                        eventId: c,
                                        data: t
                                    }, [i.port2])
                                }).finally(() => {
                                    s && this.removeMessageHandler(s)
                                })
                            }
                        }

                        function Rt() {
                            return window
                        }

                        function Dt() {
                            return "undefined" !== typeof Rt().WorkerGlobalScope && "function" === typeof Rt().importScripts
                        }
                        const Lt = "firebaseLocalStorageDb";
                        class Mt {
                            constructor(e) {
                                this.request = e
                            }
                            toPromise() {
                                return new Promise((e, t) => {
                                    this.request.addEventListener("success", () => {
                                        e(this.request.result)
                                    }), this.request.addEventListener("error", () => {
                                        t(this.request.error)
                                    })
                                })
                            }
                        }

                        function Ut(e, t) {
                            return e.transaction(["firebaseLocalStorage"], t ? "readwrite" : "readonly").objectStore("firebaseLocalStorage")
                        }

                        function jt() {
                            const e = indexedDB.open(Lt, 1);
                            return new Promise((t, n) => {
                                e.addEventListener("error", () => {
                                    n(e.error)
                                }), e.addEventListener("upgradeneeded", () => {
                                    const t = e.result;
                                    try {
                                        t.createObjectStore("firebaseLocalStorage", {
                                            keyPath: "fbase_key"
                                        })
                                    } catch (i) {
                                        n(i)
                                    }
                                }), e.addEventListener("success", async () => {
                                    const n = e.result;
                                    n.objectStoreNames.contains("firebaseLocalStorage") ? t(n) : (n.close(), await
                                        function() {
                                            const e = indexedDB.deleteDatabase(Lt);
                                            return new Mt(e).toPromise()
                                        }(), t(await jt()))
                                })
                            })
                        }
                        async function xt(e, t, n) {
                            const i = Ut(e, !0).put({
                                fbase_key: t,
                                value: n
                            });
                            return new Mt(i).toPromise()
                        }

                        function Ft(e, t) {
                            const n = Ut(e, !0).delete(t);
                            return new Mt(n).toPromise()
                        }
                        class Vt {
                            constructor() {
                                this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {})
                            }
                            async _openDb() {
                                return this.db || (this.db = await jt()), this.db
                            }
                            async _withRetries(e) {
                                let t = 0;
                                for (;;) try {
                                    const t = await this._openDb();
                                    return await e(t)
                                } catch (n) {
                                    if (t++ > 3) throw n;
                                    this.db && (this.db.close(), this.db = void 0)
                                }
                            }
                            async initializeServiceWorkerMessaging() {
                                return Dt() ? this.initializeReceiver() : this.initializeSender()
                            }
                            async initializeReceiver() {
                                this.receiver = Ct._getInstance(Dt() ? self : null), this.receiver._subscribe("keyChanged", async (e, t) => ({
                                    keyProcessed: (await this._poll()).includes(t.key)
                                })), this.receiver._subscribe("ping", async (e, t) => ["keyChanged"])
                            }
                            async initializeSender() {
                                var e, t;
                                if (this.activeServiceWorker = await async function() {
                                        if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                                        try {
                                            return (await navigator.serviceWorker.ready).active
                                        } catch (e) {
                                            return null
                                        }
                                    }(), !this.activeServiceWorker) return;
                                this.sender = new Nt(this.activeServiceWorker);
                                const n = await this.sender._send("ping", {}, 800);
                                n && (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) && (null === (t = n[0]) || void 0 === t ? void 0 : t.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
                            }
                            async notifyServiceWorker(e) {
                                if (this.sender && this.activeServiceWorker && function() {
                                        var e;
                                        return (null === (e = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === e ? void 0 : e.controller) || null
                                    }() === this.activeServiceWorker) try {
                                    await this.sender._send("keyChanged", {
                                        key: e
                                    }, this.serviceWorkerReceiverAvailable ? 800 : 50)
                                } catch (t) {}
                            }
                            async _isAvailable() {
                                try {
                                    if (!indexedDB) return !1;
                                    const e = await jt();
                                    return await xt(e, "__sak", "1"), await Ft(e, "__sak"), !0
                                } catch (e) {}
                                return !1
                            }
                            async _withPendingWrite(e) {
                                this.pendingWrites++;
                                try {
                                    await e()
                                } finally {
                                    this.pendingWrites--
                                }
                            }
                            async _set(e, t) {
                                return this._withPendingWrite(async () => (await this._withRetries(n => xt(n, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)))
                            }
                            async _get(e) {
                                const t = await this._withRetries(t => async function(e, t) {
                                    const n = Ut(e, !1).get(t),
                                        i = await new Mt(n).toPromise();
                                    return void 0 === i ? null : i.value
                                }(t, e));
                                return this.localCache[e] = t, t
                            }
                            async _remove(e) {
                                return this._withPendingWrite(async () => (await this._withRetries(t => Ft(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)))
                            }
                            async _poll() {
                                const e = await this._withRetries(e => {
                                    const t = Ut(e, !1).getAll();
                                    return new Mt(t).toPromise()
                                });
                                if (!e) return [];
                                if (0 !== this.pendingWrites) return [];
                                const t = [],
                                    n = new Set;
                                for (const {
                                        fbase_key: i,
                                        value: r
                                    } of e) n.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(r) && (this.notifyListeners(i, r), t.push(i));
                                for (const i of Object.keys(this.localCache)) this.localCache[i] && !n.has(i) && (this.notifyListeners(i, null), t.push(i));
                                return t
                            }
                            notifyListeners(e, t) {
                                this.localCache[e] = t;
                                const n = this.listeners[e];
                                if (n)
                                    for (const i of Array.from(n)) i(t)
                            }
                            startPolling() {
                                this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), 800)
                            }
                            stopPolling() {
                                this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
                            }
                            _addListener(e, t) {
                                0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[e] || (this.listeners[e] = new Set, this._get(e)), this.listeners[e].add(t)
                            }
                            _removeListener(e, t) {
                                this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && this.stopPolling()
                            }
                        }
                        Vt.type = "LOCAL";
                        const Ht = Vt;
                        ye("rcb"), new S(3e4, 6e4);
                        async function zt(e, t, n) {
                            var i;
                            const r = await n.verify();
                            try {
                                let s;
                                if (y("string" === typeof r, e, "argument-error"), y("recaptcha" === n.type, e, "argument-error"), s = "string" === typeof t ? {
                                        phoneNumber: t
                                    } : t, "session" in s) {
                                    const t = s.session;
                                    if ("phoneNumber" in s) {
                                        y("enroll" === t.type, e, "internal-error");
                                        return (await
                                            function(e, t) {
                                                return L(e, "POST", "/v2/accounts/mfaEnrollment:start", D(e, t))
                                            }(e, {
                                                idToken: t.credential,
                                                phoneEnrollmentInfo: {
                                                    phoneNumber: s.phoneNumber,
                                                    recaptchaToken: r
                                                }
                                            })).phoneSessionInfo.sessionInfo
                                    } {
                                        y("signin" === t.type, e, "internal-error");
                                        const n = (null === (i = s.multiFactorHint) || void 0 === i ? void 0 : i.uid) || s.multiFactorUid;
                                        y(n, e, "missing-multi-factor-info");
                                        return (await
                                            function(e, t) {
                                                return L(e, "POST", "/v2/accounts/mfaSignIn:start", D(e, t))
                                            }(e, {
                                                mfaPendingCredential: t.credential,
                                                mfaEnrollmentId: n,
                                                phoneSignInInfo: {
                                                    recaptchaToken: r
                                                }
                                            })).phoneResponseInfo.sessionInfo
                                    }
                                } {
                                    const {
                                        sessionInfo: t
                                    } = await async function(e, t) {
                                        return L(e, "POST", "/v1/accounts:sendVerificationCode", D(e, t))
                                    }(e, {
                                        phoneNumber: s.phoneNumber,
                                        recaptchaToken: r
                                    });
                                    return t
                                }
                            } finally {
                                n._reset()
                            }
                        }
                        class Bt {
                            constructor(e) {
                                this.providerId = Bt.PROVIDER_ID, this.auth = Ie(e)
                            }
                            verifyPhoneNumber(e, t) {
                                return zt(this.auth, e, Object(i.o)(t))
                            }
                            static credential(e, t) {
                                return je._fromVerification(e, t)
                            }
                            static credentialFromResult(e) {
                                const t = e;
                                return Bt.credentialFromTaggedObject(t)
                            }
                            static credentialFromError(e) {
                                return Bt.credentialFromTaggedObject(e.customData || {})
                            }
                            static credentialFromTaggedObject(e) {
                                let {
                                    _tokenResponse: t
                                } = e;
                                if (!t) return null;
                                const {
                                    phoneNumber: n,
                                    temporaryProof: i
                                } = t;
                                return n && i ? je._fromTokenResponse(n, i) : null
                            }
                        }

                        function qt(e, t) {
                            return t ? Q(t) : (y(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver)
                        }
                        Bt.PROVIDER_ID = "phone", Bt.PHONE_SIGN_IN_METHOD = "phone";
                        class Wt extends Ce {
                            constructor(e) {
                                super("custom", "custom"), this.params = e
                            }
                            _getIdTokenResponse(e) {
                                return Le(e, this._buildIdpRequest())
                            }
                            _linkToIdToken(e, t) {
                                return Le(e, this._buildIdpRequest(t))
                            }
                            _getReauthenticationResolver(e) {
                                return Le(e, this._buildIdpRequest())
                            }
                            _buildIdpRequest(e) {
                                const t = {
                                    requestUri: this.params.requestUri,
                                    sessionId: this.params.sessionId,
                                    postBody: this.params.postBody,
                                    tenantId: this.params.tenantId,
                                    pendingToken: this.params.pendingToken,
                                    returnSecureToken: !0,
                                    returnIdpCredential: !0
                                };
                                return e && (t.idToken = e), t
                            }
                        }

                        function Kt(e) {
                            return nt(e.auth, new Wt(e), e.bypassAuthState)
                        }

                        function $t(e) {
                            const {
                                auth: t,
                                user: n
                            } = e;
                            return y(n, t, "internal-error"), tt(n, new Wt(e), e.bypassAuthState)
                        }
                        async function Gt(e) {
                            const {
                                auth: t,
                                user: n
                            } = e;
                            return y(n, t, "internal-error"), Qe(n, new Wt(e), e.bypassAuthState)
                        }
                        class Jt {
                            constructor(e, t, n, i) {
                                let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                this.auth = e, this.resolver = n, this.user = i, this.bypassAuthState = r, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t]
                            }
                            execute() {
                                return new Promise(async (e, t) => {
                                    this.pendingPromise = {
                                        resolve: e,
                                        reject: t
                                    };
                                    try {
                                        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
                                    } catch (n) {
                                        this.reject(n)
                                    }
                                })
                            }
                            async onAuthEvent(e) {
                                const {
                                    urlResponse: t,
                                    sessionId: n,
                                    postBody: i,
                                    tenantId: r,
                                    error: s,
                                    type: o
                                } = e;
                                if (s) return void this.reject(s);
                                const a = {
                                    auth: this.auth,
                                    requestUri: t,
                                    sessionId: n,
                                    tenantId: r || void 0,
                                    postBody: i || void 0,
                                    user: this.user,
                                    bypassAuthState: this.bypassAuthState
                                };
                                try {
                                    this.resolve(await this.getIdpTask(o)(a))
                                } catch (c) {
                                    this.reject(c)
                                }
                            }
                            onError(e) {
                                this.reject(e)
                            }
                            getIdpTask(e) {
                                switch (e) {
                                    case "signInViaPopup":
                                    case "signInViaRedirect":
                                        return Kt;
                                    case "linkViaPopup":
                                    case "linkViaRedirect":
                                        return Gt;
                                    case "reauthViaPopup":
                                    case "reauthViaRedirect":
                                        return $t;
                                    default:
                                        v(this.auth, "internal-error")
                                }
                            }
                            resolve(e) {
                                T(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp()
                            }
                            reject(e) {
                                T(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp()
                            }
                            unregisterAndCleanUp() {
                                this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
                            }
                        }
                        const Yt = new S(2e3, 1e4);
                        class Xt extends Jt {
                            constructor(e, t, n, i, r) {
                                super(e, t, i, r), this.provider = n, this.authWindow = null, this.pollId = null, Xt.currentPopupAction && Xt.currentPopupAction.cancel(), Xt.currentPopupAction = this
                            }
                            async executeNotNull() {
                                const e = await this.execute();
                                return y(e, this.auth, "internal-error"), e
                            }
                            async onExecution() {
                                T(1 === this.filter.length, "Popup operations only handle one event");
                                const e = Pt();
                                this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch(e => {
                                    this.reject(e)
                                }), this.resolver._isIframeWebStorageSupported(this.auth, e => {
                                    e || this.reject(_(this.auth, "web-storage-unsupported"))
                                }), this.pollUserCancellation()
                            }
                            get eventId() {
                                var e;
                                return (null === (e = this.authWindow) || void 0 === e ? void 0 : e.associatedEvent) || null
                            }
                            cancel() {
                                this.reject(_(this.auth, "cancelled-popup-request"))
                            }
                            cleanUp() {
                                this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Xt.currentPopupAction = null
                            }
                            pollUserCancellation() {
                                const e = () => {
                                    var t, n;
                                    (null === (n = null === (t = this.authWindow) || void 0 === t ? void 0 : t.window) || void 0 === n ? void 0 : n.closed) ? this.pollId = window.setTimeout(() => {
                                        this.pollId = null, this.reject(_(this.auth, "popup-closed-by-user"))
                                    }, 8e3): this.pollId = window.setTimeout(e, Yt.get())
                                };
                                e()
                            }
                        }
                        Xt.currentPopupAction = null;
                        const Zt = new Map;
                        class Qt extends Jt {
                            constructor(e, t) {
                                super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
                            }
                            async execute() {
                                let e = Zt.get(this.auth._key());
                                if (!e) {
                                    try {
                                        const t = await async function(e, t) {
                                            const n = rn(t),
                                                i = nn(e);
                                            if (!await i._isAvailable()) return !1;
                                            const r = "true" === await i._get(n);
                                            return await i._remove(n), r
                                        }(this.resolver, this.auth) ? await super.execute() : null;
                                        e = () => Promise.resolve(t)
                                    } catch (t) {
                                        e = () => Promise.reject(t)
                                    }
                                    Zt.set(this.auth._key(), e)
                                }
                                return this.bypassAuthState || Zt.set(this.auth._key(), () => Promise.resolve(null)), e()
                            }
                            async onAuthEvent(e) {
                                if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
                                if ("unknown" !== e.type) {
                                    if (e.eventId) {
                                        const t = await this.auth._redirectUserForId(e.eventId);
                                        if (t) return this.user = t, super.onAuthEvent(e);
                                        this.resolve(null)
                                    }
                                } else this.resolve(null)
                            }
                            async onExecution() {}
                            cleanUp() {}
                        }
                        async function en(e, t) {
                            return nn(e)._set(rn(t), "true")
                        }

                        function tn(e, t) {
                            Zt.set(e._key(), t)
                        }

                        function nn(e) {
                            return Q(e._redirectPersistence)
                        }

                        function rn(e) {
                            return ne("pendingRedirect", e.config.apiKey, e.name)
                        }

                        function sn(e, t, n) {
                            return async function(e, t, n) {
                                const i = Ie(e);
                                w(e, t, Ve), await i._initializationPromise;
                                const r = qt(i, n);
                                return await en(r, i), r._openRedirect(i, t, "signInViaRedirect")
                            }(e, t, n)
                        }
                        async function on(e, t) {
                            return await Ie(e)._initializationPromise, an(e, t, !1)
                        }
                        async function an(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            const i = Ie(e),
                                r = qt(i, t),
                                s = new Qt(i, r, n),
                                o = await s.execute();
                            return o && !n && (delete o.user._redirectEventId, await i._persistUserIfCurrent(o.user), await i._setRedirectUser(null, t)), o
                        }
                        class cn {
                            constructor(e) {
                                this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
                            }
                            registerConsumer(e) {
                                this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
                            }
                            unregisterConsumer(e) {
                                this.consumers.delete(e)
                            }
                            onEvent(e) {
                                if (this.hasEventBeenHandled(e)) return !1;
                                let t = !1;
                                return this.consumers.forEach(n => {
                                    this.isEventForConsumer(e, n) && (t = !0, this.sendToConsumer(e, n), this.saveEventToCache(e))
                                }), this.hasHandledPotentialRedirect || ! function(e) {
                                    switch (e.type) {
                                        case "signInViaRedirect":
                                        case "linkViaRedirect":
                                        case "reauthViaRedirect":
                                            return !0;
                                        case "unknown":
                                            return dn(e);
                                        default:
                                            return !1
                                    }
                                }(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t
                            }
                            sendToConsumer(e, t) {
                                var n;
                                if (e.error && !dn(e)) {
                                    const i = (null === (n = e.error.code) || void 0 === n ? void 0 : n.split("auth/")[1]) || "internal-error";
                                    t.onError(_(this.auth, i))
                                } else t.onAuthEvent(e)
                            }
                            isEventForConsumer(e, t) {
                                const n = null === t.eventId || !!e.eventId && e.eventId === t.eventId;
                                return t.filter.includes(e.type) && n
                            }
                            hasEventBeenHandled(e) {
                                return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(un(e))
                            }
                            saveEventToCache(e) {
                                this.cachedEventUids.add(un(e)), this.lastProcessedEventTime = Date.now()
                            }
                        }

                        function un(e) {
                            return [e.type, e.eventId, e.sessionId, e.tenantId].filter(e => e).join("-")
                        }

                        function dn(e) {
                            let {
                                type: t,
                                error: n
                            } = e;
                            return "unknown" === t && "auth/no-auth-event" === (null === n || void 0 === n ? void 0 : n.code)
                        }
                        const ln = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                            hn = /^https?/;
                        async function pn(e) {
                            if (e.config.emulator) return;
                            const {
                                authorizedDomains: t
                            } = await async function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return L(e, "GET", "/v1/projects", t)
                            }(e);
                            for (const i of t) try {
                                if (fn(i)) return
                            } catch (n) {}
                            v(e, "unauthorized-domain")
                        }

                        function fn(e) {
                            const t = A(),
                                {
                                    protocol: n,
                                    hostname: i
                                } = new URL(t);
                            if (e.startsWith("chrome-extension://")) {
                                const r = new URL(e);
                                return "" === r.hostname && "" === i ? "chrome-extension:" === n && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : "chrome-extension:" === n && r.hostname === i
                            }
                            if (!hn.test(n)) return !1;
                            if (ln.test(e)) return i === e;
                            const r = e.replace(/\./g, "\\.");
                            return new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(i)
                        }
                        const mn = new S(3e4, 6e4);

                        function gn() {
                            const e = Rt().___jsl;
                            if (null === e || void 0 === e ? void 0 : e.H)
                                for (const t of Object.keys(e.H))
                                    if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = [...e.H[t].L], e.CP)
                                        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null
                        }
                        let vn = null;

                        function _n(e) {
                            return vn = vn || function(e) {
                                return new Promise((t, n) => {
                                    var i, r, s;

                                    function o() {
                                        gn(), gapi.load("gapi.iframes", {
                                            callback: () => {
                                                t(gapi.iframes.getContext())
                                            },
                                            ontimeout: () => {
                                                gn(), n(_(e, "network-request-failed"))
                                            },
                                            timeout: mn.get()
                                        })
                                    }
                                    if (null === (r = null === (i = Rt().gapi) || void 0 === i ? void 0 : i.iframes) || void 0 === r ? void 0 : r.Iframe) t(gapi.iframes.getContext());
                                    else {
                                        if (!(null === (s = Rt().gapi) || void 0 === s ? void 0 : s.load)) {
                                            const t = ye("iframefcb");
                                            return Rt()[t] = () => {
                                                gapi.load ? o() : n(_(e, "network-request-failed"))
                                            }, be("https://apis.google.com/js/api.js?onload=" + t).catch(e => n(e))
                                        }
                                        o()
                                    }
                                }).catch(e => {
                                    throw vn = null, e
                                })
                            }(e), vn
                        }
                        const In = new S(5e3, 15e3),
                            wn = {
                                style: {
                                    position: "absolute",
                                    top: "-100px",
                                    width: "1px",
                                    height: "1px"
                                },
                                "aria-hidden": "true",
                                tabindex: "-1"
                            },
                            bn = new Map([
                                ["identitytoolkit.googleapis.com", "p"],
                                ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
                                ["test-identitytoolkit.sandbox.googleapis.com", "t"]
                            ]);

                        function yn(e) {
                            const t = e.config;
                            y(t.authDomain, e, "auth-domain-config-required");
                            const n = t.emulator ? C(t, "emulator/auth/iframe") : `https://${e.config.authDomain}/__/auth/iframe`,
                                s = {
                                    apiKey: t.apiKey,
                                    appName: e.name,
                                    v: r.a
                                },
                                o = bn.get(e.config.apiHost);
                            o && (s.eid = o);
                            const a = e._getFrameworks();
                            return a.length && (s.fw = a.join(",")), `${n}?${Object(i.x)(s).slice(1)}`
                        }
                        const En = {
                            location: "yes",
                            resizable: "yes",
                            statusbar: "yes",
                            toolbar: "no"
                        };
                        class Tn {
                            constructor(e) {
                                this.window = e, this.associatedEvent = null
                            }
                            close() {
                                if (this.window) try {
                                    this.window.close()
                                } catch (e) {}
                            }
                        }

                        function An(e, t) {
                            const n = document.createElement("a");
                            n.href = e, n.target = t;
                            const i = document.createEvent("MouseEvent");
                            i.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(i)
                        }
                        const kn = encodeURIComponent("fac");
                        async function On(e, t, n, s, o, a) {
                            y(e.config.authDomain, e, "auth-domain-config-required"), y(e.config.apiKey, e, "invalid-api-key");
                            const c = {
                                apiKey: e.config.apiKey,
                                appName: e.name,
                                authType: n,
                                redirectUrl: s,
                                v: r.a,
                                eventId: o
                            };
                            if (t instanceof Ve) {
                                t.setDefaultLanguage(e.languageCode), c.providerId = t.providerId || "", Object(i.r)(t.getCustomParameters()) || (c.customParameters = JSON.stringify(t.getCustomParameters()));
                                for (const [e, t] of Object.entries(a || {})) c[e] = t
                            }
                            if (t instanceof He) {
                                const e = t.getScopes().filter(e => "" !== e);
                                e.length > 0 && (c.scopes = e.join(","))
                            }
                            e.tenantId && (c.tid = e.tenantId);
                            const u = c;
                            for (const i of Object.keys(u)) void 0 === u[i] && delete u[i];
                            const d = await e._getAppCheckToken(),
                                l = d ? `#${kn}=${encodeURIComponent(d)}` : "";
                            return `${function(e){let{config:t}=e;if(!t.emulator)return`
                            https: //${t.authDomain}/__/auth/handler`;return C(t,"emulator/auth/handler")}(e)}?${Object(i.x)(u).slice(1)}${l}`}const Sn=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=St,this._completeRedirectFn=an,this._overrideRedirectResult=tn}async _openPopup(e,t,n,r){var s;T(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600;const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},En),{width:r.toString(),height:s.toString(),top:o,left:a}),d=Object(i.p)().toLowerCase();n&&(c=ae(d)?"_blank":n),se(d)&&(t=t||"http://localhost",u.scrollbars="yes");const l=Object.entries(u).reduce((e,t)=>{let[n,i]=t;return`${e}${n}=${i},`},"");if(pe(d)&&"_self"!==c)return An(t||"",c),new Tn(null);const h=window.open(t||"",c,l);y(h,e,"popup-blocked");try{h.focus()}catch(p){}return new Tn(h)}(e,await On(e,t,n,A(),r),Pt())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){Rt().location.href=e}(await On(e,t,n,A(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(T(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await async function(e){const t=await _n(e),n=Rt().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:yn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wn,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=_(e,"network-request-failed"),s=Rt().setTimeout(()=>{i(r)},In.get());function o(){Rt().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{i(r)})}))}(e),n=new cn(e);return t.register("authEvent",t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),v(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=pn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fe()||oe()||he()}};class Cn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const Pn=Object(i.m)("authIdTokenMaxAge")||300;let Nn=null;const Rn=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Pn)return;const r=null===n||void 0===n?void 0:n.token;Nn!==r&&(Nn=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:"Bearer "+r}:{}}))};function Dn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(r.d)();const t=Object(r.b)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ae(e,{popupRedirectResolver:Sn,persistence:[Ht,kt,St]}),s=Object(i.m)("authTokenSyncURL");if(s){const e=Rn(s);Et(n,e,()=>e(n.currentUser)),yt(n,t=>e(t))}const o=Object(i.l)("auth");return o&&ke(n,"http://"+o),n}var Ln;Ln="Browser",Object(r.c)(new a.a("auth",(e,t)=>{let{options:n}=t;const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:Ln,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:me(Ln)},u=new _e(i,r,s,c);return function(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Q);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Object(r.c)(new a.a("auth-internal",e=>(e=>new Cn(e))(Ie(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r.f)("@firebase/auth","1.3.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ln)),Object(r.f)("@firebase/auth","1.3.0","esm2017"),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return Fe})),n.d(t,"c",(function(){return Be})),n.d(t,"d",(function(){return qe})),n.d(t,"e",(function(){return ze})),n.d(t,"f",(function(){return ct})),n.d(t,"g",(function(){return kt})),n.d(t,"h",(function(){return Sn})),n.d(t,"i",(function(){return at})),n.d(t,"j",(function(){return ut})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return lt})),n.d(t,"m",(function(){return bt})),n.d(t,"n",(function(){return Dn})),n.d(t,"o",(function(){return on})),n.d(t,"p",(function(){return Ae})),n.d(t,"q",(function(){return rt})),n.d(t,"r",(function(){return h})),n.d(t,"s",(function(){return st})),n.d(t,"t",(function(){return dt})),n.d(t,"u",(function(){return sn})),n.d(t,"v",(function(){return pt})),n.d(t,"w",(function(){return ht}))},IOGK:function(e,t,n){"use strict";var i=n("dw81"),r=n("jlyq"),s=n("qZ8Y"),o=n("40/0");const a=new Map,c={activated:!1,tokenObservers:[]},u={initialized:!1,enabled:!1};function d(e){return a.get(e)||Object.assign({},c)}function l(){return u}const h="https://content-firebaseappcheck.googleapis.com/v1",p=3e4,f=96e4;class m{constructor(e,t,n,i,r){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new s.a,await(t=this.getNextRun(e),new Promise(e=>{setTimeout(e,t)})),this.pending.resolve(),await this.pending.promise,this.pending=new s.a,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}var t}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}const g={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},v=new s.b("appCheck","AppCheck",g);function _(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;return e?null===(t=self.grecaptcha)||void 0===t?void 0:t.enterprise:self.grecaptcha}function I(e){if(!d(e).activated)throw v.create("use-before-activation",{appName:e.name})}function w(e){const t=Math.round(e/1e3),n=Math.floor(t/86400),i=Math.floor((t-3600*n*24)/3600),r=Math.floor((t-3600*n*24-3600*i)/60),s=t-3600*n*24-3600*i-60*r;let o="";return n&&(o+=b(n)+"d:"),i&&(o+=b(i)+"h:"),o+=b(r)+"m:"+b(s)+"s",o}function b(e){return 0===e?"00":e>=10?e.toString():"0"+e}async function y(e,t){let{url:n,body:i}=e;const r={"Content-Type":"application/json"},s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&(r["X-Firebase-Client"]=e)}const o={method:"POST",body:JSON.stringify(i),headers:r};let a,c;try{a=await fetch(n,o)}catch(h){throw v.create("fetch-network-error",{originalErrorMessage:null===h||void 0===h?void 0:h.message})}if(200!==a.status)throw v.create("fetch-status-error",{httpStatus:a.status});try{c=await a.json()}catch(h){throw v.create("fetch-parse-error",{originalErrorMessage:null===h||void 0===h?void 0:h.message})}const u=c.ttl.match(/^([\d.]+)(s)$/);if(!u||!u[2]||isNaN(Number(u[1])))throw v.create("fetch-parse-error",{originalErrorMessage:"ttl field (timeToLive) is not in standard Protobuf Duration format: "+c.ttl});const d=1e3*Number(u[1]),l=Date.now();return{token:c.token,expireTimeMillis:l+d,issuedAtTimeMillis:l}}function E(e,t){const{projectId:n,appId:i,apiKey:r}=e.options;return{url:`${h}/projects/${n}/apps/${i}:exchangeDebugToken?key=${r}`,body:{debug_token:t}}}const T="firebase-app-check-store";let A=null;function k(){return A||(A=new Promise((e,t)=>{try{const n=indexedDB.open("firebase-app-check-database",1);n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{var n;t(v.create("storage-open",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=e=>{const t=e.target.result;switch(e.oldVersion){case 0:t.createObjectStore(T,{keyPath:"compositeKey"})}}}catch(n){t(v.create("storage-open",{originalErrorMessage:null===n||void 0===n?void 0:n.message}))}}),A)}async function O(e,t){const n=(await k()).transaction(T,"readwrite"),i=n.objectStore(T).put({compositeKey:e,value:t});return new Promise((e,t)=>{i.onsuccess=t=>{e()},n.onerror=e=>{var n;t(v.create("storage-set",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))}})}async function S(e){const t=(await k()).transaction(T,"readonly"),n=t.objectStore(T).get(e);return new Promise((e,i)=>{n.onsuccess=t=>{const n=t.target.result;e(n?n.value:void 0)},t.onerror=e=>{var t;i(v.create("storage-get",{originalErrorMessage:null===(t=e.target.error)||void 0===t?void 0:t.message}))}})}function C(e){return`${e.options.appId}-${e.name}`}const P=new o.b("@firebase/app-check");async function N(e){if(Object(s.t)()){let n=void 0;try{n=await function(e){return S(C(e))}(e)}catch(t){P.warn("Failed to read token from IndexedDB. Error: "+t)}return n}}function R(e,t){return Object(s.t)()?function(e,t){return O(C(e),t)}(e,t).catch(e=>{P.warn("Failed to write token to IndexedDB. Error: "+e)}):Promise.resolve()}async function D(){let e=void 0;try{e=await S("debug-token")}catch(n){}if(e)return e;{const e=Object(s.z)();return(t=e,O("debug-token",t)).catch(e=>P.warn("Failed to persist debug token to IndexedDB. Error: "+e)),e}var t}function L(){return l().enabled}async function M(){const e=l();if(e.enabled&&e.token)return e.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}function U(){const e=Object(s.n)(),t=l();if(t.initialized=!0,"string"!==typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==e.FIREBASE_APPCHECK_DEBUG_TOKEN)return;t.enabled=!0;const n=new s.a;t.token=n,"string"===typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN?n.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(D())}const j={error:"UNKNOWN_ERROR"};async function x(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=e.app;I(n);const i=d(n);let r=i.token,s=void 0;if(r&&!q(r)&&(i.token=void 0,r=void 0),!r){const e=await i.cachedTokenPromise;e&&(q(e)?r=e:await R(n,void 0))}if(!t&&r&&q(r))return{token:r.token};let o,a=!1;if(L()){i.exchangeTokenPromise||(i.exchangeTokenPromise=y(E(n,await M()),e.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),a=!0);const t=await i.exchangeTokenPromise;return await R(n,t),i.token=t,{token:t.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),a=!0),r=await d(n).exchangeTokenPromise}catch(c){"appCheck/throttled"===c.code?P.warn(c.message):P.error(c),s=c}return r?s?o=q(r)?{token:r.token,internalError:s}:W(s):(o={token:r.token},i.token=r,await R(n,r)):o=W(s),a&&B(n,o),o}async function F(e){const t=e.app;I(t);const{provider:n}=d(t);if(L()){const n=await M(),{token:i}=await y(E(t,n),e.heartbeatServiceProvider);return{token:i}}{const{token:e}=await n.getToken();return{token:e}}}function V(e,t,n,i){const{app:r}=e,s=d(r),o={next:n,error:i,type:t};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&q(s.token)){const t=s.token;Promise.resolve().then(()=>{n({token:t.token}),z(e)}).catch(()=>{})}s.cachedTokenPromise.then(()=>z(e))}function H(e,t){const n=d(e),i=n.tokenObservers.filter(e=>e.next!==t);0===i.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function z(e){const{app:t}=e,n=d(t);let i=n.tokenRefresher;i||(i=function(e){const{app:t}=e;return new m(async()=>{let n;if(n=d(t).token?await x(e,!0):await x(e),n.error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{const e=d(t);if(e.token){let t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5;const n=e.token.expireTimeMillis-3e5;return t=Math.min(t,n),Math.max(0,t-Date.now())}return 0},p,f)}(e),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function B(e,t){const n=d(e).tokenObservers;for(const r of n)try{"EXTERNAL"===r.type&&null!=t.error?r.error(t.error):r.next(t)}catch(i){}}function q(e){return e.expireTimeMillis-Date.now()>0}function W(e){return{token:(t=j,s.d.encodeString(JSON.stringify(t),!1)),error:e};var t}class K{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=d(this.app);for(const t of e)H(this.app,t.next);return Promise.resolve()}}function $(e,t){const n=new s.a;d(e).reCAPTCHAState={initialized:n};const i=J(e),r=_(!0);return r?G(e,t,r,i,n):function(e){const t=document.createElement("script");t.src="https://www.google.com/recaptcha/enterprise.js",t.onload=e,document.head.appendChild(t)}(()=>{const r=_(!0);if(!r)throw new Error("no recaptcha");G(e,t,r,i,n)}),n.promise}function G(e,t,n,i,r){n.ready(()=>{!function(e,t,n,i){const r=n.render(i,{sitekey:t,size:"invisible",callback:()=>{d(e).reCAPTCHAState.succeeded=!0},"error-callback":()=>{d(e).reCAPTCHAState.succeeded=!1}}),s=d(e);s.reCAPTCHAState=Object.assign(Object.assign({},s.reCAPTCHAState),{widgetId:r})}(e,t,n,i),r.resolve(n)})}function J(e){const t="fire_app_check_"+e.name,n=document.createElement("div");return n.id=t,n.style.display="none",document.body.appendChild(n),t}async function Y(e){I(e);const t=d(e).reCAPTCHAState,n=await t.initialized.promise;return new Promise((t,i)=>{const r=d(e).reCAPTCHAState;n.ready(()=>{t(n.execute(r.widgetId,{action:"fire_app_check"}))})})}class X{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t,n;Q(this._throttleData);const i=await Y(this._app).catch(e=>{throw v.create("recaptcha-error")});if(!(null===(e=d(this._app).reCAPTCHAState)||void 0===e?void 0:e.succeeded))throw v.create("recaptcha-error");let r;try{r=await y(function(e,t){const{projectId:n,appId:i,apiKey:r}=e.options;return{url:`${h}/projects/${n}/apps/${i}:exchangeRecaptchaEnterpriseToken?key=${r}`,body:{recaptcha_enterprise_token:t}}}(this._app,i),this._heartbeatServiceProvider)}catch(s){throw(null===(t=s.code)||void 0===t?void 0:t.includes("fetch-status-error"))?(this._throttleData=Z(Number(null===(n=s.customData)||void 0===n?void 0:n.httpStatus),this._throttleData),v.create("throttled",{time:w(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):s}return this._throttleData=null,r}initialize(e){this._app=e,this._heartbeatServiceProvider=Object(i.b)(e,"heartbeat"),$(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof X&&this._siteKey===e._siteKey}}function Z(e,t){if(404===e||403===e)return{backoffCount:1,allowRequestsAfter:Date.now()+864e5,httpStatus:e};{const n=t?t.backoffCount:0,i=Object(s.g)(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+i,httpStatus:e}}}function Q(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw v.create("throttled",{time:w(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}function ee(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(i.d)(),t=arguments.length>1?arguments[1]:void 0;e=Object(s.o)(e);const n=Object(i.b)(e,"app-check");if(l().initialized||U(),L()&&M().then(e=>console.log(`App Check debug token: ${e}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(r.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&r.provider.isEqual(t.provider))return i;throw v.create("already-initialized",{appName:e.name})}const r=n.initialize({options:t});return te(e,t.provider,t.isTokenAutoRefreshEnabled),d(e).isTokenAutoRefreshEnabled&&V(r,"INTERNAL",()=>{}),r}function te(e,t,n){const i=function(e,t){return a.set(e,t),a.get(e)}(e,Object.assign({},c));i.activated=!0,i.provider=t,i.cachedTokenPromise=N(e).then(t=>(t&&q(t)&&(i.token=t,B(e,{token:t.token})),t)),i.isTokenAutoRefreshEnabled=void 0===n?e.automaticDataCollectionEnabled:n,i.provider.initialize(e)}async function ne(e,t){const n=await x(e,t);if(n.error)throw n.error;return{token:n.token}}Object(i.c)(new r.a("app-check",e=>function(e,t){return new K(e,t)}(e.getProvider("app").getImmediate(),e.getProvider("heartbeat")),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("app-check-internal").initialize()})),Object(i.c)(new r.a("app-check-internal",e=>function(e){return{getToken:t=>x(e,t),getLimitedUseToken:()=>F(e),addTokenListener:t=>V(e,"INTERNAL",t),removeTokenListener:t=>H(e.app,t)}}(e.getProvider("app-check").getImmediate()),"PUBLIC").setInstantiationMode("EXPLICIT")),Object(i.f)("@firebase/app-check","0.8.0"),n.d(t,"a",(function(){return X})),n.d(t,"b",(function(){return ne})),n.d(t,"c",(function(){return ee}))},OVJz:function(e,t,n){"use strict";var i=n("dw81");n.d(t,"a",(function(){return i.e}));Object(i.f)("firebase","10.4.0","app")},dw81:function(e,t,n){"use strict";n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return y}));var i=n("jlyq"),r=n("40/0"),s=n("qZ8Y"),o=n("NUvx");class a{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const c="@firebase/app",u=new r.b("@firebase/app"),d={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},l=new Map,h=new Map;function p(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function f(e){const t=e.name;if(h.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;h.set(t,e);for(const n of l.values())p(n,e);return!0}function m(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const g={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},v=new s.b("app","Firebase",g);class _{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw v.create("app-deleted",{appName:this._name})}}const I="10.4.0";function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!==typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!==typeof o||!o)throw v.create("bad-app-name",{appName:String(o)});if(n||(n=Object(s.k)()),!n)throw v.create("no-options");const a=l.get(o);if(a){if(Object(s.i)(n,a.options)&&Object(s.i)(r,a.config))return a;throw v.create("duplicate-app",{appName:o})}const c=new i.b(o);for(const i of h.values())c.addComponent(i);const u=new _(n,r,c);return l.set(o,u),u}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[DEFAULT]";const t=l.get(e);if(!t&&"[DEFAULT]"===e&&Object(s.k)())return w();if(!t)throw v.create("no-app",{appName:e});return t}function y(e,t,n){var r;let s=null!==(r=d[e])&&void 0!==r?r:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}f(new i.a(s+"-version",()=>({library:s,version:t}),"VERSION"))}const E="firebase-heartbeat-store";let T=null;function A(){return T||(T=Object(o.a)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(E)}}}).catch(e=>{throw v.create("idb-open",{originalErrorMessage:e.message})})),T}async function k(e,t){try{const n=(await A()).transaction(E,"readwrite"),i=n.objectStore(E);await i.put(t,O(e)),await n.done}catch(n){if(n instanceof s.c)u.warn(n.message);else{const e=v.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});u.warn(e.message)}}}function O(e){return`${e.name}!${e.options.appId}`}class S{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new P(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=C();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=C(),{heartbeatsToSend:t,unsentEntries:n}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024;const n=[];let i=e.slice();for(const r of e){const e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),N(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),N(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Object(s.f)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function C(){return(new Date).toISOString().substring(0,10)}class P{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s.t)()&&Object(s.A)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await A();return await t.transaction(E).objectStore(E).get(O(e))}catch(t){if(t instanceof s.c)u.warn(t.message);else{const e=v.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});u.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function N(e){return Object(s.f)(JSON.stringify({version:2,heartbeats:e})).length}var R;R="",f(new i.a("platform-logger",e=>new a(e),"PRIVATE")),f(new i.a("heartbeat",e=>new S(e),"PRIVATE")),y(c,"0.9.19",R),y(c,"0.9.19","esm2017"),y("fire-js","")},jlyq:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var i=n("qZ8Y");class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[DEFAULT]";this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[DEFAULT]";return this.instances.has(e)}getOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[DEFAULT]";return this.instancesOptions.get(e)||{}}initialize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(r)&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService(e){let{instanceIdentifier:t,options:n={}}=e,i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,"[DEFAULT]"===r?void 0:r),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(s){}var r;return i||null}normalizeInstanceIdentifier(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[DEFAULT]";return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},qZ8Y:function(e,t,n){"use strict";(function(e,i){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return x})),n.d(t,"h",(function(){return L})),n.d(t,"i",(function(){return C})),n.d(t,"j",(function(){return D})),n.d(t,"k",(function(){return h})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return p})),n.d(t,"n",(function(){return u})),n.d(t,"o",(function(){return F})),n.d(t,"p",(function(){return m})),n.d(t,"q",(function(){return v})),n.d(t,"r",(function(){return S})),n.d(t,"s",(function(){return I})),n.d(t,"t",(function(){return w})),n.d(t,"u",(function(){return g})),n.d(t,"v",(function(){return _})),n.d(t,"w",(function(){return O})),n.d(t,"x",(function(){return N})),n.d(t,"y",(function(){return R})),n.d(t,"z",(function(){return j})),n.d(t,"A",(function(){return b}));const r=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,u=t>>2,d=(3&t)<<4|o>>4;let l=(15&o)<<2|c>>6,h=63&c;a||(h=64,s||(l=64)),i.push(n[u],n[d],n[l],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length?n[e.charAt(r)]:0;++r;const a=r<e.length?n[e.charAt(r)]:64;++r;const c=r<e.length?n[e.charAt(r)]:64;if(++r,null==t||null==s||null==a||null==c)throw new o;const u=t<<2|s>>4;if(i.push(u),64!==a){const e=s<<4&240|a>>2;if(i.push(e),64!==c){const e=a<<6&192|c;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){return function(e){const t=r(e);return s.encodeByteArray(t,!0)}(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof e)return e;throw new Error("Unable to locate global object.")}const d=()=>{try{return u().__FIREBASE_DEFAULTS__||(()=>{if("undefined"===typeof i)return;const e=Object({NODE_ENV:"production",PUBLIC_URL:"",APPLICATION_ENV:"production",BRIGHTCOVE_ENV:"production",ONESIGNAL_CONFIG:{appId:"fb3606cf-1b0a-44e7-b314-9c4173ac1b5e",safariWebId:"web.onesignal.auto.477dedc8-8bcf-40fd-b64c-238033111672"},REACT_APP_APPCHECK_DEBUG_TOKEN_AJA:"",REACT_APP_APPCHECK_DEBUG_TOKEN_AJB:"",REACT_APP_APPCHECK_DEBUG_TOKEN_AJD:"",REACT_APP_APPCHECK_DEBUG_TOKEN_AJE:"",REACT_APP_APPCHECK_DEBUG_TOKEN_AJM:"",REACT_APP_ENVIRONMENT:"production",REACT_APP_SITE:"aje",REACT_APP_APPCHECK_DEBUG_TOKEN_CHINESE:"",REACT_APP_OPTA_SCRIPT_VERSION:"v14",REACT_APP_OPTA_STYLES_VERSION:"v30"}).__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},l=e=>{var t,n;return null===(n=null===(t=d())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},h=()=>{var e;return null===(e=d())||void 0===e?void 0:e.config},p=e=>{var t;return null===(t=d())||void 0===t?void 0:t["_"+e]};class f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function m(){return"undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:""}function g(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function _(){return"object"===typeof navigator&&"ReactNative"===navigator.product}function I(){const e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){try{return"object"===typeof indexedDB}catch(e){return!1}}function b(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}class y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e){const t=(arguments.length<=1?void 0:arguments[1])||{},n=`${this.service}/${e}`,i=this.errors[e],r=i?function(e,t){return e.replace(T,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}(i,t):"Error",s=`${this.serviceName}: ${r} (${n}).`;return new y(n,s,t)}}const T=/\{\$([^}]+)}/g;function A(e){return JSON.parse(e)}const k=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=A(c(s[0])||""),n=A(c(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(s){}return{header:t,claims:n,data:i,signature:r}},O=function(e){const t=k(e).claims;return"object"===typeof t&&t.hasOwnProperty("iat")?t.iat:null};function S(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function C(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(P(n)&&P(s)){if(!C(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function P(e){return null!==e&&"object"===typeof e}function N(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function R(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function D(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function L(e,t){const n=new M(e,t);return n.subscribe.bind(n)}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=U),void 0===i.error&&(i.error=U),void 0===i.complete&&(i.complete=U);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U(){}const j=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})};function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}function F(e){return e&&e._delegate?e._delegate:e}}).call(this,n("Uwcf"),n("te8v"))}}]);