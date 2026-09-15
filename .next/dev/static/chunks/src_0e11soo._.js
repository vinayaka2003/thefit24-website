(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/gallery/GalleryView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GalleryView",
    ()=>GalleryView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/gallery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$LazyBlurImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/LazyBlurImage.tsx [app-client] (ecmascript)");
;
;
;
;
const GalleryView = ()=>{
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
    // Asymmetrical masonry grid logic
    // We'll alternate sizes: Some take 2 columns, some take 1.
    const getColSpan = (idx)=>{
        // A rhythmic pattern for a 12-column grid
        const pattern = [
            'lg:col-span-12 aspect-[21/9]',
            'lg:col-span-5 aspect-[4/5]',
            'lg:col-span-7 aspect-[16/9]',
            'lg:col-span-7 aspect-[16/9]',
            'lg:col-span-5 aspect-[4/5]',
            'lg:col-span-4 aspect-square',
            'lg:col-span-4 aspect-square',
            'lg:col-span-4 aspect-square',
            'lg:col-span-12 aspect-[21/9]' // Hero massive
        ];
        return pattern[idx % pattern.length];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-32 pb-24 md:pt-40 md:pb-32 bg-[#050507] min-h-screen text-white font-sans overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    className: "mb-20 md:mb-32",
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
                            children: "INSIDE THE FIT24"
                        }, void 0, false, {
                            fileName: "[project]/src/components/gallery/GalleryView.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].h1, {
                            variants: itemVariants,
                            className: "whitespace-nowrap text-[9vw] sm:text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-[0.85] uppercase text-white",
                            children: [
                                "SEE THE SPACE ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#FF5500'
                                    },
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gallery/GalleryView.tsx",
                                    lineNumber: 54,
                                    columnNumber: 27
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/gallery/GalleryView.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].p, {
                            variants: itemVariants,
                            className: "mt-12 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl font-light leading-relaxed tracking-wide",
                            children: "A high-contrast visual archive of calibrated steel, chalk dust, and raw physical exertion captured across 24-hour training cycles."
                        }, void 0, false, {
                            fileName: "[project]/src/components/gallery/GalleryView.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/gallery/GalleryView.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryData"].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
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
                                delay: idx % 3 * 0.1,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            className: `group relative overflow-hidden bg-[#0a0a0e] rounded-sm ${getColSpan(idx)}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$LazyBlurImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyBlurImage"], {
                                    src: item.imageUrl,
                                    alt: item.title,
                                    containerClassName: "absolute inset-0 w-full h-full",
                                    className: "w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-[1.5s] ease-out"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gallery/GalleryView.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/gallery/GalleryView.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 p-6 sm:p-8 flex flex-col justify-between pointer-events-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-700",
                                                    children: [
                                                        "0",
                                                        idx + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/gallery/GalleryView.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors duration-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/gallery/GalleryView.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/gallery/GalleryView.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl sm:text-2xl font-serif text-white uppercase tracking-tight mb-2",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/gallery/GalleryView.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-neutral-400 font-sans max-w-md leading-relaxed",
                                                    children: item.caption
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/gallery/GalleryView.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/gallery/GalleryView.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/gallery/GalleryView.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/components/gallery/GalleryView.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/gallery/GalleryView.tsx",
                    lineNumber: 65,
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
                    className: "mt-24 pt-12 border-t border-white/[0.06] text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 block",
                        children: "End of Archive"
                    }, void 0, false, {
                        fileName: "[project]/src/components/gallery/GalleryView.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/gallery/GalleryView.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/gallery/GalleryView.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/gallery/GalleryView.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = GalleryView;
var _c;
__turbopack_context__.k.register(_c, "GalleryView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/gallery/GalleryView.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/gallery/GalleryView.tsx [app-client] (ecmascript)"));
}),
"[project]/src/data/gallery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "featuredStripImages",
    ()=>featuredStripImages,
    "galleryData",
    ()=>galleryData
]);
const featuredStripImages = [
    {
        id: 'strip-reception',
        title: 'The Welcome Desk',
        subtitle: 'Premium entrance with iconic 3D glowing signage',
        imageUrl: '/gallery/1.webp',
        alt: 'Wide shot of the gym reception desk with glowing FIT24 sign'
    },
    {
        id: 'strip-desk',
        title: 'Check-In Station',
        subtitle: 'Streamlined access and architectural marble desk',
        imageUrl: '/gallery/2.webp',
        alt: 'Close up of the modern gym reception desk'
    },
    {
        id: 'strip-hanuman',
        title: 'The Iron Vault',
        subtitle: 'Heavy dumbbells and inspiring Hanuman wall art',
        imageUrl: '/gallery/3.webp',
        alt: 'Free weight area with Captain America dumbbells and large wall decal'
    },
    {
        id: 'strip-statue',
        title: 'Bodybuilding Heritage',
        subtitle: 'Golden bodybuilder statue in a botanical wood frame',
        imageUrl: '/gallery/4.webp',
        alt: 'Golden bodybuilder statue illuminated inside a decorative frame'
    }
];
const galleryData = [
    {
        id: 'photo-1',
        title: 'VYSATI Machine Floor',
        caption: 'Expansive gym floor loaded with premium VYSATI plate-loaded and pin-loaded machines.',
        imageUrl: '/gallery/5.webp'
    },
    {
        id: 'photo-2',
        title: 'Modern Washrooms',
        caption: 'Immaculately clean, brutalist-style washrooms featuring architectural lighting and glowing oval mirrors.',
        imageUrl: '/gallery/6.webp'
    },
    {
        id: 'photo-3',
        title: 'Functional Training Wall',
        caption: 'Comprehensive accessory pegboard, heavy Smith machine, and suspension training attachments.',
        imageUrl: '/gallery/7.webp'
    },
    {
        id: 'photo-4',
        title: 'Custom Plate Storage',
        caption: 'Close-up of our signature Captain America themed heavy urethane weight plates.',
        imageUrl: '/gallery/8.webp'
    },
    {
        id: 'photo-5',
        title: 'Reception & Entrance',
        caption: 'A welcoming, premium reception area with marble finishes, glowing signage, and trophies on display.',
        imageUrl: '/gallery/1.webp'
    },
    {
        id: 'photo-6',
        title: 'Front Desk Access',
        caption: 'Smooth check-in experience at our architectural front desk with integrated lighting and greenery.',
        imageUrl: '/gallery/2.webp'
    },
    {
        id: 'photo-7',
        title: 'The Free Weight Zone',
        caption: 'Extensive free weight area featuring custom Captain America dumbbells and motivating wall graphics.',
        imageUrl: '/gallery/3.webp'
    },
    {
        id: 'photo-8',
        title: 'The Golden Standard',
        caption: 'Our signature golden bodybuilder statue, representing the pinnacle of physique aesthetics.',
        imageUrl: '/gallery/4.webp'
    },
    {
        id: 'photo-9',
        title: 'Heavy Equipment Arsenal',
        caption: 'Wide view of the facility showing our extensive collection of heavy-duty training equipment.',
        imageUrl: '/gallery/5.webp'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0e11soo._.js.map