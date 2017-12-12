webpackJsonp([0x69c9cc575ea89c00],{"./node_modules/json-loader/index.js!./.cache/json/docs-reasonml-getting-started-3.json":function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Actor Communication",lesson:3,category:"reasonml",chapter:2,type:"lesson",language:null},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Persistence",lesson:1,category:"reasonml",chapter:3,type:"lesson",language:null},fields:{slug:"/persistence"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"reasonml",chapter:2,type:"lesson",language:"reasonml"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Getting Started 3",lesson:2,category:"reasonml",chapter:2,type:"lesson",language:"reasonml"},fields:{slug:"/getting-started-3"}}},{node:{frontmatter:{title:"Introduction",lesson:1,category:"reasonml",chapter:1,type:"lesson",language:null},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"reasonml",chapter:3,type:"lesson",language:null},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Querying",lesson:4,category:"reasonml",chapter:2,type:"lesson",language:null},fields:{slug:"/querying"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,category:"reasonml",chapter:3,type:"lesson",language:null},fields:{slug:"/timeouts"}}}]},postBySlug:{html:'<p>One of the major advantages of an actor system is that it offers a safe way of creating stateful services. A stateful actor is created using the <code>spawn</code> function.</p>\n<p>In this example, the state is initialized to an empty object. Each time a message is received by the actor, the current state is passed in as the first argument to the actor.  Whenever the actor encounters a name it hasn\'t encountered yet, it returns a copy of previous state with the name added. If it has already encountered the name it simply returns the unchanged current state. The return value is used as the next state.</p>\n<div class="gatsby-highlight">\n      <pre class="language-reason"><code><span class="token keyword">let</span> statefulGreeter <span class="token operator">=</span>\n  spawn<span class="token punctuation">(</span>\n    <span class="token operator">~</span>name<span class="token operator">=</span><span class="token string">"stateful-greeter"</span><span class="token punctuation">,</span>\n    system<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> hasPreviouslyGreetedMe <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=></span> v <span class="token operator">===</span> name<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>hasPreviouslyGreetedMe<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        print_endline<span class="token punctuation">(</span><span class="token string">"Hello again "</span> <span class="token operator">+</span><span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        state <span class="token operator">|</span><span class="token operator">></span> <span class="token class-name">Js</span><span class="token punctuation">.</span><span class="token class-name">Promise</span><span class="token punctuation">.</span>resolve<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        print_endline<span class="token punctuation">(</span><span class="token string">"Good to meet you, "</span> <span class="token operator">+</span><span class="token operator">+</span> name <span class="token operator">+</span><span class="token operator">+</span> <span class="token string">". I am the "</span> <span class="token operator">+</span><span class="token operator">+</span> ctx<span class="token punctuation">.</span>name <span class="token operator">+</span><span class="token operator">+</span> <span class="token string">" service!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">[</span>name<span class="token punctuation">,</span> <span class="token operator">...</span>state<span class="token punctuation">]</span> <span class="token operator">|</span><span class="token operator">></span> <span class="token class-name">Js</span><span class="token punctuation">.</span><span class="token class-name">Promise</span><span class="token punctuation">.</span>resolve<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',timeToRead:1,excerpt:"One of the major advantages of an actor system is that it offers a safe way of creating stateful services. A stateful actor is created using...",frontmatter:{title:"Getting Started 3",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017",category:"reasonml",tags:["getting-started","nact","reason","bucklescript"],language:"reasonml"},fields:{slug:"/getting-started-3"}}},pathContext:{slug:"/getting-started-3",category:"reasonml"}}}});
//# sourceMappingURL=path---docs-reasonml-getting-started-3-1b52272fb01a3f8df5c0.js.map