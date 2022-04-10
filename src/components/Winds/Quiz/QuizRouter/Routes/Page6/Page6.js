function Page6(props) {


    const changeLenstype = (e) => {
        props.lenstype.changeLenstype(e.currentTarget.id)
        props.page.nextPage(1)
        props.page.nextAnswer(1)
    }


    return (

        <>
            <h2 className={'quiz-title quiz-title--first quiz-title--long'} style={{marginBottom: '23px'}} >What do you need your glasses for?</h2>
            <button className="choice choice--small" id='6' onClick={changeLenstype} >
                <p className="choice-text">Near Vision</p>
            </button>
            <button className="choice choice--small" id='6' onClick={changeLenstype} >
                <p className="choice-text">Distance Vision</p>
            </button>
            <button className="choice choice--small" id='7' onClick={changeLenstype} >
                <p className="choice-text">Multifocal / Progressive</p>
            </button>

            <a className="quiz-link" id='' onClick={changeLenstype} >Skip</a>
        </>
    );
}

export default Page6