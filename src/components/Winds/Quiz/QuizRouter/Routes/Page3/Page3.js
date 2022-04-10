function Page3(props) {

    const imgs = props.isFemale ? [
                                    ['https://raw.githubusercontent.com/0leja/widget/main/img/glasses/w-glass-clear.svg', 65],
                                    ['https://raw.githubusercontent.com/0leja/widget/main/img/glasses/w-glass-dark.svg', 64],
                                    ]
                                                                :
                                 [
                                     ['https://raw.githubusercontent.com/0leja/widget/main/img/glasses/m-glass-clear.svg', 63.74],
                                     ['https://raw.githubusercontent.com/0leja/widget/main/img/glasses/m-glass-dark.svg', 63.1]
                                 ]

    const chooseEye = () => {
        props.eyewear_type.changeType('210')
        props.page.nextPage(1)
        props.page.nextAnswer()
    }

    const chooseSun = () => {
        props.eyewear_type.changeType('211')
        props.page.nextPage(1)
        props.page.nextAnswer()
    }

    const chooseAll = () => {
        props.eyewear_type.changeType('')
        props.page.nextPage(1)
        props.page.nextAnswer()
    }


    return (

        <>
            <h2 className={'quiz-title quiz-title--first'}>What type of glasses are you looking for?</h2>

            <button className="choice choice--big choice--type " onClick={chooseEye}>
                <img style={{width: '93px', height: imgs[0][1]+'px' }} src={imgs[0][0]} alt="Глазные"/>
            </button>

            <button className="choice choice--big choice--type" onClick={chooseSun} >
                <img className={+ props.isFemale ? '' : 'img--h'} style={{width: '93px', height: imgs[1][1]+'px'}} src={imgs[1][0]} alt="Солнечные"/>
            </button>

            <a className="quiz-link" onClick={chooseAll}>I want to see both</a>
        </>
    );
}


export default Page3