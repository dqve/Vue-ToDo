<template>
  <div class="stats">
    <h1>{{ mssg }}</h1>
    <hr><br>
      <ul>
        <li v-for="(done, index) in dones" v-bind:key="index">
          {{ done }}
          <button v-on:click="removeDon(index)" class="am"><svg id="i-trash" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
</svg></button>
        </li>
      </ul>
      <p>There are currently {{ countLinks }} tasks pending</p>
      <p>There are currently {{ countDones }} tasks completed</p>
      <button v-on:click="removeAllLinks" class="how">Clear Pending List</button>
      <button v-on:click="removeAllDones" class="how">Clear Completed List</button>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Stats',
  data() {
    return {
      msg: ''
    }
  },
  computed: {
   ...mapState([
    'mssg',
    'dones'
   ]),
   ...mapGetters([
    'countLinks',
    'countDones'
   ]),
  },
  methods: {
    ...mapMutations([
      'REMOVE_ALL',
      'REMOVE_DONE',
      'REMOVE_ONE'
      ]),
    ...mapActions([
      'removeDone',
      'removeAll'
      ]),

    removeDon: function(done) {
      this.REMOVE_ONE(done)
    },
    removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = 'All pending todos have been removed'
      });
    },
    removeAllDones() {
      this.removeDone().then(() => {
        this.msg = 'All completed todos have been removed'
      });

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }
a {
  color: #42b983;
}
.how {
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
}
ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }
  .hell {
    width: 100%;
  }
  .am {
    float: right;
    text-transform: lowercase;
    font-size: .8em;
    background: none;
    border: none;
    padding: 5px;
    color: black;
    cursor:pointer;
  }
</style>
