import { Icon, Modal, NavBar } from "antd-mobile";
import * as React from "react";
import "./App.css";
import MapWidget from "./components/MapWidget";

interface IAppState {
  isAboutLaunched: boolean;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.showAbout = this.showAbout.bind(this);
    this.state = {
      isAboutLaunched: false,
    }

  }
  public render() {
    return (
      <div className="App">
        <NavBar
          mode="dark"
          rightContent={[
            <Icon 
            key="0"
             type="question-circle" 
             style={{ marginRight: "16px" }}
             onClick={this.showAbout} 
             />,
          ]}
        >
          Vacant Homes
        </NavBar>
        <Modal
          visible={this.state.isAboutLaunched}
          transparent={true}
          maskClosable={false}
          onClose={this.closeAbout}
          title="About"
          footer={[{ text: 'Ok', onPress: () => { this.closeAbout(); } }]}
        >
          <div style={{ height: 50 }}>
          Vacant Homes is currently in development by Code for Ireland
          </div>
        </Modal>

          <MapWidget/>
      </div>
    );
  }

  private showAbout(e: React.MouseEvent<SVGSVGElement>) {
    e.preventDefault();
    this.setState({
      isAboutLaunched: true,
    })
  }

  private closeAbout() {
    this.setState({
      isAboutLaunched: false,
    });
  }
}

export default App;
