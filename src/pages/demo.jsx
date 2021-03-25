
import React, { PureComponent } from "react";
class Demo extends PureComponent {
  render() {
    const { show, children } = this.props;
    return (
      <div
        style={{
          display: show ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0,.3)",
          zIndex: 400
        }}
        onClick={() => {
          this.props.hide();
        }}
      >
        <div
          style={{
            width: "70%",
            height: "100%",
            float: "right",
            backgroundColor: "#fff"
          }}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}
export default Demo