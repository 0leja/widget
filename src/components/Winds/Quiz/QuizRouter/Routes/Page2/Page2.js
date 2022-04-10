function Page2(props) {

    const chooseWoman = () => {
        props.gender.changeGender('5')
        props.page.nextPage(1)
        props.page.nextAnswer()
    };
    const chooseMan = () => {
        props.gender.changeGender('4')
        props.page.nextPage(1)
        props.page.nextAnswer()
    };
    const choosePass = () => {
        props.gender.changeGender('')
        props.page.nextPage()
        props.page.nextAnswer(1)
    };

    return (

            <>
                <h2 className={'quiz-title quiz-title--first'}>You are looking for</h2>
                <button className="choice choice--big" onClick={chooseWoman}>
                    <img style={{width: '136px', height: '84px'}} src="https://raw.githubusercontent.com/0leja/widget/main/img/gender/style-woman.svg" alt="Женские"/>
                </button>
                <button className="choice choice--big" onClick={chooseMan}>
                    <img style={{width: '108px', height: '81px'}} src="https://raw.githubusercontent.com/0leja/widget/main/img/gender/style-man.svg" alt="Мужские"/>
                </button>

                <a className="quiz-link" onClick={choosePass}>I'd like to see both</a>
            </>
    );
}


export default Page2