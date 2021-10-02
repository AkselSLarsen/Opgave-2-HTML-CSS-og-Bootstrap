function throwSquareOntoScreen() {
	var square = document.getElementById('square');
		
	square.addEventListener("transitionend", transitionEnd(square), true);

	square.style.animationName = 'roll-onto-screen';
}

function transitionEnd(square) {
	square.style.right = "80vw";
}

const collectWordsApp = Vue.createApp({
    data() {
        return {
            content: "",
            fullContent: "",
            visableContent: "",
        }
    },
    methods: {
        saveContent() {
            this.fullContent += this.content;
            this.content = "";
        },
        showContent() {
            this.visableContent = this.fullContent;
        },
        clearContent() {
            this.content = "";
            this.fullContent = "";
            this.visableContent = "";
        }
    }
});

const calculatorApp = Vue.createApp({
    data() {
        return {
            input1: "",
            input2: "",
            operation: "",
            result: "",
            addInput1: 0,
            addInput2: 0,
            addResult: "",
            subInput1: 0,
            subInput2: 0,
            subResult: "",
            mulInput1: 0,
            mulInput2: 0,
            mulResult: "",
            divInput1: 0,
            divInput2: 0,
            divResult: "",
        }
    },
    methods: {
        calculate() {
            if(this.operation == "add") {
                this.result = parseFloat(this.input1) + parseFloat(this.input2);
            } else if(this.operation == "sub") {
                this.result = parseFloat(this.input1) - parseFloat(this.input2);
            } else if(this.operation == "mul") {
                this.result = parseFloat(this.input1) * parseFloat(this.input2);
            } else if(this.operation == "div") {
                this.result = parseFloat(this.input1) / parseFloat(this.input2);
            } else {
                this.result = "error";
            }
        },
        calculateAdd() {
            this.addResult = parseFloat(this.addInput1) + parseFloat(this.addInput2);
        },
        calculateSub() {
            this.subResult = parseFloat(this.subInput1) - parseFloat(this.subInput2);
        },
        calculateMul() {
            this.mulResult = parseFloat(this.mulInput1) * parseFloat(this.mulInput2);
        },
        calculateDiv() {
            this.divResult = parseFloat(this.divInput1) / parseFloat(this.divInput2);
        }
    }
});