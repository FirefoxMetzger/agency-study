<template>
  <div class="md-layout md-alignment-center-center">
    <div class="md-layout-item md-size-100">
      <h2>Thank You For Participating</h2>
    </div>
    <div class="md-layout-item md-size-100">
      Your response has been recorded and you may now close this window.
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
