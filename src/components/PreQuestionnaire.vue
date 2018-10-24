<template>
  <div class="md-layout md-alignment-center-center">
    <div class="md-layout-item md-size-90 md-elevation-1">
      <p>
        Before we begin, please answer some general questions about you.
        (This will be TIPI and NARS)
      </p>
    </div>
    <div class="md-layout-item md-size-95 md-elevation-1">
      <p align="left">
        Please use the buttons to indicate how much you agree or disagree with each statement below.
      </p>
      <LikertScale>
        <Question v-for="(question, name, index) in form" :key="index" :class="`index-mod-${index % 2}`"
          v-model="question.response">{{question.text}}</Question>
      </LikertScale>
    </div>
    <div class="md-layout-item md-size-95 md-elevation-1">
      <p align="left">
        Here are a number of personality traits that may or may not apply to you.
        Please select the appropriate button for each statement to indicate the extent to which you
        agree or disagree with that statement.
        You should rate the extent to which the pair of traits applies to you, even if
        one characteristic applies more strongly than the other.
      </p>
      <LikertScale :points="tipi_ticks.length - 1" :ticks="tipi_ticks">
        <Question v-for="(question, name, index) in form2" :key="index" :class="`index-mod-${index % 2}`"
          :points="tipi_ticks.length - 1" v-model="question.response">
          {{question.text}}
        </Question>
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
          text: 'I feel that if I depend on robots too much, something bad might happen',
          response: null
        },
        'q2': {
          text: 'I am concerned that robots would be a bad influence on children',
          response: null
        },
        'q3': {
          text: 'I would hate the idea that robots or artificial intelligences were making judgements about things',
          response: null
        },
        'q4': {
          text: 'I would feel uneasy if robots really had emotions',
          response: null
        },
        'q5 Reversed': {
          text: 'I feel comforted being with robots that have emotion*',
          response: null
        },
        'q6 Reversed': {
          text: 'I would feel relaxed talking with robots*',
          response: null
        },
        'q7 Reversed': {
          text: 'If robots had emotions I would be able to make friends with them*',
          response: null
        },
        'q8': {
          text: 'I would feel paranoid talking with a robot',
          response: null
        },
        'q9': {
          text: 'I would feel very nervous just standing in front of a robot',
          response: null
        },
        'q10': {
          text: 'I would feel uneasy if I was given a job where I had to use robots',
          response: null
        },
        'q11': {
          text: 'Something bad might happen if robots developed into living beings',
          response: null
        }
      },
      form2: {
        'Extraversion': {
          text: 'I see myself as Extraverted, enthusiastic',
          response: null
        },
        'Agreeableness Reversed': {
          text: 'I see myself as Critical, quarrelsome',
          response: null
        },
        'Conscientiousness': {
          text: 'I see myself as Dependable, self-disciplined',
          response: null
        },
        'Emotional Stability Reversed': {
          text: 'I see myself as Anxious, easily upset.',
          response: null
        },
        'Openness to Experiences': {
          text: 'I see myself as Open to new experiences, complex.',
          response: null
        },
        'Extraversion Reversed': {
          text: 'I see myself as Reserved, quiet.',
          response: null
        },
        'Agreeableness': {
          text: 'I see myself as Sympathetic, warm.',
          response: null
        },
        'Conscientiousness Reversed': {
          text: 'I see myself as Disorganized, careless.',
          response: null
        },
        'Emotional Stability': {
          text: 'I see myself as Calm, emotionally stable.',
          response: null
        },
        'Openness to Experiences Reversed': {
          text: 'I see myself as Conventional, uncreative.',
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
    submit: function () {
      this.$router.push({path: 'embodiment'})
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
  padding: 5px;
}
</style>
