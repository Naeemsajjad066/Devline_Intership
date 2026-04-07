// import React from 'react';

// import Hoc from './HighOrderComponent/Hoc'
// import Loc from './HighOrderComponent/Loc'

// const NewComponent = Hoc(Loc)

// export default NewComponent

import Hoc from './Hoc'
import Loc from './Loc'

const WrappedLoc = Hoc(Loc)

function NewComponent() {
  return <WrappedLoc />
}

export default NewComponent