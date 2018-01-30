webpackJsonp([35468518605094],{380:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Actor Communication",lesson:2,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Getting Started",lesson:2,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Hierarchy",lesson:4,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/hierarchy"}}},{node:{frontmatter:{title:"Logging and Monitoring",lesson:1,category:"javascript",chapter:4,type:"lesson"},fields:{slug:"/logging-and-monitoring"}}},{node:{frontmatter:{title:"Introduction",lesson:1,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Persist",lesson:1,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/persist"}}},{node:{frontmatter:{title:"Querying",lesson:3,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/querying"}}},{node:{frontmatter:{title:"Stateful Actors",lesson:1,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/stateful-actors"}}},{node:{frontmatter:{title:"Supervision",lesson:5,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/supervision"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/timeouts"}}}]},postBySlug:{html:'<p>Production system need to be watched like hawks. Knowing that your service has spontaneously burst into flames and having at least some idea why is the first step in fixing an error in production. There are some excellent logging frameworks in node, but they don\'t make accommodations for the actor model. Nact includes logging which automatically captures a reference to the actor\'s context. </p>\n<p>Here is an example of an actor which classifies whether strings are <em>bad</em> or <em>good</em> (bad defined as anything containing the substring \'mutation\') and logs the bad strings as events and the good strings as info messages:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> spawnStateless<span class="token punctuation">,</span> configureLogging<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'nact\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> system <span class="token operator">=</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token function">configureLogging</span><span class="token punctuation">(</span><span class="token comment" spellcheck="true">/* we will discuss how to define a logger in the next section */</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> stringClassifierActor <span class="token operator">=</span>\n  <span class="token function">spawnStateless</span><span class="token punctuation">(</span>\n    system<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>msg<span class="token operator">||</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">\'mutation\'</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      \tctx<span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">event</span><span class="token punctuation">(</span><span class="token string">\'receivedEvilMessage\'</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \t  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        ctx<span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Received message: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>        \n       <span class="token punctuation">}</span> \n    <span class="token punctuation">}</span>     \n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">dispatch</span><span class="token punctuation">(</span>stringClassifierActor<span class="token punctuation">,</span> <span class="token string">\'hello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">dispatch</span><span class="token punctuation">(</span>stringClassifierActor<span class="token punctuation">,</span> <span class="token string">\'mutation\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>To make this example usable, we\'ll need to define a logger. A logger is simply an actor which accepts log messages. Since the logger is defined before the system has started, the configureLogging method accepts a function which takes in a reference to the system and returns a reference to another actor which accepts the log messages. </p>\n<p>The logger below writes the messages it receives to the console:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> logLevelAsText <span class="token operator">=</span> <span class="token punctuation">(</span>level<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>  \n  <span class="token keyword">switch</span><span class="token punctuation">(</span>level<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>OFF<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token string">\'OFF\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>TRACE<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token string">\'TRACE\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>DEBUG<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token string">\'DEBUG\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>INFO<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token string">\'INFO\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>WARN<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token string">\'WARN\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>ERROR<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token string">\'ERROR\'</span><span class="token punctuation">;</span>\n  \t<span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>CRITICAL<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token string">\'CRITICAL\'</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token string">\'???\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> getLogText <span class="token operator">=</span> <span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> path <span class="token operator">=</span> msg<span class="token punctuation">.</span>actor\n  <span class="token keyword">switch</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>      \n    <span class="token keyword">case</span> <span class="token string">\'trace\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">let</span> level <span class="token operator">=</span> <span class="token function">logLevelAsText</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>level<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>level<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>actor<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>createdAt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>  \n    <span class="token keyword">case</span> <span class="token string">\'event\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`[EVENT, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>actor<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>createdAt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]: {\'</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\': </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>properties<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">}`</span></span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'exception\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`[EXCEPTION, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>actor<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>createdAt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>exception<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>      \n    <span class="token keyword">case</span> <span class="token string">\'metric\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`[METRIC, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>actor<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>createdAt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]: {\'</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\': </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>properties<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">}`</span></span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span> \n      <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`[???, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>actor<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>createdAt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>   \n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> consoleLogger <span class="token operator">=</span> <span class="token punctuation">(</span>system<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>\n  <span class="token function">spawnStateless</span><span class="token punctuation">(</span>    \n    system<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> _<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token function">getLogText</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">"console-logger"</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>we then need to tell nact to use this logger using <code>start(configureLogging(consoleLogger))</code></p>\n<blockquote>\n<p>Note: If your logger is using nact-persistence, ensure that that <code>configurePersistence</code> appears before <code>configureLogging</code> in the start method </p>\n</blockquote>\n<p>Note the different log types:</p>\n<ul>\n<li>A <code>trace</code> is created when invoking <code>ctx.log.info</code> / <code>ctx.log.warn</code>, etc. </li>\n<li>An <code>event</code> emerges when invoking <code>ctx.log.event</code> and includes the event name and event properties in a JSON  representation.</li>\n<li>A <code>metric</code> is manufactured when calling  <code>ctx.log.metric</code>, and is a similar structure to <code>event</code>.  </li>\n<li>Finally there is <code>error</code>, which is extruded when calling <code>ctx.log.exception</code> with an exception.</li>\n</ul>\n<p>The design of the logging system has been kept relatively simple so as to allow users to wrap their own, preferred framework whilst remaining idiomatic to the actor model.</p>',timeToRead:2,excerpt:"Production system need to be watched like hawks. Knowing that your service has spontaneously burst into flames and having at least some idea...",frontmatter:{title:"Logging and Monitoring",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"28/01/2018",category:"javascript",tags:["getting-started","nact","reason","bucklescript"]},fields:{slug:"/logging-and-monitoring"}}},pathContext:{slug:"/logging-and-monitoring",category:"javascript"}}}});
//# sourceMappingURL=path---lesson-javascript-logging-and-monitoring-df7072e77b11873fdcd6.js.map