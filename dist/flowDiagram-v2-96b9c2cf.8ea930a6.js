!function(e,t,r,l,a){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof o[l]&&o[l],n=s.cache||{},i="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(t,r){if(!n[t]){if(!e[t]){var a="function"==typeof o[l]&&o[l];if(!r&&a)return a(t,!0);if(s)return s(t,!0);if(i&&"string"==typeof t)return i(t);var c=Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}f.resolve=function(r){var l=e[t][1][r];return null!=l?l:r},f.cache={};var p=n[t]=new d.Module(t);e[t][0].call(p.exports,f,p,p.exports,o)}return n[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:d(t)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=n,d.parent=s,d.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(d,"root",{get:function(){return o[l]}}),o[l]=d;for(var c=0;c<t.length;c++)d(t[c])}({azdOx:[function(e,t,r,l){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"diagram",()=>i);var o=e("./flowDb-956e92f1.js"),s=e("./styles-c10674c1.js"),n=e("./mermaid-b5860b54.js");e("d3"),e("dagre-d3-es/src/graphlib/index.js"),e("./index-3862675e.js"),e("dagre-d3-es/src/dagre/index.js"),e("dagre-d3-es/src/graphlib/json.js"),e("./edges-e0da2a9e.js"),e("./createText-2e5e7dd3.js"),e("mdast-util-from-markdown"),e("ts-dedent"),e("dagre-d3-es/src/dagre-js/label/add-html-label.js"),e("khroma"),e("dayjs"),e("@braintree/sanitize-url"),e("dompurify"),e("lodash-es/memoize.js"),e("lodash-es/merge.js"),e("stylis"),e("lodash-es/isEmpty.js");let i={parser:o.p,db:o.f,renderer:s.f,styles:s.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,n.p)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),(0,s.f).setConf(e.flowchart),(0,o.f).clear(),(0,o.f).setGen("gen-2")}}},{"./flowDb-956e92f1.js":"iR0Sc","./styles-c10674c1.js":"356q0","./mermaid-b5860b54.js":"2omMO",d3:"ahWNw","dagre-d3-es/src/graphlib/index.js":"j6NXy","./index-3862675e.js":"8RdUO","dagre-d3-es/src/dagre/index.js":"9xp7T","dagre-d3-es/src/graphlib/json.js":"5pdrN","./edges-e0da2a9e.js":"3cEzO","./createText-2e5e7dd3.js":"3A2vP","mdast-util-from-markdown":"i9FLz","ts-dedent":"azOLv","dagre-d3-es/src/dagre-js/label/add-html-label.js":"1GkTV",khroma:"kb6Zw",dayjs:"8F3kd","@braintree/sanitize-url":"eIPUt",dompurify:"5cPaM","lodash-es/memoize.js":"kSZfU","lodash-es/merge.js":"ije1P",stylis:"lfeQC","lodash-es/isEmpty.js":"941eg","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"356q0":[function(e,t,r,l){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"a",()=>w),a.export(r,"f",()=>h);var o=e("dagre-d3-es/src/graphlib/index.js"),s=e("d3"),n=e("./mermaid-b5860b54.js"),i=e("./index-3862675e.js"),d=e("dagre-d3-es/src/dagre-js/label/add-html-label.js"),c=e("khroma");let p={},f=async function(e,t,r,l,a,o){let s=l.select(`[id="${r}"]`);for(let r of Object.keys(e)){let l;let i=e[r],c="default";i.classes.length>0&&(c=i.classes.join(" ")),c+=" flowchart-label";let p=(0,n.k)(i.styles),f=void 0!==i.text?i.text:i.id;if((0,n.l).info("vertex",i,i.labelType),"markdown"===i.labelType)(0,n.l).info("vertex",i,i.labelType);else if((0,n.m)((0,n.c)().flowchart.htmlLabels)){let e={label:f};(l=(0,d.addHtmlLabel)(s,e).node()).parentNode.removeChild(l)}else{let e=a.createElementNS("http://www.w3.org/2000/svg","text");for(let t of(e.setAttribute("style",p.labelStyle.replace("color:","fill:")),f.split(n.e.lineBreakRegex))){let r=a.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","1"),r.textContent=t,e.appendChild(r)}l=e}let b=0,u="";switch(i.type){case"round":b=5,u="rect";break;case"square":case"group":default:u="rect";break;case"diamond":u="question";break;case"hexagon":u="hexagon";break;case"odd":case"odd_right":u="rect_left_inv_arrow";break;case"lean_right":u="lean_right";break;case"lean_left":u="lean_left";break;case"trapezoid":u="trapezoid";break;case"inv_trapezoid":u="inv_trapezoid";break;case"circle":u="circle";break;case"ellipse":u="ellipse";break;case"stadium":u="stadium";break;case"subroutine":u="subroutine";break;case"cylinder":u="cylinder";break;case"doublecircle":u="doublecircle"}let h=await (0,n.r)(f,(0,n.c)());t.setNode(i.id,{labelStyle:p.labelStyle,shape:u,labelText:h,labelType:i.labelType,rx:b,ry:b,class:c,style:p.style,id:i.id,link:i.link,linkTarget:i.linkTarget,tooltip:o.db.getTooltip(i.id)||"",domId:o.db.lookUpDomId(i.id),haveCallback:i.haveCallback,width:"group"===i.type?500:void 0,dir:i.dir,type:i.type,props:i.props,padding:(0,n.c)().flowchart.padding}),(0,n.l).info("setNode",{labelStyle:p.labelStyle,labelType:i.labelType,shape:u,labelText:h,rx:b,ry:b,class:c,style:p.style,id:i.id,domId:o.db.lookUpDomId(i.id),width:"group"===i.type?500:void 0,type:i.type,dir:i.dir,props:i.props,padding:(0,n.c)().flowchart.padding})}},b=async function(e,t,r){let l,a;(0,n.l).info("abc78 edges = ",e);let o=0,i={};if(void 0!==e.defaultStyle){let t=(0,n.k)(e.defaultStyle);l=t.style,a=t.labelStyle}for(let r of e){o++;let d="L-"+r.start+"-"+r.end;void 0===i[d]?i[d]=0:i[d]++,(0,n.l).info("abc78 new entry",d,i[d]);let c=d+"-"+i[d];(0,n.l).info("abc78 new link id to be used is",d,c,i[d]);let f="LS-"+r.start,b="LE-"+r.end,u={style:"",labelStyle:""};switch(u.minlen=r.length||1,"arrow_open"===r.type?u.arrowhead="none":u.arrowhead="normal",u.arrowTypeStart="arrow_open",u.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":u.arrowTypeStart="arrow_cross";case"arrow_cross":u.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":u.arrowTypeStart="arrow_point";case"arrow_point":u.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":u.arrowTypeStart="arrow_circle";case"arrow_circle":u.arrowTypeEnd="arrow_circle"}let h="",g="";switch(r.stroke){case"normal":h="fill:none;",void 0!==l&&(h=l),void 0!==a&&(g=a),u.thickness="normal",u.pattern="solid";break;case"dotted":u.thickness="normal",u.pattern="dotted",u.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":u.thickness="thick",u.pattern="solid",u.style="stroke-width: 3.5px;fill:none;";break;case"invisible":u.thickness="invisible",u.pattern="solid",u.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){let e=(0,n.k)(r.style);h=e.style,g=e.labelStyle}u.style=u.style+=h,u.labelStyle=u.labelStyle+=g,void 0!==r.interpolate?u.curve=(0,n.n)(r.interpolate,s.curveLinear):void 0!==e.defaultInterpolate?u.curve=(0,n.n)(e.defaultInterpolate,s.curveLinear):u.curve=(0,n.n)(p.curve,s.curveLinear),void 0===r.text?void 0!==r.style&&(u.arrowheadStyle="fill: #333"):(u.arrowheadStyle="fill: #333",u.labelpos="c"),u.labelType=r.labelType,u.label=await (0,n.r)(r.text.replace(n.e.lineBreakRegex,"\n"),(0,n.c)()),void 0===r.style&&(u.style=u.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),u.labelStyle=u.labelStyle.replace("color:","fill:"),u.id=c,u.classes="flowchart-link "+f+" "+b,t.setEdge(r.start,r.end,u,o)}},u=async function(e,t,r,l){let a,d;(0,n.l).info("Drawing flowchart");let c=l.db.getDirection();void 0===c&&(c="TD");let{securityLevel:p,flowchart:u}=(0,n.c)(),h=u.nodeSpacing||50,g=u.rankSpacing||50;"sandbox"===p&&(a=(0,s.select)("#i"+t));let w="sandbox"===p?(0,s.select)(a.nodes()[0].contentDocument.body):(0,s.select)("body"),y="sandbox"===p?a.nodes()[0].contentDocument:document,m=new o.Graph({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:h,ranksep:g,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),k=l.db.getSubGraphs();(0,n.l).info("Subgraphs - ",k);for(let e=k.length-1;e>=0;e--)d=k[e],(0,n.l).info("Subgraph - ",d),l.db.addVertex(d.id,{text:d.title,type:d.labelType},"group",void 0,d.classes,d.dir);let x=l.db.getVertices(),j=l.db.getEdges();(0,n.l).info("Edges",j);let v=0;for(v=k.length-1;v>=0;v--){d=k[v],(0,s.selectAll)("cluster").append("text");for(let e=0;e<d.nodes.length;e++)(0,n.l).info("Setting up subgraphs",d.nodes[e],d.id),m.setParent(d.nodes[e],d.id)}await f(x,m,t,w,y,l),await b(j,m);let T=w.select(`[id="${t}"]`),S=w.select("#"+t+" g");if(await (0,i.r)(S,m,["point","circle","cross"],"flowchart",t),(0,n.u).insertTitle(T,"flowchartTitleText",u.titleTopMargin,l.db.getDiagramTitle()),(0,n.o)(m,T,u.diagramPadding,u.useMaxWidth),l.db.indexNodes("subGraph"+v),!u.htmlLabels)for(let e of y.querySelectorAll('[id="'+t+'"] .edgeLabel .label')){let t=e.getBBox(),r=y.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",t.width),r.setAttribute("height",t.height),e.insertBefore(r,e.firstChild)}Object.keys(x).forEach(function(e){let r=x[e];if(r.link){let l=(0,s.select)("#"+t+' [id="'+e+'"]');if(l){let e=y.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===p?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let t=l.insert(function(){return e},":first-child"),a=l.select(".label-container");a&&t.append(function(){return a.node()});let o=l.select(".label");o&&t.append(function(){return o.node()})}}})},h={setConf:function(e){for(let t of Object.keys(e))p[t]=e[t]},addVertices:f,addEdges:b,getClasses:function(e,t){return t.db.getClasses()},draw:u},g=(e,t)=>{let r=c.channel,l=r(e,"r"),a=r(e,"g"),o=r(e,"b");return c.rgba(l,a,o,t)},w=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${g(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`},{"dagre-d3-es/src/graphlib/index.js":"j6NXy",d3:"ahWNw","./mermaid-b5860b54.js":"2omMO","./index-3862675e.js":"8RdUO","dagre-d3-es/src/dagre-js/label/add-html-label.js":"1GkTV",khroma:"kb6Zw","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"1GkTV":[function(e,t,r,l){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"addHtmlLabel",()=>s);var o=e("../util.js");function s(e,t){var r=e.append("foreignObject").attr("width","100000"),l=r.append("xhtml:div");l.attr("xmlns","http://www.w3.org/1999/xhtml");var a=t.label;switch(typeof a){case"function":l.insert(a);break;case"object":l.insert(function(){return a});break;default:l.html(a)}o.applyStyle(l,t.labelStyle),l.style("display","inline-block"),l.style("white-space","nowrap");var s=l.node().getBoundingClientRect();return r.attr("width",s.width).attr("height",s.height),r}},{"../util.js":"6pKrH","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6pKrH":[function(e,t,r,l){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"isSubgraph",()=>s),a.export(r,"edgeToId",()=>n),a.export(r,"applyStyle",()=>c),a.export(r,"applyClass",()=>p),a.export(r,"applyTransition",()=>f);var o=e("lodash-es");function s(e,t){return!!e.children(t).length}function n(e){return d(e.v)+":"+d(e.w)+":"+d(e.name)}var i=/:/g;function d(e){return e?String(e).replace(i,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function p(e,t,r){t&&e.attr("class",t).attr("class",r+" "+e.attr("class"))}function f(e,t){var r=t.graph();if(o.isPlainObject(r)){var l=r.transition;if(o.isFunction(l))return l(e)}return e}},{"lodash-es":"h4a9d","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],0,"parcelRequire94c2");
//# sourceMappingURL=flowDiagram-v2-96b9c2cf.8ea930a6.js.map
