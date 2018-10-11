<template>
  <div>
    <div class="md-layout md-alignment-center-space-around robot-display">
      <Embodiment class="md-layout-item md-size-30" :title="robots.nao.name" :src="robots.nao.image">{{descriptions.mentalized}}</Embodiment>
      <Embodiment class="md-layout-item md-size-30" :title="robots.nao.name" :src="robots.nao.image">{{descriptions.mentalized}}</Embodiment>
      <Embodiment class="md-layout-item md-size-30" :title="robots.nao.name" :src="robots.nao.image">{{descriptions.mentalized}}</Embodiment>
    </div>
    <LikertScale>
      <Question v-for="(question, name, index) in form" :key="index" :class="`index-mod-${index % 2}`"
        v-on:valueChanged="question.response = $event">{{question.text}}</Question>
    </LikertScale>
    <RankingScale></RankingScale>
  </div>
</template>

<script>
import LikertScale from './LikertScale'
import Question from './Question'
import Embodiment from './Embodiment'
import RankingScale from './RankingScale'

export default {
  components: {
    LikertScale,
    Question,
    Embodiment,
    RankingScale
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
