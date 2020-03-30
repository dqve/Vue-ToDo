<template>
  <div class="todo">
     <ul>
      <div  v-for="(link, index) in links" v-bind:key="index" >
        <li v-show="!isEditing">
          {{ link }}
<button v-on:click="removeLink(index)" class="am">
   <svg id="i-trash" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
  </svg>
 </button>
 <!-- <button v-on:click="showForm" class="am"><svg id="i-compose" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z" />
    </svg>
 </button> -->
 <button v-on:click="addDone(link)" class="rm">Complete</button>
        </li>
         
  <form @submit.prevent="editLink(index)" v-show="isEditing" v-bind:key="index">
   <input class="link-input" type="text" placeholder="Edit Task" v-model="nextLink" />
<button v-on:click="hideForm" class="am g">
 <svg id="i-close" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
   <path d="M2 30 L30 2 M30 30 L2 2" />
</svg>
</button>
  </form>
      </div>
     </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Todo',
  data() {
    return {
     nextLink: '',
     isEditing: false,
    }
  },
  computed:{
   ...mapState([
    'title',
    'links'
   ])
  },
  methods: {
    ...mapMutations([
      'ADD_DONE',
      'EDIT_LINK'
    ]),
    ...mapActions([
    'removeLink'
    ]),
    editLink: function(link) {
      this.EDIT_LINK(link, this.nextLink),
      this.nextLink = ''
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
