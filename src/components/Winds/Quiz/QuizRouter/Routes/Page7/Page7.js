function Page7(props) {

    const changeSize = (e) => {
        props.frame_size.changeSize(e.currentTarget.id, 1)
        props.page.nextPage(1)
    }



    return (

        <>
            <h2 className={'quiz-title quiz-title--first'} style={{width: '210px', marginBottom: '38px'}} >What’s your current frame size?</h2>
            <img src="https://github.com/0leja/widget/blob/main/img/decoration/glass-size.png?raw=true" alt="Размеры" className="size-table"/>
            <button className="choice choice--size" id='68' onClick={changeSize} >
                <p className="size-title">Small </p>
                <p className="size-value">42-48 mm</p>
            </button>
            <button className="choice choice--size" id='67' onClick={changeSize} >
                <p className="size-title">Medium</p>
                <p className="size-value">49-53 mm</p>
            </button>
            <button className="choice choice--size" id='66' onClick={changeSize} >
                <p className="size-title">Large</p>
                <p className="size-value">54-58 mm</p>
            </button>

            <a className="quiz-link" id='' onClick={changeSize} >I don’t know</a>
        </>
    );
}

export default Page7