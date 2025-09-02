import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import News_item from '../../components/blog/news_item';
import { news_data } from '../../data/news_data';
import { single_news_data } from '../../data/news_data';
import Head from 'next/head';
import Meta from '../../components/Meta';
import Footer from "../../components/footer";

const Single_post = () => {  
	const router = useRouter();
	const pid = router.query.single_post;

	console.log(pid);

	return (
		<>
		<div>
			<Meta title={`${pid} ||  Socialverse Marketplace`} />

			<div className="pt-[5.5rem] lg:pt-24">
				{/* <!-- Post --> */}
				<section className="relative py-16 md:py-24">
					<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
						<img src="/images/gradient_light.jpg" alt="gradient" className="h-full w-full" />
					</picture>
					{single_news_data
						.filter((item) => item.id === pid)
						.map((item) => {
							const { id, image, title, text, date, time, subImages, authorImage, authorName } =
								item;
							// console.log(image);
							return (
								<div className="container" key={id}>
									<header className="mx-auto mb-16 max-w-lg text-center">
										<div className="mb-3 inline-flex flex-wrap items-center space-x-1 text-xs">
											<span className="text-accent inline-flex flex-wrap items-center space-x-1">
												<a href="single-post.html">{"NFT's"}</a>
												<a href="single-post.html">DIGITAL ART</a>
											</span>
										</div>

										<h1 className="font-display text-jacarta-700 mb-4 text-2xl dark:text-white sm:text-5xl">
											{title}
										</h1>
										{/* <!-- Author --> */}
										<div className="inline-flex items-center">
											<img
												src={authorImage}
												alt="author"
												className="mr-4 h-10 w-10 shrink-0 rounded-full"
											/>

											<div className="text-left">
												<span className="dark:text-jacarta-200 text-jacarta-700 text-2xs font-medium tracking-tight">
													{authorName}
												</span>

												{/* <!-- Date / Time --> */}
												<div className="text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm">
													<span>
														<time>{date}</time>
													</span>
													<span>•</span>
													<span>{time}</span>
												</div>
											</div>
										</div>
									</header>

									{/* <!-- Featured image --> */}
									<figure className="mb-16">
										<img src={image} alt="post 1" className="rounded-2xl w-full" />
									</figure>

									{/* <!-- Article --> */}
									<article className="mb-12">
										{/* <!-- Content --> */}
										<div className="article-content">
											<p className="text-lg leading-normal">
												Since we launched Tezos at the end of 2021, many awesome creator. From a
												barely understood abbreviation (hello, right click savers!), it turned into
												a massive cultural phenomenon adopted by blue chip companies like Adidas and
												Twitter in a few short months.
											</p>
											<p>
												Just like the NFT space has grown, so has Rarible.com. What started with a
												few people in a café grew into a passionate team of over 100, and counting!
											</p>
											<p>
												And that team has been busy. In 2021, {"we've"} shipped more features than
												ever before, scaled to a multi-chain platform with Flow and Tezos
												integrations, and watched our community soar on every social media channel.
											</p>
											<p>
												And of course, we {"couldn't"} have done it without you! You are creating
												Rarible day by day - by using the platform, requesting features, sharing
												your feedback, being as active and passionate as you are.
											</p>
											<h2 className="text-xl">A Picture is Worth a Thousand Words</h2>
											<p>
												Ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
												doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
												veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Donec quam
												felis, ultricies nec, pellentesque eu, pretium quis, sem.
											</p>
											<div className="article-content-wide my-12 grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2">
												<img src={subImages[0]} alt="gallery 1" className="rounded-2lg" />
												<img src={subImages[1]} alt="gallery 2" className="rounded-2lg" />
											</div>
											<p>
												Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
												nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
												vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
												Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
												ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et
												magnis dis parturient montes, nascetur ridiculus mus. Aenean imperdiet.
												Etiam ultricies. Ut enim.
											</p>
											<blockquote className="text-jacarta-700 !my-10 text-xl italic dark:text-white">
												“Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
												venenatis faucibus. Nullam quis.”
												<cite className="text-jacarta-400 text-2xs mt-3 block not-italic tracking-tight">
													— Vincent De Paul
												</cite>
											</blockquote>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
												quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
												consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit
												amet, consectetur adipiscing elit. Cum sociis Theme natoque penatibus et
												magnis dis parturient montes, nascetur ridiculus mus. Aenean imperdiet.
												Etiam ultricies. Ut enim.
											</p>
										</div>
									</article>

									<div className="mx-auto max-w-[48.125rem]">
										{/* <!-- Share --> */}
										<div className="mb-16 flex items-center">
											<span className="dark:text-jacarta-300 mr-4 text-sm font-bold">Share:</span>
											<div className="flex space-x-2">
												<a
													href="#"
													className="group dark:bg-jacarta-700 dark:border-jacarta-600 dark:hover:bg-accent border-jacarta-100 hover:bg-accent inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent"
												>
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fab"
														data-icon="facebook"
														className="fill-jacarta-400 h-4 w-4 transition-colors group-hover:fill-white dark:group-hover:fill-white"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
													>
														<path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
													</svg>
												</a>
												<a
													href="#"
													className="group dark:bg-jacarta-700 dark:border-jacarta-600 dark:hover:bg-accent border-jacarta-100 hover:bg-accent inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent"
												>
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fab"
														data-icon="twitter"
														className="fill-jacarta-400 h-4 w-4 transition-colors group-hover:fill-white dark:group-hover:fill-white"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
													>
														<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
													</svg>
												</a>
												<a
													href="#"
													className="group dark:bg-jacarta-700 dark:border-jacarta-600 dark:hover:bg-accent border-jacarta-100 hover:bg-accent inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent"
												>
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fab"
														data-icon="linkedin"
														className="fill-jacarta-400 h-4 w-4 transition-colors group-hover:fill-white dark:group-hover:fill-white"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 448 512"
													>
														<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
													</svg>
												</a>
												<a
													href="mailto:test@gmail.com"
													className="group dark:bg-jacarta-700 dark:border-jacarta-600 dark:hover:bg-accent border-jacarta-100 hover:bg-accent inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent"
												>
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fab"
														data-icon="email"
														className="fill-jacarta-400 h-4 w-4 transition-colors group-hover:fill-white dark:group-hover:fill-white"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
													>
														<path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
													</svg>
												</a>
											</div>
										</div>

										{/* <!-- Author --> */}
										<div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2xl mb-16 flex border bg-white p-8">
											<img
												src={authorImage}
												alt="author"
												className="mr-4 h-16 w-16 shrink-0 self-start rounded-lg md:mr-8 md:h-[9rem] md:w-[9rem]"
											/>
											<div>
												<span className="text-jacarta-700 font-display mb-3 mt-2 block text-base dark:text-white">
													{authorName}
												</span>
												<p className="dark:text-jacarta-300 mb-4">{text}</p>
												<div className="flex space-x-5">
													<a href="#" className="group">
														<svg
															aria-hidden="true"
															focusable="false"
															data-prefix="fab"
															data-icon="facebook"
															className="group-hover:fill-accent fill-jacarta-400 h-4 w-4 dark:group-hover:fill-white"
															role="img"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 512 512"
														>
															<path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
														</svg>
													</a>
													<a href="#" className="group">
														<svg
															aria-hidden="true"
															focusable="false"
															data-prefix="fab"
															data-icon="twitter"
															className="group-hover:fill-accent fill-jacarta-400 h-4 w-4 dark:group-hover:fill-white"
															role="img"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 512 512"
														>
															<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
														</svg>
													</a>
													<a href="#" className="group">
														<svg
															aria-hidden="true"
															focusable="false"
															data-prefix="fab"
															data-icon="discord"
															className="group-hover:fill-accent fill-jacarta-400 h-4 w-4 dark:group-hover:fill-white"
															role="img"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 640 512"
														>
															<path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
														</svg>
													</a>
												</div>
											</div>
										</div>

										{/* <!-- Related   --> */}
										<h2 className="font-display text-jacarta-700 mb-8 text-3xl dark:text-white">
											Related Posts
										</h2>

										{/* <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2">
						</div> */}
										{/* <!-- Posts --> */}
										<News_item
											data={news_data.slice(4)}
											classes="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2"
										/>
									</div>
									{/* <!-- end related --> */}
								</div>
							);
						})}
				</section>
				{/* <!-- end post --> */}
			</div>
		</div>
		<Footer />
		</>
	);
};

export default Single_post;
