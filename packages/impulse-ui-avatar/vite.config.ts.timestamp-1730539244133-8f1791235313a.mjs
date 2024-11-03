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
var vite_config_default = defineConfig2(baseConfig("avatar"));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiLi4vLi4vdml0ZS5iYXNlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL2Fwb2x5YW5vdi9wcm9qZWN0cy9pbXB1bHNlLXVpL3BhY2thZ2VzL2ltcHVsc2UtdWktYXZhdGFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9hcG9seWFub3YvcHJvamVjdHMvaW1wdWxzZS11aS9wYWNrYWdlcy9pbXB1bHNlLXVpLWF2YXRhci92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9hcG9seWFub3YvcHJvamVjdHMvaW1wdWxzZS11aS9wYWNrYWdlcy9pbXB1bHNlLXVpLWF2YXRhci92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgYmFzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3ZpdGUuYmFzZS5jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYmFzZUNvbmZpZygnYXZhdGFyJykpO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9hcG9seWFub3YvcHJvamVjdHMvaW1wdWxzZS11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvYXBvbHlhbm92L3Byb2plY3RzL2ltcHVsc2UtdWkvdml0ZS5iYXNlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9hcG9seWFub3YvcHJvamVjdHMvaW1wdWxzZS11aS92aXRlLmJhc2UuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG5jb25zdCBzZXJ2ZXJTYWZlUGFja2FnZXMgPSBbXCJ0b29sa2l0XCIsIFwiY29sb3Vyc1wiXTtcblxuY29uc3QgY2FwaXRhbGl6ZSA9IChzdHI6IHN0cmluZykgPT5cbiAgYCR7c3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7c3RyLnNsaWNlKDEpfWA7XG5cbmV4cG9ydCBjb25zdCBiYXNlQ29uZmlnID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICBjb25zdCBleHRlcm5hbCA9IFtcbiAgICBcInJlYWN0XCIsXG4gICAgXCJyZWFjdC1kb21cIixcbiAgICBcInN0eWxlZC1jb21wb25lbnRzXCIsXG4gICAgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiLFxuICAgIC9eQGZvbnRzb3VyY2VcXC9tb250c2VycmF0XFwvPy4qJC8sXG4gICAgL0BpbXB1bHNlLXVpXFwvKC4qKS8sXG4gIF07XG5cbiAgcmV0dXJuIGRlZmluZUNvbmZpZyh7XG4gICAgcHVibGljRGlyOiBcIi4vcHVibGljXCIsXG4gICAgYnVpbGQ6IHtcbiAgICAgIGxpYjoge1xuICAgICAgICBlbnRyeTogXCIuL3NyYy9pbmRleC50c1wiLFxuICAgICAgICBuYW1lOiBgaW1wdWxzZSR7Y2FwaXRhbGl6ZShuYW1lKX1gLFxuICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYCR7bmFtZX0uJHtmb3JtYXR9LmpzYCxcbiAgICAgIH0sXG4gICAgICBvdXREaXI6IFwiLi9kaXN0XCIsXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIGV4dGVybmFsLFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBiYW5uZXI6ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghc2VydmVyU2FmZVBhY2thZ2VzLmluY2x1ZGVzKG5hbWUpKSByZXR1cm4gXCIndXNlIGNsaWVudCdcIjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgICAgICBcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCIsXG4gICAgICAgICAgICBcInN0eWxlZC1jb21wb25lbnRzXCI6IFwic3R5bGVkXCIsXG4gICAgICAgICAgICBcIkBpbXB1bHNlLXVpL2F1dG8tY29tcGxldGVcIjogXCJpbXB1bHNlQXV0b0NvbXBsZXRlXCIsXG4gICAgICAgICAgICBcIkBpbXB1bHNlLXVpL2F2YXRhclwiOiBcImltcHVsc2VBdmF0YXJcIixcbiAgICAgICAgICAgIFwiQGltcHVsc2UtdWkvYnV0dG9uc1wiOiBcImltcHVsc2VCdXR0b25zXCIsXG4gICAgICAgICAgICBcIkBpbXB1bHNlLXVpL2NvbG91cnNcIjogXCJpbXB1bHNlQ29sb3Vyc1wiLFxuICAgICAgICAgICAgXCJAaW1wdWxzZS11aS9jb3JlXCI6IFwiaW1wdWxzZUNvcmVcIixcbiAgICAgICAgICAgIFwiQGltcHVsc2UtdWkvaWNvblwiOiBcImltcHVsc2VJY29uXCIsXG4gICAgICAgICAgICBcIkBpbXB1bHNlLXVpL2xheW91dFwiOiBcImltcHVsc2VMYXlvdXRcIixcbiAgICAgICAgICAgIFwiQGltcHVsc2UtdWkvaW5wdXRcIjogXCJpbXB1bHNlSW5wdXRcIixcbiAgICAgICAgICAgIFwiQGltcHVsc2UtdWkvbG9hZGVyXCI6IFwiaW1wdWxzZUxvYWRlclwiLFxuICAgICAgICAgICAgXCJAaW1wdWxzZS11aS9xclwiOiBcImltcHVsc2VRclwiLFxuICAgICAgICAgICAgXCJAaW1wdWxzZS11aS9vY3JcIjogXCJpbXB1bHNlT2NyXCIsXG4gICAgICAgICAgICBcIkBpbXB1bHNlLXVpL3NjYW5uZXItY29yZVwiOiBcImltcHVsc2VTY2FubmVyQ29yZVwiLFxuICAgICAgICAgICAgXCJAaW1wdWxzZS11aS9uYXZpZ2F0aW9uXCI6IFwiaW1wdWxzZU5hdmlnYXRpb25cIixcbiAgICAgICAgICAgIFwiQGltcHVsc2UtdWkvdGFibGVcIjogXCJpbXB1bHNlVGFibGVcIixcbiAgICAgICAgICAgIFwiQGltcHVsc2UtdWkvdGV4dFwiOiBcImltcHVsc2VUZXh0XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtkdHMoKV0sXG4gIH0pO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFcsU0FBUyxnQkFBQUEscUJBQW9COzs7QUNBcEcsU0FBUyxvQkFBb0I7QUFDbFUsT0FBTyxTQUFTO0FBRWhCLElBQU0scUJBQXFCLENBQUMsV0FBVyxTQUFTO0FBRWhELElBQU0sYUFBYSxDQUFDLFFBQ2xCLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxZQUFZLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDO0FBRXhDLElBQU0sYUFBYSxDQUFDLFNBQWlCO0FBQzFDLFFBQU0sV0FBVztBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFFQSxTQUFPLGFBQWE7QUFBQSxJQUNsQixXQUFXO0FBQUEsSUFDWCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsUUFDSCxPQUFPO0FBQUEsUUFDUCxNQUFNLFVBQVUsV0FBVyxJQUFJLENBQUM7QUFBQSxRQUNoQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxNQUFNO0FBQUEsTUFDekM7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSLGVBQWU7QUFBQSxRQUNiO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDTixRQUFRLE1BQU07QUFDWixnQkFBSSxDQUFDLG1CQUFtQixTQUFTLElBQUksRUFBRyxRQUFPO0FBQUEsVUFDakQ7QUFBQSxVQUNBLFNBQVM7QUFBQSxZQUNQLE9BQU87QUFBQSxZQUNQLGFBQWE7QUFBQSxZQUNiLHFCQUFxQjtBQUFBLFlBQ3JCLDZCQUE2QjtBQUFBLFlBQzdCLHNCQUFzQjtBQUFBLFlBQ3RCLHVCQUF1QjtBQUFBLFlBQ3ZCLHVCQUF1QjtBQUFBLFlBQ3ZCLG9CQUFvQjtBQUFBLFlBQ3BCLG9CQUFvQjtBQUFBLFlBQ3BCLHNCQUFzQjtBQUFBLFlBQ3RCLHFCQUFxQjtBQUFBLFlBQ3JCLHNCQUFzQjtBQUFBLFlBQ3RCLGtCQUFrQjtBQUFBLFlBQ2xCLG1CQUFtQjtBQUFBLFlBQ25CLDRCQUE0QjtBQUFBLFlBQzVCLDBCQUEwQjtBQUFBLFlBQzFCLHFCQUFxQjtBQUFBLFlBQ3JCLG9CQUFvQjtBQUFBLFVBQ3RCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVc7QUFBQSxNQUNYLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQSxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQUEsRUFDakIsQ0FBQztBQUNIOzs7QUR6REEsSUFBTyxzQkFBUUMsY0FBYSxXQUFXLFFBQVEsQ0FBQzsiLAogICJuYW1lcyI6IFsiZGVmaW5lQ29uZmlnIiwgImRlZmluZUNvbmZpZyJdCn0K
