class IndecisionApp extends React.Component {
    render() {
        const title = 'Shopping list';
        const subtitle = 'Select the items from your shopping list';
        const options = ['Thing One', 'Thing Two', 'Thing Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I buy?</button>
            </div>

        );
    }
}
  
class Options extends React.Component {

    render() {

        return (
            <div>
                {
                    // this.props.options.map((option)=> <p key={option}>{option}</p  >)
                    this.props.options.map((option)=> <Option key={option} optionText = {option}  />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

 

class AddOption extends React.Component {
    render() {
        return (
            <div>
                AddOption component here
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));