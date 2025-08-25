(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/DraggableContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>DraggableContainer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
// Interactive Terminal Component
const InteractiveTerminal = ()=>{
    _s();
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'echo "Welcome!"',
        'Welcome!',
        'ls',
        'Desktop  Documents  Downloads  Music  Pictures'
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const outputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-scroll to bottom when history changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveTerminal.useEffect": ()=>{
            if (outputRef.current) {
                outputRef.current.scrollTop = outputRef.current.scrollHeight;
            }
        }
    }["InteractiveTerminal.useEffect"], [
        history
    ]);
    const handleTerminalClick = ()=>{
        var _inputRef_current;
        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
    };
    const handleCommand = (cmd)=>{
        let output = '';
        switch(cmd.trim().toLowerCase()){
            case 'about':
                output = 'Hi, alsdjflasjdfajsdv \nCreated by digitaldina.';
                break;
            case 'help':
                output = 'Available commands: about, help, clear, ls, echo';
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'ls':
                output = 'Desktop  Documents  Downloads  Music  Pictures';
                break;
            default:
                if (cmd.startsWith('echo ')) {
                    output = cmd.slice(5);
                } else if (cmd.trim() === '') {
                    output = '';
                } else {
                    output = "Command not found: ".concat(cmd);
                }
        }
        setHistory((prev)=>[
                ...prev,
                "$ ".concat(cmd),
                ...output ? [
                    output
                ] : []
            ]);
    };
    const handleInput = (e)=>{
        setInput(e.target.value);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "retro-terminal shadow-lg",
        style: {
            width: '100%',
            height: '100%',
            background: 'linear-gradient(180deg, #222 90%, #333 100%)',
            border: '4px solid #e7d7b1',
            borderRadius: 8,
            boxShadow: '0 0 24px #e7d7b1',
            color: '#e7d7b1',
            fontFamily: 'monospace',
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            userSelect: 'none',
            overflow: 'hidden',
            cursor: 'text'
        },
        tabIndex: 0,
        onClick: handleTerminalClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontWeight: 'bold',
                    marginBottom: '0.5vw',
                    letterSpacing: '0.15vw'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#e7d7b1',
                            fontSize: 'clamp(12px, 1vw, 16px)'
                        },
                        children: "┌─[retro@os]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableContainer.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#fff',
                            fontSize: 'clamp(12px, 1vw, 16px)'
                        },
                        children: "─[~]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableContainer.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DraggableContainer.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: outputRef,
                className: "hide-scrollbar",
                style: {
                    flex: 1,
                    width: '100%',
                    overflowY: 'auto',
                    fontSize: 'clamp(12px, 1vw, 16px)',
                    whiteSpace: 'pre-line',
                    marginBottom: '0.25vw'
                },
                children: history.map((line, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: line
                    }, idx, false, {
                        fileName: "[project]/src/components/DraggableContainer.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/DraggableContainer.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#e7d7b1',
                            marginRight: '0.25vw',
                            fontSize: 'clamp(12px, 1vw, 16px)'
                        },
                        children: "$"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableContainer.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        value: input,
                        onChange: handleInput,
                        onKeyDown: handleKeyDown,
                        style: {
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            color: '#e7d7b1',
                            fontFamily: 'monospace',
                            fontSize: 'clamp(12px, 1vw, 16px)',
                            flex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableContainer.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DraggableContainer.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DraggableContainer.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InteractiveTerminal, "RpKUtuYCZf3glY7S0OI6szIGo7g=");
_c = InteractiveTerminal;
function DraggableContainer(param) {
    let { backgroundImage, containerWidth = 'fullscreen', containerHeight = 'fullscreen', className = '' } = param;
    _s1();
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 800,
        height: 600
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DraggableContainer.useEffect": ()=>{
            const updateDimensions = {
                "DraggableContainer.useEffect.updateDimensions": ()=>{
                    const padding = 40;
                    setDimensions({
                        width: window.innerWidth - padding,
                        height: window.innerHeight - padding
                    });
                }
            }["DraggableContainer.useEffect.updateDimensions"];
            updateDimensions();
            window.addEventListener('resize', updateDimensions);
            return ({
                "DraggableContainer.useEffect": ()=>window.removeEventListener('resize', updateDimensions)
            })["DraggableContainer.useEffect"];
        }
    }["DraggableContainer.useEffect"], []);
    const actualWidth = containerWidth === 'fullscreen' ? dimensions.width : containerWidth;
    const actualHeight = containerHeight === 'fullscreen' ? dimensions.height : containerHeight;
    const helloKittyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const froggyMusicRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const StickyNoteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const polaroidRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const terminalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getBounds = (itemWidth, itemHeight)=>({
            left: 0,
            top: 0,
            right: actualWidth - itemWidth,
            bottom: actualHeight - itemHeight
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative ".concat(className),
        style: {
            width: actualWidth,
            height: actualHeight
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: backgroundImage,
                    alt: "Computer Desktop",
                    fill: true,
                    className: "object-contain",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/DraggableContainer.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/DraggableContainer.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: terminalRef,
                        className: "absolute retro-terminal-window",
                        style: {
                            zIndex: 999,
                            left: '37%',
                            top: '15%',
                            width: '23vw',
                            minWidth: 220,
                            height: '16vw',
                            minHeight: 220,
                            pointerEvents: 'auto'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InteractiveTerminal, {}, void 0, false, {
                            fileName: "[project]/src/components/DraggableContainer.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableContainer.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        nodeRef: StickyNoteRef,
                        bounds: getBounds(80, 80),
                        defaultPosition: {
                            x: 150,
                            y: 90
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: StickyNoteRef,
                            className: "absolute cursor-move",
                            style: {
                                zIndex: 1001
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/stickyNote.png",
                                alt: "Sticky Note",
                                width: 80,
                                height: 80,
                                className: "select-none drop-shadow-lg",
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableContainer.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DraggableContainer.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableContainer.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        nodeRef: helloKittyRef,
                        bounds: getBounds(80, 80),
                        defaultPosition: {
                            x: 50,
                            y: 50
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: helloKittyRef,
                            className: "absolute cursor-move",
                            style: {
                                zIndex: 1001
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/helloKitty.png",
                                alt: "Hello Kitty",
                                width: 80,
                                height: 80,
                                className: "select-none drop-shadow-lg",
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableContainer.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DraggableContainer.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableContainer.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        nodeRef: froggyMusicRef,
                        bounds: getBounds(70, 70),
                        defaultPosition: {
                            x: 200,
                            y: 100
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: froggyMusicRef,
                            className: "absolute cursor-move",
                            style: {
                                zIndex: 1001
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/froggyMusic.png",
                                alt: "Froggy Music",
                                width: 70,
                                height: 70,
                                className: "select-none drop-shadow-lg",
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableContainer.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DraggableContainer.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableContainer.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        nodeRef: polaroidRef,
                        bounds: getBounds(90, 90),
                        defaultPosition: {
                            x: 100,
                            y: 250
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: polaroidRef,
                            className: "absolute cursor-move",
                            style: {
                                zIndex: 1001
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/polaroid.png",
                                alt: "Polaroid",
                                width: 90,
                                height: 90,
                                className: "select-none drop-shadow-lg",
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableContainer.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DraggableContainer.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DraggableContainer.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DraggableContainer.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DraggableContainer.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s1(DraggableContainer, "3A5WQGjAjbfdaclwX5qkjrP9M1A=");
_c1 = DraggableContainer;
var _c, _c1;
__turbopack_context__.k.register(_c, "InteractiveTerminal");
__turbopack_context__.k.register(_c1, "DraggableContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_DraggableContainer_tsx_f5e6dd15._.js.map