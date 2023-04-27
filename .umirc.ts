import { defineConfig } from "@umijs/max";

export default defineConfig({
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  routes: [
    { path: "/", component: "./Home" },
    {
      name: " CRUD 示例",
      path: "/table",
      component: "./Table",
    },
  ],

  npmClient: "pnpm",
  tailwindcss: {},
  headScripts:[{src:'https://at.alicdn.com/t/c/font_2622569_g9us0pvkrqk.js'}]
});
