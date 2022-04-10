import Page1 from "./Page1/Page1";
import Page2 from "./Quiz/QuizRouter/Routes/Page2/Page2";
import Quiz from "./Quiz/Quiz";

function WindowRouter(props) {

    const p = props.state.page.page

        {
            switch(p) {
                case 0:
                    return <Page1 page={props.state.page} />
                default:
                    return <Quiz {...props.state} />
            }
        }
}

export default WindowRouter