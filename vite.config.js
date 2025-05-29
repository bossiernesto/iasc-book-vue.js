import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Asciidoctor from 'asciidoctor'
import highlightJsExt from 'asciidoctor-highlight.js'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'asciidoc-loader',
      enforce: 'pre',
      transform(src, id) {
        if (id.endsWith('.adoc')) {
          const asciidoctor = Asciidoctor()
          // Register server-side hightlightjs highlighting
          highlightJsExt.register(asciidoctor.Extensions)

          // Register custom extension to add biblioref class
          // Register a postprocessor to add 'biblioref' class to xrefs (like <<pp>>)
          asciidoctor.Extensions.register(function () {
            this.postprocessor(function () {
              this.process(function (doc, output) {
                // Add class to anchor links matching bibliography references
                return output.replace(
                  /<a href="#(.*?)">(\[(.*?)\])<\/a>/g,
                  (match, id, text, inner) => {
                    return `<a href="#${id}" class="biblioref">${text}</a>`
                  },
                )
              })
            })
          })

          const html = asciidoctor.convert(src, {
            safe: 'safe',
            catalog_assets: true,
            doctype: 'article',
            attributes: {
              icons: 'font',
              'source-highlighter': 'highlightjs-ext',
              'hide-uri-scheme': true,
              sectids: true,
              sectanchors: true,
            },
          })
          return {
            code: `export default ${JSON.stringify(html)};`,
            map: null,
          }
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
