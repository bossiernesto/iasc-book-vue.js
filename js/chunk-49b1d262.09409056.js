(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49b1d262"],{"0d00":function(e,a,s){e.exports=s.p+"img/1.1ca539fd.png"},"7b02":function(e,a,s){"use strict";s.r(a);var n=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("section",[n("h2",{attrs:{id:"interleaving-y-netsplits"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#interleaving-y-netsplits"}},[e._v("¶")]),e._v(" Interleaving y netsplits")]),n("img",{staticClass:"center iasc-image",attrs:{src:s("b98f")}}),n("p",[e._v("Sucede a veces cuando tenemos una interconexión entre nodos, momentos en los que tal vez un nodo no empieza a responder a los heartbeats y perdemos conocimiento de él, después de un tiempo tendremos que asumir que esta muerto.")]),n("img",{staticClass:"center iasc-image",attrs:{src:s("0d00")}}),n("p",[e._v("En general se asume, y también en lenguajes que nos ayudan con algunos temas de distribución como Erlang, que si un nodo no se puede conocer si está vivo, está muerto, que es el caso más pesimista que es cuando se piensa que hay más fallos de hardware/software que de red. Otro esquema sería el optimista en el que el nodo está vivo y en realidad lo que pasó es que por un momento la red se cayó o había demasiada latencia y no llegaba al nodo extraviado. Este esquema supone que es más frecuente el fallo de red que de hardware/software. Imaginemos un sitio de compra y venta tipo mercadolibre con dos nodos y sucede este esquema, cuando se realizar una transacción en un nodo, se debe también sincronizar la transacción en el otro nodo ya que puede existir el caso que una de las dos partes tiene su cuenta en otro nodo, si funciona todo bien no hay problemas, pero en el caso de que uno de los nodos no responda, y luego en realidad haya pasado que había un fallo de la red, el nodo queda desincronizado, pero el esquema que tomemos puede tener una desventaja u otra, el pesimista es que no permita que haya transacciones y en consecuencia perdamos plata, no cobramos la comisión, pero el otro caso si es optimista, puede suceder que haya un interleave que deje que dos personas compre un mismo productos en los dos nodos y después no se sepa quien ganó.")])])}],t=s("2877"),r={},i=Object(t["a"])(r,n,o,!1,null,null,null);a["default"]=i.exports},b98f:function(e,a,s){e.exports=s.p+"img/0.a5ade99c.png"}}]);
//# sourceMappingURL=chunk-49b1d262.09409056.js.map