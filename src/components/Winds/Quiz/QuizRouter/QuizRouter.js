
import Page2 from "./Routes/Page2/Page2";
import Page3 from "./Routes/Page3/Page3";
import Page4 from "./Routes/Page4/Page4";
import Page5 from "./Routes/Page5/Page5";
import Page6 from "./Routes/Page6/Page6";
import Page7 from "./Routes/Page7/Page7";
import Page8 from "./Routes/Page8/Page8";
import Page9 from "./Routes/Page9/Page9";
import Page10 from "./Routes/Page10/Page10";
import Page11 from "./Routes/Page11/Page11";

function WindowRouter(props) {

    const p = props.page.page
    const isFemale = props.quiz.gender.value === '5'
    const isSun = props.quiz.eyewear_type.value === '211'


    {
        switch(p) {
            case 1:
                return <Page2 page={props.page} gender={props.quiz.gender} />
            case 2:
                return <Page3 isFemale={isFemale} page={props.page} eyewear_type={props.quiz.eyewear_type} />
            case 3:
                return  <Page4 page={props.page} />
            case 4:
                return  <Page5 page={props.page} />
            case 5:
                return <Page6 page={props.page} lenstype={props.quiz.lenstype} />
            case 6:
                return <Page7 page={props.page} frame_size={props.quiz.frame_size} />
            case 7:
                return <Page8 page={props.page} />
            case 8:
                return <Page9 page={props.page} frame_size={props.quiz.frame_size} />
            case 9:
                return <Page10 isSun={isSun} page={props.page} blue_light={props.quiz.blue_light} shade={props.quiz.shade} />
            case 10:
                return <Page11 gender={props.quiz.gender.value} />
            case 11:
                return <h1 style={{marginTop: '20px'}}>Следующия вопрос</h1>
            default:
                return 'Нет такого вопроса'
        }
    }
}

export default WindowRouter