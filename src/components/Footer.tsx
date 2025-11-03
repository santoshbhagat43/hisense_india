"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { MenuData, MenuItem } from "@/types/general";

const Footer: React.FC<{ menuList: MenuData[] }> = ({ menuList }) => {
  console.log(menuList, "menuList");

  const [footerBottom, setFooterBottom] = useState<MenuItem[]>([]);
  const [socialMedia, setSocialMedia] = useState<MenuItem[]>([]);

  const [allColumns, setAllColumns] = useState<MenuItem[][]>([]);

  useEffect(() => {
    if (menuList && Array.isArray(menuList)) {
      // Find the menu with slug "footer-bottom" or name "Footer Bottom"
      const footerBottomMenu = menuList.find(menu => 
        menu.slug === "footer-bottom" ||
        menu.location["footer-bottom-menu"]
      );
      
      if (footerBottomMenu && footerBottomMenu.items) {
        setFooterBottom(footerBottomMenu.items);
      }
	  const socialMediaMenu = menuList.find(menu => 
        menu.slug === "social-menu"
      );

	  console.log(socialMediaMenu, "socialMediaMenu");
      
      if (socialMediaMenu && socialMediaMenu.items) {
        setSocialMedia(socialMediaMenu.items);
      }

	  const footerColumn1Menu = menuList.find(menu => 
        menu.slug === "footer-column-1"
      );

      const footerColumn2Menu = menuList.find(menu => 
        menu.slug === "footer-column-2"
      );

	  const footerColumn3Menu = menuList.find(menu => 
        menu.slug === "footer-column-3"
      );

	  const footerColumn4Menu = menuList.find(menu => 
        menu.slug === "footer-column-4"
      );




	  if (footerColumn1Menu && footerColumn2Menu && footerColumn3Menu && footerColumn4Menu) {
		setAllColumns([footerColumn1Menu.items, footerColumn2Menu.items, footerColumn3Menu.items, footerColumn4Menu.items]);
	  }
    }
  }, [menuList]);


  if (allColumns.length === 0) {
    return null;
  }


  return (
    <footer>
      <div className="social-media-container-india">
        <Link className="logo" href="/">
          Hisense International
        </Link>
        <div className="social-media">
			{socialMedia.map((item) => (
				<Link
					key={item.id}
					className={`social-btn ${item.parent} ${item.title.toLowerCase()=="facebook"?"fb":item.title.toLowerCase()=="twitter"?"twitter":item.title.toLowerCase()=="instagram"?"ig":item.title.toLowerCase()=="youtube"?"youtube":item.title.toLowerCase()=="linkedin"?"linkedin":""}`}
					href={item.url}
					target={item.target}
					rel="noopener"
				>
					{item.title}
				</Link>
			))}
          
        </div>
      </div>
      <div className="footer-links-container">
        <div className="footer-links">
		{allColumns.map((column, mainIndex) => (
          <ul className="col" key={mainIndex}>
            <li className="row">
              <a className="accordion-toggle" href="javascript:;"></a>
              <dl>
				{column?.map((item: MenuItem) =>
					item.parent === "0" ? (
						<dt key={item.id}><Link href={item.url} target={item.target} rel="">{item.title}</Link></dt>
					) : (
						<dd key={item.id}>
							<Link href={item.url} target={item.target} rel="">
								{item.title}
							</Link>
						</dd>
					)
				)}
                
              </dl>
            </li>
          </ul>

		  ))}
        </div>
      </div>
      <div className="bottom-links-container">
        <a className="icon-region" href="#">
          International, English
        </a>
        <ul className="bottom-links">
          {footerBottom.map((item) => (
            <li key={item.id} className={item.title.includes("©") ? "copyright" : ""}>
              <Link href={item.url === "#" ? "#" : item.url} target={item.target} rel="">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
