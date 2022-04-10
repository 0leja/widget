function Page9(props) {


    const changeSize = (e) => {
        props.frame_size.changeSize(e.currentTarget.id, 2)
        props.page.nextPage(1)
        props.page.nextAnswer()
    }


    return (

        <>
            <h2 className={'quiz-title quiz-title--first'} style={{width: '210px', marginBottom: '32px'}} >How wide would you say your face is?</h2>
            <button className="choice choice--small choice--long" id='66' onClick={changeSize} >
                <p className="choice-text">Wider Than Average</p>
            </button>
            <button className="choice choice--small choice--long" id='67' onClick={changeSize} >
                <p className="choice-text">Average</p>
            </button>
            <button className="choice choice--small choice--long" id='68' onClick={changeSize} >
                <p className="choice-text">Narrower Than Average</p>
            </button>

            <a className="quiz-link" id='' onClick={changeSize} style={{bottom: '36px'}} >I’m not sure</a>
        </>
    );
}

export default Page9