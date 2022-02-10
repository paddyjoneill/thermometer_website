import React, { useEffect } from "react";

const FormSiteForm = () => {

    useEffect(() => {
        // const script = document.createElement('script');
        // script.setAttribute(
        //     'src',
            // "https://fs11.formsite.com/include/form/embedManager.js?1547214835");

        // document.body.appendChild(script);


        // script.addEventListener('load', () => {
        //     EmbedManager.embed({
        //         key: "key",
        //         width: "100%",
        //         mobileResponsive: true
        //     });
        // });


        // window.EmbedManager.embed({
        //     key: "https://fs11.formsite.com/res/showFormEmbed?EParam=B6fiTn-RcO6yx9Eu7MQw60Hp-Oxx3Si2&1547214835",
        //     width: "100%",
        //     mobileResponsive: true
        //   });
    }, [])

    return (
            <div id="apply_form">
                <p>This is the formsite form</p>
                {/* <a name="form1547214835" id="formAnchor1547214835"></a> */}
            </div>
    );

}

export default FormSiteForm