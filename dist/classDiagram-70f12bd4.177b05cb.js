!function(t,e,a,r,i){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},d="function"==typeof n[r]&&n[r],o=d.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(e,a){if(!o[e]){if(!t[e]){var i="function"==typeof n[r]&&n[r];if(!a&&i)return i(e,!0);if(d)return d(e,!0);if(s&&"string"==typeof e)return s(e);var p=Error("Cannot find module '"+e+"'");throw p.code="MODULE_NOT_FOUND",p}c.resolve=function(a){var r=t[e][1][a];return null!=r?r:a},c.cache={};var g=o[e]=new l.Module(e);t[e][0].call(g.exports,c,g,g.exports,n)}return o[e].exports;function c(t){var e=c.resolve(t);return!1===e?{}:l(e)}}l.isParcelRequire=!0,l.Module=function(t){this.id=t,this.bundle=l,this.exports={}},l.modules=t,l.cache=o,l.parent=d,l.register=function(e,a){t[e]=[function(t,e){e.exports=a},{}]},Object.defineProperty(l,"root",{get:function(){return n[r]}}),n[r]=l;for(var p=0;p<e.length;p++)l(e[p])}({"94LbP":[function(t,e,a,r){var i=t("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(a),i.export(a,"diagram",()=>y);var n=t("./styles-9a916d00.js"),d=t("d3"),o=t("dagre-d3-es/src/dagre/index.js"),s=t("dagre-d3-es/src/graphlib/index.js"),l=t("./mermaid-b5860b54.js");t("ts-dedent"),t("dayjs"),t("@braintree/sanitize-url"),t("dompurify"),t("khroma"),t("lodash-es/memoize.js"),t("lodash-es/merge.js"),t("stylis"),t("lodash-es/isEmpty.js");let p=0,g=function(t){let e=t.id;return t.type&&(e+="<"+(0,l.x)(t.type)+">"),e},c=function(t,e,a,r){let{displayText:i,cssStyle:n}=e.getDisplayDetails(),d=t.append("tspan").attr("x",r.padding).text(i);""!==n&&d.attr("style",e.cssStyle),a||d.attr("dy",r.textHeight)},h={drawClass:function(t,e,a,r){let i,n,d,o;(0,l.l).debug("Rendering class ",e,a);let s=e.id,p={id:s,label:e.id,width:0,height:0},h=t.append("g").attr("id",r.db.lookUpDomId(s)).attr("class","classGroup");i=e.link?h.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",a.textHeight+a.padding).attr("x",0):h.append("text").attr("y",a.textHeight+a.padding).attr("x",0);let f=!0;e.annotations.forEach(function(t){let e=i.append("tspan").text("«"+t+"»");f||e.attr("dy",a.textHeight),f=!1});let u=g(e),x=i.append("tspan").text(u).attr("class","title");f||x.attr("dy",a.textHeight);let y=i.node().getBBox().height;if(e.members.length>0){n=h.append("line").attr("x1",0).attr("y1",a.padding+y+a.dividerMargin/2).attr("y2",a.padding+y+a.dividerMargin/2);let t=h.append("text").attr("x",a.padding).attr("y",y+a.dividerMargin+a.textHeight).attr("fill","white").attr("class","classText");f=!0,e.members.forEach(function(e){c(t,e,f,a),f=!1}),d=t.node().getBBox()}if(e.methods.length>0){o=h.append("line").attr("x1",0).attr("y1",a.padding+y+a.dividerMargin+d.height).attr("y2",a.padding+y+a.dividerMargin+d.height);let t=h.append("text").attr("x",a.padding).attr("y",y+2*a.dividerMargin+d.height+a.textHeight).attr("fill","white").attr("class","classText");f=!0,e.methods.forEach(function(e){c(t,e,f,a),f=!1})}let m=h.node().getBBox();var b=" ";e.cssClasses.length>0&&(b+=e.cssClasses.join(" "));let w=h.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",m.width+2*a.padding).attr("height",m.height+a.padding+.5*a.dividerMargin).attr("class",b).node().getBBox().width;return i.node().childNodes.forEach(function(t){t.setAttribute("x",(w-t.getBBox().width)/2)}),e.tooltip&&i.insert("title").text(e.tooltip),n&&n.attr("x2",w),o&&o.attr("x2",w),p.width=w,p.height=m.height+a.padding+.5*a.dividerMargin,p},drawEdge:function(t,e,a,r,i){let n,o,s,g,c,h;let f=function(t){switch(t){case i.db.relationType.AGGREGATION:return"aggregation";case i.db.relationType.EXTENSION:return"extension";case i.db.relationType.COMPOSITION:return"composition";case i.db.relationType.DEPENDENCY:return"dependency";case i.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter(t=>!Number.isNaN(t.y));let u=e.points,x=(0,d.line)().x(function(t){return t.x}).y(function(t){return t.y}).curve(d.curveBasis),y=t.append("path").attr("d",x(u)).attr("id","edge"+p).attr("class","relation"),m="";r.arrowMarkerAbsolute&&(m=(m=(m=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),1==a.relation.lineType&&y.attr("class","relation dashed-line"),10==a.relation.lineType&&y.attr("class","relation dotted-line"),"none"!==a.relation.type1&&y.attr("marker-start","url("+m+"#"+f(a.relation.type1)+"Start)"),"none"!==a.relation.type2&&y.attr("marker-end","url("+m+"#"+f(a.relation.type2)+"End)");let b=e.points.length,w=(0,l.u).calcLabelPosition(e.points);if(n=w.x,o=w.y,b%2!=0&&b>1){let t=(0,l.u).calcCardinalityPosition("none"!==a.relation.type1,e.points,e.points[0]),r=(0,l.u).calcCardinalityPosition("none"!==a.relation.type2,e.points,e.points[b-1]);(0,l.l).debug("cardinality_1_point "+JSON.stringify(t)),(0,l.l).debug("cardinality_2_point "+JSON.stringify(r)),s=t.x,g=t.y,c=r.x,h=r.y}if(void 0!==a.title){let e=t.append("g").attr("class","classLabel"),i=e.append("text").attr("class","label").attr("x",n).attr("y",o).attr("fill","red").attr("text-anchor","middle").text(a.title);window.label=i;let d=i.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",d.x-r.padding/2).attr("y",d.y-r.padding/2).attr("width",d.width+r.padding).attr("height",d.height+r.padding)}(0,l.l).info("Rendering relation "+JSON.stringify(a)),void 0!==a.relationTitle1&&"none"!==a.relationTitle1&&t.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",s).attr("y",g).attr("fill","black").attr("font-size","6").text(a.relationTitle1),void 0!==a.relationTitle2&&"none"!==a.relationTitle2&&t.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",c).attr("y",h).attr("fill","black").attr("font-size","6").text(a.relationTitle2),p++},drawNote:function(t,e,a,r){(0,l.l).debug("Rendering note ",e,a);let i=e.id,n={id:i,text:e.text,width:0,height:0},d=t.append("g").attr("id",i).attr("class","classGroup"),o=d.append("text").attr("y",a.textHeight+a.padding).attr("x",0),s=JSON.parse(`"${e.text}"`).split("\n");s.forEach(function(t){(0,l.l).debug(`Adding line: ${t}`),o.append("tspan").text(t).attr("class","title").attr("dy",a.textHeight)});let p=d.node().getBBox(),g=d.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",p.width+2*a.padding).attr("height",p.height+s.length*a.textHeight+a.padding+.5*a.dividerMargin).node().getBBox().width;return o.node().childNodes.forEach(function(t){t.setAttribute("x",(g-t.getBBox().width)/2)}),n.width=g,n.height=p.height+s.length*a.textHeight+a.padding+.5*a.dividerMargin,n}},f={},u=function(t){let e=Object.entries(f).find(e=>e[1].label===t);if(e)return e[0]},x=function(t){t.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),t.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},y={parser:n.p,db:n.d,renderer:{draw:function(t,e,a,r){let i;let n=(0,l.c)().class;f={},(0,l.l).info("Rendering diagram "+t);let p=(0,l.c)().securityLevel;"sandbox"===p&&(i=(0,d.select)("#i"+e));let g="sandbox"===p?(0,d.select)(i.nodes()[0].contentDocument.body):(0,d.select)("body"),c=g.select(`[id='${e}']`);x(c);let y=new s.Graph({multigraph:!0});y.setGraph({isMultiGraph:!0}),y.setDefaultEdgeLabel(function(){return{}});let m=r.db.getClasses();for(let t of Object.keys(m)){let e=m[t],a=h.drawClass(c,e,n,r);f[a.id]=a,y.setNode(a.id,a),(0,l.l).info("Org height: "+a.height)}r.db.getRelations().forEach(function(t){(0,l.l).info("tjoho"+u(t.id1)+u(t.id2)+JSON.stringify(t)),y.setEdge(u(t.id1),u(t.id2),{relation:t},t.title||"DEFAULT")}),r.db.getNotes().forEach(function(t){(0,l.l).debug(`Adding note: ${JSON.stringify(t)}`);let e=h.drawNote(c,t,n,r);f[e.id]=e,y.setNode(e.id,e),t.class&&t.class in m&&y.setEdge(t.id,u(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),(0,o.layout)(y),y.nodes().forEach(function(t){void 0!==t&&void 0!==y.node(t)&&((0,l.l).debug("Node "+t+": "+JSON.stringify(y.node(t))),g.select("#"+(r.db.lookUpDomId(t)||t)).attr("transform","translate("+(y.node(t).x-y.node(t).width/2)+","+(y.node(t).y-y.node(t).height/2)+" )"))}),y.edges().forEach(function(t){void 0!==t&&void 0!==y.edge(t)&&((0,l.l).debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(y.edge(t))),h.drawEdge(c,y.edge(t),y.edge(t).relation,n,r))});let b=c.node().getBBox(),w=b.width+40,k=b.height+40;(0,l.i)(c,k,w,n.useMaxWidth);let v=`${b.x-20} ${b.y-20} ${w} ${k}`;(0,l.l).debug(`viewBox ${v}`),c.attr("viewBox",v)}},styles:n.s,init:t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,(0,n.d).clear()}}},{"./styles-9a916d00.js":"3zEjJ",d3:"ahWNw","dagre-d3-es/src/dagre/index.js":"9xp7T","dagre-d3-es/src/graphlib/index.js":"j6NXy","./mermaid-b5860b54.js":"2omMO","ts-dedent":"azOLv",dayjs:"8F3kd","@braintree/sanitize-url":"eIPUt",dompurify:"5cPaM",khroma:"kb6Zw","lodash-es/memoize.js":"kSZfU","lodash-es/merge.js":"ije1P",stylis:"lfeQC","lodash-es/isEmpty.js":"941eg","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],0,"parcelRequire94c2");
//# sourceMappingURL=classDiagram-70f12bd4.177b05cb.js.map
