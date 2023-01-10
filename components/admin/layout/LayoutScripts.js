import React from 'react';
import Script from "next/script";

const LayoutScripts = (props) => {
    return (
        <>
            {props.children}
            <Script src="/static/plugins/global/plugins.bundle.js"  />
            <Script src="/static/js/scripts.bundle.js" />
            <Script src="/static/plugins/custom/fullcalendar/fullcalendar.bundle.js"  />
            <Script src="https://cdn.amcharts.com/lib/5/index.js"  />
            <Script src="https://cdn.amcharts.com/lib/5/xy.js"  />
            <Script src="https://cdn.amcharts.com/lib/5/percent.js"  />
            <Script src="https://cdn.amcharts.com/lib/5/radar.js"  />
            <Script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"  />
            <Script src="https://cdn.amcharts.com/lib/5/map.js"  />
            <Script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"  />
            <Script src="https://cdn.amcharts.com/lib/5/geodata/continentsLow.js"  />
            <Script src="https://cdn.amcharts.com/lib/5/geodata/usaLow.js"  />
            <Script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZonesLow.js"  />
            <Script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZoneAreasLow.js" />
            <Script src="/static/plugins/custom/datatables/datatables.bundle.js"  />
            <Script src="/static/js/custom/widgets.js"  />
            <Script src="/static/js/custom/apps/chat/chat.js"  />
            <Script src="/static/js/custom/utilities/modals/upgrade-plan.js"  />
            <Script src="/static/js/custom/utilities/modals/create-app.js"  />
            <Script src="/static/js/custom/utilities/modals/new-target.js"  />
            <Script src="/static/js/custom/utilities/modals/users-search.js"  />
        </>
    );
};

export default LayoutScripts;