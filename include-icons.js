/*include-icons.js Copyright oxmc 2022-present*/

/* Check if in browser env */
if (typeof document === 'undefined') {
  throw new Error('`SlimIconsInit()` only works in a browser environment.');
};
/* Icons svg json */
var iconsjson = `{"alertcircle": "<svg width='54' height='54' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='27' cy='27' r='25.5' stroke='black' stroke-width='3'/><line x1='27' y1='42' x2='27' y2='20' stroke='black' stroke-width='2'/><line x1='27' y1='16' x2='27' y2='14' stroke='black' stroke-width='2'/></svg>", "github": "<svg height='32' aria-hidden='true' viewBox='0 0 16 16' version='1.1' width='32' data-view-component='true' style='filter: invert(99%) sepia(1%) saturate(2%) hue-rotate(259deg) brightness(104%) contrast(100%);'><path fill-rule='evenodd' d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
</svg>"}`;
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
function SlimIconsInit(opts) {
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
  Array.from(elementsToReplace).forEach(element => {
    if (opts.debug == true) {
      console.log(element)
    }
    replaceElement(element, opts)
  });
  if (opts.debug == true) {
    console.log("Done!");
  };
};
