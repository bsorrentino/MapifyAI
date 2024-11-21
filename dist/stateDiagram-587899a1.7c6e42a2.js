!function(t,e,a,i,r){var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n="function"==typeof d[i]&&d[i],s=n.cache||{},o="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(e,a){if(!s[e]){if(!t[e]){var r="function"==typeof d[i]&&d[i];if(!a&&r)return r(e,!0);if(n)return n(e,!0);if(o&&"string"==typeof e)return o(e);var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}p.resolve=function(a){var i=t[e][1][a];return null!=i?i:a},p.cache={};var g=s[e]=new c.Module(e);t[e][0].call(g.exports,p,g,g.exports,d)}return s[e].exports;function p(t){var e=p.resolve(t);return!1===e?{}:c(e)}}c.isParcelRequire=!0,c.Module=function(t){this.id=t,this.bundle=c,this.exports={}},c.modules=t,c.cache=s,c.parent=n,c.register=function(e,a){t[e]=[function(t,e){e.exports=a},{}]},Object.defineProperty(c,"root",{get:function(){return d[i]}}),d[i]=c;for(var l=0;l<e.length;l++)c(e[l])}({ikdjD:[function(t,e,a,i){let r;var d=t("@parcel/transformer-js/src/esmodule-helpers.js");d.defineInteropFlag(a),d.export(a,"diagram",()=>S);var n=t("./styles-6aaf32cf.js"),s=t("d3"),o=t("dagre-d3-es/src/dagre/index.js"),c=t("dagre-d3-es/src/graphlib/index.js"),l=t("./mermaid-b5860b54.js");t("ts-dedent"),t("dayjs"),t("@braintree/sanitize-url"),t("dompurify"),t("khroma"),t("lodash-es/memoize.js"),t("lodash-es/merge.js"),t("stylis"),t("lodash-es/isEmpty.js");let g={},p=(t,e)=>{g[t]=e},h=t=>t.append("circle").attr("class","start-state").attr("r",(0,l.c)().state.sizeUnit).attr("cx",(0,l.c)().state.padding+(0,l.c)().state.sizeUnit).attr("cy",(0,l.c)().state.padding+(0,l.c)().state.sizeUnit),u=t=>t.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",(0,l.c)().state.textHeight).attr("class","divider").attr("x2",2*(0,l.c)().state.textHeight).attr("y1",0).attr("y2",0),f=(t,e)=>{let a=t.append("text").attr("x",2*(0,l.c)().state.padding).attr("y",(0,l.c)().state.textHeight+2*(0,l.c)().state.padding).attr("font-size",(0,l.c)().state.fontSize).attr("class","state-title").text(e.id),i=a.node().getBBox();return t.insert("rect",":first-child").attr("x",(0,l.c)().state.padding).attr("y",(0,l.c)().state.padding).attr("width",i.width+2*(0,l.c)().state.padding).attr("height",i.height+2*(0,l.c)().state.padding).attr("rx",(0,l.c)().state.radius),a},x=(t,e)=>{let a=function(t,e,a){let i=t.append("tspan").attr("x",2*(0,l.c)().state.padding).text(e);a||i.attr("dy",(0,l.c)().state.textHeight)},i=t.append("text").attr("x",2*(0,l.c)().state.padding).attr("y",(0,l.c)().state.textHeight+1.3*(0,l.c)().state.padding).attr("font-size",(0,l.c)().state.fontSize).attr("class","state-title").text(e.descriptions[0]).node().getBBox(),r=i.height,d=t.append("text").attr("x",(0,l.c)().state.padding).attr("y",r+.4*(0,l.c)().state.padding+(0,l.c)().state.dividerMargin+(0,l.c)().state.textHeight).attr("class","state-description"),n=!0,s=!0;e.descriptions.forEach(function(t){n||(a(d,t,s),s=!1),n=!1});let o=t.append("line").attr("x1",(0,l.c)().state.padding).attr("y1",(0,l.c)().state.padding+r+(0,l.c)().state.dividerMargin/2).attr("y2",(0,l.c)().state.padding+r+(0,l.c)().state.dividerMargin/2).attr("class","descr-divider"),c=d.node().getBBox(),g=Math.max(c.width,i.width);return o.attr("x2",g+3*(0,l.c)().state.padding),t.insert("rect",":first-child").attr("x",(0,l.c)().state.padding).attr("y",(0,l.c)().state.padding).attr("width",g+2*(0,l.c)().state.padding).attr("height",c.height+r+2*(0,l.c)().state.padding).attr("rx",(0,l.c)().state.radius),t},y=(t,e,a)=>{let i;let r=(0,l.c)().state.padding,d=2*(0,l.c)().state.padding,n=t.node().getBBox(),s=n.width,o=n.x,c=t.append("text").attr("x",0).attr("y",(0,l.c)().state.titleShift).attr("font-size",(0,l.c)().state.fontSize).attr("class","state-title").text(e.id),g=c.node().getBBox().width+d,p=Math.max(g,s);p===s&&(p+=d);let h=t.node().getBBox();e.doc,i=o-r,g>s&&(i=(s-p)/2+r),Math.abs(o-h.x)<r&&g>s&&(i=o-(g-s)/2);let u=1-(0,l.c)().state.textHeight;return t.insert("rect",":first-child").attr("x",i).attr("y",u).attr("class",a?"alt-composit":"composit").attr("width",p).attr("height",h.height+(0,l.c)().state.textHeight+(0,l.c)().state.titleShift+1).attr("rx","0"),c.attr("x",i+r),g<=s&&c.attr("x",o+(p-d)/2-g/2+r),t.insert("rect",":first-child").attr("x",i).attr("y",(0,l.c)().state.titleShift-(0,l.c)().state.textHeight-(0,l.c)().state.padding).attr("width",p).attr("height",3*(0,l.c)().state.textHeight).attr("rx",(0,l.c)().state.radius),t.insert("rect",":first-child").attr("x",i).attr("y",(0,l.c)().state.titleShift-(0,l.c)().state.textHeight-(0,l.c)().state.padding).attr("width",p).attr("height",h.height+3+2*(0,l.c)().state.textHeight).attr("rx",(0,l.c)().state.radius),t},m=t=>(t.append("circle").attr("class","end-state-outer").attr("r",(0,l.c)().state.sizeUnit+(0,l.c)().state.miniPadding).attr("cx",(0,l.c)().state.padding+(0,l.c)().state.sizeUnit+(0,l.c)().state.miniPadding).attr("cy",(0,l.c)().state.padding+(0,l.c)().state.sizeUnit+(0,l.c)().state.miniPadding),t.append("circle").attr("class","end-state-inner").attr("r",(0,l.c)().state.sizeUnit).attr("cx",(0,l.c)().state.padding+(0,l.c)().state.sizeUnit+2).attr("cy",(0,l.c)().state.padding+(0,l.c)().state.sizeUnit+2)),b=(t,e)=>{let a=(0,l.c)().state.forkWidth,i=(0,l.c)().state.forkHeight;if(e.parentId){let t=a;a=i,i=t}return t.append("rect").style("stroke","black").style("fill","black").attr("width",a).attr("height",i).attr("x",(0,l.c)().state.padding).attr("y",(0,l.c)().state.padding)},w=(t,e,a,i)=>{let r=0,d=i.append("text");d.style("text-anchor","start"),d.attr("class","noteText");let n=t.replace(/\r\n/g,"<br/>"),s=(n=n.replace(/\n/g,"<br/>")).split(l.e.lineBreakRegex),o=1.25*(0,l.c)().state.noteMargin;for(let t of s){let i=t.trim();if(i.length>0){let t=d.append("tspan");t.text(i),0===o&&(o+=t.node().getBBox().height),r+=o,t.attr("x",e+(0,l.c)().state.noteMargin),t.attr("y",a+r+1.25*(0,l.c)().state.noteMargin)}}return{textWidth:d.node().getBBox().width,textHeight:r}},B=(t,e)=>{e.attr("class","state-note");let a=e.append("rect").attr("x",0).attr("y",(0,l.c)().state.padding),{textWidth:i,textHeight:r}=w(t,0,0,e.append("g"));return a.attr("height",r+2*(0,l.c)().state.noteMargin),a.attr("width",i+2*(0,l.c)().state.noteMargin),a},k=function(t,e){let a=e.id,i={id:a,label:e.id,width:0,height:0},r=t.append("g").attr("id",a).attr("class","stateGroup");"start"===e.type&&h(r),"end"===e.type&&m(r),("fork"===e.type||"join"===e.type)&&b(r,e),"note"===e.type&&B(e.note.text,r),"divider"===e.type&&u(r),"default"===e.type&&0===e.descriptions.length&&f(r,e),"default"===e.type&&e.descriptions.length>0&&x(r,e);let d=r.node().getBBox();return i.width=d.width+2*(0,l.c)().state.padding,i.height=d.height+2*(0,l.c)().state.padding,p(a,i),i},v=0,N=function(t,e,a){e.points=e.points.filter(t=>!Number.isNaN(t.y));let i=e.points,r=(0,s.line)().x(function(t){return t.x}).y(function(t){return t.y}).curve(s.curveBasis),d=t.append("path").attr("d",r(i)).attr("id","edge"+v).attr("class","transition"),o="";if((0,l.c)().state.arrowMarkerAbsolute&&(o=(o=(o=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),d.attr("marker-end","url("+o+"#"+function(t){switch(t){case n.d.relationType.AGGREGATION:return"aggregation";case n.d.relationType.EXTENSION:return"extension";case n.d.relationType.COMPOSITION:return"composition";case n.d.relationType.DEPENDENCY:return"dependency"}}(n.d.relationType.DEPENDENCY)+"End)"),void 0!==a.title){let i=t.append("g").attr("class","stateLabel"),{x:r,y:d}=(0,l.u).calcLabelPosition(e.points),n=(0,l.e).getRows(a.title),s=0,o=[],c=0,g=0;for(let t=0;t<=n.length;t++){let e=i.append("text").attr("text-anchor","middle").text(n[t]).attr("x",r).attr("y",d+s),a=e.node().getBBox();c=Math.max(c,a.width),g=Math.min(g,a.x),(0,l.l).info(a.x,r,d+s),0===s&&(s=e.node().getBBox().height,(0,l.l).info("Title height",s,d)),o.push(e)}let p=s*n.length;if(n.length>1){let t=(n.length-1)*s*.5;o.forEach((e,a)=>e.attr("y",d+a*s-t)),p=s*n.length}let h=i.node().getBBox();i.insert("rect",":first-child").attr("class","box").attr("x",r-c/2-(0,l.c)().state.padding/2).attr("y",d-p/2-(0,l.c)().state.padding/2-3.5).attr("width",c+(0,l.c)().state.padding).attr("height",p+(0,l.c)().state.padding),(0,l.l).info(h)}v++},E={},j=function(t){t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},M=t=>t?t.length*r.fontSizeFactor:1,z=(t,e,a,i,d,n,s)=>{let g;let p=new c.Graph({compound:!0,multigraph:!0}),h=!0;for(g=0;g<t.length;g++)if("relation"===t[g].stmt){h=!1;break}a?p.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:h?1:r.edgeLengthFactor,nodeSep:h?1:50,isMultiGraph:!0}):p.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:h?1:r.edgeLengthFactor,nodeSep:h?1:50,ranker:"tight-tree",isMultiGraph:!0}),p.setDefaultEdgeLabel(function(){return{}}),s.db.extract(t);let u=s.db.getStates(),f=s.db.getRelations();for(let t of Object.keys(u)){let o;let c=u[t];if(a&&(c.parentId=a),c.doc){let t=e.append("g").attr("id",c.id).attr("class","stateGroup");o=z(c.doc,t,c.id,!i,d,n,s);{let e=(t=y(t,c,i)).node().getBBox();o.width=e.width,o.height=e.height+r.padding/2,E[c.id]={y:r.compositTitleSize}}}else o=k(e,c);if(c.note){let t=k(e,{descriptions:[],id:c.id+"-note",note:c.note,type:"note"});"left of"===c.note.position?(p.setNode(o.id+"-note",t),p.setNode(o.id,o)):(p.setNode(o.id,o),p.setNode(o.id+"-note",t)),p.setParent(o.id,o.id+"-group"),p.setParent(o.id+"-note",o.id+"-group")}else p.setNode(o.id,o)}(0,l.l).debug("Count=",p.nodeCount(),p);let x=0;f.forEach(function(t){x++,(0,l.l).debug("Setting edge",t),p.setEdge(t.id1,t.id2,{relation:t,width:M(t.title),height:r.labelHeight*(0,l.e).getRows(t.title).length,labelpos:"c"},"id"+x)}),(0,o.layout)(p),(0,l.l).debug("Graph after layout",p.nodes());let m=e.node();p.nodes().forEach(function(t){void 0!==t&&void 0!==p.node(t)?((0,l.l).warn("Node "+t+": "+JSON.stringify(p.node(t))),d.select("#"+m.id+" #"+t).attr("transform","translate("+(p.node(t).x-p.node(t).width/2)+","+(p.node(t).y+(E[t]?E[t].y:0)-p.node(t).height/2)+" )"),d.select("#"+m.id+" #"+t).attr("data-x-shift",p.node(t).x-p.node(t).width/2),n.querySelectorAll("#"+m.id+" #"+t+" .divider").forEach(t=>{let e=t.parentElement,a=0,i=0;e&&(e.parentElement&&(a=e.parentElement.getBBox().width),Number.isNaN(i=parseInt(e.getAttribute("data-x-shift"),10))&&(i=0)),t.setAttribute("x1",0-i+8),t.setAttribute("x2",a-i-8)})):(0,l.l).debug("No Node "+t+": "+JSON.stringify(p.node(t)))});let b=m.getBBox();p.edges().forEach(function(t){void 0!==t&&void 0!==p.edge(t)&&((0,l.l).debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(p.edge(t))),N(e,p.edge(t),p.edge(t).relation))}),b=m.getBBox();let w={id:a||"root",label:a||"root",width:0,height:0};return w.width=b.width+2*r.padding,w.height=b.height+2*r.padding,(0,l.l).debug("Doc rendered",w,p),w},S={parser:n.p,db:n.d,renderer:{setConf:function(){},draw:function(t,e,a,i){let d;r=(0,l.c)().state;let n=(0,l.c)().securityLevel;"sandbox"===n&&(d=(0,s.select)("#i"+e));let o="sandbox"===n?(0,s.select)(d.nodes()[0].contentDocument.body):(0,s.select)("body"),c="sandbox"===n?d.nodes()[0].contentDocument:document;(0,l.l).debug("Rendering diagram "+t);let g=o.select(`[id='${e}']`);j(g),z(i.db.getRootDoc(),g,void 0,!1,o,c,i);let p=r.padding,h=g.node().getBBox(),u=h.width+2*p,f=h.height+2*p;(0,l.i)(g,f,1.75*u,r.useMaxWidth),g.attr("viewBox",`${h.x-r.padding}  ${h.y-r.padding} `+u+" "+f)}},styles:n.s,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,(0,n.d).clear()}}},{"./styles-6aaf32cf.js":"gNw0p",d3:"ahWNw","dagre-d3-es/src/dagre/index.js":"9xp7T","dagre-d3-es/src/graphlib/index.js":"j6NXy","./mermaid-b5860b54.js":"2omMO","ts-dedent":"azOLv",dayjs:"8F3kd","@braintree/sanitize-url":"eIPUt",dompurify:"5cPaM",khroma:"kb6Zw","lodash-es/memoize.js":"kSZfU","lodash-es/merge.js":"ije1P",stylis:"lfeQC","lodash-es/isEmpty.js":"941eg","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],0,"parcelRequire94c2");
//# sourceMappingURL=stateDiagram-587899a1.7c6e42a2.js.map