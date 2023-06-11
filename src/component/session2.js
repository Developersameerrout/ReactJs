import react from "react";
import axios from "axios";
export default class extends react.Component {
  constructor() {
    super();
    this.state = {
      clickedValue: 0,
      name: "",
      email: "",
      avatar: ""
    };
  }
  // async details(e) {
  //   // console.log(this.state.clickedValue);
  //   // console.log(e);
  //   let url = "https://reqres.in/api/users/";
  //   try {
  //     let data = await fetch(url + this.state.clickedValue);
  //     let details = await data.json();
  //     this.setState({
  //       // name:details
  //     });
  //     console.log(details);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  async componentDidUpdate(prevProps, prevState) {
    let url = "https://reqres.in/api/users/";
    console.log(prevState, "prevs");
    if (
      prevState.clickedValue !== this.state.clickedValue &&
      this.state.clickedValue !== 0
    ) {
      console.log("hiii");
      try {
        let res = await axios.get(url + this.state.clickedValue);
        let userName = `${res.data.data.first_name} ${res.data.data.last_name} `;
        console.log(res.data.data);
        this.setState({
          // clickedValue: this.state.clickedValue,
          name: userName,
          email: res.data.data.email,
          avatar: res.data.data.avatar
        });
      } catch (e) {
        console.log(e);
      }
    } else console.log(this.state.clickedValue, "gfhgf");
  }
  render() {
    return (
      <div>
        <div>
          <button
            onClick={(e) => {
              this.setState({
                clickedValue: 1
              });
            }}
          >
            1
          </button>
          <button
            onClick={(e) => {
              this.setState({
                clickedValue: 2
              });
            }}
          >
            2
          </button>
          <button
            onClick={(e) => {
              this.setState({
                clickedValue: 3
              });
            }}
          >
            3
          </button>
          <button
            onClick={(e) => {
              this.setState({
                clickedValue: 100
              });
            }}
          >
            100
          </button>
        </div>
        <div>
          <div>
            <span>
              <b>Name</b>
            </span>
            :{this.state.name}
          </div>
          <div>
            <span>
              <b>Email</b>
            </span>
            :{this.state.email}
          </div>
          <div>
            <img src={this.state.avatar} />
          </div>
        </div>
      </div>
    );
  }
}
