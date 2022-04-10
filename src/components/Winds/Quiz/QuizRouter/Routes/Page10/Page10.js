function Page10(props) {
    
    const changeLight = (e) => {
        props.blue_light.changeLight(e.currentTarget.id)
        props.page.nextPage(1)
        props.page.nextAnswer()
    }

    const changeShade = (e) => {
        props.shade.changeShade(e.currentTarget.id)
        props.page.nextPage(1)
        props.page.nextAnswer()
    }


    if(props.isSun) {
        return (
            <>
                <h2 className={'quiz-title quiz-title--first quiz-title--312'}  >When you’re out and about, which shade of lenses do you prefer?</h2>
                <button className="choice choice-broad" id='dark' onClick={changeShade} >
                    <img style={{width: '43.22px', height: '35.06px', marginRight: '22.78px'}} src="https://raw.githubusercontent.com/0leja/widget/main/img/lens/dark-lens.svg" alt="Вид линз" className="choice--broad__img"/>
                    <p className="choice-text choice-text--broad">Dark Shade</p>
                </button>

                <button className="choice choice-broad" id='light' onClick={changeShade} >
                    <img style={{width: '44px', height: '35.8px', marginRight: '22px'}} src="https://raw.githubusercontent.com/0leja/widget/main/img/lens/light-lens.svg" alt="Вид линз" className="choice--broad__img"/>
                    <p className="choice-text choice-text--broad">Light Shade</p>
                </button>

                <button className="choice choice-broad choice-broad--lp" id='transition' onClick={changeShade} >
                    <img style={{width: '52px', height: '34px', marginRight: '18px'}} src="https://raw.githubusercontent.com/0leja/widget/main/img/lens/all-lens.svg" alt="Вид линз" className="choice--broad__img"/>
                    <p style={{paddingTop: '11px'}} className="choice-text choice-text--broad">Transitioning Shade</p>
                </button>
            </>
        )
    } else {
        return (

            <>
                <h2 className={'quiz-title quiz-title--first quiz-title--330'}  >Would you like to protect your eyes from light emanating from screens?</h2>
                <button className="choice choice--big" id='true' onClick={changeLight}  >
                    <p className="choice-text choice-text--l">Yes</p>
                </button>
                <button className="choice choice--big" id='false' onClick={changeLight}  >
                    <p className="choice-text choice-text--l">No</p>
                </button>
            </>
        );
    }


}


export default Page10