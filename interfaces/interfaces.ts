export interface BasePageProps {
    page: "Home" | "About" | "Portfolio" | "Contact" | "Blog"
}

export interface HomePageProps extends BasePageProps {
    imageUrl: string;
    mobileImageUrl: string;
    title: string;
    subTitle: string;
    descriptions: string;
    buttonText: string;
}