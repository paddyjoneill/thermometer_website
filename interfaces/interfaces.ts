export interface BasePageProps {
    page: "Home" | "About" | "Portfolio" | "Contact" | "Blog"
    // seo stuff
}

export interface HomePageProps extends BasePageProps {
    imageUrl: string;
    mobileImageUrl: string;
    title: string;
    subTitle: string;
    descriptions: string;
    buttonText: string;
}

export interface ContactPageProps extends BasePageProps {
    streetAddress: string,
    city: string,
    postcode: string,
    phoneNumber: string,
    email: string
}

export interface BlogPostProps extends BasePageProps {
    author: string;
    date: string;
    tags: string[];
    title: string;
    imageUrl: string;
    content: string[];
    quote: string;
    snippet: string;
}

export interface BlogPageProps extends BasePageProps {
    blogs: BlogPostProps[]
}

export interface PortfolioPageProps extends BasePageProps {
    portfolioItems: PortfolioItem[] 
}

export interface PortfolioItem {
    type: "Image" | "Slider" | "Video" | "Youtube"
    title: string
}

export interface PortfolioImageItem extends PortfolioItem{
    mediaUrl: string
    mediaAltText: string
}

export interface PortfolioSliderItem extends PortfolioItem{
    images: SliderPicture[]
}

export interface SliderPicture {
    mediaUrl: string
    mediaAltText: string
}

export interface PortfolioYoutubeItem extends PortfolioItem{
    mediaUrl: string
    mediaAltText: string
    pictureUrl: string
}

export interface PortfolioVideoItem extends PortfolioItem{
    mediaUrl: string
    mediaAltText: string
    pictureUrl: string
}