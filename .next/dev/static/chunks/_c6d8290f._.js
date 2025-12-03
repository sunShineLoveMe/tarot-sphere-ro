(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hooks/use-responsive-dimensions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResponsiveDimensions",
    ()=>useResponsiveDimensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useResponsiveDimensions() {
    _s();
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 1024,
        height: 768
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResponsiveDimensions.useEffect": ()=>{
            const handleResize = {
                "useResponsiveDimensions.useEffect.handleResize": ()=>{
                    setDimensions({
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                }
            }["useResponsiveDimensions.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "useResponsiveDimensions.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["useResponsiveDimensions.useEffect"];
        }
    }["useResponsiveDimensions.useEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useResponsiveDimensions.useMemo": ()=>{
            const { width, height } = dimensions;
            const minDimension = Math.min(width, height);
            // Breakpoint detection
            const isMobile = width < 768;
            const isTablet = width >= 768 && width < 1280;
            const isDesktop = width >= 1280;
            // Card height based on viewport height (3:5 ratio)
            // Desktop: 18-22%, Tablet: 20-25%, Mobile: 27-32%
            let cardHeightPercent;
            if (isMobile) {
                cardHeightPercent = 0.28; // 28% of vh
            } else if (isTablet) {
                cardHeightPercent = 0.22; // 22% of vh
            } else {
                cardHeightPercent = 0.2; // 20% of vh
            }
            const cardHeight = Math.min(height * cardHeightPercent, 300);
            const cardWidth = cardHeight * 0.6 // 3:5 ratio
            ;
            // Sphere/Ring radius based on screen size
            // Large: 35-42%, Medium: 30-38%, Small: 40-48%
            let radiusPercent;
            if (isMobile) {
                radiusPercent = 0.44; // Larger on mobile for immersion
            } else if (isTablet) {
                radiusPercent = 0.34;
            } else {
                radiusPercent = 0.38;
            }
            const sphereRadius = minDimension * radiusPercent;
            const ringRadius = minDimension * radiusPercent;
            // Formation container size
            const formationSize = minDimension * (isMobile ? 0.9 : 0.8);
            // Responsive spacing
            const baseSpacing = isMobile ? 12 : isTablet ? 18 : 24;
            const spacing = {
                sm: baseSpacing,
                md: baseSpacing * 1.5,
                lg: baseSpacing * 2.5
            };
            // Animation scale factor (for position calculations)
            const animationScale = minDimension / 1000;
            return {
                width,
                height,
                minDimension,
                isMobile,
                isTablet,
                isDesktop,
                cardWidth,
                cardHeight,
                sphereRadius,
                ringRadius,
                formationSize,
                spacing,
                animationScale
            };
        }
    }["useResponsiveDimensions.useMemo"], [
        dimensions
    ]);
}
_s(useResponsiveDimensions, "6rGtoGFClz7yxMSEcLFvLibVQq8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/magic-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MagicBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-responsive-dimensions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MagicBackground() {
    _s();
    const dims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"])();
    const starCount = dims.isMobile ? 60 : 100;
    const [stars, setStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MagicBackground.useEffect": ()=>{
            setStars(Array.from({
                length: starCount
            }).map({
                "MagicBackground.useEffect": (_, i)=>({
                        id: i,
                        width: Math.random() * 3 + 1,
                        height: Math.random() * 3 + 1,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        duration: 2 + Math.random() * 3,
                        delay: Math.random() * 2
                    })
            }["MagicBackground.useEffect"]));
        }
    }["MagicBackground.useEffect"], [
        starCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-0 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a20] to-[#0a0a1a]"
            }, void 0, false, {
                fileName: "[project]/components/magic-background.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30",
                style: {
                    backgroundImage: `url('/sacred-geometry-pattern-with-stars-and-cosmic-ener.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }
            }, void 0, false, {
                fileName: "[project]/components/magic-background.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 opacity-20",
                animate: {
                    scale: [
                        1,
                        1.1,
                        1
                    ],
                    rotate: [
                        0,
                        5,
                        0
                    ]
                },
                transition: {
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                },
                style: {
                    background: "radial-gradient(ellipse at 30% 20%, rgba(255,79,216,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(115,242,255,0.15) 0%, transparent 50%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/magic-background.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: stars.map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute rounded-full bg-white",
                        style: {
                            width: star.width,
                            height: star.height,
                            left: star.left,
                            top: star.top
                        },
                        animate: {
                            opacity: [
                                0.3,
                                1,
                                0.3
                            ],
                            scale: [
                                1,
                                1.5,
                                1
                            ]
                        },
                        transition: {
                            duration: star.duration,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: star.delay
                        }
                    }, star.id, false, {
                        fileName: "[project]/components/magic-background.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/magic-background.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0",
                animate: {
                    opacity: [
                        0.3,
                        0.5,
                        0.3
                    ]
                },
                transition: {
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY
                },
                style: {
                    background: "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.1) 0%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/magic-background.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/magic-background.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/magic-background.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(MagicBackground, "cWmPVVUk6acxry1N0xI2EiV4z0Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"]
    ];
});
_c = MagicBackground;
var _c;
__turbopack_context__.k.register(_c, "MagicBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/magic-circle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MagicCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function MagicCircle({ isActive, intensity }) {
    const glowIntensity = {
        normal: 0.3,
        high: 0.7,
        elevated: 0.5
    };
    const rotationSpeed = {
        normal: 60,
        high: 20,
        elevated: 40
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex items-center justify-center pointer-events-none z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute w-[90vw] h-[90vw] max-w-[800px] max-h-[800px]",
                animate: {
                    rotate: 360,
                    opacity: isActive ? glowIntensity[intensity] : 0.1
                },
                transition: {
                    rotate: {
                        duration: rotationSpeed[intensity],
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear"
                    },
                    opacity: {
                        duration: 1
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 400 400",
                    className: "w-full h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "circleGradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "100%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "#FF4FD8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/magic-circle.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "50%",
                                            stopColor: "#73F2FF"
                                        }, void 0, false, {
                                            fileName: "[project]/components/magic-circle.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "#FF4FD8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/magic-circle.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/magic-circle.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "glow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                            stdDeviation: "3",
                                            result: "coloredBlur"
                                        }, void 0, false, {
                                            fileName: "[project]/components/magic-circle.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                    in: "coloredBlur"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/magic-circle.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                    in: "SourceGraphic"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/magic-circle.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/magic-circle.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/magic-circle.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/magic-circle.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "200",
                            cy: "200",
                            r: "195",
                            fill: "none",
                            stroke: "url(#circleGradient)",
                            strokeWidth: "1",
                            filter: "url(#glow)"
                        }, void 0, false, {
                            fileName: "[project]/components/magic-circle.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "200",
                            cy: "200",
                            r: "180",
                            fill: "none",
                            stroke: "#FF4FD8",
                            strokeWidth: "0.5",
                            opacity: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/components/magic-circle.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "200",
                            cy: "200",
                            r: "160",
                            fill: "none",
                            stroke: "#73F2FF",
                            strokeWidth: "0.5",
                            opacity: "0.3"
                        }, void 0, false, {
                            fileName: "[project]/components/magic-circle.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "200,20 350,280 50,280",
                            fill: "none",
                            stroke: "url(#circleGradient)",
                            strokeWidth: "0.5",
                            opacity: "0.4"
                        }, void 0, false, {
                            fileName: "[project]/components/magic-circle.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "200,380 350,120 50,120",
                            fill: "none",
                            stroke: "url(#circleGradient)",
                            strokeWidth: "0.5",
                            opacity: "0.4"
                        }, void 0, false, {
                            fileName: "[project]/components/magic-circle.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        Array.from({
                            length: 12
                        }).map((_, i)=>{
                            const angle = i * 30 * Math.PI / 180;
                            const x = 200 + 185 * Math.cos(angle);
                            const y = 200 + 185 * Math.sin(angle);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: x,
                                y: y,
                                fill: "#FF4FD8",
                                fontSize: "12",
                                textAnchor: "middle",
                                dominantBaseline: "middle",
                                opacity: "0.6",
                                children: "✧"
                            }, i, false, {
                                fileName: "[project]/components/magic-circle.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/magic-circle.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/magic-circle.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute w-[60vw] h-[60vw] max-w-[550px] max-h-[550px]",
                animate: {
                    rotate: -360,
                    opacity: isActive ? glowIntensity[intensity] * 0.8 : 0.05
                },
                transition: {
                    rotate: {
                        duration: rotationSpeed[intensity] * 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear"
                    },
                    opacity: {
                        duration: 1
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 400 400",
                    className: "w-full h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "200",
                            cy: "200",
                            r: "195",
                            fill: "none",
                            stroke: "#73F2FF",
                            strokeWidth: "1",
                            strokeDasharray: "10 5",
                            filter: "url(#glow)"
                        }, void 0, false, {
                            fileName: "[project]/components/magic-circle.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "200,10 238,150 390,150 268,230 306,370 200,280 94,370 132,230 10,150 162,150",
                            fill: "none",
                            stroke: "#73F2FF",
                            strokeWidth: "0.5",
                            opacity: "0.3"
                        }, void 0, false, {
                            fileName: "[project]/components/magic-circle.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/magic-circle.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/magic-circle.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute w-[45vw] h-[45vw] max-w-[400px] max-h-[400px] rounded-full",
                animate: {
                    scale: [
                        1,
                        1.05,
                        1
                    ],
                    opacity: isActive ? [
                        0.1,
                        0.2,
                        0.1
                    ] : 0
                },
                transition: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                },
                style: {
                    background: "radial-gradient(circle, rgba(255,79,216,0.2) 0%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/magic-circle.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/magic-circle.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = MagicCircle;
var _c;
__turbopack_context__.k.register(_c, "MagicCircle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/card-stack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-responsive-dimensions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CardStack() {
    _s();
    const cards = Array.from({
        length: 5
    });
    const dims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"])();
    const stackWidth = dims.cardWidth * 1.5;
    const stackHeight = dims.cardHeight * 1.5;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute inset-0 flex items-center justify-center z-20",
        initial: {
            opacity: 0,
            scale: 0.8
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.8
        },
        transition: {
            duration: 0.8
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            style: {
                width: stackWidth,
                height: stackHeight
            },
            children: cards.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 rounded-xl overflow-hidden",
                    style: {
                        transformStyle: "preserve-3d",
                        zIndex: cards.length - i
                    },
                    initial: {
                        y: i * -4,
                        x: i * 2,
                        rotateZ: (i - 2) * 3
                    },
                    animate: {
                        y: [
                            i * -4,
                            i * -6,
                            i * -4
                        ],
                        rotateZ: [
                            (i - 2) * 3,
                            (i - 2) * 3 + 1,
                            (i - 2) * 3
                        ]
                    },
                    transition: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: i * 0.1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full rounded-xl border-2 border-[#FF4FD8]/50 overflow-hidden",
                        style: {
                            background: "linear-gradient(135deg, #1a0a2e 0%, #0f0a20 50%, #1a0a2e 100%)",
                            boxShadow: `
                  0 0 20px rgba(255,79,216,0.3),
                  0 0 40px rgba(115,242,255,0.2),
                  inset 0 0 30px rgba(255,79,216,0.1)
                `
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full flex items-center justify-center p-3 sm:p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full rounded-lg border border-[#73F2FF]/30 flex items-center justify-center",
                                style: {
                                    background: "radial-gradient(circle, rgba(115,242,255,0.1) 0%, transparent 70%)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 100 100",
                                    className: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "cardBackGradient",
                                                x1: "0%",
                                                y1: "0%",
                                                x2: "100%",
                                                y2: "100%",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: "#FF4FD8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/card-stack.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: "#73F2FF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/card-stack.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/card-stack.tsx",
                                                lineNumber: 68,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/card-stack.tsx",
                                            lineNumber: 67,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "50",
                                            cy: "50",
                                            r: "45",
                                            fill: "none",
                                            stroke: "url(#cardBackGradient)",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/card-stack.tsx",
                                            lineNumber: 73,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "50",
                                            cy: "50",
                                            r: "35",
                                            fill: "none",
                                            stroke: "#FF4FD8",
                                            strokeWidth: "0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/card-stack.tsx",
                                            lineNumber: 74,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "50,10 61,40 95,40 68,58 79,90 50,70 21,90 32,58 5,40 39,40",
                                            fill: "none",
                                            stroke: "url(#cardBackGradient)",
                                            strokeWidth: "0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/card-stack.tsx",
                                            lineNumber: 75,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/card-stack.tsx",
                                    lineNumber: 66,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/card-stack.tsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/card-stack.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/card-stack.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this)
                }, i, false, {
                    fileName: "[project]/components/card-stack.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/card-stack.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/card-stack.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(CardStack, "LX3JUpMO+WkS1McDjcpGpK2/kxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"]
    ];
});
_c = CardStack;
var _c;
__turbopack_context__.k.register(_c, "CardStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shuffle-phase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShufflePhase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-responsive-dimensions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ShufflePhase() {
    _s();
    const dims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"])();
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShufflePhase.useEffect": ()=>{
            setCards(Array.from({
                length: 22
            }).map({
                "ShufflePhase.useEffect": (_, i)=>({
                        id: i,
                        initialAngle: Math.random() * 360,
                        delay: Math.random() * 0.5,
                        duration: 0.8 + Math.random() * 0.4,
                        randomX: (Math.random() - 0.5) * dims.width * 0.6,
                        randomY: (Math.random() - 0.5) * dims.height * 0.5,
                        randomRotate: (Math.random() - 0.5) * 720
                    })
            }["ShufflePhase.useEffect"]));
        }
    }["ShufflePhase.useEffect"], [
        dims.width,
        dims.height
    ]);
    const energyBurstSize = dims.minDimension * 0.5;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute inset-0 flex items-center justify-center z-20",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 0.5
        },
        children: [
            cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShuffleCard, {
                    ...card,
                    dims: dims
                }, card.id, false, {
                    fileName: "[project]/components/shuffle-phase.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute rounded-full pointer-events-none",
                initial: {
                    scale: 0,
                    opacity: 0.8
                },
                animate: {
                    scale: [
                        0,
                        2,
                        0
                    ],
                    opacity: [
                        0.6,
                        0,
                        0
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: 2,
                    ease: "easeOut"
                },
                style: {
                    width: energyBurstSize,
                    height: energyBurstSize,
                    background: "radial-gradient(circle, rgba(255,79,216,0.4) 0%, rgba(115,242,255,0.2) 50%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/shuffle-phase.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shuffle-phase.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(ShufflePhase, "wS7EkANREmLs40yUm8KP/VlBqYw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"]
    ];
});
_c = ShufflePhase;
function ShuffleCard({ id, initialAngle, delay, duration, randomX, randomY, randomRotate, dims }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute rounded-lg overflow-hidden",
        style: {
            width: dims.cardWidth,
            height: dims.cardHeight,
            transformStyle: "preserve-3d",
            transformOrigin: "center center"
        },
        initial: {
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: initialAngle,
            opacity: 0
        },
        animate: {
            x: [
                0,
                randomX,
                randomX * 0.5,
                0
            ],
            y: [
                0,
                randomY,
                randomY * 0.5,
                0
            ],
            rotateX: [
                0,
                180,
                360,
                0
            ],
            rotateY: [
                0,
                randomRotate,
                0
            ],
            rotateZ: [
                initialAngle,
                initialAngle + 360,
                initialAngle
            ],
            opacity: [
                0,
                1,
                1,
                1
            ]
        },
        transition: {
            duration: 4,
            times: [
                0,
                0.3,
                0.7,
                1
            ],
            ease: "easeInOut",
            delay: delay
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full rounded-lg border border-[#FF4FD8]/50",
                style: {
                    background: "linear-gradient(135deg, #1a0a2e 0%, #0f0a20 50%, #1a0a2e 100%)",
                    boxShadow: `
            0 0 15px rgba(255,79,216,0.4),
            0 0 30px rgba(115,242,255,0.2)
          `
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center p-1 sm:p-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full rounded border border-[#73F2FF]/20 flex items-center justify-center",
                        style: {
                            background: "radial-gradient(circle, rgba(115,242,255,0.05) 0%, transparent 70%)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#FF4FD8] text-lg sm:text-xl opacity-50",
                            children: "✧"
                        }, void 0, false, {
                            fileName: "[project]/components/shuffle-phase.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shuffle-phase.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/shuffle-phase.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shuffle-phase.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 rounded-lg pointer-events-none",
                animate: {
                    opacity: [
                        0,
                        0.5,
                        0
                    ]
                },
                transition: {
                    duration: duration,
                    repeat: Number.POSITIVE_INFINITY
                },
                style: {
                    background: "linear-gradient(90deg, transparent, rgba(255,79,216,0.3), rgba(115,242,255,0.3), transparent)",
                    filter: "blur(8px)"
                }
            }, void 0, false, {
                fileName: "[project]/components/shuffle-phase.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shuffle-phase.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c1 = ShuffleCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ShufflePhase");
__turbopack_context__.k.register(_c1, "ShuffleCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sphere-formation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SphereFormation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-responsive-dimensions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SphereFormation({ onCardSelect }) {
    _s();
    const [hoveredCard, setHoveredCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragRotation, setDragRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const lastTouchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"])();
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SphereFormation.useMemo[cards]": ()=>{
            const numCards = 22;
            const positions = [];
            const phi = Math.PI * (3 - Math.sqrt(5));
            for(let i = 0; i < numCards; i++){
                const y = 1 - i / (numCards - 1) * 2;
                const radius = Math.sqrt(1 - y * y);
                const theta = phi * i;
                const x = Math.cos(theta) * radius;
                const z = Math.sin(theta) * radius;
                positions.push({
                    x: x * dims.sphereRadius,
                    y: y * dims.sphereRadius,
                    z: z * dims.sphereRadius,
                    rotateX: -Math.asin(y) * (180 / Math.PI),
                    rotateY: Math.atan2(x, z) * (180 / Math.PI)
                });
            }
            return positions;
        }
    }["SphereFormation.useMemo[cards]"], [
        dims.sphereRadius
    ]);
    const handleTouchStart = (e)=>{
        if (e.touches.length === 1) {
            setIsDragging(true);
            lastTouchRef.current = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        }
    };
    const handleTouchMove = (e)=>{
        if (isDragging && lastTouchRef.current && e.touches.length === 1) {
            const deltaX = e.touches[0].clientX - lastTouchRef.current.x;
            const deltaY = e.touches[0].clientY - lastTouchRef.current.y;
            setDragRotation((prev)=>({
                    x: prev.x + deltaY * 0.3,
                    y: prev.y + deltaX * 0.3
                }));
            lastTouchRef.current = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        }
    };
    const handleTouchEnd = ()=>{
        setIsDragging(false);
        lastTouchRef.current = null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute inset-0 flex items-center justify-center z-20",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        style: {
            perspective: dims.isMobile ? "1000px" : "1500px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative",
                style: {
                    width: dims.formationSize,
                    height: dims.formationSize,
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${rotation.x + dragRotation.x}deg) rotateY(${rotation.y + dragRotation.y}deg)`
                },
                animate: {
                    rotateY: [
                        dragRotation.y,
                        dragRotation.y + 360
                    ]
                },
                transition: {
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear"
                },
                onMouseMove: (e)=>{
                    if (dims.isMobile) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
                    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
                    setRotation({
                        x,
                        y
                    });
                },
                onMouseLeave: ()=>setRotation({
                        x: 0,
                        y: 0
                    }),
                onTouchStart: handleTouchStart,
                onTouchMove: handleTouchMove,
                onTouchEnd: handleTouchEnd,
                children: cards.map((pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute left-1/2 top-1/2 cursor-pointer",
                        style: {
                            width: dims.cardWidth,
                            height: dims.cardHeight,
                            transformStyle: "preserve-3d",
                            transform: `translate(-50%, -50%) translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) rotateY(${pos.rotateY}deg) rotateX(${pos.rotateX}deg)`
                        },
                        initial: {
                            scale: 0,
                            opacity: 0
                        },
                        animate: {
                            scale: hoveredCard === i ? 1.15 : 1,
                            opacity: 1,
                            z: hoveredCard === i ? pos.z + 20 : pos.z
                        },
                        transition: {
                            scale: {
                                duration: 0.3
                            },
                            opacity: {
                                duration: 0.5,
                                delay: i * 0.05
                            }
                        },
                        onHoverStart: ()=>setHoveredCard(i),
                        onHoverEnd: ()=>setHoveredCard(null),
                        onTouchStart: ()=>setHoveredCard(i),
                        onClick: ()=>onCardSelect(i),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full rounded-lg border border-[#FF4FD8]/50 overflow-hidden transition-all duration-300",
                            style: {
                                background: "linear-gradient(135deg, #1a0a2e 0%, #0f0a20 50%, #1a0a2e 100%)",
                                boxShadow: hoveredCard === i ? "0 0 30px rgba(255,79,216,0.6), 0 0 60px rgba(115,242,255,0.4), inset 0 0 20px rgba(255,79,216,0.2)" : "0 0 15px rgba(255,79,216,0.3), 0 0 30px rgba(115,242,255,0.1)",
                                borderColor: hoveredCard === i ? "#73F2FF" : "rgba(255,79,216,0.5)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full rounded border border-[#73F2FF]/20 flex items-center justify-center",
                                    style: {
                                        background: "radial-gradient(circle, rgba(115,242,255,0.05) 0%, transparent 70%)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: "text-2xl",
                                        animate: {
                                            opacity: hoveredCard === i ? 1 : 0.5,
                                            scale: hoveredCard === i ? 1.2 : 1
                                        },
                                        style: {
                                            color: hoveredCard === i ? "#73F2FF" : "#FF4FD8",
                                            textShadow: hoveredCard === i ? "0 0 20px #73F2FF" : "none"
                                        },
                                        children: "✧"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sphere-formation.tsx",
                                        lineNumber: 158,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sphere-formation.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sphere-formation.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sphere-formation.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/components/sphere-formation.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sphere-formation.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-1/2 -translate-x-1/2 text-center px-4",
                style: {
                    bottom: dims.isMobile ? dims.spacing.lg : dims.spacing.lg * 2
                },
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#73F2FF]/70 text-xs sm:text-sm tracking-wider",
                    children: dims.isMobile ? "✧ Tap a card ✧" : "✧ Choose a card that calls to your heart ✧"
                }, void 0, false, {
                    fileName: "[project]/components/sphere-formation.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sphere-formation.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sphere-formation.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(SphereFormation, "tdiVcUlByoa0LI22UfwQk66EZTY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"]
    ];
});
_c = SphereFormation;
var _c;
__turbopack_context__.k.register(_c, "SphereFormation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ring-formation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RingFormation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-responsive-dimensions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function RingFormation({ onCardSelect }) {
    _s();
    const [hoveredCard, setHoveredCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragRotation, setDragRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastTouchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"])();
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RingFormation.useMemo[cards]": ()=>{
            const numCards = 22;
            const positions = [];
            for(let i = 0; i < numCards; i++){
                const angle = i / numCards * Math.PI * 2;
                positions.push({
                    x: Math.sin(angle) * dims.ringRadius,
                    y: Math.cos(angle) * dims.ringRadius,
                    rotateY: i / numCards * 360
                });
            }
            return positions;
        }
    }["RingFormation.useMemo[cards]"], [
        dims.ringRadius
    ]);
    const handleTouchStart = (e)=>{
        if (e.touches.length === 1) {
            setIsDragging(true);
            lastTouchRef.current = e.touches[0].clientX;
        }
    };
    const handleTouchMove = (e)=>{
        if (isDragging && lastTouchRef.current !== null && e.touches.length === 1) {
            const deltaX = e.touches[0].clientX - lastTouchRef.current;
            setDragRotation((prev)=>prev + deltaX * 0.3);
            lastTouchRef.current = e.touches[0].clientX;
        }
    };
    const handleTouchEnd = ()=>{
        setIsDragging(false);
        lastTouchRef.current = null;
    };
    const magicCircleSize = dims.isMobile ? dims.ringRadius * 0.5 : dims.ringRadius * 0.7;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute inset-0 flex items-center justify-center z-20",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        style: {
            perspective: dims.isMobile ? "1000px" : "1500px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative",
                style: {
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${dims.isMobile ? 55 : 65}deg)`
                },
                animate: {
                    y: [
                        0,
                        -10,
                        0
                    ]
                },
                transition: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                },
                onTouchStart: handleTouchStart,
                onTouchMove: handleTouchMove,
                onTouchEnd: handleTouchEnd,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "relative",
                        style: {
                            width: dims.formationSize,
                            height: dims.formationSize,
                            transformStyle: "preserve-3d"
                        },
                        animate: {
                            rotateZ: [
                                dragRotation,
                                dragRotation + 360
                            ]
                        },
                        transition: {
                            duration: 60,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear"
                        },
                        children: cards.map((pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute left-1/2 top-1/2 cursor-pointer",
                                style: {
                                    width: dims.cardWidth,
                                    height: dims.cardHeight,
                                    transformStyle: "preserve-3d",
                                    transform: `translate(-50%, -50%) translate3d(${pos.x}px, ${pos.y}px, 0) rotateX(${dims.isMobile ? -55 : -65}deg) rotateZ(${-pos.rotateY}deg)`
                                },
                                initial: {
                                    scale: 0,
                                    opacity: 0
                                },
                                animate: {
                                    scale: hoveredCard === i ? 1.2 : 1,
                                    opacity: 1,
                                    y: hoveredCard === i ? -20 : 0
                                },
                                transition: {
                                    scale: {
                                        duration: 0.3
                                    },
                                    opacity: {
                                        duration: 0.5,
                                        delay: i * 0.05
                                    },
                                    y: {
                                        duration: 0.3
                                    }
                                },
                                onHoverStart: ()=>setHoveredCard(i),
                                onHoverEnd: ()=>setHoveredCard(null),
                                onTouchStart: ()=>setHoveredCard(i),
                                onClick: ()=>onCardSelect(i),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full rounded-lg border border-[#FF4FD8]/50 overflow-hidden transition-all duration-300",
                                    style: {
                                        background: "linear-gradient(135deg, #1a0a2e 0%, #0f0a20 50%, #1a0a2e 100%)",
                                        boxShadow: hoveredCard === i ? "0 0 30px rgba(255,79,216,0.6), 0 0 60px rgba(115,242,255,0.4), inset 0 0 20px rgba(255,79,216,0.2)" : "0 0 15px rgba(255,79,216,0.3), 0 0 30px rgba(115,242,255,0.1)",
                                        borderColor: hoveredCard === i ? "#73F2FF" : "rgba(255,79,216,0.5)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full flex items-center justify-center p-1 sm:p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full rounded border border-[#73F2FF]/20 flex items-center justify-center",
                                            style: {
                                                background: "radial-gradient(circle, rgba(115,242,255,0.05) 0%, transparent 70%)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: "text-lg sm:text-xl",
                                                animate: {
                                                    opacity: hoveredCard === i ? 1 : 0.5,
                                                    scale: hoveredCard === i ? 1.2 : 1
                                                },
                                                style: {
                                                    color: hoveredCard === i ? "#73F2FF" : "#FF4FD8",
                                                    textShadow: hoveredCard === i ? "0 0 20px #73F2FF" : "none"
                                                },
                                                children: "✧"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ring-formation.tsx",
                                                lineNumber: 145,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ring-formation.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ring-formation.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ring-formation.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/ring-formation.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ring-formation.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute left-1/2 top-1/2 pointer-events-none",
                        style: {
                            width: magicCircleSize,
                            height: magicCircleSize,
                            transform: `translate(-50%, -50%) rotateX(${dims.isMobile ? -55 : -65}deg)`
                        },
                        animate: {
                            rotate: [
                                0,
                                360
                            ],
                            scale: [
                                0.95,
                                1.05,
                                0.95
                            ]
                        },
                        transition: {
                            rotate: {
                                duration: 20,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear"
                            },
                            scale: {
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut"
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 100 100",
                            className: "w-full h-full opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "ringCenterGradient",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "100%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#FF4FD8"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ring-formation.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#73F2FF"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ring-formation.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ring-formation.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ring-formation.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "50",
                                    cy: "50",
                                    r: "45",
                                    fill: "none",
                                    stroke: "url(#ringCenterGradient)",
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/ring-formation.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "50",
                                    cy: "50",
                                    r: "35",
                                    fill: "none",
                                    stroke: "#73F2FF",
                                    strokeWidth: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/ring-formation.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "50,10 61,40 95,40 68,58 79,90 50,70 21,90 32,58 5,40 39,40",
                                    fill: "none",
                                    stroke: "url(#ringCenterGradient)",
                                    strokeWidth: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/ring-formation.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ring-formation.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ring-formation.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ring-formation.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-1/2 -translate-x-1/2 text-center px-4",
                style: {
                    bottom: dims.isMobile ? dims.spacing.lg : dims.spacing.lg * 2
                },
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#73F2FF]/70 text-xs sm:text-sm tracking-wider",
                    children: dims.isMobile ? "✧ Tap a card ✧" : "✧ Choose a card that calls to your heart ✧"
                }, void 0, false, {
                    fileName: "[project]/components/ring-formation.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ring-formation.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ring-formation.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(RingFormation, "Io9lqHarf6/bZ3rWvwMqIdRx8fQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"]
    ];
});
_c = RingFormation;
var _c;
__turbopack_context__.k.register(_c, "RingFormation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/selected-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SelectedCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-responsive-dimensions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const tarotCards = [
    {
        name: "The Lovers",
        nameZh: "恋人"
    },
    {
        name: "The Star",
        nameZh: "星星"
    },
    {
        name: "The Moon",
        nameZh: "月亮"
    },
    {
        name: "The Empress",
        nameZh: "皇后"
    },
    {
        name: "Two of Cups",
        nameZh: "圣杯二"
    },
    {
        name: "Ace of Cups",
        nameZh: "圣杯王牌"
    },
    {
        name: "The Sun",
        nameZh: "太阳"
    },
    {
        name: "Temperance",
        nameZh: "节制"
    },
    {
        name: "The World",
        nameZh: "世界"
    },
    {
        name: "Wheel of Fortune",
        nameZh: "命运之轮"
    },
    {
        name: "The High Priestess",
        nameZh: "女祭司"
    },
    {
        name: "Strength",
        nameZh: "力量"
    },
    {
        name: "The Magician",
        nameZh: "魔术师"
    },
    {
        name: "Justice",
        nameZh: "正义"
    },
    {
        name: "The Fool",
        nameZh: "愚人"
    },
    {
        name: "The Hermit",
        nameZh: "隐士"
    },
    {
        name: "Knight of Cups",
        nameZh: "圣杯骑士"
    },
    {
        name: "Queen of Cups",
        nameZh: "圣杯皇后"
    },
    {
        name: "King of Cups",
        nameZh: "圣杯国王"
    },
    {
        name: "Page of Cups",
        nameZh: "圣杯侍从"
    },
    {
        name: "Ten of Cups",
        nameZh: "圣杯十"
    },
    {
        name: "Three of Cups",
        nameZh: "圣杯三"
    }
];
function SelectedCard({ cardIndex, isFlipped }) {
    _s();
    const card = tarotCards[cardIndex % tarotCards.length];
    const dims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"])();
    const selectedCardWidth = dims.cardWidth * 1.8;
    const selectedCardHeight = dims.cardHeight * 1.8;
    const offsetX = dims.isMobile ? 0 : isFlipped ? -dims.width * 0.15 : 0;
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [randomPos, setRandomPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SelectedCard.useEffect": ()=>{
            setRandomPos({
                x: (Math.random() - 0.5) * dims.width * 0.4,
                y: (Math.random() - 0.5) * dims.height * 0.3
            });
            setMounted(true);
        }
    }["SelectedCard.useEffect"], [
        dims.width,
        dims.height
    ]);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute inset-0 flex items-center justify-center z-30 pointer-events-none",
        style: {
            perspective: dims.isMobile ? "1000px" : "1500px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative",
                style: {
                    width: selectedCardWidth,
                    height: selectedCardHeight,
                    transformStyle: "preserve-3d"
                },
                initial: {
                    scale: 0.5,
                    x: randomPos.x,
                    y: randomPos.y,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    x: offsetX,
                    y: dims.isMobile && isFlipped ? -dims.height * 0.15 : 0,
                    opacity: 1,
                    rotateY: isFlipped ? 180 : 0
                },
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    rotateY: {
                        duration: 0.8,
                        ease: "easeInOut"
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 rounded-xl overflow-hidden",
                        style: {
                            backfaceVisibility: "hidden"
                        },
                        animate: {
                            y: [
                                0,
                                -5,
                                0
                            ]
                        },
                        transition: {
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full rounded-xl border-2 border-[#FF4FD8]/50 overflow-hidden",
                            style: {
                                background: "linear-gradient(135deg, #1a0a2e 0%, #0f0a20 50%, #1a0a2e 100%)",
                                boxShadow: `
                0 0 40px rgba(255,79,216,0.5),
                0 0 80px rgba(115,242,255,0.3),
                inset 0 0 40px rgba(255,79,216,0.1)
              `
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center p-3 sm:p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full rounded-lg border border-[#73F2FF]/30 flex items-center justify-center",
                                    style: {
                                        background: "radial-gradient(circle, rgba(115,242,255,0.1) 0%, transparent 70%)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 100 100",
                                        className: "w-16 h-16 sm:w-24 sm:h-24 opacity-70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: "selectedCardGradient",
                                                    x1: "0%",
                                                    y1: "0%",
                                                    x2: "100%",
                                                    y2: "100%",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "0%",
                                                            stopColor: "#FF4FD8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/selected-card.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "100%",
                                                            stopColor: "#73F2FF"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/selected-card.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/selected-card.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/selected-card.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "50",
                                                cy: "50",
                                                r: "45",
                                                fill: "none",
                                                stroke: "url(#selectedCardGradient)",
                                                strokeWidth: "1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/selected-card.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "50",
                                                cy: "50",
                                                r: "35",
                                                fill: "none",
                                                stroke: "#FF4FD8",
                                                strokeWidth: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/selected-card.tsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                points: "50,10 61,40 95,40 68,58 79,90 50,70 21,90 32,58 5,40 39,40",
                                                fill: "none",
                                                stroke: "url(#selectedCardGradient)",
                                                strokeWidth: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/selected-card.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/selected-card.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/selected-card.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/selected-card.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/selected-card.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/selected-card.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 rounded-xl overflow-hidden",
                        style: {
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)"
                        },
                        animate: {
                            y: [
                                0,
                                -5,
                                0
                            ]
                        },
                        transition: {
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full rounded-xl border-2 border-[#73F2FF]/60 overflow-hidden",
                            style: {
                                background: "linear-gradient(135deg, #1a0a2e 0%, #150820 50%, #1a0a2e 100%)",
                                boxShadow: `
                0 0 50px rgba(115,242,255,0.5),
                0 0 100px rgba(255,79,216,0.3),
                inset 0 0 40px rgba(115,242,255,0.1)
              `
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex flex-col items-center justify-center p-3 sm:p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex-1 rounded-lg mb-2 sm:mb-3 flex items-center justify-center",
                                        style: {
                                            background: `url('/--card-name--tarot-card-mystical.jpg') center/cover`,
                                            boxShadow: "inset 0 0 20px rgba(115,242,255,0.2)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full rounded-lg flex items-center justify-center backdrop-blur-[1px]",
                                            style: {
                                                background: "radial-gradient(circle, transparent 30%, rgba(15,10,32,0.3) 100%)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-4xl sm:text-6xl opacity-80",
                                                children: "♡"
                                            }, void 0, false, {
                                                fileName: "[project]/components/selected-card.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/selected-card.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/selected-card.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#73F2FF] text-sm sm:text-lg font-semibold tracking-wider",
                                                children: card.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/selected-card.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#FF4FD8] text-xs sm:text-sm mt-0.5 sm:mt-1",
                                                children: card.nameZh
                                            }, void 0, false, {
                                                fileName: "[project]/components/selected-card.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/selected-card.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/selected-card.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/selected-card.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/selected-card.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 rounded-xl pointer-events-none",
                        animate: {
                            boxShadow: [
                                "0 0 40px rgba(255,79,216,0.4), 0 0 80px rgba(115,242,255,0.2)",
                                "0 0 60px rgba(255,79,216,0.6), 0 0 120px rgba(115,242,255,0.3)",
                                "0 0 40px rgba(255,79,216,0.4), 0 0 80px rgba(115,242,255,0.2)"
                            ]
                        },
                        transition: {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/selected-card.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/selected-card.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            [
                ...Array(dims.isMobile ? 5 : 8)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute rounded-full",
                    style: {
                        width: dims.isMobile ? 6 : 8,
                        height: dims.isMobile ? 6 : 8,
                        background: i % 2 === 0 ? "#FF4FD8" : "#73F2FF",
                        boxShadow: i % 2 === 0 ? "0 0 20px #FF4FD8" : "0 0 20px #73F2FF"
                    },
                    initial: {
                        x: (Math.random() - 0.5) * dims.width * 0.3,
                        y: (Math.random() - 0.5) * dims.height * 0.2,
                        opacity: 0,
                        scale: 0
                    },
                    animate: {
                        x: offsetX,
                        y: dims.isMobile && isFlipped ? -dims.height * 0.15 : 0,
                        opacity: [
                            0,
                            1,
                            0
                        ],
                        scale: [
                            0,
                            1.5,
                            0
                        ]
                    },
                    transition: {
                        duration: 1,
                        delay: i * 0.1,
                        ease: "easeOut"
                    }
                }, i, false, {
                    fileName: "[project]/components/selected-card.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/selected-card.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(SelectedCard, "9U/gCh0EMUTxbUZ97XMOkN+9nCI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"]
    ];
});
_c = SelectedCard;
var _c;
__turbopack_context__.k.register(_c, "SelectedCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reading-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReadingPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-responsive-dimensions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ReadingPanel({ onReset }) {
    _s();
    const dims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"])();
    const panelVariants = dims.isMobile ? {
        initial: {
            y: "100%",
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: "100%",
            opacity: 0
        }
    } : {
        initial: {
            x: 100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        exit: {
            x: 100,
            opacity: 0
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `absolute z-40 pointer-events-none ${dims.isMobile ? "inset-x-0 bottom-0 flex items-end justify-center" : "inset-0 flex items-center justify-end px-4 md:px-8"}`,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: `pointer-events-auto overflow-hidden ${dims.isMobile ? "w-full rounded-t-2xl max-h-[70vh]" : "w-full max-w-md md:max-w-lg lg:max-w-xl h-[80vh] max-h-[700px] rounded-2xl"}`,
            ...panelVariants,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3
            },
            style: {
                background: "linear-gradient(135deg, rgba(26,10,46,0.95) 0%, rgba(15,10,32,0.98) 100%)",
                border: "1px solid rgba(255,79,216,0.3)",
                boxShadow: `
            0 0 40px rgba(255,79,216,0.2),
            0 0 80px rgba(115,242,255,0.1),
            inset 0 1px 0 rgba(255,255,255,0.1)
          `,
                backdropFilter: "blur(20px)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 right-0 h-1",
                    style: {
                        background: "linear-gradient(90deg, #FF4FD8, #73F2FF, #FF4FD8)"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/reading-panel.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                dims.isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center pt-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-1 rounded-full bg-[#73F2FF]/30"
                    }, void 0, false, {
                        fileName: "[project]/components/reading-panel.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/reading-panel.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full overflow-y-auto",
                    style: {
                        padding: dims.isMobile ? `${dims.spacing.md}px ${dims.spacing.md}px ${dims.spacing.lg}px` : `${dims.spacing.lg}px`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "text-center mb-4 sm:mb-6",
                            initial: {
                                y: 20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                delay: 0.5
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF]",
                                    children: "The Lovers"
                                }, void 0, false, {
                                    fileName: "[project]/components/reading-panel.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#73F2FF]/70 text-base sm:text-lg mt-1",
                                    children: "恋人"
                                }, void 0, false, {
                                    fileName: "[project]/components/reading-panel.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 sm:mt-3 inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full",
                                    style: {
                                        background: "rgba(115,242,255,0.1)",
                                        border: "1px solid rgba(115,242,255,0.3)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#73F2FF] text-xs sm:text-sm",
                                        children: "正位 · Upright"
                                    }, void 0, false, {
                                        fileName: "[project]/components/reading-panel.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/reading-panel.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reading-panel.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "w-full h-px my-4 sm:my-6",
                            initial: {
                                scaleX: 0
                            },
                            animate: {
                                scaleX: 1
                            },
                            transition: {
                                delay: 0.6
                            },
                            style: {
                                background: "linear-gradient(90deg, transparent, rgba(255,79,216,0.5), rgba(115,242,255,0.5), transparent)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/reading-panel.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "mb-4 sm:mb-6",
                            initial: {
                                y: 20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                delay: 0.7
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[#FF4FD8] text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3",
                                    children: "Love Keywords"
                                }, void 0, false, {
                                    fileName: "[project]/components/reading-panel.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5 sm:gap-2",
                                    children: [
                                        "Soul Connection",
                                        "Harmony",
                                        "Choice",
                                        "Deep Bond",
                                        "Union"
                                    ].map((keyword, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm text-[#73F2FF]",
                                            style: {
                                                background: "rgba(115,242,255,0.1)",
                                                border: "1px solid rgba(115,242,255,0.2)"
                                            },
                                            children: keyword
                                        }, keyword, false, {
                                            fileName: "[project]/components/reading-panel.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/reading-panel.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reading-panel.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "mb-4 sm:mb-6",
                            initial: {
                                y: 20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                delay: 0.8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[#FF4FD8] text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3",
                                    children: "♡ Current Love Situation"
                                }, void 0, false, {
                                    fileName: "[project]/components/reading-panel.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base",
                                    children: "The Lovers card reveals a profound moment in your romantic journey. You stand at a crossroads where your heart and mind seek alignment. A deep, meaningful connection is either present or approaching—one that transcends the superficial and touches your soul."
                                }, void 0, false, {
                                    fileName: "[project]/components/reading-panel.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reading-panel.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "w-full h-px my-4 sm:my-6",
                            initial: {
                                scaleX: 0
                            },
                            animate: {
                                scaleX: 1
                            },
                            transition: {
                                delay: 0.9
                            },
                            style: {
                                background: "linear-gradient(90deg, transparent, rgba(255,79,216,0.3), rgba(115,242,255,0.3), transparent)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/reading-panel.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "mb-4 sm:mb-6",
                            initial: {
                                y: 20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                delay: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[#FF4FD8] text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3",
                                    children: "✧ Future Trend"
                                }, void 0, false, {
                                    fileName: "[project]/components/reading-panel.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base",
                                    children: "The cosmic energies align to bring harmonious love into your path. Whether strengthening an existing bond or welcoming new love, the universe supports your heart's desires. Trust in the natural flow of attraction."
                                }, void 0, false, {
                                    fileName: "[project]/components/reading-panel.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reading-panel.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "mb-4 sm:mb-6",
                            initial: {
                                y: 20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                delay: 1.1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[#FF4FD8] text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3",
                                    children: "⟡ Guidance"
                                }, void 0, false, {
                                    fileName: "[project]/components/reading-panel.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base",
                                    children: "Honor both your heart and your values in matters of love. True partnership requires authentic self-expression and mutual respect. Take time to reflect on what you truly seek in a relationship."
                                }, void 0, false, {
                                    fileName: "[project]/components/reading-panel.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reading-panel.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl",
                            initial: {
                                y: 20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                delay: 1.3
                            },
                            style: {
                                background: "linear-gradient(135deg, rgba(255,79,216,0.1) 0%, rgba(115,242,255,0.1) 100%)",
                                border: "1px solid rgba(255,79,216,0.2)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[#73F2FF] text-xs sm:text-sm italic",
                                children: '"Love is the bridge between two souls seeking to become one light."'
                            }, void 0, false, {
                                fileName: "[project]/components/reading-panel.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/reading-panel.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "text-center pb-4",
                            initial: {
                                y: 20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                delay: 1.4
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: onReset,
                                className: "px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium tracking-wider text-sm sm:text-base",
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                style: {
                                    background: "linear-gradient(135deg, rgba(255,79,216,0.2) 0%, rgba(115,242,255,0.2) 100%)",
                                    border: "1px solid rgba(255,79,216,0.4)",
                                    color: "#FF4FD8"
                                },
                                children: "✧ New Reading ✧"
                            }, void 0, false, {
                                fileName: "[project]/components/reading-panel.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/reading-panel.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/reading-panel.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/reading-panel.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/reading-panel.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(ReadingPanel, "LX3JUpMO+WkS1McDjcpGpK2/kxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$responsive$2d$dimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveDimensions"]
    ];
});
_c = ReadingPanel;
var _c;
__turbopack_context__.k.register(_c, "ReadingPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/start-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function StartButton({ onStart }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute bottom-20 left-1/2 -translate-x-1/2 z-30",
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 20
        },
        transition: {
            duration: 0.5,
            delay: 0.3
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: onStart,
            className: "relative px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg tracking-wider overflow-hidden group whitespace-nowrap",
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: 0.95
            },
            style: {
                background: "linear-gradient(135deg, rgba(255,79,216,0.2) 0%, rgba(115,242,255,0.2) 100%)",
                border: "2px solid transparent",
                backgroundClip: "padding-box"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "absolute inset-0 rounded-full",
                    style: {
                        background: "linear-gradient(90deg, #FF4FD8, #73F2FF, #FF4FD8)",
                        backgroundSize: "200% 100%",
                        padding: "2px",
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude"
                    },
                    animate: {
                        backgroundPosition: [
                            "0% 0%",
                            "200% 0%"
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/start-button.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    style: {
                        boxShadow: "0 0 30px rgba(255,79,216,0.5), 0 0 60px rgba(115,242,255,0.3)"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/start-button.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF]",
                    children: "✧ Start Shuffle ✧"
                }, void 0, false, {
                    fileName: "[project]/components/start-button.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/start-button.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/start-button.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = StartButton;
var _c;
__turbopack_context__.k.register(_c, "StartButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/particle-field.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ParticleField({ intensity }) {
    _s();
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleField.useEffect": ()=>{
            setParticles(Array.from({
                length: 50 * intensity
            }).map({
                "ParticleField.useEffect": (_, i)=>({
                        id: i,
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        size: Math.random() * 4 + 1,
                        duration: 3 + Math.random() * 4,
                        delay: Math.random() * 2,
                        color: Math.random() > 0.5 ? "#FF4FD8" : "#73F2FF"
                    })
            }["ParticleField.useEffect"]));
        }
    }["ParticleField.useEffect"], [
        intensity
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden pointer-events-none z-5",
        children: particles.map((particle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute rounded-full",
                style: {
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: particle.size,
                    height: particle.size,
                    background: particle.color,
                    boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`
                },
                animate: {
                    y: [
                        0,
                        -30,
                        0
                    ],
                    x: [
                        0,
                        (Math.random() - 0.5) * 20,
                        0
                    ],
                    opacity: [
                        0.2,
                        0.8,
                        0.2
                    ],
                    scale: [
                        1,
                        1.5,
                        1
                    ]
                },
                transition: {
                    duration: particle.duration,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: particle.delay,
                    ease: "easeInOut"
                }
            }, particle.id, false, {
                fileName: "[project]/components/particle-field.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/particle-field.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(ParticleField, "n2oV9J0JxRF0n1eg4nXLNJcP/RY=");
_c = ParticleField;
var _c;
__turbopack_context__.k.register(_c, "ParticleField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/formation-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormationToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function FormationToggle({ current, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute top-24 left-1/2 -translate-x-1/2 z-40 flex gap-2 p-1 rounded-full",
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        },
        style: {
            background: "rgba(15,10,32,0.8)",
            border: "1px solid rgba(255,79,216,0.3)",
            backdropFilter: "blur(10px)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange("sphere"),
                className: `relative px-4 py-2 rounded-full text-sm font-medium tracking-wider transition-all duration-300 ${current === "sphere" ? "text-[#73F2FF]" : "text-[#FF4FD8]/60"}`,
                children: [
                    current === "sphere" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "absolute inset-0 rounded-full",
                        layoutId: "formationIndicator",
                        style: {
                            background: "linear-gradient(135deg, rgba(255,79,216,0.2) 0%, rgba(115,242,255,0.2) 100%)",
                            border: "1px solid rgba(115,242,255,0.5)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/formation-toggle.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative z-10",
                        children: "Sphere"
                    }, void 0, false, {
                        fileName: "[project]/components/formation-toggle.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/formation-toggle.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange("ring"),
                className: `relative px-4 py-2 rounded-full text-sm font-medium tracking-wider transition-all duration-300 ${current === "ring" ? "text-[#73F2FF]" : "text-[#FF4FD8]/60"}`,
                children: [
                    current === "ring" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "absolute inset-0 rounded-full",
                        layoutId: "formationIndicator",
                        style: {
                            background: "linear-gradient(135deg, rgba(255,79,216,0.2) 0%, rgba(115,242,255,0.2) 100%)",
                            border: "1px solid rgba(115,242,255,0.5)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/formation-toggle.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative z-10",
                        children: "Ring"
                    }, void 0, false, {
                        fileName: "[project]/components/formation-toggle.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/formation-toggle.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/formation-toggle.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = FormationToggle;
var _c;
__turbopack_context__.k.register(_c, "FormationToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/tarot-sphere.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TarotSphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$magic$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/magic-background.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$magic$2d$circle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/magic-circle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2d$stack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/card-stack.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shuffle$2d$phase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shuffle-phase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sphere$2d$formation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sphere-formation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ring$2d$formation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ring-formation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$selected$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/selected-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reading-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$start$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/start-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$particle$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/particle-field.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$formation$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/formation-toggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function TarotSphere() {
    _s();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [formationType, setFormationType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sphere");
    const [selectedCardIndex, setSelectedCardIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isFlipped, setIsFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleStartShuffle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TarotSphere.useCallback[handleStartShuffle]": ()=>{
            setPhase("shuffling");
            setTimeout({
                "TarotSphere.useCallback[handleStartShuffle]": ()=>{
                    setPhase("formation");
                }
            }["TarotSphere.useCallback[handleStartShuffle]"], 4000);
        }
    }["TarotSphere.useCallback[handleStartShuffle]"], []);
    const handleCardSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TarotSphere.useCallback[handleCardSelect]": (index)=>{
            if (phase !== "formation") return;
            setSelectedCardIndex(index);
            setPhase("selected");
            setTimeout({
                "TarotSphere.useCallback[handleCardSelect]": ()=>{
                    setIsFlipped(true);
                    setTimeout({
                        "TarotSphere.useCallback[handleCardSelect]": ()=>{
                            setPhase("reading");
                        }
                    }["TarotSphere.useCallback[handleCardSelect]"], 1500);
                }
            }["TarotSphere.useCallback[handleCardSelect]"], 1500);
        }
    }["TarotSphere.useCallback[handleCardSelect]"], [
        phase
    ]);
    const handleReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TarotSphere.useCallback[handleReset]": ()=>{
            setPhase("idle");
            setSelectedCardIndex(null);
            setIsFlipped(false);
        }
    }["TarotSphere.useCallback[handleReset]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$magic$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/tarot-sphere.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$particle$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                intensity: phase === "shuffling" ? 2 : 1
            }, void 0, false, {
                fileName: "[project]/components/tarot-sphere.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$magic$2d$circle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isActive: phase !== "idle",
                intensity: phase === "shuffling" ? "high" : phase === "reading" ? "elevated" : "normal"
            }, void 0, false, {
                fileName: "[project]/components/tarot-sphere.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: phase === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2d$stack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/tarot-sphere.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$start$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onStart: handleStartShuffle
                        }, void 0, false, {
                            fileName: "[project]/components/tarot-sphere.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/tarot-sphere.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: phase === "shuffling" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shuffle$2d$phase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/tarot-sphere.tsx",
                    lineNumber: 79,
                    columnNumber: 50
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/tarot-sphere.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: phase === "formation" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$formation$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            current: formationType,
                            onChange: setFormationType
                        }, void 0, false, {
                            fileName: "[project]/components/tarot-sphere.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        formationType === "sphere" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sphere$2d$formation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onCardSelect: handleCardSelect
                        }, void 0, false, {
                            fileName: "[project]/components/tarot-sphere.tsx",
                            lineNumber: 87,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ring$2d$formation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onCardSelect: handleCardSelect
                        }, void 0, false, {
                            fileName: "[project]/components/tarot-sphere.tsx",
                            lineNumber: 89,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/tarot-sphere.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: (phase === "selected" || phase === "reading") && selectedCardIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$selected$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    cardIndex: selectedCardIndex,
                    isFlipped: isFlipped
                }, void 0, false, {
                    fileName: "[project]/components/tarot-sphere.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/tarot-sphere.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: phase === "reading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onReset: handleReset
                }, void 0, false, {
                    fileName: "[project]/components/tarot-sphere.tsx",
                    lineNumber: 103,
                    columnNumber: 48
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/tarot-sphere.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-8 left-1/2 -translate-x-1/2 z-50 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl md:text-4xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] via-[#73F2FF] to-[#FF4FD8] drop-shadow-[0_0_30px_rgba(255,79,216,0.5)]",
                        children: "AI Love Tarot"
                    }, void 0, false, {
                        fileName: "[project]/components/tarot-sphere.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#73F2FF]/70 mt-2 tracking-widest uppercase",
                        children: "Divine Your Heart's Path"
                    }, void 0, false, {
                        fileName: "[project]/components/tarot-sphere.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tarot-sphere.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tarot-sphere.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(TarotSphere, "GIvKC1OZH4lKFQbBYxKKIXVGRz4=");
_c = TarotSphere;
var _c;
__turbopack_context__.k.register(_c, "TarotSphere");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_c6d8290f._.js.map