<template>
  <div>
    <h2>表单修饰符</h2>
    <div>
      <div>
        <p>.lazy修饰符：我们输入完所有东西，光标才离开更新视图，相当于在onChange事件触发更新</p>
        <input type="text" v-model.lazy="form.lazy">
        <span>{{form.lazy}}</span>
      </div>
      <div>
        <p>.trim修饰符：去除首尾空格，注意中间的空格是不会过滤的</p>
        <input type="text" v-model.trim="form.trim">
        <span>{{form.trim}}</span>
      </div>
      <div>
        <p>.number修饰符：如果先输入数字，那它就会限制只能输入数字；如果险输入字符，那它就相当于没有加 .number</p>
        <input type="text" v-model.number="form.number">
        <span>{{form.number}}</span>
      </div>
    </div>
    <h2>事件修饰符</h2>
    <div>
      <div>
        <p>.stop修饰符：阻止事件冒泡，相当于event.stopPropagation()方法</p>
        <div @click="consoleHandler('parent')">
          <button @click.stop="consoleHandler('child')">阻止</button>
        </div>
        <div @click="consoleHandler('parent')">
          <button @click="consoleHandler('child')">不阻止</button>
        </div>
      </div>
      <hr>
      <div>
        <p>.prevent修饰符：阻止事件的默认行为，相当于event.preventDefault()方法</p>
        <form v-on:submit="alert('who')" action="first_submit" method="get" accept-charset="utf-8">
          现在的submit会进行数据提交，和跳转
          <input type="submit" name="">
        </form>
        <form v-on:submit.prevent="alertHandler('hello prevent')" action="first_submit" method="get" accept-charset="utf-8">
          加上.prevent后，阻止数据提交，和跳转
          <input type="submit" name="">
        </form>
      </div>
      <p class="careful">注意：修饰符可以同时使用多个,但是可能会因为顺序而有所不同。
        用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
      </p>
      <hr>
      <div>
        <p>.self修饰符：只当事件是从事件绑定的元素本身触发时才触发回调</p>
        <div @click="consoleHandler('parent')">
          <button @click="consoleHandler('child')">不加self</button>
        </div>
        <div @click.self="consoleHandler('parent')">
          <button @click="consoleHandler('child')">加上self</button>
        </div>
      </div>
      <hr>
      <div>
        <p>.once修饰符：只能用一次，绑定了事件以后只能触发一次，第二次就不会触发。</p>
        <button @click.once="consoleHandler('once')">once</button>
      </div>
      <hr>
      <div>
        <p>.capture修饰符：完整的事件机制是：捕获阶段--目标阶段--冒泡阶段。</p>
        <p>默认事件触发是从目标开始往上冒泡。</p>
        <p>当我们加了这个.capture以后呢，我们就反过来了，事件触发从包含这个元素的顶层开始往下触发。</p>
        <div @click.capture="consoleHandler(4)">
          <div @click.capture="consoleHandler(3)">
            <div @click="consoleHandler(2)">
              <div @click.capture="consoleHandler(1)">
                <button>capture(输出4312)</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div>
        <p>.passive修饰符：当我们在监听元素滚动事件的时候，会一直触发onscroll事件，在pc端是没啥问题的，但是在移动端，会让我们的网页变卡。</p>
        <p>因此我们使用这个修饰符的时候，相当于给onscroll事件整了一个.lazy修饰符</p>
        <p>【浏览器只有等内核线程执行到事件监听器对应的JavaScript代码时，才能知道内部是否会调用preventDefault函数来阻止事件的默认行为，所以浏览器本身是没有办法对这种场景进行优化的。
          这种场景下，用户的手势事件无法快速产生，会导致页面无法快速执行滑动逻辑，从而让用户感觉到页面卡顿。】</p>
        <p>通俗点说就是每次事件产生，浏览器都会去查询一下是否有preventDefault阻止该次事件的默认动作。我们加上passive就是为了告诉浏览器，不用查询了，我们没用preventDefault阻止默认动作。</p>
        <p>这里一般用在滚动监听，@scoll，@touchmove 。因为滚动监听过程中，移动每个像素都会产生一次事件，每次都使用内核线程查询prevent会使滑动卡顿。我们通过passive将内核线程查询跳过，可以大大提升滑动的流畅度。</p>
        <div style="width: 50px; height: 50px; overflow: scroll; text-overflow: clip; word-wrap: break-word; word-break: break-all;" 
          v-on:scroll.passive="onScroll">
          1231231111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        </div>
      </div>
      <hr>
      <div>
        <p>.native修饰符：我们经常会写很多的小组件，有些小组件可能会绑定一些事件，但是，像下面这样绑定事件是不会触发的。</p>
        <code> {{native.preCodeStr}} </code>
        <my-component @click="consoleHandler('im .native')"></my-component>
        <p>必须使用.native来修饰这个click事件（即），可以理解为该修饰符的作用就是把一个vue组件转化为一个普通的HTML标签。</p>
        <code> {{native.preCodeStr}} </code>
        <my-component @click.native="consoleHandler('im .native')"></my-component>
      </div>
      <hr>
    </div>

    <h2>鼠标按钮修饰符</h2>
    <div>
      <p>.left 左键点击</p>
      <p>.right 右键点击</p>
      <p>.middle 中键点击</p>
    </div>

    <h2>v-bind修饰符</h2>
    <div>
      <div>
        <p>.sync</p>
        <p>在有些情况下，我们可能需要对一个 prop 进行“双向绑定”。</p>
        <p>不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以修改父组件，且在父组件和子组件都没有明显的改动来源。</p>
        <p>我们通常的做法是：</p>
        <!-- 父组件 -->
        <sync-cmp :message="parMessage" @update:message="changeMessage"></sync-cmp>

        <p>现在这个.sync修饰符就是简化了上面的步骤</p>
        <sync-cmp :message.sync="parMessage"></sync-cmp>
      </div>
    </div>
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue'
import SyncCmp from './SyncCmp.vue'
export default {
  data() {
    return {
      form: {
        lazy: '',
        trim: '',
        number: ''
      },
      native: {
        preCodeStr: `<my-component @click="consoleHandler('im .native')"></my-component>`,
        nowCodeStr: `<my-component @click.native="consoleHandler('im .native')"></my-component>`
      },
      parMessage: 'parent'
    };
  },
  methods: {
    consoleHandler(str){
      console.log(str);
    },
    alertHandler(str){
      alert(str);
    },
    onScroll(){
      console.log('scroll~~');
    },
    changeMessage(val){
      this.message = val;
    }
  },
  components: {
    MyComponent,
    SyncCmp
  }
};
</script>

<style scoped>

</style>
