const CalendlyForm = ({ type }) => {
    const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
    const showDetails = process.env.NEXT_PUBLIC_CALENDLY_SHOW_DETAILS === "false" ? 1 : 0;
    const showCookies = process.env.NEXT_PUBLIC_CALENDLY_SHOW_COOKIES === "false" ? 1 : 0;

    return (
        <>
            <div className="calendly-inline-widget w-screen h-screen" data-url={`https://calendly.com/${username}${type ? `/${type}` : ''}?hide_landing_page_details=${showDetails}&hide_gdpr_banner=${showCookies}`}></div>
            
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </>
    )
}

export default CalendlyForm;
