<template>
  <div>
    <div class="md-layout md-alignment-center-space-around robot-display">
      <Embodiment class="md-layout-item md-size-30" :title="robots.nao.name" :src="robots.nao.image">
        {{descriptions.mentalized}}
      </Embodiment>
      <Embodiment class="md-layout-item md-size-30" :title="robots.nao.name" :src="robots.nao.image">
        {{descriptions.mentalized}}
      </Embodiment>
      <Embodiment class="md-layout-item md-size-30" :title="robots.nao.name" :src="robots.nao.image">
        {{descriptions.mentalized}}
      </Embodiment>
    </div>
    <LikertScale>
      <Question v-for="(question, name, index) in form" :key="index" :class="`index-mod-${index % 2}`"
        v-model="question.response">{{question.text}}</Question>
    </LikertScale>
    <RankingScale>
      <RankingQuestion v-for="(question,name,index) in form2" :key="index" 
        :class="`index-mod-${index % 2}`" v-model="question.response">
        {{question.text}}  
      </RankingQuestion>
    </RankingScale>
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
        'q1': {
          text: 'Please order the NAOs with respect to epicness',
          response: options.slice()
        },
        'q2': {
          text: 'Feelings?',
          response: options.slice()
        },
        'q3': {
          text: 'Badass?',
          response: options.slice()
        }
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
