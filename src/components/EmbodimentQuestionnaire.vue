<template>
  <div class="md-layout md-alignment-center-center">
    <div class="md-layout-item md-layout md-alignment-center-space-around md-size-100 robot-display">
      <Embodiment class="md-layout-item md-size-30" :title="robots.nao.name" :src="robots.nao.image">
      </Embodiment>
      <Embodiment class="md-layout-item md-size-30" :title="robots.nao.name" :src="robots.nao.image">
      </Embodiment>
      <Embodiment class="md-layout-item md-size-30" :title="robots.nao.name" :src="robots.nao.image">
      </Embodiment>
    </div>
    <div class="md-layout-item md-size-95">
      <div>
        <p align="left">
          In this questionnaire you are asked to order above robots based on the criteria desired.
          The left most item is considered to be highest in the desired capacity, whereas the right most
          is considered the lowest.
        </p>
      </div>
      <RankingScale>
      <RankingQuestion v-for="(question,name,index) in form2" :key="index"
        :class="`index-mod-${index % 2}`" v-model="question.response">
        <p v-html="question.text"></p>
      </RankingQuestion>
    </RankingScale>
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
import Embodiment from './Embodiment'
import RankingScale from './RankingScale'
import RankingQuestion from './RankingQuestion'

let options = [
  'nao',
  'nao2',
  'nao3'
]

export default {
  components: {
    LikertScale,
    Question,
    Embodiment,
    RankingScale,
    RankingQuestion
  },
  data () {
    return {
      robots: {
        nao: {
          image: '/static/NAO.png',
          icon: '/static/NAO icon.png',
          name: 'NAO'
        }
      },
      descriptions: {
        mentalized: 'This is a small description.'
      },
      form2: {
        'Communication': {
          text: 'Which character is more capable of <b>conveying thoughts or feelings to others</b>?',
          response: options.slice()
        },
        'Consciousness': {
          text: 'Which character is more capable of <b>having experiences and being aware of things</b>?',
          response: options.slice()
        },
        'Desire': {
          text: 'Which Character is more capable of <b>longing or hoping for things</b>?',
          response: options.slice()
        },
        'Embarrassment': {
          text: 'Which character is more capable of <b>experiencing embarrassment</b>?',
          response: options.slice()
        },
        'Emotion Recognition': {
          text: 'Which character is more capable of <b>understanding how others are feeling</b>?',
          response: options.slice()
        },
        'Fear': {
          text: 'Which character is more capable of <b>feeling afraid or fearful</b>?',
          response: options.slice()
        },
        'Hunger': {
          text: 'Which character is more capable of <b>capable of feeling hungry</b>?',
          response: options.slice()
        },
        'Joy': {
          text: 'Which character is more capable of <b>experiencing joy</b>?',
          response: options.slice()
        },
        'Memory': {
          text: 'Which character is more capable of <b>remembering things</b>?',
          response: options.slice()
        },
        'Morality': {
          text: 'Which character is more capable of <b>telling right from wrong and trying to do the right thing</b>?',
          response: options.slice()
        },
        'Pain': {
          text: 'Which character is more capable of <b>experiencing physical or emotional pain</b>?',
          response: options.slice()
        },
        'Personality': {
          text: 'Which character is more capable of <b>having personality traits that make it unique from others</b>?',
          response: options.slice()
        },
        'Planning': {
          text: 'Which character is more capable of <b>making plans and working toward a goal</b>?',
          response: options.slice()
        },
        'Pleasure': {
          text: 'Which character is more capable of <b>experiencing physical or emotional pleasure</b>?',
          response: options.slice()
        },
        'Pride': {
          text: 'Which character is more capable of <b>experiencing pride</b>?',
          response: options.slice()
        },
        'Rage': {
          text: 'Which character is more capable of <b>capable of experencing violent or uncontrolled anger</b>?',
          response: options.slice()
        },
        'Self control': {
          text: 'Which character is more capable of <b>exercising self-restraint over desired, emotions, or impulses</b>?',
          response: options.slice()
        },
        'Thought': {
          text: 'Which character is more capable of <b>thinking</b>?',
          response: options.slice()
        }
      }
    }
  },
  methods: {
    submit: function () {
      this.$router.push({path: 'description'})
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
</style>
