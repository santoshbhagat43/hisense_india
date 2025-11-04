import { CategoryData } from "@/types/general";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TVSlider({ items }: { items: CategoryData[] }) {
	const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ul className="series-container-india">
      {items.map((item, index) => (
				<li className="col-full" key={index}>
					<div className="top">
						<h3>{item.category_name.name}</h3>
						{item.subcategory_data.length > 0 && (<nav>
							{item.subcategory_data.map((subcategory, index) => (
								<a href={`javascript:void(0)`} onClick={() => setActiveIndex(index)} className={`${index === activeIndex ? 'active' : ''}`} key={index}>{subcategory.subcategories[0].name}</a>
							))}
						</nav>)}
					</div>
					<div className="content">
					{item.subcategory_data.map((subcategory, index) => (
						<div className={`item ${index === activeIndex ? '' : 'hidden'}`} key={index}>
							<p dangerouslySetInnerHTML={{ __html: subcategory.subcategories[0].name }} />
							<div className="btn-container">
								<Link className="btn-more" href={`/products/${subcategory.products?.post_name}`} target="_self" rel="">More</Link>
								<Link className="btn-view-all" href={`/products/${item.category_name.slug}`} target="_self" rel="">View all</Link>
							</div>
						</div>
						))}
						{item.subcategory_data.length== activeIndex && (
							<div className="item" key={index}>
								<p>{item.products?.post_title}</p>
								<div className="btn-container">
									<Link className="btn-more" href="/products" target="_self" rel="">More</Link>
									<Link className="btn-view-all" href="/products" target="_self" rel="">View all</Link>
								</div>
							</div>
						)}
					</div>
					<div className="banner">

					{item.subcategory_data.map((subcategory, index) => (
						<div className={`img ${index === activeIndex ? 'active' : ''}`} key={index}>
							<img className="desktop-only" src={subcategory.products?.product_images?.main_image} alt={subcategory.products?.post_title} />
							<img className="mobile-only" src={subcategory.products?.product_images?.mobile_image} alt={subcategory.products?.post_title} />
						</div>
						))}

						{item.subcategory_data.length== 0 && (
							<div className={`img ${index === activeIndex ? 'active' : ''}`} key={index}>
							<img className="desktop-only" src={item.products?.product_images?.main_image} alt={item.products?.post_title} />
							<img className="mobile-only" src={item.products?.product_images?.mobile_image} alt={item.products?.post_title} />
						</div>
						)}
					</div>
				</li>
        ))}
			</ul>
  );
}