function Page1(props) {


    const Start = () => {
        props.page.nextPage(1)
        props.page.nextAnswer()
    }



    return (
        <div className='card card--start'>
            <div className='card__header'>
                <div className='logo'>
                    <img src={'https://raw.githubusercontent.com/0leja/widget/main/img/decoration/logo.svg'} alt='Логотип' />
                </div>

                <button className='next-btn' onClick={Start}>
                    <img src={'https://raw.githubusercontent.com/0leja/widget/main/img/btns/next-btn.svg'} alt='Кнопка' />
                </button>
            </div>
            <div className='card__content card__content--first'>
                <div className='card__img'>
                    <img src='https://github.com/0leja/widget/blob/main/img/decoration/welcome-glasses.png?raw=true' alt='Приветствие'/>
                </div>
                <div className='card__desc'>
                    <h1>Let’s find your perfect pair!</h1>
                    <p>Take the quiz to easily discover your perfect fit from thousands of styles</p>
                </div>
                <button className='continue-btn' onClick={Start}>Start Now</button>
            </div>
        </div>
    );
}


export default Page1