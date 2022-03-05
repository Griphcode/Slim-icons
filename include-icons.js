/*include-icons.js Copyright oxmc 2022-present*/

/* Check if in browser env */
if (typeof document === 'undefined') {
  throw new Error('`SlimIconsInit()` only works in a browser environment.');
};
/* Icons svg json */
var iconsjson = `{"alertcircle": "<svg width='54' height='54' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='27' cy='27' r='25.5' stroke='black' stroke-width='3'/><line x1='27' y1='42' x2='27' y2='20' stroke='black' stroke-width='2'/><line x1='27' y1='16' x2='27' y2='14' stroke='black' stroke-width='2'/></svg>"}`;
var iconsstring = JSON.stringify(iconsjson);
const icons = JSON.parse(iconsjson);
function getdata(element) {
  return Array.from(element.attributes).reduce((attrs, attr) => {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
};
function replaceElement(elem, opts) {
  const elemAttrs = getdata(elem);
  var name = elemAttrs['data-slico'];
  delete elemAttrs['data-slico'];
  if (opts.debug == true) {
    console.log(name);
  };
  name = name.replace('-', '');
  if (opts.debug == true) {
    console.log(name);
    console.log(icons[name]);
  };
  var Obj = elem; //any element to be fully replaced
  if (Obj.outerHTML) {
    Obj.outerHTML=icons[name];
  } else {
    var tmpObj=document.createElement("div");
    tmpObj.innerHTML=icons[name];
    ObjParent=Obj.parentNode;
    ObjParent.replaceChild(tmpObj,Obj);
  };
};
function SlimIconsInit(opts, attrs = {}) {
  /* Default Options */
  var defopts = {
    debug: false,
    color: "white",
    size: "normal"
  };
  /* Options: */
  if (typeof opts != "undefined") {
    /* Debug Mode: */
    if (typeof opts.debug != "undefined") {
      var debug = opts.debug;
    };
  } else {
    var opts = defopts;
  };
  /* Get elements to replace */
  const elementsToReplace = document.querySelectorAll('[data-slico]');
  /* Load Icons */
  if (ico != false) {
    Array.from(elementsToReplace).forEach(element => {
      //console.log(element),
      replaceElement(element, opts)
    });
	console.log("Done!");
  };
  var ico = false;
};
