!function(n,t,e,i,r){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},c="function"==typeof a[i]&&a[i],o=c.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(t,e){if(!o[t]){if(!n[t]){var r="function"==typeof a[i]&&a[i];if(!e&&r)return r(t,!0);if(c)return c(t,!0);if(u&&"string"==typeof t)return u(t);var h=Error("Cannot find module '"+t+"'");throw h.code="MODULE_NOT_FOUND",h}l.resolve=function(e){var i=n[t][1][e];return null!=i?i:e},l.cache={};var f=o[t]=new s.Module(t);n[t][0].call(f.exports,l,f,f.exports,a)}return o[t].exports;function l(n){var t=l.resolve(n);return!1===t?{}:s(t)}}s.isParcelRequire=!0,s.Module=function(n){this.id=n,this.bundle=s,this.exports={}},s.modules=n,s.cache=o,s.parent=c,s.register=function(t,e){n[t]=[function(n,t){t.exports=e},{}]},Object.defineProperty(s,"root",{get:function(){return a[i]}}),a[i]=s;for(var h=0;h<t.length;h++)s(t[h])}({aGiU2:[function(n,t,e,i){var r=n("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(e),r.export(e,"diagram",()=>I);var a=n("./flowDb-956e92f1.js"),c=n("d3"),o=n("./edges-e0da2a9e.js"),u=n("./mermaid-b5860b54.js"),s=n("elkjs/lib/elk.bundled.js"),h=r.interopDefault(s);n("./createText-2e5e7dd3.js"),n("mdast-util-from-markdown"),n("ts-dedent"),n("dayjs"),n("@braintree/sanitize-url"),n("dompurify"),n("khroma"),n("lodash-es/memoize.js"),n("lodash-es/merge.js"),n("stylis"),n("lodash-es/isEmpty.js");let f=(n,t,e)=>{let{parentById:i}=e,r=/* @__PURE__ */new Set,a=n;for(;a;){if(r.add(a),a===t)return a;a=i[a]}for(a=t;a;){if(r.has(a))return a;a=i[a]}return"root"},l=new h.default,b={},w={},d={},g=async function(n,t,e,i,r,a,c){let s=e.select(`[id="${t}"]`).insert("g").attr("class","nodes"),h=Object.keys(n);return await Promise.all(h.map(async function(t){let e,c;let h=n[t],f="default";h.classes.length>0&&(f=h.classes.join(" ")),f+=" flowchart-label";let l=(0,u.k)(h.styles),b=void 0!==h.text?h.text:h.id,w={width:0,height:0},g=[{id:h.id+"-west",layoutOptions:{"port.side":"WEST"}},{id:h.id+"-east",layoutOptions:{"port.side":"EAST"}},{id:h.id+"-south",layoutOptions:{"port.side":"SOUTH"}},{id:h.id+"-north",layoutOptions:{"port.side":"NORTH"}}],p=0,m="",v={};switch(h.type){case"round":p=5,m="rect";break;case"square":case"group":default:m="rect";break;case"diamond":m="question",v={portConstraints:"FIXED_SIDE"};break;case"hexagon":m="hexagon";break;case"odd":case"odd_right":m="rect_left_inv_arrow";break;case"lean_right":m="lean_right";break;case"lean_left":m="lean_left";break;case"trapezoid":m="trapezoid";break;case"inv_trapezoid":m="inv_trapezoid";break;case"circle":m="circle";break;case"ellipse":m="ellipse";break;case"stadium":m="stadium";break;case"subroutine":m="subroutine";break;case"cylinder":m="cylinder";break;case"doublecircle":m="doublecircle"}let k={labelStyle:l.labelStyle,shape:m,labelText:b,labelType:h.labelType,rx:p,ry:p,class:f,style:l.style,id:h.id,link:h.link,linkTarget:h.linkTarget,tooltip:r.db.getTooltip(h.id)||"",domId:r.db.lookUpDomId(h.id),haveCallback:h.haveCallback,width:"group"===h.type?500:void 0,dir:h.dir,type:h.type,props:h.props,padding:(0,u.F)().flowchart.padding};if("group"!==k.type)e=(c=await (0,o.e)(s,k,h.dir)).node().getBBox();else{i.createElementNS("http://www.w3.org/2000/svg","text");let{shapeSvg:n,bbox:t}=await (0,o.l)(s,k,void 0,!0);w.width=t.width,w.wrappingWidth=(0,u.F)().flowchart.wrappingWidth,w.height=t.height,w.labelNode=n.node(),k.labelData=w}let y={id:h.id,ports:"diamond"===h.type?g:[],layoutOptions:v,labelText:b,labelData:w,domId:r.db.lookUpDomId(h.id),width:null==e?void 0:e.width,height:null==e?void 0:e.height,type:h.type,el:c,parent:a.parentById[h.id]};d[k.id]=y})),c},p=(n,t,e)=>{let i={TB:{in:{north:"north"},out:{south:"west",west:"east",east:"south"}},LR:{in:{west:"west"},out:{east:"south",south:"north",north:"east"}},RL:{in:{east:"east"},out:{west:"north",north:"south",south:"west"}},BT:{in:{south:"south"},out:{north:"east",east:"west",west:"north"}}};return i.TD=i.TB,i[e][t][n]},m=(n,t,e)=>{if((0,u.l).info("getNextPort",{node:n,edgeDirection:t,graphDirection:e}),!b[n])switch(e){case"TB":case"TD":b[n]={inPosition:"north",outPosition:"south"};break;case"BT":b[n]={inPosition:"south",outPosition:"north"};break;case"RL":b[n]={inPosition:"east",outPosition:"west"};break;case"LR":b[n]={inPosition:"west",outPosition:"east"}}let i="in"===t?b[n].inPosition:b[n].outPosition;return"in"===t?b[n].inPosition=p(b[n].inPosition,t,e):b[n].outPosition=p(b[n].outPosition,t,e),i},v=(n,t)=>{let e=n.start,i=n.end,r=e,a=i,c=d[e],o=d[i];return c&&o?("diamond"===c.type&&(e=`${e}-${m(e,"out",t)}`),"diamond"===o.type&&(i=`${i}-${m(i,"in",t)}`),{source:e,target:i,sourceId:r,targetId:a}):{source:e,target:i}},k=function(n,t,e,i){let r,a;(0,u.l).info("abc78 edges = ",n);let s=i.insert("g").attr("class","edgeLabels"),h={},f=t.db.getDirection();if(void 0!==n.defaultStyle){let t=(0,u.k)(n.defaultStyle);r=t.style,a=t.labelStyle}return n.forEach(function(t){let i="L-"+t.start+"-"+t.end;void 0===h[i]?h[i]=0:h[i]++,(0,u.l).info("abc78 new entry",i,h[i]);let l=i+"-"+h[i];(0,u.l).info("abc78 new link id to be used is",i,l,h[i]);let b="LS-"+t.start,d="LE-"+t.end,g={style:"",labelStyle:""};switch(g.minlen=t.length||1,"arrow_open"===t.type?g.arrowhead="none":g.arrowhead="normal",g.arrowTypeStart="arrow_open",g.arrowTypeEnd="arrow_open",t.type){case"double_arrow_cross":g.arrowTypeStart="arrow_cross";case"arrow_cross":g.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":g.arrowTypeStart="arrow_point";case"arrow_point":g.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":g.arrowTypeStart="arrow_circle";case"arrow_circle":g.arrowTypeEnd="arrow_circle"}let p="",m="";switch(t.stroke){case"normal":p="fill:none;",void 0!==r&&(p=r),void 0!==a&&(m=a),g.thickness="normal",g.pattern="solid";break;case"dotted":g.thickness="normal",g.pattern="dotted",g.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":g.thickness="thick",g.pattern="solid",g.style="stroke-width: 3.5px;fill:none;"}if(void 0!==t.style){let n=(0,u.k)(t.style);p=n.style,m=n.labelStyle}g.style=g.style+=p,g.labelStyle=g.labelStyle+=m,void 0!==t.interpolate?g.curve=(0,u.n)(t.interpolate,c.curveLinear):void 0!==n.defaultInterpolate?g.curve=(0,u.n)(n.defaultInterpolate,c.curveLinear):g.curve=(0,u.n)(w.curve,c.curveLinear),void 0===t.text?void 0!==t.style&&(g.arrowheadStyle="fill: #333"):(g.arrowheadStyle="fill: #333",g.labelpos="c"),g.labelType=t.labelType,g.label=t.text.replace(u.e.lineBreakRegex,"\n"),void 0===t.style&&(g.style=g.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),g.labelStyle=g.labelStyle.replace("color:","fill:"),g.id=l,g.classes="flowchart-link "+b+" "+d;let k=(0,o.f)(s,g),{source:y,target:M,sourceId:T,targetId:j}=v(t,f);(0,u.l).debug("abc78 source and target",y,M),e.edges.push({id:"e"+t.start+t.end,sources:[y],targets:[M],sourceId:T,targetId:j,labelEl:k,labels:[{width:g.width,height:g.height,orgWidth:g.width,orgHeight:g.height,text:g.label,layoutOptions:{"edgeLabels.inline":"true","edgeLabels.placement":"CENTER"}}],edgeData:g})}),e},y=function(n,t,e,i,r){let a="";i&&(a=(a=(a=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),(0,o.m)(n,t,a,r,e)},M=function(n){let t={parentById:{},childrenById:{}},e=n.getSubGraphs();return(0,u.l).info("Subgraphs - ",e),e.forEach(function(n){n.nodes.forEach(function(e){t.parentById[e]=n.id,void 0===t.childrenById[n.id]&&(t.childrenById[n.id]=[]),t.childrenById[n.id].push(e)})}),e.forEach(function(n){n.id,void 0!==t.parentById[n.id]&&t.parentById[n.id]}),t},T=function(n,t,e){let i=f(n,t,e);if(void 0===i||"root"===i)return{x:0,y:0};let r=d[i].offset;return{x:r.posX,y:r.posY}},j=function(n,t,e,i,r,a){let u=T(t.sourceId,t.targetId,r),s=t.sections[0].startPoint,h=t.sections[0].endPoint,f=(t.sections[0].bendPoints?t.sections[0].bendPoints:[]).map(n=>[n.x+u.x,n.y+u.y]),l=[[s.x+u.x,s.y+u.y],...f,[h.x+u.x,h.y+u.y]],{x:b,y:w}=(0,o.k)(t.edgeData),d=(0,c.line)().x(b).y(w).curve(c.curveLinear),g=n.insert("path").attr("d",d(l)).attr("class","path "+e.classes).attr("fill","none"),p=n.insert("g").attr("class","edgeLabel"),m=(0,c.select)(p.node().appendChild(t.labelEl)),v=m.node().firstChild.getBoundingClientRect();m.attr("width",v.width),m.attr("height",v.height),p.attr("transform",`translate(${t.labels[0].x+u.x}, ${t.labels[0].y+u.y})`),y(g,e,i.type,i.arrowMarkerAbsolute,a)},E=(n,t)=>{n.forEach(n=>{n.children||(n.children=[]);let e=t.childrenById[n.id];e&&e.forEach(t=>{n.children.push(d[t])}),E(n.children,t)})},S=async function(n,t,e,i){var r;let a,s;i.db.clear(),d={},b={},i.db.setGen("gen-2"),i.parser.parse(n);let h=(0,c.select)("body").append("div").attr("style","height:400px").attr("id","cy"),f={id:"root",layoutOptions:{"elk.hierarchyHandling":"INCLUDE_CHILDREN","org.eclipse.elk.padding":"[top=100, left=100, bottom=110, right=110]","elk.layered.spacing.edgeNodeBetweenLayers":"30","elk.direction":"DOWN"},children:[],edges:[]};switch((0,u.l).info("Drawing flowchart using v3 renderer",l),i.db.getDirection()){case"BT":f.layoutOptions["elk.direction"]="UP";break;case"TB":f.layoutOptions["elk.direction"]="DOWN";break;case"LR":f.layoutOptions["elk.direction"]="RIGHT";break;case"RL":f.layoutOptions["elk.direction"]="LEFT"}let{securityLevel:w,flowchart:p}=(0,u.F)();"sandbox"===w&&(a=(0,c.select)("#i"+t));let m="sandbox"===w?(0,c.select)(a.nodes()[0].contentDocument.body):(0,c.select)("body"),v="sandbox"===w?a.nodes()[0].contentDocument:document,y=m.select(`[id="${t}"]`);(0,o.a)(y,["point","circle","cross"],i.type,t);let T=i.db.getVertices(),S=i.db.getSubGraphs();(0,u.l).info("Subgraphs - ",S);for(let n=S.length-1;n>=0;n--)s=S[n],i.db.addVertex(s.id,{text:s.title,type:s.labelType},"group",void 0,s.classes,s.dir);let C=y.insert("g").attr("class","subgraphs"),I=M(i.db);f=await g(T,t,m,v,i,I,f);let O=y.insert("g").attr("class","edges edgePath");f=k(i.db.getEdges(),i,f,y),Object.keys(d).forEach(n=>{let t=d[n];t.parent||f.children.push(t),void 0!==I.childrenById[n]&&(t.labels=[{text:t.labelText,layoutOptions:{"nodeLabels.placement":"[H_CENTER, V_TOP, INSIDE]"},width:t.labelData.width,height:t.labelData.height}],delete t.x,delete t.y,delete t.width,delete t.height)}),E(f.children,I),(0,u.l).info("after layout",JSON.stringify(f,null,2));let A=await l.layout(f);P(0,0,A.children,y,C,i,0),(0,u.l).info("after layout",A),null==(r=A.edges)||r.map(n=>{j(O,n,n.edgeData,i,I,t)}),(0,u.o)({},y,p.diagramPadding,p.useMaxWidth),h.remove()},P=(n,t,e,i,r,a,c)=>{e.forEach(function(e){if(e){if(d[e.id].offset={posX:e.x+n,posY:e.y+t,x:n,y:t,depth:c,width:e.width,height:e.height},"group"===e.type){let i=r.insert("g").attr("class","subgraph");i.insert("rect").attr("class","subgraph subgraph-lvl-"+c%5+" node").attr("x",e.x+n).attr("y",e.y+t).attr("width",e.width).attr("height",e.height);let a=i.insert("g").attr("class","label"),o=(0,u.F)().flowchart.htmlLabels?e.labelData.width/2:0;a.attr("transform",`translate(${e.labels[0].x+n+e.x+o}, ${e.labels[0].y+t+e.y+3})`),a.node().appendChild(e.labelData.labelNode),(0,u.l).info("Id (UGH)= ",e.type,e.labels)}else(0,u.l).info("Id (UGH)= ",e.id),e.el.attr("transform",`translate(${e.x+n+e.width/2}, ${e.y+t+e.height/2})`)}}),e.forEach(function(e){e&&"group"===e.type&&P(n+e.x,t+e.y,e.children,i,r,a,c+1)})},C=n=>{let t="";for(let e=0;e<5;e++)t+=`
      .subgraph-lvl-${e} {
        fill: ${n[`surface${e}`]};
        stroke: ${n[`surfacePeer${e}`]};
      }
    `;return t},I={db:a.d,renderer:{getClasses:function(n,t){return(0,u.l).info("Extracting classes"),t.db.getClasses()},draw:S},parser:a.p,styles:n=>`.label {
    font-family: ${n.fontFamily};
    color: ${n.nodeTextColor||n.textColor};
  }
  .cluster-label text {
    fill: ${n.titleColor};
  }
  .cluster-label span {
    color: ${n.titleColor};
  }

  .label text,span {
    fill: ${n.nodeTextColor||n.textColor};
    color: ${n.nodeTextColor||n.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${n.mainBkg};
    stroke: ${n.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${n.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${n.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${n.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${n.edgeLabelBackground};
    rect {
      opacity: 0.85;
      background-color: ${n.edgeLabelBackground};
      fill: ${n.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${n.clusterBkg};
    stroke: ${n.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${n.titleColor};
  }

  .cluster span {
    color: ${n.titleColor};
  }
  /* .cluster div {
    color: ${n.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${n.fontFamily};
    font-size: 12px;
    background: ${n.tertiaryColor};
    border: 1px solid ${n.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${n.textColor};
  }
  .subgraph {
    stroke-width:2;
    rx:3;
  }
  // .subgraph-lvl-1 {
  //   fill:#ccc;
  //   // stroke:black;
  // }

  .flowchart-label text {
    text-anchor: middle;
  }

  ${C(n)}
//# sourceMappingURL=flowchart-elk-definition-4a651766.c0afce78.js.map