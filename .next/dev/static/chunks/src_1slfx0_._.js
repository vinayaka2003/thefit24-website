(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/common/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Button = ({ variant = 'primary', size = 'md', children, icon, className = '', ...props })=>{
    const baseStyles = 'relative inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-[0.98] select-none touch-manipulation';
    const variantStyles = {
        // Matches the solid crisp off-white button from the reference design
        primary: 'bg-[#e2e2e0] text-[#0d0d0f] hover:bg-white active:bg-[#c9c9c7] shadow-sm font-semibold',
        secondary: 'bg-[#1a1a1c] text-[#ededef] hover:bg-[#262629] border border-[#2e2e33] active:bg-[#151517]',
        outline: 'border border-[#505058] text-[#e0e0e3] hover:border-white hover:text-white bg-transparent active:bg-white/5',
        ghost: 'text-[#b0b0b6] hover:text-white hover:bg-white/5 active:bg-white/10'
    };
    const sizeStyles = {
        sm: 'text-xs min-h-[44px] sm:min-h-[38px] px-4 py-2.5 sm:py-2 gap-1.5 rounded-lg',
        md: 'text-xs sm:text-sm min-h-[44px] px-5 sm:px-6 py-3 gap-2 rounded-lg',
        lg: 'text-xs sm:text-sm md:text-base min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 gap-2.5 rounded-lg'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`,
        ...props,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex shrink-0",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/common/Button.tsx",
                lineNumber: 45,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "whitespace-nowrap",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/common/Button.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/Button.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/LazyBlurImage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LazyBlurImage",
    ()=>LazyBlurImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const LazyBlurImage = ({ src, alt, className = '', containerClassName = '', rootMargin = '200px', threshold = 0.01, lowResSrc, referrerPolicy = 'no-referrer', onClick, children })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Generate an ultra-fast low-res blurred thumbnail for Unsplash URLs if not provided
    const placeholderSrc = lowResSrc || (src.includes('images.unsplash.com') ? `${src.split('?')[0]}?auto=format&fit=crop&w=40&q=30&blur=30` : null);
    // IntersectionObserver to trigger loading when nearing the viewport
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LazyBlurImage.useEffect": ()=>{
            if (!containerRef.current) return;
            if (typeof IntersectionObserver === 'undefined') {
                setIsInView(true);
                return;
            }
            const observer = new IntersectionObserver({
                "LazyBlurImage.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                }
            }["LazyBlurImage.useEffect"], {
                root: null,
                rootMargin,
                threshold
            });
            observer.observe(containerRef.current);
            return ({
                "LazyBlurImage.useEffect": ()=>{
                    observer.disconnect();
                }
            })["LazyBlurImage.useEffect"];
        }
    }["LazyBlurImage.useEffect"], [
        rootMargin,
        threshold
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        onClick: onClick,
        className: `relative overflow-hidden bg-[#0e0e12] ${containerClassName}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: !isLoaded && !hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    initial: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.5,
                        ease: 'easeOut'
                    },
                    className: "absolute inset-0 z-10 overflow-hidden pointer-events-none",
                    children: [
                        placeholderSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: placeholderSrc,
                            alt: "",
                            "aria-hidden": "true",
                            className: "w-full h-full object-cover filter blur-xl scale-110 opacity-70 transform-gpu",
                            referrerPolicy: referrerPolicy
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/LazyBlurImage.tsx",
                            lineNumber: 87,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/LazyBlurImage.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[#0d0d10]/40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/LazyBlurImage.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/LazyBlurImage.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/common/LazyBlurImage.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isInView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].img, {
                src: src,
                alt: alt,
                onLoad: ()=>setIsLoaded(true),
                onError: ()=>setHasError(true),
                referrerPolicy: referrerPolicy,
                initial: {
                    opacity: 0,
                    filter: 'blur(16px)',
                    scale: 1.04
                },
                animate: {
                    opacity: isLoaded ? 1 : 0,
                    filter: isLoaded ? 'blur(0px)' : 'blur(16px)',
                    scale: isLoaded ? 1 : 1.04
                },
                transition: {
                    duration: 0.65,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                className: `w-full h-full transform-gpu ${className}`
            }, void 0, false, {
                fileName: "[project]/src/components/common/LazyBlurImage.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-[#131317] text-neutral-500 text-xs font-mono",
                children: "[ Asset Unreachable ]"
            }, void 0, false, {
                fileName: "[project]/src/components/common/LazyBlurImage.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/LazyBlurImage.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LazyBlurImage, "/1d9aVP/8zUeTozkSWYhCzQlqBM=");
_c = LazyBlurImage;
var _c;
__turbopack_context__.k.register(_c, "LazyBlurImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/facilities/FacilitiesView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FacilitiesView",
    ()=>FacilitiesView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$facilities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/facilities.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$LazyBlurImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/LazyBlurImage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
const FacilitiesView = ({ onOpenConsult })=>{
    const partners = [
        'Eleiko',
        'Rogue',
        'Texas Power Bars',
        'Woodway',
        'Concept2'
    ];
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-32 pb-24 md:pt-40 md:pb-32 bg-[#050507] min-h-screen text-white font-sans overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    className: "mb-32 md:mb-48",
                    variants: containerVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            variants: itemVariants,
                            className: "text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-8",
                            children: "THE TRAINING FLOOR"
                        }, void 0, false, {
                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].h1, {
                            variants: itemVariants,
                            className: "whitespace-nowrap text-[9vw] sm:text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-[0.85] uppercase text-white",
                            children: [
                                "WHAT WE OFFER ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#FF5500'
                                    },
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                    lineNumber: 49,
                                    columnNumber: 27
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].p, {
                            variants: itemVariants,
                            className: "mt-12 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl font-light leading-relaxed tracking-wide",
                            children: "Calibrated tolerance, competition platforms, and active contrast recovery designed for 24/7 strength execution. No gimmicks, just pure iron architecture."
                        }, void 0, false, {
                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-32 md:space-y-48 mb-32 md:mb-48",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$facilities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["facilitiesData"].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col gap-12 lg:gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: idx % 2 === 1 ? 30 : -30
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true,
                                        margin: "-100px"
                                    },
                                    transition: {
                                        duration: 1,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    className: "w-full lg:w-3/5 aspect-[4/3] relative rounded-sm overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/20 z-10 mix-blend-overlay"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$LazyBlurImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyBlurImage"], {
                                            src: item.image,
                                            alt: item.name,
                                            containerClassName: "w-full h-full",
                                            className: "w-full h-full object-cover filter grayscale contrast-125"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 border border-white/10 z-20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-6 left-6 z-30 text-[10px] font-mono uppercase tracking-[0.3em] text-white/50",
                                            children: [
                                                "Zone 0",
                                                idx + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true,
                                        margin: "-100px"
                                    },
                                    transition: {
                                        duration: 1,
                                        delay: 0.2,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    className: "w-full lg:w-2/5 space-y-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl sm:text-4xl font-medium tracking-tight mb-6 uppercase",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-neutral-400 font-light leading-relaxed",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] font-mono text-neutral-500 uppercase tracking-widest border-b border-white/[0.06] pb-4",
                                                    children: "Hardware Specifications"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 pt-2",
                                                    children: item.specs.map((spec, sIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs font-mono text-neutral-300 uppercase tracking-wider",
                                                            children: spec
                                                        }, sIdx, false, {
                                                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-neutral-500 italic font-serif",
                                            children: item.highlight
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 1
                    },
                    className: "mb-32 md:mb-48 py-12 border-y border-white/[0.06] text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 block mb-8",
                            children: "Lineage & Standards"
                        }, void 0, false, {
                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs sm:text-sm font-mono text-neutral-300 uppercase tracking-widest",
                            children: partners.map((brand, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: brand
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        i < partners.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-neutral-700",
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                            lineNumber: 144,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, brand, true, {
                                    fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    whileInView: {
                        opacity: 1,
                        scale: 1
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.8,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    },
                    className: "flex flex-col items-center text-center pb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl sm:text-4xl font-medium tracking-tight mb-8",
                            children: "INSPECT THE FACILITY"
                        }, void 0, false, {
                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "primary",
                            size: "lg",
                            onClick: onOpenConsult,
                            className: "w-full sm:w-auto text-xs font-mono uppercase tracking-widest bg-white text-black hover:bg-neutral-200",
                            children: "Book A Free Session"
                        }, void 0, false, {
                            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/facilities/FacilitiesView.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FacilitiesView;
var _c;
__turbopack_context__.k.register(_c, "FacilitiesView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/facilities/FacilitiesView.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/facilities/FacilitiesView.tsx [app-client] (ecmascript)"));
}),
"[project]/src/data/facilities.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "facilitiesData",
    ()=>facilitiesData
]);
const facilitiesData = [
    {
        id: 'facility-1',
        name: 'The Iron Vault & Dumbbell Runway',
        description: 'Custom urethane and milled raw steel dumbbells progressing from 5 lbs to 150 lbs, flanking 8 adjustable commercial heavy-gauge benches.',
        specs: [
            'Dumbbells: 5 lbs to 150 lbs',
            'Benches: 11-gauge 3x3 steel',
            'Calibrated Cast Iron Plates',
            'Kabuki & Texas Power Bars'
        ],
        image: '/facilities/1.webp',
        highlight: 'Pure steel grip knurling with zero compromise.'
    },
    {
        id: 'facility-2',
        name: 'Cardio & Treadmill Deck',
        description: 'High-performance SHUA commercial treadmills positioned against expansive glass windows overlooking the city, equipped with advanced shock absorption.',
        specs: [
            'SHUA Commercial Treadmills',
            'Advanced Shock Absorption Deck',
            'Interactive Touch Displays',
            'Panoramic City Views'
        ],
        image: '/facilities/2.webp',
        highlight: 'Build cardiovascular endurance with state-of-the-art tracking.'
    },
    {
        id: 'facility-3',
        name: 'Combat & Cable Zone',
        description: 'VYSATI dual adjustable cable crossovers paired with heavy punching bags for combat conditioning, alongside dedicated plate-loaded stations.',
        specs: [
            'VYSATI Cable Crossover Station',
            'Heavy Duty Punching Bag',
            'Multi-Grip Pull-Up Handles',
            'Captain America Bumper Plates'
        ],
        image: '/facilities/3.webp',
        highlight: 'Functional strength and striking power in one zone.'
    },
    {
        id: 'facility-4',
        name: 'Heavy Lifting & Bumper Plates',
        description: 'Dedicated heavy lifting zones featuring color-coded Soulflex competition bumper plates (10kg to 25kg) and heavy tractor tires for flips and functional power.',
        specs: [
            'Soulflex Competition Bumper Plates',
            'Color-Coded Weight Increments',
            'Heavy Tractor Tire',
            'Impact-Absorbing Rubber Flooring'
        ],
        image: '/facilities/4.webp',
        highlight: 'Engineered for maximal load testing and Olympic lifts.'
    },
    {
        id: 'facility-5',
        name: 'Core Isolation & Hyper Bench',
        description: 'Dedicated core development area featuring the VYSATI vertical knee raise and dip station, providing a stable platform for intense abdominal and upper body work.',
        specs: [
            'VYSATI Knee Raise / Dip Station',
            'Heavy-Duty Steel Construction',
            'Ergonomic Arm & Back Pads',
            'Plate Storage Pegs'
        ],
        image: '/facilities/5.webp',
        highlight: 'Unbreakable core stability and posterior chain development.'
    },
    {
        id: 'facility-6',
        name: 'Spin & High-Intensity Cycling',
        description: 'A dedicated fleet of commercial spin bikes positioned for high-intensity interval training, offering smooth magnetic resistance and fully adjustable ergonomics.',
        specs: [
            'Commercial Spin Bikes',
            'Magnetic Resistance Flywheels',
            'Fully Adjustable Saddles',
            'High-Intensity Interval Ready'
        ],
        image: '/facilities/6.webp',
        highlight: 'Cardiovascular conditioning powered solely by human effort.'
    },
    {
        id: 'facility-7',
        name: 'CrossFit & Functional Wall',
        description: 'A comprehensive functional training pegboard stocked with triceps ropes, lat pulldown bars, resistance bands, and a heavy-duty Smith machine for guided lifting.',
        specs: [
            'Custom Accessory Pegboard',
            'Heavy-Duty Smith Machine',
            'Multi-Use Cable Attachments',
            'Suspension Training Straps'
        ],
        image: '/facilities/7.webp',
        highlight: 'Endless accessory variations for targeted muscular hypertrophy.'
    },
    {
        id: 'facility-8',
        name: 'Mobility & Stretching Studio',
        description: 'A quiet, dedicated mobility zone equipped with stability balls, Reebok aerobic steps, foam rollers, kettlebells, and stretching mats for deep restorative work.',
        specs: [
            'Stability & Medicine Balls',
            'Reebok Aerobic Steps',
            'Cast Iron Kettlebell Set',
            'High-Density Foam Rollers'
        ],
        image: '/facilities/8.webp',
        highlight: 'Accelerate recovery and improve joint mobility.'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1slfx0_._.js.map