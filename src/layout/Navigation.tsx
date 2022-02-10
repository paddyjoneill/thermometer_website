import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link"
import { useRouter } from "next/router";


interface Props {
    children: React.ReactNode
    page: "Home" | "About" | "Portfolio" | "Contact" | "Blog"
}

const menuItem = [
    { icon: "fa-home", menuName: "Home", route: "/" },
    { icon: "fa-wrench", menuName: "Tools", route: "/about" },
    { icon: "fa-camera", menuName: "Media", route: '/portfolio' },
    { icon: "fa-envelope-open", menuName: "Contact", route: '/contact' },
    { icon: "fa-book", menuName: "Case" + String.fromCharCode(160) + "Studies", route: '/blog' },
];

const Navigation = (props: Props) => {

    const tabIndex = menuItem.map(m => m.menuName).indexOf(props.page)

    const router = useRouter()

    const onSelect = (index: number) => {
        router.push(menuItem[index].route)
    }

    const tabPanels =  menuItem.map((item,i) => {
        return <TabPanel key={i}><div></div></TabPanel>
    })

    return (
        <Tabs selectedIndex={tabIndex} onSelect={onSelect}>
            <div className="header">
                <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
                    {menuItem.map((item, i) => (
                        <Tab className="icon-box" key={i}>
                            <i className={`fa ${item.icon}`}></i>
                            <Link href={item.route}>
                                <a>
                                    <h2>{item.menuName}</h2>
                                </a>
                            </Link>
                        </Tab>
                    ))}
                </TabList>
          {tabPanels}
            </div>

            {props.children}
        </Tabs>
    )
}

export default Navigation