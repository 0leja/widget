let state = {
    page: {
        page: 0,
        quizPage: 0,
        nextPage(i) {
            this.page+=i
            rerender()
        },
        beforePage() {
            if(this.page !== 5 && this.page !== 7 && this.page !== 8) {
                this.quizPage--
            }


            if(this.page !== 4 && this.page !== 6 && this.page !== 8) {
                this.page--
            } else {
                this.page-=2
            }

            rerender()
        },
        closePage() {
            this.page = 0
            rerender()
        },
        nextAnswer() {
            this.quizPage++
            rerender()
        },
    },
    quiz: {
        gender: {
            value: '',
            changeGender(val)  {
                this.value = val
                rerender()
            }
        },

        eyewear_type: {
            value: '',
            changeType(val) {
                this.value = val
                rerender()
            }
        },

        lenstype: {
            value: '',
            changeLenstype(val) {
                this.value = val
                rerender()
            }
        },

        frame_size: {
            value1: '',
            value2: '',
            changeSize(val, i) {
                this['value'+i] = val
                rerender()
            }
        },

        blue_light: {
            value: '',
            changeLight(val) {
                this.value = val
                rerender()
            }
        },

        shade: {
            value: '',
            changeShade(val) {
                this.value = val
                rerender()
            }
        }
    }


}

let rerender = () => {};

export const subscribe = (render) => {
    rerender = render
}

window.state = state

export default state