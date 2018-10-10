<template>
  <div>
    <Embodiment></Embodiment>
    <LikertScale>
      <Question v-for="(question, name, index) in form" :key="index" :class="`index-mod-${index % 2}`"
        v-on:valueChanged="question.response = $event">{{question.text}}</Question>
    </LikertScale>
  </div>
</template>

<script>
import LikertScale from './LikertScale'
import Question from './Question'
import Embodiment from './Embodiment'

export default {
  components: {
    LikertScale,
    Question,
    Embodiment
  },
  data () {
    return {
      form: {
        'q1': {
          text: 'This is a test question that is so long that it will cause wierd formatting',
          response: null
        },
        'q2': {
          text: 'This is a test question that is so long that it will cause wierd formatting',
          response: null
        },
        'q3': {
          text: 'This is a test question that is so long that it will cause wierd formatting',
          response: null
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-mod-0{

}

.index-mod-1{
  background-color: lightgray;
}
</style>
