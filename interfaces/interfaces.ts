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
}