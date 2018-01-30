webpackJsonp([41586550270775],{397:function(s,n){s.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Adapters",lesson:6,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/adapters"}}},{node:{frontmatter:{title:"Decoders and Encoders",lesson:2,category:"reasonml",chapter:4,type:"lesson"},fields:{slug:"/decoders-and-encoders"}}},{node:{frontmatter:{title:"Actor Communication",lesson:2,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Getting Started",lesson:2,category:"reasonml",chapter:1,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Logging and Monitoring",lesson:1,category:"reasonml",chapter:4,type:"lesson"},fields:{slug:"/logging-and-monitoring"}}},{node:{frontmatter:{title:"Introduction",lesson:1,category:"reasonml",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Persist",lesson:1,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/persist"}}},{node:{frontmatter:{title:"Hierarchy",lesson:4,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/hierarchy"}}},{node:{frontmatter:{title:"Querying",lesson:3,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/querying"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Stateful Actors",lesson:1,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/stateful-actors"}}},{node:{frontmatter:{title:"Supervision",lesson:5,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/supervision"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/timeouts"}}}]},postBySlug:{html:'<p>One of the major advantages of an actor system is that it offers a safe way of creating stateful services. A stateful actor is created using the <code>spawn</code> function.</p>\n<p>In this example, the state is initialized to an empty object. Each time a message is received by the actor, the current state is passed in as the first argument to the actor.  Whenever the actor encounters a name it hasn\'t encountered yet, it returns a copy of previous state with the name added. If it has already encountered the name it simply returns the unchanged current state. The return value is used as the next state.</p>\n<div class="gatsby-highlight">\n      <pre class="language-reason"><code><span class="token keyword">let</span> statefulGreeter <span class="token operator">=</span>\n  spawn<span class="token punctuation">(</span>\n    <span class="token operator">~</span>name<span class="token operator">=</span><span class="token string">"stateful-greeter"</span><span class="token punctuation">,</span>\n    system<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> hasPreviouslyGreetedMe <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=></span> v <span class="token operator">===</span> name<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>hasPreviouslyGreetedMe<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        print_endline<span class="token punctuation">(</span><span class="token string">"Hello again "</span> <span class="token operator">+</span><span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        state <span class="token operator">|</span><span class="token operator">></span> <span class="token class-name">Js</span><span class="token punctuation">.</span><span class="token class-name">Promise</span><span class="token punctuation">.</span>resolve<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        print_endline<span class="token punctuation">(</span><span class="token string">"Good to meet you, "</span> <span class="token operator">+</span><span class="token operator">+</span> name <span class="token operator">+</span><span class="token operator">+</span> <span class="token string">". I am the "</span> <span class="token operator">+</span><span class="token operator">+</span> ctx<span class="token punctuation">.</span>name <span class="token operator">+</span><span class="token operator">+</span> <span class="token string">" service!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">[</span>name<span class="token punctuation">,</span> <span class="token operator">...</span>state<span class="token punctuation">]</span> <span class="token operator">|</span><span class="token operator">></span> <span class="token class-name">Js</span><span class="token punctuation">.</span><span class="token class-name">Promise</span><span class="token punctuation">.</span>resolve<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Note the addition of the extra final parameter. This parameter (in this case <code>[]</code>) represents the actor\'s initial state.</p>',timeToRead:1,excerpt:"One of the major advantages of an actor system is that it offers a safe way of creating stateful services. A stateful actor is created using...",frontmatter:{title:"Stateful Actors",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017",category:"reasonml",tags:["getting-started","nact","reason","bucklescript"]},fields:{slug:"/stateful-actors"}}},pathContext:{slug:"/stateful-actors",category:"reasonml"}}}});
//# sourceMappingURL=path---lesson-reasonml-stateful-actors-de36fa41db2822a99c8a.js.map