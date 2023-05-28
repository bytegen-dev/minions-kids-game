import React from 'react'

function Minion() {
  return (
    <div className='minion'>
        <div className="shadow-holder">
            <div className="shadow"></div>
            <div className="shadow"></div>
        </div>
        <div className="shadow-holder jeans-shadow">
            <div className="shadow"></div>
            <div className="shadow"></div>
        </div>
        <div className="hair">
            <img src="img/grass.png" alt="hair" />
        </div>
      <div className="head-holder">
        <div className="goggles">
            <div className="strap"></div>
            <div className="eye">
                <div className="eye-ball">
                    <div className="pupil">
                        <div className="tear"></div>
                        <div className="tear-ii"></div>
                    </div>
                </div>
            </div>
            <div className="eye">
                <div className="eye-ball">
                    <div className="pupil">
                        <div className="tear"></div>
                        <div className="tear-ii"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="goggles ii">
            <div className="strap"></div>
            <div className="eye">
                <div className="eye-ball">
                    <div className="pupil">
                        <div className="tear"></div>
                        <div className="tear-ii"></div>
                    </div>
                </div>
            </div>
            <div className="eye">
                <div className="eye-ball">
                    <div className="pupil">
                        <div className="tear"></div>
                        <div className="tear-ii"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mouth-holder">
            <div className="mouth">
                <div className="teeth-line"></div>
            </div>
        </div>
        <div className="jeans">
            <div className="pocket"></div>
        </div>
      </div>
      <div className="hands-holder">
        <div className="hand">
            <div className="shadow"></div>
            <div className="glove"></div>
        </div>
        <div className="hand">
            <div className="shadow"></div>
            <div className="glove"></div>
        </div>
      </div>
      <div className="legs-holder">
        <div className="leg">
            <div className="shadow"></div>
            <div className="shoe"></div>
        </div>
        <div className="leg">
            <div className="shadow"></div>
            <div className="shoe"></div>
        </div>
      </div>
    </div>
  )
}

export default Minion
