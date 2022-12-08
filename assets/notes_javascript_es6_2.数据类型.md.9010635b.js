import{_ as s,c as n,o as a,a as l}from"./app.b7c8ca52.js";const d=JSON.parse('{"title":"\u6570\u636E\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"Map&Set","slug":"map-set","link":"#map-set","children":[]},{"level":2,"title":"WeakMap&WeakSet","slug":"weakmap-weakset","link":"#weakmap-weakset","children":[]}],"relativePath":"notes/javascript/es6/2.\u6570\u636E\u7C7B\u578B.md","lastUpdated":null}'),p={name:"notes/javascript/es6/2.\u6570\u636E\u7C7B\u578B.md"},e=l(`<h1 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h1><h2 id="map-set" tabindex="-1">Map&amp;Set <a class="header-anchor" href="#map-set" aria-hidden="true">#</a></h2><p><strong>Map</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var m = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">var x = { id: 1 }</span></span>
<span class="line"><span style="color:#A6ACCD;">var y = { id: 2 };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">m[x] = &#39;foo&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">m[y] = &#39;bar&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8FD9\u91CC\u770B\u51FA{id\uFF1A1}\u8F6C\u4E3A\u5B57\u7B26\u4E32[object Object]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Object.prototype.toString({ id: 1 })); //[object Object]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m); //{[object Object]: &quot;bar&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u4E00\u6837\u7684\u952E\u540D\uFF0C\u7B2C\u4E8C\u6B21\u4F1A\u8986\u76D6\u7B2C\u4E00\u6B21\u7684\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m[x]); //bar</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m[y]); //bar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u53EF\u4EE5\u770B\u51FA\u4F20\u7EDF\u7684\u5BF9\u8C61\u5904\u7406\u65B9\u5F0F\u5E76\u4E0D\u53CB\u597D\uFF0C\u5F53\u952E\u540D\u662F\u4E00\u4E2A\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u5B83\u662F\u8C03\u7528\u539F\u578B\u4E0A\u7684<code>toString()</code>\u65B9\u6CD5\uFF0C\u8F6C\u5B8C\u4E4B\u540E\u5E76\u4E0D\u80FD\u5B9E\u73B0\u952E\u540D\u952E\u503C\u4E00\u4E00\u5BF9\u5E94\uFF0C<code>ES6</code>\u63D0\u4F9B\u7684\u65B0\u7684\u6570\u636E\u7ED3\u6784<code>Map()</code>\u6765\u89E3\u51B3\u4EE5\u4E0A\u95EE\u9898</p><p><code>Map()</code>\u5B58\u653E\u7684\u662F\u5BF9\u8C61\uFF0C\u6709\u952E\u540D\u548C\u952E\u503C\uFF0C\u4E14\u952E\u540D\u4E0D\u9650\u4E8E\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u5B9E\u73B0\u4E00\u4E00\u5BF9\u5E94\u7684\u5173\u7CFB</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let m = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var x = { id: 1 };</span></span>
<span class="line"><span style="color:#A6ACCD;">var y = { id: 2 };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8BBE\u7F6E\u952E\u540D\u548C\u952E\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">m.set(x, &#39;foo&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">m.set(y, &#39;bar&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u83B7\u53D6\u952E\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m.get(x)); //foo</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m.get(y)); //bar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m);</span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Map(2) {{\u2026} =&gt; &quot;foo&quot;, {\u2026} =&gt; &quot;bar&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[Entries]]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *     0: {Object =&gt; &quot;foo&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *     1: {Object =&gt; &quot;bar&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *     size: 2</span></span>
<span class="line"><span style="color:#A6ACCD;"> *     __proto__: Map</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>Map()</code>\u6570\u636E\u4E5F\u5177\u5907<code>iterator</code>\u63A5\u53E3\u7684\u6570\u636E\u7ED3\u6784</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5199\u6CD5\u4E00\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u53C2\u6570\u5FC5\u987B\u4EE5\u6570\u7EC4\u7684\u5F62\u5F0F\u51FA\u73B0\u53CC\u6E90\u7684\u6570\u636E\u7ED3\u6784</span></span>
<span class="line"><span style="color:#A6ACCD;">let m = new Map([</span></span>
<span class="line"><span style="color:#A6ACCD;">  [&#39;name&#39;, &#39;zhangsan&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  [&#39;title&#39;, &#39;lisi&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5199\u6CD5\u4E8C\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">let m2 = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">m2.set(&#39;name&#39;, &#39;zhangsan&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">m2.set(&#39;title&#39;, &#39;lisi&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m);</span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Map(2) {&quot;name&quot; =&gt; &quot;zhangsan&quot;, &quot;title&quot; =&gt; &quot;lisi&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[Entries]]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   0: {&quot;name&quot; =&gt; &quot;zhangsan&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   1: {&quot;title&quot; =&gt; &quot;lisi&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   size: 2</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   __proto__: Map</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u6A21\u62DF\u5C06\u952E\u540D\u548C\u952E\u503C\u904D\u5386\u5230map\u6570\u636E\u91CC</span></span>
<span class="line"><span style="color:#A6ACCD;">var items = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  [&#39;name&#39;, &#39;wangwu&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  [&#39;title&#39;, &#39;zhaoliu&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">let m = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">items.forEach(([key, value]) =&gt; m.set(key, value));</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(m);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Map(2) {&quot;name&quot; =&gt; &quot;wangwu&quot;, &quot;title&quot; =&gt; &quot;zhaoliu&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[Entries]]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *     0: {&quot;name&quot; =&gt; &quot;wangwu&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *       key: &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> *       value: &quot;wangwu&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> *     1: {&quot;title&quot; =&gt; &quot;zhaoliu&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *       key: &quot;title&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> *       value: &quot;zhaoliu&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> *     size: 2</span></span>
<span class="line"><span style="color:#A6ACCD;"> *     __proto__: Map</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u952E\u503C\u76F8\u540C\u8986\u76D6\u7684\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">const map = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(1, &#39;foo&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(1, &#39;bar&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.get(1)); //bar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u952E\u503C\u4E3ANaN</span></span>
<span class="line"><span style="color:#A6ACCD;">const map = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(NaN, 123);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.get(NaN)); //123</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(NaN === NaN); //false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Object.is(NaN, NaN)); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5982\u4F55\u5C06Map\u6570\u636E\u8F6C\u4E3A\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">const myMap = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8BBE\u7F6E\u952E\u540D\u952E\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">myMap.set(true, 7);</span></span>
<span class="line"><span style="color:#A6ACCD;">myMap.set({</span></span>
<span class="line"><span style="color:#A6ACCD;">  foo: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">}, [&#39;abc&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(myMap);</span></span>
<span class="line"><span style="color:#A6ACCD;">//Map(2)\xA0{true =&gt; 7, {foo: 3} =&gt; [&#39;abc&#39;]}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log([...myMap]);</span></span>
<span class="line"><span style="color:#A6ACCD;">//[[true, 7], [{foo: 3}, [&quot;abc&quot;]]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5982\u4F55\u5C06Map\u6570\u636E\u8F6C\u4E3A\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">const myMap = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">myMap.set(true, 7);</span></span>
<span class="line"><span style="color:#A6ACCD;">myMap.set(&#39;a&#39;, &#39;abc&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function strMapToObj(strMap) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  //Object.create(\u6307\u5411\u539F\u578B)</span></span>
<span class="line"><span style="color:#A6ACCD;">  let obj = Object.create(null);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u8FED\u4EE3\u952E\u540D\u952E\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let [key, val] of strMap.entries()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj[key] = val;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return obj;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(strMapToObj(myMap));</span></span>
<span class="line"><span style="color:#A6ACCD;">//{true: 7, a: &quot;abc&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5982\u4F55\u5C06\u5BF9\u8C61\u8F6C\u4E3AMap\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">function objToStrMap(obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let strMap = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let key in obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    strMap.set(key, obj[key])</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return strMap;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(objToStrMap({</span></span>
<span class="line"><span style="color:#A6ACCD;">  true: 7,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;no&#39;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">}));</span></span>
<span class="line"><span style="color:#A6ACCD;">//Map(2)\xA0{&quot;true&quot; =&gt; 7, &quot;no&quot; =&gt; false}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>Set</strong></p><p>\u7279\u70B9\uFF1A\u6210\u5458\u552F\u4E00\u7684\u6570\u7EC4</p><p>\u573A\u666F\uFF1A\u5229\u7528<code>set</code>\u7684\u552F\u4E00\u6027\u5BF9\u6570\u636E\u8FDB\u884C\u53BB\u91CD\uFF0C\u7136\u540E\u5C06<code>set</code>\u8F6C\u5316\u4E3A\u6570\u7EC4\u63D0\u9AD8\u6548\u7387</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u53C2\u6570\u53EA\u80FD\u662F\u5177\u5907iterator\u63A5\u53E3\u7684\u6570\u636E\u7ED3\u6784</span></span>
<span class="line"><span style="color:#A6ACCD;">var set = new Set([1, 2, 3, 4, 5]);</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(5);</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(7);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Set(6) {1, 2, 3, 4, 5, \u2026}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[Entries]]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   0: 1</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   1: 2</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   2: 3</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   3: 4</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   4: 5</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   5: 7</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   size: (...)</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   __proto__: Set</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u7B80\u5355\u5224\u65AD\u7279\u6B8A\u7684\u503C\u8BA9set\u8BC6\u522B\u662F\u5426\u552F\u4E00\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">var set = new Set([undefined, undefined, null, null, 5, &#39;5&#39;, true, 1, NaN, NaN, {}, {}, [], []]);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set);</span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Set(11) {undefined, null, 5, &quot;5&quot;, true, \u2026}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[Entries]]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   0: undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   1: null</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   2: 5</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   3: &quot;5&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   4: true</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   5: 1</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   6: NaN</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   7: Object</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   8: Object</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   9: Array(0)</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   10: Array(0)</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   size: (...)</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   __proto__: Set</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u65B9\u6CD5\uFF1A<code>add()</code>/<code>delete()</code>/<code>clear()</code>/<code>has()</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//add()\u6DFB\u52A0\u503C\uFF0C\u8FD4\u56DE\u7684\u662Fset\u7ED3\u6784\u672C\u8EAB</span></span>
<span class="line"><span style="color:#A6ACCD;">var set = new Set();</span></span>
<span class="line"><span style="color:#A6ACCD;">var x = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  y = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(x);</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(y);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Set(2) {{\u2026}, {\u2026}}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[Entries]]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   0: </span></span>
<span class="line"><span style="color:#A6ACCD;"> *     value: {id: 1}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   1:</span></span>
<span class="line"><span style="color:#A6ACCD;"> *     value: {id: 2}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   size: 2</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   __proto__: Set</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//delete()\u5220\u9664\u6307\u5B9A\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8FD4\u56DE\u503C\u4E3A\u5E03\u5C14\u503C true\u53EF\u5220/false\u6CA1\u6570\u636E\u53EF\u5220</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.delete(y));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Set(1) {{\u2026}}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[Entries]]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   0: </span></span>
<span class="line"><span style="color:#A6ACCD;"> *     value: {id: 1}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   size: 1</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   __proto__: Set</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//clear()\u5168\u90E8\u6E05\u7A7A</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8FD4\u56DE\u503C\u4E3Aundefined</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.clear());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Set(0) {}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[Entries]]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *     No properties</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   size: 0</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   __proto__: Set</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//has()\u5224\u65AD\u5F53\u524D\u662F\u5426\u542B\u6709\u6307\u5B9A\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8FD4\u56DE\u503C\u4E3A\u5E03\u5C14\u503C true\u6709\u8BE5\u503C/false\u6CA1\u6709\u8BE5\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.has(x));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//set\u7279\u5F81\uFF1A\u5B9E\u65F6\u76D1\u63A7\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">var set = new Set([1, 2]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set);</span></span>
<span class="line"><span style="color:#A6ACCD;">set.clear();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6CE8\u610F\uFF1A\u6253\u5370\u662F\u5728\u6E05\u9664\u4E4B\u524D\u7684\uFF0C\u4F46\u4ECD\u7136\u6CA1\u6709\u6570\u636E\u663E\u793A\uFF0C\u8BF4\u660Eset\u5B9E\u65F6\u76D1\u63A7\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Set(2) {1, 2}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[Entries]]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *     No properties</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   size: 0</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   __proto__: Set</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u904D\u5386\u65B9\u6CD5\uFF1A<code>keys()</code>/<code>values()</code>/<code>entries()</code>/<code>forEach()</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u8FD4\u56DE\u503C\u662F\u8FED\u4EE3\u5668\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">let set = new Set([1, 2, 3]);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.keys());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.values());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.entries());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * SetIterator\xA0{1, 2, 3}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[Entries]]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   0: 1</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   1: 2</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   2: 3</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   __proto__: Set Iterator</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[IteratorHasMore]]: true</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[IteratorIndex]]: 0</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[IteratorKind]]: &quot;values&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * SetIterator\xA0{1, 2, 3}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[Entries]]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   0: 1</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   1: 2</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   2: 3</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   __proto__: Set Iterator</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[IteratorHasMore]]: true</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[IteratorIndex]]: 0</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[IteratorKind]]: &quot;values&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * SetIterator {1 =&gt; 1, 2 =&gt; 2, 3 =&gt; 3}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[Entries]]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   0: {1 =&gt; 1}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   1: {2 =&gt; 2}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   2: {3 =&gt; 3}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   __proto__: Set Iterator</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[IteratorHasMore]]: true</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[IteratorIndex]]: 0</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   [[IteratorKind]]: &quot;entries&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>for of</code>\u5FAA\u73AF\u8FED\u4EE3\u5668\u5BF9\u8C61</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let set = new Set([1, 2, 3]);</span></span>
<span class="line"><span style="color:#A6ACCD;">//set\u7ED3\u6784\u6CA1\u6709\u952E\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u952E\u540D\u548C\u952E\u503C\u662F\u4E00\u81F4\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i of set.keys()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //1 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i of set.values()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //1 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i of set.entries()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //[1, 1] [2, 2] [3, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5355\u72EC\u904D\u5386\u5177\u6709\u8FED\u4EE3\u5668\u63A5\u53E3\u7684<code>set</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">for (let i of set) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //1 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u9A8C\u8BC1\u662F\u8FD4\u56DE\u503C\u4ECE\u54EA\u4E2A\u63A5\u53E3\u8FD4\u56DE\u51FA\u6765\u7684\uFF1F set.keys()\u6216set.values()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Set.prototype[Symbol.iterator] === Set.prototype.values); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Set.prototype[Symbol.iterator] === Set.prototype.keys); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8BF4\u660Eset\u4F9D\u8D56set.values()\u65B9\u6CD5\u904D\u5386\u51FA\u6765\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//forEach()\u904D\u5386</span></span>
<span class="line"><span style="color:#A6ACCD;">let set = new Set([1, 2, 3]);</span></span>
<span class="line"><span style="color:#A6ACCD;">set.forEach(function (value, keys, arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(value); //1 1 Set{1, 2, 3}</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(keys); //2 2 Set{1, 2, 3}</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(arr); //3 3 Set{1, 2, 3}</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>set</code>\u9002\u7528\u5C55\u5F00\u8FD0\u7B97\u7B26</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5229\u7528\u5C55\u5F00\u8FD0\u7B97\u7B26\u53EF\u4EE5\u5C06set\u6570\u636E\u8F7B\u677E\u8F6C\u4E3A\u6570\u7EC4\u7ED3\u6784</span></span>
<span class="line"><span style="color:#A6ACCD;">let set = new Set([1, 2, 3]);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(...set); //1 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log([...set]); //[1, 2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5C06set\u6570\u636E\u91CC\u7684\u6570\u503C\u4E58\u4EE52</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5229\u7528\u6570\u7EC4map()\u65B9\u6CD5\u6620\u5C04</span></span>
<span class="line"><span style="color:#A6ACCD;">let set = new Set([1, 2, 3]);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log([...set].map(value =&gt; value * 2));</span></span>
<span class="line"><span style="color:#A6ACCD;">//[2, 4, 6]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5199\u6CD5\u4E8C\uFF1A\u5229\u7528Array.from()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Array.from(set, value =&gt; value * 2));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//set+filter\u8FC7\u6EE4\u6570\u7EC4\u91CC\u7684\u6570\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8FD4\u56DE\u5076\u6570\u7EC4\u5408\u7684\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">let set = new Set([1, 2, 3, 4, 5, 6]);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log([...set].filter(x =&gt; (x % 2) == 0));</span></span>
<span class="line"><span style="color:#A6ACCD;">//[2, 4, 6]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki has-diff"><code><span class="line"><span style="color:#A6ACCD;">//\u4EA4\u96C6 \u5E76\u96C6 \u5DEE\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;">let a = new Set([1, 2, 3]);</span></span>
<span class="line"><span style="color:#A6ACCD;">let b = new Set([4, 3, 2]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5E76\u96C6 \u53BB\u91CD</span></span>
<span class="line"><span style="color:#A6ACCD;">let union = new Set([...a, ...b]);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(union); //Set(4)\xA0{1, 2, 3, 4}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u4EA4\u96C6 \u8FC7\u6EE4\u6389b \u6709b\u91CC\u7684\u503C\u5C31\u901A\u8FC7</span></span>
<span class="line"><span style="color:#A6ACCD;">let intersect = new Set([...a].filter(x =&gt; b.has(x)));</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(intersect); //Set(2)\xA0{2, 3}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5DEE\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;">let difference = new Set([...a].filter(x =&gt; !b.has(x)));</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(difference); //Set(1)\xA0{1}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u6570\u636E\u7ED3\u6784\u5BF9\u6BD4</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//map &amp; array \u5BF9\u6BD4</span></span>
<span class="line"><span style="color:#A6ACCD;">let map = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">let array = new Array();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u589E</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(&#39;t&#39;, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">array.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;t&#39;: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map); //Map(1)\xA0{&quot;t&quot; =&gt; 1}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(array); //[{t: 1}]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u67E5</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.has(&#39;t&#39;)); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(array.find(val =&gt; val[&#39;t&#39;])); //{t: 1}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(&#39;t&#39;, 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map);</span></span>
<span class="line"><span style="color:#A6ACCD;">array.forEach(item =&gt; item.t ? item.t = 2 : &#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(array); //[{t: 2}]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5220</span></span>
<span class="line"><span style="color:#A6ACCD;">map.delete(&#39;t&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map); //Map(0)\xA0{}</span></span>
<span class="line"><span style="color:#A6ACCD;">let index = array.findIndex(item =&gt; item.t);</span></span>
<span class="line"><span style="color:#A6ACCD;">array.splice(index, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(array); //[]</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u603B\u7ED3\uFF1Amap\u8981\u66F4\u65B9\u4FBF\u4E9B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//set &amp; array \u5BF9\u6BD4</span></span>
<span class="line"><span style="color:#A6ACCD;">let set = new Set();</span></span>
<span class="line"><span style="color:#A6ACCD;">let array = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u628A\u5F15\u7528\u503C\u5B58\u8D77\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  t: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u589E</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(obj);</span></span>
<span class="line"><span style="color:#A6ACCD;">array.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;t&#39;: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set); //{[{t: 1}]}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(array); //[{t: 1}]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u67E5</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.has(obj)); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(array.find(val =&gt; val[&#39;t&#39;])); //{t: 1}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">set.forEach(item =&gt; item.t ? item.t = 2 : &#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set); //{[{t: 2}]}</span></span>
<span class="line"><span style="color:#A6ACCD;">array.forEach(item =&gt; item.t ? item.t = 2 : &#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(array); //[{t: 2}]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5220</span></span>
<span class="line"><span style="color:#A6ACCD;">set.forEach(item =&gt; item.t ? set.delete(item) : &#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set); //{}</span></span>
<span class="line"><span style="color:#A6ACCD;">let index = array.findIndex(item =&gt; item.t);</span></span>
<span class="line"><span style="color:#A6ACCD;">array.splice(index, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(array); //[]</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u603B\u7ED3\uFF1A\u64CD\u4F5C\u65B9\u5F0Fset\u6BD4array\u7A0D\u5FAE\u7565\u7B80</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//map set object \u6A2A\u5411\u5BF9\u6BD4</span></span>
<span class="line"><span style="color:#A6ACCD;">let item = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  t: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">let map = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">let set = new Set();</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u589E</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(&#39;t&#39;, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(item);</span></span>
<span class="line"><span style="color:#A6ACCD;">obj[&#39;t&#39;] = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map, set, obj);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{&quot;t&quot; =&gt; 1}</span></span>
<span class="line"><span style="color:#A6ACCD;">//{{0:{t: 1}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">//{t: 1}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u67E5</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.has(&#39;t&#39;)); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set.has(item)); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;t&#39; in obj); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(&#39;t&#39;, 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">set.forEach(item =&gt; item.t ? item.t = 2 : &#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">obj[&#39;t&#39;] = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map, set, obj);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{&quot;t&quot; =&gt; 2}</span></span>
<span class="line"><span style="color:#A6ACCD;">//{{0:{t: 2}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">//{t: 2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5220</span></span>
<span class="line"><span style="color:#A6ACCD;">map.delete(&#39;t&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">set.delete(item);</span></span>
<span class="line"><span style="color:#A6ACCD;">delete obj[&#39;t&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map, set, obj);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{} {} {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u603B\u7ED3\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">//1.map,set\u5E95\u5C42\u4F18\u5316\u6BD4obj,arr\u8981\u597D\u4E9B</span></span>
<span class="line"><span style="color:#A6ACCD;">//2.map,set\u64CD\u4F5C\u65B9\u5F0F\u6BD4obj,arr\u66F4\u4F18\u96C5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5EFA\u8BAE\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">//1.\u4F18\u5148\u4F7F\u7528map</span></span>
<span class="line"><span style="color:#A6ACCD;">//2.\u5BF9\u6570\u636E\u6709\u552F\u4E00\u6027\u8981\u6C42\u7684\u7528set</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="weakmap-weakset" tabindex="-1">WeakMap&amp;WeakSet <a class="header-anchor" href="#weakmap-weakset" aria-hidden="true">#</a></h2><p>\u9609\u5272\u7248\u7684<code>Map</code>\u548C<code>Set</code></p><p>\u5177\u6709\u65B9\u6CD5\uFF1A<code>add()</code>/<code>delete()</code>/<code>has()</code></p><p>\u6CA1\u6709\u904D\u5386\u65B9\u6CD5</p><p>\u5783\u573E\u56DE\u6536\u673A\u5236\u4E0D\u8003\u8651\u4ED6\u4EEC\u4FE9\u7684\u5F15\u7528</p><p><em><strong><code>WeekMap</code>\u548C<code>Map</code>\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</strong></em></p><ul><li><code>Map</code>\u7684\u952E\u540D\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B</li><li>\u666E\u901A\u5BF9\u8C61\u7684\u952E\u540D\u53EA\u80FD\u662F\u5B57\u7B26\u4E32</li><li><code>WeekMap</code>\u7684\u952E\u540D\u53EA\u80FD\u662F\u5BF9\u8C61</li></ul><blockquote><p><strong>\u6CE8\uFF1A</strong> <code>WeekMap</code>\u7684\u952E\u540D\u662F\u5F31\u5F15\u7528\u5BF9\u8C61\uFF0C\u53EA\u8981\u5F15\u7528\u6CA1\u6709\u4E86\uFF0C\u5173\u8054\u7684\u952E\u503C\u4E5F\u4F1A\u4E00\u5E76\u88AB\u5783\u573E\u56DE\u6536</p></blockquote><p><strong>\u5E94\u7528\u573A\u666F\uFF1A</strong></p><ol><li>\u5BF9\u4E8E\u4E00\u4E9B\u5C5E\u6027\u6216\u65B9\u6CD5\u6570\u636E\u7528\u5B8C\u65F6\u6216\u7ED1\u5B9A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u60F3\u9500\u6BC1\u65F6\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u9500\u6BC1\uFF0C\u5229\u7528<code>WeekMap</code>\u5C31\u53EF\u4EE5\u5904\u7406\u9500\u6BC1</li><li>\u5728\u6DF1\u62F7\u8D1D\u4E2D\uFF0C\u5229\u7528<code>WeekMap</code>\u53EF\u4EE5\u5B9E\u73B0\u8BB0\u5F55\u5DF2\u7ECF\u88AB\u62F7\u8D1D\u8FC7\u7684\u5BF9\u8C61\u6216\u6570\u7EC4\uFF0C\u6765\u907F\u514D\u91CD\u590D\u62F7\u8D1D\u5BFC\u81F4\u5185\u5B58\u6CC4\u6F0F\uFF0C\u6D4F\u89C8\u5668\u6B7B\u5FAA\u73AF\u62A5\u9519\u7B49\u95EE\u9898</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//WeakSet&amp;WeakMap\u6210\u5458\u53EA\u80FD\u662F\u5BF9\u8C61\u4E0D\u80FD\u4E3A\u522B\u7684\u6570\u636E\uFF0C\u5426\u5219\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(new WeakSet().add(1));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,53),o=[e];function c(t,C,A,r,i,y){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
