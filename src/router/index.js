import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PreQuestionnaire from '@/components/PreQuestionnaire'
import EmbodimentQuestionnaire from '@/components/EmbodimentQuestionnaire'
import DescriptionQuestionnaire from '@/components/DescriptionQuestionnaire'
import Introduction from '@/components/Introduction'
import ThankYou from '@/components/ThankYou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/meta',
      name: 'Metadata',
      component: PreQuestionnaire
    },
    {
      path: '/embodiment',
      name: 'Embodiment',
      component: EmbodimentQuestionnaire
    },
    {
      path: '/description',
      name: 'Description',
      component: DescriptionQuestionnaire
    },
    {
      path: '/thanks',
      name: 'ThankYou',
      component: ThankYou
    },
    {
      path: '/intro',
      name: 'Introduction',
      component: Introduction
    }
  ]
})
