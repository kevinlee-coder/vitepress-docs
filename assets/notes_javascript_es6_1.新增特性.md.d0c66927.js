import{_ as s,c as n,o as a,a as l}from"./app.b7c8ca52.js";const D=JSON.parse('{"title":"ES6\u65B0\u589E\u7279\u6027","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5386\u53F2","slug":"\u5386\u53F2","link":"#\u5386\u53F2","children":[]},{"level":2,"title":"let","slug":"let","link":"#let","children":[]},{"level":2,"title":"const","slug":"const","link":"#const","children":[]},{"level":2,"title":"\u89E3\u6784\u8D4B\u503C","slug":"\u89E3\u6784\u8D4B\u503C","link":"#\u89E3\u6784\u8D4B\u503C","children":[]},{"level":2,"title":"\u7B80\u5199","slug":"\u7B80\u5199","link":"#\u7B80\u5199","children":[]},{"level":2,"title":"\u7BAD\u5934\u51FD\u6570","slug":"\u7BAD\u5934\u51FD\u6570","link":"#\u7BAD\u5934\u51FD\u6570","children":[]},{"level":2,"title":"rest","slug":"rest","link":"#rest","children":[]},{"level":2,"title":"\u62D3\u5C55","slug":"\u62D3\u5C55","link":"#\u62D3\u5C55","children":[]},{"level":2,"title":"Symbol","slug":"symbol","link":"#symbol","children":[]},{"level":2,"title":"Reflect","slug":"reflect","link":"#reflect","children":[]}],"relativePath":"notes/javascript/es6/1.\u65B0\u589E\u7279\u6027.md","lastUpdated":null}'),p={name:"notes/javascript/es6/1.\u65B0\u589E\u7279\u6027.md"},o=l(`<h1 id="es6\u65B0\u589E\u7279\u6027" tabindex="-1">ES6\u65B0\u589E\u7279\u6027 <a class="header-anchor" href="#es6\u65B0\u589E\u7279\u6027" aria-hidden="true">#</a></h1><h2 id="\u5386\u53F2" tabindex="-1">\u5386\u53F2 <a class="header-anchor" href="#\u5386\u53F2" aria-hidden="true">#</a></h2><p><strong>\u6D4F\u89C8\u5668\u7ECF\u5386\u9636\u6BB5\uFF1A</strong></p><ul><li>1991- 1997: <code>HTML1</code>/<code>HTML2</code>/<code>HTML3</code>/<code>IETF(The Internet Engineering Task Force)</code>\u56FD\u9645\u4E92\u8054\u7F51\u5DE5\u7A0B\u4EFB\u52A1\u7EC4</li><li>1997: <code>HTML3.2 W3C</code></li></ul><p><strong><code>ECMA-262 Ecmascript</code> \u811A\u672C\u8BED\u8A00\u89C4\u8303\uFF1A</strong></p><ul><li>1995 <code>LiveScript JavaScript</code></li><li>1996 <code>JavaScript 1.0/1.1</code></li><li>1997 <code>Jscript</code></li><li>1997.6 <code>ECMAScript 1.0</code></li><li>1998.6 <code>ECMAScript 2.0 </code></li><li>1999.12 <code>ECMAScript 3.0 </code></li><li>2000 <code>ECMAScript 4.0</code>\u8349\u6848(\u672A\u901A\u8FC7) <code>TC39(technical committe 39)</code>\u6210\u5458\u53CD\u5BF9</li><li>2007 <code>ECMAScript 4.0</code>\u51C6\u5907\u53D1\u5E03 \u4F46\u6CA1\u53D1\u5E03</li><li>2008.7 <code>ECMAScript 3.1</code>\u8FC7\u6E21\u5230<code>5.0</code> , \u5927\u4F1A\u9879\u76EE\u4EE3\u53F7(<code>hamony</code>) <code>JavaScript.next</code> / <code>JavaScript.next.next</code></li><li>2009.12 <ul><li><code>ECMAScript 5.0</code> \u6B63\u5F0F\u53D1\u5E03</li><li><code>JavaScript.next</code>(\u653E\u5165\u8349\u6848) <code>ES6</code></li><li><code>JavaScript.next.next</code>(\u653E\u5165\u8349\u6848) <code>ES7</code></li></ul></li><li>2011.6 <code>ECMAScript 5.1</code></li><li>2013.3 <code>JavaScript.next</code>(\u8349\u6848\u51BB\u7ED3)</li><li>2013.6 <code>JavaScript.next</code>(\u8349\u6848\u53D1\u5E03)</li><li>2015.6 <code>ECMAScript 6.0</code>\u6B63\u5F0F\u53D1\u5E03, \u4ECE\u6B64\u6BCF\u5E746\u6708\u51FA\u4E00\u4E2A\u65B0\u7684\u5C0F\u7248\u672C</li><li><code>ECMAScript2016</code></li><li><code>ECMAScript2017</code></li><li><code>ECMAScript2018</code></li><li><code>ECMAScript2019</code></li><li><code>ECMAScript2020</code></li></ul><h2 id="let" tabindex="-1">let <a class="header-anchor" href="#let" aria-hidden="true">#</a></h2><p>\u4F5C\u7528\u57DF <code>[[scope]]</code> \u5B58\u50A8 <code>AO/ GO</code></p><p><strong><code>var</code>\u7684\u95EE\u9898\uFF1A</strong></p><ul><li>\u53D8\u91CF\u63D0\u5347 <code>undefined</code></li><li>\u91CD\u590D\u58F0\u660E\u4F1A\u6709\u53D8\u91CF\u6C61\u67D3</li></ul><p><strong><code>ES5</code>\u89E3\u51B3\u65B9\u6848:</strong></p><ul><li>\u7ACB\u5373\u6267\u884C\u51FD\u6570</li><li>\u4F46\u5B9A\u4E49\u51FD\u6570\u5185\u90E8\u4ECD\u4F1A\u5B58\u5728\u53D8\u91CF\u6C61\u67D3\u7684\u95EE\u9898</li></ul><p><strong>kiss\u539F\u5219</strong></p><p><code>keep it simple</code> \u4FDD\u6301\u7B80\u5355/\u50BB\u74DC\uFF0C\u901A\u8FC7\u51FD\u6570\u63D0\u7EAF\uFF0C\u8BA9\u529F\u80FD\u5355\u4E00\uFF0C\u89E3\u51B3\u53D8\u91CF\u6C61\u67D3\u95EE\u9898</p><p><em><strong>\u5982\u4F55\u89E3\u51B3\u53D8\u91CF\u6C61\u67D3\u95EE\u9898\uFF1F</strong></em></p><p><code>let</code>\u8BED\u6CD5 \u5757\u7EA7\u4F5C\u7528\u57DF</p><p><strong>\u5E38\u89C1\u7684\u5757\u7EA7\u4F5C\u7528\u57DF\uFF1A</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">if(1){}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">for(){}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p><strong>\u5173\u4E8E\u6682\u65F6\u6027\u6B7B\u533A\uFF1A</strong></p><p><code>TDZ(Temporal Dead Zone)</code></p></blockquote><p><strong>let\u7279\u70B9\uFF1A</strong></p><ul><li>\u540C\u4E00\u4F5C\u7528\u57DF\u4E0B\uFF0C<code>let</code>\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E</li><li><code>let</code>\u4E0D\u4F1A\u58F0\u660E\u63D0\u5347\uFF0C\u4F1A\u4EA7\u751F\u4E00\u4E2A\u6682\u65F6\u6027\u6B7B\u533A</li><li><code>let</code>\u53EA\u80FD\u518D\u5F53\u524D\u7684\u5757\u7EA7\u4F5C\u7528\u57DF\u4E0B\u751F\u6548</li></ul><p><code>let</code>\u672C\u8D28\uFF1A\u4E3A\u4E86<code>JS</code>\u589E\u52A0\u4E00\u4E2A\u5757\u7EA7\u4F5C\u7528\u57DF</p><p><strong>\u5757\u7EA7\u4F5C\u7528\u57DF\uFF1A</strong> \u662F\u6CA1\u6709\u8FD4\u56DE\u503C\u7684</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//let\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">function test(){</span></span>
<span class="line"><span style="color:#A6ACCD;">  let a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  var a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">test();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u62A5\u9519: SyntaxError: Identifier &#39;a&#39; has already been declared</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u9884\u7F16\u8BD1\u7684\u60C5\u51B5\u4E0B\u5DF2\u7ECF\u58F0\u660Ea\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">function test(a){</span></span>
<span class="line"><span style="color:#A6ACCD;">  let a = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">test();</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u62A5\u9519: SyntaxError: Identifier &#39;a&#39; has already been declared</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function test(a){</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let a = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">test();</span></span>
<span class="line"><span style="color:#A6ACCD;">//undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function test(a){</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let a = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">  } </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">test();</span></span>
<span class="line"><span style="color:#A6ACCD;">//10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//let\u4E0D\u4F1A\u58F0\u660E\u63D0\u5347\uFF0C\u4F1A\u4EA7\u751F\u4E00\u4E2A\u6682\u65F6\u6027\u6B7B\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">let a = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">//ReferenceError: a is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function test(){</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">  let a = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">test();</span></span>
<span class="line"><span style="color:#A6ACCD;">//ReferenceError: a is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u95EE\u98981\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var a = a;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">//undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var b = b;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(b);</span></span>
<span class="line"><span style="color:#A6ACCD;">//ReferenceError: b is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7ECF\u5178\u95EE\u98982\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//ES6\u8BED\u6CD5 \u5F62\u53C2\u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6682\u65F6\u6027\u6B7B\u533A\u5BFC\u81F4\u7684\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5148\u5C06y\u8D4B\u503C\u7ED9x, \u4F46y\u672A\u88AB\u5B9A\u4E49, y\u662F\u5728\u8D4B\u503C\u4E4B\u540E\u88AB\u5B9A\u4E49\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">function test(x = y, y = 2){</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(x, y); //\u62A5\u9519y is not defined  2</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">test();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em><strong>\u5982\u4F55\u66F4\u6539\u624D\u80FD\u6267\u884C\uFF1F</strong></em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5148\u8D4B\u503C\u518D\u5F15\u7528\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">function test(x = 2, y = x){</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(x, y); //2  2</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">test();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>let</code>\u5F15\u8D77\u7684\u6682\u65F6\u6027\u6B7B\u533A\u4F7F<code>typeof</code>\u7ED3\u679C\u4E5F\u66F4\u6539\u4E86</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">console.log(typeof a); //undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">console.log(typeof a); </span></span>
<span class="line"><span style="color:#A6ACCD;">let a;</span></span>
<span class="line"><span style="color:#A6ACCD;">//ReferenceError: a is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7279\u70B93\u793A\u4F8B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//let\u53EA\u80FD\u518D\u5F53\u524D\u7684\u5757\u7EA7\u4F5C\u7528\u57DF\u4E0B\u751F\u6548</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u4E0D\u5728\u540C\u4E00\u4F5C\u7528\u57DF\u4E0B\u7684\u60C5\u51B5\u4E0D\u751F\u6548</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> let a =2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">//ReferenceError: a is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function test(){</span></span>
<span class="line"><span style="color:#A6ACCD;">  let a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">test();</span></span>
<span class="line"><span style="color:#A6ACCD;">//ReferenceError: a is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">if(1){</span></span>
<span class="line"><span style="color:#A6ACCD;">  let a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">//ReferenceError: a is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u6C38\u8FDC\u6B7B\u5FAA\u73AF\uFF0C\u6C38\u8FDC\u4E0D\u6267\u884C\u4EE3\u7801\uFF0C\u4F46\u4E0D\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">for(;1;){</span></span>
<span class="line"><span style="color:#A6ACCD;">  let a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u6B7B\u5FAA\u73AF\u7ED3\u675F\uFF0C\u6267\u884C\u4EE3\u7801\uFF0C\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">for(;1;){</span></span>
<span class="line"><span style="color:#A6ACCD;">  let a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  break;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">//ReferenceError: a is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5173\u4E8E<code>for</code>\u5FAA\u73AF\u7684\u5751\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//i\u65E0\u6CD5\u63D0\u5347\uFF0C\u5916\u90E8\u65E0\u6CD5\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#A6ACCD;">for(let i = 0; i &lt; 10; i++){}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">//ReferenceError: i is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em><strong>\u4E3A\u4EC0\u4E48\u6253\u53700-9 \u800C\u4E0D\u662F 10\u4E2A10\uFF1F</strong></em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var arr = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">for(var i = 0; i &lt; 10; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">  arr[i] = function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8FD9\u91CC\u5FAA\u73AF\u5B8C\u4F46\u672A\u6267\u884C i = 10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u4F46\u8FD9\u91CC\u53C8\u5F00\u59CB\u5FAA\u73AF\u91CD\u590D\u8D4B\u503Ci \u6240\u4EE5\u53C8\u5F00\u59CB0-9\u7684\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">for(var i = 0; i &lt; 10; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">  arr[i]();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em><strong><code>for</code>\u5FAA\u73AF\u91CC\u9762\u7684\u4E24\u4E2A\u5757\u7EA7\u4F5C\u7528\u57DF\u4F1A\u4E0D\u4F1A\u5B58\u5728\u51B2\u7A81\uFF1F</strong></em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u8FD9\u91CC\u5B58\u5728\u4E24\u4E2A\u5757\u7EA7\u4F5C\u7528\u57DF</span></span>
<span class="line"><span style="color:#A6ACCD;">for(var i = 0; i &lt; 10; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">  i = &#39;a&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5206\u6790\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">var i = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">for(; i &lt; 10; ){</span></span>
<span class="line"><span style="color:#A6ACCD;">  i = &#39;a&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">  i++</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//1. i = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">//2. \u8FDB\u5165\u5FAA\u73AF \u88AB\u8D4B\u503C\u4E3Aa i++</span></span>
<span class="line"><span style="color:#A6ACCD;">//3. &#39;a&#39; + 1 = &#39;a1&#39; \u53D8\u4E3A NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">//4. NaN &lt; 10 ? false \u4E0D\u8FDB\u5FAA\u73AF \u6240\u4EE5\u53EA\u6253\u5370\u4E00\u6B21 a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u8FD9\u91CCi\u4ECD\u5904\u4E8E\u540C\u4E00\u4F5C\u7528\u57DF\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">for(let i = 0; i &lt; 10; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">  i = &#39;a&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u8BF4\u660Elet\u548Cvar\u4E0D\u5728\u540C\u4E00\u4F5C\u7528\u57DF\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">for(let i = 0; i &lt; 10; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">  var i = &#39;a&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//SyntaxError: Identifier &#39;a&#39; has already been declared</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u4E0D\u5728\u540C\u4E00\u4F5C\u7528\u57DF\u4E0B\u7684\u4E0D\u5F71\u54CDlet\u7684\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">for(let i = 0; i &lt; 10; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">  let i = &#39;a&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//10 \u4E2A a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u4F8B\u5B50\u8BF4\u660E<code>for</code>\u5FAA\u73AF\u91CC\u9762\u662F\u7236\u7EA7\u4F5C\u7528\u57DF\uFF0C\u50CF\u4EE5\u4E0B\u60C5\u51B5</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">if(1){</span></span>
<span class="line"><span style="color:#A6ACCD;">  let a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u4E0D\u540C\u4F5C\u7528\u57DF\u4E0Blet\u4E0D\u5F71\u54CD</span></span>
<span class="line"><span style="color:#A6ACCD;">if(1){</span></span>
<span class="line"><span style="color:#A6ACCD;">  let a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let a = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u4E0D\u9650\u5D4C\u5957\u6B21\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">{{{{{}}}}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728<code>ES5</code>\u4E2D<code>{}</code>\u5D4C\u5957\u7684\u51FD\u6570\u662F\u4E0D\u5408\u6CD5\u4F46\u53EF\u4EE5\u89E3\u6790\u7684\uFF0C\u5728<code>ES6</code>\u4E2D\u5C31\u5141\u8BB8\u4E86</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  function test(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">if(i){</span></span>
<span class="line"><span style="color:#A6ACCD;">  function test(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">try{</span></span>
<span class="line"><span style="color:#A6ACCD;">  function test(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">}catch(e){</span></span>
<span class="line"><span style="color:#A6ACCD;">  function test1(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u8FF0\u5199\u6CD5\u5E76\u4E0D\u63A8\u8350\uFF0C\u4F46\u53EF\u4EE5\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\u66FF\u4EE3\u58F0\u660E</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">try{</span></span>
<span class="line"><span style="color:#A6ACCD;">  var test = function(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">}catch(e){</span></span>
<span class="line"><span style="color:#A6ACCD;">  var test2 = function(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5757\u7EA7\u4F5C\u7528\u57DF\uFF1A\u662F\u6CA1\u6709\u8FD4\u56DE\u503C\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  return </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5757\u7EA7\u4F5C\u7528\u57DF\u7B49\u4E8E\u533F\u540D\u51FD\u6570\u7684\u8C03\u7528\u5417\uFF1F \u4E0D\u7B49\u4E8E</p><h2 id="const" tabindex="-1">const <a class="header-anchor" href="#const" aria-hidden="true">#</a></h2><p>\u5B9A\u4E49\u5E38\u91CF\uFF0C\u4E0D\u53EF\u53D8\u7684\u91CF\uFF0C\u4E0D\u671F\u671B\u53D8\u91CF\u88AB\u66F4\u6539</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const test = require(&#39;http&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong><code>const</code>\u7279\u70B9\uFF1A</strong></p><ul><li>\u5B9A\u4E49\u7684\u5E38\u91CF\u5FC5\u8981\u8981\u8D4B\u503C</li><li>\u4E00\u65E6\u5B9A\u4E49\u5FC5\u987B\u8D4B\u503C\uFF0C\u503C\u4E0D\u80FD\u88AB\u66F4\u6539\u3001</li><li>\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u5B58\u5728\u6682\u65F6\u6027\u6B7B\u533A</li><li>\u5E38\u91CF\u4E0D\u80FD\u91CD\u590D\u58F0\u660E</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5B9A\u4E49\u7684\u5E38\u91CF\u5FC5\u8981\u8981\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">const a;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">//Uncaught SyntaxError: Missing initializer in const declaration</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5B58\u5728\u6682\u65F6\u6027\u6B7B\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  const a = 12;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">//Uncaught ReferenceError: a is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5B58\u5728\u6682\u65F6\u6027\u6B7B\u533A\uFF0C\u4E14\u4E0D\u80FD\u53D8\u91CF\u63D0\u5347</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const a = 12;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//Uncaught ReferenceError: a is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//const\u4E0D\u80FD\u91CD\u590D\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  const a = 12;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let a = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">//Uncaught SyntaxError: Identifier &#39;a&#39; has already been declared</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>const </code>\u7684\u503C\u662F\u5F15\u7528\u503C\u60C5\u51B5\uFF0C\u6808\u80FD\u4FDD\u8BC1\u4E0D\u53D8\uFF0C\u5806\u4E0D\u80FD\u4FDD\u8BC1</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u8BF4\u660Econst\u53EA\u4FDD\u8BC1\u6307\u9488\u5730\u5740\u6CA1\u9519\uFF0C\u4F46\u4E0D\u4FDD\u8BC1\u5730\u5740\u91CC\u6570\u636E\u5185\u5BB9\u4E0D\u88AB\u66F4\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.name = &#39;zhangsan&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{name: &quot;zhangsan&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53EF\u4EE5\u901A\u8FC7<code>Object.freeze()</code>\u65B9\u6CD5\u51BB\u7ED3<code>const</code>\u58F0\u660E\u7684\u5F15\u7528\u503C\uFF0C\u4F7F\u4E4B\u4E0D\u80FD\u66F4\u6539\u5F15\u7528\u503C\u6570\u636E</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const obj = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">Object.freeze(obj);</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.name = &#39;zhangsan&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{name: &quot;zhangsan&quot;} freeze()\u4E4B\u540E=&gt; {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FDB\u4E00\u6B65\u5C01\u88C5\u51BB\u7ED3\u51FD\u6570</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function myFreeze(obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Object.freeze(obj);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u6DF1\u5EA6\u9012\u5F52\u5BF9\u8C61\u91CC\u9762\u7684\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (var key in obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u8BE5\u5BF9\u8C61\u7684\u503C\u4E3Aobject\u4E14\u4E0D\u80FD\u662Fnull</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof (obj[key] === &#39;object&#39;) &amp;&amp; obj[key] !== null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      Object.freeze(obj[key]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  son: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    lisi: &#39;18&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    zhangsan: &#39;19&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  car: [&#39;benz&#39;, &#39;mazda&#39;, &#39;bmw&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">myFreeze(person);</span></span>
<span class="line"><span style="color:#A6ACCD;">person.son.wangwu = &#39;20&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">person.car[3] = &#39;toyota&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u6CA1\u6CE8\u91CAmyFreeze(person);</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u6253\u5370\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"> * {son: {\u2026}, car: Array(4)}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   car: (4) [&quot;benz&quot;, &quot;mazda&quot;, &quot;bmw&quot;, &quot;toyota&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   son: {lisi: &quot;18&quot;, zhangsan: &quot;19&quot;, wangwu: &quot;20&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   __proto__: Object</span></span>
<span class="line"><span style="color:#A6ACCD;"> * </span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u6CE8\u91CAmyFreeze(person);</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u6253\u5370\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"> * {son: {\u2026}, car: Array(3)}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   car: (3) [&quot;benz&quot;, &quot;mazda&quot;, &quot;bmw&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   son: {lisi: &quot;18&quot;, zhangsan: &quot;19&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"> *   __proto__: Object</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0D\u7528<code>Object.freeze()</code>\u51BB\u7ED3\u7684\u60C5\u51B5\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u8FD9\u91CCrequire\u8FD4\u56DE\u7684\u662F\u5B9E\u4F8B\u5316\u5BF9\u8C61\u88AB\u5E38\u91CFconst\u63A5\u6536</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8FD9\u79CD\u5F15\u5165\u5E93\u7684\u5199\u6CD5\u4ECE\u6E90\u5934\u4E0A\u5DF2\u7ECF\u4E0D\u80FD\u66F4\u6539\u8BE5\u5BF9\u8C61\u7684\u5185\u5BB9(\u56E0\u4E3A\u662F\u5B9E\u4F8B\u5316\u5BF9\u8C61)</span></span>
<span class="line"><span style="color:#A6ACCD;">const http = require(&#39;http&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p><strong>\u5185\u5BB9\u8865\u51451\uFF1A</strong></p><p>\u9876\u5C42\u5BF9\u8C61\u6307<code>window</code>\uFF0C\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u65E9\u671F\u7684JavaScript\u5199\u6CD5\u5B58\u5728\u95EE\u9898\u4F46\u4E5F\u80FD\u89E3\u6790</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5B58\u5728\u4E0D\u5BB9\u6613\u53D1\u73B0\u9519\u8BEF</span></span>
<span class="line"><span style="color:#A6ACCD;">a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a); //undefined window</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//ES6\u4E3A\u4E86\u6539\u53D8\uFF0C\u4FDD\u6301\u517C\u5BB9\u6027 \u5141\u8BB8var \u4E0D\u5141\u8BB8let const</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6240\u4EE5\u5EFA\u8BAE\u7528let\u6216const\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">let a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a); </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p><strong>\u5185\u5BB9\u8865\u51452\uFF1A</strong></p><p>\u4E13\u4E1A\u672F\u8BED\uFF1A<code>falsy </code>\u5047\u7684\u503C(\u865A\u503C) \u901A\u8FC7<code>boolean</code>\u8F6C\u5316\u4E3A<code>false</code>\u7684\u503C</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function foo(x, y) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  x = x || 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  y = y || 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(x + y);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">foo(); //1+2=3</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(5, 6); //5+6=11</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(5); //5+2=7</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(null, 6); //null -&gt; false 1+6=7</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(0, 5); //0 -&gt; false 1+5=6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>ES5</code>\u5F62\u53C2\u4E3A\u9ED8\u8BA4\u503C\u5199\u6CD5</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function foo(x, y) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var x = typeof (arguments[0]) !== &#39;undefined&#39; ? arguments[0] : 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  var y = typeof (arguments[1]) !== &#39;undefined&#39; ? arguments[1] : 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(x + y);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(); //3</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(5, 6); //11</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(5); //7</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(null, 6); //7</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(0, 5); //5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>ES6</code>\u5F62\u53C2\u4E3A\u9ED8\u8BA4\u503C\u5199\u6CD5</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function foo(x = 1, y = 2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(x + y);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(); //3</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(5, 6); //11</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(5); //7</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(null, 6); //7</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(0, 5); //5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u60C5\u51B51\uFF1A\u5F62\u53C2\u9ED8\u8BA4\u503C\u4F1A\u5F71\u54CD\u51FD\u6570\u5185\u58F0\u660E\u9020\u6210\u91CD\u590D\u58F0\u660E\u62A5\u9519</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function foo(x = 2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let x = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(x);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(10);</span></span>
<span class="line"><span style="color:#A6ACCD;">//Uncaught SyntaxError: Identifier &#39;x&#39; has already been declared</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7279\u6B8A\u60C5\u51B5\uFF1A\u91CC\u5C42\u58F0\u660E\u65F6\u62FF\u4E0D\u5230\u7236\u7EA7\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\u4F1A\u62A5\u9519</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5982\u679C\u4E0D\u58F0\u660E\u91CC\u5C42\u662F\u53EF\u4EE5\u62FF\u5230\u7236\u7EA7\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">var x = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(x);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u91CC\u5C42\u4E00\u65E6let\u58F0\u660E\uFF0C\u5C31\u4F1A\u5F62\u6210\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u5C06\u65E0\u6CD5\u8BBF\u95EE\u7236\u7EA7\u4F5C\u7528\u57DF</span></span>
<span class="line"><span style="color:#A6ACCD;">var x = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  let x = x;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(x);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//Uncaught ReferenceError: Cannot access &#39;x&#39; before initialization</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8FD9\u91CC()\u91CC\u4F1A\u5F62\u6210\u5355\u72EC\u7684\u4F5C\u7528\u57DF</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8FD9\u91CC\u7684\u5199\u6CD5\u7C7B\u4F3C\u4E0A\u9762\u7B2C\u4E00\u4E2A\u7684\u5199\u6CD5\u60C5\u51B5</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u91CC\u5C42\u58F0\u660E\u65F6\u62FF\u4E0D\u5230\u7236\u7EA7\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\u4F1A\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo(x = x) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(x);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo();</span></span>
<span class="line"><span style="color:#A6ACCD;">//Uncaught ReferenceError: Cannot access &#39;x&#39; before initialization</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8FD9\u91CC()\u91CC\u7684z=z+1 \u7EA6\u7B49\u4E8E let z = z + 1,\u6240\u4EE5\u62FF\u4E0D\u5230\u7236\u7EA7\u4F5C\u7528\u57DF,\u6240\u4EE5z\u6CA1\u6709\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo(x = w + 1, y = x + 1, z = z + 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(x, y, z);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo();</span></span>
<span class="line"><span style="color:#A6ACCD;">//Uncaught ReferenceError: Cannot access &#39;z&#39; before initialization</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u60F0\u6027\u6C42\u503C\uFF1A\u5F53\u51FD\u6570\u7684\u53C2\u6570\u4E3A\u8868\u8FBE\u5F0F\u7684\u65F6\u5019\uFF0C\u4F1A\u91CD\u65B0\u8BA1\u7B97\u8868\u8FBE\u5F0F\u7684\u503C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u4F18\u5148\u8BBF\u95EE\u91CC\u5C42\u4F5C\u7528\u57DF\u91CC\u5B58\u5728\u7684\u53D8\u91CF\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">let a = 99;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function foo(b = a + 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(b);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">foo(); //100</span></span>
<span class="line"><span style="color:#A6ACCD;">a = 100;</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(); //101</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u89E3\u6784\u8D4B\u503C" tabindex="-1">\u89E3\u6784\u8D4B\u503C <a class="header-anchor" href="#\u89E3\u6784\u8D4B\u503C" aria-hidden="true">#</a></h2><p>\u89E3\u6784\u8D4B\u503C\u4F9D\u7136\u662F\u4E00\u4E2A\u8D4B\u503C\u7684\u8FC7\u7A0B</p><p>\u6A21\u5F0F\u5339\u914D(\u7ED3\u6784\u5316\u8D4B\u503C)</p><p><strong>\u6570\u7EC4\u89E3\u6784</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u6570\u7EC4\u7684\u6A21\u5F0F\u5339\u914D</span></span>
<span class="line"><span style="color:#A6ACCD;">let [a, b, c] = [1, 2, 3];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a, b, c); //1 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let [d, [e, [f]]] = [1, [2, [3]]];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(d, e, f); //1 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u89E3\u6784\u5931\u8D25</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u53D8\u91CF\u591A\uFF0C\u503C\u5C11\u7684\u60C5\u51B5\u4EE5undefined\u586B\u5145</span></span>
<span class="line"><span style="color:#A6ACCD;">let [a, [b, [c]]] = [, [2, [3]]];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a, b, c);//undefined 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u4E0D\u5B8C\u5168\u89E3\u6784</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u53D8\u91CF\u5C11\uFF0C\u503C\u591A</span></span>
<span class="line"><span style="color:#A6ACCD;">let [a, [b, [c, []]]] = [1, [2, [3, [4]]]];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a, b, c);</span></span>
<span class="line"><span style="color:#A6ACCD;">//1 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u89E3\u6784\u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8FD9\u91CC\u9ED8\u8BA4\u503C\u4E3A6</span></span>
<span class="line"><span style="color:#A6ACCD;">let [a = 6] = [1];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a); //1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let [b = 6] = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(b); //6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let [a, b = 2] = [1];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a, b); //1 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let [c, d = 2] = [1, undefined];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(c, d); //1 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let [e, f = 2] = [1, null];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(e, f); //1 null</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let [g, h = 2] = [1, false];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(g, h); //1 false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let [j, k = 2] = [1, &#39;1&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(j, k); //1 &#39;1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u6709\u9ED8\u8BA4\u503C\u65F6\uFF0C\u6709\u503C\u627E\u503C\uFF0C\u6CA1\u503C\u627E\u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">function test() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(10);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let [x = test()] = [1];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(x); //1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let [y = test()] = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(y); //10 undefind</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let [x = 1, y = x] = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(x, y); //1 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u91CD\u590D\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">let a = 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">let [a = 1, b = a] = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(x, y);</span></span>
<span class="line"><span style="color:#A6ACCD;">//Uncaught SyntaxError: Identifier &#39;a&#39; has already been declared</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let [x = 1, y = x] = [2];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(x, y); //2 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let [x = 1, y = x] = [1, 2];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(x, y); //1 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u6682\u65F6\u6027\u6B7B\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">let [x = y, y = 1] = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(x, y);</span></span>
<span class="line"><span style="color:#A6ACCD;">//Uncaught ReferenceError: Cannot access &#39;y&#39; before initialization</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u5BF9\u8C61\u89E3\u6784</strong></p><p>\u5BF9\u8C61\u7684\u89E3\u6784\u662F\u4E0D\u5B58\u5728\u987A\u5E8F\u7684</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: a,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: b,</span></span>
<span class="line"><span style="color:#A6ACCD;">  c: c</span></span>
<span class="line"><span style="color:#A6ACCD;">} = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  c: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a, b, c);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5E38\u89C1\u5BF9\u8C61\u7684\u89E3\u6784\u65B9\u5F0F</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const {son} = person;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5BF9\u8C61\u89C4\u5219\u89E3\u6784</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u6570\u7EC4\u4E5F\u662F\u7279\u6B8A\u7684\u5BF9\u8C61\uFF0C\u4E5F\u80FD\u8FDB\u884C\u89E3\u6784\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">let arr = [1, 2, 3];</span></span>
<span class="line"><span style="color:#A6ACCD;">let {0: first, [arr.length - 1]: last} = arr;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(first, last); //1 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9ED8\u8BA4\u503C\u517C\u5BB9</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">function fetch(url, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  body: body = &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  method: method = &#39;GET&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  header: header = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">} = {}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(method);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">fetch(&#39;http://www.baidu.com&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">fetch(&#39;http://www.baidu.com&#39;, {}); //GET</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7B80\u5199" tabindex="-1">\u7B80\u5199 <a class="header-anchor" href="#\u7B80\u5199" aria-hidden="true">#</a></h2><p>\u5BF9\u8C61\u7B80\u5199</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var name = &#39;zhangsan&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var age = 14;</span></span>
<span class="line"><span style="color:#A6ACCD;">var person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name,</span></span>
<span class="line"><span style="color:#A6ACCD;">  age,</span></span>
<span class="line"><span style="color:#A6ACCD;">  sex: &#39;male&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  eat() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7BAD\u5934\u51FD\u6570" tabindex="-1">\u7BAD\u5934\u51FD\u6570 <a class="header-anchor" href="#\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">() =&gt; {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">() =&gt; a;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u7BAD\u5934\u51FD\u6570\u7684\u5B9E\u8D28</strong></p><ol><li>\u7BAD\u5934\u51FD\u6570\u5FFD\u7565\u4EFB\u4F55\u5F62\u5F0F<code>this</code>\u6307\u5411\u7684\u6539\u53D8</li><li>\u7BAD\u5934\u51FD\u6570<code>this</code>\u6307\u5411 \u7531\u5916\u5C42\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u6765\u51B3\u5B9A\u7684</li><li>\u4E0D\u80FD\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u6765\u4F7F\u7528</li><li>\u6CA1\u6709<code>arguments</code>\u5BF9\u8C61\uFF0C\u7528<code>rest</code>(\u62D3\u5C55\u8FD0\u7B97\u7B26\u66FF\u4EE3)</li><li><code>yield </code>\u547D\u4EE4\u4E0D\u80FD\u751F\u6548\uFF0C\u5728<code>generator </code>\u51FD\u6570\u4E2D</li></ol><p><strong><code>ES5 </code>\u4E2D <code>this</code>\u6307\u5411\u95EE\u9898\uFF1A</strong></p><ul><li>\u9ED8\u8BA4\u89C4\u5219</li><li>\u9690\u5F0F\u89C4\u5219</li><li>\u663E\u793A\u89C4\u5219</li><li><code>new</code></li></ul><p><strong>\u4F18\u5148\u7EA7\uFF1A</strong></p><p><code>new </code> &gt; \u663E\u793A &gt; \u9690\u5F0F &gt; \u9ED8\u8BA4</p><p>\u793A\u4F8B1\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u7BAD\u5934\u51FD\u6570\u6307\u5411</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (a) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.a);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var obj1 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj2 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var bar = foo.call(obj1);</span></span>
<span class="line"><span style="color:#A6ACCD;">//foo()\u8FD4\u56DE\u51FD\u6570\u4F53\u672C\u8EABbar</span></span>
<span class="line"><span style="color:#A6ACCD;">//{a: 2}</span></span>
<span class="line"><span style="color:#A6ACCD;">bar.call(obj2);</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6B64\u65F6bar\u662F\u4E00\u4E2A\u7BAD\u5934\u51FD\u6570, call\u4E0D\u80FD\u6539\u53D8this\u6307\u5411,\u6240\u4EE5\u8FD8\u662F\u6307\u5411\u7236\u7EA7\u4F5C\u7528\u57DF\u7684foo.call(obj1)\u6307\u5411obj1\uFF0C\u6253\u53702</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u793A\u4F8B2\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  eat() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  drink: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">person.eat();</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u9690\u5F0F\u8F6C\u6362\u4E3Aperson\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6307\u5411\u8C03\u7528\u8005</span></span>
<span class="line"><span style="color:#A6ACCD;">//{eat: \u0192, drink: \u0192}</span></span>
<span class="line"><span style="color:#A6ACCD;">person.drink();</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u9690\u5F0F\u8F6C\u6362\u7BAD\u5934\u51FD\u6570\u5931\u8D25</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u7BAD\u5934\u7236\u7EA7\u4F5C\u7528\u57DF\u51B3\u5B9A\u6307\u5411window</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u793A\u4F8B3\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u7BAD\u5934\u51FD\u6570\u5D4C\u5957</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u7BAD\u5934\u51FD\u6570\u6CA1\u6709this\u673A\u5236\u7684\uFF0Cthis\u662F\u5916\u5C42\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6307\u5411\u662F\u56FA\u5B9A\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">      return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;id&#39;, this.id);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var f = foo.call({</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">var f1 = f.call({</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">})()();</span></span>
<span class="line"><span style="color:#A6ACCD;">var f2 = f().call({</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">})();</span></span>
<span class="line"><span style="color:#A6ACCD;">var f3 = f()().call({</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: 4</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">//id 1</span></span>
<span class="line"><span style="color:#A6ACCD;">//id 1</span></span>
<span class="line"><span style="color:#A6ACCD;">//id 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u793A\u4F8B4\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5728\u7BAD\u5934\u51FD\u6570\u5185\u90E8\u4E0D\u5B58\u5728arguments</span></span>
<span class="line"><span style="color:#A6ACCD;">var test = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">test();</span></span>
<span class="line"><span style="color:#A6ACCD;">//Uncaught ReferenceError: arguments is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u793A\u4F8B5\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u7BAD\u5934\u51FD\u6570\u5728\u5B9A\u65F6\u5668\u5185\u90E8\u53EF\u4EE5\u901A\u8FC7\u95ED\u5305\u8BBF\u95EE\u7236\u7EA7\u4F5C\u7528\u57DF\u7684\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">  var a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">foo(1, 2, 3, 4, 5, 6);</span></span>
<span class="line"><span style="color:#A6ACCD;">//Arguments(6)\xA0[1, 2, 3, 4, 5, 6, callee: \u0192, Symbol(Symbol.iterator): \u0192]</span></span>
<span class="line"><span style="color:#A6ACCD;">//1</span></span>
<span class="line"><span style="color:#A6ACCD;">//Arguments(6)\xA0[1, 2, 3, 4, 5, 6, callee: \u0192, Symbol(Symbol.iterator): \u0192]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6848\u4F8B1\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u529F\u80FD\uFF1A\u63D2\u6307\u5B9A\u5165\u6570\u7EC4\u5143\u7D20\u5230\u6570\u7EC4\u7684\u6307\u5B9A\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">function insert(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    into: function (array) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        after: function (afterValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          //\u7D22\u5F15+1</span></span>
<span class="line"><span style="color:#A6ACCD;">          //\u5220\u96640\u4F4D\uFF0C\u6DFB\u52A0value</span></span>
<span class="line"><span style="color:#A6ACCD;">          array.splice(array.indexOf(afterValue) + 1, 0, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">          return array;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u63D2\u5165\u503C5\u5230\u6570\u7EC4[1,2,3,4,6,7,8]\u91CC\u7D22\u5F15\u4E3A4\u7684\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(insert(5).into([1, 2, 3, 4, 6, 7, 8]).after(4));</span></span>
<span class="line"><span style="color:#A6ACCD;">//[1, 2, 3, 4, 5, 6, 7, 8]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u7BAD\u5934\u51FD\u6570\u65B9\u5F0F\u6539\u9020</span></span>
<span class="line"><span style="color:#A6ACCD;">let insert = (value) =&gt; ({</span></span>
<span class="line"><span style="color:#A6ACCD;">  into: (array) =&gt; ({</span></span>
<span class="line"><span style="color:#A6ACCD;">    after: (afterValue) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      array.splice(array.indexOf(afterValue) + 1, 0, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">      return array;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(insert(5).into([1, 2, 3, 4, 6, 7, 8]).after(4));</span></span>
<span class="line"><span style="color:#A6ACCD;">//[1, 2, 3, 4, 5, 6, 7, 8]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u7BAD\u5934\u51FD\u6570\u4F7F\u7528\u573A\u666F\uFF1A</strong></p><ul><li>\u9002\u5408\u7BAD\u5934\u8868\u8FBE\u5F0F\u7684\u60C5\u51B5\uFF1A <ul><li>\u8FD4\u56DE\u503C\u5355\u4E00\uFF0C\u53EA\u6709\u552F\u4E00\u7684\u8868\u8FBE\u5F0F\uFF0C\u51FD\u6570\u5185\u90E8\u6CA1\u6709<code>this</code>\u5F15\u7528</li><li>\u9012\u5F52</li><li>\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7ED1\u5B9A/\u89E3\u7ED1</li><li>\u5185\u5C42\u7684\u51FD\u6570\u8868\u8FBE\u5F0F\u9700\u8981\u8C03\u7528<code>this</code>\uFF0C\u7528<code>var _self = this;</code></li><li><code>bind(this)</code>\u786E\u4FDD\u9002\u5F53\u7684<code>this</code>\u6307\u5411\u65F6</li><li><code>var args = Array.prototype.slice.call(arguments)</code> \u7528\u7BAD\u5934\u51FD\u6570\u6BD4\u8F83\u597D</li></ul></li><li>\u4E0D\u9002\u5408\u7BAD\u5934\u8868\u8FBE\u5F0F\u7684\u60C5\u51B5\uFF1A <ul><li>\u51FD\u6570\u58F0\u660E\uFF0C\u6267\u884C\u8BED\u53E5\u6BD4\u8F83\u591A\u7684</li><li>\u8FD8\u9700\u8981\u7528\u5230\u9012\u5F52</li><li>\u8FD8\u9700\u8981\u5F15\u7528\u51FD\u6570\u540D</li><li>\u4E8B\u4EF6\u7ED1\u5B9A\uFF0C\u89E3\u7ED1\u5B9A</li></ul></li></ul><h2 id="rest" tabindex="-1">rest <a class="header-anchor" href="#rest" aria-hidden="true">#</a></h2><p>\u5C55\u5F00\u8FD0\u7B97\u7B26\uFF0C\u5C55\u5F00/\u6536\u96C6</p><p><code>... spread / rest</code> \u8FD0\u7B97\u7B26</p><p>\u6536\u96C6\u5B9E\u53C2\uFF1A\u5F97\u5230\u7684\u662F\u6570\u7EC4\u800C\u4E0D\u662F\u7C7B\u6570\u7EC4</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var sum = (...args) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(args);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">sum(1, 2); //[1, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C55\u5F00\u5B9E\u53C2\uFF1A\u5F97\u5230\u7684\u662F\u5355\u72EC\u7684\u503C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">function foo(x, y, z) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(x, y, z);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(...[1, 2, 3]); //1 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//ES5\u6A21\u62DF</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo(x, y, z) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(x, y, z);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo(...[1, 2, 3]); //1 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;">foo.apply(null, [1, 2, 3]); //1 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5176\u4ED6\u4E0A\u4E0B\u6587\u5C55\u5F00</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u6570\u7EC4\u5C55\u5F00</span></span>
<span class="line"><span style="color:#A6ACCD;">//ES6\u4F18\u52BF\uFF1A\u8BED\u4E49\u5316\u66F4\u5F3A</span></span>
<span class="line"><span style="color:#A6ACCD;">let a = [2, 3, 4];</span></span>
<span class="line"><span style="color:#A6ACCD;">let b = [1, ...a, 5];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(b); //[1, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u76F8\u5F53\u4E8EES5</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log([1].concat(a, [5])); //[1, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u628A\u5269\u4F59\u7684\u6240\u6709\u53C2\u6570\u90FD\u6536\u96C6\u5230c\u53D8\u91CF\u91CC\u5F62\u6210\u6570\u7EC4\u5C55\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6CE8\u610F\uFF1A\u62D3\u5C55\u8FD0\u7B97\u7B26\u5FC5\u987B\u662F\u6700\u540E\u4E00\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">let fn = (a, b, ...c) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(a, b, c);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">fn(1, 2, 3, 4, 5, 6, 7);</span></span>
<span class="line"><span style="color:#A6ACCD;">//1 2 [3, 4, 5, 6, 7]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//ES5:\u6392\u5E8F\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">function sortNum() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return Array.prototype.slice.call(arguments).sort(function (a, b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return a - b</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(sortNum(12, 431, 24, 14, 1, 4, 125, 2, 35, 25));</span></span>
<span class="line"><span style="color:#A6ACCD;">//[1, 2, 4, 12, 14, 24, 25, 35, 125, 431]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//ES6:\u6392\u5E8F\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">const sortNum2 = (...args) =&gt; args.sort((a, b) =&gt; a - b);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(sortNum2(12, 431, 24, 14, 1, 4, 125, 2, 35, 25));</span></span>
<span class="line"><span style="color:#A6ACCD;">//[1, 2, 4, 12, 14, 24, 25, 35, 125, 431]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C55\u5F00\u8FD0\u7B97\u7B26\u4E0D\u80FD\u901A\u8FC7<code>length</code>\u5C5E\u6027\u8BBF\u95EE,\u53EA\u80FD\u8BBF\u95EE\u5B9E\u9645\u5B9E\u53C2\u7684\u957F\u5EA6</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u8BBF\u95EElength\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">//ES5</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log((function (a) {}).length); //1</span></span>
<span class="line"><span style="color:#A6ACCD;">//ES6</span></span>
<span class="line"><span style="color:#A6ACCD;">//...args\u4E0D\u80FD\u901A\u8FC7length\u5C5E\u6027\u8BBF\u95EE,\u53EA\u80FD\u8BBF\u95EE\u5B9E\u9645\u5B9E\u53C2\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(((...a) =&gt; {}).length); //0</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(((b, ...a) =&gt; {}).length); //1</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(((b, c, ...a) =&gt; {}).length); //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>ES2017</code>\u7684\u5C55\u5F00\u8FD0\u7B97\u7B26</p><p>\u53EF\u4EE5 \u5B9E\u73B0\u5BF9\u8C61\u5C55\u5F00</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  c: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj1 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">  d: 5,</span></span>
<span class="line"><span style="color:#A6ACCD;">  e: 6</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj2 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...obj,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...obj1</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj2);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{a: 4, b: 2, c: 3, d: 5, e: 6}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>ES5</code>\u5199\u6CD5\u662F\u901A\u8FC7<code>Object.assign()</code>\u5408\u5E76</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  c: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj1 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">  d: 5,</span></span>
<span class="line"><span style="color:#A6ACCD;">  e: 6</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj2 = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Object.assign(obj2, obj, obj1);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj2);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{a: 4, b: 2, c: 3, d: 5, e: 6}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u62D3\u5C55" tabindex="-1">\u62D3\u5C55 <a class="header-anchor" href="#\u62D3\u5C55" aria-hidden="true">#</a></h2><p><strong>\u51FD\u6570\u540D</strong></p><p>\u51FD\u6570\u58F0\u660E\u548C<code>new Function</code>\u5B9A\u4E49\u7684\u51FD\u6570\u540D\u79F0\u4F1A\u6709\u533A\u522B\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">console.log(f.name); //f</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">console.log((new Function).name); //anonymous</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">console.log(foo.bind({}).name); //bound foo;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u5BF9\u8C61</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const foo = &#39;bar&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5BF9\u8C61\u540D\u79F0\u548C\u51FD\u6570\u540D\u79F0\u76F8\u540C\u65F6\u53EF\u4EE5\u7B80\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">const baz = {foo};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C5E\u6027\u540D\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>[]</code>\u8BBF\u95EE\u5BF9\u5E94\u7684\u503C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var arr = [1, 23, 23, 45, 5];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr[1]); //23</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C5E\u6027\u7ECF\u8FC7\u4E00\u5C42\u5305\u88C5\uFF0C\u5C06\u4F20\u5165\u7684\u6240\u6709\u503C\u8FDB\u884C\u5305\u88C5\u53D8\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u6240\u4EE5\u8BF4\uFF0C\u5B9A\u4E49\u7684\u5C5E\u6027\u90FD\u4E3A\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">var arr = [1, 23, 23, 45, 5];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr[&#39;1&#39;]); //23</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C5E\u6027\u540D\u62FC\u63A5</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u62FC\u63A5\u7684\u5C5E\u6027\u540D\u4F1A\u91CD\u5199\u4E4B\u524D\u7684\u5C5E\u6027\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5148\u8FDB\u884C\u8986\u76D6\u7136\u540E\u518D\u627E\u5C5E\u6027\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  [a + b] : true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [&#39;hello&#39; + b] : 123,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [&#39;hello&#39; + &#39;world&#39;] : undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em><strong>\u5F53\u5C5E\u6027\u540D\u4E3A\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u5982\u4F55\u8F6C\u6362\u4E3A\u5BF9\u8C61\uFF1F</strong></em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var myObject = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">myObject[true] = &#39;foo&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">myObject[3] = &#39;bar&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">myObject[myObject] = &#39;baz&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(myObject[&#39;true&#39;]); //foo</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(myObject[&#39;3&#39;]); //bar</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(myObject[myObject]); //baz</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(myObject[&#39;[object Object]&#39;]); //baz</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5982\u4F55\u6210\u4E3A\u5B57\u7B26\u4E32\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Boolean.prototype.toString.call(true)); //true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Number.prototype.toString.call(3)); //3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Object.prototype.toString.call(myObject)); //[object Object]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Object.prototype.toString.call(true)); //[object Boolean]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u53EA\u6709\u4E00\u4E2A\u5C5E\u6027\uFF0C\u540E\u4E00\u4E2A\u5C5E\u6027\u8986\u76D6\u524D\u4E00\u4E2A\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">const a = { a: 1 };</span></span>
<span class="line"><span style="color:#A6ACCD;">const b = { b: 2 };</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  [a]: &#39;valueA&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [b]: &#39;valueB&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{[object Object]: &quot;valueB&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5BF9\u8C61\u4E2D\u7684<code>name</code>\u5C5E\u6027</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  sayName() { console.log(&#39;hello&#39;); }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person.sayName.name); //sayName</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="symbol" tabindex="-1"><code>Symbol</code> <a class="header-anchor" href="#symbol" aria-hidden="true">#</a></h2><p><em><strong><code>ES6</code>\u4E3A\u4EC0\u4E48\u8981\u5F15\u5165<code>symbol</code>?</strong></em></p><p><strong>\u573A\u666F\uFF1A</strong></p><p><code>ES5</code>\u5BF9\u8C61\u5C5E\u6027\u7ECF\u5E38\u51FA\u73B0\u91CD\u540D\u7684\u60C5\u51B5\uFF0C\u89E3\u51B3\u5BF9\u8C61\u5C5E\u6027\u540D\u91CD\u540D\u7684\u95EE\u9898</p><p><code>symbol</code>\u5C5E\u4E8E\u539F\u59CB\u503C\u7C7B\u578B\u7684\u503C\uFF0C\u800C\u4E0D\u662F\u6784\u9020\u51FD\u6570</p><ul><li>\u539F\u59CB\u503C\u7C7B\u578B\u7684\u503C\uFF1A<code>number/boolean/null/undefined/symbol</code></li><li>\u5F15\u7528\u503C\u7C7B\u578B\u7684\u503C\uFF1A<code>Object/Array/Function</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let s1 = Symbol(&#39;foo&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u662F\u539F\u59CB\u503C\u5305\u88C5\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(typeof s1); //symbol</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6302\u4E0D\u4E0A\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(s1.a); //undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5982\u4F55\u533A\u522B\u552F\u4E00\u7684symbol\u503C?\u53EF\u4EE5\u901A\u8FC7\u4F20\u53C2\u533A\u5206</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u4F5C\u4E3A\u6807\u8BC6\u7B26\u5B58\u5728\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(s1); //Symbol(foo)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u901A\u8FC7\u751F\u6210\u5B8C\u5168\u4E0D\u4E00\u6837\u7684\u4E0D\u53EF\u91CD\u590D\u7684\u539F\u59CB\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u9488\u5BF9\u62F7\u8D1D\u5C5E\u6027\u8986\u76D6\u7684\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">var a = Symbol(&#39;a&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = Symbol(&#39;a&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a === b); //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Symbol\u7684\u503C\u80FD\u5426\u88ABObject.assign()\u62F7\u8D1D\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u53EF\u4EE5\u62F7\u8D1D</span></span>
<span class="line"><span style="color:#A6ACCD;">var test = Object.assign({ a: &#39;b&#39; }, { [Symbol(&#39;c&#39;)]: &#39;d&#39; });</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(test);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{a: &quot;b&quot;, Symbol(c): &quot;d&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em><strong>\u5982\u4F55\u907F\u514D\u91CD\u540D\uFF1F</strong></em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">let s1 = Symbol(obj);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(s1);</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u8BF4\u660E\u5BF9\u8C61\u81EA\u5DF1\u8C03\u7528\u4E86Object.prototype.toString()\u65B9\u6CD5\u5C06\u81EA\u5DF1\u53D8\u6210\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u4E5F\u8BF4\u660Esymbol\u7684\u503C\u6C38\u8FDC\u662F\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">//Symbol([object Object])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u4F55\u4F7F\u7528\uFF1F\u4F5C\u4E3A\u5C5E\u6027\u540D\u6765\u7528</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u72EC\u4E00\u65E0\u4E8C\u7684\u5C5E\u6027\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">let name = Symbol();</span></span>
<span class="line"><span style="color:#A6ACCD;">let person = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u9519\u8BEF\u5199\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6B64\u5199\u6CD5\u662F\u5B57\u7B26\u4E32\u4E0D\u80FD\u7528Symbol\u521B\u5EFA\u7684\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">person.name = &#39;zhangsan&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{name: &quot;zhangsan&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6B63\u786E\u7684\u5199\u6CD5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">person[name] = &#39;lisi&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{name: &quot;zhangsan&quot;, Symbol(): &quot;lisi&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5E38\u7528\u5199\u6CD5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">let name = Symbol();</span></span>
<span class="line"><span style="color:#A6ACCD;">let person1 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  [name]: &#39;wangwu&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person1);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{Symbol(): &quot;wangwu&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5199\u6CD5\u4E09\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">let name = Symbol();</span></span>
<span class="line"><span style="color:#A6ACCD;">let person = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">Object.defineProperty(person, name, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  value: &#39;zhangsan&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(person);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{Symbol(): &quot;zhangsan&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u6302\u8F7DSymbol\u5230\u53D8\u91CF\u91CC</span></span>
<span class="line"><span style="color:#A6ACCD;">let name = Symbol();</span></span>
<span class="line"><span style="color:#A6ACCD;">let eat = Symbol();</span></span>
<span class="line"><span style="color:#A6ACCD;">let person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  [name]: &#39;zhangsan&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [eat]: function(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u7B80\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">  [eat](){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this[name]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>Symbol</code>\u76F8\u5173\u7684\u51E0\u4E2A\u65B9\u6CD5</p><p><code>Symbol.for()</code>\u62FF\u5230\u552F\u4E00\u7684\u503C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u4E00\u822C\u6765\u8BF4\uFF0CSymbol\u7684\u503C\u90FD\u662F\u4E0D\u540C\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">let s1 = Symbol(&#39;foo&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">let s2 = Symbol(&#39;foo&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(s1 === s2); //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u4E5F\u6709\u7279\u6B8A\u7684\u60C5\u51B5\uFF0C\u53EF\u4EE5\u503C\u662F\u76F8\u540C\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">let s3 = Symbol.for(&#39;foo&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">let s4 = Symbol.for(&#39;foo&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(s3 === s4); //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>Symbol.keyFor</code>\u5168\u5C40\u4E2D\u62FF\u5230\u5F53\u524D\u7684<code>key</code>\u503C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let s1 = Symbol.for(&#39;foo&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">let s2 = Symbol.for(&#39;foo&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u62E5\u6709\u540C\u6837\u7684\u6807\u8BC6\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Symbol.keyFor(s1)); //foo</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Symbol.keyFor(s2)); //foo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8BD5\u7740\u904D\u5386</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const obj = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">let a = Symbol(&#39;a&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">let b = Symbol(&#39;b&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">obj[a] = &#39;hello&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj[b] = &#39;world&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// console.log(obj);</span></span>
<span class="line"><span style="color:#A6ACCD;">//{Symbol(a): &quot;hello&quot;, Symbol(b): &quot;world&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u904D\u5386</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i in obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u65E0\u6253\u5370\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u8BF4\u660Efor in \u4E0D\u80FD\u904D\u5386 Symbol\u5C5E\u6027\u7684\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>Object.getOwnPropertySymbols()</code>\u65B0\u7684<code>API</code>\u4E13\u95E8\u904D\u5386<code>symbol</code>\u7C7B\u578B\u7684\u503C(\u552F\u4E00\u7684\u904D\u5386\u65B9\u6CD5)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const obj = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">let a = Symbol(&#39;a&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">let b = Symbol(&#39;b&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">obj[a] = &#39;hello&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj[b] = &#39;world&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u53EA\u9488\u5BF9Symbol\u5C5E\u6027\u7684\u5BF9\u8C61\u904D\u5386\u7684\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Object.getOwnPropertySymbols(obj));</span></span>
<span class="line"><span style="color:#A6ACCD;">//[Symbol(a), Symbol(b)]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u603B\u7ED3\uFF1A</strong></p><ul><li><code>for in</code>\uFF1A\u904D\u5386\u81EA\u8EAB\u548C\u7EE7\u627F\u7684\u53EF\u679A\u4E3E\u5C5E\u6027(\u4E0D\u5305\u62EC\u542B<code>Symbol</code>\u7C7B\u578B\u7684\u503C)</li><li><code>Object.key()</code>\uFF1A\u904D\u5386\u81EA\u8EAB\u4E0D\u5305\u542B<code>Symbol</code>\u7C7B\u578B\u7684\u503C</li><li><code>Object.getOwnPropertySymbols()</code>\uFF1A\u904D\u5386\u81EA\u8EAB\u7684<code>Symbol</code>\u7C7B\u578B\u7684\u503C</li><li><code>Object.assign()</code>\uFF1A\u904D\u5386\u81EA\u8EAB\u53EF\u679A\u4E3E\u7684\uFF0C\u5305\u542B<code>Symbol</code>\u7C7B\u578B\u7684\u503C</li><li><code>JSON.stringify()</code>\uFF1A\u904D\u5386\u81EA\u8EAB\u53EF\u679A\u4E3E\u7684\u5C5E\u6027</li></ul><p><strong><code>Symbol</code>\u5B9A\u4E49\u552F\u4E00\u65B9\u6CD5\u5B9E\u73B0\u4E00\u4E2A<code>iterator</code>\u63A5\u53E3\uFF1A</strong></p><p>\u5BF9\u8C61\u662F\u4E0D\u8FDE\u7EED\u7684\u4E14\u65E0\u5E8F\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u4E00\u822C\u6765\u8BF4\u4E0D\u80FD\u7528<code>for of</code>\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7\u90E8\u7F72\u8FED\u4EE3\u5668\u63A5\u53E3\u7684\u65B9\u5F0F\u6765\u4F7F\u7528<code>for of</code> \u904D\u5386</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u624B\u52A8\u7684\u7F16\u5199\u4E00\u4E2Aiterator\u63A5\u53E3\u53EF\u4EE5\u9488\u5BF9\u6307\u5B9A\u7684\u6570\u636E\u7C7B\u578B\u8FDB\u884C\u8FED\u4EE3\u904D\u5386</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5BF9\u8C61\u4E0A\u5199\u4E00\u4E2Aiterator\u63A5\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  start: [1, 3, 2, 4],</span></span>
<span class="line"><span style="color:#A6ACCD;">  end: [5, 7, 6],</span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u4E2D\u62EC\u53F7\u5305\u88F9\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  [Symbol.iterator]() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u5B9A\u4E49\u6307\u9488</span></span>
<span class="line"><span style="color:#A6ACCD;">    let index = 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">      //\u7EC4\u5408\u65B0\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">      arr = [...this.start, ...this.end],</span></span>
<span class="line"><span style="color:#A6ACCD;">      //\u65B0\u6570\u7EC4\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">      len = arr.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u5C06\u65B0\u6570\u7EC4\u8FDB\u884C\u8FED\u4EE3</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      next() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (index &lt; len) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            //\u7D2F\u52A0\u7684\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">            value: arr[index++],</span></span>
<span class="line"><span style="color:#A6ACCD;">            done: false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            value: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">            done: true</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i of obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(i); //1 3 2 4 5 6 7</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="reflect" tabindex="-1">Reflect <a class="header-anchor" href="#reflect" aria-hidden="true">#</a></h2><p>\u662F\u4E00\u4E2A\u5BF9\u8C61, \u662F<code>JavaScript</code>\u5185\u7F6E\u5BF9\u8C61\u65B9\u6CD5\u96C6\u5408\u7684\u5BB9\u5668</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Reflect = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6574\u5408\u4E86<code>ES5</code>\u539F\u578B\u4E0A\u539F\u6709\u7684\u65B9\u6CD5\u7684<code>ES6API</code>(\u9759\u6001\u65B9\u6CD5)</p><p><code>apply()</code>/<code>defineProperty()</code>/<code>deleteProperty()</code>/<code>get()</code>/<code>getOwnPropertyDescriptor</code>/<code>getPrototypeof()</code>/<code>has()</code>/<code>isExtensible()</code>/<code>ownKeys()</code>/<code>preventExtensions()</code>/<code>set()</code>/<code>setPrototypeOf()</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//\u5982\u4F55\u901A\u8FC7Reflect\u8BBF\u95EE\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.a);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Reflect.get(obj, &#39;a&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5229\u7528\u51FD\u6570\u5F0F\u7684\u5199\u6CD5\u91CD\u65B0\u5B9A\u4E49<code>Proxy</code>\u6784\u9020\u51FD\u6570\uFF0C\u7528\u65B9\u6CD5\u53BB\u53D6\u503C/\u8D4B\u503C\u4F7F\u5F97\u66F4\u4E3A\u5408\u7406\uFF0C\u5229\u7528\u5E95\u5C42\u7684\u65B9\u6CD5\u64CD\u4F5C\u5BF9\u8C61</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">let proxy = new Proxy(target, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  get(target, prop){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //1.\u76F4\u63A5\u8BBF\u95EE\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">    //return &#39;This is property value&#39; + target[prop];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    //2.\u901A\u8FC7\u51FD\u6570\u5F0F\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Reflect.get(target, prop);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  set(target, prop, value){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //target[prop] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Reflect.set(target, prop, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,222),e=[o];function c(t,C,i,A,r,y){return a(),n("div",null,e)}const g=s(p,[["render",c]]);export{D as __pageData,g as default};
