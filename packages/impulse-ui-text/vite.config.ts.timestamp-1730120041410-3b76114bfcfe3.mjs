// vite.config.ts
import { defineConfig as defineConfig2 } from "file:///home/apolyanov/projects/impulse-ui/node_modules/vite/dist/node/index.js";

// ../../vite.base.config.ts
import { defineConfig } from "file:///home/apolyanov/projects/impulse-ui/node_modules/vite/dist/node/index.js";
import dts from "file:///home/apolyanov/projects/impulse-ui/node_modules/vite-plugin-dts/dist/index.mjs";
var serverSafePackages = ["toolkit", "colours"];
var capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
var baseConfig = (name) => {
  const external = [
    "react",
    "react-dom",
    "styled-components",
    "@fortawesome/fontawesome-svg-core/styles.css",
    /^@fontsource\/montserrat\/?.*$/,
    /@impulse-ui\/(.*)/
  ];
  return defineConfig({
    publicDir: "./public",
    build: {
      lib: {
        entry: "./src/index.ts",
        name: `impulse${capitalize(name)}`,
        fileName: (format) => `${name}.${format}.js`
      },
      outDir: "./dist",
      rollupOptions: {
        external,
        output: {
          banner: () => {
            if (!serverSafePackages.includes(name)) return "'use client'";
          },
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "styled-components": "styled",
            "@impulse-ui/auto-complete": "impulseAutoComplete",
            "@impulse-ui/avatar": "impulseAvatar",
            "@impulse-ui/buttons": "impulseButtons",
            "@impulse-ui/colours": "impulseColours",
            "@impulse-ui/core": "impulseCore",
            "@impulse-ui/icon": "impulseIcon",
            "@impulse-ui/layout": "impulseLayout",
            "@impulse-ui/input": "impulseInput",
            "@impulse-ui/loader": "impulseLoader",
            "@impulse-ui/qr": "impulseQr",
            "@impulse-ui/ocr": "impulseOcr",
            "@impulse-ui/scanner-core": "impulseScannerCore",
            "@impulse-ui/navigation": "impulseNavigation",
            "@impulse-ui/table": "impulseTable",
            "@impulse-ui/text": "impulseText"
          }
        }
      },
      sourcemap: true,
      emptyOutDir: true
    },
    plugins: [dts()]
  });
};

// vite.config.ts
var vite_config_default = defineConfig2(baseConfig("text"));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiLi4vLi4vdml0ZS5iYXNlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL2Fwb2x5YW5vdi9wcm9qZWN0cy9pbXB1bHNlLXVpL3BhY2thZ2VzL2ltcHVsc2UtdWktdGV4dFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvYXBvbHlhbm92L3Byb2plY3RzL2ltcHVsc2UtdWkvcGFja2FnZXMvaW1wdWxzZS11aS10ZXh0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2Fwb2x5YW5vdi9wcm9qZWN0cy9pbXB1bHNlLXVpL3BhY2thZ2VzL2ltcHVsc2UtdWktdGV4dC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgYmFzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3ZpdGUuYmFzZS5jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYmFzZUNvbmZpZygndGV4dCcpKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvYXBvbHlhbm92L3Byb2plY3RzL2ltcHVsc2UtdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2Fwb2x5YW5vdi9wcm9qZWN0cy9pbXB1bHNlLXVpL3ZpdGUuYmFzZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvYXBvbHlhbm92L3Byb2plY3RzL2ltcHVsc2UtdWkvdml0ZS5iYXNlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuY29uc3Qgc2VydmVyU2FmZVBhY2thZ2VzID0gW1widG9vbGtpdFwiLCBcImNvbG91cnNcIl07XG5cbmNvbnN0IGNhcGl0YWxpemUgPSAoc3RyOiBzdHJpbmcpID0+XG4gIGAke3N0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3N0ci5zbGljZSgxKX1gO1xuXG5leHBvcnQgY29uc3QgYmFzZUNvbmZpZyA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZXh0ZXJuYWwgPSBbXG4gICAgXCJyZWFjdFwiLFxuICAgIFwicmVhY3QtZG9tXCIsXG4gICAgXCJzdHlsZWQtY29tcG9uZW50c1wiLFxuICAgIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIixcbiAgICAvXkBmb250c291cmNlXFwvbW9udHNlcnJhdFxcLz8uKiQvLFxuICAgIC9AaW1wdWxzZS11aVxcLyguKikvLFxuICBdO1xuXG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xuICAgIHB1YmxpY0RpcjogXCIuL3B1YmxpY1wiLFxuICAgIGJ1aWxkOiB7XG4gICAgICBsaWI6IHtcbiAgICAgICAgZW50cnk6IFwiLi9zcmMvaW5kZXgudHNcIixcbiAgICAgICAgbmFtZTogYGltcHVsc2Uke2NhcGl0YWxpemUobmFtZSl9YCxcbiAgICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGAke25hbWV9LiR7Zm9ybWF0fS5qc2AsXG4gICAgICB9LFxuICAgICAgb3V0RGlyOiBcIi4vZGlzdFwiLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBleHRlcm5hbCxcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgYmFubmVyOiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNlcnZlclNhZmVQYWNrYWdlcy5pbmNsdWRlcyhuYW1lKSkgcmV0dXJuIFwiJ3VzZSBjbGllbnQnXCI7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxuICAgICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxuICAgICAgICAgICAgXCJzdHlsZWQtY29tcG9uZW50c1wiOiBcInN0eWxlZFwiLFxuICAgICAgICAgICAgXCJAaW1wdWxzZS11aS9hdXRvLWNvbXBsZXRlXCI6IFwiaW1wdWxzZUF1dG9Db21wbGV0ZVwiLFxuICAgICAgICAgICAgXCJAaW1wdWxzZS11aS9hdmF0YXJcIjogXCJpbXB1bHNlQXZhdGFyXCIsXG4gICAgICAgICAgICBcIkBpbXB1bHNlLXVpL2J1dHRvbnNcIjogXCJpbXB1bHNlQnV0dG9uc1wiLFxuICAgICAgICAgICAgXCJAaW1wdWxzZS11aS9jb2xvdXJzXCI6IFwiaW1wdWxzZUNvbG91cnNcIixcbiAgICAgICAgICAgIFwiQGltcHVsc2UtdWkvY29yZVwiOiBcImltcHVsc2VDb3JlXCIsXG4gICAgICAgICAgICBcIkBpbXB1bHNlLXVpL2ljb25cIjogXCJpbXB1bHNlSWNvblwiLFxuICAgICAgICAgICAgXCJAaW1wdWxzZS11aS9sYXlvdXRcIjogXCJpbXB1bHNlTGF5b3V0XCIsXG4gICAgICAgICAgICBcIkBpbXB1bHNlLXVpL2lucHV0XCI6IFwiaW1wdWxzZUlucHV0XCIsXG4gICAgICAgICAgICBcIkBpbXB1bHNlLXVpL2xvYWRlclwiOiBcImltcHVsc2VMb2FkZXJcIixcbiAgICAgICAgICAgIFwiQGltcHVsc2UtdWkvcXJcIjogXCJpbXB1bHNlUXJcIixcbiAgICAgICAgICAgIFwiQGltcHVsc2UtdWkvb2NyXCI6IFwiaW1wdWxzZU9jclwiLFxuICAgICAgICAgICAgXCJAaW1wdWxzZS11aS9zY2FubmVyLWNvcmVcIjogXCJpbXB1bHNlU2Nhbm5lckNvcmVcIixcbiAgICAgICAgICAgIFwiQGltcHVsc2UtdWkvbmF2aWdhdGlvblwiOiBcImltcHVsc2VOYXZpZ2F0aW9uXCIsXG4gICAgICAgICAgICBcIkBpbXB1bHNlLXVpL3RhYmxlXCI6IFwiaW1wdWxzZVRhYmxlXCIsXG4gICAgICAgICAgICBcIkBpbXB1bHNlLXVpL3RleHRcIjogXCJpbXB1bHNlVGV4dFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgc291cmNlbWFwOiB0cnVlLFxuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbZHRzKCldLFxuICB9KTtcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNXLFNBQVMsZ0JBQUFBLHFCQUFvQjs7O0FDQTlGLFNBQVMsb0JBQW9CO0FBQ2xVLE9BQU8sU0FBUztBQUVoQixJQUFNLHFCQUFxQixDQUFDLFdBQVcsU0FBUztBQUVoRCxJQUFNLGFBQWEsQ0FBQyxRQUNsQixHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsWUFBWSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQztBQUV4QyxJQUFNLGFBQWEsQ0FBQyxTQUFpQjtBQUMxQyxRQUFNLFdBQVc7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBRUEsU0FBTyxhQUFhO0FBQUEsSUFDbEIsV0FBVztBQUFBLElBQ1gsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLFFBQ0gsT0FBTztBQUFBLFFBQ1AsTUFBTSxVQUFVLFdBQVcsSUFBSSxDQUFDO0FBQUEsUUFDaEMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksTUFBTTtBQUFBLE1BQ3pDO0FBQUEsTUFDQSxRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsUUFDYjtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ04sUUFBUSxNQUFNO0FBQ1osZ0JBQUksQ0FBQyxtQkFBbUIsU0FBUyxJQUFJLEVBQUcsUUFBTztBQUFBLFVBQ2pEO0FBQUEsVUFDQSxTQUFTO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxhQUFhO0FBQUEsWUFDYixxQkFBcUI7QUFBQSxZQUNyQiw2QkFBNkI7QUFBQSxZQUM3QixzQkFBc0I7QUFBQSxZQUN0Qix1QkFBdUI7QUFBQSxZQUN2Qix1QkFBdUI7QUFBQSxZQUN2QixvQkFBb0I7QUFBQSxZQUNwQixvQkFBb0I7QUFBQSxZQUNwQixzQkFBc0I7QUFBQSxZQUN0QixxQkFBcUI7QUFBQSxZQUNyQixzQkFBc0I7QUFBQSxZQUN0QixrQkFBa0I7QUFBQSxZQUNsQixtQkFBbUI7QUFBQSxZQUNuQiw0QkFBNEI7QUFBQSxZQUM1QiwwQkFBMEI7QUFBQSxZQUMxQixxQkFBcUI7QUFBQSxZQUNyQixvQkFBb0I7QUFBQSxVQUN0QjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXO0FBQUEsTUFDWCxhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsU0FBUyxDQUFDLElBQUksQ0FBQztBQUFBLEVBQ2pCLENBQUM7QUFDSDs7O0FEekRBLElBQU8sc0JBQVFDLGNBQWEsV0FBVyxNQUFNLENBQUM7IiwKICAibmFtZXMiOiBbImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciXQp9Cg==
