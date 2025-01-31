import { h as A, ref as z, computed as I, resolveComponent as S, openBlock as s, createElementBlock as i, createElementVNode as e, createVNode as y, withCtx as u, createTextVNode as _, toDisplayString as n, Fragment as p, renderList as x, unref as v, normalizeClass as f, createCommentVNode as k, createBlock as M, resolveDynamicComponent as q } from "vue";
import { Button as b } from "@/components/ui/button";
import { Card as B } from "@/components/ui/card";
/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var C = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N = ({ size: a, strokeWidth: c = 2, absoluteStrokeWidth: l, color: d, iconNode: r, name: g, class: m, ...w }, { slots: t }) => A(
  "svg",
  {
    ...C,
    width: a || C.width,
    height: a || C.height,
    stroke: d || C.stroke,
    "stroke-width": l ? Number(c) * 24 / Number(a) : c,
    class: ["lucide", `lucide-${L(g ?? "icon")}`],
    ...w
  },
  [...r.map((o) => A(...o)), ...t.default ? [t.default()] : []]
);
/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h = (a, c) => (l, { slots: d }) => A(
  N,
  {
    ...l,
    iconNode: c,
    name: a
  },
  d
);
/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j = h("BrainIcon", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
]);
/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T = h("ChartNoAxesColumnIncreasingIcon", [
  ["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }],
  ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }]
]);
/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V = h("ShieldIcon", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U = h("SparklesIcon", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P = h("TargetIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D = h("UsersIcon", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]), E = (a, c) => {
  const l = a.__vccOpts || a;
  for (const [d, r] of c)
    l[d] = r;
  return l;
}, R = { class: "min-h-screen bg-background" }, Z = { class: "sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" }, $ = { class: "container mx-auto px-4 py-4" }, F = { class: "flex items-center justify-between" }, G = { class: "flex items-center gap-8" }, H = { class: "hidden md:flex gap-6" }, O = ["href"], K = { class: "flex items-center gap-4" }, J = { class: "" }, Q = { class: "container mx-auto px-4 text-center" }, X = { class: "text-5xl font-bold mb-6" }, Y = { class: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" }, W = { class: "flex justify-center gap-4" }, ee = { class: "container mx-auto px-4" }, te = { class: "text-center" }, se = { class: "text-3xl font-bold mb-4 my-5" }, oe = { class: "text-muted-foreground" }, ne = { class: "grid md:grid-cols-3 gap-8" }, ie = { class: "text-xl font-semibold mb-2" }, ae = { class: "text-muted-foreground" }, ce = { class: "container mx-auto px-4" }, le = { class: "grid md:grid-cols-3 gap-8 text-center" }, re = { class: "text-4xl font-bold mb-2" }, de = { class: "text-muted-foreground" }, ue = { class: "container mx-auto px-4" }, pe = { class: "text-3xl font-bold text-center mb-3" }, he = { class: "grid md:grid-cols-3 gap-8" }, me = { class: "text-xl font-semibold mb-2" }, ye = { class: "text-muted-foreground" }, _e = {
  __name: "myComponent",
  setup(a) {
    const c = {
      logo: "Selfwise",
      links: [
        { name: "Fonctionnalités", href: "#features" },
        { name: "Tarifs", href: "#pricing" },
        { name: "Témoignages", href: "#testimonials" }
      ]
    }, l = z([
      {
        type: "hero",
        content: {
          title: "Révolutionnez votre pratique de coaching avec l'IA",
          subtitle: "Utilisez l'intelligence artificielle pour amplifier votre impact et accompagner vos clients vers le succès",
          cta: "Commencer l'essai gratuit",
          secondaryCta: "Voir la démo",
          image: "/hero-image.png"
        }
      },
      {
        type: "features",
        title: "Des outils conçus pour les coachs professionnels",
        subtitle: "Tout ce dont vous avez besoin pour un coaching moderne et efficace",
        items: [
          {
            icon: j,
            title: "IA Assistant Personnel",
            description: "Un assistant IA qui vous aide à préparer vos séances et analyser les progrès"
          },
          {
            icon: D,
            title: "Gestion des Clients",
            description: "Suivez facilement le parcours et l'évolution de chaque client"
          },
          {
            icon: P,
            title: "Objectifs Personnalisés",
            description: "Créez des parcours sur mesure adaptés aux besoins spécifiques"
          }
        ]
      },
      {
        type: "stats",
        items: [
          { value: "2,500+", label: "Coachs actifs" },
          { value: "15,000+", label: "Clients accompagnés" },
          { value: "95%", label: "Taux de satisfaction" }
        ]
      },
      {
        type: "benefits",
        title: "Pourquoi choisir Selfwise ?",
        items: [
          {
            icon: T,
            title: "Suivi des Progrès",
            description: "Mesurez l'impact de vos interventions avec des analyses détaillées"
          },
          {
            icon: V,
            title: "Sécurité Garantie",
            description: "Vos données et celles de vos clients sont protégées aux plus hauts standards"
          },
          {
            icon: U,
            title: "IA Éthique",
            description: "Une IA développée dans le respect de l'éthique du coaching"
          }
        ]
      }
    ]), d = I(
      () => l.value.filter((g) => !g.hidden)
    ), r = I(() => "py-24 first:pt-16 last:pb-32 mb-1 mt-1 ");
    return (g, m) => {
      const w = S("RouterLink");
      return s(), i("div", R, [
        e("nav", Z, [
          e("div", $, [
            e("div", F, [
              e("div", G, [
                y(w, {
                  to: "/",
                  class: "text-2xl font-bold"
                }, {
                  default: u(() => [
                    _(n(c.logo), 1)
                  ]),
                  _: 1
                }),
                e("div", H, [
                  (s(!0), i(p, null, x(c.links, (t) => (s(), i("a", {
                    key: t.name,
                    href: t.href,
                    class: "text-muted-foreground hover:text-foreground transition-colors"
                  }, n(t.name), 9, O))), 128))
                ])
              ]),
              e("div", K, [
                y(v(b), { variant: "ghost" }, {
                  default: u(() => m[0] || (m[0] = [
                    _("Se connecter")
                  ])),
                  _: 1
                }),
                y(v(b), null, {
                  default: u(() => m[1] || (m[1] = [
                    _("Essai gratuit")
                  ])),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        e("main", J, [
          (s(!0), i(p, null, x(d.value, (t) => (s(), i(p, {
            key: t.type
          }, [
            t.type === "hero" ? (s(), i("section", {
              key: 0,
              class: f([r.value, "relative overflow-hidden"])
            }, [
              e("div", Q, [
                e("h1", X, n(t.content.title), 1),
                e("p", Y, n(t.content.subtitle), 1),
                e("div", W, [
                  y(v(b), { size: "lg" }, {
                    default: u(() => [
                      _(n(t.content.cta), 1)
                    ]),
                    _: 2
                  }, 1024),
                  y(v(b), {
                    variant: "outline",
                    size: "lg"
                  }, {
                    default: u(() => [
                      _(n(t.content.secondaryCta), 1)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ])
            ], 2)) : k("", !0),
            t.type === "features" ? (s(), i("section", {
              key: 1,
              class: f([r.value, "bg-muted/50  "])
            }, [
              e("div", ee, [
                e("div", te, [
                  e("h2", se, n(t.title), 1),
                  e("p", oe, n(t.subtitle), 1)
                ]),
                e("div", ne, [
                  (s(!0), i(p, null, x(t.items, (o) => (s(), M(v(B), {
                    key: o.title,
                    class: "p-6 transition-all hover:shadow-lg"
                  }, {
                    default: u(() => [
                      (s(), M(q(o.icon), { class: "w-10 h-10 mb-4 text-primary" })),
                      e("h3", ie, n(o.title), 1),
                      e("p", ae, n(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))), 128))
                ])
              ])
            ], 2)) : k("", !0),
            t.type === "stats" ? (s(), i("section", {
              key: 2,
              class: f(r.value)
            }, [
              e("div", ce, [
                e("div", le, [
                  (s(!0), i(p, null, x(t.items, (o) => (s(), i("div", {
                    key: o.label,
                    class: "p-6"
                  }, [
                    e("p", re, n(o.value), 1),
                    e("p", de, n(o.label), 1)
                  ]))), 128))
                ])
              ])
            ], 2)) : k("", !0),
            t.type === "benefits" ? (s(), i("section", {
              key: 3,
              class: f([r.value, "bg-muted/50"])
            }, [
              e("div", ue, [
                e("h2", pe, n(t.title), 1),
                e("div", he, [
                  (s(!0), i(p, null, x(t.items, (o) => (s(), i("div", {
                    key: o.title,
                    class: "flex flex-col items-center text-center p-6"
                  }, [
                    (s(), M(q(o.icon), { class: "w-12 h-12 mb-4 text-primary" })),
                    e("h3", me, n(o.title), 1),
                    e("p", ye, n(o.description), 1)
                  ]))), 128))
                ])
              ])
            ], 2)) : k("", !0)
          ], 64))), 128))
        ])
      ]);
    };
  }
}, fe = /* @__PURE__ */ E(_e, [["__scopeId", "data-v-d53913b9"]]);
export {
  fe as default
};
