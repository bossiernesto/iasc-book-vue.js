import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'
import elixir from 'highlight.js/lib/languages/elixir'
import scala from 'highlight.js/lib/languages/scala'
import haskell from 'highlight.js/lib/languages/haskell'
import ruby from 'highlight.js/lib/languages/ruby'
import vue from 'vue-highlight.js/lib/languages/vue'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('elixir', elixir)
hljs.registerLanguage('scala', scala)
hljs.registerLanguage('haskell', haskell)
hljs.registerLanguage('ruby', ruby)
hljs.registerLanguage('vue', vue)
