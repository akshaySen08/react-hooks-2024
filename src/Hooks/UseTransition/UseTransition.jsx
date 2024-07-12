import React, { useState } from 'react'
import About from './About'
import Posts from './Posts'
import Contact from './Contact'

const UseTransitionComponent = () => {
    const [active, setActive] = useState('About')
    return (
        <>
            <h1>UseTransitionComponent</h1>
            <div>
                <button onClick={() => setActive('About')}>About</button>
                <button onClick={() => setActive('Posts')}>Posts</button>
                <button onClick={() => setActive('Contact')}>Contact</button>
                <br/>
                <hr/>
                {active === 'About' && <About/>}
                {active === 'Posts' && <Posts/>}
                {active === 'Contact' && <Contact/>}
            </div>
        </>

    )
}

export default UseTransitionComponent