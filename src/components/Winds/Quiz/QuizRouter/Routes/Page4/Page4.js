import React from "react";


class Page4 extends React.Component {

    componentDidMount() {
        this.show = setTimeout(() => {
            this.props.page.nextPage(1)
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.show)
    }

    render() {
        return (

            <>
                <img className='img_between' src="https://raw.githubusercontent.com/0leja/widget/main/img/decoration/finger.svg" alt="Отлично"/>
                <h2 className="text_between">Let's get to know you!</h2>
            </>
        );
    }
}


export default Page4