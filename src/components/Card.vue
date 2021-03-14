<template>
  <!-- <div id="card" :style="{ '--clipPath': clipPathStyle }"> -->
  <div id="card">
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
    <defs>
    <clipPath id="clipping">
      <path :d="clipPathStyle" />
    </clipPath>
  </defs>
    </svg>
    <slot></slot>
  </div>
</template>

<script>
function deg2rad(degree) {
  return (degree / 180.0) * Math.PI;
}
function genPath(angle, xStart, roundSizeLeft, roundSize, width, height) {
  const C = roundSizeLeft * Math.tan(deg2rad(angle / 2.0));
  const A = C * Math.cos(deg2rad(angle));
  const B = C * Math.sin(deg2rad(angle));
  const D = roundSizeLeft * Math.tan(deg2rad((90 - angle) / 2.0));
  const E = D * Math.cos(deg2rad(angle));
  const F = C * Math.sin(deg2rad(angle));
  let startPointX = xStart - A;
  let startPointY = B;
  let yStart = xStart * Math.tan(deg2rad(angle));
  let pathStr = `M${startPointX},${startPointY}`;
  pathStr += `a${roundSizeLeft},${roundSizeLeft},0,0,1,${A + C},${-B}`;
  pathStr += `h${width - xStart - C -roundSize}`;
  pathStr += `a${roundSize},${roundSize},0,0,1,${roundSize},${roundSize}`;
  pathStr += `v${height - 2 * roundSize}`;
  pathStr += `a${roundSize},${roundSize},0,0,1,${-roundSize},${roundSize}`;
  pathStr += `H${roundSize}`;
  pathStr += `a${roundSize},${roundSize},0,0,1,${-roundSize},${-roundSize}`;
  pathStr += `V${yStart + D}`;
  pathStr += `a${roundSizeLeft},${roundSizeLeft},0,0,1,${E},${-D - F}`;
  pathStr += "Z";
  return pathStr;
}

function vh2px(v) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
}

function vw2px(v) {
  var w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (v * w) / 100;
}

function vmin2px(v) {
  return Math.min(vh2px(v), vw2px(v));
}

function vmax2px(v) {
  return Math.max(vh2px(v), vw2px(v));
}
function processString(unitString) {
  if (unitString.includes("px")) {
    let s = unitString.slice(0, -2);
    return parseFloat(s);
  }
  if (unitString.includes("vh")) {
    let s = unitString.slice(0, -2);
    return vh2px(parseFloat(s));
  }
  if (unitString.includes("vw")) {
    let s = unitString.slice(0, -2);
    return vw2px(parseFloat(s));
  }
  if (unitString.includes("vmin")) {
    let s = unitString.slice(0, -2);
    return vmin2px(parseFloat(s));
  }
  if (unitString.includes("vmax")) {
    let s = unitString.slice(0, -2);
    return vmax2px(parseFloat(s));
  }
  if (unitString.includes("%")) {
    let s = unitString.slice(0, -1);
    return vw2px(parseFloat(s));
  }
  return 0; //error
}
export default {
  name: "Card",
  props: {
    angle: {
      type: Number,
      default: 40,
    },
    xStart: {
      type: String,
      default: "20.25px",
    },
    roundSizeLeft: {
      type: String,
      default: "5px",
    },
    roundSize: {
      type: String,
      default: "5px",
    },
    wid: {
      type: String,
      default: "375px",
    },
    hei: {
      type: String,
      default: "",
    },
  },
  methods: {
    listenResize() {
      "窗口大小改变时的操作";
      //this.clipPathStyle = "path('" + this.dPath() + "')";
      this.clipPathStyle = this.dPath();
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.listenResize);
  },
  data() {
    return {
      clipPathStyle() {
        return "M50.21624234808966,3.846229355124001a16.44,16.44,0,0,1,10.567428303246707,-3.846229355124001h487.21632934866363a7.2884,7.2884,0,0,1,7.2884,7.2884v487.4232a7.2884,7.2884,0,0,1,-7.2884,7.2884H7.2884a7.2884,7.2884,0,0,1,-7.2884,-7.2884V53.64875768858312a16.44,16.44,0,0,1,5.872571696753293,-11.512327255192178Z";
      },
      dPath() {
        let xStart = processString(this.xStart);
        let roundSize = processString(this.roundSize);
        let roundSizeLeft = processString(this.roundSizeLeft);
        let wid = processString(this.wid);
        let hei = "";
        if (this.hei == "") {
          //console.log(this.$parent);
          hei = processString(this.$el.clientHeight + "px");
        } else {
          hei = processString(this.hei);
        }
        return genPath(this.angle, xStart, roundSizeLeft, roundSize, wid, hei);
      },
    };
  },
  mounted() {
    //this.clipPathStyle = "path('" + this.dPath() + "')";
    this.clipPathStyle = this.dPath();
    window.addEventListener("resize", this.listenResize);
  },
};
</script>

<style lang="scss" scoped>
#card {
  //clip-path: var(--clipPath) !important;
  clip-path: url(#clipping) !important;
}
</style>