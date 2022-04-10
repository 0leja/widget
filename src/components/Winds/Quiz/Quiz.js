import QuizRouter from "./QuizRouter/QuizRouter";

function Quiz(props) {
    const p = props.page.quizPage
    const beforePage = () => {
        props.page.beforePage()
    }
    const closePage = () => {
        props.page.closePage()
    }

    const lineRad = props.page.page != 3 ? '15px' : '0px'

    return (
        <div className='card card--quiz'>
            <div className='card__header card__header--quiz'>
                <button className='back-btn' onClick={beforePage}>
                    <img src={'https://raw.githubusercontent.com/0leja/widget/main/img/btns/back-btn.svg'} alt='Назад' />
                </button>

                <p className="quiz-counter">
                    {p}/10
                </p>

                <button className='close-btn' onClick={closePage}>
                    <img src={'https://raw.githubusercontent.com/0leja/widget/main/img/btns/close-btn.svg'} alt='Закрыть' />
                </button>
            </div>
            <div className="progress">
                <div className="progress-line" style={{width: `${(100/9) * p}%`,
                                                        borderTopRightRadius: lineRad,
                                                        borderBottomRightRadius: lineRad}}></div>
            </div>
            <div className='card__content card__content--quiz'>
                <QuizRouter {...props} />
            </div>
        </div>
    );
}


export default Quiz