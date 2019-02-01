webpackJsonp([0x6d69ca46114b],{407:function(t,s){t.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Actor Communication",lesson:2,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Decoders and Encoders",lesson:2,category:"javascript",chapter:4,type:"lesson"},fields:{slug:"/decoders-and-encoders"}}},{node:{frontmatter:{title:"Getting Started",lesson:2,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Hierarchy",lesson:4,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/hierarchy"}}},{node:{frontmatter:{title:"Persist",lesson:1,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/persist"}}},{node:{frontmatter:{title:"Introduction",lesson:1,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Supervision",lesson:5,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/supervision"}}},{node:{frontmatter:{title:"Persistent Queries",lesson:4,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/persistent-queries"}}},{node:{frontmatter:{title:"Stateful Actors",lesson:1,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/stateful-actors"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Querying",lesson:3,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/querying"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/timeouts"}}}]},postBySlug:{html:'<!-- <a class="remix-button" href="https://glitch.com/edit/#!/remix/nact-stateless-greeter" target="_blank">\n  <button>\n    <img src="/img/code-fork-symbol.svg"/> REMIX\n  </button>\n</a> -->\n<blockquote>\n<p>Tip: The remix buttons like the one above, allow you to try out the samples in this guide and make changes to them.\nPlaying around with the code is probably the best way to get to grips with the framework. </p>\n</blockquote>\n<p>Nact has only been tested to work on Node 8 and above. You can install nact in your project by invoking the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">npm</span> <span class="token function">install</span> --save nact\n</code></pre>\n      </div>\n<p>Once installed, you need to import the start function, which starts and then returns the actor system.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> dispatch<span class="token punctuation">,</span> stop<span class="token punctuation">,</span> spawnStateless <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'nact\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> system <span class="token operator">=</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Once you have a reference to the system, it is now possible to create our first actor. To create an actor you have to <code>spawn</code> it.  As is traditional, let us create an actor which says hello when a message is sent to it. Since this actor doesn\'t require any state, we can use the simpler <code>spawnStateless</code> function.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> greeter <span class="token operator">=</span> <span class="token function">spawnStateless</span><span class="token punctuation">(</span>\n  system<span class="token punctuation">,</span> <span class="token comment">// parent</span>\n  <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// function</span>\n  <span class="token string">\'greeter\'</span> <span class="token comment">// name</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The first argument to <code>spawnStateless</code> is the parent, which is in this case the actor system. The <a href="#hierarchy">hierarchy</a> section will go into more detail about this.</p>\n<p>The second argument to <code>spawnStateless</code> is a function which is invoked when a message is received.</p>\n<p>The third argument to <code>spawnStateless</code> is the name of the actor, which in this case is <code>\'greeter\'</code>. The name field is optional, and if omitted, the actor is automatically assigned a name by the system.</p>\n<p>To communicate with the greeter, we need to <code>dispatch</code> a message to it informing it who we are:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">dispatch</span><span class="token punctuation">(</span>greeter<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Erlich Bachman\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This should print <code>Hello Erlich Bachman</code> to the console. </p>\n<p>To complete this example, we need to shutdown our system. We can do this by calling <code>stop(system)</code>\nThe <code>stop</code> function also can be used to terminate an actor.</p>\n<blockquote>\n<p>Note: Stateless actors can service multiple requests at the same time. Statelessness means that such actors do not have to cater for concurrency issues.</p>\n</blockquote>',timeToRead:2,excerpt:"Tip: The remix buttons like the one above, allow you to try out the samples in this guide and make changes to them. \nPlaying around with the…",frontmatter:{title:"Getting Started",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017",category:"javascript",tags:["getting-started","nact","reason","bucklescript"]},fields:{slug:"/getting-started"}}},pathContext:{slug:"/getting-started",category:"javascript"}}}});
//# sourceMappingURL=path---lesson-javascript-getting-started-03079610eb91909f2798.js.map