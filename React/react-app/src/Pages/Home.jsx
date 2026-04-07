import React from 'react'
import Parent from '../components/propsComponents/Parent'
import Counter from '../components/stateComponent/Counter'
import List_keys from '../components/List&keys/List_keys'
import ConditionRendering from '../components/ConditionalRendering/ConditionRendering'
import Composite from '../components/Composition/Composite'
import Dashboard from '../components/ContextApi/Dashboard'
import NewComponent from '../components/HighOrderComponent/NewComp'
import UseEffectsComp from '../components/UseEffects/UseEffectsComp'

const Home = () => {
    return (
        <div>
            <Parent />
            <List_keys />
            <ConditionRendering />
            <Composite />
            <Dashboard />
            <NewComponent />
        </div>
    )
}

export default Home
