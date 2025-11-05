"use client";

import { SidebarData, TermsOfUsePageData } from "@/types/general";
import { useState } from "react";

const TermsConditions = ({ pageData }: { pageData: TermsOfUsePageData }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeSidebarIndex, setActiveSidebarIndex] = useState<number>(0);
    const [activeSidebar, setActiveSidebar] = useState<SidebarData[]>(pageData?.acf?.page_data[0]?.tab_data[0]?.sidemenu);
    const handleTabClick = (index: number) => {
        setActiveTab(index)
        setActiveSidebar(pageData?.acf?.page_data[0]?.tab_data[index]?.sidemenu)
        setActiveSidebarIndex(0)
    }
    const handleSidebarClick = (index: number) => {
        setActiveSidebarIndex(index)
    }
  return (
    <div className="main-container">
      <div className="breadcrumb__banner">
        <h1>{pageData?.post_title}</h1>
      </div>
      <div className="tabs__container">
        <div className="tabs">
          <div className="list-group">
            {pageData?.acf?.page_data[0]?.tab_data?.map((tab,index) => (
              <span className={`list-group-item ${index === activeTab ? "active" : ""}`} onClick={() => handleTabClick(index)} data-tab={tab.tab_title} key={tab.tab_title}>
                {tab.tab_title}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="content__container">
        <div className="col1" id="campaigns-list">
            {activeSidebar?.map((sidebar,index) => (
                <span className={`list-group-item ${index === activeSidebarIndex ? "active" : ""}`} onClick={() => handleSidebarClick(index)} data-target={sidebar.sidebar_title} key={sidebar.sidebar_title}>
                    {sidebar.sidebar_title}
                </span>
            ))}
        </div>
        <div className="col2">
          <div className="content-item" id="b20">
            <div dangerouslySetInnerHTML={{ __html: activeSidebar[activeSidebarIndex]?.description }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
