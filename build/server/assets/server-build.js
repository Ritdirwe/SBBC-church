import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { PassThrough } from 'node:stream';
import { createReadableStreamFromReadable } from '@react-router/node';
import { ServerRouter, useNavigate, useLocation, Meta, Links, ScrollRestoration, Scripts, Outlet, useRouteError, useAsyncError } from 'react-router';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import * as React from 'react';
import { forwardRef, useEffect, createElement, useRef, useState, Component, useCallback, useMemo } from 'react';
import { useButton } from '@react-aria/button';
import { toPng } from 'html-to-image';
import { f as fetch_default } from './index-Cs2eqT7Y.js';
import { SessionProvider, signIn, signOut, useSession } from '@hono/auth-js/react';
import { serializeError } from 'serialize-error';
import { toast, Toaster } from 'sonner';
import { create } from 'zustand';
import { useIdleTimer } from 'react-idle-timer';
import _JSXStyle from 'styled-jsx/style.js';
import { QueryClientProvider, QueryClient, useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { ChevronLeft, ArrowUp, X, Menu, ArrowRight, ChevronRight, UsersRound, HeartHandshake, Building2, Church, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Music, Heart, Play, Users, Share2, Link, ChevronDown, Check, Target, ShieldCheck, Quote, Megaphone, Globe, Calendar, Clock, EyeOff, Eye, TrendingUp, Activity, FileText, GraduationCap, Search, Settings, CheckCircle, Banknote, PieChart, BarChart3, Save, ExternalLink, Plus, DollarSign, CheckCircle2, Code, Trophy, BookOpen, Send, BadgeDollarSign, PlayCircle, Dumbbell, Shield, Medal, Flag, Sparkles, Paperclip, Award, ClipboardList, Microscope, FlaskConical, Lightbulb, Wallet, School, Landmark, HandCoins, Rocket, LineChart as LineChart$1, Factory, BriefcaseBusiness, Gift, Globe2, ArrowUpRight, Coins, Star, Copy, Tv, Radio, Wifi, UserCircle, Video, Building, Mic2, Paintbrush2, Users2, Flame } from 'lucide-react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, PieChart as PieChart$1, Pie, Cell, BarChart, Bar, AreaChart, Area, RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';
import { useParams } from 'react-router-dom';
import fg from 'fast-glob';
import 'node:async_hooks';
import 'node:console';
import '@auth/core';
import '@auth/core/providers/credentials';
import '@hono/auth-js';
import '@neondatabase/serverless';
import 'argon2';
import 'hono';
import 'hono/context-storage';
import 'hono/cors';
import 'hono/proxy';
import 'hono/body-limit';
import 'hono/request-id';
import 'hono/factory';
import '@hono/node-server';
import '@hono/node-server/serve-static';
import 'hono/logger';
import 'ws';
import '@auth/core/jwt';
import 'node:fs/promises';
import 'node:path';

const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}

const entryServer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: 'Module' }));

const JSX_RENDER_ID_ATTRIBUTE_NAME = "data-render-id";
function buildGridPlaceholder(w, h) {
  const size = Math.max(w, h);
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 895 895" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="895" height="895" fill="#E9E7E7"/>
<g>
<line x1="447.505" y1="-23" x2="447.505" y2="901" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="447.505" x2="5.66443" y2="447.505" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="278.068" x2="5.66443" y2="278.068" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="57.1505" x2="5.66443" y2="57.1504" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="61.8051" y1="883.671" x2="61.8051" y2="6.10572e-05" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="282.495" y1="907" x2="282.495" y2="-30" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="611.495" y1="907" x2="611.495" y2="-30" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="832.185" y1="883.671" x2="832.185" y2="6.10572e-05" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="827.53" x2="5.66443" y2="827.53" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="606.613" x2="5.66443" y2="606.612" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="4.3568" y1="4.6428" x2="889.357" y2="888.643" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="-0.3568" y1="894.643" x2="894.643" y2="0.642772" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="447.5" cy="441.5" r="163.995" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="447.911" cy="447.911" r="237.407" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="448" cy="442" r="384.495" stroke="#C0C0C0" stroke-width="1.00975"/>
</g>
</svg>
`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
function useOptionalRef(ref) {
  const fallbackRef = useRef(null);
  if (ref && "instance" in ref) return fallbackRef;
  return ref ?? fallbackRef;
}
const CreatePolymorphicComponent = /* @__PURE__ */ forwardRef(
  // @ts-ignore
  function CreatePolymorphicComponentRender({
    as,
    children,
    renderId,
    onError,
    ...rest
  }, forwardedRef) {
    const props = as === "img" ? {
      ...rest,
      // keep the original type of onError for <img>
      onError: (e) => {
        if (typeof onError === "function") onError(e);
        const img = e.currentTarget;
        const {
          width,
          height
        } = img.getBoundingClientRect();
        img.dataset.hasFallback = "1";
        img.onerror = null;
        img.src = buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
        img.style.objectFit = "cover";
      }
    } : rest;
    const ref = useOptionalRef(forwardedRef);
    useEffect(() => {
      const el = ref && "current" in ref ? ref.current : null;
      if (!el) return;
      if (as !== "img") {
        const placeholder = () => {
          const {
            width,
            height
          } = el.getBoundingClientRect();
          return buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
        };
        const applyBgFallback = () => {
          el.dataset.hasFallback = "1";
          el.style.backgroundImage = `url("${placeholder()}")`;
          el.style.backgroundSize = "cover";
        };
        const probeBg = () => {
          const bg = getComputedStyle(el).backgroundImage;
          const match = /url\(["']?(.+?)["']?\)/.exec(bg);
          const src = match?.[1];
          if (!src) return;
          const probe = new Image();
          probe.onerror = applyBgFallback;
          probe.src = src;
        };
        probeBg();
        const ro2 = new ResizeObserver(([entry]) => {
          if (!el.dataset.hasFallback) return;
          const {
            width,
            height
          } = entry.contentRect;
          el.style.backgroundImage = `url("${buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128)}")`;
        });
        ro2.observe(el);
        const mo = new MutationObserver(probeBg);
        mo.observe(el, {
          attributes: true,
          attributeFilter: ["style", "class"]
        });
        return () => {
          ro2.disconnect();
          mo.disconnect();
        };
      }
      if (!el.dataset.hasFallback) return;
      const ro = new ResizeObserver(([entry]) => {
        const {
          width,
          height
        } = entry.contentRect;
        el.src = buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
      });
      ro.observe(el);
      return () => ro.disconnect();
    }, [as, ref]);
    return /* @__PURE__ */ createElement(as, Object.assign({}, props, {
      ref,
      ...renderId ? {
        [JSX_RENDER_ID_ATTRIBUTE_NAME]: renderId
      } : void 0
    }), children);
  }
);
var PolymorphicComponent_default = CreatePolymorphicComponent;

function LoadFonts() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" }) });
}

const useSandboxStore = create((set, get) => ({
  status: "idle",
  isGenerating: false,
  hasError: false,
  setStatus: (status) => set({
    status,
    isGenerating: status === "codegen-started" || status === "codegen-generating",
    hasError: status === "codegen-error"
  }),
  startCodeGen: () => get().setStatus("codegen-started"),
  setCodeGenGenerating: () => get().setStatus("codegen-generating"),
  completeCodeGen: () => get().setStatus("codegen-complete"),
  errorCodeGen: () => get().setStatus("codegen-error"),
  stopCodeGen: () => get().setStatus("codegen-stopped"),
  resetToIdle: () => get().setStatus("idle")
}));

function HotReloadIndicator() {
  const {
    status: sandboxStatus
  } = useSandboxStore();
  useEffect(() => {
    return;
  }, []);
  useEffect(() => {
    const toastStyle = {
      padding: "16px",
      background: "#18191B",
      border: "1px solid #2C2D2F",
      color: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      width: "var(--width)",
      fontSize: "13px",
      display: "flex",
      alignItems: "center",
      gap: "6px"
    };
    switch (sandboxStatus) {
      case "codegen-started":
      case "codegen-generating":
        toast.custom(() => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          style: {
            ...toastStyle,
            padding: "10px"
          },
          renderId: "render-b246900a",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            src: "https://www.createanything.com/images/anything-logo-loading-state-white.gif",
            alt: "loading",
            className: "w-8 h-8",
            renderId: "render-541f5f3e",
            as: "img"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-daf92ddd",
            as: "span",
            children: "Updating"
          })]
        }), {
          id: "sandbox-codegen",
          duration: 3e3
        });
        break;
      case "codegen-complete":
        toast.custom(() => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          style: toastStyle,
          renderId: "render-7255584e",
          as: "div",
          children: [/* @__PURE__ */ jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
            children: [/* @__PURE__ */ jsx("title", {
              children: "Success"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
              clipRule: "evenodd",
              renderId: "render-8f132cfe",
              as: "path"
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-8a7d163e",
            as: "span",
            children: "Updated successfully"
          })]
        }), {
          id: "sandbox-codegen",
          duration: 3e3
        });
        break;
      case "codegen-error":
        toast.custom(() => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          style: toastStyle,
          renderId: "render-e5ad1fe7",
          as: "div",
          children: [/* @__PURE__ */ jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            height: "20",
            width: "20",
            children: [/* @__PURE__ */ jsx("title", {
              children: "Error"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              fillRule: "evenodd",
              d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
              clipRule: "evenodd",
              renderId: "render-e4ccf64f",
              as: "path"
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-928c87d9",
            as: "span",
            children: "Update failed"
          })]
        }), {
          id: "sandbox-codegen",
          duration: 5e3
        });
        break;
    }
    return () => {
    };
  }, [sandboxStatus]);
  return null;
}

function useDevServerHeartbeat() {
  useIdleTimer({
    throttle: 6e4 * 3,
    timeout: 6e4,
    onAction: () => {
      fetch("/", {
        method: "GET"
      }).catch((error) => {
      });
    }
  });
}

const links = () => [];
if (globalThis.window && globalThis.window !== void 0) {
  globalThis.window.fetch = fetch_default;
}
const LoadFontsSSR = LoadFonts ;
function SharedErrorBoundary({
  isOpen,
  children
}) {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: `fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`,
    renderId: "render-68d2b59a",
    as: "div",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "bg-[#18191B] text-[#F2F2F2] rounded-lg p-4 max-w-md w-full mx-4 shadow-lg",
      renderId: "render-5ff4cbbf",
      as: "div",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "flex items-start gap-3",
        renderId: "render-a3eb0775",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "flex-shrink-0",
          renderId: "render-ca8cf862",
          as: "div",
          children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "w-8 h-8 bg-[#F2F2F2] rounded-full flex items-center justify-center",
            renderId: "render-db8d6dc5",
            as: "div",
            children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-black text-[1.125rem] leading-none",
              renderId: "render-e6b41bba",
              as: "span",
              children: "!"
            })
          })
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex flex-col gap-2 flex-1",
          renderId: "render-967916c2",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex flex-col gap-1",
            renderId: "render-c48bb9c0",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "font-light text-[#F2F2F2] text-sm",
              renderId: "render-0717675d",
              as: "p",
              children: "App Error Detected"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-[#959697] text-sm font-light",
              renderId: "render-ff580183",
              as: "p",
              children: "It looks like an error occurred while trying to use your app."
            })]
          }), children]
        })]
      })
    })
  });
}
function ErrorBoundary({
  error
}) {
  return /* @__PURE__ */ jsx(SharedErrorBoundary, {
    isOpen: true
  });
}
function InternalErrorBoundary({
  error: errorArg
}) {
  const routeError = useRouteError();
  const asyncError = useAsyncError();
  const error = errorArg ?? asyncError ?? routeError;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const animateTimer = setTimeout(() => setIsOpen(true), 100);
    return () => clearTimeout(animateTimer);
  }, []);
  const {
    buttonProps: showLogsButtonProps
  } = useButton({
    onPress: useCallback(() => {
      window.parent.postMessage({
        type: "sandbox:web:show-logs"
      }, "*");
    }, [])
  }, useRef(null));
  const {
    buttonProps: fixButtonProps
  } = useButton({
    onPress: useCallback(() => {
      window.parent.postMessage({
        type: "sandbox:web:fix",
        error: serializeError(error)
      }, "*");
      setIsOpen(false);
    }, [error]),
    isDisabled: !error
  }, useRef(null));
  const {
    buttonProps: copyButtonProps
  } = useButton({
    onPress: useCallback(() => {
      navigator.clipboard.writeText(JSON.stringify(serializeError(error)));
    }, [error])
  }, useRef(null));
  function isInIframe() {
    try {
      return window.parent !== window;
    } catch {
      return true;
    }
  }
  return /* @__PURE__ */ jsx(SharedErrorBoundary, {
    isOpen,
    children: isInIframe() ? /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "flex gap-2",
      renderId: "render-7fff40d4",
      as: "div",
      children: [!!error && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#f9f9f9] hover:bg-[#dbdbdb] active:bg-[#c4c4c4] border-[#c4c4c4] text-[#18191B] text-sm px-[8px] py-[4px] cursor-pointer",
        type: "button",
        ...fixButtonProps,
        renderId: "render-63e9eb59",
        as: "button",
        children: "Try to fix"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white text-sm px-[8px] py-[4px]",
        type: "button",
        ...showLogsButtonProps,
        renderId: "render-a9b1908e",
        as: "button",
        children: "Show logs"
      })]
    }) : /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white text-sm px-[8px] py-[4px] w-fit",
      type: "button",
      ...copyButtonProps,
      renderId: "render-a3cc1aa9",
      as: "button",
      children: "Copy error"
    })
  });
}
class ErrorBoundaryWrapper extends Component {
  state = {
    hasError: false,
    error: null
  };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsx(InternalErrorBoundary, {
        error: this.state.error,
        params: {}
      });
    }
    return this.props.children;
  }
}
function LoaderWrapper({
  loader
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: loader()
  });
}
const ClientOnly = ({
  loader
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return /* @__PURE__ */ jsx(ErrorBoundaryWrapper, {
    children: /* @__PURE__ */ jsx(LoaderWrapper, {
      loader
    })
  });
};
function useHmrConnection() {
  const [connected, setConnected] = useState(() => false);
  useEffect(() => {
    return;
  }, []);
  return connected;
}
const healthyResponseType = "sandbox:web:healthcheck:response";
const useHandshakeParent = () => {
  const isHmrConnected = useHmrConnection();
  useEffect(() => {
    const healthyResponse = {
      type: healthyResponseType,
      healthy: isHmrConnected
    };
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:web:healthcheck") {
        window.parent.postMessage(healthyResponse, "*");
      }
    };
    window.addEventListener("message", handleMessage);
    window.parent.postMessage(healthyResponse, "*");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [isHmrConnected]);
};
const useCodeGen = () => {
  const {
    startCodeGen,
    setCodeGenGenerating,
    completeCodeGen,
    errorCodeGen,
    stopCodeGen
  } = useSandboxStore();
  useEffect(() => {
    const handleMessage = (event) => {
      const {
        type
      } = event.data;
      switch (type) {
        case "sandbox:web:codegen:started":
          startCodeGen();
          break;
        case "sandbox:web:codegen:generating":
          setCodeGenGenerating();
          break;
        case "sandbox:web:codegen:complete":
          completeCodeGen();
          break;
        case "sandbox:web:codegen:error":
          errorCodeGen();
          break;
        case "sandbox:web:codegen:stopped":
          stopCodeGen();
          break;
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [startCodeGen, setCodeGenGenerating, completeCodeGen, errorCodeGen, stopCodeGen]);
};
const useRefresh = () => {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:web:refresh:request") {
        setTimeout(() => {
          window.location.reload();
        }, 1e3);
        window.parent.postMessage({
          type: "sandbox:web:refresh:complete"
        }, "*");
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
};
const waitForScreenshotReady = async () => {
  const images = Array.from(document.images);
  await Promise.all([
    // make sure custom fonts are loaded
    "fonts" in document ? document.fonts.ready : Promise.resolve(),
    ...images.map((img) => new Promise((resolve) => {
      img.crossOrigin = "anonymous";
      if (img.complete) {
        resolve(true);
        return;
      }
      img.onload = () => resolve(true);
      img.onerror = () => resolve(true);
    }))
  ]);
  await new Promise((resolve) => setTimeout(resolve, 250));
};
const useHandleScreenshotRequest = () => {
  useEffect(() => {
    const handleMessage = async (event) => {
      if (event.data.type === "sandbox:web:screenshot:request") {
        try {
          await waitForScreenshotReady();
          const width = window.innerWidth;
          const aspectRatio = 16 / 9;
          const height = Math.floor(width / aspectRatio);
          const dataUrl = await toPng(document.body, {
            cacheBust: true,
            skipFonts: false,
            width,
            height,
            style: {
              // force snapshot sizing
              width: `${width}px`,
              height: `${height}px`,
              margin: "0"
            }
          });
          window.parent.postMessage({
            type: "sandbox:web:screenshot:response",
            dataUrl
          }, "*");
        } catch (error) {
          window.parent.postMessage({
            type: "sandbox:web:screenshot:error",
            error: error instanceof Error ? error.message : String(error)
          }, "*");
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
};
function Layout({
  children
}) {
  useHandshakeParent();
  useCodeGen();
  useRefresh();
  useHandleScreenshotRequest();
  useDevServerHeartbeat();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.pathname;
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:navigation") {
        navigate(event.data.pathname);
      }
    };
    window.addEventListener("message", handleMessage);
    window.parent.postMessage({
      type: "sandbox:web:ready"
    }, "*");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);
  useEffect(() => {
    if (pathname) {
      window.parent.postMessage({
        type: "sandbox:web:navigation",
        pathname
      }, "*");
    }
  }, [pathname]);
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {}), /* @__PURE__ */ jsx("script", {
        type: "module",
        src: "/src/__create/dev-error-overlay.js"
      }), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: "/src/__create/favicon.png"
      }), LoadFontsSSR ? /* @__PURE__ */ jsx(LoadFontsSSR, {}) : null]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx(ClientOnly, {
        loader: () => children
      }), /* @__PURE__ */ jsx(HotReloadIndicator, {}), /* @__PURE__ */ jsx(Toaster, {
        position: "bottom-right"
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {}), /* @__PURE__ */ jsx("script", {
        src: "https://kit.fontawesome.com/2c15cc0cc7.js",
        crossOrigin: "anonymous",
        async: true
      })]
    })]
  });
}
function App() {
  return /* @__PURE__ */ jsx(SessionProvider, {
    children: /* @__PURE__ */ jsx(Outlet, {})
  });
}

const route0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ClientOnly,
  ErrorBoundary,
  Layout,
  default: App,
  links,
  useHandleScreenshotRequest,
  useHmrConnection
}, Symbol.toStringTag, { value: 'Module' }));

function BackNavButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const updateVisibility = () => {
      if (typeof window === "undefined") return;
      const path = window.location.pathname;
      const notHome = path !== "/";
      const canGoBack = window.history.length > 1;
      setShow(notHome || canGoBack);
    };
    updateVisibility();
    window.addEventListener("popstate", updateVisibility);
    return () => window.removeEventListener("popstate", updateVisibility);
  }, []);
  const handleBack = () => {
    if (typeof window === "undefined") return;
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };
  if (!show) return null;
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    onClick: handleBack,
    "aria-label": "Go back",
    className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-[55] w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95",
    style: {
      background: "rgba(0,0,0,0.45)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      border: "0.5px solid rgba(255,255,255,0.2)",
      boxShadow: "0 4px 14px rgba(0,0,0,0.25)"
    },
    renderId: "render-aeddcc5c",
    as: "button",
    children: /* @__PURE__ */ jsx(ChevronLeft, {
      className: "w-6 h-6 text-white"
    })
  });
}

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      try {
        setVisible(window.scrollY > 200);
      } catch (e) {
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleClick = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  };
  const style = {
    opacity: visible ? 1 : 0,
    transform: `translateY(${visible ? 0 : 8}px)`,
    transition: "opacity 180ms ease, transform 180ms ease",
    pointerEvents: visible ? "auto" : "none"
  };
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "fixed right-6 z-40 flex items-center gap-2",
    style: {
      bottom: "88px",
      ...style
    },
    "aria-hidden": !visible,
    renderId: "render-af16d0fc",
    as: "div",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      onClick: handleClick,
      "aria-label": "Scroll to top",
      className: "w-10 h-10 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C29C1A]/50 hover:-translate-y-0.5 hover:scale-105",
      style: {
        background: "linear-gradient(90deg, #F4D03F, #C29C1A)"
      },
      renderId: "render-626f7698",
      as: "button",
      children: /* @__PURE__ */ jsx(ArrowUp, {
        className: "w-5 h-5 mx-auto text-black"
      })
    })
  });
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1e3 * 60 * 5,
      // 5 minutes
      cacheTime: 1e3 * 60 * 30,
      // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});
function RootLayout({
  children
}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const isProd = process.env.NODE_ENV === "production";
  useEffect(() => {
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }
    const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);
    const smoothScrollTo = (targetY, duration = 360) => {
      const startY = window.scrollY || window.pageYOffset;
      const diff = targetY - startY;
      if (Math.abs(diff) < 1) return;
      const startTime = performance.now();
      const step = (now) => {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = easeOutQuint(t);
        window.scrollTo({
          top: startY + diff * eased,
          left: 0
        });
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const header = document.querySelector("header");
      const headerOffset = header ? Math.min(header.offsetHeight, 96) : 72;
      const rect = el.getBoundingClientRect();
      const targetY = (window.scrollY || window.pageYOffset) + rect.top - headerOffset;
      smoothScrollTo(targetY, 360);
    };
    const onKeyDown = (e) => {
      const tag = document.activeElement?.tagName?.toLowerCase();
      const isTyping = tag === "input" || tag === "textarea" || document.activeElement?.isContentEditable;
      if (isTyping) return;
      const key = e.key;
      const viewport = window.innerHeight;
      const currentY = window.scrollY || window.pageYOffset;
      if (key === "ArrowDown") {
        e.preventDefault();
        smoothScrollTo(currentY + 80, 240);
      } else if (key === "ArrowUp") {
        e.preventDefault();
        smoothScrollTo(currentY - 80, 240);
      } else if (key === "PageDown") {
        e.preventDefault();
        smoothScrollTo(currentY + Math.floor(viewport * 0.85), 380);
      } else if (key === "PageUp") {
        e.preventDefault();
        smoothScrollTo(currentY - Math.floor(viewport * 0.85), 380);
      } else if (key === " ") {
        e.preventDefault();
        const delta = Math.floor(viewport * 0.85) * (e.shiftKey ? -1 : 1);
        smoothScrollTo(currentY + delta, 380);
      } else if (key === "Home") {
        e.preventDefault();
        smoothScrollTo(0, 420);
      } else if (key === "End") {
        e.preventDefault();
        const maxY = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - viewport;
        smoothScrollTo(maxY, 420);
      }
    };
    document.addEventListener("click", onAnchorClick, {
      passive: false
    });
    document.addEventListener("keydown", onKeyDown, {
      passive: false
    });
    return () => {
      document.removeEventListener("click", onAnchorClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight || 1;
      setScrollProgress(Math.min(100, Math.max(0, scrollTop / max * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, {
      threshold: 0.12
    });
    const els = document.querySelectorAll("[data-animate]");
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs(QueryClientProvider, {
    client: queryClient,
    children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      style: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
      },
      className: "jsx-3281039943 min-h-screen bg-white text-black",
      renderId: "render-7adb008b",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        href: "#main-content",
        className: "jsx-3281039943 fixed left-3 top-3 z-[100] -translate-y-16 focus:translate-y-0 transition-transform bg-black text-white px-3 py-2 rounded-md",
        renderId: "render-af64c0e8",
        as: "a",
        children: "Skip to content"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        "aria-hidden": true,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          height: 3,
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #F4D03F, #C29C1A)",
          boxShadow: "0 0 8px rgba(194, 156, 26, 0.6)",
          zIndex: 60,
          transition: "width 120ms linear"
        },
        className: "jsx-3281039943",
        renderId: "render-555a1612",
        as: "div"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        id: "main-content",
        className: "jsx-3281039943",
        renderId: "render-2921e181",
        as: "main",
        children
      }), /* @__PURE__ */ jsx(BackNavButton, {})]
    }), /* @__PURE__ */ jsx(ScrollTopButton, {}), /* @__PURE__ */ jsx(Toaster, {
      richColors: true,
      position: "top-center"
    }), isProd && GA_MEASUREMENT_ID ? /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx("script", {
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
        className: "jsx-3281039943"
      }), /* @__PURE__ */ jsx("script", {
        className: "jsx-3281039943",
        children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
          `
      })]
    }) : null, /* @__PURE__ */ jsx(_JSXStyle, {
      id: "3281039943",
      children: ["[data-animate]{opacity:0;-webkit-transform:translateY(14px);-ms-transform:translateY(14px);transform:translateY(14px);}", ".in-view{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-transition:opacity 500ms ease,-webkit-transform 600ms cubic-bezier(0.22,1,0.36,1);-webkit-transition:opacity 500ms ease,transform 600ms cubic-bezier(0.22,1,0.36,1);transition:opacity 500ms ease,transform 600ms cubic-bezier(0.22,1,0.36,1);}"]
    })]
  });
}

function ChurchHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(0);
  const [openNonce, setOpenNonce] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 120, 1);
      setShrink(progress);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      setOpenNonce((n) => n + 1);
    }
  }, [isMenuOpen]);
  const navItems = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "The Vision",
      href: "/vision"
    },
    {
      name: "Institutions",
      href: "/education"
    },
    {
      name: "Operations",
      href: "/pastorium"
    },
    {
      name: "Finance & Investment",
      href: "/finance"
    },
    {
      name: "Lawson Foundation",
      href: "/foundation"
    },
    // Rename "News" to "Stream Live" (uppercase styling is applied via className)
    {
      name: "Stream Live",
      href: "/news#live"
    }
  ];
  const padY = 20 - shrink * 8;
  const logoSize = 55 - shrink * 17;
  const titleSize = 28 - shrink * 6;
  const taglineSize = 12 - shrink * 2;
  const navSize = 17 - shrink * 1;
  const headerOpacity = 1 - shrink;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      style: {
        opacity: headerOpacity,
        pointerEvents: headerOpacity === 0 ? "none" : "auto"
      },
      className: "jsx-1133597644 fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out",
      renderId: "render-9c8383cc",
      as: "header",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        style: {
          paddingTop: padY,
          paddingBottom: padY
        },
        className: "jsx-1133597644 px-6 sm:px-8",
        renderId: "render-4a9c6525",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1133597644 flex items-center justify-between max-w-7xl mx-auto transition-all duration-300",
          renderId: "render-0cebc469",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1133597644 flex items-center gap-3",
            renderId: "render-5a801e20",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              style: {
                width: logoSize,
                height: logoSize,
                boxShadow: "0 0 20px rgba(0,0,0,0.08)",
                transition: "width 300ms ease, height 300ms ease"
              },
              className: "jsx-1133597644 rounded-full overflow-hidden flex items-center justify-center bg:white bg-white",
              renderId: "render-1ee4360c",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                src: "https://raw.createusercontent.com/160d9076-4e45-4665-8dc3-a03b2c64cb23/",
                alt: "SBBC Logo",
                className: "jsx-1133597644 w-full h-full object-cover",
                renderId: "render-4d9a9eea",
                as: "img"
              })
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-1133597644 hidden sm:block",
              renderId: "render-5001d03a",
              as: "div",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                style: {
                  fontSize: titleSize,
                  lineHeight: 1.05,
                  transition: "font-size 300ms ease",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textRendering: "geometricPrecision",
                  letterSpacing: "-0.25px",
                  fontWeight: 600
                },
                className: "jsx-1133597644 font-playfair-display text-white tracking-tight",
                renderId: "render-316e3ea3",
                as: "h1",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  style: {
                    display: "block"
                  },
                  className: "jsx-1133597644",
                  renderId: "render-2137cccf",
                  as: "span",
                  children: "SBBC"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  style: {
                    display: "block"
                  },
                  className: "jsx-1133597644",
                  renderId: "render-6fc299aa",
                  as: "span",
                  children: "Worldwide"
                })]
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                style: {
                  fontSize: taglineSize,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textRendering: "optimizeLegibility",
                  letterSpacing: "-0.1px"
                },
                className: "jsx-1133597644 text-white/80",
                renderId: "render-01b1887d",
                as: "p",
                children: "Discipling The Whole World"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-1133597644 sm:hidden",
              renderId: "render-b041e48a",
              as: "div",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                style: {
                  fontSize: 20 - shrink * 3,
                  lineHeight: 1.05,
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textRendering: "geometricPrecision",
                  letterSpacing: "-0.2px",
                  fontWeight: 600
                },
                className: "jsx-1133597644 font-playfair-display text-white tracking-tight",
                renderId: "render-a01489a2",
                as: "h1",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  style: {
                    display: "block"
                  },
                  className: "jsx-1133597644",
                  renderId: "render-d421eda7",
                  as: "span",
                  children: "SBBC"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  style: {
                    display: "block"
                  },
                  className: "jsx-1133597644",
                  renderId: "render-e8ee3bbe",
                  as: "span",
                  children: "Worldwide"
                })]
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                style: {
                  fontSize: taglineSize,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textRendering: "optimizeLegibility",
                  letterSpacing: "-0.1px"
                },
                className: "jsx-1133597644 text-white/80",
                renderId: "render-60709d73",
                as: "p",
                children: "Discipling The Whole World"
              })]
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1133597644 hidden lg:flex items-center gap-6",
            renderId: "render-2ef69710",
            as: "nav",
            children: navItems.map((item) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: item.href,
              style: {
                fontSize: navSize,
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textRendering: "optimizeLegibility",
                letterSpacing: "-0.1px",
                fontWeight: 600
              },
              className: "jsx-1133597644 uppercase font-medium text-white/90 hover:text-white transition-all duration-200 relative group",
              renderId: "render-996c3788",
              as: "a",
              children: [item.name, /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1133597644 absolute bottom-[-4px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full",
                renderId: "render-3a1b48c7",
                as: "span"
              })]
            }, item.name))
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1133597644 hidden",
          renderId: "render-83e317af",
          as: "div",
          children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1133597644 flex items-center gap-6",
            renderId: "render-2c2aa2ba",
            as: "nav",
            children: navItems.map((item) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: item.href,
              style: {
                fontSize: navSize,
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textRendering: "optimizeLegibility",
                letterSpacing: "-0.1px",
                fontWeight: 600
              },
              className: "jsx-1133597644 uppercase font-medium text-white/90 hover:text-white transition-all duration-200 relative group",
              renderId: "render-b31e3f74",
              as: "a",
              children: [item.name, /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1133597644 absolute bottom-[-4px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full",
                renderId: "render-ef3e0c16",
                as: "span"
              })]
            }, item.name))
          })
        })]
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-1133597644 lg:hidden px-6 sm:px-8",
        renderId: "render-438a5a16",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1133597644 fixed top-8 right-4 flex flex-col items-end gap-2 z-50",
          renderId: "render-a42a56b5",
          as: "div",
          children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            onClick: () => setIsMenuOpen(!isMenuOpen),
            "aria-label": "Toggle menu",
            "aria-expanded": isMenuOpen,
            "aria-controls": "mobile-menu-panel",
            className: "jsx-1133597644 p-2 transition-all duration-200",
            renderId: "render-29066ffb",
            as: "button",
            children: isMenuOpen ? /* @__PURE__ */ jsx(X, {
              size: 29,
              color: "white"
            }) : /* @__PURE__ */ jsx(Menu, {
              size: 29,
              color: "white"
            })
          })
        })
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        id: "mobile-menu-panel",
        style: {
          maxHeight: isMenuOpen ? "420px" : "0px",
          // a bit taller for large menus
          opacity: isMenuOpen ? 1 : 0,
          transform: `translateY(${isMenuOpen ? 0 : -8}px)`,
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(16px)",
          borderTop: isMenuOpen ? "1px solid rgba(255,255,255,0.1)" : "none",
          transitionDuration: isMenuOpen ? "700ms" : "500ms"
          // slower, smoother open
        },
        className: "jsx-1133597644 lg:hidden overflow-hidden transition-all ease-out",
        renderId: "render-5a543c3c",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1133597644 flex flex-col gap-1 px-6 py-4",
          renderId: "render-e3c03502",
          as: "nav",
          children: navItems.map((item, idx) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            href: item.href,
            style: {
              // INCREASE: mobile drawer menu text size and clarity
              fontSize: 17,
              fontWeight: 600,
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "optimizeLegibility",
              // Staggered drop-in animation
              animationName: isMenuOpen ? "menuItemDrop" : "none",
              animationDuration: "650ms",
              animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              animationFillMode: "both",
              animationDelay: `${idx * 90}ms`
            },
            onClick: () => setIsMenuOpen(false),
            className: "jsx-1133597644 uppercase font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-3 rounded-lg",
            renderId: "render-64c36459",
            as: "a",
            children: item.name
          }, `${item.name}-${openNonce}`))
        })
      })]
    }), /* @__PURE__ */ jsx(_JSXStyle, {
      id: "1133597644",
      children: ["@-webkit-keyframes menuItemDrop{0%{opacity:0;-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);}60%{opacity:1;-webkit-transform:translateY(2px);-ms-transform:translateY(2px);transform:translateY(2px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@keyframes menuItemDrop{0%{opacity:0;-webkit-transform:translateY(-12px);-ms-transform:translateY(-12px);transform:translateY(-12px);}60%{opacity:1;-webkit-transform:translateY(2px);-ms-transform:translateY(2px);transform:translateY(2px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}"]
    })]
  });
}

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    // Replace first slide with uploaded image and provide responsive variants
    image: "https://ucarecdn.com/717504d3-bba3-46d5-ab57-538bff3e8681/-/scale_crop/1920x1080/center/-/quality/smart/-/format/auto/",
    imageSrcSet: ["https://ucarecdn.com/717504d3-bba3-46d5-ab57-538bff3e8681/-/scale_crop/1280x720/center/-/quality/smart/-/format/auto/ 1280w", "https://ucarecdn.com/717504d3-bba3-46d5-ab57-538bff3e8681/-/scale_crop/1920x1080/center/-/quality/smart/-/format/auto/ 1920w", "https://ucarecdn.com/717504d3-bba3-46d5-ab57-538bff3e8681/-/scale_crop/2560x1440/center/-/quality/smart/-/format/auto/ 2560w"].join(", "),
    sizes: "100vw",
    alt: "Church leader speaking on stage",
    heading: "Welcome Home",
    // heading removed from UI below per request
    type: "text"
  }, {
    // UPDATED: Make the newly uploaded image the next hero after the first with responsive variants
    // CHANGED: Use the latest uploaded image (hero 3) and adjust focal point to 12% from the left
    image: "https://ucarecdn.com/f897ebcb-3e9c-4783-9bb3-75f781bdaafd/-/scale_crop/1920x1080/center/-/quality/smart/-/format/auto/",
    imageSrcSet: ["https://ucarecdn.com/f897ebcb-3e9c-4783-9bb3-75f781bdaafd/-/scale_crop/1280x720/center/-/quality/smart/-/format/auto/ 1280w", "https://ucarecdn.com/f897ebcb-3e9c-4783-9bb3-75f781bdaafd/-/scale_crop/1920x1080/center/-/quality/smart/-/format/auto/ 1920w", "https://ucarecdn.com/f897ebcb-3e9c-4783-9bb3-75f781bdaafd/-/scale_crop/2560x1440/center/-/quality/smart/-/format/auto/ 2560w"].join(", "),
    sizes: "100vw",
    alt: "SBBC hero image",
    type: "text",
    // NEW: shift visible area ~12% towards the left to reveal more of the people
    objectPosition: "12% center"
  }, {
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&h=1080&fit=crop&q=80",
    alt: "Church exterior",
    type: "social"
  }];
  const timerRef = useRef(null);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 7500);
    return () => clearInterval(timerRef.current);
  }, []);
  const transition = "transform 1500ms cubic-bezier(0.22, 1, 0.36, 1)";
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "relative w-full h-screen overflow-hidden",
    renderId: "render-ecbce281",
    as: "div",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "absolute inset-0 h-full w-full flex",
      style: {
        transform: `translateX(-${currentSlide * 100}%)`,
        transition
      },
      renderId: "render-9ea2fd60",
      as: "div",
      children: slides.map((slide, index) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "min-w-full h-full relative",
        renderId: "render-a2e64c72",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          src: slide.image,
          alt: slide.alt,
          srcSet: slide.imageSrcSet,
          sizes: slide.sizes,
          className: "w-full h-full object-cover",
          style: {
            objectPosition: slide.objectPosition || "50% 50%"
          },
          renderId: "render-d3a7bd6e",
          as: "img"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.45)), radial-gradient(1200px 600px at 20% 10%, rgba(244,208,63,0.06), transparent 60%)"
          },
          renderId: "render-c0efad2c",
          as: "div"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "absolute inset-0 flex items-center justify-center px-6",
          renderId: "render-113436d5",
          as: "div",
          children: slide.type === "text" ? (
            // Remove headings and decorative line per request
            /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-center max-w-5xl",
              renderId: "render-7c3a8c83",
              as: "div"
            })
          ) : (
            // Social slide without icons per request, keeping the Join Us CTA
            /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-center",
              renderId: "render-8c6b9665",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-12 flex items-center justify-center",
                renderId: "render-d09eceee",
                as: "div",
                children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                  href: "/join",
                  className: "group inline-flex items-center gap-4 px-9 py-[18px] rounded-full text-black font-bold text-xl bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] shadow-[0_8px_24px_rgba(194,156,26,0.45)] hover:shadow-[0_12px_28px_rgba(194,156,26,0.6)] transition-all",
                  style: {
                    transform: currentSlide === index ? "translateY(0)" : "translateY(20px)",
                    opacity: currentSlide === index ? 1 : 0,
                    transition: "all 900ms cubic-bezier(0.22,1,0.36,1)",
                    transitionDelay: currentSlide === index ? "0.85s" : "0s"
                  },
                  "aria-label": "Join Us",
                  renderId: "render-08497afe",
                  as: "a",
                  children: ["Join Us", /* @__PURE__ */ jsx(ArrowRight, {
                    className: "w-6 h-6 transition-transform group-hover:translate-x-1"
                  })]
                })
              })
            })
          )
        })]
      }, index))
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      onClick: () => {
        clearInterval(timerRef.current);
        prevSlide();
      },
      className: "absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-md",
      "aria-label": "Previous slide",
      renderId: "render-5212c74b",
      as: "button",
      children: /* @__PURE__ */ jsx(ChevronLeft, {
        className: "w-6 h-6 text-white"
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      onClick: () => {
        clearInterval(timerRef.current);
        nextSlide();
      },
      className: "absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-md",
      "aria-label": "Next slide",
      renderId: "render-3e17cb49",
      as: "button",
      children: /* @__PURE__ */ jsx(ChevronRight, {
        className: "w-6 h-6 text-white"
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2",
      renderId: "render-7c8fce8e",
      as: "div",
      children: slides.map((_, index) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        onClick: () => setCurrentSlide(index),
        className: `h-2 rounded-full transition-all duration-500 ${index === currentSlide ? "bg-[#F4D03F] w-8" : "bg-white/60 w-3"}`,
        "aria-label": `Go to slide ${index + 1}`,
        renderId: "render-ca45b287",
        as: "button"
      }, index))
    })]
  });
}

function MetricsBar() {
  const {
    data: metrics
  } = useQuery({
    queryKey: ["metrics"],
    queryFn: async () => {
      const response = await fetch("/api/metrics");
      if (!response.ok) throw new Error("Failed to fetch metrics");
      return response.json();
    }
  });
  const stats = [{
    Icon: UsersRound,
    // fuller silhouette for a friendlier, modern look
    label: "Converts",
    value: metrics?.converts || 0
  }, {
    Icon: HeartHandshake,
    label: "Displaced People Supported",
    value: metrics?.displaced_supported || 0
  }, {
    Icon: Building2,
    label: "Cities",
    value: metrics?.cities || 0
  }, {
    Icon: Church,
    label: "Churches Worldwide",
    value: metrics?.churches || 0
  }];
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "py-20 px-6 bg-[#0e1219]",
    renderId: "render-36b71bf1",
    as: "div",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-6xl mx-auto",
      renderId: "render-974d12c0",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
        renderId: "render-01a4959e",
        as: "div",
        children: stats.map(({
          Icon,
          label,
          value
        }, index) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center",
          style: {
            background: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "0.5px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
          },
          renderId: "render-cca3ac98",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mb-4",
            renderId: "render-95aa1466",
            as: "div",
            children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "w-16 h-16 rounded-2xl mx-auto grid place-items-center",
              style: {
                // Subtle gold ring and soft dark glass for a premium feel
                background: "linear-gradient(145deg, rgba(0,0,0,0.55), rgba(0,0,0,0.34))",
                border: "1px solid rgba(244,208,63,0.35)",
                boxShadow: "0 10px 24px rgba(0,0,0,0.16), 0 8px 20px rgba(244,208,63,0.18)"
              },
              renderId: "render-049f8e6f",
              as: "div",
              children: /* @__PURE__ */ jsx(Icon, {
                className: "w-7 h-7",
                style: {
                  color: "#F4D03F"
                }
              })
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight",
            renderId: "render-edc83df9",
            as: "div",
            children: `${Number(value).toLocaleString()}+`
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-[13px] text-white/70 font-medium",
            renderId: "render-3232317e",
            as: "div",
            children: label
          })]
        }, index))
      })
    })
  });
}

function ChurchFooter() {
  const mapsShareUrl = "https://maps.app.goo.gl/wxjoAKJz5gaG6h5r5";
  const mapsEmbedSrc = "https://www.google.com/maps?q=8.898111%2C7.256139&output=embed";
  const mapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=8.898111%2C7.256139";
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "bg-black text-white py-16 px-6",
    style: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale"
    },
    renderId: "render-5434edb9",
    as: "footer",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto",
      renderId: "render-8d1b00bb",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "grid grid-cols-1 md:grid-cols-4 gap-10 mb-8",
        renderId: "render-7b3d5c6e",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-5bcad481",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "w-12 h-12 rounded-full overflow-hidden mb-4 shadow-lg",
            renderId: "render-998de130",
            as: "div",
            children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              src: "https://raw.createusercontent.com/160d9076-4e45-4665-8dc3-a03b2c64cb23/",
              alt: "SBBC Logo",
              className: "w-full h-full object-cover",
              renderId: "render-62d37fec",
              as: "img"
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-xl font-semibold tracking-tight mb-3",
            style: {
              letterSpacing: "-0.2px"
            },
            renderId: "render-5e3deba2",
            as: "h3",
            children: "SBBC Worldwide"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-sm text-gray-300 leading-relaxed",
            renderId: "render-a74612be",
            as: "p",
            children: "Spreading the gospel of Jesus Christ across nations through worship, discipleship, and service. Join us as we bring hope and light to the world."
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-8f8bbbd5",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-sm font-semibold mb-4 text-gray-400",
            renderId: "render-989bd148",
            as: "h4",
            children: "Quick Links"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "space-y-2 text-sm",
            renderId: "render-ebfde138",
            as: "ul",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-5bbb854c",
              as: "li",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "/vision",
                className: "text-gray-300 hover:text-white transition-colors",
                renderId: "render-91d01b53",
                as: "a",
                children: "Our Vision"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-ea7f3ea0",
              as: "li",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "/news",
                className: "text-gray-300 hover:text-white transition-colors",
                renderId: "render-c8910446",
                as: "a",
                children: "News"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-95fcd3ed",
              as: "li",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "/education",
                className: "text-gray-300 hover:text-white transition-colors",
                renderId: "render-cf00eefe",
                as: "a",
                children: "Education"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-0c512c01",
              as: "li",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "/finance",
                className: "text-gray-300 hover:text-white transition-colors",
                renderId: "render-02563bc4",
                as: "a",
                children: "Finance"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-9846c6c1",
              as: "li",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "/foundation",
                className: "text-gray-300 hover:text-white transition-colors",
                renderId: "render-ea0f5fac",
                as: "a",
                children: "Foundation"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-fa4ef67e",
              as: "li",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "/pastorium",
                className: "text-gray-300 hover:text-white transition-colors",
                renderId: "render-9355cf11",
                as: "a",
                children: "Pastorium"
              })
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-cf574504",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-sm font-semibold mb-4 text-gray-400",
            renderId: "render-05065646",
            as: "h4",
            children: "Contact"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "space-y-3 text-sm",
            renderId: "render-c53a893c",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-start gap-3 text-gray-300",
              renderId: "render-bfc4414c",
              as: "div",
              children: [/* @__PURE__ */ jsx(MapPin, {
                className: "w-4 h-4 text-[#F4D03F] mt-0.5",
                strokeWidth: 1.75
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: mapsShareUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-white underline underline-offset-4",
                "aria-label": "Open address in Google Maps",
                renderId: "render-2051cc11",
                as: "a",
                children: "SBBC Headquarters 102A, Barrister Collins Aimuan Road, Kuje, FCT-Abuja, Nigeria"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center gap-3 text-gray-300",
              renderId: "render-95919bf6",
              as: "div",
              children: [/* @__PURE__ */ jsx(Phone, {
                className: "w-4 h-4 text-[#F4D03F]",
                strokeWidth: 1.75
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "https://wa.me/2347064200926",
                className: "hover:text-white",
                renderId: "render-977f25f6",
                as: "a",
                children: "+234 706 420 0926"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center gap-3 text-gray-300",
              renderId: "render-4f4b88ac",
              as: "div",
              children: [/* @__PURE__ */ jsx(Mail, {
                className: "w-4 h-4 text-[#F4D03F]",
                strokeWidth: 1.75
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "mailto:info@sbbcworldwide.org",
                className: "hover:text-white",
                renderId: "render-07393f4c",
                as: "a",
                children: "info@sbbcworldwide.org"
              })]
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          id: "map",
          renderId: "render-297a8b37",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-sm font-semibold mb-4 text-gray-400",
            renderId: "render-59fb14a1",
            as: "h4",
            children: "Visit Us"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "bg-gray-800 h-40 rounded-xl overflow-hidden border border-white/10",
            renderId: "render-0b3c1dbb",
            as: "div",
            children: /* @__PURE__ */ jsx("iframe", {
              title: "SBBC Kuje Location Map",
              src: mapsEmbedSrc,
              width: "100%",
              height: "100%",
              style: {
                border: 0
              },
              allowFullScreen: "",
              loading: "lazy"
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-3",
            renderId: "render-062be830",
            as: "div",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: mapsDirectionsUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white",
              "aria-label": "Get directions in Google Maps",
              renderId: "render-be4df9b9",
              as: "a",
              children: [/* @__PURE__ */ jsx(MapPin, {
                className: "w-4 h-4 text-[#F4D03F]"
              }), "Open in Google Maps"]
            })
          })]
        })]
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "mb-6",
        renderId: "render-bc826cfd",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex flex-wrap items-center gap-2 justify-center md:justify-end",
          renderId: "render-d6ef98ac",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            href: "https://facebook.com",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Facebook",
            className: "group w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0",
            style: {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)"
            },
            renderId: "render-87df0f3d",
            as: "a",
            children: /* @__PURE__ */ jsx(Facebook, {
              className: "w-5 h-5 text-white group-hover:text-[#F4D03F]",
              strokeWidth: 1.75
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            href: "https://instagram.com",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Instagram",
            className: "group w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0",
            style: {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)"
            },
            renderId: "render-7e7ae068",
            as: "a",
            children: /* @__PURE__ */ jsx(Instagram, {
              className: "w-5 h-5 text-white group-hover:text-[#F4D03F]",
              strokeWidth: 1.75
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            href: "https://twitter.com",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Twitter/X",
            className: "group w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0",
            style: {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)"
            },
            renderId: "render-24029b04",
            as: "a",
            children: /* @__PURE__ */ jsx(Twitter, {
              className: "w-5 h-5 text-white group-hover:text-[#F4D03F]",
              strokeWidth: 1.75
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            href: "https://youtube.com",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "YouTube",
            className: "group w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0",
            style: {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)"
            },
            renderId: "render-28e99fb4",
            as: "a",
            children: /* @__PURE__ */ jsx(Youtube, {
              className: "w-5 h-5 text-white group-hover:text-[#F4D03F]",
              strokeWidth: 1.75
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            href: "https://tiktok.com",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "TikTok",
            title: "TikTok",
            className: "group w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0",
            style: {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)"
            },
            renderId: "render-f402d509",
            as: "a",
            children: /* @__PURE__ */ jsx(Music, {
              className: "w-5 h-5 text-white group-hover:text-[#F4D03F]",
              strokeWidth: 1.75
            })
          })]
        })
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6",
        renderId: "render-542c9d6c",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-sm text-gray-400 tracking-tight text-center md:text-left",
          style: {
            letterSpacing: "-0.2px"
          },
          renderId: "render-77a490fe",
          as: "p",
          children: ["© ", (/* @__PURE__ */ new Date()).getFullYear(), " SBBC Worldwide. All rights reserved."]
        })
      })]
    })
  });
}

function WhatsAppButton() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "fixed bottom-6 right-6 z-50 flex items-center gap-2",
    renderId: "render-b32c006b",
    as: "div",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      href: "https://wa.me/2347064200926?text=Hello%20SBBC%20Worldwide%2C%20I%27d%20love%20to%20speak%20with%20someone",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "w-10 h-10 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 hover:-translate-y-0.5",
      "aria-label": "Chat on WhatsApp",
      renderId: "render-dd383141",
      as: "a",
      children: /* @__PURE__ */ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        className: "w-5 h-5 text-white",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          d: "M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232",
          renderId: "render-fb77a612",
          as: "path"
        })
      })
    })
  });
}

function QuickActionsDock({
  mapsDirectionsUrl
}) {
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    "data-animate": true,
    className: "jsx-3560414585 px-6 -mt-8 md:-mt-12",
    renderId: "render-863f7def",
    as: "section",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-3560414585 max-w-6xl mx-auto",
      renderId: "render-54fe9889",
      as: "div",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        style: {
          background: "rgba(255,255,255,0.06)",
          borderColor: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)"
        },
        className: "jsx-3560414585 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 rounded-3xl p-3 md:p-4 shadow-xl border",
        renderId: "render-d6be0801",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          href: "https://paystack.com/pay/sbbcworldwide",
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            background: "rgba(15,19,26,0.7)",
            borderColor: "rgba(255,255,255,0.12)",
            animationDelay: "0s"
          },
          "aria-label": "Give Online",
          className: "jsx-3560414585 ios-cta group rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-3 border transition-all",
          renderId: "render-6bc7d8ad",
          as: "a",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            style: {
              background: "linear-gradient(180deg, rgba(244,208,63,0.35), rgba(194,156,26,0.25))",
              border: "1px solid rgba(255,255,255,0.1)"
            },
            className: "jsx-3560414585 ios-icon rounded-xl p-3 shadow",
            renderId: "render-bb2be29b",
            as: "div",
            children: /* @__PURE__ */ jsx(Heart, {
              className: "w-6 h-6 text-black"
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-3560414585 text-sm font-semibold text-white/90",
            renderId: "render-78c16cde",
            as: "span",
            children: "Give"
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          href: mapsDirectionsUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            background: "rgba(15,19,26,0.7)",
            borderColor: "rgba(255,255,255,0.12)",
            animationDelay: "0.15s"
          },
          "aria-label": "Get Directions",
          className: "jsx-3560414585 ios-cta group rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-3 border transition-all",
          renderId: "render-3d6c0f52",
          as: "a",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            style: {
              background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
              border: "1px solid rgba(255,255,255,0.1)"
            },
            className: "jsx-3560414585 ios-icon rounded-xl p-3 shadow",
            renderId: "render-0a9fdc36",
            as: "div",
            children: /* @__PURE__ */ jsx(MapPin, {
              className: "w-6 h-6 text-white"
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-3560414585 text-sm font-semibold text-white/90",
            renderId: "render-ff4b51f6",
            as: "span",
            children: "Visit"
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          href: "/messages",
          style: {
            background: "rgba(15,19,26,0.7)",
            borderColor: "rgba(255,255,255,0.12)",
            animationDelay: "0.3s"
          },
          "aria-label": "Stream Services",
          className: "jsx-3560414585 ios-cta group rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-3 border transition-all",
          renderId: "render-ab8e1f3a",
          as: "a",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            style: {
              background: "linear-gradient(180deg, rgba(244,208,63,0.30), rgba(194,156,26,0.22))",
              border: "1px solid rgba(255,255,255,0.1)"
            },
            className: "jsx-3560414585 ios-icon rounded-xl p-3 shadow",
            renderId: "render-20367409",
            as: "div",
            children: /* @__PURE__ */ jsx(Play, {
              className: "w-6 h-6 text-black"
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-3560414585 text-sm font-semibold text-white/90",
            renderId: "render-917bba41",
            as: "span",
            children: "Stream"
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          href: "/join",
          style: {
            background: "rgba(15,19,26,0.7)",
            borderColor: "rgba(255,255,255,0.12)",
            animationDelay: "0.45s"
          },
          "aria-label": "Join Departments",
          className: "jsx-3560414585 ios-cta group rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-3 border transition-all",
          renderId: "render-0f68d0d2",
          as: "a",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            style: {
              background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
              border: "1px solid rgba(255,255,255,0.1)"
            },
            className: "jsx-3560414585 ios-icon rounded-xl p-3 shadow",
            renderId: "render-14a9e63e",
            as: "div",
            children: /* @__PURE__ */ jsx(Users, {
              className: "w-6 h-6 text-white"
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-3560414585 text-sm font-semibold text-white/90",
            renderId: "render-9eb6d377",
            as: "span",
            children: "Join"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(_JSXStyle, {
      id: "3560414585",
      children: ["@-webkit-keyframes ios-float{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@keyframes ios-float{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@-webkit-keyframes ios-glow{0%{box-shadow:0 8px 24px rgba(255,215,64,0.06);}50%{box-shadow:0 10px 28px rgba(255,215,64,0.14);}100%{box-shadow:0 8px 24px rgba(255,215,64,0.06);}}", "@keyframes ios-glow{0%{box-shadow:0 8px 24px rgba(255,215,64,0.06);}50%{box-shadow:0 10px 28px rgba(255,215,64,0.14);}100%{box-shadow:0 8px 24px rgba(255,215,64,0.06);}}", ".ios-cta{will-change:transform,box-shadow,filter;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform 220ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 220ms ease, border-color 220ms ease, background 220ms ease;-webkit-transition:transform 220ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 220ms ease, border-color 220ms ease, background 220ms ease;transition:transform 220ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 220ms ease, border-color 220ms ease, background 220ms ease;-webkit-animation:ios-float 6s ease-in-out infinite;animation:ios-float 6s ease-in-out infinite;}", ".ios-cta:hover{-webkit-transform:translateY(-3px);-ms-transform:translateY(-3px);transform:translateY(-3px);box-shadow:0 12px 30px rgba(0,0,0,0.18),0 6px 14px rgba(0,0,0,0.12);border-color:rgba(255,255,255,0.18);-webkit-filter:saturate(1.05);filter:saturate(1.05);}", ".ios-cta:active{-webkit-transform:translateY(0) scale(0.98);-ms-transform:translateY(0) scale(0.98);transform:translateY(0) scale(0.98);-webkit-transition-duration:120ms;transition-duration:120ms;}", ".ios-cta:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255,255,255,0.35),0 10px 26px rgba(0,0,0,0.16);}", ".ios-cta .ios-icon{-webkit-transition:-webkit-transform 220ms cubic-bezier(0.2,0.8,0.2,1), filter 220ms ease;-webkit-transition:transform 220ms cubic-bezier(0.2,0.8,0.2,1), filter 220ms ease;transition:transform 220ms cubic-bezier(0.2,0.8,0.2,1), filter 220ms ease;}", ".ios-cta:hover .ios-icon{-webkit-transform:translateY(-2px) scale(1.04);-ms-transform:translateY(-2px) scale(1.04);transform:translateY(-2px) scale(1.04);-webkit-filter:drop-shadow(0 6px 14px rgba(0,0,0,0.25));filter:drop-shadow(0 6px 14px rgba(0,0,0,0.25));}", 'a[aria-label="Give Online"] .ios-icon{-webkit-animation:ios-glow 3.5s ease-in-out infinite;animation:ios-glow 3.5s ease-in-out infinite;}']
    })]
  });
}

function IntroSection() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    "data-animate": true,
    className: "py-20 px-6",
    renderId: "render-2b8d28e3",
    as: "section",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-4xl mx-auto text-center",
      renderId: "render-b917b096",
      as: "div",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "rounded-3xl border shadow-xl p-6 md:p-10",
        style: {
          background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))",
          borderColor: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)"
        },
        renderId: "render-4d06a705",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          href: "/messages",
          className: "inline-flex items-center gap-2 rounded-full px-8 py-4 mb-8 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl",
          renderId: "render-73bd450a",
          as: "a",
          children: [/* @__PURE__ */ jsx(Play, {
            className: "w-5 h-5"
          }), "Watch Messages"]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-2xl md:text-4xl font-bold leading-snug mb-5 text-white",
          renderId: "render-111b7644",
          as: "h2",
          children: ["Transform your life through faith,", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-d1173ceb",
            as: "br"
          }), "grow in God's love,", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-c7951cf3",
            as: "br"
          }), "and make a difference in the world."]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-lg text-white/75 italic mt-8",
          renderId: "render-3ec5a269",
          as: "p",
          children: '"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." - Jeremiah 29:11'
        })]
      })
    })
  });
}

function GiveOnlineSection() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    "data-animate": true,
    className: "py-16 px-6",
    renderId: "render-3bf927b5",
    as: "section",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-4xl mx-auto text-center",
      renderId: "render-412593fa",
      as: "div",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "rounded-3xl border shadow-xl p-8",
        style: {
          background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))",
          borderColor: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)"
        },
        renderId: "render-90243d4d",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl md:text-4xl font-bold mb-4 text-white",
          renderId: "render-815dbc7f",
          as: "h2",
          children: "Support Our Mission"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-lg text-white/70 mb-8",
          renderId: "render-4fa3b353",
          as: "p",
          children: "Your generous giving helps us spread God's love worldwide and transform lives through faith."
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          href: "https://paystack.com/pay/sbbcworldwide",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-3 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200 ease-out hover:scale-105 active:scale-[0.98] shadow-lg hover:shadow-xl",
          renderId: "render-11e90bb5",
          as: "a",
          children: ["Give Online", /* @__PURE__ */ jsx(ArrowRight, {
            className: "w-5 h-5"
          })]
        })]
      })
    })
  });
}

function FeaturedVideoSection() {
  const videoHeight = "78vh";
  const videoWidth = "138.67vh";
  const iframeTop = "calc(50% + 1vh)";
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "relative w-full h-screen overflow-hidden",
    style: {
      height: videoHeight
    },
    renderId: "render-b5815a9e",
    as: "section",
    children: /* @__PURE__ */ jsx("iframe", {
      src: "https://www.youtube.com/embed/dyiZYGb_4iU?autoplay=1&mute=1&loop=1&playlist=dyiZYGb_4iU&controls=0&modestbranding=1&rel=0&playsinline=1",
      title: "Church Featured Video",
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowFullScreen: true,
      className: "absolute left-1/2 -translate-x-1/2 -translate-y-1/2",
      style: {
        width: videoWidth,
        height: videoHeight,
        top: iframeTop
      }
    })
  });
}

function ShareFormLink({
  label = "Share this form",
  anchor = ""
}) {
  const [shareUrl, setShareUrl] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const url = `${window.location.origin}${window.location.pathname}${anchor || ""}`;
        setShareUrl(url);
      } catch (e) {
        console.error(e);
      }
    }
  }, [anchor]);
  const text = "I thought you might want to fill this form.";
  const title = "Form";
  const encodedUrl = useMemo(() => encodeURIComponent(shareUrl || ""), [shareUrl]);
  const encodedText = useMemo(() => encodeURIComponent(text), []);
  const encodedTitle = useMemo(() => encodeURIComponent(title), []);
  const links = useMemo(() => {
    return [{
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`
    }, {
      name: "Telegram",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`
    }, {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    }, {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`
    }, {
      name: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A${encodedUrl}`
    }];
  }, [encodedText, encodedUrl, encodedTitle]);
  const onWebShare = async () => {
    try {
      if (navigator.share && shareUrl) {
        await navigator.share({
          title,
          text,
          url: shareUrl
        });
        return;
      }
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard");
    } catch (e) {
      console.error(e);
    }
  };
  const onCopy = async () => {
    try {
      if (!shareUrl) return;
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard");
    } catch (e) {
      console.error(e);
    }
  };
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "mt-4 flex flex-col sm:flex-row sm:items-center gap-3 text-sm",
    renderId: "render-238a00df",
    as: "div",
    children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#E9E9E9] dark:border-[#2A2A2A] bg-white/80 dark:bg-[#1E1E1E]/80 text-black dark:text-white shadow-sm",
      renderId: "render-2fa2d3ed",
      as: "div",
      children: [/* @__PURE__ */ jsx(Share2, {
        className: "w-4 h-4 text-[#C29C1A]"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "font-medium",
        renderId: "render-8dfc6cb4",
        as: "span",
        children: label
      })]
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "flex flex-wrap items-center gap-2",
      renderId: "render-9468e44c",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "button",
        onClick: onWebShare,
        className: "px-3 py-2 rounded-lg bg-[#FAFAFA] dark:bg-[#222] border border-[#E9E9E9] dark:border-[#2A2A2A] text-black dark:text-white hover:bg-white/70 dark:hover:bg-[#2A2A2A]",
        "aria-label": "Share using native share or copy",
        renderId: "render-10900c0e",
        as: "button",
        children: "Use Share"
      }), links.map((l) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        href: l.href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "px-3 py-2 rounded-lg bg-[#FAFAFA] dark:bg-[#222] border border-[#E9E9E9] dark:border-[#2A2A2A] text-black dark:text-white hover:bg-white/70 dark:hover:bg-[#2A2A2A]",
        "aria-label": `Share on ${l.name}`,
        renderId: "render-51733f24",
        as: "a",
        children: l.name
      }, l.name)), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        type: "button",
        onClick: onCopy,
        className: "inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FAFAFA] dark:bg-[#222] border border-[#E9E9E9] dark:border-[#2A2A2A] text-black dark:text-white",
        renderId: "render-0d331a4e",
        as: "button",
        children: [/* @__PURE__ */ jsx(Link, {
          className: "w-4 h-4"
        }), " Copy link"]
      })]
    })]
  });
}

function DepartmentForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    department: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [reduceMotion, setReduceMotion] = useState(false);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const optionRefs = useRef([]);
  const departments = ["Youth Church", "Worship Ministry", "Media Team", "Outreach", "Children's Ministry", "Prayer Team"];
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      const apply = () => setReduceMotion(mq.matches);
      apply();
      mq.addEventListener?.("change", apply);
      return () => mq.removeEventListener?.("change", apply);
    }
  }, []);
  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e) => {
      const t = e.target;
      if (!triggerRef.current || !panelRef.current) return;
      if (triggerRef.current.contains(t) || panelRef.current.contains(t)) return;
      setIsOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, {
      passive: true
    });
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [isOpen]);
  useEffect(() => {
    if (!isOpen) return;
    const el = optionRefs.current[highlightedIndex];
    if (el && el.scrollIntoView) {
      el.scrollIntoView({
        block: "nearest"
      });
    }
  }, [highlightedIndex, isOpen]);
  const openPanel = () => {
    setIsOpen(true);
    const currentIndex = Math.max(0, departments.findIndex((d) => d === formData.department));
    setHighlightedIndex(currentIndex);
  };
  const closePanel = () => setIsOpen(false);
  const togglePanel = () => {
    if (isOpen) {
      closePanel();
    } else {
      openPanel();
    }
  };
  const selectDepartment = (dept) => {
    setFormData({
      ...formData,
      department: dept
    });
    setIsOpen(false);
    setMessage("");
  };
  const onTriggerKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!isOpen) {
        openPanel();
      } else {
        setHighlightedIndex((i) => Math.min(i + 1, departments.length - 1));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (isOpen) setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Escape") {
      if (isOpen) closePanel();
    } else if (e.key === "Home") {
      e.preventDefault();
      if (isOpen) setHighlightedIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      if (isOpen) setHighlightedIndex(departments.length - 1);
    }
  };
  const onListKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.min(i + 1, departments.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const idx = highlightedIndex >= 0 ? highlightedIndex : 0;
      selectDepartment(departments[idx]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      closePanel();
      triggerRef.current?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setHighlightedIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setHighlightedIndex(departments.length - 1);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    if (!formData.department) {
      setLoading(false);
      setMessage("Please select a department.");
      toast.error("Please select a department");
      return;
    }
    try {
      const response = await fetch("/api/department-join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Failed to submit");
      }
      const data = await response.json();
      setMessage(data.message);
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        department: ""
      });
      toast.success("Thanks for joining! We'll be in touch shortly.");
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit. Please try again.");
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const triggerClasses = "w-full px-4 py-3 rounded-lg text-left flex items-center justify-between border border-black bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F] transition-all duration-200";
  const panelBase = "absolute left-0 right-0 z-20 rounded-xl border border-white/10 bg-[#0B0B0B]/95 backdrop-blur-xl shadow-xl overflow-auto";
  const optionBase = "flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-pointer select-none text-white";
  const isSelected = (dept) => dept === formData.department;
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    id: "department-join",
    onSubmit: handleSubmit,
    className: "space-y-4",
    renderId: "render-efc18863",
    as: "form",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      renderId: "render-64a6e48e",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "text",
        placeholder: "Full Name",
        value: formData.full_name,
        onChange: (e) => setFormData({
          ...formData,
          full_name: e.target.value
        }),
        className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
        required: true,
        renderId: "render-3efcb74c",
        as: "input"
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      renderId: "render-dac8994f",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "email",
        placeholder: "Email",
        value: formData.email,
        onChange: (e) => setFormData({
          ...formData,
          email: e.target.value
        }),
        className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
        required: true,
        renderId: "render-fa49c2c6",
        as: "input"
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      renderId: "render-99244b98",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "tel",
        placeholder: "Phone (optional)",
        value: formData.phone,
        onChange: (e) => setFormData({
          ...formData,
          phone: e.target.value
        }),
        className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
        renderId: "render-8a2b699a",
        as: "input"
      })
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative",
      "aria-label": "Select Department",
      renderId: "render-4494309d",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        type: "button",
        ref: triggerRef,
        className: triggerClasses,
        onClick: togglePanel,
        onKeyDown: onTriggerKeyDown,
        "aria-haspopup": "listbox",
        "aria-expanded": isOpen,
        "aria-controls": "department-listbox",
        renderId: "render-f9c571e5",
        as: "button",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "truncate text-white",
          renderId: "render-90f1a127",
          as: "span",
          children: formData.department || "Select Department"
        }), /* @__PURE__ */ jsx(ChevronDown, {
          className: "ml-3 flex-shrink-0 text-white/90 transition-transform",
          style: {
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
          },
          size: 18,
          "aria-hidden": true
        })]
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        ref: panelRef,
        id: "department-listbox",
        role: "listbox",
        tabIndex: -1,
        onKeyDown: onListKeyDown,
        className: panelBase,
        style: {
          maxHeight: 320,
          marginTop: 0,
          marginBottom: 8,
          top: "auto",
          bottom: "100%",
          // always above the trigger
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transform: reduceMotion ? "none" : isOpen ? "translateY(0px)" : "translateY(6px)",
          // subtle rise when opening upward
          transition: reduceMotion ? "none" : "opacity 200ms ease, transform 240ms cubic-bezier(0.22, 1, 0.36, 1)"
        },
        renderId: "render-eff8a233",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "p-2",
          renderId: "render-2cce9310",
          as: "div",
          children: departments.map((dept, idx) => {
            const active = idx === highlightedIndex;
            const selected = isSelected(dept);
            return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              id: `opt-${idx}`,
              role: "option",
              "aria-selected": selected,
              ref: (el) => optionRefs.current[idx] = el,
              className: optionBase + (active ? " bg-white/10" : " hover:bg-white/10") + (selected ? " ring-1 ring-[#F4D03F]/60" : ""),
              onMouseEnter: () => setHighlightedIndex(idx),
              onClick: () => selectDepartment(dept),
              style: {
                transition: reduceMotion ? "none" : "background-color 150ms ease, box-shadow 150ms ease"
              },
              renderId: "render-a76e8f52",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "flex-1 truncate",
                renderId: "render-c5148d5a",
                as: "span",
                children: dept
              }), selected && /* @__PURE__ */ jsx(Check, {
                size: 16,
                className: "text-[#C29C1A]",
                "aria-hidden": true
              })]
            }, dept);
          })
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      type: "submit",
      disabled: loading,
      className: "w-full bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold py-3 rounded-lg transition-all duration-150 active:scale-[0.98] disabled:opacity-50",
      renderId: "render-35b28665",
      as: "button",
      children: loading ? "Submitting..." : "Join Department"
    }), message && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "text-center text-sm text-[#C29C1A]",
      renderId: "render-60bb5084",
      as: "p",
      children: message
    }), /* @__PURE__ */ jsx(ShareFormLink, {
      label: "Share this form",
      anchor: "#department-join"
    }), !reduceMotion && /* @__PURE__ */ jsx(_JSXStyle, {
      id: "1599577056",
      children: ["@-webkit-keyframes dropdownItemIn{0%{opacity:0;-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);}60%{opacity:1;-webkit-transform:translateY(2px);-ms-transform:translateY(2px);transform:translateY(2px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@keyframes dropdownItemIn{0%{opacity:0;-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);}60%{opacity:1;-webkit-transform:translateY(2px);-ms-transform:translateY(2px);transform:translateY(2px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}"]
    })]
  });
}

function YouthMinistrySection() {
  const [showForm, setShowForm] = useState(false);
  const handleOpenForm = () => {
    setShowForm(true);
  };
  const joinButton = !showForm ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    type: "button",
    onClick: handleOpenForm,
    "aria-controls": "department-join",
    "aria-expanded": false,
    className: "w-full sm:w-auto bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold px-5 py-3 rounded-lg transition-all duration-150 active:scale-[0.98]",
    renderId: "render-c94b60f1",
    as: "button",
    children: "Join Department"
  }) : null;
  const formCard = showForm ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "bg-[#0b0f15] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-sm",
    renderId: "render-086165e5",
    as: "div",
    children: /* @__PURE__ */ jsx(DepartmentForm, {})
  }) : null;
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    "data-animate": true,
    className: "py-20 px-6 bg-[#0e1219]",
    renderId: "render-9474e545",
    as: "section",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto",
      renderId: "render-085bc820",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f131a] shadow-xl",
        renderId: "render-ed5cfe1f",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "grid md:grid-cols-2 items-stretch",
          renderId: "render-879e6963",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "relative order-2 md:order-1",
            renderId: "render-667dbdaa",
            as: "div",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "relative h-[320px] md:h-full",
              renderId: "render-f999d466",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                src: "https://ucarecdn.com/52b45c89-66bf-462e-acc6-adacd639e7b0/-/scale_crop/1080x1080/center/-/quality/smart/-/format/auto/",
                srcSet: ["https://ucarecdn.com/52b45c89-66bf-462e-acc6-adacd639e7b0/-/scale_crop/800x800/center/-/quality/smart/-/format/auto/ 800w", "https://ucarecdn.com/52b45c89-66bf-462e-acc6-adacd639e7b0/-/scale_crop/1080x1080/center/-/quality/smart/-/format/auto/ 1080w", "https://ucarecdn.com/52b45c89-66bf-462e-acc6-adacd639e7b0/-/scale_crop/1600x1600/center/-/quality/smart/-/format/auto/ 1600w"].join(", "),
                sizes: "(max-width: 768px) 100vw, 50vw",
                alt: "Youth worship gathering",
                className: "absolute inset-0 w-full h-full object-cover",
                renderId: "render-d9a91728",
                as: "img"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "absolute inset-0",
                style: {
                  background: "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.25))"
                },
                renderId: "render-55b8209a",
                as: "div"
              })]
            })
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "order-1 md:order-2 p-8 sm:p-12 flex flex-col justify-center",
            renderId: "render-daa64f1f",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4",
              style: {
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)"
              },
              renderId: "render-4c18d6db",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "w-2 h-2 rounded-full",
                style: {
                  background: "#F4D03F"
                },
                renderId: "render-68328b8e",
                as: "span"
              }), "Youth Ministry"]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-3xl md:text-4xl font-bold tracking-tight mb-3 text-white",
              renderId: "render-fb1fba81",
              as: "h2",
              children: "Join Our Youth Ministry"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-lg text-white/70 leading-relaxed mb-6",
              renderId: "render-38eec2f8",
              as: "p",
              children: "Be part of a vibrant community of young believers. Grow in faith, build lasting friendships, and make an impact together."
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8",
              renderId: "render-590f9d36",
              as: "div",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "flex items-center gap-2 text-sm text-white/80",
                renderId: "render-c688119b",
                as: "div",
                children: [/* @__PURE__ */ jsx(Users, {
                  className: "w-5 h-5 text-[#C29C1A]"
                }), "Community"]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "flex items-center gap-2 text-sm text-white/80",
                renderId: "render-f92d8859",
                as: "div",
                children: [/* @__PURE__ */ jsx(Music, {
                  className: "w-5 h-5 text-[#C29C1A]"
                }), "Worship"]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "flex items-center gap-2 text-sm text-white/80",
                renderId: "render-4f8c838d",
                as: "div",
                children: [/* @__PURE__ */ jsx(Heart, {
                  className: "w-5 h-5 text-[#C29C1A]"
                }), "Service"]
              })]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "mb-4",
              renderId: "render-c02ab784",
              as: "div",
              children: joinButton
            }), formCard]
          })]
        })
      })
    })
  });
}

function VisionStatement() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    "data-animate": true,
    className: "py-20 px-6",
    renderId: "render-67c7dba2",
    as: "section",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12",
      renderId: "render-d89f7b5e",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "md:w-1/3",
        renderId: "render-f2413b81",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "w-[76px] h-[76px] rounded-full overflow-hidden flex items-center justify-center shadow-2xl",
          renderId: "render-ed011ecd",
          as: "div",
          children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            src: "https://raw.createusercontent.com/160d9076-4e45-4665-8dc3-a03b2c64cb23/",
            alt: "SBBC Logo",
            className: "w-full h-full object-cover",
            renderId: "render-ac7d0203",
            as: "img"
          })
        })
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "md:w-2/3",
        renderId: "render-dd49e77c",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold mb-6 text-white",
          renderId: "render-d6420b01",
          as: "h2",
          children: "Our Vision"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-lg text-white/80 leading-relaxed",
          renderId: "render-c47b9cbf",
          as: "p",
          children: "To spread the gospel of Jesus Christ to every corner of the world, transforming lives through faith, compassion, and service. We are committed to building a global community of believers who live out God's love in practical ways, bringing hope to the hopeless and light to those in darkness."
        })]
      })]
    })
  });
}

function VisionDetails() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    "data-animate": true,
    className: "py-16 px-6 bg-[#0e1219]",
    renderId: "render-71a88bbc",
    as: "section",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-5xl mx-auto",
      renderId: "render-36710b13",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "mb-10",
        renderId: "render-70cfd60d",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-base md:text-lg text-white/80 leading-relaxed",
          renderId: "render-6fb0d3c0",
          as: "p",
          children: "To disciple the Nations with the transformative message of holiness with prosperity, raising a generation of Christ centered leaders to embody integrity, walk in divine abundance, and shape societies with kingdom influence until the whole world reflects the glory of God."
        })
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "space-y-6",
        renderId: "render-cfca2ee6",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-start gap-4 bg-[#0f131a] border border-white/10 rounded-2xl p-5",
          renderId: "render-7b3a0b6c",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "flex h-10 w-10 items-center justify-center rounded-xl",
            style: {
              background: "linear-gradient(180deg, rgba(244,208,63,0.25), rgba(194,156,26,0.18))",
              border: "1px solid rgba(255,255,255,0.08)"
            },
            "aria-hidden": "true",
            renderId: "render-9f3e5aa5",
            as: "div",
            children: /* @__PURE__ */ jsx(Target, {
              className: "w-5 h-5 text-[#C29C1A]"
            })
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-69e5f9d3",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-lg md:text-xl font-semibold text-white mb-1",
              renderId: "render-958ed9b1",
              as: "h3",
              children: "Our Mission"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-white/80 text-base leading-relaxed",
              renderId: "render-56c2db4c",
              as: "p",
              children: "To proclaim Christ, disciple believers in holiness and empower them to prosper and transform the world for God's glory."
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-start gap-4 bg-[#0f131a] border border-white/10 rounded-2xl p-5",
          renderId: "render-09c30b6e",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "flex h-10 w-10 items-center justify-center rounded-xl",
            style: {
              background: "linear-gradient(180deg, rgba(244,208,63,0.25), rgba(194,156,26,0.18))",
              border: "1px solid rgba(255,255,255,0.08)"
            },
            "aria-hidden": "true",
            renderId: "render-7f23af33",
            as: "div",
            children: /* @__PURE__ */ jsx(ShieldCheck, {
              className: "w-5 h-5 text-[#C29C1A]"
            })
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-b4d2b3a8",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-lg md:text-xl font-semibold text-white mb-1",
              renderId: "render-83f00ea9",
              as: "h3",
              children: "Core Values"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-white/80 text-base leading-relaxed",
              renderId: "render-ad53301c",
              as: "p",
              children: "Intercession (2) · Holiness (3) · Mission (4) · Welfare"
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-start gap-4 bg-[#0f131a] border border-white/10 rounded-2xl p-5",
          renderId: "render-a18b77e9",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "flex h-10 w-10 items-center justify-center rounded-xl",
            style: {
              background: "linear-gradient(180deg, rgba(244,208,63,0.25), rgba(194,156,26,0.18))",
              border: "1px solid rgba(255,255,255,0.08)"
            },
            "aria-hidden": "true",
            renderId: "render-e42061a6",
            as: "div",
            children: /* @__PURE__ */ jsx(Quote, {
              className: "w-5 h-5 text-[#C29C1A]"
            })
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-454954bd",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-lg md:text-xl font-semibold text-white mb-1",
              renderId: "render-a2d12e20",
              as: "h3",
              children: "Our Motto"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-white/80 text-base leading-relaxed italic",
              renderId: "render-a4d975bb",
              as: "p",
              children: '"We Believe God, We Believe What God Says" — Ephe. 3:20'
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-start gap-4 bg-[#0f131a] border border-white/10 rounded-2xl p-5",
          renderId: "render-22411412",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "flex h-10 w-10 items-center justify-center rounded-xl",
            style: {
              background: "linear-gradient(180deg, rgba(244,208,63,0.25), rgba(194,156,26,0.18))",
              border: "1px solid rgba(255,255,255,0.08)"
            },
            "aria-hidden": "true",
            renderId: "render-632aadd2",
            as: "div",
            children: /* @__PURE__ */ jsx(Megaphone, {
              className: "w-5 h-5 text-[#C29C1A]"
            })
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-213d2426",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-lg md:text-xl font-semibold text-white mb-1",
              renderId: "render-81d16b09",
              as: "h3",
              children: "Message"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-white/80 text-base leading-relaxed",
              renderId: "render-8669542a",
              as: "p",
              children: '"Reaching the world with the gospel of Holiness with Prosperity" — 2 Peter 1:3'
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-start gap-4 bg-[#0f131a] border border-white/10 rounded-2xl p-5",
          renderId: "render-3e1d087f",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "flex h-10 w-10 items-center justify-center rounded-xl",
            style: {
              background: "linear-gradient(180deg, rgba(244,208,63,0.25), rgba(194,156,26,0.18))",
              border: "1px solid rgba(255,255,255,0.08)"
            },
            "aria-hidden": "true",
            renderId: "render-f87ce513",
            as: "div",
            children: /* @__PURE__ */ jsx(Globe, {
              className: "w-5 h-5 text-[#C29C1A]"
            })
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-5a9330e8",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-lg md:text-xl font-semibold text-white mb-1",
              renderId: "render-40c12a58",
              as: "h3",
              children: "The Mandate"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-white/80 text-base leading-relaxed",
              renderId: "render-ffab643a",
              as: "p",
              children: "Discipling the Whole World — Matthew 28:19"
            })]
          })]
        })]
      })]
    })
  });
}

function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80", "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80", "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80", "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&q=80", "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80", "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80", "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800&q=80", "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80", "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80", "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "relative overflow-hidden h-96",
    renderId: "render-ef7bd100",
    as: "div",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "flex transition-transform duration-500 ease-in-out h-full",
      style: {
        transform: `translateX(-${currentIndex * 100}%)`
      },
      renderId: "render-2431896a",
      as: "div",
      children: images.map((image, index) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "min-w-full h-full",
        renderId: "render-c24d3c9a",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          src: image,
          alt: `Gallery image ${index + 1}`,
          className: "w-full h-full object-cover",
          renderId: "render-6134e80d",
          as: "img"
        })
      }, index))
    })
  });
}

function GallerySection() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    "data-animate": true,
    className: "py-20 px-6 bg-[#0e1219]",
    renderId: "render-20dca1db",
    as: "section",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto",
      renderId: "render-f618dfc0",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-4xl font-bold text-center mb-12 text-white",
        renderId: "render-3a467497",
        as: "h2",
        children: "Our Community in Action"
      }), /* @__PURE__ */ jsx(ImageGallery, {})]
    })
  });
}

function CounselingSection({
  mapsDirectionsUrl
}) {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    "data-animate": true,
    className: "py-20 px-6",
    renderId: "render-0803f263",
    as: "section",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto",
      renderId: "render-ee621498",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f131a] shadow-xl",
        renderId: "render-7b04a314",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "grid md:grid-cols-2 items-stretch",
          renderId: "render-6936ad24",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "p-8 sm:p-12 flex flex-col justify-center",
            renderId: "render-da346049",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4",
              style: {
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)"
              },
              renderId: "render-3a91d9ac",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "w-2 h-2 rounded-full",
                style: {
                  background: "#F4D03F"
                },
                renderId: "render-bfb1338b",
                as: "span"
              }), "Care & Support"]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white",
              renderId: "render-8ed3ba63",
              as: "h2",
              children: "Visit Us for Counseling"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-lg text-white/70 leading-relaxed mb-8",
              renderId: "render-51cd2741",
              as: "p",
              children: "We're here for you. Sit with our pastoral team for private, compassionate guidance rooted in God's word."
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "space-y-4 mb-10",
              renderId: "render-897c556b",
              as: "div",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "flex items-start gap-3",
                renderId: "render-b0928646",
                as: "div",
                children: [/* @__PURE__ */ jsx(Calendar, {
                  className: "w-5 h-5 text-[#C29C1A] mt-0.5"
                }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                  renderId: "render-c8cd7dc8",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "text-sm text-white/60",
                    renderId: "render-6acfb914",
                    as: "p",
                    children: "Available Times"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "text-base text-white font-medium",
                    renderId: "render-a669b52a",
                    as: "p",
                    children: "Sundays: 9 AM – 5 PM · Wednesdays: 6 PM – 8 PM"
                  })]
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "flex items-start gap-3",
                renderId: "render-c94f66f1",
                as: "div",
                children: [/* @__PURE__ */ jsx(Clock, {
                  className: "w-5 h-5 text-[#C29C1A] mt-0.5"
                }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                  renderId: "render-d56fbd97",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "text-sm text-white/60",
                    renderId: "render-c43b1426",
                    as: "p",
                    children: "Session Length"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "text-base text-white font-medium",
                    renderId: "render-f2a3d49e",
                    as: "p",
                    children: "30–45 minutes per session"
                  })]
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "flex items-start gap-3",
                renderId: "render-2e52fde8",
                as: "div",
                children: [/* @__PURE__ */ jsx(MapPin, {
                  className: "w-5 h-5 text-[#C29C1A] mt-0.5"
                }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                  renderId: "render-301c881f",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "text-sm text-white/60",
                    renderId: "render-04180d1e",
                    as: "p",
                    children: "Location"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    href: mapsDirectionsUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-base text-white font-medium underline underline-offset-4 hover:opacity-80",
                    "aria-label": "Open directions to SBBC Auditorium in Google Maps",
                    renderId: "render-d680e80d",
                    as: "a",
                    children: "SBBC Auditorium"
                  })]
                })]
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex flex-col sm:flex-row sm:items-center gap-3",
              renderId: "render-6b850cd7",
              as: "div",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                href: "/contact#book",
                className: "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg",
                style: {
                  background: "linear-gradient(90deg, #F4D03F, #C29C1A)"
                },
                "aria-label": "Book a counseling session",
                renderId: "render-df305cbc",
                as: "a",
                children: ["Book a Session", /* @__PURE__ */ jsx(ArrowRight, {
                  className: "w-5 h-5"
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                href: mapsDirectionsUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 transition-colors duration-200",
                style: {
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)"
                },
                "aria-label": "Get Google Maps directions to SBBC Auditorium",
                renderId: "render-51a6d17e",
                as: "a",
                children: [/* @__PURE__ */ jsx(MapPin, {
                  className: "w-5 h-5 text-white/80"
                }), "Get Directions"]
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "mt-6 flex items-center gap-3 text-sm text-white/70",
              renderId: "render-53900171",
              as: "div",
              children: [/* @__PURE__ */ jsx(Phone, {
                className: "w-4 h-4 text-white/60"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                renderId: "render-cbc34dfe",
                as: "span",
                children: "Prefer to talk first? "
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "https://wa.me/2347064200926",
                className: "font-medium underline underline-offset-4 hover:opacity-80",
                renderId: "render-d9380482",
                as: "a",
                children: "+234 706 420 0926"
              })]
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "relative",
            renderId: "render-4f57480f",
            as: "div",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "relative h-[360px] md:h-full",
              renderId: "render-901dde82",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                src: "https://ucarecdn.com/f0252625-a972-4e17-8fb7-fcf878964dc8/-/resize/1200x/-/quality/smart/-/format/auto/-/sharp/2/",
                srcSet: "https://ucarecdn.com/f0252625-a972-4e17-8fb7-fcf878964dc8/-/resize/768x/-/quality/smart/-/format/auto/-/sharp/2/ 768w, https://ucarecdn.com/f0252625-a972-4e17-8fb7-fcf878964dc8/-/resize/1200x/-/quality/smart/-/format/auto/-/sharp/2/ 1200w, https://ucarecdn.com/f0252625-a972-4e17-8fb7-fcf878964dc8/-/resize/1600x/-/quality/smart/-/format/auto/-/sharp/2/ 1600w, https://ucarecdn.com/f0252625-a972-4e17-8fb7-fcf878964dc8/-/resize/2000x/-/quality/smart/-/format/auto/-/sharp/2/ 2000w",
                sizes: "(min-width: 1024px) 50vw, 100vw",
                alt: "Visit us for counseling",
                className: "absolute inset-0 w-full h-full object-cover",
                loading: "lazy",
                decoding: "async",
                style: {
                  objectPosition: "center top"
                },
                renderId: "render-fc14a095",
                as: "img"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "absolute inset-0",
                style: {
                  background: "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.2))"
                },
                renderId: "render-f3ebc8cf",
                as: "div"
              })]
            })
          })]
        })
      })
    })
  });
}

function NewsSection({
  posts,
  isLoading
}) {
  const topThree = Array.isArray(posts) ? posts.slice(0, 3) : [];
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    "data-animate": true,
    className: "py-20 px-6",
    renderId: "render-92e959ff",
    as: "section",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto",
      renderId: "render-8d2799f3",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "flex items-end justify-between gap-4 mb-8",
        renderId: "render-1411b434",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl md:text-4xl font-bold text-white",
          renderId: "render-332cbbe6",
          as: "h2",
          children: "News & Updates"
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center gap-3",
          renderId: "render-8b505a11",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "/news#live",
            className: "inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg",
            renderId: "render-16e51d86",
            as: "a",
            children: ["Stream Live", /* @__PURE__ */ jsx(ArrowRight, {
              className: "w-5 h-5"
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            href: "/news#updates",
            className: "text-white/80 hover:text-white font-medium",
            renderId: "render-fba021ca",
            as: "a",
            children: "View all updates →"
          })]
        })]
      }), isLoading ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-center text-white/60",
        renderId: "render-752bc970",
        as: "div",
        children: "Loading latest posts…"
      }) : topThree.length > 0 ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
        renderId: "render-0baa814c",
        as: "div",
        children: topThree.map((post) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl transition-all duration-200 hover:-translate-y-1",
          style: {
            background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))",
            borderColor: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)"
          },
          renderId: "render-3bd4c981",
          as: "article",
          children: [post.image_url && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            src: post.image_url,
            alt: post.title,
            className: "w-full h-48 object-cover",
            renderId: "render-6e008581",
            as: "img"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "p-6",
            renderId: "render-d05f2040",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center gap-2 text-sm text-white/60 mb-3",
              renderId: "render-935fe166",
              as: "div",
              children: [/* @__PURE__ */ jsx(Calendar, {
                className: "w-4 h-4"
              }), new Date(post.created_at).toLocaleDateString()]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-xl font-bold text-white mb-3",
              renderId: "render-28e21f26",
              as: "h3",
              children: post.title
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-white/75 mb-4",
              renderId: "render-82378b73",
              as: "p",
              children: post.excerpt || (post.content ? post.content.substring(0, 120) + "..." : "")
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              href: `/news#update-${post.id}`,
              className: "text-[#C29C1A] hover:text-[#F4D03F] font-semibold",
              renderId: "render-55c617eb",
              as: "a",
              children: "Read More →"
            })]
          })]
        }, post.id))
      }) : /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-white/60",
        renderId: "render-6b442947",
        as: "p",
        children: "No updates yet. Check back soon."
      })]
    })
  });
}

function useBlogPosts() {
  return useQuery({
    queryKey: ["blog-posts", "home-latest"],
    queryFn: async () => {
      const response = await fetch("/api/blog-posts");
      if (!response.ok) {
        throw new Error(`When fetching /api/blog-posts, the response was [${response.status}] ${response.statusText}`);
      }
      return response.json();
    }
  });
}

function HomePage() {
  const mapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=8.898111%2C7.256139";
  const {
    data: posts = [],
    isLoading: isLoadingPosts
  } = useBlogPosts();
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen flex flex-col bg-white dark:bg-[#121212]",
    renderId: "render-0b3ad069",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsx(HeroSlider, {}), /* @__PURE__ */ jsx(QuickActionsDock, {
      mapsDirectionsUrl
    }), /* @__PURE__ */ jsx(IntroSection, {}), /* @__PURE__ */ jsx(MetricsBar, {}), /* @__PURE__ */ jsx(GiveOnlineSection, {}), /* @__PURE__ */ jsx(FeaturedVideoSection, {}), /* @__PURE__ */ jsx(YouthMinistrySection, {}), /* @__PURE__ */ jsx(VisionStatement, {}), /* @__PURE__ */ jsx(VisionDetails, {}), /* @__PURE__ */ jsx(GallerySection, {}), /* @__PURE__ */ jsx(CounselingSection, {
      mapsDirectionsUrl
    }), /* @__PURE__ */ jsx(NewsSection, {
      posts,
      isLoading: isLoadingPosts
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$F(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(HomePage, {
      ...props
    })
  });
}

const route1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$F
}, Symbol.toStringTag, { value: 'Module' }));

function useAuth() {
  const callbackUrl = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('callbackUrl') : null;
  const signInWithCredentials = useCallback(options => {
    return signIn("credentials-signin", {
      ...options,
      callbackUrl: callbackUrl ?? options.callbackUrl
    });
  }, [callbackUrl]);
  const signUpWithCredentials = useCallback(options => {
    return signIn("credentials-signup", {
      ...options,
      callbackUrl: callbackUrl ?? options.callbackUrl
    });
  }, [callbackUrl]);
  const signInWithGoogle = useCallback(options => {
    return signIn("google", {
      ...options,
      callbackUrl: callbackUrl ?? options.callbackUrl
    });
  }, [callbackUrl]);
  const signInWithFacebook = useCallback(options => {
    return signIn("facebook", options);
  }, []);
  const signInWithTwitter = useCallback(options => {
    return signIn("twitter", options);
  }, []);
  return {
    signInWithCredentials,
    signUpWithCredentials,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    signOut
  };
}

function LogoutPage() {
  const {
    signOut
  } = useAuth();
  useEffect(() => {
    signOut({
      callbackUrl: "/",
      redirect: true
    });
  }, [signOut]);
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "min-h-screen flex items-center justify-center bg-[#F5F5F7]",
    renderId: "render-972f56eb",
    as: "div",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "text-center",
      renderId: "render-d4f45a08",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-2xl font-bold text-black mb-2",
        renderId: "render-636c79fb",
        as: "h1",
        children: "Signing out…"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-black/60",
        renderId: "render-5d30ecc1",
        as: "p",
        children: "You'll be redirected shortly"
      })]
    })
  });
}

function WrappedPage$E(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(LogoutPage, {
      ...props
    })
  });
}

const route2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$E
}, Symbol.toStringTag, { value: 'Module' }));

function SetPasswordPage() {
  const [status, setStatus] = useState("Setting your password...");
  useEffect(() => {
    fetch("/api/auth/set-my-password").then((res) => res.json()).then((data) => {
      if (data.success) {
        setStatus("✅ Password set successfully!");
        setTimeout(() => {
          window.location.href = "/account/signin";
        }, 2e3);
      } else {
        setStatus("❌ Error: " + (data.error || "Unknown error"));
      }
    }).catch((err) => {
      setStatus("❌ Error: " + err.message);
    });
  }, []);
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "min-h-screen bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] flex items-center justify-center p-6",
    renderId: "render-b3b6bf23",
    as: "div",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl",
      renderId: "render-6a253645",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-2xl font-bold text-black mb-4",
        renderId: "render-eb7fd8c2",
        as: "h1",
        children: "Password Setup"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-lg text-[#2B2B2B] mb-6",
        renderId: "render-9d858762",
        as: "p",
        children: status
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-[#F5F5F5] rounded-lg p-4 text-left",
        renderId: "render-34216f9f",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-sm text-[#6E6E6E] mb-2",
          renderId: "render-7d6b5ebc",
          as: "p",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-0c83fe5f",
            as: "strong",
            children: "Email:"
          }), " grappertechnologies@gmail.com"]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-sm text-[#6E6E6E]",
          renderId: "render-66ca7812",
          as: "p",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-0ea937a6",
            as: "strong",
            children: "Password:"
          }), " 20000000"]
        })]
      }), status.includes("✅") && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "mt-4 text-sm text-[#6E6E6E]",
        renderId: "render-f35d65b2",
        as: "p",
        children: "Redirecting to sign in..."
      })]
    })
  });
}

function WrappedPage$D(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SetPasswordPage, {
      ...props
    })
  });
}

const route3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$D
}, Symbol.toStringTag, { value: 'Module' }));

function SignInPage() {
  const {
    signInWithCredentials
  } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const callbackUrlFromQuery = useMemo(() => {
    if (typeof window === "undefined") return void 0;
    const cb = new URLSearchParams(window.location.search).get("callbackUrl");
    return cb || void 0;
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const auto = params.get("auto");
    const e = params.get("email");
    const p = params.get("password");
    if (auto === "1" && e && p) {
      setEmail(e);
      setPassword(p);
      setTimeout(() => {
        onSubmit(new Event("submit"));
      }, 50);
    }
  }, []);
  const onSubmit = async (e) => {
    if (e?.preventDefault) e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithCredentials({
        email: email.trim(),
        password,
        callbackUrl: callbackUrlFromQuery || "/admin",
        redirect: true
      });
    } catch (err) {
      console.error(err);
      setError("Could not sign you in. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "min-h-screen flex items-center justify-center bg-[#F5F5F7] px-6",
    renderId: "render-88a0f2b0",
    as: "div",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8",
      renderId: "render-3b2d1fb8",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-3xl font-bold text-black mb-2",
        renderId: "render-df2208e5",
        as: "h1",
        children: "Sign in"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-black/60 mb-8",
        renderId: "render-e330d58a",
        as: "p",
        children: "Access your dashboard"
      }), error && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm",
        renderId: "render-95bd7d8d",
        as: "div",
        children: error
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        onSubmit,
        className: "space-y-6",
        renderId: "render-c06f5f15",
        as: "form",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-be583dfa",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "block text-sm font-medium text-black mb-2",
            renderId: "render-b7057059",
            as: "label",
            children: "Email"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true,
            className: "w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C29C1A]",
            placeholder: "you@example.com",
            renderId: "render-dedc1a83",
            as: "input"
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-769e79e2",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "block text-sm font-medium text-black mb-2",
            renderId: "render-2635be2d",
            as: "label",
            children: "Password"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "relative",
            renderId: "render-7a9f479a",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              type: "button",
              "aria-label": showPassword ? "Hide password" : "Show password",
              onClick: () => setShowPassword((v) => !v),
              className: "absolute left-3 top-1/2 -translate-y-1/2 p-1 text-black/60 hover:text-black focus:outline-none",
              renderId: "render-c8312030",
              as: "button",
              children: showPassword ? /* @__PURE__ */ jsx(EyeOff, {
                size: 18
              }) : /* @__PURE__ */ jsx(Eye, {
                size: 18
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              type: showPassword ? "text" : "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              required: true,
              className: "w-full pl-10 pr-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C29C1A]",
              placeholder: "••••••••",
              renderId: "render-f338ef2b",
              as: "input"
            })]
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          type: "submit",
          disabled: loading,
          className: "w-full py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] transition-all duration-200 disabled:opacity-50",
          renderId: "render-61fc1302",
          as: "button",
          children: loading ? "Signing in…" : "Sign In"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "mt-6 text-center text-sm text-black/60",
        renderId: "render-3dbc4b37",
        as: "p",
        children: ["New here?", " ", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: "/account/signup",
          className: "text-[#C29C1A] font-medium hover:underline",
          renderId: "render-73e484bf",
          as: "a",
          children: "Create an account"
        })]
      })]
    })
  });
}

function WrappedPage$C(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SignInPage, {
      ...props
    })
  });
}

const route4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$C
}, Symbol.toStringTag, { value: 'Module' }));

function SignUpPage() {
  const {
    signUpWithCredentials
  } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const callbackUrlFromQuery = useMemo(() => {
    if (typeof window === "undefined") return void 0;
    const cb = new URLSearchParams(window.location.search).get("callbackUrl");
    return cb || void 0;
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      await signUpWithCredentials({
        email: email.trim(),
        password,
        callbackUrl: callbackUrlFromQuery || "/admin",
        redirect: true
      });
    } catch (err) {
      console.error(err);
      setError("Could not create your account. Try a different email.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "min-h-screen flex items-center justify-center bg-[#F5F5F7] px-6",
    renderId: "render-5046d370",
    as: "div",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8",
      renderId: "render-6332c060",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-3xl font-bold text-black mb-2",
        renderId: "render-e1c69e6d",
        as: "h1",
        children: "Create account"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-black/60 mb-8",
        renderId: "render-0cc68d59",
        as: "p",
        children: "Sign up to get access"
      }), error && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm",
        renderId: "render-225a99e3",
        as: "div",
        children: error
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        onSubmit,
        className: "space-y-6",
        renderId: "render-6e7e1ae5",
        as: "form",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-516af1a7",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "block text-sm font-medium text-black mb-2",
            renderId: "render-50bb8ff5",
            as: "label",
            children: "Email"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true,
            className: "w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C29C1A]",
            placeholder: "you@example.com",
            renderId: "render-b8f751e8",
            as: "input"
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-ddcde6ba",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "block text-sm font-medium text-black mb-2",
            renderId: "render-956f4d89",
            as: "label",
            children: "Password"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            required: true,
            className: "w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C29C1A]",
            placeholder: "At least 8 characters",
            renderId: "render-34d1c462",
            as: "input"
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-424f98a8",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "block text-sm font-medium text-black mb-2",
            renderId: "render-a5586990",
            as: "label",
            children: "Confirm Password"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "password",
            value: confirm,
            onChange: (e) => setConfirm(e.target.value),
            required: true,
            className: "w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C29C1A]",
            placeholder: "Re-enter password",
            renderId: "render-80a01373",
            as: "input"
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          type: "submit",
          disabled: loading,
          className: "w-full py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] transition-all duration-200 disabled:opacity-50",
          renderId: "render-674e2337",
          as: "button",
          children: loading ? "Creating account…" : "Sign Up"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "mt-6 text-center text-sm text-black/60",
        renderId: "render-cac223df",
        as: "p",
        children: ["Already have an account?", " ", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: "/account/signin",
          className: "text-[#C29C1A] font-medium hover:underline",
          renderId: "render-f6e5de0e",
          as: "a",
          children: "Sign in"
        })]
      })]
    })
  });
}

function WrappedPage$B(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SignUpPage, {
      ...props
    })
  });
}

const route5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$B
}, Symbol.toStringTag, { value: 'Module' }));

const useUser = () => {
  const {
    data: session,
    status
  } = useSession();
  const id = session?.user?.id;
  const [user, setUser] = React.useState(session?.user ?? null);
  const fetchUser = React.useCallback(async session => {
    return session?.user;
  }, []);
  const refetchUser = React.useCallback(() => {
    if (process.env.NEXT_PUBLIC_CREATE_ENV === "PRODUCTION") {
      if (id) {
        fetchUser(session).then(setUser);
      } else {
        setUser(null);
      }
    }
  }, [fetchUser, id]);
  React.useEffect(refetchUser, [refetchUser]);
  if (process.env.NEXT_PUBLIC_CREATE_ENV !== "PRODUCTION") {
    return {
      user,
      data: session?.user || null,
      loading: status === 'loading',
      refetch: refetchUser
    };
  }
  return {
    user,
    data: user,
    loading: status === 'loading' || status === 'authenticated' && !user,
    refetch: refetchUser
  };
};

function useAdminData() {
  const {
    data: metrics,
    isLoading: metricsLoading,
    error: metricsError
  } = useQuery({
    queryKey: ["metrics"],
    queryFn: async () => {
      const res = await fetch("/api/metrics");
      if (!res.ok) {
        throw new Error(`When fetching /api/metrics, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    }
  });
  const {
    data: admissions = [],
    isLoading: admissionsLoading
  } = useQuery({
    queryKey: ["admissions"],
    queryFn: async () => {
      const res = await fetch("/api/school-admission");
      if (!res.ok) {
        throw new Error(`When fetching /api/school-admission, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    }
  });
  const {
    data: discipleshipRequests = [],
    isLoading: discipleshipLoading
  } = useQuery({
    queryKey: ["discipleship"],
    queryFn: async () => {
      const res = await fetch("/api/discipleship");
      if (!res.ok) {
        throw new Error(`When fetching /api/discipleship, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    }
  });
  const {
    data: departmentMembers = [],
    isLoading: departmentsLoading
  } = useQuery({
    queryKey: ["department-join"],
    queryFn: async () => {
      const res = await fetch("/api/department-join");
      if (!res.ok) {
        throw new Error(`When fetching /api/department-join, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    }
  });
  const {
    data: counselingBookings = [],
    isLoading: counselingLoading
  } = useQuery({
    queryKey: ["counseling-booking"],
    queryFn: async () => {
      const res = await fetch("/api/counseling-booking");
      if (!res.ok) {
        throw new Error(`When fetching /api/counseling-booking, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    }
  });
  const globalLoading = metricsLoading || admissionsLoading || discipleshipLoading || departmentsLoading || counselingLoading;
  return {
    metrics,
    metricsError,
    admissions,
    discipleshipRequests,
    departmentMembers,
    counselingBookings,
    globalLoading
  };
}

function DashboardHeader() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fsError, setFsError] = useState(null);
  useEffect(() => {
    if (typeof document === "undefined") return;
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);
  const enterFullscreen = async () => {
    setFsError(null);
    try {
      const el = document.documentElement;
      const anyEl = el;
      if (el.requestFullscreen) {
        await el.requestFullscreen();
      } else if (anyEl.webkitRequestFullscreen) {
        await anyEl.webkitRequestFullscreen();
      } else if (anyEl.msRequestFullscreen) {
        await anyEl.msRequestFullscreen();
      } else {
        setFsError("Fullscreen not supported by this browser");
      }
    } catch (e) {
      console.error(e);
      setFsError("Could not enter fullscreen. Your browser may be blocking it.");
    }
  };
  const exitFullscreen = async () => {
    setFsError(null);
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
      }
    } catch (e) {
      console.error(e);
      setFsError("Could not exit fullscreen");
    }
  };
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "bg-white border-b border-[#E9E9E9] px-8 py-6",
    renderId: "render-5e313c18",
    as: "div",
    children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto flex items-center justify-between gap-4",
      renderId: "render-11cf446f",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        renderId: "render-785cee8c",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black",
          renderId: "render-cb0ab714",
          as: "h1",
          children: "Admin Dashboard"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-[#6E6E6E] mt-1",
          renderId: "render-df445f5e",
          as: "p",
          children: "Manage your church website content and view submissions"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "flex items-center gap-3",
        renderId: "render-0a9b42c7",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          type: "button",
          onClick: isFullscreen ? exitFullscreen : enterFullscreen,
          className: "inline-flex items-center gap-2 rounded-full px-4 py-2 bg-black text-white hover:bg-[#111] active:bg-[#000] transition-colors shadow-sm",
          title: isFullscreen ? "Exit Fullscreen (Esc)" : "External Preview (Fullscreen)",
          renderId: "render-1a9ec4f0",
          as: "button",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            "aria-hidden": true,
            className: "relative inline-block w-4 h-4",
            renderId: "render-90c9e228",
            as: "span",
            children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(135deg, transparent 40%, white 40% 60%, transparent 60%)",
                maskImage: "linear-gradient(135deg, transparent 47%, black 47% 53%, transparent 53%)"
              },
              renderId: "render-979af6e5",
              as: "span"
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "font-semibold text-sm",
            renderId: "render-c7278ef8",
            as: "span",
            children: isFullscreen ? "Exit Fullscreen" : "External Preview"
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: "/admin?bypass=1",
          target: "_blank",
          rel: "noreferrer noopener",
          className: "rounded-full px-4 py-2 border border-[#E9E9E9] text-[#111] hover:bg-[#F7F7F7] transition-colors",
          title: "Open dashboard in a new tab",
          renderId: "render-e2e1d356",
          as: "a",
          children: "Open in new tab →"
        })]
      })]
    }), fsError ? /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto mt-2 text-sm text-[#9b1c1c] bg-[#fff5f5] border border-[#ffd6d6] rounded-md px-3 py-2",
      renderId: "render-efa01101",
      as: "div",
      children: [fsError, " — try the “Open in new tab” option instead."]
    }) : null, /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto mt-1 text-xs text-[#6E6E6E]",
      renderId: "render-7a7fbcf5",
      as: "div",
      children: "Tip: Press Esc to exit fullscreen."
    })]
  });
}

const tabs = [
  {
    id: "overview",
    label: "Overview",
    icon: TrendingUp
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: Activity
  },
  {
    id: "submissions",
    label: "All Submissions",
    icon: FileText
  },
  {
    id: "admissions",
    label: "School Admissions",
    icon: GraduationCap
  },
  // Added new Students tab between Admissions and Discipleship
  {
    id: "students",
    label: "Students",
    icon: Users
  },
  {
    id: "discipleship",
    label: "Discipleship",
    icon: Users
  },
  {
    id: "departments",
    label: "Departments",
    icon: Mail
  },
  {
    id: "counseling",
    label: "Counseling",
    icon: Mail
  },
  {
    id: "seo",
    label: "SEO",
    icon: Search
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings
  }
];
function NavigationTabs({
  activeTab,
  setActiveTab
}) {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "bg-white border-b border-[#E9E9E9] px-8",
    renderId: "render-ca740cad",
    as: "div",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto",
      renderId: "render-2373a0f0",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex gap-6 overflow-x-auto",
        renderId: "render-cf9fa63a",
        as: "div",
        children: tabs.map((tab) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          onClick: () => setActiveTab(tab.id),
          className: `flex items-center gap-2 px-4 py-4 border-b-2 transition-colors ${activeTab === tab.id ? "border-[#F4D03F] text-black" : "border-transparent text-[#6E6E6E] hover:text-black"}`,
          renderId: "render-c04e59ca",
          as: "button",
          children: [/* @__PURE__ */ jsx(tab.icon, {
            className: "w-5 h-5"
          }), tab.label]
        }, tab.id))
      })
    })
  });
}

function OverviewTab({
  metrics,
  admissions,
  discipleshipRequests,
  departmentMembers
}) {
  const {
    data: allStudents = [],
    isLoading: studentsLoading,
    error: studentsError
  } = useQuery({
    queryKey: ["students-all"],
    queryFn: async () => {
      const res = await fetch("/api/students");
      if (!res.ok) {
        throw new Error(`When fetching /api/students, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    }
  });
  const {
    data: allPayments = [],
    isLoading: paymentsLoading,
    error: paymentsError
  } = useQuery({
    queryKey: ["student-payments-all"],
    queryFn: async () => {
      const res = await fetch("/api/student-payments");
      if (!res.ok) {
        throw new Error(`When fetching /api/student-payments, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    }
  });
  const normalize = (s) => String(s || "").toLowerCase();
  const matchers = [{
    key: "lawson",
    label: "Lawson University",
    match: (s) => normalize(s).includes("lawson")
  }, {
    key: "sunrise",
    label: "Sunrise Theological School",
    match: (s) => {
      const n = normalize(s);
      return n.includes("sunrise") || n.includes("seminary");
    }
  }, {
    key: "dka",
    label: "Deep Knowledge Academy",
    match: (s) => normalize(s).includes("deep knowledge")
  }];
  const studentSchoolMap = {};
  for (const st of allStudents) {
    const name = st?.school_name;
    let matchedKey = null;
    for (const m of matchers) {
      if (m.match(name)) {
        matchedKey = m.key;
        break;
      }
    }
    if (matchedKey) {
      studentSchoolMap[st.id] = matchedKey;
    }
  }
  const admissionsBySchool = {
    lawson: (admissions || []).filter((a) => matchers[0].match(a?.school_name)),
    sunrise: (admissions || []).filter((a) => matchers[1].match(a?.school_name)),
    dka: (admissions || []).filter((a) => matchers[2].match(a?.school_name))
  };
  const studentsBySchool = {
    lawson: (allStudents || []).filter((s) => matchers[0].match(s?.school_name)),
    sunrise: (allStudents || []).filter((s) => matchers[1].match(s?.school_name)),
    dka: (allStudents || []).filter((s) => matchers[2].match(s?.school_name))
  };
  const paymentsBySchool = {
    lawson: [],
    sunrise: [],
    dka: []
  };
  for (const p of allPayments || []) {
    const sk = studentSchoolMap[p.student_id];
    if (sk && paymentsBySchool[sk]) {
      paymentsBySchool[sk].push(p);
    }
  }
  const toNumber = (v) => {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : 0;
  };
  const schoolCards = matchers.map((m) => {
    const a = admissionsBySchool[m.key] || [];
    const s = studentsBySchool[m.key] || [];
    const pays = paymentsBySchool[m.key] || [];
    const confirmedPays = pays.filter((p) => Boolean(p?.confirmed));
    const confirmedCount = confirmedPays.length;
    const confirmedTotal = confirmedPays.reduce((sum, p) => sum + toNumber(p?.amount), 0);
    return {
      key: m.key,
      label: m.label,
      applicants: a.length,
      students: s.length,
      paymentsConfirmedCount: confirmedCount,
      paymentsConfirmedTotal: confirmedTotal
    };
  });
  const loadingSchools = studentsLoading || paymentsLoading;
  if (studentsError) {
    console.error(studentsError);
  }
  if (paymentsError) {
    console.error(paymentsError);
  }
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    renderId: "render-ce92eea5",
    as: "div",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "text-2xl font-bold text-black mb-6",
      renderId: "render-482adee8",
      as: "h2",
      children: "Overview"
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "grid md:grid-cols-4 gap-6 mb-8",
      renderId: "render-8ee242b2",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
        renderId: "render-dd1629a8",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-[#6E6E6E] text-sm mb-1",
          renderId: "render-56596e81",
          as: "div",
          children: "Total Converts"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black",
          renderId: "render-9b6b5221",
          as: "div",
          children: metrics?.converts || 0
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
        renderId: "render-8acfc09d",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-[#6E6E6E] text-sm mb-1",
          renderId: "render-9ac13de5",
          as: "div",
          children: "Displaced Supported"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black",
          renderId: "render-d4171b05",
          as: "div",
          children: metrics?.displaced_supported || 0
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
        renderId: "render-b9b96aa0",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-[#6E6E6E] text-sm mb-1",
          renderId: "render-f174b5df",
          as: "div",
          children: "Cities Reached"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black",
          renderId: "render-6d8e559e",
          as: "div",
          children: metrics?.cities || 0
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
        renderId: "render-4ef32580",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-[#6E6E6E] text-sm mb-1",
          renderId: "render-0a0597a1",
          as: "div",
          children: "Churches"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black",
          renderId: "render-ee8b4bb2",
          as: "div",
          children: metrics?.churches || 0
        })]
      })]
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "grid md:grid-cols-3 gap-6 mb-8",
      renderId: "render-5c063c6e",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
        renderId: "render-a627a920",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center gap-3 mb-4",
          renderId: "render-49c8cad8",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "w-12 h-12 bg-[#F4D03F] bg-opacity-20 rounded-lg flex items-center justify-center",
            renderId: "render-f1bbdca5",
            as: "div",
            children: /* @__PURE__ */ jsx(GraduationCap, {
              className: "w-6 h-6 text-[#C29C1A]"
            })
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-af57fa46",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-sm text-[#6E6E6E]",
              renderId: "render-ab4f1b2e",
              as: "div",
              children: "School Applications"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-2xl font-bold text-black",
              renderId: "render-884778cf",
              as: "div",
              children: admissions?.length || 0
            })]
          })]
        })
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
        renderId: "render-73bb7d05",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center gap-3 mb-4",
          renderId: "render-670f757a",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "w-12 h-12 bg-[#4FD1C5] bg-opacity-20 rounded-lg flex items-center justify-center",
            renderId: "render-b8712517",
            as: "div",
            children: /* @__PURE__ */ jsx(Users, {
              className: "w-6 h-6 text-[#38B2AC]"
            })
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-2b4057e4",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-sm text-[#6E6E6E]",
              renderId: "render-bc06e692",
              as: "div",
              children: "Discipleship Requests"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-2xl font-bold text-black",
              renderId: "render-5a6dcb03",
              as: "div",
              children: discipleshipRequests?.length || 0
            })]
          })]
        })
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
        renderId: "render-1fd9c2b4",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center gap-3 mb-4",
          renderId: "render-04a59bd2",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "w-12 h-12 bg-[#9F7AEA] bg-opacity-20 rounded-lg flex items-center justify-center",
            renderId: "render-3bc82f66",
            as: "div",
            children: /* @__PURE__ */ jsx(Mail, {
              className: "w-6 h-6 text-[#805AD5]"
            })
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-5c346c71",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-sm text-[#6E6E6E]",
              renderId: "render-5376f63d",
              as: "div",
              children: "Department Members"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-2xl font-bold text-black",
              renderId: "render-6af5c589",
              as: "div",
              children: departmentMembers?.length || 0
            })]
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "text-xl font-semibold text-black mb-4",
      renderId: "render-07c61d40",
      as: "h3",
      children: "School Metrics"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "grid md:grid-cols-3 gap-6",
      renderId: "render-4974bfca",
      as: "div",
      children: schoolCards.map((sc) => {
        const applicants = sc.applicants;
        const studentsCount = sc.students;
        const confirmedCount = sc.paymentsConfirmedCount;
        const confirmedTotal = sc.paymentsConfirmedTotal;
        const totalLabel = loadingSchools ? "—" : confirmedTotal.toLocaleString(void 0, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
          renderId: "render-acb7a0aa",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-center justify-between mb-4",
            renderId: "render-92608509",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-lg font-bold text-black",
              renderId: "render-6013bfd8",
              as: "div",
              children: sc.label
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-xs px-2 py-1 rounded-full border border-[#E9E9E9] text-[#6E6E6E]",
              renderId: "render-0a3bb78b",
              as: "span",
              children: loadingSchools ? "Loading" : "Live"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "grid grid-cols-2 gap-4",
            renderId: "render-3f1bbc5c",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center gap-3",
              renderId: "render-7301c460",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center",
                renderId: "render-b99fa3a3",
                as: "div",
                children: /* @__PURE__ */ jsx(FileText, {
                  className: "w-5 h-5 text-[#3B82F6]"
                })
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-329c1078",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "text-xs text-[#6E6E6E]",
                  renderId: "render-43e84f8e",
                  as: "div",
                  children: "Applicants"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "text-xl font-semibold text-black",
                  renderId: "render-c1b9d237",
                  as: "div",
                  children: applicants
                })]
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center gap-3",
              renderId: "render-b47743e8",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "w-10 h-10 bg-[#ECFDF5] rounded-lg flex items-center justify-center",
                renderId: "render-057ed88a",
                as: "div",
                children: /* @__PURE__ */ jsx(GraduationCap, {
                  className: "w-5 h-5 text-[#10B981]"
                })
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-c01a96ea",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "text-xs text-[#6E6E6E]",
                  renderId: "render-777b1fa5",
                  as: "div",
                  children: "Students"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "text-xl font-semibold text-black",
                  renderId: "render-e973713b",
                  as: "div",
                  children: studentsCount
                })]
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center gap-3",
              renderId: "render-19deb438",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "w-10 h-10 bg-[#F0FDF4] rounded-lg flex items-center justify-center",
                renderId: "render-9286728e",
                as: "div",
                children: /* @__PURE__ */ jsx(CheckCircle, {
                  className: "w-5 h-5 text-[#16A34A]"
                })
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-4886fbf8",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "text-xs text-[#6E6E6E]",
                  renderId: "render-60dcced1",
                  as: "div",
                  children: "Payments (confirmed)"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "text-xl font-semibold text-black",
                  renderId: "render-11a4d7f8",
                  as: "div",
                  children: confirmedCount
                })]
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center gap-3",
              renderId: "render-830198da",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "w-10 h-10 bg-[#FEFCE8] rounded-lg flex items-center justify-center",
                renderId: "render-f073bb16",
                as: "div",
                children: /* @__PURE__ */ jsx(Banknote, {
                  className: "w-5 h-5 text-[#CA8A04]"
                })
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-b29ebb37",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "text-xs text-[#6E6E6E]",
                  renderId: "render-0eb6592a",
                  as: "div",
                  children: "Total Paid (NGN)"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "text-xl font-semibold text-black",
                  renderId: "render-1a914ad7",
                  as: "div",
                  children: totalLabel
                })]
              })]
            })]
          })]
        }, sc.key);
      })
    })]
  });
}

const lastNDays = n => {
  const days = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push(key);
  }
  return days;
};
const toDateKey = d => new Date(d).toISOString().slice(0, 10);
const prepareLineChartData = (days, admissions, discipleshipRequests, departmentMembers, counselingBookings) => {
  return days.map(day => {
    const a = admissions.filter(x => toDateKey(x.created_at) === day).length;
    const d = discipleshipRequests.filter(x => toDateKey(x.created_at) === day).length;
    const m = departmentMembers.filter(x => toDateKey(x.created_at) === day).length;
    const c = counselingBookings.filter(x => toDateKey(x.created_at) === day).length;
    return {
      day,
      Admissions: a,
      Discipleship: d,
      Departments: m,
      Counseling: c,
      Total: a + d + m + c
    };
  });
};
const prepareAdmissionsBySchool = admissions => {
  const map = new Map();
  for (const a of admissions) {
    const key = a.school_name || "(Unknown)";
    map.set(key, (map.get(key) || 0) + 1);
  }
  return Array.from(map.entries()).map(([name, value]) => ({
    name,
    value
  }));
};
const prepareDepartmentBreakdown = departmentMembers => {
  const map = new Map();
  for (const m of departmentMembers) {
    const key = m.department || "(Unspecified)";
    map.set(key, (map.get(key) || 0) + 1);
  }
  return Array.from(map.entries()).map(([name, count]) => ({
    name,
    count
  }));
};
const CHART_COLORS = ["#F4D03F", "#9F7AEA", "#4FD1C5", "#F56565", "#63B3ED", "#48BB78", "#ED8936"];

// --- NEW HELPERS FOR RICHER ANALYTICS ---

// Return last N months as { key: 'YYYY-MM', label: 'Mon YYYY' }
const lastNMonths = n => {
  const out = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const label = d.toLocaleString(undefined, {
      month: "short",
      year: "numeric"
    });
    out.push({
      key,
      label
    });
  }
  return out;
};
const toMonthKey = d => {
  const date = new Date(d);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
};
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekdayIndex = date => {
  const js = new Date(date).getDay(); // 0=Sun ... 6=Sat
  return js === 0 ? 6 : js - 1; // 0..6 mapped to Mon..Sun
};
const prepareSubmissionTotals = (admissions = [], discipleshipRequests = [], departmentMembers = [], counselingBookings = []) => {
  const totals = {
    admissions: admissions.length,
    discipleship: discipleshipRequests.length,
    departments: departmentMembers.length,
    counseling: counselingBookings.length
  };
  return {
    ...totals,
    all: totals.admissions + totals.discipleship + totals.departments + totals.counseling
  };
};
const prepareMonthlyTrend = (admissions = [], discipleshipRequests = [], departmentMembers = [], counselingBookings = [], months = 6) => {
  const monthsList = lastNMonths(months);
  return monthsList.map(({
    key,
    label
  }) => {
    const a = admissions.filter(x => toMonthKey(x.created_at) === key).length;
    const d = discipleshipRequests.filter(x => toMonthKey(x.created_at) === key).length;
    const m = departmentMembers.filter(x => toMonthKey(x.created_at) === key).length;
    const c = counselingBookings.filter(x => toMonthKey(x.created_at) === key).length;
    return {
      monthKey: key,
      month: label,
      Admissions: a,
      Discipleship: d,
      Departments: m,
      Counseling: c,
      Total: a + d + m + c
    };
  });
};
const prepareWeekdayBreakdown = (admissions = [], discipleshipRequests = [], departmentMembers = [], counselingBookings = []) => {
  const rows = weekdays.map(name => ({
    name,
    Admissions: 0,
    Discipleship: 0,
    Departments: 0,
    Counseling: 0,
    Total: 0
  }));
  const bump = (arr, field) => {
    for (const x of arr) {
      const idx = weekdayIndex(x.created_at);
      rows[idx][field] += 1;
      rows[idx].Total += 1;
    }
  };
  bump(admissions, "Admissions");
  bump(discipleshipRequests, "Discipleship");
  bump(departmentMembers, "Departments");
  bump(counselingBookings, "Counseling");
  return rows;
};
const prepareHourDistribution = (admissions = [], discipleshipRequests = [], departmentMembers = [], counselingBookings = []) => {
  const rows = Array.from({
    length: 24
  }, (_, h) => ({
    hour: h,
    label: `${h}:00`,
    Admissions: 0,
    Discipleship: 0,
    Departments: 0,
    Counseling: 0,
    Total: 0
  }));
  const bump = (arr, field) => {
    for (const x of arr) {
      const hour = new Date(x.created_at).getHours();
      if (Number.isInteger(hour) && hour >= 0 && hour <= 23) {
        rows[hour][field] += 1;
        rows[hour].Total += 1;
      }
    }
  };
  bump(admissions, "Admissions");
  bump(discipleshipRequests, "Discipleship");
  bump(departmentMembers, "Departments");
  bump(counselingBookings, "Counseling");
  return rows;
};

function AnalyticsTab({
  admissions,
  discipleshipRequests,
  departmentMembers,
  counselingBookings
}) {
  const days14 = lastNDays(14);
  const lineSeries = useMemo(() => prepareLineChartData(days14, admissions, discipleshipRequests, departmentMembers, counselingBookings), [days14, admissions, discipleshipRequests, departmentMembers, counselingBookings]);
  const admissionsBySchool = useMemo(() => prepareAdmissionsBySchool(admissions), [admissions]);
  const deptBreakdown = useMemo(() => prepareDepartmentBreakdown(departmentMembers), [departmentMembers]);
  const totals = useMemo(() => prepareSubmissionTotals(admissions, discipleshipRequests, departmentMembers, counselingBookings), [admissions, discipleshipRequests, departmentMembers, counselingBookings]);
  const monthlyTrend = useMemo(() => prepareMonthlyTrend(admissions, discipleshipRequests, departmentMembers, counselingBookings, 6), [admissions, discipleshipRequests, departmentMembers, counselingBookings]);
  const weekday = useMemo(() => prepareWeekdayBreakdown(admissions, discipleshipRequests, departmentMembers, counselingBookings), [admissions, discipleshipRequests, departmentMembers, counselingBookings]);
  const hourDist = useMemo(() => prepareHourDistribution(admissions, discipleshipRequests, departmentMembers, counselingBookings), [admissions, discipleshipRequests, departmentMembers, counselingBookings]);
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    renderId: "render-88387cf8",
    as: "div",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "text-2xl font-bold text-black mb-6",
      renderId: "render-d888f348",
      as: "h2",
      children: "Analytics"
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "grid md:grid-cols-4 gap-4 mb-6",
      renderId: "render-6da33c3c",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-4 border border-[#E9E9E9]",
        renderId: "render-c12bfedb",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-xs text-[#6E6E6E]",
          renderId: "render-ab2fcef4",
          as: "div",
          children: "Admissions"
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center justify-between mt-1",
          renderId: "render-372cacb6",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-semibold text-black",
            renderId: "render-d3d76b6b",
            as: "div",
            children: totals.admissions
          }), /* @__PURE__ */ jsx(TrendingUp, {
            className: "w-5 h-5 text-[#9F7AEA]"
          })]
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-4 border border-[#E9E9E9]",
        renderId: "render-d94f08cd",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-xs text-[#6E6E6E]",
          renderId: "render-e729e5b3",
          as: "div",
          children: "Discipleship"
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center justify-between mt-1",
          renderId: "render-da7d065d",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-semibold text-black",
            renderId: "render-79b02602",
            as: "div",
            children: totals.discipleship
          }), /* @__PURE__ */ jsx(TrendingUp, {
            className: "w-5 h-5 text-[#4FD1C5]"
          })]
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-4 border border-[#E9E9E9]",
        renderId: "render-39ecb780",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-xs text-[#6E6E6E]",
          renderId: "render-7f397f06",
          as: "div",
          children: "Department Signups"
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center justify-between mt-1",
          renderId: "render-c16132e1",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-semibold text-black",
            renderId: "render-c6fd1a85",
            as: "div",
            children: totals.departments
          }), /* @__PURE__ */ jsx(TrendingUp, {
            className: "w-5 h-5 text-[#F4D03F]"
          })]
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-4 border border-[#E9E9E9]",
        renderId: "render-f35bb00f",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-xs text-[#6E6E6E]",
          renderId: "render-80478ae0",
          as: "div",
          children: "Counseling"
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center justify-between mt-1",
          renderId: "render-57609a39",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-semibold text-black",
            renderId: "render-fe11878a",
            as: "div",
            children: totals.counseling
          }), /* @__PURE__ */ jsx(TrendingUp, {
            className: "w-5 h-5 text-[#F56565]"
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "grid lg:grid-cols-3 gap-6",
      renderId: "render-06f0015b",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
        renderId: "render-6cab98ee",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center gap-2 mb-4 text-black font-semibold",
          renderId: "render-b34a4765",
          as: "div",
          children: [/* @__PURE__ */ jsx(Activity, {
            className: "w-5 h-5"
          }), " Submissions (Last 14 days)"]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "w-full h-56",
          renderId: "render-c9e783f4",
          as: "div",
          children: /* @__PURE__ */ jsx(ResponsiveContainer, {
            width: "100%",
            height: "100%",
            children: /* @__PURE__ */ jsxs(LineChart, {
              data: lineSeries,
              margin: {
                top: 5,
                right: 10,
                left: 0,
                bottom: 0
              },
              children: [/* @__PURE__ */ jsx(CartesianGrid, {
                strokeDasharray: "3 3",
                stroke: "#eee"
              }), /* @__PURE__ */ jsx(XAxis, {
                dataKey: "day",
                tick: {
                  fontSize: 12
                }
              }), /* @__PURE__ */ jsx(YAxis, {
                allowDecimals: false,
                tick: {
                  fontSize: 12
                }
              }), /* @__PURE__ */ jsx(Tooltip, {}), /* @__PURE__ */ jsx(Legend, {}), /* @__PURE__ */ jsx(Line, {
                type: "monotone",
                dataKey: "Admissions",
                stroke: "#9F7AEA",
                strokeWidth: 2,
                dot: false
              }), /* @__PURE__ */ jsx(Line, {
                type: "monotone",
                dataKey: "Discipleship",
                stroke: "#4FD1C5",
                strokeWidth: 2,
                dot: false
              }), /* @__PURE__ */ jsx(Line, {
                type: "monotone",
                dataKey: "Departments",
                stroke: "#F4D03F",
                strokeWidth: 2,
                dot: false
              }), /* @__PURE__ */ jsx(Line, {
                type: "monotone",
                dataKey: "Counseling",
                stroke: "#F56565",
                strokeWidth: 2,
                dot: false
              })]
            })
          })
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
        renderId: "render-b5da99e4",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center gap-2 mb-4 text-black font-semibold",
          renderId: "render-186aa0a8",
          as: "div",
          children: [/* @__PURE__ */ jsx(PieChart, {
            className: "w-5 h-5"
          }), " Admissions by School"]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "w-full h-56",
          renderId: "render-7fd9dd7b",
          as: "div",
          children: /* @__PURE__ */ jsx(ResponsiveContainer, {
            width: "100%",
            height: "100%",
            children: /* @__PURE__ */ jsxs(PieChart$1, {
              children: [/* @__PURE__ */ jsx(Pie, {
                data: admissionsBySchool,
                dataKey: "value",
                nameKey: "name",
                outerRadius: 80,
                label: true,
                children: admissionsBySchool.map((entry, index) => /* @__PURE__ */ jsx(Cell, {
                  fill: CHART_COLORS[index % CHART_COLORS.length]
                }, `cell-${index}`))
              }), /* @__PURE__ */ jsx(Tooltip, {}), /* @__PURE__ */ jsx(Legend, {})]
            })
          })
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
        renderId: "render-9abe9e67",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center gap-2 mb-4 text-black font-semibold",
          renderId: "render-6ae3815b",
          as: "div",
          children: [/* @__PURE__ */ jsx(BarChart3, {
            className: "w-5 h-5"
          }), " Department Signups"]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "w-full h-56",
          renderId: "render-1bf93c34",
          as: "div",
          children: /* @__PURE__ */ jsx(ResponsiveContainer, {
            width: "100%",
            height: "100%",
            children: /* @__PURE__ */ jsxs(BarChart, {
              data: deptBreakdown,
              margin: {
                top: 5,
                right: 10,
                left: 0,
                bottom: 0
              },
              children: [/* @__PURE__ */ jsx(CartesianGrid, {
                strokeDasharray: "3 3",
                stroke: "#eee"
              }), /* @__PURE__ */ jsx(XAxis, {
                dataKey: "name",
                tick: {
                  fontSize: 12
                },
                interval: 0,
                angle: -15,
                textAnchor: "end",
                height: 50
              }), /* @__PURE__ */ jsx(YAxis, {
                allowDecimals: false,
                tick: {
                  fontSize: 12
                }
              }), /* @__PURE__ */ jsx(Tooltip, {}), /* @__PURE__ */ jsx(Bar, {
                dataKey: "count",
                fill: "#9F7AEA"
              })]
            })
          })
        })]
      })]
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "grid lg:grid-cols-3 gap-6 mt-6",
      renderId: "render-82ec1680",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
        renderId: "render-0ac32115",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center gap-2 mb-4 text-black font-semibold",
          renderId: "render-cead3880",
          as: "div",
          children: [/* @__PURE__ */ jsx(TrendingUp, {
            className: "w-5 h-5"
          }), " Monthly Trend (6 months)"]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "w-full h-56",
          renderId: "render-91b87c16",
          as: "div",
          children: /* @__PURE__ */ jsx(ResponsiveContainer, {
            width: "100%",
            height: "100%",
            children: /* @__PURE__ */ jsxs(AreaChart, {
              data: monthlyTrend,
              margin: {
                top: 5,
                right: 10,
                left: 0,
                bottom: 0
              },
              children: [/* @__PURE__ */ jsx(CartesianGrid, {
                strokeDasharray: "3 3",
                stroke: "#eee"
              }), /* @__PURE__ */ jsx(XAxis, {
                dataKey: "month",
                tick: {
                  fontSize: 12
                }
              }), /* @__PURE__ */ jsx(YAxis, {
                allowDecimals: false,
                tick: {
                  fontSize: 12
                }
              }), /* @__PURE__ */ jsx(Tooltip, {}), /* @__PURE__ */ jsx(Legend, {}), /* @__PURE__ */ jsx(Area, {
                type: "monotone",
                dataKey: "Admissions",
                stackId: "1",
                stroke: "#9F7AEA",
                fill: "#9F7AEA33"
              }), /* @__PURE__ */ jsx(Area, {
                type: "monotone",
                dataKey: "Discipleship",
                stackId: "1",
                stroke: "#4FD1C5",
                fill: "#4FD1C533"
              }), /* @__PURE__ */ jsx(Area, {
                type: "monotone",
                dataKey: "Departments",
                stackId: "1",
                stroke: "#F4D03F",
                fill: "#F4D03F33"
              }), /* @__PURE__ */ jsx(Area, {
                type: "monotone",
                dataKey: "Counseling",
                stackId: "1",
                stroke: "#F56565",
                fill: "#F5656533"
              })]
            })
          })
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
        renderId: "render-d5ba13d0",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center gap-2 mb-4 text-black font-semibold",
          renderId: "render-17e6e578",
          as: "div",
          children: [/* @__PURE__ */ jsx(Clock, {
            className: "w-5 h-5"
          }), " Activity by Weekday"]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "w-full h-56",
          renderId: "render-336e3f13",
          as: "div",
          children: /* @__PURE__ */ jsx(ResponsiveContainer, {
            width: "100%",
            height: "100%",
            children: /* @__PURE__ */ jsxs(BarChart, {
              data: weekday,
              margin: {
                top: 5,
                right: 10,
                left: 0,
                bottom: 0
              },
              children: [/* @__PURE__ */ jsx(CartesianGrid, {
                strokeDasharray: "3 3",
                stroke: "#eee"
              }), /* @__PURE__ */ jsx(XAxis, {
                dataKey: "name",
                tick: {
                  fontSize: 12
                }
              }), /* @__PURE__ */ jsx(YAxis, {
                allowDecimals: false,
                tick: {
                  fontSize: 12
                }
              }), /* @__PURE__ */ jsx(Tooltip, {}), /* @__PURE__ */ jsx(Legend, {}), /* @__PURE__ */ jsx(Bar, {
                dataKey: "Admissions",
                stackId: "a",
                fill: "#9F7AEA"
              }), /* @__PURE__ */ jsx(Bar, {
                dataKey: "Discipleship",
                stackId: "a",
                fill: "#4FD1C5"
              }), /* @__PURE__ */ jsx(Bar, {
                dataKey: "Departments",
                stackId: "a",
                fill: "#F4D03F"
              }), /* @__PURE__ */ jsx(Bar, {
                dataKey: "Counseling",
                stackId: "a",
                fill: "#F56565"
              })]
            })
          })
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white rounded-xl p-6 border border-[#E9E9E9]",
        renderId: "render-e77e1914",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center gap-2 mb-4 text-black font-semibold",
          renderId: "render-66ffd6e9",
          as: "div",
          children: [/* @__PURE__ */ jsx(Clock, {
            className: "w-5 h-5"
          }), " Active Hours (24h)"]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "w-full h-56",
          renderId: "render-907af105",
          as: "div",
          children: /* @__PURE__ */ jsx(ResponsiveContainer, {
            width: "100%",
            height: "100%",
            children: /* @__PURE__ */ jsxs(RadialBarChart, {
              innerRadius: "20%",
              outerRadius: "90%",
              data: hourDist,
              startAngle: 90,
              endAngle: -270,
              children: [/* @__PURE__ */ jsx(PolarAngleAxis, {
                type: "number",
                domain: [0, Math.max(1, ...hourDist.map((h) => h.Total))],
                tick: false
              }), /* @__PURE__ */ jsx(RadialBar, {
                minAngle: 2,
                background: true,
                clockWise: true,
                dataKey: "Total",
                fill: "#63B3ED"
              }), /* @__PURE__ */ jsx(Tooltip, {
                formatter: (v, n, props) => [v, `${props?.payload?.label || ""}`]
              })]
            })
          })
        })]
      })]
    })]
  });
}

function SubmissionsTab({
  admissions,
  discipleshipRequests,
  departmentMembers,
  counselingBookings
}) {
  const allSubmissions = [...admissions.map((x) => ({
    id: `a-${x.id}`,
    type: "Admission",
    name: x.full_name,
    email: x.email,
    phone: x.phone,
    details: x.school_name,
    date: x.created_at
  })), ...discipleshipRequests.map((x) => ({
    id: `d-${x.id}`,
    type: "Discipleship",
    name: x.full_name,
    email: x.email,
    phone: x.phone,
    details: "Request to be discipled",
    date: x.created_at
  })), ...departmentMembers.map((x) => ({
    id: `m-${x.id}`,
    type: "Department",
    name: x.full_name,
    email: x.email,
    phone: x.phone,
    details: x.department,
    date: x.created_at
  })), ...counselingBookings.map((x) => ({
    id: `c-${x.id}`,
    type: "Counseling",
    name: x.full_name,
    email: x.email,
    phone: x.phone,
    details: x.preferred_date || x.message?.slice(0, 40) || "Counseling booking",
    date: x.created_at
  }))].sort((a, b) => new Date(b.date) - new Date(a.date));
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    renderId: "render-8a204f27",
    as: "div",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "text-2xl font-bold text-black mb-6",
      renderId: "render-b9204af7",
      as: "h2",
      children: "All Submissions"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "bg-white rounded-xl border border-[#E9E9E9] overflow-hidden",
      renderId: "render-29e9e13e",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "overflow-x-auto",
        renderId: "render-5e02094b",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "w-full",
          renderId: "render-c25cb6a6",
          as: "table",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "bg-[#FAFAFA] border-b border-[#E9E9E9]",
            renderId: "render-4441a464",
            as: "thead",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-fd8b57ab",
              as: "tr",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-9e004168",
                as: "th",
                children: "Type"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-e294114c",
                as: "th",
                children: "Name"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-2e2c487d",
                as: "th",
                children: "Email"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-7844a1ad",
                as: "th",
                children: "Phone"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-e3262e7c",
                as: "th",
                children: "Details"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-93df8493",
                as: "th",
                children: "Date"
              })]
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "divide-y divide-[#E9E9E9]",
            renderId: "render-b4066466",
            as: "tbody",
            children: allSubmissions.map((row) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "hover:bg-[#FAFAFA]",
              renderId: "render-bf4927f7",
              as: "tr",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-black",
                renderId: "render-33930fd3",
                as: "td",
                children: row.type
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-black",
                renderId: "render-fdbe75c5",
                as: "td",
                children: row.name
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-b88b8643",
                as: "td",
                children: row.email
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-43937c62",
                as: "td",
                children: row.phone
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-d16d3d01",
                as: "td",
                children: row.details
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-035ee15b",
                as: "td",
                children: new Date(row.date).toLocaleDateString()
              })]
            }, row.id))
          })]
        })
      })
    })]
  });
}

function AdmissionsTab({
  admissions
}) {
  const institutions = [
    // Known institutions that have admissions on the site
    "Lawson University",
    "Sunrise Theological School",
    "Deep Knowledge Academy"
    // You can add more institutions here if you add more admissions forms later
  ];
  const grouped = (admissions || []).reduce((acc, a) => {
    const key = a.school_name || "Other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(a);
    return acc;
  }, {});
  for (const name of institutions) {
    if (!grouped[name]) grouped[name] = [];
  }
  const allInstitutionNames = Array.from(/* @__PURE__ */ new Set([...institutions, ...Object.keys(grouped)]));
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    renderId: "render-b066e0a9",
    as: "div",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "text-2xl font-bold text-black mb-6",
      renderId: "render-d46e9aa3",
      as: "h2",
      children: "School Admissions"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "space-y-8",
      renderId: "render-764cf638",
      as: "div",
      children: allInstitutionNames.map((institutionName) => {
        const rows = grouped[institutionName] || [];
        return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white rounded-xl border border-[#E9E9E9] overflow-hidden",
          renderId: "render-5a9d6a3b",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-center justify-between px-6 py-4 bg-[#FAFAFA] border-b border-[#E9E9E9]",
            renderId: "render-5034f63e",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-36bd34f2",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-lg font-semibold text-black",
                renderId: "render-8becb6d8",
                as: "h3",
                children: institutionName
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "text-sm text-[#6E6E6E]",
                renderId: "render-dfc32972",
                as: "p",
                children: [rows.length, " application", rows.length === 1 ? "" : "s"]
              })]
            }), rows.length > 0 ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              href: `data:text/csv;charset=utf-8,${encodeURIComponent(toCSV(rows))}`,
              download: `${institutionName.replace(/\s+/g, "_").toLowerCase()}_admissions.csv`,
              className: "text-sm text-[#C29C1A] hover:underline",
              renderId: "render-28fbb7fb",
              as: "a",
              children: "Export CSV"
            }) : null]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "overflow-x-auto",
            renderId: "render-cf03377b",
            as: "div",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "w-full",
              renderId: "render-f703f144",
              as: "table",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "bg-[#FAFAFA] border-b border-[#E9E9E9]",
                renderId: "render-ed12b068",
                as: "thead",
                children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                  renderId: "render-7b5f5dfd",
                  as: "tr",
                  children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-left text-sm font-semibold text-black",
                    renderId: "render-4adf1cfb",
                    as: "th",
                    children: "Name"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-left text-sm font-semibold text-black",
                    renderId: "render-0285ec4a",
                    as: "th",
                    children: "Email"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-left text-sm font-semibold text-black",
                    renderId: "render-26500877",
                    as: "th",
                    children: "Phone"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-left text-sm font-semibold text-black",
                    renderId: "render-d618611b",
                    as: "th",
                    children: "Program"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-left text-sm font-semibold text-black",
                    renderId: "render-17d37c92",
                    as: "th",
                    children: "Degree"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-left text-sm font-semibold text-black",
                    renderId: "render-bfc72964",
                    as: "th",
                    children: "PDF"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-left text-sm font-semibold text-black",
                    renderId: "render-5c7dc55a",
                    as: "th",
                    children: "Date"
                  })]
                })
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "divide-y divide-[#E9E9E9]",
                renderId: "render-b8715565",
                as: "tbody",
                children: rows.length === 0 ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  renderId: "render-9674334b",
                  as: "tr",
                  children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    colSpan: 7,
                    className: "px-6 py-6 text-sm text-center text-[#6E6E6E]",
                    renderId: "render-ae83a670",
                    as: "td",
                    children: "No applications yet"
                  })
                }) : rows.map((admission) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                  className: "hover:bg-[#FAFAFA]",
                  renderId: "render-6fc84711",
                  as: "tr",
                  children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-sm text-black",
                    renderId: "render-bac5ba5c",
                    as: "td",
                    children: admission.full_name
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-sm text-[#6E6E6E]",
                    renderId: "render-2b56e7e1",
                    as: "td",
                    children: admission.email
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-sm text-[#6E6E6E]",
                    renderId: "render-9dffaa69",
                    as: "td",
                    children: admission.phone
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-sm text-[#2B2B2B]",
                    renderId: "render-1e76bcac",
                    as: "td",
                    children: admission.program || "-"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-sm text-[#2B2B2B]",
                    renderId: "render-e2a05765",
                    as: "td",
                    children: admission.degree_type || "-"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-sm",
                    renderId: "render-b8316a30",
                    as: "td",
                    children: admission.qualifications_pdf_url ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                      href: admission.qualifications_pdf_url,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "text-[#C29C1A] hover:underline",
                      renderId: "render-09ee0b1f",
                      as: "a",
                      children: "View PDF"
                    }) : /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                      className: "text-[#6E6E6E]",
                      renderId: "render-3ee8a2a1",
                      as: "span",
                      children: "None"
                    })
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "px-6 py-4 text-sm text-[#6E6E6E]",
                    renderId: "render-bd8dfbef",
                    as: "td",
                    children: new Date(admission.created_at).toLocaleDateString()
                  })]
                }, admission.id))
              })]
            })
          })]
        }, institutionName);
      })
    })]
  });
}
function toCSV(rows) {
  const headers = ["id", "school_name", "full_name", "email", "phone", "program", "degree_type", "qualifications_pdf_url", "created_at"];
  const csvRows = [headers.join(",")];
  for (const r of rows) {
    const vals = headers.map((h) => escapeCSV(r?.[h] ?? ""));
    csvRows.push(vals.join(","));
  }
  return csvRows.join("\n");
}
function escapeCSV(val) {
  const s = String(val);
  if (s.includes(",") || s.includes("\n") || s.includes('"')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function DiscipleshipTab({
  discipleshipRequests
}) {
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    renderId: "render-90e189a0",
    as: "div",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "text-2xl font-bold text-black mb-6",
      renderId: "render-b6f76c8e",
      as: "h2",
      children: "Discipleship Requests"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "bg-white rounded-xl border border-[#E9E9E9] overflow-hidden",
      renderId: "render-0e0f2f98",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "overflow-x-auto",
        renderId: "render-8a4e82b1",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "w-full",
          renderId: "render-c116203f",
          as: "table",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "bg-[#FAFAFA] border-b border-[#E9E9E9]",
            renderId: "render-77a147d2",
            as: "thead",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-bb5bb026",
              as: "tr",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-3dc9116e",
                as: "th",
                children: "Name"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-17cb4efd",
                as: "th",
                children: "Email"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-41e96fcf",
                as: "th",
                children: "Phone"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-f3a02aff",
                as: "th",
                children: "Date"
              })]
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "divide-y divide-[#E9E9E9]",
            renderId: "render-4d213348",
            as: "tbody",
            children: discipleshipRequests?.map((request) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "hover:bg-[#FAFAFA]",
              renderId: "render-851ace7c",
              as: "tr",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-black",
                renderId: "render-c7d88aa8",
                as: "td",
                children: request.full_name
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-8772d016",
                as: "td",
                children: request.email
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-b2cd6606",
                as: "td",
                children: request.phone
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-9bdddcbf",
                as: "td",
                children: new Date(request.created_at).toLocaleDateString()
              })]
            }, request.id))
          })]
        })
      })
    })]
  });
}

function DepartmentsTab({
  departmentMembers
}) {
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    renderId: "render-520071af",
    as: "div",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "text-2xl font-bold text-black mb-6",
      renderId: "render-2be9434b",
      as: "h2",
      children: "Department Members"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "bg-white rounded-xl border border-[#E9E9E9] overflow-hidden",
      renderId: "render-92df694d",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "overflow-x-auto",
        renderId: "render-58295538",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "w-full",
          renderId: "render-1cd2c9e0",
          as: "table",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "bg-[#FAFAFA] border-b border-[#E9E9E9]",
            renderId: "render-bdc05746",
            as: "thead",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-58287159",
              as: "tr",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-cc89237f",
                as: "th",
                children: "Department"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-0004f1ee",
                as: "th",
                children: "Name"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-fe2ee73d",
                as: "th",
                children: "Email"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-84bc01fc",
                as: "th",
                children: "Phone"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-a300f7cb",
                as: "th",
                children: "Date"
              })]
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "divide-y divide-[#E9E9E9]",
            renderId: "render-3d0559f7",
            as: "tbody",
            children: departmentMembers?.map((member) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "hover:bg-[#FAFAFA]",
              renderId: "render-868e74d8",
              as: "tr",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-black",
                renderId: "render-66da61a2",
                as: "td",
                children: member.department
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-black",
                renderId: "render-d6cadbcf",
                as: "td",
                children: member.full_name
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-9b57a1d8",
                as: "td",
                children: member.email
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-d780e9c2",
                as: "td",
                children: member.phone
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-b261eeff",
                as: "td",
                children: new Date(member.created_at).toLocaleDateString()
              })]
            }, member.id))
          })]
        })
      })
    })]
  });
}

function CounselingTab({
  counselingBookings
}) {
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    renderId: "render-8447394d",
    as: "div",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "text-2xl font-bold text-black mb-6",
      renderId: "render-519b6c36",
      as: "h2",
      children: "Counseling Bookings"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "bg-white rounded-xl border border-[#E9E9E9] overflow-hidden",
      renderId: "render-a406253c",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "overflow-x-auto",
        renderId: "render-3bcff1e3",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "w-full",
          renderId: "render-4c2a6853",
          as: "table",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "bg-[#FAFAFA] border-b border-[#E9E9E9]",
            renderId: "render-4d247c5e",
            as: "thead",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-76707f04",
              as: "tr",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-97ea3163",
                as: "th",
                children: "Name"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-7ff2c3a5",
                as: "th",
                children: "Email"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-1651d221",
                as: "th",
                children: "Phone"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-010ecff3",
                as: "th",
                children: "Preferred Date"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-276f56c0",
                as: "th",
                children: "Message"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-left text-sm font-semibold text-black",
                renderId: "render-7bdffe63",
                as: "th",
                children: "Date"
              })]
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "divide-y divide-[#E9E9E9]",
            renderId: "render-c2a1cfaf",
            as: "tbody",
            children: counselingBookings?.map((b) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "hover:bg-[#FAFAFA]",
              renderId: "render-7012b95a",
              as: "tr",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-black",
                renderId: "render-9b62897f",
                as: "td",
                children: b.full_name
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-19b7e443",
                as: "td",
                children: b.email
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-9738f5b5",
                as: "td",
                children: b.phone
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-55462e1c",
                as: "td",
                children: b.preferred_date || "-"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-eaff9525",
                as: "td",
                children: b.message?.slice(0, 100) || "-"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-4 text-sm text-[#6E6E6E]",
                renderId: "render-9d7e3ad3",
                as: "td",
                children: new Date(b.created_at).toLocaleDateString()
              })]
            }, b.id))
          })]
        })
      })
    })]
  });
}

function SettingsTab({
  metrics
}) {
  const queryClient = useQueryClient();
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSaved(false);
    const formData = new FormData(e.target);
    try {
      const res = await fetch("/api/metrics", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          converts: parseInt(formData.get("converts")),
          displaced_supported: parseInt(formData.get("displaced_supported")),
          cities: parseInt(formData.get("cities")),
          churches: parseInt(formData.get("churches"))
        })
      });
      if (!res.ok) {
        throw new Error(`When updating /api/metrics, the response was [${res.status}] ${res.statusText}`);
      }
      await queryClient.invalidateQueries({
        queryKey: ["metrics"]
      });
      setSaved(true);
    } catch (err) {
      console.error(err);
      setError("Could not update metrics. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    renderId: "render-ee00b593",
    as: "div",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "text-2xl font-bold text-black mb-6",
      renderId: "render-25cc5a87",
      as: "h2",
      children: "Update Ministry Metrics"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "bg-white rounded-xl p-8 border border-[#E9E9E9] max-w-2xl",
      renderId: "render-6d646335",
      as: "div",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        onSubmit: handleSubmit,
        className: "space-y-6",
        renderId: "render-86861899",
        as: "form",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-637095ee",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "block text-sm font-medium text-black mb-2",
            renderId: "render-65d227df",
            as: "label",
            children: "Number of Converts"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "number",
            name: "converts",
            defaultValue: metrics?.converts || 0,
            className: "w-full px-4 py-3 border border-[#E9E9E9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
            renderId: "render-2f547a50",
            as: "input"
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-7f37f2e3",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "block text-sm font-medium text-black mb-2",
            renderId: "render-daa388cb",
            as: "label",
            children: "Displaced People Supported"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "number",
            name: "displaced_supported",
            defaultValue: metrics?.displaced_supported || 0,
            className: "w-full px-4 py-3 border border-[#E9E9E9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
            renderId: "render-9931d93d",
            as: "input"
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-37d70a3e",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "block text-sm font-medium text-black mb-2",
            renderId: "render-aa894845",
            as: "label",
            children: "Number of Cities"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "number",
            name: "cities",
            defaultValue: metrics?.cities || 0,
            className: "w-full px-4 py-3 border border-[#E9E9E9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
            renderId: "render-66c8df3c",
            as: "input"
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-08833187",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "block text-sm font-medium text-black mb-2",
            renderId: "render-1ab291a9",
            as: "label",
            children: "Number of Churches"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "number",
            name: "churches",
            defaultValue: metrics?.churches || 0,
            className: "w-full px-4 py-3 border border-[#E9E9E9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
            renderId: "render-f1c9d094",
            as: "input"
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          type: "submit",
          className: "w-full bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold py-3 rounded-lg transition-transform duration-200 hover:scale-105 active:scale-[0.98]",
          renderId: "render-24ef7d22",
          as: "button",
          children: "Update Metrics"
        }), saved && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-green-600 text-sm",
          renderId: "render-cca8d3bb",
          as: "p",
          children: "Saved. Numbers updated."
        }), error && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-red-600 text-sm",
          renderId: "render-02a775b1",
          as: "p",
          children: error
        })]
      })
    })]
  });
}

const PAGE_OPTIONS = [{
  label: "Deep Knowledge Academy",
  path: "/education/deep-knowledge-academy"
}, {
  label: "Seminary (Home)",
  path: "/education/seminary"
}, {
  label: "Marriage Academy",
  path: "/education/marriage-academy"
}, {
  label: "Lawson University",
  path: "/education/lawson-university"
}, {
  label: "Finance",
  path: "/finance"
}, {
  label: "Foundation",
  path: "/foundation"
}, {
  label: "Pastorium",
  path: "/pastorium"
}, {
  label: "Vision",
  path: "/vision"
}, {
  label: "News",
  path: "/news"
}, {
  label: "Messages",
  path: "/messages"
}, {
  label: "Education (Hub)",
  path: "/education"
}];
function SEOTab() {
  const qc = useQueryClient();
  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("ng");
  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const [selectedPage, setSelectedPage] = useState(PAGE_OPTIONS[0].path);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const enabled = useMemo(() => keyword.trim().length > 0, [keyword]);
  const researchQuery = useQuery({
    queryKey: ["seo-research", keyword, country],
    enabled: false,
    queryFn: async () => {
      const res = await fetch(`/integrations/seo-keyword-research/keynew.php?keyword=${encodeURIComponent(keyword)}&country=${encodeURIComponent(country)}`, {
        method: "GET"
      });
      if (!res.ok) {
        throw new Error(`When fetching SEO integration, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    }
  });
  const {
    data: savedKeywords = []
  } = useQuery({
    queryKey: ["seo-keywords"],
    queryFn: async () => {
      const res = await fetch("/api/seo/keywords");
      if (!res.ok) {
        throw new Error(`When fetching /api/seo/keywords, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    }
  });
  const saveMutation = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/seo/keywords", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        throw new Error(`When saving /api/seo/keywords, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["seo-keywords"]
      });
    }
  });
  const runResearch = () => {
    if (!enabled) return;
    researchQuery.refetch();
  };
  const onPickKeyword = (kw) => {
    setSelectedKeyword(kw);
    const suggestedTitle = `${kw.text} | SBBC`;
    const suggestedDesc = `Learn about ${kw.text} with SBBC. Explore details, programs, and how to get started.`;
    setMetaTitle(suggestedTitle);
    setMetaDescription(suggestedDesc);
  };
  const onSave = () => {
    if (!selectedPage) return;
    saveMutation.mutate({
      page_path: selectedPage,
      country,
      primary_keyword: selectedKeyword?.text || null,
      meta_title: metaTitle || null,
      meta_description: metaDescription || null,
      additional_keywords: []
    });
  };
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    renderId: "render-8ece7a72",
    as: "div",
    children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "bg-white border border-[#E9E9E9] rounded-xl p-6 mb-8",
      renderId: "render-e93f5d2d",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "text-xl font-semibold mb-4 flex items-center gap-2",
        renderId: "render-3f9f79fd",
        as: "h2",
        children: [/* @__PURE__ */ jsx(Search, {
          className: "w-5 h-5"
        }), " SEO Keyword Research"]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "flex flex-col md:flex-row gap-3",
        renderId: "render-ee6c16f5",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          value: keyword,
          onChange: (e) => setKeyword(e.target.value),
          placeholder: "Enter a topic or seed keyword (e.g., christian school Lagos)",
          className: "flex-1 border border-[#E9E9E9] rounded-lg px-4 py-3 outline-none",
          renderId: "render-d180a556",
          as: "input"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          value: country,
          onChange: (e) => setCountry(e.target.value),
          placeholder: "Country (e.g., ng)",
          className: "w-[140px] border border-[#E9E9E9] rounded-lg px-4 py-3 outline-none",
          renderId: "render-60888f71",
          as: "input"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          onClick: runResearch,
          disabled: !enabled || researchQuery.isFetching,
          className: "bg-black text-white px-5 py-3 rounded-lg disabled:opacity-50",
          renderId: "render-26468c9f",
          as: "button",
          children: researchQuery.isFetching ? "Searching…" : "Search"
        })]
      }), researchQuery.error && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-red-600 mt-3",
        renderId: "render-6dd20308",
        as: "div",
        children: researchQuery.error.message
      })]
    }), researchQuery.data?.length > 0 && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "grid md:grid-cols-5 gap-6",
      renderId: "render-be716c02",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "md:col-span-3 bg-white border border-[#E9E9E9] rounded-xl p-4 overflow-hidden",
        renderId: "render-269c08d2",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "overflow-x-auto",
          renderId: "render-88eb8105",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "w-full text-left",
            renderId: "render-f2115d14",
            as: "table",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-7686b576",
              as: "thead",
              children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "text-[#6E6E6E] text-sm",
                renderId: "render-617e334f",
                as: "tr",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "py-2 px-2",
                  renderId: "render-b71dcf1c",
                  as: "th",
                  children: "Keyword"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "py-2 px-2",
                  renderId: "render-49c6c71d",
                  as: "th",
                  children: "Volume"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "py-2 px-2",
                  renderId: "render-7569eee7",
                  as: "th",
                  children: "CPC"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "py-2 px-2",
                  renderId: "render-3fcba12c",
                  as: "th",
                  children: "Comp."
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "py-2 px-2",
                  renderId: "render-b4de864c",
                  as: "th"
                })]
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-102a5f2e",
              as: "tbody",
              children: researchQuery.data.map((kw, idx) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "border-t border-[#F0F0F0]",
                renderId: "render-bd6729ec",
                as: "tr",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "py-2 px-2",
                  renderId: "render-2e69dd69",
                  as: "td",
                  children: kw.text
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "py-2 px-2",
                  renderId: "render-322becc5",
                  as: "td",
                  children: kw.vol?.toLocaleString?.() || kw.v
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "py-2 px-2",
                  renderId: "render-28cb72f3",
                  as: "td",
                  children: kw.cpc
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "py-2 px-2 capitalize",
                  renderId: "render-cec87bd4",
                  as: "td",
                  children: kw.competition
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "py-2 px-2 text-right",
                  renderId: "render-9dca77d4",
                  as: "td",
                  children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    onClick: () => onPickKeyword(kw),
                    className: "text-black underline",
                    renderId: "render-278354bd",
                    as: "button",
                    children: "Assign"
                  })
                })]
              }, idx))
            })]
          })
        })
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "md:col-span-2 bg-white border border-[#E9E9E9] rounded-xl p-4",
        renderId: "render-a7bc9a33",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "font-semibold mb-3",
          renderId: "render-5d0647b3",
          as: "h3",
          children: "Assign to a page"
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "space-y-3",
          renderId: "render-6e634b88",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-d745759b",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "block text-sm text-[#6E6E6E] mb-1",
              renderId: "render-d49efb31",
              as: "label",
              children: "Chosen keyword"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              value: selectedKeyword?.text || "",
              readOnly: true,
              placeholder: "Pick from results",
              className: "w-full border border-[#E9E9E9] rounded-lg px-3 py-2 bg-[#FAFAFA]",
              renderId: "render-6fe3aa0f",
              as: "input"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-e907b048",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "block text-sm text-[#6E6E6E] mb-1",
              renderId: "render-6b81041b",
              as: "label",
              children: "Page"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              value: selectedPage,
              onChange: (e) => setSelectedPage(e.target.value),
              className: "w-full border border-[#E9E9E9] rounded-lg px-3 py-2",
              renderId: "render-ff770a13",
              as: "select",
              children: PAGE_OPTIONS.map((p) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                value: p.path,
                renderId: "render-98934327",
                as: "option",
                children: [p.label, " (", p.path, ")"]
              }, p.path))
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-3e77df3a",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "block text-sm text-[#6E6E6E] mb-1",
              renderId: "render-50c29a75",
              as: "label",
              children: "Meta title"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              value: metaTitle,
              onChange: (e) => setMetaTitle(e.target.value),
              placeholder: "Title tag for this page",
              className: "w-full border border-[#E9E9E9] rounded-lg px-3 py-2",
              renderId: "render-ace3457a",
              as: "input"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-4dfb63f4",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "block text-sm text-[#6E6E6E] mb-1",
              renderId: "render-4265d2a3",
              as: "label",
              children: "Meta description"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              value: metaDescription,
              onChange: (e) => setMetaDescription(e.target.value),
              placeholder: "One or two sentences that would make sense on Google",
              className: "w-full border border-[#E9E9E9] rounded-lg px-3 py-2 h-24",
              renderId: "render-38136729",
              as: "textarea"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            onClick: onSave,
            disabled: saveMutation.isLoading || !selectedPage,
            className: "inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg disabled:opacity-50",
            renderId: "render-d2c86b08",
            as: "button",
            children: [/* @__PURE__ */ jsx(Save, {
              className: "w-4 h-4"
            }), saveMutation.isLoading ? "Saving..." : "Save Target"]
          }), saveMutation.isSuccess && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "text-green-700 flex items-center gap-2 text-sm",
            renderId: "render-4fd447c1",
            as: "div",
            children: [/* @__PURE__ */ jsx(CheckCircle, {
              className: "w-4 h-4"
            }), " Saved"]
          }), saveMutation.error && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-red-600 text-sm",
            renderId: "render-cb113e12",
            as: "div",
            children: saveMutation.error.message
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "mt-8 bg-white border border-[#E9E9E9] rounded-xl",
      renderId: "render-f8018daa",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "p-4 border-b border-[#F0F0F0] flex items-center justify-between",
        renderId: "render-b15afad9",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "font-semibold",
          renderId: "render-10a4a4ff",
          as: "h3",
          children: "Saved Targets"
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          href: "/sitemap.xml",
          target: "_blank",
          rel: "noreferrer",
          className: "text-sm flex items-center gap-1 underline",
          renderId: "render-aa0bef04",
          as: "a",
          children: ["View sitemap ", /* @__PURE__ */ jsx(ExternalLink, {
            className: "w-4 h-4"
          })]
        })]
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "p-4 overflow-x-auto",
        renderId: "render-4137d0ec",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "w-full text-left",
          renderId: "render-b17724bf",
          as: "table",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-795bb1cc",
            as: "thead",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "text-[#6E6E6E] text-sm",
              renderId: "render-7f9989f3",
              as: "tr",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "py-2 px-2",
                renderId: "render-f28600cc",
                as: "th",
                children: "Page"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "py-2 px-2",
                renderId: "render-205aa1ad",
                as: "th",
                children: "Country"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "py-2 px-2",
                renderId: "render-7471703b",
                as: "th",
                children: "Primary Keyword"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "py-2 px-2",
                renderId: "render-de770e44",
                as: "th",
                children: "Meta Title"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "py-2 px-2",
                renderId: "render-ad7bfb6f",
                as: "th",
                children: "Meta Description"
              })]
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-c04b8275",
            as: "tbody",
            children: savedKeywords.map((row) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "border-t border-[#F0F0F0]",
              renderId: "render-54138b90",
              as: "tr",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "py-2 px-2",
                renderId: "render-e5916cb8",
                as: "td",
                children: row.page_path
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "py-2 px-2 uppercase",
                renderId: "render-b3216084",
                as: "td",
                children: row.country
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "py-2 px-2",
                renderId: "render-8e46e0db",
                as: "td",
                children: row.primary_keyword || "—"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "py-2 px-2",
                renderId: "render-f311f6bf",
                as: "td",
                children: row.meta_title || "—"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "py-2 px-2 text-[#6E6E6E] max-w-[420px] truncate",
                renderId: "render-66d616aa",
                as: "td",
                children: row.meta_description || "—"
              })]
            }, row.id))
          })]
        })
      })]
    })]
  });
}

const INSTITUTIONS = ["Lawson University", "Sunrise Theological School", "Deep Knowledge Academy"];
function StudentsTab() {
  const qc = useQueryClient();
  const [activeSchool, setActiveSchool] = useState(INSTITUTIONS[0]);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const [selectedYear, setSelectedYear] = useState(String(currentYear));
  const {
    data: students = [],
    isLoading: studentsLoading,
    error: studentsError
  } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const res = await fetch("/api/students");
      if (!res.ok) {
        throw new Error(`When fetching /api/students, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    }
  });
  const {
    data: payments = []
  } = useQuery({
    queryKey: ["student-payments"],
    queryFn: async () => {
      const res = await fetch("/api/student-payments");
      if (!res.ok) {
        throw new Error(`When fetching /api/student-payments, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    }
  });
  const studentsBySchool = useMemo(() => (students || []).filter((s) => s.school_name === activeSchool), [students, activeSchool]);
  const paymentsByStudentId = useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const p of payments || []) {
      const list = map.get(p.student_id) || [];
      list.push(p);
      map.set(p.student_id, list);
    }
    return map;
  }, [payments]);
  const extractPaymentYear = (p) => {
    if (p.payment_date) {
      const d = new Date(p.payment_date);
      if (!isNaN(d.getTime())) return String(d.getFullYear());
    }
    if (p.term) {
      const m = String(p.term).match(/(20\d{2})/);
      if (m) return m[1];
    }
    if (p.created_at) {
      const d2 = new Date(p.created_at);
      if (!isNaN(d2.getTime())) return String(d2.getFullYear());
    }
    return null;
  };
  const hasConfirmedPaymentForYear = (studentId, yearStr) => {
    const list = paymentsByStudentId.get(studentId) || [];
    for (const p of list) {
      if (!p.confirmed) continue;
      const y = extractPaymentYear(p);
      if (y && y === yearStr) return true;
    }
    return false;
  };
  const createStudent = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`When creating student, response was [${res.status}] ${res.statusText}: ${text}`);
      }
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["students"]
      });
    }
  });
  const createPayment = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/student-payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        throw new Error(`When creating payment, response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["student-payments"]
      });
    }
  });
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    renderId: "render-795b0028",
    as: "div",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "flex items-center justify-between mb-6",
      renderId: "render-7250490e",
      as: "div",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "text-2xl font-bold text-black flex items-center gap-2",
        renderId: "render-eba5934f",
        as: "h2",
        children: [/* @__PURE__ */ jsx(Users, {
          className: "w-6 h-6"
        }), " Students Management"]
      })
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "flex flex-col md:flex-row md:items-center gap-3 mb-6",
      renderId: "render-cfbd4a1d",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex gap-2",
        renderId: "render-e55761ad",
        as: "div",
        children: INSTITUTIONS.map((school) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          onClick: () => setActiveSchool(school),
          className: `px-4 py-2 rounded-lg border text-sm ${activeSchool === school ? "bg-[#F4D03F] border-[#E9E9E9] text-black" : "bg-white border-[#E9E9E9] text-[#2B2B2B] hover:bg-[#FAFAFA]"}`,
          renderId: "render-332394c9",
          as: "button",
          children: school
        }, school))
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "flex items-center gap-2",
        renderId: "render-83c16f8a",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-sm text-[#6E6E6E]",
          renderId: "render-0f296054",
          as: "label",
          children: "Payment year"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          type: "number",
          min: "2000",
          max: "2100",
          value: selectedYear,
          onChange: (e) => setSelectedYear(e.target.value),
          className: "px-3 py-2 border border-[#E9E9E9] rounded-lg w-[120px]",
          renderId: "render-a28ee6b0",
          as: "input"
        })]
      })]
    }), /* @__PURE__ */ jsx(AddStudentForm, {
      school: activeSchool,
      onSubmit: (values) => createStudent.mutate(values),
      loading: createStudent.isLoading,
      error: createStudent.error?.message || null
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "mt-8 bg-white rounded-xl border border-[#E9E9E9] overflow-hidden",
      renderId: "render-40625861",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "px-6 py-4 bg-[#FAFAFA] border-b border-[#E9E9E9] flex items-center justify-between",
        renderId: "render-71cd3e17",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-4c27329d",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-lg font-semibold text-black",
            renderId: "render-4aba56ed",
            as: "h3",
            children: activeSchool
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "text-sm text-[#6E6E6E]",
            renderId: "render-694206ae",
            as: "p",
            children: [studentsBySchool.length, " student", studentsBySchool.length === 1 ? "" : "s"]
          })]
        })
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "overflow-x-auto",
        renderId: "render-8ea8156d",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "w-full",
          renderId: "render-3fb07def",
          as: "table",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "bg-[#FAFAFA] border-b border-[#E9E9E9]",
            renderId: "render-849fb171",
            as: "thead",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-c88b39e4",
              as: "tr",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-3 text-left text-sm font-semibold text-black",
                renderId: "render-207a54ac",
                as: "th",
                children: "Name"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-3 text-left text-sm font-semibold text-black",
                renderId: "render-ba69c77d",
                as: "th",
                children: "Email"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-3 text-left text-sm font-semibold text-black",
                renderId: "render-55118383",
                as: "th",
                children: "Phone"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-3 text-left text-sm font-semibold text-black",
                renderId: "render-45b3cff5",
                as: "th",
                children: "Program"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-3 text-left text-sm font-semibold text-black",
                renderId: "render-7904d585",
                as: "th",
                children: "Parent / Guardian"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-3 text-left text-sm font-semibold text-black",
                renderId: "render-333c95ad",
                as: "th",
                children: "Discipline"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-3 text-left text-sm font-semibold text-black",
                renderId: "render-adb1d4c1",
                as: "th",
                children: "Adm. Year"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-3 text-left text-sm font-semibold text-black",
                renderId: "render-6580ba47",
                as: "th",
                children: "Grad. Year"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-3 text-left text-sm font-semibold text-black",
                renderId: "render-1c7e916b",
                as: "th",
                children: "Status"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-3 text-left text-sm font-semibold text-black",
                renderId: "render-abe631c6",
                as: "th",
                children: "Payments"
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "px-6 py-3 text-left text-sm font-semibold text-black",
                renderId: "render-24e6ddb0",
                as: "th",
                children: ["Paid ", selectedYear]
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "px-6 py-3 text-left text-sm font-semibold text-black",
                renderId: "render-67ec23f5",
                as: "th",
                children: "Actions"
              })]
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "divide-y divide-[#E9E9E9]",
            renderId: "render-953abdbe",
            as: "tbody",
            children: studentsLoading ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-4f0df552",
              as: "tr",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                colSpan: 12,
                className: "px-6 py-6 text-center text-[#6E6E6E]",
                renderId: "render-ee5ef5b9",
                as: "td",
                children: "Loading..."
              })
            }) : studentsError ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-4d84a597",
              as: "tr",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                colSpan: 12,
                className: "px-6 py-6 text-center text-red-600",
                renderId: "render-d3841fc4",
                as: "td",
                children: "Failed to load students"
              })
            }) : studentsBySchool.length === 0 ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-221c7236",
              as: "tr",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                colSpan: 12,
                className: "px-6 py-6 text-center text-[#6E6E6E]",
                renderId: "render-82c63c0d",
                as: "td",
                children: "No students yet"
              })
            }) : studentsBySchool.map((s) => /* @__PURE__ */ jsx(StudentRow, {
              s,
              payments: paymentsByStudentId.get(s.id) || [],
              onAddPayment: (payload) => createPayment.mutate(payload),
              addingPayment: createPayment.isLoading,
              paidForSelectedYear: hasConfirmedPaymentForYear(s.id, selectedYear),
              selectedYear
            }, s.id))
          })]
        })
      })]
    })]
  });
}
function AddStudentForm({
  school,
  onSubmit,
  loading,
  error
}) {
  const [form, setForm] = useState({
    school_name: school,
    full_name: "",
    email: "",
    phone: "",
    program: "",
    // Parent/Guardian 1
    parent_name: "",
    parent_email: "",
    parent_phone: "",
    // Parent/Guardian 2 (new)
    parent2_name: "",
    parent2_email: "",
    parent2_phone: "",
    discipline: "",
    admission_year: "",
    graduation_year: "",
    student_code: "",
    status: "enrolled"
  });
  const [localError, setLocalError] = useState(null);
  if (form.school_name !== school) {
    form.school_name = school;
  }
  const handleChange = (key, value) => setForm((f) => ({
    ...f,
    [key]: value
  }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    const hasParent1 = form.parent_name && form.parent_name.trim();
    const hasParent2 = form.parent2_name && form.parent2_name.trim();
    if (!hasParent1 && !hasParent2) {
      setLocalError("Provide at least one parent/guardian (a name is required).");
      return;
    }
    const payload = {
      ...form,
      admission_year: form.admission_year ? Number(form.admission_year) : null,
      graduation_year: form.graduation_year ? Number(form.graduation_year) : null
    };
    try {
      await onSubmit(payload);
      setForm({
        school_name: school,
        full_name: "",
        email: "",
        phone: "",
        program: "",
        parent_name: "",
        parent_email: "",
        parent_phone: "",
        parent2_name: "",
        parent2_email: "",
        parent2_phone: "",
        discipline: "",
        admission_year: "",
        graduation_year: "",
        student_code: "",
        status: "enrolled"
      });
    } catch (err) {
    }
  };
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    onSubmit: handleSubmit,
    className: "bg-white rounded-xl border border-[#E9E9E9] p-6",
    renderId: "render-6efff87a",
    as: "form",
    children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "flex items-center gap-2 mb-4",
      renderId: "render-53733b55",
      as: "div",
      children: [/* @__PURE__ */ jsx(Plus, {
        className: "w-4 h-4"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-lg font-semibold text-black",
        renderId: "render-2ec48a68",
        as: "h3",
        children: "Add Student"
      })]
    }), (localError || error) && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "mb-4 text-sm text-red-600",
      renderId: "render-b57e4c5b",
      as: "div",
      children: localError || error
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "grid md:grid-cols-3 gap-4",
      renderId: "render-ecf0300d",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "text",
        placeholder: "Full Name",
        value: form.full_name,
        onChange: (e) => handleChange("full_name", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        required: true,
        renderId: "render-6a38881a",
        as: "input"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "email",
        placeholder: "Email",
        value: form.email,
        onChange: (e) => handleChange("email", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        required: true,
        renderId: "render-405c47e4",
        as: "input"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "text",
        placeholder: "Phone",
        value: form.phone,
        onChange: (e) => handleChange("phone", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        renderId: "render-81c219c1",
        as: "input"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "text",
        placeholder: "Program",
        value: form.program,
        onChange: (e) => handleChange("program", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        renderId: "render-5cf34095",
        as: "input"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "text",
        placeholder: "Parent/Guardian 1 Name",
        value: form.parent_name,
        onChange: (e) => handleChange("parent_name", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        renderId: "render-3dd6c7c0",
        as: "input"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "email",
        placeholder: "Parent/Guardian 1 Email",
        value: form.parent_email,
        onChange: (e) => handleChange("parent_email", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        renderId: "render-387e7aa0",
        as: "input"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "text",
        placeholder: "Parent/Guardian 1 Phone",
        value: form.parent_phone,
        onChange: (e) => handleChange("parent_phone", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        renderId: "render-1d24ff34",
        as: "input"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "text",
        placeholder: "Parent/Guardian 2 Name",
        value: form.parent2_name,
        onChange: (e) => handleChange("parent2_name", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        renderId: "render-7d30c780",
        as: "input"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "email",
        placeholder: "Parent/Guardian 2 Email",
        value: form.parent2_email,
        onChange: (e) => handleChange("parent2_email", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        renderId: "render-7a8a517b",
        as: "input"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "text",
        placeholder: "Parent/Guardian 2 Phone",
        value: form.parent2_phone,
        onChange: (e) => handleChange("parent2_phone", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        renderId: "render-97e9b670",
        as: "input"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "text",
        placeholder: "Academic Discipline (e.g., Computer Science)",
        value: form.discipline,
        onChange: (e) => handleChange("discipline", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        renderId: "render-8af12721",
        as: "input"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "number",
        placeholder: "Admission Year",
        value: form.admission_year,
        onChange: (e) => handleChange("admission_year", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        renderId: "render-b9d90294",
        as: "input"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "number",
        placeholder: "Graduation Year",
        value: form.graduation_year,
        onChange: (e) => handleChange("graduation_year", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        renderId: "render-8b60d5c9",
        as: "input"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "text",
        placeholder: "Student Code (optional)",
        value: form.student_code,
        onChange: (e) => handleChange("student_code", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        renderId: "render-bd358d8f",
        as: "input"
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        value: form.status,
        onChange: (e) => handleChange("status", e.target.value),
        className: "px-3 py-2 border border-[#E9E9E9] rounded-lg",
        renderId: "render-d21cbe8d",
        as: "select",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          value: "enrolled",
          renderId: "render-6601d337",
          as: "option",
          children: "Enrolled"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          value: "admitted",
          renderId: "render-6d9879aa",
          as: "option",
          children: "Admitted"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          value: "graduated",
          renderId: "render-d1cc2985",
          as: "option",
          children: "Graduated"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          value: "withdrawn",
          renderId: "render-87f619c8",
          as: "option",
          children: "Withdrawn"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          value: "suspended",
          renderId: "render-aea812d6",
          as: "option",
          children: "Suspended"
        })]
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "mt-4",
      renderId: "render-9b468553",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        type: "submit",
        disabled: loading,
        className: "px-4 py-2 bg-[#F4D03F] rounded-lg text-black font-medium disabled:opacity-60",
        renderId: "render-b6f37c52",
        as: "button",
        children: loading ? "Saving..." : "Save Student"
      })
    })]
  });
}
function StudentRow({
  s,
  payments,
  onAddPayment,
  addingPayment,
  paidForSelectedYear,
  selectedYear
}) {
  const [open, setOpen] = useState(false);
  const [p, setP] = useState({
    term: "",
    amount: "",
    currency: "NGN",
    method: "",
    reference: "",
    confirmed: true,
    receipt_url: "",
    payment_date: "",
    notes: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      student_id: s.id,
      ...p,
      amount: p.amount ? Number(p.amount) : void 0,
      payment_date: p.payment_date || null
    };
    await onAddPayment(payload);
    setP({
      term: "",
      amount: "",
      currency: "NGN",
      method: "",
      reference: "",
      confirmed: true,
      receipt_url: "",
      payment_date: "",
      notes: ""
    });
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "align-top",
    renderId: "render-2079ec45",
    as: "tr",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "px-6 py-4 text-sm text-black",
      renderId: "render-dce28d89",
      as: "td",
      children: s.full_name
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "px-6 py-4 text-sm text-[#6E6E6E]",
      renderId: "render-078dc1d1",
      as: "td",
      children: s.email
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "px-6 py-4 text-sm text-[#6E6E6E]",
      renderId: "render-e7b53db1",
      as: "td",
      children: s.phone || "-"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "px-6 py-4 text-sm text-[#2B2B2B]",
      renderId: "render-d744b93c",
      as: "td",
      children: s.program || "-"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "px-6 py-4 text-sm text-[#2B2B2B]",
      renderId: "render-bbac814e",
      as: "td",
      children: s.parent_name || s.parent2_name ? /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "space-y-1",
        renderId: "render-6f43cdb3",
        as: "div",
        children: [s.parent_name && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-84a839ea",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-[#2B2B2B]",
            renderId: "render-3b2befe9",
            as: "div",
            children: s.parent_name
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "text-xs text-[#6E6E6E]",
            renderId: "render-81410771",
            as: "div",
            children: [s.parent_email || "", s.parent_email && s.parent_phone ? " • " : "", s.parent_phone || ""]
          })]
        }), s.parent2_name && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          renderId: "render-aab18a83",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-[#2B2B2B]",
            renderId: "render-aa13855a",
            as: "div",
            children: s.parent2_name
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "text-xs text-[#6E6E6E]",
            renderId: "render-86ff16e9",
            as: "div",
            children: [s.parent2_email || "", s.parent2_email && s.parent2_phone ? " • " : "", s.parent2_phone || ""]
          })]
        })]
      }) : /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-[#6E6E6E]",
        renderId: "render-0efb6eb9",
        as: "span",
        children: "-"
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "px-6 py-4 text-sm text-[#2B2B2B]",
      renderId: "render-083b9add",
      as: "td",
      children: s.discipline || "-"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "px-6 py-4 text-sm text-[#2B2B2B]",
      renderId: "render-2bd1befe",
      as: "td",
      children: s.admission_year || "-"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "px-6 py-4 text-sm text-[#2B2B2B]",
      renderId: "render-f3b034bb",
      as: "td",
      children: s.graduation_year || "-"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "px-6 py-4 text-sm text-[#2B2B2B]",
      renderId: "render-a88d19ed",
      as: "td",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: `px-2 py-1 rounded text-xs ${s.status === "graduated" ? "bg-green-100 text-green-700" : s.status === "suspended" ? "bg-red-100 text-red-700" : s.status === "withdrawn" ? "bg-gray-100 text-gray-700" : "bg-yellow-100 text-yellow-700"}`,
        renderId: "render-3b3a77f0",
        as: "span",
        children: s.status
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "px-6 py-4 text-sm text-[#2B2B2B]",
      renderId: "render-5e81b489",
      as: "td",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "flex items-center gap-1",
        renderId: "render-c1341cb0",
        as: "div",
        children: [/* @__PURE__ */ jsx(DollarSign, {
          className: "w-4 h-4 text-[#C29C1A]"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          renderId: "render-dbf0a952",
          as: "span",
          children: payments.length
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "px-6 py-4 text-sm text-[#2B2B2B]",
      renderId: "render-b0d1e63f",
      as: "td",
      children: paidForSelectedYear ? /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "flex items-center gap-1 text-green-600",
        renderId: "render-382a983e",
        as: "div",
        children: [/* @__PURE__ */ jsx(CheckCircle, {
          className: "w-4 h-4"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-xs",
          renderId: "render-f0af32ec",
          as: "span",
          children: "Paid"
        })]
      }) : /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-xs text-[#6E6E6E]",
        renderId: "render-a532fafa",
        as: "span",
        children: "Unpaid"
      })
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "px-6 py-4 text-sm",
      renderId: "render-4cd177d3",
      as: "td",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        onClick: () => setOpen((v) => !v),
        className: "px-3 py-1.5 rounded-lg border border-[#E9E9E9] hover:bg-[#FAFAFA] text-sm",
        renderId: "render-f15e29ec",
        as: "button",
        children: open ? "Cancel" : "Add Payment"
      }), open && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        onSubmit: handleSubmit,
        className: "mt-3 space-y-2",
        renderId: "render-52e79e3b",
        as: "form",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "grid md:grid-cols-3 gap-2",
          renderId: "render-9e3f08be",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "text",
            placeholder: "Term (e.g., 2025/1)",
            value: p.term,
            onChange: (e) => setP((x) => ({
              ...x,
              term: e.target.value
            })),
            className: "px-2 py-2 border border-[#E9E9E9] rounded",
            renderId: "render-83de8bdf",
            as: "input"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "number",
            min: "0",
            step: "0.01",
            placeholder: "Amount",
            value: p.amount,
            onChange: (e) => setP((x) => ({
              ...x,
              amount: e.target.value
            })),
            className: "px-2 py-2 border border-[#E9E9E9] rounded",
            required: true,
            renderId: "render-75bcb75e",
            as: "input"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "text",
            placeholder: "Method (Bank/Online/Cash)",
            value: p.method,
            onChange: (e) => setP((x) => ({
              ...x,
              method: e.target.value
            })),
            className: "px-2 py-2 border border-[#E9E9E9] rounded",
            renderId: "render-a758ca98",
            as: "input"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "text",
            placeholder: "Reference",
            value: p.reference,
            onChange: (e) => setP((x) => ({
              ...x,
              reference: e.target.value
            })),
            className: "px-2 py-2 border border-[#E9E9E9] rounded",
            renderId: "render-29e8c4c5",
            as: "input"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "url",
            placeholder: "Receipt URL (optional)",
            value: p.receipt_url,
            onChange: (e) => setP((x) => ({
              ...x,
              receipt_url: e.target.value
            })),
            className: "px-2 py-2 border border-[#E9E9E9] rounded",
            renderId: "render-f22c8ee4",
            as: "input"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "date",
            placeholder: "Payment Date",
            value: p.payment_date,
            onChange: (e) => setP((x) => ({
              ...x,
              payment_date: e.target.value
            })),
            className: "px-2 py-2 border border-[#E9E9E9] rounded",
            renderId: "render-ad5b8322",
            as: "input"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-center gap-2",
            renderId: "render-274ed551",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              id: `confirmed-${s.id}`,
              type: "checkbox",
              checked: p.confirmed,
              onChange: (e) => setP((x) => ({
                ...x,
                confirmed: e.target.checked
              })),
              renderId: "render-1a135f61",
              as: "input"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              htmlFor: `confirmed-${s.id}`,
              className: "text-sm",
              renderId: "render-7db716db",
              as: "label",
              children: "Confirmed"
            })]
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "flex gap-2",
          renderId: "render-cf566f07",
          as: "div",
          children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            type: "submit",
            disabled: addingPayment,
            className: "px-3 py-2 bg-[#F4D03F] rounded text-black text-sm disabled:opacity-60",
            renderId: "render-6eed8567",
            as: "button",
            children: addingPayment ? "Saving..." : "Save Payment"
          })
        })]
      })]
    })]
  });
}

function AdminDashboard() {
  const {
    user,
    loading: userLoading
  } = useUser();
  const [activeTab, setActiveTab] = useState("overview");
  const [queryClient] = useState(() => new QueryClient());
  const [bypass, setBypass] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams(window.location.search);
      const fromQuery = params.get("bypass") === "1";
      const fromStorage = window.localStorage.getItem("SBBC_ADMIN_BYPASS") === "1";
      const enabled = fromQuery || fromStorage;
      if (enabled) {
        setBypass(true);
        if (fromQuery && !fromStorage) {
          window.localStorage.setItem("SBBC_ADMIN_BYPASS", "1");
        }
      }
    } catch (_) {
    }
  }, []);
  useEffect(() => {
    if (userLoading) return;
    if (typeof window === "undefined") return;
    if (bypass) {
      return;
    }
    if (!user) {
      window.location.replace("/admin-access");
      return;
    }
    if (!user.is_admin) {
      window.location.replace("/admin-access");
      return;
    }
  }, [userLoading, user, bypass]);
  const effectiveUser = bypass ? {
    name: "Admin (Bypass)",
    is_admin: true
  } : user;
  return /* @__PURE__ */ jsx(QueryClientProvider, {
    client: queryClient,
    children: /* @__PURE__ */ jsx(DashboardContent, {
      activeTab,
      setActiveTab,
      user: effectiveUser,
      userLoading: userLoading && !bypass,
      bypass
    })
  });
}
function DashboardContent({
  activeTab,
  setActiveTab,
  user,
  userLoading,
  bypass
}) {
  const {
    metrics,
    admissions,
    discipleshipRequests,
    departmentMembers,
    counselingBookings,
    globalLoading
  } = useAdminData();
  if (userLoading || !user && typeof window !== "undefined" && !bypass) {
    return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "min-h-screen bg-[#FAFAFA] flex items-center justify-center",
      renderId: "render-28ee649f",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-xl text-[#6E6E6E]",
        renderId: "render-8d9bdde5",
        as: "div",
        children: "Loading..."
      })
    });
  }
  if (globalLoading) {
    return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "min-h-screen bg-[#FAFAFA] flex items-center justify-center",
      renderId: "render-8c10a28a",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-xl text-[#6E6E6E]",
        renderId: "render-16c0e0f6",
        as: "div",
        children: "Loading data..."
      })
    });
  }
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-[#FAFAFA]",
    renderId: "render-f207ec90",
    as: "div",
    children: [bypass && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "w-full bg-[#FEF3C7] text-[#92400E] text-center py-2 text-sm",
      renderId: "render-e4a58305",
      as: "div",
      children: "Temporary access enabled (bypass). For security, turn this off later by visiting /admin-bypass/disable"
    }), /* @__PURE__ */ jsx(DashboardHeader, {}), /* @__PURE__ */ jsx(NavigationTabs, {
      activeTab,
      setActiveTab
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto px-8 py-8",
      renderId: "render-61f413be",
      as: "div",
      children: [activeTab === "overview" && /* @__PURE__ */ jsx(OverviewTab, {
        metrics,
        admissions,
        discipleshipRequests,
        departmentMembers
      }), activeTab === "analytics" && /* @__PURE__ */ jsx(AnalyticsTab, {
        admissions,
        discipleshipRequests,
        departmentMembers,
        counselingBookings
      }), activeTab === "submissions" && /* @__PURE__ */ jsx(SubmissionsTab, {
        admissions,
        discipleshipRequests,
        departmentMembers,
        counselingBookings
      }), activeTab === "admissions" && /* @__PURE__ */ jsx(AdmissionsTab, {
        admissions
      }), activeTab === "students" && /* @__PURE__ */ jsx(StudentsTab, {}), activeTab === "discipleship" && /* @__PURE__ */ jsx(DiscipleshipTab, {
        discipleshipRequests
      }), activeTab === "departments" && /* @__PURE__ */ jsx(DepartmentsTab, {
        departmentMembers
      }), activeTab === "counseling" && /* @__PURE__ */ jsx(CounselingTab, {
        counselingBookings
      }), activeTab === "seo" && /* @__PURE__ */ jsx(SEOTab, {}), activeTab === "settings" && /* @__PURE__ */ jsx(SettingsTab, {
        metrics
      })]
    })]
  });
}

function WrappedPage$A(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(AdminDashboard, {
      ...props
    })
  });
}

const route6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$A
}, Symbol.toStringTag, { value: 'Module' }));

function AdminAccess() {
  const {
    signInWithCredentials
  } = useAuth();
  const [step, setStep] = useState("starting");
  const [message, setMessage] = useState("Preparing your admin access…");
  useEffect(() => {
    let cancelled = false;
    const quickSignIn = async () => {
      try {
        setStep("quick-signin");
        setMessage("Checking your access…");
        const res = await signInWithCredentials({
          email: "grappertechnologies@gmail.com",
          password: "20000000",
          callbackUrl: "/admin",
          redirect: false
          // do not redirect if it fails; we'll fix access below
        });
        if (res && (res.ok || res.url)) {
          if (typeof window !== "undefined") {
            window.location.href = res.url || "/admin";
          }
          return true;
        }
      } catch (_) {
      }
      return false;
    };
    const prepareAndSignIn = async () => {
      setStep("preparing");
      setMessage("Giving your account admin access…");
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8e3);
      try {
        const resp = await fetch("/api/auth/set-my-password", {
          method: "GET",
          signal: controller.signal
        });
        clearTimeout(timeout);
        const data = await resp.json().catch(() => ({}));
        if (!resp.ok) {
          throw new Error(data?.error || "Could not prepare admin access");
        }
      } catch (err) {
        if (cancelled) return;
        console.error(err);
        setStep("error");
        setMessage("That was taking a bit long. You can still sign in now, or try setup again.");
        return;
      }
      if (cancelled) return;
      setStep("signing-in");
      setMessage("Signing you in to the dashboard…");
      try {
        await signInWithCredentials({
          email: "grappertechnologies@gmail.com",
          password: "20000000",
          callbackUrl: "/admin",
          redirect: true
        });
        if (typeof window !== "undefined") {
          window.location.href = "/admin";
        }
      } catch (err) {
        console.error(err);
        if (cancelled) return;
        setStep("error");
        setMessage(err?.message || "Something went wrong. Please try again or contact support.");
      }
    };
    const run = async () => {
      const ok = await quickSignIn();
      if (ok || cancelled) return;
      await prepareAndSignIn();
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [signInWithCredentials]);
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6",
    renderId: "render-1342bb7b",
    as: "div",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center",
      renderId: "render-f695cdca",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center",
        style: {
          background: step === "error" ? "#FEE2E2" : "linear-gradient(135deg, #F4D03F, #C29C1A)"
        },
        renderId: "render-f1e89690",
        as: "div",
        children: /* @__PURE__ */ jsx("svg", {
          className: "w-8 h-8 text-black",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
            renderId: "render-2fb47c38",
            as: "path"
          })
        })
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-2xl font-bold text-black mb-2",
        renderId: "render-330e18c7",
        as: "h1",
        children: "Admin Access"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-black/70 mb-6",
        renderId: "render-590aa456",
        as: "p",
        children: message
      }), step === "error" && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "space-y-3",
        renderId: "render-7dc277b6",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: "/setup-admin",
          className: "inline-block w-full py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] transition-all",
          renderId: "render-78e48f53",
          as: "a",
          children: "Try Setup Again"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: "/account/signin?callbackUrl=/admin",
          className: "inline-block w-full py-3 rounded-lg font-semibold text-[#C29C1A] border border-[#E5E7EB]",
          renderId: "render-abc8a490",
          as: "a",
          children: "Go to Sign In"
        })]
      }), (step === "starting" || step === "quick-signin" || step === "preparing" || step === "signing-in") && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "flex items-center justify-center gap-3 text-black/60",
        renderId: "render-bf1447b8",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "w-5 h-5 border-2 border-[#C29C1A] border-t-transparent rounded-full animate-spin",
          renderId: "render-0942d32a",
          as: "div"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          renderId: "render-c7e200dd",
          as: "span",
          children: "Working…"
        })]
      })]
    })
  });
}

function WrappedPage$z(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(AdminAccess, {
      ...props
    })
  });
}

const route7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$z
}, Symbol.toStringTag, { value: 'Module' }));

function AdminBypassToggle() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("SBBC_ADMIN_BYPASS", "1");
        setDone(true);
        setTimeout(() => {
          window.location.replace("/admin?bypass=1");
        }, 300);
      }
    } catch (e) {
      console.error(e);
      setError("Could not enable bypass automatically");
    }
  }, []);
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6",
    renderId: "render-2feafc3d",
    as: "div",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center",
      renderId: "render-e9485d9d",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-2xl font-bold text-black mb-2",
        renderId: "render-c827a6a2",
        as: "h1",
        children: "Enable Admin Bypass"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-black/70 mb-6",
        renderId: "render-fa49acb7",
        as: "p",
        children: "This lets you enter the dashboard without signing in. You can turn it off later."
      }), !done && !error && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "flex items-center justify-center gap-3 text-black/60",
        renderId: "render-4aa003f3",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "w-5 h-5 border-2 border-[#C29C1A] border-t-transparent rounded-full animate-spin",
          renderId: "render-2fd5b381",
          as: "div"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          renderId: "render-37cbd999",
          as: "span",
          children: "Enabling…"
        })]
      }), done && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-black",
        renderId: "render-880a5be6",
        as: "div",
        children: "Bypass enabled. Taking you to the dashboard…"
      }), error && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "space-y-4",
        renderId: "render-9c3e3e71",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-red-600",
          renderId: "render-67d25220",
          as: "div",
          children: error
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: "/admin?bypass=1",
          className: "inline-block w-full py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] transition-all",
          renderId: "render-232beb83",
          as: "a",
          children: "Go to Dashboard"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "mt-6 text-sm text-black/60",
        renderId: "render-655a4958",
        as: "div",
        children: ["To disable later, visit ", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          renderId: "render-abc23f99",
          as: "code",
          children: "/admin-bypass/disable"
        })]
      })]
    })
  });
}

function WrappedPage$y(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(AdminBypassToggle, {
      ...props
    })
  });
}

const route8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$y
}, Symbol.toStringTag, { value: 'Module' }));

function DisableAdminBypass() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem("SBBC_ADMIN_BYPASS");
        setTimeout(() => {
          window.location.replace("/");
        }, 300);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6",
    renderId: "render-4284fe59",
    as: "div",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center",
      renderId: "render-4e6dbe43",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-2xl font-bold text-black mb-2",
        renderId: "render-9b4c0f13",
        as: "h1",
        children: "Bypass Disabled"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-black/70",
        renderId: "render-f113b365",
        as: "p",
        children: "Taking you back home…"
      })]
    })
  });
}

function WrappedPage$x(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(DisableAdminBypass, {
      ...props
    })
  });
}

const route9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$x
}, Symbol.toStringTag, { value: 'Module' }));

function useSeo(path) {
  return useQuery({
    queryKey: ["seo-keyword", path],
    queryFn: async () => {
      const res = await fetch(`/api/seo/keywords?path=${encodeURIComponent(path)}`);
      if (!res.ok) {
        throw new Error(`When fetching /api/seo/keywords?path=${path}, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    },
    staleTime: 5 * 60 * 1000
  });
}

function SEOHead({
  path
}) {
  const {
    data,
    error
  } = useSeo(path);
  const title = data?.meta_title || null;
  const description = data?.meta_description || null;
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (title) {
      document.title = title;
    }
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [title ? /* @__PURE__ */ jsx("title", {
      children: title
    }) : null, description ? /* @__PURE__ */ jsx("meta", {
      name: "description",
      content: description
    }) : null, error ? /* @__PURE__ */ jsx("meta", {
      name: "robots",
      content: "noindex,follow"
    }) : null]
  });
}

function getUpcomingFridays(count = 8) {
  const out = [];
  const today = /* @__PURE__ */ new Date();
  let d = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const day = d.getDay();
  const delta = (5 - day + 7) % 7;
  d.setDate(d.getDate() + delta);
  for (let i = 0; i < count; i++) {
    const date = new Date(d);
    date.setDate(d.getDate() + i * 7);
    const label = date.toLocaleDateString(void 0, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    });
    const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    out.push({
      label,
      value
    });
  }
  return out;
}
function ContactPage() {
  const fridays = useMemo(() => getUpcomingFridays(8), []);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [preferredDate, setPreferredDate] = useState(fridays[0]?.value || "");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const mutation = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/counseling-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        let message2 = `When fetching /api/counseling-booking, the response was [${res.status}] ${res.statusText}`;
        try {
          const j = await res.json();
          if (j?.error) message2 = j.error;
        } catch {
        }
        throw new Error(message2);
      }
      return res.json();
    },
    onSuccess: () => {
      setSuccess(true);
      setError(null);
      toast.success("Booking received. We will confirm your Friday session.");
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
    },
    onError: (e) => {
      console.error(e);
      setError(e.message || "Something went wrong");
      toast.error("Could not submit. Please try again.");
    }
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    const chosen = fridays.find((f) => f.value === preferredDate);
    const preferredLabel = chosen ? chosen.label : preferredDate;
    const payload = {
      full_name: fullName,
      email,
      phone,
      preferred_date: preferredLabel,
      message
    };
    mutation.mutate(payload);
  };
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white",
    renderId: "render-d0de45cf",
    as: "div",
    children: [/* @__PURE__ */ jsx(SEOHead, {
      path: "/contact",
      title: "Book a Friday Session | SBBC Worldwide",
      description: "Book a Friday counseling session with the Pastor. Fill the short form and we will confirm your time."
    }), /* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "pt-28 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden",
      renderId: "render-568c6ec1",
      as: "section",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "absolute inset-0 opacity-20 pointer-events-none",
        "aria-hidden": true,
        renderId: "render-fbab7da1",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-[#F4D03F] to-[#C29C1A]",
          renderId: "render-49794ee2",
          as: "div"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "absolute -bottom-20 -right-10 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-[#C29C1A] to-[#F4D03F]",
          renderId: "render-d0f191d5",
          as: "div"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "relative max-w-3xl mx-auto",
        renderId: "render-fabbcdc3",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-center text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight",
          renderId: "render-70aa4634",
          as: "h1",
          children: "Book a Friday Session"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-center text-white/80 mb-8 max-w-2xl mx-auto",
          renderId: "render-0eead389",
          as: "p",
          children: "Meet the Pastor for one-on-one counseling on Fridays only."
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-8",
          renderId: "render-76bb1225",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white/90",
            renderId: "render-c1109b09",
            as: "div",
            children: [/* @__PURE__ */ jsx(Calendar, {
              className: "w-4 h-4 text-[#F4D03F]"
            }), " Fridays"]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white/90",
            renderId: "render-98745a7f",
            as: "div",
            children: [/* @__PURE__ */ jsx(Clock, {
              className: "w-4 h-4 text-[#F4D03F]"
            }), " 9:00 AM – 5:00 PM"]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white/90",
            renderId: "render-1da3bf09",
            as: "div",
            children: [/* @__PURE__ */ jsx(Phone, {
              className: "w-4 h-4 text-[#F4D03F]"
            }), " +234 706 420 0926"]
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          id: "book",
          onSubmit,
          className: "bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 md:p-8 shadow-2xl",
          noValidate: true,
          renderId: "render-8701cfd8",
          as: "form",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "grid grid-cols-1 gap-5",
            renderId: "render-2663835f",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-fa52d626",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "block text-sm text-white/80 mb-2",
                htmlFor: "full_name",
                renderId: "render-0681bae3",
                as: "label",
                children: "Full Name"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                id: "full_name",
                name: "full_name",
                type: "text",
                required: true,
                value: fullName,
                onChange: (e) => setFullName(e.target.value),
                placeholder: "e.g. Sarah Johnson",
                className: "w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                renderId: "render-3509c071",
                as: "input"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "grid sm:grid-cols-2 gap-5",
              renderId: "render-1d719ee7",
              as: "div",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-ecb8ead0",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "block text-sm text-white/80 mb-2",
                  htmlFor: "email",
                  renderId: "render-022d78d5",
                  as: "label",
                  children: "Email"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  id: "email",
                  name: "email",
                  type: "email",
                  required: true,
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  placeholder: "you@example.com",
                  className: "w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                  renderId: "render-f2a371e2",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-7d19b62d",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "block text-sm text-white/80 mb-2",
                  htmlFor: "phone",
                  renderId: "render-56d3bd84",
                  as: "label",
                  children: "Phone"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  id: "phone",
                  name: "phone",
                  type: "tel",
                  required: true,
                  value: phone,
                  onChange: (e) => setPhone(e.target.value),
                  placeholder: "e.g. +234 706 420 0926",
                  className: "w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                  renderId: "render-857517f2",
                  as: "input"
                })]
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-74fc7a72",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "block text-sm text-white/80 mb-2",
                htmlFor: "preferred_date",
                renderId: "render-66c1ad7b",
                as: "label",
                children: "Choose a Friday"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                id: "preferred_date",
                name: "preferred_date",
                value: preferredDate,
                onChange: (e) => setPreferredDate(e.target.value),
                className: "w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                renderId: "render-9fea973e",
                as: "select",
                children: fridays.map((f) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  value: f.value,
                  className: "text-black",
                  renderId: "render-dc597dfe",
                  as: "option",
                  children: f.label
                }, f.value))
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-8186a6e5",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "block text-sm text-white/80 mb-2",
                htmlFor: "message",
                renderId: "render-00c89eba",
                as: "label",
                children: "Anything we should know? (optional)"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                id: "message",
                name: "message",
                rows: 4,
                value: message,
                onChange: (e) => setMessage(e.target.value),
                placeholder: "Share a short note...",
                className: "w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                renderId: "render-eb4a5715",
                as: "textarea"
              })]
            }), error ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-red-300 bg-red-900/20 border border-red-400/30 rounded-xl px-4 py-3",
              renderId: "render-6b5bd557",
              as: "div",
              children: error
            }) : null, success ? /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center gap-2 text-green-300 bg-green-900/20 border border-green-400/30 rounded-xl px-4 py-3",
              renderId: "render-61825e8a",
              as: "div",
              children: [/* @__PURE__ */ jsx(CheckCircle2, {
                className: "w-5 h-5"
              }), "Thank you! We'll confirm your Friday session."]
            }) : null, /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "pt-2",
              renderId: "render-a4a88365",
              as: "div",
              children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                type: "submit",
                disabled: mutation.isLoading,
                className: "w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full text-black font-bold bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] shadow-[0_8px_24px_rgba(194,156,26,0.45)] hover:shadow-[0_12px_28px_rgba(194,156,26,0.6)] transition-all disabled:opacity-60 disabled:cursor-not-allowed",
                renderId: "render-38b885d4",
                as: "button",
                children: [mutation.isLoading ? "Submitting..." : "Book Session", /* @__PURE__ */ jsx(ArrowRight, {
                  className: "w-5 h-5"
                })]
              })
            }), /* @__PURE__ */ jsx(ShareFormLink, {
              label: "Share this counseling form",
              anchor: "#book"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-xs text-white/60 text-center",
              renderId: "render-59800586",
              as: "p",
              children: "Sessions are scheduled for Fridays. If you need a different day, please call the office so we can assist."
            })]
          })
        })]
      })]
    }), /* @__PURE__ */ jsx(ChurchFooter, {})]
  });
}

function WrappedPage$w(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(ContactPage, {
      ...props
    })
  });
}

const route10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$w
}, Symbol.toStringTag, { value: 'Module' }));

function EducationPage() {
  const schools = [
    {
      name: "Lawson University",
      icon: GraduationCap,
      description: "A modern university offering Bachelor's, Master's, and Doctorate degrees across disciplines.",
      href: "/education/lawson-university",
      // updated route to match new name
      color: "from-[#F4D03F] to-[#C29C1A]",
      category: "University"
    },
    {
      name: "Mandate Institute of Innovation and Technology",
      icon: Code,
      description: "Learn cutting-edge technology skills and prepare for the digital economy.",
      href: "/education/tech-hub",
      color: "from-[#4FD1C5] to-[#38B2AC]",
      category: "Institute"
    },
    {
      name: "Sunrise Theological School",
      iconType: "image",
      iconSrc: "https://ucarecdn.com/e129ad09-93b4-493e-80de-5a09fc4f7f26/-/format/auto/",
      description: "Deepen your understanding of Scripture and prepare for ministry leadership.",
      href: "/education/seminary",
      color: "from-[#9F7AEA] to-[#805AD5]",
      category: "Seminary"
    },
    // Added new academies
    {
      name: "Football Academy",
      icon: Trophy,
      description: "Develop talent with elite coaching, fitness, and competitive play pathways.",
      href: "/education/football-academy",
      color: "from-[#34D399] to-[#059669]",
      // green
      category: "Academy"
    },
    {
      name: "Marriage Academy",
      icon: Heart,
      description: "Courses and mentoring for premarital, marriage enrichment, and family life.",
      href: "/education/marriage-academy",
      color: "from-[#FB7185] to-[#F43F5E]",
      // rose/red
      category: "Academy"
    },
    {
      name: "Deep Knowledge Academy",
      icon: BookOpen,
      description: "Intensive study tracks to grow depth in truth, wisdom, and leadership.",
      href: "/education/deep-knowledge-academy",
      color: "from-[#60A5FA] to-[#3B82F6]",
      // blue
      category: "Academy"
    }
  ];
  const featuredPrograms = [{
    title: "Undergraduate (Lawson)",
    href: "/education/lawson-university/undergraduate",
    color: "from-[#F4D03F] to-[#C29C1A]",
    icon: GraduationCap
  }, {
    title: "Masters (Lawson)",
    href: "/education/lawson-university/masters",
    color: "from-[#E6B422] to-[#C29C1A]",
    icon: GraduationCap
  }, {
    title: "Doctorate (Lawson)",
    href: "/education/lawson-university/doctorate",
    color: "from-[#D2A400] to-[#A07C00]",
    icon: GraduationCap
  }, {
    title: "Seminary Programs",
    href: "/education/seminary/programs",
    color: "from-[#9F7AEA] to-[#805AD5]",
    icon: BookOpen
  }];
  const {
    data: admissions = [],
    isLoading: admLoading,
    error: admError
  } = useQuery({
    queryKey: ["school-admission"],
    queryFn: async () => {
      const res = await fetch("/api/school-admission");
      if (!res.ok) {
        throw new Error(`When fetching /api/school-admission, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    }
  });
  const {
    data: students = [],
    isLoading: stuLoading,
    error: stuError
  } = useQuery({
    queryKey: ["students-all"],
    queryFn: async () => {
      const res = await fetch("/api/students");
      if (!res.ok) {
        throw new Error(`When fetching /api/students, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    }
  });
  Array.isArray(admissions) ? admissions.length : 0;
  Array.isArray(students) ? students.length : 0;
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const categories = ["All", "University", "Institute", "Seminary", "Academy"];
  const filteredSchools = useMemo(() => {
    const term = search.trim().toLowerCase();
    return schools.filter((s) => {
      const matchCat = cat === "All" || s.category === cat;
      if (!term) return matchCat;
      const hay = `${s.name} ${s.description}`.toLowerCase();
      return matchCat && hay.includes(term);
    });
  }, [schools, search, cat]);
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    style: {
      // iOS-inspired layered gray with a cool blue tint
      background: "radial-gradient(1200px 600px at 10% -10%, rgba(74,88,119,0.10), transparent 60%), radial-gradient(1000px 500px at 110% 10%, rgba(25,32,44,0.30), transparent 60%), linear-gradient(180deg, #0b0e14 0%, #0f131a 40%, #10151f 100%)",
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, system-ui, sans-serif'
    },
    className: "jsx-324238383 min-h-screen text-white",
    renderId: "render-da16dc5a",
    as: "div",
    children: [/* @__PURE__ */ jsx(SEOHead, {
      path: "/education"
    }), /* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "jsx-324238383 relative w-full h-[420px] md:h-[520px] overflow-hidden",
      renderId: "render-9e63a2f3",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=800&fit=crop&q=80",
        alt: "Education hero",
        className: "jsx-324238383 w-full h-full object-cover",
        renderId: "render-586b2352",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-324238383 absolute inset-0 bg-gradient-to-b from-black/60 via-[#0d121a]/60 to-[#0d121a]/90",
        renderId: "render-22b9dbf6",
        as: "div"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-324238383 absolute inset-0 flex items-center justify-center px-6",
        renderId: "render-13da0bf4",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-324238383 backdrop-blur-xl bg-white/7 border border-white/15 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 md:p-8 max-w-3xl w-full text-center",
          renderId: "render-6c2dd629",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-324238383 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs md:text-sm mb-3",
            renderId: "render-47e975f8",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-324238383 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse",
              renderId: "render-92092630",
              as: "span"
            }), "Explore Our Institutions"]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-324238383 text-4xl md:text-6xl font-bold tracking-tight",
            renderId: "render-b132c613",
            as: "h1",
            children: "Education"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-324238383 mt-3 md:mt-4 text-white/80 md:text-lg",
            renderId: "render-2be74502",
            as: "p",
            children: "Discover pathways in academia, ministry, technology, sports, and family life."
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-324238383 px-6 -mt-10 md:-mt-12 relative z-10",
      renderId: "render-9c74fb6c",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-324238383 max-w-6xl mx-auto",
        renderId: "render-7c0e9abc",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-324238383 w-full backdrop-blur-xl bg-white/8 border border-white/15 rounded-2xl p-3 overflow-x-auto",
          renderId: "render-781de679",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-324238383 flex gap-3 md:gap-4 min-w-max",
            renderId: "render-ea6da7d6",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "/education/lawson-university/admissions",
              className: "jsx-324238383 action-chip",
              renderId: "render-f2593fe2",
              as: "a",
              children: [/* @__PURE__ */ jsx(Send, {
                className: "w-4 h-4"
              }), " Apply Now"]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "/education/seminary/admissions",
              className: "jsx-324238383 action-chip",
              renderId: "render-17c737cc",
              as: "a",
              children: [/* @__PURE__ */ jsx(Send, {
                className: "w-4 h-4"
              }), " Seminary Admissions"]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "/education/lawson-university/tuition-aid",
              className: "jsx-324238383 action-chip",
              renderId: "render-4a6e0b4b",
              as: "a",
              children: [/* @__PURE__ */ jsx(BadgeDollarSign, {
                className: "w-4 h-4"
              }), " Scholarships & Aid"]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "/education/lawson-university",
              className: "jsx-324238383 action-chip",
              renderId: "render-d88d87b7",
              as: "a",
              children: [/* @__PURE__ */ jsx(MapPin, {
                className: "w-4 h-4"
              }), " Visit Campus"]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "/education",
              className: "jsx-324238383 action-chip",
              renderId: "render-27b050cf",
              as: "a",
              children: [/* @__PURE__ */ jsx(PlayCircle, {
                className: "w-4 h-4"
              }), " Explore Programs"]
            })]
          })
        })
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-324238383 mt-8 px-6",
      renderId: "render-49b246c5",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-324238383 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-3 md:gap-4",
        renderId: "render-611578f0",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-324238383 relative flex-1",
          renderId: "render-3207db31",
          as: "div",
          children: [/* @__PURE__ */ jsx(Search, {
            className: "w-4 h-4 text-white/60 absolute left-3 top-1/2 -translate-y-1/2"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Search institutions…",
            className: "jsx-324238383 w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/10 border border-white/15 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20",
            renderId: "render-2653d510",
            as: "input"
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-324238383 flex gap-2 overflow-x-auto md:overflow-visible",
          renderId: "render-33c94ade",
          as: "div",
          children: categories.map((c) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            onClick: () => setCat(c),
            className: `jsx-324238383 px-3 py-2 rounded-xl border ${cat === c ? "bg-white/15 border-white/30 text-white" : "bg-white/5 border-white/10 text-white/85 hover:bg-white/10"}`,
            renderId: "render-63448188",
            as: "button",
            children: c
          }, c))
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-324238383 py-12 md:py-16 px-6",
      renderId: "render-c033f64e",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-324238383 max-w-7xl mx-auto",
        renderId: "render-8548ed75",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-324238383 text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12",
          renderId: "render-cf9f96c7",
          as: "h2",
          children: "Our Educational Institutions"
        }), filteredSchools.length > 0 ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-324238383 grid md:grid-cols-3 gap-6 md:gap-8",
          renderId: "render-f89e94df",
          as: "div",
          children: filteredSchools.map((school, index) => {
            const IconComp = school.icon || GraduationCap;
            return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: school.href,
              className: "jsx-324238383 group relative block rounded-3xl p-6 md:p-8 bg-white/6 hover:bg-white/8 border border-white/12 hover:border-white/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]",
              renderId: "render-5c6c4e68",
              as: "a",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "jsx-324238383 relative w-20 h-20 rounded-2xl mb-6 shadow-lg overflow-hidden",
                renderId: "render-2a49565b",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: `jsx-324238383 absolute inset-0 rounded-2xl bg-gradient-to-br ${school.color}`,
                  renderId: "render-50ae7cb3",
                  as: "div"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-324238383 absolute inset-0 bg-white/10",
                  renderId: "render-7eb70fa2",
                  as: "div"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-324238383 absolute -inset-8 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_40%)] animate-sheen",
                  renderId: "render-4d0861a3",
                  as: "div"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-324238383 relative w-full h-full flex items-center justify-center",
                  renderId: "render-6007e77b",
                  as: "div",
                  children: school.iconType === "image" ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    src: school.iconSrc,
                    alt: `${school.name} logo`,
                    className: "jsx-324238383 w-[84px] h-[84px] object-contain",
                    renderId: "render-a081525b",
                    as: "img"
                  }) : /* @__PURE__ */ jsx(IconComp, {
                    className: "jsx-324238383 w-10 h-10 text-white"
                  })
                })]
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-324238383 text-2xl font-semibold tracking-tight mb-1",
                renderId: "render-09cb2c13",
                as: "h3",
                children: school.name
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-324238383 inline-flex items-center text-[11px] uppercase tracking-wide text-white/70 mb-2 px-2 py-0.5 rounded-full border border-white/15 bg-white/5",
                renderId: "render-fb5164c0",
                as: "div",
                children: school.category
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-324238383 text-white/80 pr-8",
                renderId: "render-b6afa8c8",
                as: "p",
                children: school.description
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "jsx-324238383 mt-6 inline-flex items-center gap-2 text-amber-300/90 group-hover:text-amber-200 transition-colors",
                renderId: "render-a5ec022d",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-324238383 text-sm font-medium",
                  renderId: "render-f48ffcb5",
                  as: "span",
                  children: "Learn more"
                }), /* @__PURE__ */ jsx(ArrowRight, {
                  "aria-hidden": "true",
                  className: "w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                })]
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-324238383 pointer-events-none absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/25",
                renderId: "render-80c06f63",
                as: "div"
              })]
            }, index);
          })
        }) : (
          // No results state: avoid large empty gaps
          /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-324238383 mx-auto max-w-2xl text-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-8",
            renderId: "render-fd53e23f",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-324238383 text-lg font-semibold",
              renderId: "render-1f9806a2",
              as: "div",
              children: "No institutions found"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-324238383 text-white/80 mt-2 text-sm",
              renderId: "render-0ee01aed",
              as: "p",
              children: "Try clearing the search or selecting a different category."
            })]
          })
        )]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-324238383 py-6 md:py-10 px-6",
      renderId: "render-3be74098",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-324238383 max-w-7xl mx-auto",
        renderId: "render-56d81890",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-324238383 flex items-center justify-between mb-6",
          renderId: "render-ab10c3fe",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-324238383 text-2xl md:text-3xl font-bold",
            renderId: "render-1506863e",
            as: "h3",
            children: "Featured Programs"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            href: "/education/lawson-university",
            className: "jsx-324238383 text-amber-300/90 hover:text-amber-200 text-sm",
            renderId: "render-0cdbd774",
            as: "a",
            children: "See all programs →"
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-324238383 grid md:grid-cols-4 gap-4 md:gap-6",
          renderId: "render-0c257842",
          as: "div",
          children: featuredPrograms.map((fp, idx) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: fp.href,
            className: "jsx-324238383 group rounded-2xl p-5 bg-white/6 hover:bg-white/8 border border-white/12 hover:border-white/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1",
            renderId: "render-72322171",
            as: "a",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-324238383 relative w-14 h-14 rounded-xl mb-4 overflow-hidden shadow",
              renderId: "render-ccfbf231",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: `jsx-324238383 absolute inset-0 rounded-xl bg-gradient-to-br ${fp.color}`,
                renderId: "render-278e4261",
                as: "div"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-324238383 absolute inset-0 bg-white/10",
                renderId: "render-3d35c822",
                as: "div"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-324238383 absolute -inset-6 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_40%)] animate-sheen",
                renderId: "render-a8ce49fa",
                as: "div"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-324238383 relative w-full h-full flex items-center justify-center",
                renderId: "render-2758dbd4",
                as: "div",
                children: /* @__PURE__ */ jsx(fp.icon, {
                  className: "w-7 h-7 text-white"
                })
              })]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-324238383 font-semibold leading-snug",
              renderId: "render-1da70c16",
              as: "div",
              children: fp.title
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-324238383 mt-3 inline-flex items-center gap-1 text-amber-300/90 group-hover:text-amber-200 text-xs",
              renderId: "render-5af2917b",
              as: "div",
              children: ["Learn more ", /* @__PURE__ */ jsx(ArrowRight, {
                className: "w-4 h-4"
              })]
            })]
          }, idx))
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {}), /* @__PURE__ */ jsx(_JSXStyle, {
      id: "324238383",
      children: ["@-webkit-keyframes slideUpSoft{0%{opacity:0;-webkit-transform:translateY(22px) scale(0.98);-ms-transform:translateY(22px) scale(0.98);transform:translateY(22px) scale(0.98);-webkit-filter:blur(6px);filter:blur(6px);}60%{opacity:1;-webkit-transform:translateY(-2px) scale(1);-ms-transform:translateY(-2px) scale(1);transform:translateY(-2px) scale(1);-webkit-filter:blur(0);filter:blur(0);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@keyframes slideUpSoft{0%{opacity:0;-webkit-transform:translateY(22px) scale(0.98);-ms-transform:translateY(22px) scale(0.98);transform:translateY(22px) scale(0.98);-webkit-filter:blur(6px);filter:blur(6px);}60%{opacity:1;-webkit-transform:translateY(-2px) scale(1);-ms-transform:translateY(-2px) scale(1);transform:translateY(-2px) scale(1);-webkit-filter:blur(0);filter:blur(0);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", ".reveal{opacity:0;}", ".reveal.show{-webkit-animation:slideUpSoft 650ms cubic-bezier(0.22,1,0.36,1) both;animation:slideUpSoft 650ms cubic-bezier(0.22,1,0.36,1) both;}", "@-webkit-keyframes sheen{0%{-webkit-transform:translateX(-40%);-ms-transform:translateX(-40%);transform:translateX(-40%);opacity:0;}40%{opacity:0.9;}100%{-webkit-transform:translateX(40%);-ms-transform:translateX(40%);transform:translateX(40%);opacity:0;}}", "@keyframes sheen{0%{-webkit-transform:translateX(-40%);-ms-transform:translateX(-40%);transform:translateX(-40%);opacity:0;}40%{opacity:0.9;}100%{-webkit-transform:translateX(40%);-ms-transform:translateX(40%);transform:translateX(40%);opacity:0;}}", ".animate-sheen{-webkit-animation:sheen 2.8s ease-in-out infinite;animation:sheen 2.8s ease-in-out infinite;}", "@-webkit-keyframes floaty{0%{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}50%{-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}100%{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}", "@keyframes floaty{0%{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}50%{-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}100%{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}", ".action-chip{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-weight:500;color:white;padding:10px 14px;border-radius:9999px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.08);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);-webkit-transition:all 200ms ease;transition:all 200ms ease;white-space:nowrap;}", ".action-chip:hover{background:rgba(255,255,255,0.12);-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}", ".stat-card{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.18);border-radius:16px;padding:16px;box-shadow:0 10px 30px rgba(0,0,0,0.25);}", "@media (prefers-reduced-motion:reduce){.reveal{opacity:1 !important;-webkit-transform:none !important;-ms-transform:none !important;transform:none !important;-webkit-filter:none !important;filter:none !important;}.reveal.show{-webkit-animation:none !important;animation:none !important;}.animate-sheen{-webkit-animation:none !important;animation:none !important;}.action-chip{-webkit-transform:none !important;-ms-transform:none !important;transform:none !important;}}"]
    })]
  });
}

function WrappedPage$v(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(EducationPage, {
      ...props
    })
  });
}

const route11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$v
}, Symbol.toStringTag, { value: 'Module' }));

function HeroSection() {
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "relative w-full h-[360px] md:h-[460px]",
    "data-animate": true,
    renderId: "render-eb0733e9",
    as: "div",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      src: "https://images.unsplash.com/photo-1596495578065-8f02bd6c2234?w=1920&h=800&fit=crop&q=80",
      alt: "Deep Knowledge Academy",
      className: "w-full h-full object-cover",
      renderId: "render-48113a67",
      as: "img"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "absolute inset-0 bg-black/55 flex items-center",
      renderId: "render-dc13ea32",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto px-6 w-full",
        renderId: "render-b95c7819",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "max-w-2xl",
          renderId: "render-3252eaf4",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-5xl font-bold text-white",
            renderId: "render-24adde7c",
            as: "h1",
            children: "Deep Knowledge Academy"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-3 text-white/90",
            renderId: "render-1c5d4562",
            as: "p",
            children: "A Christian faith‑based Nursery, Primary, and Secondary school forming minds and hearts in knowledge, character, and Christ."
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "mt-6 flex flex-wrap gap-3",
            renderId: "render-29cefbe0",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "#admissions",
              className: "inline-flex items-center gap-2 bg-[#F4D03F] hover:bg-[#C29C1A] text-black font-semibold px-5 py-3 rounded-lg transition-colors",
              renderId: "render-5c158cf7",
              as: "a",
              children: ["Apply Now ", /* @__PURE__ */ jsx(ChevronRight, {
                className: "w-4 h-4"
              })]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              href: "#curriculum",
              className: "inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-lg transition-colors",
              renderId: "render-3bfd81ff",
              as: "a",
              children: "Explore Curriculum"
            })]
          })]
        })
      })
    })]
  });
}

function NavigationBar({
  navItems
}) {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "sticky top-0 z-30 bg-white/90 dark:bg-[#121212]/90 backdrop-blur border-b border-[#E9E9E9] dark:border-[#333]",
    renderId: "render-75a02553",
    as: "div",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-6xl mx-auto px-6 overflow-x-auto",
      renderId: "render-b987b92f",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex gap-4 md:gap-6 py-3",
        renderId: "render-ab2f5681",
        as: "div",
        children: navItems.map((n) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: `#${n.id}`,
          className: "whitespace-nowrap text-sm md:text-[15px] text-[#2B2B2B] dark:text-[#E0E0E0] hover:text-black dark:hover:text-white",
          renderId: "render-4c54a695",
          as: "a",
          children: n.label
        }, n.id))
      })
    })
  });
}

function AboutSection() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    id: "about",
    className: "py-16 px-6",
    renderId: "render-be90e253",
    as: "section",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-10",
      "data-animate": true,
      renderId: "render-066dc094",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333]",
        renderId: "render-c9ca9d02",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-2xl font-bold text-black dark:text-white mb-3",
          renderId: "render-6699244f",
          as: "h2",
          children: "About the School"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-eec73454",
          as: "p",
          children: "We partner with families to nurture students in wisdom, excellence, and godly character. Teaching is rigorous and joyful, with daily devotion, Scripture memory, and mentoring woven through school life."
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "mt-4 space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-d7f174f1",
          as: "ul",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-start gap-2",
            renderId: "render-e29df097",
            as: "li",
            children: [/* @__PURE__ */ jsx(CheckCircle, {
              className: "w-5 h-5 text-[#34D399] mt-0.5"
            }), " ", "Qualified, caring teachers"]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-start gap-2",
            renderId: "render-c252e35b",
            as: "li",
            children: [/* @__PURE__ */ jsx(CheckCircle, {
              className: "w-5 h-5 text-[#34D399] mt-0.5"
            }), " Safe campus with strong safeguarding"]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-start gap-2",
            renderId: "render-bb16abb0",
            as: "li",
            children: [/* @__PURE__ */ jsx(CheckCircle, {
              className: "w-5 h-5 text-[#34D399] mt-0.5"
            }), " Strong academics and discipleship"]
          })]
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333]",
        renderId: "render-3a643587",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-2xl font-bold text-black dark:text-white mb-3",
          renderId: "render-596be368",
          as: "h3",
          children: "Our Christian Ethos"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-1d3b3b99",
          as: "p",
          children: "Jesus Christ is at the center of our life together. We affirm the authority of Scripture and aim to cultivate love for God and neighbor through chapel, service, and learning."
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "mt-4 grid grid-cols-2 gap-3",
          renderId: "render-5ebbf335",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "p-4 rounded-xl bg-[#FFF9E6] dark:bg-[#2A230E] border border-[#FCE7A0]",
            renderId: "render-8b6076d4",
            as: "div",
            children: [/* @__PURE__ */ jsx(Heart, {
              className: "w-5 h-5 text-[#C29C1A]"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "mt-2 text-sm text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-50a50a28",
              as: "p",
              children: "Character & service"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "p-4 rounded-xl bg-[#E6F0FF] dark:bg-[#0F1A2A] border border-[#A7C4FF]",
            renderId: "render-4f7226d2",
            as: "div",
            children: [/* @__PURE__ */ jsx(BookOpen, {
              className: "w-5 h-5 text-[#3B82F6]"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "mt-2 text-sm text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-67093393",
              as: "p",
              children: "Biblical worldview"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "p-4 rounded-xl bg-[#EAFBF4] dark:bg-[#0F231C] border border-[#B5F5DE]",
            renderId: "render-f64a95d4",
            as: "div",
            children: [/* @__PURE__ */ jsx(Users, {
              className: "w-5 h-5 text-[#10B981]"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "mt-2 text-sm text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-1934beb0",
              as: "p",
              children: "Family partnership"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "p-4 rounded-xl bg-[#FDEAF3] dark:bg-[#2A0F21] border border-[#F8B5D5]",
            renderId: "render-03083269",
            as: "div",
            children: [/* @__PURE__ */ jsx(GraduationCap, {
              className: "w-5 h-5 text-[#EC4899]"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "mt-2 text-sm text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-70b6e920",
              as: "p",
              children: "Academic excellence"
            })]
          })]
        })]
      })]
    })
  });
}

function LevelsSection() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    id: "levels",
    className: "py-16 px-6 bg-[#FAFAFA] dark:bg-[#161616]",
    renderId: "render-a5b67b0b",
    as: "section",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-6xl mx-auto",
      renderId: "render-fd59bfb1",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-3xl font-bold text-black dark:text-white text-center mb-10",
        "data-animate": true,
        renderId: "render-6bff43b0",
        as: "h2",
        children: "Nursery • Primary • Secondary"
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "grid md:grid-cols-3 gap-6",
        "data-animate": true,
        renderId: "render-8d5e028c",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]",
          renderId: "render-806c4d64",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "w-12 h-12 rounded-full bg-[#FFF3C4] flex items-center justify-center mb-4",
            renderId: "render-7ae4df80",
            as: "div",
            children: /* @__PURE__ */ jsx(BookOpen, {
              className: "w-6 h-6 text-[#C29C1A]"
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-xl font-bold text-black dark:text-white",
            renderId: "render-dad3fd8b",
            as: "h3",
            children: "Nursery (Ages 2–5)"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-e032b7f5",
            as: "p",
            children: "Play‑based learning with strong phonics and number sense in a caring, faith‑filled setting."
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]",
          renderId: "render-e08f8af3",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "w-12 h-12 rounded-full bg-[#E6F0FF] flex items-center justify-center mb-4",
            renderId: "render-6ad7ba59",
            as: "div",
            children: /* @__PURE__ */ jsx(Users, {
              className: "w-6 h-6 text-[#3B82F6]"
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-xl font-bold text-black dark:text-white",
            renderId: "render-a9cd2b9f",
            as: "h3",
            children: "Primary (Years 1–6)"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-00707073",
            as: "p",
            children: "Foundational literacy, numeracy, science, and Bible with projects and character formation."
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]",
          renderId: "render-bc64a42c",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "w-12 h-12 rounded-full bg-[#EAFBF4] flex items-center justify-center mb-4",
            renderId: "render-81e380bc",
            as: "div",
            children: /* @__PURE__ */ jsx(GraduationCap, {
              className: "w-6 h-6 text-[#10B981]"
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-xl font-bold text-black dark:text-white",
            renderId: "render-4cb193c8",
            as: "h3",
            children: "Secondary (JSS1 – SS3)"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-c8024944",
            as: "p",
            children: "Strong academics, leadership, clubs, and exam preparation within a Christ‑centered culture."
          })]
        })]
      })]
    })
  });
}

function CurriculumSection({
  subjects
}) {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    id: "curriculum",
    className: "py-16 px-6",
    renderId: "render-1191d78c",
    as: "section",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-6xl mx-auto grid md:grid-cols-3 gap-6",
      "data-animate": true,
      renderId: "render-8ac2d3c6",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]",
        renderId: "render-deffbae0",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-xl font-bold text-black dark:text-white mb-3",
          renderId: "render-27bd91c3",
          as: "h3",
          children: "Nursery"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-8ca143fa",
          as: "ul",
          children: subjects.nursery.map((s) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-40dc6e4a",
            as: "li",
            children: ["• ", s]
          }, s))
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]",
        renderId: "render-db178b10",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-xl font-bold text-black dark:text-white mb-3",
          renderId: "render-0549153c",
          as: "h3",
          children: "Primary"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-b402e13e",
          as: "ul",
          children: subjects.primary.map((s) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-be0dfaf8",
            as: "li",
            children: ["• ", s]
          }, s))
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]",
        renderId: "render-b2abd682",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-xl font-bold text-black dark:text-white mb-3",
          renderId: "render-081a5ff2",
          as: "h3",
          children: "Secondary"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-6f467a7a",
          as: "ul",
          children: subjects.secondary.map((s) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-c6bf7b5f",
            as: "li",
            children: ["• ", s]
          }, s))
        })]
      })]
    })
  });
}

const facilities = [{
  title: "Modern Classrooms",
  img: "https://images.unsplash.com/photo-1558021211-6d1403321394?w=800&q=80"
}, {
  title: "Science Labs",
  img: "https://images.unsplash.com/photo-1581093588401-16ec8a57ea3a?w=800&q=80"
}, {
  title: "ICT Suite",
  img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
}, {
  title: "Playfields & Courts",
  img: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=800&q=80"
}];
function FacilitiesSection() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    id: "facilities",
    className: "py-16 px-6 bg-[#FAFAFA] dark:bg-[#161616]",
    renderId: "render-622b46c3",
    as: "section",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-6xl mx-auto",
      "data-animate": true,
      renderId: "render-22ba48a4",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-3xl font-bold text-black dark:text-white text-center mb-10",
        renderId: "render-fd82a131",
        as: "h2",
        children: "Facilities"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "grid md:grid-cols-4 gap-6",
        renderId: "render-93113dd1",
        as: "div",
        children: facilities.map((f) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "rounded-2xl overflow-hidden border border-[#E9E9E9] dark:border-[#333] bg-white dark:bg-[#1E1E1E]",
          renderId: "render-1201d0f4",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            src: f.img,
            alt: f.title,
            className: "w-full h-36 object-cover",
            renderId: "render-3e1c100f",
            as: "img"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "p-4 text-center text-[#2B2B2B] dark:text-[#E0E0E0] font-medium",
            renderId: "render-63dd6229",
            as: "div",
            children: f.title
          })]
        }, f.title))
      })]
    })
  });
}

const activities = [{
  title: "Clubs & Societies",
  desc: "STEM, Arts, Music, Debate, Entrepreneurship"
}, {
  title: "Sports",
  desc: "Football, Athletics, Basketball, Table Tennis"
}, {
  title: "Service & Chapel",
  desc: "Chapel, Outreach, Mentoring & House System"
}];
function ActivitiesSection() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    id: "activities",
    className: "py-16 px-6",
    renderId: "render-aa2b71c0",
    as: "section",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-6xl mx-auto grid md:grid-cols-3 gap-6",
      "data-animate": true,
      renderId: "render-26e08e59",
      as: "div",
      children: activities.map((a) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]",
        renderId: "render-0a32ae77",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-xl font-bold text-black dark:text-white",
          renderId: "render-c74aaa61",
          as: "h3",
          children: a.title
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-60ab320b",
          as: "p",
          children: a.desc
        })]
      }, a.title))
    })
  });
}

function FeesSection() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    id: "fees",
    className: "py-16 px-6 bg-[#FAFAFA] dark:bg-[#161616]",
    renderId: "render-899c6220",
    as: "section",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-10",
      "data-animate": true,
      renderId: "render-1713cef1",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333]",
        renderId: "render-728b794e",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-2xl font-bold text-black dark:text-white mb-3",
          renderId: "render-303d06cb",
          as: "h3",
          children: "Fees Overview"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-c08e56cb",
          as: "p",
          children: "Tuition varies by level and class. Detailed fee schedules are shared during admissions. We also offer sibling discounts and limited scholarships."
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333]",
        renderId: "render-19d51438",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-2xl font-bold text-black dark:text-white mb-3",
          renderId: "render-23eb7d5e",
          as: "h3",
          children: "Financial Aid"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-fb55e651",
          as: "p",
          children: "Need assistance? Indicate interest in aid in your application notes, and our team will guide you through available options."
        })]
      })]
    })
  });
}

const terms = [{
  term: "First Term",
  dates: "Sept 9 – Dec 13"
}, {
  term: "Second Term",
  dates: "Jan 6 – Mar 28"
}, {
  term: "Third Term",
  dates: "Apr 28 – Jul 18"
}];
function CalendarSection() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    id: "calendar",
    className: "py-16 px-6",
    renderId: "render-51eee65f",
    as: "section",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-6xl mx-auto",
      "data-animate": true,
      renderId: "render-ed603cf8",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-3xl font-bold text-black dark:text-white text-center mb-10",
        renderId: "render-fae48be9",
        as: "h2",
        children: "Academic Calendar (Sample)"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "grid md:grid-cols-3 gap-6",
        renderId: "render-38568fb7",
        as: "div",
        children: terms.map((t) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]",
          renderId: "render-9787441c",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-center gap-3",
            renderId: "render-ec1d4d01",
            as: "div",
            children: [/* @__PURE__ */ jsx(Calendar, {
              className: "w-5 h-5 text-[#C29C1A]"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-lg font-semibold text-black dark:text-white",
              renderId: "render-10973d78",
              as: "h3",
              children: t.term
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-5086cd8d",
            as: "p",
            children: t.dates
          })]
        }, t.term))
      })]
    })
  });
}

function useUpload() {
  const [loading, setLoading] = React.useState(false);
  const upload = React.useCallback(async input => {
    try {
      setLoading(true);
      let response;
      if ("file" in input && input.file) {
        const formData = new FormData();
        formData.append("file", input.file);
        response = await fetch("/_create/api/upload/", {
          method: "POST",
          body: formData
        });
      } else if ("url" in input) {
        response = await fetch("/_create/api/upload/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            url: input.url
          })
        });
      } else if ("base64" in input) {
        response = await fetch("/_create/api/upload/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            base64: input.base64
          })
        });
      } else {
        response = await fetch("/_create/api/upload/", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream"
          },
          body: input.buffer
        });
      }
      if (!response.ok) {
        if (response.status === 413) {
          throw new Error("Upload failed: File too large.");
        }
        throw new Error("Upload failed");
      }
      const data = await response.json();
      return {
        url: data.url,
        mimeType: data.mimeType || null
      };
    } catch (uploadError) {
      if (uploadError instanceof Error) {
        return {
          error: uploadError.message
        };
      }
      if (typeof uploadError === "string") {
        return {
          error: uploadError
        };
      }
      return {
        error: "Upload failed"
      };
    } finally {
      setLoading(false);
    }
  }, []);
  return [upload, {
    loading
  }];
}

function ApplicationForm() {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [dob, setDob] = useState("");
  const [level, setLevel] = useState("Nursery");
  const [entryClass, setEntryClass] = useState("");
  const [term, setTerm] = useState("Next Term");
  const [prevSchool, setPrevSchool] = useState("");
  const [church, setChurch] = useState("");
  const [notes, setNotes] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [upload, {
    loading: uploading
  }] = useUpload();
  const buildQualifications = useCallback(() => {
    const parts = [`Child: ${childName || "(not set)"}`, dob ? `DOB: ${dob}` : null, `Level: ${level}`, entryClass ? `Entry Class: ${entryClass}` : null, `Preferred Start: ${term}`, prevSchool ? `Previous School: ${prevSchool}` : null, church ? `Church: ${church}` : null, notes ? `Notes: ${notes}` : null].filter(Boolean);
    return parts.join(" | ");
  }, [childName, dob, level, entryClass, term, prevSchool, church, notes]);
  const applyMutation = useMutation({
    mutationFn: async (vars) => {
      const payload = {
        school_name: "Deep Knowledge Academy",
        full_name: parentName,
        email,
        phone,
        qualifications: buildQualifications(),
        program: level,
        degree_type: null,
        qualifications_pdf_url: vars?.pdfUrl || null
      };
      const response = await fetch("/api/school-admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        let message = `When fetching /api/school-admission, the response was [${response.status}] ${response.statusText}`;
        try {
          const data = await response.json();
          if (data?.error) message = data.error;
        } catch {
        }
        throw new Error(message);
      }
      return response.json();
    },
    onSuccess: () => {
      toast.success("Application submitted. We'll contact you shortly.");
      setParentName("");
      setEmail("");
      setPhone("");
      setChildName("");
      setDob("");
      setLevel("Nursery");
      setEntryClass("");
      setTerm("Next Term");
      setPrevSchool("");
      setChurch("");
      setNotes("");
      setPdfFile(null);
    },
    onError: (err) => {
      console.error(err);
      toast.error(err && err.message || "Could not submit application");
    }
  });
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!parentName || !email || !phone) {
      toast.error("Please fill parent name, email, and phone.");
      return;
    }
    let pdfUrl = null;
    if (pdfFile) {
      const {
        url,
        mimeType,
        error
      } = await upload({
        file: pdfFile
      });
      if (error) {
        toast.error(error);
        return;
      }
      if (mimeType && !mimeType.startsWith("application/pdf")) {
        toast.error("Please upload a PDF file.");
        return;
      }
      pdfUrl = url;
    }
    applyMutation.mutate({
      pdfUrl
    });
  }, [applyMutation, parentName, email, phone, pdfFile, upload]);
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    onSubmit: handleSubmit,
    className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333]",
    renderId: "render-8cbb2734",
    as: "form",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "text-xl font-bold text-black dark:text-white",
      renderId: "render-9f44d669",
      as: "h3",
      children: "Apply Now"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "text-sm text-[#6E6E6E] dark:text-[#A0A0A0] mt-1",
      renderId: "render-8256faf1",
      as: "p",
      children: "Fields with * are required."
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "mt-5 grid grid-cols-1 md:grid-cols-2 gap-4",
      renderId: "render-ef27fac2",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        renderId: "render-91ee4b89",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-5c15be1c",
          as: "label",
          children: "Parent/Guardian Full Name *"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          value: parentName,
          onChange: (e) => setParentName(e.target.value),
          className: "mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2",
          placeholder: "e.g., Jane Doe",
          renderId: "render-e369c989",
          as: "input"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        renderId: "render-1c55eac8",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-00e56c78",
          as: "label",
          children: "Email *"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          type: "email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          className: "mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2",
          placeholder: "you@example.com",
          renderId: "render-e85c520e",
          as: "input"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        renderId: "render-a39d3c16",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-cf1fd19c",
          as: "label",
          children: "Phone *"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          type: "tel",
          value: phone,
          onChange: (e) => setPhone(e.target.value),
          className: "mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2",
          placeholder: "e.g., +2347064200926",
          renderId: "render-3cab4514",
          as: "input"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        renderId: "render-3fe78069",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-9841d9dd",
          as: "label",
          children: "Child's Full Name"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          value: childName,
          onChange: (e) => setChildName(e.target.value),
          className: "mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2",
          placeholder: "e.g., John Doe",
          renderId: "render-a5341b4c",
          as: "input"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        renderId: "render-1cea6558",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-5fda53c0",
          as: "label",
          children: "Date of Birth"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          type: "date",
          value: dob,
          onChange: (e) => setDob(e.target.value),
          className: "mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2",
          renderId: "render-05db92fd",
          as: "input"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        renderId: "render-fa5d77a0",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-270648f5",
          as: "label",
          children: "Level"
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          value: level,
          onChange: (e) => setLevel(e.target.value),
          className: "mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2",
          renderId: "render-ba08b6bd",
          as: "select",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-7d896a28",
            as: "option",
            children: "Nursery"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-ac2a4e87",
            as: "option",
            children: "Primary"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-9c24f11c",
            as: "option",
            children: "Secondary"
          })]
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        renderId: "render-40198921",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-adbb157a",
          as: "label",
          children: "Entry Class"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          value: entryClass,
          onChange: (e) => setEntryClass(e.target.value),
          className: "mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2",
          placeholder: "e.g., Nursery 2 / Primary 3 / JSS1",
          renderId: "render-bfe4bc35",
          as: "input"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        renderId: "render-3e26c713",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-b31c14dd",
          as: "label",
          children: "Preferred Start"
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          value: term,
          onChange: (e) => setTerm(e.target.value),
          className: "mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2",
          renderId: "render-4071c82e",
          as: "select",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-edb04252",
            as: "option",
            children: "Next Term"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-93d75475",
            as: "option",
            children: "Next Session"
          })]
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        renderId: "render-d4a3e2ae",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-5a5c9c13",
          as: "label",
          children: "Previous School (optional)"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          value: prevSchool,
          onChange: (e) => setPrevSchool(e.target.value),
          className: "mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2",
          renderId: "render-5cdae3bd",
          as: "input"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        renderId: "render-51f0284b",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-dfa69c72",
          as: "label",
          children: "Church (optional)"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          value: church,
          onChange: (e) => setChurch(e.target.value),
          className: "mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2",
          placeholder: "e.g., SBBC",
          renderId: "render-707e0133",
          as: "input"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "md:col-span-2",
        renderId: "render-2f0e1c88",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-3f78a174",
          as: "label",
          children: "Notes (optional)"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          value: notes,
          onChange: (e) => setNotes(e.target.value),
          rows: 4,
          className: "mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2",
          placeholder: "Tell us anything helpful about your child",
          renderId: "render-5c5f266e",
          as: "textarea"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "md:col-span-2",
        renderId: "render-659dabe9",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-8bab79bf",
          as: "label",
          children: "Qualifications PDF (optional)"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          type: "file",
          accept: "application/pdf",
          onChange: (e) => setPdfFile(e.target.files && e.target.files[0] ? e.target.files[0] : null),
          className: "mt-1 w-full border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#111] text-black dark:text-white rounded-lg px-3 py-2",
          renderId: "render-7b7ed7c3",
          as: "input"
        }), pdfFile ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-1 text-xs text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-dcadca40",
          as: "p",
          children: pdfFile.name
        }) : null]
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      type: "submit",
      disabled: applyMutation.isPending || uploading,
      className: "mt-5 inline-flex items-center gap-2 bg-[#F4D03F] hover:bg-[#C29C1A] text-black font-semibold px-5 py-3 rounded-lg transition-colors disabled:opacity-60",
      renderId: "render-a2314518",
      as: "button",
      children: applyMutation.isPending || uploading ? "Submitting..." : "Submit Application"
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "mt-2 text-xs text-[#6E6E6E] dark:text-[#A0A0A0]",
      renderId: "render-25f8813b",
      as: "p",
      children: "By submitting, you consent to be contacted about admissions."
    })]
  });
}

function AdmissionsSection() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    id: "admissions",
    className: "py-16 px-6 bg-[#FAFAFA] dark:bg-[#161616]",
    renderId: "render-d2651d71",
    as: "section",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-10",
      "data-animate": true,
      renderId: "render-8636ce96",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333]",
        renderId: "render-768365ab",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-2xl font-bold text-black dark:text-white",
          renderId: "render-fd8507bb",
          as: "h2",
          children: "Admissions"
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "mt-3 list-decimal list-inside text-[#2B2B2B] dark:text-[#E0E0E0] space-y-1",
          renderId: "render-d0020494",
          as: "ol",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-1029156d",
            as: "li",
            children: "Submit application form"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-30312177",
            as: "li",
            children: "Meet-and-greet/assessment"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-2ddd4e3b",
            as: "li",
            children: "Offer & enrollment"
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-4 text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-0ef6ce04",
          as: "p",
          children: "We welcome students from all backgrounds who value a Christ‑centered education."
        })]
      }), /* @__PURE__ */ jsx(ApplicationForm, {})]
    })
  });
}

const faqs = [{
  q: "Do you admit students from any faith?",
  a: "Yes. We welcome all families who value a Christ‑centered education and agree to our school values and policies."
}, {
  q: "Is there school transport?",
  a: "Routes vary by term based on demand. Please mention transport in your notes if needed."
}, {
  q: "Do you offer scholarships?",
  a: "We provide limited need‑based support. Indicate interest in your application and our team will follow up."
}, {
  q: "What exams do Secondary students prepare for?",
  a: "Students are prepared for WAEC/NECO and other relevant assessments."
}];
function FAQsSection() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    id: "faqs",
    className: "py-16 px-6",
    renderId: "render-39e8517a",
    as: "section",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-6",
      "data-animate": true,
      renderId: "render-3effb546",
      as: "div",
      children: faqs.map((f) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333]",
        renderId: "render-19b4ec8c",
        as: "details",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "cursor-pointer font-semibold text-black dark:text-white",
          renderId: "render-4b857b9d",
          as: "summary",
          children: f.q
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-6e6a9434",
          as: "p",
          children: f.a
        })]
      }, f.q))
    })
  });
}

function ContactSection() {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    id: "contact",
    className: "py-16 px-6 bg-[#FAFAFA] dark:bg-[#161616]",
    renderId: "render-5d870ef3",
    as: "section",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "max-w-6xl mx-auto grid md:grid-cols-3 gap-6",
      "data-animate": true,
      renderId: "render-f563ff75",
      as: "div",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]",
        renderId: "render-4c83362d",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center gap-2 text-black dark:text-white font-semibold",
          renderId: "render-4bcf30cc",
          as: "div",
          children: [/* @__PURE__ */ jsx(Phone, {
            className: "w-4 h-4"
          }), " Phone"]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-1 text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-36b2ea69",
          as: "p",
          children: "+234 706 420 0926"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]",
        renderId: "render-5a449104",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center gap-2 text-black dark:text-white font-semibold",
          renderId: "render-85a0936b",
          as: "div",
          children: [/* @__PURE__ */ jsx(Mail, {
            className: "w-4 h-4"
          }), " Email"]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-1 text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-edbdc2ee",
          as: "p",
          children: "admissions@deepknowledgeacademy.edu"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]",
        renderId: "render-8924b0fb",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex items-center gap-2 text-black dark:text-white font-semibold",
          renderId: "render-ca202231",
          as: "div",
          children: [/* @__PURE__ */ jsx(MapPin, {
            className: "w-4 h-4"
          }), " Address"]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-1 text-[#2B2B2B] dark:text-[#E0E0E0]",
          renderId: "render-d2cca1a2",
          as: "p",
          children: "Our campus, City, Country"
        })]
      })]
    })
  });
}

function useAcademySubjects() {
  const subjects = useMemo(() => ({
    nursery: ["Early Literacy", "Numeracy", "Bible Stories", "Music & Art", "Play-based Learning"],
    primary: ["English", "Mathematics", "Basic Science", "Social Studies", "ICT", "Bible & Character"],
    secondary: ["English", "Mathematics", "Biology", "Chemistry", "Physics", "Geography", "ICT", "Christian Religion Studies"]
  }), []);
  return subjects;
}

function DeepKnowledgeAcademyPage() {
  const navItems = [{
    id: "about",
    label: "About"
  }, {
    id: "levels",
    label: "Nursery • Primary • Secondary"
  }, {
    id: "curriculum",
    label: "Curriculum"
  }, {
    id: "facilities",
    label: "Facilities"
  }, {
    id: "activities",
    label: "Activities"
  }, {
    id: "fees",
    label: "Fees & Aid"
  }, {
    id: "calendar",
    label: "Calendar"
  }, {
    id: "admissions",
    label: "Admissions"
  }, {
    id: "faqs",
    label: "FAQs"
  }, {
    id: "contact",
    label: "Contact"
  }];
  const subjects = useAcademySubjects();
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    renderId: "render-5d6baa22",
    as: "div",
    children: [/* @__PURE__ */ jsx(SEOHead, {
      path: "/education/deep-knowledge-academy"
    }), /* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsx(HeroSection, {}), /* @__PURE__ */ jsx(NavigationBar, {
      navItems
    }), /* @__PURE__ */ jsx(AboutSection, {}), /* @__PURE__ */ jsx(LevelsSection, {}), /* @__PURE__ */ jsx(CurriculumSection, {
      subjects
    }), /* @__PURE__ */ jsx(FacilitiesSection, {}), /* @__PURE__ */ jsx(ActivitiesSection, {}), /* @__PURE__ */ jsx(FeesSection, {}), /* @__PURE__ */ jsx(CalendarSection, {}), /* @__PURE__ */ jsx(AdmissionsSection, {}), /* @__PURE__ */ jsx(FAQsSection, {}), /* @__PURE__ */ jsx(ContactSection, {}), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$u(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(DeepKnowledgeAcademyPage, {
      ...props
    })
  });
}

const route12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$u
}, Symbol.toStringTag, { value: 'Module' }));

function FootballAcademyPage() {
  const highlights = ["Youth development pathways", "Elite performance coaching", "Strength & conditioning", "Sports science & nutrition", "League and tournament exposure"];
  const programs = [{
    title: "U10-U12 Fundamentals",
    detail: "Skills, coordination, fun-based learning",
    color: "bg-[#E6FFFA] dark:bg-[#0F3B36]"
  }, {
    title: "U13-U15 Development",
    detail: "Tactics, ball mastery, positional play",
    color: "bg-[#FFF7ED] dark:bg-[#3B2E1F]"
  }, {
    title: "U16-U19 Performance",
    detail: "Competition prep, S&C, video analysis",
    color: "bg-[#EEF2FF] dark:bg-[#1F2440]"
  }, {
    title: "Senior / Elite",
    detail: "Trials, showcase, pro/college pathways",
    color: "bg-[#F0FDF4] dark:bg-[#0F2314]"
  }];
  const schedule = [{
    day: "Mon",
    time: "4:00–6:00 PM",
    focus: "Technical + Ball Mastery"
  }, {
    day: "Wed",
    time: "4:00–6:00 PM",
    focus: "Tactics + Small Sided"
  }, {
    day: "Fri",
    time: "4:00–6:00 PM",
    focus: "Conditioning + Finishing"
  }, {
    day: "Sat",
    time: "10:00–12:00 PM",
    focus: "Match Prep / Scrimmage"
  }];
  const coaches = [{
    name: "Coach Daniel Lawson",
    role: "Head Coach – UEFA B",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop&q=60",
    badges: ["UEFA B", "10+ yrs"]
  }, {
    name: "Coach Mercy A.",
    role: "Strength & Conditioning",
    img: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?w=400&h=400&fit=crop&q=60",
    badges: ["NSCA", "Sports Science"]
  }, {
    name: "Coach Peter K.",
    role: "Youth Development",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop&q=60",
    badges: ["FA Youth", "Safeguarding"]
  }];
  const facilities = [{
    icon: MapPin,
    label: "Full-size grass & 5-a-side pitches"
  }, {
    icon: Dumbbell,
    label: "High-performance gym & recovery"
  }, {
    icon: Shield,
    label: "On-site physio & injury prevention"
  }, {
    icon: Calendar,
    label: "Video analysis & classroom"
  }];
  const pathways = [{
    icon: Medal,
    title: "Scholarships",
    desc: "Academic & athletic scholarships for top talent"
  }, {
    icon: Flag,
    title: "Showcase",
    desc: "Trials & scouting events with partner clubs"
  }, {
    icon: Trophy,
    title: "Leagues",
    desc: "Local & regional league participation"
  }];
  const fixturesUpcoming = [{
    date: "Nov 23",
    opp: "City U19",
    venue: "Home",
    time: "10:00"
  }, {
    date: "Dec 01",
    opp: "Rovers U17",
    venue: "Away",
    time: "14:00"
  }];
  const resultsRecent = [{
    date: "Nov 15",
    opp: "United U19",
    score: "2 - 1",
    note: "W"
  }, {
    date: "Nov 08",
    opp: "Lions U17",
    score: "1 - 1",
    note: "D"
  }];
  const gallery = ["https://images.unsplash.com/photo-1521417531039-7957f3d1f4a6?w=800&q=60", "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=800&q=60", "https://images.unsplash.com/photo-1526232761682-d26e02d0815d?w=800&q=60", "https://images.unsplash.com/photo-1603808033192-6d1313e69d57?w=800&q=60", "https://images.unsplash.com/photo-1542332213-9f7f5b4c43b1?w=800&q=60", "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=60"];
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ageGroup, setAgeGroup] = useState("U16-U19");
  const [position, setPosition] = useState("Midfield");
  const [experience, setExperience] = useState("");
  const queryClient = useQueryClient();
  const qualifications = useMemo(() => {
    return `Age Group: ${ageGroup} | Position: ${position} | Experience: ${experience}`;
  }, [ageGroup, position, experience]);
  const trialMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/school-admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          school_name: "Football Academy",
          full_name: fullName,
          email,
          phone,
          qualifications
        })
      });
      if (!response.ok) {
        throw new Error(`When fetching /api/school-admission, the response was [${response.status}] ${response.statusText}`);
      }
      return response.json();
    },
    onSuccess: () => {
      setFullName("");
      setEmail("");
      setPhone("");
      setExperience("");
      queryClient.invalidateQueries({
        queryKey: ["applications", "football-academy"]
      });
    },
    onError: (err) => {
      console.error(err);
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      console.error("Missing required fields");
      return;
    }
    trialMutation.mutate();
  };
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    renderId: "render-90e01d5e",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-[420px] md:h-[520px]",
      renderId: "render-4a05444f",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=1920&h=700&fit=crop&q=80",
        alt: "Football Academy",
        className: "w-full h-full object-cover",
        renderId: "render-6f717260",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center",
        renderId: "render-aaf6abd3",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "max-w-6xl mx-auto w-full px-6",
          renderId: "render-8e9e58c8",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "text-left",
            renderId: "render-b49f3795",
            as: "div",
            children: [/* @__PURE__ */ jsx(Trophy, {
              className: "w-14 h-14 text-[#F4D03F] mb-4"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-4xl md:text-6xl font-bold text-white",
              renderId: "render-890a4ad3",
              as: "h1",
              children: "Football Academy"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "mt-3 text-white/90 max-w-2xl",
              renderId: "render-79e87d35",
              as: "p",
              children: "Building world-class athletes through discipline, coaching, and community. Join our pathways from grassroots to elite."
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "mt-6 flex flex-col sm:flex-row gap-3",
              renderId: "render-cfe0f76e",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "#apply",
                className: "inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#F4D03F] text-black font-semibold hover:bg-[#C29C1A] transition-colors",
                renderId: "render-b1dd6418",
                as: "a",
                children: "Apply for Trials"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "#programs",
                className: "inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors",
                renderId: "render-14022e65",
                as: "a",
                children: "Explore Programs"
              })]
            })]
          })
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-f542710e",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-10",
        renderId: "render-dc607332",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-a34c14ec",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-bold text-black dark:text-white mb-4",
            renderId: "render-7d67a481",
            as: "h2",
            children: "About the Academy"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-77a9cb06",
            as: "p",
            children: "Our program focuses on player development from fundamentals to elite performance. Athletes train with certified coaches and benefit from a holistic approach to fitness, nutrition, recovery, and mindset."
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "mt-6 flex items-center gap-4",
            renderId: "render-cd69cb08",
            as: "div",
            children: [/* @__PURE__ */ jsx(Users, {
              className: "w-6 h-6 text-[#C29C1A]"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-89a94980",
              as: "p",
              children: "Safeguarding and youth-first approach"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "mt-2 flex items-center gap-4",
            renderId: "render-d754a4c8",
            as: "div",
            children: [/* @__PURE__ */ jsx(Dumbbell, {
              className: "w-6 h-6 text-[#C29C1A]"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-747d8eb1",
              as: "p",
              children: "Strength & conditioning integrated into weekly plans"
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-ca2d55ce",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-bold text-black dark:text-white mb-4",
            renderId: "render-197ad544",
            as: "h2",
            children: "Highlights"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "space-y-2",
            renderId: "render-26bd2254",
            as: "ul",
            children: highlights.map((h) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-6cb1acfc",
              as: "li",
              children: ["• ", h]
            }, h))
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "programs",
      className: "py-4 px-6",
      renderId: "render-e8fd2d3d",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto",
        renderId: "render-e7af4c25",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black dark:text-white mb-6",
          renderId: "render-1399db85",
          as: "h2",
          children: "Programs & Age Groups"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "grid md:grid-cols-4 gap-6",
          renderId: "render-d183a697",
          as: "div",
          children: programs.map((p) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: `rounded-xl p-6 border border-[#E9E9E9] dark:border-[#333333] ${p.color}`,
            renderId: "render-a9d33f65",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-xl font-semibold text-black dark:text-white",
              renderId: "render-01ea32c6",
              as: "h3",
              children: p.title
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-8dec8da9",
              as: "p",
              children: p.detail
            })]
          }, p.title))
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "schedule",
      className: "py-16 px-6",
      renderId: "render-7fc75fba",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto",
        renderId: "render-c69ebc97",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black dark:text-white mb-6 flex items-center gap-3",
          renderId: "render-875d5e6f",
          as: "h2",
          children: [/* @__PURE__ */ jsx(Clock, {
            className: "w-6 h-6 text-[#C29C1A]"
          }), " Training Schedule"]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "grid md:grid-cols-4 gap-4",
          renderId: "render-b18f78b6",
          as: "div",
          children: schedule.map((s) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "rounded-xl p-5 bg-white dark:bg-[#1E1E1E] border border-[#E9E9E9] dark:border-[#333333]",
            renderId: "render-4fe10083",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
              renderId: "render-2ede9fda",
              as: "div",
              children: s.day
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-lg font-semibold text-black dark:text-white",
              renderId: "render-8a421af8",
              as: "div",
              children: s.time
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-8bb2518b",
              as: "div",
              children: s.focus
            })]
          }, s.day))
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-3 text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-1f1b66b5",
          as: "p",
          children: "Schedule may vary during league weeks and holidays."
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "coaches",
      className: "py-4 px-6",
      renderId: "render-a4b1b758",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto",
        renderId: "render-5e5be10f",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black dark:text-white mb-6",
          renderId: "render-6ace4a90",
          as: "h2",
          children: "Coaching Staff"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "grid md:grid-cols-3 gap-6",
          renderId: "render-b25da23e",
          as: "div",
          children: coaches.map((c) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "rounded-2xl overflow-hidden border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#1E1E1E]",
            renderId: "render-74abd73a",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              src: c.img,
              alt: c.name,
              className: "w-full h-48 object-cover",
              renderId: "render-87cfaee1",
              as: "img"
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "p-5",
              renderId: "render-5e1cbd56",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-xl font-semibold text-black dark:text-white",
                renderId: "render-c04832e4",
                as: "h3",
                children: c.name
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-25380f2f",
                as: "p",
                children: c.role
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-3 flex flex-wrap gap-2",
                renderId: "render-c242b128",
                as: "div",
                children: c.badges.map((b) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "text-xs px-2 py-1 rounded-full bg-[#F4D03F] text-black",
                  renderId: "render-01222565",
                  as: "span",
                  children: b
                }, b))
              })]
            })]
          }, c.name))
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-28685626",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-10",
        renderId: "render-8cae1abf",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-4aad8183",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-bold text-black dark:text-white mb-4",
            renderId: "render-9314025a",
            as: "h2",
            children: "Facilities"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "space-y-3",
            renderId: "render-10abbed9",
            as: "div",
            children: facilities.map((f) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-dc7e27f9",
              as: "div",
              children: [/* @__PURE__ */ jsx(f.icon, {
                className: "w-5 h-5 text-[#C29C1A]"
              }), " ", f.label]
            }, f.label))
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-0c0a43f4",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-bold text-black dark:text-white mb-4",
            renderId: "render-4ffd34f5",
            as: "h2",
            children: "Pathways & Partnerships"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "grid sm:grid-cols-3 gap-4",
            renderId: "render-3f19be27",
            as: "div",
            children: pathways.map((p) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "rounded-xl p-4 border border-[#E9E9E9] dark:border-[#333333]",
              renderId: "render-d752dee9",
              as: "div",
              children: [/* @__PURE__ */ jsx(p.icon, {
                className: "w-6 h-6 text-[#C29C1A]"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-2 text-black dark:text-white font-semibold",
                renderId: "render-f1eb8b48",
                as: "div",
                children: p.title
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-456ada8f",
                as: "div",
                children: p.desc
              })]
            }, p.title))
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-4 px-6",
      renderId: "render-175a6cb5",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-6",
        renderId: "render-d61b4f71",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-a6c54453",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "text-xl font-bold text-black dark:text-white mb-3 flex items-center gap-2",
            renderId: "render-8fc134f7",
            as: "h3",
            children: [/* @__PURE__ */ jsx(Calendar, {
              className: "w-5 h-5 text-[#C29C1A]"
            }), " Upcoming Fixtures"]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "space-y-2",
            renderId: "render-5667fe0e",
            as: "ul",
            children: fixturesUpcoming.map((fx) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center justify-between text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-b48d9fc2",
              as: "li",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-e0e2def5",
                as: "span",
                children: [fx.date, " • ", fx.opp]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-82861358",
                as: "span",
                children: [fx.venue, " • ", fx.time]
              })]
            }, `${fx.date}-${fx.opp}`))
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-53c98073",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "text-xl font-bold text-black dark:text-white mb-3 flex items-center gap-2",
            renderId: "render-7cf163fe",
            as: "h3",
            children: [/* @__PURE__ */ jsx(Flag, {
              className: "w-5 h-5 text-[#C29C1A]"
            }), " Recent Results"]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "space-y-2",
            renderId: "render-5ee81dba",
            as: "ul",
            children: resultsRecent.map((r) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center justify-between text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-c8d3a1fe",
              as: "li",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-b157ee0c",
                as: "span",
                children: [r.date, " • ", r.opp]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "text-sm font-semibold",
                renderId: "render-1ce67566",
                as: "span",
                children: [r.score, " ", /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                  className: "ml-2 text-[#6E6E6E] dark:text-[#A0A0A0]",
                  renderId: "render-d507c3b7",
                  as: "span",
                  children: ["(", r.note, ")"]
                })]
              })]
            }, `${r.date}-${r.opp}`))
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "gallery",
      className: "py-16 px-6",
      renderId: "render-afa5e596",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto",
        renderId: "render-898bb968",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black dark:text-white mb-6",
          renderId: "render-70d85756",
          as: "h2",
          children: "Gallery"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "grid grid-cols-2 md:grid-cols-3 gap-4",
          renderId: "render-f05b193d",
          as: "div",
          children: gallery.map((g, i) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            src: g,
            alt: `Academy gallery ${i + 1}`,
            className: "w-full h-40 md:h-56 object-cover rounded-xl",
            renderId: "render-e93135a5",
            as: "img"
          }, i))
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-4 px-6",
      renderId: "render-e56a2532",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-6",
        renderId: "render-352ee655",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-9d50cfeb",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-xl font-bold text-black dark:text-white mb-3",
            renderId: "render-e818fe86",
            as: "h3",
            children: "Fees & Scholarships"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-0baaa994",
            as: "p",
            children: "We offer accessible fees with need-based aid and merit scholarships. Trials are free. Detailed fee sheets are provided after application."
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-48283467",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-xl font-bold text-black dark:text-white mb-3",
            renderId: "render-91ef4513",
            as: "h3",
            children: "FAQs"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-1d2eff5a",
            as: "ul",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-ebfdbf22",
              as: "li",
              children: "• What gear is required? – Boots, shin guards, water bottle."
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-9c9096b0",
              as: "li",
              children: "• Where are trainings held? – Main campus pitches."
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-d33d3914",
              as: "li",
              children: "• Do you support academic balance? – Yes, study hours & tutoring available."
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "apply",
      className: "py-16 px-6",
      renderId: "render-925ed04a",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "max-w-4xl mx-auto",
        renderId: "render-6275e447",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "rounded-2xl border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#1E1E1E] p-8",
          renderId: "render-1fe50687",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-3xl font-bold text-black dark:text-white mb-2",
            renderId: "render-75360c18",
            as: "h2",
            children: "Apply for Trials"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-[#6E6E6E] dark:text-[#A0A0A0] mb-6",
            renderId: "render-6109a12c",
            as: "p",
            children: "Fill out the form and our team will contact you with trial dates and next steps."
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            onSubmit: handleSubmit,
            className: "grid md:grid-cols-2 gap-4",
            renderId: "render-39a348d4",
            as: "form",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-f319de31",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-bff08bb0",
                as: "label",
                children: "Full Name"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                value: fullName,
                onChange: (e) => setFullName(e.target.value),
                className: "mt-1 w-full rounded-lg border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#242424] px-3 py-2 text-black dark:text-white",
                required: true,
                renderId: "render-15ddeb1d",
                as: "input"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-ce222ff5",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-27e88603",
                as: "label",
                children: "Email"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                className: "mt-1 w-full rounded-lg border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#242424] px-3 py-2 text-black dark:text-white",
                required: true,
                renderId: "render-8b2f26be",
                as: "input"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-92ac8183",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-6b436160",
                as: "label",
                children: "Phone"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                className: "mt-1 w-full rounded-lg border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#242424] px-3 py-2 text-black dark:text-white",
                required: true,
                renderId: "render-1f956a0e",
                as: "input"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-0a8be68f",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-864d9623",
                as: "label",
                children: "Age Group"
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                value: ageGroup,
                onChange: (e) => setAgeGroup(e.target.value),
                className: "mt-1 w-full rounded-lg border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#242424] px-3 py-2 text-black dark:text-white",
                renderId: "render-5678cb9f",
                as: "select",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  renderId: "render-08d758f8",
                  as: "option",
                  children: "U10-U12"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  renderId: "render-81701cb2",
                  as: "option",
                  children: "U13-U15"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  renderId: "render-235900f6",
                  as: "option",
                  children: "U16-U19"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  renderId: "render-b9ae6318",
                  as: "option",
                  children: "Senior / Elite"
                })]
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-f56a452b",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-220fa688",
                as: "label",
                children: "Preferred Position"
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                value: position,
                onChange: (e) => setPosition(e.target.value),
                className: "mt-1 w-full rounded-lg border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#242424] px-3 py-2 text-black dark:text-white",
                renderId: "render-5ecf2687",
                as: "select",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  renderId: "render-b384f948",
                  as: "option",
                  children: "Goalkeeper"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  renderId: "render-8e7bc190",
                  as: "option",
                  children: "Defence"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  renderId: "render-31649b9e",
                  as: "option",
                  children: "Midfield"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  renderId: "render-d7273703",
                  as: "option",
                  children: "Forward"
                })]
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "md:col-span-2",
              renderId: "render-1b7ebaf6",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-cfff3928",
                as: "label",
                children: "Experience (clubs, years, achievements)"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                value: experience,
                onChange: (e) => setExperience(e.target.value),
                rows: 4,
                className: "mt-1 w-full rounded-lg border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#242424] px-3 py-2 text-black dark:text-white",
                placeholder: "e.g. 3 years at City Juniors, U17 regional champions",
                renderId: "render-93b39c59",
                as: "textarea"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2",
              renderId: "render-f2641e0a",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "submit",
                disabled: trialMutation.isPending,
                className: "inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#F4D03F] text-black font-semibold hover:bg-[#C29C1A] transition-colors disabled:opacity-60",
                renderId: "render-7ab236da",
                as: "button",
                children: trialMutation.isPending ? "Submitting..." : "Submit Application"
              }), trialMutation.isSuccess && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-green-600 dark:text-green-400",
                renderId: "render-e24692e7",
                as: "span",
                children: "Thanks! We received your details."
              }), trialMutation.isError && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-red-600 dark:text-red-400",
                renderId: "render-8d815fc7",
                as: "span",
                children: "Could not submit right now. Please try again."
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "md:col-span-2 text-sm text-[#6E6E6E] dark:text-[#A0A0A0] flex items-center gap-3 mt-1",
              renderId: "render-f145e07d",
              as: "div",
              children: [/* @__PURE__ */ jsx(Mail, {
                className: "w-4 h-4"
              }), " academy@yourdomain.org", /* @__PURE__ */ jsx(Phone, {
                className: "w-4 h-4"
              }), " +234 706 420 0926"]
            })]
          }), /* @__PURE__ */ jsx(ShareFormLink, {
            label: "Share this trials form",
            anchor: "#apply"
          })]
        })
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$t(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(FootballAcademyPage, {
      ...props
    })
  });
}

const route13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$t
}, Symbol.toStringTag, { value: 'Module' }));

function NursingPage() {
  const [formData, setFormData] = useState({
    school_name: "Lawson University",
    full_name: "",
    email: "",
    phone: "",
    qualifications: "",
    program: "",
    degree_type: "Bachelor's"
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [upload, {
    loading: uploading
  }] = useUpload();
  const quickActions = [{
    label: "Apply",
    href: "#apply",
    icon: /* @__PURE__ */ jsx(ArrowRight, {
      className: "w-5 h-5"
    })
  }, {
    label: "Programs",
    href: "#programs",
    icon: /* @__PURE__ */ jsx(BookOpen, {
      className: "w-5 h-5"
    })
  }, {
    label: "Admissions",
    href: "/education/lawson-university/admissions",
    icon: /* @__PURE__ */ jsx(Calendar, {
      className: "w-5 h-5"
    })
  }, {
    label: "Video Tour",
    href: "https://www.youtube.com/@SBBCMedia",
    icon: /* @__PURE__ */ jsx(PlayCircle, {
      className: "w-5 h-5"
    })
  }];
  const highlights = [{
    icon: /* @__PURE__ */ jsx(Globe, {
      className: "w-5 h-5"
    }),
    title: "Global Outlook"
  }, {
    icon: /* @__PURE__ */ jsx(Shield, {
      className: "w-5 h-5"
    }),
    title: "Accredited Paths"
  }, {
    icon: /* @__PURE__ */ jsx(Users, {
      className: "w-5 h-5"
    }),
    title: "Small Cohorts"
  }, {
    icon: /* @__PURE__ */ jsx(Sparkles, {
      className: "w-5 h-5"
    }),
    title: "Modern Labs"
  }];
  const programCards = [{
    href: "/education/lawson-university/undergraduate",
    title: "Bachelor's",
    desc: "Future‑ready majors across science, tech, business, arts, and health.",
    icon: /* @__PURE__ */ jsx(BookOpen, {
      className: "w-7 h-7 text-white"
    })
  }, {
    href: "/education/lawson-university/masters",
    title: "Master's",
    desc: "Advance your career with rigorous, industry‑mentored programs.",
    icon: /* @__PURE__ */ jsx(Award, {
      className: "w-7 h-7 text-white"
    })
  }, {
    href: "/education/lawson-university/doctorate",
    title: "Doctorate",
    desc: "High‑impact research with strong faculty guidance and resources.",
    icon: /* @__PURE__ */ jsx(GraduationCap, {
      className: "w-7 h-7 text-white"
    })
  }];
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      let qualifications_pdf_url = null;
      if (pdfFile) {
        const {
          url,
          mimeType,
          error
        } = await upload({
          file: pdfFile
        });
        if (error) {
          throw new Error(error);
        }
        if (mimeType && !mimeType.startsWith("application/pdf")) {
          throw new Error("Please upload a PDF file");
        }
        qualifications_pdf_url = url;
      }
      const response = await fetch("/api/school-admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          qualifications_pdf_url
        })
      });
      if (!response.ok) throw new Error("Failed to submit");
      const data = await response.json();
      setMessage(data.message);
      setFormData({
        school_name: "Lawson University",
        full_name: "",
        email: "",
        phone: "",
        qualifications: "",
        program: "",
        degree_type: "Bachelor's"
      });
      setPdfFile(null);
    } catch (error) {
      console.error(error);
      setMessage(error?.message || "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "jsx-2367820488 min-h-screen bg-white dark:bg-[#0E0E10] font-inter",
    renderId: "render-38dd3a11",
    as: "div",
    children: [/* @__PURE__ */ jsx(SEOHead, {
      path: "/education/lawson-university"
    }), /* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "jsx-2367820488 pointer-events-none fixed inset-0 -z-10 overflow-hidden",
      renderId: "render-58a07170",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-2367820488 absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#10B981]/10 blur-3xl",
        renderId: "render-784e83be",
        as: "div"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-2367820488 absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#F4D03F]/20 to-[#C29C1A]/10 blur-3xl",
        renderId: "render-43b4eabf",
        as: "div"
      })]
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "jsx-2367820488 relative w-full h-[420px] md:h-[520px]",
      renderId: "render-4d54ddb0",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=800&fit=crop&q=80",
        alt: "Lawson University Campus",
        className: "jsx-2367820488 w-full h-full object-cover",
        renderId: "render-4fcbdbf3",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-2367820488 absolute inset-0 bg-black/60",
        renderId: "render-aaad9270",
        as: "div"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-2367820488 absolute inset-0 flex items-center justify-center px-6",
        renderId: "render-116d002b",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-2367820488 max-w-4xl w-full backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl p-6 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] animate-fade-up",
          renderId: "render-2858f0b8",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-2367820488 flex flex-col items-center text-center",
            renderId: "render-68e93801",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-2367820488 flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/90 text-sm mb-4",
              renderId: "render-ede67cda",
              as: "div",
              children: [/* @__PURE__ */ jsx(Sparkles, {
                className: "w-4 h-4 text-[#F4D03F]"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-2367820488",
                renderId: "render-b4d5c9c3",
                as: "span",
                children: "Innovate. Impact. Lead."
              })]
            }), /* @__PURE__ */ jsx(GraduationCap, {
              className: "w-16 h-16 text-[#F4D03F] mb-3"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488 text-4xl md:text-6xl font-bold text-white tracking-tight",
              renderId: "render-33463a17",
              as: "h1",
              children: "Lawson University"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488 mt-4 text-white/85 text-base md:text-lg max-w-2xl",
              renderId: "render-e40fa36b",
              as: "p",
              children: "Cutting‑edge Bachelor's, Master's, and Doctorate paths designed to shape innovators, researchers, and leaders."
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488 mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl",
              renderId: "render-a38073b3",
              as: "div",
              children: quickActions.map((a) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                href: a.href,
                className: "jsx-2367820488 group flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white/90 bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/20 transition-all duration-150",
                renderId: "render-62eaffd2",
                as: "a",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-2367820488 inline-flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] text-black shadow-sm group-hover:animate-sheen",
                  renderId: "render-4e26e75f",
                  as: "span",
                  children: a.icon
                }), a.label]
              }, a.label))
            })]
          })
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-2367820488 py-16 px-6",
      renderId: "render-01ff5b97",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-2367820488 max-w-6xl mx-auto grid md:grid-cols-5 gap-8",
        renderId: "render-735c6d2c",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-2367820488 md:col-span-3",
          renderId: "render-9710d0b7",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-2367820488 text-3xl md:text-4xl font-bold text-black dark:text-white mb-4",
            renderId: "render-9a051c45",
            as: "h2",
            children: "Discover. Learn. Lead."
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-2367820488 text-[#2B2B2B] dark:text-[#E0E0E0] leading-relaxed text-base md:text-lg",
            renderId: "render-a8462eb8",
            as: "p",
            children: "Lawson University is a comprehensive institution committed to academic excellence, research, and real‑world impact. With expert faculty, modern labs, and global partnerships, we prepare students to thrive and lead with purpose."
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-2367820488 mt-6 space-y-3",
            renderId: "render-e6fcef6c",
            as: "ul",
            children: ["AI, Data Science, and Software Engineering tracks", "Business, Economics, and Entrepreneurship incubator", "Public Health, Nursing, and Biomedical Research", "Theology, Ethics, and Leadership studies", "State‑of‑the‑art labs, studios, and research centers", "Flexible online and hybrid learning options"].map((item, idx) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-2367820488 flex items-start gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-83a90f90",
              as: "li",
              children: [/* @__PURE__ */ jsx(CheckCircle, {
                className: "w-5 h-5 text-[#F4D03F] mt-0.5"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-2367820488",
                renderId: "render-06ec8865",
                as: "span",
                children: item
              })]
            }, idx))
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-2367820488 md:col-span-2",
          renderId: "render-ff302515",
          as: "div",
          children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-2367820488 grid grid-cols-2 gap-4",
            renderId: "render-7f651ea9",
            as: "div",
            children: highlights.map((h) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-2367820488 rounded-2xl p-4 bg-white dark:bg-[#1A1A1A] border border-[#E9E9E9] dark:border-[#2A2A2A] shadow-sm hover:shadow-md transition-all animate-fade-up",
              renderId: "render-dc8d040b",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-2367820488 w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] flex items-center justify-center text-black mb-3",
                renderId: "render-987a17e9",
                as: "div",
                children: h.icon
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-2367820488 text-sm font-semibold text-black dark:text-white",
                renderId: "render-0bfe98f6",
                as: "p",
                children: h.title
              })]
            }, h.title))
          })
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "programs",
      className: "jsx-2367820488 py-14 px-6 bg-[#FAFAFA] dark:bg-[#121212]",
      renderId: "render-db76c921",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-2367820488 max-w-6xl mx-auto",
        renderId: "render-216038f5",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-2367820488 text-3xl font-bold text-black dark:text-white text-center mb-10",
          renderId: "render-8c535cf5",
          as: "h2",
          children: "Explore Degrees"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-2367820488 grid md:grid-cols-3 gap-6",
          renderId: "render-f17c9ac3",
          as: "div",
          children: programCards.map((c) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: c.href,
            className: "jsx-2367820488 block rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333] bg-white/80 dark:bg-[#1E1E1E]/80 backdrop-blur-md shadow-sm hover:shadow-2xl transition-all duration-200 hover:-translate-y-2",
            renderId: "render-b8a05fed",
            as: "a",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488 w-14 h-14 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] rounded-2xl flex items-center justify-center mb-4 text-black shadow-md",
              renderId: "render-d4a7f72c",
              as: "div",
              children: c.icon
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488 text-2xl font-bold text-black dark:text-white mb-2",
              renderId: "render-0117bba2",
              as: "h3",
              children: c.title
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488 text-[#6E6E6E] dark:text-[#A0A0A0]",
              renderId: "render-5d6f7566",
              as: "p",
              children: c.desc
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-2367820488 mt-5 inline-flex items-center gap-2 text-[#C29C1A]",
              renderId: "render-d1db5689",
              as: "div",
              children: ["Learn more ", /* @__PURE__ */ jsx(ArrowRight, {
                className: "w-4 h-4"
              })]
            })]
          }, c.title))
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-2367820488 py-14 px-6",
      renderId: "render-0e25cf7c",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-2367820488 max-w-5xl mx-auto rounded-3xl border border-[#E9E9E9] dark:border-[#2A2A2A] bg-white dark:bg-[#141414] p-8 md:p-10",
        renderId: "render-7c11e53e",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-2367820488 text-2xl font-bold text-black dark:text-white mb-6 text-center",
          renderId: "render-5f012a2d",
          as: "h3",
          children: "Your path to Lawson"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-2367820488 grid md:grid-cols-3 gap-6",
          renderId: "render-a5699b71",
          as: "div",
          children: [{
            icon: /* @__PURE__ */ jsx(Calendar, {
              className: "w-6 h-6"
            }),
            title: "Apply",
            text: "Tell us about your goals and background."
          }, {
            icon: /* @__PURE__ */ jsx(Users, {
              className: "w-6 h-6"
            }),
            title: "Review",
            text: "Our team reviews and guides your next steps."
          }, {
            icon: /* @__PURE__ */ jsx(Shield, {
              className: "w-6 h-6"
            }),
            title: "Enroll",
            text: "Secure your spot and start strong."
          }].map((s) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-2367820488 rounded-2xl p-6 bg-[#FAFAFA] dark:bg-[#1A1A1A] border border-[#E9E9E9] dark:border-[#2A2A2A]",
            renderId: "render-7c54da6b",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488 w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] text-black flex items-center justify-center mb-3",
              renderId: "render-9e23d929",
              as: "div",
              children: s.icon
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488 font-semibold text-black dark:text-white",
              renderId: "render-5ff29a82",
              as: "p",
              children: s.title
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488 text-sm text-[#6E6E6E] dark:text-[#A0A0A0] mt-1",
              renderId: "render-b4031a39",
              as: "p",
              children: s.text
            })]
          }, s.title))
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "apply",
      className: "jsx-2367820488 py-16 px-6",
      renderId: "render-e6130fd6",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-2367820488 max-w-2xl mx-auto",
        renderId: "render-7636ab9e",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-2367820488 rounded-3xl border border-[#E9E9E9] dark:border-[#333333] bg-white/90 dark:bg-[#1E1E1E]/90 backdrop-blur-md shadow-xl p-6 md:p-10",
          renderId: "render-a7297669",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-2367820488 text-center mb-6",
            renderId: "render-190a55d0",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488 text-3xl font-bold text-black dark:text-white",
              renderId: "render-6130ce92",
              as: "h2",
              children: "Apply to Lawson University"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488 text-[#6E6E6E] dark:text-[#A0A0A0] mt-2",
              renderId: "render-57434c52",
              as: "p",
              children: "Start your application. Our admissions team will guide you through next steps."
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            onSubmit: handleSubmit,
            className: "jsx-2367820488 space-y-4",
            renderId: "render-d08fc2c7",
            as: "form",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488",
              renderId: "render-a76176b7",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "text",
                placeholder: "Full Name",
                value: formData.full_name,
                onChange: (e) => setFormData({
                  ...formData,
                  full_name: e.target.value
                }),
                required: true,
                className: "jsx-2367820488 w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                renderId: "render-211dc469",
                as: "input"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488",
              renderId: "render-9a3b8ed1",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "email",
                placeholder: "Email Address",
                value: formData.email,
                onChange: (e) => setFormData({
                  ...formData,
                  email: e.target.value
                }),
                required: true,
                className: "jsx-2367820488 w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                renderId: "render-89b1e11a",
                as: "input"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488",
              renderId: "render-d829cc9c",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "tel",
                placeholder: "Phone Number",
                value: formData.phone,
                onChange: (e) => setFormData({
                  ...formData,
                  phone: e.target.value
                }),
                required: true,
                className: "jsx-2367820488 w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                renderId: "render-be49ecab",
                as: "input"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488",
              renderId: "render-a8d34932",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "text",
                placeholder: "Program (e.g., BSc Computer Science)",
                value: formData.program,
                onChange: (e) => setFormData({
                  ...formData,
                  program: e.target.value
                }),
                className: "jsx-2367820488 w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                renderId: "render-cac69725",
                as: "input"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488",
              renderId: "render-3bdd44a9",
              as: "div",
              children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                value: formData.degree_type,
                onChange: (e) => setFormData({
                  ...formData,
                  degree_type: e.target.value
                }),
                className: "jsx-2367820488 w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                renderId: "render-cb4231a0",
                as: "select",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-2367820488",
                  renderId: "render-ecee7a2b",
                  as: "option",
                  children: "Bachelor's"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-2367820488",
                  renderId: "render-3e59086a",
                  as: "option",
                  children: "Master's"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-2367820488",
                  renderId: "render-0bc09bd4",
                  as: "option",
                  children: "Doctorate"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-2367820488",
                  renderId: "render-500effa0",
                  as: "option",
                  children: "Diploma / Certificate"
                })]
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488",
              renderId: "render-ad3c2188",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                placeholder: "Academic Background (e.g., High School, Bachelor's, etc.)",
                value: formData.qualifications,
                onChange: (e) => setFormData({
                  ...formData,
                  qualifications: e.target.value
                }),
                rows: "4",
                required: true,
                className: "jsx-2367820488 w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                renderId: "render-0aa6b6bb",
                as: "textarea"
              })
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-2367820488",
              renderId: "render-a25dec99",
              as: "div",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "jsx-2367820488 flex items-center gap-2 text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-6267a0fc",
                as: "label",
                children: [/* @__PURE__ */ jsx(Paperclip, {
                  className: "w-4 h-4"
                }), " Qualifications PDF (optional)"]
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "file",
                accept: "application/pdf",
                onChange: (e) => setPdfFile(e.target.files && e.target.files[0] ? e.target.files[0] : null),
                className: "jsx-2367820488 mt-1 w-full px-4 py-2 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                renderId: "render-f357e5c2",
                as: "input"
              }), pdfFile ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-2367820488 text-xs mt-1 text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-d612c90c",
                as: "p",
                children: pdfFile.name
              }) : null]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              type: "submit",
              disabled: loading || uploading,
              className: "jsx-2367820488 w-full bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold py-3 rounded-xl transition-transform duration-200 hover:scale-105 active:scale-[0.98] disabled:opacity-50 shadow-md hover:shadow-lg",
              renderId: "render-5b294e4f",
              as: "button",
              children: loading || uploading ? "Submitting..." : "Submit Application"
            }), message && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2367820488 text-center text-sm text-[#C29C1A]",
              renderId: "render-2bee3ca8",
              as: "p",
              children: message
            })]
          }), /* @__PURE__ */ jsx(ShareFormLink, {
            label: "Share this application form",
            anchor: "#apply"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-2367820488 mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm",
            renderId: "render-31d49113",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-2367820488 flex items-center gap-2 text-[#6E6E6E] dark:text-[#A0A0A0]",
              renderId: "render-0bbe7a54",
              as: "div",
              children: [/* @__PURE__ */ jsx(Heart, {
                className: "w-4 h-4 text-[#F4D03F]"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-2367820488",
                renderId: "render-a9fc9f38",
                as: "span",
                children: "Need help? admissions@lawson.edu"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-2367820488 flex items-center gap-2",
              renderId: "render-6ea6fbf3",
              as: "div",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                href: "#programs",
                className: "jsx-2367820488 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FAFAFA] dark:bg-[#222] border border-[#E9E9E9] dark:border-[#2A2A2A] text-black dark:text-white",
                renderId: "render-cc6e8ce5",
                as: "a",
                children: [/* @__PURE__ */ jsx(Link, {
                  className: "w-4 h-4"
                }), " Programs"]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                href: "https://www.youtube.com/@SBBCMedia",
                className: "jsx-2367820488 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FAFAFA] dark:bg-[#222] border border-[#E9E9E9] dark:border-[#2A2A2A] text-black dark:text-white",
                renderId: "render-4dc931e4",
                as: "a",
                children: [/* @__PURE__ */ jsx(Youtube, {
                  className: "w-4 h-4"
                }), " Watch"]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                type: "button",
                onClick: () => {
                  try {
                    navigator.clipboard.writeText(`${typeof window !== "undefined" ? window.location.href : ""}`);
                  } catch (e) {
                    console.error(e);
                  }
                },
                className: "jsx-2367820488 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FAFAFA] dark:bg-[#222] border border-[#E9E9E9] dark:border-[#2A2A2A] text-black dark:text-white",
                renderId: "render-b6cc8e7f",
                as: "button",
                children: [/* @__PURE__ */ jsx(Share2, {
                  className: "w-4 h-4"
                }), " Share"]
              })]
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {}), /* @__PURE__ */ jsx(_JSXStyle, {
      id: "2367820488",
      children: ["@-webkit-keyframes fade-up{0%{opacity:0;-webkit-transform:translateY(12px);-ms-transform:translateY(12px);transform:translateY(12px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@keyframes fade-up{0%{opacity:0;-webkit-transform:translateY(12px);-ms-transform:translateY(12px);transform:translateY(12px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", ".animate-fade-up{-webkit-animation:fade-up 600ms ease-out both;animation:fade-up 600ms ease-out both;}", "@-webkit-keyframes sheen{0%{box-shadow:inset -60px 0 40px -40px rgba(255,255,255,0.0);}50%{box-shadow:inset -60px 0 40px -40px rgba(255,255,255,0.6);}100%{box-shadow:inset -60px 0 40px -40px rgba(255,255,255,0.0);}}", "@keyframes sheen{0%{box-shadow:inset -60px 0 40px -40px rgba(255,255,255,0.0);}50%{box-shadow:inset -60px 0 40px -40px rgba(255,255,255,0.6);}100%{box-shadow:inset -60px 0 40px -40px rgba(255,255,255,0.0);}}", ".animate-sheen{-webkit-animation:sheen 900ms ease-in-out;animation:sheen 900ms ease-in-out;}"]
    })]
  });
}

function WrappedPage$s(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(NursingPage, {
      ...props
    })
  });
}

const route14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$s
}, Symbol.toStringTag, { value: 'Module' }));

function LawsonAdmissionsPage() {
  const steps = [{
    title: "Start Application",
    desc: "Create your profile and tell us about your goals."
  }, {
    title: "Submit Documents",
    desc: "Upload transcripts, ID, test scores (if any)."
  }, {
    title: "Review & Decision",
    desc: "Admissions team reviews and sends next steps."
  }, {
    title: "Enroll",
    desc: "Secure your place and choose your courses."
  }];
  const requirements = ["Completed application form", "Official transcripts (all schools attended)", "Government-issued ID / Passport", "English proficiency (where required)", "Two recommendation letters (graduate/doctoral)"];
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    renderId: "render-68d596f9",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-72",
      renderId: "render-6f913997",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1800&h=480&fit=crop&q=80",
        alt: "Admissions at Lawson University",
        className: "w-full h-full object-cover",
        renderId: "render-f110b20e",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-421014c0",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-ef56931c",
          as: "div",
          children: [/* @__PURE__ */ jsx(ClipboardList, {
            className: "w-16 h-16 text-[#F4D03F] mx-auto mb-3"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-5xl font-bold text-white",
            renderId: "render-d3acef9d",
            as: "h1",
            children: "Admissions"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/90 max-w-2xl mx-auto",
            renderId: "render-c3c5c4e6",
            as: "p",
            children: "Join a vibrant learning community focused on impact and excellence."
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-f7c7edc4",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto",
        renderId: "render-5d7819b8",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black dark:text-white mb-6",
          renderId: "render-3dbea4d6",
          as: "h2",
          children: "How to Apply"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "grid md:grid-cols-4 gap-6",
          renderId: "render-b2d77b57",
          as: "div",
          children: steps.map((s) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
            renderId: "render-53036e67",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "w-12 h-12 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] rounded-full flex items-center justify-center mb-4",
              renderId: "render-b74b182d",
              as: "div",
              children: /* @__PURE__ */ jsx(FileText, {
                className: "w-6 h-6 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-xl font-semibold text-black dark:text-white",
              renderId: "render-4a6d5d6a",
              as: "h3",
              children: s.title
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-[#6E6E6E] dark:text-[#A0A0A0] mt-2",
              renderId: "render-7b5f306c",
              as: "p",
              children: s.desc
            })]
          }, s.title))
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-8 px-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]",
      renderId: "render-0c8a5a4d",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-4xl mx-auto",
        renderId: "render-421d147b",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black dark:text-white mb-4",
          renderId: "render-c24f675f",
          as: "h2",
          children: "Admission Requirements"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "space-y-3",
          renderId: "render-951d8a7c",
          as: "ul",
          children: requirements.map((r) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-start gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-d8328c3a",
            as: "li",
            children: [/* @__PURE__ */ jsx(CheckCircle, {
              className: "w-5 h-5 text-[#F4D03F] flex-shrink-0 mt-1"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-ca7bac07",
              as: "span",
              children: r
            })]
          }, r))
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-8",
          renderId: "render-c6ce727d",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "/education/lawson-university#apply",
            className: "inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105",
            renderId: "render-dcfdcbc8",
            as: "a",
            children: ["Start Your Application ", /* @__PURE__ */ jsx(ArrowRight, {
              className: "w-5 h-5"
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$r(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(LawsonAdmissionsPage, {
      ...props
    })
  });
}

const route15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$r
}, Symbol.toStringTag, { value: 'Module' }));

function DoctoratePage() {
  const researchAreas = [{
    name: "Technology & Engineering",
    topics: ["Artificial Intelligence", "Human-Computer Interaction", "Renewable Energy Systems", "Cybersecurity & Privacy"]
  }, {
    name: "Business & Economics",
    topics: ["Sustainable Finance", "Behavioral Economics", "Operations & Supply Chain", "Innovation Strategy"]
  }, {
    name: "Health & Public Health",
    topics: ["Epidemiology", "Global Health Systems", "Biomedical Engineering", "Health Informatics"]
  }, {
    name: "Theology & Leadership",
    topics: ["Systematic Theology", "Church & Society", "Ethics & Public Policy", "Organizational Leadership"]
  }];
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    renderId: "render-8813b883",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-64",
      renderId: "render-e943bddb",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=1600&h=400&fit=crop&q=80",
        alt: "Doctoral Studies",
        className: "w-full h-full object-cover",
        renderId: "render-0ecefddc",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-0f69975d",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-5dbbbb21",
          as: "div",
          children: [/* @__PURE__ */ jsx(GraduationCap, {
            className: "w-14 h-14 text-[#F4D03F] mx-auto mb-3"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-5xl font-bold text-white",
            renderId: "render-0976a602",
            as: "h1",
            children: "Doctorate Programs"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/90 max-w-3xl mx-auto",
            renderId: "render-7cd2188d",
            as: "p",
            children: "High-impact PhD and professional doctorates with strong research mentorship."
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-912fa436",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto",
        renderId: "render-62992456",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "grid md:grid-cols-2 gap-8 mb-10",
          renderId: "render-ec56a15c",
          as: "div",
          children: researchAreas.map((area) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]",
            renderId: "render-17028f85",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-2xl font-bold text-black dark:text-white mb-4",
              renderId: "render-d66e5c45",
              as: "h2",
              children: area.name
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "space-y-2",
              renderId: "render-12536819",
              as: "ul",
              children: area.topics.map((t) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
                renderId: "render-9b639998",
                as: "li",
                children: ["• ", t]
              }, t))
            })]
          }, area.name))
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-center",
          renderId: "render-a4d31fac",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "/education/lawson-university#apply",
            className: "inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105",
            renderId: "render-002a12ae",
            as: "a",
            children: ["Apply Now ", /* @__PURE__ */ jsx(ArrowRight, {
              className: "w-5 h-5"
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$q(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(DoctoratePage, {
      ...props
    })
  });
}

const route16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$q
}, Symbol.toStringTag, { value: 'Module' }));

function LawsonFacultyDirectoryPage() {
  const faculty = [{
    name: "Dr. Ada Lawson",
    title: "Professor of Computer Science",
    dept: "Science & Technology",
    email: "ada.lawson@lawson.edu",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&q=60"
  }, {
    name: "Prof. Daniel Okoye",
    title: "Professor of Public Health",
    dept: "Health Sciences",
    email: "daniel.okoye@lawson.edu",
    photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop&q=60"
  }, {
    name: "Dr. Sophia Mensah",
    title: "Associate Professor of Finance",
    dept: "Business & Economics",
    email: "sophia.mensah@lawson.edu",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=60"
  }, {
    name: "Rev. Dr. Ben Adebayo",
    title: "Professor of Theology",
    dept: "Theology & Leadership",
    email: "ben.adebayo@lawson.edu",
    photo: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?w=400&h=400&fit=crop&q=60"
  }];
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    renderId: "render-c0344498",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-72",
      renderId: "render-216612d3",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&h=480&fit=crop&q=80",
        alt: "Faculty at Lawson University",
        className: "w-full h-full object-cover",
        renderId: "render-20b5d951",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-9f5fb838",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-8a8ac050",
          as: "div",
          children: [/* @__PURE__ */ jsx(Users, {
            className: "w-16 h-16 text-[#F4D03F] mx-auto mb-3"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-5xl font-bold text-white",
            renderId: "render-573c57b9",
            as: "h1",
            children: "Faculty Directory"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/90 max-w-2xl mx-auto",
            renderId: "render-418aaa8c",
            as: "p",
            children: "Meet the scholars and mentors guiding our students."
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-ba313c51",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto",
        renderId: "render-dfb33019",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
          renderId: "render-1b22891e",
          as: "div",
          children: faculty.map((f) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
            renderId: "render-dcfed14b",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              src: f.photo,
              alt: `${f.name} portrait`,
              className: "w-full h-48 object-cover rounded-xl mb-4",
              renderId: "render-e9f642e0",
              as: "img"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-xl font-semibold text-black dark:text-white",
              renderId: "render-1ad7d3f6",
              as: "h3",
              children: f.name
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-[#6E6E6E] dark:text-[#A0A0A0]",
              renderId: "render-c5d4a775",
              as: "p",
              children: f.title
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-[#6E6E6E] dark:text-[#A0A0A0] text-sm",
              renderId: "render-f3cd01ae",
              as: "p",
              children: f.dept
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: `mailto:${f.email}`,
              className: "mt-4 inline-flex items-center gap-2 text-[#0B132B] dark:text-white font-medium",
              renderId: "render-59aee529",
              as: "a",
              children: [/* @__PURE__ */ jsx(Mail, {
                className: "w-4 h-4"
              }), " ", f.email]
            })]
          }, f.email))
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-10 text-center",
          renderId: "render-2b979681",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "/education/lawson-university/masters",
            className: "inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105",
            renderId: "render-e4f17c8c",
            as: "a",
            children: ["Explore Graduate Programs ", /* @__PURE__ */ jsx(GraduationCap, {
              className: "w-5 h-5"
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$p(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(LawsonFacultyDirectoryPage, {
      ...props
    })
  });
}

const route17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$p
}, Symbol.toStringTag, { value: 'Module' }));

function MastersPage() {
  const schools = [{
    name: "School of Technology",
    programs: ["MSc Computer Science", "MSc Artificial Intelligence", "MSc Cybersecurity", "MSc Data Analytics"]
  }, {
    name: "School of Business",
    programs: ["MBA (General Management)", "MBA (Finance)", "MBA (Marketing)", "MSc Economics"]
  }, {
    name: "School of Health Sciences",
    programs: ["MPH Public Health", "MSc Nursing Leadership", "MSc Biomedical Sciences"]
  }, {
    name: "School of Theology & Leadership",
    programs: ["MA Theology", "MA Leadership", "M.Div Divinity"]
  }];
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    renderId: "render-74314900",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-64",
      renderId: "render-1609d703",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1491841651911-c44c30c34548?w=1600&h=400&fit=crop&q=80",
        alt: "Graduate Studies",
        className: "w-full h-full object-cover",
        renderId: "render-caf8e315",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-53f3df1e",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-e197c367",
          as: "div",
          children: [/* @__PURE__ */ jsx(Award, {
            className: "w-14 h-14 text-[#F4D03F] mx-auto mb-3"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-5xl font-bold text-white",
            renderId: "render-ba58c951",
            as: "h1",
            children: "Master's Degrees"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/90 max-w-3xl mx-auto",
            renderId: "render-650cb08d",
            as: "p",
            children: "Advance your expertise with industry-informed, research-driven programs."
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-98fe795b",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto",
        renderId: "render-26424665",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "grid md:grid-cols-2 gap-8 mb-10",
          renderId: "render-9dac5bab",
          as: "div",
          children: schools.map((s) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]",
            renderId: "render-5575602b",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-2xl font-bold text-black dark:text-white mb-4",
              renderId: "render-f1dd5f3d",
              as: "h2",
              children: s.name
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "space-y-2",
              renderId: "render-b7d384c5",
              as: "ul",
              children: s.programs.map((p) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
                renderId: "render-d16f917b",
                as: "li",
                children: ["• ", p]
              }, p))
            })]
          }, s.name))
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-center",
          renderId: "render-810a9bae",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "/education/lawson-university#apply",
            className: "inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105",
            renderId: "render-4db5e92e",
            as: "a",
            children: ["Apply Now ", /* @__PURE__ */ jsx(ArrowRight, {
              className: "w-5 h-5"
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$o(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(MastersPage, {
      ...props
    })
  });
}

const route18 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$o
}, Symbol.toStringTag, { value: 'Module' }));

function LawsonResearchPage() {
  const centers = [{
    name: "Center for AI & Data",
    desc: "Applied machine learning, ethics of AI, and data-driven policy."
  }, {
    name: "Health Innovation Lab",
    desc: "Public health analytics, biomedical devices, and telemedicine."
  }, {
    name: "Business & Policy Institute",
    desc: "Entrepreneurship, sustainable finance, and emerging markets."
  }, {
    name: "Faith & Society Forum",
    desc: "Theology, ethics, and leadership for the public square."
  }, {
    name: "Energy & Sustainability Hub",
    desc: "Renewables, storage, and climate resilience."
  }];
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    renderId: "render-21fccb69",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-72",
      renderId: "render-9dfacc01",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1559757175-08fda9fd3d1b?w=1800&h=480&fit=crop&q=80",
        alt: "Research at Lawson University",
        className: "w-full h-full object-cover",
        renderId: "render-1c446154",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-29787001",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-de2cecef",
          as: "div",
          children: [/* @__PURE__ */ jsx(Microscope, {
            className: "w-16 h-16 text-[#F4D03F] mx-auto mb-3"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-5xl font-bold text-white",
            renderId: "render-5a02b8e9",
            as: "h1",
            children: "Research"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/90 max-w-2xl mx-auto",
            renderId: "render-db878135",
            as: "p",
            children: "Interdisciplinary teams tackling real-world problems."
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-bc57dca9",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto",
        renderId: "render-9bbb34c2",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black dark:text-white mb-6",
          renderId: "render-365d1de8",
          as: "h2",
          children: "Research Centers"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "grid md:grid-cols-2 gap-6",
          renderId: "render-5ccb68fd",
          as: "div",
          children: centers.map((c) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
            renderId: "render-7fd65373",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center gap-3",
              renderId: "render-0b04f0a5",
              as: "div",
              children: [/* @__PURE__ */ jsx(FlaskConical, {
                className: "w-6 h-6 text-[#C29C1A]"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-xl font-semibold text-black dark:text-white",
                renderId: "render-b36d4ea5",
                as: "h3",
                children: c.name
              })]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-[#6E6E6E] dark:text-[#A0A0A0] mt-2",
              renderId: "render-c44dcea9",
              as: "p",
              children: c.desc
            })]
          }, c.name))
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-10 bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-2fda0b04",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-start gap-3",
            renderId: "render-1cdfeaa9",
            as: "div",
            children: [/* @__PURE__ */ jsx(Lightbulb, {
              className: "w-6 h-6 text-[#F4D03F] mt-1"
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-0cfa6996",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-xl font-semibold text-black dark:text-white",
                renderId: "render-e99d99a0",
                as: "h3",
                children: "Work With Us"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-[#6E6E6E] dark:text-[#A0A0A0] mt-2",
                renderId: "render-80a3ba98",
                as: "p",
                children: "We collaborate with industry, government, and nonprofits on research that matters. Students can join projects for credit, funding, and publication opportunities."
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-4",
                renderId: "render-05e47378",
                as: "div",
                children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                  href: "/education/lawson-university/doctorate",
                  className: "inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105",
                  renderId: "render-780b716b",
                  as: "a",
                  children: ["Explore Doctoral Research ", /* @__PURE__ */ jsx(ArrowRight, {
                    className: "w-5 h-5"
                  })]
                })
              })]
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$n(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(LawsonResearchPage, {
      ...props
    })
  });
}

const route19 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$n
}, Symbol.toStringTag, { value: 'Module' }));

function LawsonTuitionAidPage() {
  const tuition = [{
    level: "Bachelor's (per year)",
    amount: "₦6,500",
    notes: "Varies by program and labs."
  }, {
    level: "Master's (per year)",
    amount: "₦8,200",
    notes: "Varies by program; capstone fees may apply."
  }, {
    level: "Doctorate (per year)",
    amount: "₦9,500",
    notes: "Research/supervision fees vary by department."
  }];
  const aid = [{
    title: "Merit Scholarships",
    desc: "Awarded based on academic excellence. Automatic consideration on application."
  }, {
    title: "Need-Based Aid",
    desc: "Designed to support students with demonstrated financial need."
  }, {
    title: "Graduate Assistantships",
    desc: "Teaching/research roles that provide stipends and tuition support."
  }, {
    title: "Work-Study",
    desc: "On-campus roles that fit around your studies."
  }];
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    renderId: "render-35f12217",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-72",
      renderId: "render-f694bd25",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=1800&h=480&fit=crop&q=80",
        alt: "Tuition & Aid",
        className: "w-full h-full object-cover",
        renderId: "render-a1940037",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-c6e1d2b4",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-79fb4294",
          as: "div",
          children: [/* @__PURE__ */ jsx(Wallet, {
            className: "w-16 h-16 text-[#F4D03F] mx-auto mb-3"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-5xl font-bold text-white",
            renderId: "render-95ff8c9b",
            as: "h1",
            children: "Tuition & Aid"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/90 max-w-2xl mx-auto",
            renderId: "render-7b941f7e",
            as: "p",
            children: "Affordable paths, generous scholarships, and transparent costs."
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-3f51cbdc",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-4xl mx-auto",
        renderId: "render-9a4f72a9",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black dark:text-white mb-6",
          renderId: "render-27bca1aa",
          as: "h2",
          children: "Estimated Tuition"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "space-y-4",
          renderId: "render-f666df8e",
          as: "div",
          children: tuition.map((t) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-start justify-between bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
            renderId: "render-ee35a278",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-0a0108f5",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-lg font-semibold text-black dark:text-white",
                renderId: "render-4717818f",
                as: "p",
                children: t.level
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-[#6E6E6E] dark:text-[#A0A0A0] text-sm",
                renderId: "render-95997978",
                as: "p",
                children: t.notes
              })]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-2xl font-bold text-[#0B132B] dark:text-white",
              renderId: "render-12add61b",
              as: "p",
              children: t.amount
            })]
          }, t.level))
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-8 px-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]",
      renderId: "render-43121fea",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-5xl mx-auto",
        renderId: "render-5c37ef84",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black dark:text-white mb-6",
          renderId: "render-037f65c7",
          as: "h2",
          children: "Scholarships & Support"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "grid md:grid-cols-2 gap-6",
          renderId: "render-c36af9ff",
          as: "div",
          children: aid.map((a) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
            renderId: "render-1383a87f",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center gap-3",
              renderId: "render-a65dc148",
              as: "div",
              children: [/* @__PURE__ */ jsx(BadgeDollarSign, {
                className: "w-6 h-6 text-[#C29C1A]"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-xl font-semibold text-black dark:text-white",
                renderId: "render-425527ae",
                as: "h3",
                children: a.title
              })]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-[#6E6E6E] dark:text-[#A0A0A0] mt-2",
              renderId: "render-80cec759",
              as: "p",
              children: a.desc
            })]
          }, a.title))
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-8",
          renderId: "render-09d7a4e3",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "/education/lawson-university/admissions",
            className: "inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105",
            renderId: "render-ee5a2dc7",
            as: "a",
            children: ["See Admission Requirements ", /* @__PURE__ */ jsx(ArrowRight, {
              className: "w-5 h-5"
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$m(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(LawsonTuitionAidPage, {
      ...props
    })
  });
}

const route20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$m
}, Symbol.toStringTag, { value: 'Module' }));

function UndergraduatePage() {
  const colleges = [{
    name: "College of Science & Technology",
    programs: ["BSc Computer Science", "BSc Software Engineering", "BSc Data Science", "BEng Electrical & Electronics"]
  }, {
    name: "College of Business & Economics",
    programs: ["BSc Accounting", "BSc Finance", "BSc Marketing", "BSc Entrepreneurship"]
  }, {
    name: "College of Health & Public Health",
    programs: ["BSc Public Health", "BSc Nursing Science", "BSc Biomedical Science", "BSc Nutrition & Dietetics"]
  }, {
    name: "College of Humanities & Social Sciences",
    programs: ["BA English", "BA Psychology", "BA International Relations", "BA Media & Communication"]
  }];
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    renderId: "render-42824028",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-64",
      renderId: "render-990649a2",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1523246123095-54f3b2b06f8f?w=1600&h=400&fit=crop&q=80",
        alt: "Undergraduate Studies",
        className: "w-full h-full object-cover",
        renderId: "render-68135224",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-42c03731",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-559d8d34",
          as: "div",
          children: [/* @__PURE__ */ jsx(BookOpen, {
            className: "w-14 h-14 text-[#F4D03F] mx-auto mb-3"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-5xl font-bold text-white",
            renderId: "render-af458569",
            as: "h1",
            children: "Bachelor's Degrees"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/90 max-w-2xl mx-auto",
            renderId: "render-73117a5d",
            as: "p",
            children: "Build your foundation with future-ready programs across disciplines."
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-3504a878",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto",
        renderId: "render-9a771a4d",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "grid md:grid-cols-2 gap-8 mb-10",
          renderId: "render-51bd9531",
          as: "div",
          children: colleges.map((c) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]",
            renderId: "render-5203a6ed",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-2xl font-bold text-black dark:text-white mb-4",
              renderId: "render-44953d0d",
              as: "h2",
              children: c.name
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "space-y-2",
              renderId: "render-6cfb2e9c",
              as: "ul",
              children: c.programs.map((p) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
                renderId: "render-605b6438",
                as: "li",
                children: ["• ", p]
              }, p))
            })]
          }, c.name))
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-center",
          renderId: "render-0176271b",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "/education/lawson-university#apply",
            className: "inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105",
            renderId: "render-e128eed8",
            as: "a",
            children: ["Apply Now ", /* @__PURE__ */ jsx(ArrowRight, {
              className: "w-5 h-5"
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$l(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(UndergraduatePage, {
      ...props
    })
  });
}

const route21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$l
}, Symbol.toStringTag, { value: 'Module' }));

function MarriageAcademyPage() {
  const tracks = ["Premarital foundations", "Marriage enrichment", "Parenting & family life", "Communication & conflict resolution", "Counseling & mentorship"];
  const [partner1Name, setPartner1Name] = useState("");
  const [partner2Name, setPartner2Name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("Engaged");
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
  const [preferredSchedule, setPreferredSchedule] = useState("Weekend");
  const [weddingDate, setWeddingDate] = useState("");
  const [isMember, setIsMember] = useState(false);
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const submitLabel = "Submit Registration";
  const registrationMutation = useMutation({
    mutationFn: async () => {
      const full_name = [partner1Name, partner2Name].filter(Boolean).join(" & ");
      const payload = {
        school_name: "Marriage Academy",
        full_name,
        email,
        phone,
        qualifications: JSON.stringify({
          partner1Name,
          partner2Name,
          maritalStatus,
          track: selectedTrack,
          preferredSchedule,
          weddingDate,
          isMember,
          notes
        })
      };
      const response = await fetch("/api/school-admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        throw new Error(`When fetching /api/school-admission, the response was [${response.status}] ${response.statusText}`);
      }
      return response.json();
    },
    onSuccess: () => {
      setSuccess("Thanks! Your registration has been received. Our team will contact you shortly.");
      setError(null);
      setPartner1Name("");
      setPartner2Name("");
      setEmail("");
      setPhone("");
      setMaritalStatus("Engaged");
      setSelectedTrack(tracks[0]);
      setPreferredSchedule("Weekend");
      setWeddingDate("");
      setIsMember(false);
      setNotes("");
      setConsent(false);
    },
    onError: (e) => {
      console.error(e);
      setError("Sorry, we couldn't submit your registration. Please try again.");
      setSuccess(null);
    }
  });
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (!consent) return;
    setSuccess(null);
    setError(null);
    registrationMutation.mutate();
  }, [consent, registrationMutation]);
  const isDisabled = registrationMutation.isLoading || !consent;
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    renderId: "render-e55569f3",
    as: "div",
    children: [/* @__PURE__ */ jsx(SEOHead, {
      path: "/education/marriage-academy"
    }), /* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-64 md:h-80",
      renderId: "render-1f051d59",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=480&fit=crop&q=80",
        alt: "Marriage Academy",
        className: "w-full h-full object-cover",
        renderId: "render-7161cf2e",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-248f63f8",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-39cc3f2f",
          as: "div",
          children: [/* @__PURE__ */ jsx(Heart, {
            className: "w-14 h-14 text-[#F4D03F] mx-auto mb-3"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-5xl font-bold text-white",
            renderId: "render-d3cdc453",
            as: "h1",
            children: "Marriage Academy"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/90 max-w-3xl mx-auto",
            renderId: "render-d0db92d0",
            as: "p",
            children: "Practical courses and mentoring to build strong, joyful homes."
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-5de63bcf",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-10",
        renderId: "render-0615989e",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-b02c2ae1",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-bold text-black dark:text-white mb-4",
            renderId: "render-db484ae0",
            as: "h2",
            children: "What You'll Learn"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "space-y-2",
            renderId: "render-41f3d97f",
            as: "ul",
            children: tracks.map((t) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-eff6a5cb",
              as: "li",
              children: ["• ", t]
            }, t))
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-b5962406",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-bold text-black dark:text-white mb-4",
            renderId: "render-9488a318",
            as: "h2",
            children: "About the Academy"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-d993c5e6",
            as: "p",
            children: "Sessions are led by seasoned mentors and counselors with practical tools for everyday life. Whether you're preparing for marriage or seeking to enrich your relationship, there's a track for you."
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "marriage-academy-register",
      className: "py-16 px-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]",
      renderId: "render-c6cd8e6f",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "max-w-5xl mx-auto",
        renderId: "render-97b2af5f",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E9E9E9] dark:border-[#333333] p-8 md:p-10 shadow-lg",
          renderId: "render-6d4127b7",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "text-center mb-8",
            renderId: "render-1f11952e",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-3xl md:text-4xl font-bold text-black dark:text-white",
              renderId: "render-9be82429",
              as: "h2",
              children: "Register for Marriage Academy"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "mt-2 text-[#6E6E6E] dark:text-[#A0A0A0]",
              renderId: "render-4d5a2a3e",
              as: "p",
              children: "Fill in your details below and we’ll reach out with next steps."
            })]
          }), success ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mb-6 rounded-xl border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/40 p-4 text-green-800 dark:text-green-200",
            renderId: "render-e8adb8db",
            as: "div",
            children: success
          }) : null, error ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mb-6 rounded-xl border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/40 p-4 text-red-800 dark:text-red-200",
            renderId: "render-e81a98f5",
            as: "div",
            children: error
          }) : null, /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            onSubmit,
            renderId: "render-e040102e",
            as: "form",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "grid md:grid-cols-2 gap-5",
              renderId: "render-cda90a3a",
              as: "div",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-7b4d401a",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "block text-sm font-medium text-black dark:text-white mb-1",
                  renderId: "render-baf88e65",
                  as: "label",
                  children: "Partner 1 Full Name"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  type: "text",
                  required: true,
                  value: partner1Name,
                  onChange: (e) => setPartner1Name(e.target.value),
                  className: "w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                  placeholder: "e.g. John Doe",
                  renderId: "render-dcf3d04c",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-6dc3bc6a",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "block text-sm font-medium text-black dark:text-white mb-1",
                  renderId: "render-091f8261",
                  as: "label",
                  children: "Partner 2 Full Name"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  type: "text",
                  required: true,
                  value: partner2Name,
                  onChange: (e) => setPartner2Name(e.target.value),
                  className: "w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                  placeholder: "e.g. Jane Doe",
                  renderId: "render-9d8c9cfa",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-64dda2d3",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "block text-sm font-medium text-black dark:text-white mb-1",
                  renderId: "render-2514ea3f",
                  as: "label",
                  children: "Primary Email"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  type: "email",
                  required: true,
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  className: "w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                  placeholder: "you@example.com",
                  renderId: "render-de167b26",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-614a9b8b",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "block text-sm font-medium text-black dark:text-white mb-1",
                  renderId: "render-cbd9a56b",
                  as: "label",
                  children: "Phone Number"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  type: "tel",
                  required: true,
                  value: phone,
                  onChange: (e) => setPhone(e.target.value),
                  className: "w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                  placeholder: "e.g. +234 706 420 0926",
                  renderId: "render-5a583617",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-59f13703",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "block text-sm font-medium text-black dark:text-white mb-1",
                  renderId: "render-1f0fdf98",
                  as: "label",
                  children: "Marital Status"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  value: maritalStatus,
                  onChange: (e) => setMaritalStatus(e.target.value),
                  className: "w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                  renderId: "render-223b223a",
                  as: "select",
                  children: ["Engaged", "Newly Married (0-2 yrs)", "Married (2+ yrs)"].map((s) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    value: s,
                    renderId: "render-5560df9a",
                    as: "option",
                    children: s
                  }, s))
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-7e7997f2",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "block text-sm font-medium text-black dark:text-white mb-1",
                  renderId: "render-856b0d65",
                  as: "label",
                  children: "Select Track"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  value: selectedTrack,
                  onChange: (e) => setSelectedTrack(e.target.value),
                  className: "w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                  renderId: "render-5ca305fb",
                  as: "select",
                  children: tracks.map((t) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    value: t,
                    renderId: "render-7c00dd24",
                    as: "option",
                    children: t
                  }, t))
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-2f0c7569",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "block text-sm font-medium text-black dark:text-white mb-1",
                  renderId: "render-86e39827",
                  as: "label",
                  children: "Preferred Schedule"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  value: preferredSchedule,
                  onChange: (e) => setPreferredSchedule(e.target.value),
                  className: "w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                  renderId: "render-b1b3776c",
                  as: "select",
                  children: ["Morning", "Evening", "Weekend"].map((s) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    value: s,
                    renderId: "render-4e809851",
                    as: "option",
                    children: s
                  }, s))
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-0694f325",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "block text-sm font-medium text-black dark:text-white mb-1",
                  renderId: "render-a5941794",
                  as: "label",
                  children: "Wedding Date (optional)"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  type: "date",
                  value: weddingDate,
                  onChange: (e) => setWeddingDate(e.target.value),
                  className: "w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                  renderId: "render-fd40cfdd",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-cacd0ab2",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "block text-sm font-medium text-black dark:text-white mb-1",
                  renderId: "render-1896ffcd",
                  as: "label",
                  children: "Are you members of SBBC?"
                }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                  value: isMember ? "Yes" : "No",
                  onChange: (e) => setIsMember(e.target.value === "Yes"),
                  className: "w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                  renderId: "render-75a3d3e0",
                  as: "select",
                  children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    value: "Yes",
                    renderId: "render-f98e7ce4",
                    as: "option",
                    children: "Yes"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    value: "No",
                    renderId: "render-21224df7",
                    as: "option",
                    children: "No"
                  })]
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "md:col-span-2",
                renderId: "render-8ecfc642",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "block text-sm font-medium text-black dark:text-white mb-1",
                  renderId: "render-de2e029c",
                  as: "label",
                  children: "Notes (optional)"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  value: notes,
                  onChange: (e) => setNotes(e.target.value),
                  rows: 4,
                  className: "w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                  placeholder: "Tell us anything helpful (availability, special considerations, etc.)",
                  renderId: "render-323cef6f",
                  as: "textarea"
                })]
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "mt-6 flex items-start gap-3",
              renderId: "render-d6e77f16",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                id: "consent",
                type: "checkbox",
                checked: consent,
                onChange: (e) => setConsent(e.target.checked),
                className: "mt-1 h-5 w-5 rounded border-[#E5E7EB] dark:border-[#444] text-[#C29C1A] focus:ring-[#F4D03F]",
                renderId: "render-72851900",
                as: "input"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                htmlFor: "consent",
                className: "text-sm text-[#2B2B2B] dark:text-[#E0E0E0]",
                renderId: "render-0254fc92",
                as: "label",
                children: "I agree to be contacted regarding my registration and consent to the processing of my information for this purpose."
              })]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "mt-8",
              renderId: "render-47945d29",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "submit",
                disabled: isDisabled,
                className: `inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg ${isDisabled ? "bg-gray-300 dark:bg-[#333] text-gray-600 dark:text-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black hover:scale-[1.02] active:scale-100"}`,
                renderId: "render-4a085c0a",
                as: "button",
                children: registrationMutation.isLoading ? "Submitting..." : submitLabel
              })
            })]
          }), /* @__PURE__ */ jsx(ShareFormLink, {
            label: "Share this registration form",
            anchor: "#marriage-academy-register"
          })]
        })
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$k(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(MarriageAcademyPage, {
      ...props
    })
  });
}

const route22 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$k
}, Symbol.toStringTag, { value: 'Module' }));

function SeminaryPage() {
  const [formData, setFormData] = useState({
    school_name: "Sunrise Theological School",
    full_name: "",
    email: "",
    phone: "",
    qualifications: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/school-admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error("Failed to submit");
      const data = await response.json();
      setMessage(data.message);
      setFormData({
        ...formData,
        full_name: "",
        email: "",
        phone: "",
        qualifications: ""
      });
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const Nav = () => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "w-full bg-white/70 dark:bg-[#121212]/70 backdrop-blur sticky top-0 z-30 border-b border-black/5 dark:border-white/10",
    renderId: "render-0f6a2bb6",
    as: "nav",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto px-6",
      renderId: "render-e2c15969",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex gap-3 overflow-x-auto py-3 no-scrollbar",
        renderId: "render-a9e264c7",
        as: "div",
        children: [{
          title: "Overview",
          href: "/education/seminary"
        }, {
          title: "Programs",
          href: "/education/seminary/programs"
        }, {
          title: "Admissions",
          href: "/education/seminary/admissions"
        }, {
          title: "Tuition & Aid",
          href: "/education/seminary/tuition-aid"
        }, {
          title: "Faculty",
          href: "/education/seminary/faculty"
        }, {
          title: "Calendar",
          href: "/education/seminary/calendar"
        }, {
          title: "Faith & Doctrine",
          href: "/education/seminary/faith"
        }, {
          title: "Student Life",
          href: "/education/seminary/student-life"
        }, {
          title: "Contact",
          href: "/education/seminary/contact"
        }].map((l) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: l.href,
          className: "shrink-0 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-sm text-black dark:text-white",
          renderId: "render-3c44f165",
          as: "a",
          children: l.title
        }, l.title))
      })
    })
  });
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    style: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
    },
    renderId: "render-b372fbf5",
    as: "div",
    children: [/* @__PURE__ */ jsx(SEOHead, {
      path: "/education/seminary"
    }), /* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-96",
      renderId: "render-ebd730b0",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=600&fit=crop&q=80",
        alt: "Sunrise Theological School",
        className: "w-full h-full object-cover",
        renderId: "render-15241017",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center",
        renderId: "render-d5aa0b37",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-2eb79c0a",
          as: "div",
          children: [/* @__PURE__ */ jsx(BookOpen, {
            className: "w-20 h-20 text-[#9F7AEA] mx-auto mb-4"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-5xl md:text-7xl font-bold text-white",
            renderId: "render-93fc415b",
            as: "h1",
            children: "Sunrise Theological School"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-3 text-white/85 max-w-2xl mx-auto",
            renderId: "render-25fe7666",
            as: "p",
            children: "Christ-centered training for pastors, evangelists, and Christian leaders."
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "mt-6 flex flex-wrap gap-3 justify-center",
            renderId: "render-60440477",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              href: "#apply",
              className: "px-5 py-3 rounded-lg bg-[#9F7AEA] hover:bg-[#805AD5] text-white font-semibold",
              renderId: "render-71d46a62",
              as: "a",
              children: "Apply Now"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              href: "/education/seminary/programs",
              className: "px-5 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10",
              renderId: "render-6e734e1c",
              as: "a",
              children: "Explore Programs"
            })]
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6 bg-white dark:bg-[#121212]",
      renderId: "render-12ef8a8d",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto grid md:grid-cols-3 gap-8",
        renderId: "render-a9d8094c",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "md:col-span-2",
          renderId: "render-8b108c26",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl font-bold text-black dark:text-white mb-4",
            renderId: "render-a6cd51ca",
            as: "h2",
            children: "Equipped for Ministry, Grounded in Truth"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-lg text-[#2B2B2B] dark:text-[#E0E0E0] leading-relaxed mb-6",
            renderId: "render-f73444c3",
            as: "p",
            children: "STS unites rigorous study of God’s Word with mentoring, prayer, and supervised ministry so graduates are biblically grounded and practically equipped."
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "grid sm:grid-cols-2 gap-6",
            renderId: "render-c1ff3178",
            as: "div",
            children: [{
              icon: GraduationCap,
              title: "Programs",
              text: "Certificate, Diploma, Degree tracks"
            }, {
              icon: School,
              title: "Campuses",
              text: "Main HQ + extension centers"
            }, {
              icon: Users,
              title: "Mentorship",
              text: "Small cohorts and pastoral coaching"
            }, {
              icon: Landmark,
              title: "Doctrinal",
              text: "Historic, evangelical statement of faith"
            }].map(({
              icon: Icon,
              title,
              text
            }) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-start gap-4",
              renderId: "render-2c440132",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "w-12 h-12 bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] rounded-full flex items-center justify-center flex-shrink-0",
                renderId: "render-0927f022",
                as: "div",
                children: /* @__PURE__ */ jsx(Icon, {
                  className: "w-6 h-6 text-white"
                })
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-ad102fdf",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "text-xl font-bold text-black dark:text-white mb-1",
                  renderId: "render-62b833dd",
                  as: "h3",
                  children: title
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "text-[#6E6E6E] dark:text-[#A0A0A0]",
                  renderId: "render-be238344",
                  as: "p",
                  children: text
                })]
              })]
            }, title))
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-eff4adce",
          as: "aside",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-bold text-black dark:text-white mb-4",
            renderId: "render-76c4dea7",
            as: "h3",
            children: "Quick Facts"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "space-y-3 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-eaecb2d8",
            as: "ul",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-25434f47",
              as: "li",
              children: "• Academic sessions start every September"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-e87960e0",
              as: "li",
              children: "• Evening & weekend classes available"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-b39f038d",
              as: "li",
              children: "• Field ministry placements each term"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-db7e64a8",
              as: "li",
              children: "• Scholarships and pastoral discounts"
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            href: "/education/seminary/admissions",
            className: "mt-5 inline-block px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black",
            renderId: "render-1b030d43",
            as: "a",
            children: "Admissions"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-4 px-6 bg-white dark:bg-[#121212]",
      renderId: "render-45faa5cd",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-4xl mx-auto",
        renderId: "render-36736582",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "mb-12",
          renderId: "render-4762520b",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl font-bold text-black dark:text-white mb-6",
            renderId: "render-84cb6448",
            as: "h3",
            children: "About Sunrise Theological School (STS)"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-lg text-black/70 dark:text-white/70 leading-relaxed mb-6",
            style: {
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"
            },
            renderId: "render-043f40fb",
            as: "p",
            children: "Sunrise Theological School (STS) is a Christ-centered, co-educational training college for pastors, evangelists, Christian workers, and soul-winners. We unite rigorous study of God’s Word with mentoring, prayer, and supervised ministry so graduates are equipped for ministry and grounded in biblical truth."
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "bg-[#F5F5F7] dark:bg-[#1A1A1A] rounded-2xl p-6 mb-8 border border-black/5 dark:border-white/10",
            renderId: "render-ad124ed5",
            as: "div",
            children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-base text-black/80 dark:text-white/80 leading-relaxed",
              style: {
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"
              },
              renderId: "render-5e83f633",
              as: "p",
              children: "Certificate courses run on all campuses. Diploma and remedial courses will roll out later. Degree and graduate programs will be available at the international headquarters."
            })
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-44c20e5a",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-4xl font-bold text-black dark:text-white mb-6",
              renderId: "render-64ad45c2",
              as: "h4",
              children: "Aims, Goals & Objectives of STS"
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "space-y-4",
              renderId: "render-901d4807",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-lg text-black/70 dark:text-white/70 leading-relaxed",
                style: {
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"
                },
                renderId: "render-78b1ad7d",
                as: "p",
                children: "STS equips men and women for ministry through practical, whole-of-life training that touches every area of service. In a prayerful community shaped by the fruit of the Spirit, learning is anchored to Scripture and applied in real ministry contexts."
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-lg text-black/70 dark:text-white/70 leading-relaxed",
                style: {
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"
                },
                renderId: "render-c581917d",
                as: "p",
                children: "Our objective is that every student is equipped for ministry and grounded in truth: knowing the Word, living holy and compassionate lives, and serving with integrity—able to preach, counsel, disciple, and lead for the glory of God."
              })]
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "grid md:grid-cols-2 gap-8 mb-12",
          renderId: "render-0d20fbb6",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-start gap-4",
            renderId: "render-651af118",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "w-12 h-12 bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] rounded-full flex items-center justify-center flex-shrink-0",
              renderId: "render-ce30bb7d",
              as: "div",
              children: /* @__PURE__ */ jsx(Clock, {
                className: "w-6 h-6 text-white"
              })
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-813e1d26",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-xl font-bold text-black dark:text-white mb-2",
                renderId: "render-f4936517",
                as: "h3",
                children: "Program Duration"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-8190755c",
                as: "p",
                children: "3-year Master of Divinity (example)"
              })]
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-start gap-4",
            renderId: "render-380580c6",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "w-12 h-12 bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] rounded-full flex items-center justify-center flex-shrink-0",
              renderId: "render-c72e1de7",
              as: "div",
              children: /* @__PURE__ */ jsx(Calendar, {
                className: "w-6 h-6 text-white"
              })
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-2c4b10c2",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-xl font-bold text-black dark:text-white mb-2",
                renderId: "render-060efdc6",
                as: "h3",
                children: "Academic Sessions"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-7b28ea30",
                as: "p",
                children: "Starts September annually"
              })]
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-dc901989",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-bold text-black dark:text-white mb-4",
            renderId: "render-2ee41113",
            as: "h3",
            children: "What You'll Study"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "space-y-3",
            renderId: "render-f1c42c20",
            as: "ul",
            children: ["Biblical Exegesis and Hermeneutics", "Systematic Theology and Church History", "Pastoral Ministry and Counseling", "Homiletics and Expository Preaching", "Mission and Evangelism Strategies", "Leadership and Church Administration"].map((item, index) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-start gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-d721cb69",
              as: "li",
              children: [/* @__PURE__ */ jsx(CheckCircle, {
                className: "w-5 h-5 text-[#9F7AEA] flex-shrink-0 mt-1"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                renderId: "render-6853c328",
                as: "span",
                children: item
              })]
            }, index))
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-6",
            renderId: "render-b6c9501a",
            as: "div",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "/education/seminary/programs",
              className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9F7AEA] hover:bg-[#805AD5] text-white",
              renderId: "render-dc4cc597",
              as: "a",
              children: [/* @__PURE__ */ jsx(FileText, {
                className: "w-4 h-4"
              }), "View Course Outlines"]
            })
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "apply",
      className: "py-20 px-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]",
      renderId: "render-24d47b3c",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "max-w-2xl mx-auto",
        renderId: "render-35e3aa11",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-xl p-12 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-c579cbb7",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-3xl font-bold text-black dark:text-white text-center mb-6",
            renderId: "render-6342d53e",
            as: "h2",
            children: "Quick Application"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-lg text-[#6E6E6E] dark:text-[#A0A0A0] text-center mb-8",
            renderId: "render-40e2789a",
            as: "p",
            children: "Ready to begin? Submit this short form or see full steps on the Admissions page."
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            onSubmit: handleSubmit,
            className: "space-y-4",
            renderId: "render-0457e831",
            as: "form",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-6d744924",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "text",
                placeholder: "Full Name",
                value: formData.full_name,
                onChange: (e) => setFormData({
                  ...formData,
                  full_name: e.target.value
                }),
                className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9F7AEA] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                required: true,
                renderId: "render-3f73ad0a",
                as: "input"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-da66ed38",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "email",
                placeholder: "Email Address",
                value: formData.email,
                onChange: (e) => setFormData({
                  ...formData,
                  email: e.target.value
                }),
                className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9F7AEA] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                required: true,
                renderId: "render-91f78aba",
                as: "input"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-6541faac",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "tel",
                placeholder: "Phone Number",
                value: formData.phone,
                onChange: (e) => setFormData({
                  ...formData,
                  phone: e.target.value
                }),
                className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9F7AEA] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                required: true,
                renderId: "render-9c9d1818",
                as: "input"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-863b6261",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                placeholder: "Educational Background & Ministry Experience (if any)",
                value: formData.qualifications,
                onChange: (e) => setFormData({
                  ...formData,
                  qualifications: e.target.value
                }),
                rows: "4",
                className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9F7AEA] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                required: true,
                renderId: "render-ca997fbb",
                as: "textarea"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              type: "submit",
              disabled: loading,
              className: "w-full bg-gradient-to-r from-[#9F7AEA] to-[#805AD5] hover:from-[#AF87F2] hover:to-[#906ADD] text-white font-semibold py-3 rounded-lg transition-transform duration-200 hover:scale-105 active:scale-[0.98] disabled:opacity-50 shadow-md hover:shadow-lg",
              renderId: "render-11301b7b",
              as: "button",
              children: loading ? "Submitting..." : "Submit Application"
            }), message && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-center text-sm text-[#9F7AEA]",
              renderId: "render-b7e3942a",
              as: "p",
              children: message
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "text-xs text-center text-[#6E6E6E] dark:text-[#A0A0A0]",
              renderId: "render-2c34835c",
              as: "p",
              children: ["Full details at", " ", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "/education/seminary/admissions",
                className: "underline",
                renderId: "render-b67557bd",
                as: "a",
                children: "Admissions"
              }), " ", "or contact us at", " ", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "underline",
                href: "mailto:admissions@sts.edu",
                renderId: "render-bea3838a",
                as: "a",
                children: "admissions@sts.edu"
              })]
            })]
          }), /* @__PURE__ */ jsx(ShareFormLink, {
            label: "Share this application form",
            anchor: "#apply"
          })]
        })
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "pb-8 px-6",
      renderId: "render-9d453d2c",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto rounded-2xl border border-black/5 dark:border-white/10 p-8 bg-white dark:bg-[#1A1A1A]",
        renderId: "render-2896049f",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex flex-col md:flex-row items-start gap-6",
          renderId: "render-bb9138b0",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex-1",
            renderId: "render-4cef8942",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-2xl font-bold text-black dark:text-white mb-2",
              renderId: "render-8631f1ec",
              as: "h3",
              children: "Have questions?"
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "text-[#6E6E6E] dark:text-[#A0A0A0]",
              renderId: "render-03294afb",
              as: "p",
              children: ["See our", " ", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "/education/seminary/faith",
                className: "underline",
                renderId: "render-950783b2",
                as: "a",
                children: "faith & doctrine"
              }), ", check the", " ", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "/education/seminary/calendar",
                className: "underline",
                renderId: "render-7755c32a",
                as: "a",
                children: "academic calendar"
              }), ", or", " ", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "/education/seminary/contact",
                className: "underline",
                renderId: "render-4440f7e2",
                as: "a",
                children: "contact the seminary team"
              }), "."]
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "/education/seminary/admissions",
            className: "px-5 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center gap-2",
            renderId: "render-4b148949",
            as: "a",
            children: [/* @__PURE__ */ jsx(FileText, {
              className: "w-4 h-4"
            }), "Start Application"]
          })]
        })
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$j(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SeminaryPage, {
      ...props
    })
  });
}

const route23 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$j
}, Symbol.toStringTag, { value: 'Module' }));

function SeminaryAdmissionsPage() {
  const [formData, setFormData] = useState({
    school_name: "Sunrise Theological School",
    full_name: "",
    email: "",
    phone: "",
    qualifications: "",
    program: "",
    degree_type: "Diploma / Certificate"
  });
  const [message, setMessage] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [upload, {
    loading: uploading
  }] = useUpload();
  const mutation = useMutation({
    mutationFn: async (vars) => {
      const res = await fetch("/api/school-admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          qualifications_pdf_url: vars?.pdfUrl || null
        })
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`When fetching /api/school-admission, the response was [${res.status}] ${res.statusText} - ${txt}`);
      }
      return res.json();
    },
    onSuccess: (data) => {
      setMessage(data.message || "Application submitted successfully.");
      setFormData((prev) => ({
        ...prev,
        full_name: "",
        email: "",
        phone: "",
        qualifications: "",
        program: "",
        degree_type: "Diploma / Certificate"
      }));
      setPdfFile(null);
    },
    onError: (err) => {
      console.error(err);
      setMessage("Failed to submit. Please try again.");
    }
  });
  const Nav = useMemo(() => () => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "w-full bg-white/70 dark:bg-[#121212]/70 backdrop-blur sticky top-0 z-30 border-b border-black/5 dark:border-white/10",
    renderId: "render-624f8e71",
    as: "nav",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto px-6",
      renderId: "render-b988482e",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex gap-3 overflow-x-auto py-3 no-scrollbar",
        renderId: "render-ca180b55",
        as: "div",
        children: [{
          title: "Overview",
          href: "/education/seminary"
        }, {
          title: "Programs",
          href: "/education/seminary/programs"
        }, {
          title: "Admissions",
          href: "/education/seminary/admissions"
        }, {
          title: "Tuition & Aid",
          href: "/education/seminary/tuition-aid"
        }, {
          title: "Faculty",
          href: "/education/seminary/faculty"
        }, {
          title: "Calendar",
          href: "/education/seminary/calendar"
        }, {
          title: "Faith & Doctrine",
          href: "/education/seminary/faith"
        }, {
          title: "Student Life",
          href: "/education/seminary/student-life"
        }, {
          title: "Contact",
          href: "/education/seminary/contact"
        }].map((l) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: l.href,
          className: "shrink-0 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-sm text-black dark:text-white",
          renderId: "render-395d0f34",
          as: "a",
          children: l.title
        }, l.title))
      })
    })
  }), []);
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    style: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
    },
    renderId: "render-79635b18",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-64",
      renderId: "render-8c56f886",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1600&h=400&fit=crop&q=80",
        alt: "Admissions - Sunrise Theological School",
        className: "w-full h-full object-cover",
        renderId: "render-f5f00615",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-2a4a1493",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-c4564031",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-6xl font-bold text-white",
            renderId: "render-284848e8",
            as: "h1",
            children: "Admissions"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/85",
            renderId: "render-b7d64ceb",
            as: "p",
            children: "Start your journey at Sunrise Theological School"
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-54918084",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto grid lg:grid-cols-3 gap-10",
        renderId: "render-63620ca7",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "lg:col-span-2",
          renderId: "render-d67caea5",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-3xl font-bold text-black dark:text-white mb-4",
            renderId: "render-1a216791",
            as: "h2",
            children: "How to Apply"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "space-y-4 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-b3f14f31",
            as: "ol",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-start gap-3",
              renderId: "render-a120b635",
              as: "li",
              children: [/* @__PURE__ */ jsx(CheckCircle, {
                className: "w-6 h-6 text-[#9F7AEA] mt-1"
              }), " Review programs and choose your track (Certificate, Diploma, Degree)."]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-start gap-3",
              renderId: "render-5dc33c76",
              as: "li",
              children: [/* @__PURE__ */ jsx(CheckCircle, {
                className: "w-6 h-6 text-[#9F7AEA] mt-1"
              }), " Prepare transcripts and references (as applicable)."]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-start gap-3",
              renderId: "render-d050f347",
              as: "li",
              children: [/* @__PURE__ */ jsx(CheckCircle, {
                className: "w-6 h-6 text-[#9F7AEA] mt-1"
              }), " Complete the application form below."]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-start gap-3",
              renderId: "render-691786e9",
              as: "li",
              children: [/* @__PURE__ */ jsx(CheckCircle, {
                className: "w-6 h-6 text-[#9F7AEA] mt-1"
              }), " ", "Interview and placement (we’ll reach out after review)."]
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "mt-10 bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
            renderId: "render-9a3d664f",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-2xl font-bold text-black dark:text-white mb-3",
              renderId: "render-293a8cd5",
              as: "h3",
              children: "Requirements"
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "list-disc pl-6 space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-9f6fed0b",
              as: "ul",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                renderId: "render-7641b0f6",
                as: "li",
                children: "Completed application form"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                renderId: "render-5d1d225d",
                as: "li",
                children: "Government ID / Passport"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                renderId: "render-0066e5bf",
                as: "li",
                children: "Academic transcripts or church reference (program dependent)"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                renderId: "render-e4410072",
                as: "li",
                children: "Statement of faith and testimony"
              })]
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            id: "apply",
            className: "mt-12 bg-white dark:bg-[#1E1E1E] rounded-2xl shadow p-8 border border-[#E9E9E9] dark:border-[#333333]",
            renderId: "render-19b48eb3",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-2xl font-bold text-black dark:text-white mb-1",
              renderId: "render-5e655d76",
              as: "h3",
              children: "Apply to STS"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-[#6E6E6E] dark:text-[#A0A0A0] mb-6",
              renderId: "render-9a64162c",
              as: "p",
              children: "Submit your application and our team will contact you."
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              onSubmit: async (e) => {
                e.preventDefault();
                setMessage("");
                let pdfUrl = null;
                if (pdfFile) {
                  const {
                    url,
                    mimeType,
                    error
                  } = await upload({
                    file: pdfFile
                  });
                  if (error) {
                    setMessage(error);
                    return;
                  }
                  if (mimeType && !mimeType.startsWith("application/pdf")) {
                    setMessage("Please upload a PDF file");
                    return;
                  }
                  pdfUrl = url;
                }
                mutation.mutate({
                  pdfUrl
                });
              },
              className: "space-y-4",
              renderId: "render-c5d5984a",
              as: "form",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "grid sm:grid-cols-2 gap-4",
                renderId: "render-ea1fecfe",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  type: "text",
                  placeholder: "Full Name",
                  value: formData.full_name,
                  onChange: (e) => setFormData({
                    ...formData,
                    full_name: e.target.value
                  }),
                  className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                  required: true,
                  renderId: "render-a342e84b",
                  as: "input"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  type: "email",
                  placeholder: "Email Address",
                  value: formData.email,
                  onChange: (e) => setFormData({
                    ...formData,
                    email: e.target.value
                  }),
                  className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                  required: true,
                  renderId: "render-d301acd2",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "grid sm:grid-cols-2 gap-4",
                renderId: "render-e4c52ac0",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  type: "tel",
                  placeholder: "Phone Number",
                  value: formData.phone,
                  onChange: (e) => setFormData({
                    ...formData,
                    phone: e.target.value
                  }),
                  className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                  required: true,
                  renderId: "render-b4a0f137",
                  as: "input"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  type: "text",
                  placeholder: "Program (e.g., Diploma in Theology)",
                  value: formData.program,
                  onChange: (e) => setFormData({
                    ...formData,
                    program: e.target.value
                  }),
                  className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                  renderId: "render-302812e9",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                renderId: "render-1f661f19",
                as: "div",
                children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                  value: formData.degree_type,
                  onChange: (e) => setFormData({
                    ...formData,
                    degree_type: e.target.value
                  }),
                  className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                  renderId: "render-60ac2989",
                  as: "select",
                  children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    renderId: "render-53fe0eba",
                    as: "option",
                    children: "Diploma / Certificate"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    renderId: "render-da970f6b",
                    as: "option",
                    children: "Bachelor's"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    renderId: "render-e87391f5",
                    as: "option",
                    children: "Master's"
                  }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    renderId: "render-04455265",
                    as: "option",
                    children: "Doctorate"
                  })]
                })
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                placeholder: "Educational Background, Ministry Experience, and Statement of Faith (brief)",
                value: formData.qualifications,
                onChange: (e) => setFormData({
                  ...formData,
                  qualifications: e.target.value
                }),
                rows: 5,
                className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                required: true,
                renderId: "render-6b793c9e",
                as: "textarea"
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                renderId: "render-a057a5c3",
                as: "div",
                children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                  className: "flex items-center gap-2 text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
                  renderId: "render-946ef674",
                  as: "label",
                  children: [/* @__PURE__ */ jsx(Paperclip, {
                    className: "w-4 h-4"
                  }), " Qualifications PDF (optional)"]
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  type: "file",
                  accept: "application/pdf",
                  onChange: (e) => setPdfFile(e.target.files && e.target.files[0] ? e.target.files[0] : null),
                  className: "mt-1 w-full px-4 py-2 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                  renderId: "render-4835e858",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "submit",
                disabled: mutation.isLoading || uploading,
                className: "w-full bg-gradient-to-r from-[#9F7AEA] to-[#805AD5] hover:from-[#AF87F2] hover:to-[#906ADD] text-white font-semibold py-3 rounded-lg disabled:opacity-50",
                renderId: "render-6c33070b",
                as: "button",
                children: mutation.isLoading || uploading ? "Submitting..." : "Submit Application"
              }), message ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-center text-sm text-[#9F7AEA]",
                renderId: "render-93870b13",
                as: "p",
                children: message
              }) : null]
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "space-y-6",
          renderId: "render-cf830add",
          as: "aside",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]",
            renderId: "render-84812683",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-xl font-bold text-black dark:text-white mb-2",
              renderId: "render-0f75511e",
              as: "h3",
              children: "Key Dates"
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "text-[#2B2B2B] dark:text-[#E0E0E0] space-y-2",
              renderId: "render-dc642f78",
              as: "ul",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                renderId: "render-ce7582ca",
                as: "li",
                children: "• Fall intake: Sept 1"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                renderId: "render-b0160af1",
                as: "li",
                children: "• Application priority: July 15"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                renderId: "render-3bf80513",
                as: "li",
                children: "• Orientation: Last week of Aug"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "/education/seminary/calendar",
              className: "mt-3 inline-flex items-center gap-2 text-[#9F7AEA]",
              renderId: "render-30583a6e",
              as: "a",
              children: [/* @__PURE__ */ jsx(ArrowRight, {
                className: "w-4 h-4"
              }), " View Full Calendar"]
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]",
            renderId: "render-07b0576b",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-xl font-bold text-black dark:text-white mb-2",
              renderId: "render-156d2378",
              as: "h3",
              children: "Need Help?"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-[#6E6E6E] dark:text-[#A0A0A0] mb-3",
              renderId: "render-0a7f7d98",
              as: "p",
              children: "Our admissions team is here to help you through each step."
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "space-y-2 text-sm",
              renderId: "render-87a92ee7",
              as: "div",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                href: "mailto:admissions@sts.edu",
                className: "flex items-center gap-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
                renderId: "render-4f3168b6",
                as: "a",
                children: [/* @__PURE__ */ jsx(Mail, {
                  className: "w-4 h-4"
                }), " admissions@sts.edu"]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                href: "tel:+2347064200926",
                className: "flex items-center gap-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
                renderId: "render-e5d46171",
                as: "a",
                children: [/* @__PURE__ */ jsx(Phone, {
                  className: "w-4 h-4"
                }), " +234 706 420 0926"]
              })]
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]",
            renderId: "render-3ded8de3",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-xl font-bold text-black dark:text-white mb-2",
              renderId: "render-c53589f3",
              as: "h3",
              children: "Tuition & Aid"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-[#6E6E6E] dark:text-[#A0A0A0]",
              renderId: "render-63fb5ae6",
              as: "p",
              children: "Explore scholarships and pastoral discounts."
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "/education/seminary/tuition-aid",
              className: "mt-2 inline-flex items-center gap-2 text-[#9F7AEA]",
              renderId: "render-fc2a89e8",
              as: "a",
              children: [/* @__PURE__ */ jsx(ArrowRight, {
                className: "w-4 h-4"
              }), " Learn More"]
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$i(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SeminaryAdmissionsPage, {
      ...props
    })
  });
}

const route24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$i
}, Symbol.toStringTag, { value: 'Module' }));

function SeminaryCalendarPage() {
  const Nav = () => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "w-full bg-white/70 dark:bg-[#121212]/70 backdrop-blur sticky top-0 z-30 border-b border-black/5 dark:border-white/10",
    renderId: "render-a3968618",
    as: "nav",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto px-6",
      renderId: "render-88a40ab3",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex gap-3 overflow-x-auto py-3 no-scrollbar",
        renderId: "render-0c7e55e8",
        as: "div",
        children: [{
          title: "Overview",
          href: "/education/seminary"
        }, {
          title: "Programs",
          href: "/education/seminary/programs"
        }, {
          title: "Admissions",
          href: "/education/seminary/admissions"
        }, {
          title: "Tuition & Aid",
          href: "/education/seminary/tuition-aid"
        }, {
          title: "Faculty",
          href: "/education/seminary/faculty"
        }, {
          title: "Calendar",
          href: "/education/seminary/calendar"
        }, {
          title: "Faith & Doctrine",
          href: "/education/seminary/faith"
        }, {
          title: "Student Life",
          href: "/education/seminary/student-life"
        }, {
          title: "Contact",
          href: "/education/seminary/contact"
        }].map((l) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: l.href,
          className: "shrink-0 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-sm text-black dark:text-white",
          renderId: "render-3e1fa399",
          as: "a",
          children: l.title
        }, l.title))
      })
    })
  });
  const terms = [{
    title: "Fall Term",
    dates: ["Classes begin: Sept 1", "Midterm: Oct 15", "Break: Nov 1-7", "Final exams: Dec 10-15"]
  }, {
    title: "Spring Term",
    dates: ["Classes begin: Jan 15", "Midterm: Mar 1", "Break: Apr 10-14", "Final exams: May 25-30"]
  }, {
    title: "Summer Term",
    dates: ["Modules: Jun-Jul", "Practicum & Missions: Aug"]
  }];
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    style: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
    },
    renderId: "render-a9c84553",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-64",
      renderId: "render-cba12429",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1600&h=400&fit=crop&q=80",
        alt: "Academic Calendar - Sunrise Theological School",
        className: "w-full h-full object-cover",
        renderId: "render-f7b70bb6",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-f2162914",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-b0b2d656",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-6xl font-bold text-white",
            renderId: "render-6a2864ea",
            as: "h1",
            children: "Academic Calendar"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/85",
            renderId: "render-48330e2c",
            as: "p",
            children: "Key dates across the academic year"
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-7b83187d",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto grid md:grid-cols-3 gap-8",
        renderId: "render-b69eaf97",
        as: "div",
        children: terms.map((t) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-c4734410",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-bold text-black dark:text-white mb-4",
            renderId: "render-86d267d5",
            as: "h2",
            children: t.title
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-a5b81069",
            as: "ul",
            children: t.dates.map((d) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-57967755",
              as: "li",
              children: ["• ", d]
            }, d))
          })]
        }, t.title))
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$h(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SeminaryCalendarPage, {
      ...props
    })
  });
}

const route25 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$h
}, Symbol.toStringTag, { value: 'Module' }));

function SeminaryContactPage() {
  const Nav = () => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "w-full bg-white/70 dark:bg-[#121212]/70 backdrop-blur sticky top-0 z-30 border-b border-black/5 dark:border-white/10",
    renderId: "render-90033330",
    as: "nav",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto px-6",
      renderId: "render-2b7495d6",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex gap-3 overflow-x-auto py-3 no-scrollbar",
        renderId: "render-cd7f683e",
        as: "div",
        children: [{
          title: "Overview",
          href: "/education/seminary"
        }, {
          title: "Programs",
          href: "/education/seminary/programs"
        }, {
          title: "Admissions",
          href: "/education/seminary/admissions"
        }, {
          title: "Tuition & Aid",
          href: "/education/seminary/tuition-aid"
        }, {
          title: "Faculty",
          href: "/education/seminary/faculty"
        }, {
          title: "Calendar",
          href: "/education/seminary/calendar"
        }, {
          title: "Faith & Doctrine",
          href: "/education/seminary/faith"
        }, {
          title: "Student Life",
          href: "/education/seminary/student-life"
        }, {
          title: "Contact",
          href: "/education/seminary/contact"
        }].map((l) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: l.href,
          className: "shrink-0 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg:white/10 text-sm text-black dark:text-white",
          renderId: "render-6537dfb3",
          as: "a",
          children: l.title
        }, l.title))
      })
    })
  });
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    style: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
    },
    renderId: "render-740cca16",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-64",
      renderId: "render-abbb1435",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=400&fit=crop&q=80",
        alt: "Contact - Sunrise Theological School",
        className: "w-full h-full object-cover",
        renderId: "render-1327c4bd",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-63a0a55f",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-7bff229a",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-6xl font-bold text-white",
            renderId: "render-0bff9f8c",
            as: "h1",
            children: "Contact"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/85",
            renderId: "render-1b5d6867",
            as: "p",
            children: "We're here to help"
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-174d443c",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-5xl mx-auto grid md:grid-cols-3 gap-8",
        renderId: "render-2bd8d20e",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-a09f7308",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-xl font-bold text-black dark:text-white mb-2",
            renderId: "render-5589cc1f",
            as: "h2",
            children: "Admissions"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "mailto:admissions@sts.edu",
            className: "flex items-center gap-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-ff3bb984",
            as: "a",
            children: [/* @__PURE__ */ jsx(Mail, {
              className: "w-4 h-4"
            }), " admissions@sts.edu"]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "tel:+2347064200926",
            className: "mt-2 flex items-center gap-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-679e16c7",
            as: "a",
            children: [/* @__PURE__ */ jsx(Phone, {
              className: "w-4 h-4"
            }), " +234 706 420 0926"]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-c5d255f0",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-xl font-bold text-black dark:text:white mb-2",
            renderId: "render-9868f06d",
            as: "h2",
            children: "Academics"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "mailto:academics@sts.edu",
            className: "flex items-center gap-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-af89810e",
            as: "a",
            children: [/* @__PURE__ */ jsx(Mail, {
              className: "w-4 h-4"
            }), " academics@sts.edu"]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-a55837c6",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-xl font-bold text-black dark:text:white mb-2",
            renderId: "render-e7d99525",
            as: "h2",
            children: "Headquarters"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-start gap-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-0200b802",
            as: "p",
            children: [/* @__PURE__ */ jsx(MapPin, {
              className: "w-4 h-4 mt-1"
            }), " Sunrise Theological School, International HQ"]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$g(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SeminaryContactPage, {
      ...props
    })
  });
}

const route26 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$g
}, Symbol.toStringTag, { value: 'Module' }));

const faculty = [{
  name: "Dr. Grace A. Mensah",
  role: "Dean, Biblical Studies",
  email: "g.mensah@sts.edu",
  photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
}, {
  name: "Rev. Samuel Okoye",
  role: "Director, Pastoral Ministry",
  email: "s.okoye@sts.edu",
  photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80"
}, {
  name: "Prof. Adaeze Uche",
  role: "Church History & Doctrine",
  email: "a.uche@sts.edu",
  photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&q=80"
}, {
  name: "Dr. Michael Ade",
  role: "Missiology & Evangelism",
  email: "m.ade@sts.edu",
  photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80"
}];
function SeminaryFacultyPage() {
  const Nav = () => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "w-full bg-white/70 dark:bg-[#121212]/70 backdrop-blur sticky top-0 z-30 border-b border-black/5 dark:border-white/10",
    renderId: "render-0401f402",
    as: "nav",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto px-6",
      renderId: "render-c3c9def6",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex gap-3 overflow-x-auto py-3 no-scrollbar",
        renderId: "render-8cca242b",
        as: "div",
        children: [{
          title: "Overview",
          href: "/education/seminary"
        }, {
          title: "Programs",
          href: "/education/seminary/programs"
        }, {
          title: "Admissions",
          href: "/education/seminary/admissions"
        }, {
          title: "Tuition & Aid",
          href: "/education/seminary/tuition-aid"
        }, {
          title: "Faculty",
          href: "/education/seminary/faculty"
        }, {
          title: "Calendar",
          href: "/education/seminary/calendar"
        }, {
          title: "Faith & Doctrine",
          href: "/education/seminary/faith"
        }, {
          title: "Student Life",
          href: "/education/seminary/student-life"
        }, {
          title: "Contact",
          href: "/education/seminary/contact"
        }].map((l) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: l.href,
          className: "shrink-0 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-sm text-black dark:text-white",
          renderId: "render-23e9e7ed",
          as: "a",
          children: l.title
        }, l.title))
      })
    })
  });
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    style: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
    },
    renderId: "render-2295b793",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-64",
      renderId: "render-5619ffdd",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=1600&h=400&fit=crop&q=80",
        alt: "Faculty - Sunrise Theological School",
        className: "w-full h-full object-cover",
        renderId: "render-097a5928",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-b7b01614",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-05c3ac74",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-6xl font-bold text-white",
            renderId: "render-6437e548",
            as: "h1",
            children: "Faculty & Staff"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/85",
            renderId: "render-28dc7822",
            as: "p",
            children: "Biblical scholars and ministry practitioners"
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-ee7cd619",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8",
        renderId: "render-13304258",
        as: "div",
        children: faculty.map((f) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-4 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-e4322d36",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            src: f.photo,
            alt: f.name,
            className: "w-full h-40 object-cover rounded-lg mb-3",
            renderId: "render-9693bf1a",
            as: "img"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-lg font-bold text-black dark:text-white",
            renderId: "render-232e1b8b",
            as: "h3",
            children: f.name
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-[#6E6E6E] dark:text-[#A0A0A0] mb-3",
            renderId: "render-43103aa8",
            as: "p",
            children: f.role
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: `mailto:${f.email}`,
            className: "inline-flex items-center gap-2 text-[#9F7AEA]",
            renderId: "render-e6dd8b6b",
            as: "a",
            children: [/* @__PURE__ */ jsx(Mail, {
              className: "w-4 h-4"
            }), " Contact"]
          })]
        }, f.email))
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$f(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SeminaryFacultyPage, {
      ...props
    })
  });
}

const route27 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$f
}, Symbol.toStringTag, { value: 'Module' }));

function SeminaryFaithPage() {
  const Nav = () => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "w-full bg-white/70 dark:bg-[#121212]/70 backdrop-blur sticky top-0 z-30 border-b border-black/5 dark:border-white/10",
    renderId: "render-5e08711c",
    as: "nav",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto px-6",
      renderId: "render-032fefcd",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex gap-3 overflow-x-auto py-3 no-scrollbar",
        renderId: "render-da28da28",
        as: "div",
        children: [{
          title: "Overview",
          href: "/education/seminary"
        }, {
          title: "Programs",
          href: "/education/seminary/programs"
        }, {
          title: "Admissions",
          href: "/education/seminary/admissions"
        }, {
          title: "Tuition & Aid",
          href: "/education/seminary/tuition-aid"
        }, {
          title: "Faculty",
          href: "/education/seminary/faculty"
        }, {
          title: "Calendar",
          href: "/education/seminary/calendar"
        }, {
          title: "Faith & Doctrine",
          href: "/education/seminary/faith"
        }, {
          title: "Student Life",
          href: "/education/seminary/student-life"
        }, {
          title: "Contact",
          href: "/education/seminary/contact"
        }].map((l) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: l.href,
          className: "shrink-0 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-sm text-black dark:text-white",
          renderId: "render-90622141",
          as: "a",
          children: l.title
        }, l.title))
      })
    })
  });
  const statement = [{
    h: "Scripture",
    p: "We affirm the Holy Bible as the inspired, infallible Word of God and the supreme authority for faith and life."
  }, {
    h: "God",
    p: "We believe in one God, eternally existing in three Persons: Father, Son, and Holy Spirit."
  }, {
    h: "Jesus Christ",
    p: "We confess the full deity and humanity of Jesus Christ, His virgin birth, sinless life, substitutionary atonement, bodily resurrection, and return."
  }, {
    h: "Salvation",
    p: "We are saved by grace through faith in Jesus Christ alone. The Holy Spirit regenerates, indwells, and sanctifies believers."
  }, {
    h: "Church",
    p: "The universal Church is the Body of Christ, called to worship, discipleship, and mission in the world."
  }, {
    h: "Mission",
    p: "We embrace the Great Commission to make disciples of all nations, proclaiming the gospel in word and deed."
  }];
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    style: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
    },
    renderId: "render-5db9f154",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-64",
      renderId: "render-b80bf2cd",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1533001168400-33df6d0d63f4?w=1600&h=400&fit=crop&q=80",
        alt: "Faith & Doctrine - Sunrise Theological School",
        className: "w-full h-full object-cover",
        renderId: "render-2362c475",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-19025ec7",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-903d826b",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-6xl font-bold text-white",
            renderId: "render-dfa58d2b",
            as: "h1",
            children: "Faith & Doctrine"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/85",
            renderId: "render-4a8d8445",
            as: "p",
            children: "Our core convictions shape every class and ministry"
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-bfe0f4aa",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "max-w-4xl mx-auto space-y-8",
        renderId: "render-bfa8e47b",
        as: "div",
        children: statement.map((s) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-2231254c",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-bold text-black dark:text-white mb-2",
            renderId: "render-e0f94cc0",
            as: "h2",
            children: s.h
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-08bba1a6",
            as: "p",
            children: s.p
          })]
        }, s.h))
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$e(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SeminaryFaithPage, {
      ...props
    })
  });
}

const route28 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$e
}, Symbol.toStringTag, { value: 'Module' }));

function SeminaryProgramsPage() {
  const courses = [{
    title: "Certificate in Ministry",
    duration: "1 year (modular)",
    items: ["Bible Survey I & II", "Basics of Discipleship", "Intro to Evangelism", "Christian Foundations"]
  }, {
    title: "Diploma in Theology",
    duration: "2 years",
    items: ["Hermeneutics", "Systematic Theology I", "Church History", "Pastoral Ministry I"]
  }, {
    title: "Bachelor in Theology (BTh)",
    duration: "3-4 years",
    items: ["Greek/Hebrew (intro)", "Apologetics", "Homiletics", "Leadership & Admin"]
  }, {
    title: "Graduate Studies (MDiv/MA)",
    duration: "2-3 years",
    items: ["Advanced Exegesis", "Biblical Theology", "Pastoral Counseling", "Mission Strategy"]
  }];
  const Nav = () => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "w-full bg-white/70 dark:bg-[#121212]/70 backdrop-blur sticky top-0 z-30 border-b border-black/5 dark:border-white/10",
    renderId: "render-5000789b",
    as: "nav",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto px-6",
      renderId: "render-ce63de38",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex gap-3 overflow-x-auto py-3 no-scrollbar",
        renderId: "render-1d2e0106",
        as: "div",
        children: [{
          title: "Overview",
          href: "/education/seminary"
        }, {
          title: "Programs",
          href: "/education/seminary/programs"
        }, {
          title: "Admissions",
          href: "/education/seminary/admissions"
        }, {
          title: "Tuition & Aid",
          href: "/education/seminary/tuition-aid"
        }, {
          title: "Faculty",
          href: "/education/seminary/faculty"
        }, {
          title: "Calendar",
          href: "/education/seminary/calendar"
        }, {
          title: "Faith & Doctrine",
          href: "/education/seminary/faith"
        }, {
          title: "Student Life",
          href: "/education/seminary/student-life"
        }, {
          title: "Contact",
          href: "/education/seminary/contact"
        }].map((l) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: l.href,
          className: "shrink-0 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-sm text-black dark:text-white",
          renderId: "render-ab3dd746",
          as: "a",
          children: l.title
        }, l.title))
      })
    })
  });
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    style: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
    },
    renderId: "render-603f68ff",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-64",
      renderId: "render-98911246",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=1600&h=400&fit=crop&q=80",
        alt: "Programs - Sunrise Theological School",
        className: "w-full h-full object-cover",
        renderId: "render-d4362e91",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-e270a76c",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-4d9771a7",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-6xl font-bold text-white",
            renderId: "render-2bd417dc",
            as: "h1",
            children: "Programs"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/85",
            renderId: "render-203f9fdb",
            as: "p",
            children: "Certificate, Diploma, Degree & Graduate studies"
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-bf850766",
      as: "section",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "max-w-7xl mx-auto grid md:grid-cols-2 gap-8",
        renderId: "render-c70fed8a",
        as: "div",
        children: courses.map((c) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-52e54855",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-start gap-4 mb-3",
            renderId: "render-28809a93",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "w-12 h-12 bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] rounded-full flex items-center justify-center flex-shrink-0",
              renderId: "render-a0a2c022",
              as: "div",
              children: /* @__PURE__ */ jsx(BookOpen, {
                className: "w-6 h-6 text-white"
              })
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-afe2e06c",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-xl font-bold text-black dark:text-white",
                renderId: "render-158cd015",
                as: "h3",
                children: c.title
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-85f8e6ae",
                as: "p",
                children: c.duration
              })]
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "space-y-2",
            renderId: "render-37ea288e",
            as: "ul",
            children: c.items.map((it) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-start gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-068096b6",
              as: "li",
              children: [/* @__PURE__ */ jsx(CheckCircle, {
                className: "w-5 h-5 text-[#9F7AEA] mt-0.5"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                renderId: "render-4ce89afb",
                as: "span",
                children: it
              })]
            }, it))
          })]
        }, c.title))
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-7xl mx-auto mt-12 flex flex-col sm:flex-row items-center gap-4",
        renderId: "render-66c8beab",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          href: "/education/seminary/admissions#apply",
          className: "px-5 py-3 rounded-lg bg-[#9F7AEA] hover:bg-[#805AD5] text-white font-semibold inline-flex items-center gap-2",
          renderId: "render-bd8f6a6d",
          as: "a",
          children: [/* @__PURE__ */ jsx(FileText, {
            className: "w-4 h-4"
          }), " Apply Now"]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: "/education/seminary/faith",
          className: "px-5 py-3 rounded-lg border border-black/10 dark:border-white/10 text-black dark:text-white",
          renderId: "render-ad4c7060",
          as: "a",
          children: "Read Faith & Doctrine"
        })]
      })]
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$d(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SeminaryProgramsPage, {
      ...props
    })
  });
}

const route29 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$d
}, Symbol.toStringTag, { value: 'Module' }));

function SeminaryStudentLifePage() {
  const Nav = () => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "w-full bg-white/70 dark:bg-[#121212]/70 backdrop-blur sticky top-0 z-30 border-b border-black/5 dark:border-white/10",
    renderId: "render-6a315e85",
    as: "nav",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto px-6",
      renderId: "render-5f567bbc",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex gap-3 overflow-x-auto py-3 no-scrollbar",
        renderId: "render-108c32e1",
        as: "div",
        children: [{
          title: "Overview",
          href: "/education/seminary"
        }, {
          title: "Programs",
          href: "/education/seminary/programs"
        }, {
          title: "Admissions",
          href: "/education/seminary/admissions"
        }, {
          title: "Tuition & Aid",
          href: "/education/seminary/tuition-aid"
        }, {
          title: "Faculty",
          href: "/education/seminary/faculty"
        }, {
          title: "Calendar",
          href: "/education/seminary/calendar"
        }, {
          title: "Faith & Doctrine",
          href: "/education/seminary/faith"
        }, {
          title: "Student Life",
          href: "/education/seminary/student-life"
        }, {
          title: "Contact",
          href: "/education/seminary/contact"
        }].map((l) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: l.href,
          className: "shrink-0 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-sm text-black dark:text-white",
          renderId: "render-f12ca52a",
          as: "a",
          children: l.title
        }, l.title))
      })
    })
  });
  const items = [{
    icon: Church,
    title: "Chapel & Prayer",
    text: "Weekly worship, daily prayer rhythms, and spiritual retreats."
  }, {
    icon: Users,
    title: "Ministry Placements",
    text: "Hands-on service in churches and outreach ministries each term."
  }, {
    icon: Heart,
    title: "Community",
    text: "Small groups, mentoring, and student-led initiatives."
  }];
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    style: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
    },
    renderId: "render-3d4525e6",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-64",
      renderId: "render-8ab066ab",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=1600&h=400&fit=crop&q=80",
        alt: "Student Life - Sunrise Theological School",
        className: "w-full h-full object-cover",
        renderId: "render-0f9ed2a7",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-47211c99",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-8e3fefd8",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-6xl font-bold text-white",
            renderId: "render-0b5e9ad8",
            as: "h1",
            children: "Student Life"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/85",
            renderId: "render-a9bddea3",
            as: "p",
            children: "Grow in community, character, and calling"
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-252d2cf5",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto grid md:grid-cols-3 gap-8",
        renderId: "render-a70405e7",
        as: "div",
        children: items.map(({
          icon: Icon,
          title,
          text
        }) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-ba12d3ad",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "w-12 h-12 bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] rounded-full flex items-center justify-center mb-3",
            renderId: "render-554b23e5",
            as: "div",
            children: /* @__PURE__ */ jsx(Icon, {
              className: "w-6 h-6 text-white"
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-xl font-bold text-black dark:text-white mb-1",
            renderId: "render-fa105368",
            as: "h2",
            children: title
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-326cccbf",
            as: "p",
            children: text
          })]
        }, title))
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$c(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SeminaryStudentLifePage, {
      ...props
    })
  });
}

const route30 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$c
}, Symbol.toStringTag, { value: 'Module' }));

function SeminaryTuitionAidPage() {
  const Nav = () => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "w-full bg-white/70 dark:bg-[#121212]/70 backdrop-blur sticky top-0 z-30 border-b border-black/5 dark:border-white/10",
    renderId: "render-80a74424",
    as: "nav",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-7xl mx-auto px-6",
      renderId: "render-c87caf7e",
      as: "div",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "flex gap-3 overflow-x-auto py-3 no-scrollbar",
        renderId: "render-21a29472",
        as: "div",
        children: [{
          title: "Overview",
          href: "/education/seminary"
        }, {
          title: "Programs",
          href: "/education/seminary/programs"
        }, {
          title: "Admissions",
          href: "/education/seminary/admissions"
        }, {
          title: "Tuition & Aid",
          href: "/education/seminary/tuition-aid"
        }, {
          title: "Faculty",
          href: "/education/seminary/faculty"
        }, {
          title: "Calendar",
          href: "/education/seminary/calendar"
        }, {
          title: "Faith & Doctrine",
          href: "/education/seminary/faith"
        }, {
          title: "Student Life",
          href: "/education/seminary/student-life"
        }, {
          title: "Contact",
          href: "/education/seminary/contact"
        }].map((l) => /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          href: l.href,
          className: "shrink-0 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-sm text-black dark:text-white",
          renderId: "render-8b755570",
          as: "a",
          children: l.title
        }, l.title))
      })
    })
  });
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    style: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
    },
    renderId: "render-57816133",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-64",
      renderId: "render-7fe18b88",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&h=400&fit=crop&q=80",
        alt: "Tuition & Aid - Sunrise Theological School",
        className: "w-full h-full object-cover",
        renderId: "render-4233dc6e",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
        renderId: "render-efd08beb",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center px-6",
          renderId: "render-25d3db55",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-6xl font-bold text-white",
            renderId: "render-d25705fc",
            as: "h1",
            children: "Tuition & Aid"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-2 text-white/85",
            renderId: "render-a76a77da",
            as: "p",
            children: "Affordable training with scholarships and discounts"
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-16 px-6",
      renderId: "render-d29e4775",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-8",
        renderId: "render-e849e7b4",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-4214e507",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-bold text-black dark:text-white mb-4",
            renderId: "render-e86eca74",
            as: "h2",
            children: "Sample Tuition (per term)"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]",
            renderId: "render-d9f4f53a",
            as: "ul",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-6379a3d8",
              as: "li",
              children: "• Certificate: ₦300"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-9a0c44f3",
              as: "li",
              children: "• Diploma: ₦450"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-f0548110",
              as: "li",
              children: "• BTh: ₦600"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-2b6f861d",
              as: "li",
              children: "• Graduate: ₦800"
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-sm text-[#6E6E6E] dark:text-[#A0A0A0] mt-3",
            renderId: "render-d100ffe9",
            as: "p",
            children: "Exact figures may vary by campus and course load."
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "rounded-2xl p-6 border border-black/5 dark:border-white/10 bg-white dark:bg-[#1E1E1E]",
          renderId: "render-0b11b733",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-bold text-black dark:text-white mb-4",
            renderId: "render-a9f687b6",
            as: "h2",
            children: "Scholarships & Discounts"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "space-y-2",
            renderId: "render-f96537de",
            as: "ul",
            children: ["Pastoral/missionary discount", "Need-based scholarships", "Merit awards", "Payment plans"].map((t) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-start gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-fe6ca6c8",
              as: "li",
              children: [/* @__PURE__ */ jsx(CheckCircle, {
                className: "w-5 h-5 text-[#9F7AEA] mt-0.5"
              }), " ", t]
            }, t))
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "/education/seminary/admissions#apply",
            className: "mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9F7AEA] hover:bg-[#805AD5] text-white",
            renderId: "render-a4776a64",
            as: "a",
            children: [/* @__PURE__ */ jsx(DollarSign, {
              className: "w-4 h-4"
            }), " Apply for Aid"]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$b(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SeminaryTuitionAidPage, {
      ...props
    })
  });
}

const route31 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$b
}, Symbol.toStringTag, { value: 'Module' }));

function TechHubPage() {
  const [formData, setFormData] = useState({
    school_name: "Tech Hub",
    full_name: "",
    email: "",
    phone: "",
    qualifications: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/school-admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error("Failed to submit");
      const data = await response.json();
      setMessage(data.message);
      setFormData({
        ...formData,
        full_name: "",
        email: "",
        phone: "",
        qualifications: ""
      });
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    renderId: "render-7f5c383c",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-96",
      renderId: "render-f4a9b224",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=600&fit=crop&q=80",
        alt: "Tech Hub",
        className: "w-full h-full object-cover",
        renderId: "render-5925d59a",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center",
        renderId: "render-4a31acd1",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center",
          renderId: "render-08b802c2",
          as: "div",
          children: [/* @__PURE__ */ jsx(Code, {
            className: "w-20 h-20 text-[#4FD1C5] mx-auto mb-4"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-5xl md:text-7xl font-bold text-white",
            renderId: "render-38f1a2cd",
            as: "h1",
            children: "Tech Hub"
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-20 px-6 bg-white dark:bg-[#121212]",
      renderId: "render-b8f2fb91",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-4xl mx-auto",
        renderId: "render-5bbfb2f3",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-4xl font-bold text-black dark:text-white mb-6",
          renderId: "render-3c5b8997",
          as: "h2",
          children: "Building Tomorrow's Tech Leaders"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-lg text-[#2B2B2B] dark:text-[#E0E0E0] leading-relaxed mb-8",
          renderId: "render-bd2eff81",
          as: "p",
          children: "Our Tech Hub prepares students for success in the digital economy. Learn web development, software engineering, data science, and more through hands-on projects and industry-standard tools. We combine technical excellence with ethical practices to develop innovators who use technology for good."
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "grid md:grid-cols-2 gap-8 mb-12",
          renderId: "render-c7384c9a",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-start gap-4",
            renderId: "render-c3270a69",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "w-12 h-12 bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] rounded-full flex items-center justify-center flex-shrink-0",
              renderId: "render-62e59aab",
              as: "div",
              children: /* @__PURE__ */ jsx(Clock, {
                className: "w-6 h-6 text-white"
              })
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-91815e41",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-xl font-bold text-black dark:text-white mb-2",
                renderId: "render-0f115bfc",
                as: "h3",
                children: "Program Duration"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-7734e25a",
                as: "p",
                children: "6-month to 2-year programs available"
              })]
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "flex items-start gap-4",
            renderId: "render-9801b3ac",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "w-12 h-12 bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] rounded-full flex items-center justify-center flex-shrink-0",
              renderId: "render-8ef0ff15",
              as: "div",
              children: /* @__PURE__ */ jsx(Calendar, {
                className: "w-6 h-6 text-white"
              })
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-e8d54f0c",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-xl font-bold text-black dark:text-white mb-2",
                renderId: "render-2c86dfe2",
                as: "h3",
                children: "Academic Sessions"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-37db53e5",
                as: "p",
                children: "Rolling admissions - start anytime"
              })]
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-61383935",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-2xl font-bold text-black dark:text-white mb-4",
            renderId: "render-02670360",
            as: "h3",
            children: "What You'll Learn"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "space-y-3",
            renderId: "render-38a64e7c",
            as: "ul",
            children: ["Web Development (HTML, CSS, JavaScript, React)", "Mobile App Development (React Native, Flutter)", "Backend Development (Node.js, Python, databases)", "Data Science and Machine Learning", "Cloud Computing and DevOps", "UI/UX Design and Product Development"].map((item, index) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-start gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]",
              renderId: "render-d2eacf7f",
              as: "li",
              children: [/* @__PURE__ */ jsx(CheckCircle, {
                className: "w-5 h-5 text-[#4FD1C5] flex-shrink-0 mt-1"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                renderId: "render-6c4ad39b",
                as: "span",
                children: item
              })]
            }, index))
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "apply",
      className: "py-20 px-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]",
      renderId: "render-c32d541a",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "max-w-2xl mx-auto",
        renderId: "render-dc5089df",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-xl p-12 border border-[#E9E9E9] dark:border-[#333333]",
          renderId: "render-1c2dbefc",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-3xl font-bold text-black dark:text-white text-center mb-6",
            renderId: "render-e617930c",
            as: "h2",
            children: "Apply for Admission"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-lg text-[#6E6E6E] dark:text-[#A0A0A0] text-center mb-8",
            renderId: "render-d6809023",
            as: "p",
            children: "Launch your tech career and learn skills for the digital age."
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            onSubmit: handleSubmit,
            className: "space-y-4",
            renderId: "render-8d6e2f3f",
            as: "form",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-99d3c2ef",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "text",
                placeholder: "Full Name",
                value: formData.full_name,
                onChange: (e) => setFormData({
                  ...formData,
                  full_name: e.target.value
                }),
                className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                required: true,
                renderId: "render-76713f89",
                as: "input"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-08aee0fe",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "email",
                placeholder: "Email Address",
                value: formData.email,
                onChange: (e) => setFormData({
                  ...formData,
                  email: e.target.value
                }),
                className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                required: true,
                renderId: "render-6c9fd84e",
                as: "input"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-fd68c492",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "tel",
                placeholder: "Phone Number",
                value: formData.phone,
                onChange: (e) => setFormData({
                  ...formData,
                  phone: e.target.value
                }),
                className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                required: true,
                renderId: "render-cd3b9acd",
                as: "input"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-9302aa99",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                placeholder: "Educational Background & Tech Experience (if any)",
                value: formData.qualifications,
                onChange: (e) => setFormData({
                  ...formData,
                  qualifications: e.target.value
                }),
                rows: "4",
                className: "w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] bg-white dark:bg-[#1E1E1E] text-black dark:text-white",
                required: true,
                renderId: "render-ec921a89",
                as: "textarea"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              type: "submit",
              disabled: loading,
              className: "w-full bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] hover:from-[#5FD9CD] hover:to-[#48C2B4] text-white font-semibold py-3 rounded-lg transition-transform duration-200 hover:scale-105 active:scale-[0.98] disabled:opacity-50 shadow-md hover:shadow-lg",
              renderId: "render-0271f2ab",
              as: "button",
              children: loading ? "Submitting..." : "Submit Application"
            }), message && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-center text-sm text-[#4FD1C5]",
              renderId: "render-cee8d0b8",
              as: "p",
              children: message
            })]
          }), /* @__PURE__ */ jsx(ShareFormLink, {
            label: "Share this application form",
            anchor: "#apply"
          })]
        })
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}

function WrappedPage$a(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(TechHubPage, {
      ...props
    })
  });
}

const route32 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$a
}, Symbol.toStringTag, { value: 'Module' }));

function FinancePage() {
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    style: {
      background: "radial-gradient(1200px 600px at 10% -10%, rgba(74,88,119,0.10), transparent 60%), radial-gradient(1000px 500px at 110% 10%, rgba(25,32,44,0.30), transparent 60%), linear-gradient(180deg, #0b0e14 0%, #0f131a 40%, #10151f 100%)",
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, system-ui, sans-serif'
    },
    className: "jsx-783570697 min-h-screen text-white",
    renderId: "render-05b9dfba",
    as: "div",
    children: [/* @__PURE__ */ jsx(SEOHead, {
      path: "/finance"
    }), /* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "jsx-783570697 relative w-full h-[420px] md:h-[520px] overflow-hidden",
      renderId: "render-278a2620",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=800&fit=crop&q=80",
        alt: "Finance and Investment",
        className: "jsx-783570697 w-full h-full object-cover",
        renderId: "render-ac485d5b",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-783570697 absolute inset-0 bg-gradient-to-b from-black/60 via-[#0d121a]/60 to-[#0d121a]/90",
        renderId: "render-362ece43",
        as: "div"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-783570697 absolute inset-0 flex items-center justify-center px-6",
        renderId: "render-f0138597",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-783570697 backdrop-blur-xl bg-white/7 border border-white/15 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 md:p-8 max-w-3xl w-full text-center",
          renderId: "render-92458e00",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-783570697 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs md:text-sm mb-3",
            renderId: "render-c482402b",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse",
              renderId: "render-de29619f",
              as: "span"
            }), "Building Sustainable Futures"]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-783570697 text-4xl md:text-6xl font-bold tracking-tight",
            renderId: "render-98df8811",
            as: "h1",
            children: "Finance & Investment"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-783570697 mt-3 md:mt-4 text-white/80 md:text-lg",
            renderId: "render-84683893",
            as: "p",
            children: "Ethical investments that fuel ministry, education, and humanitarian impact."
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-783570697 mt-5 flex flex-wrap items-center justify-center gap-2",
            renderId: "render-eacd527b",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "#philosophy",
              className: "jsx-783570697 action-chip",
              renderId: "render-c613690b",
              as: "a",
              children: [/* @__PURE__ */ jsx(ShieldCheck, {
                className: "w-4 h-4"
              }), " Philosophy"]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "#erdgeify",
              className: "jsx-783570697 action-chip",
              renderId: "render-4ff4f147",
              as: "a",
              children: [/* @__PURE__ */ jsx(Globe, {
                className: "w-4 h-4"
              }), " Erdgeify"]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "#focus",
              className: "jsx-783570697 action-chip",
              renderId: "render-94c659e9",
              as: "a",
              children: [/* @__PURE__ */ jsx(TrendingUp, {
                className: "w-4 h-4"
              }), " Focus Areas"]
            })]
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-783570697 px-6 -mt-10 md:-mt-12 relative z-10",
      renderId: "render-ef95610e",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-783570697 max-w-6xl mx-auto",
        renderId: "render-bae4bb5b",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-783570697 w-full backdrop-blur-xl bg-white/8 border border-white/15 rounded-2xl p-3 overflow-x-auto",
          renderId: "render-1428f9d5",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-783570697 flex gap-3 md:gap-4 min-w-max",
            renderId: "render-302283ea",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "/finance/erdgeify",
              className: "jsx-783570697 action-chip",
              renderId: "render-47f270b8",
              as: "a",
              children: [/* @__PURE__ */ jsx(Globe, {
                className: "w-4 h-4"
              }), " Portfolio"]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "#philosophy",
              className: "jsx-783570697 action-chip",
              renderId: "render-e008723f",
              as: "a",
              children: [/* @__PURE__ */ jsx(ShieldCheck, {
                className: "w-4 h-4"
              }), " Our Ethos"]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "/foundation",
              className: "jsx-783570697 action-chip",
              renderId: "render-67aa7bbc",
              as: "a",
              children: [/* @__PURE__ */ jsx(HandCoins, {
                className: "w-4 h-4"
              }), " Impact"]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "/news",
              className: "jsx-783570697 action-chip",
              renderId: "render-3cdb2c49",
              as: "a",
              children: [/* @__PURE__ */ jsx(Rocket, {
                className: "w-4 h-4"
              }), " Updates"]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "/messages",
              className: "jsx-783570697 action-chip",
              renderId: "render-44686beb",
              as: "a",
              children: [/* @__PURE__ */ jsx(ExternalLink, {
                className: "w-4 h-4"
              }), " Contact"]
            })]
          })
        })
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-783570697 py-12 md:py-16 px-6",
      renderId: "render-a5b54149",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-783570697 max-w-4xl mx-auto text-center rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 md:p-10",
        renderId: "render-e1de3a73",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-783570697 text-3xl md:text-4xl font-bold mb-4",
          renderId: "render-d7c9fc7b",
          as: "h2",
          children: "Strategic Investments for Kingdom Impact"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-783570697 text-white/85 leading-relaxed",
          renderId: "render-04f00b14",
          as: "p",
          children: "We steward resources with excellence. Each investment is screened for ethics, sustainability, and long-term value creation that supports our global mission."
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "erdgeify",
      className: "jsx-783570697 py-12 md:py-20 px-6",
      renderId: "render-6f339b44",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-783570697 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center",
        renderId: "render-81f7234e",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-783570697 order-2 md:order-1",
          renderId: "render-e1179d3a",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-783570697 relative h-96 rounded-2xl overflow-hidden shadow-2xl",
            renderId: "render-70ce5f38",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80",
              alt: "Global trade and international business skyline",
              className: "jsx-783570697 w-full h-full object-cover",
              renderId: "render-59a8efeb",
              as: "img"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 absolute inset-0 bg-black/20",
              renderId: "render-1ba0db40",
              as: "div"
            })]
          })
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-783570697 order-1 md:order-2",
          renderId: "render-58cc1e25",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-783570697 flex items-center gap-3 mb-4",
            renderId: "render-77a99369",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 w-12 h-12 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] rounded-2xl flex items-center justify-center shadow-md",
              renderId: "render-6b5ac57d",
              as: "div",
              children: /* @__PURE__ */ jsx(Globe, {
                className: "w-7 h-7 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 text-4xl font-bold",
              renderId: "render-e0f893b8",
              as: "h2",
              children: "Erdgeify"
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-783570697 text-white/85 leading-relaxed mb-6",
            renderId: "render-84a1d296",
            as: "p",
            children: "Erdgeify is our strategic holding company, guiding a select group of international businesses. We foster excellence within each portfolio, leverage synergies across the group, and deliver lasting value to partners and communities."
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "/finance/erdgeify",
            "aria-label": "Learn more about Erdgeify",
            className: "jsx-783570697 inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold px-6 py-3 rounded-full transition-all duration-200 ease-out hover:scale-105 active:scale-[0.98] shadow-lg hover:shadow-xl",
            renderId: "render-4bb52586",
            as: "a",
            children: ["Learn More ", /* @__PURE__ */ jsx(ArrowRight, {
              className: "w-5 h-5"
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "philosophy",
      className: "jsx-783570697 py-12 md:py-20 px-6",
      renderId: "render-47e12a27",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-783570697 max-w-7xl mx-auto",
        renderId: "render-80daae63",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-783570697 text-3xl md:text-4xl font-bold text-center mb-12",
          renderId: "render-eed96159",
          as: "h2",
          children: "Our Investment Philosophy"
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-783570697 grid md:grid-cols-3 gap-6 md:gap-8",
          renderId: "render-fa33b8b0",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-783570697 card-glass",
            renderId: "render-5715d4fb",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 icon-ring from-[#4FD1C5] to-[#38B2AC]",
              renderId: "render-4a0bf911",
              as: "div",
              children: /* @__PURE__ */ jsx(ShieldCheck, {
                className: "w-8 h-8 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 card-title",
              renderId: "render-b54b180f",
              as: "h3",
              children: "Ethics First"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 card-body",
              renderId: "render-f886b145",
              as: "p",
              children: "We align every decision with biblical principles—integrity, transparency, and stewardship."
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-783570697 card-glass",
            renderId: "render-18ce28e2",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 icon-ring from-[#F4D03F] to-[#C29C1A]",
              renderId: "render-a3afaa0d",
              as: "div",
              children: /* @__PURE__ */ jsx(TrendingUp, {
                className: "w-8 h-8 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 card-title",
              renderId: "render-5f037a01",
              as: "h3",
              children: "Sustainable Growth"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 card-body",
              renderId: "render-85f59e8a",
              as: "p",
              children: "We invest for compounding, long-term value—not short-term gains."
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-783570697 card-glass",
            renderId: "render-1f386493",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 icon-ring from-[#9F7AEA] to-[#805AD5]",
              renderId: "render-65dee880",
              as: "div",
              children: /* @__PURE__ */ jsx(HandCoins, {
                className: "w-8 h-8 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 card-title",
              renderId: "render-5868f794",
              as: "h3",
              children: "Kingdom Impact"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 card-body",
              renderId: "render-fbbfed6c",
              as: "p",
              children: "Returns are reinvested into ministry, education, and humanitarian work worldwide."
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "focus",
      className: "jsx-783570697 py-8 md:py-14 px-6",
      renderId: "render-0548f22a",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-783570697 max-w-7xl mx-auto",
        renderId: "render-4e6afe77",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-783570697 flex items-center justify-between mb-6",
          renderId: "render-cdb192ee",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-783570697 text-2xl md:text-3xl font-bold",
            renderId: "render-340cef77",
            as: "h3",
            children: "Focus Areas"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            href: "/finance/erdgeify",
            className: "jsx-783570697 text-amber-300/90 hover:text-amber-200 text-sm",
            renderId: "render-2fff7a44",
            as: "a",
            children: "Explore portfolio →"
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-783570697 grid md:grid-cols-4 gap-4 md:gap-6",
          renderId: "render-a39ad300",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-783570697 tile-glass",
            renderId: "render-a55c3832",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 tile-icon from-[#60A5FA] to-[#3B82F6]",
              renderId: "render-b2f6dca8",
              as: "div",
              children: /* @__PURE__ */ jsx(LineChart$1, {
                className: "w-7 h-7 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 tile-title",
              renderId: "render-5cf3256b",
              as: "div",
              children: "Financial Services"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 tile-sub",
              renderId: "render-bc3be1bf",
              as: "div",
              children: "Advisory, risk, fintech"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-783570697 tile-glass",
            renderId: "render-57ea8856",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 tile-icon from-[#34D399] to-[#059669]",
              renderId: "render-e58a76a1",
              as: "div",
              children: /* @__PURE__ */ jsx(Factory, {
                className: "w-7 h-7 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 tile-title",
              renderId: "render-258f3911",
              as: "div",
              children: "Trade & Logistics"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 tile-sub",
              renderId: "render-4b1e629c",
              as: "div",
              children: "Commerce, supply chains"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-783570697 tile-glass",
            renderId: "render-9a3bfdf0",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 tile-icon from-[#FB7185] to-[#F43F5E]",
              renderId: "render-85f61556",
              as: "div",
              children: /* @__PURE__ */ jsx(Building2, {
                className: "w-7 h-7 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 tile-title",
              renderId: "render-53e58145",
              as: "div",
              children: "Real Assets"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 tile-sub",
              renderId: "render-65f1a2ce",
              as: "div",
              children: "Property, infrastructure"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-783570697 tile-glass",
            renderId: "render-533d2fa9",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 tile-icon from-[#F4D03F] to-[#C29C1A]",
              renderId: "render-d2617438",
              as: "div",
              children: /* @__PURE__ */ jsx(Rocket, {
                className: "w-7 h-7 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 tile-title",
              renderId: "render-89bb1c23",
              as: "div",
              children: "Venture"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-783570697 tile-sub",
              renderId: "render-82e2450c",
              as: "div",
              children: "Innovation & growth"
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-783570697 py-10 md:py-16 px-6",
      renderId: "render-00befb89",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-783570697 max-w-6xl mx-auto rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 md:p-10 text-center",
        renderId: "render-286291af",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-783570697 text-2xl md:text-3xl font-bold",
          renderId: "render-bdb623bc",
          as: "h3",
          children: "Partner With Us"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-783570697 text-white/85 mt-2 max-w-2xl mx-auto",
          renderId: "render-28b4cd8d",
          as: "p",
          children: "Interested in collaborating or learning more about our portfolio? We’d love to connect."
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-783570697 mt-5 flex items-center justify-center gap-3",
          renderId: "render-19d03e8c",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "/messages",
            className: "jsx-783570697 action-chip",
            renderId: "render-f1861046",
            as: "a",
            children: [/* @__PURE__ */ jsx(ExternalLink, {
              className: "w-4 h-4"
            }), " Contact Us"]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "/foundation",
            className: "jsx-783570697 action-chip",
            renderId: "render-576b1b80",
            as: "a",
            children: [/* @__PURE__ */ jsx(HandCoins, {
              className: "w-4 h-4"
            }), " See Our Impact"]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {}), /* @__PURE__ */ jsx(_JSXStyle, {
      id: "783570697",
      children: ["@-webkit-keyframes slideUpSoft{0%{opacity:0;-webkit-transform:translateY(22px) scale(0.98);-ms-transform:translateY(22px) scale(0.98);transform:translateY(22px) scale(0.98);-webkit-filter:blur(6px);filter:blur(6px);}60%{opacity:1;-webkit-transform:translateY(-2px) scale(1);-ms-transform:translateY(-2px) scale(1);transform:translateY(-2px) scale(1);-webkit-filter:blur(0);filter:blur(0);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@keyframes slideUpSoft{0%{opacity:0;-webkit-transform:translateY(22px) scale(0.98);-ms-transform:translateY(22px) scale(0.98);transform:translateY(22px) scale(0.98);-webkit-filter:blur(6px);filter:blur(6px);}60%{opacity:1;-webkit-transform:translateY(-2px) scale(1);-ms-transform:translateY(-2px) scale(1);transform:translateY(-2px) scale(1);-webkit-filter:blur(0);filter:blur(0);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@-webkit-keyframes sheen{0%{-webkit-transform:translateX(-40%);-ms-transform:translateX(-40%);transform:translateX(-40%);opacity:0;}40%{opacity:0.9;}100%{-webkit-transform:translateX(40%);-ms-transform:translateX(40%);transform:translateX(40%);opacity:0;}}", "@keyframes sheen{0%{-webkit-transform:translateX(-40%);-ms-transform:translateX(-40%);transform:translateX(-40%);opacity:0;}40%{opacity:0.9;}100%{-webkit-transform:translateX(40%);-ms-transform:translateX(40%);transform:translateX(40%);opacity:0;}}", ".animate-sheen{-webkit-animation:sheen 2.8s ease-in-out infinite;animation:sheen 2.8s ease-in-out infinite;}", ".action-chip{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-weight:500;color:white;padding:10px 14px;border-radius:9999px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.08);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);-webkit-transition:all 200ms ease;transition:all 200ms ease;white-space:nowrap;}", ".action-chip:hover{background:rgba(255,255,255,0.12);-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}", ".card-glass{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.18);border-radius:18px;padding:22px;box-shadow:0 10px 30px rgba(0,0,0,0.25);}", ".icon-ring{width:64px;height:64px;border-radius:9999px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-image:linear-gradient(to bottom right,var(--tw-gradient-from),var(--tw-gradient-to));box-shadow:0 10px 30px rgba(0,0,0,0.25);margin-bottom:16px;position:relative;overflow:hidden;}", ".icon-ring::after{content:'';position:absolute;inset:-20%;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.35),transparent 40%);-webkit-animation:sheen 3.5s ease-in-out infinite;animation:sheen 3.5s ease-in-out infinite;}", ".card-title{font-size:1.25rem;font-weight:700;margin-bottom:8px;}", ".card-body{color:rgba(255,255,255,0.85);}", ".tile-glass{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.16);border-radius:16px;padding:16px;-webkit-transition:all 200ms ease;transition:all 200ms ease;}", ".tile-glass:hover{-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);box-shadow:0 20px 50px rgba(0,0,0,0.35);}", ".tile-icon{position:relative;width:56px;height:56px;border-radius:14px;margin-bottom:10px;overflow:hidden;background-image:linear-gradient(to bottom right,var(--tw-gradient-from),var(--tw-gradient-to));}", ".tile-icon::after{content:'';position:absolute;inset:-25%;background:radial-gradient(circle at 20% 20%,rgba(255,255,255,0.35),transparent 40%);-webkit-animation:sheen 3s ease-in-out infinite;animation:sheen 3s ease-in-out infinite;}", ".tile-title{font-weight:600;}", ".tile-sub{font-size:0.85rem;color:rgba(255,255,255,0.8);}", "@media (prefers-reduced-motion:reduce){.animate-sheen{-webkit-animation:none !important;animation:none !important;}.action-chip{-webkit-transform:none !important;-ms-transform:none !important;transform:none !important;}.tile-glass:hover{-webkit-transform:none !important;-ms-transform:none !important;transform:none !important;}}"]
    })]
  });
}

function WrappedPage$9(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(FinancePage, {
      ...props
    })
  });
}

const route33 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$9
}, Symbol.toStringTag, { value: 'Module' }));

function ErdgeifyDetailsPage() {
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "jsx-1243697094 min-h-screen bg-white dark:bg-[#121212]",
    renderId: "render-97c93592",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "jsx-1243697094 relative w-full h-[420px]",
      renderId: "render-09cd4d4f",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?w=1920&q=80",
        alt: "Global business skyline",
        className: "jsx-1243697094 w-full h-full object-cover",
        renderId: "render-cd8aa980",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-1243697094 absolute inset-0 bg-black/60 flex items-center",
        renderId: "render-1888290f",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1243697094 max-w-6xl mx-auto px-6 w-full",
          renderId: "render-02e57b9c",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            style: {
              animation: "fadeUp 700ms ease-out both"
            },
            className: "jsx-1243697094 flex items-center gap-4 mb-3",
            renderId: "render-71282838",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 w-14 h-14 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] rounded-2xl flex items-center justify-center shadow-lg",
              renderId: "render-72e19e84",
              as: "div",
              children: /* @__PURE__ */ jsx(Globe, {
                className: "w-8 h-8 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-4xl md:text-6xl font-bold text-white",
              renderId: "render-4e9d99ff",
              as: "h1",
              children: "Erdgeify"
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            style: {
              animation: "fadeUp 800ms ease-out both",
              animationDelay: "120ms"
            },
            className: "jsx-1243697094 text-white/85 text-lg md:text-xl max-w-3xl",
            renderId: "render-99d1129c",
            as: "p",
            children: "Strategic holding company empowering international businesses across trade, real estate, and human capacity building."
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-1243697094 py-16 px-6 bg-white dark:bg-[#121212]",
      renderId: "render-294e4a7d",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-1243697094 max-w-6xl mx-auto",
        renderId: "render-582e76a4",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1243697094 grid md:grid-cols-2 gap-12 items-center",
          renderId: "render-7b059c53",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1243697094",
            renderId: "render-47ab27da",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-3xl md:text-4xl font-bold text-black dark:text-white mb-4",
              renderId: "render-ed5c0a6d",
              as: "h2",
              children: "About Erdgeify"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-lg text-[#2B2B2B] dark:text-[#E0E0E0] leading-relaxed mb-6",
              renderId: "render-45962a84",
              as: "p",
              children: "Erdgeify oversees a select group of global enterprises, driving growth within each portfolio company while leveraging cross-company synergies. We focus on world-class execution and long-term value, partnering with leaders and institutions to unlock opportunities across markets."
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-1243697094 flex flex-wrap gap-3",
              renderId: "render-bed86afa",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "/contact",
                "aria-label": "Partner with Erdgeify",
                className: "jsx-1243697094 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg bg-gradient-to-r from-[#F4D03F] to-[#C29C1A]",
                renderId: "render-1c04e68c",
                as: "a",
                children: "Partner"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                href: "mailto:info@sbbcworldwide.org?subject=Erdgeify%20Inquiry",
                "aria-label": "Send an email to Erdgeify",
                className: "jsx-1243697094 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg bg-gradient-to-r from-[#F4D03F] to-[#C29C1A]",
                renderId: "render-99d6fc8d",
                as: "a",
                children: "Send a Mail"
              })]
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            style: {
              animation: "fadeUp 800ms ease-out both"
            },
            className: "jsx-1243697094 relative h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl",
            renderId: "render-2d7319d4",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              src: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1600&q=80",
              alt: "International business meeting",
              className: "jsx-1243697094 absolute inset-0 w-full h-full object-cover",
              renderId: "render-b5c8f299",
              as: "img"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 absolute inset-0 bg-gradient-to-t from-black/50 to-transparent",
              renderId: "render-bccd9ada",
              as: "div"
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-1243697094 py-20 px-6 bg-[#F8F8FA] dark:bg-[#171717]",
      renderId: "render-1f2a7202",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-1243697094 max-w-7xl mx-auto",
        renderId: "render-73fdd3cd",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1243697094 text-3xl md:text-4xl font-bold text-black dark:text-white text-center mb-12",
          renderId: "render-2b3dc194",
          as: "h3",
          children: "What We Do"
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1243697094 grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
          renderId: "render-79a89e45",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1243697094 bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-black/5 shadow-sm",
            renderId: "render-d5e6233e",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              style: {
                animation: "iconFloat 3.5s ease-in-out infinite"
              },
              className: "jsx-1243697094 w-14 h-14 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] rounded-2xl flex items-center justify-center shadow-md mb-4",
              renderId: "render-2544d887",
              as: "div",
              children: /* @__PURE__ */ jsx(BriefcaseBusiness, {
                className: "w-7 h-7 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-xl font-semibold text-black dark:text-white mb-2",
              renderId: "render-5c0cbb73",
              as: "h4",
              children: "Advisory & Strategy"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-[#2B2B2B] dark:text-[#CFCFCF]",
              renderId: "render-a13f6573",
              as: "p",
              children: "Executive counsel, market entry, and growth strategy for high-impact outcomes."
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1243697094 bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-black/5 shadow-sm",
            renderId: "render-e83401e2",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              style: {
                animation: "iconFloat 3.7s ease-in-out infinite",
                animationDelay: "120ms"
              },
              className: "jsx-1243697094 w-14 h-14 bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] rounded-2xl flex items-center justify-center shadow-md mb-4",
              renderId: "render-4cf9ad7a",
              as: "div",
              children: /* @__PURE__ */ jsx(Building2, {
                className: "w-7 h-7 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-xl font-semibold text-black dark:text-white mb-2",
              renderId: "render-69006fb9",
              as: "h4",
              children: "Real Estate"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-[#2B2B2B] dark:text-[#CFCFCF]",
              renderId: "render-e6dd2a55",
              as: "p",
              children: "Global property management and development with institutional standards."
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1243697094 bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-black/5 shadow-sm",
            renderId: "render-8db6bfe8",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              style: {
                animation: "iconFloat 3.9s ease-in-out infinite",
                animationDelay: "220ms"
              },
              className: "jsx-1243697094 w-14 h-14 bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] rounded-2xl flex items-center justify-center shadow-md mb-4",
              renderId: "render-c2e937da",
              as: "div",
              children: /* @__PURE__ */ jsx(LineChart$1, {
                className: "w-7 h-7 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-xl font-semibold text-black dark:text-white mb-2",
              renderId: "render-56e1ccd5",
              as: "h4",
              children: "Global Trade"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-[#2B2B2B] dark:text-[#CFCFCF]",
              renderId: "render-dfac94c2",
              as: "p",
              children: "International sourcing and distribution of premium building materials."
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1243697094 bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-black/5 shadow-sm",
            renderId: "render-6c085b9d",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              style: {
                animation: "iconFloat 4.1s ease-in-out infinite",
                animationDelay: "320ms"
              },
              className: "jsx-1243697094 w-14 h-14 bg-gradient-to-br from-[#F56565] to-[#E53E3E] rounded-2xl flex items-center justify-center shadow-md mb-4",
              renderId: "render-ff99c7a1",
              as: "div",
              children: /* @__PURE__ */ jsx(Banknote, {
                className: "w-7 h-7 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-xl font-semibold text-black dark:text-white mb-2",
              renderId: "render-a339fbce",
              as: "h4",
              children: "Capital & Banking"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-[#2B2B2B] dark:text-[#CFCFCF]",
              renderId: "render-016f2d3a",
              as: "p",
              children: "Structured finance, partnerships, and bank-grade governance support."
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1243697094 bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-black/5 shadow-sm",
            renderId: "render-f3874bf5",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              style: {
                animation: "iconFloat 3.5s ease-in-out infinite"
              },
              className: "jsx-1243697094 w-14 h-14 bg-gradient-to-br from-[#48BB78] to-[#38A169] rounded-2xl flex items-center justify-center shadow-md mb-4",
              renderId: "render-33b62e9e",
              as: "div",
              children: /* @__PURE__ */ jsx(Users, {
                className: "w-7 h-7 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-xl font-semibold text-black dark:text-white mb-2",
              renderId: "render-2e79e430",
              as: "h4",
              children: "Human Capacity"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-[#2B2B2B] dark:text-[#CFCFCF]",
              renderId: "render-1f58bdc2",
              as: "p",
              children: "Training and coaching designed to upskill teams and leaders."
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1243697094 bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-black/5 shadow-sm",
            renderId: "render-21800407",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              style: {
                animation: "iconFloat 3.8s ease-in-out infinite"
              },
              className: "jsx-1243697094 w-14 h-14 bg-gradient-to-br from-[#667EEA] to-[#764BA2] rounded-2xl flex items-center justify-center shadow-md mb-4",
              renderId: "render-8eec8922",
              as: "div",
              children: /* @__PURE__ */ jsx(ShieldCheck, {
                className: "w-7 h-7 text-white"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-xl font-semibold text-black dark:text-white mb-2",
              renderId: "render-450c01c5",
              as: "h4",
              children: "Governance"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1243697094 text-[#2B2B2B] dark:text-[#CFCFCF]",
              renderId: "render-235b2f3b",
              as: "p",
              children: "Risk management, compliance, and operational excellence."
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1243697094 sm:col-span-2 lg:col-span-2",
            renderId: "render-a65ae1c9",
            as: "div",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              style: {
                animation: "fadeUp 800ms ease-out both"
              },
              className: "jsx-1243697094 relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-2xl",
              renderId: "render-9929981d",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&q=80",
                alt: "Global logistics and international trade",
                className: "jsx-1243697094 absolute inset-0 w-full h-full object-cover",
                renderId: "render-806351e5",
                as: "img"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1243697094 absolute inset-0 bg-black/20",
                renderId: "render-d02ef1bd",
                as: "div"
              })]
            })
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-1243697094 py-16 px-6 bg-white dark:bg-[#121212]",
      renderId: "render-457016c7",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-1243697094 max-w-4xl mx-auto text-center",
        renderId: "render-9befee85",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1243697094 text-2xl md:text-3xl font-bold text-black dark:text-white mb-4",
          renderId: "render-bc961d5b",
          as: "h4",
          children: "Partner with Erdgeify"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1243697094 text-[#2B2B2B] dark:text-[#E0E0E0] mb-8",
          renderId: "render-69a63e24",
          as: "p",
          children: "Let’s build global value together. We welcome strategic partners, institutions, and talent."
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1243697094 flex flex-col sm:flex-row gap-3 justify-center",
          renderId: "render-1db560c1",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            href: "/contact",
            className: "jsx-1243697094 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg bg-gradient-to-r from-[#F4D03F] to-[#C29C1A]",
            renderId: "render-6a89f14a",
            as: "a",
            children: "Partner"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            href: "mailto:info@sbbcworldwide.org?subject=Erdgeify%20Partnership",
            className: "jsx-1243697094 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg bg-gradient-to-r from-[#F4D03F] to-[#C29C1A]",
            renderId: "render-f6a96997",
            as: "a",
            children: "Send a Mail"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {}), /* @__PURE__ */ jsx(_JSXStyle, {
      id: "1243697094",
      children: ["@-webkit-keyframes fadeUp{0%{opacity:0;-webkit-transform:translateY(14px);-ms-transform:translateY(14px);transform:translateY(14px);-webkit-filter:blur(4px);filter:blur(4px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-filter:blur(0);filter:blur(0);}}", "@keyframes fadeUp{0%{opacity:0;-webkit-transform:translateY(14px);-ms-transform:translateY(14px);transform:translateY(14px);-webkit-filter:blur(4px);filter:blur(4px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-filter:blur(0);filter:blur(0);}}", "@-webkit-keyframes iconFloat{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@keyframes iconFloat{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", '@media (prefers-reduced-motion:reduce){[style*="fadeUp"],[style*="iconFloat"]{-webkit-animation:none !important;animation:none !important;}}']
    })]
  });
}

function WrappedPage$8(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(ErdgeifyDetailsPage, {
      ...props
    })
  });
}

const route34 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$8
}, Symbol.toStringTag, { value: 'Module' }));

function FoundationPage() {
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "jsx-1675820283 min-h-screen bg-[#0C0C0C] text-white",
    renderId: "render-df394b8e",
    as: "div",
    children: [/* @__PURE__ */ jsx(SEOHead, {
      path: "/foundation"
    }), /* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "jsx-1675820283 pointer-events-none fixed inset-0 -z-10",
      renderId: "render-179fa84d",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-1675820283 absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-[#80C7FF] to-[#7C4DFF]",
        renderId: "render-fe8ebe05",
        as: "div"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-1675820283 absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-15 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A]",
        renderId: "render-5dff455b",
        as: "div"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-1675820283 absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-40 bg-gradient-to-t from-black/60 to-transparent",
        renderId: "render-cb04750d",
        as: "div"
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-1675820283 relative w-full",
      renderId: "render-3f1e734e",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-1675820283 relative w-full h-[380px] md:h-[520px] overflow-hidden",
        renderId: "render-15590f67",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=900&fit=crop&q=80",
          alt: "Lawson Foundation Hero",
          className: "jsx-1675820283 w-full h-full object-cover scale-105",
          renderId: "render-0b48a564",
          as: "img"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1675820283 absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/80",
          renderId: "render-ccaa32f0",
          as: "div"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1675820283 absolute inset-0 flex items-center justify-center px-6",
          renderId: "render-d9ab7baf",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1675820283 anim-fade-up w-full max-w-3xl rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md shadow-[0_10px_50px_rgba(0,0,0,0.35)] p-6 md:p-10 text-center",
            renderId: "render-cd7fd6ab",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] flex items-center justify-center shadow-lg",
              renderId: "render-c0e2eae7",
              as: "div",
              children: /* @__PURE__ */ jsx(Heart, {
                className: "w-9 h-9 text-black"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 text-4xl md:text-6xl font-bold tracking-tight",
              renderId: "render-d4d1a2cc",
              as: "h1",
              children: "Lawson Foundation"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 mt-3 md:mt-4 text-sm md:text-lg text-white/80 max-w-2xl mx-auto",
              renderId: "render-aa193cf6",
              as: "p",
              children: "Practical love for people. Relief, education, and hope — delivered with excellence."
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-1675820283 mt-6 flex flex-wrap items-center justify-center gap-3",
              renderId: "render-07bf5f37",
              as: "div",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                href: "https://paystack.com/pay/sbbcworldwide",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "jsx-1675820283 group inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]",
                renderId: "render-b05384a4",
                as: "a",
                children: ["Donate Now ", /* @__PURE__ */ jsx(ArrowRight, {
                  className: "w-4 h-4"
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                href: "#projects",
                className: "jsx-1675820283 inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/10 border border-white/15 hover:bg-white/15 transition-all",
                renderId: "render-7a4e7546",
                as: "a",
                children: [/* @__PURE__ */ jsx(Gift, {
                  className: "w-4 h-4"
                }), " Projects"]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                href: "#volunteer",
                className: "jsx-1675820283 inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/10 border border-white/15 hover:bg-white/15 transition-all",
                renderId: "render-e56b017e",
                as: "a",
                children: [/* @__PURE__ */ jsx(Users, {
                  className: "w-4 h-4"
                }), " Volunteer"]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                href: "#contact",
                className: "jsx-1675820283 inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/10 border border-white/15 hover:bg-white/15 transition-all",
                renderId: "render-9e15455a",
                as: "a",
                children: [/* @__PURE__ */ jsx(Share2, {
                  className: "w-4 h-4"
                }), " Contact"]
              })]
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-1675820283 relative z-10 -mt-10 md:-mt-12 px-6",
      renderId: "render-fd960ea6",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-1675820283 anim-fade-up max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4",
        renderId: "render-f527b872",
        as: "div",
        children: [{
          icon: /* @__PURE__ */ jsx(Sparkles, {
            className: "w-5 h-5"
          }),
          label: "People Helped",
          value: "25,000+"
        }, {
          icon: /* @__PURE__ */ jsx(Globe2, {
            className: "w-5 h-5"
          }),
          label: "Cities Reached",
          value: "40+"
        }, {
          icon: /* @__PURE__ */ jsx(Shield, {
            className: "w-5 h-5"
          }),
          label: "Active Projects",
          value: "18"
        }, {
          icon: /* @__PURE__ */ jsx(Users, {
            className: "w-5 h-5"
          }),
          label: "Volunteers",
          value: "1,200+"
        }].map((m, i) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1675820283 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-4 md:px-5 md:py-5 flex items-center gap-3 md:gap-4",
          renderId: "render-17a703f4",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1675820283 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/90",
            renderId: "render-9805b7cb",
            as: "div",
            children: m.icon
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1675820283",
            renderId: "render-23f844fd",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 text-xs md:text-sm text-white/70",
              renderId: "render-40a42927",
              as: "div",
              children: m.label
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 text-lg md:text-2xl font-semibold",
              renderId: "render-657cfe55",
              as: "div",
              children: m.value
            })]
          })]
        }, i))
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-1675820283 px-6 py-14 md:py-20",
      renderId: "render-594dc124",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-1675820283 max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-stretch",
        renderId: "render-ab76f4ad",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1675820283 anim-fade-up rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md",
          renderId: "render-7af0d788",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80",
            alt: "Serving the community",
            className: "jsx-1675820283 w-full h-64 md:h-[380px] object-cover",
            renderId: "render-f4d85fd2",
            as: "img"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1675820283 p-5 md:p-8",
            renderId: "render-a0814b64",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 text-2xl md:text-3xl font-semibold",
              renderId: "render-237eb89f",
              as: "h3",
              children: "Hope in Action"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 mt-3 text-white/80 text-sm md:text-base leading-relaxed",
              renderId: "render-9dc84f99",
              as: "p",
              children: "From rapid relief to long-term development, our teams deliver food, shelter, education support and medical aid with compassion and excellence."
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-1675820283 mt-5 flex flex-wrap gap-2",
              renderId: "render-fd2aca31",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1675820283 px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10",
                renderId: "render-94322762",
                as: "span",
                children: "Disaster relief"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1675820283 px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10",
                renderId: "render-6d4447ad",
                as: "span",
                children: "Education"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1675820283 px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10",
                renderId: "render-6f946b65",
                as: "span",
                children: "Healthcare"
              })]
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1675820283 anim-fade-up rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between",
          renderId: "render-06a8bb47",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1675820283",
            renderId: "render-56e2134c",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#80C7FF] to-[#7C4DFF] flex items-center justify-center shadow-md",
              renderId: "render-9d1edbb3",
              as: "div",
              children: /* @__PURE__ */ jsx(PlayCircle, {
                className: "w-7 h-7"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 mt-4 text-2xl md:text-3xl font-semibold",
              renderId: "render-32efe1be",
              as: "h3",
              children: "See the Difference"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 mt-3 text-white/80 text-sm md:text-base",
              renderId: "render-2e7778da",
              as: "p",
              children: "A quick look at recent outreach moments and milestones."
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "https://youtube.com/@SBBCWorldwide",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "jsx-1675820283 group mt-6 inline-flex items-center gap-2 self-start rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 hover:bg-white/15 transition-colors",
            renderId: "render-42c01b95",
            as: "a",
            children: ["Watch on YouTube", " ", /* @__PURE__ */ jsx(ArrowUpRight, {
              className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform"
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "projects",
      className: "jsx-1675820283 px-6 pb-14 md:pb-20",
      renderId: "render-722e0f54",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-1675820283 max-w-6xl mx-auto",
        renderId: "render-9e65e2f6",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1675820283 anim-fade-up flex items-center justify-between mb-6 md:mb-8",
          renderId: "render-95dc2476",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1675820283 text-2xl md:text-3xl font-bold",
            renderId: "render-ce74a078",
            as: "h2",
            children: "Key Initiatives"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "#donate",
            className: "jsx-1675820283 hidden md:inline-flex items-center gap-2 text-white/80 hover:text-white",
            renderId: "render-27ccaab9",
            as: "a",
            children: ["Support an initiative ", /* @__PURE__ */ jsx(ArrowRight, {
              className: "w-4 h-4"
            })]
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1675820283 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6",
          renderId: "render-5fa8dbca",
          as: "div",
          children: [{
            icon: /* @__PURE__ */ jsx(Building2, {
              className: "w-6 h-6"
            }),
            title: "Community Development",
            desc: "Clean water, shelter, and small business empowerment for lasting change."
          }, {
            icon: /* @__PURE__ */ jsx(Coins, {
              className: "w-6 h-6"
            }),
            title: "Education Support",
            desc: "Scholarships, school kits, and after‑school hubs for children and teens."
          }, {
            icon: /* @__PURE__ */ jsx(Shield, {
              className: "w-6 h-6"
            }),
            title: "Medical Outreach",
            desc: "Mobile clinics, screenings, and essential supplies in underserved areas."
          }, {
            icon: /* @__PURE__ */ jsx(Globe2, {
              className: "w-6 h-6"
            }),
            title: "Disaster Relief",
            desc: "Fast, coordinated response delivering food, blankets, and shelter."
          }, {
            icon: /* @__PURE__ */ jsx(Gift, {
              className: "w-6 h-6"
            }),
            title: "Family Care",
            desc: "Nutrition packs, counseling access, and safe activity spaces for kids."
          }, {
            icon: /* @__PURE__ */ jsx(Sparkles, {
              className: "w-6 h-6"
            }),
            title: "Skills & Purpose",
            desc: "Mentorship and training that unlocks confidence and opportunity."
          }].map((c, i) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1675820283 anim-fade-up rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6 hover:bg-white/10 transition-colors",
            renderId: "render-4d429e51",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4",
              renderId: "render-b9e8ee5d",
              as: "div",
              children: c.icon
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 text-lg md:text-xl font-semibold",
              renderId: "render-3c2892b2",
              as: "h3",
              children: c.title
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 mt-2 text-white/75 text-sm md:text-base",
              renderId: "render-5982be91",
              as: "p",
              children: c.desc
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 mt-4 text-xs text-white/60",
              renderId: "render-a0f65451",
              as: "div",
              children: "Learn more →"
            })]
          }, i))
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-1675820283 px-6 pb-14 md:pb-20",
      renderId: "render-0fb187d8",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-1675820283 max-w-6xl mx-auto",
        renderId: "render-00b5bdad",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1675820283 anim-fade-up text-2xl md:text-3xl font-bold mb-6 md:mb-8",
          renderId: "render-81d5221f",
          as: "h2",
          children: "Moments of Impact"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1675820283 grid md:grid-cols-3 gap-4 md:gap-6",
          renderId: "render-fedb0c4d",
          as: "div",
          children: [{
            src: "https://ucarecdn.com/ecbb44c6-aed9-4a8d-a36d-f5151fb16228/-/format/auto/",
            alt: "Food distribution"
          }, {
            src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000&q=80",
            alt: "Children learning"
          }, {
            src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&q=80",
            alt: "Community support"
          }].map((g, i) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1675820283 anim-fade-up relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md",
            renderId: "render-739e169d",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              src: g.src,
              alt: g.alt,
              className: "jsx-1675820283 w-full h-56 md:h-72 object-cover",
              renderId: "render-f057fb71",
              as: "img"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent",
              renderId: "render-c0259949",
              as: "div"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 absolute bottom-0 p-4 text-sm text-white/90",
              renderId: "render-e0d64ae3",
              as: "div",
              children: g.alt
            })]
          }, i))
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "donate",
      className: "jsx-1675820283 px-6 pb-14 md:pb-20",
      renderId: "render-05c1d7b0",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-1675820283 max-w-6xl mx-auto",
        renderId: "render-1c698af3",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1675820283 anim-fade-up text-center max-w-2xl mx-auto mb-6 md:mb-10",
          renderId: "render-66bd2ec8",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1675820283 text-2xl md:text-3xl font-bold",
            renderId: "render-49fc2358",
            as: "h2",
            children: "Fuel the Mission"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1675820283 mt-3 text-white/80",
            renderId: "render-600c0f6d",
            as: "p",
            children: "Choose a tier that matches your heart. Every gift moves help closer to people who need it."
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1675820283 grid md:grid-cols-3 gap-5 md:gap-6",
          renderId: "render-4d5cbe4c",
          as: "div",
          children: [{
            name: "Supporter",
            amount: "₦5,000",
            perks: ["Relief packs", "School kits"],
            badge: "from"
          }, {
            name: "Partner",
            amount: "₦25,000",
            perks: ["Clinic days", "Scholarships"],
            badge: "most popular"
          }, {
            name: "Champion",
            amount: "₦100,000",
            perks: ["Project funding", "Community hubs"],
            badge: "impact+"
          }].map((t, i) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1675820283 anim-fade-up rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col",
            renderId: "render-1fa36abb",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 text-xs uppercase tracking-wide text-white/60",
              renderId: "render-d461e4b6",
              as: "div",
              children: t.badge
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 mt-1 text-xl font-semibold",
              renderId: "render-8e9844d6",
              as: "div",
              children: t.name
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 mt-1 text-3xl font-bold",
              renderId: "render-a54f4b58",
              as: "div",
              children: t.amount
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 mt-4 space-y-1 text-white/80 text-sm",
              renderId: "render-194a099c",
              as: "ul",
              children: t.perks.map((p, j) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "jsx-1675820283 flex items-center gap-2",
                renderId: "render-a8928479",
                as: "li",
                children: [/* @__PURE__ */ jsx(Star, {
                  className: "w-4 h-4 text-[#F4D03F]"
                }), " ", p]
              }, j))
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "https://paystack.com/pay/sbbcworldwide",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "jsx-1675820283 mt-5 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",
              renderId: "render-ece8dc71",
              as: "a",
              children: ["Donate ", /* @__PURE__ */ jsx(ArrowRight, {
                className: "w-4 h-4"
              })]
            })]
          }, i))
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "volunteer",
      className: "jsx-1675820283 px-6 pb-14 md:pb-20",
      renderId: "render-41fc4b0d",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-1675820283 max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-center",
        renderId: "render-ad297fe5",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1675820283 anim-fade-up rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8",
          renderId: "render-69a29bde",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1675820283 text-2xl md:text-3xl font-semibold",
            renderId: "render-e5454ece",
            as: "h3",
            children: "Join the Volunteer Network"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1675820283 mt-3 text-white/80 text-sm md:text-base",
            renderId: "render-ca14e7ae",
            as: "p",
            children: "Lend your time, skills, and heart. We train and deploy volunteers for safe, effective outreach."
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "mailto:info@sbbcworldwide.org?subject=Volunteer%20with%20Lawson%20Foundation",
            className: "jsx-1675820283 mt-5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 hover:bg-white/15 transition-colors",
            renderId: "render-23950908",
            as: "a",
            children: [/* @__PURE__ */ jsx(Users, {
              className: "w-4 h-4"
            }), " I want to help"]
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1675820283 anim-fade-up rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md",
          renderId: "render-be745288",
          as: "div",
          children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
            alt: "Volunteer efforts",
            className: "jsx-1675820283 w-full h-56 md:h-80 object-cover",
            renderId: "render-73de6b27",
            as: "img"
          })
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "contact",
      className: "jsx-1675820283 px-6 pb-20",
      renderId: "render-2fece84c",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-1675820283 max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8",
        renderId: "render-bf9998bf",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1675820283 grid md:grid-cols-3 gap-6",
          renderId: "render-7882d1cb",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "tel:+2347064200926",
            className: "jsx-1675820283 group flex items-center gap-3",
            renderId: "render-4bdee559",
            as: "a",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center",
              renderId: "render-20c4ad66",
              as: "div",
              children: /* @__PURE__ */ jsx(Phone, {
                className: "w-5 h-5"
              })
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-1675820283",
              renderId: "render-4952cf26",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1675820283 text-sm text-white/70",
                renderId: "render-d18cedc8",
                as: "div",
                children: "Call"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1675820283 font-medium group-hover:underline",
                renderId: "render-a6f4cf50",
                as: "div",
                children: "+234 706 420 0926"
              })]
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "mailto:info@sbbcworldwide.org",
            className: "jsx-1675820283 group flex items-center gap-3",
            renderId: "render-8e4c98da",
            as: "a",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center",
              renderId: "render-49021ba4",
              as: "div",
              children: /* @__PURE__ */ jsx(Mail, {
                className: "w-5 h-5"
              })
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-1675820283",
              renderId: "render-8a5368cd",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1675820283 text-sm text-white/70",
                renderId: "render-6aca6fe5",
                as: "div",
                children: "Email"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1675820283 font-medium group-hover:underline",
                renderId: "render-982844f0",
                as: "div",
                children: "info@sbbcworldwide.org"
              })]
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1675820283 flex items-center gap-3",
            renderId: "render-d9fff53c",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1675820283 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center",
              renderId: "render-f06c7009",
              as: "div",
              children: /* @__PURE__ */ jsx(MapPin, {
                className: "w-5 h-5"
              })
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-1675820283",
              renderId: "render-3423efcd",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1675820283 text-sm text-white/70",
                renderId: "render-7cefe404",
                as: "div",
                children: "Location"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1675820283 font-medium",
                renderId: "render-701e937d",
                as: "div",
                children: "Worldwide Operations"
              })]
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {}), /* @__PURE__ */ jsx(_JSXStyle, {
      id: "1675820283",
      children: ["@-webkit-keyframes fadeUp{0%{opacity:0;-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@keyframes fadeUp{0%{opacity:0;-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", ".anim-fade-up{-webkit-animation:fadeUp 600ms ease-out both;animation:fadeUp 600ms ease-out both;}"]
    })]
  });
}

function WrappedPage$7(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(FoundationPage, {
      ...props
    })
  });
}

const route35 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$7
}, Symbol.toStringTag, { value: 'Module' }));

function JoinPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const mutation = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/discipleship", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        let message = `When fetching /api/discipleship, the response was [${res.status}] ${res.statusText}`;
        try {
          const j = await res.json();
          if (j?.error) message = j.error;
        } catch {
        }
        throw new Error(message);
      }
      return res.json();
    },
    onSuccess: () => {
      setSuccess(true);
      setError(null);
      toast.success("Thank you! We'll be in touch soon.");
      setFullName("");
      setEmail("");
      setPhone("");
    },
    onError: (e) => {
      console.error(e);
      setError(e.message || "Something went wrong");
      toast.error("Could not submit. Please try again.");
    }
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    const payload = {
      full_name: fullName,
      email,
      phone
    };
    mutation.mutate(payload);
  };
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white",
    renderId: "render-fc8dc907",
    as: "div",
    children: [/* @__PURE__ */ jsx(SEOHead, {
      path: "/join",
      title: "Join Us | SBBC Worldwide",
      description: "Share your details to connect with SBBC. We'd love to welcome you."
    }), /* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "pt-28 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden",
      renderId: "render-261b1d98",
      as: "section",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "absolute inset-0 opacity-20 pointer-events-none",
        "aria-hidden": true,
        renderId: "render-58cd26de",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-[#F4D03F] to-[#C29C1A]",
          renderId: "render-c6dcc8da",
          as: "div"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "absolute -bottom-20 -right-10 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-[#C29C1A] to-[#F4D03F]",
          renderId: "render-99bcc307",
          as: "div"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "relative max-w-3xl mx-auto",
        renderId: "render-e6849513",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "text-center text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight",
          renderId: "render-e6f92566",
          as: "h1",
          children: ["Join", " ", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] to-[#C29C1A]",
            renderId: "render-ed54350c",
            as: "span",
            children: "SBBC"
          })]
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-center text-white/80 mb-10 max-w-2xl mx-auto",
          renderId: "render-86aca60e",
          as: "p",
          children: "We’d love to welcome you. Share your details and our team will reach out."
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          onSubmit,
          className: "bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 md:p-8 shadow-2xl",
          noValidate: true,
          renderId: "render-36e222a2",
          as: "form",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "grid grid-cols-1 gap-5",
            renderId: "render-f8f3f652",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-497cd3b3",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "block text-sm text-white/80 mb-2",
                htmlFor: "full_name",
                renderId: "render-ec4ec3bc",
                as: "label",
                children: "Full Name"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                id: "full_name",
                name: "full_name",
                type: "text",
                required: true,
                value: fullName,
                onChange: (e) => setFullName(e.target.value),
                placeholder: "e.g. Sarah Johnson",
                className: "w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                renderId: "render-caf8ebe0",
                as: "input"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-841fa856",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "block text-sm text-white/80 mb-2",
                htmlFor: "email",
                renderId: "render-9cbccc78",
                as: "label",
                children: "Email"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                id: "email",
                name: "email",
                type: "email",
                required: true,
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "you@example.com",
                className: "w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                renderId: "render-5020d223",
                as: "input"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-1f880cba",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "block text-sm text-white/80 mb-2",
                htmlFor: "phone",
                renderId: "render-ee1d6fc9",
                as: "label",
                children: "Phone"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                id: "phone",
                name: "phone",
                type: "tel",
                required: true,
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                placeholder: "e.g. +234 706 420 0926",
                className: "w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                renderId: "render-df4bf2a6",
                as: "input"
              })]
            }), error ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-red-300 bg-red-900/20 border border-red-400/30 rounded-xl px-4 py-3",
              renderId: "render-dfbbbb15",
              as: "div",
              children: error
            }) : null, success ? /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "flex items-center gap-2 text-green-300 bg-green-900/20 border border-green-400/30 rounded-xl px-4 py-3",
              renderId: "render-0815ecb1",
              as: "div",
              children: [/* @__PURE__ */ jsx(CheckCircle2, {
                className: "w-5 h-5"
              }), "Thank you! Your details were submitted."]
            }) : null, /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "pt-2",
              renderId: "render-59f196ce",
              as: "div",
              children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                type: "submit",
                disabled: mutation.isLoading,
                className: "w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full text-black font-bold bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] shadow-[0_8px_24px_rgba(194,156,26,0.45)] hover:shadow-[0_12px_28px_rgba(194,156,26,0.6)] transition-all disabled:opacity-60 disabled:cursor-not-allowed",
                renderId: "render-38d6d3b2",
                as: "button",
                children: [mutation.isLoading ? "Submitting..." : "Submit", /* @__PURE__ */ jsx(ArrowRight, {
                  className: "w-5 h-5"
                })]
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-xs text-white/60 text-center",
              renderId: "render-82c15498",
              as: "p",
              children: "We respect your privacy. Your information will only be used by SBBC to follow up with you."
            })]
          })
        })]
      })]
    }), /* @__PURE__ */ jsx(ChurchFooter, {})]
  });
}

function WrappedPage$6(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(JoinPage, {
      ...props
    })
  });
}

const route36 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$6
}, Symbol.toStringTag, { value: 'Module' }));

function MessagesPage() {
  const YT_CHANNEL_ID = process.env.NEXT_PUBLIC_YT_CHANNEL_ID || "REPLACE_WITH_YOUR_CHANNEL_ID";
  const youtubeChannelUrl = "https://youtube.com/@sbbcworldwide";
  const fallbackVideoId = "dyiZYGb_4iU";
  const {
    data,
    error
  } = useQuery({
    queryKey: ["latest-youtube-upload", YT_CHANNEL_ID],
    enabled: !YT_CHANNEL_ID.includes("REPLACE"),
    queryFn: async () => {
      const res = await fetch(`/api/youtube/latest?channelId=${encodeURIComponent(YT_CHANNEL_ID)}`);
      if (!res.ok) {
        throw new Error(`When fetching /api/youtube/latest, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    },
    staleTime: 1e3 * 60 * 5
  });
  const featuredVideoId = data?.videoId || fallbackVideoId;
  const showChannelHint = YT_CHANNEL_ID.includes("REPLACE");
  const hasError = Boolean(error);
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white",
    style: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
    },
    renderId: "render-887ca415",
    as: "div",
    children: [/* @__PURE__ */ jsx(SEOHead, {
      path: "/messages"
    }), /* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "pt-24 pb-6 px-6 bg-white",
      "aria-label": "Watch Messages header",
      renderId: "render-4b62af4a",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto",
        renderId: "render-12e63758",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl md:text-4xl font-bold text-black mb-2",
          renderId: "render-63b9e543",
          as: "h1",
          children: "Watch Messages"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-black/70",
          renderId: "render-61513b89",
          as: "p",
          children: "Catch up on recent sermons and teachings."
        }), hasError ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-2 text-sm text-red-600",
          renderId: "render-7c8d5c5c",
          as: "p",
          children: "Couldn’t load the latest video right now. Showing a recent message instead."
        }) : null, showChannelHint ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "mt-2 text-sm text-black/60",
          renderId: "render-1451c859",
          as: "p",
          children: "To always show your newest upload, share your YouTube Channel ID and I’ll plug it in."
        }) : null]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "relative w-full h-screen overflow-hidden bg-black",
      "data-animate": true,
      "aria-label": "Featured Message Video",
      renderId: "render-ac9c4fe9",
      as: "section",
      children: /* @__PURE__ */ jsx("iframe", {
        src: `https://www.youtube.com/embed/${featuredVideoId}?enablejsapi=1&modestbranding=1&rel=0&playsinline=1`,
        title: "YouTube video player",
        frameBorder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowFullScreen: true,
        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        style: {
          width: "177.78vh",
          // 16:9 cover sizing based on viewport height
          height: "100vh"
        }
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "py-6 px-6 bg-[#F5F5F7]",
      renderId: "render-07ea0a32",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "max-w-6xl mx-auto",
        renderId: "render-492d11c7",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "flex",
          renderId: "render-17d2be69",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: youtubeChannelUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-md hover:shadow-lg",
            renderId: "render-d5c3766a",
            as: "a",
            children: ["Visit YouTube Channel", /* @__PURE__ */ jsx(ArrowRight, {
              className: "w-5 h-5"
            })]
          })
        })
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {})]
  });
}

function WrappedPage$5(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(MessagesPage, {
      ...props
    })
  });
}

const route37 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$5
}, Symbol.toStringTag, { value: 'Module' }));

function NewsPage() {
  const defaultChannelId = process.env.NEXT_PUBLIC_YT_CHANNEL_ID || "";
  const [channelId, setChannelId] = useState(defaultChannelId);
  const [liveVideoId, setLiveVideoId] = useState(process.env.NEXT_PUBLIC_YT_LIVE_VIDEO_ID || "");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const qChannel = params.get("channelId");
    const qVideo = params.get("videoId");
    if (qChannel) setChannelId(qChannel);
    if (qVideo) setLiveVideoId(qVideo);
  }, []);
  const {
    data: latest,
    isLoading: isLoadingLatest,
    error: latestError
  } = useQuery({
    queryKey: ["youtube-latest", channelId],
    queryFn: async () => {
      if (!channelId) return null;
      const res = await fetch(`/api/youtube/latest?channelId=${encodeURIComponent(channelId)}`);
      if (!res.ok) {
        throw new Error(`When fetching /api/youtube/latest, the response was [${res.status}] ${res.statusText}`);
      }
      return res.json();
    },
    enabled: !!channelId,
    staleTime: 1e3 * 60
    // 1 minute
  });
  const {
    data: posts = [],
    isLoading: isLoadingPosts,
    error: postsError
  } = useQuery({
    queryKey: ["blog-posts", "all"],
    queryFn: async () => {
      const response = await fetch("/api/blog-posts");
      if (!response.ok) {
        throw new Error(`When fetching /api/blog-posts, the response was [${response.status}] ${response.statusText}`);
      }
      return response.json();
    },
    staleTime: 1e3 * 30
  });
  const watchUrl = useMemo(() => {
    if (liveVideoId) {
      return `https://www.youtube.com/watch?v=${liveVideoId}`;
    }
    if (channelId) {
      return `https://www.youtube.com/channel/${channelId}/live`;
    }
    if (latest && latest.videoId) {
      return `https://www.youtube.com/watch?v=${latest.videoId}`;
    }
    return "https://www.youtube.com";
  }, [channelId, liveVideoId, latest]);
  const [chatUrl, setChatUrl] = useState(null);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!liveVideoId) return;
    if (typeof window === "undefined") return;
    const domain = window.location.hostname;
    const url = `https://www.youtube.com/live_chat?v=${liveVideoId}&embed_domain=${domain}`;
    setChatUrl(url);
  }, [liveVideoId]);
  const handleCopyLink = async () => {
    try {
      const link = typeof window !== "undefined" ? window.location.href : watchUrl;
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "jsx-908589411 min-h-screen bg-white",
    renderId: "render-18959ecb",
    as: "div",
    children: [/* @__PURE__ */ jsx(SEOHead, {
      path: "/news"
    }), /* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "jsx-908589411 relative pt-24 pb-10 md:pb-14 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden",
      renderId: "render-3bdfdc83",
      as: "section",
      children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-908589411 pointer-events-none absolute inset-0",
        renderId: "render-3bcaf522",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-908589411 absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#F4D03F]/25 to-[#C29C1A]/10 blur-3xl",
          renderId: "render-591829ab",
          as: "div"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-908589411 absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-gradient-to-tl from-sky-400/10 to-indigo-500/10 blur-3xl",
          renderId: "render-2dfe1297",
          as: "div"
        })]
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-908589411 relative max-w-7xl mx-auto",
        renderId: "render-25deecd7",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-908589411 mx-auto w-fit mb-6",
          renderId: "render-62193085",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            style: {
              background: "rgba(255,255,255,0.06)",
              borderColor: "rgba(255,255,255,0.16)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)"
            },
            className: "jsx-908589411 flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm",
            renderId: "render-e3d152ff",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-908589411 w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse",
              renderId: "render-5bba8cd9",
              as: "div"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-908589411 text-sm font-medium text-white/90",
              renderId: "render-df01b998",
              as: "span",
              children: liveVideoId ? "Live now" : "Live stream"
            })]
          })
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          style: {
            background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.06))",
            borderColor: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)"
          },
          className: "jsx-908589411 max-w-4xl mx-auto text-center rounded-3xl p-8 md:p-10 border shadow-2xl mb-6",
          renderId: "render-fd143664",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-908589411 text-4xl md:text-6xl font-bold text-white tracking-tight mb-4",
            renderId: "render-2f636369",
            as: "h1",
            children: ["Stream", " ", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-908589411 text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] to-[#C29C1A]",
              renderId: "render-bc96030b",
              as: "span",
              children: "Live"
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-908589411 text-lg md:text-xl text-white/80 leading-relaxed",
            renderId: "render-d47bbf2b",
            as: "p",
            children: "Join us for worship, teaching, and fellowship from anywhere in the world."
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-908589411 flex flex-wrap items-center justify-center gap-6 mb-8",
          renderId: "render-8dc419b7",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-908589411 flex items-center gap-2 text-white/80",
            renderId: "render-35e43b16",
            as: "div",
            children: [/* @__PURE__ */ jsx(Users, {
              className: "w-5 h-5"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-908589411 text-sm",
              renderId: "render-b94ff027",
              as: "span",
              children: "Live congregation"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-908589411 flex items-center gap-2 text-white/80",
            renderId: "render-8aa2e93d",
            as: "div",
            children: [/* @__PURE__ */ jsx(Clock, {
              className: "w-5 h-5"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-908589411 text-sm",
              renderId: "render-6fdccaca",
              as: "span",
              children: "Sundays 10:00 AM"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-908589411 flex items-center gap-2 text-white/80",
            renderId: "render-c47452da",
            as: "div",
            children: [/* @__PURE__ */ jsx(Play, {
              className: "w-5 h-5"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-908589411 text-sm",
              renderId: "render-7904ce3a",
              as: "span",
              children: "HD quality"
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-908589411 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4",
          renderId: "render-8cf9f842",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: watchUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              background: "linear-gradient(90deg, #F4D03F, #C29C1A)",
              color: "#0b0b0b"
            },
            "aria-label": "Watch on YouTube",
            className: "jsx-908589411 group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-[1.03]",
            renderId: "render-13e58e4c",
            as: "a",
            children: [/* @__PURE__ */ jsx(Play, {
              className: "w-5 h-5"
            }), " Watch on YouTube"]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            onClick: handleCopyLink,
            style: {
              background: "rgba(255,255,255,0.08)",
              borderColor: "rgba(255,255,255,0.20)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              color: "#fff"
            },
            "aria-label": "Copy page link",
            className: "jsx-908589411 inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all",
            renderId: "render-793ae3ed",
            as: "button",
            children: [/* @__PURE__ */ jsx(Copy, {
              className: "w-4 h-4"
            }), " ", copied ? "Copied!" : "Copy link"]
          }), channelId ? /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(watchUrl)}`,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              background: "rgba(255,255,255,0.08)",
              borderColor: "rgba(255,255,255,0.20)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              color: "#fff"
            },
            "aria-label": "Share on Facebook",
            className: "jsx-908589411 inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all",
            renderId: "render-e6795693",
            as: "a",
            children: [/* @__PURE__ */ jsx(Share2, {
              className: "w-4 h-4"
            }), " Share"]
          }) : null, /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            href: "https://paystack.com/pay/sbbcworldwide",
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              background: "rgba(255,255,255,0.08)",
              borderColor: "rgba(255,255,255,0.20)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              color: "#fff"
            },
            "aria-label": "Give online",
            className: "jsx-908589411 inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all",
            renderId: "render-001e699f",
            as: "a",
            children: [/* @__PURE__ */ jsx(Heart, {
              className: "w-4 h-4"
            }), " Give"]
          })]
        }), !channelId && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-908589411 mt-6 text-white/70 text-sm max-w-2xl mx-auto text-center",
          renderId: "render-bc3ede68",
          as: "p",
          children: "To enable the live player, set NEXT_PUBLIC_YT_CHANNEL_ID in your settings, or add ?channelId=UC... to this page URL. Optionally add ?videoId= for live chat."
        })]
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "live",
      style: {
        background: "linear-gradient(180deg, #0c111a, #0f141d 40%, #0c111a)"
      },
      className: "jsx-908589411 py-14 px-6",
      renderId: "render-eb204014",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-908589411 max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-stretch",
        renderId: "render-140f775a",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          style: {
            background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))",
            borderColor: "rgba(255,255,255,0.14)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)"
          },
          className: "jsx-908589411 lg:col-span-2 rounded-3xl overflow-hidden border shadow-2xl",
          renderId: "render-77bca65f",
          as: "div",
          children: [channelId ? /* @__PURE__ */ jsx("iframe", {
            src: `https://www.youtube.com/embed/live_stream?channel=${channelId}&autoplay=1&mute=0&modestbranding=1&rel=0`,
            title: "YouTube Live Stream",
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowFullScreen: true,
            className: "jsx-908589411 w-full aspect-video"
          }) : /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-908589411 p-12 text-white text-center",
            renderId: "render-2991b9b5",
            as: "div",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-908589411 max-w-md mx-auto",
              renderId: "render-3b417543",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-908589411 w-20 h-20 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center border border-white/15",
                renderId: "render-79835a8c",
                as: "div",
                children: /* @__PURE__ */ jsx(Play, {
                  className: "w-8 h-8"
                })
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-908589411 text-2xl font-bold mb-3",
                renderId: "render-b222161b",
                as: "h3",
                children: "Live Stream Setup"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-908589411 text-white/80 mb-2",
                renderId: "render-3603dfe9",
                as: "p",
                children: "Add your YouTube Channel ID to show the live player."
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-908589411 text-white/60 text-sm",
                renderId: "render-568e3def",
                as: "p",
                children: "You can also test quickly by adding ?channelId=UC... to the URL."
              })]
            })
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            style: {
              borderColor: "rgba(255,255,255,0.10)"
            },
            className: "jsx-908589411 flex flex-wrap items-center gap-4 px-5 py-3 border-t",
            renderId: "render-b78c983d",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-908589411 inline-flex items-center gap-2 text-white/80 text-sm",
              renderId: "render-91b97d68",
              as: "span",
              children: [/* @__PURE__ */ jsx(Tv, {
                className: "w-4 h-4"
              }), " Best viewed on YouTube app"]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-908589411 inline-flex items-center gap-2 text-white/80 text-sm",
              renderId: "render-fb0c494a",
              as: "span",
              children: [/* @__PURE__ */ jsx(Radio, {
                className: "w-4 h-4"
              }), " Audio available"]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-908589411 inline-flex items-center gap-2 text-white/80 text-sm",
              renderId: "render-df799930",
              as: "span",
              children: [/* @__PURE__ */ jsx(Wifi, {
                className: "w-4 h-4"
              }), " Stable internet recommended"]
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-908589411 space-y-6",
          renderId: "render-e5197179",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            style: {
              background: "linear-gradient(180deg, rgba(255,255,255,0.70), rgba(255,255,255,0.85))",
              borderColor: "rgba(17,24,39,0.12)"
            },
            className: "jsx-908589411 rounded-3xl overflow-hidden border shadow-xl",
            renderId: "render-d3840ad4",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-908589411 p-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white",
              renderId: "render-3649d433",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-908589411 font-bold text-lg",
                renderId: "render-a2ed0ed7",
                as: "h3",
                children: "Live Chat"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-908589411 text-white/70 text-sm",
                renderId: "render-31aee9c6",
                as: "p",
                children: "Join the conversation"
              })]
            }), chatUrl ? /* @__PURE__ */ jsx("iframe", {
              src: chatUrl,
              title: "YouTube Live Chat",
              frameBorder: "0",
              className: "jsx-908589411 w-full h-[420px]"
            }) : /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-908589411 p-6 text-center bg-white/80",
              renderId: "render-33685a46",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-908589411 text-4xl mb-3",
                renderId: "render-9e6281a1",
                as: "div",
                children: "💬"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-908589411 font-semibold text-gray-800 mb-1",
                renderId: "render-e709e3b5",
                as: "p",
                children: "Chat unavailable"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-908589411 text-sm text-gray-600 mb-4",
                renderId: "render-66a734d0",
                as: "p",
                children: "Provide a live video ID via NEXT_PUBLIC_YT_LIVE_VIDEO_ID or add ?videoId= to the URL."
              }), channelId && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                href: watchUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "jsx-908589411 inline-flex items-center gap-2 text-[#C29C1A] hover:text-[#F4D03F] font-medium",
                renderId: "render-7229a5b8",
                as: "a",
                children: ["View on YouTube to chat ", /* @__PURE__ */ jsx(ArrowRight, {
                  className: "w-4 h-4"
                })]
              })]
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            style: {
              background: "linear-gradient(180deg, rgba(255,255,255,0.70), rgba(255,255,255,0.85))",
              borderColor: "rgba(17,24,39,0.12)"
            },
            className: "jsx-908589411 rounded-3xl p-6 border shadow-xl",
            renderId: "render-b68f7bbb",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-908589411 font-bold text-lg text-gray-900 mb-4",
              renderId: "render-8cb7f58e",
              as: "h3",
              children: "Service information"
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-908589411 space-y-3 text-gray-800",
              renderId: "render-a7aa5712",
              as: "div",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "jsx-908589411 flex justify-between",
                renderId: "render-6292b6a1",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-908589411 text-gray-600",
                  renderId: "render-2fc2a27a",
                  as: "span",
                  children: "Service time"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-908589411 font-medium",
                  renderId: "render-6c9519da",
                  as: "span",
                  children: "Sunday 10:00 AM"
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "jsx-908589411 flex justify-between",
                renderId: "render-788d0add",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-908589411 text-gray-600",
                  renderId: "render-0546df6e",
                  as: "span",
                  children: "Duration"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-908589411 font-medium",
                  renderId: "render-448aa8e4",
                  as: "span",
                  children: "~2 hours"
                })]
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "jsx-908589411 flex justify-between",
                renderId: "render-1327cb72",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-908589411 text-gray-600",
                  renderId: "render-3ca71516",
                  as: "span",
                  children: "Location"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-908589411 font-medium",
                  renderId: "render-c0153f11",
                  as: "span",
                  children: "Worldwide"
                })]
              })]
            })]
          }), channelId && !liveVideoId && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            style: {
              background: "linear-gradient(180deg, rgba(255,255,255,0.70), rgba(255,255,255,0.85))",
              borderColor: "rgba(17,24,39,0.12)"
            },
            className: "jsx-908589411 rounded-3xl p-6 border shadow-xl",
            renderId: "render-0da6d92e",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-908589411 font-bold text-lg text-gray-900 mb-2",
              renderId: "render-17c8f82a",
              as: "h3",
              children: "Latest upload"
            }), isLoadingLatest ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-908589411 text-gray-700",
              renderId: "render-5f7aa296",
              as: "p",
              children: "Loading latest video…"
            }) : latestError ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-908589411 text-red-600 text-sm",
              renderId: "render-7b3babfc",
              as: "p",
              children: String(latestError.message || latestError)
            }) : latest?.videoId ? /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: `https://www.youtube.com/watch?v=${latest.videoId}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "jsx-908589411 text-[#C29C1A] hover:text-[#F4D03F] font-medium",
              renderId: "render-74042e02",
              as: "a",
              children: ["Watch: ", latest.title || latest.videoId]
            }) : /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-908589411 text-gray-700",
              renderId: "render-1c8558f7",
              as: "p",
              children: "No recent uploads found."
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      id: "updates",
      className: "jsx-908589411 py-16 px-6 bg-white",
      renderId: "render-5625f603",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-908589411 max-w-7xl mx-auto",
        renderId: "render-248f8937",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-908589411 flex items-center justify-between mb-6",
          renderId: "render-9ccb4293",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-908589411 text-3xl md:text-4xl font-bold text-gray-900",
            renderId: "render-e9d3a45b",
            as: "h2",
            children: "All News & Updates"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            href: "#live",
            className: "jsx-908589411 text-sm text-gray-600 hover:text-gray-900",
            renderId: "render-b7a6a564",
            as: "a",
            children: "Back to top ↑"
          })]
        }), isLoadingPosts ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-908589411 text-gray-700",
          renderId: "render-014b165d",
          as: "p",
          children: "Loading updates…"
        }) : postsError ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-908589411 text-red-600",
          renderId: "render-ca07305c",
          as: "p",
          children: String(postsError.message || postsError)
        }) : posts.length > 0 ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-908589411 grid md:grid-cols-2 lg:grid-cols-3 gap-8",
          renderId: "render-78e4cc7d",
          as: "div",
          children: posts.map((post) => {
            const dateStr = post.created_at ? new Date(post.created_at).toLocaleDateString() : "";
            return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              id: `update-${post.id}`,
              style: {
                borderColor: "rgba(0,0,0,0.08)"
              },
              className: "jsx-908589411 rounded-2xl overflow-hidden border shadow-sm bg-white",
              renderId: "render-96d79f0d",
              as: "article",
              children: [post.image_url ? /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                src: post.image_url,
                alt: post.title,
                className: "jsx-908589411 w-full h-56 object-cover",
                renderId: "render-11d1010d",
                as: "img"
              }) : null, /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "jsx-908589411 p-6",
                renderId: "render-2c479517",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-908589411 text-sm text-gray-500 mb-2",
                  renderId: "render-49f3e1e0",
                  as: "div",
                  children: dateStr
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-908589411 text-xl font-semibold text-gray-900 mb-3",
                  renderId: "render-24ec0512",
                  as: "h3",
                  children: post.title
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-908589411 prose prose-sm max-w-none text-gray-800",
                  renderId: "render-a09a9ad1",
                  as: "div",
                  children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "jsx-908589411",
                    renderId: "render-0c9f141d",
                    as: "p",
                    children: post.content
                  })
                })]
              })]
            }, post.id);
          })
        }) : /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-908589411 text-gray-700",
          renderId: "render-c4e9636d",
          as: "p",
          children: "No updates yet. Please check back soon."
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {}), /* @__PURE__ */ jsx(_JSXStyle, {
      id: "908589411",
      children: ["@-webkit-keyframes sheen{0%{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);}100%{-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}}", "@keyframes sheen{0%{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);}100%{-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}}", '.sheen::after{content:"";position:absolute;inset:0;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent);-webkit-animation:sheen 3s infinite;animation:sheen 3s infinite;}']
    })]
  });
}

function WrappedPage$4(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(NewsPage, {
      ...props
    })
  });
}

const route38 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$4
}, Symbol.toStringTag, { value: 'Module' }));

function PastoriumPage() {
  const sections = [
    {
      name: "Be Mandate",
      icon: Target,
      description: "Our mission to transform lives and communities worldwide.",
      color: "from-[#F4D03F] to-[#C29C1A]"
    },
    {
      name: "Youth Church",
      icon: Users,
      description: "Empowering the next generation with faith and purpose.",
      color: "from-[#4FD1C5] to-[#38B2AC]"
    },
    {
      name: "Worship/Intersensory",
      icon: Music,
      description: "Experience God through powerful worship and creative expression.",
      color: "from-[#9F7AEA] to-[#805AD5]"
    },
    {
      name: "The Pastors",
      icon: UserCircle,
      description: "Meet our dedicated pastoral team serving the global church.",
      color: "from-[#F56565] to-[#C53030]"
    },
    {
      name: "Media Hub",
      icon: Video,
      description: "Watch sermons, testimonies, and stay connected digitally.",
      color: "from-[#ED8936] to-[#C05621]"
    },
    // Added new section: Church Structures
    {
      name: "Church Structures",
      icon: Building,
      description: "How our church is organized for ministry and service.",
      color: "from-[#60A5FA] to-[#2563EB]"
    }
  ];
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    style: {
      background: "radial-gradient(1200px 600px at 10% -10%, rgba(74,88,119,0.15), transparent 60%), radial-gradient(1000px 500px at 110% 10%, rgba(25,32,44,0.35), transparent 60%), linear-gradient(180deg, #0b0e14 0%, #0f131a 40%, #10151f 100%)",
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, system-ui, sans-serif'
    },
    className: "jsx-2097568745 min-h-screen text-white font-inter",
    renderId: "render-f5437069",
    as: "div",
    children: [/* @__PURE__ */ jsx(SEOHead, {
      path: "/pastorium"
    }), /* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-2097568745 relative w-full",
      renderId: "render-8bdc2272",
      as: "div",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-2097568745 relative w-full h-[360px] md:h-[440px] overflow-hidden",
        renderId: "render-ea1aae2b",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=700&fit=crop&q=80",
          alt: "Pastorium",
          className: "jsx-2097568745 w-full h-full object-cover scale-105",
          renderId: "render-694a4679",
          as: "img"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-2097568745 absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60",
          renderId: "render-05e7255f",
          as: "div"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          style: {
            background: "radial-gradient(800px 240px at 20% 10%, rgba(255,255,255,0.07), transparent 60%)"
          },
          className: "jsx-2097568745 absolute inset-0",
          renderId: "render-1e18c2d6",
          as: "div"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-2097568745 absolute inset-0 flex items-center justify-center px-6",
          renderId: "render-e799c3c0",
          as: "div",
          children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            "aria-label": "Operations Header",
            className: "jsx-2097568745 backdrop-blur-md bg-white/10 border border-white/15 rounded-3xl px-6 py-3 md:px-8 md:py-4 shadow-[0_8px_40px_rgba(0,0,0,0.35)] animate-fadeSlideUp",
            renderId: "render-61b97d72",
            as: "div",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-2097568745 flex items-center gap-3 md:gap-4",
              renderId: "render-efb75e92",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-2097568745 inline-flex w-2 h-2 rounded-full bg-[#F4D03F] shadow-[0_0_0_4px_rgba(244,208,63,0.2)]",
                renderId: "render-3e55dc0b",
                as: "span"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-2097568745 text-3xl md:text-5xl font-bold tracking-tight",
                renderId: "render-0ab2816b",
                as: "h1",
                children: "Operations"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-2097568745 hidden md:inline-flex text-sm md:text-base text-white/80",
                renderId: "render-fea77d66",
                as: "span",
                children: "• Ministry pillars & teams"
              })]
            })
          })
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-2097568745 px-6",
      renderId: "render-5566e6b0",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        "data-animate": true,
        className: "jsx-2097568745 max-w-7xl mx-auto -mt-10 md:-mt-12",
        renderId: "render-88659eea",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-2097568745 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6",
          renderId: "render-2b061109",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-2097568745 flex flex-col md:flex-row md:items-center md:justify-between gap-4",
            renderId: "render-d52c9fd8",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-2097568745",
              renderId: "render-138cf94d",
              as: "div",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-2097568745 text-white/80 text-base md:text-lg",
                renderId: "render-890fc64d",
                as: "p",
                children: "Explore the pillars that power our ministry. Tap any card to dive deeper."
              })
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-2097568745 flex items-center gap-2",
              renderId: "render-aca6227f",
              as: "div",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "jsx-2097568745 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80",
                renderId: "render-52b14b5d",
                as: "span",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-2097568745 w-2 h-2 rounded-full bg-emerald-400 animate-pulse",
                  renderId: "render-41e06950",
                  as: "span"
                }), "Active initiatives"]
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-2097568745 hidden md:inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/70",
                renderId: "render-6a5dfbf4",
                as: "span",
                children: "iOS-inspired UI"
              })]
            })]
          })
        })
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-2097568745 py-12 md:py-16 px-6",
      renderId: "render-286f0cf8",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-2097568745 max-w-7xl mx-auto",
        renderId: "render-b46c1279",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-2097568745 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
          renderId: "render-19bc6e7b",
          as: "div",
          children: sections.map((section, index) => {
            const slug = section.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
            const Icon = section.icon;
            return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: `/pastorium/${slug}`,
              "aria-label": `${section.name} - Learn more`,
              style: {
                boxShadow: "0 8px 40px rgba(0,0,0,0.35)"
              },
              className: "jsx-2097568745 group rounded-2xl relative overflow-hidden",
              renderId: "render-92c2d638",
              as: "a",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-2097568745 absolute inset-0 rounded-2xl backdrop-blur-xl bg-white/6 border border-white/10",
                renderId: "render-1196d5a8",
                as: "div"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-2097568745 absolute -inset-x-20 -top-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 [transform:skewY(-8deg)] animate-none group-hover:animate-sheen",
                renderId: "render-64f70918",
                as: "div"
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "jsx-2097568745 relative p-6 md:p-8",
                renderId: "render-9d20e9f9",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: `jsx-2097568745 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-lg shadow-black/30 group-hover:scale-[1.03] transition-transform`,
                  renderId: "render-1b5dd58c",
                  as: "div",
                  children: /* @__PURE__ */ jsx(Icon, {
                    className: "jsx-2097568745 w-8 h-8 md:w-10 md:h-10 text-white"
                  })
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-2097568745 text-2xl md:text-3xl font-bold tracking-tight mb-2",
                  renderId: "render-ac2c28cd",
                  as: "h3",
                  children: section.name
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-2097568745 text-white/80 text-sm md:text-base mb-5",
                  renderId: "render-d1c2d813",
                  as: "p",
                  children: section.description
                }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                  className: "jsx-2097568745 flex items-center gap-2 text-[#F4D03F] font-medium",
                  renderId: "render-e241b89c",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                    className: "jsx-2097568745",
                    renderId: "render-91826dec",
                    as: "span",
                    children: "Learn more"
                  }), /* @__PURE__ */ jsx(ArrowRight, {
                    className: "w-5 h-5 transition-transform duration-200 group-hover:translate-x-1",
                    "aria-hidden": "true"
                  })]
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "jsx-2097568745 pointer-events-none absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/15 transition-colors",
                  renderId: "render-5f1a72e6",
                  as: "div"
                })]
              })]
            }, index);
          })
        })
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {}), /* @__PURE__ */ jsx(_JSXStyle, {
      id: "2097568745",
      children: ["@-webkit-keyframes fadeSlideUp{0%{opacity:0;-webkit-transform:translateY(14px);-ms-transform:translateY(14px);transform:translateY(14px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@keyframes fadeSlideUp{0%{opacity:0;-webkit-transform:translateY(14px);-ms-transform:translateY(14px);transform:translateY(14px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", ".animate-fadeSlideUp{-webkit-animation:fadeSlideUp 600ms cubic-bezier(0.22,1,0.36,1) both;animation:fadeSlideUp 600ms cubic-bezier(0.22,1,0.36,1) both;}", "@-webkit-keyframes sheen{0%{-webkit-transform:translateX(-120%) skewY(-8deg);-ms-transform:translateX(-120%) skewY(-8deg);transform:translateX(-120%) skewY(-8deg);}100%{-webkit-transform:translateX(120%) skewY(-8deg);-ms-transform:translateX(120%) skewY(-8deg);transform:translateX(120%) skewY(-8deg);}}", "@keyframes sheen{0%{-webkit-transform:translateX(-120%) skewY(-8deg);-ms-transform:translateX(-120%) skewY(-8deg);transform:translateX(-120%) skewY(-8deg);}100%{-webkit-transform:translateX(120%) skewY(-8deg);-ms-transform:translateX(120%) skewY(-8deg);transform:translateX(120%) skewY(-8deg);}}", ".animate-sheen{-webkit-animation:sheen 1200ms ease-in-out;animation:sheen 1200ms ease-in-out;}", '@media (prefers-reduced-motion:reduce){[class*="animate-"]{-webkit-animation:none !important;animation:none !important;}}']
    })]
  });
}

function WrappedPage$3(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(PastoriumPage, {
      ...props
    })
  });
}

const route39 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$3
}, Symbol.toStringTag, { value: 'Module' }));

function PastoriumDetailPage({
  params: {
    slug
  }
}) {
  const titleFromSlug = (s) => s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const humanTitleMap = {
    "be-mandate": "Be Mandate",
    "youth-church": "Youth Church",
    "worship-intersensory": "Worship/Intersensory",
    "the-pastors": "The Pastors",
    "media-hub": "Media Hub",
    "church-structures": "Church Structures"
  };
  const pageTitle = humanTitleMap[slug] || titleFromSlug(slug || "");
  const descriptionMap = {
    "be-mandate": "Our core mission: reaching people with the Gospel, discipling believers, and serving communities with the love of Christ.",
    "youth-church": "A vibrant space where teens and young adults grow in faith, character, and leadership through worship, groups, and outreach.",
    "worship-intersensory": "Worship that engages heart and mind — music, prayer, and creative expression that points to Jesus.",
    "the-pastors": "Meet the pastoral team who shepherd the church, preach the Word, and equip the saints for ministry.",
    "media-hub": "Messages, testimonies, and stories — all the ways we share Christ online and keep the family connected.",
    "church-structures": "An overview of how our church is organized for ministry — boards, departments, teams, and how they serve together."
  };
  const bodyText = descriptionMap[slug] || "This page provides a simple overview of this area of Operations.";
  const heroImageMap = {
    "be-mandate": (
      // Base src: exact fit to current hero aspect (1920x600), centered crop, smart quality
      "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/1920x600/center/-/quality/smart/-/format/auto/"
    ),
    "youth-church": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=600&fit=crop&q=80",
    "worship-intersensory": "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1920&h=600&fit=crop&q=80",
    "the-pastors": (
      // Switch to the requested SBBC pic6 image with a clean hero crop and sharpening
      "https://ucarecdn.com/30d0681c-cb87-4d51-9a4d-d1f6052c2afa/-/scale_crop/1920x600/center/-/quality/smart/-/format/auto/-/sharp/2/"
    ),
    "media-hub": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&h=600&fit=crop&q=80",
    "church-structures": "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=1920&h=600&fit=crop&q=80"
  };
  const heroImageSrcSetMap = {
    "be-mandate": [
      "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/1280x400/center/-/quality/smart/-/format/auto/ 1280w",
      "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/1920x600/center/-/quality/smart/-/format/auto/ 1920w",
      // Use 2560x800 to match the hero aspect for crispness on large screens
      "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/2560x800/center/-/quality/smart/-/format/auto/ 2560w"
    ].join(", ")
  };
  const heroImage = heroImageMap[slug];
  const heroSrcSet = heroImageSrcSetMap[slug];
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "min-h-screen bg-white dark:bg-[#121212]",
    renderId: "render-21596585",
    as: "div",
    children: [/* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "relative w-full h-72 md:h-96",
      renderId: "render-0c5a4850",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        src: heroImage || "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=600&fit=crop&q=80",
        alt: pageTitle,
        className: "w-full h-full object-cover",
        style: slug === "the-pastors" ? {
          objectPosition: "center top"
        } : void 0,
        srcSet: heroSrcSet,
        sizes: heroSrcSet ? "100vw" : void 0,
        renderId: "render-40edcfbe",
        as: "img"
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "absolute inset-0 bg-black/50 flex items-center",
        renderId: "render-a91ce931",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "max-w-7xl mx-auto px-6",
          renderId: "render-94b874d3",
          as: "div",
          children: [slug !== "be-mandate" && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "text-sm mb-2 text-white/80",
            renderId: "render-ea869a6a",
            as: "nav",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              href: "/pastorium",
              className: "hover:underline",
              renderId: "render-9b9bb362",
              as: "a",
              children: "Operations"
            }), " ", "/ ", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-white",
              renderId: "render-ca80385b",
              as: "span",
              children: pageTitle
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-4xl md:text-5xl font-bold text-white",
            renderId: "render-02cc3cf0",
            as: "h1",
            children: pageTitle
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "mt-4 text-white/90 max-w-3xl",
            renderId: "render-af0f8780",
            as: "p",
            children: bodyText
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "px-6 py-16",
      renderId: "render-ce7990fd",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "max-w-7xl mx-auto",
        renderId: "render-f3076db7",
        as: "div",
        children: [slug === "be-mandate" && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "space-y-16",
          renderId: "render-9afa805f",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "grid grid-cols-1 gap-10 items-center",
            renderId: "render-44330e7f",
            as: "div",
            children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-e3f1c877",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-3xl font-bold text-black dark:text-white",
                renderId: "render-6ef4f487",
                as: "h2",
                children: "The Mission"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-4 text-[#6E6E6E] dark:text-[#A0A0A0] leading-relaxed",
                renderId: "render-4fcd2bf3",
                as: "p",
                children: "We exist to preach Christ, make disciples, and serve the city. Join outreaches, prayer walks, and neighborhood care projects happening every month."
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4",
                renderId: "render-54cb0c8b",
                as: "div",
                children: [/* @__PURE__ */ jsx(Feature, {
                  icon: Target,
                  title: "Evangelism",
                  text: "Street, campus, and marketplace"
                }), /* @__PURE__ */ jsx(Feature, {
                  icon: Globe2,
                  title: "Missions",
                  text: "New cities and church plants"
                }), /* @__PURE__ */ jsx(Feature, {
                  icon: HeartHandshake,
                  title: "Compassion",
                  text: "Food, care, and counseling"
                }), /* @__PURE__ */ jsx(Feature, {
                  icon: Megaphone,
                  title: "Training",
                  text: "Gospel conversations that work"
                })]
              })]
            })
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "grid md:grid-cols-2 gap-10 items-start",
            renderId: "render-329cfaf8",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "bg-white dark:bg-[#1E1E1E] border border-[#E9E9E9] dark:border-[#333] rounded-2xl p-6",
              renderId: "render-588d2120",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-2xl font-bold text-black dark:text-white",
                renderId: "render-c6a2003d",
                as: "h3",
                children: "Get Involved"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-2 text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-830946ee",
                as: "p",
                children: "Sign up to serve with a team."
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-6",
                renderId: "render-5490bc19",
                as: "div",
                children: /* @__PURE__ */ jsx(DepartmentForm, {})
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-cf3b5ef7",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-2xl font-bold text-black dark:text-white",
                renderId: "render-5c7259cb",
                as: "h3",
                children: "Gallery"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-2 text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-e97dd7b2",
                as: "p",
                children: "Moments from recent outreaches."
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-4",
                renderId: "render-aa45641c",
                as: "div",
                children: /* @__PURE__ */ jsx(ImageGallery, {})
              })]
            })]
          })]
        }), slug === "youth-church" && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "space-y-16",
          renderId: "render-62702c26",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            renderId: "render-80ed24cd",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-3xl font-bold text-black dark:text-white",
              renderId: "render-17f69e12",
              as: "h2",
              children: "Vibes + Discipleship"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "mt-3 text-[#6E6E6E] dark:text-[#A0A0A0]",
              renderId: "render-8ab70332",
              as: "p",
              children: "Weekly hangouts, small groups, and worship nights designed to help young people follow Jesus together."
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-6",
              renderId: "render-f3487c10",
              as: "div",
              children: [/* @__PURE__ */ jsx(MiniCard, {
                icon: Calendar,
                title: "Fridays 5pm",
                text: "Youth night"
              }), /* @__PURE__ */ jsx(MiniCard, {
                icon: Users,
                title: "Crews",
                text: "Small groups by schools & streets"
              }), /* @__PURE__ */ jsx(MiniCard, {
                icon: Mic2,
                title: "Open Mic",
                text: "Music, poetry, testimonies"
              })]
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            renderId: "render-e4cfaf37",
            as: "div",
            children: /* @__PURE__ */ jsx(ImageGallery, {})
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "grid md:grid-cols-2 gap-10 items-start",
            renderId: "render-c06fda6f",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "bg-white dark:bg-[#1E1E1E] border border-[#E9E9E9] dark:border-[#333] rounded-2xl p-6",
              renderId: "render-b8e3d6ac",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-2xl font-bold text-black dark:text-white",
                renderId: "render-c91eeef7",
                as: "h3",
                children: "Join the Youth Team"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-2 text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-22367a9d",
                as: "p",
                children: "Mentors, musicians, media — we’d love you on the squad."
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-6",
                renderId: "render-2bc9c2ff",
                as: "div",
                children: /* @__PURE__ */ jsx(DepartmentForm, {})
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "bg-[#F9FAFB] dark:bg-[#1B1B1B] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333]",
              renderId: "render-7714f38f",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-2xl font-bold text-black dark:text-white",
                renderId: "render-726633bb",
                as: "h3",
                children: "Upcoming"
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "mt-4 space-y-3 text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-342626b4",
                as: "ul",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  renderId: "render-758dc495",
                  as: "li",
                  children: "• Campus outreach week"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  renderId: "render-6d2e7ba2",
                  as: "li",
                  children: "• City-wide youth night"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  renderId: "render-91624045",
                  as: "li",
                  children: "• Leaders training retreat"
                })]
              })]
            })]
          })]
        }), slug === "worship-intersensory" && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "space-y-16",
          renderId: "render-c576247b",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "grid md:grid-cols-3 gap-6",
            renderId: "render-db033593",
            as: "div",
            children: [/* @__PURE__ */ jsx(InfoCard, {
              icon: Music,
              title: "Choir & Band",
              text: "Auditions, rehearsals, services."
            }), /* @__PURE__ */ jsx(InfoCard, {
              icon: Paintbrush2,
              title: "Creative Arts",
              text: "Dance, drama, visuals for worship."
            }), /* @__PURE__ */ jsx(InfoCard, {
              icon: HeartHandshake,
              title: "Prayer",
              text: "Intercession and altars of fire."
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "grid md:grid-cols-2 gap-10 items-center",
            renderId: "render-ffac8203",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              src: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=1200&q=80&fit=crop",
              alt: "Worship",
              className: "w-full h-80 object-cover rounded-2xl",
              renderId: "render-8e4836b4",
              as: "img"
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-6e4c55c1",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-2xl font-bold text-black dark:text-white",
                renderId: "render-216b355a",
                as: "h3",
                children: "Audition / Join a Team"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-2 text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-cc8cb1ff",
                as: "p",
                children: "We welcome passionate worshipers and intercessors. Sign up below and a leader will reach out."
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-6 max-w-xl",
                renderId: "render-273b6311",
                as: "div",
                children: /* @__PURE__ */ jsx(DepartmentForm, {})
              })]
            })]
          })]
        }), slug === "the-pastors" && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "space-y-12",
          renderId: "render-4f13acd1",
          as: "div",
          children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8",
            renderId: "render-0e8440dd",
            as: "div",
            children: [{
              name: "Pastor Mrs. Lawson Mgoa",
              role: "Pastor",
              photo: "https://ucarecdn.com/1be42260-c4a0-4cd7-a60a-a3357077cc2b/-/format/auto/"
            }, {
              name: "Pastor Joshua Golden",
              role: "Residence Pastor/Church Secretary",
              photo: "https://ucarecdn.com/e1bb00b5-5507-4388-8b16-24219a8ae3de/-/format/auto/"
            }, {
              name: "Pr. Daniel K.",
              role: "Worship Pastor",
              photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&q=80&fit=crop"
            }, {
              name: "Pr. Joy N.",
              role: "Youth Pastor",
              photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&q=80&fit=crop"
            }, {
              name: "Pr. Emma O.",
              role: "Outreach Pastor",
              photo: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600&q=80&fit=crop"
            }, {
              name: "Pr. Grace I.",
              role: "Prayer Pastor",
              photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&q=80&fit=crop"
            }].map((p, i) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "bg-white dark:bg-[#1E1E1E] border border-[#E9E9E9] dark:border-[#333] rounded-2xl overflow-hidden",
              renderId: "render-fcf681ab",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                src: p.photo,
                alt: p.name,
                className: "w-full h-72 object-cover",
                style: i === 0 ? {
                  objectPosition: "center 15%"
                } : i === 1 ? {
                  objectPosition: "center 10%"
                } : void 0,
                renderId: "render-a3fb8ea8",
                as: "img"
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "p-5",
                renderId: "render-a91b6f0a",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "text-xl font-bold text-black dark:text-white",
                  renderId: "render-ba870596",
                  as: "h3",
                  children: p.name
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  className: "text-[#6E6E6E] dark:text-[#A0A0A0]",
                  renderId: "render-e8a6f78a",
                  as: "p",
                  children: p.role
                }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                  className: "mt-4 flex gap-3 text-sm",
                  renderId: "render-04f167b8",
                  as: "div",
                  children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                    href: "#",
                    className: "inline-flex items-center gap-2 text-[#C29C1A] hover:underline",
                    renderId: "render-faba7e2e",
                    as: "a",
                    children: [/* @__PURE__ */ jsx(Mail, {
                      size: 16
                    }), " Email"]
                  }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                    href: "#",
                    className: "inline-flex items-center gap-2 text-[#C29C1A] hover:underline",
                    renderId: "render-38fd305a",
                    as: "a",
                    children: [/* @__PURE__ */ jsx(MapPin, {
                      size: 16
                    }), " Meet"]
                  })]
                })]
              })]
            }, i))
          })
        }), slug === "media-hub" && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "space-y-12",
          renderId: "render-8baf30d1",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "grid md:grid-cols-2 gap-10 items-center",
            renderId: "render-4e35bf63",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-96288021",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-3xl font-bold text-black dark:text-white",
                renderId: "render-11d50a4c",
                as: "h2",
                children: "Watch & Listen"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-3 text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-590d45e0",
                as: "p",
                children: "Catch up on messages and stories across our platforms. New content weekly."
              }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "mt-6 flex flex-wrap gap-3",
                renderId: "render-cdf60705",
                as: "div",
                children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  href: "/messages",
                  className: "px-5 py-3 rounded-lg bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold",
                  renderId: "render-3dda1e83",
                  as: "a",
                  children: "Watch Messages"
                }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                  href: "https://youtube.com",
                  target: "_blank",
                  className: "px-5 py-3 rounded-lg border border-[#E9E9E9] dark:border-[#333] text-black dark:text-white",
                  renderId: "render-20a1e888",
                  as: "a",
                  children: "Visit YouTube"
                })]
              })]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-58ecdb28",
              as: "div",
              children: /* @__PURE__ */ jsx(ImageGallery, {})
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "bg-white dark:bg-[#1E1E1E] border border-[#E9E9E9] dark:border-[#333] rounded-2xl p-6",
            renderId: "render-01445faf",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "text-2xl font-bold text-black dark:text-white",
              renderId: "render-40f3f651",
              as: "h3",
              children: "Media Team — Join Us"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "mt-2 text-[#6E6E6E] dark:text-[#A0A0A0]",
              renderId: "render-19757624",
              as: "p",
              children: "Cameras, editing, graphics, live mix — we can train you."
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "mt-6 max-w-xl",
              renderId: "render-558c7580",
              as: "div",
              children: /* @__PURE__ */ jsx(DepartmentForm, {})
            })]
          })]
        }), slug === "church-structures" && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "space-y-12",
          renderId: "render-f02af6a2",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
            renderId: "render-1efdd6b7",
            as: "div",
            children: [/* @__PURE__ */ jsx(StructureCard, {
              icon: Building,
              title: "Boards",
              text: "Oversight & governance"
            }), /* @__PURE__ */ jsx(StructureCard, {
              icon: Users,
              title: "Departments",
              text: "Day-to-day ministry work"
            }), /* @__PURE__ */ jsx(StructureCard, {
              icon: HeartHandshake,
              title: "Teams",
              text: "Focused serving units"
            }), /* @__PURE__ */ jsx(StructureCard, {
              icon: BookOpen,
              title: "House Fellowships",
              text: "Care, teaching, prayer"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "grid md:grid-cols-2 gap-10 items-start",
            renderId: "render-7abf8fbf",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-3e9cd361",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "text-2xl font-bold text-black dark:text-white",
                renderId: "render-9488b7ab",
                as: "h3",
                children: "How we work together"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-3 text-[#6E6E6E] dark:text-[#A0A0A0]",
                renderId: "render-f9d382fa",
                as: "p",
                children: "Clear roles, shared vision, and aligned rhythms help us serve people well. If you’d like to be part of a team, sign up below and we’ll guide you to the best fit."
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "mt-6 max-w-xl",
                renderId: "render-82022e61",
                as: "div",
                children: /* @__PURE__ */ jsx(DepartmentForm, {})
              })]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-65772d85",
              as: "div",
              children: /* @__PURE__ */ jsx(ImageGallery, {})
            })]
          })]
        }), !["be-mandate", "youth-church", "worship-intersensory", "the-pastors", "media-hub", "church-structures"].includes(slug) && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "max-w-4xl",
          renderId: "render-c45cb6e9",
          as: "div",
          children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-[#444] dark:text-[#D1D1D1] leading-relaxed",
            renderId: "render-2bf9ae0b",
            as: "p",
            children: bodyText
          })
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {})]
  });
}
function Feature({
  icon: Icon,
  title,
  text
}) {
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "flex items-start gap-3",
    renderId: "render-677c732e",
    as: "div",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "w-10 h-10 rounded-lg bg-[#111]/90 dark:bg-white/10 flex items-center justify-center text-[#F4D03F]",
      renderId: "render-c3405cab",
      as: "div",
      children: /* @__PURE__ */ jsx(Icon, {
        size: 20
      })
    }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      renderId: "render-02e2aa69",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "font-semibold text-black dark:text-white",
        renderId: "render-f9eaf243",
        as: "div",
        children: title
      }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
        renderId: "render-71d4207c",
        as: "div",
        children: text
      })]
    })]
  });
}
function MiniCard({
  icon: Icon,
  title,
  text
}) {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "rounded-2xl border border-[#E9E9E9] dark:border-[#333] p-5 bg-white dark:bg-[#1E1E1E]",
    renderId: "render-81e7d091",
    as: "div",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "flex items-center gap-3",
      renderId: "render-230cfc7a",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "w-10 h-10 rounded-lg bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] text-black flex items-center justify-center",
        renderId: "render-26451749",
        as: "div",
        children: /* @__PURE__ */ jsx(Icon, {
          size: 18
        })
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        renderId: "render-d8e8134d",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "font-semibold text-black dark:text-white",
          renderId: "render-47aa0730",
          as: "div",
          children: title
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-e7ed7e07",
          as: "div",
          children: text
        })]
      })]
    })
  });
}
function InfoCard({
  icon: Icon,
  title,
  text
}) {
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    className: "rounded-2xl border border-[#E9E9E9] dark:border-[#333] p-6 bg-white dark:bg-[#1E1E1E]",
    renderId: "render-1a082abf",
    as: "div",
    children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "w-12 h-12 rounded-xl bg-[#0B0B0B] dark:bg-white/10 text-[#F4D03F] flex items-center justify-center",
      renderId: "render-5175c7f5",
      as: "div",
      children: /* @__PURE__ */ jsx(Icon, {
        size: 22
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "mt-3 font-semibold text-black dark:text-white",
      renderId: "render-c81fa8a8",
      as: "div",
      children: title
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
      renderId: "render-24e6c3e3",
      as: "div",
      children: text
    })]
  });
}
function StructureCard({
  icon: Icon,
  title,
  text
}) {
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "rounded-2xl border border-[#E9E9E9] dark:border-[#333] p-6 bg-white dark:bg-[#1E1E1E]",
    renderId: "render-7a1165c0",
    as: "div",
    children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
      className: "flex items-center gap-3",
      renderId: "render-3e0087ae",
      as: "div",
      children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "w-11 h-11 rounded-lg bg-gradient-to-br from-[#60A5FA] to-[#2563EB] text-white flex items-center justify-center",
        renderId: "render-83bda178",
        as: "div",
        children: /* @__PURE__ */ jsx(Icon, {
          size: 20
        })
      }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        renderId: "render-3207693e",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "font-semibold text-black dark:text-white",
          renderId: "render-fae8bf0b",
          as: "div",
          children: title
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-sm text-[#6E6E6E] dark:text-[#A0A0A0]",
          renderId: "render-f1aa80fd",
          as: "div",
          children: text
        })]
      })]
    })
  });
}

function WrappedPage$2(props) {
  const params = useParams();
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(PastoriumDetailPage, {
      ...props,
      slug: params.slug
    })
  });
}

const route40 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$2
}, Symbol.toStringTag, { value: 'Module' }));

function SetupAdminPage() {
  const [status, setStatus] = useState("ready");
  const [message, setMessage] = useState("");
  const handleSetup = async () => {
    setStatus("loading");
    try {
      const response = await fetch("/api/auth/set-my-password");
      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setMessage(data.message);
        setTimeout(() => {
          window.location.href = "/account/signin";
        }, 2e3);
      } else {
        setStatus("error");
        setMessage(data.error || "Setup failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Could not complete setup");
    }
  };
  return /* @__PURE__ */ jsx(PolymorphicComponent_default, {
    className: "min-h-screen bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] flex items-center justify-center p-6",
    renderId: "render-1101091b",
    as: "div",
    children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "max-w-md w-full bg-white rounded-2xl shadow-2xl p-8",
      renderId: "render-06242622",
      as: "div",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "text-center",
        renderId: "render-c4c4b9a6",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "w-20 h-20 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] rounded-full flex items-center justify-center mx-auto mb-6",
          renderId: "render-a40d5dc9",
          as: "div",
          children: /* @__PURE__ */ jsx("svg", {
            className: "w-10 h-10 text-white",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              renderId: "render-6e29dc46",
              as: "path"
            })
          })
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-3xl font-bold text-black mb-2",
          renderId: "render-c7bc5927",
          as: "h1",
          children: "Admin Setup"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "text-gray-600 mb-8",
          renderId: "render-4ad3445c",
          as: "p",
          children: "Click the button below to set up your admin account"
        }), status === "ready" && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          onClick: handleSetup,
          className: "w-full bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-bold py-4 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200",
          renderId: "render-c866b52b",
          as: "button",
          children: "Set Up Admin Access"
        }), status === "loading" && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "flex flex-col items-center gap-4",
          renderId: "render-9b566220",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "w-12 h-12 border-4 border-[#F4D03F] border-t-transparent rounded-full animate-spin",
            renderId: "render-cc16c784",
            as: "div"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-gray-600",
            renderId: "render-e5335495",
            as: "p",
            children: "Setting up your account..."
          })]
        }), status === "success" && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-green-50 border border-green-200 rounded-lg p-6",
          renderId: "render-dbf4cff4",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4",
            renderId: "render-03f73112",
            as: "div",
            children: /* @__PURE__ */ jsx("svg", {
              className: "w-6 h-6 text-white",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M5 13l4 4L19 7",
                renderId: "render-3943d7c1",
                as: "path"
              })
            })
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-green-800 font-semibold mb-2",
            renderId: "render-fc66f696",
            as: "p",
            children: message
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-green-600 text-sm",
            renderId: "render-19892221",
            as: "p",
            children: "Redirecting to sign in..."
          })]
        }), status === "error" && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "bg-red-50 border border-red-200 rounded-lg p-6",
          renderId: "render-b63b2f66",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "text-red-800 font-semibold mb-4",
            renderId: "render-340b3eff",
            as: "p",
            children: message
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            onClick: handleSetup,
            className: "bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors",
            renderId: "render-fa2ecd78",
            as: "button",
            children: "Try Again"
          })]
        }), status === "ready" && /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "mt-8 p-4 bg-gray-50 rounded-lg text-left",
          renderId: "render-f74b587b",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "font-semibold text-black mb-2",
            renderId: "render-c37bfa74",
            as: "h3",
            children: "What this does:"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "text-sm text-gray-600 space-y-1",
            renderId: "render-a30f56b7",
            as: "ul",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              renderId: "render-e2b4523e",
              as: "li",
              children: ["✓ Sets your password to: ", /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                renderId: "render-f9a70ea2",
                as: "strong",
                children: "20000000"
              })]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-044b9bc4",
              as: "li",
              children: "✓ Grants you admin access"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              renderId: "render-95e83ccf",
              as: "li",
              children: "✓ Allows you to access /admin dashboard"
            })]
          })]
        })]
      })
    })
  });
}

function WrappedPage$1(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SetupAdminPage, {
      ...props
    })
  });
}

const route41 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage$1
}, Symbol.toStringTag, { value: 'Module' }));

function VisionPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/discipleship", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error("Failed to submit");
      const data = await response.json();
      setMessage(data.message);
      setFormData({
        full_name: "",
        email: "",
        phone: ""
      });
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
    style: {
      // iOS-inspired layered gray with a cool tint
      background: "radial-gradient(1200px 600px at 10% -10%, rgba(74,88,119,0.12), transparent 60%), radial-gradient(1000px 500px at 110% 10%, rgba(25,32,44,0.3), transparent 60%), linear-gradient(180deg, #0b0e14 0%, #0f131a 40%, #10151f 100%)",
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, system-ui, sans-serif'
    },
    className: "jsx-1851985705 min-h-screen text-white font-inter",
    renderId: "render-ae66a085",
    as: "div",
    children: [/* @__PURE__ */ jsx(SEOHead, {
      path: "/vision"
    }), /* @__PURE__ */ jsx(ChurchHeader, {}), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      className: "jsx-1851985705 relative overflow-hidden",
      renderId: "render-e24b2b58",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-1851985705 relative w-full h-[360px] md:h-[460px]",
        renderId: "render-b22c1553",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          // UPDATED: Use uploaded image as hero and ensure it fills the hero section cleanly
          src: "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/1920x800/center/-/quality/smart/-/format/auto/",
          srcSet: ["https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/1280x533/center/-/quality/smart/-/format/auto/ 1280w", "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/1920x800/center/-/quality/smart/-/format/auto/ 1920w", "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/2560x1067/center/-/quality/smart/-/format/auto/ 2560w"].join(", "),
          sizes: "100vw",
          alt: "SBBC Vision",
          className: "jsx-1851985705 w-full h-full object-cover opacity-70",
          renderId: "render-bb8de58e",
          as: "img"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1851985705 absolute inset-0 bg-[linear-gradient(180deg,rgba(16,21,31,0.4),rgba(16,21,31,0.85))]",
          renderId: "render-a168ce98",
          as: "div"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1851985705 absolute inset-0 flex items-center justify-center px-6",
          renderId: "render-61218c59",
          as: "div",
          children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            "data-animate": true,
            className: "jsx-1851985705 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl px-6 py-5 md:px-10 md:py-7 shadow-2xl max-w-4xl text-center",
            renderId: "render-b00ae7a8",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-1851985705 inline-flex items-center gap-2 text-xs md:text-sm text-white/70 mb-3",
              renderId: "render-035c5b5d",
              as: "div",
              children: [/* @__PURE__ */ jsx(Sparkles, {
                size: 16,
                className: "text-[#F4D03F]"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1851985705",
                renderId: "render-35b02dae",
                as: "span",
                children: "Sunrise Banner Bible Church"
              })]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 text-4xl md:text-6xl font-bold tracking-tight",
              renderId: "render-0463d948",
              as: "h1",
              children: "Our Vision"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 mt-3 md:mt-4 text-white/80 max-w-2xl mx-auto text-sm md:text-base",
              renderId: "render-3eaa2a3a",
              as: "p",
              children: "A clear call to reach the nations, disciple believers, and transform communities by the power of the gospel."
            })]
          })
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1851985705 pointer-events-none absolute -top-24 -left-24 w-[320px] h-[320px] rounded-full bg-[#4a5877]/20 blur-3xl",
          renderId: "render-4ca357ab",
          as: "div"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1851985705 pointer-events-none absolute -bottom-20 -right-20 w-[320px] h-[320px] rounded-full bg-[#f4d03f]/10 blur-3xl",
          renderId: "render-07b6aa0c",
          as: "div"
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      "data-animate": true,
      className: "jsx-1851985705 px-6 py-14 md:py-20",
      renderId: "render-44810185",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-1851985705 max-w-6xl mx-auto",
        renderId: "render-814d6814",
        as: "div",
        children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1851985705 text-2xl md:text-3xl font-semibold mb-6",
          renderId: "render-9df78c98",
          as: "h2",
          children: "Our Pillars"
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1851985705 text-white/70 mb-10 max-w-3xl",
          renderId: "render-8efbabbb",
          as: "p",
          children: "These guide how we live and lead: reaching people with good news, discipling with Scripture, building family, and igniting purpose."
        }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1851985705 grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
          renderId: "render-e87cf502",
          as: "div",
          children: [{
            title: "Reach the Nations",
            Icon: Globe2,
            desc: "Go everywhere with the love and message of Jesus."
          }, {
            title: "Disciple by the Word",
            Icon: BookOpen,
            desc: "Grow deep roots through teaching and practice."
          }, {
            title: "Build Family",
            Icon: Users2,
            desc: "Belong, care, serve, and grow together."
          }, {
            title: "Ignite Purpose",
            Icon: Flame,
            desc: "Live boldly with Spirit-led passion and hope."
          }].map(({
            title,
            Icon,
            desc
          }, idx) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1851985705 group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all",
            renderId: "render-8e02ec02",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 w-12 h-12 rounded-xl bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] flex items-center justify-center mb-4 shadow-md",
              renderId: "render-58802339",
              as: "div",
              children: /* @__PURE__ */ jsx(Icon, {
                size: 22,
                className: "jsx-1851985705 text-black"
              })
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 text-lg font-semibold mb-2",
              renderId: "render-5b3a643d",
              as: "h3",
              children: title
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 text-sm text-white/75",
              renderId: "render-3e606878",
              as: "p",
              children: desc
            })]
          }, idx))
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      "data-animate": true,
      className: "jsx-1851985705 px-6 pb-6 md:pb-12",
      renderId: "render-c0b7c2fd",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-1851985705 max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden max-h-[420px] md:max-h-[560px]",
        renderId: "render-23f529e4",
        as: "div",
        children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1851985705 grid md:grid-cols-2 gap-0",
          renderId: "render-2fd30208",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1851985705 relative",
            renderId: "render-1fdc65cc",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              src: "https://ucarecdn.com/37789dc9-dbe8-4ccd-9a72-e6a44d506c15/-/format/auto/",
              alt: "Dr. Pastor Lawson Ngoa",
              style: {
                objectPosition: "center top"
              },
              className: "jsx-1851985705 w-full h-full object-cover",
              renderId: "render-e789d4a6",
              as: "img"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 absolute inset-0 bg-gradient-to-t from-black/50 to-transparent",
              renderId: "render-5d391741",
              as: "div"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1851985705 p-6 md:p-10",
            renderId: "render-b4b2a1de",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 text-2xl md:text-3xl font-bold mb-4",
              renderId: "render-22863c05",
              as: "h2",
              children: "Dr. Pastor Lawson Ngoa"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 text-white/80 leading-relaxed mb-4",
              renderId: "render-95a19e60",
              as: "p",
              children: "Pastor Dr. Lawson Ngoa is a hot-gospeler, minister, and a blessing to this generation. His core assignment is preaching the gospel of Jesus Christ and discipling the nations."
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 text-white/80 leading-relaxed mb-4",
              renderId: "render-aa854d22",
              as: "p",
              children: "He founded Sunrise Banner Bible Church Worldwide. Through conferences and missions, his ministry has impacted millions across communities and nations."
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 text-white/80 leading-relaxed mb-4",
              renderId: "render-709ee81c",
              as: "p",
              children: "His life’s purpose is to restore hope, heal the hurting, and raise faithful disciples through strong apostolic teaching."
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 text-white/80 leading-relaxed",
              renderId: "render-ec3b51d5",
              as: "p",
              children: "He believes the Word of God is the final authority—bringing light to human nature, problems, and the way back to God."
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 text-white/80 leading-relaxed mt-4",
              renderId: "render-2129dd65",
              as: "p",
              children: "The set man has led many crusades and outreaches in many parts of Nigeria and is known for his dedication and zeal for the things and principles of the kingdom of heaven."
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      "data-animate": true,
      className: "jsx-1851985705 px-6 py-10 md:py-16",
      renderId: "render-7232c4f3",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-1851985705 max-w-6xl mx-auto grid md:grid-cols-3 gap-6",
        renderId: "render-31c16dfd",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1851985705 md:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-2xl",
          renderId: "render-bf8cb7e0",
          as: "div",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1851985705 text-2xl md:text-3xl font-semibold mb-4",
            renderId: "render-8d99cf7e",
            as: "h3",
            children: "A Heart After God — Commitment, Love, and Service"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1851985705 text-white/80 leading-relaxed mb-4",
            renderId: "render-75f861a6",
            as: "p",
            children: "Dr. Pastor Lawson Ngoa carries a burning love for the Lord and a deep compassion for people. His walk is marked by prayer, humility, and obedience to the Holy Spirit. Whether in the pulpit, in a village outreach, or in a quiet counseling room, he serves with the same excellence and tenderness of Christ."
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1851985705 text-white/80 leading-relaxed mb-4",
            renderId: "render-ab8f3d08",
            as: "p",
            children: "His commitment is simple and strong: preach Christ, build people, and bless cities. For decades, he has invested himself in teaching sound doctrine, raising leaders, and restoring families. Countless men and women testify of how his messages unlocked purpose, healed hearts, and ignited a passion for holiness and service."
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1851985705 text-white/80 leading-relaxed mb-4",
            renderId: "render-4d86b41c",
            as: "p",
            children: "Beyond the pulpit, his life models integrity and generosity. He believes ministry is not a stage but a life poured out. He mentors young ministers, strengthens pastors, and stands with churches across denominations—always pointing eyes to Jesus and not to self."
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1851985705 text-white/80 leading-relaxed mb-2",
            renderId: "render-a91ec344",
            as: "p",
            children: "His love for the Scriptures is evident in every sermon and every decision. He teaches the Word with clarity and power, calling the church to maturity, prayer, and mission."
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1851985705 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-2xl",
          renderId: "render-cd4a2fa3",
          as: "aside",
          children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1851985705 text-xl font-semibold mb-3",
            renderId: "render-f4ad47f1",
            as: "h4",
            children: "Impact in Nigeria"
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1851985705 space-y-2 text-white/80 text-sm",
            renderId: "render-d314c020",
            as: "ul",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705",
              renderId: "render-052b85c5",
              as: "li",
              children: "• Citywide crusades and soul-winning outreaches"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705",
              renderId: "render-7e7e60ab",
              as: "li",
              children: "• Church plants and strengthening across states"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705",
              renderId: "render-03b05242",
              as: "li",
              children: "• Training for emerging pastors and workers"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705",
              renderId: "render-3543772e",
              as: "li",
              children: "• Campus missions and youth discipleship"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705",
              renderId: "render-4bfda559",
              as: "li",
              children: "• Compassion initiatives for the poor and displaced"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705",
              renderId: "render-80c3a47d",
              as: "li",
              children: "• Unity projects across Christian denominations"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1851985705 mt-5 rounded-2xl border border-white/10 bg-white/5 p-4",
            renderId: "render-cdd8f8b4",
            as: "div",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 text-white/75 italic",
              renderId: "render-3b978fdd",
              as: "p",
              children: "“Our nation will see the glory of Jesus as the church walks in truth, love, and power.”"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 text-white/60 mt-2 text-sm",
              renderId: "render-08852a26",
              as: "p",
              children: "— Dr. Pastor Lawson Ngoa"
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      "data-animate": true,
      className: "jsx-1851985705 px-6 py-10",
      renderId: "render-970ffcd3",
      as: "section",
      children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
        className: "jsx-1851985705 max-w-6xl mx-auto",
        renderId: "render-e71876b3",
        as: "div",
        children: /* @__PURE__ */ jsx(PolymorphicComponent_default, {
          className: "jsx-1851985705 flex flex-wrap items-center gap-3",
          renderId: "render-e37f88c9",
          as: "div",
          children: ["Faith-filled", "Scripture-centered", "Spirit-led", "Compassionate", "Excellent", "Serving"].map((v, i) => /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1851985705 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-2 text-sm text-white/80",
            renderId: "render-6b9a4de6",
            as: "span",
            children: [/* @__PURE__ */ jsx(Sparkles, {
              size: 16,
              className: "text-[#F4D03F]"
            }), " ", v]
          }, i))
        })
      })
    }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
      "data-animate": true,
      className: "jsx-1851985705 px-6 py-14 md:py-20",
      renderId: "render-1ed42ea5",
      as: "section",
      children: /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
        className: "jsx-1851985705 max-w-5xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-6",
        renderId: "render-209cc0fc",
        as: "div",
        children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          className: "jsx-1851985705 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl",
          renderId: "render-bbeec654",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1851985705 inline-flex items-center gap-2 text-xs md:text-sm text-white/70 mb-3",
            renderId: "render-d5c8ab32",
            as: "div",
            children: [/* @__PURE__ */ jsx(Sparkles, {
              size: 16,
              className: "text-[#F4D03F]"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705",
              renderId: "render-ea89fef9",
              as: "span",
              children: "Next step"
            })]
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1851985705 text-2xl md:text-3xl font-semibold mb-3",
            renderId: "render-f9932ff6",
            as: "h3",
            children: "Join the Discipleship Program"
          }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
            className: "jsx-1851985705 text-white/75 mb-6",
            renderId: "render-b99f3f22",
            as: "p",
            children: "Take the next step in your faith journey. Let’s grow together in Christ."
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1851985705 space-y-2 text-white/75 text-sm mb-6 list-disc list-inside",
            renderId: "render-d83615c4",
            as: "ul",
            children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705",
              renderId: "render-4dcfac04",
              as: "li",
              children: "Weekly Word sessions"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705",
              renderId: "render-1fc37458",
              as: "li",
              children: "Small groups and mentorship"
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705",
              renderId: "render-88c8f04c",
              as: "li",
              children: "Serving opportunities"
            })]
          }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            className: "jsx-1851985705 flex items-center gap-3 text-sm text-white/80",
            renderId: "render-48595f21",
            as: "div",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "mailto:info@sbbchurch.org",
              className: "jsx-1851985705 inline-flex items-center gap-2 hover:text-white",
              renderId: "render-c256b33e",
              as: "a",
              children: [/* @__PURE__ */ jsx(Mail, {
                size: 16,
                className: "text-[#F4D03F]"
              }), " info@sbbchurch.org"]
            }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 opacity-40",
              renderId: "render-af1efbb9",
              as: "span",
              children: "•"
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              href: "tel:+2347064200926",
              "aria-label": "Call SBBC discipleship contact number +234 706 420 0926",
              className: "jsx-1851985705 inline-flex items-center gap-2 hover:text-white",
              renderId: "render-73d9dfd2",
              as: "a",
              children: [/* @__PURE__ */ jsx(Phone, {
                size: 16,
                className: "text-[#F4D03F]"
              }), " +234 706 420 0926"]
            })]
          })]
        }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
          id: "discipleship-form",
          className: "jsx-1851985705 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-2xl",
          renderId: "render-1d1310f9",
          as: "div",
          children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
            onSubmit: handleSubmit,
            className: "jsx-1851985705 space-y-4",
            renderId: "render-1cf6f24e",
            as: "form",
            children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-1851985705",
              renderId: "render-41b72e27",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1851985705 block text-sm text-white/70 mb-1",
                renderId: "render-1e8d6dd4",
                as: "label",
                children: "Full Name"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "text",
                placeholder: "Full Name",
                value: formData.full_name,
                onChange: (e) => setFormData({
                  ...formData,
                  full_name: e.target.value
                }),
                required: true,
                className: "jsx-1851985705 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                renderId: "render-c0a0aa22",
                as: "input"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-1851985705",
              renderId: "render-ccce5866",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1851985705 block text-sm text-white/70 mb-1",
                renderId: "render-cf936a1d",
                as: "label",
                children: "Email"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "email",
                placeholder: "Email",
                value: formData.email,
                onChange: (e) => setFormData({
                  ...formData,
                  email: e.target.value
                }),
                required: true,
                className: "jsx-1851985705 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                renderId: "render-7271fa35",
                as: "input"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              className: "jsx-1851985705",
              renderId: "render-990acdf2",
              as: "div",
              children: [/* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1851985705 block text-sm text-white/70 mb-1",
                renderId: "render-8fcb047b",
                as: "label",
                children: "Phone"
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                type: "tel",
                placeholder: "Phone",
                value: formData.phone,
                onChange: (e) => setFormData({
                  ...formData,
                  phone: e.target.value
                }),
                required: true,
                className: "jsx-1851985705 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]",
                renderId: "render-a430d25e",
                as: "input"
              })]
            }), /* @__PURE__ */ jsxs(PolymorphicComponent_default, {
              type: "submit",
              disabled: loading,
              className: "jsx-1851985705 group relative w-full bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold py-3 rounded-xl transition-all duration-150 active:scale-[0.98] disabled:opacity-60 overflow-hidden",
              renderId: "render-13f91c1b",
              as: "button",
              children: [/* @__PURE__ */ jsxs(PolymorphicComponent_default, {
                className: "jsx-1851985705 relative z-10 flex items-center justify-center gap-2",
                renderId: "render-befacf0c",
                as: "span",
                children: [loading ? "Submitting..." : "Start Your Journey", !loading && /* @__PURE__ */ jsx(ArrowRight, {
                  size: 18
                })]
              }), /* @__PURE__ */ jsx(PolymorphicComponent_default, {
                className: "jsx-1851985705 absolute inset-0 pointer-events-none before:content-[''] before:absolute before:-left-1/4 before:top-0 before:h-full before:w-1/3 before:rotate-12 before:bg-white/30 before:blur-md before:transition-opacity before:duration-300 opacity-0 group-hover:opacity-100",
                renderId: "render-696a2512",
                as: "span"
              })]
            }), message && /* @__PURE__ */ jsx(PolymorphicComponent_default, {
              className: "jsx-1851985705 text-center text-sm text-[#F4D03F]",
              renderId: "render-0e57bd88",
              as: "p",
              children: message
            })]
          }), /* @__PURE__ */ jsx(ShareFormLink, {
            label: "Share this discipleship form",
            anchor: "#discipleship-form"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(ChurchFooter, {}), /* @__PURE__ */ jsx(WhatsAppButton, {}), /* @__PURE__ */ jsx(_JSXStyle, {
      id: "1851985705",
      children: ["@-webkit-keyframes fadeSlideUpVision{0%{opacity:0;-webkit-transform:translateY(16px);-ms-transform:translateY(16px);transform:translateY(16px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@keyframes fadeSlideUpVision{0%{opacity:0;-webkit-transform:translateY(16px);-ms-transform:translateY(16px);transform:translateY(16px);}100%{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "[data-animate]{-webkit-animation:fadeSlideUpVision 700ms cubic-bezier(0.22,1,0.36,1) both;animation:fadeSlideUpVision 700ms cubic-bezier(0.22,1,0.36,1) both;}", "@media (prefers-reduced-motion:reduce){[data-animate]{-webkit-animation:none !important;animation:none !important;opacity:1 !important;-webkit-transform:none !important;-ms-transform:none !important;transform:none !important;}}"]
    })]
  });
}

function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(VisionPage, {
      ...props
    })
  });
}

const route42 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: WrappedPage
}, Symbol.toStringTag, { value: 'Module' }));

async function loader({
  params
}) {
  const matches = await fg("src/**/page.{js,jsx,ts,tsx}");
  return {
    path: `/${params["*"]}`,
    pages: matches.sort((a, b) => a.length - b.length).map(match => {
      const url = match.replace("src/app", "").replace(/\/page\.(js|jsx|ts|tsx)$/, "") || "/";
      const path = url.replaceAll("[", "").replaceAll("]", "");
      const displayPath = path === "/" ? "Homepage" : path;
      return {
        url,
        path: displayPath
      };
    })
  };
}
function CreateDefaultNotFoundPage({
  loaderData
}) {
  const [siteMap, setSitemap] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window !== "undefined" && window.parent && window.parent !== window) {
      const handler = event => {
        if (event.data.type === "sandbox:sitemap") {
          window.removeEventListener("message", handler);
          setSitemap(event.data.sitemap);
        }
      };
      window.parent.postMessage({
        type: "sandbox:sitemap"
      }, "*");
      window.addEventListener("message", handler);
      return () => {
        window.removeEventListener("message", handler);
      };
    }
  }, []);
  const missingPath = loaderData.path.replace(/^\//, "");
  const existingRoutes = loaderData.pages.map(page => ({
    path: page.path,
    url: page.url
  }));
  const handleBack = () => {
    navigate("/");
  };
  const handleSearch = value => {
    if (!siteMap) {
      const path = `/${value}`;
      navigate(path);
    } else {
      navigate(value);
    }
  };
  const handleCreatePage = useCallback(() => {
    window.parent.postMessage({
      type: "sandbox:web:create",
      path: missingPath,
      view: "web"
    }, "*");
  }, [missingPath]);
  return /* @__PURE__ */jsxs(PolymorphicComponent_default, {
    className: "flex sm:w-full w-screen sm:min-w-[850px] flex-col",
    renderId: "render-03fa6425",
    as: "div",
    children: [/* @__PURE__ */jsxs(PolymorphicComponent_default, {
      className: "flex w-full items-center gap-2 p-5",
      renderId: "render-907c569b",
      as: "div",
      children: [/* @__PURE__ */jsx(PolymorphicComponent_default, {
        type: "button",
        onClick: handleBack,
        className: "flex items-center justify-center w-10 h-10 rounded-md",
        renderId: "render-21a5b225",
        as: "button",
        children: /* @__PURE__ */jsxs("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": "Back",
          role: "img",
          children: [/* @__PURE__ */jsx(PolymorphicComponent_default, {
            d: "M8.5957 2.65435L2.25005 9L8.5957 15.3457",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            renderId: "render-1538c733",
            as: "path"
          }), /* @__PURE__ */jsx(PolymorphicComponent_default, {
            d: "M2.25007 9L15.75 9",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            renderId: "render-04ca1efa",
            as: "path"
          })]
        })
      }), /* @__PURE__ */jsxs(PolymorphicComponent_default, {
        className: "flex flex-row divide-x divide-gray-200 rounded-[8px] h-8 w-[300px] border border-gray-200 bg-gray-50 text-gray-500",
        renderId: "render-26446501",
        as: "div",
        children: [/* @__PURE__ */jsx(PolymorphicComponent_default, {
          className: "flex items-center px-[14px] py-[5px]",
          renderId: "render-33d4d107",
          as: "div",
          children: /* @__PURE__ */jsx(PolymorphicComponent_default, {
            renderId: "render-b926d98c",
            as: "span",
            children: "/"
          })
        }), /* @__PURE__ */jsx(PolymorphicComponent_default, {
          className: "flex items-center min-w-0",
          renderId: "render-6076909c",
          as: "div",
          children: /* @__PURE__ */jsx(PolymorphicComponent_default, {
            className: "border-0 bg-transparent px-3 py-2 focus:outline-none truncate max-w-[300px]",
            style: {
              minWidth: 0
            },
            title: missingPath,
            renderId: "render-89fbbdf4",
            as: "p",
            children: missingPath
          })
        })]
      })]
    }), /* @__PURE__ */jsxs(PolymorphicComponent_default, {
      className: "flex flex-grow flex-col items-center justify-center pt-[100px] text-center gap-[20px]",
      renderId: "render-6fc4974f",
      as: "div",
      children: [/* @__PURE__ */jsx(PolymorphicComponent_default, {
        className: "text-4xl font-medium text-gray-900 px-2",
        renderId: "render-6b80a054",
        as: "h1",
        children: "Uh-oh! This page doesn't exist (yet)."
      }), /* @__PURE__ */jsxs(PolymorphicComponent_default, {
        className: "pt-4 pb-12 px-2 text-gray-500",
        renderId: "render-b64927f9",
        as: "p",
        children: ['Looks like "', /* @__PURE__ */jsxs(PolymorphicComponent_default, {
          className: "font-bold",
          renderId: "render-d946ccc1",
          as: "span",
          children: ["/", missingPath]
        }), `" isn't part of your project. But no worries, you've got options!`]
      }), /* @__PURE__ */jsx(PolymorphicComponent_default, {
        className: "px-[20px] w-full",
        renderId: "render-14e54d2d",
        as: "div",
        children: /* @__PURE__ */jsxs(PolymorphicComponent_default, {
          className: "flex flex-row justify-center items-center w-full max-w-[800px] mx-auto border border-gray-200 rounded-lg p-[20px] mb-[40px] gap-[20px]",
          renderId: "render-f14f37cc",
          as: "div",
          children: [/* @__PURE__ */jsxs(PolymorphicComponent_default, {
            className: "flex flex-col gap-[5px] items-start self-start w-1/2",
            renderId: "render-fb6657bf",
            as: "div",
            children: [/* @__PURE__ */jsx(PolymorphicComponent_default, {
              className: "text-sm text-black text-left",
              renderId: "render-b031717e",
              as: "p",
              children: "Build it from scratch"
            }), /* @__PURE__ */jsxs(PolymorphicComponent_default, {
              className: "text-sm text-gray-500 text-left",
              renderId: "render-52e3136e",
              as: "p",
              children: ['Create a new page to live at "', /* @__PURE__ */jsxs(PolymorphicComponent_default, {
                renderId: "render-11e19838",
                as: "span",
                children: ["/", missingPath]
              }), '"']
            })]
          }), /* @__PURE__ */jsx(PolymorphicComponent_default, {
            className: "flex flex-row items-center justify-end w-1/2",
            renderId: "render-a2709acb",
            as: "div",
            children: /* @__PURE__ */jsx(PolymorphicComponent_default, {
              type: "button",
              className: "bg-black text-white px-[10px] py-[5px] rounded-md",
              onClick: () => handleCreatePage(),
              renderId: "render-211e47fb",
              as: "button",
              children: "Create Page"
            })
          })]
        })
      }), /* @__PURE__ */jsx(PolymorphicComponent_default, {
        className: "pb-20 lg:pb-[80px]",
        renderId: "render-0da17356",
        as: "div",
        children: /* @__PURE__ */jsx(PolymorphicComponent_default, {
          className: "flex items-center text-gray-500",
          renderId: "render-399f41c6",
          as: "p",
          children: "Check out all your project's routes here ↓"
        })
      }), siteMap ? /* @__PURE__ */jsx(PolymorphicComponent_default, {
        className: "flex flex-col justify-center items-center w-full px-[50px]",
        renderId: "render-fcbaeef3",
        as: "div",
        children: /* @__PURE__ */jsxs(PolymorphicComponent_default, {
          className: "flex flex-col justify-between items-center w-full max-w-[600px] gap-[10px]",
          renderId: "render-0263bae2",
          as: "div",
          children: [/* @__PURE__ */jsx(PolymorphicComponent_default, {
            className: "text-sm text-gray-300 pb-[10px] self-start p-4",
            renderId: "render-63493895",
            as: "p",
            children: "PAGES"
          }), siteMap.webPages?.map(route => /* @__PURE__ */jsxs(PolymorphicComponent_default, {
            type: "button",
            onClick: () => handleSearch(route.cleanRoute || ""),
            className: "flex flex-row justify-between text-center items-center p-4 rounded-lg bg-white shadow-sm w-full hover:bg-gray-50",
            renderId: "render-ce7aa9c5",
            as: "button",
            children: [/* @__PURE__ */jsx(PolymorphicComponent_default, {
              className: "font-medium text-gray-900",
              renderId: "render-405848b8",
              as: "h3",
              children: route.name
            }), /* @__PURE__ */jsx(PolymorphicComponent_default, {
              className: "text-sm text-gray-400",
              renderId: "render-e7e27f7c",
              as: "p",
              children: route.cleanRoute
            })]
          }, route.id))]
        })
      }) : /* @__PURE__ */jsx(PolymorphicComponent_default, {
        className: "flex flex-wrap gap-3 w-full max-w-[80rem] mx-auto pb-5 px-2",
        renderId: "render-f08aac01",
        as: "div",
        children: existingRoutes.map(route => /* @__PURE__ */jsx(PolymorphicComponent_default, {
          className: "flex flex-col flex-grow basis-full sm:basis-[calc(50%-0.375rem)] xl:basis-[calc(33.333%-0.5rem)]",
          renderId: "render-bfa26aab",
          as: "div",
          children: /* @__PURE__ */jsxs(PolymorphicComponent_default, {
            className: "w-full flex-1 flex flex-col items-center ",
            renderId: "render-daf58d69",
            as: "div",
            children: [/* @__PURE__ */jsx(PolymorphicComponent_default, {
              className: "relative w-full max-w-[350px] h-48 sm:h-56 lg:h-64 overflow-hidden rounded-[8px] border border-comeback-gray-75 transition-all group-hover:shadow-md",
              renderId: "render-0ec2bdc0",
              as: "div",
              children: /* @__PURE__ */jsx(PolymorphicComponent_default, {
                type: "button",
                onClick: () => handleSearch(route.url.replace(/^\//, "")),
                className: "h-full w-full rounded-[8px] bg-gray-50 bg-cover",
                renderId: "render-97c906dd",
                as: "button"
              })
            }), /* @__PURE__ */jsx(PolymorphicComponent_default, {
              className: "pt-3 text-left text-gray-500 w-full max-w-[350px]",
              renderId: "render-a8b530a6",
              as: "p",
              children: route.path
            })]
          })
        }, route.path))
      })]
    })]
  });
}

const route43 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: CreateDefaultNotFoundPage,
  loader
}, Symbol.toStringTag, { value: 'Module' }));

const serverManifest = {'entry':{'module':'/assets/entry.client-CboDhDBk.js','imports':['/assets/index-Cm2AH5hM.js','/assets/index-D8j7if6r.js','/assets/chunk-JMJ3UQ3L-BhuHJRPs.js'],'css':[]},'routes':{'root':{'id':'root','parentId':undefined,'path':'','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':true,'module':'/assets/root-BILWAWqu.js','imports':['/assets/index-Cm2AH5hM.js','/assets/index-D8j7if6r.js','/assets/chunk-JMJ3UQ3L-BhuHJRPs.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/index-BBR7LY95.js','/assets/react-C185HMQV.js','/assets/index-Cz7S5WBv.js','/assets/clsx-DPoTaEZk.js'],'css':['/assets/root-BVY80XPi.css'],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'page':{'id':'page','parentId':'root','path':undefined,'index':true,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-BIpmEPtd.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/arrow-right-BhZHpvPy.js','/assets/chevron-right-Q6GUIbsF.js','/assets/useQuery-eM3CcMH5.js','/assets/users-round-BwdxsB0p.js','/assets/ImageGallery-DAPese8N.js','/assets/building-2-BMYGy_QV.js','/assets/church-DdsuKT1Z.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/heart-Bwbh3ob-.js','/assets/play-ByWJkOdS.js','/assets/users-C4azr-uK.js','/assets/target-KONwg4nt.js','/assets/shield-check-CIRa0Pch.js','/assets/globe-BVtvwVhE.js','/assets/calendar-Yv56SeJL.js','/assets/clock-DSsLctYR.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js','/assets/ShareFormLink-B9eXz5yl.js','/assets/share-2-Bh2KJJu9.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'account/logout/page':{'id':'account/logout/page','parentId':'root','path':'account/logout','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-B8-8u-Pv.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/useAuth-oYWCT0fR.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/react-C185HMQV.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'account/set-password/page':{'id':'account/set-password/page','parentId':'root','path':'account/set-password','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-DHWHROjC.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'account/signin/page':{'id':'account/signin/page','parentId':'root','path':'account/signin','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-K0oKlmOK.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/useAuth-oYWCT0fR.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/react-C185HMQV.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'account/signup/page':{'id':'account/signup/page','parentId':'root','path':'account/signup','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-l5nDE8SJ.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/useAuth-oYWCT0fR.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/react-C185HMQV.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'admin/page':{'id':'admin/page','parentId':'root','path':'admin','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-CMqyJGHd.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/react-C185HMQV.js','/assets/useQuery-eM3CcMH5.js','/assets/trending-up-DNuoLV2f.js','/assets/file-text-DzfRo2_I.js','/assets/graduation-cap-CWthUNBn.js','/assets/users-C4azr-uK.js','/assets/mail-CiQh5dzz.js','/assets/search-CYPLnbEs.js','/assets/circle-check-big-DmehyyTg.js','/assets/banknote-FMv5jW8T.js','/assets/clsx-DPoTaEZk.js','/assets/clock-DSsLctYR.js','/assets/useMutation-DJ4L9gf3.js','/assets/dollar-sign-CbjM81t3.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'admin-access/page':{'id':'admin-access/page','parentId':'root','path':'admin-access','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-BOm4Xf_a.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/useAuth-oYWCT0fR.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/react-C185HMQV.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'admin-bypass/page':{'id':'admin-bypass/page','parentId':'root','path':'admin-bypass','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-WnD9NQ0p.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'admin-bypass/disable/page':{'id':'admin-bypass/disable/page','parentId':'root','path':'admin-bypass/disable','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-CzV89x6K.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'contact/page':{'id':'contact/page','parentId':'root','path':'contact','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-BfPSIBRq.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/SEOHead-DpyF0n7R.js','/assets/ShareFormLink-B9eXz5yl.js','/assets/index-Cz7S5WBv.js','/assets/useMutation-DJ4L9gf3.js','/assets/calendar-Yv56SeJL.js','/assets/clock-DSsLctYR.js','/assets/circle-check-Dexp-RKp.js','/assets/arrow-right-BhZHpvPy.js','/assets/mail-CiQh5dzz.js','/assets/useQuery-eM3CcMH5.js','/assets/share-2-Bh2KJJu9.js','/assets/index-D8j7if6r.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/page':{'id':'education/page','parentId':'root','path':'education','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-BmtqZs-u.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/SEOHead-DpyF0n7R.js','/assets/useQuery-eM3CcMH5.js','/assets/graduation-cap-CWthUNBn.js','/assets/code--oBLBnd8.js','/assets/trophy-CDozoegI.js','/assets/heart-Bwbh3ob-.js','/assets/book-open-BltWthX3.js','/assets/badge-dollar-sign-DwSUdlc5.js','/assets/circle-play-C51p11Tc.js','/assets/search-CYPLnbEs.js','/assets/arrow-right-BhZHpvPy.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/deep-knowledge-academy/page':{'id':'education/deep-knowledge-academy/page','parentId':'root','path':'education/deep-knowledge-academy','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-BwtuHg2d.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/SEOHead-DpyF0n7R.js','/assets/chevron-right-Q6GUIbsF.js','/assets/circle-check-big-DmehyyTg.js','/assets/heart-Bwbh3ob-.js','/assets/book-open-BltWthX3.js','/assets/users-C4azr-uK.js','/assets/graduation-cap-CWthUNBn.js','/assets/calendar-Yv56SeJL.js','/assets/index-Cz7S5WBv.js','/assets/useUpload-DRViR1Z_.js','/assets/useMutation-DJ4L9gf3.js','/assets/mail-CiQh5dzz.js','/assets/useQuery-eM3CcMH5.js','/assets/index-D8j7if6r.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/football-academy/page':{'id':'education/football-academy/page','parentId':'root','path':'education/football-academy','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-BcqM7OOK.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/ShareFormLink-B9eXz5yl.js','/assets/useMutation-DJ4L9gf3.js','/assets/trophy-CDozoegI.js','/assets/users-C4azr-uK.js','/assets/clock-DSsLctYR.js','/assets/shield-o034dP6P.js','/assets/calendar-Yv56SeJL.js','/assets/mail-CiQh5dzz.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/share-2-Bh2KJJu9.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/lawson-university/page':{'id':'education/lawson-university/page','parentId':'root','path':'education/lawson-university','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-Ihewpq1v.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/SEOHead-DpyF0n7R.js','/assets/useUpload-DRViR1Z_.js','/assets/ShareFormLink-B9eXz5yl.js','/assets/sparkles-Cbz2cXkX.js','/assets/graduation-cap-CWthUNBn.js','/assets/circle-check-big-DmehyyTg.js','/assets/arrow-right-BhZHpvPy.js','/assets/calendar-Yv56SeJL.js','/assets/users-C4azr-uK.js','/assets/shield-o034dP6P.js','/assets/paperclip-BMM4Tqot.js','/assets/heart-Bwbh3ob-.js','/assets/share-2-Bh2KJJu9.js','/assets/book-open-BltWthX3.js','/assets/circle-play-C51p11Tc.js','/assets/globe-BVtvwVhE.js','/assets/award-BYnFt3br.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js','/assets/useQuery-eM3CcMH5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/lawson-university/admissions/page':{'id':'education/lawson-university/admissions/page','parentId':'root','path':'education/lawson-university/admissions','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-D1-v3I2H.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/file-text-DzfRo2_I.js','/assets/circle-check-big-DmehyyTg.js','/assets/arrow-right-BhZHpvPy.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/lawson-university/doctorate/page':{'id':'education/lawson-university/doctorate/page','parentId':'root','path':'education/lawson-university/doctorate','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-BXKL2np5.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/graduation-cap-CWthUNBn.js','/assets/arrow-right-BhZHpvPy.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/lawson-university/faculty/page':{'id':'education/lawson-university/faculty/page','parentId':'root','path':'education/lawson-university/faculty','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-Czyh7f7U.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/users-C4azr-uK.js','/assets/mail-CiQh5dzz.js','/assets/graduation-cap-CWthUNBn.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/lawson-university/masters/page':{'id':'education/lawson-university/masters/page','parentId':'root','path':'education/lawson-university/masters','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-KZENcj_6.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/award-BYnFt3br.js','/assets/arrow-right-BhZHpvPy.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/lawson-university/research/page':{'id':'education/lawson-university/research/page','parentId':'root','path':'education/lawson-university/research','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-LxjnPqWg.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/arrow-right-BhZHpvPy.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/lawson-university/tuition-aid/page':{'id':'education/lawson-university/tuition-aid/page','parentId':'root','path':'education/lawson-university/tuition-aid','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-CZEZUEFt.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/badge-dollar-sign-DwSUdlc5.js','/assets/arrow-right-BhZHpvPy.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/lawson-university/undergraduate/page':{'id':'education/lawson-university/undergraduate/page','parentId':'root','path':'education/lawson-university/undergraduate','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-DXp2oCTH.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/book-open-BltWthX3.js','/assets/arrow-right-BhZHpvPy.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/marriage-academy/page':{'id':'education/marriage-academy/page','parentId':'root','path':'education/marriage-academy','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-BfOxpKUI.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/SEOHead-DpyF0n7R.js','/assets/ShareFormLink-B9eXz5yl.js','/assets/useMutation-DJ4L9gf3.js','/assets/heart-Bwbh3ob-.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js','/assets/useQuery-eM3CcMH5.js','/assets/share-2-Bh2KJJu9.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/seminary/page':{'id':'education/seminary/page','parentId':'root','path':'education/seminary','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-DQEFIfM3.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/SEOHead-DpyF0n7R.js','/assets/ShareFormLink-B9eXz5yl.js','/assets/book-open-BltWthX3.js','/assets/graduation-cap-CWthUNBn.js','/assets/users-C4azr-uK.js','/assets/clock-DSsLctYR.js','/assets/calendar-Yv56SeJL.js','/assets/circle-check-big-DmehyyTg.js','/assets/file-text-DzfRo2_I.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js','/assets/useQuery-eM3CcMH5.js','/assets/share-2-Bh2KJJu9.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/seminary/admissions/page':{'id':'education/seminary/admissions/page','parentId':'root','path':'education/seminary/admissions','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-B0_i7Aol.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/useUpload-DRViR1Z_.js','/assets/useMutation-DJ4L9gf3.js','/assets/circle-check-big-DmehyyTg.js','/assets/paperclip-BMM4Tqot.js','/assets/arrow-right-BhZHpvPy.js','/assets/mail-CiQh5dzz.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/seminary/calendar/page':{'id':'education/seminary/calendar/page','parentId':'root','path':'education/seminary/calendar','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-RbNz6KF2.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/seminary/contact/page':{'id':'education/seminary/contact/page','parentId':'root','path':'education/seminary/contact','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-C7FpMMP1.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/mail-CiQh5dzz.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/seminary/faculty/page':{'id':'education/seminary/faculty/page','parentId':'root','path':'education/seminary/faculty','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-CTQLpzoK.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/mail-CiQh5dzz.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/seminary/faith/page':{'id':'education/seminary/faith/page','parentId':'root','path':'education/seminary/faith','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-DqD6fWlV.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/seminary/programs/page':{'id':'education/seminary/programs/page','parentId':'root','path':'education/seminary/programs','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-C6b-OgZx.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/book-open-BltWthX3.js','/assets/circle-check-big-DmehyyTg.js','/assets/file-text-DzfRo2_I.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/seminary/student-life/page':{'id':'education/seminary/student-life/page','parentId':'root','path':'education/seminary/student-life','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-C9rt39W8.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/church-DdsuKT1Z.js','/assets/users-C4azr-uK.js','/assets/heart-Bwbh3ob-.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/seminary/tuition-aid/page':{'id':'education/seminary/tuition-aid/page','parentId':'root','path':'education/seminary/tuition-aid','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-4vLqTHAj.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/circle-check-big-DmehyyTg.js','/assets/dollar-sign-CbjM81t3.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'education/tech-hub/page':{'id':'education/tech-hub/page','parentId':'root','path':'education/tech-hub','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-B-fx-XwY.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/ShareFormLink-B9eXz5yl.js','/assets/code--oBLBnd8.js','/assets/clock-DSsLctYR.js','/assets/calendar-Yv56SeJL.js','/assets/circle-check-big-DmehyyTg.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js','/assets/share-2-Bh2KJJu9.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'finance/page':{'id':'finance/page','parentId':'root','path':'finance','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-Vn2YvtJg.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/SEOHead-DpyF0n7R.js','/assets/shield-check-CIRa0Pch.js','/assets/globe-BVtvwVhE.js','/assets/trending-up-DNuoLV2f.js','/assets/arrow-right-BhZHpvPy.js','/assets/line-chart-DGn9SR2Y.js','/assets/building-2-BMYGy_QV.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js','/assets/useQuery-eM3CcMH5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'finance/erdgeify/page':{'id':'finance/erdgeify/page','parentId':'root','path':'finance/erdgeify','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-CotdMTwD.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/globe-BVtvwVhE.js','/assets/building-2-BMYGy_QV.js','/assets/line-chart-DGn9SR2Y.js','/assets/banknote-FMv5jW8T.js','/assets/users-C4azr-uK.js','/assets/shield-check-CIRa0Pch.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'foundation/page':{'id':'foundation/page','parentId':'root','path':'foundation','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-BZUIVDNi.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/SEOHead-DpyF0n7R.js','/assets/heart-Bwbh3ob-.js','/assets/arrow-right-BhZHpvPy.js','/assets/users-C4azr-uK.js','/assets/share-2-Bh2KJJu9.js','/assets/sparkles-Cbz2cXkX.js','/assets/earth-C17V1jpK.js','/assets/shield-o034dP6P.js','/assets/circle-play-C51p11Tc.js','/assets/building-2-BMYGy_QV.js','/assets/mail-CiQh5dzz.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/useQuery-eM3CcMH5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'join/page':{'id':'join/page','parentId':'root','path':'join','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-ChW3nEVh.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/SEOHead-DpyF0n7R.js','/assets/index-Cz7S5WBv.js','/assets/useMutation-DJ4L9gf3.js','/assets/circle-check-Dexp-RKp.js','/assets/arrow-right-BhZHpvPy.js','/assets/mail-CiQh5dzz.js','/assets/useQuery-eM3CcMH5.js','/assets/index-D8j7if6r.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'messages/page':{'id':'messages/page','parentId':'root','path':'messages','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-DgQ603Bh.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/SEOHead-DpyF0n7R.js','/assets/useQuery-eM3CcMH5.js','/assets/arrow-right-BhZHpvPy.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'news/page':{'id':'news/page','parentId':'root','path':'news','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-DfUPDO3Y.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/SEOHead-DpyF0n7R.js','/assets/useQuery-eM3CcMH5.js','/assets/users-C4azr-uK.js','/assets/clock-DSsLctYR.js','/assets/play-ByWJkOdS.js','/assets/share-2-Bh2KJJu9.js','/assets/heart-Bwbh3ob-.js','/assets/arrow-right-BhZHpvPy.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'pastorium/page':{'id':'pastorium/page','parentId':'root','path':'pastorium','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-DevS4Yok.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/SEOHead-DpyF0n7R.js','/assets/target-KONwg4nt.js','/assets/users-C4azr-uK.js','/assets/building-Dsz4MxLu.js','/assets/arrow-right-BhZHpvPy.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/mail-CiQh5dzz.js','/assets/useQuery-eM3CcMH5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'pastorium/[slug]/page':{'id':'pastorium/[slug]/page','parentId':'root','path':'pastorium/:slug','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-gbEuK9fi.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/ImageGallery-DAPese8N.js','/assets/target-KONwg4nt.js','/assets/earth-C17V1jpK.js','/assets/calendar-Yv56SeJL.js','/assets/users-C4azr-uK.js','/assets/mail-CiQh5dzz.js','/assets/building-Dsz4MxLu.js','/assets/book-open-BltWthX3.js','/assets/chunk-JMJ3UQ3L-BhuHJRPs.js','/assets/index-BBR7LY95.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/ShareFormLink-B9eXz5yl.js','/assets/share-2-Bh2KJJu9.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'setup-admin/page':{'id':'setup-admin/page','parentId':'root','path':'setup-admin','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-tfc5ZxZk.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'vision/page':{'id':'vision/page','parentId':'root','path':'vision','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-D5RawZAa.js','imports':['/assets/index-Cm2AH5hM.js','/assets/layout-B8VG82GM.js','/assets/PolymorphicComponent-DKItapYT.js','/assets/ChurchFooter-CoHPDfcj.js','/assets/WhatsAppButton-Rp3vYP80.js','/assets/SEOHead-DpyF0n7R.js','/assets/ShareFormLink-B9eXz5yl.js','/assets/sparkles-Cbz2cXkX.js','/assets/earth-C17V1jpK.js','/assets/book-open-BltWthX3.js','/assets/users-round-BwdxsB0p.js','/assets/mail-CiQh5dzz.js','/assets/arrow-right-BhZHpvPy.js','/assets/index-Cz7S5WBv.js','/assets/index-D8j7if6r.js','/assets/useQuery-eM3CcMH5.js','/assets/share-2-Bh2KJJu9.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'__create/not-found':{'id':'__create/not-found','parentId':'root','path':'*?','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/not-found-GMM_B1eG.js','imports':['/assets/PolymorphicComponent-DKItapYT.js','/assets/index-BBR7LY95.js','/assets/index-Cm2AH5hM.js','/assets/chunk-JMJ3UQ3L-BhuHJRPs.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined}},'url':'/assets/manifest-32910b6f.js','version':'32910b6f','sri':undefined};

const assetsBuildDirectory = "build/client";
      const basename = "/";
      const future = {"unstable_optimizeDeps":false,"unstable_subResourceIntegrity":false,"v8_middleware":false,"v8_splitRouteModules":false,"v8_viteEnvironmentApi":false};
      const ssr = true;
      const isSpaMode = false;
      const prerender = [];
      const routeDiscovery = {"mode":"lazy","manifestPath":"/__manifest"};
      const publicPath = "/";
      const entry = { module: entryServer };
      const routes = {
        "root": {
          id: "root",
          parentId: undefined,
          path: "",
          index: undefined,
          caseSensitive: undefined,
          module: route0
        },
  "page": {
          id: "page",
          parentId: "root",
          path: undefined,
          index: true,
          caseSensitive: undefined,
          module: route1
        },
  "account/logout/page": {
          id: "account/logout/page",
          parentId: "root",
          path: "account/logout",
          index: undefined,
          caseSensitive: undefined,
          module: route2
        },
  "account/set-password/page": {
          id: "account/set-password/page",
          parentId: "root",
          path: "account/set-password",
          index: undefined,
          caseSensitive: undefined,
          module: route3
        },
  "account/signin/page": {
          id: "account/signin/page",
          parentId: "root",
          path: "account/signin",
          index: undefined,
          caseSensitive: undefined,
          module: route4
        },
  "account/signup/page": {
          id: "account/signup/page",
          parentId: "root",
          path: "account/signup",
          index: undefined,
          caseSensitive: undefined,
          module: route5
        },
  "admin/page": {
          id: "admin/page",
          parentId: "root",
          path: "admin",
          index: undefined,
          caseSensitive: undefined,
          module: route6
        },
  "admin-access/page": {
          id: "admin-access/page",
          parentId: "root",
          path: "admin-access",
          index: undefined,
          caseSensitive: undefined,
          module: route7
        },
  "admin-bypass/page": {
          id: "admin-bypass/page",
          parentId: "root",
          path: "admin-bypass",
          index: undefined,
          caseSensitive: undefined,
          module: route8
        },
  "admin-bypass/disable/page": {
          id: "admin-bypass/disable/page",
          parentId: "root",
          path: "admin-bypass/disable",
          index: undefined,
          caseSensitive: undefined,
          module: route9
        },
  "contact/page": {
          id: "contact/page",
          parentId: "root",
          path: "contact",
          index: undefined,
          caseSensitive: undefined,
          module: route10
        },
  "education/page": {
          id: "education/page",
          parentId: "root",
          path: "education",
          index: undefined,
          caseSensitive: undefined,
          module: route11
        },
  "education/deep-knowledge-academy/page": {
          id: "education/deep-knowledge-academy/page",
          parentId: "root",
          path: "education/deep-knowledge-academy",
          index: undefined,
          caseSensitive: undefined,
          module: route12
        },
  "education/football-academy/page": {
          id: "education/football-academy/page",
          parentId: "root",
          path: "education/football-academy",
          index: undefined,
          caseSensitive: undefined,
          module: route13
        },
  "education/lawson-university/page": {
          id: "education/lawson-university/page",
          parentId: "root",
          path: "education/lawson-university",
          index: undefined,
          caseSensitive: undefined,
          module: route14
        },
  "education/lawson-university/admissions/page": {
          id: "education/lawson-university/admissions/page",
          parentId: "root",
          path: "education/lawson-university/admissions",
          index: undefined,
          caseSensitive: undefined,
          module: route15
        },
  "education/lawson-university/doctorate/page": {
          id: "education/lawson-university/doctorate/page",
          parentId: "root",
          path: "education/lawson-university/doctorate",
          index: undefined,
          caseSensitive: undefined,
          module: route16
        },
  "education/lawson-university/faculty/page": {
          id: "education/lawson-university/faculty/page",
          parentId: "root",
          path: "education/lawson-university/faculty",
          index: undefined,
          caseSensitive: undefined,
          module: route17
        },
  "education/lawson-university/masters/page": {
          id: "education/lawson-university/masters/page",
          parentId: "root",
          path: "education/lawson-university/masters",
          index: undefined,
          caseSensitive: undefined,
          module: route18
        },
  "education/lawson-university/research/page": {
          id: "education/lawson-university/research/page",
          parentId: "root",
          path: "education/lawson-university/research",
          index: undefined,
          caseSensitive: undefined,
          module: route19
        },
  "education/lawson-university/tuition-aid/page": {
          id: "education/lawson-university/tuition-aid/page",
          parentId: "root",
          path: "education/lawson-university/tuition-aid",
          index: undefined,
          caseSensitive: undefined,
          module: route20
        },
  "education/lawson-university/undergraduate/page": {
          id: "education/lawson-university/undergraduate/page",
          parentId: "root",
          path: "education/lawson-university/undergraduate",
          index: undefined,
          caseSensitive: undefined,
          module: route21
        },
  "education/marriage-academy/page": {
          id: "education/marriage-academy/page",
          parentId: "root",
          path: "education/marriage-academy",
          index: undefined,
          caseSensitive: undefined,
          module: route22
        },
  "education/seminary/page": {
          id: "education/seminary/page",
          parentId: "root",
          path: "education/seminary",
          index: undefined,
          caseSensitive: undefined,
          module: route23
        },
  "education/seminary/admissions/page": {
          id: "education/seminary/admissions/page",
          parentId: "root",
          path: "education/seminary/admissions",
          index: undefined,
          caseSensitive: undefined,
          module: route24
        },
  "education/seminary/calendar/page": {
          id: "education/seminary/calendar/page",
          parentId: "root",
          path: "education/seminary/calendar",
          index: undefined,
          caseSensitive: undefined,
          module: route25
        },
  "education/seminary/contact/page": {
          id: "education/seminary/contact/page",
          parentId: "root",
          path: "education/seminary/contact",
          index: undefined,
          caseSensitive: undefined,
          module: route26
        },
  "education/seminary/faculty/page": {
          id: "education/seminary/faculty/page",
          parentId: "root",
          path: "education/seminary/faculty",
          index: undefined,
          caseSensitive: undefined,
          module: route27
        },
  "education/seminary/faith/page": {
          id: "education/seminary/faith/page",
          parentId: "root",
          path: "education/seminary/faith",
          index: undefined,
          caseSensitive: undefined,
          module: route28
        },
  "education/seminary/programs/page": {
          id: "education/seminary/programs/page",
          parentId: "root",
          path: "education/seminary/programs",
          index: undefined,
          caseSensitive: undefined,
          module: route29
        },
  "education/seminary/student-life/page": {
          id: "education/seminary/student-life/page",
          parentId: "root",
          path: "education/seminary/student-life",
          index: undefined,
          caseSensitive: undefined,
          module: route30
        },
  "education/seminary/tuition-aid/page": {
          id: "education/seminary/tuition-aid/page",
          parentId: "root",
          path: "education/seminary/tuition-aid",
          index: undefined,
          caseSensitive: undefined,
          module: route31
        },
  "education/tech-hub/page": {
          id: "education/tech-hub/page",
          parentId: "root",
          path: "education/tech-hub",
          index: undefined,
          caseSensitive: undefined,
          module: route32
        },
  "finance/page": {
          id: "finance/page",
          parentId: "root",
          path: "finance",
          index: undefined,
          caseSensitive: undefined,
          module: route33
        },
  "finance/erdgeify/page": {
          id: "finance/erdgeify/page",
          parentId: "root",
          path: "finance/erdgeify",
          index: undefined,
          caseSensitive: undefined,
          module: route34
        },
  "foundation/page": {
          id: "foundation/page",
          parentId: "root",
          path: "foundation",
          index: undefined,
          caseSensitive: undefined,
          module: route35
        },
  "join/page": {
          id: "join/page",
          parentId: "root",
          path: "join",
          index: undefined,
          caseSensitive: undefined,
          module: route36
        },
  "messages/page": {
          id: "messages/page",
          parentId: "root",
          path: "messages",
          index: undefined,
          caseSensitive: undefined,
          module: route37
        },
  "news/page": {
          id: "news/page",
          parentId: "root",
          path: "news",
          index: undefined,
          caseSensitive: undefined,
          module: route38
        },
  "pastorium/page": {
          id: "pastorium/page",
          parentId: "root",
          path: "pastorium",
          index: undefined,
          caseSensitive: undefined,
          module: route39
        },
  "pastorium/[slug]/page": {
          id: "pastorium/[slug]/page",
          parentId: "root",
          path: "pastorium/:slug",
          index: undefined,
          caseSensitive: undefined,
          module: route40
        },
  "setup-admin/page": {
          id: "setup-admin/page",
          parentId: "root",
          path: "setup-admin",
          index: undefined,
          caseSensitive: undefined,
          module: route41
        },
  "vision/page": {
          id: "vision/page",
          parentId: "root",
          path: "vision",
          index: undefined,
          caseSensitive: undefined,
          module: route42
        },
  "__create/not-found": {
          id: "__create/not-found",
          parentId: "root",
          path: "*?",
          index: undefined,
          caseSensitive: undefined,
          module: route43
        }
      };

export { serverManifest as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
