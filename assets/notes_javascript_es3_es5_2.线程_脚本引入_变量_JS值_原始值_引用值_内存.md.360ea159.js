import{_ as s,c as a,o as n,a as e}from"./app.b7c8ca52.js";const y=JSON.parse('{"title":"ECMA","description":"","frontmatter":{},"headers":[{"level":2,"title":"JavaScript \u6982\u5FF5","slug":"javascript-\u6982\u5FF5","link":"#javascript-\u6982\u5FF5","children":[]},{"level":2,"title":"\u7EBF\u7A0B","slug":"\u7EBF\u7A0B","link":"#\u7EBF\u7A0B","children":[]},{"level":2,"title":"\u811A\u672C\u5F15\u5165","slug":"\u811A\u672C\u5F15\u5165","link":"#\u811A\u672C\u5F15\u5165","children":[]},{"level":2,"title":"\u53D8\u91CF","slug":"\u53D8\u91CF","link":"#\u53D8\u91CF","children":[]},{"level":2,"title":"JS \u503C","slug":"js-\u503C","link":"#js-\u503C","children":[]},{"level":2,"title":"\u539F\u59CB\u503C","slug":"\u539F\u59CB\u503C","link":"#\u539F\u59CB\u503C","children":[]},{"level":2,"title":"\u5F15\u7528\u503C","slug":"\u5F15\u7528\u503C","link":"#\u5F15\u7528\u503C","children":[]},{"level":2,"title":"\u5185\u5B58","slug":"\u5185\u5B58","link":"#\u5185\u5B58","children":[]}],"relativePath":"notes/javascript/es3&es5/2.\u7EBF\u7A0B&\u811A\u672C\u5F15\u5165&\u53D8\u91CF&JS\u503C&\u539F\u59CB\u503C&\u5F15\u7528\u503C&\u5185\u5B58.md","lastUpdated":null}'),l={name:"notes/javascript/es3&es5/2.\u7EBF\u7A0B&\u811A\u672C\u5F15\u5165&\u53D8\u91CF&JS\u503C&\u539F\u59CB\u503C&\u5F15\u7528\u503C&\u5185\u5B58.md"},o=e(`<h1 id="ecma" tabindex="-1">ECMA <a class="header-anchor" href="#ecma" aria-hidden="true">#</a></h1><h2 id="javascript-\u6982\u5FF5" tabindex="-1">JavaScript \u6982\u5FF5 <a class="header-anchor" href="#javascript-\u6982\u5FF5" aria-hidden="true">#</a></h2><p>JavaScript \u7531\u4E09\u90E8\u5206\u7EC4\u6210\uFF1A</p><ul><li>\u6587\u6863\u5BF9\u8C61\u6A21\u578B (DOM) - document object mode(W3C \u89C4\u8303)</li><li>\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B(BOM) - browser object model(\u6CA1\u6709\u89C4\u8303)</li><li>ECMAScript</li></ul><p>ECMAScript\u5305\u542B\u8BED\u6CD5\uFF0C\u53D8\u91CF\uFF0C\u5173\u952E\u5B57\uFF0C\u4FDD\u7559\u5B57\uFF0C\u503C\uFF0C\u539F\u59CB\u7C7B\u578B\uFF0C\u5F15\u7528\u7C7B\u578B\uFF0C\u8FD0\u7B97\uFF0C\u5BF9\u8C61\uFF0C\u7EE7\u627F\uFF0C\u51FD\u6570\u3002</p><h2 id="\u7EBF\u7A0B" tabindex="-1">\u7EBF\u7A0B <a class="header-anchor" href="#\u7EBF\u7A0B" aria-hidden="true">#</a></h2><p>JavaScript\u5F15\u64CE\u662F\u5355\u7EBF\u7A0B\uFF0C\u5B83\u53EF\u4EE5\u6A21\u62DF\u591A\u7EBF\u7A0B\uFF0C\u5982\u5355\u7EBF\u7A0B\u7684\u673A\u5236\u662F\u8F6E\u8F6C\u65F6\u95F4\u7247\uFF0C\u77ED\u65F6\u95F4\u5185\u8F6E\u6D41\u6267\u884C\u591A\u4E2A\u4EFB\u52A1\u7684\u7247\u6BB5\u3002</p><ol><li>\u4EFB\u52A1 1\uFF0C\u4EFB\u52A1 2</li><li>\u5207\u5206\u4EFB\u52A1 1\uFF0C\u4EFB\u52A1 2</li><li>\u968F\u673A\u6392\u5217\u8FD9\u4E9B\u4EFB\u52A1\u7247\u6BB5\uFF0C\u7EC4\u6210\u961F\u5217</li><li>\u6309\u7167\u8FD9\u4E2A\u961F\u5217\u987A\u5E8F\u5C06\u4EFB\u52A1\u7247\u6BB5\u9001\u8FDB <code>JS </code>\u8FDB\u7A0B</li><li><code>JS </code>\u7EBF\u7A0B\u6267\u884C\u4E00\u4E2A\u53C8\u4E00\u4E2A\u7684\u4EFB\u52A1\u7247\u6BB5</li></ol><h2 id="\u811A\u672C\u5F15\u5165" tabindex="-1">\u811A\u672C\u5F15\u5165 <a class="header-anchor" href="#\u811A\u672C\u5F15\u5165" aria-hidden="true">#</a></h2><p>HTML <code>&lt;script&gt;</code> \u5143\u7D20\u7528\u4E8E\u5D4C\u5165\u6216\u5F15\u7528\u53EF\u6267\u884C\u811A\u672C\u3002\u5B83\u53EF\u4EE5\u5F15\u5165\u5916\u90E8\u6587\u4EF6\u6216\u8005\u5185\u90E8\u811A\u672C\u4EE3\u7801\u5757\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5916\u90E8\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script type=&quot;text/javascript&quot; src=&quot;js/index.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5185\u90E8\u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.write(&#39;I am a inner JS&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>&lt;script&gt;</code>\u6807\u7B7E\u91CC\u53EF\u4EE5\u5B9A\u4E49\u4E0D\u540C\u7684\u5C5E\u6027\uFF0C\u5982<code>type</code>\uFF0C<code>async</code>\uFF0C<code>src</code>\uFF0C<code>defer</code>\uFF0C<code>crossorigin</code>\u7B49\u3002</p><ul><li><code>src</code>\u8FD9\u4E2A\u5C5E\u6027\u5B9A\u4E49\u5F15\u7528\u5916\u90E8\u811A\u672C\u7684 URI\uFF0C\u8FD9\u53EF\u4EE5\u7528\u6765\u4EE3\u66FF\u76F4\u63A5\u5728\u6587\u6863\u4E2D\u5D4C\u5165\u811A\u672C\u3002\u6307\u5B9A\u4E86 src \u5C5E\u6027\u7684 script \u5143\u7D20\u6807\u7B7E\u5185\u4E0D\u5E94\u8BE5\u518D\u6709\u5D4C\u5165\u7684\u811A\u672C\u3002</li><li><code>type</code>\u5C5E\u6027\u5B9A\u4E49<code>src</code>\u5F15\u7528\u7684\u811A\u672C\u8BED\u8A00\uFF0C\u5982<code>text/javascript</code>\uFF0C<code>application/javascript</code>\uFF0C<code>text/tpl</code>\u5B9A\u4E49\u9519\u8BEF\u7684\u76EE\u7684\u662F\u53EF\u4EE5\u4F7F\u5176\u6807\u7B7E\u811A\u672C\u4E0D\u6267\u884C\uFF0C\u4EC5\u7528\u6765\u505A\u6A21\u677F\u6587\u4EF6\u4F7F\u7528\u3002</li><li><code>async</code>\u5C5E\u6027\u53EF\u4EE5\u4F7F\u811A\u672C\u6587\u4EF6\u5F02\u6B65\u6267\u884C\uFF0C\u4E14\u540C\u65F6\u89E3\u6790\u6587\u6863\u52A0\u8F7D\u3002</li><li><code>defer</code>\u5C5E\u6027\u901A\u77E5\u6D4F\u89C8\u5668\u8BE5\u811A\u672C\u5C06\u5728\u6587\u6863\u5B8C\u6210\u89E3\u6790\u540E\uFF0C\u89E6\u53D1 <code>DOMContentLoaded ()</code> \u4E8B\u4EF6\u524D\u6267\u884C\u3002 \u6709 <code>defer</code> \u5C5E\u6027\u7684\u811A\u672C\u4F1A\u963B\u6B62 <code>DOMContentLoaded</code> \u4E8B\u4EF6\uFF0C\u76F4\u5230\u811A\u672C\u88AB\u52A0\u8F7D\u5E76\u4E14\u89E3\u6790\u5B8C\u6210\u3002</li><li><code>crossorigin</code>\u5C5E\u6027\u53EF\u4EE5\u4F7F\u7528\u672C\u5C5E\u6027\u6765\u4F7F\u90A3\u4E9B\u5C06\u9759\u6001\u8D44\u6E90\u653E\u5728\u53E6\u5916\u4E00\u4E2A\u57DF\u540D\u7684\u7AD9\u70B9\u6253\u5370\u9519\u8BEF\u4FE1\u606F\u3002</li></ul><h2 id="\u53D8\u91CF" tabindex="-1">\u53D8\u91CF <a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5C31\u662F\u4E00\u4E2A\u7528\u4E8E\u5B58\u653E\u6570\u503C\u7684\u5BB9\u5668\u3002\u58F0\u660E\u53D8\u91CF <code>var</code>\u6709\u4E24\u4E2A\u8FC7\u7A0B\uFF0C\u7B2C\u4E00\u4E2A\u662F\u53D8\u91CF\u58F0\u660E\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u53D8\u91CF\u8D4B\u503C\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var a; //\u58F0\u660E\u53D8\u91CFa</span></span>
<span class="line"><span style="color:#A6ACCD;">a = 3; //\u53D8\u91CF\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">var a = 3; //\u53D8\u91CF\u58F0\u660E\u5E76\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5355\u4E00\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">var x = 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    y = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u4F01\u4E1A\u5F00\u53D1\u547D\u540D\u89C4\u8303\uFF1A</strong></p><ul><li>\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934</li><li>\u80FD\u5B57\u6BCD <code>_</code>, <code>$</code>\u5F00\u5934</li><li>\u5B57\u6BCD<code>_</code>,<code>$</code>\u6570\u5B57</li><li>\u4E0D\u80FD\u5173\u952E\u5B57</li><li>\u4E0D\u80FD\u4FDD\u7559\u5B57</li><li>\u8BED\u4E49\u5316</li><li>\u7ED3\u6784\u5316(<code>js_header js-header</code>)</li><li>\u5C0F\u9A7C\u5CF0</li><li>\u82F1\u8BED\u5199\u6CD5</li><li>\u907F\u514D\u62FC\u97F3</li></ul><p><strong>\u53D8\u91CF\u7684\u4F18\u5148\u7EA7\u95EE\u9898\uFF1A</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u8FD0\u7B97 &gt; \u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">var x = 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">    y = 4;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var z = x + y;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(z);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//print</span></span>
<span class="line"><span style="color:#A6ACCD;">7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="js-\u503C" tabindex="-1">JS \u503C <a class="header-anchor" href="#js-\u503C" aria-hidden="true">#</a></h2><p>JavaScript \u8BED\u8A00\u662F\u52A8\u6001\u8BED\u8A00\u4E5F\u662F\u811A\u672C\u8BED\u8A00\u4E5F\u662F\u89E3\u91CA\u578B\u8BED\u8A00\u4E5F\u662F\u5F31\u7C7B\u578B\u8BED\u8A00(\u6839\u636E\u503C\u7684\u7C7B\u578B\u6210\u4E3A\u88AB\u8D4B\u503C\u7684\u53D8\u91CF)\u3002Java \u8BED\u8A00\u662F\u9759\u6001\u8BED\u8A00\u4E5F\u662F\u7F16\u8BD1\u578B\u8BED\u8A00\u4E5F\u662F\u5F3A\u7C7B\u578B\u8BED\u8A00\u3002</p><h2 id="\u539F\u59CB\u503C" tabindex="-1">\u539F\u59CB\u503C <a class="header-anchor" href="#\u539F\u59CB\u503C" aria-hidden="true">#</a></h2><p>\u57FA\u672C\u53D8\u91CF\u7C7B\u578B\u6709<code>Number</code>\uFF0C<code>String</code>\uFF0C<code>Boolean</code>\uFF0C<code>undefined</code>\uFF0C<code>null</code>\u3002</p><p><strong>Number</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">var a = 3.14;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>String</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var str = &#39;i love programing&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>Boolean</strong>\uFF0C\u5E03\u5C14\u503C(\u5E03\u5C14\u53D1\u660E)\uFF0C\u8BA1\u7B97\u673A\u91CC\uFF0C\u975E\u771F\u5373\u5047\uFF0C\u975E\u5047\u5373\u771F\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var a = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">//true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>undefined</strong></p><ol><li>\u7CFB\u7EDF\u4F1A\u7ED9\u4E00\u4E2A\u672A\u8D4B\u503C\u7684\u53D8\u91CF\u81EA\u52A8\u8D4B\u503C\u4E3A<code>undefined</code>\uFF0C\u7C7B\u578B\u4E5F\u662F<code>undefined</code></li><li>\u51FD\u6570\u6CA1\u6709\u4F20\u5165\u5B9E\u53C2\u65F6\uFF0C\u53C2\u6570\u4E3A<code>undefined</code></li><li>\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u9ED8\u8BA4\u8FD4\u56DE<code>undefined</code></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var a = undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">//undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var a;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">//undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><code>undefined</code>\u65E2\u662F\u4E00\u4E2A\u539F\u59CB\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u662F\u4E00\u4E2A\u539F\u59CB\u503C\u6570\u636E</li><li><code>undefined</code>\u662F\u5168\u5C40\u5BF9\u8C61\u4E0A\u7684\u4E00\u4E2A\u5C5E\u6027<code>window.undefined</code></li><li><code>undefined</code>\u4E0D\u53EF\u5199<code>writable: false</code></li><li><code>undefined</code>\u4E0D\u53EF\u914D\u7F6E<code>configurable: false</code></li><li><code>undefined</code>\u4E0D\u53EF\u679A\u4E3E<code>enumerable: false</code></li><li><code>undefined</code>\u4E0D\u53EF\u91CD\u65B0\u5B9A\u4E49<code>defineProperty</code></li><li>\u5168\u5C40\u4E0B\uFF0C<code>undefined</code>\u65E0\u6CD5\u4F5C\u4E3A\u4E00\u4E2A\u53D8\u91CF\u4F7F\u7528</li><li>\u5C40\u90E8\u4F5C\u7528\u57DF\u4E0B\uFF0C<code>undefined</code>\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u53D8\u91CF\u4F7F\u7528\uFF0C\u8BF4\u660E<code>undefined</code>\u4E0D\u662F JS \u7684\u4FDD\u7559\u5B57\u548C\u5173\u952E\u5B57</li></ul><blockquote><p><strong>\u6CE8</strong>\uFF1A<code>void(0) === undefined</code></p></blockquote><p><strong>null</strong>\uFF0C\u7A7A\u503C\uFF0C\u5B83\u7684\u4F5C\u7528\u5728\u4E8E\u521D\u59CB\u5316\u7EC4\u4EF6\u548C\u9500\u6BC1\u51FD\u6570\u3002</p><h2 id="\u5F15\u7528\u503C" tabindex="-1">\u5F15\u7528\u503C <a class="header-anchor" href="#\u5F15\u7528\u503C" aria-hidden="true">#</a></h2><p>\u5F15\u7528\u503C\u6709<code>object</code>\uFF0C<code>array</code>\uFF0C<code>function</code>\uFF0C<code>date</code>\uFF0C<code>RegExp</code>\u7B49\u3002</p><h2 id="\u5185\u5B58" tabindex="-1">\u5185\u5B58 <a class="header-anchor" href="#\u5185\u5B58" aria-hidden="true">#</a></h2><p>JavaScript\u4E2D\u7684\u5185\u5B58\u5206\u4E3A\u6808\u5185\u5B58 <code>Stack</code>\u548C\u5806\u5185\u5B58 <code>Heap</code>\u3002</p><p><strong>\u5982\u4F55\u5B58\u50A8\u539F\u59CB\u503C\uFF1F</strong></p><p>\u6808\u5185\u5B58\u5148\u8FDB\u540E\u51FA</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var a = 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = a;</span></span>
<span class="line"><span style="color:#A6ACCD;">a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(b); //3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u5B58\u50A8\u6B65\u9AA4\uFF1A</strong></p><ol><li>\u5F80\u5185\u5B58\u7A7A\u95F4\u6700\u91CC\u9762\u58F0\u660E\u53D8\u91CF a \u5E76\u5728\u7A7A\u95F4\u91CC\u5B58\u5165\u503C 3(<code>var a = 3</code>)</li><li>\u5F80\u5185\u5B58\u7A7A\u95F4\u6700\u91CC\u9762\u7684\u4E0A\u4E00\u4F4D\u58F0\u660E\u53D8\u91CF b \u5E76\u5728\u7A7A\u95F4\u91CC\u5B58\u5165\u503C 3(<code>var b = a</code>)</li><li>\u5F80\u5185\u5B58\u7A7A\u95F4\u6700\u91CC\u9762\u7684\u4E0A\u4E0A\u4E00\u4F4D\u5F00\u8F9F\u7A7A\u95F4\u91CC\u5B58\u5165\u503C 1(<code>a = 1</code>)</li></ol><p>\u8BF4\u660E\u539F\u59CB\u503C\u6570\u636E\u662F\u6C38\u4E45\u4FDD\u5B58\u4E14\u4E0D\u53EF\u6539\u53D8\u7684\uFF0C\u4F8B\u5982\u624B\u673A\u76F8\u673A\u7535\u8111\u5185\u5B58\u5220\u9664\u5185\u5BB9\u5176\u5B9E\u6570\u636E\u4ECD\u4FDD\u7559\u3002</p><p><strong>\u5982\u4F55\u5B58\u50A8\u5F15\u7528\u503C\uFF1F</strong></p><p>\u503C\uFF0C\u6307\u9488\u5B58\u50A8\u5728\u6808 <code>Stack </code>\u5185\u5B58 \u6307\u5411 \u5806\u5185\u5B58 <code>Heap </code>\u5730\u5740</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var arr1 = [1, 2, 3, 4];</span></span>
<span class="line"><span style="color:#A6ACCD;">var arr2 = arr1;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr1 + &#39;&#39; + arr2);</span></span>
<span class="line"><span style="color:#A6ACCD;">//1, 2, 3, 4 | 1, 2, 3, 4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6307\u5411\u76F8\u540C\u5730\u5740\u7684\u60C5\u51B5\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var arr1 = [1, 2, 3, 4];</span></span>
<span class="line"><span style="color:#A6ACCD;">var arr2 = arr1;</span></span>
<span class="line"><span style="color:#A6ACCD;">arr1.push(5);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr1); //1, 2, 3, 4, 5</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr2); //1, 2, 3, 4, 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6307\u5411\u4E0D\u540C\u5730\u5740\u7684\u60C5\u51B5\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var arr1 = [1, 2, 3, 4];</span></span>
<span class="line"><span style="color:#A6ACCD;">var arr2 = arr1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr1 = [1, 2];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr1); //1, 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr2); //1, 2, 3, 4, 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,56),c=[o];function p(i,t,d,r,C,A){return n(),a("div",null,c)}const g=s(l,[["render",p]]);export{y as __pageData,g as default};
