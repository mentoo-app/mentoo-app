<!--Modified from https://github.com/SinanMtl/vue-rate/blob/master/src/Rate.vue-->
<template>
  <div class="Rate" v-if="length > 0">
    <svg
      style="display:none"
      width="0"
      height="0"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="icon-star-none" viewBox="0 0 12 12">
          <path
            fill="#c4c3c0"
            d="M12.01 4.37L8.3 7.06l1.42 4.37-3.71-2.7-3.71 2.7 1.42-4.37L0 4.37h4.59L6.01 0l1.42 4.37z"
          />
        </symbol>
        <symbol id="icon-star-full" viewBox="0 0 12 12">
          <path
            fill="#5eb548"
            d="M12.01 4.37L8.3 7.06l1.42 4.37-3.71-2.7-3.71 2.7 1.42-4.37L0 4.37h4.59L6.01 0l1.42 4.37z"
          />
        </symbol>
        <symbol id="icon-star-empty" viewBox="0 0 24 24">
          <path
            fill="#5fbf44"
            d="M11.79 0L9 8.56H0l7.27 5.282L4.5 22.39l7.28-5.28 7.32 5.28-2.82-8.55 7.28-5.28h-9zm-.03 4.05l1.869 5.76h6.06l-4.9 3.561 1.871 5.76-4.89-3.56-4.9 3.56 1.87-5.77-4.89-3.56.029.01h6z"
          ></path>
        </symbol>
        <symbol id="icon-star-half" viewBox="0 0 12 12">
          <path
            fill="#5eb548"
            d="M3.72 7.06L2.3 11.43l3.71-2.7V0L4.59 4.37H0z"
          />
          <path
            fill="#c4c3c0"
            d="M7.43 4.37L6.01 0v8.73l3.71 2.7L8.3 7.06l3.71-2.69z"
          />
        </symbol>
      </defs>
    </svg>
    <input type="hidden" :name="name" v-model="rate" :required="required" />
    <template v-for="n in length">
      <button
        type="button"
        :key="n"
        class="Rate__star"
        @click="setRate(n)"
        :disabled="disabled"
        :style="{'width':buttonSize, 'height':buttonSize }"
      >
        <svg class="icon" :style="{'width':starSize, 'height':starSize }">
          <use :xlink:href="iconRef(n)"></use>
        </svg>
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: "rate",
  props: {
    value: { default: 0, type: [Number, String] },
    name: { type: String, default: "rate" },
    length: { default: 5, type: Number },
    required: { type: Boolean },
    disabled: { type: Boolean, default: false },
    buttonSize:{ type:String, default: '20px' },
    starSize:{ type:String, default:'16px' }
  },
  data() {
    return {
      over: 0,
      rate: 0
    };
  },
  methods: {
    convertValue(value) {
      if (value >= this.length) {
        value = this.length;
      } else if (value < 0) {
        value = 0;
      }
      return value;
    },
    onOver(index) {
      if (!this.readonly) this.over = index;
    },
    onOut() {
      if (!this.readonly) this.over = this.rate;
    },
    setRate(index) {
      if (this.readonly) return false;
      this.$emit("before-rate", this.rate);
      this.rate = index;
      this.$emit("input", this.rate);
      this.$emit("after-rate", this.rate);
    },
    isFilled(index) {
      //from bool to 0,0.5,1
      if (index-this.rate == 0.5) {
        return 0.5;
      } else if (this.rate - index >= 0) {
        return 1;
      } else {
        return 0;
      }
    },
    isEmpty(index) {
      return index > this.over || (!this.value && !this.over);
    },
    iconRef(index) {
      if (this.isFilled(index) == 1) {
        return "#icon-star-full";
      } else if (this.isFilled(index) == 0.5) {
        return "#icon-star-half";
      } else {
        if (this.disabled) {
          return "#icon-star-none";
        } else {
          return "#icon-star-empty";
        }
      }
    }
  },
  watch: {
    value() {
      this.rate = this.convertValue(this.value);
      this.over = this.convertValue(this.value);
    }
  },
  created() {
    if (this.value >= this.length) {
      this.value = this.length;
    } else if (this.value < 0) {
      this.value = 0;
    }
    this.rate = this.convertValue(this.value);
    this.over = this.convertValue(this.value);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.Rate__star {
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  background: transparent none;
  width: 20px;
  border: 0;
  .icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: base-line;
    position: relative;
    vertical-align: middle;
  }
}
</style>
