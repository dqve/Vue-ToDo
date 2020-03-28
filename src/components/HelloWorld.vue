<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>
      <hr><br><br>
      <form @submit.prevent="addLink">
   <input class="link-input" type="text" placeholder="Add a Task" v-model="newLink" />
</form>
     <todo />
    </div>
    <div class="right">
    <stats />
    </div>
  </div>
</template>

<script>
import Stats from '@/components/Stats.vue'
import Todo from '@/components/Todo.vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return {
     newLink: '',
     isEditing: false,
    }
  },
  components: {
  Stats,
  Todo
  },
  computed:{
   ...mapState([
    'title',
    'links'
   ])
  },
  methods: {
    ...mapMutations([
      'ADD_LINK',
      'ADD_DONE',
    ]),
    ...mapActions([
    'removeLink'
    ]),
    addLink: function() {
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    },
    addDone: function(link) {
      this.ADD_DONE(link)
    },
    removeLinks: function(link) {
      this.removeLink(link)
    },
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
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

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

  input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 50px;
    outline: none;
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
  .g{
  margin-top: 0px;
  }
  .rm {
    float: right;
    text-transform: lowercase;
    font-size: .8em;
    background: #32CD32;
    border: none;
    padding: 5px;
    color: #006400;
    cursor:pointer;
  }

</style>
