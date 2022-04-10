function Page11(props) {

    const i = props.gender



        return (
            <>
                <h2 className={'quiz-title quiz-title--first'} style={{width: '240px', marginBottom: '32px'}}  >Every face shape has a perfect fit. What’s yours?</h2>

                { i === '4' && <>
                    <button className="choice choice-broad choice-broad--m" id='dark'>
                        <img style={{width: '37px', height: '50.98px', marginRight: '26.5px'}}
                             src="https://raw.githubusercontent.com/0leja/widget/main/img/faces/m-long.svg"
                             alt="Вид линз" className="face"/>

                        <p style={{padding: '13px 0 0 24px'}} className="choice-text choice-text--broad">I have a long face</p>
                    </button>
                    <button className="choice choice-broad choice-broad--m" id='light'>
                        <img style={{width: '37px', height: '48px', marginRight: '26.5px'}}
                             src="https://raw.githubusercontent.com/0leja/widget/main/img/faces/m-round.svg"
                             alt="Вид линз" className="face"/>

                        <p style={{padding: '11px 0 0 24px'}} className="choice-text choice-text--broad">I have a round face</p>
                    </button>
                    <button className="choice choice-broad choice-broad--m" id='transition'>
                        <img style={{width: '38px', height: '50px', marginRight: '26px'}}
                             src="https://raw.githubusercontent.com/0leja/widget/main/img/faces/m-btw.svg"
                             alt="Вид линз" className="face"/>

                        <p style={{padding: '11px 0 0 24px'}} className="choice-text choice-text--broad">In between</p>
                    </button>
                </>

                }

                { i === '5' && <>
                    <button className="choice choice-broad choice-broad--w" id='dark'>
                        <img style={{width: '48px', height: '51.26px', marginRight: '20px', top: '0'}}
                             src="https://raw.githubusercontent.com/0leja/widget/main/img/faces/w-long.svg"
                             alt="Вид линз" className="face"/>

                        <p style={{padding: '11px 0 0 25px', marginTop: '6px'}} className="choice-text choice-text--broad">I have a long face</p>
                    </button>
                    <button className="choice choice-broad choice-broad--w" id='light'>
                        <img style={{width: '49px', height: '48px', marginRight: '20px'}}
                             src="https://raw.githubusercontent.com/0leja/widget/main/img/faces/w-round.svg"
                             alt="Вид линз" className="face"/>

                        <p style={{padding: '11px 0 0 24px', marginTop: '3px'}} className="choice-text choice-text--broad">I have a round face</p>
                    </button>
                    <button className="choice choice-broad choice-broad--w" id='transition'>
                        <img style={{width: '50px', height: '51px', marginRight: '20px', top: '-3px', left: '-1px'}}
                             src="https://raw.githubusercontent.com/0leja/widget/main/img/faces/w-btw.svg"
                             alt="Вид линз" className="face"/>

                        <p style={{padding: '11px 0 0 24px', marginTop: '2px'}} className="choice-text choice-text--broad">In between</p>
                    </button>
                </>

                }

                <a className="quiz-link">I don’t know</a>
            </>
        )



}


export default Page11