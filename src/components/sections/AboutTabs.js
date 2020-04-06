import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class AboutTabs extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "Experience",
      tab3 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          Front End <span> - React.js</span>
                        </li>
                        <li>
                          Back End<span> - Node.js / Restful API</span>
                        </li>
                        <li>
                          JavaScript <span> - ES6 / ES9</span>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <iframe
                        title = "Resume"
                        src="https://www.keepandshare.com/doc3/61642/issacxm-resume-pdf-187k?da=y&ifr=y"
                        width="120%"
                        height="420"
                        scrolling="yes"
                        horizontalScrolling ="yes"
                        frameborder="2"
                      ></iframe>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          Full Stack Web Development
                          <span> - Lambda School</span> 2019 - Current
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default AboutTabs;
