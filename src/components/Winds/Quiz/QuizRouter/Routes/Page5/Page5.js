function Page5(props) {

    const NextQuiz = () => {
        props.page.nextPage(2)
        props.page.nextAnswer()
    }

    const nextPage = () => {
        props.page.nextPage(1)
    }

    return (

        <>
            <h2 className={'quiz-title quiz-title--first'} style={{width: '277px', marginBottom: '31px'}} >Do you need vision correction?</h2>
            <button className="choice choice--big" style={{height: '120px'}} onClick={nextPage} >
                <p className="choice-text choice-text--l">Yes</p>
            </button>
            <button className="choice choice--big" style={{height: '120px'}} onClick={NextQuiz} >
                <p className="choice-text choice-text--l">No</p>
            </button>

            <a className="quiz-link" onClick={NextQuiz} >Skip</a>
        </>
    );
}


export default Page5