import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";
class Layout extends React.Component {
  componentDidMount = () => {
    const cursor = document.querySelector(".cursor");
    const audio = new Audio(
      require("../assets/audio/mixkit-fast-double-click-on-mouse-275.mp3")
    );

    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    window.addEventListener("mousedown", (event) => {
      cursor.style.height = "35px";
      cursor.style.width = "35px";
      audio.play();
    });

    window.addEventListener("mouseup", (event) => {
      cursor.style.height = "23px";
      cursor.style.width = "23px";
    });

    const options = { 
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 0,
      anchorPlacement: 'top-bottom'
    };
    Aos.init(options);
    
    // Refresh AOS on scroll for better performance
    window.addEventListener('scroll', () => {
      Aos.refresh();
    });
  };
  render() {
    return (
      <React.Fragment>
        <div class="page" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh' }}>
          <div className="flex flex-row overflow-hidden">
            {this.props.children}
          </div>
          <div class="cursor"></div>
        </div>
      </React.Fragment>
    );
  }
}
export default Layout;
