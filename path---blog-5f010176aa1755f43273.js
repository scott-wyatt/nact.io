webpackJsonp([49683490770531],{400:function(e,a){e.exports={data:{allMarkdownRemark:{edges:[{node:{html:"<p>Midway through 2017, I was due to start a job at <a href=\"https://root.co.za\">Root</a>. My previous job had a .NET stack, which is where I'd learnt Akka. I'd come to really appreciate the benefits and constraints provided by an actor system. Root's stack used Node.js however, and while there are one or two actor frameworks available, it felt that they had quite different goals: focusing on performance first. From my experience introducing Akka to my colleagues, I feel that getting the ergonomics and pedagogical aspects right from the start is of greater importance. Nact is thus being designed to make it easy for software teams to fall into the pit of success. </p>\n<p>This year most of the important building blocks were added to the framework, first class <a href=\"http://reasonml.github.io/\">ReasonML</a> bindings\nwere released, and the website you're reading this on was published. </p>\n<p>I was fortunate to join Root at a stage where the company doesn't face scaling problems. Thus we were able to adopt nact purely for it's event sourcing capabilities. Adding clustering is a priority for 2018, <em>especially</em> to support Root's move to kubernetes. </p>\n<p>Other goals for 2018 are:</p>\n<ul>\n<li>Further improvement to the documentation</li>\n<li>Tooling for logging and monitoring</li>\n<li>Better error messages</li>\n<li>Support for more storage providers</li>\n<li>A library which implements common patterns (such as at-least once delivery, scheduled jobs, the repository pattern, etc.) to reduce boilerplate code</li>\n<li>Eliminating the rxjs dependency.</li>\n</ul>\n<p>If you're interested in nact, would like to contribute to the framework, have suggestions, complaints or any comments, please reach out. I can be found on the <a href=\"https://discord.gg/uxhFdDS\">nact discord</a> or alternatively you can email me at <a href='mailto:nick@cuthbert.co.za'>nick@cuthbert.co.za</a>.</p>\n<p>Wishing you a happy holiday,<br/>\nNick</p>\n<p>P.S: <a href=\"http://root.co.za/careers/\">Root is hiring</a></p>",timeToRead:1,excerpt:"Midway through 2017, I was due to start a job at  Root . My previous job had a .NET stack, which is where I'd learnt Akka. I'd come to…",frontmatter:{title:"2017: The beginning",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"2017-12-18",category:"tech",tags:[]},fields:{slug:"/2017-the-beginning"}}},{node:{html:'<p>ReasonNact\'s latest release is a breaking change. In previous versions, the initial state was supplied as a plain value. <em>Now</em> the initial state must be specified as a function which takes in the actor\'s context. (See <a href="/lesson/reasonml/stateful-actors">Stateful Actors</a> ) for an example).</p>\n<p>While in many cases this change adds a few redundant characters, it solves a problem we have frequently experienced: Creating adapters, child actors and anything that lives in the state object which requires the actor reference for instantiation.</p>\n<p>Please let me know if you experience any issues with the changes. And always, the Nact community is available on Discord to help out:</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 142.85714285714286%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://discordapp.com/widget?id=392625718682714112&amp;theme=light" allowtransparency="true" frameborder="0" style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>',timeToRead:1,excerpt:"ReasonNact's latest release is a breaking change. In previous versions, the initial state was supplied as a plain value.  Now  the initial…",frontmatter:{title:"ReasonNact v5.0.0 Release Notes",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"2018-06-06",category:"tech",tags:[]},fields:{slug:"/reason-nact-v-5-0-0-release-notes"}}},{node:{html:'<h2 id="new-features"><a href="#new-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New features</h2>\n<p>This month a few new features were added to the framework. JavaScript gained <a href="https://nact.io/lesson/javascript/logging-and-monitoring">logging</a>,\nwhile Reason added <a href="https://nact.io/lesson/reasonml/logging-and-monitoring">logging</a>, <a href="https://nact.io/lesson/reasonml/decoders-and-encoders">encoders and decoders</a>, and <a href="https://nact.io/lesson/reasonml/adapters">type adapters</a>. The ReasonML additions were largely focused on improving ergonomics. </p>\n<p>Thanks to <a href="https://github.com/iskandersierra/">@iskandersierra</a> for making logging in Nact JS happen. Iskander Sierra is Nact\'s first external contributor. Iskander was patient despite my fussiness, so huge thanks. He definitely deserves a follow 😉. </p>\n<h2 id="a-preview-of-the-future"><a href="#a-preview-of-the-future" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A preview of the future</h2>\n<p>One of the main innovations of the actor model was moving the idea of a process from a physical construct to a logical one. This abstraction allowed developers to focus on writing domain code without worrying about locking, staleness, or even on what core/machine the process was located. A cluster can be similarly abstracted. This allows developers to worry less about networking, load balancing, and service discovery, and more about solving domain problems at scale. </p>\n<p>I\'ve been thinking hard about what such an abstraction would look like, and <em>think</em> I have something which could work. Obviously this is all subject to change, and a lot of hard work will need to be done to make it a reality (failure detection, gossiping, sharding, membership and so on) but I\'d be very happy if Nact clustering could look something like this:</p>\n<p>This is the ReasonML version:</p>\n<div class="gatsby-highlight">\n      <pre class="language-reason"><code><span class="token keyword">let</span> system <span class="token operator">=</span> start<span class="token punctuation">(</span><span class="token operator">~</span>seeds<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"https://system-1"</span><span class="token punctuation">,</span><span class="token string">"https://system-2"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> <span class="token punctuation">(</span>actorRef<span class="token punctuation">,</span> cluster<span class="token punctuation">)</span> <span class="token operator">=</span> spawnCluster<span class="token punctuation">(</span><span class="token operator">~</span>key<span class="token operator">=</span><span class="token string">"abc"</span><span class="token punctuation">,</span> system<span class="token punctuation">,</span> <span class="token constructor variable">RoundRobin</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> member <span class="token operator">=</span> spawnStateless<span class="token punctuation">(</span>system<span class="token punctuation">,</span> <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> resolve<span class="token punctuation">(</span><span class="token class-name">Js</span><span class="token punctuation">.</span>log<span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncluster <span class="token operator">+</span>@ member<span class="token punctuation">;</span> \nactorRef <span class="token operator">&lt;</span><span class="token operator">-</span><span class="token operator">&lt;</span> <span class="token string">"Hello Cluster!"</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>...and the JavaScript one:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> system <span class="token operator">=</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">{</span>seeds<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"https://system-1"</span><span class="token punctuation">,</span> <span class="token string">"https://system-2"</span><span class="token punctuation">,</span> <span class="token string">"https://system-3"</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> cluster <span class="token operator">=</span> <span class="token function">spawnCluster</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">,</span> system<span class="token punctuation">,</span> roundRobin<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> member <span class="token operator">=</span> <span class="token function">spawnStateless</span><span class="token punctuation">(</span>system<span class="token punctuation">,</span> <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">join</span><span class="token punctuation">(</span>cluster<span class="token punctuation">,</span> member<span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token function">dispatch</span><span class="token punctuation">(</span>cluster<span class="token punctuation">,</span> <span class="token string">"Hello Cluster!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In the example, the system is fed a set of well known addresses to bootstrap discovery of peer nodes.\nThen a virtual cluster is created. This cluster has a particular routing strategy (in this case round robin)\nas different routing strategies have different consistency requirements. </p>\n<p>The <code>clusterRef</code> supports two additional operations: <code>join</code> and <code>leave</code> or the <code>+@</code> and <code>-@</code> operators in Reason respectively. Messages can be dispatched to the cluster as per usual. In the Reason version, the <code>clusterRef</code> and\n<code>actorRef</code> are separate so as to simplify typing.</p>\n<p>This clustering design feels ergonomic, fairly simple for the end user and flexible. If you spot a fatal flaw, please message me on <a href="/community">discord</a>; I like ideas that have a hope of actually working.</p>',timeToRead:2,excerpt:"New features This month a few new features were added to the framework. JavaScript gained  logging ,\nwhile Reason added  logging ,  encoders…",frontmatter:{title:"January 2018 Update",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"2018-01-30",category:"tech",tags:[]},fields:{slug:"/january-2018-update"}}},{node:{html:'<p>Version 7.1.0 of NactJS and version 4.1.0 of ReasonNact added a new feature, Persistent Queries, which should go some way to supporting patterns like CQRS (which is something I have been asked a few times about). </p>\n<p>I think the way the feature achieves its goals may be a little surprising for some people, who are used to a more global solution to CQRS; an example being events streams which pipe to some form of database. I decided to take a more localised, <a href="https://en.wikipedia.org/wiki/Lazy_evaluation">lazy</a> approach to read models, because I feel that this is truer to what Nact is about (small, simple, functional). The global model is still useful in many instances, but it is quite a prescriptive approach and can anyway be modeled using the primitives Nact offers. </p>\n<p>As the documentation explains:</p>\n<blockquote>\n<p>Nact provides the persistent query feature as a light-weight (but powerful) form of CQRS. A persistent query takes in a persistent key, and returns a function which when invoked replays the persisted events, building a result which is finally returned as a promise. A persistent query is lazy in that it only retrieves events when forced. It may be invoked any number of times, each time checking for new events. The result and sequence number of the query are cached with an optional timeout, and the result may optionally also be snapshotted every given number of messages. </p>\n</blockquote>\n<p>The rest of the documentation for persistence queries in js and reason can be found <a href="/lesson/javascript/persistent-queries/">here</a> and <a href="/lesson/reasonml/persistent-queries/">here</a>.</p>',timeToRead:1,excerpt:"Version 7.1.0 of NactJS and version 4.1.0 of ReasonNact added a new feature, Persistent Queries, which should go some way to supporting…",frontmatter:{title:"Persistent Queries",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"2018-05-19",category:"tech",tags:[]},fields:{slug:"/persistent-queries"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---blog-5f010176aa1755f43273.js.map