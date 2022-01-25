import React from 'react';

export default class Login extends React.Component 
{
	constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        };

		this.handle_click = this.handle_click.bind( this );
		this.handle_change = this.handle_change.bind( this );
	}

    
    handle_change(event) {
        let new_state = { email: this.state.email,pass: this.state.pass };
        
        if (event.target.id === "email") {
            new_state.email = event.target.value;
        } else if (event.target.id === "password") {
            new_state.pass = event.target.value;
        }
        this.setState(new_state);
    }


	handle_click()
    {
        console.log({state: this.state})
		if ( this.props.handle_delete )
		  this.props.handle_delete( this.props.user.id );
	}

	render() {
        return <div className='login'>
                    <div>Email: </div> 
                    <input id="email" type="text" value={this.state.email} onChange={this.handle_change} />
                    <div>Password: </div> 
                    <input id="password" type="password" value={this.state.pass} onChange={this.handle_change}/>
                    <button id="signin" onClick={this.handle_click}>sign in</button>
				</div>
	}
}

