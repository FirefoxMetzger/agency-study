<template>
  <div class="md-layout md-alignment-center-center">
    <div class="md-layout-item md-size-90 md-elevation-1">
      <p>
        Before we begin, please answer some general questions about you.
        (This will be TIPI and NARS)
      </p>
    </div>
    <div class="md-layout-item md-size-95 md-elevation-1">
      <p align="left">This is NARS</p>
      <LikertScale>
        <Question v-for="(question, name, index) in form" :key="index" :class="`index-mod-${index % 2}`"
          v-model="question.response">{{question.text}}</Question>
      </LikertScale>
    </div>
    <div class="md-layout-item md-size-95 md-elevation-1">
      <p align="left">This is TIPI</p>
      <LikertScale points=7 :ticks="tipi_ticks">
        <Question v-for="(question, name, index) in form" :key="index" :class="`index-mod-${index % 2}`"
          v-model="question.response" points=7>{{question.text}}</Question>
      </LikertScale>
    </div>
    <div class="md-layout-item">
      <md-button class="md-primary md-raised" v-on:click="submit">Submit</md-button>
    </div>
    </div>
  </div>
</template>

<script>
import LikertScale from './LikertScale'
import Question from './Question'

export default {
  components: {
    LikertScale,
    Question
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
      },
      form2: {
        'Extraversion': {
          text: 'Extraverted, enthusiastic',
          response: null
        },
        'Agreeableness Reversed': {
          text: 'Critical, quarrelsome',
          response: null
        },
        'Conscientiousness': {
          text: 'Dependable, self-disciplined',
          response: null
        },
        'Emotional Stability Reversed': {
          text: 'Anxious, easily upset.',
          response: null
        },
        'Openness to Experiences': {
          text: 'Open to new experiences, complex.',
          response: null
        },
        'Extraversion Reversed': {
          text: 'Reserved, quiet.',
          response: null
        },
        'Agreeableness': {
          text: 'Sympathetic, warm.',
          response: null
        },
        'Conscientiousness Reversed': {
          text: 'Disorganized, careless.',
          response: null
        },
        'Emotional Stability': {
          text: 'Calm, emotionally stable.',
          response: null
        },
        'Openness to Experiences Reversed': {
          text: 'Conventional, uncreative.',
          response: null
        }
      },
      tipi_ticks: [
        '',
        'Disagree strongly',
        'Disagree moderately',
        'Disagree a little',
        'Neither agree nor disagree',
        'Agree a little',
        'Agree moderately',
        'Agree strongly'
      ]
    }
  },
  methods: {
    submit: function() {
      this.$router.push({path:"embodiment"})
    }
  }
}
</script>

<style scoped>
.robot-display{
  margin-bottom: 40px;
}

.index-mod-0{

}

.index-mod-1{
  background-color: lightgray;
}

.md-layout-item{
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
